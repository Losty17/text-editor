// @ts-check

import destroyElements from "../utils/destroyElements.js";

/**
 *
 * @param {KeyboardEvent} event
 */
export function keyDownHandler(event) {
  if (event.key === "Backspace") destroyElements(".command-palette");
  else if (event.key === "/")
    document.dispatchEvent(
      new CustomEvent("newCommandPalette", {
        detail: {
          block: this,
          triggerEvent: event,
        },
      })
    );
}
