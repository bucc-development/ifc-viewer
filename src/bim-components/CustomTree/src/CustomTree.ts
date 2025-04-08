import * as FRAGS from "@thatopen/fragments";
import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import * as WEBIFC from "web-ifc";

export interface CustomTreeState {
  models: Iterable<FRAGS.FragmentsGroup>;
  selectHighlighterName?: string;
  hoverHighlighterName?: string;
  inverseAttributes?: OBC.InverseAttribute[];
  expressID?: number;
}

export class CustomTree extends OBC.Component implements OBC.Disposable {
  static uuid = "bc7bbfff-1e0b-4baa-9e07-78a2ef5cb56c";
  enabled = true;
  onDisposed = new OBC.Event();
  table?: BUI.Table;

  private _state: CustomTreeState = {
    models: [],
    inverseAttributes: ["IsDecomposedBy", "ContainsElements"],
  };

  constructor(components: OBC.Components) {
    super(components);
    this.components.add(CustomTree.uuid, this);
  }

  async update(state: Partial<CustomTreeState>) {
    this._state = { ...this._state, ...state };
    await this.processModels();
  }

  private async processModels() {
    if (!this.table) return;
    if (!this._state.models) return;

    const rows = await this.computeElementsRowData();

    this.table.data = rows;
  }

  private getElementTypeName(type: number): string {
    return OBC.IfcCategoryMap[type] || "Unknown";
  }

  private async getElementLevel(
    model: FRAGS.FragmentsGroup,
    expressID: number,
  ): Promise<string> {
    const entityProps = await model.getProperties(expressID);
    if (!entityProps) return "Unknown Level";

    // First try direct containment
    if (entityProps.ContainedInStructure?.value) {
      const containerId = entityProps.ContainedInStructure.value;
      const containerProps = await model.getProperties(containerId);
      if (containerProps) {
        return containerProps.Name?.value || `Level ${containerId}`;
      }
    }

    // Alternative approach using inverse relationships
    const indexer = this.components.get(OBC.IfcRelationsIndexer);
    const containers = indexer.getEntityRelations(
      model,
      expressID,
      "ContainsElements",
    );
    if (containers && containers.length > 0) {
      const containerProps = await model.getProperties(containers[0]);
      if (containerProps) {
        return containerProps.Name?.value || `Level ${containers[0]}`;
      }
    }

    return "Unknown Level";
  }

  private async groupElementsByType(model: FRAGS.FragmentsGroup) {
    const elementsByType: Record<
      string,
      { expressID: number; name?: string; level?: string }[]
    > = {};
    const indexer = this.components.get(OBC.IfcRelationsIndexer);
    const inverseAttributes = this._state.inverseAttributes || [
      "IsDecomposedBy",
      "ContainsElements",
    ];

    const projectAttrs = await model.getAllPropertiesOfType(WEBIFC.IFCPROJECT);
    if (!projectAttrs) return elementsByType;

    const projectID = Object.values(projectAttrs)[0].expressID;
    const visited = new Set<number>();

    const collectElements = async (expressID: number) => {
      if (visited.has(expressID)) return;
      visited.add(expressID);

      const entityProps = await model.getProperties(expressID);
      if (!entityProps) return;

      const { type } = entityProps;
      const typeName = this.getElementTypeName(type);

      // Skip only pure spatial elements
      if (
        [WEBIFC.IFCPROJECT, WEBIFC.IFCSITE, WEBIFC.IFCBUILDING].includes(type)
      ) {
        for (const attr of inverseAttributes) {
          const relations = indexer.getEntityRelations(model, expressID, attr);
          if (!relations) continue;
          for (const id of relations) await collectElements(id);
        }
        return;
      }

      // For building storeys, process them but also include in the list
      if (type === WEBIFC.IFCBUILDINGSTOREY) {
        if (!elementsByType["Building Storey"])
          elementsByType["Building Storey"] = [];
        elementsByType["Building Storey"].push({
          expressID,
          name: entityProps.Name?.value,
          level: entityProps.Name?.value || `Level ${expressID}`,
        });
      } else {
        // Regular element
        const level = await this.getElementLevel(model, expressID);
        if (!elementsByType[typeName]) elementsByType[typeName] = [];
        elementsByType[typeName].push({
          expressID,
          name: entityProps.Name?.value,
          level,
        });
      }

      // Process children
      for (const attr of inverseAttributes) {
        const relations = indexer.getEntityRelations(model, expressID, attr);
        if (!relations) continue;
        for (const id of relations) await collectElements(id);
      }
    };

    await collectElements(projectID);
    return elementsByType;
  }

  private createElementTypeRows(
    model: FRAGS.FragmentsGroup,
    elementsByType: Record<
      string,
      { expressID: number; name?: string; level?: string }[]
    >,
  ): BUI.TableGroupData[] {
    const rows: BUI.TableGroupData[] = [];

    for (const [typeName, elements] of Object.entries(elementsByType)) {
      if (elements.length === 0) continue;

      const typeRow: BUI.TableGroupData = {
        data: { Entity: typeName, modelID: model.uuid },
        children: [],
      };

      const elementsByLevel: Record<
        string,
        { expressID: number; name?: string }[]
      > = {};
      for (const element of elements) {
        const levelName = element.level || "Unknown Level";
        if (!elementsByLevel[levelName]) elementsByLevel[levelName] = [];
        elementsByLevel[levelName].push({
          expressID: element.expressID,
          name: element.name,
        });
      }

      for (const [levelName, levelElements] of Object.entries(
        elementsByLevel,
      )) {
        const levelRow: BUI.TableGroupData = {
          data: { Entity: levelName, modelID: model.uuid },
          children: levelElements.map((element) => ({
            data: {
              Entity: element.name || `Element ${element.expressID}`,
              modelID: model.uuid,
              expressID: element.expressID,
            },
          })),
        };
        typeRow.children?.push(levelRow);
      }

      rows.push(typeRow);
    }

    return rows;
  }

  private async computeElementsRowData() {
    if (!this._state.models) return [];

    const rows: BUI.TableGroupData[] = [];
    for (const model of this._state.models) {
      const modelData: BUI.TableGroupData = {
        data: { Entity: model.name || model.uuid },
        children: [],
      };

      if (this._state.expressID) {
        // Handle specific expressID case
        const elementProps = await model.getProperties(this._state.expressID);
        if (!elementProps) continue;

        const indexer = this.components.get(OBC.IfcRelationsIndexer);
        const childElements = [];
        for (const attr of this._state.inverseAttributes || []) {
          const relations = indexer.getEntityRelations(
            model,
            this._state.expressID,
            attr,
          );
          if (!relations) continue;
          for (const id of relations) {
            const props = await model.getProperties(id);
            if (props)
              childElements.push({
                expressID: id,
                type: props.type,
                name: props.Name?.value,
              });
          }
        }

        const elementsByType: Record<
          string,
          { expressID: number; name?: string }[]
        > = {};
        for (const element of childElements) {
          const typeName = this.getElementTypeName(element.type);
          if (!elementsByType[typeName]) elementsByType[typeName] = [];
          elementsByType[typeName].push({
            expressID: element.expressID,
            name: element.name,
          });
        }

        for (const [typeName, elements] of Object.entries(elementsByType)) {
          modelData.children?.push({
            data: { Entity: typeName, modelID: model.uuid },
            children: elements.map((element) => ({
              data: {
                Entity: element.name || `Element ${element.expressID}`,
                modelID: model.uuid,
                expressID: element.expressID,
              },
            })),
          });
        }
      } else {
        // Process entire model
        const elementsByType = await this.groupElementsByType(model);
        modelData.children = this.createElementTypeRows(model, elementsByType);
      }

      rows.push(modelData);
    }

    return rows;
  }

  async dispose() {
    this.table = undefined;
    this.onDisposed.trigger();
    this.onDisposed.reset();
  }
}
