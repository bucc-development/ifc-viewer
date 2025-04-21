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

  const highlight = async () => {
    if (!localId) return;
    await model.highlight([localId], highlightMaterial);
  };

  const resetHighlight = async () => {
    if (!localId) return;
    await model.resetHighlight([localId]);
  };

  const onItemSelected = () => {};
  const onItemDeselected = () => {};

  const raycast = async (data: {
    camera: THREE.PerspectiveCamera | THREE.OrthographicCamera;
    mouse: THREE.Vector2;
    dom: HTMLCanvasElement;
  }) => {
    const results = [];
    for (const [_, model] of fragments.models.list) {
      const result = await model.raycast(data);
      if (result) {
        results.push(result);
      }
    }
    await Promise.all(results);
    if (results.length === 0) return null;

    // Find result with smallest distance
    let closestResult = results[0];
    let minDistance = closestResult.distance;

    for (let i = 1; i < results.length; i++) {
      if (results[i].distance < minDistance) {
        minDistance = results[i].distance;
        closestResult = results[i];
      }
    }

    return closestResult;
  };

  const mouse = new THREE.Vector2();

  let onRaycastHoverResult = (_result: FRAGS.RaycastResult | null) => {};
  viewport.addEventListener("pointermove", async (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
    const result = await raycast({
      camera: world.camera.three,
      mouse,
      dom: world.renderer!.three.domElement!,
    });
    onRaycastHoverResult(result);
  });

  const lineGeometry = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0, 0, 2),
  ]);

  const lineMaterial = new THREE.LineBasicMaterial({ color: "#6528d7" });
  const line = new THREE.Line(lineGeometry, lineMaterial);
  world.scene.three.add(line);

  onRaycastHoverResult = (result) => {
    line.visible = !!result;
    if (!result) return;
    const { point, normal } = result;
    if (!normal) return;
    line.position.copy(point);
    const look = point.clone().add(normal);
    line.lookAt(look);
  };

  let onRaycastClickResult = (_result: FRAGS.RaycastResult | null) => {};
  viewport.addEventListener("click", async (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
    const result = await model.raycast({
      camera: world.camera.three,
      mouse,
      dom: world.renderer!.three.domElement!,
    });
    onRaycastClickResult(result);
  });

  const getAttributes = async (attributes?: string[]) => {
    if (!localId) return null;
    const [data] = await model.getItemsData([localId], {
      attributesDefault: !attributes,
      attributes,
    });
    return data;
  };

  onRaycastClickResult = async (result) => {
    const promises = [];
    if (result) {
      promises.push(resetHighlight());
      localId = result.localId;
      onItemSelected();
      promises.push(highlight());
      const data = await getAttributes();
      console.log("Attributes", data);
    } else {
      promises.push(resetHighlight());
      localId = null;
      onItemDeselected();
    }
    promises.push(fragments.update(true));
    Promise.all(promises);
  };

  // const clipper = components.get(OBC.Clipper);
  // clipper.enabled = true;

  // window.onkeydown = (event) => {
  //   if (event.code === "Space") {
  //     if (clipper.enabled) {
  //       clipper.create(world);
  //     }
  //   }
  // };

  // window.onkeydown = (event) => {
  //   if (event.code === "Delete" || event.code === "Backspace") {
  //     if (clipper.enabled) {
  //       clipper.delete(world);
  //     }
  //   }
  // };

  // world.meshes.add(cube); // Crucial for clipper to work
};
