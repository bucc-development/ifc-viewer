import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";
import * as FRAGS from "@thatopen/fragments";
import * as WEBIFC from "web-ifc";

type QtoResult = {
  [setName: string]: {
    [qtoName: string]: {
      value: number;
      unit: string;
    };
  };
};

type TableGroupData = {
  data: {
    Set?: string;
    QTO?: string;
    Value?: number;
    Unit?: string;
  };
  children?: TableGroupData[];
};

export class SimpleQTO extends OBC.Component implements OBC.Disposable {
  static uuid = "7ec21568-e809-4392-a810-50b16b3777c4";
  enabled = true;
  onDisposed: OBC.Event<any> = new OBC.Event();
  private _qtoResult: QtoResult = {};
  table: BUI.Table | undefined;

  constructor(components: OBC.Components) {
    super(components);
    this.components.add(SimpleQTO.uuid, this);
  }

  resetQuantities() {
    this._qtoResult = {};
  }

  private detectUnit(qtoName: string): string {
    const lowerName = qtoName.toLowerCase();

    if (lowerName.includes("area")) return "m²";
    if (lowerName.includes("volume")) return "m³";
    if (
      lowerName.includes("width") ||
      lowerName.includes("length") ||
      lowerName.includes("height") ||
      lowerName.includes("perimeter") ||
      lowerName.includes("depth")
    )
      return "m";

    // Default unit for other quantities
    return "-";
  }

  async sumQuantities(fragmentIdMap: FRAGS.FragmentIdMap) {
    this.resetQuantities();

    const fragmentManager = this.components.get(OBC.FragmentsManager);
    const modelIdMap = fragmentManager.getModelIdMap(fragmentIdMap);

    for (const modelId in modelIdMap) {
      const model = fragmentManager.groups.get(modelId);
      if (!model || !model.hasProperties) continue;

      for (const fragmentID in fragmentIdMap) {
        const expressIDs = fragmentIdMap[fragmentID];
        const indexer = this.components.get(OBC.IfcRelationsIndexer);

        for (const id of expressIDs) {
          const sets = indexer.getEntityRelations(model, id, "IsDefinedBy");
          if (!sets) continue;

          for (const expressID of sets) {
            const set = await model.getProperties(expressID);
            const { name: setName } =
              await OBC.IfcPropertiesUtils.getEntityName(model, expressID);

            if (set?.type !== WEBIFC.IFCELEMENTQUANTITY || !setName) continue;

            if (!(setName in this._qtoResult)) {
              this._qtoResult[setName] = {};
            }

            await OBC.IfcPropertiesUtils.getQsetQuantities(
              model,
              expressID,
              async (qtoID) => {
                const { name: qtoName } =
                  await OBC.IfcPropertiesUtils.getEntityName(model, qtoID);
                const { value } = await OBC.IfcPropertiesUtils.getQuantityValue(
                  model,
                  qtoID,
                );

                if (!qtoName || value === undefined) return;

                const unit = this.detectUnit(qtoName);

                if (!(qtoName in this._qtoResult[setName])) {
                  this._qtoResult[setName][qtoName] = { value: 0, unit };
                }
                if (!value) return;
                this._qtoResult[setName][qtoName].value += value;
              },
            );
          }
        }
      }
    }
    setTimeout(async () => {
      this.updateTable();
    }, 50);
  }

  updateTable() {
    if (!this.table) return;

    const tableData: TableGroupData[] = [];
    for (const [set, quantities] of Object.entries(this._qtoResult)) {
      const children: TableGroupData[] = [];

      for (const [qto, data] of Object.entries(quantities)) {
        children.push({
          data: {
            QTO: qto,
            Value: data.value,
            Unit: data.unit,
          },
        });
      }

      // Sort quantities by name for better organization
      children.sort((a, b) =>
        (a.data.QTO || "").localeCompare(b.data.QTO || ""),
      );

      tableData.push({
        data: { Set: set },
        children,
      });
    }

    // Sort sets by name
    tableData.sort((a, b) =>
      (a.data.Set || "").localeCompare(b.data.Set || ""),
    );

    this.table.data = tableData;
  }

  async dispose() {
    this.resetQuantities();
    this.table = undefined;
    this.onDisposed.trigger();
    this.onDisposed.reset();
  }
}
