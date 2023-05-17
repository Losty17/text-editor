// @ts-check

import EditableDiv from "../EditableDiv.js";

/**
 *
 * @param {KeyboardEvent} event
 * @this {EditableDiv}
 */
export function keyDownHandler(event) {
  if (this.innerText === "" && event.key === "/") {
    console.log("display command palette");
  }
}
