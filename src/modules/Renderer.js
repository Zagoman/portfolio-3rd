import * as THREE from "three";
import { containerHeight, containerWidth } from "./Animation";

const renderer = new THREE.WebGLRenderer();
renderer.setSize(containerWidth, containerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

export { renderer };
