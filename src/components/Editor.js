// @ts-check

import Block from "./Block.js";

export default class Editor {
  constructor() {
    this.blocks = /** @type {Block[]} */ ([]);
    this.element = document.createElement("div");
  }

  init() {
    this.element.classList.add("text-editor");
    document.body.appendChild(this.element);

    if (this.blocks.length === 0) this.blocks.push(this.createBlock());
    this.blocks.forEach((block) => this.element.appendChild(block));
  }

  /**
   * @todo implement this
   */
  destroy() {}

  /**
   * Creates an empty block element
   *
   * @returns {Block}
   */
  createBlock() {
    return /** @type {Block} */ (
      document.createElement("div", {
        is: "editable-div",
      })
    );
  }
}
