import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";
import { completeQTOPanel } from "../../bim-components/CompleteQTO/src/Template";

export default (components: OBC.Components) => {
  const completeQTOPanelSection = completeQTOPanel({ components });

  return BUI.Component.create<BUI.Panel>(() => {
    return BUI.html`
        <bim-panel>
            ${completeQTOPanelSection}
        </bim-panel>
      `;
  });
};
