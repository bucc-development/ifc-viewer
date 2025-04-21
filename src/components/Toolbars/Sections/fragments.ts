import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";
import * as FRAGS from "@thatopen/fragments";

export default (
  components: OBC.Components,
  world: OBC.SimpleWorld<
    OBC.SimpleScene,
    OBC.OrthoPerspectiveCamera,
    OBC.SimpleRenderer
  >,
  fragments: FRAGS.FragmentsModels,
) => {
  const serializer = new FRAGS.IfcImporter();
  serializer.wasm = {
    absolute: true,
    path: "https://unpkg.com/web-ifc@0.0.68/",
  };
  let fragmentBytes: ArrayBuffer | null = null;

  // Helper function to download files
  const download = (file: File) => {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
  };

  const onLoadIFC = async () => {
    // ask for ifc file
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".ifc";

    // Create a promise to handle the file selection
    const fileSelected = new Promise<File | null>((resolve) => {
      input.addEventListener("change", () => {
        const filesList = input.files;
        if (!filesList) {
          resolve(null);
          return;
        }
        resolve(filesList[0]);
      });
      input.click();
    });

    // Wait for file selection
    const file = await fileSelected;
    if (!file) return;

    // Read the file
    const reader = new FileReader();
    const fileRead = new Promise<ArrayBuffer>((resolve, reject) => {
      reader.addEventListener("load", () => {
        const binary = reader.result;
        if (!(binary instanceof ArrayBuffer)) {
          reject(new Error("Failed to read file as ArrayBuffer"));
          return;
        }
        resolve(binary);
      });
      reader.addEventListener("error", () => reject(reader.error));
      reader.readAsArrayBuffer(file);
    });

    try {
      const binary = await fileRead;

      // Convert IFC to fragments first
      const fragmentBinary = new Uint8Array(binary);
      fragmentBytes = await serializer.process({ bytes: fragmentBinary });

      if (!fragmentBytes) {
        throw new Error("Fragment conversion failed - no bytes returned");
      }

      // Verify the conversion produced valid data
      if (fragmentBytes.byteLength === 0) {
        throw new Error("Fragment conversion produced empty result");
      }

      // Load into fragments manager only after successful conversion
      const fragmentsManager = components.get(OBC.FragmentsManager);
      fragmentsManager.load(new Uint8Array(fragmentBytes));

      // Load fragments to the viewer
      const model = await fragments.load(fragmentBytes, { modelId: "example" });
      model.useCamera(world.camera.three);
      world.scene.three.add(model.object);
      await fragments.update(true);

      // Download the fragments binary
      download(new File([fragmentBytes], `${file.name}.frag`));

      // Get properties from the fragments manager
      const fragmentGroup = Array.from(fragmentsManager.groups.values())[0];
      if (fragmentGroup?.hasProperties) {
        const properties = fragmentGroup.getLocalProperties();
        if (properties) {
          const propertiesJson = JSON.stringify(properties);
          download(new File([propertiesJson], `${file.name}.json`));
        }
      }

      console.log("IFC loading process completed successfully");
    } catch (error) {
      console.error("Error during IFC processing:", error);
      // Reset fragmentBytes if there was an error
      fragmentBytes = null;
    }
  };

  const onLoadFrag = async () => {
    // ask for fragment file
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".frag";
    input.multiple = false;

    // Create a promise to handle the file selection
    const fileSelected = new Promise<File | null>((resolve) => {
      input.addEventListener("change", () => {
        const filesList = input.files;
        if (!filesList) {
          resolve(null);
          return;
        }
        resolve(filesList[0]);
      });
      input.click();
    });

    // Wait for file selection
    const file = await fileSelected;
    if (!file) return;

    // Read the file
    const reader = new FileReader();
    const fileRead = new Promise<ArrayBuffer>((resolve, reject) => {
      reader.addEventListener("load", () => {
        const binary = reader.result;
        if (!(binary instanceof ArrayBuffer)) {
          reject(new Error("Failed to read file as ArrayBuffer"));
          return;
        }
        resolve(binary);
      });
      reader.addEventListener("error", () => reject(reader.error));
      reader.readAsArrayBuffer(file);
    });

    try {
      // Wait for file to be read
      const binary = await fileRead;

      // Load into fragments manager
      const fragmentBinary = new Uint8Array(binary);
      const fragmentsManager = components.get(OBC.FragmentsManager);
      fragmentsManager.load(fragmentBinary);

      // Load fragments to the viewer using FragmentsModels
      const model = await fragments.load(binary, { modelId: "example" });
      model.useCamera(world.camera.three);
      world.scene.three.add(model.object);
      await fragments.update(true);
    } catch (error) {
      console.error("Error loading fragment file:", error);
    }
  };

  return BUI.Component.create<BUI.PanelSection>(() => {
    return BUI.html`
        <bim-toolbar-section label="Import" icon="solar:import-bold">
            <bim-button
                tooltip-title="Load IFC Model"
                tooltip-text="Convert IFC file to Fragments, download Fragments model and load it to the viewer."
                icon="solar:sort-vertical-broken"
                @click=${onLoadIFC}
            ></bim-button>
            <bim-button
                tooltip-title="Load Fragments Model"
                tooltip-text="Load a pre-converted Fragments model to the viewer."
                icon="solar:add-square-outline"
                @click=${onLoadFrag}
            ></bim-button>
        </bim-toolbar-section>
      `;
  });
};
