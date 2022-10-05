"use strict";
import * as THREE from "three";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js";

import { AmbientLight, DirectionalLight } from "three";

let mouseX, mouseY;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
const clock = new THREE.Clock();

const geometry = new THREE.TorusGeometry(10, 5, 16, 100);
const material = new THREE.MeshStandardMaterial({ wireframe: false });

const rectLight = new THREE.RectAreaLight(0xf5769d, 1.5, 60, 60);
const rectLight2 = new THREE.RectAreaLight(0xfae4e1, 0.6, 60, 60);
const ambientLight = new THREE.AmbientLight(0x2d1ef0, 0.4);
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);
const controls = new OrbitControls(camera, renderer.domElement);

rectLight.position.set(10, 25, 0);
rectLight.lookAt(0, 0, 0);
rectLight2.position.set(-25, -40, 0);
rectLight2.lookAt(0, 0, 0);
scene.add(rectLight);
scene.add(rectLight2);
scene.add(ambientLight);
// light.add(helper);

camera.position.z = 25;
controls.update();
document.addEventListener("DOMContentLoaded", () => {
  document.body.appendChild(renderer.domElement);
  tick();
});

const tick = () => {
  //   // clock
  const elapsedTime = clock.getElapsedTime();
  window.requestAnimationFrame(tick);
  mesh.rotation.y = map(mouseX, 0, window.innerWidth, -Math.PI / 6, Math.PI / 6);
  mesh.rotation.x = map(mouseY, 0, window.innerHeight, -Math.PI / 6, Math.PI / 6);
  // console.log(Number.prototype.map(0, window.innerWidth, 0, 180));
  // mesh.position.y = Math.sin(elapsedTime) * 1;
  // mesh.position.x = Math.cos(elapsedTime) * 1;
  camera.lookAt(mesh.position);
  // camera.position.x = mouseX;
  // console.log(mouse);
  controls.update();
  // console.log(camera.position);
  //Render
  renderer.render(scene, camera);
};

document.addEventListener("mousemove", (e) => {
  mouseX = e.offsetX;
  mouseY = e.offsetY;
});

function clamp(input, min, max) {
  return input < min ? min : input > max ? max : input;
}

function map(current, in_min, in_max, out_min, out_max) {
  const mapped = ((current - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  return clamp(mapped, out_min, out_max);
}
