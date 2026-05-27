import * as BUI from "@thatopen/ui";

export interface GridSidebarState {
  grid: BUI.Grid<any, any>;
  compact: boolean;
  layoutIcons: Record<string, string>;
}

export const gridSidebarTemplate: BUI.StatefullComponent<GridSidebarState> = (
  _state,
  _update,
) => {
  // Render a zero-width sidebar so the left panel is removed visually
  // but the grid areas/layout remain intact for other panels.
  return BUI.html`
    <div style="grid-area: sidebar; width: 0; min-width: 0; padding: 0; border-right: none; overflow: hidden;"></div>
  `;
};
