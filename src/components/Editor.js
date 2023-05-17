// @ts-check

import Block from "./Block.js";
import CommandPalette from "./CommandPalette.js";

/**
 * @todo refactor to extend HTMLDivElement
 */
export default class Editor {
  constructor() {
    this.blocks = /** @type {Block[]} */ ([]);
    this.element = document.createElement("div");
    this.commandPalette = /** @type {CommandPalette} */ (undefined);
  }

  init() {
    this.element.classList.add("text-editor");
    document.body.appendChild(this.element);

    if (this.blocks.length === 0) this.blocks.push(this.createBlock());
    this.blocks.forEach((block) => this.element.appendChild(block));

    document.addEventListener(
      "newCommandPalette",
      (/** @type {CustomEvent} */ event) => {
        if (this.commandPalette && document.body.contains(this.commandPalette))
          return;

        const { block } = event.detail;
        const { x, y } = block.getBoundingClientRect();

        const commandPalette = /** @type {CommandPalette} */ (
          document.createElement("div", {
            is: "command-palette",
          })
        ).init(
          x + Block.Padding,
          y + block.getLineHeight() + Block.Padding * 2
        );

        commandPalette.innerHTML = `
          <div class="command-palette__item">Title 1</div>
          <div class="command-palette__item">Title 2</div>
        `;

        this.commandPalette = commandPalette;
      }
    );

    return this;
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
        is: "editor-block",
      })
    );
  }
}
