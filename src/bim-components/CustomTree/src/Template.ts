import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import * as OBF from "@thatopen/components-front";
import * as FRAGS from "@thatopen/fragments";
import { CustomTree } from "./CustomTree";

export interface CustomTreeUIState {
  components: OBC.Components;
  models?: Iterable<FRAGS.FragmentsGroup>;
  selectHighlighterName?: string;
  hoverHighlighterName?: string;
}

interface CustomTreeRowData {
  Entity: string;
  modelID?: string;
  expressID?: number;
}

export const customTreeTemplate = (state: CustomTreeUIState) => {
  const { components } = state;
  const customTree = components.get(CustomTree);

  const table = BUI.Component.create<BUI.Table>(() => {
    return BUI.html`<bim-table></bim-table>`;
  });

  // Configure table
  table.hiddenColumns = ["modelID", "expressID"];
  table.columns = ["Entity"];
  table.headersHidden = true;

  // Apply data transform with proper typing
  table.dataTransform = {
    Entity: (value: string | number | boolean, data: BUI.TableRowData) => {
      if (typeof value === "string") return value || "Unnamed";
      if (typeof value === "number") return value.toString();
      return value ? "Yes" : "No";
    },
  };

  // Set up event listeners for interaction with proper type guards
  table.addEventListener("rowcreated", (e) => {
    const { row } = e.detail;
    const highlighter = components.get(OBF.Highlighter);
    const fragments = components.get(OBC.FragmentsManager);

    // Type-safe data extraction
    const rowData = row.data as unknown as CustomTreeRowData;
    const { modelID, expressID } = rowData;

    if (!modelID || expressID === undefined) return;

    const model = fragments.groups.get(modelID);
    if (!model) return;

    const fragmentIDMap = model.getFragmentMap([expressID]);
    if (!fragmentIDMap || Object.keys(fragmentIDMap).length === 0) return;

    const selectHighlighterName = state.selectHighlighterName ?? "select";
    const hoverHighlighterName = state.hoverHighlighterName ?? "hover";

    row.onmouseover = () => {
      row.style.backgroundColor = "var(--bim-ui_bg-contrast-20)";
      highlighter.highlightByID(
        hoverHighlighterName,
        fragmentIDMap,
        true,
        false,
        highlighter.selection[selectHighlighterName] ?? {},
      );
    };

    row.onmouseout = () => {
      row.style.backgroundColor = "";
      highlighter.clear(hoverHighlighterName);
    };

    row.onclick = () => {
      highlighter.highlightByID(
        selectHighlighterName,
        fragmentIDMap,
        true,
        true,
      );
    };
  });

  // Initialize the tree with the provided state
  customTree.table = table;
  customTree.update({
    models: state.models,
    selectHighlighterName: state.selectHighlighterName,
    hoverHighlighterName: state.hoverHighlighterName,
  });

  return table;
};
