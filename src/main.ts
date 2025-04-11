import * as THREE from "three";
import * as OBC from "@thatopen/components";
import * as OBF from "@thatopen/components-front";
import * as BUI from "@thatopen/ui";
import * as WEBIFC from "web-ifc";
import * as FRAGS from "@thatopen/fragments";
import projectInformation from "./components/Panels/ProjectInformation";
import elementData from "./components/Panels/Selection";
import settings from "./components/Panels/Settings";
import load from "./components/Toolbars/Sections/Import";
import camera from "./components/Toolbars/Sections/Camera";
import selection from "./components/Toolbars/Sections/Selection";
import { AppManager } from "./bim-components";
import { SimpleQTO } from "./bim-components/SimpleQTO/src/SimpleQTO";

import "./style.css";
import QTO from "./components/Panels/SimpleQTO";
import { customRelTree } from "./components/Panels/CustomRelTree";
import { CustomTree } from "./bim-components/CustomTree";

// Initialize application
(async () => {
  try {
    // Set initial theme based on system preference
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    document.documentElement.className = prefersDark
      ? "bim-ui-dark"
      : "bim-ui-light";

    // Listen for system theme changes
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        document.documentElement.className = e.matches
          ? "bim-ui-dark"
          : "bim-ui-light";
      });

    await BUI.Manager.init();

    const components = new OBC.Components();
    const worlds = components.get(OBC.Worlds);

    const world = worlds.create<
      OBC.SimpleScene,
      OBC.OrthoPerspectiveCamera,
      OBF.PostproductionRenderer
    >();
    world.name = "Main";

    world.scene = new OBC.SimpleScene(components);
    await world.scene.setup();
    world.scene.three.background = null;

    const viewport = BUI.Component.create<BUI.Viewport>(() => {
      return BUI.html`
        <bim-viewport>
          <bim-grid floating></bim-grid>
        </bim-viewport>
      `;
    });

    world.renderer = new OBF.PostproductionRenderer(components, viewport);
    const { postproduction } = world.renderer;

    world.camera = new OBC.OrthoPerspectiveCamera(components);

    const worldGrid = components.get(OBC.Grids).create(world);
    worldGrid.material.uniforms.uColor.value = new THREE.Color(0x424242);
    worldGrid.material.uniforms.uSize1.value = 2;
    worldGrid.material.uniforms.uSize2.value = 8;

    const resizeWorld = () => {
      world.renderer?.resize();
      world.camera.updateAspect();
    };

    viewport.addEventListener("resize", resizeWorld);

    await components.init();

    postproduction.enabled = true;
    postproduction.customEffects.excludedMeshes.push(worldGrid.three);
    postproduction.setPasses({ custom: true, ao: true, gamma: true });
    postproduction.customEffects.lineColor = 0x17191c;

    const appManager = components.get(AppManager);
    const viewportGrid =
      viewport.querySelector<BUI.Grid>("bim-grid[floating]")!;
    appManager.grids.set("viewport", viewportGrid);

    const fragments = components.get(OBC.FragmentsManager);
    const indexer = components.get(OBC.IfcRelationsIndexer);
    const classifier = components.get(OBC.Classifier);
    classifier.list.CustomSelections = {};

    const ifcLoader = components.get(OBC.IfcLoader);
    await ifcLoader.setup();

    const tilesLoader = components.get(OBF.IfcStreamer);
    tilesLoader.url = "./resources/tiles/"; // Updated path
    tilesLoader.world = world;
    tilesLoader.culler.threshold = 10;
    tilesLoader.culler.maxHiddenTime = 1000;
    tilesLoader.culler.maxLostTime = 40000;

    const highlighter = components.get(OBF.Highlighter);
    await highlighter.setup({ world });
    highlighter.zoomToSelection = true;

    const culler = components.get(OBC.Cullers).create(world);
    culler.threshold = 5;

    world.camera.controls.restThreshold = 0.25;
    world.camera.controls.addEventListener("rest", () => {
      culler.needsUpdate = true;
      tilesLoader.culler.needsUpdate = true;
    });

    // When models are loaded or changed
    fragments.onFragmentsLoaded.add(() => {
      const customTree = components.get(CustomTree);
      customTree.update({ models: fragments.groups.values() });
    });

    // Setup UI components
    const projectInformationPanel = projectInformation(components);
    const elementDataPanel = elementData(components);
    const qtoPanel = QTO(components);
    const customTreePanel = customRelTree(components);

    const leftPanel = BUI.Component.create(() => {
      return BUI.html`
        <bim-tabs switchers-full>
          <bim-tab name="project" label="Project" icon="ph:building-fill">
            ${projectInformationPanel}
          </bim-tab>
          <bim-tab name="settings" label="Settings" icon="solar:settings-bold">
            ${settings(components)}
          </bim-tab>
        </bim-tabs> 
      `;
    });

    const onShowProperty = (): void => {
      if (!viewportGrid) return;

      if (viewportGrid.layout !== "second") {
        viewportGrid.layout = "second";
      } else {
        viewportGrid.layout = "main";
      }
    };

    const onShowSimpleQuantity = async () => {
      if (!components) return;

      const highlighter = components.get(OBF.Highlighter);
      const selection = highlighter.selection.select;
      const simpleQto = components.get(SimpleQTO);
      await simpleQto.sumQuantities(selection);

      if (!viewportGrid) {
        console.warn("QTO panel not ready yet");
        return;
      }
      if (viewportGrid.layout !== "qtos") {
        viewportGrid.layout = "qtos";
      } else {
        viewportGrid.layout = "main";
      }
    };

    const onShowCustomTree = async () => {
      if (!viewportGrid) {
        console.warn("QTO panel not ready yet");
        return;
      }
      if (viewportGrid.layout !== "customTree") {
        viewportGrid.layout = "customTree";
      } else {
        viewportGrid.layout = "main";
      }
    };

    const onShowCompleteQuantity = async () => {
      const fragmentManager = components.get(OBC.FragmentsManager);
      const models = fragmentManager.groups.values();
      const ifcTypes = new Set<string>();

      for (const model of models) {
        if (!model || !model.hasProperties) continue;

        // // Get all property sets directly
        // const quantitySets = await model.getAllPropertiesOfType(
        //   WEBIFC.IFCELEMENTQUANTITY,
        // );

        const propertyIDs = model.getAllPropertiesIDs();
        if (!propertyIDs || propertyIDs.length === 0) continue;

        for (const expressID of propertyIDs) {
          const element = await model.getProperties(expressID);
          if (!element?.type) continue;

          // i'M NOW GETTING THE ID OF THE PROPERTIES, NEED TO TRANSFORM IT INTO THE NAME
          const propertySets = await model.getAllPropertiesOfType(
            WEBIFC.IFCPROPERTYSET,
          );
          // Add the raw IFC type (e.g., "IFCWALL", "IFCDOOR")
          ifcTypes.add(element.type);
        }

        // if (attributes) {
        //   for (const expressID in attributes) {
        //     const { name: setName } =
        //       await OBC.IfcPropertiesUtils.getEntityName(
        //         model,
        //         Number(expressID),
        //       );
        //     if (setName) properties.add(setName);
        //   }
        // }
      }

      const ifcTypesArray = Array.from(ifcTypes);
      console.log("Unique IFC Types:", ifcTypesArray);
      return ifcTypesArray;
    };

    const toolbar = BUI.Component.create(() => {
      return BUI.html`
        <bim-toolbar>
          ${load(components)}
          <bim-toolbar-section label="Properties" icon="clarity:nodes-line">
            <bim-button 
              tooltip-title="Properties" 
              tooltip-text="Show properties of the highlighted elements."
              icon="clarity:list-solid"
              @click=${onShowProperty}
            ></bim-button>
            <bim-button 
            tooltip-title="Simple Quantities" 
            tooltip-text="Adds up the quantities of all selected elements"
            icon="mdi:summation"
            @click=${onShowSimpleQuantity}  
            ></bim-button>
            <bim-button 
            tooltip-title="Create Quantity Takeoff" 
            tooltip-text="Open Custom Table to generate a complete Quantity Takeoff"
            icon="clarity:calculator-solid"
            @click=${onShowCompleteQuantity}  
            ></bim-button>
            <!-- <bim-button 
            tooltip-title="Classification" 
            tooltip-text="Shows classification tree for the loaded model."
            icon="clarity:tree-view-line"
            @click=${onShowCustomTree}
            ></bim-button> -->
          </bim-toolbar-section>
          ${camera(world)}
          ${selection(components, world)}
        </bim-toolbar>
      `;
    });

    const app = document.getElementById("app") as BUI.Grid;
    if (!app) {
      throw new Error("App element not found");
    }

    app.layouts = {
      main: {
        template: `
          "leftPanel viewport" 1fr
          /26rem 1fr
        `,
        elements: {
          leftPanel,
          viewport,
        },
      },
    };

    app.layout = "main";

    viewportGrid.layouts = {
      main: {
        template: `
          "empty" 1fr
          "toolbar" auto
          /1fr
        `,
        elements: { toolbar },
      },
      second: {
        template: `
          "empty elementDataPanel" 1fr
          "toolbar toolbar" auto
          /1fr 24rem
        `,
        elements: {
          toolbar,
          elementDataPanel,
        },
      },
      qtos: {
        template: `
          "empty qtoPanel" 1fr
          "toolbar toolbar" auto
          /1fr 24rem
        `,
        elements: {
          toolbar,
          qtoPanel,
        },
      },
      customTree: {
        template: `
          "empty customTreePanel" 1fr
          "toolbar toolbar" auto
          /1fr 24rem
        `,
        elements: {
          toolbar,
          customTreePanel,
        },
      },
    };

    viewportGrid.layout = "main";

    // Set up event handlers for SharePoint integration
    window.addEventListener("message", async (event) => {
      const allowedOrigins = [
        "https://buccbv.sharepoint.com",
        "https://localhost:4321",
      ];

      if (!allowedOrigins.includes(event.origin)) {
        console.warn("Unauthorized origin:", event.origin);
        return;
      }

      try {
        console.log("Received message:", event);
        if (event.data instanceof ArrayBuffer) {
          console.log("Received ArrayBuffer, creating IFC load event...");
          const loadEvent = new CustomEvent("ifcLoadEvent", {
            detail: {
              name: "openModel",
              payload: {
                name: "SharePointModel",
                buffer: event.data,
              },
            },
          });
          window.dispatchEvent(loadEvent);
        }
      } catch (error) {
        console.error("Error processing message:", error);
      }
    });

    window.addEventListener("ifcLoadEvent", async (event: any) => {
      try {
        const { name, payload } = event.detail;
        if (name === "openModel") {
          console.log("Starting to load IFC model...");
          const model = await ifcLoader.load(payload.buffer, payload.name);
          world.scene.three.add(model);
          console.log("IFC model loaded successfully");
        }
      } catch (error) {
        console.error("Error loading IFC model:", error);
      }
    });

    // Initialize fragment handlers
    fragments.onFragmentsLoaded.add(async (model) => {
      if (model.hasProperties) {
        await indexer.process(model);
        classifier.byEntity(model);
      }

      for (const fragment of model.items) {
        world.meshes.add(fragment.mesh);
        culler.add(fragment.mesh);
      }

      world.scene.three.add(model);
      setTimeout(async () => {
        world.camera.fit(world.meshes, 0.8);
      }, 50);
    });

    fragments.onFragmentsDisposed.add(({ fragmentIDs }) => {
      for (const fragmentID of fragmentIDs) {
        const mesh = [...world.meshes].find((mesh) => mesh.uuid === fragmentID);
        if (mesh) world.meshes.delete(mesh);
      }
    });

    // Trigger initial resize
    window.dispatchEvent(new Event("resize"));
  } catch (error) {
    console.error("Application initialization error:", error);
  }
})();
