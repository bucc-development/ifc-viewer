import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";
import * as WEBIFC from "web-ifc";
// import { BUILDING_ELEMENT_TYPES } from "./BuildingTypes";

type CategoryTableGroupData = {
  data: {
    category?: string;
  };
  children?: CategoryTableGroupData[];
};

// type QTOTableGroupData = {
//   [modelUUID: string]: {
//     modelName: string;
//     elements: {
//       [expressID: string]: {
//         type: string;
//         name: string;
//         globalId: string;
//         category?: string;
//         psets: {
//           [psetName: string]: {
//             [propName: string]: any;
//           };
//         };
//         quantitysets: {
//           [psetName: string]: {
//             [propName: string]: any;
//           };
//         };
//       };
//     };
//   };
// };

export class CompleteQTO extends OBC.Component implements OBC.Disposable {
  static uuid = "663bebd3-ed4b-49fb-81ec-2be7c31ce2c2";
  enabled = true;
  onDisposed: OBC.Event<any> = new OBC.Event();
  private _categories: string[] = [];
  categoriesTable: BUI.Table | undefined;
  fullQTOTable: BUI.Table | undefined;
  private mainCategory = "Category";
  // private mainCategory = "Name";

  get categories(): string[] {
    return this._categories;
  }

  constructor(components: OBC.Components) {
    super(components);
    this.components.add(CompleteQTO.uuid, this);
  }

  resetCategories() {
    this._categories = [];
  }

  async getCategories() {
    this.resetCategories();
    const fragmentManager = this.components.get(OBC.FragmentsManager);
    const models = fragmentManager.groups.values();

    for (const model of models) {
      if (!model || !model.hasProperties) continue;

      const propertyIDs = model.getAllPropertiesIDs();
      if (!propertyIDs || propertyIDs.length === 0) continue;

      await OBC.IfcPropertiesUtils.getRelationMap(
        model,
        WEBIFC.IFCRELDEFINESBYPROPERTIES,
        async (setID) => {
          const set = await model.getProperties(setID);

          if (set?.type !== WEBIFC.IFCPROPERTYSET) return;
          await OBC.IfcPropertiesUtils.getPsetProps(
            model,
            setID,
            async (propertyID) => {
              const name = await OBC.IfcPropertiesUtils.getEntityName(
                model,
                propertyID,
              );

              if (!name.name) return;
              if (name.name === this.mainCategory) {
                const value = await OBC.IfcPropertiesUtils.getQuantityValue(
                  model,
                  propertyID,
                );
                if (!value.value) return;
                const valueAsString = value.value.toString();
                if (!this._categories.includes(valueAsString)) {
                  this._categories.push(valueAsString);
                }
              }
            },
          );
        },
      );
    }
    setTimeout(async () => {
      this.updateCategoriesTable();
    }, 50);
  }

  updateCategoriesTable() {
    if (!this.categoriesTable) return;

    const categoriesData: CategoryTableGroupData[] = [];

    // Sort categories alphabetically
    const sortedCategories = [...this._categories].sort((a, b) =>
      a.localeCompare(b),
    );

    // Create table data structure
    for (const category of sortedCategories) {
      categoriesData.push({
        data: {
          category,
        },
      });
    }

    this.categoriesTable.data = categoriesData;
  }

  // Work in progress
  async getCleanElementsJSON(category?: string) {
    const fragmentManager = this.components.get(OBC.FragmentsManager);
    const models = fragmentManager.groups.values();
    const result: {} = {};

    for (const model of models) {
      if (!model || !model.hasProperties) continue;
      const propertyIDs = model.getAllPropertiesIDs();
      if (!propertyIDs || propertyIDs.length === 0) continue;

      await OBC.IfcPropertiesUtils.getRelationMap(
        model,
        WEBIFC.IFCRELDEFINESBYPROPERTIES,
        async (setID) => {
          // const set = await model.getProperties(setID);
          await OBC.IfcPropertiesUtils.getPsetProps(
            model,
            setID,
            async (propertyID) => {
              // const name = await OBC.IfcPropertiesUtils.getEntityName(
              //   model,
              //   propertyID,
              // );
              const value = await OBC.IfcPropertiesUtils.getQuantityValue(
                model,
                propertyID,
              );
              if (!value.value) return;
              if (value.value.toString() === category) {
                console.log(
                  await OBC.IfcPropertiesUtils.getPsetProps(model, propertyID),
                );
              }
            },
          );
        },
      );
    }

    return result;
  }

  dispose() {
    this.resetCategories();
    this.categoriesTable = undefined;
    this.onDisposed.trigger();
    this.onDisposed.reset();
  }
}
