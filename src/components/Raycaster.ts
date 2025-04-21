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

  /* MD
  Now, that is just the helper function and we can use it however we like. For demonstration purposes, let's enhance the raycasting functionality to provide more interactivity and feedback to the user. Let's start by defining the pointer move event:
*/

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

  /* MD
  :::info Performance Tip!

  Continuously raycasting on every pointer move might seem like the obvious choice, but it can introduce performance bottlenecks. This is because each raycast request is sent to a worker, and there is a small delay for the data to return. A more efficient approach is to trigger raycasting only after the pointer has stopped moving for a short duration.

  :::

  To provide visual feedback, we'll draw a ThreeJS line at the hit position. This line will orient itself to align with the surface normal at the hit point. Additionally, we'll log the raycast result to the console for further inspection:
*/

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
    console.log(result);
    const { point, normal } = result;
    if (!normal) return;
    line.position.copy(point);
    const look = point.clone().add(normal);
    line.lookAt(look);
  };

  /* MD
  Let's enhance the interactivity by creating a sphere at the location where the user clicks. This will provide a visual cue for the click position:
*/

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

  const sphereGeometry = new THREE.SphereGeometry(0.4);

  const sphereMaterial = new THREE.MeshLambertMaterial({
    color: "#bcf124",
    transparent: true,
    opacity: 0.8,
  });

  onRaycastClickResult = (result) => {
    if (!result) return;
    const { point } = result;
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.copy(point);
    world.scene.three.add(sphere);
  };
};
