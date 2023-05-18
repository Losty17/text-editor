// @ts-check

import { keyDownHandler } from "../handlers/keyDownHandler.js";

export default class Block extends HTMLDivElement {
  static Padding = 8;
  static DefaultPlaceholder = "Type '/' for commands";
  static Types = /** @type {const} */ ({
    Default: "default",
    Title: "h1",
    Subtitle: "h2",
    Heading: "h3",
    Subheading: "h4",
  });

  constructor() {
    super();

    this.classList.add("text-editor-block");
    this.setAttribute("contenteditable", "true");
    this.addEventListener("keydown", keyDownHandler.bind(this));

    this.type = Block.Types.Default;
    this.placeholder = Block.DefaultPlaceholder;
  }

  get type() {
    return this.getAttribute("type");
  }

  set type(value) {
    this.setAttribute("type", value);
  }

  get placeholder() {
    return this.getAttribute("placeholder");
  }

  set placeholder(value) {
    this.setAttribute("placeholder", value);
  }

  getCursorPosition() {
    let position = 0;

    const selection = window.getSelection();

    if (selection.rangeCount !== 0) {
      const range = window.getSelection().getRangeAt(0);
      const preCaretRange = range.cloneRange();

      preCaretRange.selectNodeContents(this);
      preCaretRange.setEnd(range.endContainer, range.endOffset);
      position = preCaretRange.toString().length;
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

  getLineHeight() {
    var temp = document.createElement(this.nodeName),
      ret;
    temp.setAttribute(
      "style",
      "margin:0; padding:0; " +
        "font-family:" +
        (this.style.fontFamily || "inherit") +
        "; " +
        "font-size:" +
        (this.style.fontSize || "inherit")
    );
    temp.innerHTML = "A";

    this.parentNode.appendChild(temp);
    ret = temp.clientHeight;
    temp.parentNode.removeChild(temp);

    return ret;
  }
}

customElements.define("editor-block", Block, { extends: "div" });
