// @ts-check

import Block from "../components/Block.js";
import dispatchEvent from "../utils/dispatchEvent.js";

/**
 *
 * @param {KeyboardEvent} event
 * @this Block
 */
export function keyDownHandler(event) {
  let eventName = "";

  switch (event.key) {
    case "Backspace":
      eventName = "destroyCommandPalette";

      if (this.textContent.length === 0) {
        event.preventDefault();
        const previousSibling = /** @type {HTMLElement} */ (
          this.previousSibling
        );

        if (previousSibling) {
          previousSibling.focus();
          this.remove();
        }
      }
      break;

    case "/":
      eventName = "newCommandPalette";
      break;

    case "Enter":
      eventName = "newBlock";
      break;

    case "ArrowUp":
    case "ArrowDown":
      eventName = "changeFocus";
      break;

    default:
      return;
  }

  if (eventName)
    dispatchEvent(eventName, {
      block: this,
      trigger: event,
      key: event.key,
    });
}
