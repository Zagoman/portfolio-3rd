("use strict");
import * as THREE from "three";
import { camera } from "./Camera";
import { scene } from "./Scene";
import { mesh } from "./Mesh";
import { rectLight, rectLight2, ambientLight } from "./Lights";
import { containerWidth, containerHeight, header } from "./Animation";
import { renderer } from "./Renderer";

export default class Setup {
  constructor() {
    this.header = document.querySelector("header");
    this.containerWidth = window.innerWidth - header.offsetWidth;
    this.containerHeight = window.innerHeight;
    this._Init();
  }

  _Init() {
    rectLight.position.set(10, 25, 0);
    rectLight.lookAt(mesh.position);
    rectLight2.position.set(-25, -40, 0);
    rectLight2.lookAt(mesh.position);
    mesh.position.set(0, 0, 0);
    scene.add(mesh);
    scene.add(rectLight);
    scene.add(rectLight2);
    scene.add(ambientLight);
    camera.position.z = 35;
    renderer.render(scene, camera);

    window.addEventListener("resize", this._OnWindowResize);
  }

  _OnWindowResize() {
    this.containerWidth = window.innerWidth - header.offsetWidth;
    this.containerHeight = window.innerHeight;
    camera.aspect = this.containerWidth / this.containerHeight;
    renderer.setSize(this.containerWidth, this.containerHeight);

    camera.updateProjectionMatrix();
    renderer.render(scene, camera);
  }
}
