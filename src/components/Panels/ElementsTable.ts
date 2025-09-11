import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";
import { QTOTable } from "../../bim-components/CompleteQTO/src/Template";

export default (components: OBC.Components) => {
  const elementsQTOTable = QTOTable({ components });

  return BUI.Component.create<BUI.Panel>(() => {
    return BUI.html`
      <bim-panel>
        <bim-panel-section  
          name="categories"
          label="Quantity Take-Off Elements"
          icon="clarity:calculator-solid"
          fixed
        >
          ${elementsQTOTable}
        </bim-panel-section>
      </bim-panel>
    `;
  });
};
