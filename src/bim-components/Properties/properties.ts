import * as BUI from "@thatopen/ui";
import * as CUI from "@thatopen/ui-obc";
import * as OBC from "@thatopen/components";
import * as OBF from "@thatopen/components-front";
import { appIcons } from "../../globals";
import { customPanelTemplate } from "../../ui-templates/panels/custom-panel";
import styles from "./properties.module.scss";

export interface PropertiesState {
    components: OBC.Components;
}

export const propertiesTemplate: BUI.StatefullComponent<PropertiesState> = (
    state
) => {
    const { components } = state;

    const highlighter = components.get(OBF.Highlighter);

    const [propsTable, updatePropsTable] = CUI.tables.itemsData({
        components,
        modelIdMap: {},
    });

    propsTable.preserveStructureOnFilter = true;
    propsTable.headersHidden = true;
    propsTable.minColWidth = "2rem";
    propsTable.expanded = true;

    highlighter.events.select.onHighlight.add((modelIdMap) => {
        setTimeout(() => {
            updatePropsTable({ modelIdMap });
        }, 10);
    });

    highlighter.events.select.onClear.add(() => {
        updatePropsTable({ modelIdMap: {} });
    });

    const currentSelection = highlighter.selection.select;
    if (currentSelection && Object.keys(currentSelection).length > 0) {
        setTimeout(() => {
            updatePropsTable({ modelIdMap: currentSelection });
        }, 10);
    }

    const search = (e: Event): void => {
        const input = e.target as BUI.TextInput;
        propsTable.queryString = input.value;
    };

    const toggleExpanded = (): void => {
        propsTable.expanded = !propsTable.expanded;
    };

    const content = BUI.html`
    <div class="${styles.container}">
      <div class="${styles.controls}">
        <bim-text-input @input=${search} vertical placeholder="Search..." debounce="200"></bim-text-input>
        <bim-button style="flex: 0;" @click=${toggleExpanded} icon="${appIcons.EXPAND}"></bim-button>
        <bim-button style="flex: 0;" @click=${() =>
            propsTable.downloadData("ElementData", "tsv")} icon="${appIcons.EXPORT}" tooltip-title="Export Data" tooltip-text="Export the shown properties to TSV."></bim-button>
      </div>
      <div class="${styles['table-wrapper']}" style="font-size: 0.85rem;">
        ${propsTable}
      </div>
    </div>
  `;

    return customPanelTemplate({
        components,
        icon: appIcons.TASK,
        title: "Properties",
        content,
    });
};
