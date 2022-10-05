"use strict";
import * as THREE from "three";
import { camera } from "./modules/Camera";
import { renderer } from "./modules/Renderer";
import { scene } from "./modules/Scene";
import { mesh } from "./modules/Mesh";
import { tick } from "./modules/Animation";
import { rectLight, rectLight2, ambientLight } from "./modules/Lights";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js";

scene.add(mesh);

rectLight.position.set(10, 25, 0);
rectLight.lookAt(0, 0, 0);
rectLight2.position.set(-25, -40, 0);
rectLight2.lookAt(0, 0, 0);
scene.add(rectLight);
scene.add(rectLight2);
scene.add(ambientLight);

camera.position.z = 25;
document.addEventListener("DOMContentLoaded", () => {
  document.body.appendChild(renderer.domElement);
  tick();
});
