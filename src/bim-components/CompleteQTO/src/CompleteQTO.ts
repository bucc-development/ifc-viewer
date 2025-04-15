import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";
import * as WEBIFC from "web-ifc";

type CategoryTableGroupData = {
  data: {
    category?: string;
  };
  children?: CategoryTableGroupData[];
};

export class CompleteQTO extends OBC.Component implements OBC.Disposable {
  static uuid = "663bebd3-ed4b-49fb-81ec-2be7c31ce2c2";
  enabled = true;
  onDisposed: OBC.Event<any> = new OBC.Event();
  private _categories: string[] = [];
  categoriesTable: BUI.Table | undefined;

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
    const mainCategory = "Name";
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
              if (name.name === mainCategory) {
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
    console.log("Categories updated:", this._categories);
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
  dispose() {
    this.resetCategories();
    this.categoriesTable = undefined;
    this.onDisposed.trigger();
    this.onDisposed.reset();
  }
}
