("use strict");
import * as THREE from "three";
import map from "./Map";
import { mesh } from "./Mesh";
import { rectLight, rectLight2, ambientLight } from "./Lights";

export default class APP {
  constructor() {
    this._Init();
  }

  _Init() {
    this.HTML = {
      header: document.querySelector("header"),
      main: document.querySelector("main"),
    };
    this.mousePos = {
      x: 0,
      y: 0,
    };
    this.containerSizes = {
      w: window.innerWidth - this.HTML.header.offsetWidth,
      h: window.innerHeight,
    };
    this.clock = new THREE.Clock();
    this.renderer = new THREE.WebGLRenderer();
    this.camera = new THREE.PerspectiveCamera(75, this.containerSizes.w / this.containerSizes.h, 0.1, 100);
    this.mesh = mesh;
    this.scene = new THREE.Scene();
    this._SetEventListeners();
    rectLight.position.set(10, 25, 0);
    rectLight.lookAt(this.mesh.position);
    rectLight2.position.set(-25, -40, 0);
    rectLight2.lookAt(this.mesh.position);

    // Set initial positions
    this.camera.position.z = 45;
    this.mesh.position.set(0, 0, 0);

    // add elements to the scene
    this.scene.add(this.mesh);
    this.scene.add(rectLight);
    this.scene.add(rectLight2);
    this.scene.add(ambientLight);

    this.renderer.setSize(this.containerSizes.w, this.containerSizes.h);
    this.renderer.render(this.scene, this.camera);
    this.scene.background = new THREE.Color(0x1b1b1b);
    this.HTML.main.appendChild(this.renderer.domElement);
    this._RAF.bind(this);
    this._RAF();
  }

  _OnWindowResize() {
    this.containerSizes.w = window.innerWidth - this.HTML.header.offsetWidth;
    this.containerSizes.h = window.innerHeight;
    this.camera.aspect = this.containerSizes.w / this.containerSizes.h;
    this.renderer.setSize(this.containerSizes.w, this.containerSizes.h);

    this.camera.updateProjectionMatrix();
    this.renderer.render(this.scene, this.camera);
  }

  _RAF() {
    window.requestAnimationFrame((t) => {
      const elapsedTime = this.clock.getElapsedTime();
      this.mesh.rotation.y = map(this.mousePos.x, 0, this.containerSizes.w, -Math.PI / 5, Math.PI / 5);
      this.mesh.rotation.x = map(this.mousePos.y, 0, this.containerSizes.h, -Math.PI / 5, Math.PI / 5);
      this.camera.position.y = Math.sin(elapsedTime) * 2;
      this.camera.position.x = Math.cos(elapsedTime) * 2;
      this.camera.lookAt(0, 0, 0);
      //Render
      this.renderer.render(this.scene, this.camera);
      this._RAF();
    });
  }

  _SetEventListeners() {
    document.addEventListener("mousemove", (e) => {
      // console.log(e);
      this.mousePos.x = e.pageX;
      this.mousePos.y = e.pageY;
    });
    window.addEventListener("resize", (e) => {
      this._OnWindowResize();
    });
  }
}
