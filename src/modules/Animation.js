import * as THREE from "three";
import map from "./Map";
import { camera } from "./Camera";
import { renderer } from "./Renderer";
import { scene } from "./Scene";
import { mesh } from "./Mesh";

let mouseX, mouseY;
const header = document.querySelector("header");
let containerWidth = window.innerWidth - header.offsetWidth;
let containerHeight = window.innerHeight;
const clock = new THREE.Clock();
const tick = () => {
  //   // clock
  const elapsedTime = clock.getElapsedTime();
  window.requestAnimationFrame(tick);
  mesh.rotation.y = map(mouseX, 0, containerWidth, -Math.PI / 5, Math.PI / 5);
  mesh.rotation.x = map(mouseY, 0, containerHeight, -Math.PI / 5, Math.PI / 5);
  camera.position.y = Math.sin(elapsedTime) * 2;
  camera.position.x = Math.cos(elapsedTime) * 2;
  camera.lookAt(mesh.position);
  //Render
  renderer.render(scene, camera);
};

document.addEventListener("mousemove", (e) => {
  mouseX = e.offsetX;
  mouseY = e.offsetY;
});

export { tick, containerWidth, containerHeight, header };
