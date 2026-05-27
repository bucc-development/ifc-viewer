export const CONTENT_GRID_ID = "app-content";
// Reduce default gaps and column widths so side panels are narrower and the
// viewer occupies more of the available width.
export const CONTENT_GRID_GAP = "0.5rem";
export const SMALL_COLUMN_WIDTH = "13rem";
export const MEDIUM_COLUMN_WIDTH = "20rem";

export const appIcons = {
  ADD: "mdi:plus",
  CAMERA: "solar:camera-bold",
  CLIPPING: "fluent:cut-16-filled",
  COLORIZE: "famicons:color-fill",
  EXPAND: "eva:expand-fill",
  FULLSCREEN: "mdi:fullscreen",
  FULLSCREEN_EXIT: "mdi:fullscreen-exit",
  EXPORT: "ph:export-fill",
  IMPORT: "ph:download-fill",
  FOCUS: "ri:focus-mode",
  FOLDER: "material-symbols:folder",
  HIDE: "mdi:eye-off",
  ISOLATE: "mdi:selection-ellipse",
  LAYOUT: "tabler:layout-filled",
  LEFT: "tabler:chevron-compact-left",
  MODEL: "mage:box-3d-fill",
  RIGHT: "tabler:chevron-compact-right",
  SELECT: "solar:cursor-bold",
  SETTINGS: "solar:settings-bold",
  SHOW: "mdi:eye",
  RULER: "solar:ruler-bold",
  TASK: "material-symbols:task",
  TRANSPARENT: "mdi:ghost",
  LOADER: "line-md:loading-twotone-loop",
  CUBE: "mdi:cube-outline",
  GRID: "mdi:grid",
  PROJECTION: "mdi:camera-switch",
  AREA: "material-symbols:square-foot",
  DELETE: "mdi:delete",
};

export const tooltips = {
  FOCUS: {
    TITLE: "Items Focusing",
    TEXT: "Move the camera to focus the selected items. If no items are selected, all models will be focused.",
  },
  HIDE: {
    TITLE: "Hide Selection",
    TEXT: "Hide the currently selected items.",
  },
  ISOLATE: {
    TITLE: "Isolate Selection",
    TEXT: "Hide everything except the currently selected items.",
  },
  GHOST: {
    TITLE: "Ghost Mode",
    TEXT: "Set all models transparent, so selections and colors can be seen better.",
  },
  SHOW_ALL: {
    TITLE: "Show All Items",
    TEXT: "Reset the visibility of all hidden items, so they become visible again.",
  },
  COLORIZE: {
    TITLE: "Colorize Selection",
    TEXT: "Change the color of the currently selected items.",
  },
  MEASUREMENTS_LENGTH: {
    TITLE: "Length Measurement",
    TEXT: "Measure the distance between two points.",
  },
  MEASUREMENTS_AREA: {
    TITLE: "Area Measurement",
    TEXT: "Measure the area of a surface.",
  },
  SECTION: {
    TITLE: "Model Section",
    TEXT: "Create clipping planes to cut through the model.",
  },
  CLEAR_MEASUREMENTS: {
    TITLE: "Clear Measurements",
    TEXT: "Delete all measurements currently in the viewer.",
  },
  CLEAR_CLIPPING: {
    TITLE: "Clear Clipping Planes",
    TEXT: "Delete all clipping planes currently in the viewer.",
  },
  CUBE_TOGGLE: {
    TITLE: "Orientation Cube",
    TEXT: "Toggle the visibility of the orientation cube.",
  },
  GRID: {
    TITLE: "Grid Visibility",
    TEXT: "Toggle the visibility of the ground grid.",
  },
  PROJECTION: {
    TITLE: "Camera Projection",
    TEXT: "Switch between Perspective and Orthographic camera views.",
  },
  LOAD_ALL: {
    TITLE: "Load All Models",
    TEXT: "Load all fragment and IFC models available in the project.",
  },
  LOAD_ITEM: {
    TITLE: "Load Model",
    TEXT: "Load this specific model into the viewer.",
  },
  OPEN_LOCAL: {
    TITLE: "Open Local File",
    TEXT: "Load an IFC or Fragments file directly from your computer.",
  },
  FULLSCREEN: {
    TITLE: "Fullscreen",
    TEXT: "Expand the viewer to fullscreen.",
  },
  FULLSCREEN_EXIT: {
    TITLE: "Exit Fullscreen",
    TEXT: "Exit fullscreen mode.",
  },
};
