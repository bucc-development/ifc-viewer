import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";
import { categoriesTable } from "../../bim-components/CompleteQTO/src/Template";

export default (components: OBC.Components) => {
  const completeQTOTable = categoriesTable({ components });

  return BUI.Component.create<BUI.Panel>(() => {
    return BUI.html`
      <bim-panel>
        <bim-panel-section  
          name="categories"
          label="Pick a Category for the Quantity Take-Off"
          icon="clarity:calculator-solid"
          fixed
        >
          ${completeQTOTable}
        </bim-panel-section>
      </bim-panel>
    `;
  });
};
