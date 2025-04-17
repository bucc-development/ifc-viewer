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
  categoriesTable.addEventListener("rowcreated", (e) => {
    const { row } = e.detail;
    const rowData = row.data as { category?: string };

    // Hover effect
    row.onmouseover = () => {
      row.style.backgroundColor = "var(--bim-ui_bg-contrast-20)";
      row.style.cursor = "pointer";
    };

    row.onmouseout = () => {
      row.style.backgroundColor = "";
    };

    // Click handler
    row.onclick = () => {
      if (rowData.category) {
        console.log("Category clicked:", rowData.category);
        // Add more click logic here
        completeQto.getCleanElementsJSON(rowData.category);
      }
    };
  });

  completeQto.categoriesTable = categoriesTable;

  completeQto.onDisposed.add(() => {
    categoriesTable.remove();
  });

  return categoriesTable;
};

export const QTOTable = (state: CompleteQTOUIState) => {
  const { components } = state;
  const completeQto = components.get(CompleteQTO);

  const fullQTOTable = BUI.Component.create<BUI.Table>(() => {
    return BUI.html`
      <bim-table></bim-table>
    `;
  });

  completeQto.fullQTOTable = fullQTOTable;

  completeQto.onDisposed.add(() => {
    fullQTOTable.remove();
  });

  return fullQTOTable;
};
