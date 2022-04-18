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
___CSS_LOADER_EXPORT___.push([module.id, "* { \n    margin: 0;\n    padding: 0;\n    background-color: #0f160c;\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n}\n\n\n#content {\n    display: grid;\n    grid-template-columns: 4vw 30vw 1fr 1fr 1fr 1fr;\n    grid-template-rows: 20vh 22.5vh 26.25vh 26.25vh 5vh;\n}\n\n.left-side-bar {\n    grid-area: 1 / 1 / 5 / 2;\n    display: flex;\n\n}\n\n.left-modal-one {\n    background-color: #0f160c;\n    width: 1vw;\n}\n\n.left-modal-two {\n    background-color: #d6d3d1;\n    grid-area: 1 / 1 / 5 / 2;\n    opacity: 0.5;\n    width: 6vh;\n    height: 0;\n    z-index: 1000;\n    transition: 1500ms ease-in-out;\n}\n\n.dropping {\n    height: 100vh;\n    background :linear-gradient( #ce9449 25%, #432304 100%)\n}\n\n.handwritten {\n    transition: all 1s ease;\n    transition-delay: 1s;\n    grid-column: 2/4;\n    grid-row: 1/3;\n    z-index: 999;\n}\n\n\n .handwritten .svg {\n    position: absolute;\n    height: 30vh;\n    width: 100vh;\n    z-index: 999;\n    \n}\nsvg {\n    position: absolute;\n    top: 5%;\n    left: -60%;\n    width: auto;\n    height: 12vh;\n    left: 10%;\n    z-index: 1000;   \n}\n\n.mask {\n    fill: none;\n    stroke: white;\n}\n\n\n.mask {\n    stroke-dasharray: 1000;\n    stroke-dashoffset: 1000;\n  }\n  \n  @keyframes strokeOffset {\n    to {\n      stroke-dashoffset: 0;\n    }\n  }\n  \n\n  #Mask-gelaccio-Gmain {\n    animation: strokeOffset 1s linear forwards;\n  }\n\n  #Mask-gelaccio-Gsub {\n    animation: strokeOffset 2s linear forwards 0.5s;\n  }\n\n  #Mask-gelaccio-e {\n    animation: strokeOffset 1s linear forwards 1s; \n  }\n\n  #Mask-gelaccio-l {\n    animation: strokeOffset 1s linear forwards 1.5s; \n  }\n\n  #Mask-gelaccio-a {\n    animation: strokeOffset 1s linear forwards 2s; \n  }\n\n  #Mask-gelaccio-c {\n    animation: strokeOffset 1s linear forwards 2.5s; \n  }\n\n  #Mask-gelaccio-cc {\n    animation: strokeOffset 1s linear forwards 3s; \n  }\n\n  #Mask-gelaccio-imain {\n    animation: strokeOffset 1s linear forwards 3.5s; \n  }\n\n\n  #Mask-gelaccio-o {\n    animation: strokeOffset 1s linear forwards 4.0s; \n  }\n\n  #Mask-gelaccio-isub {\n    animation: strokeOffset 2s linear forwards 4.7s; \n  }\n\n\n\n.text-container {\n    grid-area: 2 / 4 / 3 / 6;\n    align-self: center;\n    z-index: 1000;\n    font-size: 40px;\n    color: #ddcfbe;\n    opacity: 0;\n    transition: 4500ms;\n}\n\n.fade {\n    opacity: 1;\n}\n\n.image-container {\n    z-index: 1000;\n    grid-area: 2 / 2 / 5 / 4; \n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n}\n\nimg {\n    z-index: 1000;\n    grid-area: 2 / 2 / 5 / 3;\n}\n\n.button-modal {\n    grid-area: 3 / 3 / 5 / 6;\n    display: grid;\n    width: 0;\n    gap: 1vh;\n    grid-template-rows:  1fr 1fr 1fr;\n    transition: 1500ms ease-in-out;\n}\n\n.button-one, .button-two, .button-three  {\n    border-top-right-radius: 20px;\n     width: 0;\n     background: linear-gradient(#d8d5d0 50% , #be8142 100%);\n     transition: 1500ms ease-in-out;\n    \n}\n\n.button-two {\n    background-color: #be8142;\n}\n\n.button-three {\n    background-color: #432304;\n}\n\n.extending {\n    width: 100%;\n}\n\n.extOne {\n    width: 80%;\n}\n\n.extTwo {\n    width: 90%;\n}\n\n.extThree {\n    width: 100%;\n}\n\n.image-container {\n    animation: fadeIn 7s;\n    -webkit-animation: fadeIn 4.5s;\n    -moz-animation: fadeIn 4.5s;\n    -o-animation: fadeIn 4.5s;\n    -ms-animation: fadeIn 4.5s;\n  }\n  @keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  }\n  \n  @-moz-keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  }\n  \n  @-webkit-keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  }\n  \n  @-o-keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  }\n  \n  @-ms-keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  } ", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;;AAGA;IACI,aAAa;IACb,+CAA+C;IAC/C,mDAAmD;AACvD;;AAEA;IACI,wBAAwB;IACxB,aAAa;;AAEjB;;AAEA;IACI,yBAAyB;IACzB,UAAU;AACd;;AAEA;IACI,yBAAyB;IACzB,wBAAwB;IACxB,YAAY;IACZ,UAAU;IACV,SAAS;IACT,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb;AACJ;;AAEA;IACI,uBAAuB;IACvB,oBAAoB;IACpB,gBAAgB;IAChB,aAAa;IACb,YAAY;AAChB;;;CAGC;IACG,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,YAAY;;AAEhB;AACA;IACI,kBAAkB;IAClB,OAAO;IACP,UAAU;IACV,WAAW;IACX,YAAY;IACZ,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,UAAU;IACV,aAAa;AACjB;;;AAGA;IACI,sBAAsB;IACtB,uBAAuB;EACzB;;EAEA;IACE;MACE,oBAAoB;IACtB;EACF;;;EAGA;IACE,0CAA0C;EAC5C;;EAEA;IACE,+CAA+C;EACjD;;EAEA;IACE,6CAA6C;EAC/C;;EAEA;IACE,+CAA+C;EACjD;;EAEA;IACE,6CAA6C;EAC/C;;EAEA;IACE,+CAA+C;EACjD;;EAEA;IACE,6CAA6C;EAC/C;;EAEA;IACE,+CAA+C;EACjD;;;EAGA;IACE,+CAA+C;EACjD;;EAEA;IACE,+CAA+C;EACjD;;;;AAIF;IACI,wBAAwB;IACxB,kBAAkB;IAClB,aAAa;IACb,eAAe;IACf,cAAc;IACd,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,wBAAwB;IACxB,mDAAoC;IACpC,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,wBAAwB;AAC5B;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,QAAQ;IACR,QAAQ;IACR,gCAAgC;IAChC,8BAA8B;AAClC;;AAEA;IACI,6BAA6B;KAC5B,QAAQ;KACR,uDAAuD;KACvD,8BAA8B;;AAEnC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,oBAAoB;IACpB,8BAA8B;IAC9B,2BAA2B;IAC3B,yBAAyB;IACzB,0BAA0B;EAC5B;EACA;IACE,IAAI,SAAS,CAAC;IACd,MAAM,SAAS,CAAC;EAClB;;EAEA;IACE,IAAI,SAAS,CAAC;IACd,MAAM,SAAS,CAAC;EAClB;;EAEA;IACE,IAAI,SAAS,CAAC;IACd,MAAM,SAAS,CAAC;EAClB;;EAEA;IACE,IAAI,SAAS,CAAC;IACd,MAAM,SAAS,CAAC;EAClB;;EAEA;IACE,IAAI,SAAS,CAAC;IACd,MAAM,SAAS,CAAC;EAClB","sourcesContent":["* { \n    margin: 0;\n    padding: 0;\n    background-color: #0f160c;\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n}\n\n\n#content {\n    display: grid;\n    grid-template-columns: 4vw 30vw 1fr 1fr 1fr 1fr;\n    grid-template-rows: 20vh 22.5vh 26.25vh 26.25vh 5vh;\n}\n\n.left-side-bar {\n    grid-area: 1 / 1 / 5 / 2;\n    display: flex;\n\n}\n\n.left-modal-one {\n    background-color: #0f160c;\n    width: 1vw;\n}\n\n.left-modal-two {\n    background-color: #d6d3d1;\n    grid-area: 1 / 1 / 5 / 2;\n    opacity: 0.5;\n    width: 6vh;\n    height: 0;\n    z-index: 1000;\n    transition: 1500ms ease-in-out;\n}\n\n.dropping {\n    height: 100vh;\n    background :linear-gradient( #ce9449 25%, #432304 100%)\n}\n\n.handwritten {\n    transition: all 1s ease;\n    transition-delay: 1s;\n    grid-column: 2/4;\n    grid-row: 1/3;\n    z-index: 999;\n}\n\n\n .handwritten .svg {\n    position: absolute;\n    height: 30vh;\n    width: 100vh;\n    z-index: 999;\n    \n}\nsvg {\n    position: absolute;\n    top: 5%;\n    left: -60%;\n    width: auto;\n    height: 12vh;\n    left: 10%;\n    z-index: 1000;   \n}\n\n.mask {\n    fill: none;\n    stroke: white;\n}\n\n\n.mask {\n    stroke-dasharray: 1000;\n    stroke-dashoffset: 1000;\n  }\n  \n  @keyframes strokeOffset {\n    to {\n      stroke-dashoffset: 0;\n    }\n  }\n  \n\n  #Mask-gelaccio-Gmain {\n    animation: strokeOffset 1s linear forwards;\n  }\n\n  #Mask-gelaccio-Gsub {\n    animation: strokeOffset 2s linear forwards 0.5s;\n  }\n\n  #Mask-gelaccio-e {\n    animation: strokeOffset 1s linear forwards 1s; \n  }\n\n  #Mask-gelaccio-l {\n    animation: strokeOffset 1s linear forwards 1.5s; \n  }\n\n  #Mask-gelaccio-a {\n    animation: strokeOffset 1s linear forwards 2s; \n  }\n\n  #Mask-gelaccio-c {\n    animation: strokeOffset 1s linear forwards 2.5s; \n  }\n\n  #Mask-gelaccio-cc {\n    animation: strokeOffset 1s linear forwards 3s; \n  }\n\n  #Mask-gelaccio-imain {\n    animation: strokeOffset 1s linear forwards 3.5s; \n  }\n\n\n  #Mask-gelaccio-o {\n    animation: strokeOffset 1s linear forwards 4.0s; \n  }\n\n  #Mask-gelaccio-isub {\n    animation: strokeOffset 2s linear forwards 4.7s; \n  }\n\n\n\n.text-container {\n    grid-area: 2 / 4 / 3 / 6;\n    align-self: center;\n    z-index: 1000;\n    font-size: 40px;\n    color: #ddcfbe;\n    opacity: 0;\n    transition: 4500ms;\n}\n\n.fade {\n    opacity: 1;\n}\n\n.image-container {\n    z-index: 1000;\n    grid-area: 2 / 2 / 5 / 4; \n    background: url(ice-cream-shop.avif);\n    background-repeat: no-repeat;\n}\n\nimg {\n    z-index: 1000;\n    grid-area: 2 / 2 / 5 / 3;\n}\n\n.button-modal {\n    grid-area: 3 / 3 / 5 / 6;\n    display: grid;\n    width: 0;\n    gap: 1vh;\n    grid-template-rows:  1fr 1fr 1fr;\n    transition: 1500ms ease-in-out;\n}\n\n.button-one, .button-two, .button-three  {\n    border-top-right-radius: 20px;\n     width: 0;\n     background: linear-gradient(#d8d5d0 50% , #be8142 100%);\n     transition: 1500ms ease-in-out;\n    \n}\n\n.button-two {\n    background-color: #be8142;\n}\n\n.button-three {\n    background-color: #432304;\n}\n\n.extending {\n    width: 100%;\n}\n\n.extOne {\n    width: 80%;\n}\n\n.extTwo {\n    width: 90%;\n}\n\n.extThree {\n    width: 100%;\n}\n\n.image-container {\n    animation: fadeIn 7s;\n    -webkit-animation: fadeIn 4.5s;\n    -moz-animation: fadeIn 4.5s;\n    -o-animation: fadeIn 4.5s;\n    -ms-animation: fadeIn 4.5s;\n  }\n  @keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  }\n  \n  @-moz-keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  }\n  \n  @-webkit-keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  }\n  \n  @-o-keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  }\n  \n  @-ms-keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  } "],"sourceRoot":""}]);
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
    document.querySelector('.button-three').classList.add('extThree')
    document.querySelector('.text-container').classList.add('fade');
};

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
const iceCream = document.createElement('div');
iceCream.classList.add('text-container')
iceCream.textContent = 'Ice Cream Time';
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
    const element = document.createElement('div')
    element.innerHTML = (_gelsvg_svg__WEBPACK_IMPORTED_MODULE_0___default());
    return element
}
handwritten.appendChild(component())
container.appendChild(handwritten);

const buttonModal = document.createElement('div');
buttonModal.classList.add('button-modal')
const btnOne = document.createElement('div');
btnOne.classList.add('button-one');
const btnTwo = document.createElement('div');
btnTwo.classList.add('button-two');
const btnThree = document.createElement('div');
btnThree.classList.add('button-three');
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




(0,_main_page_load__WEBPACK_IMPORTED_MODULE_0__.appendingMain)();
setTimeout(_animation_main__WEBPACK_IMPORTED_MODULE_1__.delay, 4800)



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHFIQUFzQztBQUNsRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSw4Q0FBOEMsZ0JBQWdCLGlCQUFpQixnQ0FBZ0MsR0FBRyxVQUFVLG9CQUFvQixtQkFBbUIsR0FBRyxnQkFBZ0Isb0JBQW9CLHNEQUFzRCwwREFBMEQsR0FBRyxvQkFBb0IsK0JBQStCLG9CQUFvQixLQUFLLHFCQUFxQixnQ0FBZ0MsaUJBQWlCLEdBQUcscUJBQXFCLGdDQUFnQywrQkFBK0IsbUJBQW1CLGlCQUFpQixnQkFBZ0Isb0JBQW9CLHFDQUFxQyxHQUFHLGVBQWUsb0JBQW9CLGdFQUFnRSxrQkFBa0IsOEJBQThCLDJCQUEyQix1QkFBdUIsb0JBQW9CLG1CQUFtQixHQUFHLDBCQUEwQix5QkFBeUIsbUJBQW1CLG1CQUFtQixtQkFBbUIsU0FBUyxPQUFPLHlCQUF5QixjQUFjLGlCQUFpQixrQkFBa0IsbUJBQW1CLGdCQUFnQix1QkFBdUIsR0FBRyxXQUFXLGlCQUFpQixvQkFBb0IsR0FBRyxhQUFhLDZCQUE2Qiw4QkFBOEIsS0FBSyxpQ0FBaUMsVUFBVSw2QkFBNkIsT0FBTyxLQUFLLGdDQUFnQyxpREFBaUQsS0FBSywyQkFBMkIsc0RBQXNELEtBQUssd0JBQXdCLHFEQUFxRCxLQUFLLHdCQUF3Qix1REFBdUQsS0FBSyx3QkFBd0IscURBQXFELEtBQUssd0JBQXdCLHVEQUF1RCxLQUFLLHlCQUF5QixxREFBcUQsS0FBSyw0QkFBNEIsdURBQXVELEtBQUssMEJBQTBCLHVEQUF1RCxLQUFLLDJCQUEyQix1REFBdUQsS0FBSyx5QkFBeUIsK0JBQStCLHlCQUF5QixvQkFBb0Isc0JBQXNCLHFCQUFxQixpQkFBaUIseUJBQXlCLEdBQUcsV0FBVyxpQkFBaUIsR0FBRyxzQkFBc0Isb0JBQW9CLGdDQUFnQyxrRUFBa0UsbUNBQW1DLEdBQUcsU0FBUyxvQkFBb0IsK0JBQStCLEdBQUcsbUJBQW1CLCtCQUErQixvQkFBb0IsZUFBZSxlQUFlLHVDQUF1QyxxQ0FBcUMsR0FBRyw4Q0FBOEMsb0NBQW9DLGdCQUFnQiwrREFBK0Qsc0NBQXNDLFNBQVMsaUJBQWlCLGdDQUFnQyxHQUFHLG1CQUFtQixnQ0FBZ0MsR0FBRyxnQkFBZ0Isa0JBQWtCLEdBQUcsYUFBYSxpQkFBaUIsR0FBRyxhQUFhLGlCQUFpQixHQUFHLGVBQWUsa0JBQWtCLEdBQUcsc0JBQXNCLDJCQUEyQixxQ0FBcUMsa0NBQWtDLGdDQUFnQyxpQ0FBaUMsS0FBSyx1QkFBdUIsVUFBVSxXQUFXLFlBQVksV0FBVyxLQUFLLGdDQUFnQyxVQUFVLFdBQVcsWUFBWSxXQUFXLEtBQUssbUNBQW1DLFVBQVUsV0FBVyxZQUFZLFdBQVcsS0FBSyw4QkFBOEIsVUFBVSxXQUFXLFlBQVksV0FBVyxLQUFLLCtCQUErQixVQUFVLFdBQVcsWUFBWSxXQUFXLE1BQU0sT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxRQUFRLEtBQUssWUFBWSxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFFBQVEsS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFNBQVMsS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxjQUFjLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLG9CQUFvQixvQkFBb0IsT0FBTyxLQUFLLG9CQUFvQixvQkFBb0IsT0FBTyxLQUFLLG9CQUFvQixvQkFBb0IsT0FBTyxLQUFLLG9CQUFvQixvQkFBb0IsT0FBTyxLQUFLLG9CQUFvQixvQkFBb0IsOEJBQThCLGdCQUFnQixpQkFBaUIsZ0NBQWdDLEdBQUcsVUFBVSxvQkFBb0IsbUJBQW1CLEdBQUcsZ0JBQWdCLG9CQUFvQixzREFBc0QsMERBQTBELEdBQUcsb0JBQW9CLCtCQUErQixvQkFBb0IsS0FBSyxxQkFBcUIsZ0NBQWdDLGlCQUFpQixHQUFHLHFCQUFxQixnQ0FBZ0MsK0JBQStCLG1CQUFtQixpQkFBaUIsZ0JBQWdCLG9CQUFvQixxQ0FBcUMsR0FBRyxlQUFlLG9CQUFvQixnRUFBZ0Usa0JBQWtCLDhCQUE4QiwyQkFBMkIsdUJBQXVCLG9CQUFvQixtQkFBbUIsR0FBRywwQkFBMEIseUJBQXlCLG1CQUFtQixtQkFBbUIsbUJBQW1CLFNBQVMsT0FBTyx5QkFBeUIsY0FBYyxpQkFBaUIsa0JBQWtCLG1CQUFtQixnQkFBZ0IsdUJBQXVCLEdBQUcsV0FBVyxpQkFBaUIsb0JBQW9CLEdBQUcsYUFBYSw2QkFBNkIsOEJBQThCLEtBQUssaUNBQWlDLFVBQVUsNkJBQTZCLE9BQU8sS0FBSyxnQ0FBZ0MsaURBQWlELEtBQUssMkJBQTJCLHNEQUFzRCxLQUFLLHdCQUF3QixxREFBcUQsS0FBSyx3QkFBd0IsdURBQXVELEtBQUssd0JBQXdCLHFEQUFxRCxLQUFLLHdCQUF3Qix1REFBdUQsS0FBSyx5QkFBeUIscURBQXFELEtBQUssNEJBQTRCLHVEQUF1RCxLQUFLLDBCQUEwQix1REFBdUQsS0FBSywyQkFBMkIsdURBQXVELEtBQUsseUJBQXlCLCtCQUErQix5QkFBeUIsb0JBQW9CLHNCQUFzQixxQkFBcUIsaUJBQWlCLHlCQUF5QixHQUFHLFdBQVcsaUJBQWlCLEdBQUcsc0JBQXNCLG9CQUFvQixnQ0FBZ0MsMkNBQTJDLG1DQUFtQyxHQUFHLFNBQVMsb0JBQW9CLCtCQUErQixHQUFHLG1CQUFtQiwrQkFBK0Isb0JBQW9CLGVBQWUsZUFBZSx1Q0FBdUMscUNBQXFDLEdBQUcsOENBQThDLG9DQUFvQyxnQkFBZ0IsK0RBQStELHNDQUFzQyxTQUFTLGlCQUFpQixnQ0FBZ0MsR0FBRyxtQkFBbUIsZ0NBQWdDLEdBQUcsZ0JBQWdCLGtCQUFrQixHQUFHLGFBQWEsaUJBQWlCLEdBQUcsYUFBYSxpQkFBaUIsR0FBRyxlQUFlLGtCQUFrQixHQUFHLHNCQUFzQiwyQkFBMkIscUNBQXFDLGtDQUFrQyxnQ0FBZ0MsaUNBQWlDLEtBQUssdUJBQXVCLFVBQVUsV0FBVyxZQUFZLFdBQVcsS0FBSyxnQ0FBZ0MsVUFBVSxXQUFXLFlBQVksV0FBVyxLQUFLLG1DQUFtQyxVQUFVLFdBQVcsWUFBWSxXQUFXLEtBQUssOEJBQThCLFVBQVUsV0FBVyxZQUFZLFdBQVcsS0FBSywrQkFBK0IsVUFBVSxXQUFXLFlBQVksV0FBVyxNQUFNLG1CQUFtQjtBQUNsMFM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDVjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0RBQW9EOztBQUVwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FDNUJhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDZkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVGlDOztBQUVqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvREFBTTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcER0QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7Ozs7O0FDckJpRDtBQUNWO0FBQ2xCOztBQUVyQiw4REFBYTtBQUNiLFdBQVcsa0RBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZ2Vsc3ZnLnN2ZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYW5pbWF0aW9uLW1haW4uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21haW4tcGFnZS1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiaWNlLWNyZWFtLXNob3AuYXZpZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiogeyBcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYxNjBjO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNHZ3IDMwdncgMWZyIDFmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwdmggMjIuNXZoIDI2LjI1dmggMjYuMjV2aCA1dmg7XFxufVxcblxcbi5sZWZ0LXNpZGUtYmFyIHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDUgLyAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbn1cXG5cXG4ubGVmdC1tb2RhbC1vbmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYxNjBjO1xcbiAgICB3aWR0aDogMXZ3O1xcbn1cXG5cXG4ubGVmdC1tb2RhbC10d28ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZkM2QxO1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gNSAvIDI7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgd2lkdGg6IDZ2aDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgICB0cmFuc2l0aW9uOiAxNTAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5kcm9wcGluZyB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQgOmxpbmVhci1ncmFkaWVudCggI2NlOTQ0OSAyNSUsICM0MzIzMDQgMTAwJSlcXG59XFxuXFxuLmhhbmR3cml0dGVuIHtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDFzO1xcbiAgICBncmlkLWNvbHVtbjogMi80O1xcbiAgICBncmlkLXJvdzogMS8zO1xcbiAgICB6LWluZGV4OiA5OTk7XFxufVxcblxcblxcbiAuaGFuZHdyaXR0ZW4gLnN2ZyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAzMHZoO1xcbiAgICB3aWR0aDogMTAwdmg7XFxuICAgIHotaW5kZXg6IDk5OTtcXG4gICAgXFxufVxcbnN2ZyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1JTtcXG4gICAgbGVmdDogLTYwJTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGhlaWdodDogMTJ2aDtcXG4gICAgbGVmdDogMTAlO1xcbiAgICB6LWluZGV4OiAxMDAwOyAgIFxcbn1cXG5cXG4ubWFzayB7XFxuICAgIGZpbGw6IG5vbmU7XFxuICAgIHN0cm9rZTogd2hpdGU7XFxufVxcblxcblxcbi5tYXNrIHtcXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMTAwMDtcXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDEwMDA7XFxuICB9XFxuICBcXG4gIEBrZXlmcmFtZXMgc3Ryb2tlT2Zmc2V0IHtcXG4gICAgdG8ge1xcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xcbiAgICB9XFxuICB9XFxuICBcXG5cXG4gICNNYXNrLWdlbGFjY2lvLUdtYWluIHtcXG4gICAgYW5pbWF0aW9uOiBzdHJva2VPZmZzZXQgMXMgbGluZWFyIGZvcndhcmRzO1xcbiAgfVxcblxcbiAgI01hc2stZ2VsYWNjaW8tR3N1YiB7XFxuICAgIGFuaW1hdGlvbjogc3Ryb2tlT2Zmc2V0IDJzIGxpbmVhciBmb3J3YXJkcyAwLjVzO1xcbiAgfVxcblxcbiAgI01hc2stZ2VsYWNjaW8tZSB7XFxuICAgIGFuaW1hdGlvbjogc3Ryb2tlT2Zmc2V0IDFzIGxpbmVhciBmb3J3YXJkcyAxczsgXFxuICB9XFxuXFxuICAjTWFzay1nZWxhY2Npby1sIHtcXG4gICAgYW5pbWF0aW9uOiBzdHJva2VPZmZzZXQgMXMgbGluZWFyIGZvcndhcmRzIDEuNXM7IFxcbiAgfVxcblxcbiAgI01hc2stZ2VsYWNjaW8tYSB7XFxuICAgIGFuaW1hdGlvbjogc3Ryb2tlT2Zmc2V0IDFzIGxpbmVhciBmb3J3YXJkcyAyczsgXFxuICB9XFxuXFxuICAjTWFzay1nZWxhY2Npby1jIHtcXG4gICAgYW5pbWF0aW9uOiBzdHJva2VPZmZzZXQgMXMgbGluZWFyIGZvcndhcmRzIDIuNXM7IFxcbiAgfVxcblxcbiAgI01hc2stZ2VsYWNjaW8tY2Mge1xcbiAgICBhbmltYXRpb246IHN0cm9rZU9mZnNldCAxcyBsaW5lYXIgZm9yd2FyZHMgM3M7IFxcbiAgfVxcblxcbiAgI01hc2stZ2VsYWNjaW8taW1haW4ge1xcbiAgICBhbmltYXRpb246IHN0cm9rZU9mZnNldCAxcyBsaW5lYXIgZm9yd2FyZHMgMy41czsgXFxuICB9XFxuXFxuXFxuICAjTWFzay1nZWxhY2Npby1vIHtcXG4gICAgYW5pbWF0aW9uOiBzdHJva2VPZmZzZXQgMXMgbGluZWFyIGZvcndhcmRzIDQuMHM7IFxcbiAgfVxcblxcbiAgI01hc2stZ2VsYWNjaW8taXN1YiB7XFxuICAgIGFuaW1hdGlvbjogc3Ryb2tlT2Zmc2V0IDJzIGxpbmVhciBmb3J3YXJkcyA0LjdzOyBcXG4gIH1cXG5cXG5cXG5cXG4udGV4dC1jb250YWluZXIge1xcbiAgICBncmlkLWFyZWE6IDIgLyA0IC8gMyAvIDY7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMTAwMDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBjb2xvcjogI2RkY2ZiZTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogNDUwMG1zO1xcbn1cXG5cXG4uZmFkZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5pbWFnZS1jb250YWluZXIge1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gNSAvIDQ7IFxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG5pbWcge1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gNSAvIDM7XFxufVxcblxcbi5idXR0b24tbW9kYWwge1xcbiAgICBncmlkLWFyZWE6IDMgLyAzIC8gNSAvIDY7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBnYXA6IDF2aDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAgMWZyIDFmciAxZnI7XFxuICAgIHRyYW5zaXRpb246IDE1MDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmJ1dHRvbi1vbmUsIC5idXR0b24tdHdvLCAuYnV0dG9uLXRocmVlICB7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xcbiAgICAgd2lkdGg6IDA7XFxuICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2Q4ZDVkMCA1MCUgLCAjYmU4MTQyIDEwMCUpO1xcbiAgICAgdHJhbnNpdGlvbjogMTUwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICBcXG59XFxuXFxuLmJ1dHRvbi10d28ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmU4MTQyO1xcbn1cXG5cXG4uYnV0dG9uLXRocmVlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQzMjMwNDtcXG59XFxuXFxuLmV4dGVuZGluZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZXh0T25lIHtcXG4gICAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLmV4dFR3byB7XFxuICAgIHdpZHRoOiA5MCU7XFxufVxcblxcbi5leHRUaHJlZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaW1hZ2UtY29udGFpbmVyIHtcXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gN3M7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gNC41cztcXG4gICAgLW1vei1hbmltYXRpb246IGZhZGVJbiA0LjVzO1xcbiAgICAtby1hbmltYXRpb246IGZhZGVJbiA0LjVzO1xcbiAgICAtbXMtYW5pbWF0aW9uOiBmYWRlSW4gNC41cztcXG4gIH1cXG4gIEBrZXlmcmFtZXMgZmFkZUluIHtcXG4gICAgMCUge29wYWNpdHk6MDt9XFxuICAgIDEwMCUge29wYWNpdHk6MTt9XFxuICB9XFxuICBcXG4gIEAtbW96LWtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICAwJSB7b3BhY2l0eTowO31cXG4gICAgMTAwJSB7b3BhY2l0eToxO31cXG4gIH1cXG4gIFxcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAgIDAlIHtvcGFjaXR5OjA7fVxcbiAgICAxMDAlIHtvcGFjaXR5OjE7fVxcbiAgfVxcbiAgXFxuICBALW8ta2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAgIDAlIHtvcGFjaXR5OjA7fVxcbiAgICAxMDAlIHtvcGFjaXR5OjE7fVxcbiAgfVxcbiAgXFxuICBALW1zLWtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICAwJSB7b3BhY2l0eTowO31cXG4gICAgMTAwJSB7b3BhY2l0eToxO31cXG4gIH0gXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLCtDQUErQztJQUMvQyxtREFBbUQ7QUFDdkQ7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsYUFBYTs7QUFFakI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsVUFBVTtBQUNkOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osVUFBVTtJQUNWLFNBQVM7SUFDVCxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiO0FBQ0o7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7O0NBR0M7SUFDRyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZOztBQUVoQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixTQUFTO0lBQ1QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0FBQ2pCOzs7QUFHQTtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRTtNQUNFLG9CQUFvQjtJQUN0QjtFQUNGOzs7RUFHQTtJQUNFLDBDQUEwQztFQUM1Qzs7RUFFQTtJQUNFLCtDQUErQztFQUNqRDs7RUFFQTtJQUNFLDZDQUE2QztFQUMvQzs7RUFFQTtJQUNFLCtDQUErQztFQUNqRDs7RUFFQTtJQUNFLDZDQUE2QztFQUMvQzs7RUFFQTtJQUNFLCtDQUErQztFQUNqRDs7RUFFQTtJQUNFLDZDQUE2QztFQUMvQzs7RUFFQTtJQUNFLCtDQUErQztFQUNqRDs7O0VBR0E7SUFDRSwrQ0FBK0M7RUFDakQ7O0VBRUE7SUFDRSwrQ0FBK0M7RUFDakQ7Ozs7QUFJRjtJQUNJLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZixjQUFjO0lBQ2QsVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsbURBQW9DO0lBQ3BDLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGFBQWE7SUFDYix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLFFBQVE7SUFDUixRQUFRO0lBQ1IsZ0NBQWdDO0lBQ2hDLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLDZCQUE2QjtLQUM1QixRQUFRO0tBQ1IsdURBQXVEO0tBQ3ZELDhCQUE4Qjs7QUFFbkM7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSxJQUFJLFNBQVMsQ0FBQztJQUNkLE1BQU0sU0FBUyxDQUFDO0VBQ2xCOztFQUVBO0lBQ0UsSUFBSSxTQUFTLENBQUM7SUFDZCxNQUFNLFNBQVMsQ0FBQztFQUNsQjs7RUFFQTtJQUNFLElBQUksU0FBUyxDQUFDO0lBQ2QsTUFBTSxTQUFTLENBQUM7RUFDbEI7O0VBRUE7SUFDRSxJQUFJLFNBQVMsQ0FBQztJQUNkLE1BQU0sU0FBUyxDQUFDO0VBQ2xCOztFQUVBO0lBQ0UsSUFBSSxTQUFTLENBQUM7SUFDZCxNQUFNLFNBQVMsQ0FBQztFQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHsgXFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBmMTYwYztcXG59XFxuXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDR2dyAzMHZ3IDFmciAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMHZoIDIyLjV2aCAyNi4yNXZoIDI2LjI1dmggNXZoO1xcbn1cXG5cXG4ubGVmdC1zaWRlLWJhciB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyA1IC8gMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG59XFxuXFxuLmxlZnQtbW9kYWwtb25lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBmMTYwYztcXG4gICAgd2lkdGg6IDF2dztcXG59XFxuXFxuLmxlZnQtbW9kYWwtdHdvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDNkMTtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDUgLyAyO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIHdpZHRoOiA2dmg7XFxuICAgIGhlaWdodDogMDtcXG4gICAgei1pbmRleDogMTAwMDtcXG4gICAgdHJhbnNpdGlvbjogMTUwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZHJvcHBpbmcge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kIDpsaW5lYXItZ3JhZGllbnQoICNjZTk0NDkgMjUlLCAjNDMyMzA0IDEwMCUpXFxufVxcblxcbi5oYW5kd3JpdHRlbiB7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAxcztcXG4gICAgZ3JpZC1jb2x1bW46IDIvNDtcXG4gICAgZ3JpZC1yb3c6IDEvMztcXG4gICAgei1pbmRleDogOTk5O1xcbn1cXG5cXG5cXG4gLmhhbmR3cml0dGVuIC5zdmcge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMzB2aDtcXG4gICAgd2lkdGg6IDEwMHZoO1xcbiAgICB6LWluZGV4OiA5OTk7XFxuICAgIFxcbn1cXG5zdmcge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNSU7XFxuICAgIGxlZnQ6IC02MCU7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBoZWlnaHQ6IDEydmg7XFxuICAgIGxlZnQ6IDEwJTtcXG4gICAgei1pbmRleDogMTAwMDsgICBcXG59XFxuXFxuLm1hc2sge1xcbiAgICBmaWxsOiBub25lO1xcbiAgICBzdHJva2U6IHdoaXRlO1xcbn1cXG5cXG5cXG4ubWFzayB7XFxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDEwMDA7XFxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxMDAwO1xcbiAgfVxcbiAgXFxuICBAa2V5ZnJhbWVzIHN0cm9rZU9mZnNldCB7XFxuICAgIHRvIHtcXG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcXG4gICAgfVxcbiAgfVxcbiAgXFxuXFxuICAjTWFzay1nZWxhY2Npby1HbWFpbiB7XFxuICAgIGFuaW1hdGlvbjogc3Ryb2tlT2Zmc2V0IDFzIGxpbmVhciBmb3J3YXJkcztcXG4gIH1cXG5cXG4gICNNYXNrLWdlbGFjY2lvLUdzdWIge1xcbiAgICBhbmltYXRpb246IHN0cm9rZU9mZnNldCAycyBsaW5lYXIgZm9yd2FyZHMgMC41cztcXG4gIH1cXG5cXG4gICNNYXNrLWdlbGFjY2lvLWUge1xcbiAgICBhbmltYXRpb246IHN0cm9rZU9mZnNldCAxcyBsaW5lYXIgZm9yd2FyZHMgMXM7IFxcbiAgfVxcblxcbiAgI01hc2stZ2VsYWNjaW8tbCB7XFxuICAgIGFuaW1hdGlvbjogc3Ryb2tlT2Zmc2V0IDFzIGxpbmVhciBmb3J3YXJkcyAxLjVzOyBcXG4gIH1cXG5cXG4gICNNYXNrLWdlbGFjY2lvLWEge1xcbiAgICBhbmltYXRpb246IHN0cm9rZU9mZnNldCAxcyBsaW5lYXIgZm9yd2FyZHMgMnM7IFxcbiAgfVxcblxcbiAgI01hc2stZ2VsYWNjaW8tYyB7XFxuICAgIGFuaW1hdGlvbjogc3Ryb2tlT2Zmc2V0IDFzIGxpbmVhciBmb3J3YXJkcyAyLjVzOyBcXG4gIH1cXG5cXG4gICNNYXNrLWdlbGFjY2lvLWNjIHtcXG4gICAgYW5pbWF0aW9uOiBzdHJva2VPZmZzZXQgMXMgbGluZWFyIGZvcndhcmRzIDNzOyBcXG4gIH1cXG5cXG4gICNNYXNrLWdlbGFjY2lvLWltYWluIHtcXG4gICAgYW5pbWF0aW9uOiBzdHJva2VPZmZzZXQgMXMgbGluZWFyIGZvcndhcmRzIDMuNXM7IFxcbiAgfVxcblxcblxcbiAgI01hc2stZ2VsYWNjaW8tbyB7XFxuICAgIGFuaW1hdGlvbjogc3Ryb2tlT2Zmc2V0IDFzIGxpbmVhciBmb3J3YXJkcyA0LjBzOyBcXG4gIH1cXG5cXG4gICNNYXNrLWdlbGFjY2lvLWlzdWIge1xcbiAgICBhbmltYXRpb246IHN0cm9rZU9mZnNldCAycyBsaW5lYXIgZm9yd2FyZHMgNC43czsgXFxuICB9XFxuXFxuXFxuXFxuLnRleHQtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gNCAvIDMgLyA2O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgY29sb3I6ICNkZGNmYmU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IDQ1MDBtcztcXG59XFxuXFxuLmZhZGUge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uaW1hZ2UtY29udGFpbmVyIHtcXG4gICAgei1pbmRleDogMTAwMDtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDUgLyA0OyBcXG4gICAgYmFja2dyb3VuZDogdXJsKGljZS1jcmVhbS1zaG9wLmF2aWYpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG5pbWcge1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gNSAvIDM7XFxufVxcblxcbi5idXR0b24tbW9kYWwge1xcbiAgICBncmlkLWFyZWE6IDMgLyAzIC8gNSAvIDY7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBnYXA6IDF2aDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAgMWZyIDFmciAxZnI7XFxuICAgIHRyYW5zaXRpb246IDE1MDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmJ1dHRvbi1vbmUsIC5idXR0b24tdHdvLCAuYnV0dG9uLXRocmVlICB7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xcbiAgICAgd2lkdGg6IDA7XFxuICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2Q4ZDVkMCA1MCUgLCAjYmU4MTQyIDEwMCUpO1xcbiAgICAgdHJhbnNpdGlvbjogMTUwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICBcXG59XFxuXFxuLmJ1dHRvbi10d28ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmU4MTQyO1xcbn1cXG5cXG4uYnV0dG9uLXRocmVlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQzMjMwNDtcXG59XFxuXFxuLmV4dGVuZGluZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZXh0T25lIHtcXG4gICAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLmV4dFR3byB7XFxuICAgIHdpZHRoOiA5MCU7XFxufVxcblxcbi5leHRUaHJlZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaW1hZ2UtY29udGFpbmVyIHtcXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gN3M7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gNC41cztcXG4gICAgLW1vei1hbmltYXRpb246IGZhZGVJbiA0LjVzO1xcbiAgICAtby1hbmltYXRpb246IGZhZGVJbiA0LjVzO1xcbiAgICAtbXMtYW5pbWF0aW9uOiBmYWRlSW4gNC41cztcXG4gIH1cXG4gIEBrZXlmcmFtZXMgZmFkZUluIHtcXG4gICAgMCUge29wYWNpdHk6MDt9XFxuICAgIDEwMCUge29wYWNpdHk6MTt9XFxuICB9XFxuICBcXG4gIEAtbW96LWtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICAwJSB7b3BhY2l0eTowO31cXG4gICAgMTAwJSB7b3BhY2l0eToxO31cXG4gIH1cXG4gIFxcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAgIDAlIHtvcGFjaXR5OjA7fVxcbiAgICAxMDAlIHtvcGFjaXR5OjE7fVxcbiAgfVxcbiAgXFxuICBALW8ta2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAgIDAlIHtvcGFjaXR5OjA7fVxcbiAgICAxMDAlIHtvcGFjaXR5OjE7fVxcbiAgfVxcbiAgXFxuICBALW1zLWtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICAwJSB7b3BhY2l0eTowO31cXG4gICAgMTAwJSB7b3BhY2l0eToxO31cXG4gIH0gXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIGlkPVxcXCJMYXllcl8xXFxcIiBkYXRhLW5hbWU9XFxcIkxheWVyIDFcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDQwODMuODggNDMwLjM1XFxcIj48dGl0bGU+Z2VsYWNjaW88L3RpdGxlPjxnIGlkPVxcXCJnZWxhY2Npb1xcXCI+PGcgaWQ9XFxcImdlbGFjY2lvLXVuZGVybGluZVxcXCI+PGc+PHBhdGggZD1cXFwiTTEwNzcuOTQsNzA0LjUxYzQsLjEzLTEuMTQtLjkxLTUuNTItMS43NmwtNC4xNS44WlxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoLTk1LjM3IC0zMTcuNzQpXFxcIiBmaWxsPVxcXCIjY2RhOTgwXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTEwNTYuMjgsNzAxLjg2bC0xMSwuMTIsOCwuMjJjOC42OCwxLjU3LTEuMzEsMS4yMi00LjYzLDEuMTFDMTA2Mi45LDcwNC41MSwxMDUzLjkxLDcwMi4zNCwxMDU2LjI4LDcwMS44NlpcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKC05NS4zNyAtMzE3Ljc0KVxcXCIgZmlsbD1cXFwiI2NkYTk4MFxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xMDM0LjY5LDcwMC42MmMtNy0uNzQtNS4xMi4yNy0yLjIxLjgxQzEwMzMsNzAxLjExLDEwMzcuNjEsNzAxLjE2LDEwMzQuNjksNzAwLjYyWlxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoLTk1LjM3IC0zMTcuNzQpXFxcIiBmaWxsPVxcXCIjY2RhOTgwXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTU5OC4wOSw2ODQuMjNjMiwuMTEsNC4zMS4xNSw0LC4zOUM2MDQuMjgsNjg0LjMxLDYwNC43NCw2ODQuMDksNTk4LjA5LDY4NC4yM1pcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKC05NS4zNyAtMzE3Ljc0KVxcXCIgZmlsbD1cXFwiI2NkYTk4MFxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk02MDIuMDksNjg0LjYybC0xLjQyLjE5LDEuMzItLjFDNjAyLjEyLDY4NC42Nyw2MDIuMDUsNjg0LjY1LDYwMi4wOSw2ODQuNjJaXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgtOTUuMzcgLTMxNy43NClcXFwiIGZpbGw9XFxcIiNjZGE5ODBcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNNzQzLjk0LDY5Mi40NGM3LjkxLS41OCwxMi4zNS0uMjQsMTkuODItLjM1bDQuMTYsMS4xMWM4LjEtLjIxLDMuNTktLjgyLDkuNDgtMS4yNiw3LjM3Ljc5LDIzLC40LDI2LjQ1LjYyLDIuNDIuNTUtMywuNTctNC4yMy44Miw5LjQ5LS4wNyw4Ljg1LTEuMDcsMjAuNjQtLjc0bC4xOS4yOWMyOC4yMi0uNzUsNjMuOSwxLjM4LDk1LjI2LDIuMjVhNC4zNyw0LjM3LDAsMCwxLTIuMzgtLjYxYzguMjcuMzUsMTYuODUuOTQsMjUuNDgsMS40bDEzLC43MSw2LjQ1LjM0LDYuMzkuMzhjMTYuOTQsMSwzMywxLjU3LDQ2LjIsMS42Ni00LjQ3LS4zNC05LjY5LS45Mi0xNS4zMi0xLjQ3bC0xNy42Ni0xLjdjLTYtLjU2LTEyLjA3LTEuMDctMTcuNzYtMS40MnMtMTEtLjQxLTE1LjU5LS4yN2MtNi42OS0xLjE5LTE3LjE1LS44My0xOS44OC0yLjA2LTYuNDktLjU4LTEyLS44Mi0xNy4wOC0xcy05LjU5LS4yMy0xNC4xMS0uMjctOS0uMDctMTMuOTQtLjE3LTEwLjI4LS4xNS0xNi41My0uNDFjLTMuNTgtLjM0LTEuODItLjc4LTIuODMtMS4zMWwxOS44Ni4zN2MtNC0uMzYtOC4wNS0uNjMtMTIuMDctMSwyLjYyLS4xMSw3LjEyLDAsMTEuMTUuMTNzNy41OC4xOCw4LjMzLS4yNWMtOC42OSwwLTIwLS4zMi0zMS0uNzEtNS40OS0uMTktMTAuOTItLjM3LTE1LjkyLS40NnMtOS41NywwLTEzLjM3LjIxYzMuNTYuMjMsNy41NS4zMiwxMS43Mi40NHM4LjQ4LjI4LDEyLjY4LjQ5YzMuNjkuNDksOS40MSwxLDksMS40Ni0xMi4wNi4yMi0yMy4wNi0uMTItMzQuMTUtLjMzTDgwOS41OCw2ODljLTUuNzMtLjE0LTExLjYxLS4zMi0xNy43OS0uMjdzLTE0LjYtLjIxLTE1LjYyLS43MmM0LjA3LS4xLDEtLjU2LDQuMzUtLjc0LTguNzcuMjgtLjkxLDEuNzctMTMuNTcsMS4zNmwxLjY0LTEuNjhjLTIuNTMuODYtNi40LjcxLTEwLjc4LjQ3YTkwLjMzLDkwLjMzLDAsMCwwLTEzLjc2LDBjLTMuMjQtLjY5LDIuNzUtMS4wNyw5LjY5LTEuMDktNy44OC0uMzMtOC42LjY3LTE0Ljg5LjYxbDYtMS40M2MtNi43LDEuMzctMTItLjMyLTE1LjgtLjgtLjQ1LjM1LDMuMDgsMS40OC01LjMyLDEuMzYtMy42LS4yLTEuNzYtLjU2LTIuNjEtLjc3LS40Ni4zNS0zLjQ4LDEtOSwxLjA5LTEtLjQ4LDMuNjgtLjc3LDQtMS4yN2E4MS40MSw4MS40MSwwLDAsMS0xMC42Mi0uMThjLTcuNC40Ny40OC43LTQsMS4yNy0xMS4zNi0uMjUtMS4xNS0xLjY5LTUuMzQtMi42OSw4LjU1LS43NSwxOS41OC0xLjExLDI0LjE2LTEuNDgtNS40OC4xMi0xMSwuMzQtMTYuNDMuNTEsMS0uNTgtMTEuMTMtLjg4LTIuNDUtMS41Mi04LjItLjE3LTE3LjI1LS4xMS0yNi4yLjE4cy0xNy44My44MS0yNS42OCwxLjIxYzIuMjMuMTUsNS4xLjIxLDQuNjQuNTgtOC4xMi41Mi03LjIzLS4yMi04LjkxLS42LTYsLjU0LTUuMywxLjQ4LTksMi4zMy0xMi40Mi0uNC0xNC4xNC4xNi0yNC43NC0uNjhsLjY4LDFjLTcuNTEtLjUzLTguNTQsMS0xNi42Mi43MS0uNDYtLjIsMi42Mi0uNTksNS4wOS0uOS03LjEzLjU4LTYuNjItLjU0LTEzLjU2LjE1bDUuNDctMS4zNmMtNS41NC4zLTEzLjY2LDEtMTAuODQtLjA1LTkuNjUsMS41OS0yNi42NywxLjg4LTM4LjczLDMuMzRsLjc2LS45MWMtNi4xOSwxLjQzLTIzLDEuMy0yOC4zNCwyLjkybC0uOTUtLjI4LTEyLjM1LDJjLTUuNjQuMzEtMy44Mi0xLjEyLTQuMjUtLjczLTEyLjM0LDEuMTMtMjIsMS44Ny0zMCwyLjE2LTEuOSwxLjMxLTE0Ljg2LDIuNzItMjUuMTgsMy43NS0yNC45LDEuODQtNTAuNjgsNC41NS03NS44OCw4LjQxYTY1MC44Nyw2NTAuODcsMCwwLDAtNzIuMjIsMTVjLTYuNzcsMS42Mi0xNS43LDUuMzEtMjMuODcsOC4xOSw1LjE1LTEuMjgsNy45Mi0yLjEzLDEwLjY3LTNzNS40OS0xLjY4LDEwLjU0LTIuOTVhNjYuMzgsNjYuMzgsMCwwLDEsOS4xMS0xLjE5YzIuNTctLjE1LDUtLjE4LDguMzktLjU1bC0zLjU1LS4yMWE0NS45Miw0NS45MiwwLDAsMSw4LjQyLTIsMzEuOCwzMS44LDAsMCwwLDYuNzktMS42OWwwLDEuNmMyLjcyLTEuMzYsMTAuMS0yLjA3LDEzLjE2LTIuMmwyLjUtMS41NGM2LjY1LS41NywxMS0xLDEzLjEzLS4zM2wtLjc5LS44OGMyLjU1LjExLDI1LjMtMy44MiwxNy43Mi0xYTM4Ljg4LDM4Ljg4LDAsMCwxLDcuNzUtMS42OWwuNzcuODljNi0xLDEyLjczLTIuMDYsMTQuNTUtMS42OWExNC44OCwxNC44OCwwLDAsMC01LjMzLDEuNzVjMTIuNzktMS40NiwxNC4wNi0yLjM4LDE1LTMuMzNzMS40Mi0xLjkxLDEyLjc5LTMuMTRsLS4xOS42Nyw1LjctMS4yNyw2LjE0LjIxYzgtMy4wNSwzMi0yLjY4LDQ1LjY5LTVhODguNzksODguNzksMCwwLDEsOS42My0uMzNjMy43NywwLDguMTUsMCwxMy4yOS0uNDZsLS43NC0uOTRjNC4xOS4yLDE0LS4xLDIzLjgyLS4yNHMxOS41MS4xMSwyMy40NiwxYzcuNzYtMS4yMy0uODQtLjE2LS43MS0xLDE1LjE5LTEuOTEsMTYuMzMtLjUxLDI0LjM2LS4yOSw5LjM3LS45My03LjIsMC0yLjE5LTEsMTQuNDMuMDcsMTEuNjMtMS43NiwyOS40NS0xLjk0LDEuNzkuNDctNC41Ny42LTYuMzksMS4wNUM1OTYuMDUsNjkzLDYxOS40MSw2OTMsNjM4LDY5Mi4wOWMxMC42Ni4xMiwyMy44Ni4wOCwzNy41LDBzMjcuNzUuMyw0MC4yLjYybC40Ni0uMzZjMTAuMzUuOTIsMjEuNTcuMTQsMzMuNjYuNThaXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgtOTUuMzcgLTMxNy43NClcXFwiIGZpbGw9XFxcIiNjZGE5ODBcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNODkzLDY4Ny41bC0xLjk0LTEtMTEuNDYsMEM4ODQuMTgsNjg3LjQzLDg4Ni42MSw2ODcsODkzLDY4Ny41WlxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoLTk1LjM3IC0zMTcuNzQpXFxcIiBmaWxsPVxcXCIjY2RhOTgwXFxcIj48L3BhdGg+PHBvbHlnb24gcG9pbnRzPVxcXCI3OTUuMDIgMzcyLjE5IDgwMS4wMiAzNzIuMTIgNzkxLjM0IDM3MS42NiA3OTUuMDIgMzcyLjE5XFxcIiBmaWxsPVxcXCIjY2RhOTgwXFxcIj48L3BvbHlnb24+PHBvbHlnb24gcG9pbnRzPVxcXCI2NTAuMSAzNjYuNjEgNjUxLjU4IDM2Ni43NSA2NjIuNDkgMzY2LjQ0IDY3My40MSAzNjYuMjYgNjYxLjc1IDM2Ni4zNyA2NTAuMSAzNjYuNjFcXFwiIGZpbGw9XFxcIiNjZGE5ODBcXFwiPjwvcG9seWdvbj48cGF0aCBkPVxcXCJNNTk4Ljg2LDY4My4zNWMyLjQ4LS41Myw2LjA4LS40Niw4LjY2LS44NmwtMTAuMTQuNzhaXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgtOTUuMzcgLTMxNy43NClcXFwiIGZpbGw9XFxcIiNjZGE5ODBcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNNTAwLjI2LDY4NS40OWMtMy43NSwxLjc5LTcuNjguNTQtMi40NiwxLjU0QzUwMy44Niw2ODYuMzQsNDk4LjU1LDY4Ni4xMiw1MDAuMjYsNjg1LjQ5WlxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoLTk1LjM3IC0zMTcuNzQpXFxcIiBmaWxsPVxcXCIjY2RhOTgwXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTQ3Ny41Nyw2ODkuMzZhNTAuMjYsNTAuMjYsMCwwLDAsNy4zMi0uOTRDNDgwLjIyLDY4OC4wOCw0ODAuMTMsNjg4Ljg3LDQ3Ny41Nyw2ODkuMzZaXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgtOTUuMzcgLTMxNy43NClcXFwiIGZpbGw9XFxcIiNjZGE5ODBcXFwiPjwvcGF0aD48L2c+PC9nPjxwYXRoIG1hc2s9XFxcInVybCgjTWFzay1HKVxcXCIgaWQ9XFxcImdlbGFjY2lvLUdcXFwiIGQ9XFxcIk0xNzQuODcsNjc4LjIxYTU5LDU5LDAsMCwxLTM2Ljc4LTEyLjdxLTE2LjU2LTEyLjcxLTI2LjQ5LTM2Ljh0LTkuOTMtNTguMTFhMjY2LjIxLDI2Ni4yMSwwLDAsMSw4LjgzLTY3LjE0LDMzNCwzMzQsMCwwLDEsMjQuMDktNjQuNzgsMjkxLjE1LDI5MS4xNSwwLDAsMSwzNS4xMy01NS4wOXExOS44Ni0yNC4zMSw0MS43NS0zOC4zMXQ0NC0xNHExNS40NSwwLDI0LjY0LDcuMWEzOS42MSwzOS42MSwwLDAsMSwxMy4yNSwxOC41MSw3Mi40MSw3Mi40MSwwLDAsMSw0LDI0LjMyLDEwMC40MiwxMDAuNDIsMCwwLDEtNC42LDI5LjkxcS00LjU5LDE0Ljg1LTEyLjMyLDI0Ljc1dC0xNi45Miw5LjlBMTEuOCwxMS44LDAsMCwxLDI1Niw0NDNxLTMuNDktMi43OS02LjQ0LTEwLjExLDUuMTUtNC4zMSwxMi0xNS4yOGExNDUuNTYsMTQ1LjU2LDAsMCwwLDExLjk1LTI0LjMycTUuMTUtMTMuMzMsNS4xNS0yNC4xYzAtNi0xLjYtMTEtNC43OC0xNS4wN3MtOC40Ni02LTE1LjgyLTZxLTE2LjU1LDAtMzMuODQsMTQuNjN0LTMzLjEsMzlhMzU2LjgxLDM1Ni44MSwwLDAsMC0yOC43LDU0LjQ1LDM3NC43OSwzNzQuNzksMCwwLDAtMjAuMjMsNjEuMzQsMjU3Ljk0LDI1Ny45NCwwLDAsMC03LjM2LDU5LjE4cTAsMzkuMTcsMTQuMzUsNjEuMTJ0MzQuOTUsMjJxMTQuNywwLDI3LjU4LTExLjYydDIyLjYzLTMwLjM0YTIwMC44MSwyMDAuODEsMCwwLDAsMTUuNjMtNDAuNjgsMjI3Ljc5LDIyNy43OSwwLDAsMCw3LjM2LTQyLjYxLDE2OS4wNiwxNjkuMDYsMCwwLDAtMTkuODctMy42NiwxNjIuODgsMTYyLjg4LDAsMCwwLTE4Ljc2LTEuMDhjLTMuNjcsMC03LjQyLjA4LTExLjIyLjIycy03LjkuMjEtMTIuMzIuMjFRMTk4LDUxNS45NSwyMDUsNTA5Ljd0MTcuNjYtNi4yNGE2NC41Myw2NC41MywwLDAsMSwyMi4yNSw0LjA5cTExLjIyLDQuMDksMjIuNDQsOC44MmExNTQuNTgsMTU0LjU4LDAsMCwwLDIxLjE1LDcuMzJsLTMuMzEsMTMuNzdxLTYuNjIsMjIuODEtMTAuODUsMzguNzR0LTYuNjIsMjcuMzNBMTY1Ljc1LDE2NS43NSwwLDAsMCwyNjQuNjIsNjI0cS0uNzQsOS0uNzMsMTcuNjR0LjM3LDE3LjY1cS4zNiw5LC43MywyMC42Ni05LjE5LTIuMTYtMTQuMzQtNy4zMmEyNi4zMiwyNi4zMiwwLDAsMS03LTEyLjQ4LDU5LjY3LDU5LjY3LDAsMCwxLTEuODQtMTQuNjNxMC0zLC4xOC02YTQzLjY3LDQzLjY3LDAsMCwxLC45Mi02LjQ1LDEyNi4yNiwxMjYuMjYsMCwwLDEtMjkuNzksMzIuNDlBNjIuMTksNjIuMTksMCwwLDEsMTc0Ljg3LDY3OC4yMVpcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKC05NS4zNyAtMzE3Ljc0KVxcXCIgZmlsbD1cXFwiI2M2OWM2ZFxcXCIgc3Ryb2tlPVxcXCIjYzY5YzZkXFxcIiBzdHJva2UtbWl0ZXJsaW1pdD1cXFwiMTBcXFwiIHN0cm9rZS13aWR0aD1cXFwiNFxcXCI+PC9wYXRoPjxwYXRoIG1hc2s9XFxcInVybCgjTWFzay1lKVxcXCIgaWQ9XFxcImdlbGFjY2lvLWVcXFwiIGQ9XFxcIk0zNDMuNzEsNjU5LjdxLTIzLjE4LDAtMzUuMzItMTQuNjN0LTEyLjEzLTM2LjU5cTAtMTkuMzcsOC4yNy00MC42N2ExNjguNDUsMTY4LjQ1LDAsMCwxLDIyLjI2LTQwLDEzNy43NSwxMzcuNzUsMCwwLDEsMzAuNzEtMzAuNTZxMTYuNzQtMTEuODQsMzMuMjktMTEuODRhMzAuNjcsMzAuNjcsMCwwLDEsMTcuNDcsNS42cTguMjgsNS41OSw4LjI4LDIyLjM4YTYwLjc3LDYwLjc3LDAsMCwxLTguMjgsMzAuNzcsOTQsOTQsMCwwLDEtMjEuNywyNS42MUExMjIuMTgsMTIyLjE4LDAsMCwxLDM1Ni43Nyw1ODhhMTExLjEzLDExMS4xMywwLDAsMS0zMi41Niw4LjgyYy0uMjUsMS43Mi0uNDksMy40NC0uNzMsNS4xN2E1MC4yLDUwLjIsMCwwLDAtLjM3LDYuODgsNjEuNjUsNjEuNjUsMCwwLDAsLjkyLDkuMjYsNDIuNTQsNDIuNTQsMCwwLDAsMy42OCwxMS42MiwyMy43MiwyMy43MiwwLDAsMCw4LjY0LDkuNjhxNS44OCwzLjg3LDE1LjQ1LDMuODcsMTUuNDUsMCwzMS4wOC0xMC4zMmExMjguODYsMTI4Ljg2LDAsMCwwLDI5LjI1LTI3LjM0QTE3MS42NiwxNzEuNjYsMCwwLDAsNDM0LjkzLDU2OGw2LjI2LDZhMTY1LjkyLDE2NS45MiwwLDAsMS0yNS4zOCw0NXEtMTUuNDUsMTkuMTUtMzQsMjkuOTFUMzQzLjcxLDY1OS43Wm0tMTYuMTktNzYuMThxOS41Ny0yLjE2LDIxLjcxLTguODNhMTE5LjQ2LDExOS40NiwwLDAsMCwyMy4xNy0xNi43OCw5Ny44NCw5Ny44NCwwLDAsMCwxOC4yMS0yMi4xNyw0Ny40Niw0Ny40NiwwLDAsMCw3LjE3LTI0LjUzYzAtMy4xNi0uNDktNS40NS0xLjQ3LTYuODlzLTIuNy0yLjE1LTUuMTUtMi4xNXEtOC44NCwwLTE4LjIxLDcuNTNhMTEwLjY4LDExMC42OCwwLDAsMC0xOC4zOSwxOS4zNywxNTMuNTIsMTUzLjUyLDAsMCwwLTE2LDI2LjI1QTE4My44MSwxODMuODEsMCwwLDAsMzI3LjUyLDU4My41MlpcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKC05NS4zNyAtMzE3Ljc0KVxcXCIgZmlsbD1cXFwiI2M2OWM2ZFxcXCIgc3Ryb2tlPVxcXCIjYzY5YzZkXFxcIiBzdHJva2UtbWl0ZXJsaW1pdD1cXFwiMTBcXFwiIHN0cm9rZS13aWR0aD1cXFwiNFxcXCI+PC9wYXRoPjxwYXRoIG1hc2s9XFxcInVybCgjTWFzay1sKVxcXCIgaWQ9XFxcImdlbGFjY2lvLWxcXFwiIGQ9XFxcIk00NTcuNzQsNjUzLjY3cS0xNi45MiwwLTIzLjczLTEzLjM0dC02LjgtMzEuODVxMC0yMS4wOCw2LjYyLTQ5LjVhNTg5Ljc2LDU4OS43NiwwLDAsMSwxNy40Ny01OS42MXExMC44NC0zMS4yLDIzLjkxLTYxLjEyVDUwMS4zMywzODRxMTMuMDUtMjQuMzEsMjQuMjgtMzguNzR0MTcuODQtMTQuNDJxNC40MSwwLDcuNTQsNS42QTUxLjkzLDUxLjkzLDAsMCwxLDU1NiwzNTBhNjQuNTQsNjQuNTQsMCwwLDEsMS44NCwxNC40MnEwLDExLjYzLTUsMzAuMzVhMzY2LjI4LDM2Ni4yOCwwLDAsMS0xNCw0MS4zMiw0ODYuNDcsNDg2LjQ3LDAsMCwxLTIxLjM0LDQ2LDQzNS4xNSw0MzUuMTUsMCwwLDEtMjcsNDQuNzcsMjE2LjMxLDIxNi4zMSwwLDAsMS0zMS42NCwzNi44cS0xLjQ3LDEwLjc1LTIuNzYsMjEuNTJBMTY3LDE2NywwLDAsMCw0NTQuOCw2MDVxMCwxNS45Myw0LjIzLDIzLjQ2VDQ3MC42MSw2MzZxOS41NywwLDE5LjMyLTEwLjMzYTEzMi4xMSwxMzIuMTEsMCwwLDAsMTguNTctMjZBMjYyLjU5LDI2Mi41OSwwLDAsMCw1MjQsNTY3LjE2bDcuNzMsNS4xN3EtMTUuNDUsMzcuNDQtMzQuMjEsNTkuMzlUNDU3Ljc0LDY1My42N1ptNi42Mi0xMTIuNzZhMjc5LjY5LDI3OS42OSwwLDAsMCwyNC4yOC0zNC40NHExMS40LTE4LjkzLDIxLjE1LTM5dDE3LjEtMzguNzRhMzMwLjc2LDMzMC43NiwwLDAsMCwxMS40MS0zMy41N3E0LTE0Ljg1LDQuNDEtMjMuNDZhNi4xLDYuMSwwLDAsMC0uNzMtM3EtMywwLTkuNzUsMTAuMTFhMzAwLjUxLDMwMC41MSwwLDAsMC0xNS44MiwyNy4zM3EtOSwxNy4yMi0xOC41OCwzOS42VDQ3OS40NCw0OTIuN1E0NzAuNjIsNTE3LjIzLDQ2NC4zNiw1NDAuOTFaXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgtOTUuMzcgLTMxNy43NClcXFwiIGZpbGw9XFxcIiNjNjljNmRcXFwiIHN0cm9rZT1cXFwiI2M2OWM2ZFxcXCIgc3Ryb2tlLW1pdGVybGltaXQ9XFxcIjEwXFxcIiBzdHJva2Utd2lkdGg9XFxcIjRcXFwiPjwvcGF0aD48cGF0aCBtYXNrPVxcXCJ1cmwoI01hc2stYSlcXFwiIGlkPVxcXCJnZWxhY2Npby1hXFxcIiBkPVxcXCJNNTM1LDY2MXEtMTEuNzgsMC0yMC40MS05LjI1VDUwNS45Miw2MjRxMC0xNS41LDUuODktMzMuMTVBMTc3LjI2LDE3Ny4yNiwwLDAsMSw1MjgsNTU2YTE4Ni4xOSwxODYuMTksMCwwLDEsMjMuNTUtMzEuNDIsMTIyLDEyMiwwLDAsMSwyOC4xNC0yMi44MXExNC45LTguNjEsMjkuNjEtOC42MSwxNS40NSwwLDI1LjkzLDkuMjV0MTAuNDksMjQuMzJxMCwxMS42My02LjI2LDE2LjM2dC0xNS40NSwzcS43NC0zLjQ0LDEuMjktNy41M2E1OS4yLDU5LjIsMCwwLDAsLjU1LTgsMzYuMzEsMzYuMzEsMCwwLDAtMy4zMS0xNS45M3EtMy4zMS02Ljg4LTEyLjg3LTYuODktMTAuMywwLTIxLDguMThhMTA4LjQ0LDEwOC40NCwwLDAsMC0yMC42LDIxLjUyLDE4Mi4yMSwxODIuMjEsMCwwLDAtMTcuNjYsMjkuMjcsMTk0LjQ0LDE5NC40NCwwLDAsMC0xMi4xNCwzMS40MnEtNC40MSwxNS41LTQuNDEsMjcuNTUsMCwxNC42NCw5LjIsMTQuNjMsOC40NSwwLDE4LjU3LTkuNDdhMTYzLDE2MywwLDAsMCwyMC42LTI0LjFxMTAuNDktMTQuNjIsMjAtMjkuOTF0MTYuNTUtMjYuOTFjMS0xLjQzLDEuODQtMi4xNSwyLjU4LTIuMTVhNTguMzgsNTguMzgsMCwwLDEsNS44OCwxLjk0LDI3LjY4LDI3LjY4LDAsMCwxLDcuMzYsNC4wOSw4LjI5LDguMjksMCwwLDEsMy4zMSw2Ljg5cTAsNC4zMS0zLjMxLDExbC03LjM2LDE0Ljg1cS00LDguMTgtNy4zNSwxNi4zNmE0Mi4yNCw0Mi4yNCwwLDAsMC0zLjMyLDE1LjkyLDIzLjgyLDIzLjgyLDAsMCwwLDIuNzYsMTEsOS4zOSw5LjM5LDAsMCwwLDksNS4zOHE5LjE4LDAsMjUuMTktMTUuNzFUNjg2LjE3LDU2OGw1Ljg4LDYuODlhMTc2LjY4LDE3Ni42OCwwLDAsMS0yMC43OCw0MC44OXEtMTIuMzMsMTcuNjYtMjUuOTMsMjcuNzZ0LTI3LjIyLDEwLjExcS0xNC43MywwLTIxLjcxLTEwLjU0YTQ1Ljg1LDQ1Ljg1LDAsMCwxLTcuNzItMjMsMjMuODEsMjMuODEsMCwwLDEsLjE4LTIuOCwyMy42NCwyMy42NCwwLDAsMCwuMTktMi43OVE1NzQsNjM2LjQ1LDU2MS40Nyw2NDguNzNUNTM1LDY2MVpcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKC05NS4zNyAtMzE3Ljc0KVxcXCIgZmlsbD1cXFwiI2M2OWM2ZFxcXCIgc3Ryb2tlPVxcXCIjYzY5YzZkXFxcIiBzdHJva2UtbWl0ZXJsaW1pdD1cXFwiMTBcXFwiIHN0cm9rZS13aWR0aD1cXFwiNFxcXCI+PC9wYXRoPjxwYXRoIG1hc2s9XFxcInVybCgjTWFzay1jKVxcXCIgaWQ9XFxcImdlbGFjY2lvLWNcXFwiIGQ9XFxcIk03MTguNTQsNjY0Ljg3cS0xOC43NiwwLTMwLjktMTR0LTEyLjE0LTQyLjRhMTIyLjksMTIyLjksMCwwLDEsNy4xNy00MS4zMiwxNDUsMTQ1LDAsMCwxLDE5LTM2LjU4cTExLjc2LTE2LjM3LDI2LjExLTI1LjgzdDI5LjA2LTkuNDdxMTUuNDUsMCwyMS44OSw5LjQ3YTM2LjY4LDM2LjY4LDAsMCwxLDYuNDQsMjEuMDksNTQuNzUsNTQuNzUsMCwwLDEtNSwyMy4yNHEtNSwxMC43Ny0xMy40MywxMC43Ni03LDAtMTEuNC03Ljc0LDQuNDEtMyw4LjQ2LTEyLjA2YTUwLDUwLDAsMCwwLDQuMDUtMjAuNjZjMC0yLjg2LS41LTUtMS40Ny02LjQ1cy0zLTIuMTUtNS44OS0yLjE1cS05LjU3LDAtMTkuNjgsOS45dC0xOC45NCwyNS42MWExNzcuNjksMTc3LjY5LDAsMCwwLTE0LjM1LDMyLjkyQTEwNiwxMDYsMCwwLDAsNzAyLDYxMS40OWE0Ny42NSw0Ny42NSwwLDAsMCw1LjUyLDIyLjgycTUuNTIsMTAuMzIsMjEsMTAuMzMsMTQuMzQsMCwyOS4yNC05LjQ3dDI4LjE0LTI2LjY5cTEzLjI0LTE3LjIxLDIxLTQwLjg5bDYuNjIsNi44OWExNjcuMjgsMTY3LjI4LDAsMCwxLTI0LjA5LDQ2LjI3UTc3NC4wOCw2NDEuMTksNzU1LjUsNjUzVDcxOC41NCw2NjQuODdaXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgtOTUuMzcgLTMxNy43NClcXFwiIGZpbGw9XFxcIiNjNjljNmRcXFwiIHN0cm9rZT1cXFwiI2M2OWM2ZFxcXCIgc3Ryb2tlLW1pdGVybGltaXQ9XFxcIjEwXFxcIiBzdHJva2Utd2lkdGg9XFxcIjRcXFwiPjwvcGF0aD48cGF0aCBtYXNrPVxcXCJ1cmwoI01hc2stY2MpXFxcIiBpZD1cXFwiZ2VsYWNjaW8tY2NcXFwiIGQ9XFxcIk04MzkuOTIsNjY0Ljg3cS0xOC43NiwwLTMwLjktMTR0LTEyLjE0LTQyLjRhMTIyLjY2LDEyMi42NiwwLDAsMSw3LjE4LTQxLjMyQTE0NS4yNiwxNDUuMjYsMCwwLDEsODIzLDUzMC41OHExMS43OC0xNi4zNywyNi4xMi0yNS44M3QyOS4wNi05LjQ3cTE1LjQ1LDAsMjEuODgsOS40N2EzNi42OCwzNi42OCwwLDAsMSw2LjQ0LDIxLjA5LDU0Ljc0LDU0Ljc0LDAsMCwxLTUsMjMuMjRxLTUsMTAuNzctMTMuNDMsMTAuNzYtNywwLTExLjQtNy43NCw0LjQxLTMsOC40Ni0xMi4wNmE1MC4xNyw1MC4xNywwLDAsMCw0LTIwLjY2cTAtNC4yOS0xLjQ3LTYuNDV0LTUuODgtMi4xNXEtOS41NywwLTE5LjY4LDkuOXQtMTguOTUsMjUuNjFhMTc3LjY1LDE3Ny42NSwwLDAsMC0xNC4zNCwzMi45MiwxMDYsMTA2LDAsMCwwLTUuNTIsMzIuMjgsNDcuNjUsNDcuNjUsMCwwLDAsNS41MiwyMi44MnE1LjUsMTAuMzIsMjEsMTAuMzMsMTQuMzUsMCwyOS4yNS05LjQ3dDI4LjE0LTI2LjY5cTEzLjI1LTE3LjIxLDIxLTQwLjg5bDYuNjMsNi44OWExNjcuMzEsMTY3LjMxLDAsMCwxLTI0LjEsNDYuMjdRODk1LjQ2LDY0MS4xOSw4NzYuODksNjUzVDgzOS45Miw2NjQuODdaXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgtOTUuMzcgLTMxNy43NClcXFwiIGZpbGw9XFxcIiNjNjljNmRcXFwiIHN0cm9rZT1cXFwiI2M2OWM2ZFxcXCIgc3Ryb2tlLW1pdGVybGltaXQ9XFxcIjEwXFxcIiBzdHJva2Utd2lkdGg9XFxcIjRcXFwiPjwvcGF0aD48cGF0aCBtYXNrPVxcXCJ1cmwoI01hc2staSlcXFwiIGlkPVxcXCJnZWxhY2Npby1pXFxcIiBkPVxcXCJNOTQ4LjgsNjUzLjI1cS0xNS40NSwwLTIzLjE4LTExdC03LjcyLTI2LjlxMC05LjksMi45NC0yNWEyNzUuNzUsMjc1Ljc1LDAsMCwxLDguMjgtMzEuNjMsMjQ5LjM4LDI0OS4zOCwwLDAsMSwxMi4zMi0zMS4yMXE3LTE0LjYyLDE0LjktMjMuODlUOTcyLDQ5NC40MmExMC4xLDEwLjEsMCwwLDEsNy4xOCwzYzIuMDgsMiwzLjEyLDQuODksMy4xMiw4LjYxcy0xLjksOS4zMy01LjcsMTYuNzktOC4yOCwxNi4xNC0xMy40MywyNmEyNDcuMiwyNDcuMiwwLDAsMC0xMy40MiwzMC43N0E5MC4zOCw5MC4zOCwwLDAsMCw5NDQsNjEwLjJxMCwxNC4yLDQuNDEsMTguOTR0MTIuODcsNC43NHExMi41MSwwLDI3LTE0LjY0VDEwMTguNjksNTY4bDQuNzgsNnEtMTIuMTMsMzcuODgtMzIuMTksNTguNTNUOTQ4LjgsNjUzLjI1Wm00My43Ny0xOTUuNDJhMTkuODUsMTkuODUsMCwwLDEtMTItMy44N3EtNS4zNC0zLjg3LTUuMzQtMTEuNjIsMC0xMC4zMyw5LjM4LTE3LjQzdDE5LjMxLTcuMWExNS4zNywxNS4zNywwLDAsMSwxMC4zLDMuNDRxNC4wNSwzLjQ1LDQuMDUsMTEuNjIsMCw5LTguMDksMTdUOTkyLjU3LDQ1Ny44M1pcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKC05NS4zNyAtMzE3Ljc0KVxcXCIgZmlsbD1cXFwiI2M2OWM2ZFxcXCIgc3Ryb2tlPVxcXCIjYzY5YzZkXFxcIiBzdHJva2UtbWl0ZXJsaW1pdD1cXFwiMTBcXFwiIHN0cm9rZS13aWR0aD1cXFwiNFxcXCI+PC9wYXRoPjxwYXRoIG1hc2s9XFxcInVybCgjTWFzay1vKVxcXCIgaWQ9XFxcImdlbGFjY2lvLW9cXFwiIGQ9XFxcIk0xMDM0LjUsNjU0LjU0cS0xNi4xOCwwLTIyLjQzLTEyLjI3YTYwLjI0LDYwLjI0LDAsMCwxLTYuMjYtMjcuNzYsMTExLjQ0LDExMS40NCwwLDAsMSwzLjY4LTI4LDEzNC44NywxMzQuODcsMCwwLDEsOS45My0yNi42OSw3Ny44MSw3Ny44MSwwLDAsMSwxNC0yMC4yM3E3LjcyLTcuNzQsMTUuODItNy43NGExNywxNywwLDAsMSw1LjMzLDEuMDcsMTAuNDYsMTAuNDYsMCwwLDEsNC42LDIuOCw4Mi45Myw4Mi45MywwLDAsMC04LjY0LDE0LjY0LDE5Mi4zNCwxOTIuMzQsMCwwLDAtOC40NiwyMC40NCwxODIuNTgsMTgyLjU4LDAsMCwwLTYuMjYsMjEuOTUsOTQuMzYsOTQuMzYsMCwwLDAtMi4zOSwyMHEwLDkuOSwyLjk0LDE1LjQ5dDkuNTcsNS42cTcuMzUsMCwxNy40Ny05LjI2QTEzMS43NiwxMzEuNzYsMCwwLDAsMTA4Mi42OSw2MDIsNzEuNjgsNzEuNjgsMCwwLDEsMTA2Niw1NzUuMTJxLTUuMzQtMTUuMjctNS4zNC0zNC42NWE3MS43Nyw3MS43NywwLDAsMSw0LjA1LTIyLjgxLDQ5LjUzLDQ5LjUzLDAsMCwxLDEyLjUtMjAuMjNxOC40Ni04LjE2LDIyLjA4LTguMTgsMTUuNDUsMCwyMS41MSwxMC4xMnQ2LjA3LDI0LjMycTAsMTUuOTMtNy4xNywzNS45NGEyNjMuNywyNjMuNywwLDAsMS0xNy4xLDM4LjA5LDIwLDIwLDAsMCwwLDExLjQsMy40NHE1LjUyLDAsMTMuMjQtM0E0NC4xNiw0NC4xNiwwLDAsMCwxMTQyLjEsNTg4cTcuMTctNy4xMSwxMS41OS0xOC43M2w1Ljg4LDUuMTdxLTcuNzIsMjEuMDktMjEuMTUsMzAuNzd0LTI1LjkzLDkuNjlhNDMuMzUsNDMuMzUsMCwwLDEtOS41Ny0xLjA4LDM0LjQ1LDM0LjQ1LDAsMCwxLTguODItMy4yMywxNTEuNzUsMTUxLjc1LDAsMCwxLTI4LjE0LDMxUTEwNTAuMzIsNjU0LjU0LDEwMzQuNSw2NTQuNTRabTU2LjY1LTY1LjQzYTE2OC42MywxNjguNjMsMCwwLDAsMTUuMjctMzIuNDlxNi4wNy0xNy40NSw2LjA3LTMyLjA3LDAtMTAuNzUtMi43Ni0xNS43MXQtNy41NC00Ljk1cS03LjM3LDAtMTQuNzIsMTEuODR0LTcuMzUsMjkuOTFhMTA5LjI5LDEwOS4yOSwwLDAsMCwyLjc2LDIzUTEwODUuNjQsNTgxLjM2LDEwOTEuMTUsNTg5LjExWlxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoLTk1LjM3IC0zMTcuNzQpXFxcIiBmaWxsPVxcXCIjYzY5YzZkXFxcIiBzdHJva2U9XFxcIiNjNjljNmRcXFwiIHN0cm9rZS1taXRlcmxpbWl0PVxcXCIxMFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCI0XFxcIj48L3BhdGg+PC9nPjxkZWZzPjxnIGlkPVxcXCJnZWxhY2Npby1tYXNrc1xcXCI+PHBvbHlsaW5lIGlkPVxcXCJNYXNrLWdlbGFjY2lvLXVuZGVybGluZVxcXCIgcG9pbnRzPVxcXCIxNzQuOTQgNDEzLjkzIDI2Ny4yOCAzODkuMDYgMzcyLjMgMzgxLjI2IDQ2MC44NyAzNzUuOTMgNTUyLjk3IDM3NS45MyA2MjQuMyAzNzUuOTMgNzAzLjYzIDM3NS45MyA3NzAuNDkgMzc1LjkzIDg3MC45NyAzODEuMjYgOTQ3LjgyIDM4My40NCA5OTQuMyAzODcuNzhcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiIzAwMFxcXCIgc3Ryb2tlLW1pdGVybGltaXQ9XFxcIjEwXFxcIiBzdHJva2Utd2lkdGg9XFxcIjM0XFxcIj48L3BvbHlsaW5lPjxnIGlkPVxcXCJNYXNrLWdlbGFjY2lvLUdcXFwiPjxtYXNrIGlkPVxcXCJNYXNrLUdcXFwiPjxwYXRoIGNsYXNzPVxcXCJtYXNrXFxcIiBpZD1cXFwiTWFzay1nZWxhY2Npby1Hc3ViXFxcIiBkPVxcXCJNMTkzLjY3LDUxNS42N2w3Mi42Niw4LjY2LDEwLDRTMjYzLDU1Ny44MSwyNTksNTgwLjA3cy0xMS43OCw2Mi42OC03LjMzLDc5LjYzTDI2NSw2NzkuOTNcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiIzAwMFxcXCIgc3Ryb2tlLW1pdGVybGltaXQ9XFxcIjEwXFxcIiBzdHJva2Utd2lkdGg9XFxcIjM0XFxcIj48L3BhdGg+PHBhdGggY2xhc3M9XFxcIm1hc2tcXFwiIGlkPVxcXCJNYXNrLWdlbGFjY2lvLUdtYWluXFxcIiBkPVxcXCJNMjQ3LDQ0MC40YzEyLjQ2LTUuODcsMzIuNDQtMTIuODUsMzYtMzcuNCw0LjQ0LTMwLjY3LDUuODgtMjkuNzUsMS44OC00MC4xNVMyNzksMzQxLDI2NSwzMzguMzNzLTMzLjMzLDQtNDMuMzMsMTJTMTk0LjMzLDM3MywxODUsMzgzLjY3cy0xNC42NywxNi4yNy0yNCwzNC4xNGEyNjAuODUsMjYwLjg1LDAsMCwwLTE4LDQzLjg2Yy0zLjMzLDEwLjY2LTkuNTUsMjIuMS0xNi42Nyw0Ny4zMy03LjMzLDI2LTE2LDU2LjIxLTcuMzQsMTAwLjY3LDYuNTYsMzMuNjYsMzkuMzQsNTUuMiwzOS4zNCw1NS4yczM2LjY3LDcuNTMsNTAtNS4xNywyOC0yNy4zNywzMC42Ny00Mi43bDIuNjgtMTUuMzNcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiIzAwMFxcXCIgc3Ryb2tlLW1pdGVybGltaXQ9XFxcIjEwXFxcIiBzdHJva2Utd2lkdGg9XFxcIjQwXFxcIj48L3BhdGg+PC9tYXNrPjwvZz48bWFzayBpZD1cXFwiTWFzay1lXFxcIj48cGF0aCBjbGFzcz1cXFwibWFza1xcXCIgaWQ9XFxcIk1hc2stZ2VsYWNjaW8tZVxcXCIgZD1cXFwiTTMyMyw1ODkuMTFsMjguNjctOXMzMC44OS0xNy43NCw0Ni4xMS00MS43NCwyMS4xNS0zMC43LDExLjIyLTM2LjE2Yy0xOC05LjktNDkuMzMsMS4yMS00OS4zMywxLjIxTDMzOSw1MjcuNjdzLTE5LjM0LDMyLjIyLTI0LDQ5LjM5Yy00LjgxLDE3LjczLTYuNjcsNDMuMjcsMi42Nyw1Ni42MXMyNiwyMy4xNSwzOCwxOS41OCwzMi0xNi4yNSw0Ni42Ni0zMC4yNSwyNC44OC0zMS4zMywyNC44OC0zMS4zM0w0MzQuOTMsNTY4XFxcIiBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcIiMwMDBcXFwiIHN0cm9rZS1taXRlcmxpbWl0PVxcXCIxMFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIzNFxcXCI+PC9wYXRoPjwvbWFzaz48bWFzayBpZD1cXFwiTWFzay1sXFxcIj48cGF0aCBjbGFzcz1cXFwibWFza1xcXCIgaWQ9XFxcIk1hc2stZ2VsYWNjaW8tbFxcXCIgZD1cXFwiTTQ3MSw1NTUuNjcsNDkyLjUsNTEyLDUxOSw0NjEuNjdsMTguNjctNDBTNTcxLDM1MSw1NDguMzMsMzQwLjQyYy0xNi4zOS03LjYyLTQ0Ljc5LDYzLjI1LTUxLjkyLDgwLjQ1TDQ3OSw0NjNsLTE0LjY0LDM5LjE3LTEyLjY5LDQ5LjVTNDQxLjE5LDU5Nyw0NDEuMTksNjEyLjMzczE4LjUzLDM0LjY3LDIzLjE3LDMzLjM0LDI1LjQ5LTE4LjY2LDMxLjMxLTI2LjYyLDE4LTIzLjA4LDE4LTIzLjA4bDguODktMTUuOUw1MjguMzMsNTYzXFxcIiBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcIiMwMDBcXFwiIHN0cm9rZS1taXRlcmxpbWl0PVxcXCIxMFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIzNFxcXCI+PC9wYXRoPjwvbWFzaz48bWFzayBpZD1cXFwiTWFzay1hXFxcIj48cGF0aCBjbGFzcz1cXFwibWFza1xcXCIgaWQ9XFxcIk1hc2stZ2VsYWNjaW8tYVxcXCIgZD1cXFwiTTYyOSw1NDYuMzNzMTcuNzctMjkuMjUtNi00MC43MlM1NzkuNjcsNTEyLDU3OS42Nyw1MTJMNTUxLDU0Ni41bC0xMy44MSwyNkw1MjMsNjE1cy04LjY3LDIwLjEzLDAsMzAuNzNTNTU2LjI0LDY0Myw1NTYuMjQsNjQzbDMzLjQzLTM2TDYxMyw1NzcuMDZsMTQuMzEtMjcuMzMsMy43MywxLjcxcy0yOS4zNyw2OC44OS0yNC43MSw3OC44OSwxMCwxNiwyMCwxMmE5Ny4wOSw5Ny4wOSwwLDAsMCwzNC0yMy4zM0M2NzEuNjcsNjA3LDY4Myw1ODAuMDcsNjgzLDU4MC4wN0w2ODYuMTcsNTY4XFxcIiBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcIiMwMDBcXFwiIHN0cm9rZS1taXRlcmxpbWl0PVxcXCIxMFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIzNFxcXCI+PC9wYXRoPjwvbWFzaz48bWFzayBpZD1cXFwiTWFzay1jXFxcIj48cGF0aCBjbGFzcz1cXFwibWFza1xcXCIgaWQ9XFxcIk1hc2stZ2VsYWNjaW8tY1xcXCIgZD1cXFwiTTc1OC4zMyw1NjEuNjdjOC43NS0xMC44LDEyLjItMTYuMTYsMTMuNDItMTguMjVhOC4zNyw4LjM3LDAsMCwwLC44Ni0yLjFjMS4xMi00LjE4LDQuOTItMjAuMzctLjI4LTI5LjMyLTYtMTAuMzMtMzItNi4zOS0zMi02LjM5UzcxNy42Nyw1MjMsNzEwLjMzLDUzNyw2OTcsNTcyLjU0LDY5Nyw1NzIuNTRzLTkuNjYsMzEuNzktMTAuODMsNDQuNDYsMTYuMTYsMjguNzMsMTYuMTYsMjguNzNTNzE2LjExLDY2Myw3MzAuNTYsNjU3czMxLjExLTE4LDMxLjExLTE4bDI2LTI0LjY3TDgwMyw1OTNzMy44Mi0xMy44OSwzLjgyLTE5LjE3XFxcIiBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcIiMwMDBcXFwiIHN0cm9rZS1taXRlcmxpbWl0PVxcXCIxMFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIzNFxcXCI+PC9wYXRoPjwvbWFzaz48bWFzayBpZD1cXFwiTWFzay1jY1xcXCI+PHBhdGggY2xhc3M9XFxcIm1hc2tcXFwiIGlkPVxcXCJNYXNrLWdlbGFjY2lvLWNjXFxcIiBkPVxcXCJNODczLDU1OC4xN2wyMC0xNy4zM3M2LTIwLDAtMzAuMzQtMzItNi4zOC0zMi02LjM4LTIyLjY3LDE3LjM4LTMwLDMxLjM4LTEzLjMzLDM1LjU1LTEzLjMzLDM1LjU1LTQuMjcsMzEuMjMtNC4yNyw0NGMwLDIwLDkuNiwyOS4yNCw5LjYsMjkuMjRzMTMuNzgsMTcuMjYsMjguMjIsMTEuMjYsMzEuMTEtMTgsMzEuMTEtMThsMjYtMjQuNjZMOTIxLDU4Ni4xN2w2LjQ5LTIwLjA3XFxcIiBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcIiMwMDBcXFwiIHN0cm9rZS1taXRlcmxpbWl0PVxcXCIxMFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIzNFxcXCI+PC9wYXRoPjwvbWFzaz48ZyBpZD1cXFwiTWFzay1nZWxhY2Npby1pXFxcIj48bWFzayBpZD1cXFwiTWFzay1pXFxcIj48cGF0aCBjbGFzcz1cXFwibWFza1xcXCIgaWQ9XFxcIk1hc2stZ2VsYWNjaW8taXN1YlxcXCIgZD1cXFwiTTk5Myw0NTQuODJzMjgtMTUuMTUsMjAtMjMuMTUtMTkuMzMtNi0yMi42Ny0zLjM0LTcuMzMsMjAtNy4zMywyMGwzLjMzLDYuNDlaXFxcIiBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcIiMwMDBcXFwiIHN0cm9rZS1taXRlcmxpbWl0PVxcXCIxMFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIzNFxcXCI+PC9wYXRoPjxwYXRoIGNsYXNzPVxcXCJtYXNrXFxcIiBpZD1cXFwiTWFzay1nZWxhY2Npby1pbWFpblxcXCIgZD1cXFwiTTk3NS4yOCw0OTIuMjcsOTU5LjY3LDUyM3MtMTEuMzQsMjQuNjctMTMuMzQsMzIuNjdTOTMxLjY3LDU5NSw5MzAuMzMsNjExLDk0Myw2MzkuNjcsOTQzLDYzOS42N3MyMS4zMywyLjY2LDM1LjMzLTYuNjcsMjguNDgtMzIuODksMjguNDgtMzIuODlsMTYuNjYtMjYuMDZ2LTcuOTFcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiIzAwMFxcXCIgc3Ryb2tlLW1pdGVybGltaXQ9XFxcIjEwXFxcIiBzdHJva2Utd2lkdGg9XFxcIjM0XFxcIj48L3BhdGg+PC9tYXNrPjwvZz48bWFzayBpZD1cXFwiTWFzay1vXFxcIj48cGF0aCBjbGFzcz1cXFwibWFza1xcXCIgaWQ9XFxcIk1hc2stZ2VsYWNjaW8tb1xcXCIgZD1cXFwiTTEwNTYuMzMsNTI4LjMzcy0xOS4zMywyLTI2LDMxLjM0UzEwMTMuNjcsNjM5LDEwMjcsNjQwczI2LDMsNDAtMTEsMzQuNjctNDQuNDcsMzQuNjctNDQuNDdsMTUuMzMtMzhzMTAtMzguNzUsMC00My4xMi0yNi42MS0xMi0zNC4zMSwxLjQ5LTExLjc1LDM2LTExLjc1LDM2LS4zNywzOC4wOSw5LjE4LDQ1LjQyLDI3LjIzLDE5LjExLDQxLjMyLDIwLDM4LjEzLTMxLjg1LDM4LjEzLTMxLjg1bDUuNDMtOC4zNFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlPVxcXCIjMDAwXFxcIiBzdHJva2UtbWl0ZXJsaW1pdD1cXFwiMTBcXFwiIHN0cm9rZS13aWR0aD1cXFwiMzRcXFwiPjwvcGF0aD48L21hc2s+PC9nPjwvZGVmcz48L3N2Zz5cIiIsImV4cG9ydCB7ZGVsYXl9O1xuXG5jb25zdCBkZWxheSA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGVmdC1tb2RhbC10d28nKS5jbGFzc0xpc3QuYWRkKCdkcm9wcGluZycpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tbW9kYWwnKS5jbGFzc0xpc3QuYWRkKCdleHRlbmRpbmcnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLW9uZScpLmNsYXNzTGlzdC5hZGQoJ2V4dE9uZScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tdHdvJykuY2xhc3NMaXN0LmFkZCgnZXh0VHdvJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi10aHJlZScpLmNsYXNzTGlzdC5hZGQoJ2V4dFRocmVlJylcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGV4dC1jb250YWluZXInKS5jbGFzc0xpc3QuYWRkKCdmYWRlJyk7XG59OyIsImltcG9ydCBnZWxzdmcgZnJvbSAnLi9nZWxzdmcuc3ZnJ1xuXG5jb25zdCBhcHBlbmRpbmdNYWluID0gKCkgPT4ge1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuY29uc3QgaWNlQ3JlYW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmljZUNyZWFtLmNsYXNzTGlzdC5hZGQoJ3RleHQtY29udGFpbmVyJylcbmljZUNyZWFtLnRleHRDb250ZW50ID0gJ0ljZSBDcmVhbSBUaW1lJztcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChpY2VDcmVhbSk7XG5cbmNvbnN0IGltYWdlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuaW1hZ2VXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2ltYWdlLWNvbnRhaW5lcicpO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlV3JhcHBlcik7XG5cblxuY29uc3QgbGVmdEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubGVmdEJhci5jbGFzc0xpc3QuYWRkKCdsZWZ0LXNpZGUtYmFyJyk7XG5jb25zdCBsZWZ0TW9kYWxGaXJzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5sZWZ0TW9kYWxGaXJzdC5jbGFzc0xpc3QuYWRkKCdsZWZ0LW1vZGFsLW9uZScpO1xuY29uc3QgbGVmdE1vZGFsU2Vjb25kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5sZWZ0TW9kYWxTZWNvbmQuY2xhc3NMaXN0LmFkZCgnbGVmdC1tb2RhbC10d28nKTtcbmxlZnRCYXIuYXBwZW5kQ2hpbGQobGVmdE1vZGFsRmlyc3QpO1xubGVmdEJhci5hcHBlbmRDaGlsZChsZWZ0TW9kYWxTZWNvbmQpO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKGxlZnRCYXIpO1xuXG5jb25zdCBoYW5kd3JpdHRlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuaGFuZHdyaXR0ZW4uY2xhc3NMaXN0LmFkZCgnaGFuZHdyaXR0ZW4nKTtcbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGdlbHN2ZztcbiAgICByZXR1cm4gZWxlbWVudFxufVxuaGFuZHdyaXR0ZW4uYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpXG5jb250YWluZXIuYXBwZW5kQ2hpbGQoaGFuZHdyaXR0ZW4pO1xuXG5jb25zdCBidXR0b25Nb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuYnV0dG9uTW9kYWwuY2xhc3NMaXN0LmFkZCgnYnV0dG9uLW1vZGFsJylcbmNvbnN0IGJ0bk9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuYnRuT25lLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1vbmUnKTtcbmNvbnN0IGJ0blR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuYnRuVHdvLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi10d28nKTtcbmNvbnN0IGJ0blRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5idG5UaHJlZS5jbGFzc0xpc3QuYWRkKCdidXR0b24tdGhyZWUnKTtcbmJ1dHRvbk1vZGFsLmFwcGVuZENoaWxkKGJ0bk9uZSk7XG5idXR0b25Nb2RhbC5hcHBlbmRDaGlsZChidG5Ud28pO1xuYnV0dG9uTW9kYWwuYXBwZW5kQ2hpbGQoYnRuVGhyZWUpO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbk1vZGFsKTtcblxufVxuXG5cbmV4cG9ydCB7YXBwZW5kaW5nTWFpbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0IHsgYXBwZW5kaW5nTWFpbiB9IGZyb20gJy4vbWFpbi1wYWdlLWxvYWQnO1xuaW1wb3J0IHtkZWxheX0gZnJvbSAnLi9hbmltYXRpb24tbWFpbic7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuYXBwZW5kaW5nTWFpbigpO1xuc2V0VGltZW91dChkZWxheSwgNDgwMClcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=