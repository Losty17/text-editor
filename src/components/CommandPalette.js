// @ts-check

import dispatchEvent from "../utils/dispatchEvent.js";
import Block from "./Block.js";

const commands = [
  {
    name: "Paragraph",
    type: "default",
    icon: "default",
    shortcut: "",
    description: "Convert the selected block into a simple Paragraph.",
  },
  {
    name: "Title",
    type: "h1",
    icon: "h1",
    shortcut: "",
    description: "Convert the selected block into a Title.",
  },
  {
    name: "Subtitle",
    type: "h2",
    icon: "h2",
    shortcut: "",
    description: "Convert the selected block into a Subtitle.",
  },
  {
    name: "Heading",
    type: "h3",
    icon: "h3",
    shortcut: "",
    description: "Convert the selected block into a Heading.",
  },
  {
    name: "Subheading",
    type: "h4",
    icon: "h4",
    shortcut: "",
    description: "Convert the selected block into a Subheading.",
  },
];

export default class CommandPalette extends HTMLDivElement {
  constructor() {
    super();
    this.commandList = /** @type {HTMLElement[]} */ ([]);
    this.selectedCommand = 0;
    this.classList.add("command-palette");
  }

  /**
   * @param {number} x
   * @param {number} y
   */
  init(x, y) {
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
    this.style.transform = "scale(.8)";
    this.style.opacity = "0%";
    this.#buildCommandList();
    document.body.appendChild(this);

    this.style.animationName = "command-palette-appear";

    return this;
  }

  destroy() {
    this.style.animationName = "command-palette-disappear";

    setTimeout(() => this.remove(), 200);
  }

  /**
   *
   * @param {string} key
   */
  changeSelectedCommand(key) {
    if (key === "ArrowUp") {
      this.selectedCommand =
        this.selectedCommand === 0 ? 0 : this.selectedCommand - 1;
    } else {
      this.selectedCommand =
        this.selectedCommand === this.commandList.length - 1
          ? this.commandList.length - 1
          : this.selectedCommand + 1;
    }

    this.commandList[this.selectedCommand].scrollIntoView({
      block: "end",
      behavior: "smooth",
    });

    this.#updateSelectedState();
  }

  executeCommand() {
    const { type } = this.commandList[this.selectedCommand].dataset;
    const block = /** @type {Block} */ (
      document.querySelector(".text-editor-block:focus")
    );

    if (block) {
      block.type = type;
      const newText = block.innerText.substring(
        0,
        block.innerText.lastIndexOf("/")
      );

      block.innerText = newText;
    }

    dispatchEvent("destroyCommandPalette", {
      block,
    });
  }

  #updateSelectedState() {
    this.querySelectorAll(".selected").forEach((element) =>
      element.classList.remove("selected")
    );

    this.commandList[this.selectedCommand].classList.add("selected");
  }

  #buildCommandList() {
    commands.forEach((command) => {
      const { name, type, icon, shortcut, description } = command;

      const iconElement = document.createElement("span");
      iconElement.classList.add("command-palette-command-icon");
      iconElement.setAttribute("data-icon", icon);

      const commandElement = document.createElement("div");
      commandElement.classList.add("command-palette-command");

      const nameElementContainer = document.createElement("span");
      nameElementContainer.classList.add(
        "command-palette-command-name-container"
      );

      const nameElement = document.createElement("span");
      nameElement.classList.add("command-palette-command-name");
      nameElement.innerText = name;

      const shortcutElement = document.createElement("span");
      shortcutElement.classList.add("command-palette-command-shortcut");
      shortcutElement.innerText = shortcut ? `(${shortcut})` : "";

      nameElementContainer.appendChild(nameElement);
      nameElementContainer.appendChild(shortcutElement);

      const descriptionElement = document.createElement("span");
      descriptionElement.classList.add("command-palette-command-description");
      descriptionElement.innerText = `${description}`;

      const contentElement = document.createElement("span");
      contentElement.classList.add("command-palette-command-content");

      contentElement.appendChild(nameElementContainer);
      contentElement.appendChild(descriptionElement);

      commandElement.appendChild(iconElement);
      commandElement.appendChild(contentElement);

      commandElement.setAttribute("data-type", type);
      commandElement.addEventListener("click", () => {
        this.selectedCommand = this.commandList.indexOf(commandElement);
        this.executeCommand();
      });
      commandElement.addEventListener("mouseenter", () => {
        this.selectedCommand = this.commandList.indexOf(commandElement);
        this.#updateSelectedState();
      });

      this.appendChild(commandElement);
      this.commandList.push(commandElement);
    });

    this.#updateSelectedState();
  }
}

customElements.define("command-palette", CommandPalette, { extends: "div" });
