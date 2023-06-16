// @ts-check

import Block from "./Block.js";
import CommandPalette from "./CommandPalette.js";
import addEventListener from "../utils/addEventListener.js";

/**
 * @todo refactor to extend HTMLDivElement
 */
export default class Editor {
  /**
   *
   * @param {HTMLElement} root
   */
  constructor(root) {
    this.root = root;
    this.element = document.createElement("div");
    this.blocks = /** @type {Block[]} */ ([]);
    this.pageTitle = /** @type {Block} */ (undefined);
    this.commandPalette = /** @type {CommandPalette} */ (undefined);
  }

  /**
   *
   * @param {{ blocks: { type: string; content: string }[] }} [json]
   * @param {{ [eventName: string]: (event: Event, block: Block) => void }} [events]
   * @returns
   */
  init(json, events) {
    this.element.classList.add("text-editor");
    this.root.appendChild(this.element);

    if (json) {
      const { blocks } = json;

      this.blocks = blocks.map((block) => {
        const { type, content } = block;
        const newBlock = this.createBlock(type);
        newBlock.innerHTML = content;
        return newBlock;
      });

      this.pageTitle = this.blocks[0];
    } else {
      this.pageTitle = this.createBlock("h1");
      this.pageTitle.placeholder = "Untitled";

      this.blocks.push(this.pageTitle, this.createBlock("default"));
    }

    this.blocks.forEach((block) => {
      this.element.appendChild(block);

      Object.entries(events || {}).forEach(([eventName, callback]) => {
        block.addEventListener(eventName, () => callback(event, block));
      });
    });

    addEventListener("contextmenu", (event) => {
      if (
        this.commandPalette ||
        (event.target !== this.element &&
          !this.blocks.includes(/** @type {Block} */ (event.target)))
      )
        return;

      event.preventDefault();
      // @ts-ignore
      const { clientX: x, clientY: y } = event;

      const commandPalette = /** @type {CommandPalette} */ (
        document.createElement("div", {
          is: "command-palette",
        })
      ).init(x, y);

      this.commandPalette = commandPalette;
    });

    addEventListener("newCommandPalette", (event) => {
      if (this.commandPalette) return;

      const { block } = event.detail;
      const { x, y } = block.getBoundingClientRect();

      const commandPalette = /** @type {CommandPalette} */ (
        document.createElement("div", {
          is: "command-palette",
        })
      ).init(x + Block.Padding, y + block.getLineHeight() + Block.Padding * 2);

      this.commandPalette = commandPalette;
    });

    addEventListener(["destroyCommandPalette", "mousedown"], () => {
      if (!this.commandPalette) return;

      this.commandPalette.destroy();
      this.commandPalette = undefined;
    });

    addEventListener("newBlock", (event) => {
      const { block, trigger } = event.detail;
      trigger.preventDefault();

      if (this.commandPalette) return this.commandPalette.executeCommand();

      const newBlock = this.createBlock();
      block.after(newBlock);
      this.blocks.push(newBlock);

      newBlock.focus();

      if (block !== this.pageTitle) block.placeholder = "";
      block.blur();
    });

    addEventListener("changeFocus", (event) => {
      const { block, trigger, key } = event.detail;

      if (!this.commandPalette)
        return /** @type {Block} */ (
          key === "ArrowUp" ? block.previousSibling : block.nextSibling
        )?.focus();

      trigger.preventDefault();
      this.commandPalette.changeSelectedCommand(key);
    });

    return this;
  }

  /**
   * @todo implement this
   */
  destroy() {}

  /**
   * Creates an empty block element
   *
   * @param {string} [type]
   * @returns {Block}
   */
  createBlock(type = Block.Types.Default) {
    const block = /** @type {Block} */ (
      document.createElement("div", {
        is: "editor-block",
      })
    );

    block.type = type;
    return block;
  }

  toJSON() {
    return { blocks: this.blocks.map((block) => block.toJSON()) };
  }
}
