(()=>{"use strict";var e={609:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(81),a=n.n(o),i=n(645),s=n.n(i)()(a());s.push([e.id,".command-palette {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    border-radius: 6px;\n    background: #fff;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n    animation-duration: 0.2s;\n    animation-fill-mode: forwards;\n    animation-timing-function: cubic-bezier(.5,.1,.4,2);\n    max-height: 312px;\n    overflow-y: auto;\n}\n\n.command-palette-command {\n    display: flex;\n    flex-direction: row;\n    gap: 12px;\n    padding: 16px 12px;\n    border-radius: 4px;\n    cursor: pointer;\n    transition: background 0.1s ease-in-out;\n    border-bottom: 1px solid #eee;\n}\n\n.command-palette-command.selected {\n    background: #eee;\n}\n\n.command-palette-command-icon {\n    width: 48px;\n    height: 48px;\n    background-color: black;\n    align-self: center;\n    /* background: attr(data-icon) center center no-repeat; */\n}\n\n.command-palette-command-content {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n}\n\n.command-palette-command-name-container {\n    display: flex;\n    flex-direction: row;\n    gap: 4px;\n}\n\n.command-palette-command-name {\n    font-weight: bold;\n}\n\n.command-palette-command-shortcut {\n    color: #999;\n}\n\n.command-palette-command-description {\n}\n\n/* Animations */\n@keyframes command-palette-appear {\n    0% {\n        transform: scale(.9);\n        opacity: 0%;\n    }\n    100% {\n        transform: scale(1);\n        opacity: 100%;\n    }\n}\n\n@keyframes command-palette-disappear {\n    0% {\n        transform: scale(1);\n        opacity: 100%;\n    }\n    100% {\n        transform: scale(.9);\n        opacity: 0%;\n    }\n}",""]);const r=s},771:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(81),a=n.n(o),i=n(645),s=n.n(i)()(a());s.push([e.id,"body {\n    margin: 0;\n    padding: 0;\n    height: 100vh;\n    width: 100vw;\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n[placeholder]:empty::before {\n    content: attr(placeholder);\n    color: #555; \n}\n\n[placeholder]:not(:empty):focus::before {\n    content: \"\";\n}",""]);const r=s},703:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(81),a=n.n(o),i=n(645),s=n.n(i)()(a());s.push([e.id,'.text-editor {\n    display: flex;\n    flex-direction: column;\n    margin: 0 auto;\n    padding: 8px;\n}\n\n.text-editor-block {\n    padding: 8px;\n}\n\n.text-editor-block:focus {\n    outline: none;\n}\n\n.text-editor-block[type="default"] {\n    text-align: justify;\n}\n\n.text-editor-block[type="h1"] {\n    font-size: 2rem;\n    font-weight: bold;\n}\n\n.text-editor-block[type="h2"] {\n    font-size: 1.5rem;\n    font-weight: bold;\n}\n\n.text-editor-block[type="h3"] {\n    font-size: 1.17rem;\n    font-weight: bold;\n}\n\n.text-editor-block[type="h4"] {\n    font-size: 1rem;\n    font-weight: bold;\n}',""]);const r=s},29:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(81),a=n.n(o),i=n(645),s=n.n(i)()(a());s.push([e.id,":root {\n}",""]);const r=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(o)for(var r=0;r<this.length;r++){var c=this[r][0];null!=c&&(s[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&s[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},s=[],r=0;r<e.length;r++){var c=e[r],d=o.base?c[0]+o.base:c[0],l=i[d]||0,m="".concat(d," ").concat(l);i[d]=l+1;var p=n(m),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(u);else{var h=a(u,o);o.byIndex=r,t.splice(r,0,{identifier:m,updater:h,references:1})}s.push(m)}return s}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var i=o(e=e||[],a=a||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var r=n(i[s]);t[r].references--}for(var c=o(e,a),d=0;d<i.length;d++){var l=n(i[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=c}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,a&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{function e(e,t){document.dispatchEvent(new CustomEvent(e,{detail:t}))}function t(t){let n="";switch(t.key){case"Backspace":if(n="destroyCommandPalette",0===this.textContent.length){t.preventDefault();const e=this.previousSibling;e&&(e.focus(),this.remove())}break;case"/":n="newCommandPalette";break;case"Enter":n="newBlock";break;case"ArrowUp":case"ArrowDown":n="changeFocus";break;default:return}n&&e(n,{block:this,trigger:t,key:t.key})}class o extends HTMLDivElement{static Padding=8;static DefaultPlaceholder="Type '/' for commands";static Types={Default:"default",Title:"h1",Subtitle:"h2",Heading:"h3",Subheading:"h4"};constructor(){super(),this.classList.add("text-editor-block"),this.setAttribute("contenteditable","true"),this.addEventListener("keydown",t.bind(this)),this.type=o.Types.Default,this.placeholder=o.DefaultPlaceholder}get type(){return this.getAttribute("type")}set type(e){this.setAttribute("type",e)}get placeholder(){return this.getAttribute("placeholder")}set placeholder(e){this.setAttribute("placeholder",e)}getCursorPosition(){let e=0;if(0!==window.getSelection().rangeCount){const t=window.getSelection().getRangeAt(0),n=t.cloneRange();n.selectNodeContents(this),n.setEnd(t.endContainer,t.endOffset),e=n.toString().length}return e}setCursorPosition(e){const t=document.createRange(),n=window.getSelection();t.setStart(this.childNodes[2],e),t.collapse(!0),n.removeAllRanges(),n.addRange(t)}getLineHeight(){var e,t=document.createElement(this.nodeName);return t.setAttribute("style","margin:0; padding:0; font-family:"+(this.style.fontFamily||"inherit")+"; font-size:"+(this.style.fontSize||"inherit")),t.innerHTML="A",this.parentNode.appendChild(t),e=t.clientHeight,t.parentNode.removeChild(t),e}toJSON(){return{type:this.type,content:this.innerHTML}}}customElements.define("editor-block",o,{extends:"div"});const a=[{name:"Paragraph",type:"default",icon:"default",shortcut:"",description:"Convert the selected block into a simple Paragraph."},{name:"Title",type:"h1",icon:"h1",shortcut:"",description:"Convert the selected block into a Title."},{name:"Subtitle",type:"h2",icon:"h2",shortcut:"",description:"Convert the selected block into a Subtitle."},{name:"Heading",type:"h3",icon:"h3",shortcut:"",description:"Convert the selected block into a Heading."},{name:"Subheading",type:"h4",icon:"h4",shortcut:"",description:"Convert the selected block into a Subheading."}];class i extends HTMLDivElement{constructor(){super(),this.commandList=[],this.selectedCommand=0,this.classList.add("command-palette")}init(e,t){return this.style.left=`${e}px`,this.style.top=`${t}px`,this.style.transform="scale(.8)",this.style.opacity="0%",this.#e(),document.body.appendChild(this),this.style.animationName="command-palette-appear",this}destroy(){this.style.animationName="command-palette-disappear",setTimeout((()=>this.remove()),200)}changeSelectedCommand(e){this.selectedCommand="ArrowUp"===e?0===this.selectedCommand?0:this.selectedCommand-1:this.selectedCommand===this.commandList.length-1?this.commandList.length-1:this.selectedCommand+1,this.commandList[this.selectedCommand].scrollIntoView({block:"end",behavior:"smooth"}),this.#t()}executeCommand(){const{type:t}=this.commandList[this.selectedCommand].dataset,n=document.querySelector(".text-editor-block:focus");if(n){n.type=t;const e=n.innerText.substring(0,n.innerText.lastIndexOf("/"));n.innerText=e}e("destroyCommandPalette",{block:n})}#t(){this.querySelectorAll(".selected").forEach((e=>e.classList.remove("selected"))),this.commandList[this.selectedCommand].classList.add("selected")}#e(){a.forEach((e=>{const{name:t,type:n,icon:o,shortcut:a,description:i}=e,s=document.createElement("span");s.classList.add("command-palette-command-icon"),s.setAttribute("data-icon",o);const r=document.createElement("div");r.classList.add("command-palette-command");const c=document.createElement("span");c.classList.add("command-palette-command-name-container");const d=document.createElement("span");d.classList.add("command-palette-command-name"),d.innerText=t;const l=document.createElement("span");l.classList.add("command-palette-command-shortcut"),l.innerText=a?`(${a})`:"",c.appendChild(d),c.appendChild(l);const m=document.createElement("span");m.classList.add("command-palette-command-description"),m.innerText=`${i}`;const p=document.createElement("span");p.classList.add("command-palette-command-content"),p.appendChild(c),p.appendChild(m),r.appendChild(s),r.appendChild(p),r.setAttribute("data-type",n),r.addEventListener("click",(()=>{this.selectedCommand=this.commandList.indexOf(r),this.executeCommand()})),r.addEventListener("mouseenter",(()=>{this.selectedCommand=this.commandList.indexOf(r),this.#t()})),this.appendChild(r),this.commandList.push(r)})),this.#t()}}function s(e,t){Array.isArray(e)?e.forEach((e=>document.addEventListener(e,t))):document.addEventListener(e,t)}customElements.define("command-palette",i,{extends:"div"});var r=n(379),c=n.n(r),d=n(795),l=n.n(d),m=n(569),p=n.n(m),u=n(565),h=n.n(u),f=n(216),g=n.n(f),y=n(589),b=n.n(y),v=n(29),x={};x.styleTagTransform=b(),x.setAttributes=h(),x.insert=p().bind(null,"head"),x.domAPI=l(),x.insertStyleElement=g(),c()(v.Z,x),v.Z&&v.Z.locals&&v.Z.locals;var k=n(771),C={};C.styleTagTransform=b(),C.setAttributes=h(),C.insert=p().bind(null,"head"),C.domAPI=l(),C.insertStyleElement=g(),c()(k.Z,C),k.Z&&k.Z.locals&&k.Z.locals;var S=n(703),w={};w.styleTagTransform=b(),w.setAttributes=h(),w.insert=p().bind(null,"head"),w.domAPI=l(),w.insertStyleElement=g(),c()(S.Z,w),S.Z&&S.Z.locals&&S.Z.locals;var E=n(609),T={};T.styleTagTransform=b(),T.setAttributes=h(),T.insert=p().bind(null,"head"),T.domAPI=l(),T.insertStyleElement=g(),c()(E.Z,T),E.Z&&E.Z.locals&&E.Z.locals;const L=new class{constructor(e){this.root=e,this.element=document.createElement("div"),this.blocks=[],this.pageTitle=void 0,this.commandPalette=void 0}init(){return this.element.classList.add("text-editor"),this.root.appendChild(this.element),0===this.blocks.length&&(this.pageTitle=this.createBlock("h1"),this.pageTitle.placeholder="Untitled",this.blocks.push(this.pageTitle,this.createBlock("default"))),this.blocks.forEach((e=>this.element.appendChild(e))),s("contextmenu",(e=>{if(e.preventDefault(),this.commandPalette)return;const{clientX:t,clientY:n}=e,o=document.createElement("div",{is:"command-palette"}).init(t,n);this.commandPalette=o})),s("newCommandPalette",(e=>{if(this.commandPalette)return;const{block:t}=e.detail,{x:n,y:a}=t.getBoundingClientRect(),i=document.createElement("div",{is:"command-palette"}).init(n+o.Padding,a+t.getLineHeight()+2*o.Padding);this.commandPalette=i})),s(["destroyCommandPalette","mousedown"],(()=>{this.commandPalette&&(this.commandPalette.destroy(),this.commandPalette=void 0)})),s("newBlock",(e=>{const{block:t,trigger:n}=e.detail;if(n.preventDefault(),this.commandPalette)return this.commandPalette.executeCommand();const o=this.createBlock();t.after(o),this.blocks.push(o),o.focus(),t!==this.pageTitle&&(t.placeholder=""),t.blur()})),s("changeFocus",(e=>{const{block:t,trigger:n,key:o}=e.detail;if(!this.commandPalette)return("ArrowUp"===o?t.previousSibling:t.nextSibling)?.focus();n.preventDefault(),this.commandPalette.changeSelectedCommand(o)})),this}destroy(){}createBlock(e=o.Types.Default){const t=document.createElement("div",{is:"editor-block"});return t.type=e,t}toJSON(){return{blocks:this.blocks.map((e=>e.toJSON()))}}}(document.body);L.init(),document.querySelector("#export-button").addEventListener("click",(()=>{console.log(L.toJSON())}))})()})();