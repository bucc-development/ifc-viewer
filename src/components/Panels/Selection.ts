import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import * as OBF from "@thatopen/components-front";
import * as CUI from "@thatopen/ui-obc";
import { AppManager } from "../../bim-components";
import { SimpleQTO } from "../../bim-components/SimpleQTO";

export default (components: OBC.Components) => {
  const fragments = components.get(OBC.FragmentsManager);
  const highlighter = components.get(OBF.Highlighter);
  const appManager = components.get(AppManager);
  const viewportGrid = appManager.grids.get("viewport");
  // let QTOLayout = false;

  const [propsTable, updatePropsTable] = CUI.tables.elementProperties({
    components,
    fragmentIdMap: {},
  });

  propsTable.preserveStructureOnFilter = true;
  fragments.onFragmentsDisposed.add(() => updatePropsTable());

  highlighter.events.select.onHighlight.add(async (fragmentIdMap) => {
    const simpleQto = components.get(SimpleQTO);

    propsTable.expanded = true;
    updatePropsTable({ fragmentIdMap });
    await simpleQto.sumQuantities(fragmentIdMap);
  });

  highlighter.events.select.onClear.add(() => {
    updatePropsTable({ fragmentIdMap: {} });
    const simpleQto = components.get(SimpleQTO);
    simpleQto.resetQuantities();

    setTimeout(() => {
      if (!viewportGrid) return;
      if (Object.keys(highlighter.selection.select).length === 0) {
        viewportGrid.layout = "main";
      }
    }, 5);
  });

  const search = (e: Event) => {
    const input = e.target as BUI.TextInput;
    propsTable.queryString = input.value;
  };

  const toggleExpanded = () => {
    propsTable.expanded = !propsTable.expanded;
  };

  return BUI.Component.create<BUI.Panel>(() => {
    return BUI.html`
      <bim-panel>
        <bim-panel-section name="selection" label="Selection Information" icon="solar:document-bold" fixed>
          <div style="display: flex; gap: 0.375rem;">
            <bim-text-input @input=${search} vertical placeholder="Search..." debounce="200"></bim-text-input>
            <bim-button style="flex: 0;" @click=${toggleExpanded} icon="eva:expand-fill"></bim-button>
            <bim-button style="flex: 0;" @click=${() => propsTable.downloadData("ElementData", "tsv")} icon="ph:export-fill" tooltip-title="Export Data" tooltip-text="Export the shown properties to TSV."></bim-button>
          </div>
          ${propsTable}
        </bim-panel-section>
      </bim-panel> 
    `;
  });
};
