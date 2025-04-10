import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";
import { customTreeTemplate } from "../../bim-components/CustomTree";

// Example usage component
export const customRelTree = (components: OBC.Components) => {
  const customTree = customTreeTemplate({
    components,
    models: [],
    hoverHighlighterName: "hover",
    selectHighlighterName: "select",
  });

  return BUI.Component.create<BUI.Panel>(() => {
    return BUI.html`
      <bim-panel>
        <bim-panel-section label="Entity Types" icon="ph:tree-structure-fill">
          ${customTree}
        </bim-panel-section>
      </bim-panel>
    `;
  });
};
