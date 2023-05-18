// @ts-check

import Editor from "./components/Editor.js";
import "./styles/vars.css";
import "./styles/index.css";
import "./styles/texteditor.css";
import "./styles/commandpalette.css";

const editor = new Editor(document.body);
editor.init();
