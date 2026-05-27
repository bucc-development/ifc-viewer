import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";
import * as TEMPLATES from "..";
import * as COMPONENTS from "../../bim-components";
import {
  CONTENT_GRID_GAP,
  CONTENT_GRID_ID,
  SMALL_COLUMN_WIDTH,
} from "../../globals";

type Viewer = "viewer";

type Models = {
  name: "models";
  state: COMPONENTS.LoadedModelsState;
};

type BCFManager = {
  name: "bcfManager";
  state: COMPONENTS.BCFManagerState;
};

type Viewpoints = { name: "viewpoints"; state: TEMPLATES.ViewpointsPanelState };

export type ContentGridElements = [
  Viewer,
  Models,
  Viewpoints,
  BCFManager
];

export type ContentGridLayouts = ["Viewer"];

export interface ContentGridState {
  components: OBC.Components;
  id: string;
  viewportTemplate: BUI.StatelessComponent;
  bcfFiles: Array<{ name: string; url: string }>;
  world: OBC.World;
}

export const contentGridTemplate: BUI.StatefullComponent<ContentGridState> = (
  state
) => {
  const { components, world } = state;

  const onCreated = (e?: Element): void => {
    if (!e) return;
    const grid = e as BUI.Grid<ContentGridLayouts, ContentGridElements>;

    grid.elements = {
      models: {
        template: COMPONENTS.loadedModelsTemplate,
        initialState: { components },
      },
      bcfManager: {
        template: COMPONENTS.bcfManagerTemplate,
        initialState: { components, bcfFiles: state.bcfFiles, world },
      },
      viewer: state.viewportTemplate,
    };

    grid.layouts = {
      Viewer: {
        template: `
          "models viewer" minmax(0, 1fr)
          "bcfManager viewer" 100px
          /${SMALL_COLUMN_WIDTH} 1fr
        `,
      },
    };
  };

  return BUI.html`
    <bim-grid id=${
      state.id
    } style="padding: ${CONTENT_GRID_GAP}; gap: ${CONTENT_GRID_GAP}" ${BUI.ref(
    onCreated
  )}></bim-grid>
  `;
};

export const getContentGrid = (): BUI.Grid<
  ContentGridLayouts,
  ContentGridElements
> | undefined => {
  const contentGrid = document.getElementById(CONTENT_GRID_ID) as BUI.Grid<
    ContentGridLayouts,
    ContentGridElements
  > | undefined;

  return contentGrid;
};
