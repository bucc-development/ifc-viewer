import * as THREE from "three";
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
  viewport: BUI.Viewport,
  model: FRAGS.FragmentsModel,
) => {
  const highlightMaterial: FRAGS.MaterialDefinition = {
    color: new THREE.Color("gold"),
    renderedFaces: FRAGS.RenderedFaces.TWO,
    opacity: 1,
    transparent: false,
  };

  let localId: number | null = null;
  const mouse = new THREE.Vector2();

  // Unified raycast function
  const raycast = (data: {
    camera: THREE.PerspectiveCamera | THREE.OrthographicCamera;
    mouse: THREE.Vector2;
    dom: HTMLCanvasElement;
  }) => {
    return model.raycast(data);
  };

  // Highlight functions
  const highlight = async () => {
    if (!localId) return;
    await model.highlight([localId], highlightMaterial);
  };

  const resetHighlight = async () => {
    if (!localId) return;
    await model.resetHighlight([localId]);
  };

  // Visual feedback line
  const lineGeometry = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0, 0, 2),
  ]);
  const lineMaterial = new THREE.LineBasicMaterial({ color: "#6528d7" });
  const line = new THREE.Line(lineGeometry, lineMaterial);
  world.scene.three.add(line);

  // Hover handling
  viewport.addEventListener("pointermove", async (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;

    const result = await raycast({
      camera: world.camera.three,
      mouse,
      dom: world.renderer!.three.domElement!,
    });

    // Update visual feedback
    line.visible = !!result;
    if (result) {
      const { point, normal } = result;
      if (normal) {
        line.position.copy(point);
        const look = point.clone().add(normal);
        line.lookAt(look);
      }
    }
  });

  // Click handling
  viewport.addEventListener("click", async (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;

    try {
      const result = await raycast({
        camera: world.camera.three,
        mouse,
        dom: world.renderer!.three.domElement!,
      });

      await resetHighlight(); // Always reset first

      if (result) {
        localId = result.localId;
        await highlight();

        const data = await model.getItemsData([localId], {
          attributesDefault: true,
        });
        console.log("Element Attributes:", data[0]);
      } else {
        localId = null;
      }

      await fragments.update(true);
    } catch (error) {
      console.error("Selection error:", error);
    }
  });
};
