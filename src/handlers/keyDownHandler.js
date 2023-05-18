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
      event.preventDefault();
      /** @type {HTMLElement} */ (this.previousSibling)?.focus();
      break;

    case "ArrowDown":
      event.preventDefault();
      /** @type {HTMLElement} */ (this.nextSibling)?.focus();
      break;

    default:
      return;
  }

  if (eventName)
    dispatchEvent(eventName, {
      block: this,
      trigger: event,
    });
}
