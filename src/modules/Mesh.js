import * as THREE from "three";
const geometry = new THREE.TorusGeometry(10, 6, 16, 100);
const material = new THREE.MeshStandardMaterial({ wireframe: false });

const mesh = new THREE.Mesh(geometry, material);
export { mesh };
