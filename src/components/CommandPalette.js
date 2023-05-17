// @ts-check

export default class CommandPalette extends HTMLDivElement {
  constructor() {
    super();

    this.classList.add("command-palette");
  }

  /**
   * @param {number} x
   * @param {number} y
   */
  init(x, y) {
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
    this.style.transform = "scale(.8)";
    this.style.opacity = "0%";
    document.body.appendChild(this);

    this.style.animationName = "command-palette-appear";

    return this;
  }

  destroy() {
    this.style.animationName = "command-palette-disappear";

    setTimeout(() => {
      this.remove();
    }, 200);
  }
}

customElements.define("command-palette", CommandPalette, { extends: "div" });
