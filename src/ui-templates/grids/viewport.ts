import * as OBC from "@thatopen/components";
import * as OBF from "@thatopen/components-front";
import * as BUI from "@thatopen/ui";
import { ViewerToolbarState, viewerToolbarTemplate } from "..";
import * as COMPONENTS from "../../bim-components";

type BottomToolbar = { name: "bottomToolbar"; state: ViewerToolbarState };
type PropertiesPanel = { name: "propertiesPanel"; state: COMPONENTS.PropertiesState };

type ViewportGridElements = [BottomToolbar, PropertiesPanel];

type ViewportGridLayouts = ["main", "properties"];

interface ViewportGridState {
  components: OBC.Components;
  world: OBC.World;
}

export const viewportGridTemplate: BUI.StatefullComponent<ViewportGridState> = (
  state
) => {
  const { components, world } = state;

  const elements: BUI.GridComponents<ViewportGridElements> = {
    propertiesPanel: { template: COMPONENTS.propertiesTemplate, initialState: { components } },
    bottomToolbar: {
      template: viewerToolbarTemplate,
      initialState: { components, world },
    },
  };

  const onCreated = (e?: Element): void => {
    if (!e) return;
    const grid = e as BUI.Grid<ViewportGridLayouts, ViewportGridElements>;
    grid.elements = elements;

    grid.layouts = {
      main: {
        template: `
          "empty" 1fr
          "bottomToolbar" auto
          /1fr
        `,
      },
      properties: {
        template: `
          "empty propertiesPanel" 1fr
          "bottomToolbar bottomToolbar" auto
          /1fr minmax(350px, 35%)
        `,
      },
    };

    // Switch layouts based on highlighter selection
    const highlighter = components.get(OBF.Highlighter);

    highlighter.events.select.onHighlight.add(() => {
      grid.layout = "properties";
    });

    highlighter.events.select.onClear.add(() => {
      grid.layout = "main";
    });
  };

  return BUI.html`<bim-grid ${BUI.ref(
    onCreated
  )} layout="main" floating></bim-grid>`;
};
