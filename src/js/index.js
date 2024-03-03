import * as THREE from "three";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffe287);

const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(5, 5, 5);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.DirectionalLight(0xffffff);
light.position.set(2, 4, 3);
scene.add(light);

const geometry = new THREE.DodecahedronGeometry(1);
const material = new THREE.MeshStandardMaterial({
  color: 0xffaaaa,
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// 1. 위치
mesh.position.x = 2;
mesh.position.y = 1;
mesh.position.set(0, 2, 1);

// 2. 회전
mesh.rotation.y = 360;
mesh.rotation.y = THREE.MathUtils.degToRad(360);

// 3. 크기
mesh.scale.x = 1.2;
mesh.scale.z = 0.8;

const axesHelper = new THREE.AxesHelper(10);
scene.add(axesHelper);

renderer.render(scene, camera);

function animate() {
  console.log(box.rotation.y);
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
//animate();
window.addEventListener("resize", () => {
  // 1. 카메라의 종횡비
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
});
