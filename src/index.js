// @ts-check

import Editor from "./components/Editor.js";
import "./styles/vars.css";
import "./styles/index.css";
import "./styles/texteditor.css";
import "./styles/commandpalette.css";

const editor = new Editor(document.body);
editor.init();

const exportButton = document.querySelector("#export-button");
exportButton.addEventListener("click", () => {
  console.log(editor.toJSON());
});
