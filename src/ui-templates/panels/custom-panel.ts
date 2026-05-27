import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import styles from "./custom-panel.module.scss";

export interface CustomPanelState {
  components: OBC.Components;
  icon: string;
  title: string;
  content: ReturnType<typeof BUI.html> | HTMLElement;
  className?: string;
}

export const customPanelTemplate = (
  state: CustomPanelState
): ReturnType<typeof BUI.html> => {
  const { icon, title, content } = state;

  return BUI.html`
    <div class="${styles.customPanel} ${state.className ?? ""}">
      <div class="${styles.customPanelTitle}">
        ${icon ? BUI.html`<bim-icon icon="${icon}"></bim-icon>` : ""}
        ${title}
      </div>
      <div class="${styles.customPanelContent}">
        ${content}
      </div>
    </div>
  `;
};
