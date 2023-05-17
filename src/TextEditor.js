// @ts-check

import EditableDiv from "./EditableDiv.js";

export default class TextEditor {
  constructor() {
    /**
     * @type {Array<EditableDiv>}
     */
    this.blocks = [];
    this.element = document.createElement("div");
  }

  init() {
    this.element.classList.add("text-editor");
    document.body.appendChild(this.element);

    if (this.blocks.length === 0) this.blocks.push(this.createBlock());
    this.blocks.forEach((block) => this.element.appendChild(block));
  }

  destroy() {}

  /**
   * @returns {EditableDiv}
   */
  createBlock() {
    return /** @type {EditableDiv} */ (
      document.createElement("div", {
        is: "editable-div",
      })
    );
  }
}
