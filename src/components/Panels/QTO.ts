import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";
import * as OBF from "@thatopen/components-front";
import { qtoTool } from "../../bim-components/SimpleQTO copy/src/Template";

export default (components: OBC.Components) => {
  const highlighter = components.get(OBF.Highlighter);
  const qtoTable = qtoTool({ components });

  highlighter.events.select.onHighlight.add(() => {
    qtoTable.expanded = true;
  });

  const search = (e: Event) => {
    const input = e.target as BUI.TextInput;
    qtoTable.queryString = input.value;
  };

  const toggleExpanded = () => {
    qtoTable.expanded = !qtoTable.expanded;
  };

  return BUI.Component.create<BUI.Panel>(() => {
    return BUI.html`
        <bim-panel>
            <bim-panel-section
             name="qto"
             label="Quantities"
             icon="solar:document-bold"
             fixed
            >
            <div style="display: flex; gap: 0.375rem;">
            <bim-text-input @input=${search} vertical placeholder="Search..." debounce="200"></bim-text-input>
            <bim-button style="flex: 0;" @click=${toggleExpanded} icon="eva:expand-fill"></bim-button>
            <bim-button style="flex: 0;" @click=${() => qtoTable.downloadData("selection-quantities")} icon="ph:export-fill" tooltip-title="Export Data" tooltip-text="Export the shown properties to TSV."></bim-button>
          </div>
                ${qtoTable}
            </bim-panel-section>
        </bim-panel>
      `;
  });
};
