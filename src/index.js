"use strict";
import APP from "./modules/APP";

let _APP = null;
document.addEventListener("DOMContentLoaded", () => {
  _APP = new APP();
});
