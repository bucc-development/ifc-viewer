import * as FRAGS from "@thatopen/fragments";
import * as OBC from "@thatopen/components";
import * as OBF from "@thatopen/components-front";
import * as BUI from "@thatopen/ui";
import * as WEBIFC from "web-ifc";

export interface EntityTypeTreeUIState {
  components: OBC.Components;
  models: Iterable<FRAGS.FragmentsGroup>;
  selectHighlighterName?: string;
  hoverHighlighterName?: string;
  inverseAttributes?: OBC.InverseAttribute[];
  expressID?: number;
}

// Helper function to find the level of an entity
const findEntityLevel = async (
  model: FRAGS.FragmentsGroup,
  expressID: number,
): Promise<string> => {
  // Get current entity properties
  const entityAttrs = await model.getProperties(expressID);
  if (!entityAttrs) return "Unknown";

  // Check if this is a storey
  if (entityAttrs.type === WEBIFC.IFCBUILDINGSTOREY) {
    return entityAttrs.Name?.value || "Unknown Level";
  }

  // If we find a level property, use it
  if (entityAttrs.ContainedInStructure?.value?.[0]?.RelatingStructure?.value) {
    const storeyID =
      entityAttrs.ContainedInStructure.value[0].RelatingStructure.value;
    const storeyProps = await model.getProperties(storeyID);
    if (storeyProps && storeyProps.Name?.value) {
      return storeyProps.Name.value;
    }
  }

  return "Unassigned";
};

// Main function to collect all entities by type
const collectEntitiesByType = async (
  components: OBC.Components,
  model: FRAGS.FragmentsGroup,
  inverseAttributes: OBC.InverseAttribute[],
) => {
  const indexer = components.get(OBC.IfcRelationsIndexer);
  const entityTypeMap: Record<
    string,
    Array<{ expressID: number; level: string; name: string }>
  > = {};

  // First, get the project
  const projectAttrs = await model.getAllPropertiesOfType(WEBIFC.IFCPROJECT);
  if (!projectAttrs || Object.keys(projectAttrs).length === 0)
    return entityTypeMap;

  const projectExpressID = Object.values(projectAttrs)[0].expressID;

  // Process all entities recursively to build the type map
  const processEntities = async (expressID: number) => {
    // Get entity properties
    const entityAttrs = await model.getProperties(expressID);
    if (!entityAttrs) return;

    const { type } = entityAttrs;
    const entityType = OBC.IfcCategoryMap[type] || type;

    // Skip non-physical elements like relations
    if (entityType.startsWith("IfcRel")) return;

    // Get entity level
    const level = await findEntityLevel(model, expressID);

    // Add entity to the map
    if (!entityTypeMap[entityType]) {
      entityTypeMap[entityType] = [];
    }

    entityTypeMap[entityType].push({
      expressID,
      level,
      name: entityAttrs.Name?.value || `${entityType}_${expressID}`,
    });

    // Process relations
    for (const attrName of inverseAttributes) {
      const relations = indexer.getEntityRelations(model, expressID, attrName);
      if (!relations) continue;

      for (const id of relations) {
        await processEntities(id);
      }
    }
  };

  // Start recursion from project
  await processEntities(projectExpressID);

  return entityTypeMap;
};

// Format entities into table rows
const formatEntityRows = (
  model: FRAGS.FragmentsGroup,
  entityTypeMap: Record<
    string,
    Array<{ expressID: number; level: string; name: string }>
  >,
): BUI.TableGroupData[] => {
  const rows: BUI.TableGroupData[] = [];

  // For each entity type
  for (const entityType in entityTypeMap) {
    const entities = entityTypeMap[entityType];

    // Create the entity type row
    const entityTypeRow: BUI.TableGroupData = {
      data: {
        Entity: entityType,
        modelID: model.uuid,
        relations: JSON.stringify(entities.map((e) => e.expressID)),
      },
      children: [],
    };

    // Group entities by level
    const entitiesByLevel: Record<
      string,
      Array<{ expressID: number; name: string }>
    > = {};

    for (const entity of entities) {
      const levelName = entity.level;

      if (!entitiesByLevel[levelName]) {
        entitiesByLevel[levelName] = [];
      }

      entitiesByLevel[levelName].push({
        expressID: entity.expressID,
        name: entity.name,
      });
    }

    // Create level rows
    for (const levelName in entitiesByLevel) {
      const levelEntities = entitiesByLevel[levelName];

      const levelRow: BUI.TableGroupData = {
        data: {
          Entity: levelName,
          modelID: model.uuid,
          relations: JSON.stringify(levelEntities.map((e) => e.expressID)),
        },
        children: [],
      };

      // Add entity rows under the level
      for (const entity of levelEntities) {
        const entityRow: BUI.TableGroupData = {
          data: {
            Entity: entity.name,
            modelID: model.uuid,
            expressID: entity.expressID,
            relations: "[]",
          },
        };

        levelRow.children!.push(entityRow);
      }

      entityTypeRow.children!.push(levelRow);
    }

    rows.push(entityTypeRow);
  }

  return rows;
};

const computeRowData = async (
  components: OBC.Components,
  models: Iterable<FRAGS.FragmentsGroup>,
  inverseAttributes: OBC.InverseAttribute[],
  expressID?: number,
) => {
  const rows: BUI.TableGroupData[] = [];

  for (const model of models) {
    let entityTypeMap;

    // Use provided expressID or get project ID
    if (expressID) {
      entityTypeMap = await collectEntitiesByType(
        components,
        model,
        inverseAttributes,
      );
    } else {
      entityTypeMap = await collectEntitiesByType(
        components,
        model,
        inverseAttributes,
      );
    }

    const modelRow: BUI.TableGroupData = {
      data: {
        Entity: model.name !== "" ? model.name : model.uuid,
      },
      children: formatEntityRows(model, entityTypeMap),
    };

    rows.push(modelRow);
  }

  return rows;
};

let table: BUI.Table;

const getRowFragmentIdMap = (components: OBC.Components, rowData: any) => {
  const fragments = components.get(OBC.FragmentsManager);
  const { modelID, expressID, relations } = rowData as {
    modelID: string;
    expressID: number;
    relations: string;
  };
  if (!modelID) return null;
  const model = fragments.groups.get(modelID);
  if (!model) return null;
  const fragmentIDMap = model.getFragmentMap([
    expressID,
    ...JSON.parse(relations ?? "[]"),
  ]);
  return fragmentIDMap;
};

export const entityTypeTreeTemplate = (state: EntityTypeTreeUIState) => {
  const { components, models, expressID } = state;

  const selectHighlighterName = state.selectHighlighterName ?? "select";
  const hoverHighlighterName = state.hoverHighlighterName ?? "hover";

  if (!table) {
    table = document.createElement("bim-table");
    table.hiddenColumns = ["modelID", "expressID", "relations"];
    table.columns = ["Entity", "Name"];
    table.headersHidden = true;

    table.addEventListener("cellcreated", ({ detail }) => {
      const { cell } = detail;
      if (cell.column === "Entity" && !("Name" in cell.rowData)) {
        cell.style.gridColumn = "1 / -1";
      }
    });
  }

  table.addEventListener("rowcreated", (e) => {
    e.stopImmediatePropagation();
    const { row } = e.detail;
    const highlighter = components.get(OBF.Highlighter);
    const fragmentIDMap = getRowFragmentIdMap(components, row.data);
    if (!(fragmentIDMap && Object.keys(fragmentIDMap).length !== 0)) return;
    row.onmouseover = () => {
      if (!hoverHighlighterName) return;
      row.style.backgroundColor = "var(--bim-ui_bg-contrast-20)";
      highlighter.highlightByID(
        hoverHighlighterName,
        fragmentIDMap,
        true,
        false,
        highlighter.selection[selectHighlighterName] ?? {},
      );
    };

    row.onmouseout = () => {
      row.style.backgroundColor = "";
      highlighter.clear(hoverHighlighterName);
    };

    row.onclick = () => {
      if (!selectHighlighterName) return;
      highlighter.highlightByID(
        selectHighlighterName,
        fragmentIDMap,
        true,
        true,
      );
    };
  });

  const inverseAttributes: OBC.InverseAttribute[] = state.inverseAttributes ?? [
    "IsDecomposedBy",
    "ContainsElements",
  ];

  computeRowData(components, models, inverseAttributes, expressID).then(
    (data) => (table.data = data),
  );

  return BUI.html`${table}`;
};

// Example usage:
// const tree = entityTypeTreeTemplate({
//   components: components,
//   models: components.get(OBC.FragmentsManager).groups.values(),
//   hoverHighlighterName: "hover",
//   selectHighlighterName: "select"
// });
