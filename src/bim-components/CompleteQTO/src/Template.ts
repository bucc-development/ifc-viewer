import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";
import { CompleteQTO } from "./CompleteQTO";

export interface CompleteQTOUIState {
  components: OBC.Components;
}

export const categoriesTable = (state: CompleteQTOUIState) => {
  const { components } = state;
  const completeQto = components.get(CompleteQTO);

  const categoriesTable = BUI.Component.create<BUI.Table>(() => {
    return BUI.html`
      <bim-table></bim-table>
    `;
  });

  categoriesTable.headersHidden = true;
  completeQto.categoriesTable = categoriesTable;

  completeQto.onDisposed.add(() => {
    categoriesTable.remove();
  });

  return categoriesTable;
};
