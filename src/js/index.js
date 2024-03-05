import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import printTree from "../js/mesh/tree.js";
import printTangerine from "../js/mesh/tangerine.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffe287);

const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(10, 10, 10);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(2, 4, 3);
scene.add(light);
light.castShadow = true;

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// 나무
const tree = printTree();
scene.add(tree);

const tangerine = printTangerine();
tangerine.position.x = 3;
scene.add(tangerine);

const controls = new OrbitControls(camera, renderer.domElement);

controls.enableDamping = true;

animate();

function animate() {
  renderer.render(scene, camera);
  controls.update();
  requestAnimationFrame(animate);
}

window.addEventListener("resize", () => {
  // 1. 카메라의 종횡비
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
});
