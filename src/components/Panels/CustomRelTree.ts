import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";
import { entityTypeTreeTemplate } from "../../bim-components/CustomTree";

// Example usage component
export const customRelTree = (components: OBC.Components) => {
  const entityTypeTree = entityTypeTreeTemplate({
    components,
    models: [],
    hoverHighlighterName: "hover",
    selectHighlighterName: "select",
  });

  // entityTypeTree.preserveStructureOnFilter = true;

  // const search = (e: Event) => {
  //   const input = e.target as BUI.TextInput;
  //   entityTypeTree.queryString = input.value;
  // };

  return BUI.Component.create<BUI.Panel>(() => {
    return BUI.html`
      <bim-panel>
        <bim-panel-section label="Entity Types" icon="ph:tree-structure-fill">
          ${entityTypeTree}
        </bim-panel-section>
      </bim-panel> 
      `;
  });
};

// <div style="display: flex; gap: 0.375rem;">
//   <bim-text-input @input=${search} vertical placeholder="Search..." debounce="200"></bim-text-input>
//   <bim-button style="flex: 0;" @click=${() => (entityTypeTree.expanded = !entityTypeTree.expanded)} icon="eva:expand-fill"></bim-button>
// </div>
