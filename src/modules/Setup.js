("use strict");
import * as THREE from "three";
import { camera } from "./Camera";
import { scene } from "./Scene";
import { mesh } from "./Mesh";
import { rectLight, rectLight2, ambientLight } from "./Lights";

export default class Setup {
  constructor() {
    this._Init();
  }

  _Init() {
    rectLight.position.set(10, 25, 0);
    rectLight.lookAt(0, 0, 0);
    rectLight2.position.set(-25, -40, 0);
    rectLight2.lookAt(0, 0, 0);
    scene.add(mesh);
    scene.add(rectLight);
    scene.add(rectLight2);
    scene.add(ambientLight);
    camera.position.z = 25;
  }
}
