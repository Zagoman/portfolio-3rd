import { animate, stagger, spring } from "https://cdn.skypack.dev/motion";

export default class UIAnim {
  constructor() {
    this.HTML = {
      burgerTrigger: document.querySelector("#burger_trigger"),
      closeMenuTrigger: document.querySelector(".close-menu_trigger"),
      menu: document.querySelector("#menu"),
    };

    this._Init();
  }

  _Init() {
    this.HTML.burgerTrigger.addEventListener("click", () => {
      this._AnimateMenu();
    });
    this.HTML.closeMenuTrigger.addEventListener("click", () => {
      this._AnimateMenu();
    });
  }

  _AnimateMenu() {
    if (this.HTML.menu.dataset.menu === "closed") {
      animate(this.HTML.menu, { transform: "translate(0,0)" }, { delay: 0, easing: "ease-in-out" });
      this.HTML.menu.dataset.menu = "open";
    } else {
      animate(this.HTML.menu, { transform: "translate(-100%,0)" }, { delay: 0, easing: "ease-in-out" });
      this.HTML.menu.dataset.menu = "closed";
    }
  }
}
