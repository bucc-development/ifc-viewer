import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import { appIcons } from "../../globals";
import { customPanelTemplate } from "../../ui-templates/panels/custom-panel";

export interface BCFManagerState {
  components: OBC.Components;
  bcfFiles?: Array<{ name: string; url: string }>;
  world?: OBC.World;
}

export const bcfManagerTemplate: BUI.StatefullComponent<BCFManagerState> = (
  state
) => {
  const { components } = state;

  return customPanelTemplate({
    components,
    icon: appIcons.MODEL,
    title: "BCF Issues",
    content: BUI.html`
      <div style="display: flex; justify-content: center; align-items: center; height: 100%; color: var(--bim-ui_bg-contrast-60); font-style: italic; font-size: 0.8rem;">
        Coming soon...
      </div>
    `,
    className: "grayedOut"
  });
};
