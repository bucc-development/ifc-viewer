import * as BUI from "@thatopen/ui";
import { completeQTOPanel } from "../../bim-components/CompleteQTO/src/Template";

export default () => {
  return BUI.Component.create<BUI.Panel>(() => {
    return BUI.html`
        <bim-panel>
            ${completeQTOPanel}
        </bim-panel>
      `;
  });
};
