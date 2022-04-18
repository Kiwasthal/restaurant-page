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
___CSS_LOADER_EXPORT___.push([module.id, "* { \n    margin: 0;\n    padding: 0;\n    background-color: #0f160c;\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n}\n\n\n#content {\n    display: grid;\n    grid-template-columns: 4vw 30vw 1fr 1fr 1fr 1fr;\n    grid-template-rows: 20vh 22.5vh 26.25vh 26.25vh 5vh;\n}\n\n.left-side-bar {\n    grid-area: 1 / 1 / 5 / 2;\n    display: flex;\n\n}\n\n.ballTwo {\n    position: absolute;\n    top: 5%;\n    left: 30%;\n    width: 50vh;\n    height: 50vh;\n    border-radius: 1000px;\n    z-index: 1000;\n    background: linear-gradient(90deg , white 50%, rgb(255, 166, 0) 100%);\n    background-color: rgba(233, 178, 13, 0.6);\n    transition: 3500ms ease-in-out;\n    opacity: 0;\n    filter: drop-shadow(2px 2px 10px rgb(194, 175, 91));\n}\n\n.left-modal-one {\n    background-color: #0f160c;\n    width: 1vw;\n}\n\n.left-modal-two {\n    background-color: #d6d3d1;\n    grid-area: 1 / 1 / 5 / 2;\n    opacity: 0.5;\n    width: 6vh;\n    height: 0;\n    z-index: 1000;\n    transition: 1500ms ease-in-out;\n}\n\n.dropping {\n    height: 100vh;\n    background :linear-gradient( #ce9449 25%, #432304 100%)\n}\n\n.handwritten {\n    transition: all 1s ease;\n    transition-delay: 1s;\n    grid-column: 2/4;\n    grid-row: 1/3;\n    z-index: 999;\n}\n\n\n .handwritten .svg {\n    position: absolute;\n    height: 30vh;\n    width: 100vh;\n    z-index: 999;\n    \n}\nsvg {\n    position: absolute;\n    top: 5%;\n    left: -60%;\n    width: auto;\n    height: 12vh;\n    left: 10%;\n    z-index: 1000;   \n}\n\n.mask {\n    fill: none;\n    stroke: white;\n}\n\n\n.mask {\n    stroke-dasharray: 1000;\n    stroke-dashoffset: 1000;\n  }\n  \n  @keyframes strokeOffset {\n    to {\n      stroke-dashoffset: 0;\n    }\n  }\n  \n\n  #Mask-gelaccio-Gmain {\n    animation: strokeOffset 1s linear forwards;\n  }\n\n  #Mask-gelaccio-Gsub {\n    animation: strokeOffset 2s linear forwards 0.5s;\n  }\n\n  #Mask-gelaccio-e {\n    animation: strokeOffset 1s linear forwards 1s; \n  }\n\n  #Mask-gelaccio-l {\n    animation: strokeOffset 1s linear forwards 1.5s; \n  }\n\n  #Mask-gelaccio-a {\n    animation: strokeOffset 1s linear forwards 2s; \n  }\n\n  #Mask-gelaccio-c {\n    animation: strokeOffset 1s linear forwards 2.5s; \n  }\n\n  #Mask-gelaccio-cc {\n    animation: strokeOffset 1s linear forwards 3s; \n  }\n\n  #Mask-gelaccio-imain {\n    animation: strokeOffset 1s linear forwards 3.5s; \n  }\n\n\n  #Mask-gelaccio-o {\n    animation: strokeOffset 1s linear forwards 4.0s; \n  }\n\n  #Mask-gelaccio-isub {\n    animation: strokeOffset 2s linear forwards 4.7s; \n  }\n\n\n\n.text-container {\n    grid-area: 2 / 4 / 3 / 6;\n    align-self: center;\n    z-index: 1004;\n    font-size: 40px;\n    opacity: 0;\n    transition: 3500ms;\n    background: linear-gradient(90deg ,rgb(255, 166, 0) 50% , white 100%);\n}\n\n.textOne , .textTwo {\n\n    padding: 1vh 1vh 0vh 1vh;\n    border-left: 2px solid rgb(255, 166, 0);\n    border-right: 2px solid rgb(255, 166, 0);\n    text-align: start;\n    width: 40%;\n}\n\n.textOne {\n    color :rgb(255, 166, 0);\n    border-top: 2px solid rgb(255, 166, 0);\n    font-size: 2rem;\n}\n\n.textTwo {\n    border-bottom: 2px solid rgb(255, 166, 0);\n    font-size: 3rem;\n    color: white;\n}\n\n.fade {\n    opacity: 1;\n}\n\n.image-container {\n    z-index: 1002;\n    grid-area: 2 / 2 / 5 / 4; \n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    filter: drop-shadow(4px 0px 3px #cdad8f);\n    background-repeat: no-repeat;\n}\n\nimg {\n    z-index: 1000;\n    grid-area: 2 / 2 / 5 / 3;\n}\n\n.button-modal {\n    grid-area: 3 / 3 / 5 / 6;\n    display: grid;\n    width: 0;\n    gap: 1vh;\n    grid-template-rows:  1fr 1fr 1fr;\n    transition: 1500ms ease-in-out;\n}\n\n.button-one, .button-two, .button-three  {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    border-top-right-radius: 20px;\n    width: 0;\n    background: linear-gradient(#d8d5d0 50% , #be8142 100%);\n    transition: 1500ms ease-in-out;\n    z-index: 1001;\n    \n}\n\na {\n    margin-right: 20px;\n    position: relative;\n    display: inline-block;\n    padding: 15px 30px;\n    align-items: center;\n    text-decoration: none;\n    border: 2px solid black;\n    font-weight: 600;\n    font-size: 20px;\n    background: linear-gradient(#d8d5d0 50% , #cfb8a0 100%);\n    opacity: 0;\n    transition: 4500ms;\n    z-index: 1004;\n}\n\n.revealing {\n    opacity: 1;\n}\n\n\n\na span {\n    opacity: 0;\n    background: linear-gradient(#d8d5d0 50% , #d4cabc 100%);\n    z-index: 1004;\n}\n\n\n.button-two {\n    background-color: #be8142;\n}\n\n.button-three {\n    background-color: #432304;\n}\n\n.extending {\n    width: 100%;\n}\n\n.extOne {\n    width: 50%;\n}\n\n.extTwo {\n    width: 55%;\n}\n\n.extThree {\n    width: 60%;\n}\n\n.image-container {\n    animation: fadeIn 7s;\n    -webkit-animation: fadeIn 4.5s;\n    -moz-animation: fadeIn 4.5s;\n    -o-animation: fadeIn 4.5s;\n    -ms-animation: fadeIn 4.5s;\n  }\n  @keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  }\n  \n  @-moz-keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  }\n  \n  @-webkit-keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  }\n  \n  @-o-keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  }\n  \n  @-ms-keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  } ", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;;AAGA;IACI,aAAa;IACb,+CAA+C;IAC/C,mDAAmD;AACvD;;AAEA;IACI,wBAAwB;IACxB,aAAa;;AAEjB;;AAEA;IACI,kBAAkB;IAClB,OAAO;IACP,SAAS;IACT,WAAW;IACX,YAAY;IACZ,qBAAqB;IACrB,aAAa;IACb,qEAAqE;IACrE,yCAAyC;IACzC,8BAA8B;IAC9B,UAAU;IACV,mDAAmD;AACvD;;AAEA;IACI,yBAAyB;IACzB,UAAU;AACd;;AAEA;IACI,yBAAyB;IACzB,wBAAwB;IACxB,YAAY;IACZ,UAAU;IACV,SAAS;IACT,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb;AACJ;;AAEA;IACI,uBAAuB;IACvB,oBAAoB;IACpB,gBAAgB;IAChB,aAAa;IACb,YAAY;AAChB;;;CAGC;IACG,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,YAAY;;AAEhB;AACA;IACI,kBAAkB;IAClB,OAAO;IACP,UAAU;IACV,WAAW;IACX,YAAY;IACZ,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,UAAU;IACV,aAAa;AACjB;;;AAGA;IACI,sBAAsB;IACtB,uBAAuB;EACzB;;EAEA;IACE;MACE,oBAAoB;IACtB;EACF;;;EAGA;IACE,0CAA0C;EAC5C;;EAEA;IACE,+CAA+C;EACjD;;EAEA;IACE,6CAA6C;EAC/C;;EAEA;IACE,+CAA+C;EACjD;;EAEA;IACE,6CAA6C;EAC/C;;EAEA;IACE,+CAA+C;EACjD;;EAEA;IACE,6CAA6C;EAC/C;;EAEA;IACE,+CAA+C;EACjD;;;EAGA;IACE,+CAA+C;EACjD;;EAEA;IACE,+CAA+C;EACjD;;;;AAIF;IACI,wBAAwB;IACxB,kBAAkB;IAClB,aAAa;IACb,eAAe;IACf,UAAU;IACV,kBAAkB;IAClB,qEAAqE;AACzE;;AAEA;;IAEI,wBAAwB;IACxB,uCAAuC;IACvC,wCAAwC;IACxC,iBAAiB;IACjB,UAAU;AACd;;AAEA;IACI,uBAAuB;IACvB,sCAAsC;IACtC,eAAe;AACnB;;AAEA;IACI,yCAAyC;IACzC,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,wBAAwB;IACxB,mDAAoC;IACpC,wCAAwC;IACxC,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,wBAAwB;AAC5B;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,QAAQ;IACR,QAAQ;IACR,gCAAgC;IAChC,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,mBAAmB;IACnB,6BAA6B;IAC7B,QAAQ;IACR,uDAAuD;IACvD,8BAA8B;IAC9B,aAAa;;AAEjB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,qBAAqB;IACrB,kBAAkB;IAClB,mBAAmB;IACnB,qBAAqB;IACrB,uBAAuB;IACvB,gBAAgB;IAChB,eAAe;IACf,uDAAuD;IACvD,UAAU;IACV,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,UAAU;AACd;;;;AAIA;IACI,UAAU;IACV,uDAAuD;IACvD,aAAa;AACjB;;;AAGA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,oBAAoB;IACpB,8BAA8B;IAC9B,2BAA2B;IAC3B,yBAAyB;IACzB,0BAA0B;EAC5B;EACA;IACE,IAAI,SAAS,CAAC;IACd,MAAM,SAAS,CAAC;EAClB;;EAEA;IACE,IAAI,SAAS,CAAC;IACd,MAAM,SAAS,CAAC;EAClB;;EAEA;IACE,IAAI,SAAS,CAAC;IACd,MAAM,SAAS,CAAC;EAClB;;EAEA;IACE,IAAI,SAAS,CAAC;IACd,MAAM,SAAS,CAAC;EAClB;;EAEA;IACE,IAAI,SAAS,CAAC;IACd,MAAM,SAAS,CAAC;EAClB","sourcesContent":["* { \n    margin: 0;\n    padding: 0;\n    background-color: #0f160c;\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n}\n\n\n#content {\n    display: grid;\n    grid-template-columns: 4vw 30vw 1fr 1fr 1fr 1fr;\n    grid-template-rows: 20vh 22.5vh 26.25vh 26.25vh 5vh;\n}\n\n.left-side-bar {\n    grid-area: 1 / 1 / 5 / 2;\n    display: flex;\n\n}\n\n.ballTwo {\n    position: absolute;\n    top: 5%;\n    left: 30%;\n    width: 50vh;\n    height: 50vh;\n    border-radius: 1000px;\n    z-index: 1000;\n    background: linear-gradient(90deg , white 50%, rgb(255, 166, 0) 100%);\n    background-color: rgba(233, 178, 13, 0.6);\n    transition: 3500ms ease-in-out;\n    opacity: 0;\n    filter: drop-shadow(2px 2px 10px rgb(194, 175, 91));\n}\n\n.left-modal-one {\n    background-color: #0f160c;\n    width: 1vw;\n}\n\n.left-modal-two {\n    background-color: #d6d3d1;\n    grid-area: 1 / 1 / 5 / 2;\n    opacity: 0.5;\n    width: 6vh;\n    height: 0;\n    z-index: 1000;\n    transition: 1500ms ease-in-out;\n}\n\n.dropping {\n    height: 100vh;\n    background :linear-gradient( #ce9449 25%, #432304 100%)\n}\n\n.handwritten {\n    transition: all 1s ease;\n    transition-delay: 1s;\n    grid-column: 2/4;\n    grid-row: 1/3;\n    z-index: 999;\n}\n\n\n .handwritten .svg {\n    position: absolute;\n    height: 30vh;\n    width: 100vh;\n    z-index: 999;\n    \n}\nsvg {\n    position: absolute;\n    top: 5%;\n    left: -60%;\n    width: auto;\n    height: 12vh;\n    left: 10%;\n    z-index: 1000;   \n}\n\n.mask {\n    fill: none;\n    stroke: white;\n}\n\n\n.mask {\n    stroke-dasharray: 1000;\n    stroke-dashoffset: 1000;\n  }\n  \n  @keyframes strokeOffset {\n    to {\n      stroke-dashoffset: 0;\n    }\n  }\n  \n\n  #Mask-gelaccio-Gmain {\n    animation: strokeOffset 1s linear forwards;\n  }\n\n  #Mask-gelaccio-Gsub {\n    animation: strokeOffset 2s linear forwards 0.5s;\n  }\n\n  #Mask-gelaccio-e {\n    animation: strokeOffset 1s linear forwards 1s; \n  }\n\n  #Mask-gelaccio-l {\n    animation: strokeOffset 1s linear forwards 1.5s; \n  }\n\n  #Mask-gelaccio-a {\n    animation: strokeOffset 1s linear forwards 2s; \n  }\n\n  #Mask-gelaccio-c {\n    animation: strokeOffset 1s linear forwards 2.5s; \n  }\n\n  #Mask-gelaccio-cc {\n    animation: strokeOffset 1s linear forwards 3s; \n  }\n\n  #Mask-gelaccio-imain {\n    animation: strokeOffset 1s linear forwards 3.5s; \n  }\n\n\n  #Mask-gelaccio-o {\n    animation: strokeOffset 1s linear forwards 4.0s; \n  }\n\n  #Mask-gelaccio-isub {\n    animation: strokeOffset 2s linear forwards 4.7s; \n  }\n\n\n\n.text-container {\n    grid-area: 2 / 4 / 3 / 6;\n    align-self: center;\n    z-index: 1004;\n    font-size: 40px;\n    opacity: 0;\n    transition: 3500ms;\n    background: linear-gradient(90deg ,rgb(255, 166, 0) 50% , white 100%);\n}\n\n.textOne , .textTwo {\n\n    padding: 1vh 1vh 0vh 1vh;\n    border-left: 2px solid rgb(255, 166, 0);\n    border-right: 2px solid rgb(255, 166, 0);\n    text-align: start;\n    width: 40%;\n}\n\n.textOne {\n    color :rgb(255, 166, 0);\n    border-top: 2px solid rgb(255, 166, 0);\n    font-size: 2rem;\n}\n\n.textTwo {\n    border-bottom: 2px solid rgb(255, 166, 0);\n    font-size: 3rem;\n    color: white;\n}\n\n.fade {\n    opacity: 1;\n}\n\n.image-container {\n    z-index: 1002;\n    grid-area: 2 / 2 / 5 / 4; \n    background: url(ice-cream-shop.avif);\n    filter: drop-shadow(4px 0px 3px #cdad8f);\n    background-repeat: no-repeat;\n}\n\nimg {\n    z-index: 1000;\n    grid-area: 2 / 2 / 5 / 3;\n}\n\n.button-modal {\n    grid-area: 3 / 3 / 5 / 6;\n    display: grid;\n    width: 0;\n    gap: 1vh;\n    grid-template-rows:  1fr 1fr 1fr;\n    transition: 1500ms ease-in-out;\n}\n\n.button-one, .button-two, .button-three  {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    border-top-right-radius: 20px;\n    width: 0;\n    background: linear-gradient(#d8d5d0 50% , #be8142 100%);\n    transition: 1500ms ease-in-out;\n    z-index: 1001;\n    \n}\n\na {\n    margin-right: 20px;\n    position: relative;\n    display: inline-block;\n    padding: 15px 30px;\n    align-items: center;\n    text-decoration: none;\n    border: 2px solid black;\n    font-weight: 600;\n    font-size: 20px;\n    background: linear-gradient(#d8d5d0 50% , #cfb8a0 100%);\n    opacity: 0;\n    transition: 4500ms;\n    z-index: 1004;\n}\n\n.revealing {\n    opacity: 1;\n}\n\n\n\na span {\n    opacity: 0;\n    background: linear-gradient(#d8d5d0 50% , #d4cabc 100%);\n    z-index: 1004;\n}\n\n\n.button-two {\n    background-color: #be8142;\n}\n\n.button-three {\n    background-color: #432304;\n}\n\n.extending {\n    width: 100%;\n}\n\n.extOne {\n    width: 50%;\n}\n\n.extTwo {\n    width: 55%;\n}\n\n.extThree {\n    width: 60%;\n}\n\n.image-container {\n    animation: fadeIn 7s;\n    -webkit-animation: fadeIn 4.5s;\n    -moz-animation: fadeIn 4.5s;\n    -o-animation: fadeIn 4.5s;\n    -ms-animation: fadeIn 4.5s;\n  }\n  @keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  }\n  \n  @-moz-keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  }\n  \n  @-webkit-keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  }\n  \n  @-o-keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  }\n  \n  @-ms-keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  } "],"sourceRoot":""}]);
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

/***/ "./src/gelsvg.svg":
/*!************************!*\
  !*** ./src/gelsvg.svg ***!
  \************************/
/***/ ((module) => {

module.exports = "<svg id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 4083.88 430.35\"><title>gelaccio</title><g id=\"gelaccio\"><g id=\"gelaccio-underline\"><g><path d=\"M1077.94,704.51c4,.13-1.14-.91-5.52-1.76l-4.15.8Z\" transform=\"translate(-95.37 -317.74)\" fill=\"#cda980\"></path><path d=\"M1056.28,701.86l-11,.12,8,.22c8.68,1.57-1.31,1.22-4.63,1.11C1062.9,704.51,1053.91,702.34,1056.28,701.86Z\" transform=\"translate(-95.37 -317.74)\" fill=\"#cda980\"></path><path d=\"M1034.69,700.62c-7-.74-5.12.27-2.21.81C1033,701.11,1037.61,701.16,1034.69,700.62Z\" transform=\"translate(-95.37 -317.74)\" fill=\"#cda980\"></path><path d=\"M598.09,684.23c2,.11,4.31.15,4,.39C604.28,684.31,604.74,684.09,598.09,684.23Z\" transform=\"translate(-95.37 -317.74)\" fill=\"#cda980\"></path><path d=\"M602.09,684.62l-1.42.19,1.32-.1C602.12,684.67,602.05,684.65,602.09,684.62Z\" transform=\"translate(-95.37 -317.74)\" fill=\"#cda980\"></path><path d=\"M743.94,692.44c7.91-.58,12.35-.24,19.82-.35l4.16,1.11c8.1-.21,3.59-.82,9.48-1.26,7.37.79,23,.4,26.45.62,2.42.55-3,.57-4.23.82,9.49-.07,8.85-1.07,20.64-.74l.19.29c28.22-.75,63.9,1.38,95.26,2.25a4.37,4.37,0,0,1-2.38-.61c8.27.35,16.85.94,25.48,1.4l13,.71,6.45.34,6.39.38c16.94,1,33,1.57,46.2,1.66-4.47-.34-9.69-.92-15.32-1.47l-17.66-1.7c-6-.56-12.07-1.07-17.76-1.42s-11-.41-15.59-.27c-6.69-1.19-17.15-.83-19.88-2.06-6.49-.58-12-.82-17.08-1s-9.59-.23-14.11-.27-9-.07-13.94-.17-10.28-.15-16.53-.41c-3.58-.34-1.82-.78-2.83-1.31l19.86.37c-4-.36-8.05-.63-12.07-1,2.62-.11,7.12,0,11.15.13s7.58.18,8.33-.25c-8.69,0-20-.32-31-.71-5.49-.19-10.92-.37-15.92-.46s-9.57,0-13.37.21c3.56.23,7.55.32,11.72.44s8.48.28,12.68.49c3.69.49,9.41,1,9,1.46-12.06.22-23.06-.12-34.15-.33L809.58,689c-5.73-.14-11.61-.32-17.79-.27s-14.6-.21-15.62-.72c4.07-.1,1-.56,4.35-.74-8.77.28-.91,1.77-13.57,1.36l1.64-1.68c-2.53.86-6.4.71-10.78.47a90.33,90.33,0,0,0-13.76,0c-3.24-.69,2.75-1.07,9.69-1.09-7.88-.33-8.6.67-14.89.61l6-1.43c-6.7,1.37-12-.32-15.8-.8-.45.35,3.08,1.48-5.32,1.36-3.6-.2-1.76-.56-2.61-.77-.46.35-3.48,1-9,1.09-1-.48,3.68-.77,4-1.27a81.41,81.41,0,0,1-10.62-.18c-7.4.47.48.7-4,1.27-11.36-.25-1.15-1.69-5.34-2.69,8.55-.75,19.58-1.11,24.16-1.48-5.48.12-11,.34-16.43.51,1-.58-11.13-.88-2.45-1.52-8.2-.17-17.25-.11-26.2.18s-17.83.81-25.68,1.21c2.23.15,5.1.21,4.64.58-8.12.52-7.23-.22-8.91-.6-6,.54-5.3,1.48-9,2.33-12.42-.4-14.14.16-24.74-.68l.68,1c-7.51-.53-8.54,1-16.62.71-.46-.2,2.62-.59,5.09-.9-7.13.58-6.62-.54-13.56.15l5.47-1.36c-5.54.3-13.66,1-10.84-.05-9.65,1.59-26.67,1.88-38.73,3.34l.76-.91c-6.19,1.43-23,1.3-28.34,2.92l-.95-.28-12.35,2c-5.64.31-3.82-1.12-4.25-.73-12.34,1.13-22,1.87-30,2.16-1.9,1.31-14.86,2.72-25.18,3.75-24.9,1.84-50.68,4.55-75.88,8.41a650.87,650.87,0,0,0-72.22,15c-6.77,1.62-15.7,5.31-23.87,8.19,5.15-1.28,7.92-2.13,10.67-3s5.49-1.68,10.54-2.95a66.38,66.38,0,0,1,9.11-1.19c2.57-.15,5-.18,8.39-.55l-3.55-.21a45.92,45.92,0,0,1,8.42-2,31.8,31.8,0,0,0,6.79-1.69l0,1.6c2.72-1.36,10.1-2.07,13.16-2.2l2.5-1.54c6.65-.57,11-1,13.13-.33l-.79-.88c2.55.11,25.3-3.82,17.72-1a38.88,38.88,0,0,1,7.75-1.69l.77.89c6-1,12.73-2.06,14.55-1.69a14.88,14.88,0,0,0-5.33,1.75c12.79-1.46,14.06-2.38,15-3.33s1.42-1.91,12.79-3.14l-.19.67,5.7-1.27,6.14.21c8-3.05,32-2.68,45.69-5a88.79,88.79,0,0,1,9.63-.33c3.77,0,8.15,0,13.29-.46l-.74-.94c4.19.2,14-.1,23.82-.24s19.51.11,23.46,1c7.76-1.23-.84-.16-.71-1,15.19-1.91,16.33-.51,24.36-.29,9.37-.93-7.2,0-2.19-1,14.43.07,11.63-1.76,29.45-1.94,1.79.47-4.57.6-6.39,1.05C596.05,693,619.41,693,638,692.09c10.66.12,23.86.08,37.5,0s27.75.3,40.2.62l.46-.36c10.35.92,21.57.14,33.66.58Z\" transform=\"translate(-95.37 -317.74)\" fill=\"#cda980\"></path><path d=\"M893,687.5l-1.94-1-11.46,0C884.18,687.43,886.61,687,893,687.5Z\" transform=\"translate(-95.37 -317.74)\" fill=\"#cda980\"></path><polygon points=\"795.02 372.19 801.02 372.12 791.34 371.66 795.02 372.19\" fill=\"#cda980\"></polygon><polygon points=\"650.1 366.61 651.58 366.75 662.49 366.44 673.41 366.26 661.75 366.37 650.1 366.61\" fill=\"#cda980\"></polygon><path d=\"M598.86,683.35c2.48-.53,6.08-.46,8.66-.86l-10.14.78Z\" transform=\"translate(-95.37 -317.74)\" fill=\"#cda980\"></path><path d=\"M500.26,685.49c-3.75,1.79-7.68.54-2.46,1.54C503.86,686.34,498.55,686.12,500.26,685.49Z\" transform=\"translate(-95.37 -317.74)\" fill=\"#cda980\"></path><path d=\"M477.57,689.36a50.26,50.26,0,0,0,7.32-.94C480.22,688.08,480.13,688.87,477.57,689.36Z\" transform=\"translate(-95.37 -317.74)\" fill=\"#cda980\"></path></g></g><path mask=\"url(#Mask-G)\" id=\"gelaccio-G\" d=\"M174.87,678.21a59,59,0,0,1-36.78-12.7q-16.56-12.71-26.49-36.8t-9.93-58.11a266.21,266.21,0,0,1,8.83-67.14,334,334,0,0,1,24.09-64.78,291.15,291.15,0,0,1,35.13-55.09q19.86-24.31,41.75-38.31t44-14q15.45,0,24.64,7.1a39.61,39.61,0,0,1,13.25,18.51,72.41,72.41,0,0,1,4,24.32,100.42,100.42,0,0,1-4.6,29.91q-4.59,14.85-12.32,24.75t-16.92,9.9A11.8,11.8,0,0,1,256,443q-3.49-2.79-6.44-10.11,5.15-4.31,12-15.28a145.56,145.56,0,0,0,11.95-24.32q5.15-13.33,5.15-24.1c0-6-1.6-11-4.78-15.07s-8.46-6-15.82-6q-16.55,0-33.84,14.63t-33.1,39a356.81,356.81,0,0,0-28.7,54.45,374.79,374.79,0,0,0-20.23,61.34,257.94,257.94,0,0,0-7.36,59.18q0,39.17,14.35,61.12t34.95,22q14.7,0,27.58-11.62t22.63-30.34a200.81,200.81,0,0,0,15.63-40.68,227.79,227.79,0,0,0,7.36-42.61,169.06,169.06,0,0,0-19.87-3.66,162.88,162.88,0,0,0-18.76-1.08c-3.67,0-7.42.08-11.22.22s-7.9.21-12.32.21Q198,515.95,205,509.7t17.66-6.24a64.53,64.53,0,0,1,22.25,4.09q11.22,4.09,22.44,8.82a154.58,154.58,0,0,0,21.15,7.32l-3.31,13.77q-6.62,22.81-10.85,38.74t-6.62,27.33A165.75,165.75,0,0,0,264.62,624q-.74,9-.73,17.64t.37,17.65q.36,9,.73,20.66-9.19-2.16-14.34-7.32a26.32,26.32,0,0,1-7-12.48,59.67,59.67,0,0,1-1.84-14.63q0-3,.18-6a43.67,43.67,0,0,1,.92-6.45,126.26,126.26,0,0,1-29.79,32.49A62.19,62.19,0,0,1,174.87,678.21Z\" transform=\"translate(-95.37 -317.74)\" fill=\"#c69c6d\" stroke=\"#c69c6d\" stroke-miterlimit=\"10\" stroke-width=\"4\"></path><path mask=\"url(#Mask-e)\" id=\"gelaccio-e\" d=\"M343.71,659.7q-23.18,0-35.32-14.63t-12.13-36.59q0-19.37,8.27-40.67a168.45,168.45,0,0,1,22.26-40,137.75,137.75,0,0,1,30.71-30.56q16.74-11.84,33.29-11.84a30.67,30.67,0,0,1,17.47,5.6q8.28,5.59,8.28,22.38a60.77,60.77,0,0,1-8.28,30.77,94,94,0,0,1-21.7,25.61A122.18,122.18,0,0,1,356.77,588a111.13,111.13,0,0,1-32.56,8.82c-.25,1.72-.49,3.44-.73,5.17a50.2,50.2,0,0,0-.37,6.88,61.65,61.65,0,0,0,.92,9.26,42.54,42.54,0,0,0,3.68,11.62,23.72,23.72,0,0,0,8.64,9.68q5.88,3.87,15.45,3.87,15.45,0,31.08-10.32a128.86,128.86,0,0,0,29.25-27.34A171.66,171.66,0,0,0,434.93,568l6.26,6a165.92,165.92,0,0,1-25.38,45q-15.45,19.15-34,29.91T343.71,659.7Zm-16.19-76.18q9.57-2.16,21.71-8.83a119.46,119.46,0,0,0,23.17-16.78,97.84,97.84,0,0,0,18.21-22.17,47.46,47.46,0,0,0,7.17-24.53c0-3.16-.49-5.45-1.47-6.89s-2.7-2.15-5.15-2.15q-8.84,0-18.21,7.53a110.68,110.68,0,0,0-18.39,19.37,153.52,153.52,0,0,0-16,26.25A183.81,183.81,0,0,0,327.52,583.52Z\" transform=\"translate(-95.37 -317.74)\" fill=\"#c69c6d\" stroke=\"#c69c6d\" stroke-miterlimit=\"10\" stroke-width=\"4\"></path><path mask=\"url(#Mask-l)\" id=\"gelaccio-l\" d=\"M457.74,653.67q-16.92,0-23.73-13.34t-6.8-31.85q0-21.08,6.62-49.5a589.76,589.76,0,0,1,17.47-59.61q10.84-31.2,23.91-61.12T501.33,384q13.05-24.31,24.28-38.74t17.84-14.42q4.41,0,7.54,5.6A51.93,51.93,0,0,1,556,350a64.54,64.54,0,0,1,1.84,14.42q0,11.63-5,30.35a366.28,366.28,0,0,1-14,41.32,486.47,486.47,0,0,1-21.34,46,435.15,435.15,0,0,1-27,44.77,216.31,216.31,0,0,1-31.64,36.8q-1.47,10.75-2.76,21.52A167,167,0,0,0,454.8,605q0,15.93,4.23,23.46T470.61,636q9.57,0,19.32-10.33a132.11,132.11,0,0,0,18.57-26A262.59,262.59,0,0,0,524,567.16l7.73,5.17q-15.45,37.44-34.21,59.39T457.74,653.67Zm6.62-112.76a279.69,279.69,0,0,0,24.28-34.44q11.4-18.93,21.15-39t17.1-38.74a330.76,330.76,0,0,0,11.41-33.57q4-14.85,4.41-23.46a6.1,6.1,0,0,0-.73-3q-3,0-9.75,10.11a300.51,300.51,0,0,0-15.82,27.33q-9,17.22-18.58,39.6T479.44,492.7Q470.62,517.23,464.36,540.91Z\" transform=\"translate(-95.37 -317.74)\" fill=\"#c69c6d\" stroke=\"#c69c6d\" stroke-miterlimit=\"10\" stroke-width=\"4\"></path><path mask=\"url(#Mask-a)\" id=\"gelaccio-a\" d=\"M535,661q-11.78,0-20.41-9.25T505.92,624q0-15.5,5.89-33.15A177.26,177.26,0,0,1,528,556a186.19,186.19,0,0,1,23.55-31.42,122,122,0,0,1,28.14-22.81q14.9-8.61,29.61-8.61,15.45,0,25.93,9.25t10.49,24.32q0,11.63-6.26,16.36t-15.45,3q.74-3.44,1.29-7.53a59.2,59.2,0,0,0,.55-8,36.31,36.31,0,0,0-3.31-15.93q-3.31-6.88-12.87-6.89-10.3,0-21,8.18a108.44,108.44,0,0,0-20.6,21.52,182.21,182.21,0,0,0-17.66,29.27,194.44,194.44,0,0,0-12.14,31.42q-4.41,15.5-4.41,27.55,0,14.64,9.2,14.63,8.45,0,18.57-9.47a163,163,0,0,0,20.6-24.1q10.49-14.62,20-29.91t16.55-26.91c1-1.43,1.84-2.15,2.58-2.15a58.38,58.38,0,0,1,5.88,1.94,27.68,27.68,0,0,1,7.36,4.09,8.29,8.29,0,0,1,3.31,6.89q0,4.31-3.31,11l-7.36,14.85q-4,8.18-7.35,16.36a42.24,42.24,0,0,0-3.32,15.92,23.82,23.82,0,0,0,2.76,11,9.39,9.39,0,0,0,9,5.38q9.18,0,25.19-15.71T686.17,568l5.88,6.89a176.68,176.68,0,0,1-20.78,40.89q-12.33,17.66-25.93,27.76t-27.22,10.11q-14.73,0-21.71-10.54a45.85,45.85,0,0,1-7.72-23,23.81,23.81,0,0,1,.18-2.8,23.64,23.64,0,0,0,.19-2.79Q574,636.45,561.47,648.73T535,661Z\" transform=\"translate(-95.37 -317.74)\" fill=\"#c69c6d\" stroke=\"#c69c6d\" stroke-miterlimit=\"10\" stroke-width=\"4\"></path><path mask=\"url(#Mask-c)\" id=\"gelaccio-c\" d=\"M718.54,664.87q-18.76,0-30.9-14t-12.14-42.4a122.9,122.9,0,0,1,7.17-41.32,145,145,0,0,1,19-36.58q11.76-16.37,26.11-25.83t29.06-9.47q15.45,0,21.89,9.47a36.68,36.68,0,0,1,6.44,21.09,54.75,54.75,0,0,1-5,23.24q-5,10.77-13.43,10.76-7,0-11.4-7.74,4.41-3,8.46-12.06a50,50,0,0,0,4.05-20.66c0-2.86-.5-5-1.47-6.45s-3-2.15-5.89-2.15q-9.57,0-19.68,9.9t-18.94,25.61a177.69,177.69,0,0,0-14.35,32.92A106,106,0,0,0,702,611.49a47.65,47.65,0,0,0,5.52,22.82q5.52,10.32,21,10.33,14.34,0,29.24-9.47t28.14-26.69q13.24-17.21,21-40.89l6.62,6.89a167.28,167.28,0,0,1-24.09,46.27Q774.08,641.19,755.5,653T718.54,664.87Z\" transform=\"translate(-95.37 -317.74)\" fill=\"#c69c6d\" stroke=\"#c69c6d\" stroke-miterlimit=\"10\" stroke-width=\"4\"></path><path mask=\"url(#Mask-cc)\" id=\"gelaccio-cc\" d=\"M839.92,664.87q-18.76,0-30.9-14t-12.14-42.4a122.66,122.66,0,0,1,7.18-41.32A145.26,145.26,0,0,1,823,530.58q11.78-16.37,26.12-25.83t29.06-9.47q15.45,0,21.88,9.47a36.68,36.68,0,0,1,6.44,21.09,54.74,54.74,0,0,1-5,23.24q-5,10.77-13.43,10.76-7,0-11.4-7.74,4.41-3,8.46-12.06a50.17,50.17,0,0,0,4-20.66q0-4.29-1.47-6.45t-5.88-2.15q-9.57,0-19.68,9.9t-18.95,25.61a177.65,177.65,0,0,0-14.34,32.92,106,106,0,0,0-5.52,32.28,47.65,47.65,0,0,0,5.52,22.82q5.5,10.32,21,10.33,14.35,0,29.25-9.47t28.14-26.69q13.25-17.21,21-40.89l6.63,6.89a167.31,167.31,0,0,1-24.1,46.27Q895.46,641.19,876.89,653T839.92,664.87Z\" transform=\"translate(-95.37 -317.74)\" fill=\"#c69c6d\" stroke=\"#c69c6d\" stroke-miterlimit=\"10\" stroke-width=\"4\"></path><path mask=\"url(#Mask-i)\" id=\"gelaccio-i\" d=\"M948.8,653.25q-15.45,0-23.18-11t-7.72-26.9q0-9.9,2.94-25a275.75,275.75,0,0,1,8.28-31.63,249.38,249.38,0,0,1,12.32-31.21q7-14.62,14.9-23.89T972,494.42a10.1,10.1,0,0,1,7.18,3c2.08,2,3.12,4.89,3.12,8.61s-1.9,9.33-5.7,16.79-8.28,16.14-13.43,26a247.2,247.2,0,0,0-13.42,30.77A90.38,90.38,0,0,0,944,610.2q0,14.2,4.41,18.94t12.87,4.74q12.51,0,27-14.64T1018.69,568l4.78,6q-12.13,37.88-32.19,58.53T948.8,653.25Zm43.77-195.42a19.85,19.85,0,0,1-12-3.87q-5.34-3.87-5.34-11.62,0-10.33,9.38-17.43t19.31-7.1a15.37,15.37,0,0,1,10.3,3.44q4.05,3.45,4.05,11.62,0,9-8.09,17T992.57,457.83Z\" transform=\"translate(-95.37 -317.74)\" fill=\"#c69c6d\" stroke=\"#c69c6d\" stroke-miterlimit=\"10\" stroke-width=\"4\"></path><path mask=\"url(#Mask-o)\" id=\"gelaccio-o\" d=\"M1034.5,654.54q-16.18,0-22.43-12.27a60.24,60.24,0,0,1-6.26-27.76,111.44,111.44,0,0,1,3.68-28,134.87,134.87,0,0,1,9.93-26.69,77.81,77.81,0,0,1,14-20.23q7.72-7.74,15.82-7.74a17,17,0,0,1,5.33,1.07,10.46,10.46,0,0,1,4.6,2.8,82.93,82.93,0,0,0-8.64,14.64,192.34,192.34,0,0,0-8.46,20.44,182.58,182.58,0,0,0-6.26,21.95,94.36,94.36,0,0,0-2.39,20q0,9.9,2.94,15.49t9.57,5.6q7.35,0,17.47-9.26A131.76,131.76,0,0,0,1082.69,602,71.68,71.68,0,0,1,1066,575.12q-5.34-15.27-5.34-34.65a71.77,71.77,0,0,1,4.05-22.81,49.53,49.53,0,0,1,12.5-20.23q8.46-8.16,22.08-8.18,15.45,0,21.51,10.12t6.07,24.32q0,15.93-7.17,35.94a263.7,263.7,0,0,1-17.1,38.09,20,20,0,0,0,11.4,3.44q5.52,0,13.24-3A44.16,44.16,0,0,0,1142.1,588q7.17-7.11,11.59-18.73l5.88,5.17q-7.72,21.09-21.15,30.77t-25.93,9.69a43.35,43.35,0,0,1-9.57-1.08,34.45,34.45,0,0,1-8.82-3.23,151.75,151.75,0,0,1-28.14,31Q1050.32,654.54,1034.5,654.54Zm56.65-65.43a168.63,168.63,0,0,0,15.27-32.49q6.07-17.45,6.07-32.07,0-10.75-2.76-15.71t-7.54-4.95q-7.37,0-14.72,11.84t-7.35,29.91a109.29,109.29,0,0,0,2.76,23Q1085.64,581.36,1091.15,589.11Z\" transform=\"translate(-95.37 -317.74)\" fill=\"#c69c6d\" stroke=\"#c69c6d\" stroke-miterlimit=\"10\" stroke-width=\"4\"></path></g><defs><g id=\"gelaccio-masks\"><polyline id=\"Mask-gelaccio-underline\" points=\"174.94 413.93 267.28 389.06 372.3 381.26 460.87 375.93 552.97 375.93 624.3 375.93 703.63 375.93 770.49 375.93 870.97 381.26 947.82 383.44 994.3 387.78\" fill=\"none\" stroke=\"#000\" stroke-miterlimit=\"10\" stroke-width=\"34\"></polyline><g id=\"Mask-gelaccio-G\"><mask id=\"Mask-G\"><path class=\"mask\" id=\"Mask-gelaccio-Gsub\" d=\"M193.67,515.67l72.66,8.66,10,4S263,557.81,259,580.07s-11.78,62.68-7.33,79.63L265,679.93\" fill=\"none\" stroke=\"#000\" stroke-miterlimit=\"10\" stroke-width=\"34\"></path><path class=\"mask\" id=\"Mask-gelaccio-Gmain\" d=\"M247,440.4c12.46-5.87,32.44-12.85,36-37.4,4.44-30.67,5.88-29.75,1.88-40.15S279,341,265,338.33s-33.33,4-43.33,12S194.33,373,185,383.67s-14.67,16.27-24,34.14a260.85,260.85,0,0,0-18,43.86c-3.33,10.66-9.55,22.1-16.67,47.33-7.33,26-16,56.21-7.34,100.67,6.56,33.66,39.34,55.2,39.34,55.2s36.67,7.53,50-5.17,28-27.37,30.67-42.7l2.68-15.33\" fill=\"none\" stroke=\"#000\" stroke-miterlimit=\"10\" stroke-width=\"40\"></path></mask></g><mask id=\"Mask-e\"><path class=\"mask\" id=\"Mask-gelaccio-e\" d=\"M323,589.11l28.67-9s30.89-17.74,46.11-41.74,21.15-30.7,11.22-36.16c-18-9.9-49.33,1.21-49.33,1.21L339,527.67s-19.34,32.22-24,49.39c-4.81,17.73-6.67,43.27,2.67,56.61s26,23.15,38,19.58,32-16.25,46.66-30.25,24.88-31.33,24.88-31.33L434.93,568\" fill=\"none\" stroke=\"#000\" stroke-miterlimit=\"10\" stroke-width=\"34\"></path></mask><mask id=\"Mask-l\"><path class=\"mask\" id=\"Mask-gelaccio-l\" d=\"M471,555.67,492.5,512,519,461.67l18.67-40S571,351,548.33,340.42c-16.39-7.62-44.79,63.25-51.92,80.45L479,463l-14.64,39.17-12.69,49.5S441.19,597,441.19,612.33s18.53,34.67,23.17,33.34,25.49-18.66,31.31-26.62,18-23.08,18-23.08l8.89-15.9L528.33,563\" fill=\"none\" stroke=\"#000\" stroke-miterlimit=\"10\" stroke-width=\"34\"></path></mask><mask id=\"Mask-a\"><path class=\"mask\" id=\"Mask-gelaccio-a\" d=\"M629,546.33s17.77-29.25-6-40.72S579.67,512,579.67,512L551,546.5l-13.81,26L523,615s-8.67,20.13,0,30.73S556.24,643,556.24,643l33.43-36L613,577.06l14.31-27.33,3.73,1.71s-29.37,68.89-24.71,78.89,10,16,20,12a97.09,97.09,0,0,0,34-23.33C671.67,607,683,580.07,683,580.07L686.17,568\" fill=\"none\" stroke=\"#000\" stroke-miterlimit=\"10\" stroke-width=\"34\"></path></mask><mask id=\"Mask-c\"><path class=\"mask\" id=\"Mask-gelaccio-c\" d=\"M758.33,561.67c8.75-10.8,12.2-16.16,13.42-18.25a8.37,8.37,0,0,0,.86-2.1c1.12-4.18,4.92-20.37-.28-29.32-6-10.33-32-6.39-32-6.39S717.67,523,710.33,537,697,572.54,697,572.54s-9.66,31.79-10.83,44.46,16.16,28.73,16.16,28.73S716.11,663,730.56,657s31.11-18,31.11-18l26-24.67L803,593s3.82-13.89,3.82-19.17\" fill=\"none\" stroke=\"#000\" stroke-miterlimit=\"10\" stroke-width=\"34\"></path></mask><mask id=\"Mask-cc\"><path class=\"mask\" id=\"Mask-gelaccio-cc\" d=\"M873,558.17l20-17.33s6-20,0-30.34-32-6.38-32-6.38-22.67,17.38-30,31.38-13.33,35.55-13.33,35.55-4.27,31.23-4.27,44c0,20,9.6,29.24,9.6,29.24s13.78,17.26,28.22,11.26,31.11-18,31.11-18l26-24.66L921,586.17l6.49-20.07\" fill=\"none\" stroke=\"#000\" stroke-miterlimit=\"10\" stroke-width=\"34\"></path></mask><g id=\"Mask-gelaccio-i\"><mask id=\"Mask-i\"><path class=\"mask\" id=\"Mask-gelaccio-isub\" d=\"M993,454.82s28-15.15,20-23.15-19.33-6-22.67-3.34-7.33,20-7.33,20l3.33,6.49Z\" fill=\"none\" stroke=\"#000\" stroke-miterlimit=\"10\" stroke-width=\"34\"></path><path class=\"mask\" id=\"Mask-gelaccio-imain\" d=\"M975.28,492.27,959.67,523s-11.34,24.67-13.34,32.67S931.67,595,930.33,611,943,639.67,943,639.67s21.33,2.66,35.33-6.67,28.48-32.89,28.48-32.89l16.66-26.06v-7.91\" fill=\"none\" stroke=\"#000\" stroke-miterlimit=\"10\" stroke-width=\"34\"></path></mask></g><mask id=\"Mask-o\"><path class=\"mask\" id=\"Mask-gelaccio-o\" d=\"M1056.33,528.33s-19.33,2-26,31.34S1013.67,639,1027,640s26,3,40-11,34.67-44.47,34.67-44.47l15.33-38s10-38.75,0-43.12-26.61-12-34.31,1.49-11.75,36-11.75,36-.37,38.09,9.18,45.42,27.23,19.11,41.32,20,38.13-31.85,38.13-31.85l5.43-8.34\" fill=\"none\" stroke=\"#000\" stroke-miterlimit=\"10\" stroke-width=\"34\"></path></mask></g></defs></svg>"

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





(0,_main_page_load__WEBPACK_IMPORTED_MODULE_0__.appendingMain)();
setTimeout(_animation_main__WEBPACK_IMPORTED_MODULE_1__.delay, 4800)
let menuBtn = document.querySelector('.menuBtn').addEventListener('click', () => {
    let container = document.getElementById('content');
    (0,_empty_content__WEBPACK_IMPORTED_MODULE_3__.emptyContent)(container);
})



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsT0FBTyxLQUFLLFlBQVksWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsUUFBUSxLQUFLLFlBQVksV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxRQUFRLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxTQUFTLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFFBQVEsS0FBSyxVQUFV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Ozs7O0FDckJpRDtBQUNWO0FBQ2xCO0FBQ3VCOztBQUU1Qyw4REFBYTtBQUNiLFdBQVcsa0RBQUs7QUFDaEI7QUFDQTtBQUNBLElBQUksNERBQVk7QUFDaEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9nZWxzdmcuc3ZnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hbmltYXRpb24tbWFpbi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZW1wdHktY29udGVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWFpbi1wYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJpY2UtY3JlYW0tc2hvcC5hdmlmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7IFxcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZjE2MGM7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcblxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0dncgMzB2dyAxZnIgMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjB2aCAyMi41dmggMjYuMjV2aCAyNi4yNXZoIDV2aDtcXG59XFxuXFxuLmxlZnQtc2lkZS1iYXIge1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gNSAvIDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxufVxcblxcbi5iYWxsVHdvIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUlO1xcbiAgICBsZWZ0OiAzMCU7XFxuICAgIHdpZHRoOiA1MHZoO1xcbiAgICBoZWlnaHQ6IDUwdmg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMDBweDtcXG4gICAgei1pbmRleDogMTAwMDtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnICwgd2hpdGUgNTAlLCByZ2IoMjU1LCAxNjYsIDApIDEwMCUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMywgMTc4LCAxMywgMC42KTtcXG4gICAgdHJhbnNpdGlvbjogMzUwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCAycHggMTBweCByZ2IoMTk0LCAxNzUsIDkxKSk7XFxufVxcblxcbi5sZWZ0LW1vZGFsLW9uZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZjE2MGM7XFxuICAgIHdpZHRoOiAxdnc7XFxufVxcblxcbi5sZWZ0LW1vZGFsLXR3byB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNmQzZDE7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyA1IC8gMjtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICB3aWR0aDogNnZoO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxuICAgIHRyYW5zaXRpb246IDE1MDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmRyb3BwaW5nIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZCA6bGluZWFyLWdyYWRpZW50KCAjY2U5NDQ5IDI1JSwgIzQzMjMwNCAxMDAlKVxcbn1cXG5cXG4uaGFuZHdyaXR0ZW4ge1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMXM7XFxuICAgIGdyaWQtY29sdW1uOiAyLzQ7XFxuICAgIGdyaWQtcm93OiAxLzM7XFxuICAgIHotaW5kZXg6IDk5OTtcXG59XFxuXFxuXFxuIC5oYW5kd3JpdHRlbiAuc3ZnIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDMwdmg7XFxuICAgIHdpZHRoOiAxMDB2aDtcXG4gICAgei1pbmRleDogOTk5O1xcbiAgICBcXG59XFxuc3ZnIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUlO1xcbiAgICBsZWZ0OiAtNjAlO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgaGVpZ2h0OiAxMnZoO1xcbiAgICBsZWZ0OiAxMCU7XFxuICAgIHotaW5kZXg6IDEwMDA7ICAgXFxufVxcblxcbi5tYXNrIHtcXG4gICAgZmlsbDogbm9uZTtcXG4gICAgc3Ryb2tlOiB3aGl0ZTtcXG59XFxuXFxuXFxuLm1hc2sge1xcbiAgICBzdHJva2UtZGFzaGFycmF5OiAxMDAwO1xcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMTAwMDtcXG4gIH1cXG4gIFxcbiAgQGtleWZyYW1lcyBzdHJva2VPZmZzZXQge1xcbiAgICB0byB7XFxuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XFxuICAgIH1cXG4gIH1cXG4gIFxcblxcbiAgI01hc2stZ2VsYWNjaW8tR21haW4ge1xcbiAgICBhbmltYXRpb246IHN0cm9rZU9mZnNldCAxcyBsaW5lYXIgZm9yd2FyZHM7XFxuICB9XFxuXFxuICAjTWFzay1nZWxhY2Npby1Hc3ViIHtcXG4gICAgYW5pbWF0aW9uOiBzdHJva2VPZmZzZXQgMnMgbGluZWFyIGZvcndhcmRzIDAuNXM7XFxuICB9XFxuXFxuICAjTWFzay1nZWxhY2Npby1lIHtcXG4gICAgYW5pbWF0aW9uOiBzdHJva2VPZmZzZXQgMXMgbGluZWFyIGZvcndhcmRzIDFzOyBcXG4gIH1cXG5cXG4gICNNYXNrLWdlbGFjY2lvLWwge1xcbiAgICBhbmltYXRpb246IHN0cm9rZU9mZnNldCAxcyBsaW5lYXIgZm9yd2FyZHMgMS41czsgXFxuICB9XFxuXFxuICAjTWFzay1nZWxhY2Npby1hIHtcXG4gICAgYW5pbWF0aW9uOiBzdHJva2VPZmZzZXQgMXMgbGluZWFyIGZvcndhcmRzIDJzOyBcXG4gIH1cXG5cXG4gICNNYXNrLWdlbGFjY2lvLWMge1xcbiAgICBhbmltYXRpb246IHN0cm9rZU9mZnNldCAxcyBsaW5lYXIgZm9yd2FyZHMgMi41czsgXFxuICB9XFxuXFxuICAjTWFzay1nZWxhY2Npby1jYyB7XFxuICAgIGFuaW1hdGlvbjogc3Ryb2tlT2Zmc2V0IDFzIGxpbmVhciBmb3J3YXJkcyAzczsgXFxuICB9XFxuXFxuICAjTWFzay1nZWxhY2Npby1pbWFpbiB7XFxuICAgIGFuaW1hdGlvbjogc3Ryb2tlT2Zmc2V0IDFzIGxpbmVhciBmb3J3YXJkcyAzLjVzOyBcXG4gIH1cXG5cXG5cXG4gICNNYXNrLWdlbGFjY2lvLW8ge1xcbiAgICBhbmltYXRpb246IHN0cm9rZU9mZnNldCAxcyBsaW5lYXIgZm9yd2FyZHMgNC4wczsgXFxuICB9XFxuXFxuICAjTWFzay1nZWxhY2Npby1pc3ViIHtcXG4gICAgYW5pbWF0aW9uOiBzdHJva2VPZmZzZXQgMnMgbGluZWFyIGZvcndhcmRzIDQuN3M7IFxcbiAgfVxcblxcblxcblxcbi50ZXh0LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtYXJlYTogMiAvIDQgLyAzIC8gNjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB6LWluZGV4OiAxMDA0O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IDM1MDBtcztcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnICxyZ2IoMjU1LCAxNjYsIDApIDUwJSAsIHdoaXRlIDEwMCUpO1xcbn1cXG5cXG4udGV4dE9uZSAsIC50ZXh0VHdvIHtcXG5cXG4gICAgcGFkZGluZzogMXZoIDF2aCAwdmggMXZoO1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHJnYigyNTUsIDE2NiwgMCk7XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHJnYigyNTUsIDE2NiwgMCk7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICB3aWR0aDogNDAlO1xcbn1cXG5cXG4udGV4dE9uZSB7XFxuICAgIGNvbG9yIDpyZ2IoMjU1LCAxNjYsIDApO1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgcmdiKDI1NSwgMTY2LCAwKTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4udGV4dFR3byB7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoMjU1LCAxNjYsIDApO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmZhZGUge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uaW1hZ2UtY29udGFpbmVyIHtcXG4gICAgei1pbmRleDogMTAwMjtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDUgLyA0OyBcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdyg0cHggMHB4IDNweCAjY2RhZDhmKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuaW1nIHtcXG4gICAgei1pbmRleDogMTAwMDtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDUgLyAzO1xcbn1cXG5cXG4uYnV0dG9uLW1vZGFsIHtcXG4gICAgZ3JpZC1hcmVhOiAzIC8gMyAvIDUgLyA2O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogMDtcXG4gICAgZ2FwOiAxdmg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogIDFmciAxZnIgMWZyO1xcbiAgICB0cmFuc2l0aW9uOiAxNTAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5idXR0b24tb25lLCAuYnV0dG9uLXR3bywgLmJ1dHRvbi10aHJlZSAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZDhkNWQwIDUwJSAsICNiZTgxNDIgMTAwJSk7XFxuICAgIHRyYW5zaXRpb246IDE1MDBtcyBlYXNlLWluLW91dDtcXG4gICAgei1pbmRleDogMTAwMTtcXG4gICAgXFxufVxcblxcbmEge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNkOGQ1ZDAgNTAlICwgI2NmYjhhMCAxMDAlKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogNDUwMG1zO1xcbiAgICB6LWluZGV4OiAxMDA0O1xcbn1cXG5cXG4ucmV2ZWFsaW5nIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuXFxuXFxuYSBzcGFuIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNkOGQ1ZDAgNTAlICwgI2Q0Y2FiYyAxMDAlKTtcXG4gICAgei1pbmRleDogMTAwNDtcXG59XFxuXFxuXFxuLmJ1dHRvbi10d28ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmU4MTQyO1xcbn1cXG5cXG4uYnV0dG9uLXRocmVlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQzMjMwNDtcXG59XFxuXFxuLmV4dGVuZGluZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZXh0T25lIHtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLmV4dFR3byB7XFxuICAgIHdpZHRoOiA1NSU7XFxufVxcblxcbi5leHRUaHJlZSB7XFxuICAgIHdpZHRoOiA2MCU7XFxufVxcblxcbi5pbWFnZS1jb250YWluZXIge1xcbiAgICBhbmltYXRpb246IGZhZGVJbiA3cztcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiA0LjVzO1xcbiAgICAtbW96LWFuaW1hdGlvbjogZmFkZUluIDQuNXM7XFxuICAgIC1vLWFuaW1hdGlvbjogZmFkZUluIDQuNXM7XFxuICAgIC1tcy1hbmltYXRpb246IGZhZGVJbiA0LjVzO1xcbiAgfVxcbiAgQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICAwJSB7b3BhY2l0eTowO31cXG4gICAgMTAwJSB7b3BhY2l0eToxO31cXG4gIH1cXG4gIFxcbiAgQC1tb3ota2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAgIDAlIHtvcGFjaXR5OjA7fVxcbiAgICAxMDAlIHtvcGFjaXR5OjE7fVxcbiAgfVxcbiAgXFxuICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcXG4gICAgMCUge29wYWNpdHk6MDt9XFxuICAgIDEwMCUge29wYWNpdHk6MTt9XFxuICB9XFxuICBcXG4gIEAtby1rZXlmcmFtZXMgZmFkZUluIHtcXG4gICAgMCUge29wYWNpdHk6MDt9XFxuICAgIDEwMCUge29wYWNpdHk6MTt9XFxuICB9XFxuICBcXG4gIEAtbXMta2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAgIDAlIHtvcGFjaXR5OjA7fVxcbiAgICAxMDAlIHtvcGFjaXR5OjE7fVxcbiAgfSBcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsK0NBQStDO0lBQy9DLG1EQUFtRDtBQUN2RDs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixhQUFhOztBQUVqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixxRUFBcUU7SUFDckUseUNBQXlDO0lBQ3pDLDhCQUE4QjtJQUM5QixVQUFVO0lBQ1YsbURBQW1EO0FBQ3ZEOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLFVBQVU7SUFDVixTQUFTO0lBQ1QsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYjtBQUNKOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7OztDQUdDO0lBQ0csa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTs7QUFFaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osU0FBUztJQUNULGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtBQUNqQjs7O0FBR0E7SUFDSSxzQkFBc0I7SUFDdEIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0U7TUFDRSxvQkFBb0I7SUFDdEI7RUFDRjs7O0VBR0E7SUFDRSwwQ0FBMEM7RUFDNUM7O0VBRUE7SUFDRSwrQ0FBK0M7RUFDakQ7O0VBRUE7SUFDRSw2Q0FBNkM7RUFDL0M7O0VBRUE7SUFDRSwrQ0FBK0M7RUFDakQ7O0VBRUE7SUFDRSw2Q0FBNkM7RUFDL0M7O0VBRUE7SUFDRSwrQ0FBK0M7RUFDakQ7O0VBRUE7SUFDRSw2Q0FBNkM7RUFDL0M7O0VBRUE7SUFDRSwrQ0FBK0M7RUFDakQ7OztFQUdBO0lBQ0UsK0NBQStDO0VBQ2pEOztFQUVBO0lBQ0UsK0NBQStDO0VBQ2pEOzs7O0FBSUY7SUFDSSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixlQUFlO0lBQ2YsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixxRUFBcUU7QUFDekU7O0FBRUE7O0lBRUksd0JBQXdCO0lBQ3hCLHVDQUF1QztJQUN2Qyx3Q0FBd0M7SUFDeEMsaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixzQ0FBc0M7SUFDdEMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlDQUF5QztJQUN6QyxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsbURBQW9DO0lBQ3BDLHdDQUF3QztJQUN4Qyw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixRQUFRO0lBQ1IsUUFBUTtJQUNSLGdDQUFnQztJQUNoQyw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsUUFBUTtJQUNSLHVEQUF1RDtJQUN2RCw4QkFBOEI7SUFDOUIsYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZix1REFBdUQ7SUFDdkQsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOzs7O0FBSUE7SUFDSSxVQUFVO0lBQ1YsdURBQXVEO0lBQ3ZELGFBQWE7QUFDakI7OztBQUdBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsSUFBSSxTQUFTLENBQUM7SUFDZCxNQUFNLFNBQVMsQ0FBQztFQUNsQjs7RUFFQTtJQUNFLElBQUksU0FBUyxDQUFDO0lBQ2QsTUFBTSxTQUFTLENBQUM7RUFDbEI7O0VBRUE7SUFDRSxJQUFJLFNBQVMsQ0FBQztJQUNkLE1BQU0sU0FBUyxDQUFDO0VBQ2xCOztFQUVBO0lBQ0UsSUFBSSxTQUFTLENBQUM7SUFDZCxNQUFNLFNBQVMsQ0FBQztFQUNsQjs7RUFFQTtJQUNFLElBQUksU0FBUyxDQUFDO0lBQ2QsTUFBTSxTQUFTLENBQUM7RUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7IFxcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZjE2MGM7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcblxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0dncgMzB2dyAxZnIgMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjB2aCAyMi41dmggMjYuMjV2aCAyNi4yNXZoIDV2aDtcXG59XFxuXFxuLmxlZnQtc2lkZS1iYXIge1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gNSAvIDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxufVxcblxcbi5iYWxsVHdvIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUlO1xcbiAgICBsZWZ0OiAzMCU7XFxuICAgIHdpZHRoOiA1MHZoO1xcbiAgICBoZWlnaHQ6IDUwdmg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMDBweDtcXG4gICAgei1pbmRleDogMTAwMDtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnICwgd2hpdGUgNTAlLCByZ2IoMjU1LCAxNjYsIDApIDEwMCUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMywgMTc4LCAxMywgMC42KTtcXG4gICAgdHJhbnNpdGlvbjogMzUwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCAycHggMTBweCByZ2IoMTk0LCAxNzUsIDkxKSk7XFxufVxcblxcbi5sZWZ0LW1vZGFsLW9uZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZjE2MGM7XFxuICAgIHdpZHRoOiAxdnc7XFxufVxcblxcbi5sZWZ0LW1vZGFsLXR3byB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNmQzZDE7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyA1IC8gMjtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICB3aWR0aDogNnZoO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxuICAgIHRyYW5zaXRpb246IDE1MDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmRyb3BwaW5nIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZCA6bGluZWFyLWdyYWRpZW50KCAjY2U5NDQ5IDI1JSwgIzQzMjMwNCAxMDAlKVxcbn1cXG5cXG4uaGFuZHdyaXR0ZW4ge1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMXM7XFxuICAgIGdyaWQtY29sdW1uOiAyLzQ7XFxuICAgIGdyaWQtcm93OiAxLzM7XFxuICAgIHotaW5kZXg6IDk5OTtcXG59XFxuXFxuXFxuIC5oYW5kd3JpdHRlbiAuc3ZnIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDMwdmg7XFxuICAgIHdpZHRoOiAxMDB2aDtcXG4gICAgei1pbmRleDogOTk5O1xcbiAgICBcXG59XFxuc3ZnIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUlO1xcbiAgICBsZWZ0OiAtNjAlO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgaGVpZ2h0OiAxMnZoO1xcbiAgICBsZWZ0OiAxMCU7XFxuICAgIHotaW5kZXg6IDEwMDA7ICAgXFxufVxcblxcbi5tYXNrIHtcXG4gICAgZmlsbDogbm9uZTtcXG4gICAgc3Ryb2tlOiB3aGl0ZTtcXG59XFxuXFxuXFxuLm1hc2sge1xcbiAgICBzdHJva2UtZGFzaGFycmF5OiAxMDAwO1xcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMTAwMDtcXG4gIH1cXG4gIFxcbiAgQGtleWZyYW1lcyBzdHJva2VPZmZzZXQge1xcbiAgICB0byB7XFxuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XFxuICAgIH1cXG4gIH1cXG4gIFxcblxcbiAgI01hc2stZ2VsYWNjaW8tR21haW4ge1xcbiAgICBhbmltYXRpb246IHN0cm9rZU9mZnNldCAxcyBsaW5lYXIgZm9yd2FyZHM7XFxuICB9XFxuXFxuICAjTWFzay1nZWxhY2Npby1Hc3ViIHtcXG4gICAgYW5pbWF0aW9uOiBzdHJva2VPZmZzZXQgMnMgbGluZWFyIGZvcndhcmRzIDAuNXM7XFxuICB9XFxuXFxuICAjTWFzay1nZWxhY2Npby1lIHtcXG4gICAgYW5pbWF0aW9uOiBzdHJva2VPZmZzZXQgMXMgbGluZWFyIGZvcndhcmRzIDFzOyBcXG4gIH1cXG5cXG4gICNNYXNrLWdlbGFjY2lvLWwge1xcbiAgICBhbmltYXRpb246IHN0cm9rZU9mZnNldCAxcyBsaW5lYXIgZm9yd2FyZHMgMS41czsgXFxuICB9XFxuXFxuICAjTWFzay1nZWxhY2Npby1hIHtcXG4gICAgYW5pbWF0aW9uOiBzdHJva2VPZmZzZXQgMXMgbGluZWFyIGZvcndhcmRzIDJzOyBcXG4gIH1cXG5cXG4gICNNYXNrLWdlbGFjY2lvLWMge1xcbiAgICBhbmltYXRpb246IHN0cm9rZU9mZnNldCAxcyBsaW5lYXIgZm9yd2FyZHMgMi41czsgXFxuICB9XFxuXFxuICAjTWFzay1nZWxhY2Npby1jYyB7XFxuICAgIGFuaW1hdGlvbjogc3Ryb2tlT2Zmc2V0IDFzIGxpbmVhciBmb3J3YXJkcyAzczsgXFxuICB9XFxuXFxuICAjTWFzay1nZWxhY2Npby1pbWFpbiB7XFxuICAgIGFuaW1hdGlvbjogc3Ryb2tlT2Zmc2V0IDFzIGxpbmVhciBmb3J3YXJkcyAzLjVzOyBcXG4gIH1cXG5cXG5cXG4gICNNYXNrLWdlbGFjY2lvLW8ge1xcbiAgICBhbmltYXRpb246IHN0cm9rZU9mZnNldCAxcyBsaW5lYXIgZm9yd2FyZHMgNC4wczsgXFxuICB9XFxuXFxuICAjTWFzay1nZWxhY2Npby1pc3ViIHtcXG4gICAgYW5pbWF0aW9uOiBzdHJva2VPZmZzZXQgMnMgbGluZWFyIGZvcndhcmRzIDQuN3M7IFxcbiAgfVxcblxcblxcblxcbi50ZXh0LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtYXJlYTogMiAvIDQgLyAzIC8gNjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB6LWluZGV4OiAxMDA0O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IDM1MDBtcztcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnICxyZ2IoMjU1LCAxNjYsIDApIDUwJSAsIHdoaXRlIDEwMCUpO1xcbn1cXG5cXG4udGV4dE9uZSAsIC50ZXh0VHdvIHtcXG5cXG4gICAgcGFkZGluZzogMXZoIDF2aCAwdmggMXZoO1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHJnYigyNTUsIDE2NiwgMCk7XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHJnYigyNTUsIDE2NiwgMCk7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICB3aWR0aDogNDAlO1xcbn1cXG5cXG4udGV4dE9uZSB7XFxuICAgIGNvbG9yIDpyZ2IoMjU1LCAxNjYsIDApO1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgcmdiKDI1NSwgMTY2LCAwKTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4udGV4dFR3byB7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoMjU1LCAxNjYsIDApO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmZhZGUge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uaW1hZ2UtY29udGFpbmVyIHtcXG4gICAgei1pbmRleDogMTAwMjtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDUgLyA0OyBcXG4gICAgYmFja2dyb3VuZDogdXJsKGljZS1jcmVhbS1zaG9wLmF2aWYpO1xcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDRweCAwcHggM3B4ICNjZGFkOGYpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG5pbWcge1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gNSAvIDM7XFxufVxcblxcbi5idXR0b24tbW9kYWwge1xcbiAgICBncmlkLWFyZWE6IDMgLyAzIC8gNSAvIDY7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBnYXA6IDF2aDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAgMWZyIDFmciAxZnI7XFxuICAgIHRyYW5zaXRpb246IDE1MDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmJ1dHRvbi1vbmUsIC5idXR0b24tdHdvLCAuYnV0dG9uLXRocmVlICB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xcbiAgICB3aWR0aDogMDtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNkOGQ1ZDAgNTAlICwgI2JlODE0MiAxMDAlKTtcXG4gICAgdHJhbnNpdGlvbjogMTUwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICB6LWluZGV4OiAxMDAxO1xcbiAgICBcXG59XFxuXFxuYSB7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBhZGRpbmc6IDE1cHggMzBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2Q4ZDVkMCA1MCUgLCAjY2ZiOGEwIDEwMCUpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiA0NTAwbXM7XFxuICAgIHotaW5kZXg6IDEwMDQ7XFxufVxcblxcbi5yZXZlYWxpbmcge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5cXG5cXG5hIHNwYW4ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2Q4ZDVkMCA1MCUgLCAjZDRjYWJjIDEwMCUpO1xcbiAgICB6LWluZGV4OiAxMDA0O1xcbn1cXG5cXG5cXG4uYnV0dG9uLXR3byB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZTgxNDI7XFxufVxcblxcbi5idXR0b24tdGhyZWUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDMyMzA0O1xcbn1cXG5cXG4uZXh0ZW5kaW5nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5leHRPbmUge1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uZXh0VHdvIHtcXG4gICAgd2lkdGg6IDU1JTtcXG59XFxuXFxuLmV4dFRocmVlIHtcXG4gICAgd2lkdGg6IDYwJTtcXG59XFxuXFxuLmltYWdlLWNvbnRhaW5lciB7XFxuICAgIGFuaW1hdGlvbjogZmFkZUluIDdzO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDQuNXM7XFxuICAgIC1tb3otYW5pbWF0aW9uOiBmYWRlSW4gNC41cztcXG4gICAgLW8tYW5pbWF0aW9uOiBmYWRlSW4gNC41cztcXG4gICAgLW1zLWFuaW1hdGlvbjogZmFkZUluIDQuNXM7XFxuICB9XFxuICBAa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAgIDAlIHtvcGFjaXR5OjA7fVxcbiAgICAxMDAlIHtvcGFjaXR5OjE7fVxcbiAgfVxcbiAgXFxuICBALW1vei1rZXlmcmFtZXMgZmFkZUluIHtcXG4gICAgMCUge29wYWNpdHk6MDt9XFxuICAgIDEwMCUge29wYWNpdHk6MTt9XFxuICB9XFxuICBcXG4gIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICAwJSB7b3BhY2l0eTowO31cXG4gICAgMTAwJSB7b3BhY2l0eToxO31cXG4gIH1cXG4gIFxcbiAgQC1vLWtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICAwJSB7b3BhY2l0eTowO31cXG4gICAgMTAwJSB7b3BhY2l0eToxO31cXG4gIH1cXG4gIFxcbiAgQC1tcy1rZXlmcmFtZXMgZmFkZUluIHtcXG4gICAgMCUge29wYWNpdHk6MDt9XFxuICAgIDEwMCUge29wYWNpdHk6MTt9XFxuICB9IFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyBpZD1cXFwiTGF5ZXJfMVxcXCIgZGF0YS1uYW1lPVxcXCJMYXllciAxXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCA0MDgzLjg4IDQzMC4zNVxcXCI+PHRpdGxlPmdlbGFjY2lvPC90aXRsZT48ZyBpZD1cXFwiZ2VsYWNjaW9cXFwiPjxnIGlkPVxcXCJnZWxhY2Npby11bmRlcmxpbmVcXFwiPjxnPjxwYXRoIGQ9XFxcIk0xMDc3Ljk0LDcwNC41MWM0LC4xMy0xLjE0LS45MS01LjUyLTEuNzZsLTQuMTUuOFpcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKC05NS4zNyAtMzE3Ljc0KVxcXCIgZmlsbD1cXFwiI2NkYTk4MFxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xMDU2LjI4LDcwMS44NmwtMTEsLjEyLDgsLjIyYzguNjgsMS41Ny0xLjMxLDEuMjItNC42MywxLjExQzEwNjIuOSw3MDQuNTEsMTA1My45MSw3MDIuMzQsMTA1Ni4yOCw3MDEuODZaXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgtOTUuMzcgLTMxNy43NClcXFwiIGZpbGw9XFxcIiNjZGE5ODBcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTAzNC42OSw3MDAuNjJjLTctLjc0LTUuMTIuMjctMi4yMS44MUMxMDMzLDcwMS4xMSwxMDM3LjYxLDcwMS4xNiwxMDM0LjY5LDcwMC42MlpcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKC05NS4zNyAtMzE3Ljc0KVxcXCIgZmlsbD1cXFwiI2NkYTk4MFxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk01OTguMDksNjg0LjIzYzIsLjExLDQuMzEuMTUsNCwuMzlDNjA0LjI4LDY4NC4zMSw2MDQuNzQsNjg0LjA5LDU5OC4wOSw2ODQuMjNaXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgtOTUuMzcgLTMxNy43NClcXFwiIGZpbGw9XFxcIiNjZGE5ODBcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNNjAyLjA5LDY4NC42MmwtMS40Mi4xOSwxLjMyLS4xQzYwMi4xMiw2ODQuNjcsNjAyLjA1LDY4NC42NSw2MDIuMDksNjg0LjYyWlxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoLTk1LjM3IC0zMTcuNzQpXFxcIiBmaWxsPVxcXCIjY2RhOTgwXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTc0My45NCw2OTIuNDRjNy45MS0uNTgsMTIuMzUtLjI0LDE5LjgyLS4zNWw0LjE2LDEuMTFjOC4xLS4yMSwzLjU5LS44Miw5LjQ4LTEuMjYsNy4zNy43OSwyMywuNCwyNi40NS42MiwyLjQyLjU1LTMsLjU3LTQuMjMuODIsOS40OS0uMDcsOC44NS0xLjA3LDIwLjY0LS43NGwuMTkuMjljMjguMjItLjc1LDYzLjksMS4zOCw5NS4yNiwyLjI1YTQuMzcsNC4zNywwLDAsMS0yLjM4LS42MWM4LjI3LjM1LDE2Ljg1Ljk0LDI1LjQ4LDEuNGwxMywuNzEsNi40NS4zNCw2LjM5LjM4YzE2Ljk0LDEsMzMsMS41Nyw0Ni4yLDEuNjYtNC40Ny0uMzQtOS42OS0uOTItMTUuMzItMS40N2wtMTcuNjYtMS43Yy02LS41Ni0xMi4wNy0xLjA3LTE3Ljc2LTEuNDJzLTExLS40MS0xNS41OS0uMjdjLTYuNjktMS4xOS0xNy4xNS0uODMtMTkuODgtMi4wNi02LjQ5LS41OC0xMi0uODItMTcuMDgtMXMtOS41OS0uMjMtMTQuMTEtLjI3LTktLjA3LTEzLjk0LS4xNy0xMC4yOC0uMTUtMTYuNTMtLjQxYy0zLjU4LS4zNC0xLjgyLS43OC0yLjgzLTEuMzFsMTkuODYuMzdjLTQtLjM2LTguMDUtLjYzLTEyLjA3LTEsMi42Mi0uMTEsNy4xMiwwLDExLjE1LjEzczcuNTguMTgsOC4zMy0uMjVjLTguNjksMC0yMC0uMzItMzEtLjcxLTUuNDktLjE5LTEwLjkyLS4zNy0xNS45Mi0uNDZzLTkuNTcsMC0xMy4zNy4yMWMzLjU2LjIzLDcuNTUuMzIsMTEuNzIuNDRzOC40OC4yOCwxMi42OC40OWMzLjY5LjQ5LDkuNDEsMSw5LDEuNDYtMTIuMDYuMjItMjMuMDYtLjEyLTM0LjE1LS4zM0w4MDkuNTgsNjg5Yy01LjczLS4xNC0xMS42MS0uMzItMTcuNzktLjI3cy0xNC42LS4yMS0xNS42Mi0uNzJjNC4wNy0uMSwxLS41Niw0LjM1LS43NC04Ljc3LjI4LS45MSwxLjc3LTEzLjU3LDEuMzZsMS42NC0xLjY4Yy0yLjUzLjg2LTYuNC43MS0xMC43OC40N2E5MC4zMyw5MC4zMywwLDAsMC0xMy43NiwwYy0zLjI0LS42OSwyLjc1LTEuMDcsOS42OS0xLjA5LTcuODgtLjMzLTguNi42Ny0xNC44OS42MWw2LTEuNDNjLTYuNywxLjM3LTEyLS4zMi0xNS44LS44LS40NS4zNSwzLjA4LDEuNDgtNS4zMiwxLjM2LTMuNi0uMi0xLjc2LS41Ni0yLjYxLS43Ny0uNDYuMzUtMy40OCwxLTksMS4wOS0xLS40OCwzLjY4LS43Nyw0LTEuMjdhODEuNDEsODEuNDEsMCwwLDEtMTAuNjItLjE4Yy03LjQuNDcuNDguNy00LDEuMjctMTEuMzYtLjI1LTEuMTUtMS42OS01LjM0LTIuNjksOC41NS0uNzUsMTkuNTgtMS4xMSwyNC4xNi0xLjQ4LTUuNDguMTItMTEsLjM0LTE2LjQzLjUxLDEtLjU4LTExLjEzLS44OC0yLjQ1LTEuNTItOC4yLS4xNy0xNy4yNS0uMTEtMjYuMi4xOHMtMTcuODMuODEtMjUuNjgsMS4yMWMyLjIzLjE1LDUuMS4yMSw0LjY0LjU4LTguMTIuNTItNy4yMy0uMjItOC45MS0uNi02LC41NC01LjMsMS40OC05LDIuMzMtMTIuNDItLjQtMTQuMTQuMTYtMjQuNzQtLjY4bC42OCwxYy03LjUxLS41My04LjU0LDEtMTYuNjIuNzEtLjQ2LS4yLDIuNjItLjU5LDUuMDktLjktNy4xMy41OC02LjYyLS41NC0xMy41Ni4xNWw1LjQ3LTEuMzZjLTUuNTQuMy0xMy42NiwxLTEwLjg0LS4wNS05LjY1LDEuNTktMjYuNjcsMS44OC0zOC43MywzLjM0bC43Ni0uOTFjLTYuMTksMS40My0yMywxLjMtMjguMzQsMi45MmwtLjk1LS4yOC0xMi4zNSwyYy01LjY0LjMxLTMuODItMS4xMi00LjI1LS43My0xMi4zNCwxLjEzLTIyLDEuODctMzAsMi4xNi0xLjksMS4zMS0xNC44NiwyLjcyLTI1LjE4LDMuNzUtMjQuOSwxLjg0LTUwLjY4LDQuNTUtNzUuODgsOC40MWE2NTAuODcsNjUwLjg3LDAsMCwwLTcyLjIyLDE1Yy02Ljc3LDEuNjItMTUuNyw1LjMxLTIzLjg3LDguMTksNS4xNS0xLjI4LDcuOTItMi4xMywxMC42Ny0zczUuNDktMS42OCwxMC41NC0yLjk1YTY2LjM4LDY2LjM4LDAsMCwxLDkuMTEtMS4xOWMyLjU3LS4xNSw1LS4xOCw4LjM5LS41NWwtMy41NS0uMjFhNDUuOTIsNDUuOTIsMCwwLDEsOC40Mi0yLDMxLjgsMzEuOCwwLDAsMCw2Ljc5LTEuNjlsMCwxLjZjMi43Mi0xLjM2LDEwLjEtMi4wNywxMy4xNi0yLjJsMi41LTEuNTRjNi42NS0uNTcsMTEtMSwxMy4xMy0uMzNsLS43OS0uODhjMi41NS4xMSwyNS4zLTMuODIsMTcuNzItMWEzOC44OCwzOC44OCwwLDAsMSw3Ljc1LTEuNjlsLjc3Ljg5YzYtMSwxMi43My0yLjA2LDE0LjU1LTEuNjlhMTQuODgsMTQuODgsMCwwLDAtNS4zMywxLjc1YzEyLjc5LTEuNDYsMTQuMDYtMi4zOCwxNS0zLjMzczEuNDItMS45MSwxMi43OS0zLjE0bC0uMTkuNjcsNS43LTEuMjcsNi4xNC4yMWM4LTMuMDUsMzItMi42OCw0NS42OS01YTg4Ljc5LDg4Ljc5LDAsMCwxLDkuNjMtLjMzYzMuNzcsMCw4LjE1LDAsMTMuMjktLjQ2bC0uNzQtLjk0YzQuMTkuMiwxNC0uMSwyMy44Mi0uMjRzMTkuNTEuMTEsMjMuNDYsMWM3Ljc2LTEuMjMtLjg0LS4xNi0uNzEtMSwxNS4xOS0xLjkxLDE2LjMzLS41MSwyNC4zNi0uMjksOS4zNy0uOTMtNy4yLDAtMi4xOS0xLDE0LjQzLjA3LDExLjYzLTEuNzYsMjkuNDUtMS45NCwxLjc5LjQ3LTQuNTcuNi02LjM5LDEuMDVDNTk2LjA1LDY5Myw2MTkuNDEsNjkzLDYzOCw2OTIuMDljMTAuNjYuMTIsMjMuODYuMDgsMzcuNSwwczI3Ljc1LjMsNDAuMi42MmwuNDYtLjM2YzEwLjM1LjkyLDIxLjU3LjE0LDMzLjY2LjU4WlxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoLTk1LjM3IC0zMTcuNzQpXFxcIiBmaWxsPVxcXCIjY2RhOTgwXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTg5Myw2ODcuNWwtMS45NC0xLTExLjQ2LDBDODg0LjE4LDY4Ny40Myw4ODYuNjEsNjg3LDg5Myw2ODcuNVpcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKC05NS4zNyAtMzE3Ljc0KVxcXCIgZmlsbD1cXFwiI2NkYTk4MFxcXCI+PC9wYXRoPjxwb2x5Z29uIHBvaW50cz1cXFwiNzk1LjAyIDM3Mi4xOSA4MDEuMDIgMzcyLjEyIDc5MS4zNCAzNzEuNjYgNzk1LjAyIDM3Mi4xOVxcXCIgZmlsbD1cXFwiI2NkYTk4MFxcXCI+PC9wb2x5Z29uPjxwb2x5Z29uIHBvaW50cz1cXFwiNjUwLjEgMzY2LjYxIDY1MS41OCAzNjYuNzUgNjYyLjQ5IDM2Ni40NCA2NzMuNDEgMzY2LjI2IDY2MS43NSAzNjYuMzcgNjUwLjEgMzY2LjYxXFxcIiBmaWxsPVxcXCIjY2RhOTgwXFxcIj48L3BvbHlnb24+PHBhdGggZD1cXFwiTTU5OC44Niw2ODMuMzVjMi40OC0uNTMsNi4wOC0uNDYsOC42Ni0uODZsLTEwLjE0Ljc4WlxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoLTk1LjM3IC0zMTcuNzQpXFxcIiBmaWxsPVxcXCIjY2RhOTgwXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTUwMC4yNiw2ODUuNDljLTMuNzUsMS43OS03LjY4LjU0LTIuNDYsMS41NEM1MDMuODYsNjg2LjM0LDQ5OC41NSw2ODYuMTIsNTAwLjI2LDY4NS40OVpcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKC05NS4zNyAtMzE3Ljc0KVxcXCIgZmlsbD1cXFwiI2NkYTk4MFxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk00NzcuNTcsNjg5LjM2YTUwLjI2LDUwLjI2LDAsMCwwLDcuMzItLjk0QzQ4MC4yMiw2ODguMDgsNDgwLjEzLDY4OC44Nyw0NzcuNTcsNjg5LjM2WlxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoLTk1LjM3IC0zMTcuNzQpXFxcIiBmaWxsPVxcXCIjY2RhOTgwXFxcIj48L3BhdGg+PC9nPjwvZz48cGF0aCBtYXNrPVxcXCJ1cmwoI01hc2stRylcXFwiIGlkPVxcXCJnZWxhY2Npby1HXFxcIiBkPVxcXCJNMTc0Ljg3LDY3OC4yMWE1OSw1OSwwLDAsMS0zNi43OC0xMi43cS0xNi41Ni0xMi43MS0yNi40OS0zNi44dC05LjkzLTU4LjExYTI2Ni4yMSwyNjYuMjEsMCwwLDEsOC44My02Ny4xNCwzMzQsMzM0LDAsMCwxLDI0LjA5LTY0Ljc4LDI5MS4xNSwyOTEuMTUsMCwwLDEsMzUuMTMtNTUuMDlxMTkuODYtMjQuMzEsNDEuNzUtMzguMzF0NDQtMTRxMTUuNDUsMCwyNC42NCw3LjFhMzkuNjEsMzkuNjEsMCwwLDEsMTMuMjUsMTguNTEsNzIuNDEsNzIuNDEsMCwwLDEsNCwyNC4zMiwxMDAuNDIsMTAwLjQyLDAsMCwxLTQuNiwyOS45MXEtNC41OSwxNC44NS0xMi4zMiwyNC43NXQtMTYuOTIsOS45QTExLjgsMTEuOCwwLDAsMSwyNTYsNDQzcS0zLjQ5LTIuNzktNi40NC0xMC4xMSw1LjE1LTQuMzEsMTItMTUuMjhhMTQ1LjU2LDE0NS41NiwwLDAsMCwxMS45NS0yNC4zMnE1LjE1LTEzLjMzLDUuMTUtMjQuMWMwLTYtMS42LTExLTQuNzgtMTUuMDdzLTguNDYtNi0xNS44Mi02cS0xNi41NSwwLTMzLjg0LDE0LjYzdC0zMy4xLDM5YTM1Ni44MSwzNTYuODEsMCwwLDAtMjguNyw1NC40NSwzNzQuNzksMzc0Ljc5LDAsMCwwLTIwLjIzLDYxLjM0LDI1Ny45NCwyNTcuOTQsMCwwLDAtNy4zNiw1OS4xOHEwLDM5LjE3LDE0LjM1LDYxLjEydDM0Ljk1LDIycTE0LjcsMCwyNy41OC0xMS42MnQyMi42My0zMC4zNGEyMDAuODEsMjAwLjgxLDAsMCwwLDE1LjYzLTQwLjY4LDIyNy43OSwyMjcuNzksMCwwLDAsNy4zNi00Mi42MSwxNjkuMDYsMTY5LjA2LDAsMCwwLTE5Ljg3LTMuNjYsMTYyLjg4LDE2Mi44OCwwLDAsMC0xOC43Ni0xLjA4Yy0zLjY3LDAtNy40Mi4wOC0xMS4yMi4yMnMtNy45LjIxLTEyLjMyLjIxUTE5OCw1MTUuOTUsMjA1LDUwOS43dDE3LjY2LTYuMjRhNjQuNTMsNjQuNTMsMCwwLDEsMjIuMjUsNC4wOXExMS4yMiw0LjA5LDIyLjQ0LDguODJhMTU0LjU4LDE1NC41OCwwLDAsMCwyMS4xNSw3LjMybC0zLjMxLDEzLjc3cS02LjYyLDIyLjgxLTEwLjg1LDM4Ljc0dC02LjYyLDI3LjMzQTE2NS43NSwxNjUuNzUsMCwwLDAsMjY0LjYyLDYyNHEtLjc0LDktLjczLDE3LjY0dC4zNywxNy42NXEuMzYsOSwuNzMsMjAuNjYtOS4xOS0yLjE2LTE0LjM0LTcuMzJhMjYuMzIsMjYuMzIsMCwwLDEtNy0xMi40OCw1OS42Nyw1OS42NywwLDAsMS0xLjg0LTE0LjYzcTAtMywuMTgtNmE0My42Nyw0My42NywwLDAsMSwuOTItNi40NSwxMjYuMjYsMTI2LjI2LDAsMCwxLTI5Ljc5LDMyLjQ5QTYyLjE5LDYyLjE5LDAsMCwxLDE3NC44Nyw2NzguMjFaXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgtOTUuMzcgLTMxNy43NClcXFwiIGZpbGw9XFxcIiNjNjljNmRcXFwiIHN0cm9rZT1cXFwiI2M2OWM2ZFxcXCIgc3Ryb2tlLW1pdGVybGltaXQ9XFxcIjEwXFxcIiBzdHJva2Utd2lkdGg9XFxcIjRcXFwiPjwvcGF0aD48cGF0aCBtYXNrPVxcXCJ1cmwoI01hc2stZSlcXFwiIGlkPVxcXCJnZWxhY2Npby1lXFxcIiBkPVxcXCJNMzQzLjcxLDY1OS43cS0yMy4xOCwwLTM1LjMyLTE0LjYzdC0xMi4xMy0zNi41OXEwLTE5LjM3LDguMjctNDAuNjdhMTY4LjQ1LDE2OC40NSwwLDAsMSwyMi4yNi00MCwxMzcuNzUsMTM3Ljc1LDAsMCwxLDMwLjcxLTMwLjU2cTE2Ljc0LTExLjg0LDMzLjI5LTExLjg0YTMwLjY3LDMwLjY3LDAsMCwxLDE3LjQ3LDUuNnE4LjI4LDUuNTksOC4yOCwyMi4zOGE2MC43Nyw2MC43NywwLDAsMS04LjI4LDMwLjc3LDk0LDk0LDAsMCwxLTIxLjcsMjUuNjFBMTIyLjE4LDEyMi4xOCwwLDAsMSwzNTYuNzcsNTg4YTExMS4xMywxMTEuMTMsMCwwLDEtMzIuNTYsOC44MmMtLjI1LDEuNzItLjQ5LDMuNDQtLjczLDUuMTdhNTAuMiw1MC4yLDAsMCwwLS4zNyw2Ljg4LDYxLjY1LDYxLjY1LDAsMCwwLC45Miw5LjI2LDQyLjU0LDQyLjU0LDAsMCwwLDMuNjgsMTEuNjIsMjMuNzIsMjMuNzIsMCwwLDAsOC42NCw5LjY4cTUuODgsMy44NywxNS40NSwzLjg3LDE1LjQ1LDAsMzEuMDgtMTAuMzJhMTI4Ljg2LDEyOC44NiwwLDAsMCwyOS4yNS0yNy4zNEExNzEuNjYsMTcxLjY2LDAsMCwwLDQzNC45Myw1NjhsNi4yNiw2YTE2NS45MiwxNjUuOTIsMCwwLDEtMjUuMzgsNDVxLTE1LjQ1LDE5LjE1LTM0LDI5LjkxVDM0My43MSw2NTkuN1ptLTE2LjE5LTc2LjE4cTkuNTctMi4xNiwyMS43MS04LjgzYTExOS40NiwxMTkuNDYsMCwwLDAsMjMuMTctMTYuNzgsOTcuODQsOTcuODQsMCwwLDAsMTguMjEtMjIuMTcsNDcuNDYsNDcuNDYsMCwwLDAsNy4xNy0yNC41M2MwLTMuMTYtLjQ5LTUuNDUtMS40Ny02Ljg5cy0yLjctMi4xNS01LjE1LTIuMTVxLTguODQsMC0xOC4yMSw3LjUzYTExMC42OCwxMTAuNjgsMCwwLDAtMTguMzksMTkuMzcsMTUzLjUyLDE1My41MiwwLDAsMC0xNiwyNi4yNUExODMuODEsMTgzLjgxLDAsMCwwLDMyNy41Miw1ODMuNTJaXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgtOTUuMzcgLTMxNy43NClcXFwiIGZpbGw9XFxcIiNjNjljNmRcXFwiIHN0cm9rZT1cXFwiI2M2OWM2ZFxcXCIgc3Ryb2tlLW1pdGVybGltaXQ9XFxcIjEwXFxcIiBzdHJva2Utd2lkdGg9XFxcIjRcXFwiPjwvcGF0aD48cGF0aCBtYXNrPVxcXCJ1cmwoI01hc2stbClcXFwiIGlkPVxcXCJnZWxhY2Npby1sXFxcIiBkPVxcXCJNNDU3Ljc0LDY1My42N3EtMTYuOTIsMC0yMy43My0xMy4zNHQtNi44LTMxLjg1cTAtMjEuMDgsNi42Mi00OS41YTU4OS43Niw1ODkuNzYsMCwwLDEsMTcuNDctNTkuNjFxMTAuODQtMzEuMiwyMy45MS02MS4xMlQ1MDEuMzMsMzg0cTEzLjA1LTI0LjMxLDI0LjI4LTM4Ljc0dDE3Ljg0LTE0LjQycTQuNDEsMCw3LjU0LDUuNkE1MS45Myw1MS45MywwLDAsMSw1NTYsMzUwYTY0LjU0LDY0LjU0LDAsMCwxLDEuODQsMTQuNDJxMCwxMS42My01LDMwLjM1YTM2Ni4yOCwzNjYuMjgsMCwwLDEtMTQsNDEuMzIsNDg2LjQ3LDQ4Ni40NywwLDAsMS0yMS4zNCw0Niw0MzUuMTUsNDM1LjE1LDAsMCwxLTI3LDQ0Ljc3LDIxNi4zMSwyMTYuMzEsMCwwLDEtMzEuNjQsMzYuOHEtMS40NywxMC43NS0yLjc2LDIxLjUyQTE2NywxNjcsMCwwLDAsNDU0LjgsNjA1cTAsMTUuOTMsNC4yMywyMy40NlQ0NzAuNjEsNjM2cTkuNTcsMCwxOS4zMi0xMC4zM2ExMzIuMTEsMTMyLjExLDAsMCwwLDE4LjU3LTI2QTI2Mi41OSwyNjIuNTksMCwwLDAsNTI0LDU2Ny4xNmw3LjczLDUuMTdxLTE1LjQ1LDM3LjQ0LTM0LjIxLDU5LjM5VDQ1Ny43NCw2NTMuNjdabTYuNjItMTEyLjc2YTI3OS42OSwyNzkuNjksMCwwLDAsMjQuMjgtMzQuNDRxMTEuNC0xOC45MywyMS4xNS0zOXQxNy4xLTM4Ljc0YTMzMC43NiwzMzAuNzYsMCwwLDAsMTEuNDEtMzMuNTdxNC0xNC44NSw0LjQxLTIzLjQ2YTYuMSw2LjEsMCwwLDAtLjczLTNxLTMsMC05Ljc1LDEwLjExYTMwMC41MSwzMDAuNTEsMCwwLDAtMTUuODIsMjcuMzNxLTksMTcuMjItMTguNTgsMzkuNlQ0NzkuNDQsNDkyLjdRNDcwLjYyLDUxNy4yMyw0NjQuMzYsNTQwLjkxWlxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoLTk1LjM3IC0zMTcuNzQpXFxcIiBmaWxsPVxcXCIjYzY5YzZkXFxcIiBzdHJva2U9XFxcIiNjNjljNmRcXFwiIHN0cm9rZS1taXRlcmxpbWl0PVxcXCIxMFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCI0XFxcIj48L3BhdGg+PHBhdGggbWFzaz1cXFwidXJsKCNNYXNrLWEpXFxcIiBpZD1cXFwiZ2VsYWNjaW8tYVxcXCIgZD1cXFwiTTUzNSw2NjFxLTExLjc4LDAtMjAuNDEtOS4yNVQ1MDUuOTIsNjI0cTAtMTUuNSw1Ljg5LTMzLjE1QTE3Ny4yNiwxNzcuMjYsMCwwLDEsNTI4LDU1NmExODYuMTksMTg2LjE5LDAsMCwxLDIzLjU1LTMxLjQyLDEyMiwxMjIsMCwwLDEsMjguMTQtMjIuODFxMTQuOS04LjYxLDI5LjYxLTguNjEsMTUuNDUsMCwyNS45Myw5LjI1dDEwLjQ5LDI0LjMycTAsMTEuNjMtNi4yNiwxNi4zNnQtMTUuNDUsM3EuNzQtMy40NCwxLjI5LTcuNTNhNTkuMiw1OS4yLDAsMCwwLC41NS04LDM2LjMxLDM2LjMxLDAsMCwwLTMuMzEtMTUuOTNxLTMuMzEtNi44OC0xMi44Ny02Ljg5LTEwLjMsMC0yMSw4LjE4YTEwOC40NCwxMDguNDQsMCwwLDAtMjAuNiwyMS41MiwxODIuMjEsMTgyLjIxLDAsMCwwLTE3LjY2LDI5LjI3LDE5NC40NCwxOTQuNDQsMCwwLDAtMTIuMTQsMzEuNDJxLTQuNDEsMTUuNS00LjQxLDI3LjU1LDAsMTQuNjQsOS4yLDE0LjYzLDguNDUsMCwxOC41Ny05LjQ3YTE2MywxNjMsMCwwLDAsMjAuNi0yNC4xcTEwLjQ5LTE0LjYyLDIwLTI5LjkxdDE2LjU1LTI2LjkxYzEtMS40MywxLjg0LTIuMTUsMi41OC0yLjE1YTU4LjM4LDU4LjM4LDAsMCwxLDUuODgsMS45NCwyNy42OCwyNy42OCwwLDAsMSw3LjM2LDQuMDksOC4yOSw4LjI5LDAsMCwxLDMuMzEsNi44OXEwLDQuMzEtMy4zMSwxMWwtNy4zNiwxNC44NXEtNCw4LjE4LTcuMzUsMTYuMzZhNDIuMjQsNDIuMjQsMCwwLDAtMy4zMiwxNS45MiwyMy44MiwyMy44MiwwLDAsMCwyLjc2LDExLDkuMzksOS4zOSwwLDAsMCw5LDUuMzhxOS4xOCwwLDI1LjE5LTE1LjcxVDY4Ni4xNyw1NjhsNS44OCw2Ljg5YTE3Ni42OCwxNzYuNjgsMCwwLDEtMjAuNzgsNDAuODlxLTEyLjMzLDE3LjY2LTI1LjkzLDI3Ljc2dC0yNy4yMiwxMC4xMXEtMTQuNzMsMC0yMS43MS0xMC41NGE0NS44NSw0NS44NSwwLDAsMS03LjcyLTIzLDIzLjgxLDIzLjgxLDAsMCwxLC4xOC0yLjgsMjMuNjQsMjMuNjQsMCwwLDAsLjE5LTIuNzlRNTc0LDYzNi40NSw1NjEuNDcsNjQ4LjczVDUzNSw2NjFaXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgtOTUuMzcgLTMxNy43NClcXFwiIGZpbGw9XFxcIiNjNjljNmRcXFwiIHN0cm9rZT1cXFwiI2M2OWM2ZFxcXCIgc3Ryb2tlLW1pdGVybGltaXQ9XFxcIjEwXFxcIiBzdHJva2Utd2lkdGg9XFxcIjRcXFwiPjwvcGF0aD48cGF0aCBtYXNrPVxcXCJ1cmwoI01hc2stYylcXFwiIGlkPVxcXCJnZWxhY2Npby1jXFxcIiBkPVxcXCJNNzE4LjU0LDY2NC44N3EtMTguNzYsMC0zMC45LTE0dC0xMi4xNC00Mi40YTEyMi45LDEyMi45LDAsMCwxLDcuMTctNDEuMzIsMTQ1LDE0NSwwLDAsMSwxOS0zNi41OHExMS43Ni0xNi4zNywyNi4xMS0yNS44M3QyOS4wNi05LjQ3cTE1LjQ1LDAsMjEuODksOS40N2EzNi42OCwzNi42OCwwLDAsMSw2LjQ0LDIxLjA5LDU0Ljc1LDU0Ljc1LDAsMCwxLTUsMjMuMjRxLTUsMTAuNzctMTMuNDMsMTAuNzYtNywwLTExLjQtNy43NCw0LjQxLTMsOC40Ni0xMi4wNmE1MCw1MCwwLDAsMCw0LjA1LTIwLjY2YzAtMi44Ni0uNS01LTEuNDctNi40NXMtMy0yLjE1LTUuODktMi4xNXEtOS41NywwLTE5LjY4LDkuOXQtMTguOTQsMjUuNjFhMTc3LjY5LDE3Ny42OSwwLDAsMC0xNC4zNSwzMi45MkExMDYsMTA2LDAsMCwwLDcwMiw2MTEuNDlhNDcuNjUsNDcuNjUsMCwwLDAsNS41MiwyMi44MnE1LjUyLDEwLjMyLDIxLDEwLjMzLDE0LjM0LDAsMjkuMjQtOS40N3QyOC4xNC0yNi42OXExMy4yNC0xNy4yMSwyMS00MC44OWw2LjYyLDYuODlhMTY3LjI4LDE2Ny4yOCwwLDAsMS0yNC4wOSw0Ni4yN1E3NzQuMDgsNjQxLjE5LDc1NS41LDY1M1Q3MTguNTQsNjY0Ljg3WlxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoLTk1LjM3IC0zMTcuNzQpXFxcIiBmaWxsPVxcXCIjYzY5YzZkXFxcIiBzdHJva2U9XFxcIiNjNjljNmRcXFwiIHN0cm9rZS1taXRlcmxpbWl0PVxcXCIxMFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCI0XFxcIj48L3BhdGg+PHBhdGggbWFzaz1cXFwidXJsKCNNYXNrLWNjKVxcXCIgaWQ9XFxcImdlbGFjY2lvLWNjXFxcIiBkPVxcXCJNODM5LjkyLDY2NC44N3EtMTguNzYsMC0zMC45LTE0dC0xMi4xNC00Mi40YTEyMi42NiwxMjIuNjYsMCwwLDEsNy4xOC00MS4zMkExNDUuMjYsMTQ1LjI2LDAsMCwxLDgyMyw1MzAuNThxMTEuNzgtMTYuMzcsMjYuMTItMjUuODN0MjkuMDYtOS40N3ExNS40NSwwLDIxLjg4LDkuNDdhMzYuNjgsMzYuNjgsMCwwLDEsNi40NCwyMS4wOSw1NC43NCw1NC43NCwwLDAsMS01LDIzLjI0cS01LDEwLjc3LTEzLjQzLDEwLjc2LTcsMC0xMS40LTcuNzQsNC40MS0zLDguNDYtMTIuMDZhNTAuMTcsNTAuMTcsMCwwLDAsNC0yMC42NnEwLTQuMjktMS40Ny02LjQ1dC01Ljg4LTIuMTVxLTkuNTcsMC0xOS42OCw5Ljl0LTE4Ljk1LDI1LjYxYTE3Ny42NSwxNzcuNjUsMCwwLDAtMTQuMzQsMzIuOTIsMTA2LDEwNiwwLDAsMC01LjUyLDMyLjI4LDQ3LjY1LDQ3LjY1LDAsMCwwLDUuNTIsMjIuODJxNS41LDEwLjMyLDIxLDEwLjMzLDE0LjM1LDAsMjkuMjUtOS40N3QyOC4xNC0yNi42OXExMy4yNS0xNy4yMSwyMS00MC44OWw2LjYzLDYuODlhMTY3LjMxLDE2Ny4zMSwwLDAsMS0yNC4xLDQ2LjI3UTg5NS40Niw2NDEuMTksODc2Ljg5LDY1M1Q4MzkuOTIsNjY0Ljg3WlxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoLTk1LjM3IC0zMTcuNzQpXFxcIiBmaWxsPVxcXCIjYzY5YzZkXFxcIiBzdHJva2U9XFxcIiNjNjljNmRcXFwiIHN0cm9rZS1taXRlcmxpbWl0PVxcXCIxMFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCI0XFxcIj48L3BhdGg+PHBhdGggbWFzaz1cXFwidXJsKCNNYXNrLWkpXFxcIiBpZD1cXFwiZ2VsYWNjaW8taVxcXCIgZD1cXFwiTTk0OC44LDY1My4yNXEtMTUuNDUsMC0yMy4xOC0xMXQtNy43Mi0yNi45cTAtOS45LDIuOTQtMjVhMjc1Ljc1LDI3NS43NSwwLDAsMSw4LjI4LTMxLjYzLDI0OS4zOCwyNDkuMzgsMCwwLDEsMTIuMzItMzEuMjFxNy0xNC42MiwxNC45LTIzLjg5VDk3Miw0OTQuNDJhMTAuMSwxMC4xLDAsMCwxLDcuMTgsM2MyLjA4LDIsMy4xMiw0Ljg5LDMuMTIsOC42MXMtMS45LDkuMzMtNS43LDE2Ljc5LTguMjgsMTYuMTQtMTMuNDMsMjZhMjQ3LjIsMjQ3LjIsMCwwLDAtMTMuNDIsMzAuNzdBOTAuMzgsOTAuMzgsMCwwLDAsOTQ0LDYxMC4ycTAsMTQuMiw0LjQxLDE4Ljk0dDEyLjg3LDQuNzRxMTIuNTEsMCwyNy0xNC42NFQxMDE4LjY5LDU2OGw0Ljc4LDZxLTEyLjEzLDM3Ljg4LTMyLjE5LDU4LjUzVDk0OC44LDY1My4yNVptNDMuNzctMTk1LjQyYTE5Ljg1LDE5Ljg1LDAsMCwxLTEyLTMuODdxLTUuMzQtMy44Ny01LjM0LTExLjYyLDAtMTAuMzMsOS4zOC0xNy40M3QxOS4zMS03LjFhMTUuMzcsMTUuMzcsMCwwLDEsMTAuMywzLjQ0cTQuMDUsMy40NSw0LjA1LDExLjYyLDAsOS04LjA5LDE3VDk5Mi41Nyw0NTcuODNaXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgtOTUuMzcgLTMxNy43NClcXFwiIGZpbGw9XFxcIiNjNjljNmRcXFwiIHN0cm9rZT1cXFwiI2M2OWM2ZFxcXCIgc3Ryb2tlLW1pdGVybGltaXQ9XFxcIjEwXFxcIiBzdHJva2Utd2lkdGg9XFxcIjRcXFwiPjwvcGF0aD48cGF0aCBtYXNrPVxcXCJ1cmwoI01hc2stbylcXFwiIGlkPVxcXCJnZWxhY2Npby1vXFxcIiBkPVxcXCJNMTAzNC41LDY1NC41NHEtMTYuMTgsMC0yMi40My0xMi4yN2E2MC4yNCw2MC4yNCwwLDAsMS02LjI2LTI3Ljc2LDExMS40NCwxMTEuNDQsMCwwLDEsMy42OC0yOCwxMzQuODcsMTM0Ljg3LDAsMCwxLDkuOTMtMjYuNjksNzcuODEsNzcuODEsMCwwLDEsMTQtMjAuMjNxNy43Mi03Ljc0LDE1LjgyLTcuNzRhMTcsMTcsMCwwLDEsNS4zMywxLjA3LDEwLjQ2LDEwLjQ2LDAsMCwxLDQuNiwyLjgsODIuOTMsODIuOTMsMCwwLDAtOC42NCwxNC42NCwxOTIuMzQsMTkyLjM0LDAsMCwwLTguNDYsMjAuNDQsMTgyLjU4LDE4Mi41OCwwLDAsMC02LjI2LDIxLjk1LDk0LjM2LDk0LjM2LDAsMCwwLTIuMzksMjBxMCw5LjksMi45NCwxNS40OXQ5LjU3LDUuNnE3LjM1LDAsMTcuNDctOS4yNkExMzEuNzYsMTMxLjc2LDAsMCwwLDEwODIuNjksNjAyLDcxLjY4LDcxLjY4LDAsMCwxLDEwNjYsNTc1LjEycS01LjM0LTE1LjI3LTUuMzQtMzQuNjVhNzEuNzcsNzEuNzcsMCwwLDEsNC4wNS0yMi44MSw0OS41Myw0OS41MywwLDAsMSwxMi41LTIwLjIzcTguNDYtOC4xNiwyMi4wOC04LjE4LDE1LjQ1LDAsMjEuNTEsMTAuMTJ0Ni4wNywyNC4zMnEwLDE1LjkzLTcuMTcsMzUuOTRhMjYzLjcsMjYzLjcsMCwwLDEtMTcuMSwzOC4wOSwyMCwyMCwwLDAsMCwxMS40LDMuNDRxNS41MiwwLDEzLjI0LTNBNDQuMTYsNDQuMTYsMCwwLDAsMTE0Mi4xLDU4OHE3LjE3LTcuMTEsMTEuNTktMTguNzNsNS44OCw1LjE3cS03LjcyLDIxLjA5LTIxLjE1LDMwLjc3dC0yNS45Myw5LjY5YTQzLjM1LDQzLjM1LDAsMCwxLTkuNTctMS4wOCwzNC40NSwzNC40NSwwLDAsMS04LjgyLTMuMjMsMTUxLjc1LDE1MS43NSwwLDAsMS0yOC4xNCwzMVExMDUwLjMyLDY1NC41NCwxMDM0LjUsNjU0LjU0Wm01Ni42NS02NS40M2ExNjguNjMsMTY4LjYzLDAsMCwwLDE1LjI3LTMyLjQ5cTYuMDctMTcuNDUsNi4wNy0zMi4wNywwLTEwLjc1LTIuNzYtMTUuNzF0LTcuNTQtNC45NXEtNy4zNywwLTE0LjcyLDExLjg0dC03LjM1LDI5LjkxYTEwOS4yOSwxMDkuMjksMCwwLDAsMi43NiwyM1ExMDg1LjY0LDU4MS4zNiwxMDkxLjE1LDU4OS4xMVpcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKC05NS4zNyAtMzE3Ljc0KVxcXCIgZmlsbD1cXFwiI2M2OWM2ZFxcXCIgc3Ryb2tlPVxcXCIjYzY5YzZkXFxcIiBzdHJva2UtbWl0ZXJsaW1pdD1cXFwiMTBcXFwiIHN0cm9rZS13aWR0aD1cXFwiNFxcXCI+PC9wYXRoPjwvZz48ZGVmcz48ZyBpZD1cXFwiZ2VsYWNjaW8tbWFza3NcXFwiPjxwb2x5bGluZSBpZD1cXFwiTWFzay1nZWxhY2Npby11bmRlcmxpbmVcXFwiIHBvaW50cz1cXFwiMTc0Ljk0IDQxMy45MyAyNjcuMjggMzg5LjA2IDM3Mi4zIDM4MS4yNiA0NjAuODcgMzc1LjkzIDU1Mi45NyAzNzUuOTMgNjI0LjMgMzc1LjkzIDcwMy42MyAzNzUuOTMgNzcwLjQ5IDM3NS45MyA4NzAuOTcgMzgxLjI2IDk0Ny44MiAzODMuNDQgOTk0LjMgMzg3Ljc4XFxcIiBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcIiMwMDBcXFwiIHN0cm9rZS1taXRlcmxpbWl0PVxcXCIxMFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIzNFxcXCI+PC9wb2x5bGluZT48ZyBpZD1cXFwiTWFzay1nZWxhY2Npby1HXFxcIj48bWFzayBpZD1cXFwiTWFzay1HXFxcIj48cGF0aCBjbGFzcz1cXFwibWFza1xcXCIgaWQ9XFxcIk1hc2stZ2VsYWNjaW8tR3N1YlxcXCIgZD1cXFwiTTE5My42Nyw1MTUuNjdsNzIuNjYsOC42NiwxMCw0UzI2Myw1NTcuODEsMjU5LDU4MC4wN3MtMTEuNzgsNjIuNjgtNy4zMyw3OS42M0wyNjUsNjc5LjkzXFxcIiBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcIiMwMDBcXFwiIHN0cm9rZS1taXRlcmxpbWl0PVxcXCIxMFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIzNFxcXCI+PC9wYXRoPjxwYXRoIGNsYXNzPVxcXCJtYXNrXFxcIiBpZD1cXFwiTWFzay1nZWxhY2Npby1HbWFpblxcXCIgZD1cXFwiTTI0Nyw0NDAuNGMxMi40Ni01Ljg3LDMyLjQ0LTEyLjg1LDM2LTM3LjQsNC40NC0zMC42Nyw1Ljg4LTI5Ljc1LDEuODgtNDAuMTVTMjc5LDM0MSwyNjUsMzM4LjMzcy0zMy4zMyw0LTQzLjMzLDEyUzE5NC4zMywzNzMsMTg1LDM4My42N3MtMTQuNjcsMTYuMjctMjQsMzQuMTRhMjYwLjg1LDI2MC44NSwwLDAsMC0xOCw0My44NmMtMy4zMywxMC42Ni05LjU1LDIyLjEtMTYuNjcsNDcuMzMtNy4zMywyNi0xNiw1Ni4yMS03LjM0LDEwMC42Nyw2LjU2LDMzLjY2LDM5LjM0LDU1LjIsMzkuMzQsNTUuMnMzNi42Nyw3LjUzLDUwLTUuMTcsMjgtMjcuMzcsMzAuNjctNDIuN2wyLjY4LTE1LjMzXFxcIiBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcIiMwMDBcXFwiIHN0cm9rZS1taXRlcmxpbWl0PVxcXCIxMFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCI0MFxcXCI+PC9wYXRoPjwvbWFzaz48L2c+PG1hc2sgaWQ9XFxcIk1hc2stZVxcXCI+PHBhdGggY2xhc3M9XFxcIm1hc2tcXFwiIGlkPVxcXCJNYXNrLWdlbGFjY2lvLWVcXFwiIGQ9XFxcIk0zMjMsNTg5LjExbDI4LjY3LTlzMzAuODktMTcuNzQsNDYuMTEtNDEuNzQsMjEuMTUtMzAuNywxMS4yMi0zNi4xNmMtMTgtOS45LTQ5LjMzLDEuMjEtNDkuMzMsMS4yMUwzMzksNTI3LjY3cy0xOS4zNCwzMi4yMi0yNCw0OS4zOWMtNC44MSwxNy43My02LjY3LDQzLjI3LDIuNjcsNTYuNjFzMjYsMjMuMTUsMzgsMTkuNTgsMzItMTYuMjUsNDYuNjYtMzAuMjUsMjQuODgtMzEuMzMsMjQuODgtMzEuMzNMNDM0LjkzLDU2OFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlPVxcXCIjMDAwXFxcIiBzdHJva2UtbWl0ZXJsaW1pdD1cXFwiMTBcXFwiIHN0cm9rZS13aWR0aD1cXFwiMzRcXFwiPjwvcGF0aD48L21hc2s+PG1hc2sgaWQ9XFxcIk1hc2stbFxcXCI+PHBhdGggY2xhc3M9XFxcIm1hc2tcXFwiIGlkPVxcXCJNYXNrLWdlbGFjY2lvLWxcXFwiIGQ9XFxcIk00NzEsNTU1LjY3LDQ5Mi41LDUxMiw1MTksNDYxLjY3bDE4LjY3LTQwUzU3MSwzNTEsNTQ4LjMzLDM0MC40MmMtMTYuMzktNy42Mi00NC43OSw2My4yNS01MS45Miw4MC40NUw0NzksNDYzbC0xNC42NCwzOS4xNy0xMi42OSw0OS41UzQ0MS4xOSw1OTcsNDQxLjE5LDYxMi4zM3MxOC41MywzNC42NywyMy4xNywzMy4zNCwyNS40OS0xOC42NiwzMS4zMS0yNi42MiwxOC0yMy4wOCwxOC0yMy4wOGw4Ljg5LTE1LjlMNTI4LjMzLDU2M1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlPVxcXCIjMDAwXFxcIiBzdHJva2UtbWl0ZXJsaW1pdD1cXFwiMTBcXFwiIHN0cm9rZS13aWR0aD1cXFwiMzRcXFwiPjwvcGF0aD48L21hc2s+PG1hc2sgaWQ9XFxcIk1hc2stYVxcXCI+PHBhdGggY2xhc3M9XFxcIm1hc2tcXFwiIGlkPVxcXCJNYXNrLWdlbGFjY2lvLWFcXFwiIGQ9XFxcIk02MjksNTQ2LjMzczE3Ljc3LTI5LjI1LTYtNDAuNzJTNTc5LjY3LDUxMiw1NzkuNjcsNTEyTDU1MSw1NDYuNWwtMTMuODEsMjZMNTIzLDYxNXMtOC42NywyMC4xMywwLDMwLjczUzU1Ni4yNCw2NDMsNTU2LjI0LDY0M2wzMy40My0zNkw2MTMsNTc3LjA2bDE0LjMxLTI3LjMzLDMuNzMsMS43MXMtMjkuMzcsNjguODktMjQuNzEsNzguODksMTAsMTYsMjAsMTJhOTcuMDksOTcuMDksMCwwLDAsMzQtMjMuMzNDNjcxLjY3LDYwNyw2ODMsNTgwLjA3LDY4Myw1ODAuMDdMNjg2LjE3LDU2OFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlPVxcXCIjMDAwXFxcIiBzdHJva2UtbWl0ZXJsaW1pdD1cXFwiMTBcXFwiIHN0cm9rZS13aWR0aD1cXFwiMzRcXFwiPjwvcGF0aD48L21hc2s+PG1hc2sgaWQ9XFxcIk1hc2stY1xcXCI+PHBhdGggY2xhc3M9XFxcIm1hc2tcXFwiIGlkPVxcXCJNYXNrLWdlbGFjY2lvLWNcXFwiIGQ9XFxcIk03NTguMzMsNTYxLjY3YzguNzUtMTAuOCwxMi4yLTE2LjE2LDEzLjQyLTE4LjI1YTguMzcsOC4zNywwLDAsMCwuODYtMi4xYzEuMTItNC4xOCw0LjkyLTIwLjM3LS4yOC0yOS4zMi02LTEwLjMzLTMyLTYuMzktMzItNi4zOVM3MTcuNjcsNTIzLDcxMC4zMyw1MzcsNjk3LDU3Mi41NCw2OTcsNTcyLjU0cy05LjY2LDMxLjc5LTEwLjgzLDQ0LjQ2LDE2LjE2LDI4LjczLDE2LjE2LDI4LjczUzcxNi4xMSw2NjMsNzMwLjU2LDY1N3MzMS4xMS0xOCwzMS4xMS0xOGwyNi0yNC42N0w4MDMsNTkzczMuODItMTMuODksMy44Mi0xOS4xN1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlPVxcXCIjMDAwXFxcIiBzdHJva2UtbWl0ZXJsaW1pdD1cXFwiMTBcXFwiIHN0cm9rZS13aWR0aD1cXFwiMzRcXFwiPjwvcGF0aD48L21hc2s+PG1hc2sgaWQ9XFxcIk1hc2stY2NcXFwiPjxwYXRoIGNsYXNzPVxcXCJtYXNrXFxcIiBpZD1cXFwiTWFzay1nZWxhY2Npby1jY1xcXCIgZD1cXFwiTTg3Myw1NTguMTdsMjAtMTcuMzNzNi0yMCwwLTMwLjM0LTMyLTYuMzgtMzItNi4zOC0yMi42NywxNy4zOC0zMCwzMS4zOC0xMy4zMywzNS41NS0xMy4zMywzNS41NS00LjI3LDMxLjIzLTQuMjcsNDRjMCwyMCw5LjYsMjkuMjQsOS42LDI5LjI0czEzLjc4LDE3LjI2LDI4LjIyLDExLjI2LDMxLjExLTE4LDMxLjExLTE4bDI2LTI0LjY2TDkyMSw1ODYuMTdsNi40OS0yMC4wN1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlPVxcXCIjMDAwXFxcIiBzdHJva2UtbWl0ZXJsaW1pdD1cXFwiMTBcXFwiIHN0cm9rZS13aWR0aD1cXFwiMzRcXFwiPjwvcGF0aD48L21hc2s+PGcgaWQ9XFxcIk1hc2stZ2VsYWNjaW8taVxcXCI+PG1hc2sgaWQ9XFxcIk1hc2staVxcXCI+PHBhdGggY2xhc3M9XFxcIm1hc2tcXFwiIGlkPVxcXCJNYXNrLWdlbGFjY2lvLWlzdWJcXFwiIGQ9XFxcIk05OTMsNDU0LjgyczI4LTE1LjE1LDIwLTIzLjE1LTE5LjMzLTYtMjIuNjctMy4zNC03LjMzLDIwLTcuMzMsMjBsMy4zMyw2LjQ5WlxcXCIgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlPVxcXCIjMDAwXFxcIiBzdHJva2UtbWl0ZXJsaW1pdD1cXFwiMTBcXFwiIHN0cm9rZS13aWR0aD1cXFwiMzRcXFwiPjwvcGF0aD48cGF0aCBjbGFzcz1cXFwibWFza1xcXCIgaWQ9XFxcIk1hc2stZ2VsYWNjaW8taW1haW5cXFwiIGQ9XFxcIk05NzUuMjgsNDkyLjI3LDk1OS42Nyw1MjNzLTExLjM0LDI0LjY3LTEzLjM0LDMyLjY3UzkzMS42Nyw1OTUsOTMwLjMzLDYxMSw5NDMsNjM5LjY3LDk0Myw2MzkuNjdzMjEuMzMsMi42NiwzNS4zMy02LjY3LDI4LjQ4LTMyLjg5LDI4LjQ4LTMyLjg5bDE2LjY2LTI2LjA2di03LjkxXFxcIiBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcIiMwMDBcXFwiIHN0cm9rZS1taXRlcmxpbWl0PVxcXCIxMFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIzNFxcXCI+PC9wYXRoPjwvbWFzaz48L2c+PG1hc2sgaWQ9XFxcIk1hc2stb1xcXCI+PHBhdGggY2xhc3M9XFxcIm1hc2tcXFwiIGlkPVxcXCJNYXNrLWdlbGFjY2lvLW9cXFwiIGQ9XFxcIk0xMDU2LjMzLDUyOC4zM3MtMTkuMzMsMi0yNiwzMS4zNFMxMDEzLjY3LDYzOSwxMDI3LDY0MHMyNiwzLDQwLTExLDM0LjY3LTQ0LjQ3LDM0LjY3LTQ0LjQ3bDE1LjMzLTM4czEwLTM4Ljc1LDAtNDMuMTItMjYuNjEtMTItMzQuMzEsMS40OS0xMS43NSwzNi0xMS43NSwzNi0uMzcsMzguMDksOS4xOCw0NS40MiwyNy4yMywxOS4xMSw0MS4zMiwyMCwzOC4xMy0zMS44NSwzOC4xMy0zMS44NWw1LjQzLTguMzRcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiIzAwMFxcXCIgc3Ryb2tlLW1pdGVybGltaXQ9XFxcIjEwXFxcIiBzdHJva2Utd2lkdGg9XFxcIjM0XFxcIj48L3BhdGg+PC9tYXNrPjwvZz48L2RlZnM+PC9zdmc+XCIiLCJleHBvcnQge2RlbGF5fTtcblxuY29uc3QgZGVsYXkgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQtbW9kYWwtdHdvJykuY2xhc3NMaXN0LmFkZCgnZHJvcHBpbmcnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLW1vZGFsJykuY2xhc3NMaXN0LmFkZCgnZXh0ZW5kaW5nJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1vbmUnKS5jbGFzc0xpc3QuYWRkKCdleHRPbmUnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLXR3bycpLmNsYXNzTGlzdC5hZGQoJ2V4dFR3bycpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tdGhyZWUnKS5jbGFzc0xpc3QuYWRkKCdleHRUaHJlZScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWxsVHdvJykuY2xhc3NMaXN0LmFkZCgncmV2ZWFsaW5nJylcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhJykuZm9yRWFjaChhID0+IGEuY2xhc3NMaXN0LmFkZCgncmV2ZWFsaW5nJykpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKS5mb3JFYWNoKGEgPT4gYS5jbGFzc0xpc3QuYWRkKCdyZXZlYWxpbmcnKSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc3BhbicpLmZvckVhY2goYSA9PiBhLmNsYXNzTGlzdC5hZGQoJ3JldmVhbGluZycpKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGV4dC1jb250YWluZXInKS5jbGFzc0xpc3QuYWRkKCdmYWRlJyk7XG59OyIsImV4cG9ydCB7ZW1wdHlDb250ZW50fTtcblxubGV0IGVtcHR5Q29udGVudCA9IChwYXJlbnQpID0+IHtcbiAgICAgICAgd2hpbGUgKHBhcmVudC5sYXN0RWxlbWVudENoaWxkKSB7XG4gICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5sYXN0RWxlbWVudENoaWxkKTtcbiAgICAgICAgfVxuICAgIH0iLCJpbXBvcnQgZ2Vsc3ZnIGZyb20gJy4vZ2Vsc3ZnLnN2ZydcblxuY29uc3QgYXBwZW5kaW5nTWFpbiA9ICgpID0+IHtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbmNvbnN0IGljZUJhbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuaWNlQmFsbC5jbGFzc0xpc3QuYWRkKCdiYWxsT25lJylcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChpY2VCYWxsKTtcbmNvbnN0IGljZUJhbGxUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuaWNlQmFsbFR3by5jbGFzc0xpc3QuYWRkKCdiYWxsVHdvJyk7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQoaWNlQmFsbFR3byk7XG5jb25zdCBpY2VDcmVhbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuaWNlQ3JlYW0uY2xhc3NMaXN0LmFkZCgndGV4dC1jb250YWluZXInKVxuY29uc3QgZmlyc3RMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5maXJzdExpbmUuY2xhc3NMaXN0LmFkZCgndGV4dE9uZScpXG5maXJzdExpbmUudGV4dENvbnRlbnQgPSBcIkljZSBDcmVhbVwiO1xuaWNlQ3JlYW0uYXBwZW5kQ2hpbGQoZmlyc3RMaW5lKTtcbmNvbnN0IHNlY29uZExpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnNlY29uZExpbmUudGV4dENvbnRlbnQgPSBcIlRpbWVcIjtcbnNlY29uZExpbmUuY2xhc3NMaXN0LmFkZCgndGV4dFR3bycpXG5pY2VDcmVhbS5hcHBlbmRDaGlsZChzZWNvbmRMaW5lKVxuY29udGFpbmVyLmFwcGVuZENoaWxkKGljZUNyZWFtKTtcblxuY29uc3QgaW1hZ2VXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5pbWFnZVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaW1hZ2UtY29udGFpbmVyJyk7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2VXcmFwcGVyKTtcblxuXG5jb25zdCBsZWZ0QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5sZWZ0QmFyLmNsYXNzTGlzdC5hZGQoJ2xlZnQtc2lkZS1iYXInKTtcbmNvbnN0IGxlZnRNb2RhbEZpcnN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbmxlZnRNb2RhbEZpcnN0LmNsYXNzTGlzdC5hZGQoJ2xlZnQtbW9kYWwtb25lJyk7XG5jb25zdCBsZWZ0TW9kYWxTZWNvbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmxlZnRNb2RhbFNlY29uZC5jbGFzc0xpc3QuYWRkKCdsZWZ0LW1vZGFsLXR3bycpO1xubGVmdEJhci5hcHBlbmRDaGlsZChsZWZ0TW9kYWxGaXJzdCk7XG5sZWZ0QmFyLmFwcGVuZENoaWxkKGxlZnRNb2RhbFNlY29uZCk7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQobGVmdEJhcik7XG5cbmNvbnN0IGhhbmR3cml0dGVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5oYW5kd3JpdHRlbi5jbGFzc0xpc3QuYWRkKCdoYW5kd3JpdHRlbicpO1xuZnVuY3Rpb24gY29tcG9uZW50KCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGdlbHN2ZztcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cbmhhbmR3cml0dGVuLmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChoYW5kd3JpdHRlbik7XG5cbmNvbnN0IGJ1dHRvbk1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5idXR0b25Nb2RhbC5jbGFzc0xpc3QuYWRkKCdidXR0b24tbW9kYWwnKTtcbmNvbnN0IGJ0bk9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuYnRuT25lLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1vbmUnKTtcbmNvbnN0IGxpbmtGaXJzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbmxpbmtGaXJzdC5jbGFzc0xpc3QuYWRkKCdtZW51QnRuJylcbmNvbnN0IHNwYW5GaXJzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbmxpbmtGaXJzdC5hcHBlbmRDaGlsZChzcGFuRmlyc3QpO1xuc3BhbkZpcnN0LnRleHRDb250ZW50ID0gXCJNRU5VXCJcbmJ0bk9uZS5hcHBlbmRDaGlsZChsaW5rRmlyc3QpOyBcbmNvbnN0IGJ0blR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuYnRuVHdvLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi10d28nKTtcbmNvbnN0IGxpbmtTZWNvbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5jb25zdCBzcGFuU2Vjb25kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xubGlua1NlY29uZC5hcHBlbmRDaGlsZChzcGFuU2Vjb25kKTtcbmJ0blR3by5hcHBlbmRDaGlsZChsaW5rU2Vjb25kKTsgXG5jb25zdCBidG5UaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuYnRuVGhyZWUuY2xhc3NMaXN0LmFkZCgnYnV0dG9uLXRocmVlJyk7XG5jb25zdCBsaW5rVGhpcmQ9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbmNvbnN0IHNwYW5UaGlyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbmxpbmtUaGlyZC5hcHBlbmRDaGlsZChzcGFuVGhpcmQpO1xuYnRuVGhyZWUuYXBwZW5kQ2hpbGQobGlua1RoaXJkKTtcbmJ1dHRvbk1vZGFsLmFwcGVuZENoaWxkKGJ0bk9uZSk7XG5idXR0b25Nb2RhbC5hcHBlbmRDaGlsZChidG5Ud28pO1xuYnV0dG9uTW9kYWwuYXBwZW5kQ2hpbGQoYnRuVGhyZWUpO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbk1vZGFsKTtcblxufVxuXG5cbmV4cG9ydCB7YXBwZW5kaW5nTWFpbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0IHsgYXBwZW5kaW5nTWFpbiB9IGZyb20gJy4vbWFpbi1wYWdlLWxvYWQnO1xuaW1wb3J0IHtkZWxheX0gZnJvbSAnLi9hbmltYXRpb24tbWFpbic7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7ZW1wdHlDb250ZW50fSBmcm9tICcuL2VtcHR5LWNvbnRlbnQnXG5cbmFwcGVuZGluZ01haW4oKTtcbnNldFRpbWVvdXQoZGVsYXksIDQ4MDApXG5sZXQgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51QnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgZW1wdHlDb250ZW50KGNvbnRhaW5lcik7XG59KVxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==