import { animate, stagger, spring } from "https://cdn.skypack.dev/motion";

export default class UIAnim {
  constructor() {
    this.HTML = {
      burgerTrigger: document.querySelector("#burger_trigger"),
      closeMenuTrigger: document.querySelector(".close-menu_trigger"),
      menu: document.querySelector("#menu"),
      topAnchors: document.querySelectorAll("a[data-anchor='hero']"),
      projectsAnchors: document.querySelectorAll("a[data-anchor='projects']"),
      skillsAnchors: document.querySelectorAll("a[data-anchor='skills']"),
      techStackAnchors: document.querySelectorAll("a[data-anchor='tech']"),
      contactAnchors: document.querySelectorAll("a[data-anchor='contact']"),
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
    this.HTML.contactAnchors.forEach((el) => console.log(el.getBoundingClientRect()));
    this._ScrollEventListeners();
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

  _ScrollEventListeners() {
    console.log(this.HTML.skillsAnchors.offsetTop);
    console.log(this.HTML.techStackAnchors.offsetTop);
    console.log(this.HTML.topAnchors.offsetTop);
    console.log(this.HTML.contactAnchors.offsetTop);

    // Scroll to projects
    this.HTML.projectsAnchors.forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("hello");
        this._ScrollTo(document.querySelector("#projects"));
      });
    });

    // Scroll to Skills
    this.HTML.skillsAnchors.forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("hello");
        this._ScrollTo(document.querySelector("#skills"));
      });
    });

    // Scroll to Tech Stack
    this.HTML.techStackAnchors.forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("hello");
        this._ScrollTo(document.querySelector("#tech"));
      });
    });

    // Scroll to Top
    this.HTML.topAnchors.forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("hello");
        this._ScrollTo(document.querySelector("section:nth-child(1)"));
      });
    });

    // Scroll to Contact
    this.HTML.contactAnchors.forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("hello");
        this._ScrollTo(document.querySelector("#contact"));
      });
    });
  }

  _ScrollTo(target) {
    console.log(target.offsetTop);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

const menuBtn = document.getElementById("menuBtn");
menuBtn?.addEventListener("click", function (e) {
  e.target.preventDefault();
  const target = document.getElementById("some-selector");
  target.scrollIntoView({ behavior: "smooth", block: "start" });
});
