import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import * as OBF from "@thatopen/components-front";
import * as FRAGS from "@thatopen/fragments";
import * as THREE from "three";
import { appIcons, tooltips } from "../../globals";

export interface ViewerToolbarState {
  components: OBC.Components;
  world: OBC.World;
}

const originalColors = new Map<
  FRAGS.BIMMaterial,
  { color: number; transparent: boolean; opacity: number }
>();

// Tracks which camera instances already have a projection→toolbar listener.
// WeakSet doesn't prevent GC and is safe for re-renders.
const projectionListeners = new WeakSet<OBC.OrthoPerspectiveCamera>();

const setModelTransparent = (components: OBC.Components): void => {
  const fragments = components.get(OBC.FragmentsManager);

  const materials = [...fragments.core.models.materials.list.values()];
  for (const material of materials) {
    if (material.userData.customId) continue;
    let color: number | undefined;
    if ("color" in material) {
      color = material.color.getHex();
    } else {
      color = material.lodColor.getHex();
    }

    originalColors.set(material, {
      color,
      transparent: material.transparent,
      opacity: material.opacity,
    });

    material.transparent = true;
    material.opacity = 0.05;
    material.needsUpdate = true;
    if ("color" in material) {
      material.color.setColorName("white");
    } else {
      material.lodColor.setColorName("white");
    }
  }
};

const restoreModelMaterials = (): void => {
  for (const [material, data] of originalColors) {
    const { color, transparent, opacity } = data;
    material.transparent = transparent;
    material.opacity = opacity;
    if ("color" in material) {
      material.color.setHex(color);
    } else {
      material.lodColor.setHex(color);
    }
    material.needsUpdate = true;
  }
  originalColors.clear();
};

export const viewerToolbarTemplate: BUI.StatefullComponent<
  ViewerToolbarState
> = (state, update) => {
  const { components, world } = state;

  const highlighter = components.get(OBF.Highlighter);
  const hider = components.get(OBC.Hider);
  const lengthMeasurer = components.get(OBF.LengthMeasurement);
  const areaMeasurer = components.get(OBF.AreaMeasurement);
  const clipper = components.get(OBC.Clipper);
  const grids = components.get(OBC.Grids);

  const worldGrid = grids.list.get(world.uuid);

  const disableAll = (exceptions?: ("clipper" | "length" | "area")[]): void => {
    BUI.ContextMenu.removeMenus();
    highlighter.clear("select").catch(() => {});
    highlighter.enabled = false;
    if (!exceptions?.includes("length")) lengthMeasurer.enabled = false;
    if (!exceptions?.includes("area")) areaMeasurer.enabled = false;
    if (!exceptions?.includes("clipper")) clipper.enabled = false;
  };

  const onToggleGhost = (): void => {
    if (originalColors.size > 0) {
      restoreModelMaterials();
    } else {
      setModelTransparent(components);
    }
    update();
  };

  const onToggleGrid = (): void => {
    if (worldGrid) {
      worldGrid.visible = !worldGrid.visible;
      update();
    }
  };

  const miniCubeEl = document.getElementById("mini-cube-viewer") as HTMLElement | null;
  const onToggleMiniCube = (): void => {
    if (miniCubeEl) {
      miniCubeEl.style.display = miniCubeEl.style.display === "none" ? "" : "none";
      update();
    }
  };

  const onLengthMeasurement = (): void => {
    const isEnabled = lengthMeasurer.enabled;
    disableAll(["length"]);
    lengthMeasurer.enabled = !isEnabled;
    highlighter.enabled = isEnabled;
    update();
  };

  const onAreaMeasurement = (): void => {
    disableAll(["area"]);
    areaMeasurer.enabled = !areaMeasurer.enabled;
    highlighter.enabled = !areaMeasurer.enabled;
    update();
  };

  const onModelSection = (): void => {
    const isEnabled = clipper.enabled;
    disableAll(["clipper"]);
    clipper.enabled = !isEnabled;
    highlighter.enabled = isEnabled;
    update();
  };

  const resetMeasurer = (measurer: { enabled: boolean }): void => {
    const wasEnabled = measurer.enabled;
    if (!wasEnabled) {
      measurer.enabled = true;
    }
    measurer.enabled = false;
  };

  const onDeleteMeasurements = (): void => {
    lengthMeasurer.list.clear();
    areaMeasurer.list.clear();
    resetMeasurer(lengthMeasurer);
    resetMeasurer(areaMeasurer);
    resetMeasurer(lengthMeasurer);
    resetMeasurer(areaMeasurer);
    update();
  };

  const onDeleteClippings = (): void => {
    clipper.deleteAll();
    update();
  };

  const onProjectionChange = async (projection: OBC.CameraProjection): Promise<void> => {
    if (world.camera instanceof OBC.OrthoPerspectiveCamera) {
      await world.camera.projection.set(projection);
      update();
    }
  };

  let focusBtn: BUI.TemplateResult | undefined;
  if (world.camera instanceof OBC.SimpleCamera || world.camera instanceof OBC.OrthoPerspectiveCamera) {
    const onFocus = async ({ target }: { target: BUI.Button }): Promise<void> => {
      const selection = highlighter.selection.select;
      target.loading = true;
      if (world.camera instanceof OBC.SimpleCamera) {
        await world.camera.fitToItems(
          OBC.ModelIdMapUtils.isEmpty(selection) ? undefined : selection
        );
      } else if (world.camera instanceof OBC.OrthoPerspectiveCamera) {
        await world.camera.fitToItems(
          OBC.ModelIdMapUtils.isEmpty(selection) ? undefined : selection
        );
      }
      target.loading = false;
    };

    focusBtn = BUI.html`<bim-button tooltip-title=${tooltips.FOCUS.TITLE} tooltip-text=${tooltips.FOCUS.TEXT} icon=${appIcons.FOCUS} @click=${onFocus}></bim-button>`;
  }

  const onHide = async ({ target }: { target: BUI.Button }): Promise<void> => {
    const selection = highlighter.selection.select;
    if (OBC.ModelIdMapUtils.isEmpty(selection)) return;
    target.loading = true;
    const visibleMap = await hider.getVisibilityMap(true, Object.keys(selection));
    let hasVisibleElement = false;
    for (const modelId in selection) {
      if (!visibleMap[modelId]) continue;
      const visibleIds = new Set(visibleMap[modelId]);
      for (const id of selection[modelId]) {
        if (visibleIds.has(id)) {
          hasVisibleElement = true;
          break;
        }
      }
      if (hasVisibleElement) break;
    }
    await hider.set(!hasVisibleElement, selection);
    target.loading = false;
  };

  const onIsolate = async ({ target }: { target: BUI.Button }): Promise<void> => {
    const selection = highlighter.selection.select;
    if (OBC.ModelIdMapUtils.isEmpty(selection)) return;
    target.loading = true;
    await hider.isolate(selection);
    target.loading = false;
  };

  const onShowAll = async ({ target }: { target: BUI.Button }): Promise<void> => {
    target.loading = true;
    await hider.set(true);
    target.loading = false;
  };

  const colorInputId = BUI.Manager.newRandomId();
  const getColorValue = (): string | null => {
    const input = document.getElementById(
      colorInputId
    ) as BUI.ColorInput | null;
    if (!input) return null;
    return input.color;
  };

  const onApplyColor = async ({ target }: { target: BUI.Button }): Promise<void> => {
    const colorValue = getColorValue();
    const selection = highlighter.selection.select;
    if (OBC.ModelIdMapUtils.isEmpty(selection) || !colorValue) return;
    const color = new THREE.Color(colorValue);
    const style = [...highlighter.styles.entries()].find(([, definition]) => {
      if (!definition) return false;
      return definition.color.getHex() === color.getHex();
    });
    target.loading = true;
    if (style) {
      const name = style[0];
      if (name === "select") {
        target.loading = false;
        return;
      }
      await highlighter.highlightByID(name, selection, false, false);
    } else {
      highlighter.styles.set(colorValue, {
        color,
        renderedFaces: FRAGS.RenderedFaces.ONE,
        opacity: 1,
        transparent: false,
      });
      await highlighter.highlightByID(colorValue, selection, false, false);
    }
    await highlighter.clear("select");
    target.loading = false;
  };

  if (world.camera instanceof OBC.OrthoPerspectiveCamera && !projectionListeners.has(world.camera)) {
    projectionListeners.add(world.camera);
    world.camera.projection.onChanged.add(() => update());
  }

  const isOrtho = world.camera instanceof OBC.OrthoPerspectiveCamera && world.camera.projection.current === "Orthographic";

  return BUI.html`
    <bim-toolbar>
      <bim-toolbar-section label="Visibility">
        <bim-button tooltip-title=${tooltips.SHOW_ALL.TITLE} tooltip-text=${tooltips.SHOW_ALL.TEXT} icon=${appIcons.SHOW} @click=${onShowAll}></bim-button>
        <bim-button tooltip-title=${tooltips.GHOST.TITLE} tooltip-text=${tooltips.GHOST.TEXT} icon=${appIcons.TRANSPARENT} @click=${onToggleGhost} ?active=${originalColors.size > 0}></bim-button>
        <bim-button tooltip-title=${tooltips.GRID.TITLE} tooltip-text=${tooltips.GRID.TEXT} icon=${appIcons.GRID} @click=${onToggleGrid}></bim-button>
        <bim-button tooltip-title=${tooltips.CUBE_TOGGLE.TITLE} tooltip-text=${tooltips.CUBE_TOGGLE.TEXT} icon=${appIcons.CUBE} @click=${onToggleMiniCube}></bim-button>
      </bim-toolbar-section>
      <bim-toolbar-section label="Selection">
        ${focusBtn}
        <bim-button tooltip-title=${tooltips.HIDE.TITLE} tooltip-text=${tooltips.HIDE.TEXT} icon=${appIcons.HIDE} @click=${onHide}></bim-button>
        <bim-button tooltip-title=${tooltips.ISOLATE.TITLE} tooltip-text=${tooltips.ISOLATE.TEXT} icon=${appIcons.ISOLATE} @click=${onIsolate}></bim-button>
        <bim-button tooltip-title=${tooltips.COLORIZE.TITLE} tooltip-text=${tooltips.COLORIZE.TEXT} icon=${appIcons.COLORIZE}>
          <bim-context-menu>
            <div style="display: flex; gap: 0.5rem; width: 10rem;">
              <bim-color-input id=${colorInputId}></bim-color-input>
              <bim-button label="Apply" @click=${onApplyColor}></bim-button>
            </div>
          </bim-context-menu>
        </bim-button>
      </bim-toolbar-section>
      <bim-toolbar-section label="Measure">
        <bim-button tooltip-title=${tooltips.MEASUREMENTS_LENGTH.TITLE} tooltip-text=${tooltips.MEASUREMENTS_LENGTH.TEXT} icon=${appIcons.RULER} @click=${onLengthMeasurement} ?active=${lengthMeasurer.enabled}></bim-button>
        <bim-button tooltip-title=${tooltips.CLEAR_MEASUREMENTS.TITLE} tooltip-text=${tooltips.CLEAR_MEASUREMENTS.TEXT} icon=${appIcons.DELETE} @click=${onDeleteMeasurements}></bim-button>
      </bim-toolbar-section>
      <bim-toolbar-section label="Clipping">
        <bim-button tooltip-title=${tooltips.SECTION.TITLE} tooltip-text=${tooltips.SECTION.TEXT} icon=${appIcons.CLIPPING} @click=${onModelSection} ?active=${clipper.enabled}></bim-button>
        <bim-button tooltip-title=${tooltips.CLEAR_CLIPPING.TITLE} tooltip-text=${tooltips.CLEAR_CLIPPING.TEXT} icon=${appIcons.DELETE} @click=${onDeleteClippings}></bim-button>
      </bim-toolbar-section>
      <bim-toolbar-section label="Camera">
        <bim-button tooltip-title=${tooltips.PROJECTION.TITLE} tooltip-text=${tooltips.PROJECTION.TEXT} icon=${appIcons.PROJECTION}>
          <bim-context-menu>
            <bim-button label="Perspective" ?active=${!isOrtho} @click=${() => onProjectionChange("Perspective")}></bim-button>
            <bim-button label="Orthographic" ?active=${isOrtho} @click=${() => onProjectionChange("Orthographic")}></bim-button>
          </bim-context-menu>
        </bim-button>
      </bim-toolbar-section>
    </bim-toolbar>
  `;
};
