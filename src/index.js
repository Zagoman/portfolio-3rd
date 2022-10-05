"use strict";
import { renderer } from "./modules/Renderer";
import { tick } from "./modules/Animation";
import Setup from "./modules/Setup";

let _APP = null;
document.addEventListener("DOMContentLoaded", () => {
  document.body.appendChild(renderer.domElement);
  _APP = new Setup();

  tick();
});
