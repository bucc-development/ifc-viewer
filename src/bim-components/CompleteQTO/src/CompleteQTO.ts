import * as OBC from "@thatopen/components";
import * as FRAGS from "@thatopen/fragments";
import * as WEBIFC from "web-ifc";

export class CompleteQTO extends OBC.Component implements OBC.Disposable {
  static uuid = "663bebd3-ed4b-49fb-81ec-2be7c31ce2c2";
  enabled = true;
  onDisposed: OBC.Event<any> = new OBC.Event();

  constructor(components: OBC.Components) {
    super(components);
    this.components.add(CompleteQTO.uuid, this);
  }

  async getCategories() {
    const fragmentManager = this.components.get(OBC.FragmentsManager);
    const models = fragmentManager.groups.values();
    const ifcTypes = new Set<FRAGS.IfcProperties>();

    for (const model of models) {
      if (!model || !model.hasProperties) continue;

      const propertyIDs = model.getAllPropertiesIDs();
      if (!propertyIDs || propertyIDs.length === 0) continue;

      await OBC.IfcPropertiesUtils.getRelationMap(
        model,
        WEBIFC.IFCRELDEFINESBYPROPERTIES,
        async (setID, relatedIDs) => {
          const set = await model.getProperties(setID);
          if (set?.type !== WEBIFC.IFCPROPERTYSET) return;
          await OBC.IfcPropertiesUtils.getPsetProps(
            model,
            setID,
            async (propertyID) => {
              console.log(await model.getProperties(propertyID));
            },
          );
        },
      );
    }

    const ifcTypesArray = Array.from(ifcTypes);
    console.log("Unique IFC Types:", ifcTypesArray);
    return ifcTypesArray;
  }

  dispose() {}
}
