import * as THREE from "three";
const rectLight = new THREE.RectAreaLight(0xf5769d, 1.3, 60, 60);
const rectLight2 = new THREE.RectAreaLight(0xfae4e1, 0.6, 60, 60);
const ambientLight = new THREE.AmbientLight(0x2d1ef0, 0.4);

export { rectLight, rectLight2, ambientLight };
