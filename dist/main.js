/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ice-cream-shop.avif */ "./src/ice-cream-shop.avif"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* { \n    margin: 0;\n    padding: 0;\n    background-color: #0f160c;\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n}\n\n\n#content {\n    display: grid;\n    grid-template-columns: 4vw 30vw 1fr 1fr 1fr 1fr;\n    grid-template-rows: 20vh 22.5vh 26.25vh 26.25vh 5vh;\n}\n\n.left-side-bar {\n    grid-area: 1 / 1 / 5 / 2;\n    display: flex;\n\n}\n\n.ballTwo {\n    position: absolute;\n    top: 5%;\n    left: 30%;\n    width: 50vh;\n    height: 50vh;\n    border-radius: 1000px;\n    z-index: 1000;\n    background: linear-gradient(90deg , white 50%, rgb(255, 166, 0) 100%);\n    background-color: rgba(233, 178, 13, 0.6);\n    transition: 3500ms ease-in-out;\n    opacity: 0;\n    filter: drop-shadow(2px 2px 10px rgb(194, 175, 91));\n}\n\n.left-modal-one {\n    background-color: #0f160c;\n    width: 1vw;\n}\n\n.left-modal-two {\n    background-color: #d6d3d1;\n    grid-area: 1 / 1 / 5 / 2;\n    opacity: 0.5;\n    width: 6vh;\n    height: 0;\n    z-index: 1000;\n    transition: 1500ms ease-in-out;\n}\n\n.dropping {\n    height: 100vh;\n    background :linear-gradient( #ce9449 25%, #432304 100%)\n}\n\n.handwritten {\n    transition: all 1s ease;\n    transition-delay: 1s;\n    grid-column: 2/4;\n    grid-row: 1/3;\n    z-index: 999;\n}\n\n\n .handwritten .svg {\n    position: absolute;\n    height: 30vh;\n    width: 100vh;\n    z-index: 999;\n    \n}\n#written {\n    position: absolute;\n    top: 5%;\n    left: -60%;\n    width: auto;\n    height: 12vh;\n    left: 10%;\n    z-index: 1000;   \n}\n\n.mask {\n    fill: none;\n    stroke: white;\n}\n\n\n.mask {\n    stroke-dasharray: 1000;\n    stroke-dashoffset: 1000;\n  }\n  \n  @keyframes strokeOffset {\n    to {\n      stroke-dashoffset: 0;\n    }\n  }\n  \n\n  #Mask-gelaccio-Gmain {\n    animation: strokeOffset 1s linear forwards;\n  }\n\n  #Mask-gelaccio-Gsub {\n    animation: strokeOffset 2s linear forwards 0.5s;\n  }\n\n  #Mask-gelaccio-e {\n    animation: strokeOffset 1s linear forwards 1s; \n  }\n\n  #Mask-gelaccio-l {\n    animation: strokeOffset 1s linear forwards 1.5s; \n  }\n\n  #Mask-gelaccio-a {\n    animation: strokeOffset 1s linear forwards 2s; \n  }\n\n  #Mask-gelaccio-c {\n    animation: strokeOffset 1s linear forwards 2.5s; \n  }\n\n  #Mask-gelaccio-cc {\n    animation: strokeOffset 1s linear forwards 3s; \n  }\n\n  #Mask-gelaccio-imain {\n    animation: strokeOffset 1s linear forwards 3.5s; \n  }\n\n\n  #Mask-gelaccio-o {\n    animation: strokeOffset 1s linear forwards 4.0s; \n  }\n\n  #Mask-gelaccio-isub {\n    animation: strokeOffset 2s linear forwards 4.7s; \n  }\n\n\n\n.text-container {\n    grid-area: 2 / 4 / 3 / 6;\n    align-self: center;\n    z-index: 1004;\n    font-size: 40px;\n    opacity: 0;\n    transition: 3500ms;\n    background: linear-gradient(90deg ,rgb(255, 166, 0) 50% , white 100%);\n}\n\n.textOne , .textTwo {\n\n    padding: 1vh 1vh 0vh 1vh;\n    border-left: 2px solid rgb(255, 166, 0);\n    border-right: 2px solid rgb(255, 166, 0);\n    text-align: start;\n    width: 40%;\n}\n\n.textOne {\n    color :rgb(255, 166, 0);\n    border-top: 2px solid rgb(255, 166, 0);\n    font-size: 1.75rem;\n    text-shadow: 1px 1px 1px #d6d3d1;\n}\n\n.textTwo {\n    border-bottom: 2px solid rgb(255, 166, 0);\n    font-size: 3rem;\n    color: white;\n    text-shadow: 1px 1px 1px rgb(255, 166, 0);\n    letter-spacing: 3px;\n}\n\n.fade {\n    opacity: 1;\n}\n\n.image-container {\n    z-index: 1002;\n    grid-area: 2 / 2 / 5 / 4; \n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    filter: drop-shadow(4px 0px 3px #cdad8f);\n    background-repeat: no-repeat;\n}\n\nimg {\n    z-index: 1000;\n    grid-area: 2 / 2 / 5 / 3;\n}\n\n.button-modal {\n    grid-area: 3 / 3 / 5 / 6;\n    display: grid;\n    width: 0;\n    gap: 1vh;\n    grid-template-rows:  1fr 1fr 1fr;\n    transition: 1500ms ease-in-out;\n}\n\n.button-one, .button-two, .button-three  {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    border-top-right-radius: 20px;\n    width: 0;\n    background: linear-gradient(#d8d5d0 50% , #be8142 100%);\n    transition: 1500ms ease-in-out;\n    z-index: 1001;\n    \n}\n\na {\n    margin-right: 20px;\n    position: relative;\n    display: inline-block;\n    padding: 15px 30px;\n    align-items: center;\n    text-decoration: none;\n    border: 2px solid black;\n    font-weight: 600;\n    font-size: 20px;\n    background: linear-gradient(#d8d5d0 50% , #cfb8a0 100%);\n    opacity: 0;\n    transition: 4500ms;\n    z-index: 1004;\n}\n\n.revealing {\n    opacity: 1;\n}\n\n\n\na span {\n    opacity: 0;\n    background: linear-gradient(#d8d5d0 50% , #d4cabc 100%);\n    z-index: 1004;\n}\n\n\n.button-two {\n    background-color: #be8142;\n}\n\n.button-three {\n    background-color: #432304;\n}\n\n.extending {\n    width: 100%;\n}\n\n.extOne {\n    width: 50%;\n}\n\n.extTwo {\n    width: 55%;\n}\n\n.extThree {\n    width: 60%;\n}\n\n.image-container {\n    animation: fadeIn 7s;\n    -webkit-animation: fadeIn 4.5s;\n    -moz-animation: fadeIn 4.5s;\n    -o-animation: fadeIn 4.5s;\n    -ms-animation: fadeIn 4.5s;\n  }\n  @keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  }\n  \n  @-moz-keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  }\n  \n  @-webkit-keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  }\n  \n  @-o-keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  }\n  \n  @-ms-keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  } \n\n  /* Menu page styling */\n\n  .menuContent {\n      display: grid;\n      width: 100%;\n      grid-template-columns: 1fr 1fr 1fr 1fr;\n      grid-template-rows: 1fr 1fr;\n      justify-items: center;\n      gap: 2vh;\n  }\n\n  svg:not(#written  ) {\n      width: 10vw;\n      height: 10vw;\n      padding: 5vh;\n      transform: 500ms;\n      position: relative;\n  }\n\n\n\n  svg:not(#written):hover {\n      animation: shake 0.5s ease-in-out;\n      animation-iteration-count: infinite;\n      z-index: 1000;\n      background-color: #be8142;\n      border-radius: 5000px;\n  }\n\n\n\n  @keyframes shake {\n    0% { transform: translate(1px, 1px) rotate(0deg) scale(1.1); }\n    10% { transform: translate(-1px, -2px) rotate(-1deg) scale(1.1); }\n    20% { transform: translate(-3px, 0px) rotate(1deg) scale(1.1); }\n    30% { transform: translate(3px, 2px) rotate(0deg) scale(1.1); }\n    40% { transform: translate(1px, -1px) rotate(1deg) scale(1.2); }\n    50% { transform: translate(-1px, 2px) rotate(-1deg) scale(1.2); }\n    60% { transform: translate(-3px, 1px) rotate(0deg) scale(1.2); }\n    70% { transform: translate(3px, 1px) rotate(-1deg) scale(1.2); }\n    80% { transform: translate(-1px, -1px) rotate(1deg) scale(1.1); }\n    90% { transform: translate(1px, 2px) rotate(0deg) scale(1.1); }\n    100% { transform: translate(1px, -2px) rotate(-1deg) scale(1.1); }\n  }\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* { \n    margin: 0;\n    padding: 0;\n    background-color: #0f160c;\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n}\n\n\n#content {\n    display: grid;\n    grid-template-columns: 4vw 30vw 1fr 1fr 1fr 1fr;\n    grid-template-rows: 20vh 22.5vh 26.25vh 26.25vh 5vh;\n}\n\n.left-side-bar {\n    grid-area: 1 / 1 / 5 / 2;\n    display: flex;\n\n}\n\n.ballTwo {\n    position: absolute;\n    top: 5%;\n    left: 30%;\n    width: 50vh;\n    height: 50vh;\n    border-radius: 1000px;\n    z-index: 1000;\n    background: linear-gradient(90deg , white 50%, rgb(255, 166, 0) 100%);\n    background-color: rgba(233, 178, 13, 0.6);\n    transition: 3500ms ease-in-out;\n    opacity: 0;\n    filter: drop-shadow(2px 2px 10px rgb(194, 175, 91));\n}\n\n.left-modal-one {\n    background-color: #0f160c;\n    width: 1vw;\n}\n\n.left-modal-two {\n    background-color: #d6d3d1;\n    grid-area: 1 / 1 / 5 / 2;\n    opacity: 0.5;\n    width: 6vh;\n    height: 0;\n    z-index: 1000;\n    transition: 1500ms ease-in-out;\n}\n\n.dropping {\n    height: 100vh;\n    background :linear-gradient( #ce9449 25%, #432304 100%)\n}\n\n.handwritten {\n    transition: all 1s ease;\n    transition-delay: 1s;\n    grid-column: 2/4;\n    grid-row: 1/3;\n    z-index: 999;\n}\n\n\n .handwritten .svg {\n    position: absolute;\n    height: 30vh;\n    width: 100vh;\n    z-index: 999;\n    \n}\n#written {\n    position: absolute;\n    top: 5%;\n    left: -60%;\n    width: auto;\n    height: 12vh;\n    left: 10%;\n    z-index: 1000;   \n}\n\n.mask {\n    fill: none;\n    stroke: white;\n}\n\n\n.mask {\n    stroke-dasharray: 1000;\n    stroke-dashoffset: 1000;\n  }\n  \n  @keyframes strokeOffset {\n    to {\n      stroke-dashoffset: 0;\n    }\n  }\n  \n\n  #Mask-gelaccio-Gmain {\n    animation: strokeOffset 1s linear forwards;\n  }\n\n  #Mask-gelaccio-Gsub {\n    animation: strokeOffset 2s linear forwards 0.5s;\n  }\n\n  #Mask-gelaccio-e {\n    animation: strokeOffset 1s linear forwards 1s; \n  }\n\n  #Mask-gelaccio-l {\n    animation: strokeOffset 1s linear forwards 1.5s; \n  }\n\n  #Mask-gelaccio-a {\n    animation: strokeOffset 1s linear forwards 2s; \n  }\n\n  #Mask-gelaccio-c {\n    animation: strokeOffset 1s linear forwards 2.5s; \n  }\n\n  #Mask-gelaccio-cc {\n    animation: strokeOffset 1s linear forwards 3s; \n  }\n\n  #Mask-gelaccio-imain {\n    animation: strokeOffset 1s linear forwards 3.5s; \n  }\n\n\n  #Mask-gelaccio-o {\n    animation: strokeOffset 1s linear forwards 4.0s; \n  }\n\n  #Mask-gelaccio-isub {\n    animation: strokeOffset 2s linear forwards 4.7s; \n  }\n\n\n\n.text-container {\n    grid-area: 2 / 4 / 3 / 6;\n    align-self: center;\n    z-index: 1004;\n    font-size: 40px;\n    opacity: 0;\n    transition: 3500ms;\n    background: linear-gradient(90deg ,rgb(255, 166, 0) 50% , white 100%);\n}\n\n.textOne , .textTwo {\n\n    padding: 1vh 1vh 0vh 1vh;\n    border-left: 2px solid rgb(255, 166, 0);\n    border-right: 2px solid rgb(255, 166, 0);\n    text-align: start;\n    width: 40%;\n}\n\n.textOne {\n    color :rgb(255, 166, 0);\n    border-top: 2px solid rgb(255, 166, 0);\n    font-size: 1.75rem;\n    text-shadow: 1px 1px 1px #d6d3d1;\n}\n\n.textTwo {\n    border-bottom: 2px solid rgb(255, 166, 0);\n    font-size: 3rem;\n    color: white;\n    text-shadow: 1px 1px 1px rgb(255, 166, 0);\n    letter-spacing: 3px;\n}\n\n.fade {\n    opacity: 1;\n}\n\n.image-container {\n    z-index: 1002;\n    grid-area: 2 / 2 / 5 / 4; \n    background: url(ice-cream-shop.avif);\n    filter: drop-shadow(4px 0px 3px #cdad8f);\n    background-repeat: no-repeat;\n}\n\nimg {\n    z-index: 1000;\n    grid-area: 2 / 2 / 5 / 3;\n}\n\n.button-modal {\n    grid-area: 3 / 3 / 5 / 6;\n    display: grid;\n    width: 0;\n    gap: 1vh;\n    grid-template-rows:  1fr 1fr 1fr;\n    transition: 1500ms ease-in-out;\n}\n\n.button-one, .button-two, .button-three  {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    border-top-right-radius: 20px;\n    width: 0;\n    background: linear-gradient(#d8d5d0 50% , #be8142 100%);\n    transition: 1500ms ease-in-out;\n    z-index: 1001;\n    \n}\n\na {\n    margin-right: 20px;\n    position: relative;\n    display: inline-block;\n    padding: 15px 30px;\n    align-items: center;\n    text-decoration: none;\n    border: 2px solid black;\n    font-weight: 600;\n    font-size: 20px;\n    background: linear-gradient(#d8d5d0 50% , #cfb8a0 100%);\n    opacity: 0;\n    transition: 4500ms;\n    z-index: 1004;\n}\n\n.revealing {\n    opacity: 1;\n}\n\n\n\na span {\n    opacity: 0;\n    background: linear-gradient(#d8d5d0 50% , #d4cabc 100%);\n    z-index: 1004;\n}\n\n\n.button-two {\n    background-color: #be8142;\n}\n\n.button-three {\n    background-color: #432304;\n}\n\n.extending {\n    width: 100%;\n}\n\n.extOne {\n    width: 50%;\n}\n\n.extTwo {\n    width: 55%;\n}\n\n.extThree {\n    width: 60%;\n}\n\n.image-container {\n    animation: fadeIn 7s;\n    -webkit-animation: fadeIn 4.5s;\n    -moz-animation: fadeIn 4.5s;\n    -o-animation: fadeIn 4.5s;\n    -ms-animation: fadeIn 4.5s;\n  }\n  @keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  }\n  \n  @-moz-keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  }\n  \n  @-webkit-keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  }\n  \n  @-o-keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  }\n  \n  @-ms-keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  } \n\n  /* Menu page styling */\n\n  .menuContent {\n      display: grid;\n      width: 100%;\n      grid-template-columns: 1fr 1fr 1fr 1fr;\n      grid-template-rows: 1fr 1fr;\n      justify-items: center;\n      gap: 2vh;\n  }\n\n  svg:not(#written  ) {\n      width: 10vw;\n      height: 10vw;\n      padding: 5vh;\n      transform: 500ms;\n      position: relative;\n  }\n\n\n\n  svg:not(#written):hover {\n      animation: shake 0.5s ease-in-out;\n      animation-iteration-count: infinite;\n      z-index: 1000;\n      background-color: #be8142;\n      border-radius: 5000px;\n  }\n\n\n\n  @keyframes shake {\n    0% { transform: translate(1px, 1px) rotate(0deg) scale(1.1); }\n    10% { transform: translate(-1px, -2px) rotate(-1deg) scale(1.1); }\n    20% { transform: translate(-3px, 0px) rotate(1deg) scale(1.1); }\n    30% { transform: translate(3px, 2px) rotate(0deg) scale(1.1); }\n    40% { transform: translate(1px, -1px) rotate(1deg) scale(1.2); }\n    50% { transform: translate(-1px, 2px) rotate(-1deg) scale(1.2); }\n    60% { transform: translate(-3px, 1px) rotate(0deg) scale(1.2); }\n    70% { transform: translate(3px, 1px) rotate(-1deg) scale(1.2); }\n    80% { transform: translate(-1px, -1px) rotate(1deg) scale(1.1); }\n    90% { transform: translate(1px, 2px) rotate(0deg) scale(1.1); }\n    100% { transform: translate(1px, -2px) rotate(-1deg) scale(1.1); }\n  }\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/ICeight.svg":
/*!********************************!*\
  !*** ./src/assets/ICeight.svg ***!
  \********************************/
/***/ ((module) => {

module.exports = "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 347.529 347.529\" style=\"enable-background:new 0 0 347.529 347.529;\" xml:space=\"preserve\"><g id=\"XMLID_1416_\"><path id=\"XMLID_585_\" style=\"fill:#FFA250;\" d=\"M173.764,347.529L173.764,347.529c-13.738,0-24.978-11.24-24.978-24.978v-95.902 c0-13.738,11.24-24.978,24.978-24.978l0,0c13.738,0,24.978,11.24,24.978,24.978v95.902 C198.743,336.288,187.502,347.529,173.764,347.529z\"></path><path id=\"XMLID_584_\" style=\"fill:#FF5959;\" d=\"M219.014,259.347h-90.5c-20.851,0-37.754-16.903-37.754-37.754V83.004 C90.76,37.162,127.922,0,173.764,0l0,0c45.842,0,83.004,37.162,83.004,83.004v138.589 C256.769,242.444,239.866,259.347,219.014,259.347z\"></path><path id=\"XMLID_1417_\" style=\"fill:#FFFEB9;\" d=\"M256.769,126.369V83.004C256.769,37.162,219.606,0,173.764,0l0,0 C127.922,0,90.76,37.162,90.76,83.004v43.365H256.769z\"></path><g id=\"XMLID_1418_\"><path id=\"XMLID_1419_\" style=\"fill:#FFFEB9;\" d=\"M165.225,124.046c-0.105,0.809-0.165,1.631-0.165,2.467v55.914 c0,10.584,8.659,19.243,19.243,19.243l0,0c10.584,0,19.243-8.66,19.243-19.243v-57.914c0-0.836-0.06,0.342-0.165-0.467H165.225z\"></path><path id=\"XMLID_1420_\" style=\"fill:#FFFEB9;\" d=\"M127.91,124.046v29.138c0,10.584,8.66,19.243,19.243,19.243l0,0 c10.584,0,19.243-8.659,19.243-19.243v-29.138C166.396,124.046,127.91,124.046,127.91,124.046z\"></path><path id=\"XMLID_1421_\" style=\"fill:#FFFEB9;\" d=\"M90.76,124.046v50.301c0,10.584,8.66,19.243,19.243,19.243 s19.243-8.659,19.243-19.243v-50.301C129.246,124.046,90.76,124.046,90.76,124.046z\"></path></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>"

/***/ }),

/***/ "./src/assets/ICfive.svg":
/*!*******************************!*\
  !*** ./src/assets/ICfive.svg ***!
  \*******************************/
/***/ ((module) => {

module.exports = "<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 59 59\" style=\"enable-background:new 0 0 59 59;\" xml:space=\"preserve\"><g><g><path style=\"fill:#FBD490;\" d=\"M25.5,42v14c0,1.1,0.9,2,2,2h4c1.1,0,2-0.9,2-2V42H25.5z\"></path><path style=\"fill:#FBD490;\" d=\"M31.5,59h-4c-1.654,0-3-1.346-3-3V41h10v15C34.5,57.654,33.154,59,31.5,59z M26.5,43v13 c0,0.552,0.448,1,1,1h4c0.552,0,1-0.448,1-1V43H26.5z\"></path></g><path style=\"fill:#EEAF4B;\" d=\"M33.501,57.5c-0.086,0-0.174-0.011-0.261-0.034c-1.266-0.341-6.227-2.376-5.514-5.429 c0.183-0.785-1.457-2.057-2.66-2.636c-0.498-0.24-0.707-0.837-0.468-1.335c0.241-0.496,0.839-0.706,1.335-0.468 c0.449,0.217,4.371,2.19,3.74,4.894c-0.228,0.975,2.386,2.585,4.086,3.042c0.533,0.144,0.85,0.692,0.706,1.226 C34.346,57.206,33.941,57.5,33.501,57.5z\"></path><path style=\"fill:#EEAF4B;\" d=\"M33.5,49c-2.523,0-4.5-1.537-4.5-3.5s1.977-3.5,4.5-3.5c0.553,0,1,0.447,1,1s-0.447,1-1,1 c-1.474,0-2.5,0.79-2.5,1.5s1.026,1.5,2.5,1.5c0.553,0,1,0.447,1,1S34.053,49,33.5,49z\"></path><path style=\"fill:#F9D70B;\" d=\"M39.5,42h-20l5-38c0-2.2,1.8-4,4-4h2c2.2,0,4,1.8,4,4L39.5,42z\"></path><path style=\"fill:#F9EA80;\" d=\"M32.003,22.038c-1.376,0-2.496-1.12-2.496-2.496v-2.694c0-0.553,0.447-1,1-1s1,0.447,1,1v2.694 c0,0.269,0.228,0.496,0.496,0.496c0.27,0,0.497-0.228,0.497-0.496v-2.694c0-0.553,0.447-1,1-1s1,0.447,1,1v2.694 C34.5,20.918,33.38,22.038,32.003,22.038z\"></path><path style=\"fill:#F9EA80;\" d=\"M26.805,30.038c-1.377,0-2.497-1.12-2.497-2.496v-1.497c0-0.553,0.447-1,1-1s1,0.447,1,1v1.497 c0,0.269,0.228,0.496,0.497,0.496c0.269,0,0.496-0.228,0.496-0.496v-1.497c0-0.553,0.447-1,1-1s1,0.447,1,1v1.497 C29.301,28.918,28.181,30.038,26.805,30.038z\"></path><path style=\"fill:#F9EA80;\" d=\"M32.997,37.038c-1.377,0-2.497-1.12-2.497-2.496v-1.497c0-0.553,0.447-1,1-1s1,0.447,1,1v1.497 c0,0.269,0.228,0.496,0.497,0.496c0.269,0,0.496-0.228,0.496-0.496v-1.497c0-0.553,0.447-1,1-1s1,0.447,1,1v1.497 C35.493,35.918,34.373,37.038,32.997,37.038z\"></path><path style=\"fill:#F9EA80;\" d=\"M27.997,11.993c-1.377,0-2.497-1.12-2.497-2.496V8c0-0.553,0.447-1,1-1s1,0.447,1,1v1.497 c0,0.269,0.228,0.496,0.497,0.496c0.269,0,0.496-0.228,0.496-0.496V8c0-0.553,0.447-1,1-1s1,0.447,1,1v1.497 C30.493,10.873,29.373,11.993,27.997,11.993z\"></path></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>"

/***/ }),

/***/ "./src/assets/ICfour.svg":
/*!*******************************!*\
  !*** ./src/assets/ICfour.svg ***!
  \*******************************/
/***/ ((module) => {

module.exports = "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 289.94 289.94\" style=\"enable-background:new 0 0 289.94 289.94;\" xml:space=\"preserve\"><g><path style=\"fill:#CB4E44;\" d=\"M144.97,0c30.027,0,54.364,24.346,54.364,54.364c0,30.027-24.337,54.364-54.364,54.364 c-30.018,0-54.364-24.337-54.364-54.364C90.606,24.346,114.952,0,144.97,0z\"></path><path style=\"fill:#E5685E;\" d=\"M104.197,27.182c27.526,0,49.833,22.316,49.833,49.833c0,27.526-22.307,49.833-49.833,49.833 s-49.833-22.307-49.833-49.833C54.364,49.498,76.671,27.182,104.197,27.182z\"></path><path style=\"fill:#E98179;\" d=\"M185.742,27.182c27.517,0,49.833,22.316,49.833,49.833c0,27.526-22.316,49.833-49.833,49.833 c-27.535,0-49.833-22.307-49.833-49.833C135.909,49.498,158.207,27.182,185.742,27.182z\"></path><path style=\"fill:#EFC75E;\" d=\"M54.364,81.265v45.584c0,10.003,8.118,18.121,18.121,18.121h18.121l45.303,144.97h18.121 l45.303-144.97h18.121c10.003,0,18.121-8.118,18.121-18.121V81.265H54.364z\"></path><path style=\"fill:#D7B354;\" d=\"M54.364,99.667h181.212v27.182H54.364V99.667z\"></path><polygon style=\"fill:#D7B354;\" points=\"116.492,227.811 199.333,144.97 90.606,144.97 \"></polygon></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>"

/***/ }),

/***/ "./src/assets/ICone.svg":
/*!******************************!*\
  !*** ./src/assets/ICone.svg ***!
  \******************************/
/***/ ((module) => {

module.exports = "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\"><path style=\"fill:#D18B5C;\" d=\"M256,301.402L256,301.402c10.573,0,19.22,8.65,19.22,19.218v172.163 c0,10.57-8.647,19.218-19.22,19.218l0,0c-10.573,0-19.22-8.647-19.22-19.218V320.62C236.78,310.049,245.427,301.402,256,301.402z\"></path><path style=\"fill:#FFC273;\" d=\"M256,0L256,0c47.875,0,87.047,39.17,87.047,87.044v284.504c0,21.125-17.284,38.407-38.409,38.407 H207.36c-21.122,0-38.407-17.282-38.407-38.407V87.044C168.956,39.17,208.123,0,256,0z\"></path><path style=\"fill:#FFD8A6;\" d=\"M221.916,67.121L221.916,67.121c8.782,0,15.964,7.185,15.964,15.966v276.717 c0,8.781-7.182,15.966-15.964,15.966l0,0c-8.781,0-15.964-7.185-15.964-15.966V83.088 C205.95,74.306,213.134,67.121,221.916,67.121z\"></path><path style=\"fill:#FFD8A6;\" d=\"M290.082,67.121L290.082,67.121c8.781,0,15.964,7.185,15.964,15.966v276.717 c0,8.781-7.182,15.966-15.964,15.966l0,0c-8.781,0-15.964-7.185-15.964-15.966V83.088C274.115,74.306,281.3,67.121,290.082,67.121 z\"></path><path style=\"fill:#FFD8A6;\" d=\"M183.009,58.137c3.773-13.948,20.628-32.379,36.736-39.911c14.945-6.987,18.365,5.304,8.013,10.092 c-13.433,6.211-27.628,21.146-33.079,34.421C190.528,72.849,180.076,68.995,183.009,58.137z\"></path></svg>"

/***/ }),

/***/ "./src/assets/ICseven.svg":
/*!********************************!*\
  !*** ./src/assets/ICseven.svg ***!
  \********************************/
/***/ ((module) => {

module.exports = "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\"><polygon style=\"fill:#E09D70;\" points=\"341.515,206.498 266.365,512 245.633,512 170.485,206.498 \"></polygon><path style=\"fill:#D18B5C;\" d=\"M340.127,212.138l-1.529,6.209l-22.185-11.848h13.152L340.127,212.138L340.127,212.138z M335.585,230.595l-45.114-24.097h-13.152l56.74,30.305L335.585,230.595L335.585,230.595z M331.045,249.052l-79.666-42.554h-13.154 l91.294,48.762L331.045,249.052L331.045,249.052z M326.506,267.507l-114.218-61.008h-13.154l125.846,67.217L326.506,267.507 L326.506,267.507z M321.966,285.964l-148.773-79.465h-2.708l1.579,6.422l148.373,79.252L321.966,285.964L321.966,285.964z M317.426,304.421l-1.526,6.209l-137.925-73.668l-1.986-8.086L317.426,304.421L317.426,304.421z M312.886,322.875l-1.529,6.209 L183.891,261l-1.989-8.086L312.886,322.875L312.886,322.875z M308.347,341.332l-1.529,6.209l-117.014-62.5l-1.989-8.086 L308.347,341.332L308.347,341.332z M303.807,359.789l-110.076-58.796l1.986,8.089l106.561,56.919L303.807,359.789L303.807,359.789z M299.267,378.244l-99.625-53.213l1.989,8.089l96.108,51.333L299.267,378.244L299.267,378.244z M294.725,396.701l-1.526,6.209 l-85.652-45.751l-1.989-8.086L294.725,396.701L294.725,396.701z M290.185,415.156l-1.526,6.209l-75.199-40.167l-1.989-8.086 L290.185,415.156L290.185,415.156z M285.645,433.613l-68.264-36.463l1.989,8.089l64.749,34.584L285.645,433.613L285.645,433.613z M281.106,452.07l-57.808-30.88l1.989,8.086l54.291,29L281.106,452.07L281.106,452.07z M276.566,470.524l-1.526,6.209 l-43.842-23.416l-1.989-8.086L276.566,470.524L276.566,470.524z M272.026,488.981l-36.902-19.709l1.989,8.086l33.384,17.832 L272.026,488.981L272.026,488.981z M267.486,507.438L266.365,512h-3.491l-19.845-10.601l-1.989-8.086L267.486,507.438z\"></path><path style=\"fill:#F7C29E;\" d=\"M341.515,206.498l-1.655,6.727l-148.245,79.182l-1.526-6.209l149.214-79.7H341.515L341.515,206.498z M335.936,229.178L194.63,304.653l1.529,6.209l137.789-73.598L335.936,229.178L335.936,229.178z M330.021,253.216l-130.854,69.892 l1.529,6.209l127.334-68.014L330.021,253.216L330.021,253.216z M324.107,277.257l-120.398,64.308l1.529,6.209l116.881-62.43 L324.107,277.257L324.107,277.257z M318.196,301.296l-1.989,8.089L209.78,366.231l-1.529-6.209L318.196,301.296L318.196,301.296z M312.281,325.337l-1.989,8.086l-95.975,51.262l-1.526-6.209L312.281,325.337L312.281,325.337z M306.367,349.375l-89.037,47.559 l1.526,6.209l85.521-45.679L306.367,349.375L306.367,349.375z M300.454,373.416l-78.586,41.975l1.531,6.209l75.066-40.095 L300.454,373.416L300.454,373.416z M294.541,397.454l-1.989,8.089l-64.615,34.511l-1.526-6.209L294.541,397.454L294.541,397.454z M288.63,421.495l-1.989,8.086l-54.16,28.927l-1.529-6.209L288.63,421.495L288.63,421.495z M282.714,445.536l-47.224,25.225 l1.526,6.209l43.709-23.346L282.714,445.536L282.714,445.536z M276.801,469.575l-1.989,8.089l-33.254,17.762l-1.529-6.209 L276.801,469.575L276.801,469.575z M270.885,493.615l-26.316,14.058l1.063,4.327h3.987l19.276-10.296L270.885,493.615 L270.885,493.615z M187.079,273.948l126.282-67.452h-13.152L185.55,267.739L187.079,273.948L187.079,273.948z M182.536,255.494 l91.73-48.995h-13.152l-80.105,42.786L182.536,255.494L182.536,255.494z M177.997,237.039l57.178-30.54h-13.152l-45.553,24.332 L177.997,237.039L177.997,237.039z M173.457,218.582l22.624-12.083h-13.152l-10.998,5.875L173.457,218.582z\"></path><g><path style=\"fill:#FE7E8D;\" d=\"M305.793,208.279c-45.674,20.235-152.753,26.299-144.911-22.258 C168.721,137.465,358.778,166.367,305.793,208.279z\"></path><path style=\"fill:#FCE3C8;\" d=\"M196.129,134.87c-44.383,0.916-60.749,34.618-24.31,57.946 c47.19,30.213,181.36,37.478,188.078,7.825C366.615,170.989,262.259,133.504,196.129,134.87z\"></path><path style=\"fill:#FE7E8D;\" d=\"M219.303,100.444c-44.039-2.12-81.287,28.421-36.035,55.412 c49.761,29.68,124.417-1.589,173.347,32.025C368.09,158.686,284.916,103.603,219.303,100.444z\"></path><path style=\"fill:#FCE3C8;\" d=\"M345.641,158.053c-46.747-38.411-85.296-18.772-132.356-36.427 c-47.059-17.658-33.498-54.317-9.731-56.372c0.94-16.628-5.497-44.341,44.761-64.996c5.099,30.257,10.783,69.48,46.483,83.598 S354.67,132.288,345.641,158.053z\"></path><path style=\"fill:#FE7E8D;\" d=\"M199.53,58.51c-4.763-17.498,9.448-40.868,40.504-55.601c5.649-2.679,12.636-5.531,13.36,1.495 c2.938,28.566,9.516,66.839,41.405,79.453c9.315,3.685,17.895,9,25.286,15.325C293.375,81.783,207.34,87.2,199.53,58.51z\"></path><g><path style=\"fill:none;stroke:#FFABB5;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22.926;\" d=\" M224.606,24.453c-5.412,3.217-12.277,11.945-15.882,22.26\"></path><path style=\"fill:none;stroke:#FFFFFF;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22.926;\" d=\" M209.218,78.075c-6.097,0.501-14.433,10.783-14.348,20.114\"></path><path style=\"fill:none;stroke:#FFABB5;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22.926;\" d=\" M183.459,117.346c-4.658,0.383-11.03,8.239-10.964,15.371\"></path><path style=\"fill:none;stroke:#FFFFFF;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22.926;\" d=\" M166.391,152.394c-4.835,1.759-10.654,10.153-10.569,19.484\"></path></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>"

/***/ }),

/***/ "./src/assets/ICsix.svg":
/*!******************************!*\
  !*** ./src/assets/ICsix.svg ***!
  \******************************/
/***/ ((module) => {

module.exports = "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 364.95 364.95\" style=\"enable-background:new 0 0 364.95 364.95;\" xml:space=\"preserve\"><g id=\"XMLID_1424_\"><path id=\"XMLID_583_\" style=\"fill:#FFA250;\" d=\"M182.475,364.95L182.475,364.95c-13.738,0-24.978-11.24-24.978-24.978V244.07 c0-13.738,11.24-24.978,24.978-24.978l0,0c13.738,0,24.978,11.24,24.978,24.978v95.902 C207.453,353.71,196.213,364.95,182.475,364.95z\"></path><g id=\"XMLID_1425_\"><path id=\"XMLID_1426_\" style=\"fill:#FF5959;\" d=\"M71.9,215.014l86.111-197.926c9.912-22.784,39.015-22.784,48.927,0 l86.111,197.926c8.763,20.142-4.391,43.568-24.464,43.568H96.364C76.291,258.581,63.137,235.156,71.9,215.014z\"></path><path id=\"XMLID_1427_\" style=\"fill:#FFFEB9;\" d=\"M270.921,164.151H94.029L71.9,215.014c-8.763,20.141,4.391,43.568,24.464,43.568 h172.222c20.073,0,33.227-23.426,24.464-43.568L270.921,164.151z\"></path><path id=\"XMLID_1428_\" style=\"fill:#5FD2DB;\" d=\"M283.497,193.057H81.453L71.9,215.014c-8.763,20.141,4.391,43.568,24.464,43.568 h172.222c20.073,0,33.227-23.426,24.464-43.568L283.497,193.057z\"></path></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>"

/***/ }),

/***/ "./src/assets/ICthree.svg":
/*!********************************!*\
  !*** ./src/assets/ICthree.svg ***!
  \********************************/
/***/ ((module) => {

module.exports = "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 416.36 416.36\" style=\"enable-background:new 0 0 416.36 416.36;\" xml:space=\"preserve\"><g><path style=\"fill:#FCEDCA;\" d=\"M352.71,0l-18.76,57.58l-7.18,22.02L223.577,396.315c-4.856,14.902-25.938,14.902-30.793,0 L89.59,79.6l-7.18-22.02L63.65,0H352.71z\"></path><path style=\"fill:#DDC89F;\" d=\"M352.71,0l-18.76,57.58l-7.18,22.02l-88.124,270.467c-5.507,16.902-30.466,12.939-30.466-4.838V0 H352.71z\"></path><path style=\"fill:#B5600B;\" d=\"M333.95,57.58l-7.18,22.02l-99.561,305.567c-6.001,18.418-32.057,18.418-38.058,0L89.59,79.6 l-7.18-22.02C82.41,57.58,333.95,57.58,333.95,57.58z\"></path><path style=\"fill:#FFD41D;\" d=\"M326.77,79.6l-7.7,23.62l-2,6.13l-7.69,23.62l-5.43,16.65l-84.16,258.32 c-1.83,5.62-6.72,8.42-11.61,8.42s-9.78-2.8-11.61-8.42l-71.9-220.68l-17.69-54.29l-9.69-29.75l-7.7-23.62H326.77z\"></path><path style=\"fill:#EA587F;\" d=\"M83.88,0c3.89,25.03,8.3,46.63,15.9,46.63c7.6,0,12.01-21.6,15.9-46.63\"></path><path style=\"fill:#EA587F;\" d=\"M228.4,0c3.89,25.03,8.3,46.63,15.9,46.63c7.6,0,12.01-21.6,15.9-46.63\"></path><path style=\"fill:#EA587F;\" d=\"M300.67,0c3.89,25.03,8.29,46.63,15.9,46.63s12.01-21.6,15.9-46.63\"></path><path style=\"fill:#EA587F;\" d=\"M156.14,0c3.89,25.03,8.3,46.63,15.9,46.63c7.6,0,12.01-21.6,15.9-46.63\"></path><polygon style=\"fill:#FFA91F;\" points=\"319.07,103.22 309.38,132.97 106.98,132.97 97.29,103.22 \"></polygon><path style=\"fill:#FFD41D;\" d=\"M334.23,94.47c0,4.11-1.66,7.83-4.36,10.52c-2.69,2.69-6.4,4.36-10.51,4.36H97 c-8.21,0-14.87-6.66-14.87-14.88c0-4.11,1.66-7.82,4.36-10.51c2.69-2.7,6.4-4.36,10.51-4.36h222.36 C327.57,79.6,334.23,86.26,334.23,94.47z\"></path><path style=\"fill:#FFA91F;\" d=\"M334.23,94.47c0,4.11-1.66,7.83-4.36,10.52c-2.69,2.69-6.4,4.36-10.51,4.36H208.18V79.6h111.18 C327.57,79.6,334.23,86.26,334.23,94.47z\"></path><polygon style=\"fill:#914D09;\" points=\"333.95,57.58 326.77,79.6 208.18,79.6 208.18,57.58 \"></polygon><path style=\"fill:#FFA91F;\" d=\"M317.07,109.35l-7.69,23.62l-89.59,274.97c-1.83,5.62-6.72,8.42-11.61,8.42V109.35H317.07z\"></path><path style=\"fill:#EA587F;\" d=\"M303.95,149.62l-84.16,258.32c-1.83,5.62-6.72,8.42-11.61,8.42s-9.78-2.8-11.61-8.42l-71.9-220.68 l83.51-17.53L303.95,149.62z\"></path><path style=\"fill:#CE3E6B;\" d=\"M303.95,149.62l-84.16,258.32c-1.83,5.62-6.72,8.42-11.61,8.42V169.73L303.95,149.62z\"></path><path style=\"fill:#FFA91F;\" d=\"M208.18,109.35H97.01c-8.218,0-14.88-6.662-14.88-14.88l0,0h126.05L208.18,109.35L208.18,109.35z\"></path></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>"

/***/ }),

/***/ "./src/assets/ICtwo.svg":
/*!******************************!*\
  !*** ./src/assets/ICtwo.svg ***!
  \******************************/
/***/ ((module) => {

module.exports = "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\"><g><polygon style=\"fill:#D1F0EF;\" points=\"173.088,215.226 351.564,215.226 287.063,512 237.584,512 \"></polygon><polygon style=\"fill:#D2B4B3;\" points=\"313.104,392.176 291.809,490.172 232.841,490.172 211.543,392.176 \"></polygon><path style=\"fill:#E4EABA;\" d=\"M319.6,362.3l-18.77,86.359c-30.52-4.079-57.801-10.467-80.794-17.419L205.05,362.3H319.6z\"></path><path style=\"fill:#D2B4B3;\" d=\"M329.67,315.961l-19.034,87.581c-39.539-4.526-74.064-13.06-101.415-22.048l-14.241-65.532H329.67z\"></path><path style=\"fill:#E4EABA;\" d=\"M340.617,265.592l-19.193,88.307c-50.763-5.144-93.677-17.024-124.379-28.445l-13.012-59.861 H340.617L340.617,265.592z\"></path><path style=\"fill:#D2B4B3;\" d=\"M173.088,215.226h178.476l-19.404,89.283c-62.578-5.029-114.167-20.616-147.077-34.087 L173.088,215.226z\"></path><path style=\"fill:#FFF1AD;\" d=\"M347.821,512h-170.99v-10.914c0-6.002,4.909-10.914,10.914-10.914h149.163 c6.002,0,10.914,4.911,10.914,10.914L347.821,512L347.821,512z\"></path><path style=\"fill:#D33B3A;\" d=\"M309.419,223.736c-49.001,21.705-163.873,28.212-155.461-23.88 C162.369,147.766,366.259,178.774,309.419,223.736z\"></path><path style=\"fill:#F6E385;\" d=\"M191.771,144.985c-47.616,0.986-65.172,37.138-26.08,62.167 c50.628,32.409,194.56,40.207,201.77,8.392C374.668,183.733,262.714,143.518,191.771,144.985z\"></path><path style=\"fill:#D33B3A;\" d=\"M216.634,108.052c-47.243-2.276-87.206,30.488-38.659,59.446 c53.385,31.842,133.478-1.704,185.967,34.356C376.252,170.533,287.022,111.439,216.634,108.052z\"></path><path style=\"fill:#F6E385;\" d=\"M352.165,169.853c-50.15-41.207-97.237-21.183-141.988-39.08s-27.599-49.412-4.185-55.784 c23.414-6.373-18.404-35.582,41.765-74.417c5.471,32.46,11.57,74.535,49.869,89.684S361.853,142.216,352.165,169.853z\"></path><path style=\"fill:#D33B3A;\" d=\"M206.363,61.503c-3.024-11.998,0.236-35.505,32.508-58.087c5.296-3.702,13.558-5.933,14.332,1.606 c3.151,30.645,10.209,71.705,44.419,85.234c9.993,3.954,19.197,9.656,27.125,16.44C296.097,88.035,214.151,92.378,206.363,61.503z\"></path><g><path style=\"fill:none;stroke:#E66363;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22.926;\" d=\" M237.954,16.106c-5.808,3.452-13.173,12.815-17.036,23.883\"></path><path style=\"fill:none;stroke:#FFF1AD;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22.926;\" d=\" M205.812,84.054c-6.539,0.536-15.483,11.567-15.392,21.58\"></path><path style=\"fill:none;stroke:#E66363;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22.926;\" d=\" M178.182,126.184c-4.998,0.409-11.832,8.839-11.762,16.488\"></path><path style=\"fill:none;stroke:#FFF1AD;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22.926;\" d=\" M159.867,163.786c-5.188,1.887-11.43,10.89-11.339,20.902\"></path></g></svg>"

/***/ }),

/***/ "./src/gelsvg.svg":
/*!************************!*\
  !*** ./src/gelsvg.svg ***!
  \************************/
/***/ ((module) => {

module.exports = "<svg id=\"written\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 4083.88 430.35\"><title>gelaccio</title><g id=\"gelaccio\"><g id=\"gelaccio-underline\"><g><path d=\"M1077.94,704.51c4,.13-1.14-.91-5.52-1.76l-4.15.8Z\" transform=\"translate(-95.37 -317.74)\" fill=\"#cda980\"></path><path d=\"M1056.28,701.86l-11,.12,8,.22c8.68,1.57-1.31,1.22-4.63,1.11C1062.9,704.51,1053.91,702.34,1056.28,701.86Z\" transform=\"translate(-95.37 -317.74)\" fill=\"#cda980\"></path><path d=\"M1034.69,700.62c-7-.74-5.12.27-2.21.81C1033,701.11,1037.61,701.16,1034.69,700.62Z\" transform=\"translate(-95.37 -317.74)\" fill=\"#cda980\"></path><path d=\"M598.09,684.23c2,.11,4.31.15,4,.39C604.28,684.31,604.74,684.09,598.09,684.23Z\" transform=\"translate(-95.37 -317.74)\" fill=\"#cda980\"></path><path d=\"M602.09,684.62l-1.42.19,1.32-.1C602.12,684.67,602.05,684.65,602.09,684.62Z\" transform=\"translate(-95.37 -317.74)\" fill=\"#cda980\"></path><path d=\"M743.94,692.44c7.91-.58,12.35-.24,19.82-.35l4.16,1.11c8.1-.21,3.59-.82,9.48-1.26,7.37.79,23,.4,26.45.62,2.42.55-3,.57-4.23.82,9.49-.07,8.85-1.07,20.64-.74l.19.29c28.22-.75,63.9,1.38,95.26,2.25a4.37,4.37,0,0,1-2.38-.61c8.27.35,16.85.94,25.48,1.4l13,.71,6.45.34,6.39.38c16.94,1,33,1.57,46.2,1.66-4.47-.34-9.69-.92-15.32-1.47l-17.66-1.7c-6-.56-12.07-1.07-17.76-1.42s-11-.41-15.59-.27c-6.69-1.19-17.15-.83-19.88-2.06-6.49-.58-12-.82-17.08-1s-9.59-.23-14.11-.27-9-.07-13.94-.17-10.28-.15-16.53-.41c-3.58-.34-1.82-.78-2.83-1.31l19.86.37c-4-.36-8.05-.63-12.07-1,2.62-.11,7.12,0,11.15.13s7.58.18,8.33-.25c-8.69,0-20-.32-31-.71-5.49-.19-10.92-.37-15.92-.46s-9.57,0-13.37.21c3.56.23,7.55.32,11.72.44s8.48.28,12.68.49c3.69.49,9.41,1,9,1.46-12.06.22-23.06-.12-34.15-.33L809.58,689c-5.73-.14-11.61-.32-17.79-.27s-14.6-.21-15.62-.72c4.07-.1,1-.56,4.35-.74-8.77.28-.91,1.77-13.57,1.36l1.64-1.68c-2.53.86-6.4.71-10.78.47a90.33,90.33,0,0,0-13.76,0c-3.24-.69,2.75-1.07,9.69-1.09-7.88-.33-8.6.67-14.89.61l6-1.43c-6.7,1.37-12-.32-15.8-.8-.45.35,3.08,1.48-5.32,1.36-3.6-.2-1.76-.56-2.61-.77-.46.35-3.48,1-9,1.09-1-.48,3.68-.77,4-1.27a81.41,81.41,0,0,1-10.62-.18c-7.4.47.48.7-4,1.27-11.36-.25-1.15-1.69-5.34-2.69,8.55-.75,19.58-1.11,24.16-1.48-5.48.12-11,.34-16.43.51,1-.58-11.13-.88-2.45-1.52-8.2-.17-17.25-.11-26.2.18s-17.83.81-25.68,1.21c2.23.15,5.1.21,4.64.58-8.12.52-7.23-.22-8.91-.6-6,.54-5.3,1.48-9,2.33-12.42-.4-14.14.16-24.74-.68l.68,1c-7.51-.53-8.54,1-16.62.71-.46-.2,2.62-.59,5.09-.9-7.13.58-6.62-.54-13.56.15l5.47-1.36c-5.54.3-13.66,1-10.84-.05-9.65,1.59-26.67,1.88-38.73,3.34l.76-.91c-6.19,1.43-23,1.3-28.34,2.92l-.95-.28-12.35,2c-5.64.31-3.82-1.12-4.25-.73-12.34,1.13-22,1.87-30,2.16-1.9,1.31-14.86,2.72-25.18,3.75-24.9,1.84-50.68,4.55-75.88,8.41a650.87,650.87,0,0,0-72.22,15c-6.77,1.62-15.7,5.31-23.87,8.19,5.15-1.28,7.92-2.13,10.67-3s5.49-1.68,10.54-2.95a66.38,66.38,0,0,1,9.11-1.19c2.57-.15,5-.18,8.39-.55l-3.55-.21a45.92,45.92,0,0,1,8.42-2,31.8,31.8,0,0,0,6.79-1.69l0,1.6c2.72-1.36,10.1-2.07,13.16-2.2l2.5-1.54c6.65-.57,11-1,13.13-.33l-.79-.88c2.55.11,25.3-3.82,17.72-1a38.88,38.88,0,0,1,7.75-1.69l.77.89c6-1,12.73-2.06,14.55-1.69a14.88,14.88,0,0,0-5.33,1.75c12.79-1.46,14.06-2.38,15-3.33s1.42-1.91,12.79-3.14l-.19.67,5.7-1.27,6.14.21c8-3.05,32-2.68,45.69-5a88.79,88.79,0,0,1,9.63-.33c3.77,0,8.15,0,13.29-.46l-.74-.94c4.19.2,14-.1,23.82-.24s19.51.11,23.46,1c7.76-1.23-.84-.16-.71-1,15.19-1.91,16.33-.51,24.36-.29,9.37-.93-7.2,0-2.19-1,14.43.07,11.63-1.76,29.45-1.94,1.79.47-4.57.6-6.39,1.05C596.05,693,619.41,693,638,692.09c10.66.12,23.86.08,37.5,0s27.75.3,40.2.62l.46-.36c10.35.92,21.57.14,33.66.58Z\" transform=\"translate(-95.37 -317.74)\" fill=\"#cda980\"></path><path d=\"M893,687.5l-1.94-1-11.46,0C884.18,687.43,886.61,687,893,687.5Z\" transform=\"translate(-95.37 -317.74)\" fill=\"#cda980\"></path><polygon points=\"795.02 372.19 801.02 372.12 791.34 371.66 795.02 372.19\" fill=\"#cda980\"></polygon><polygon points=\"650.1 366.61 651.58 366.75 662.49 366.44 673.41 366.26 661.75 366.37 650.1 366.61\" fill=\"#cda980\"></polygon><path d=\"M598.86,683.35c2.48-.53,6.08-.46,8.66-.86l-10.14.78Z\" transform=\"translate(-95.37 -317.74)\" fill=\"#cda980\"></path><path d=\"M500.26,685.49c-3.75,1.79-7.68.54-2.46,1.54C503.86,686.34,498.55,686.12,500.26,685.49Z\" transform=\"translate(-95.37 -317.74)\" fill=\"#cda980\"></path><path d=\"M477.57,689.36a50.26,50.26,0,0,0,7.32-.94C480.22,688.08,480.13,688.87,477.57,689.36Z\" transform=\"translate(-95.37 -317.74)\" fill=\"#cda980\"></path></g></g><path mask=\"url(#Mask-G)\" id=\"gelaccio-G\" d=\"M174.87,678.21a59,59,0,0,1-36.78-12.7q-16.56-12.71-26.49-36.8t-9.93-58.11a266.21,266.21,0,0,1,8.83-67.14,334,334,0,0,1,24.09-64.78,291.15,291.15,0,0,1,35.13-55.09q19.86-24.31,41.75-38.31t44-14q15.45,0,24.64,7.1a39.61,39.61,0,0,1,13.25,18.51,72.41,72.41,0,0,1,4,24.32,100.42,100.42,0,0,1-4.6,29.91q-4.59,14.85-12.32,24.75t-16.92,9.9A11.8,11.8,0,0,1,256,443q-3.49-2.79-6.44-10.11,5.15-4.31,12-15.28a145.56,145.56,0,0,0,11.95-24.32q5.15-13.33,5.15-24.1c0-6-1.6-11-4.78-15.07s-8.46-6-15.82-6q-16.55,0-33.84,14.63t-33.1,39a356.81,356.81,0,0,0-28.7,54.45,374.79,374.79,0,0,0-20.23,61.34,257.94,257.94,0,0,0-7.36,59.18q0,39.17,14.35,61.12t34.95,22q14.7,0,27.58-11.62t22.63-30.34a200.81,200.81,0,0,0,15.63-40.68,227.79,227.79,0,0,0,7.36-42.61,169.06,169.06,0,0,0-19.87-3.66,162.88,162.88,0,0,0-18.76-1.08c-3.67,0-7.42.08-11.22.22s-7.9.21-12.32.21Q198,515.95,205,509.7t17.66-6.24a64.53,64.53,0,0,1,22.25,4.09q11.22,4.09,22.44,8.82a154.58,154.58,0,0,0,21.15,7.32l-3.31,13.77q-6.62,22.81-10.85,38.74t-6.62,27.33A165.75,165.75,0,0,0,264.62,624q-.74,9-.73,17.64t.37,17.65q.36,9,.73,20.66-9.19-2.16-14.34-7.32a26.32,26.32,0,0,1-7-12.48,59.67,59.67,0,0,1-1.84-14.63q0-3,.18-6a43.67,43.67,0,0,1,.92-6.45,126.26,126.26,0,0,1-29.79,32.49A62.19,62.19,0,0,1,174.87,678.21Z\" transform=\"translate(-95.37 -317.74)\" fill=\"#c69c6d\" stroke=\"#c69c6d\" stroke-miterlimit=\"10\" stroke-width=\"4\"></path><path mask=\"url(#Mask-e)\" id=\"gelaccio-e\" d=\"M343.71,659.7q-23.18,0-35.32-14.63t-12.13-36.59q0-19.37,8.27-40.67a168.45,168.45,0,0,1,22.26-40,137.75,137.75,0,0,1,30.71-30.56q16.74-11.84,33.29-11.84a30.67,30.67,0,0,1,17.47,5.6q8.28,5.59,8.28,22.38a60.77,60.77,0,0,1-8.28,30.77,94,94,0,0,1-21.7,25.61A122.18,122.18,0,0,1,356.77,588a111.13,111.13,0,0,1-32.56,8.82c-.25,1.72-.49,3.44-.73,5.17a50.2,50.2,0,0,0-.37,6.88,61.65,61.65,0,0,0,.92,9.26,42.54,42.54,0,0,0,3.68,11.62,23.72,23.72,0,0,0,8.64,9.68q5.88,3.87,15.45,3.87,15.45,0,31.08-10.32a128.86,128.86,0,0,0,29.25-27.34A171.66,171.66,0,0,0,434.93,568l6.26,6a165.92,165.92,0,0,1-25.38,45q-15.45,19.15-34,29.91T343.71,659.7Zm-16.19-76.18q9.57-2.16,21.71-8.83a119.46,119.46,0,0,0,23.17-16.78,97.84,97.84,0,0,0,18.21-22.17,47.46,47.46,0,0,0,7.17-24.53c0-3.16-.49-5.45-1.47-6.89s-2.7-2.15-5.15-2.15q-8.84,0-18.21,7.53a110.68,110.68,0,0,0-18.39,19.37,153.52,153.52,0,0,0-16,26.25A183.81,183.81,0,0,0,327.52,583.52Z\" transform=\"translate(-95.37 -317.74)\" fill=\"#c69c6d\" stroke=\"#c69c6d\" stroke-miterlimit=\"10\" stroke-width=\"4\"></path><path mask=\"url(#Mask-l)\" id=\"gelaccio-l\" d=\"M457.74,653.67q-16.92,0-23.73-13.34t-6.8-31.85q0-21.08,6.62-49.5a589.76,589.76,0,0,1,17.47-59.61q10.84-31.2,23.91-61.12T501.33,384q13.05-24.31,24.28-38.74t17.84-14.42q4.41,0,7.54,5.6A51.93,51.93,0,0,1,556,350a64.54,64.54,0,0,1,1.84,14.42q0,11.63-5,30.35a366.28,366.28,0,0,1-14,41.32,486.47,486.47,0,0,1-21.34,46,435.15,435.15,0,0,1-27,44.77,216.31,216.31,0,0,1-31.64,36.8q-1.47,10.75-2.76,21.52A167,167,0,0,0,454.8,605q0,15.93,4.23,23.46T470.61,636q9.57,0,19.32-10.33a132.11,132.11,0,0,0,18.57-26A262.59,262.59,0,0,0,524,567.16l7.73,5.17q-15.45,37.44-34.21,59.39T457.74,653.67Zm6.62-112.76a279.69,279.69,0,0,0,24.28-34.44q11.4-18.93,21.15-39t17.1-38.74a330.76,330.76,0,0,0,11.41-33.57q4-14.85,4.41-23.46a6.1,6.1,0,0,0-.73-3q-3,0-9.75,10.11a300.51,300.51,0,0,0-15.82,27.33q-9,17.22-18.58,39.6T479.44,492.7Q470.62,517.23,464.36,540.91Z\" transform=\"translate(-95.37 -317.74)\" fill=\"#c69c6d\" stroke=\"#c69c6d\" stroke-miterlimit=\"10\" stroke-width=\"4\"></path><path mask=\"url(#Mask-a)\" id=\"gelaccio-a\" d=\"M535,661q-11.78,0-20.41-9.25T505.92,624q0-15.5,5.89-33.15A177.26,177.26,0,0,1,528,556a186.19,186.19,0,0,1,23.55-31.42,122,122,0,0,1,28.14-22.81q14.9-8.61,29.61-8.61,15.45,0,25.93,9.25t10.49,24.32q0,11.63-6.26,16.36t-15.45,3q.74-3.44,1.29-7.53a59.2,59.2,0,0,0,.55-8,36.31,36.31,0,0,0-3.31-15.93q-3.31-6.88-12.87-6.89-10.3,0-21,8.18a108.44,108.44,0,0,0-20.6,21.52,182.21,182.21,0,0,0-17.66,29.27,194.44,194.44,0,0,0-12.14,31.42q-4.41,15.5-4.41,27.55,0,14.64,9.2,14.63,8.45,0,18.57-9.47a163,163,0,0,0,20.6-24.1q10.49-14.62,20-29.91t16.55-26.91c1-1.43,1.84-2.15,2.58-2.15a58.38,58.38,0,0,1,5.88,1.94,27.68,27.68,0,0,1,7.36,4.09,8.29,8.29,0,0,1,3.31,6.89q0,4.31-3.31,11l-7.36,14.85q-4,8.18-7.35,16.36a42.24,42.24,0,0,0-3.32,15.92,23.82,23.82,0,0,0,2.76,11,9.39,9.39,0,0,0,9,5.38q9.18,0,25.19-15.71T686.17,568l5.88,6.89a176.68,176.68,0,0,1-20.78,40.89q-12.33,17.66-25.93,27.76t-27.22,10.11q-14.73,0-21.71-10.54a45.85,45.85,0,0,1-7.72-23,23.81,23.81,0,0,1,.18-2.8,23.64,23.64,0,0,0,.19-2.79Q574,636.45,561.47,648.73T535,661Z\" transform=\"translate(-95.37 -317.74)\" fill=\"#c69c6d\" stroke=\"#c69c6d\" stroke-miterlimit=\"10\" stroke-width=\"4\"></path><path mask=\"url(#Mask-c)\" id=\"gelaccio-c\" d=\"M718.54,664.87q-18.76,0-30.9-14t-12.14-42.4a122.9,122.9,0,0,1,7.17-41.32,145,145,0,0,1,19-36.58q11.76-16.37,26.11-25.83t29.06-9.47q15.45,0,21.89,9.47a36.68,36.68,0,0,1,6.44,21.09,54.75,54.75,0,0,1-5,23.24q-5,10.77-13.43,10.76-7,0-11.4-7.74,4.41-3,8.46-12.06a50,50,0,0,0,4.05-20.66c0-2.86-.5-5-1.47-6.45s-3-2.15-5.89-2.15q-9.57,0-19.68,9.9t-18.94,25.61a177.69,177.69,0,0,0-14.35,32.92A106,106,0,0,0,702,611.49a47.65,47.65,0,0,0,5.52,22.82q5.52,10.32,21,10.33,14.34,0,29.24-9.47t28.14-26.69q13.24-17.21,21-40.89l6.62,6.89a167.28,167.28,0,0,1-24.09,46.27Q774.08,641.19,755.5,653T718.54,664.87Z\" transform=\"translate(-95.37 -317.74)\" fill=\"#c69c6d\" stroke=\"#c69c6d\" stroke-miterlimit=\"10\" stroke-width=\"4\"></path><path mask=\"url(#Mask-cc)\" id=\"gelaccio-cc\" d=\"M839.92,664.87q-18.76,0-30.9-14t-12.14-42.4a122.66,122.66,0,0,1,7.18-41.32A145.26,145.26,0,0,1,823,530.58q11.78-16.37,26.12-25.83t29.06-9.47q15.45,0,21.88,9.47a36.68,36.68,0,0,1,6.44,21.09,54.74,54.74,0,0,1-5,23.24q-5,10.77-13.43,10.76-7,0-11.4-7.74,4.41-3,8.46-12.06a50.17,50.17,0,0,0,4-20.66q0-4.29-1.47-6.45t-5.88-2.15q-9.57,0-19.68,9.9t-18.95,25.61a177.65,177.65,0,0,0-14.34,32.92,106,106,0,0,0-5.52,32.28,47.65,47.65,0,0,0,5.52,22.82q5.5,10.32,21,10.33,14.35,0,29.25-9.47t28.14-26.69q13.25-17.21,21-40.89l6.63,6.89a167.31,167.31,0,0,1-24.1,46.27Q895.46,641.19,876.89,653T839.92,664.87Z\" transform=\"translate(-95.37 -317.74)\" fill=\"#c69c6d\" stroke=\"#c69c6d\" stroke-miterlimit=\"10\" stroke-width=\"4\"></path><path mask=\"url(#Mask-i)\" id=\"gelaccio-i\" d=\"M948.8,653.25q-15.45,0-23.18-11t-7.72-26.9q0-9.9,2.94-25a275.75,275.75,0,0,1,8.28-31.63,249.38,249.38,0,0,1,12.32-31.21q7-14.62,14.9-23.89T972,494.42a10.1,10.1,0,0,1,7.18,3c2.08,2,3.12,4.89,3.12,8.61s-1.9,9.33-5.7,16.79-8.28,16.14-13.43,26a247.2,247.2,0,0,0-13.42,30.77A90.38,90.38,0,0,0,944,610.2q0,14.2,4.41,18.94t12.87,4.74q12.51,0,27-14.64T1018.69,568l4.78,6q-12.13,37.88-32.19,58.53T948.8,653.25Zm43.77-195.42a19.85,19.85,0,0,1-12-3.87q-5.34-3.87-5.34-11.62,0-10.33,9.38-17.43t19.31-7.1a15.37,15.37,0,0,1,10.3,3.44q4.05,3.45,4.05,11.62,0,9-8.09,17T992.57,457.83Z\" transform=\"translate(-95.37 -317.74)\" fill=\"#c69c6d\" stroke=\"#c69c6d\" stroke-miterlimit=\"10\" stroke-width=\"4\"></path><path mask=\"url(#Mask-o)\" id=\"gelaccio-o\" d=\"M1034.5,654.54q-16.18,0-22.43-12.27a60.24,60.24,0,0,1-6.26-27.76,111.44,111.44,0,0,1,3.68-28,134.87,134.87,0,0,1,9.93-26.69,77.81,77.81,0,0,1,14-20.23q7.72-7.74,15.82-7.74a17,17,0,0,1,5.33,1.07,10.46,10.46,0,0,1,4.6,2.8,82.93,82.93,0,0,0-8.64,14.64,192.34,192.34,0,0,0-8.46,20.44,182.58,182.58,0,0,0-6.26,21.95,94.36,94.36,0,0,0-2.39,20q0,9.9,2.94,15.49t9.57,5.6q7.35,0,17.47-9.26A131.76,131.76,0,0,0,1082.69,602,71.68,71.68,0,0,1,1066,575.12q-5.34-15.27-5.34-34.65a71.77,71.77,0,0,1,4.05-22.81,49.53,49.53,0,0,1,12.5-20.23q8.46-8.16,22.08-8.18,15.45,0,21.51,10.12t6.07,24.32q0,15.93-7.17,35.94a263.7,263.7,0,0,1-17.1,38.09,20,20,0,0,0,11.4,3.44q5.52,0,13.24-3A44.16,44.16,0,0,0,1142.1,588q7.17-7.11,11.59-18.73l5.88,5.17q-7.72,21.09-21.15,30.77t-25.93,9.69a43.35,43.35,0,0,1-9.57-1.08,34.45,34.45,0,0,1-8.82-3.23,151.75,151.75,0,0,1-28.14,31Q1050.32,654.54,1034.5,654.54Zm56.65-65.43a168.63,168.63,0,0,0,15.27-32.49q6.07-17.45,6.07-32.07,0-10.75-2.76-15.71t-7.54-4.95q-7.37,0-14.72,11.84t-7.35,29.91a109.29,109.29,0,0,0,2.76,23Q1085.64,581.36,1091.15,589.11Z\" transform=\"translate(-95.37 -317.74)\" fill=\"#c69c6d\" stroke=\"#c69c6d\" stroke-miterlimit=\"10\" stroke-width=\"4\"></path></g><defs><g id=\"gelaccio-masks\"><polyline id=\"Mask-gelaccio-underline\" points=\"174.94 413.93 267.28 389.06 372.3 381.26 460.87 375.93 552.97 375.93 624.3 375.93 703.63 375.93 770.49 375.93 870.97 381.26 947.82 383.44 994.3 387.78\" fill=\"none\" stroke=\"#000\" stroke-miterlimit=\"10\" stroke-width=\"34\"></polyline><g id=\"Mask-gelaccio-G\"><mask id=\"Mask-G\"><path class=\"mask\" id=\"Mask-gelaccio-Gsub\" d=\"M193.67,515.67l72.66,8.66,10,4S263,557.81,259,580.07s-11.78,62.68-7.33,79.63L265,679.93\" fill=\"none\" stroke=\"#000\" stroke-miterlimit=\"10\" stroke-width=\"34\"></path><path class=\"mask\" id=\"Mask-gelaccio-Gmain\" d=\"M247,440.4c12.46-5.87,32.44-12.85,36-37.4,4.44-30.67,5.88-29.75,1.88-40.15S279,341,265,338.33s-33.33,4-43.33,12S194.33,373,185,383.67s-14.67,16.27-24,34.14a260.85,260.85,0,0,0-18,43.86c-3.33,10.66-9.55,22.1-16.67,47.33-7.33,26-16,56.21-7.34,100.67,6.56,33.66,39.34,55.2,39.34,55.2s36.67,7.53,50-5.17,28-27.37,30.67-42.7l2.68-15.33\" fill=\"none\" stroke=\"#000\" stroke-miterlimit=\"10\" stroke-width=\"40\"></path></mask></g><mask id=\"Mask-e\"><path class=\"mask\" id=\"Mask-gelaccio-e\" d=\"M323,589.11l28.67-9s30.89-17.74,46.11-41.74,21.15-30.7,11.22-36.16c-18-9.9-49.33,1.21-49.33,1.21L339,527.67s-19.34,32.22-24,49.39c-4.81,17.73-6.67,43.27,2.67,56.61s26,23.15,38,19.58,32-16.25,46.66-30.25,24.88-31.33,24.88-31.33L434.93,568\" fill=\"none\" stroke=\"#000\" stroke-miterlimit=\"10\" stroke-width=\"34\"></path></mask><mask id=\"Mask-l\"><path class=\"mask\" id=\"Mask-gelaccio-l\" d=\"M471,555.67,492.5,512,519,461.67l18.67-40S571,351,548.33,340.42c-16.39-7.62-44.79,63.25-51.92,80.45L479,463l-14.64,39.17-12.69,49.5S441.19,597,441.19,612.33s18.53,34.67,23.17,33.34,25.49-18.66,31.31-26.62,18-23.08,18-23.08l8.89-15.9L528.33,563\" fill=\"none\" stroke=\"#000\" stroke-miterlimit=\"10\" stroke-width=\"34\"></path></mask><mask id=\"Mask-a\"><path class=\"mask\" id=\"Mask-gelaccio-a\" d=\"M629,546.33s17.77-29.25-6-40.72S579.67,512,579.67,512L551,546.5l-13.81,26L523,615s-8.67,20.13,0,30.73S556.24,643,556.24,643l33.43-36L613,577.06l14.31-27.33,3.73,1.71s-29.37,68.89-24.71,78.89,10,16,20,12a97.09,97.09,0,0,0,34-23.33C671.67,607,683,580.07,683,580.07L686.17,568\" fill=\"none\" stroke=\"#000\" stroke-miterlimit=\"10\" stroke-width=\"34\"></path></mask><mask id=\"Mask-c\"><path class=\"mask\" id=\"Mask-gelaccio-c\" d=\"M758.33,561.67c8.75-10.8,12.2-16.16,13.42-18.25a8.37,8.37,0,0,0,.86-2.1c1.12-4.18,4.92-20.37-.28-29.32-6-10.33-32-6.39-32-6.39S717.67,523,710.33,537,697,572.54,697,572.54s-9.66,31.79-10.83,44.46,16.16,28.73,16.16,28.73S716.11,663,730.56,657s31.11-18,31.11-18l26-24.67L803,593s3.82-13.89,3.82-19.17\" fill=\"none\" stroke=\"#000\" stroke-miterlimit=\"10\" stroke-width=\"34\"></path></mask><mask id=\"Mask-cc\"><path class=\"mask\" id=\"Mask-gelaccio-cc\" d=\"M873,558.17l20-17.33s6-20,0-30.34-32-6.38-32-6.38-22.67,17.38-30,31.38-13.33,35.55-13.33,35.55-4.27,31.23-4.27,44c0,20,9.6,29.24,9.6,29.24s13.78,17.26,28.22,11.26,31.11-18,31.11-18l26-24.66L921,586.17l6.49-20.07\" fill=\"none\" stroke=\"#000\" stroke-miterlimit=\"10\" stroke-width=\"34\"></path></mask><g id=\"Mask-gelaccio-i\"><mask id=\"Mask-i\"><path class=\"mask\" id=\"Mask-gelaccio-isub\" d=\"M993,454.82s28-15.15,20-23.15-19.33-6-22.67-3.34-7.33,20-7.33,20l3.33,6.49Z\" fill=\"none\" stroke=\"#000\" stroke-miterlimit=\"10\" stroke-width=\"34\"></path><path class=\"mask\" id=\"Mask-gelaccio-imain\" d=\"M975.28,492.27,959.67,523s-11.34,24.67-13.34,32.67S931.67,595,930.33,611,943,639.67,943,639.67s21.33,2.66,35.33-6.67,28.48-32.89,28.48-32.89l16.66-26.06v-7.91\" fill=\"none\" stroke=\"#000\" stroke-miterlimit=\"10\" stroke-width=\"34\"></path></mask></g><mask id=\"Mask-o\"><path class=\"mask\" id=\"Mask-gelaccio-o\" d=\"M1056.33,528.33s-19.33,2-26,31.34S1013.67,639,1027,640s26,3,40-11,34.67-44.47,34.67-44.47l15.33-38s10-38.75,0-43.12-26.61-12-34.31,1.49-11.75,36-11.75,36-.37,38.09,9.18,45.42,27.23,19.11,41.32,20,38.13-31.85,38.13-31.85l5.43-8.34\" fill=\"none\" stroke=\"#000\" stroke-miterlimit=\"10\" stroke-width=\"34\"></path></mask></g></defs></svg>"

/***/ }),

/***/ "./src/animation-main.js":
/*!*******************************!*\
  !*** ./src/animation-main.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "delay": () => (/* binding */ delay)
/* harmony export */ });


const delay = () => {
    document.querySelector('.left-modal-two').classList.add('dropping');
    document.querySelector('.button-modal').classList.add('extending');
    document.querySelector('.button-one').classList.add('extOne');
    document.querySelector('.button-two').classList.add('extTwo');
    document.querySelector('.button-three').classList.add('extThree');
    document.querySelector('.ballTwo').classList.add('revealing')
    document.querySelectorAll('a').forEach(a => a.classList.add('revealing'));
    document.querySelectorAll('a').forEach(a => a.classList.add('revealing'));
    document.querySelectorAll('span').forEach(a => a.classList.add('revealing'));
    document.querySelector('.text-container').classList.add('fade');
};

/***/ }),

/***/ "./src/empty-content.js":
/*!******************************!*\
  !*** ./src/empty-content.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emptyContent": () => (/* binding */ emptyContent)
/* harmony export */ });


let emptyContent = (parent) => {
        while (parent.lastElementChild) {
          parent.removeChild(parent.lastElementChild);
        }
    }

/***/ }),

/***/ "./src/main-page-load.js":
/*!*******************************!*\
  !*** ./src/main-page-load.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendingMain": () => (/* binding */ appendingMain)
/* harmony export */ });
/* harmony import */ var _gelsvg_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gelsvg.svg */ "./src/gelsvg.svg");
/* harmony import */ var _gelsvg_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gelsvg_svg__WEBPACK_IMPORTED_MODULE_0__);


const appendingMain = () => {

const container = document.getElementById('content');
const iceBall = document.createElement('div')
iceBall.classList.add('ballOne')
container.appendChild(iceBall);
const iceBallTwo = document.createElement('div')
iceBallTwo.classList.add('ballTwo');
container.appendChild(iceBallTwo);
const iceCream = document.createElement('div');
iceCream.classList.add('text-container')
const firstLine = document.createElement('div');
firstLine.classList.add('textOne')
firstLine.textContent = "Ice Cream";
iceCream.appendChild(firstLine);
const secondLine = document.createElement('div');
secondLine.textContent = "Time";
secondLine.classList.add('textTwo')
iceCream.appendChild(secondLine)
container.appendChild(iceCream);

const imageWrapper = document.createElement('div');
imageWrapper.classList.add('image-container');
container.appendChild(imageWrapper);


const leftBar = document.createElement('div');
leftBar.classList.add('left-side-bar');
const leftModalFirst = document.createElement('div');

leftModalFirst.classList.add('left-modal-one');
const leftModalSecond = document.createElement('div');
leftModalSecond.classList.add('left-modal-two');
leftBar.appendChild(leftModalFirst);
leftBar.appendChild(leftModalSecond);
container.appendChild(leftBar);

const handwritten = document.createElement('div');
handwritten.classList.add('handwritten');
function component() {
    const element = document.createElement('div');
    element.innerHTML = (_gelsvg_svg__WEBPACK_IMPORTED_MODULE_0___default());
    return element;
}
handwritten.appendChild(component());
container.appendChild(handwritten);

const buttonModal = document.createElement('div');
buttonModal.classList.add('button-modal');
const btnOne = document.createElement('div');
btnOne.classList.add('button-one');
const linkFirst = document.createElement('a');
linkFirst.classList.add('menuBtn')
const spanFirst = document.createElement('span');
linkFirst.appendChild(spanFirst);
spanFirst.textContent = "MENU"
btnOne.appendChild(linkFirst); 
const btnTwo = document.createElement('div');
btnTwo.classList.add('button-two');
const linkSecond = document.createElement('a');
const spanSecond = document.createElement('span');
spanSecond.textContent = "CONTACT"
linkSecond.appendChild(spanSecond);
btnTwo.appendChild(linkSecond); 
const btnThree = document.createElement('div');
btnThree.classList.add('button-three');
const linkThird= document.createElement('a');
const spanThird = document.createElement('span');
linkThird.appendChild(spanThird);
btnThree.appendChild(linkThird);
buttonModal.appendChild(btnOne);
buttonModal.appendChild(btnTwo);
buttonModal.appendChild(btnThree);
container.appendChild(buttonModal);

}





/***/ }),

/***/ "./src/menu-page-load.js":
/*!*******************************!*\
  !*** ./src/menu-page-load.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "populateMenu": () => (/* binding */ populateMenu)
/* harmony export */ });
/* harmony import */ var _assets_ICone_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/ICone.svg */ "./src/assets/ICone.svg");
/* harmony import */ var _assets_ICone_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_ICone_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_ICtwo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/ICtwo.svg */ "./src/assets/ICtwo.svg");
/* harmony import */ var _assets_ICtwo_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_ICtwo_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_ICthree_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/ICthree.svg */ "./src/assets/ICthree.svg");
/* harmony import */ var _assets_ICthree_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_ICthree_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_ICfour_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/ICfour.svg */ "./src/assets/ICfour.svg");
/* harmony import */ var _assets_ICfour_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_ICfour_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_ICfive_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/ICfive.svg */ "./src/assets/ICfive.svg");
/* harmony import */ var _assets_ICfive_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_ICfive_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_ICsix_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/ICsix.svg */ "./src/assets/ICsix.svg");
/* harmony import */ var _assets_ICsix_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_ICsix_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_ICseven_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/ICseven.svg */ "./src/assets/ICseven.svg");
/* harmony import */ var _assets_ICseven_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_ICseven_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_ICeight_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/ICeight.svg */ "./src/assets/ICeight.svg");
/* harmony import */ var _assets_ICeight_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_ICeight_svg__WEBPACK_IMPORTED_MODULE_7__);









let populateMenu = () => {
    const container = document.getElementById('content'); 
    const menuContent = document.createElement('div');
    menuContent.classList.add('menuContent');
    container.appendChild(menuContent); 
    const header = document.createElement('div') 

    function iceCreamSvgCreator(path) {
        const element = document.createElement('div');
        element.innerHTML = path
        return element
    };
    menuContent.appendChild(iceCreamSvgCreator((_assets_ICone_svg__WEBPACK_IMPORTED_MODULE_0___default())));
    menuContent.appendChild(iceCreamSvgCreator((_assets_ICtwo_svg__WEBPACK_IMPORTED_MODULE_1___default())));
    menuContent.appendChild(iceCreamSvgCreator((_assets_ICthree_svg__WEBPACK_IMPORTED_MODULE_2___default())));
    menuContent.appendChild(iceCreamSvgCreator((_assets_ICfour_svg__WEBPACK_IMPORTED_MODULE_3___default())));
    menuContent.appendChild(iceCreamSvgCreator((_assets_ICfive_svg__WEBPACK_IMPORTED_MODULE_4___default())));
    menuContent.appendChild(iceCreamSvgCreator((_assets_ICsix_svg__WEBPACK_IMPORTED_MODULE_5___default())));
    menuContent.appendChild(iceCreamSvgCreator((_assets_ICseven_svg__WEBPACK_IMPORTED_MODULE_6___default())));
    menuContent.appendChild(iceCreamSvgCreator((_assets_ICeight_svg__WEBPACK_IMPORTED_MODULE_7___default())));   
}



/***/ }),

/***/ "./src/ice-cream-shop.avif":
/*!*********************************!*\
  !*** ./src/ice-cream-shop.avif ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f4b082862c2429f7576c.avif";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page-load */ "./src/main-page-load.js");
/* harmony import */ var _animation_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation-main */ "./src/animation-main.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _empty_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./empty-content */ "./src/empty-content.js");
/* harmony import */ var _menu_page_load__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu-page-load */ "./src/menu-page-load.js");






(0,_main_page_load__WEBPACK_IMPORTED_MODULE_0__.appendingMain)();
setTimeout(_animation_main__WEBPACK_IMPORTED_MODULE_1__.delay, 4800)
let menuBtn = document.querySelector('.menuBtn').addEventListener('click', () => {
    let container = document.getElementById('content');
    (0,_empty_content__WEBPACK_IMPORTED_MODULE_3__.emptyContent)(container);
    container.style.display = "flex"
    ;(0,_menu_page_load__WEBPACK_IMPORTED_MODULE_4__.populateMenu)();
})



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQmlEO0FBQ1Y7QUFDbEI7QUFDd0I7QUFDQzs7QUFFOUMsOERBQWE7QUFDYixXQUFXLGtEQUFLO0FBQ2hCO0FBQ0E7QUFDQSxJQUFJLDREQUFZO0FBQ2hCO0FBQ0EsSUFBSSw4REFBWTtBQUNoQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9JQ2VpZ2h0LnN2ZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL0lDZml2ZS5zdmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9JQ2ZvdXIuc3ZnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvSUNvbmUuc3ZnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvSUNzZXZlbi5zdmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9JQ3NpeC5zdmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9JQ3RocmVlLnN2ZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL0lDdHdvLnN2ZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZ2Vsc3ZnLnN2ZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYW5pbWF0aW9uLW1haW4uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2VtcHR5LWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21haW4tcGFnZS1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LXBhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImljZS1jcmVhbS1zaG9wLmF2aWZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHsgXFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBmMTYwYztcXG59XFxuXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDR2dyAzMHZ3IDFmciAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMHZoIDIyLjV2aCAyNi4yNXZoIDI2LjI1dmggNXZoO1xcbn1cXG5cXG4ubGVmdC1zaWRlLWJhciB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyA1IC8gMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG59XFxuXFxuLmJhbGxUd28ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNSU7XFxuICAgIGxlZnQ6IDMwJTtcXG4gICAgd2lkdGg6IDUwdmg7XFxuICAgIGhlaWdodDogNTB2aDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwMHB4O1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcgLCB3aGl0ZSA1MCUsIHJnYigyNTUsIDE2NiwgMCkgMTAwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMzLCAxNzgsIDEzLCAwLjYpO1xcbiAgICB0cmFuc2l0aW9uOiAzNTAwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDJweCAxMHB4IHJnYigxOTQsIDE3NSwgOTEpKTtcXG59XFxuXFxuLmxlZnQtbW9kYWwtb25lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBmMTYwYztcXG4gICAgd2lkdGg6IDF2dztcXG59XFxuXFxuLmxlZnQtbW9kYWwtdHdvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDNkMTtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDUgLyAyO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIHdpZHRoOiA2dmg7XFxuICAgIGhlaWdodDogMDtcXG4gICAgei1pbmRleDogMTAwMDtcXG4gICAgdHJhbnNpdGlvbjogMTUwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZHJvcHBpbmcge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kIDpsaW5lYXItZ3JhZGllbnQoICNjZTk0NDkgMjUlLCAjNDMyMzA0IDEwMCUpXFxufVxcblxcbi5oYW5kd3JpdHRlbiB7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAxcztcXG4gICAgZ3JpZC1jb2x1bW46IDIvNDtcXG4gICAgZ3JpZC1yb3c6IDEvMztcXG4gICAgei1pbmRleDogOTk5O1xcbn1cXG5cXG5cXG4gLmhhbmR3cml0dGVuIC5zdmcge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMzB2aDtcXG4gICAgd2lkdGg6IDEwMHZoO1xcbiAgICB6LWluZGV4OiA5OTk7XFxuICAgIFxcbn1cXG4jd3JpdHRlbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1JTtcXG4gICAgbGVmdDogLTYwJTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGhlaWdodDogMTJ2aDtcXG4gICAgbGVmdDogMTAlO1xcbiAgICB6LWluZGV4OiAxMDAwOyAgIFxcbn1cXG5cXG4ubWFzayB7XFxuICAgIGZpbGw6IG5vbmU7XFxuICAgIHN0cm9rZTogd2hpdGU7XFxufVxcblxcblxcbi5tYXNrIHtcXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMTAwMDtcXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDEwMDA7XFxuICB9XFxuICBcXG4gIEBrZXlmcmFtZXMgc3Ryb2tlT2Zmc2V0IHtcXG4gICAgdG8ge1xcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xcbiAgICB9XFxuICB9XFxuICBcXG5cXG4gICNNYXNrLWdlbGFjY2lvLUdtYWluIHtcXG4gICAgYW5pbWF0aW9uOiBzdHJva2VPZmZzZXQgMXMgbGluZWFyIGZvcndhcmRzO1xcbiAgfVxcblxcbiAgI01hc2stZ2VsYWNjaW8tR3N1YiB7XFxuICAgIGFuaW1hdGlvbjogc3Ryb2tlT2Zmc2V0IDJzIGxpbmVhciBmb3J3YXJkcyAwLjVzO1xcbiAgfVxcblxcbiAgI01hc2stZ2VsYWNjaW8tZSB7XFxuICAgIGFuaW1hdGlvbjogc3Ryb2tlT2Zmc2V0IDFzIGxpbmVhciBmb3J3YXJkcyAxczsgXFxuICB9XFxuXFxuICAjTWFzay1nZWxhY2Npby1sIHtcXG4gICAgYW5pbWF0aW9uOiBzdHJva2VPZmZzZXQgMXMgbGluZWFyIGZvcndhcmRzIDEuNXM7IFxcbiAgfVxcblxcbiAgI01hc2stZ2VsYWNjaW8tYSB7XFxuICAgIGFuaW1hdGlvbjogc3Ryb2tlT2Zmc2V0IDFzIGxpbmVhciBmb3J3YXJkcyAyczsgXFxuICB9XFxuXFxuICAjTWFzay1nZWxhY2Npby1jIHtcXG4gICAgYW5pbWF0aW9uOiBzdHJva2VPZmZzZXQgMXMgbGluZWFyIGZvcndhcmRzIDIuNXM7IFxcbiAgfVxcblxcbiAgI01hc2stZ2VsYWNjaW8tY2Mge1xcbiAgICBhbmltYXRpb246IHN0cm9rZU9mZnNldCAxcyBsaW5lYXIgZm9yd2FyZHMgM3M7IFxcbiAgfVxcblxcbiAgI01hc2stZ2VsYWNjaW8taW1haW4ge1xcbiAgICBhbmltYXRpb246IHN0cm9rZU9mZnNldCAxcyBsaW5lYXIgZm9yd2FyZHMgMy41czsgXFxuICB9XFxuXFxuXFxuICAjTWFzay1nZWxhY2Npby1vIHtcXG4gICAgYW5pbWF0aW9uOiBzdHJva2VPZmZzZXQgMXMgbGluZWFyIGZvcndhcmRzIDQuMHM7IFxcbiAgfVxcblxcbiAgI01hc2stZ2VsYWNjaW8taXN1YiB7XFxuICAgIGFuaW1hdGlvbjogc3Ryb2tlT2Zmc2V0IDJzIGxpbmVhciBmb3J3YXJkcyA0LjdzOyBcXG4gIH1cXG5cXG5cXG5cXG4udGV4dC1jb250YWluZXIge1xcbiAgICBncmlkLWFyZWE6IDIgLyA0IC8gMyAvIDY7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMTAwNDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiAzNTAwbXM7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZyAscmdiKDI1NSwgMTY2LCAwKSA1MCUgLCB3aGl0ZSAxMDAlKTtcXG59XFxuXFxuLnRleHRPbmUgLCAudGV4dFR3byB7XFxuXFxuICAgIHBhZGRpbmc6IDF2aCAxdmggMHZoIDF2aDtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCByZ2IoMjU1LCAxNjYsIDApO1xcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCByZ2IoMjU1LCAxNjYsIDApO1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgd2lkdGg6IDQwJTtcXG59XFxuXFxuLnRleHRPbmUge1xcbiAgICBjb2xvciA6cmdiKDI1NSwgMTY2LCAwKTtcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYigyNTUsIDE2NiwgMCk7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICNkNmQzZDE7XFxufVxcblxcbi50ZXh0VHdvIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYigyNTUsIDE2NiwgMCk7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggcmdiKDI1NSwgMTY2LCAwKTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXG59XFxuXFxuLmZhZGUge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uaW1hZ2UtY29udGFpbmVyIHtcXG4gICAgei1pbmRleDogMTAwMjtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDUgLyA0OyBcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdyg0cHggMHB4IDNweCAjY2RhZDhmKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuaW1nIHtcXG4gICAgei1pbmRleDogMTAwMDtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDUgLyAzO1xcbn1cXG5cXG4uYnV0dG9uLW1vZGFsIHtcXG4gICAgZ3JpZC1hcmVhOiAzIC8gMyAvIDUgLyA2O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogMDtcXG4gICAgZ2FwOiAxdmg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogIDFmciAxZnIgMWZyO1xcbiAgICB0cmFuc2l0aW9uOiAxNTAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5idXR0b24tb25lLCAuYnV0dG9uLXR3bywgLmJ1dHRvbi10aHJlZSAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZDhkNWQwIDUwJSAsICNiZTgxNDIgMTAwJSk7XFxuICAgIHRyYW5zaXRpb246IDE1MDBtcyBlYXNlLWluLW91dDtcXG4gICAgei1pbmRleDogMTAwMTtcXG4gICAgXFxufVxcblxcbmEge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNkOGQ1ZDAgNTAlICwgI2NmYjhhMCAxMDAlKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogNDUwMG1zO1xcbiAgICB6LWluZGV4OiAxMDA0O1xcbn1cXG5cXG4ucmV2ZWFsaW5nIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuXFxuXFxuYSBzcGFuIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNkOGQ1ZDAgNTAlICwgI2Q0Y2FiYyAxMDAlKTtcXG4gICAgei1pbmRleDogMTAwNDtcXG59XFxuXFxuXFxuLmJ1dHRvbi10d28ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmU4MTQyO1xcbn1cXG5cXG4uYnV0dG9uLXRocmVlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQzMjMwNDtcXG59XFxuXFxuLmV4dGVuZGluZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZXh0T25lIHtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLmV4dFR3byB7XFxuICAgIHdpZHRoOiA1NSU7XFxufVxcblxcbi5leHRUaHJlZSB7XFxuICAgIHdpZHRoOiA2MCU7XFxufVxcblxcbi5pbWFnZS1jb250YWluZXIge1xcbiAgICBhbmltYXRpb246IGZhZGVJbiA3cztcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiA0LjVzO1xcbiAgICAtbW96LWFuaW1hdGlvbjogZmFkZUluIDQuNXM7XFxuICAgIC1vLWFuaW1hdGlvbjogZmFkZUluIDQuNXM7XFxuICAgIC1tcy1hbmltYXRpb246IGZhZGVJbiA0LjVzO1xcbiAgfVxcbiAgQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICAwJSB7b3BhY2l0eTowO31cXG4gICAgMTAwJSB7b3BhY2l0eToxO31cXG4gIH1cXG4gIFxcbiAgQC1tb3ota2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAgIDAlIHtvcGFjaXR5OjA7fVxcbiAgICAxMDAlIHtvcGFjaXR5OjE7fVxcbiAgfVxcbiAgXFxuICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcXG4gICAgMCUge29wYWNpdHk6MDt9XFxuICAgIDEwMCUge29wYWNpdHk6MTt9XFxuICB9XFxuICBcXG4gIEAtby1rZXlmcmFtZXMgZmFkZUluIHtcXG4gICAgMCUge29wYWNpdHk6MDt9XFxuICAgIDEwMCUge29wYWNpdHk6MTt9XFxuICB9XFxuICBcXG4gIEAtbXMta2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAgIDAlIHtvcGFjaXR5OjA7fVxcbiAgICAxMDAlIHtvcGFjaXR5OjE7fVxcbiAgfSBcXG5cXG4gIC8qIE1lbnUgcGFnZSBzdHlsaW5nICovXFxuXFxuICAubWVudUNvbnRlbnQge1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgICBnYXA6IDJ2aDtcXG4gIH1cXG5cXG4gIHN2Zzpub3QoI3dyaXR0ZW4gICkge1xcbiAgICAgIHdpZHRoOiAxMHZ3O1xcbiAgICAgIGhlaWdodDogMTB2dztcXG4gICAgICBwYWRkaW5nOiA1dmg7XFxuICAgICAgdHJhbnNmb3JtOiA1MDBtcztcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB9XFxuXFxuXFxuXFxuICBzdmc6bm90KCN3cml0dGVuKTpob3ZlciB7XFxuICAgICAgYW5pbWF0aW9uOiBzaGFrZSAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgICAgIHotaW5kZXg6IDEwMDA7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2JlODE0MjtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1MDAwcHg7XFxuICB9XFxuXFxuXFxuXFxuICBAa2V5ZnJhbWVzIHNoYWtlIHtcXG4gICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIDFweCkgcm90YXRlKDBkZWcpIHNjYWxlKDEuMSk7IH1cXG4gICAgMTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgLTJweCkgcm90YXRlKC0xZGVnKSBzY2FsZSgxLjEpOyB9XFxuICAgIDIwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIDBweCkgcm90YXRlKDFkZWcpIHNjYWxlKDEuMSk7IH1cXG4gICAgMzAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoM3B4LCAycHgpIHJvdGF0ZSgwZGVnKSBzY2FsZSgxLjEpOyB9XFxuICAgIDQwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgLTFweCkgcm90YXRlKDFkZWcpIHNjYWxlKDEuMik7IH1cXG4gICAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgMnB4KSByb3RhdGUoLTFkZWcpIHNjYWxlKDEuMik7IH1cXG4gICAgNjAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgMXB4KSByb3RhdGUoMGRlZykgc2NhbGUoMS4yKTsgfVxcbiAgICA3MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzcHgsIDFweCkgcm90YXRlKC0xZGVnKSBzY2FsZSgxLjIpOyB9XFxuICAgIDgwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIC0xcHgpIHJvdGF0ZSgxZGVnKSBzY2FsZSgxLjEpOyB9XFxuICAgIDkwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgMnB4KSByb3RhdGUoMGRlZykgc2NhbGUoMS4xKTsgfVxcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAtMnB4KSByb3RhdGUoLTFkZWcpIHNjYWxlKDEuMSk7IH1cXG4gIH1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsK0NBQStDO0lBQy9DLG1EQUFtRDtBQUN2RDs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixhQUFhOztBQUVqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixxRUFBcUU7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QzNCLHlCQUF5QjtJQUN6QiwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLElBQUksU0FBUyxDQUFDO0lBQ2QsTUFBTSxTQUFTLENBQUM7RUFDbEI7O0VBRUE7SUFDRSxJQUFJLFNBQVMsQ0FBQztJQUNkLE1BQU0sU0FBUyxDQUFDO0VBQ2xCOztFQUVBO0lBQ0UsSUFBSSxTQUFTLENBQUM7SUFDZCxNQUFNLFNBQVMsQ0FBQztFQUNsQjs7RUFFQTtJQUNFLElBQUksU0FBUyxDQUFDO0lBQ2QsTUFBTSxTQUFTLENBQUM7RUFDbEI7O0VBRUE7SUFDRSxJQUFJLFNBQVMsQ0FBQztJQUNkLE1BQU0sU0FBUyxDQUFDO0VBQ2xCOztFQUVBLHNCQUFzQjs7RUFFdEI7TUFDSSxhQUFhO01BQ2IsV0FBVztNQUNYLHNDQUFzQztNQUN0QywyQkFBMkI7TUFDM0IscUJBQXFCO01BQ3JCLFFBQVE7RUFDWjs7RUFFQTtNQUNJLFdBQVc7TUFDWCxZQUFZO01BQ1osWUFBWTtNQUNaLGdCQUFnQjtNQUNoQixrQkFBa0I7RUFDdEI7Ozs7RUFJQTtNQUNJLGlDQUFpQztNQUNqQyxtQ0FBbUM7TUFDbkMsYUFBYTtNQUNiLHlCQUF5QjtNQUN6QixxQkFBcUI7RUFDekI7Ozs7RUFJQTtJQUNFLEtBQUssc0RBQXNELEVBQUU7SUFDN0QsTUFBTSx5REFBeUQsRUFBRTtJQUNqRSxNQUFNLHVEQUF1RCxFQUFFO0lBQy9ELE1BQU0sc0RBQXNELEVBQUU7SUFDOUQsTUFBTSx1REFBdUQsRUFBRTtJQUMvRCxNQUFNLHdEQUF3RCxFQUFFO0lBQ2hFLE1BQU0sdURBQXVELEVBQUU7SUFDL0QsTUFBTSx1REFBdUQsRUFBRTtJQUMvRCxNQUFNLHdEQUF3RCxFQUFFO0lBQ2hFLE1BQU0sc0RBQXNELEVBQUU7SUFDOUQsT0FBTyx3REFBd0QsRUFBRTtFQUNuRVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHsgXFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBmMTYwYztcXG59XFxuXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDR2dyAzMHZ3IDFmciAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMHZoIDIyLjV2aCAyNi4yNXZoIDI2LjI1dmggNXZoO1xcbn1cXG5cXG4ubGVmdC1zaWRlLWJhciB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyA1IC8gMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG59XFxuXFxuLmJhbGxUd28ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNSU7XFxuICAgIGxlZnQ6IDMwJTtcXG4gICAgd2lkdGg6IDUwdmg7XFxuICAgIGhlaWdodDogNTB2aDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwMHB4O1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcgLCB3aGl0ZSA1MCUsIHJnYigyNTUsIDE2NiwgMCkgMTAwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMzLCAxNzgsIDEzLCAwLjYpO1xcbiAgICB0cmFuc2l0aW9uOiAzNTAwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDJweCAxMHB4IHJnYigxOTQsIDE3NSwgOTEpKTtcXG59XFxuXFxuLmxlZnQtbW9kYWwtb25lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBmMTYwYztcXG4gICAgd2lkdGg6IDF2dztcXG59XFxuXFxuLmxlZnQtbW9kYWwtdHdvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDNkMTtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDUgLyAyO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIHdpZHRoOiA2dmg7XFxuICAgIGhlaWdodDogMDtcXG4gICAgei1pbmRleDogMTAwMDtcXG4gICAgdHJhbnNpdGlvbjogMTUwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZHJvcHBpbmcge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kIDpsaW5lYXItZ3JhZGllbnQoICNjZTk0NDkgMjUlLCAjNDMyMzA0IDEwMCUpXFxufVxcblxcbi5oYW5kd3JpdHRlbiB7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAxcztcXG4gICAgZ3JpZC1jb2x1bW46IDIvNDtcXG4gICAgZ3JpZC1yb3c6IDEvMztcXG4gICAgei1pbmRleDogOTk5O1xcbn1cXG5cXG5cXG4gLmhhbmR3cml0dGVuIC5zdmcge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMzB2aDtcXG4gICAgd2lkdGg6IDEwMHZoO1xcbiAgICB6LWluZGV4OiA5OTk7XFxuICAgIFxcbn1cXG4jd3JpdHRlbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1JTtcXG4gICAgbGVmdDogLTYwJTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGhlaWdodDogMTJ2aDtcXG4gICAgbGVmdDogMTAlO1xcbiAgICB6LWluZGV4OiAxMDAwOyAgIFxcbn1cXG5cXG4ubWFzayB7XFxuICAgIGZpbGw6IG5vbmU7XFxuICAgIHN0cm9rZTogd2hpdGU7XFxufVxcblxcblxcbi5tYXNrIHtcXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMTAwMDtcXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDEwMDA7XFxuICB9XFxuICBcXG4gIEBrZXlmcmFtZXMgc3Ryb2tlT2Zmc2V0IHtcXG4gICAgdG8ge1xcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xcbiAgICB9XFxuICB9XFxuICBcXG5cXG4gICNNYXNrLWdlbGFjY2lvLUdtYWluIHtcXG4gICAgYW5pbWF0aW9uOiBzdHJva2VPZmZzZXQgMXMgbGluZWFyIGZvcndhcmRzO1xcbiAgfVxcblxcbiAgI01hc2stZ2VsYWNjaW8tR3N1YiB7XFxuICAgIGFuaW1hdGlvbjogc3Ryb2tlT2Zmc2V0IDJzIGxpbmVhciBmb3J3YXJkcyAwLjVzO1xcbiAgfVxcblxcbiAgI01hc2stZ2VsYWNjaW8tZSB7XFxuICAgIGFuaW1hdGlvbjogc3Ryb2tlT2Zmc2V0IDFzIGxpbmVhciBmb3J3YXJkcyAxczsgXFxuICB9XFxuXFxuICAjTWFzay1nZWxhY2Npby1sIHtcXG4gICAgYW5pbWF0aW9uOiBzdHJva2VPZmZzZXQgMXMgbGluZWFyIGZvcndhcmRzIDEuNXM7IFxcbiAgfVxcblxcbiAgI01hc2stZ2VsYWNjaW8tYSB7XFxuICAgIGFuaW1hdGlvbjogc3Ryb2tlT2Zmc2V0IDFzIGxpbmVhciBmb3J3YXJkcyAyczsgXFxuICB9XFxuXFxuICAjTWFzay1nZWxhY2Npby1jIHtcXG4gICAgYW5pbWF0aW9uOiBzdHJva2VPZmZzZXQgMXMgbGluZWFyIGZvcndhcmRzIDIuNXM7IFxcbiAgfVxcblxcbiAgI01hc2stZ2VsYWNjaW8tY2Mge1xcbiAgICBhbmltYXRpb246IHN0cm9rZU9mZnNldCAxcyBsaW5lYXIgZm9yd2FyZHMgM3M7IFxcbiAgfVxcblxcbiAgI01hc2stZ2VsYWNjaW8taW1haW4ge1xcbiAgICBhbmltYXRpb246IHN0cm9rZU9mZnNldCAxcyBsaW5lYXIgZm9yd2FyZHMgMy41czsgXFxuICB9XFxuXFxuXFxuICAjTWFzay1nZWxhY2Npby1vIHtcXG4gICAgYW5pbWF0aW9uOiBzdHJva2VPZmZzZXQgMXMgbGluZWFyIGZvcndhcmRzIDQuMHM7IFxcbiAgfVxcblxcbiAgI01hc2stZ2VsYWNjaW8taXN1YiB7XFxuICAgIGFuaW1hdGlvbjogc3Ryb2tlT2Zmc2V0IDJzIGxpbmVhciBmb3J3YXJkcyA0LjdzOyBcXG4gIH1cXG5cXG5cXG5cXG4udGV4dC1jb250YWluZXIge1xcbiAgICBncmlkLWFyZWE6IDIgLyA0IC8gMyAvIDY7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMTAwNDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiAzNTAwbXM7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZyAscmdiKDI1NSwgMTY2LCAwKSA1MCUgLCB3aGl0ZSAxMDAlKTtcXG59XFxuXFxuLnRleHRPbmUgLCAudGV4dFR3byB7XFxuXFxuICAgIHBhZGRpbmc6IDF2aCAxdmggMHZoIDF2aDtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCByZ2IoMjU1LCAxNjYsIDApO1xcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCByZ2IoMjU1LCAxNjYsIDApO1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgd2lkdGg6IDQwJTtcXG59XFxuXFxuLnRleHRPbmUge1xcbiAgICBjb2xvciA6cmdiKDI1NSwgMTY2LCAwKTtcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYigyNTUsIDE2NiwgMCk7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICNkNmQzZDE7XFxufVxcblxcbi50ZXh0VHdvIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYigyNTUsIDE2NiwgMCk7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggcmdiKDI1NSwgMTY2LCAwKTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXG59XFxuXFxuLmZhZGUge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uaW1hZ2UtY29udGFpbmVyIHtcXG4gICAgei1pbmRleDogMTAwMjtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDUgLyA0OyBcXG4gICAgYmFja2dyb3VuZDogdXJsKGljZS1jcmVhbS1zaG9wLmF2aWYpO1xcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDRweCAwcHggM3B4ICNjZGFkOGYpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG5pbWcge1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gNSAvIDM7XFxufVxcblxcbi5idXR0b24tbW9kYWwge1xcbiAgICBncmlkLWFyZWE6IDMgLyAzIC8gNSAvIDY7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBnYXA6IDF2aDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAgMWZyIDFmciAxZnI7XFxuICAgIHRyYW5zaXRpb246IDE1MDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmJ1dHRvbi1vbmUsIC5idXR0b24tdHdvLCAuYnV0dG9uLXRocmVlICB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xcbiAgICB3aWR0aDogMDtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNkOGQ1ZDAgNTAlICwgI2JlODE0MiAxMDAlKTtcXG4gICAgdHJhbnNpdGlvbjogMTUwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICB6LWluZGV4OiAxMDAxO1xcbiAgICBcXG59XFxuXFxuYSB7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBhZGRpbmc6IDE1cHggMzBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2Q4ZDVkMCA1MCUgLCAjY2ZiOGEwIDEwMCUpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiA0NTAwbXM7XFxuICAgIHotaW5kZXg6IDEwMDQ7XFxufVxcblxcbi5yZXZlYWxpbmcge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5cXG5cXG5hIHNwYW4ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2Q4ZDVkMCA1MCUgLCAjZDRjYWJjIDEwMCUpO1xcbiAgICB6LWluZGV4OiAxMDA0O1xcbn1cXG5cXG5cXG4uYnV0dG9uLXR3byB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZTgxNDI7XFxufVxcblxcbi5idXR0b24tdGhyZWUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDMyMzA0O1xcbn1cXG5cXG4uZXh0ZW5kaW5nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5leHRPbmUge1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uZXh0VHdvIHtcXG4gICAgd2lkdGg6IDU1JTtcXG59XFxuXFxuLmV4dFRocmVlIHtcXG4gICAgd2lkdGg6IDYwJTtcXG59XFxuXFxuLmltYWdlLWNvbnRhaW5lciB7XFxuICAgIGFuaW1hdGlvbjogZmFkZUluIDdzO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDQuNXM7XFxuICAgIC1tb3otYW5pbWF0aW9uOiBmYWRlSW4gNC41cztcXG4gICAgLW8tYW5pbWF0aW9uOiBmYWRlSW4gNC41cztcXG4gICAgLW1zLWFuaW1hdGlvbjogZmFkZUluIDQuNXM7XFxuICB9XFxuICBAa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAgIDAlIHtvcGFjaXR5OjA7fVxcbiAgICAxMDAlIHtvcGFjaXR5OjE7fVxcbiAgfVxcbiAgXFxuICBALW1vei1rZXlmcmFtZXMgZmFkZUluIHtcXG4gICAgMCUge29wYWNpdHk6MDt9XFxuICAgIDEwMCUge29wYWNpdHk6MTt9XFxuICB9XFxuICBcXG4gIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICAwJSB7b3BhY2l0eTowO31cXG4gICAgMTAwJSB7b3BhY2l0eToxO31cXG4gIH1cXG4gIFxcbiAgQC1vLWtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICAwJSB7b3BhY2l0eTowO31cXG4gICAgMTAwJSB7b3BhY2l0eToxO31cXG4gIH1cXG4gIFxcbiAgQC1tcy1rZXlmcmFtZXMgZmFkZUluIHtcXG4gICAgMCUge29wYWNpdHk6MDt9XFxuICAgIDEwMCUge29wYWNpdHk6MTt9XFxuICB9IFxcblxcbiAgLyogTWVudSBwYWdlIHN0eWxpbmcgKi9cXG5cXG4gIC5tZW51Q29udGVudCB7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICAgIGdhcDogMnZoO1xcbiAgfVxcblxcbiAgc3ZnOm5vdCgjd3JpdHRlbiAgKSB7XFxuICAgICAgd2lkdGg6IDEwdnc7XFxuICAgICAgaGVpZ2h0OiAxMHZ3O1xcbiAgICAgIHBhZGRpbmc6IDV2aDtcXG4gICAgICB0cmFuc2Zvcm06IDUwMG1zO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIH1cXG5cXG5cXG5cXG4gIHN2Zzpub3QoI3dyaXR0ZW4pOmhvdmVyIHtcXG4gICAgICBhbmltYXRpb246IHNoYWtlIDAuNXMgZWFzZS1pbi1vdXQ7XFxuICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICAgICAgei1pbmRleDogMTAwMDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmU4MTQyO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwMDBweDtcXG4gIH1cXG5cXG5cXG5cXG4gIEBrZXlmcmFtZXMgc2hha2Uge1xcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgMXB4KSByb3RhdGUoMGRlZykgc2NhbGUoMS4xKTsgfVxcbiAgICAxMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAtMnB4KSByb3RhdGUoLTFkZWcpIHNjYWxlKDEuMSk7IH1cXG4gICAgMjAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgMHB4KSByb3RhdGUoMWRlZykgc2NhbGUoMS4xKTsgfVxcbiAgICAzMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzcHgsIDJweCkgcm90YXRlKDBkZWcpIHNjYWxlKDEuMSk7IH1cXG4gICAgNDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAtMXB4KSByb3RhdGUoMWRlZykgc2NhbGUoMS4yKTsgfVxcbiAgICA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAycHgpIHJvdGF0ZSgtMWRlZykgc2NhbGUoMS4yKTsgfVxcbiAgICA2MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtM3B4LCAxcHgpIHJvdGF0ZSgwZGVnKSBzY2FsZSgxLjIpOyB9XFxuICAgIDcwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDNweCwgMXB4KSByb3RhdGUoLTFkZWcpIHNjYWxlKDEuMik7IH1cXG4gICAgODAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgLTFweCkgcm90YXRlKDFkZWcpIHNjYWxlKDEuMSk7IH1cXG4gICAgOTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAycHgpIHJvdGF0ZSgwZGVnKSBzY2FsZSgxLjEpOyB9XFxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIC0ycHgpIHJvdGF0ZSgtMWRlZykgc2NhbGUoMS4xKTsgfVxcbiAgfVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlkPVxcXCJMYXllcl8xXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB4PVxcXCIwcHhcXFwiIHk9XFxcIjBweFxcXCIgdmlld0JveD1cXFwiMCAwIDM0Ny41MjkgMzQ3LjUyOVxcXCIgc3R5bGU9XFxcImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzQ3LjUyOSAzNDcuNTI5O1xcXCIgeG1sOnNwYWNlPVxcXCJwcmVzZXJ2ZVxcXCI+PGcgaWQ9XFxcIlhNTElEXzE0MTZfXFxcIj48cGF0aCBpZD1cXFwiWE1MSURfNTg1X1xcXCIgc3R5bGU9XFxcImZpbGw6I0ZGQTI1MDtcXFwiIGQ9XFxcIk0xNzMuNzY0LDM0Ny41MjlMMTczLjc2NCwzNDcuNTI5Yy0xMy43MzgsMC0yNC45NzgtMTEuMjQtMjQuOTc4LTI0Ljk3OHYtOTUuOTAyIGMwLTEzLjczOCwxMS4yNC0yNC45NzgsMjQuOTc4LTI0Ljk3OGwwLDBjMTMuNzM4LDAsMjQuOTc4LDExLjI0LDI0Ljk3OCwyNC45Nzh2OTUuOTAyIEMxOTguNzQzLDMzNi4yODgsMTg3LjUwMiwzNDcuNTI5LDE3My43NjQsMzQ3LjUyOXpcXFwiPjwvcGF0aD48cGF0aCBpZD1cXFwiWE1MSURfNTg0X1xcXCIgc3R5bGU9XFxcImZpbGw6I0ZGNTk1OTtcXFwiIGQ9XFxcIk0yMTkuMDE0LDI1OS4zNDdoLTkwLjVjLTIwLjg1MSwwLTM3Ljc1NC0xNi45MDMtMzcuNzU0LTM3Ljc1NFY4My4wMDQgQzkwLjc2LDM3LjE2MiwxMjcuOTIyLDAsMTczLjc2NCwwbDAsMGM0NS44NDIsMCw4My4wMDQsMzcuMTYyLDgzLjAwNCw4My4wMDR2MTM4LjU4OSBDMjU2Ljc2OSwyNDIuNDQ0LDIzOS44NjYsMjU5LjM0NywyMTkuMDE0LDI1OS4zNDd6XFxcIj48L3BhdGg+PHBhdGggaWQ9XFxcIlhNTElEXzE0MTdfXFxcIiBzdHlsZT1cXFwiZmlsbDojRkZGRUI5O1xcXCIgZD1cXFwiTTI1Ni43NjksMTI2LjM2OVY4My4wMDRDMjU2Ljc2OSwzNy4xNjIsMjE5LjYwNiwwLDE3My43NjQsMGwwLDAgQzEyNy45MjIsMCw5MC43NiwzNy4xNjIsOTAuNzYsODMuMDA0djQzLjM2NUgyNTYuNzY5elxcXCI+PC9wYXRoPjxnIGlkPVxcXCJYTUxJRF8xNDE4X1xcXCI+PHBhdGggaWQ9XFxcIlhNTElEXzE0MTlfXFxcIiBzdHlsZT1cXFwiZmlsbDojRkZGRUI5O1xcXCIgZD1cXFwiTTE2NS4yMjUsMTI0LjA0NmMtMC4xMDUsMC44MDktMC4xNjUsMS42MzEtMC4xNjUsMi40Njd2NTUuOTE0IGMwLDEwLjU4NCw4LjY1OSwxOS4yNDMsMTkuMjQzLDE5LjI0M2wwLDBjMTAuNTg0LDAsMTkuMjQzLTguNjYsMTkuMjQzLTE5LjI0M3YtNTcuOTE0YzAtMC44MzYtMC4wNiwwLjM0Mi0wLjE2NS0wLjQ2N0gxNjUuMjI1elxcXCI+PC9wYXRoPjxwYXRoIGlkPVxcXCJYTUxJRF8xNDIwX1xcXCIgc3R5bGU9XFxcImZpbGw6I0ZGRkVCOTtcXFwiIGQ9XFxcIk0xMjcuOTEsMTI0LjA0NnYyOS4xMzhjMCwxMC41ODQsOC42NiwxOS4yNDMsMTkuMjQzLDE5LjI0M2wwLDAgYzEwLjU4NCwwLDE5LjI0My04LjY1OSwxOS4yNDMtMTkuMjQzdi0yOS4xMzhDMTY2LjM5NiwxMjQuMDQ2LDEyNy45MSwxMjQuMDQ2LDEyNy45MSwxMjQuMDQ2elxcXCI+PC9wYXRoPjxwYXRoIGlkPVxcXCJYTUxJRF8xNDIxX1xcXCIgc3R5bGU9XFxcImZpbGw6I0ZGRkVCOTtcXFwiIGQ9XFxcIk05MC43NiwxMjQuMDQ2djUwLjMwMWMwLDEwLjU4NCw4LjY2LDE5LjI0MywxOS4yNDMsMTkuMjQzIHMxOS4yNDMtOC42NTksMTkuMjQzLTE5LjI0M3YtNTAuMzAxQzEyOS4yNDYsMTI0LjA0Niw5MC43NiwxMjQuMDQ2LDkwLjc2LDEyNC4wNDZ6XFxcIj48L3BhdGg+PC9nPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZlcnNpb249XFxcIjEuMVxcXCIgaWQ9XFxcIkNhcGFfMVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgeD1cXFwiMHB4XFxcIiB5PVxcXCIwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCA1OSA1OVxcXCIgc3R5bGU9XFxcImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTkgNTk7XFxcIiB4bWw6c3BhY2U9XFxcInByZXNlcnZlXFxcIj48Zz48Zz48cGF0aCBzdHlsZT1cXFwiZmlsbDojRkJENDkwO1xcXCIgZD1cXFwiTTI1LjUsNDJ2MTRjMCwxLjEsMC45LDIsMiwyaDRjMS4xLDAsMi0wLjksMi0yVjQySDI1LjV6XFxcIj48L3BhdGg+PHBhdGggc3R5bGU9XFxcImZpbGw6I0ZCRDQ5MDtcXFwiIGQ9XFxcIk0zMS41LDU5aC00Yy0xLjY1NCwwLTMtMS4zNDYtMy0zVjQxaDEwdjE1QzM0LjUsNTcuNjU0LDMzLjE1NCw1OSwzMS41LDU5eiBNMjYuNSw0M3YxMyBjMCwwLjU1MiwwLjQ0OCwxLDEsMWg0YzAuNTUyLDAsMS0wLjQ0OCwxLTFWNDNIMjYuNXpcXFwiPjwvcGF0aD48L2c+PHBhdGggc3R5bGU9XFxcImZpbGw6I0VFQUY0QjtcXFwiIGQ9XFxcIk0zMy41MDEsNTcuNWMtMC4wODYsMC0wLjE3NC0wLjAxMS0wLjI2MS0wLjAzNGMtMS4yNjYtMC4zNDEtNi4yMjctMi4zNzYtNS41MTQtNS40MjkgYzAuMTgzLTAuNzg1LTEuNDU3LTIuMDU3LTIuNjYtMi42MzZjLTAuNDk4LTAuMjQtMC43MDctMC44MzctMC40NjgtMS4zMzVjMC4yNDEtMC40OTYsMC44MzktMC43MDYsMS4zMzUtMC40NjggYzAuNDQ5LDAuMjE3LDQuMzcxLDIuMTksMy43NCw0Ljg5NGMtMC4yMjgsMC45NzUsMi4zODYsMi41ODUsNC4wODYsMy4wNDJjMC41MzMsMC4xNDQsMC44NSwwLjY5MiwwLjcwNiwxLjIyNiBDMzQuMzQ2LDU3LjIwNiwzMy45NDEsNTcuNSwzMy41MDEsNTcuNXpcXFwiPjwvcGF0aD48cGF0aCBzdHlsZT1cXFwiZmlsbDojRUVBRjRCO1xcXCIgZD1cXFwiTTMzLjUsNDljLTIuNTIzLDAtNC41LTEuNTM3LTQuNS0zLjVzMS45NzctMy41LDQuNS0zLjVjMC41NTMsMCwxLDAuNDQ3LDEsMXMtMC40NDcsMS0xLDEgYy0xLjQ3NCwwLTIuNSwwLjc5LTIuNSwxLjVzMS4wMjYsMS41LDIuNSwxLjVjMC41NTMsMCwxLDAuNDQ3LDEsMVMzNC4wNTMsNDksMzMuNSw0OXpcXFwiPjwvcGF0aD48cGF0aCBzdHlsZT1cXFwiZmlsbDojRjlENzBCO1xcXCIgZD1cXFwiTTM5LjUsNDJoLTIwbDUtMzhjMC0yLjIsMS44LTQsNC00aDJjMi4yLDAsNCwxLjgsNCw0TDM5LjUsNDJ6XFxcIj48L3BhdGg+PHBhdGggc3R5bGU9XFxcImZpbGw6I0Y5RUE4MDtcXFwiIGQ9XFxcIk0zMi4wMDMsMjIuMDM4Yy0xLjM3NiwwLTIuNDk2LTEuMTItMi40OTYtMi40OTZ2LTIuNjk0YzAtMC41NTMsMC40NDctMSwxLTFzMSwwLjQ0NywxLDF2Mi42OTQgYzAsMC4yNjksMC4yMjgsMC40OTYsMC40OTYsMC40OTZjMC4yNywwLDAuNDk3LTAuMjI4LDAuNDk3LTAuNDk2di0yLjY5NGMwLTAuNTUzLDAuNDQ3LTEsMS0xczEsMC40NDcsMSwxdjIuNjk0IEMzNC41LDIwLjkxOCwzMy4zOCwyMi4wMzgsMzIuMDAzLDIyLjAzOHpcXFwiPjwvcGF0aD48cGF0aCBzdHlsZT1cXFwiZmlsbDojRjlFQTgwO1xcXCIgZD1cXFwiTTI2LjgwNSwzMC4wMzhjLTEuMzc3LDAtMi40OTctMS4xMi0yLjQ5Ny0yLjQ5NnYtMS40OTdjMC0wLjU1MywwLjQ0Ny0xLDEtMXMxLDAuNDQ3LDEsMXYxLjQ5NyBjMCwwLjI2OSwwLjIyOCwwLjQ5NiwwLjQ5NywwLjQ5NmMwLjI2OSwwLDAuNDk2LTAuMjI4LDAuNDk2LTAuNDk2di0xLjQ5N2MwLTAuNTUzLDAuNDQ3LTEsMS0xczEsMC40NDcsMSwxdjEuNDk3IEMyOS4zMDEsMjguOTE4LDI4LjE4MSwzMC4wMzgsMjYuODA1LDMwLjAzOHpcXFwiPjwvcGF0aD48cGF0aCBzdHlsZT1cXFwiZmlsbDojRjlFQTgwO1xcXCIgZD1cXFwiTTMyLjk5NywzNy4wMzhjLTEuMzc3LDAtMi40OTctMS4xMi0yLjQ5Ny0yLjQ5NnYtMS40OTdjMC0wLjU1MywwLjQ0Ny0xLDEtMXMxLDAuNDQ3LDEsMXYxLjQ5NyBjMCwwLjI2OSwwLjIyOCwwLjQ5NiwwLjQ5NywwLjQ5NmMwLjI2OSwwLDAuNDk2LTAuMjI4LDAuNDk2LTAuNDk2di0xLjQ5N2MwLTAuNTUzLDAuNDQ3LTEsMS0xczEsMC40NDcsMSwxdjEuNDk3IEMzNS40OTMsMzUuOTE4LDM0LjM3MywzNy4wMzgsMzIuOTk3LDM3LjAzOHpcXFwiPjwvcGF0aD48cGF0aCBzdHlsZT1cXFwiZmlsbDojRjlFQTgwO1xcXCIgZD1cXFwiTTI3Ljk5NywxMS45OTNjLTEuMzc3LDAtMi40OTctMS4xMi0yLjQ5Ny0yLjQ5NlY4YzAtMC41NTMsMC40NDctMSwxLTFzMSwwLjQ0NywxLDF2MS40OTcgYzAsMC4yNjksMC4yMjgsMC40OTYsMC40OTcsMC40OTZjMC4yNjksMCwwLjQ5Ni0wLjIyOCwwLjQ5Ni0wLjQ5NlY4YzAtMC41NTMsMC40NDctMSwxLTFzMSwwLjQ0NywxLDF2MS40OTcgQzMwLjQ5MywxMC44NzMsMjkuMzczLDExLjk5MywyNy45OTcsMTEuOTkzelxcXCI+PC9wYXRoPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZlcnNpb249XFxcIjEuMVxcXCIgaWQ9XFxcIkxheWVyXzFcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHg9XFxcIjBweFxcXCIgeT1cXFwiMHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjg5Ljk0IDI4OS45NFxcXCIgc3R5bGU9XFxcImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjg5Ljk0IDI4OS45NDtcXFwiIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiPjxnPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNDQjRFNDQ7XFxcIiBkPVxcXCJNMTQ0Ljk3LDBjMzAuMDI3LDAsNTQuMzY0LDI0LjM0Niw1NC4zNjQsNTQuMzY0YzAsMzAuMDI3LTI0LjMzNyw1NC4zNjQtNTQuMzY0LDU0LjM2NCBjLTMwLjAxOCwwLTU0LjM2NC0yNC4zMzctNTQuMzY0LTU0LjM2NEM5MC42MDYsMjQuMzQ2LDExNC45NTIsMCwxNDQuOTcsMHpcXFwiPjwvcGF0aD48cGF0aCBzdHlsZT1cXFwiZmlsbDojRTU2ODVFO1xcXCIgZD1cXFwiTTEwNC4xOTcsMjcuMTgyYzI3LjUyNiwwLDQ5LjgzMywyMi4zMTYsNDkuODMzLDQ5LjgzM2MwLDI3LjUyNi0yMi4zMDcsNDkuODMzLTQ5LjgzMyw0OS44MzMgcy00OS44MzMtMjIuMzA3LTQ5LjgzMy00OS44MzNDNTQuMzY0LDQ5LjQ5OCw3Ni42NzEsMjcuMTgyLDEwNC4xOTcsMjcuMTgyelxcXCI+PC9wYXRoPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNFOTgxNzk7XFxcIiBkPVxcXCJNMTg1Ljc0MiwyNy4xODJjMjcuNTE3LDAsNDkuODMzLDIyLjMxNiw0OS44MzMsNDkuODMzYzAsMjcuNTI2LTIyLjMxNiw0OS44MzMtNDkuODMzLDQ5LjgzMyBjLTI3LjUzNSwwLTQ5LjgzMy0yMi4zMDctNDkuODMzLTQ5LjgzM0MxMzUuOTA5LDQ5LjQ5OCwxNTguMjA3LDI3LjE4MiwxODUuNzQyLDI3LjE4MnpcXFwiPjwvcGF0aD48cGF0aCBzdHlsZT1cXFwiZmlsbDojRUZDNzVFO1xcXCIgZD1cXFwiTTU0LjM2NCw4MS4yNjV2NDUuNTg0YzAsMTAuMDAzLDguMTE4LDE4LjEyMSwxOC4xMjEsMTguMTIxaDE4LjEyMWw0NS4zMDMsMTQ0Ljk3aDE4LjEyMSBsNDUuMzAzLTE0NC45N2gxOC4xMjFjMTAuMDAzLDAsMTguMTIxLTguMTE4LDE4LjEyMS0xOC4xMjFWODEuMjY1SDU0LjM2NHpcXFwiPjwvcGF0aD48cGF0aCBzdHlsZT1cXFwiZmlsbDojRDdCMzU0O1xcXCIgZD1cXFwiTTU0LjM2NCw5OS42NjdoMTgxLjIxMnYyNy4xODJINTQuMzY0Vjk5LjY2N3pcXFwiPjwvcGF0aD48cG9seWdvbiBzdHlsZT1cXFwiZmlsbDojRDdCMzU0O1xcXCIgcG9pbnRzPVxcXCIxMTYuNDkyLDIyNy44MTEgMTk5LjMzMywxNDQuOTcgOTAuNjA2LDE0NC45NyBcXFwiPjwvcG9seWdvbj48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlkPVxcXCJMYXllcl8xXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB4PVxcXCIwcHhcXFwiIHk9XFxcIjBweFxcXCIgdmlld0JveD1cXFwiMCAwIDUxMiA1MTJcXFwiIHN0eWxlPVxcXCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7XFxcIiB4bWw6c3BhY2U9XFxcInByZXNlcnZlXFxcIj48cGF0aCBzdHlsZT1cXFwiZmlsbDojRDE4QjVDO1xcXCIgZD1cXFwiTTI1NiwzMDEuNDAyTDI1NiwzMDEuNDAyYzEwLjU3MywwLDE5LjIyLDguNjUsMTkuMjIsMTkuMjE4djE3Mi4xNjMgYzAsMTAuNTctOC42NDcsMTkuMjE4LTE5LjIyLDE5LjIxOGwwLDBjLTEwLjU3MywwLTE5LjIyLTguNjQ3LTE5LjIyLTE5LjIxOFYzMjAuNjJDMjM2Ljc4LDMxMC4wNDksMjQ1LjQyNywzMDEuNDAyLDI1NiwzMDEuNDAyelxcXCI+PC9wYXRoPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNGRkMyNzM7XFxcIiBkPVxcXCJNMjU2LDBMMjU2LDBjNDcuODc1LDAsODcuMDQ3LDM5LjE3LDg3LjA0Nyw4Ny4wNDR2Mjg0LjUwNGMwLDIxLjEyNS0xNy4yODQsMzguNDA3LTM4LjQwOSwzOC40MDcgSDIwNy4zNmMtMjEuMTIyLDAtMzguNDA3LTE3LjI4Mi0zOC40MDctMzguNDA3Vjg3LjA0NEMxNjguOTU2LDM5LjE3LDIwOC4xMjMsMCwyNTYsMHpcXFwiPjwvcGF0aD48cGF0aCBzdHlsZT1cXFwiZmlsbDojRkZEOEE2O1xcXCIgZD1cXFwiTTIyMS45MTYsNjcuMTIxTDIyMS45MTYsNjcuMTIxYzguNzgyLDAsMTUuOTY0LDcuMTg1LDE1Ljk2NCwxNS45NjZ2Mjc2LjcxNyBjMCw4Ljc4MS03LjE4MiwxNS45NjYtMTUuOTY0LDE1Ljk2NmwwLDBjLTguNzgxLDAtMTUuOTY0LTcuMTg1LTE1Ljk2NC0xNS45NjZWODMuMDg4IEMyMDUuOTUsNzQuMzA2LDIxMy4xMzQsNjcuMTIxLDIyMS45MTYsNjcuMTIxelxcXCI+PC9wYXRoPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNGRkQ4QTY7XFxcIiBkPVxcXCJNMjkwLjA4Miw2Ny4xMjFMMjkwLjA4Miw2Ny4xMjFjOC43ODEsMCwxNS45NjQsNy4xODUsMTUuOTY0LDE1Ljk2NnYyNzYuNzE3IGMwLDguNzgxLTcuMTgyLDE1Ljk2Ni0xNS45NjQsMTUuOTY2bDAsMGMtOC43ODEsMC0xNS45NjQtNy4xODUtMTUuOTY0LTE1Ljk2NlY4My4wODhDMjc0LjExNSw3NC4zMDYsMjgxLjMsNjcuMTIxLDI5MC4wODIsNjcuMTIxIHpcXFwiPjwvcGF0aD48cGF0aCBzdHlsZT1cXFwiZmlsbDojRkZEOEE2O1xcXCIgZD1cXFwiTTE4My4wMDksNTguMTM3YzMuNzczLTEzLjk0OCwyMC42MjgtMzIuMzc5LDM2LjczNi0zOS45MTFjMTQuOTQ1LTYuOTg3LDE4LjM2NSw1LjMwNCw4LjAxMywxMC4wOTIgYy0xMy40MzMsNi4yMTEtMjcuNjI4LDIxLjE0Ni0zMy4wNzksMzQuNDIxQzE5MC41MjgsNzIuODQ5LDE4MC4wNzYsNjguOTk1LDE4My4wMDksNTguMTM3elxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmVyc2lvbj1cXFwiMS4xXFxcIiBpZD1cXFwiTGF5ZXJfMVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgeD1cXFwiMHB4XFxcIiB5PVxcXCIwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCA1MTIgNTEyXFxcIiBzdHlsZT1cXFwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyO1xcXCIgeG1sOnNwYWNlPVxcXCJwcmVzZXJ2ZVxcXCI+PHBvbHlnb24gc3R5bGU9XFxcImZpbGw6I0UwOUQ3MDtcXFwiIHBvaW50cz1cXFwiMzQxLjUxNSwyMDYuNDk4IDI2Ni4zNjUsNTEyIDI0NS42MzMsNTEyIDE3MC40ODUsMjA2LjQ5OCBcXFwiPjwvcG9seWdvbj48cGF0aCBzdHlsZT1cXFwiZmlsbDojRDE4QjVDO1xcXCIgZD1cXFwiTTM0MC4xMjcsMjEyLjEzOGwtMS41MjksNi4yMDlsLTIyLjE4NS0xMS44NDhoMTMuMTUyTDM0MC4xMjcsMjEyLjEzOEwzNDAuMTI3LDIxMi4xMzh6IE0zMzUuNTg1LDIzMC41OTVsLTQ1LjExNC0yNC4wOTdoLTEzLjE1Mmw1Ni43NCwzMC4zMDVMMzM1LjU4NSwyMzAuNTk1TDMzNS41ODUsMjMwLjU5NXogTTMzMS4wNDUsMjQ5LjA1MmwtNzkuNjY2LTQyLjU1NGgtMTMuMTU0IGw5MS4yOTQsNDguNzYyTDMzMS4wNDUsMjQ5LjA1MkwzMzEuMDQ1LDI0OS4wNTJ6IE0zMjYuNTA2LDI2Ny41MDdsLTExNC4yMTgtNjEuMDA4aC0xMy4xNTRsMTI1Ljg0Niw2Ny4yMTdMMzI2LjUwNiwyNjcuNTA3IEwzMjYuNTA2LDI2Ny41MDd6IE0zMjEuOTY2LDI4NS45NjRsLTE0OC43NzMtNzkuNDY1aC0yLjcwOGwxLjU3OSw2LjQyMmwxNDguMzczLDc5LjI1MkwzMjEuOTY2LDI4NS45NjRMMzIxLjk2NiwyODUuOTY0eiBNMzE3LjQyNiwzMDQuNDIxbC0xLjUyNiw2LjIwOWwtMTM3LjkyNS03My42NjhsLTEuOTg2LTguMDg2TDMxNy40MjYsMzA0LjQyMUwzMTcuNDI2LDMwNC40MjF6IE0zMTIuODg2LDMyMi44NzVsLTEuNTI5LDYuMjA5IEwxODMuODkxLDI2MWwtMS45ODktOC4wODZMMzEyLjg4NiwzMjIuODc1TDMxMi44ODYsMzIyLjg3NXogTTMwOC4zNDcsMzQxLjMzMmwtMS41MjksNi4yMDlsLTExNy4wMTQtNjIuNWwtMS45ODktOC4wODYgTDMwOC4zNDcsMzQxLjMzMkwzMDguMzQ3LDM0MS4zMzJ6IE0zMDMuODA3LDM1OS43ODlsLTExMC4wNzYtNTguNzk2bDEuOTg2LDguMDg5bDEwNi41NjEsNTYuOTE5TDMwMy44MDcsMzU5Ljc4OUwzMDMuODA3LDM1OS43ODl6IE0yOTkuMjY3LDM3OC4yNDRsLTk5LjYyNS01My4yMTNsMS45ODksOC4wODlsOTYuMTA4LDUxLjMzM0wyOTkuMjY3LDM3OC4yNDRMMjk5LjI2NywzNzguMjQ0eiBNMjk0LjcyNSwzOTYuNzAxbC0xLjUyNiw2LjIwOSBsLTg1LjY1Mi00NS43NTFsLTEuOTg5LTguMDg2TDI5NC43MjUsMzk2LjcwMUwyOTQuNzI1LDM5Ni43MDF6IE0yOTAuMTg1LDQxNS4xNTZsLTEuNTI2LDYuMjA5bC03NS4xOTktNDAuMTY3bC0xLjk4OS04LjA4NiBMMjkwLjE4NSw0MTUuMTU2TDI5MC4xODUsNDE1LjE1NnogTTI4NS42NDUsNDMzLjYxM2wtNjguMjY0LTM2LjQ2M2wxLjk4OSw4LjA4OWw2NC43NDksMzQuNTg0TDI4NS42NDUsNDMzLjYxM0wyODUuNjQ1LDQzMy42MTN6IE0yODEuMTA2LDQ1Mi4wN2wtNTcuODA4LTMwLjg4bDEuOTg5LDguMDg2bDU0LjI5MSwyOUwyODEuMTA2LDQ1Mi4wN0wyODEuMTA2LDQ1Mi4wN3ogTTI3Ni41NjYsNDcwLjUyNGwtMS41MjYsNi4yMDkgbC00My44NDItMjMuNDE2bC0xLjk4OS04LjA4NkwyNzYuNTY2LDQ3MC41MjRMMjc2LjU2Niw0NzAuNTI0eiBNMjcyLjAyNiw0ODguOTgxbC0zNi45MDItMTkuNzA5bDEuOTg5LDguMDg2bDMzLjM4NCwxNy44MzIgTDI3Mi4wMjYsNDg4Ljk4MUwyNzIuMDI2LDQ4OC45ODF6IE0yNjcuNDg2LDUwNy40MzhMMjY2LjM2NSw1MTJoLTMuNDkxbC0xOS44NDUtMTAuNjAxbC0xLjk4OS04LjA4NkwyNjcuNDg2LDUwNy40Mzh6XFxcIj48L3BhdGg+PHBhdGggc3R5bGU9XFxcImZpbGw6I0Y3QzI5RTtcXFwiIGQ9XFxcIk0zNDEuNTE1LDIwNi40OThsLTEuNjU1LDYuNzI3bC0xNDguMjQ1LDc5LjE4MmwtMS41MjYtNi4yMDlsMTQ5LjIxNC03OS43SDM0MS41MTVMMzQxLjUxNSwyMDYuNDk4eiBNMzM1LjkzNiwyMjkuMTc4TDE5NC42MywzMDQuNjUzbDEuNTI5LDYuMjA5bDEzNy43ODktNzMuNTk4TDMzNS45MzYsMjI5LjE3OEwzMzUuOTM2LDIyOS4xNzh6IE0zMzAuMDIxLDI1My4yMTZsLTEzMC44NTQsNjkuODkyIGwxLjUyOSw2LjIwOWwxMjcuMzM0LTY4LjAxNEwzMzAuMDIxLDI1My4yMTZMMzMwLjAyMSwyNTMuMjE2eiBNMzI0LjEwNywyNzcuMjU3bC0xMjAuMzk4LDY0LjMwOGwxLjUyOSw2LjIwOWwxMTYuODgxLTYyLjQzIEwzMjQuMTA3LDI3Ny4yNTdMMzI0LjEwNywyNzcuMjU3eiBNMzE4LjE5NiwzMDEuMjk2bC0xLjk4OSw4LjA4OUwyMDkuNzgsMzY2LjIzMWwtMS41MjktNi4yMDlMMzE4LjE5NiwzMDEuMjk2TDMxOC4xOTYsMzAxLjI5NnogTTMxMi4yODEsMzI1LjMzN2wtMS45ODksOC4wODZsLTk1Ljk3NSw1MS4yNjJsLTEuNTI2LTYuMjA5TDMxMi4yODEsMzI1LjMzN0wzMTIuMjgxLDMyNS4zMzd6IE0zMDYuMzY3LDM0OS4zNzVsLTg5LjAzNyw0Ny41NTkgbDEuNTI2LDYuMjA5bDg1LjUyMS00NS42NzlMMzA2LjM2NywzNDkuMzc1TDMwNi4zNjcsMzQ5LjM3NXogTTMwMC40NTQsMzczLjQxNmwtNzguNTg2LDQxLjk3NWwxLjUzMSw2LjIwOWw3NS4wNjYtNDAuMDk1IEwzMDAuNDU0LDM3My40MTZMMzAwLjQ1NCwzNzMuNDE2eiBNMjk0LjU0MSwzOTcuNDU0bC0xLjk4OSw4LjA4OWwtNjQuNjE1LDM0LjUxMWwtMS41MjYtNi4yMDlMMjk0LjU0MSwzOTcuNDU0TDI5NC41NDEsMzk3LjQ1NHogTTI4OC42Myw0MjEuNDk1bC0xLjk4OSw4LjA4NmwtNTQuMTYsMjguOTI3bC0xLjUyOS02LjIwOUwyODguNjMsNDIxLjQ5NUwyODguNjMsNDIxLjQ5NXogTTI4Mi43MTQsNDQ1LjUzNmwtNDcuMjI0LDI1LjIyNSBsMS41MjYsNi4yMDlsNDMuNzA5LTIzLjM0NkwyODIuNzE0LDQ0NS41MzZMMjgyLjcxNCw0NDUuNTM2eiBNMjc2LjgwMSw0NjkuNTc1bC0xLjk4OSw4LjA4OWwtMzMuMjU0LDE3Ljc2MmwtMS41MjktNi4yMDkgTDI3Ni44MDEsNDY5LjU3NUwyNzYuODAxLDQ2OS41NzV6IE0yNzAuODg1LDQ5My42MTVsLTI2LjMxNiwxNC4wNThsMS4wNjMsNC4zMjdoMy45ODdsMTkuMjc2LTEwLjI5NkwyNzAuODg1LDQ5My42MTUgTDI3MC44ODUsNDkzLjYxNXogTTE4Ny4wNzksMjczLjk0OGwxMjYuMjgyLTY3LjQ1MmgtMTMuMTUyTDE4NS41NSwyNjcuNzM5TDE4Ny4wNzksMjczLjk0OEwxODcuMDc5LDI3My45NDh6IE0xODIuNTM2LDI1NS40OTQgbDkxLjczLTQ4Ljk5NWgtMTMuMTUybC04MC4xMDUsNDIuNzg2TDE4Mi41MzYsMjU1LjQ5NEwxODIuNTM2LDI1NS40OTR6IE0xNzcuOTk3LDIzNy4wMzlsNTcuMTc4LTMwLjU0aC0xMy4xNTJsLTQ1LjU1MywyNC4zMzIgTDE3Ny45OTcsMjM3LjAzOUwxNzcuOTk3LDIzNy4wMzl6IE0xNzMuNDU3LDIxOC41ODJsMjIuNjI0LTEyLjA4M2gtMTMuMTUybC0xMC45OTgsNS44NzVMMTczLjQ1NywyMTguNTgyelxcXCI+PC9wYXRoPjxnPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNGRTdFOEQ7XFxcIiBkPVxcXCJNMzA1Ljc5MywyMDguMjc5Yy00NS42NzQsMjAuMjM1LTE1Mi43NTMsMjYuMjk5LTE0NC45MTEtMjIuMjU4IEMxNjguNzIxLDEzNy40NjUsMzU4Ljc3OCwxNjYuMzY3LDMwNS43OTMsMjA4LjI3OXpcXFwiPjwvcGF0aD48cGF0aCBzdHlsZT1cXFwiZmlsbDojRkNFM0M4O1xcXCIgZD1cXFwiTTE5Ni4xMjksMTM0Ljg3Yy00NC4zODMsMC45MTYtNjAuNzQ5LDM0LjYxOC0yNC4zMSw1Ny45NDYgYzQ3LjE5LDMwLjIxMywxODEuMzYsMzcuNDc4LDE4OC4wNzgsNy44MjVDMzY2LjYxNSwxNzAuOTg5LDI2Mi4yNTksMTMzLjUwNCwxOTYuMTI5LDEzNC44N3pcXFwiPjwvcGF0aD48cGF0aCBzdHlsZT1cXFwiZmlsbDojRkU3RThEO1xcXCIgZD1cXFwiTTIxOS4zMDMsMTAwLjQ0NGMtNDQuMDM5LTIuMTItODEuMjg3LDI4LjQyMS0zNi4wMzUsNTUuNDEyIGM0OS43NjEsMjkuNjgsMTI0LjQxNy0xLjU4OSwxNzMuMzQ3LDMyLjAyNUMzNjguMDksMTU4LjY4NiwyODQuOTE2LDEwMy42MDMsMjE5LjMwMywxMDAuNDQ0elxcXCI+PC9wYXRoPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNGQ0UzQzg7XFxcIiBkPVxcXCJNMzQ1LjY0MSwxNTguMDUzYy00Ni43NDctMzguNDExLTg1LjI5Ni0xOC43NzItMTMyLjM1Ni0zNi40MjcgYy00Ny4wNTktMTcuNjU4LTMzLjQ5OC01NC4zMTctOS43MzEtNTYuMzcyYzAuOTQtMTYuNjI4LTUuNDk3LTQ0LjM0MSw0NC43NjEtNjQuOTk2YzUuMDk5LDMwLjI1NywxMC43ODMsNjkuNDgsNDYuNDgzLDgzLjU5OCBTMzU0LjY3LDEzMi4yODgsMzQ1LjY0MSwxNTguMDUzelxcXCI+PC9wYXRoPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNGRTdFOEQ7XFxcIiBkPVxcXCJNMTk5LjUzLDU4LjUxYy00Ljc2My0xNy40OTgsOS40NDgtNDAuODY4LDQwLjUwNC01NS42MDFjNS42NDktMi42NzksMTIuNjM2LTUuNTMxLDEzLjM2LDEuNDk1IGMyLjkzOCwyOC41NjYsOS41MTYsNjYuODM5LDQxLjQwNSw3OS40NTNjOS4zMTUsMy42ODUsMTcuODk1LDksMjUuMjg2LDE1LjMyNUMyOTMuMzc1LDgxLjc4MywyMDcuMzQsODcuMiwxOTkuNTMsNTguNTF6XFxcIj48L3BhdGg+PGc+PHBhdGggc3R5bGU9XFxcImZpbGw6bm9uZTtzdHJva2U6I0ZGQUJCNTtzdHJva2Utd2lkdGg6Mi40O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyMi45MjY7XFxcIiBkPVxcXCIgTTIyNC42MDYsMjQuNDUzYy01LjQxMiwzLjIxNy0xMi4yNzcsMTEuOTQ1LTE1Ljg4MiwyMi4yNlxcXCI+PC9wYXRoPjxwYXRoIHN0eWxlPVxcXCJmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjIuNDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MjIuOTI2O1xcXCIgZD1cXFwiIE0yMDkuMjE4LDc4LjA3NWMtNi4wOTcsMC41MDEtMTQuNDMzLDEwLjc4My0xNC4zNDgsMjAuMTE0XFxcIj48L3BhdGg+PHBhdGggc3R5bGU9XFxcImZpbGw6bm9uZTtzdHJva2U6I0ZGQUJCNTtzdHJva2Utd2lkdGg6Mi40O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyMi45MjY7XFxcIiBkPVxcXCIgTTE4My40NTksMTE3LjM0NmMtNC42NTgsMC4zODMtMTEuMDMsOC4yMzktMTAuOTY0LDE1LjM3MVxcXCI+PC9wYXRoPjxwYXRoIHN0eWxlPVxcXCJmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjIuNDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MjIuOTI2O1xcXCIgZD1cXFwiIE0xNjYuMzkxLDE1Mi4zOTRjLTQuODM1LDEuNzU5LTEwLjY1NCwxMC4xNTMtMTAuNTY5LDE5LjQ4NFxcXCI+PC9wYXRoPjwvZz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlkPVxcXCJMYXllcl8xXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB4PVxcXCIwcHhcXFwiIHk9XFxcIjBweFxcXCIgdmlld0JveD1cXFwiMCAwIDM2NC45NSAzNjQuOTVcXFwiIHN0eWxlPVxcXCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM2NC45NSAzNjQuOTU7XFxcIiB4bWw6c3BhY2U9XFxcInByZXNlcnZlXFxcIj48ZyBpZD1cXFwiWE1MSURfMTQyNF9cXFwiPjxwYXRoIGlkPVxcXCJYTUxJRF81ODNfXFxcIiBzdHlsZT1cXFwiZmlsbDojRkZBMjUwO1xcXCIgZD1cXFwiTTE4Mi40NzUsMzY0Ljk1TDE4Mi40NzUsMzY0Ljk1Yy0xMy43MzgsMC0yNC45NzgtMTEuMjQtMjQuOTc4LTI0Ljk3OFYyNDQuMDcgYzAtMTMuNzM4LDExLjI0LTI0Ljk3OCwyNC45NzgtMjQuOTc4bDAsMGMxMy43MzgsMCwyNC45NzgsMTEuMjQsMjQuOTc4LDI0Ljk3OHY5NS45MDIgQzIwNy40NTMsMzUzLjcxLDE5Ni4yMTMsMzY0Ljk1LDE4Mi40NzUsMzY0Ljk1elxcXCI+PC9wYXRoPjxnIGlkPVxcXCJYTUxJRF8xNDI1X1xcXCI+PHBhdGggaWQ9XFxcIlhNTElEXzE0MjZfXFxcIiBzdHlsZT1cXFwiZmlsbDojRkY1OTU5O1xcXCIgZD1cXFwiTTcxLjksMjE1LjAxNGw4Ni4xMTEtMTk3LjkyNmM5LjkxMi0yMi43ODQsMzkuMDE1LTIyLjc4NCw0OC45MjcsMCBsODYuMTExLDE5Ny45MjZjOC43NjMsMjAuMTQyLTQuMzkxLDQzLjU2OC0yNC40NjQsNDMuNTY4SDk2LjM2NEM3Ni4yOTEsMjU4LjU4MSw2My4xMzcsMjM1LjE1Niw3MS45LDIxNS4wMTR6XFxcIj48L3BhdGg+PHBhdGggaWQ9XFxcIlhNTElEXzE0MjdfXFxcIiBzdHlsZT1cXFwiZmlsbDojRkZGRUI5O1xcXCIgZD1cXFwiTTI3MC45MjEsMTY0LjE1MUg5NC4wMjlMNzEuOSwyMTUuMDE0Yy04Ljc2MywyMC4xNDEsNC4zOTEsNDMuNTY4LDI0LjQ2NCw0My41NjggaDE3Mi4yMjJjMjAuMDczLDAsMzMuMjI3LTIzLjQyNiwyNC40NjQtNDMuNTY4TDI3MC45MjEsMTY0LjE1MXpcXFwiPjwvcGF0aD48cGF0aCBpZD1cXFwiWE1MSURfMTQyOF9cXFwiIHN0eWxlPVxcXCJmaWxsOiM1RkQyREI7XFxcIiBkPVxcXCJNMjgzLjQ5NywxOTMuMDU3SDgxLjQ1M0w3MS45LDIxNS4wMTRjLTguNzYzLDIwLjE0MSw0LjM5MSw0My41NjgsMjQuNDY0LDQzLjU2OCBoMTcyLjIyMmMyMC4wNzMsMCwzMy4yMjctMjMuNDI2LDI0LjQ2NC00My41NjhMMjgzLjQ5NywxOTMuMDU3elxcXCI+PC9wYXRoPjwvZz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlkPVxcXCJMYXllcl8xXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB4PVxcXCIwcHhcXFwiIHk9XFxcIjBweFxcXCIgdmlld0JveD1cXFwiMCAwIDQxNi4zNiA0MTYuMzZcXFwiIHN0eWxlPVxcXCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQxNi4zNiA0MTYuMzY7XFxcIiB4bWw6c3BhY2U9XFxcInByZXNlcnZlXFxcIj48Zz48cGF0aCBzdHlsZT1cXFwiZmlsbDojRkNFRENBO1xcXCIgZD1cXFwiTTM1Mi43MSwwbC0xOC43Niw1Ny41OGwtNy4xOCwyMi4wMkwyMjMuNTc3LDM5Ni4zMTVjLTQuODU2LDE0LjkwMi0yNS45MzgsMTQuOTAyLTMwLjc5MywwIEw4OS41OSw3OS42bC03LjE4LTIyLjAyTDYzLjY1LDBIMzUyLjcxelxcXCI+PC9wYXRoPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNEREM4OUY7XFxcIiBkPVxcXCJNMzUyLjcxLDBsLTE4Ljc2LDU3LjU4bC03LjE4LDIyLjAybC04OC4xMjQsMjcwLjQ2N2MtNS41MDcsMTYuOTAyLTMwLjQ2NiwxMi45MzktMzAuNDY2LTQuODM4VjAgSDM1Mi43MXpcXFwiPjwvcGF0aD48cGF0aCBzdHlsZT1cXFwiZmlsbDojQjU2MDBCO1xcXCIgZD1cXFwiTTMzMy45NSw1Ny41OGwtNy4xOCwyMi4wMmwtOTkuNTYxLDMwNS41NjdjLTYuMDAxLDE4LjQxOC0zMi4wNTcsMTguNDE4LTM4LjA1OCwwTDg5LjU5LDc5LjYgbC03LjE4LTIyLjAyQzgyLjQxLDU3LjU4LDMzMy45NSw1Ny41OCwzMzMuOTUsNTcuNTh6XFxcIj48L3BhdGg+PHBhdGggc3R5bGU9XFxcImZpbGw6I0ZGRDQxRDtcXFwiIGQ9XFxcIk0zMjYuNzcsNzkuNmwtNy43LDIzLjYybC0yLDYuMTNsLTcuNjksMjMuNjJsLTUuNDMsMTYuNjVsLTg0LjE2LDI1OC4zMiBjLTEuODMsNS42Mi02LjcyLDguNDItMTEuNjEsOC40MnMtOS43OC0yLjgtMTEuNjEtOC40MmwtNzEuOS0yMjAuNjhsLTE3LjY5LTU0LjI5bC05LjY5LTI5Ljc1bC03LjctMjMuNjJIMzI2Ljc3elxcXCI+PC9wYXRoPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNFQTU4N0Y7XFxcIiBkPVxcXCJNODMuODgsMGMzLjg5LDI1LjAzLDguMyw0Ni42MywxNS45LDQ2LjYzYzcuNiwwLDEyLjAxLTIxLjYsMTUuOS00Ni42M1xcXCI+PC9wYXRoPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNFQTU4N0Y7XFxcIiBkPVxcXCJNMjI4LjQsMGMzLjg5LDI1LjAzLDguMyw0Ni42MywxNS45LDQ2LjYzYzcuNiwwLDEyLjAxLTIxLjYsMTUuOS00Ni42M1xcXCI+PC9wYXRoPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNFQTU4N0Y7XFxcIiBkPVxcXCJNMzAwLjY3LDBjMy44OSwyNS4wMyw4LjI5LDQ2LjYzLDE1LjksNDYuNjNzMTIuMDEtMjEuNiwxNS45LTQ2LjYzXFxcIj48L3BhdGg+PHBhdGggc3R5bGU9XFxcImZpbGw6I0VBNTg3RjtcXFwiIGQ9XFxcIk0xNTYuMTQsMGMzLjg5LDI1LjAzLDguMyw0Ni42MywxNS45LDQ2LjYzYzcuNiwwLDEyLjAxLTIxLjYsMTUuOS00Ni42M1xcXCI+PC9wYXRoPjxwb2x5Z29uIHN0eWxlPVxcXCJmaWxsOiNGRkE5MUY7XFxcIiBwb2ludHM9XFxcIjMxOS4wNywxMDMuMjIgMzA5LjM4LDEzMi45NyAxMDYuOTgsMTMyLjk3IDk3LjI5LDEwMy4yMiBcXFwiPjwvcG9seWdvbj48cGF0aCBzdHlsZT1cXFwiZmlsbDojRkZENDFEO1xcXCIgZD1cXFwiTTMzNC4yMyw5NC40N2MwLDQuMTEtMS42Niw3LjgzLTQuMzYsMTAuNTJjLTIuNjksMi42OS02LjQsNC4zNi0xMC41MSw0LjM2SDk3IGMtOC4yMSwwLTE0Ljg3LTYuNjYtMTQuODctMTQuODhjMC00LjExLDEuNjYtNy44Miw0LjM2LTEwLjUxYzIuNjktMi43LDYuNC00LjM2LDEwLjUxLTQuMzZoMjIyLjM2IEMzMjcuNTcsNzkuNiwzMzQuMjMsODYuMjYsMzM0LjIzLDk0LjQ3elxcXCI+PC9wYXRoPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNGRkE5MUY7XFxcIiBkPVxcXCJNMzM0LjIzLDk0LjQ3YzAsNC4xMS0xLjY2LDcuODMtNC4zNiwxMC41MmMtMi42OSwyLjY5LTYuNCw0LjM2LTEwLjUxLDQuMzZIMjA4LjE4Vjc5LjZoMTExLjE4IEMzMjcuNTcsNzkuNiwzMzQuMjMsODYuMjYsMzM0LjIzLDk0LjQ3elxcXCI+PC9wYXRoPjxwb2x5Z29uIHN0eWxlPVxcXCJmaWxsOiM5MTREMDk7XFxcIiBwb2ludHM9XFxcIjMzMy45NSw1Ny41OCAzMjYuNzcsNzkuNiAyMDguMTgsNzkuNiAyMDguMTgsNTcuNTggXFxcIj48L3BvbHlnb24+PHBhdGggc3R5bGU9XFxcImZpbGw6I0ZGQTkxRjtcXFwiIGQ9XFxcIk0zMTcuMDcsMTA5LjM1bC03LjY5LDIzLjYybC04OS41OSwyNzQuOTdjLTEuODMsNS42Mi02LjcyLDguNDItMTEuNjEsOC40MlYxMDkuMzVIMzE3LjA3elxcXCI+PC9wYXRoPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNFQTU4N0Y7XFxcIiBkPVxcXCJNMzAzLjk1LDE0OS42MmwtODQuMTYsMjU4LjMyYy0xLjgzLDUuNjItNi43Miw4LjQyLTExLjYxLDguNDJzLTkuNzgtMi44LTExLjYxLTguNDJsLTcxLjktMjIwLjY4IGw4My41MS0xNy41M0wzMDMuOTUsMTQ5LjYyelxcXCI+PC9wYXRoPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNDRTNFNkI7XFxcIiBkPVxcXCJNMzAzLjk1LDE0OS42MmwtODQuMTYsMjU4LjMyYy0xLjgzLDUuNjItNi43Miw4LjQyLTExLjYxLDguNDJWMTY5LjczTDMwMy45NSwxNDkuNjJ6XFxcIj48L3BhdGg+PHBhdGggc3R5bGU9XFxcImZpbGw6I0ZGQTkxRjtcXFwiIGQ9XFxcIk0yMDguMTgsMTA5LjM1SDk3LjAxYy04LjIxOCwwLTE0Ljg4LTYuNjYyLTE0Ljg4LTE0Ljg4bDAsMGgxMjYuMDVMMjA4LjE4LDEwOS4zNUwyMDguMTgsMTA5LjM1elxcXCI+PC9wYXRoPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZlcnNpb249XFxcIjEuMVxcXCIgaWQ9XFxcIkxheWVyXzFcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHg9XFxcIjBweFxcXCIgeT1cXFwiMHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgNTEyIDUxMlxcXCIgc3R5bGU9XFxcImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjtcXFwiIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiPjxnPjxwb2x5Z29uIHN0eWxlPVxcXCJmaWxsOiNEMUYwRUY7XFxcIiBwb2ludHM9XFxcIjE3My4wODgsMjE1LjIyNiAzNTEuNTY0LDIxNS4yMjYgMjg3LjA2Myw1MTIgMjM3LjU4NCw1MTIgXFxcIj48L3BvbHlnb24+PHBvbHlnb24gc3R5bGU9XFxcImZpbGw6I0QyQjRCMztcXFwiIHBvaW50cz1cXFwiMzEzLjEwNCwzOTIuMTc2IDI5MS44MDksNDkwLjE3MiAyMzIuODQxLDQ5MC4xNzIgMjExLjU0MywzOTIuMTc2IFxcXCI+PC9wb2x5Z29uPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNFNEVBQkE7XFxcIiBkPVxcXCJNMzE5LjYsMzYyLjNsLTE4Ljc3LDg2LjM1OWMtMzAuNTItNC4wNzktNTcuODAxLTEwLjQ2Ny04MC43OTQtMTcuNDE5TDIwNS4wNSwzNjIuM0gzMTkuNnpcXFwiPjwvcGF0aD48cGF0aCBzdHlsZT1cXFwiZmlsbDojRDJCNEIzO1xcXCIgZD1cXFwiTTMyOS42NywzMTUuOTYxbC0xOS4wMzQsODcuNTgxYy0zOS41MzktNC41MjYtNzQuMDY0LTEzLjA2LTEwMS40MTUtMjIuMDQ4bC0xNC4yNDEtNjUuNTMySDMyOS42N3pcXFwiPjwvcGF0aD48cGF0aCBzdHlsZT1cXFwiZmlsbDojRTRFQUJBO1xcXCIgZD1cXFwiTTM0MC42MTcsMjY1LjU5MmwtMTkuMTkzLDg4LjMwN2MtNTAuNzYzLTUuMTQ0LTkzLjY3Ny0xNy4wMjQtMTI0LjM3OS0yOC40NDVsLTEzLjAxMi01OS44NjEgSDM0MC42MTdMMzQwLjYxNywyNjUuNTkyelxcXCI+PC9wYXRoPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNEMkI0QjM7XFxcIiBkPVxcXCJNMTczLjA4OCwyMTUuMjI2aDE3OC40NzZsLTE5LjQwNCw4OS4yODNjLTYyLjU3OC01LjAyOS0xMTQuMTY3LTIwLjYxNi0xNDcuMDc3LTM0LjA4NyBMMTczLjA4OCwyMTUuMjI2elxcXCI+PC9wYXRoPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNGRkYxQUQ7XFxcIiBkPVxcXCJNMzQ3LjgyMSw1MTJoLTE3MC45OXYtMTAuOTE0YzAtNi4wMDIsNC45MDktMTAuOTE0LDEwLjkxNC0xMC45MTRoMTQ5LjE2MyBjNi4wMDIsMCwxMC45MTQsNC45MTEsMTAuOTE0LDEwLjkxNEwzNDcuODIxLDUxMkwzNDcuODIxLDUxMnpcXFwiPjwvcGF0aD48cGF0aCBzdHlsZT1cXFwiZmlsbDojRDMzQjNBO1xcXCIgZD1cXFwiTTMwOS40MTksMjIzLjczNmMtNDkuMDAxLDIxLjcwNS0xNjMuODczLDI4LjIxMi0xNTUuNDYxLTIzLjg4IEMxNjIuMzY5LDE0Ny43NjYsMzY2LjI1OSwxNzguNzc0LDMwOS40MTksMjIzLjczNnpcXFwiPjwvcGF0aD48cGF0aCBzdHlsZT1cXFwiZmlsbDojRjZFMzg1O1xcXCIgZD1cXFwiTTE5MS43NzEsMTQ0Ljk4NWMtNDcuNjE2LDAuOTg2LTY1LjE3MiwzNy4xMzgtMjYuMDgsNjIuMTY3IGM1MC42MjgsMzIuNDA5LDE5NC41Niw0MC4yMDcsMjAxLjc3LDguMzkyQzM3NC42NjgsMTgzLjczMywyNjIuNzE0LDE0My41MTgsMTkxLjc3MSwxNDQuOTg1elxcXCI+PC9wYXRoPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNEMzNCM0E7XFxcIiBkPVxcXCJNMjE2LjYzNCwxMDguMDUyYy00Ny4yNDMtMi4yNzYtODcuMjA2LDMwLjQ4OC0zOC42NTksNTkuNDQ2IGM1My4zODUsMzEuODQyLDEzMy40NzgtMS43MDQsMTg1Ljk2NywzNC4zNTZDMzc2LjI1MiwxNzAuNTMzLDI4Ny4wMjIsMTExLjQzOSwyMTYuNjM0LDEwOC4wNTJ6XFxcIj48L3BhdGg+PHBhdGggc3R5bGU9XFxcImZpbGw6I0Y2RTM4NTtcXFwiIGQ9XFxcIk0zNTIuMTY1LDE2OS44NTNjLTUwLjE1LTQxLjIwNy05Ny4yMzctMjEuMTgzLTE0MS45ODgtMzkuMDhzLTI3LjU5OS00OS40MTItNC4xODUtNTUuNzg0IGMyMy40MTQtNi4zNzMtMTguNDA0LTM1LjU4Miw0MS43NjUtNzQuNDE3YzUuNDcxLDMyLjQ2LDExLjU3LDc0LjUzNSw0OS44NjksODkuNjg0UzM2MS44NTMsMTQyLjIxNiwzNTIuMTY1LDE2OS44NTN6XFxcIj48L3BhdGg+PHBhdGggc3R5bGU9XFxcImZpbGw6I0QzM0IzQTtcXFwiIGQ9XFxcIk0yMDYuMzYzLDYxLjUwM2MtMy4wMjQtMTEuOTk4LDAuMjM2LTM1LjUwNSwzMi41MDgtNTguMDg3YzUuMjk2LTMuNzAyLDEzLjU1OC01LjkzMywxNC4zMzIsMS42MDYgYzMuMTUxLDMwLjY0NSwxMC4yMDksNzEuNzA1LDQ0LjQxOSw4NS4yMzRjOS45OTMsMy45NTQsMTkuMTk3LDkuNjU2LDI3LjEyNSwxNi40NEMyOTYuMDk3LDg4LjAzNSwyMTQuMTUxLDkyLjM3OCwyMDYuMzYzLDYxLjUwM3pcXFwiPjwvcGF0aD48Zz48cGF0aCBzdHlsZT1cXFwiZmlsbDpub25lO3N0cm9rZTojRTY2MzYzO3N0cm9rZS13aWR0aDoyLjQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjIyLjkyNjtcXFwiIGQ9XFxcIiBNMjM3Ljk1NCwxNi4xMDZjLTUuODA4LDMuNDUyLTEzLjE3MywxMi44MTUtMTcuMDM2LDIzLjg4M1xcXCI+PC9wYXRoPjxwYXRoIHN0eWxlPVxcXCJmaWxsOm5vbmU7c3Ryb2tlOiNGRkYxQUQ7c3Ryb2tlLXdpZHRoOjIuNDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MjIuOTI2O1xcXCIgZD1cXFwiIE0yMDUuODEyLDg0LjA1NGMtNi41MzksMC41MzYtMTUuNDgzLDExLjU2Ny0xNS4zOTIsMjEuNThcXFwiPjwvcGF0aD48cGF0aCBzdHlsZT1cXFwiZmlsbDpub25lO3N0cm9rZTojRTY2MzYzO3N0cm9rZS13aWR0aDoyLjQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjIyLjkyNjtcXFwiIGQ9XFxcIiBNMTc4LjE4MiwxMjYuMTg0Yy00Ljk5OCwwLjQwOS0xMS44MzIsOC44MzktMTEuNzYyLDE2LjQ4OFxcXCI+PC9wYXRoPjxwYXRoIHN0eWxlPVxcXCJmaWxsOm5vbmU7c3Ryb2tlOiNGRkYxQUQ7c3Ryb2tlLXdpZHRoOjIuNDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MjIuOTI2O1xcXCIgZD1cXFwiIE0xNTkuODY3LDE2My43ODZjLTUuMTg4LDEuODg3LTExLjQzLDEwLjg5LTExLjMzOSwyMC45MDJcXFwiPjwvcGF0aD48L2c+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyBpZD1cXFwid3JpdHRlblxcXCIgZGF0YS1uYW1lPVxcXCJMYXllciAxXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCA0MDgzLjg4IDQzMC4zNVxcXCI+PHRpdGxlPmdlbGFjY2lvPC90aXRsZT48ZyBpZD1cXFwiZ2VsYWNjaW9cXFwiPjxnIGlkPVxcXCJnZWxhY2Npby11bmRlcmxpbmVcXFwiPjxnPjxwYXRoIGQ9XFxcIk0xMDc3Ljk0LDcwNC41MWM0LC4xMy0xLjE0LS45MS01LjUyLTEuNzZsLTQuMTUuOFpcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKC05NS4zNyAtMzE3Ljc0KVxcXCIgZmlsbD1cXFwiI2NkYTk4MFxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xMDU2LjI4LDcwMS44NmwtMTEsLjEyLDgsLjIyYzguNjgsMS41Ny0xLjMxLDEuMjItNC42MywxLjExQzEwNjIuOSw3MDQuNTEsMTA1My45MSw3MDIuMzQsMTA1Ni4yOCw3MDEuODZaXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgtOTUuMzcgLTMxNy43NClcXFwiIGZpbGw9XFxcIiNjZGE5ODBcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTAzNC42OSw3MDAuNjJjLTctLjc0LTUuMTIuMjctMi4yMS44MUMxMDMzLDcwMS4xMSwxMDM3LjYxLDcwMS4xNiwxMDM0LjY5LDcwMC42MlpcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKC05NS4zNyAtMzE3Ljc0KVxcXCIgZmlsbD1cXFwiI2NkYTk4MFxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk01OTguMDksNjg0LjIzYzIsLjExLDQuMzEuMTUsNCwuMzlDNjA0LjI4LDY4NC4zMSw2MDQuNzQsNjg0LjA5LDU5OC4wOSw2ODQuMjNaXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgtOTUuMzcgLTMxNy43NClcXFwiIGZpbGw9XFxcIiNjZGE5ODBcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNNjAyLjA5LDY4NC42MmwtMS40Mi4xOSwxLjMyLS4xQzYwMi4xMiw2ODQuNjcsNjAyLjA1LDY4NC42NSw2MDIuMDksNjg0LjYyWlxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoLTk1LjM3IC0zMTcuNzQpXFxcIiBmaWxsPVxcXCIjY2RhOTgwXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTc0My45NCw2OTIuNDRjNy45MS0uNTgsMTIuMzUtLjI0LDE5LjgyLS4zNWw0LjE2LDEuMTFjOC4xLS4yMSwzLjU5LS44Miw5LjQ4LTEuMjYsNy4zNy43OSwyMywuNCwyNi40NS42MiwyLjQyLjU1LTMsLjU3LTQuMjMuODIsOS40OS0uMDcsOC44NS0xLjA3LDIwLjY0LS43NGwuMTkuMjljMjguMjItLjc1LDYzLjksMS4zOCw5NS4yNiwyLjI1YTQuMzcsNC4zNywwLDAsMS0yLjM4LS42MWM4LjI3LjM1LDE2Ljg1Ljk0LDI1LjQ4LDEuNGwxMywuNzEsNi40NS4zNCw2LjM5LjM4YzE2Ljk0LDEsMzMsMS41Nyw0Ni4yLDEuNjYtNC40Ny0uMzQtOS42OS0uOTItMTUuMzItMS40N2wtMTcuNjYtMS43Yy02LS41Ni0xMi4wNy0xLjA3LTE3Ljc2LTEuNDJzLTExLS40MS0xNS41OS0uMjdjLTYuNjktMS4xOS0xNy4xNS0uODMtMTkuODgtMi4wNi02LjQ5LS41OC0xMi0uODItMTcuMDgtMXMtOS41OS0uMjMtMTQuMTEtLjI3LTktLjA3LTEzLjk0LS4xNy0xMC4yOC0uMTUtMTYuNTMtLjQxYy0zLjU4LS4zNC0xLjgyLS43OC0yLjgzLTEuMzFsMTkuODYuMzdjLTQtLjM2LTguMDUtLjYzLTEyLjA3LTEsMi42Mi0uMTEsNy4xMiwwLDExLjE1LjEzczcuNTguMTgsOC4zMy0uMjVjLTguNjksMC0yMC0uMzItMzEtLjcxLTUuNDktLjE5LTEwLjkyLS4zNy0xNS45Mi0uNDZzLTkuNTcsMC0xMy4zNy4yMWMzLjU2LjIzLDcuNTUuMzIsMTEuNzIuNDRzOC40OC4yOCwxMi42OC40OWMzLjY5LjQ5LDkuNDEsMSw5LDEuNDYtMTIuMDYuMjItMjMuMDYtLjEyLTM0LjE1LS4zM0w4MDkuNTgsNjg5Yy01LjczLS4xNC0xMS42MS0uMzItMTcuNzktLjI3cy0xNC42LS4yMS0xNS42Mi0uNzJjNC4wNy0uMSwxLS41Niw0LjM1LS43NC04Ljc3LjI4LS45MSwxLjc3LTEzLjU3LDEuMzZsMS42NC0xLjY4Yy0yLjUzLjg2LTYuNC43MS0xMC43OC40N2E5MC4zMyw5MC4zMywwLDAsMC0xMy43NiwwYy0zLjI0LS42OSwyLjc1LTEuMDcsOS42OS0xLjA5LTcuODgtLjMzLTguNi42Ny0xNC44OS42MWw2LTEuNDNjLTYuNywxLjM3LTEyLS4zMi0xNS44LS44LS40NS4zNSwzLjA4LDEuNDgtNS4zMiwxLjM2LTMuNi0uMi0xLjc2LS41Ni0yLjYxLS43Ny0uNDYuMzUtMy40OCwxLTksMS4wOS0xLS40OCwzLjY4LS43Nyw0LTEuMjdhODEuNDEsODEuNDEsMCwwLDEtMTAuNjItLjE4Yy03LjQuNDcuNDguNy00LDEuMjctMTEuMzYtLjI1LTEuMTUtMS42OS01LjM0LTIuNjksOC41NS0uNzUsMTkuNTgtMS4xMSwyNC4xNi0xLjQ4LTUuNDguMTItMTEsLjM0LTE2LjQzLjUxLDEtLjU4LTExLjEzLS44OC0yLjQ1LTEuNTItOC4yLS4xNy0xNy4yNS0uMTEtMjYuMi4xOHMtMTcuODMuODEtMjUuNjgsMS4yMWMyLjIzLjE1LDUuMS4yMSw0LjY0LjU4LTguMTIuNTItNy4yMy0uMjItOC45MS0uNi02LC41NC01LjMsMS40OC05LDIuMzMtMTIuNDItLjQtMTQuMTQuMTYtMjQuNzQtLjY4bC42OCwxYy03LjUxLS41My04LjU0LDEtMTYuNjIuNzEtLjQ2LS4yLDIuNjItLjU5LDUuMDktLjktNy4xMy41OC02LjYyLS41NC0xMy41Ni4xNWw1LjQ3LTEuMzZjLTUuNTQuMy0xMy42NiwxLTEwLjg0LS4wNS05LjY1LDEuNTktMjYuNjcsMS44OC0zOC43MywzLjM0bC43Ni0uOTFjLTYuMTksMS40My0yMywxLjMtMjguMzQsMi45MmwtLjk1LS4yOC0xMi4zNSwyYy01LjY0LjMxLTMuODItMS4xMi00LjI1LS43My0xMi4zNCwxLjEzLTIyLDEuODctMzAsMi4xNi0xLjksMS4zMS0xNC44NiwyLjcyLTI1LjE4LDMuNzUtMjQuOSwxLjg0LTUwLjY4LDQuNTUtNzUuODgsOC40MWE2NTAuODcsNjUwLjg3LDAsMCwwLTcyLjIyLDE1Yy02Ljc3LDEuNjItMTUuNyw1LjMxLTIzLjg3LDguMTksNS4xNS0xLjI4LDcuOTItMi4xMywxMC42Ny0zczUuNDktMS42OCwxMC41NC0yLjk1YTY2LjM4LDY2LjM4LDAsMCwxLDkuMTEtMS4xOWMyLjU3LS4xNSw1LS4xOCw4LjM5LS41NWwtMy41NS0uMjFhNDUuOTIsNDUuOTIsMCwwLDEsOC40Mi0yLDMxLjgsMzEuOCwwLDAsMCw2Ljc5LTEuNjlsMCwxLjZjMi43Mi0xLjM2LDEwLjEtMi4wNywxMy4xNi0yLjJsMi41LTEuNTRjNi42NS0uNTcsMTEtMSwxMy4xMy0uMzNsLS43OS0uODhjMi41NS4xMSwyNS4zLTMuODIsMTcuNzItMWEzOC44OCwzOC44OCwwLDAsMSw3Ljc1LTEuNjlsLjc3Ljg5YzYtMSwxMi43My0yLjA2LDE0LjU1LTEuNjlhMTQuODgsMTQuODgsMCwwLDAtNS4zMywxLjc1YzEyLjc5LTEuNDYsMTQuMDYtMi4zOCwxNS0zLjMzczEuNDItMS45MSwxMi43OS0zLjE0bC0uMTkuNjcsNS43LTEuMjcsNi4xNC4yMWM4LTMuMDUsMzItMi42OCw0NS42OS01YTg4Ljc5LDg4Ljc5LDAsMCwxLDkuNjMtLjMzYzMuNzcsMCw4LjE1LDAsMTMuMjktLjQ2bC0uNzQtLjk0YzQuMTkuMiwxNC0uMSwyMy44Mi0uMjRzMTkuNTEuMTEsMjMuNDYsMWM3Ljc2LTEuMjMtLjg0LS4xNi0uNzEtMSwxNS4xOS0xLjkxLDE2LjMzLS41MSwyNC4zNi0uMjksOS4zNy0uOTMtNy4yLDAtMi4xOS0xLDE0LjQzLjA3LDExLjYzLTEuNzYsMjkuNDUtMS45NCwxLjc5LjQ3LTQuNTcuNi02LjM5LDEuMDVDNTk2LjA1LDY5Myw2MTkuNDEsNjkzLDYzOCw2OTIuMDljMTAuNjYuMTIsMjMuODYuMDgsMzcuNSwwczI3Ljc1LjMsNDAuMi42MmwuNDYtLjM2YzEwLjM1LjkyLDIxLjU3LjE0LDMzLjY2LjU4WlxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoLTk1LjM3IC0zMTcuNzQpXFxcIiBmaWxsPVxcXCIjY2RhOTgwXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTg5Myw2ODcuNWwtMS45NC0xLTExLjQ2LDBDODg0LjE4LDY4Ny40Myw4ODYuNjEsNjg3LDg5Myw2ODcuNVpcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKC05NS4zNyAtMzE3Ljc0KVxcXCIgZmlsbD1cXFwiI2NkYTk4MFxcXCI+PC9wYXRoPjxwb2x5Z29uIHBvaW50cz1cXFwiNzk1LjAyIDM3Mi4xOSA4MDEuMDIgMzcyLjEyIDc5MS4zNCAzNzEuNjYgNzk1LjAyIDM3Mi4xOVxcXCIgZmlsbD1cXFwiI2NkYTk4MFxcXCI+PC9wb2x5Z29uPjxwb2x5Z29uIHBvaW50cz1cXFwiNjUwLjEgMzY2LjYxIDY1MS41OCAzNjYuNzUgNjYyLjQ5IDM2Ni40NCA2NzMuNDEgMzY2LjI2IDY2MS43NSAzNjYuMzcgNjUwLjEgMzY2LjYxXFxcIiBmaWxsPVxcXCIjY2RhOTgwXFxcIj48L3BvbHlnb24+PHBhdGggZD1cXFwiTTU5OC44Niw2ODMuMzVjMi40OC0uNTMsNi4wOC0uNDYsOC42Ni0uODZsLTEwLjE0Ljc4WlxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoLTk1LjM3IC0zMTcuNzQpXFxcIiBmaWxsPVxcXCIjY2RhOTgwXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTUwMC4yNiw2ODUuNDljLTMuNzUsMS43OS03LjY4LjU0LTIuNDYsMS41NEM1MDMuODYsNjg2LjM0LDQ5OC41NSw2ODYuMTIsNTAwLjI2LDY4NS40OVpcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKC05NS4zNyAtMzE3Ljc0KVxcXCIgZmlsbD1cXFwiI2NkYTk4MFxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk00NzcuNTcsNjg5LjM2YTUwLjI2LDUwLjI2LDAsMCwwLDcuMzItLjk0QzQ4MC4yMiw2ODguMDgsNDgwLjEzLDY4OC44Nyw0NzcuNTcsNjg5LjM2WlxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoLTk1LjM3IC0zMTcuNzQpXFxcIiBmaWxsPVxcXCIjY2RhOTgwXFxcIj48L3BhdGg+PC9nPjwvZz48cGF0aCBtYXNrPVxcXCJ1cmwoI01hc2stRylcXFwiIGlkPVxcXCJnZWxhY2Npby1HXFxcIiBkPVxcXCJNMTc0Ljg3LDY3OC4yMWE1OSw1OSwwLDAsMS0zNi43OC0xMi43cS0xNi41Ni0xMi43MS0yNi40OS0zNi44dC05LjkzLTU4LjExYTI2Ni4yMSwyNjYuMjEsMCwwLDEsOC44My02Ny4xNCwzMzQsMzM0LDAsMCwxLDI0LjA5LTY0Ljc4LDI5MS4xNSwyOTEuMTUsMCwwLDEsMzUuMTMtNTUuMDlxMTkuODYtMjQuMzEsNDEuNzUtMzguMzF0NDQtMTRxMTUuNDUsMCwyNC42NCw3LjFhMzkuNjEsMzkuNjEsMCwwLDEsMTMuMjUsMTguNTEsNzIuNDEsNzIuNDEsMCwwLDEsNCwyNC4zMiwxMDAuNDIsMTAwLjQyLDAsMCwxLTQuNiwyOS45MXEtNC41OSwxNC44NS0xMi4zMiwyNC43NXQtMTYuOTIsOS45QTExLjgsMTEuOCwwLDAsMSwyNTYsNDQzcS0zLjQ5LTIuNzktNi40NC0xMC4xMSw1LjE1LTQuMzEsMTItMTUuMjhhMTQ1LjU2LDE0NS41NiwwLDAsMCwxMS45NS0yNC4zMnE1LjE1LTEzLjMzLDUuMTUtMjQuMWMwLTYtMS42LTExLTQuNzgtMTUuMDdzLTguNDYtNi0xNS44Mi02cS0xNi41NSwwLTMzLjg0LDE0LjYzdC0zMy4xLDM5YTM1Ni44MSwzNTYuODEsMCwwLDAtMjguNyw1NC40NSwzNzQuNzksMzc0Ljc5LDAsMCwwLTIwLjIzLDYxLjM0LDI1Ny45NCwyNTcuOTQsMCwwLDAtNy4zNiw1OS4xOHEwLDM5LjE3LDE0LjM1LDYxLjEydDM0Ljk1LDIycTE0LjcsMCwyNy41OC0xMS42MnQyMi42My0zMC4zNGEyMDAuODEsMjAwLjgxLDAsMCwwLDE1LjYzLTQwLjY4LDIyNy43OSwyMjcuNzksMCwwLDAsNy4zNi00Mi42MSwxNjkuMDYsMTY5LjA2LDAsMCwwLTE5Ljg3LTMuNjYsMTYyLjg4LDE2Mi44OCwwLDAsMC0xOC43Ni0xLjA4Yy0zLjY3LDAtNy40Mi4wOC0xMS4yMi4yMnMtNy45LjIxLTEyLjMyLjIxUTE5OCw1MTUuOTUsMjA1LDUwOS43dDE3LjY2LTYuMjRhNjQuNTMsNjQuNTMsMCwwLDEsMjIuMjUsNC4wOXExMS4yMiw0LjA5LDIyLjQ0LDguODJhMTU0LjU4LDE1NC41OCwwLDAsMCwyMS4xNSw3LjMybC0zLjMxLDEzLjc3cS02LjYyLDIyLjgxLTEwLjg1LDM4Ljc0dC02LjYyLDI3LjMzQTE2NS43NSwxNjUuNzUsMCwwLDAsMjY0LjYyLDYyNHEtLjc0LDktLjczLDE3LjY0dC4zNywxNy42NXEuMzYsOSwuNzMsMjAuNjYtOS4xOS0yLjE2LTE0LjM0LTcuMzJhMjYuMzIsMjYuMzIsMCwwLDEtNy0xMi40OCw1OS42Nyw1OS42NywwLDAsMS0xLjg0LTE0LjYzcTAtMywuMTgtNmE0My42Nyw0My42NywwLDAsMSwuOTItNi40NSwxMjYuMjYsMTI2LjI2LDAsMCwxLTI5Ljc5LDMyLjQ5QTYyLjE5LDYyLjE5LDAsMCwxLDE3NC44Nyw2NzguMjFaXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgtOTUuMzcgLTMxNy43NClcXFwiIGZpbGw9XFxcIiNjNjljNmRcXFwiIHN0cm9rZT1cXFwiI2M2OWM2ZFxcXCIgc3Ryb2tlLW1pdGVybGltaXQ9XFxcIjEwXFxcIiBzdHJva2Utd2lkdGg9XFxcIjRcXFwiPjwvcGF0aD48cGF0aCBtYXNrPVxcXCJ1cmwoI01hc2stZSlcXFwiIGlkPVxcXCJnZWxhY2Npby1lXFxcIiBkPVxcXCJNMzQzLjcxLDY1OS43cS0yMy4xOCwwLTM1LjMyLTE0LjYzdC0xMi4xMy0zNi41OXEwLTE5LjM3LDguMjctNDAuNjdhMTY4LjQ1LDE2OC40NSwwLDAsMSwyMi4yNi00MCwxMzcuNzUsMTM3Ljc1LDAsMCwxLDMwLjcxLTMwLjU2cTE2Ljc0LTExLjg0LDMzLjI5LTExLjg0YTMwLjY3LDMwLjY3LDAsMCwxLDE3LjQ3LDUuNnE4LjI4LDUuNTksOC4yOCwyMi4zOGE2MC43Nyw2MC43NywwLDAsMS04LjI4LDMwLjc3LDk0LDk0LDAsMCwxLTIxLjcsMjUuNjFBMTIyLjE4LDEyMi4xOCwwLDAsMSwzNTYuNzcsNTg4YTExMS4xMywxMTEuMTMsMCwwLDEtMzIuNTYsOC44MmMtLjI1LDEuNzItLjQ5LDMuNDQtLjczLDUuMTdhNTAuMiw1MC4yLDAsMCwwLS4zNyw2Ljg4LDYxLjY1LDYxLjY1LDAsMCwwLC45Miw5LjI2LDQyLjU0LDQyLjU0LDAsMCwwLDMuNjgsMTEuNjIsMjMuNzIsMjMuNzIsMCwwLDAsOC42NCw5LjY4cTUuODgsMy44NywxNS40NSwzLjg3LDE1LjQ1LDAsMzEuMDgtMTAuMzJhMTI4Ljg2LDEyOC44NiwwLDAsMCwyOS4yNS0yNy4zNEExNzEuNjYsMTcxLjY2LDAsMCwwLDQzNC45Myw1NjhsNi4yNiw2YTE2NS45MiwxNjUuOTIsMCwwLDEtMjUuMzgsNDVxLTE1LjQ1LDE5LjE1LTM0LDI5LjkxVDM0My43MSw2NTkuN1ptLTE2LjE5LTc2LjE4cTkuNTctMi4xNiwyMS43MS04LjgzYTExOS40NiwxMTkuNDYsMCwwLDAsMjMuMTctMTYuNzgsOTcuODQsOTcuODQsMCwwLDAsMTguMjEtMjIuMTcsNDcuNDYsNDcuNDYsMCwwLDAsNy4xNy0yNC41M2MwLTMuMTYtLjQ5LTUuNDUtMS40Ny02Ljg5cy0yLjctMi4xNS01LjE1LTIuMTVxLTguODQsMC0xOC4yMSw3LjUzYTExMC42OCwxMTAuNjgsMCwwLDAtMTguMzksMTkuMzcsMTUzLjUyLDE1My41MiwwLDAsMC0xNiwyNi4yNUExODMuODEsMTgzLjgxLDAsMCwwLDMyNy41Miw1ODMuNTJaXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgtOTUuMzcgLTMxNy43NClcXFwiIGZpbGw9XFxcIiNjNjljNmRcXFwiIHN0cm9rZT1cXFwiI2M2OWM2ZFxcXCIgc3Ryb2tlLW1pdGVybGltaXQ9XFxcIjEwXFxcIiBzdHJva2Utd2lkdGg9XFxcIjRcXFwiPjwvcGF0aD48cGF0aCBtYXNrPVxcXCJ1cmwoI01hc2stbClcXFwiIGlkPVxcXCJnZWxhY2Npby1sXFxcIiBkPVxcXCJNNDU3Ljc0LDY1My42N3EtMTYuOTIsMC0yMy43My0xMy4zNHQtNi44LTMxLjg1cTAtMjEuMDgsNi42Mi00OS41YTU4OS43Niw1ODkuNzYsMCwwLDEsMTcuNDctNTkuNjFxMTAuODQtMzEuMiwyMy45MS02MS4xMlQ1MDEuMzMsMzg0cTEzLjA1LTI0LjMxLDI0LjI4LTM4Ljc0dDE3Ljg0LTE0LjQycTQuNDEsMCw3LjU0LDUuNkE1MS45Myw1MS45MywwLDAsMSw1NTYsMzUwYTY0LjU0LDY0LjU0LDAsMCwxLDEuODQsMTQuNDJxMCwxMS42My01LDMwLjM1YTM2Ni4yOCwzNjYuMjgsMCwwLDEtMTQsNDEuMzIsNDg2LjQ3LDQ4Ni40NywwLDAsMS0yMS4zNCw0Niw0MzUuMTUsNDM1LjE1LDAsMCwxLTI3LDQ0Ljc3LDIxNi4zMSwyMTYuMzEsMCwwLDEtMzEuNjQsMzYuOHEtMS40NywxMC43NS0yLjc2LDIxLjUyQTE2NywxNjcsMCwwLDAsNDU0LjgsNjA1cTAsMTUuOTMsNC4yMywyMy40NlQ0NzAuNjEsNjM2cTkuNTcsMCwxOS4zMi0xMC4zM2ExMzIuMTEsMTMyLjExLDAsMCwwLDE4LjU3LTI2QTI2Mi41OSwyNjIuNTksMCwwLDAsNTI0LDU2Ny4xNmw3LjczLDUuMTdxLTE1LjQ1LDM3LjQ0LTM0LjIxLDU5LjM5VDQ1Ny43NCw2NTMuNjdabTYuNjItMTEyLjc2YTI3OS42OSwyNzkuNjksMCwwLDAsMjQuMjgtMzQuNDRxMTEuNC0xOC45MywyMS4xNS0zOXQxNy4xLTM4Ljc0YTMzMC43NiwzMzAuNzYsMCwwLDAsMTEuNDEtMzMuNTdxNC0xNC44NSw0LjQxLTIzLjQ2YTYuMSw2LjEsMCwwLDAtLjczLTNxLTMsMC05Ljc1LDEwLjExYTMwMC41MSwzMDAuNTEsMCwwLDAtMTUuODIsMjcuMzNxLTksMTcuMjItMTguNTgsMzkuNlQ0NzkuNDQsNDkyLjdRNDcwLjYyLDUxNy4yMyw0NjQuMzYsNTQwLjkxWlxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoLTk1LjM3IC0zMTcuNzQpXFxcIiBmaWxsPVxcXCIjYzY5YzZkXFxcIiBzdHJva2U9XFxcIiNjNjljNmRcXFwiIHN0cm9rZS1taXRlcmxpbWl0PVxcXCIxMFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCI0XFxcIj48L3BhdGg+PHBhdGggbWFzaz1cXFwidXJsKCNNYXNrLWEpXFxcIiBpZD1cXFwiZ2VsYWNjaW8tYVxcXCIgZD1cXFwiTTUzNSw2NjFxLTExLjc4LDAtMjAuNDEtOS4yNVQ1MDUuOTIsNjI0cTAtMTUuNSw1Ljg5LTMzLjE1QTE3Ny4yNiwxNzcuMjYsMCwwLDEsNTI4LDU1NmExODYuMTksMTg2LjE5LDAsMCwxLDIzLjU1LTMxLjQyLDEyMiwxMjIsMCwwLDEsMjguMTQtMjIuODFxMTQuOS04LjYxLDI5LjYxLTguNjEsMTUuNDUsMCwyNS45Myw5LjI1dDEwLjQ5LDI0LjMycTAsMTEuNjMtNi4yNiwxNi4zNnQtMTUuNDUsM3EuNzQtMy40NCwxLjI5LTcuNTNhNTkuMiw1OS4yLDAsMCwwLC41NS04LDM2LjMxLDM2LjMxLDAsMCwwLTMuMzEtMTUuOTNxLTMuMzEtNi44OC0xMi44Ny02Ljg5LTEwLjMsMC0yMSw4LjE4YTEwOC40NCwxMDguNDQsMCwwLDAtMjAuNiwyMS41MiwxODIuMjEsMTgyLjIxLDAsMCwwLTE3LjY2LDI5LjI3LDE5NC40NCwxOTQuNDQsMCwwLDAtMTIuMTQsMzEuNDJxLTQuNDEsMTUuNS00LjQxLDI3LjU1LDAsMTQuNjQsOS4yLDE0LjYzLDguNDUsMCwxOC41Ny05LjQ3YTE2MywxNjMsMCwwLDAsMjAuNi0yNC4xcTEwLjQ5LTE0LjYyLDIwLTI5LjkxdDE2LjU1LTI2LjkxYzEtMS40MywxLjg0LTIuMTUsMi41OC0yLjE1YTU4LjM4LDU4LjM4LDAsMCwxLDUuODgsMS45NCwyNy42OCwyNy42OCwwLDAsMSw3LjM2LDQuMDksOC4yOSw4LjI5LDAsMCwxLDMuMzEsNi44OXEwLDQuMzEtMy4zMSwxMWwtNy4zNiwxNC44NXEtNCw4LjE4LTcuMzUsMTYuMzZhNDIuMjQsNDIuMjQsMCwwLDAtMy4zMiwxNS45MiwyMy44MiwyMy44MiwwLDAsMCwyLjc2LDExLDkuMzksOS4zOSwwLDAsMCw5LDUuMzhxOS4xOCwwLDI1LjE5LTE1LjcxVDY4Ni4xNyw1NjhsNS44OCw2Ljg5YTE3Ni42OCwxNzYuNjgsMCwwLDEtMjAuNzgsNDAuODlxLTEyLjMzLDE3LjY2LTI1LjkzLDI3Ljc2dC0yNy4yMiwxMC4xMXEtMTQuNzMsMC0yMS43MS0xMC41NGE0NS44NSw0NS44NSwwLDAsMS03LjcyLTIzLDIzLjgxLDIzLjgxLDAsMCwxLC4xOC0yLjgsMjMuNjQsMjMuNjQsMCwwLDAsLjE5LTIuNzlRNTc0LDYzNi40NSw1NjEuNDcsNjQ4LjczVDUzNSw2NjFaXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgtOTUuMzcgLTMxNy43NClcXFwiIGZpbGw9XFxcIiNjNjljNmRcXFwiIHN0cm9rZT1cXFwiI2M2OWM2ZFxcXCIgc3Ryb2tlLW1pdGVybGltaXQ9XFxcIjEwXFxcIiBzdHJva2Utd2lkdGg9XFxcIjRcXFwiPjwvcGF0aD48cGF0aCBtYXNrPVxcXCJ1cmwoI01hc2stYylcXFwiIGlkPVxcXCJnZWxhY2Npby1jXFxcIiBkPVxcXCJNNzE4LjU0LDY2NC44N3EtMTguNzYsMC0zMC45LTE0dC0xMi4xNC00Mi40YTEyMi45LDEyMi45LDAsMCwxLDcuMTctNDEuMzIsMTQ1LDE0NSwwLDAsMSwxOS0zNi41OHExMS43Ni0xNi4zNywyNi4xMS0yNS44M3QyOS4wNi05LjQ3cTE1LjQ1LDAsMjEuODksOS40N2EzNi42OCwzNi42OCwwLDAsMSw2LjQ0LDIxLjA5LDU0Ljc1LDU0Ljc1LDAsMCwxLTUsMjMuMjRxLTUsMTAuNzctMTMuNDMsMTAuNzYtNywwLTExLjQtNy43NCw0LjQxLTMsOC40Ni0xMi4wNmE1MCw1MCwwLDAsMCw0LjA1LTIwLjY2YzAtMi44Ni0uNS01LTEuNDctNi40NXMtMy0yLjE1LTUuODktMi4xNXEtOS41NywwLTE5LjY4LDkuOXQtMTguOTQsMjUuNjFhMTc3LjY5LDE3Ny42OSwwLDAsMC0xNC4zNSwzMi45MkExMDYsMTA2LDAsMCwwLDcwMiw2MTEuNDlhNDcuNjUsNDcuNjUsMCwwLDAsNS41MiwyMi44MnE1LjUyLDEwLjMyLDIxLDEwLjMzLDE0LjM0LDAsMjkuMjQtOS40N3QyOC4xNC0yNi42OXExMy4yNC0xNy4yMSwyMS00MC44OWw2LjYyLDYuODlhMTY3LjI4LDE2Ny4yOCwwLDAsMS0yNC4wOSw0Ni4yN1E3NzQuMDgsNjQxLjE5LDc1NS41LDY1M1Q3MTguNTQsNjY0Ljg3WlxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoLTk1LjM3IC0zMTcuNzQpXFxcIiBmaWxsPVxcXCIjYzY5YzZkXFxcIiBzdHJva2U9XFxcIiNjNjljNmRcXFwiIHN0cm9rZS1taXRlcmxpbWl0PVxcXCIxMFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCI0XFxcIj48L3BhdGg+PHBhdGggbWFzaz1cXFwidXJsKCNNYXNrLWNjKVxcXCIgaWQ9XFxcImdlbGFjY2lvLWNjXFxcIiBkPVxcXCJNODM5LjkyLDY2NC44N3EtMTguNzYsMC0zMC45LTE0dC0xMi4xNC00Mi40YTEyMi42NiwxMjIuNjYsMCwwLDEsNy4xOC00MS4zMkExNDUuMjYsMTQ1LjI2LDAsMCwxLDgyMyw1MzAuNThxMTEuNzgtMTYuMzcsMjYuMTItMjUuODN0MjkuMDYtOS40N3ExNS40NSwwLDIxLjg4LDkuNDdhMzYuNjgsMzYuNjgsMCwwLDEsNi40NCwyMS4wOSw1NC43NCw1NC43NCwwLDAsMS01LDIzLjI0cS01LDEwLjc3LTEzLjQzLDEwLjc2LTcsMC0xMS40LTcuNzQsNC40MS0zLDguNDYtMTIuMDZhNTAuMTcsNTAuMTcsMCwwLDAsNC0yMC42NnEwLTQuMjktMS40Ny02LjQ1dC01Ljg4LTIuMTVxLTkuNTcsMC0xOS42OCw5Ljl0LTE4Ljk1LDI1LjYxYTE3Ny42NSwxNzcuNjUsMCwwLDAtMTQuMzQsMzIuOTIsMTA2LDEwNiwwLDAsMC01LjUyLDMyLjI4LDQ3LjY1LDQ3LjY1LDAsMCwwLDUuNTIsMjIuODJxNS41LDEwLjMyLDIxLDEwLjMzLDE0LjM1LDAsMjkuMjUtOS40N3QyOC4xNC0yNi42OXExMy4yNS0xNy4yMSwyMS00MC44OWw2LjYzLDYuODlhMTY3LjMxLDE2Ny4zMSwwLDAsMS0yNC4xLDQ2LjI3UTg5NS40Niw2NDEuMTksODc2Ljg5LDY1M1Q4MzkuOTIsNjY0Ljg3WlxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoLTk1LjM3IC0zMTcuNzQpXFxcIiBmaWxsPVxcXCIjYzY5YzZkXFxcIiBzdHJva2U9XFxcIiNjNjljNmRcXFwiIHN0cm9rZS1taXRlcmxpbWl0PVxcXCIxMFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCI0XFxcIj48L3BhdGg+PHBhdGggbWFzaz1cXFwidXJsKCNNYXNrLWkpXFxcIiBpZD1cXFwiZ2VsYWNjaW8taVxcXCIgZD1cXFwiTTk0OC44LDY1My4yNXEtMTUuNDUsMC0yMy4xOC0xMXQtNy43Mi0yNi45cTAtOS45LDIuOTQtMjVhMjc1Ljc1LDI3NS43NSwwLDAsMSw4LjI4LTMxLjYzLDI0OS4zOCwyNDkuMzgsMCwwLDEsMTIuMzItMzEuMjFxNy0xNC42MiwxNC45LTIzLjg5VDk3Miw0OTQuNDJhMTAuMSwxMC4xLDAsMCwxLDcuMTgsM2MyLjA4LDIsMy4xMiw0Ljg5LDMuMTIsOC42MXMtMS45LDkuMzMtNS43LDE2Ljc5LTguMjgsMTYuMTQtMTMuNDMsMjZhMjQ3LjIsMjQ3LjIsMCwwLDAtMTMuNDIsMzAuNzdBOTAuMzgsOTAuMzgsMCwwLDAsOTQ0LDYxMC4ycTAsMTQuMiw0LjQxLDE4Ljk0dDEyLjg3LDQuNzRxMTIuNTEsMCwyNy0xNC42NFQxMDE4LjY5LDU2OGw0Ljc4LDZxLTEyLjEzLDM3Ljg4LTMyLjE5LDU4LjUzVDk0OC44LDY1My4yNVptNDMuNzctMTk1LjQyYTE5Ljg1LDE5Ljg1LDAsMCwxLTEyLTMuODdxLTUuMzQtMy44Ny01LjM0LTExLjYyLDAtMTAuMzMsOS4zOC0xNy40M3QxOS4zMS03LjFhMTUuMzcsMTUuMzcsMCwwLDEsMTAuMywzLjQ0cTQuMDUsMy40NSw0LjA1LDExLjYyLDAsOS04LjA5LDE3VDk5Mi41Nyw0NTcuODNaXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgtOTUuMzcgLTMxNy43NClcXFwiIGZpbGw9XFxcIiNjNjljNmRcXFwiIHN0cm9rZT1cXFwiI2M2OWM2ZFxcXCIgc3Ryb2tlLW1pdGVybGltaXQ9XFxcIjEwXFxcIiBzdHJva2Utd2lkdGg9XFxcIjRcXFwiPjwvcGF0aD48cGF0aCBtYXNrPVxcXCJ1cmwoI01hc2stbylcXFwiIGlkPVxcXCJnZWxhY2Npby1vXFxcIiBkPVxcXCJNMTAzNC41LDY1NC41NHEtMTYuMTgsMC0yMi40My0xMi4yN2E2MC4yNCw2MC4yNCwwLDAsMS02LjI2LTI3Ljc2LDExMS40NCwxMTEuNDQsMCwwLDEsMy42OC0yOCwxMzQuODcsMTM0Ljg3LDAsMCwxLDkuOTMtMjYuNjksNzcuODEsNzcuODEsMCwwLDEsMTQtMjAuMjNxNy43Mi03Ljc0LDE1LjgyLTcuNzRhMTcsMTcsMCwwLDEsNS4zMywxLjA3LDEwLjQ2LDEwLjQ2LDAsMCwxLDQuNiwyLjgsODIuOTMsODIuOTMsMCwwLDAtOC42NCwxNC42NCwxOTIuMzQsMTkyLjM0LDAsMCwwLTguNDYsMjAuNDQsMTgyLjU4LDE4Mi41OCwwLDAsMC02LjI2LDIxLjk1LDk0LjM2LDk0LjM2LDAsMCwwLTIuMzksMjBxMCw5LjksMi45NCwxNS40OXQ5LjU3LDUuNnE3LjM1LDAsMTcuNDctOS4yNkExMzEuNzYsMTMxLjc2LDAsMCwwLDEwODIuNjksNjAyLDcxLjY4LDcxLjY4LDAsMCwxLDEwNjYsNTc1LjEycS01LjM0LTE1LjI3LTUuMzQtMzQuNjVhNzEuNzcsNzEuNzcsMCwwLDEsNC4wNS0yMi44MSw0OS41Myw0OS41MywwLDAsMSwxMi41LTIwLjIzcTguNDYtOC4xNiwyMi4wOC04LjE4LDE1LjQ1LDAsMjEuNTEsMTAuMTJ0Ni4wNywyNC4zMnEwLDE1LjkzLTcuMTcsMzUuOTRhMjYzLjcsMjYzLjcsMCwwLDEtMTcuMSwzOC4wOSwyMCwyMCwwLDAsMCwxMS40LDMuNDRxNS41MiwwLDEzLjI0LTNBNDQuMTYsNDQuMTYsMCwwLDAsMTE0Mi4xLDU4OHE3LjE3LTcuMTEsMTEuNTktMTguNzNsNS44OCw1LjE3cS03LjcyLDIxLjA5LTIxLjE1LDMwLjc3dC0yNS45Myw5LjY5YTQzLjM1LDQzLjM1LDAsMCwxLTkuNTctMS4wOCwzNC40NSwzNC40NSwwLDAsMS04LjgyLTMuMjMsMTUxLjc1LDE1MS43NSwwLDAsMS0yOC4xNCwzMVExMDUwLjMyLDY1NC41NCwxMDM0LjUsNjU0LjU0Wm01Ni42NS02NS40M2ExNjguNjMsMTY4LjYzLDAsMCwwLDE1LjI3LTMyLjQ5cTYuMDctMTcuNDUsNi4wNy0zMi4wNywwLTEwLjc1LTIuNzYtMTUuNzF0LTcuNTQtNC45NXEtNy4zNywwLTE0LjcyLDExLjg0dC03LjM1LDI5LjkxYTEwOS4yOSwxMDkuMjksMCwwLDAsMi43NiwyM1ExMDg1LjY0LDU4MS4zNiwxMDkxLjE1LDU4OS4xMVpcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKC05NS4zNyAtMzE3Ljc0KVxcXCIgZmlsbD1cXFwiI2M2OWM2ZFxcXCIgc3Ryb2tlPVxcXCIjYzY5YzZkXFxcIiBzdHJva2UtbWl0ZXJsaW1pdD1cXFwiMTBcXFwiIHN0cm9rZS13aWR0aD1cXFwiNFxcXCI+PC9wYXRoPjwvZz48ZGVmcz48ZyBpZD1cXFwiZ2VsYWNjaW8tbWFza3NcXFwiPjxwb2x5bGluZSBpZD1cXFwiTWFzay1nZWxhY2Npby11bmRlcmxpbmVcXFwiIHBvaW50cz1cXFwiMTc0Ljk0IDQxMy45MyAyNjcuMjggMzg5LjA2IDM3Mi4zIDM4MS4yNiA0NjAuODcgMzc1LjkzIDU1Mi45NyAzNzUuOTMgNjI0LjMgMzc1LjkzIDcwMy42MyAzNzUuOTMgNzcwLjQ5IDM3NS45MyA4NzAuOTcgMzgxLjI2IDk0Ny44MiAzODMuNDQgOTk0LjMgMzg3Ljc4XFxcIiBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcIiMwMDBcXFwiIHN0cm9rZS1taXRlcmxpbWl0PVxcXCIxMFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIzNFxcXCI+PC9wb2x5bGluZT48ZyBpZD1cXFwiTWFzay1nZWxhY2Npby1HXFxcIj48bWFzayBpZD1cXFwiTWFzay1HXFxcIj48cGF0aCBjbGFzcz1cXFwibWFza1xcXCIgaWQ9XFxcIk1hc2stZ2VsYWNjaW8tR3N1YlxcXCIgZD1cXFwiTTE5My42Nyw1MTUuNjdsNzIuNjYsOC42NiwxMCw0UzI2Myw1NTcuODEsMjU5LDU4MC4wN3MtMTEuNzgsNjIuNjgtNy4zMyw3OS42M0wyNjUsNjc5LjkzXFxcIiBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcIiMwMDBcXFwiIHN0cm9rZS1taXRlcmxpbWl0PVxcXCIxMFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIzNFxcXCI+PC9wYXRoPjxwYXRoIGNsYXNzPVxcXCJtYXNrXFxcIiBpZD1cXFwiTWFzay1nZWxhY2Npby1HbWFpblxcXCIgZD1cXFwiTTI0Nyw0NDAuNGMxMi40Ni01Ljg3LDMyLjQ0LTEyLjg1LDM2LTM3LjQsNC40NC0zMC42Nyw1Ljg4LTI5Ljc1LDEuODgtNDAuMTVTMjc5LDM0MSwyNjUsMzM4LjMzcy0zMy4zMyw0LTQzLjMzLDEyUzE5NC4zMywzNzMsMTg1LDM4My42N3MtMTQuNjcsMTYuMjctMjQsMzQuMTRhMjYwLjg1LDI2MC44NSwwLDAsMC0xOCw0My44NmMtMy4zMywxMC42Ni05LjU1LDIyLjEtMTYuNjcsNDcuMzMtNy4zMywyNi0xNiw1Ni4yMS03LjM0LDEwMC42Nyw2LjU2LDMzLjY2LDM5LjM0LDU1LjIsMzkuMzQsNTUuMnMzNi42Nyw3LjUzLDUwLTUuMTcsMjgtMjcuMzcsMzAuNjctNDIuN2wyLjY4LTE1LjMzXFxcIiBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcIiMwMDBcXFwiIHN0cm9rZS1taXRlcmxpbWl0PVxcXCIxMFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCI0MFxcXCI+PC9wYXRoPjwvbWFzaz48L2c+PG1hc2sgaWQ9XFxcIk1hc2stZVxcXCI+PHBhdGggY2xhc3M9XFxcIm1hc2tcXFwiIGlkPVxcXCJNYXNrLWdlbGFjY2lvLWVcXFwiIGQ9XFxcIk0zMjMsNTg5LjExbDI4LjY3LTlzMzAuODktMTcuNzQsNDYuMTEtNDEuNzQsMjEuMTUtMzAuNywxMS4yMi0zNi4xNmMtMTgtOS45LTQ5LjMzLDEuMjEtNDkuMzMsMS4yMUwzMzksNTI3LjY3cy0xOS4zNCwzMi4yMi0yNCw0OS4zOWMtNC44MSwxNy43My02LjY3LDQzLjI3LDIuNjcsNTYuNjFzMjYsMjMuMTUsMzgsMTkuNTgsMzItMTYuMjUsNDYuNjYtMzAuMjUsMjQuODgtMzEuMzMsMjQuODgtMzEuMzNMNDM0LjkzLDU2OFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlPVxcXCIjMDAwXFxcIiBzdHJva2UtbWl0ZXJsaW1pdD1cXFwiMTBcXFwiIHN0cm9rZS13aWR0aD1cXFwiMzRcXFwiPjwvcGF0aD48L21hc2s+PG1hc2sgaWQ9XFxcIk1hc2stbFxcXCI+PHBhdGggY2xhc3M9XFxcIm1hc2tcXFwiIGlkPVxcXCJNYXNrLWdlbGFjY2lvLWxcXFwiIGQ9XFxcIk00NzEsNTU1LjY3LDQ5Mi41LDUxMiw1MTksNDYxLjY3bDE4LjY3LTQwUzU3MSwzNTEsNTQ4LjMzLDM0MC40MmMtMTYuMzktNy42Mi00NC43OSw2My4yNS01MS45Miw4MC40NUw0NzksNDYzbC0xNC42NCwzOS4xNy0xMi42OSw0OS41UzQ0MS4xOSw1OTcsNDQxLjE5LDYxMi4zM3MxOC41MywzNC42NywyMy4xNywzMy4zNCwyNS40OS0xOC42NiwzMS4zMS0yNi42MiwxOC0yMy4wOCwxOC0yMy4wOGw4Ljg5LTE1LjlMNTI4LjMzLDU2M1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlPVxcXCIjMDAwXFxcIiBzdHJva2UtbWl0ZXJsaW1pdD1cXFwiMTBcXFwiIHN0cm9rZS13aWR0aD1cXFwiMzRcXFwiPjwvcGF0aD48L21hc2s+PG1hc2sgaWQ9XFxcIk1hc2stYVxcXCI+PHBhdGggY2xhc3M9XFxcIm1hc2tcXFwiIGlkPVxcXCJNYXNrLWdlbGFjY2lvLWFcXFwiIGQ9XFxcIk02MjksNTQ2LjMzczE3Ljc3LTI5LjI1LTYtNDAuNzJTNTc5LjY3LDUxMiw1NzkuNjcsNTEyTDU1MSw1NDYuNWwtMTMuODEsMjZMNTIzLDYxNXMtOC42NywyMC4xMywwLDMwLjczUzU1Ni4yNCw2NDMsNTU2LjI0LDY0M2wzMy40My0zNkw2MTMsNTc3LjA2bDE0LjMxLTI3LjMzLDMuNzMsMS43MXMtMjkuMzcsNjguODktMjQuNzEsNzguODksMTAsMTYsMjAsMTJhOTcuMDksOTcuMDksMCwwLDAsMzQtMjMuMzNDNjcxLjY3LDYwNyw2ODMsNTgwLjA3LDY4Myw1ODAuMDdMNjg2LjE3LDU2OFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlPVxcXCIjMDAwXFxcIiBzdHJva2UtbWl0ZXJsaW1pdD1cXFwiMTBcXFwiIHN0cm9rZS13aWR0aD1cXFwiMzRcXFwiPjwvcGF0aD48L21hc2s+PG1hc2sgaWQ9XFxcIk1hc2stY1xcXCI+PHBhdGggY2xhc3M9XFxcIm1hc2tcXFwiIGlkPVxcXCJNYXNrLWdlbGFjY2lvLWNcXFwiIGQ9XFxcIk03NTguMzMsNTYxLjY3YzguNzUtMTAuOCwxMi4yLTE2LjE2LDEzLjQyLTE4LjI1YTguMzcsOC4zNywwLDAsMCwuODYtMi4xYzEuMTItNC4xOCw0LjkyLTIwLjM3LS4yOC0yOS4zMi02LTEwLjMzLTMyLTYuMzktMzItNi4zOVM3MTcuNjcsNTIzLDcxMC4zMyw1MzcsNjk3LDU3Mi41NCw2OTcsNTcyLjU0cy05LjY2LDMxLjc5LTEwLjgzLDQ0LjQ2LDE2LjE2LDI4LjczLDE2LjE2LDI4LjczUzcxNi4xMSw2NjMsNzMwLjU2LDY1N3MzMS4xMS0xOCwzMS4xMS0xOGwyNi0yNC42N0w4MDMsNTkzczMuODItMTMuODksMy44Mi0xOS4xN1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlPVxcXCIjMDAwXFxcIiBzdHJva2UtbWl0ZXJsaW1pdD1cXFwiMTBcXFwiIHN0cm9rZS13aWR0aD1cXFwiMzRcXFwiPjwvcGF0aD48L21hc2s+PG1hc2sgaWQ9XFxcIk1hc2stY2NcXFwiPjxwYXRoIGNsYXNzPVxcXCJtYXNrXFxcIiBpZD1cXFwiTWFzay1nZWxhY2Npby1jY1xcXCIgZD1cXFwiTTg3Myw1NTguMTdsMjAtMTcuMzNzNi0yMCwwLTMwLjM0LTMyLTYuMzgtMzItNi4zOC0yMi42NywxNy4zOC0zMCwzMS4zOC0xMy4zMywzNS41NS0xMy4zMywzNS41NS00LjI3LDMxLjIzLTQuMjcsNDRjMCwyMCw5LjYsMjkuMjQsOS42LDI5LjI0czEzLjc4LDE3LjI2LDI4LjIyLDExLjI2LDMxLjExLTE4LDMxLjExLTE4bDI2LTI0LjY2TDkyMSw1ODYuMTdsNi40OS0yMC4wN1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlPVxcXCIjMDAwXFxcIiBzdHJva2UtbWl0ZXJsaW1pdD1cXFwiMTBcXFwiIHN0cm9rZS13aWR0aD1cXFwiMzRcXFwiPjwvcGF0aD48L21hc2s+PGcgaWQ9XFxcIk1hc2stZ2VsYWNjaW8taVxcXCI+PG1hc2sgaWQ9XFxcIk1hc2staVxcXCI+PHBhdGggY2xhc3M9XFxcIm1hc2tcXFwiIGlkPVxcXCJNYXNrLWdlbGFjY2lvLWlzdWJcXFwiIGQ9XFxcIk05OTMsNDU0LjgyczI4LTE1LjE1LDIwLTIzLjE1LTE5LjMzLTYtMjIuNjctMy4zNC03LjMzLDIwLTcuMzMsMjBsMy4zMyw2LjQ5WlxcXCIgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlPVxcXCIjMDAwXFxcIiBzdHJva2UtbWl0ZXJsaW1pdD1cXFwiMTBcXFwiIHN0cm9rZS13aWR0aD1cXFwiMzRcXFwiPjwvcGF0aD48cGF0aCBjbGFzcz1cXFwibWFza1xcXCIgaWQ9XFxcIk1hc2stZ2VsYWNjaW8taW1haW5cXFwiIGQ9XFxcIk05NzUuMjgsNDkyLjI3LDk1OS42Nyw1MjNzLTExLjM0LDI0LjY3LTEzLjM0LDMyLjY3UzkzMS42Nyw1OTUsOTMwLjMzLDYxMSw5NDMsNjM5LjY3LDk0Myw2MzkuNjdzMjEuMzMsMi42NiwzNS4zMy02LjY3LDI4LjQ4LTMyLjg5LDI4LjQ4LTMyLjg5bDE2LjY2LTI2LjA2di03LjkxXFxcIiBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcIiMwMDBcXFwiIHN0cm9rZS1taXRlcmxpbWl0PVxcXCIxMFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIzNFxcXCI+PC9wYXRoPjwvbWFzaz48L2c+PG1hc2sgaWQ9XFxcIk1hc2stb1xcXCI+PHBhdGggY2xhc3M9XFxcIm1hc2tcXFwiIGlkPVxcXCJNYXNrLWdlbGFjY2lvLW9cXFwiIGQ9XFxcIk0xMDU2LjMzLDUyOC4zM3MtMTkuMzMsMi0yNiwzMS4zNFMxMDEzLjY3LDYzOSwxMDI3LDY0MHMyNiwzLDQwLTExLDM0LjY3LTQ0LjQ3LDM0LjY3LTQ0LjQ3bDE1LjMzLTM4czEwLTM4Ljc1LDAtNDMuMTItMjYuNjEtMTItMzQuMzEsMS40OS0xMS43NSwzNi0xMS43NSwzNi0uMzcsMzguMDksOS4xOCw0NS40MiwyNy4yMywxOS4xMSw0MS4zMiwyMCwzOC4xMy0zMS44NSwzOC4xMy0zMS44NWw1LjQzLTguMzRcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiIzAwMFxcXCIgc3Ryb2tlLW1pdGVybGltaXQ9XFxcIjEwXFxcIiBzdHJva2Utd2lkdGg9XFxcIjM0XFxcIj48L3BhdGg+PC9tYXNrPjwvZz48L2RlZnM+PC9zdmc+XCIiLCJleHBvcnQge2RlbGF5fTtcblxuY29uc3QgZGVsYXkgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQtbW9kYWwtdHdvJykuY2xhc3NMaXN0LmFkZCgnZHJvcHBpbmcnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLW1vZGFsJykuY2xhc3NMaXN0LmFkZCgnZXh0ZW5kaW5nJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1vbmUnKS5jbGFzc0xpc3QuYWRkKCdleHRPbmUnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLXR3bycpLmNsYXNzTGlzdC5hZGQoJ2V4dFR3bycpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tdGhyZWUnKS5jbGFzc0xpc3QuYWRkKCdleHRUaHJlZScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWxsVHdvJykuY2xhc3NMaXN0LmFkZCgncmV2ZWFsaW5nJylcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhJykuZm9yRWFjaChhID0+IGEuY2xhc3NMaXN0LmFkZCgncmV2ZWFsaW5nJykpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKS5mb3JFYWNoKGEgPT4gYS5jbGFzc0xpc3QuYWRkKCdyZXZlYWxpbmcnKSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc3BhbicpLmZvckVhY2goYSA9PiBhLmNsYXNzTGlzdC5hZGQoJ3JldmVhbGluZycpKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGV4dC1jb250YWluZXInKS5jbGFzc0xpc3QuYWRkKCdmYWRlJyk7XG59OyIsImV4cG9ydCB7ZW1wdHlDb250ZW50fTtcblxubGV0IGVtcHR5Q29udGVudCA9IChwYXJlbnQpID0+IHtcbiAgICAgICAgd2hpbGUgKHBhcmVudC5sYXN0RWxlbWVudENoaWxkKSB7XG4gICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5sYXN0RWxlbWVudENoaWxkKTtcbiAgICAgICAgfVxuICAgIH0iLCJpbXBvcnQgZ2Vsc3ZnIGZyb20gJy4vZ2Vsc3ZnLnN2ZydcblxuY29uc3QgYXBwZW5kaW5nTWFpbiA9ICgpID0+IHtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbmNvbnN0IGljZUJhbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuaWNlQmFsbC5jbGFzc0xpc3QuYWRkKCdiYWxsT25lJylcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChpY2VCYWxsKTtcbmNvbnN0IGljZUJhbGxUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuaWNlQmFsbFR3by5jbGFzc0xpc3QuYWRkKCdiYWxsVHdvJyk7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQoaWNlQmFsbFR3byk7XG5jb25zdCBpY2VDcmVhbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuaWNlQ3JlYW0uY2xhc3NMaXN0LmFkZCgndGV4dC1jb250YWluZXInKVxuY29uc3QgZmlyc3RMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5maXJzdExpbmUuY2xhc3NMaXN0LmFkZCgndGV4dE9uZScpXG5maXJzdExpbmUudGV4dENvbnRlbnQgPSBcIkljZSBDcmVhbVwiO1xuaWNlQ3JlYW0uYXBwZW5kQ2hpbGQoZmlyc3RMaW5lKTtcbmNvbnN0IHNlY29uZExpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnNlY29uZExpbmUudGV4dENvbnRlbnQgPSBcIlRpbWVcIjtcbnNlY29uZExpbmUuY2xhc3NMaXN0LmFkZCgndGV4dFR3bycpXG5pY2VDcmVhbS5hcHBlbmRDaGlsZChzZWNvbmRMaW5lKVxuY29udGFpbmVyLmFwcGVuZENoaWxkKGljZUNyZWFtKTtcblxuY29uc3QgaW1hZ2VXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5pbWFnZVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaW1hZ2UtY29udGFpbmVyJyk7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2VXcmFwcGVyKTtcblxuXG5jb25zdCBsZWZ0QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5sZWZ0QmFyLmNsYXNzTGlzdC5hZGQoJ2xlZnQtc2lkZS1iYXInKTtcbmNvbnN0IGxlZnRNb2RhbEZpcnN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbmxlZnRNb2RhbEZpcnN0LmNsYXNzTGlzdC5hZGQoJ2xlZnQtbW9kYWwtb25lJyk7XG5jb25zdCBsZWZ0TW9kYWxTZWNvbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmxlZnRNb2RhbFNlY29uZC5jbGFzc0xpc3QuYWRkKCdsZWZ0LW1vZGFsLXR3bycpO1xubGVmdEJhci5hcHBlbmRDaGlsZChsZWZ0TW9kYWxGaXJzdCk7XG5sZWZ0QmFyLmFwcGVuZENoaWxkKGxlZnRNb2RhbFNlY29uZCk7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQobGVmdEJhcik7XG5cbmNvbnN0IGhhbmR3cml0dGVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5oYW5kd3JpdHRlbi5jbGFzc0xpc3QuYWRkKCdoYW5kd3JpdHRlbicpO1xuZnVuY3Rpb24gY29tcG9uZW50KCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGdlbHN2ZztcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cbmhhbmR3cml0dGVuLmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChoYW5kd3JpdHRlbik7XG5cbmNvbnN0IGJ1dHRvbk1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5idXR0b25Nb2RhbC5jbGFzc0xpc3QuYWRkKCdidXR0b24tbW9kYWwnKTtcbmNvbnN0IGJ0bk9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuYnRuT25lLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1vbmUnKTtcbmNvbnN0IGxpbmtGaXJzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbmxpbmtGaXJzdC5jbGFzc0xpc3QuYWRkKCdtZW51QnRuJylcbmNvbnN0IHNwYW5GaXJzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbmxpbmtGaXJzdC5hcHBlbmRDaGlsZChzcGFuRmlyc3QpO1xuc3BhbkZpcnN0LnRleHRDb250ZW50ID0gXCJNRU5VXCJcbmJ0bk9uZS5hcHBlbmRDaGlsZChsaW5rRmlyc3QpOyBcbmNvbnN0IGJ0blR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuYnRuVHdvLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi10d28nKTtcbmNvbnN0IGxpbmtTZWNvbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5jb25zdCBzcGFuU2Vjb25kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuc3BhblNlY29uZC50ZXh0Q29udGVudCA9IFwiQ09OVEFDVFwiXG5saW5rU2Vjb25kLmFwcGVuZENoaWxkKHNwYW5TZWNvbmQpO1xuYnRuVHdvLmFwcGVuZENoaWxkKGxpbmtTZWNvbmQpOyBcbmNvbnN0IGJ0blRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5idG5UaHJlZS5jbGFzc0xpc3QuYWRkKCdidXR0b24tdGhyZWUnKTtcbmNvbnN0IGxpbmtUaGlyZD0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuY29uc3Qgc3BhblRoaXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xubGlua1RoaXJkLmFwcGVuZENoaWxkKHNwYW5UaGlyZCk7XG5idG5UaHJlZS5hcHBlbmRDaGlsZChsaW5rVGhpcmQpO1xuYnV0dG9uTW9kYWwuYXBwZW5kQ2hpbGQoYnRuT25lKTtcbmJ1dHRvbk1vZGFsLmFwcGVuZENoaWxkKGJ0blR3byk7XG5idXR0b25Nb2RhbC5hcHBlbmRDaGlsZChidG5UaHJlZSk7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uTW9kYWwpO1xuXG59XG5cblxuZXhwb3J0IHthcHBlbmRpbmdNYWlufVxuIiwiaW1wb3J0IElDb25lIGZyb20gJy4vYXNzZXRzL0lDb25lLnN2ZydcbmltcG9ydCBJQ3R3byBmcm9tICcuL2Fzc2V0cy9JQ3R3by5zdmcnXG5pbXBvcnQgSUN0aHJlZSBmcm9tICcuL2Fzc2V0cy9JQ3RocmVlLnN2ZydcbmltcG9ydCBJQ2ZvdXIgZnJvbSAnLi9hc3NldHMvSUNmb3VyLnN2ZydcbmltcG9ydCBJQ2ZpdmUgZnJvbSAnLi9hc3NldHMvSUNmaXZlLnN2ZydcbmltcG9ydCBJQ3NpeCBmcm9tICcuL2Fzc2V0cy9JQ3NpeC5zdmcnXG5pbXBvcnQgSUNzZXZlbiBmcm9tICcuL2Fzc2V0cy9JQ3NldmVuLnN2ZydcbmltcG9ydCBJQ2VpZ2h0IGZyb20gJy4vYXNzZXRzL0lDZWlnaHQuc3ZnJ1xuXG5sZXQgcG9wdWxhdGVNZW51ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7IFxuICAgIGNvbnN0IG1lbnVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWVudUNvbnRlbnQnKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUNvbnRlbnQpOyBcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSBcblxuICAgIGZ1bmN0aW9uIGljZUNyZWFtU3ZnQ3JlYXRvcihwYXRoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBwYXRoXG4gICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgfTtcbiAgICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChpY2VDcmVhbVN2Z0NyZWF0b3IoSUNvbmUpKTtcbiAgICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChpY2VDcmVhbVN2Z0NyZWF0b3IoSUN0d28pKTtcbiAgICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChpY2VDcmVhbVN2Z0NyZWF0b3IoSUN0aHJlZSkpO1xuICAgIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKGljZUNyZWFtU3ZnQ3JlYXRvcihJQ2ZvdXIpKTtcbiAgICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChpY2VDcmVhbVN2Z0NyZWF0b3IoSUNmaXZlKSk7XG4gICAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoaWNlQ3JlYW1TdmdDcmVhdG9yKElDc2l4KSk7XG4gICAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoaWNlQ3JlYW1TdmdDcmVhdG9yKElDc2V2ZW4pKTtcbiAgICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChpY2VDcmVhbVN2Z0NyZWF0b3IoSUNlaWdodCkpOyAgIFxufVxuXG5leHBvcnQge3BvcHVsYXRlTWVudX0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCB7IGFwcGVuZGluZ01haW4gfSBmcm9tICcuL21haW4tcGFnZS1sb2FkJztcbmltcG9ydCB7ZGVsYXl9IGZyb20gJy4vYW5pbWF0aW9uLW1haW4nO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge2VtcHR5Q29udGVudH0gZnJvbSAnLi9lbXB0eS1jb250ZW50JztcbmltcG9ydCB7cG9wdWxhdGVNZW51fSBmcm9tICcuL21lbnUtcGFnZS1sb2FkJztcblxuYXBwZW5kaW5nTWFpbigpO1xuc2V0VGltZW91dChkZWxheSwgNDgwMClcbmxldCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVCdG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBlbXB0eUNvbnRlbnQoY29udGFpbmVyKTtcbiAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgcG9wdWxhdGVNZW51KCk7XG59KVxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==