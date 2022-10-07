"use strict";
import APP from "./modules/APP";
import UIAnim from "./modules/UIAnimations";

let _APP = null;
let _UIAnimations = null;
document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth < 1000) {
    document.body.style.height = window.innerHeight + "px";
    document.querySelectorAll("section").forEach((section) => {
      section.style.minHeight = `${window.innerHeight}px`;
    });
    document.querySelector("header").style.height = window.innerHeight + "px";
  }
  _APP = new APP();
  _UIAnimations = new UIAnim();
});
