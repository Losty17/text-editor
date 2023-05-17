// @ts-check

import Block from "../components/Block.js";

/**
 *
 * @param {KeyboardEvent} event
 * @this {Block}
 */
export function keyDownHandler(event) {
  if (this.innerText === "" && event.key === "/") {
    console.log("display command palette");
  }
}
