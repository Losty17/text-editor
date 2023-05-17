// @ts-check

import { keyDownHandler } from "../handlers/keyDownHandler.js";

export default class Block extends HTMLDivElement {
  static Types = /** @type {const} */ ({
    Default: "default",
    Title1: "title1",
    Title2: "title2",
    Title3: "title3",
    Title4: "title4",
    Title5: "title5",
    Title6: "title6",
    Paragraph: "paragraph",
  });

  constructor() {
    super();

    this.classList.add("text-editor-block");
    this.setAttribute("contenteditable", "true");
    this.addEventListener("keydown", keyDownHandler.bind(this));

    this.type = Block.Types.Default;
  }

  getCursorPosition() {
    let position = 0;
    const isSupported = typeof window.getSelection !== "undefined";

    if (isSupported) {
      const selection = window.getSelection();

      if (selection.rangeCount !== 0) {
        const range = window.getSelection().getRangeAt(0);
        const preCaretRange = range.cloneRange();

        preCaretRange.selectNodeContents(this);
        preCaretRange.setEnd(range.endContainer, range.endOffset);
        position = preCaretRange.toString().length;
      }
    }

    return position;
  }

  /**
   *
   * @param {number} position
   */
  setCursorPosition(position) {
    const range = document.createRange();
    const sel = window.getSelection();

    range.setStart(this.childNodes[2], position);
    range.collapse(true);

    sel.removeAllRanges();
    sel.addRange(range);
  }
}

customElements.define("editable-div", Block, { extends: "div" });
