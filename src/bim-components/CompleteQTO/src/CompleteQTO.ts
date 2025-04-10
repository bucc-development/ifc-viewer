import * as OBC from "@thatopen/components";

export class CompleteQTO extends OBC.Component implements OBC.Disposable {
  static uuid = "663bebd3-ed4b-49fb-81ec-2be7c31ce2c2";
  enabled = true;
  onDisposed: OBC.Event<any> = new OBC.Event();

  constructor(components: OBC.Components) {
    super(components);
    this.components.add(CompleteQTO.uuid, this);
  }

  dispose() {}
}
