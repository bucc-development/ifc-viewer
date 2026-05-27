import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import * as OBC from "@thatopen/components";

const CUBE_FBX_URL = `${import.meta.env.BASE_URL}orientation_cube.fbx`;

const CUBE_VIEWER_RADIUS = 2;
const MINI_VIEWER_SIZE = 130;
// BUCC palette
const HIGHLIGHT_COLOR = 0xa3be8c; // basil green — matches selection / toolbar buttons
const CUBE_BASE_COLOR = 0xe8ebe4; // barely-army-tinted white for cube faces

export interface MiniCubeViewerOptions {
  /** Main world whose camera we sync with */
  world: OBC.World;
  /** Container element for the canvas (will be appended) */
  container: HTMLElement;
  /** Called when the user clicks a face/corner; direction is a unit vector in world space */
  onFaceClick?: (direction: THREE.Vector3) => Promise<void>;
}

export function initMiniCubeViewer(options: MiniCubeViewerOptions): () => void {
  const { world, container, onFaceClick } = options;

  const scene = new THREE.Scene();
  scene.background = null;

  const ORTHO_SIZE = 0.75;
  const camera = new THREE.OrthographicCamera(-ORTHO_SIZE, ORTHO_SIZE, ORTHO_SIZE, -ORTHO_SIZE, 0.1, 10);
  camera.position.set(CUBE_VIEWER_RADIUS, 0, 0);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setClearColor(0x000000, 0);
  renderer.setSize(MINI_VIEWER_SIZE, MINI_VIEWER_SIZE);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  const pickableMeshes: THREE.Mesh[] = [];
  const faceProxies: THREE.Mesh[] = [];
  let hoveredMesh: THREE.Mesh | null = null;
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  type HighlightableMat = THREE.Material & {
    emissive: THREE.Color;
    emissiveIntensity: number;
  };

  type ColorableMat = THREE.Material & { color: THREE.Color };

  function hasEmissive(mat: THREE.Material): mat is HighlightableMat {
    return "emissive" in mat;
  }

  function hasColor(mat: THREE.Material): mat is ColorableMat {
    return "color" in mat && (mat as ColorableMat).color instanceof THREE.Color;
  }

  function setHighlight(mesh: THREE.Mesh, on: boolean): void {
    if (mesh.userData.isHitProxy) return;
    const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    for (const mat of mats) {
      if (hasEmissive(mat)) {
        mat.emissive.setHex(on ? HIGHLIGHT_COLOR : 0x000000);
        mat.emissiveIntensity = on ? 0.5 : 0;
      }
    }
  }

  let cubeModel: THREE.Group | null = null;

  const fbxLoader = new FBXLoader();
  fbxLoader.load(
    CUBE_FBX_URL,
    (object) => {
      cubeModel = object;
      object.position.set(0, 0, 0);
      object.rotation.x = -Math.PI / 2;
      const box = new THREE.Box3().setFromObject(object);
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z) || 1;
      const scale = 1 / maxDim;
      object.scale.setScalar(scale);
      box.setFromObject(object);
      box.getCenter(object.position);
      object.position.negate();

      object.updateMatrixWorld(true);

      object.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          const applyTint = (m: THREE.Material): THREE.Material => {
            const cloned = m.clone();
            if (hasColor(cloned)) cloned.color.set(CUBE_BASE_COLOR);
            return cloned;
          };
          child.material = Array.isArray(child.material)
            ? child.material.map(applyTint)
            : applyTint(child.material);
          pickableMeshes.push(child);
        }
      });

      const modelBox = new THREE.Box3().setFromObject(object);
      const modelHalf = modelBox.getSize(new THREE.Vector3()).multiplyScalar(0.5);

      let mainMesh: THREE.Mesh | null = null;
      let maxVol = 0;
      for (const mesh of pickableMeshes) {
        const mb = new THREE.Box3().setFromObject(mesh);
        const s = mb.getSize(new THREE.Vector3());
        const vol = s.x * s.y * s.z;
        if (vol > maxVol) { maxVol = vol; mainMesh = mesh; }
      }

      for (const mesh of pickableMeshes) {
        if (mesh === mainMesh) continue;
        const center = new THREE.Box3().setFromObject(mesh).getCenter(new THREE.Vector3());
        const isCornerCube =
          Math.abs(center.x) > modelHalf.x * 0.35 &&
          Math.abs(center.y) > modelHalf.y * 0.35 &&
          Math.abs(center.z) > modelHalf.z * 0.35;
        const hex = isCornerCube ? 0xa3be8c : 0x494c3f;
        const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
        for (const mat of mats) {
          if (hasColor(mat)) (mat as ColorableMat).color.setHex(hex);
        }
      }

      scene.add(object);

      object.updateMatrixWorld(true);
      const proxyBox = new THREE.Box3().setFromObject(object);
      const proxyCenter = new THREE.Vector3();
      proxyBox.getCenter(proxyCenter);
      const proxyHalf = proxyBox.getSize(new THREE.Vector3()).multiplyScalar(0.5);
      const proxyInset = 0.01;
      const proxySize = Math.max(proxyHalf.x, proxyHalf.y, proxyHalf.z) * 2 * 0.98;

      const faceDefs: Array<{ dir: THREE.Vector3; rot: THREE.Euler }> = [
        { dir: new THREE.Vector3( 1,  0,  0), rot: new THREE.Euler(0, -Math.PI / 2, 0) },
        { dir: new THREE.Vector3(-1,  0,  0), rot: new THREE.Euler(0,  Math.PI / 2, 0) },
        { dir: new THREE.Vector3( 0,  1,  0), rot: new THREE.Euler(-Math.PI / 2, 0, 0) },
        { dir: new THREE.Vector3( 0, -1,  0), rot: new THREE.Euler( Math.PI / 2, 0, 0) },
        { dir: new THREE.Vector3( 0,  0,  1), rot: new THREE.Euler(0, 0, 0) },
        { dir: new THREE.Vector3( 0,  0, -1), rot: new THREE.Euler(0, Math.PI, 0) },
      ];

      for (const { dir, rot } of faceDefs) {
        const halfExtent = Math.abs(dir.x) * proxyHalf.x + Math.abs(dir.y) * proxyHalf.y + Math.abs(dir.z) * proxyHalf.z;
        const geo = new THREE.PlaneGeometry(proxySize, proxySize);
        const mat = new THREE.MeshBasicMaterial({ visible: false, side: THREE.DoubleSide });
        const proxy = new THREE.Mesh(geo, mat);
        proxy.position.copy(proxyCenter).addScaledVector(dir, halfExtent - proxyInset);
        proxy.rotation.copy(rot);
        proxy.userData.isHitProxy = true;
        proxy.userData.hitDirection = dir.clone();
        scene.add(proxy);
        pickableMeshes.push(proxy);
        faceProxies.push(proxy);
      }
    },
    undefined,
    (err) => console.warn("MiniCubeViewer: failed to load FBX cube", err)
  );

  const ambient = new THREE.AmbientLight(0xffffff, 1.4);
  scene.add(ambient);
  const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
  dirLight.position.set(3, 4, 5);
  scene.add(dirLight);
  const fillLight = new THREE.DirectionalLight(0xffffff, 0.9);
  fillLight.position.set(-2, 2, -3);
  scene.add(fillLight);
  const backLight = new THREE.DirectionalLight(0xffffff, 0.7);
  backLight.position.set(0, -1, -2);
  scene.add(backLight);
  const rimLight = new THREE.DirectionalLight(0xffffff, 0.5);
  rimLight.position.set(-1, 3, 2);
  scene.add(rimLight);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enablePan = false;
  controls.enableZoom = false;
  controls.enableRotate = true;
  controls.target.set(0, 0, 0);
  controls.minDistance = CUBE_VIEWER_RADIUS;
  controls.maxDistance = CUBE_VIEWER_RADIUS;

  const spherical = new THREE.Spherical();
  const mainTarget = new THREE.Vector3();
  const mainPosition = new THREE.Vector3();

  let isDraggingMini = false;
  let pointerDownPos: { x: number; y: number } | null = null;
  let clickTargetMesh: THREE.Mesh | null = null;
  let rafId: number;

  type MainControls = {
    getPosition?: (out: THREE.Vector3, receiveEndValue?: boolean) => void;
    getTarget?: (out: THREE.Vector3, receiveEndValue?: boolean) => void;
    setLookAt?: (px: number, py: number, pz: number, tx: number, ty: number, tz: number, enableTransition?: boolean) => void;
  };

  function getMainSpherical(): THREE.Spherical | null {
    const ctrl = world.camera.controls as MainControls;
    if (ctrl?.getPosition) ctrl.getPosition(mainPosition, true);
    else if ("position" in world.camera && world.camera.position) mainPosition.copy((world.camera as { position: THREE.Vector3 }).position);
    else return null;
    if (ctrl?.getTarget) ctrl.getTarget(mainTarget, true);
    else mainTarget.set(0, 0, 0);
    spherical.setFromVector3(mainPosition.clone().sub(mainTarget));
    return spherical.clone();
  }

  function setMainFromSpherical(s: THREE.Spherical): void {
    const ctrl = world.camera.controls as MainControls;
    if (!ctrl?.getTarget || !ctrl?.setLookAt) return;
    ctrl.getTarget(mainTarget, true);
    const newPos = new THREE.Vector3().setFromSpherical(s).add(mainTarget);
    ctrl.setLookAt(newPos.x, newPos.y, newPos.z, mainTarget.x, mainTarget.y, mainTarget.z, false);
  }

  function miniSpherical(): THREE.Spherical {
    return spherical.setFromVector3(camera.position.clone().sub(controls.target));
  }

  function syncMainToMini(): void {
    if (isDraggingMini) return;
    const s = getMainSpherical();
    if (!s) return;
    camera.position.setFromSpherical(new THREE.Spherical(CUBE_VIEWER_RADIUS, s.phi, s.theta));
    controls.update();
  }

  function syncMiniToMain(): void {
    if (!isDraggingMini) return;
    const s = miniSpherical().clone();
    const mainS = getMainSpherical();
    if (mainS && mainS.radius > 0) s.radius = mainS.radius;
    setMainFromSpherical(s);
  }

  controls.addEventListener("start", () => {
    isDraggingMini = true;
    if (hoveredMesh) {
      setHighlight(hoveredMesh, false);
      hoveredMesh = null;
      renderer.domElement.style.cursor = "";
    }
  });
  controls.addEventListener("end", () => { isDraggingMini = false; });

  function onMouseMove(e: MouseEvent): void {
    if (isDraggingMini || pickableMeshes.length === 0) return;

    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const hits = raycaster.intersectObjects(pickableMeshes, false);
    const hit = hits.length > 0 ? (hits[0].object as THREE.Mesh) : null;

    if (hit !== hoveredMesh) {
      if (hoveredMesh) setHighlight(hoveredMesh, false);
      hoveredMesh = hit;
      if (hoveredMesh) setHighlight(hoveredMesh, true);
      renderer.domElement.style.cursor = hoveredMesh ? "pointer" : "";
    }
  }

  function onMouseLeave(): void {
    if (hoveredMesh) {
      setHighlight(hoveredMesh, false);
      hoveredMesh = null;
      renderer.domElement.style.cursor = "";
    }
  }

  function onPointerDown(e: PointerEvent): void {
    pointerDownPos = { x: e.clientX, y: e.clientY };
    const rect = renderer.domElement.getBoundingClientRect();
    const mx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const my = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(new THREE.Vector2(mx, my), camera);
    const hits = raycaster.intersectObjects(pickableMeshes, false);
    clickTargetMesh = hits.length > 0 ? (hits[0].object as THREE.Mesh) : null;
  }

  function onPointerUp(e: PointerEvent): void {
    const target = clickTargetMesh;
    clickTargetMesh = null;

    if (!pointerDownPos || !onFaceClick || !target || !cubeModel) {
      pointerDownPos = null;
      return;
    }
    const dx = e.clientX - pointerDownPos.x;
    const dy = e.clientY - pointerDownPos.y;
    pointerDownPos = null;
    if (dx * dx + dy * dy > 16) return;

    let direction: THREE.Vector3;

    if (target.userData.isHitProxy) {
      direction = (target.userData.hitDirection as THREE.Vector3).clone();
    } else {
      const cubeBox = new THREE.Box3().setFromObject(cubeModel);
      const cubeCenter = new THREE.Vector3();
      cubeBox.getCenter(cubeCenter);

      const meshBox = new THREE.Box3().setFromObject(target);
      const meshCenter = new THREE.Vector3();
      meshBox.getCenter(meshCenter);

      direction = meshCenter.clone().sub(cubeCenter);

      if (direction.lengthSq() < 1e-6) return;
      direction.normalize();
    }

    onFaceClick(direction).catch(console.warn);
  }

  renderer.domElement.addEventListener("mousemove", onMouseMove);
  renderer.domElement.addEventListener("mouseleave", onMouseLeave);
  renderer.domElement.addEventListener("pointerdown", onPointerDown);
  renderer.domElement.addEventListener("pointerup", onPointerUp);

  function tick(): void {
    syncMainToMini();
    syncMiniToMain();
    renderer.render(scene, camera);
    rafId = requestAnimationFrame(tick);
  }
  rafId = requestAnimationFrame(tick);

  function onResize(): void {
    const size = Math.min(MINI_VIEWER_SIZE, container.clientWidth || MINI_VIEWER_SIZE, container.clientHeight || MINI_VIEWER_SIZE) || MINI_VIEWER_SIZE;
    renderer.setSize(size, size);
    camera.updateProjectionMatrix();
  }
  const ro = new ResizeObserver(onResize);
  ro.observe(container);
  onResize();

  function disposeModel(model: THREE.Object3D): void {
    model.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.geometry?.dispose();
        if (Array.isArray(child.material)) {
          child.material.forEach((m) => m.dispose());
        } else if (child.material) {
          child.material.dispose();
        }
      }
    });
  }

  return function dispose(): void {
    cancelAnimationFrame(rafId);
    ro.disconnect();
    controls.dispose();
    renderer.domElement.removeEventListener("mousemove", onMouseMove);
    renderer.domElement.removeEventListener("mouseleave", onMouseLeave);
    renderer.domElement.removeEventListener("pointerdown", onPointerDown);
    renderer.domElement.removeEventListener("pointerup", onPointerUp);
    renderer.dispose();
    if (cubeModel) {
      scene.remove(cubeModel);
      disposeModel(cubeModel);
    }
    for (const proxy of faceProxies) {
      scene.remove(proxy);
      proxy.geometry.dispose();
      (proxy.material as THREE.Material).dispose();
    }
    faceProxies.length = 0;
    if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
  };
}
