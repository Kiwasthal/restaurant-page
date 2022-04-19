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
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/decor-first.jpg */ "./src/assets/decor-first.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/decor-second.jpg */ "./src/assets/decor-second.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/decor-three.jpg */ "./src/assets/decor-three.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/decor-four.jpg */ "./src/assets/decor-four.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* { \n    margin: 0;\n    padding: 0;\n    background-color: #0f160c;\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n}\n\n\n#content {\n    display: grid;\n    grid-template-columns: 4vw 30vw 1fr 1fr 1fr 1fr;\n    grid-template-rows: 20vh 22.5vh 26.25vh 26.25vh 5vh;\n}\n\n.left-side-bar {\n    grid-area: 1 / 1 / 5 / 2;\n    display: flex;\n\n}\n\n.ballTwo {\n    position: absolute;\n    top: 5%;\n    left: 30%;\n    width: 50vh;\n    height: 50vh;\n    border-radius: 1000px;\n    z-index: 1000;\n    background: linear-gradient(90deg , white 50%, rgb(255, 166, 0) 100%);\n    filter: drop-shadow(2px 2px 10px rgb(194, 175, 91));\n    transition: 3500ms ease-in-out;\n    opacity: 0;\n}\n\n.left-modal-one {\n    background-color: #0f160c;\n    width: 1vw;\n}\n\n.left-modal-two {\n    background-color: #d6d3d1;\n    grid-area: 1 / 1 / 5 / 2;\n    opacity: 0.5;\n    width: 6vh;\n    height: 0;\n    z-index: 1000;\n    transition: 1500ms ease-in-out;\n}\n\n.dropping {\n    height: 100vh;\n    background :linear-gradient( #ce9449 25%, #432304 100%)\n}\n\n.handwritten {\n    transition: all 1s ease;\n    transition-delay: 1s;\n    grid-column: 2/4;\n    grid-row: 1/3;\n    z-index: 999;\n}\n\n\n.handwritten .svg {\n    position: absolute;\n    height: 30vh;\n    width: 100vh;\n    z-index: 999;\n    \n}\n#written {\n    position: absolute;\n    top: 5%;\n    left: -60%;\n    width: auto;\n    height: 12vh;\n    left: 10%;\n    z-index: 1000;   \n}\n\n.mask {\n    fill: none;\n    stroke: white;\n}\n\n\n.mask {\n    stroke-dasharray: 1000;\n    stroke-dashoffset: 1000;\n  }\n  \n  @keyframes strokeOffset {\n    to {\n      stroke-dashoffset: 0;\n    }\n  }\n  \n\n  #Mask-gelaccio-Gmain {\n    animation: strokeOffset 1s linear forwards;\n  }\n\n  #Mask-gelaccio-Gsub {\n    animation: strokeOffset 2s linear forwards 0.5s;\n  }\n\n  #Mask-gelaccio-e {\n    animation: strokeOffset 1s linear forwards 1s; \n  }\n\n  #Mask-gelaccio-l {\n    animation: strokeOffset 1s linear forwards 1.5s; \n  }\n\n  #Mask-gelaccio-a {\n    animation: strokeOffset 1s linear forwards 2s; \n  }\n\n  #Mask-gelaccio-c {\n    animation: strokeOffset 1s linear forwards 2.5s; \n  }\n\n  #Mask-gelaccio-cc {\n    animation: strokeOffset 1s linear forwards 3s; \n  }\n\n  #Mask-gelaccio-imain {\n    animation: strokeOffset 1s linear forwards 3.5s; \n  }\n\n\n  #Mask-gelaccio-o {\n    animation: strokeOffset 1s linear forwards 4.0s; \n  }\n\n  #Mask-gelaccio-isub {\n    animation: strokeOffset 2s linear forwards 4.7s; \n  }\n\n\n\n.text-container {\n    margin-left: -10vw;\n    margin-right: 10vw;\n    grid-area: 2 / 4 / 3 / 6;\n    align-self: center;\n    z-index: 1004;\n    font-size: 40px;\n    opacity: 0;\n    transition: 3500ms;\n    background: linear-gradient(90deg ,rgb(255, 166, 0) 50% , white 100%);\n}\n\n.textOne , .textTwo {\n\n    padding: 1vh 1vh 0vh 1vh;\n    border-left: 2px solid rgb(255, 166, 0);\n    border-right: 2px solid rgb(255, 166, 0);\n    text-align: start;\n    width: 40%;\n}\n\n.textOne {\n    color :rgb(255, 166, 0);\n    border-top: 2px solid rgb(255, 166, 0);\n    font-size: 1.75rem;\n    text-shadow: 1px 1px 1px #d6d3d1;\n}\n\n.textTwo {\n    border-bottom: 2px solid rgb(255, 166, 0);\n    font-size: 3rem;\n    color: white;\n    text-shadow: 1px 1px 1px rgb(255, 166, 0);\n    letter-spacing: 3px;\n}\n\n.fade {\n    opacity: 1;\n}\n\n.image-container {\n    z-index: 1002;\n    grid-area: 2 / 2 / 5 / 4; \n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    filter: drop-shadow(4px 0px 3px #cdad8f);\n    background-repeat: no-repeat;\n}\n\nimg {\n    z-index: 1000;\n    grid-area: 2 / 2 / 5 / 3;\n}\n\n.button-modal {\n    grid-area: 3 / 3 / 5 / 6;\n    display: grid;\n    width: 0;\n    gap: 1vh;\n    grid-template-rows:  1fr 1fr 1fr;\n    transition: 1500ms ease-in-out;\n}\n\n.button-one, .button-two, .button-three  {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    border-top-right-radius: 20px;\n    width: 0;\n    background: linear-gradient(#d8d5d0 50% , #be8142 100%);\n    transition: 1500ms ease-in-out;\n    z-index: 1001;\n    \n}\n\n\n\nbutton {\n    position: relative;\n    display:block;\n    height: 45px;\n    width: 150px;\n    margin: 10px 7px;\n    padding: 5px 5px;\n    font-weight: 700;\n    font-size: 15px;\n    letter-spacing: 2px;\n    color: #383736;\n    border: 2px #383736 solid;\n    border-radius: 4px;\n    text-transform: uppercase;\n    outline: 0;\n    overflow:hidden;\n    background: none;\n    z-index: 1;\n    cursor: pointer;\n    transition:         0.08s ease-in;\n    -o-transition:      0.08s ease-in;\n    -ms-transition:     0.08s ease-in;\n    -moz-transition:    0.08s ease-in;\n    -webkit-transition: 0.08s ease-in;\n  }\n  \n  button:hover {\n    color: whitesmoke;\n  }\n  \n  button:before {\n    content: \"\";\n    position: absolute;\n    background: #383736;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    top: 100%;\n    z-index: -1;\n    transition: top 0.09s ease-in;\n  }\n  \n  button:hover:before {\n    top: 0;\n  }\n\n  .menuBtn , .contactBtn {\n      opacity: 0;\n  }\n  \n \n.revealing {\n    opacity: 1;\n}\n\n\n\n\n\n\n\n\n.button-two {\n    background-color: #be8142;\n}\n\n.button-three {\n    background-color: #432304;\n}\n\n.extending {\n    width: 100%;\n}\n\n.extOne {\n    width: 50%;\n}\n\n.extTwo {\n    width: 55%;\n}\n\n.extThree {\n    width: 60%;\n}\n\n.image-container {\n    animation: fadeIn 7s;\n    -webkit-animation: fadeIn 4.5s;\n    -moz-animation: fadeIn 4.5s;\n    -o-animation: fadeIn 4.5s;\n    -ms-animation: fadeIn 4.5s;\n  }\n  @keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  }\n  \n  @-moz-keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  }\n  \n  @-webkit-keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  }\n  \n  @-o-keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  }\n  \n  @-ms-keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  } \n\n  /* Menu page styling */\n\n.menuContent {\n      display: grid;\n      width: 100%;\n      grid-template-columns: 1fr 1fr 1fr 1fr;\n      grid-template-rows: 10vh 1fr 1fr;\n      justify-items: center;\n      gap: 4vh;\n  }\n\nh1 {\n    background-color: rgb(197, 177, 66);\n    text-shadow: 2px 2px 2px black;\n}\n\n\n.menuHeader, .contactHeader {\n    background-color: rgb(197, 177, 66);\n      grid-area: 1 / 1 / 2 / 5 ;\n      height: 100%;\n      display: flex;\n      align-self: center;\n      justify-content: space-around;\n      align-items: center;\n      color: white;\n      width: 100%;\n      border-bottom: 2px solid white;\n  }\n\n  \nsvg:not(#written  ) {\n      width: 10vw;\n      height: 10vw;\n      padding: 5vh;\n      transition: 200ms ease-out;\n      position: relative;\n      border-radius: 500px;\n  }\n\n\n\nsvg:not(#written):hover {\n      animation: shake 0.5s ease-in-out;\n      animation-iteration-count: infinite;\n      z-index: 1000;\n      background: rgb(197, 177, 66);\n      border-radius: 500px;\n  }\n\n\n\n  @keyframes shake {\n    0% { transform: translate(1px, 1px) rotate(0deg) scale(1.1); }\n    10% { transform: translate(-1px, -2px) rotate(-1deg) scale(1.1); }\n    20% { transform: translate(-3px, 0px) rotate(1deg) scale(1.1); }\n    30% { transform: translate(3px, 2px) rotate(0deg) scale(1.1); }\n    40% { transform: translate(1px, -1px) rotate(1deg) scale(1.2); }\n    50% { transform: translate(-1px, 2px) rotate(-1deg) scale(1.2); }\n    60% { transform: translate(-3px, 1px) rotate(0deg) scale(1.2); }\n    70% { transform: translate(3px, 1px) rotate(-1deg) scale(1.2); }\n    80% { transform: translate(-1px, -1px) rotate(1deg) scale(1.1); }\n    90% { transform: translate(1px, 2px) rotate(0deg) scale(1.1); }\n    100% { transform: translate(1px, -2px) rotate(-1deg) scale(1.1); }\n  }\n\n.decorBallOne , .decorBallTwo, .decorBallThree, .decorBallFour {\n    position: absolute;\n    height: 40vh;\n    width: 40vh;\n    background-color: rebeccapurple;\n  }\n\n.decorBallOne {\n    bottom: 0%;\n    left: 12%;\n    width: 320px;\n    height: 160px; /* as the half of the width */\n    background:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-size: cover;\n    border-top-left-radius: 170px;  \n    border-top-right-radius: 170px; \n    border: 10px solid yellow;\n    border-bottom: 0;\n}\n\n.decorBallTwo {\n    bottom: 0%;\n    left: 32%;\n    width: 320px;\n    height: 160px; /* as the half of the width */\n    background:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-size:cover;\n    border-top-left-radius: 170px;  \n    border-top-right-radius: 170px; \n    border: 10px solid yellow;\n    border-bottom: 0;\n}\n\n.decorBallThree {\n    bottom: 0%;\n    left: 52%;\n    width: 320px;\n    height: 160px; \n    background:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    background-size:cover;\n    border-top-left-radius: 170px;  \n    border-top-right-radius: 170px; \n    border: 10px solid yellow;\n    border-bottom: 0;\n}\n\n.decorBallFour {\n    bottom: 0%;\n    left: 72%;\n    width: 320px;\n    height: 160px; \n    background:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n    background-size:cover;\n    border-top-left-radius: 170px;  \n    border-top-right-radius: 170px; \n    border: 10px solid yellow;\n    border-bottom: 0;\n}\n\n/* Contact page layout */\n\n\n.contactContainer {\n    display: grid;\n    grid-template-rows: 10vh 1fr 20vh;\n    width: 100%;\n    height: 100%;\n}\n\n.contactHeader .menuBtn, .menuHeader .contactBtn {\n    opacity: 1;\n}\n\n\n.contactInfo {\n  padding: 2vh;\n  grid-area: 2 / 1 / 3 / 5;\n  justify-items: center;\n  text-align: center;\n  color: white;\n}\n\nh3 {\n  padding: 2vh;\n  font-size: 1.25rem;\n}\n\n\n\n\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* { \n    margin: 0;\n    padding: 0;\n    background-color: #0f160c;\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n}\n\n\n#content {\n    display: grid;\n    grid-template-columns: 4vw 30vw 1fr 1fr 1fr 1fr;\n    grid-template-rows: 20vh 22.5vh 26.25vh 26.25vh 5vh;\n}\n\n.left-side-bar {\n    grid-area: 1 / 1 / 5 / 2;\n    display: flex;\n\n}\n\n.ballTwo {\n    position: absolute;\n    top: 5%;\n    left: 30%;\n    width: 50vh;\n    height: 50vh;\n    border-radius: 1000px;\n    z-index: 1000;\n    background: linear-gradient(90deg , white 50%, rgb(255, 166, 0) 100%);\n    filter: drop-shadow(2px 2px 10px rgb(194, 175, 91));\n    transition: 3500ms ease-in-out;\n    opacity: 0;\n}\n\n.left-modal-one {\n    background-color: #0f160c;\n    width: 1vw;\n}\n\n.left-modal-two {\n    background-color: #d6d3d1;\n    grid-area: 1 / 1 / 5 / 2;\n    opacity: 0.5;\n    width: 6vh;\n    height: 0;\n    z-index: 1000;\n    transition: 1500ms ease-in-out;\n}\n\n.dropping {\n    height: 100vh;\n    background :linear-gradient( #ce9449 25%, #432304 100%)\n}\n\n.handwritten {\n    transition: all 1s ease;\n    transition-delay: 1s;\n    grid-column: 2/4;\n    grid-row: 1/3;\n    z-index: 999;\n}\n\n\n.handwritten .svg {\n    position: absolute;\n    height: 30vh;\n    width: 100vh;\n    z-index: 999;\n    \n}\n#written {\n    position: absolute;\n    top: 5%;\n    left: -60%;\n    width: auto;\n    height: 12vh;\n    left: 10%;\n    z-index: 1000;   \n}\n\n.mask {\n    fill: none;\n    stroke: white;\n}\n\n\n.mask {\n    stroke-dasharray: 1000;\n    stroke-dashoffset: 1000;\n  }\n  \n  @keyframes strokeOffset {\n    to {\n      stroke-dashoffset: 0;\n    }\n  }\n  \n\n  #Mask-gelaccio-Gmain {\n    animation: strokeOffset 1s linear forwards;\n  }\n\n  #Mask-gelaccio-Gsub {\n    animation: strokeOffset 2s linear forwards 0.5s;\n  }\n\n  #Mask-gelaccio-e {\n    animation: strokeOffset 1s linear forwards 1s; \n  }\n\n  #Mask-gelaccio-l {\n    animation: strokeOffset 1s linear forwards 1.5s; \n  }\n\n  #Mask-gelaccio-a {\n    animation: strokeOffset 1s linear forwards 2s; \n  }\n\n  #Mask-gelaccio-c {\n    animation: strokeOffset 1s linear forwards 2.5s; \n  }\n\n  #Mask-gelaccio-cc {\n    animation: strokeOffset 1s linear forwards 3s; \n  }\n\n  #Mask-gelaccio-imain {\n    animation: strokeOffset 1s linear forwards 3.5s; \n  }\n\n\n  #Mask-gelaccio-o {\n    animation: strokeOffset 1s linear forwards 4.0s; \n  }\n\n  #Mask-gelaccio-isub {\n    animation: strokeOffset 2s linear forwards 4.7s; \n  }\n\n\n\n.text-container {\n    margin-left: -10vw;\n    margin-right: 10vw;\n    grid-area: 2 / 4 / 3 / 6;\n    align-self: center;\n    z-index: 1004;\n    font-size: 40px;\n    opacity: 0;\n    transition: 3500ms;\n    background: linear-gradient(90deg ,rgb(255, 166, 0) 50% , white 100%);\n}\n\n.textOne , .textTwo {\n\n    padding: 1vh 1vh 0vh 1vh;\n    border-left: 2px solid rgb(255, 166, 0);\n    border-right: 2px solid rgb(255, 166, 0);\n    text-align: start;\n    width: 40%;\n}\n\n.textOne {\n    color :rgb(255, 166, 0);\n    border-top: 2px solid rgb(255, 166, 0);\n    font-size: 1.75rem;\n    text-shadow: 1px 1px 1px #d6d3d1;\n}\n\n.textTwo {\n    border-bottom: 2px solid rgb(255, 166, 0);\n    font-size: 3rem;\n    color: white;\n    text-shadow: 1px 1px 1px rgb(255, 166, 0);\n    letter-spacing: 3px;\n}\n\n.fade {\n    opacity: 1;\n}\n\n.image-container {\n    z-index: 1002;\n    grid-area: 2 / 2 / 5 / 4; \n    background: url(ice-cream-shop.avif);\n    filter: drop-shadow(4px 0px 3px #cdad8f);\n    background-repeat: no-repeat;\n}\n\nimg {\n    z-index: 1000;\n    grid-area: 2 / 2 / 5 / 3;\n}\n\n.button-modal {\n    grid-area: 3 / 3 / 5 / 6;\n    display: grid;\n    width: 0;\n    gap: 1vh;\n    grid-template-rows:  1fr 1fr 1fr;\n    transition: 1500ms ease-in-out;\n}\n\n.button-one, .button-two, .button-three  {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    border-top-right-radius: 20px;\n    width: 0;\n    background: linear-gradient(#d8d5d0 50% , #be8142 100%);\n    transition: 1500ms ease-in-out;\n    z-index: 1001;\n    \n}\n\n\n\nbutton {\n    position: relative;\n    display:block;\n    height: 45px;\n    width: 150px;\n    margin: 10px 7px;\n    padding: 5px 5px;\n    font-weight: 700;\n    font-size: 15px;\n    letter-spacing: 2px;\n    color: #383736;\n    border: 2px #383736 solid;\n    border-radius: 4px;\n    text-transform: uppercase;\n    outline: 0;\n    overflow:hidden;\n    background: none;\n    z-index: 1;\n    cursor: pointer;\n    transition:         0.08s ease-in;\n    -o-transition:      0.08s ease-in;\n    -ms-transition:     0.08s ease-in;\n    -moz-transition:    0.08s ease-in;\n    -webkit-transition: 0.08s ease-in;\n  }\n  \n  button:hover {\n    color: whitesmoke;\n  }\n  \n  button:before {\n    content: \"\";\n    position: absolute;\n    background: #383736;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    top: 100%;\n    z-index: -1;\n    transition: top 0.09s ease-in;\n  }\n  \n  button:hover:before {\n    top: 0;\n  }\n\n  .menuBtn , .contactBtn {\n      opacity: 0;\n  }\n  \n \n.revealing {\n    opacity: 1;\n}\n\n\n\n\n\n\n\n\n.button-two {\n    background-color: #be8142;\n}\n\n.button-three {\n    background-color: #432304;\n}\n\n.extending {\n    width: 100%;\n}\n\n.extOne {\n    width: 50%;\n}\n\n.extTwo {\n    width: 55%;\n}\n\n.extThree {\n    width: 60%;\n}\n\n.image-container {\n    animation: fadeIn 7s;\n    -webkit-animation: fadeIn 4.5s;\n    -moz-animation: fadeIn 4.5s;\n    -o-animation: fadeIn 4.5s;\n    -ms-animation: fadeIn 4.5s;\n  }\n  @keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  }\n  \n  @-moz-keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  }\n  \n  @-webkit-keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  }\n  \n  @-o-keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  }\n  \n  @-ms-keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  } \n\n  /* Menu page styling */\n\n.menuContent {\n      display: grid;\n      width: 100%;\n      grid-template-columns: 1fr 1fr 1fr 1fr;\n      grid-template-rows: 10vh 1fr 1fr;\n      justify-items: center;\n      gap: 4vh;\n  }\n\nh1 {\n    background-color: rgb(197, 177, 66);\n    text-shadow: 2px 2px 2px black;\n}\n\n\n.menuHeader, .contactHeader {\n    background-color: rgb(197, 177, 66);\n      grid-area: 1 / 1 / 2 / 5 ;\n      height: 100%;\n      display: flex;\n      align-self: center;\n      justify-content: space-around;\n      align-items: center;\n      color: white;\n      width: 100%;\n      border-bottom: 2px solid white;\n  }\n\n  \nsvg:not(#written  ) {\n      width: 10vw;\n      height: 10vw;\n      padding: 5vh;\n      transition: 200ms ease-out;\n      position: relative;\n      border-radius: 500px;\n  }\n\n\n\nsvg:not(#written):hover {\n      animation: shake 0.5s ease-in-out;\n      animation-iteration-count: infinite;\n      z-index: 1000;\n      background: rgb(197, 177, 66);\n      border-radius: 500px;\n  }\n\n\n\n  @keyframes shake {\n    0% { transform: translate(1px, 1px) rotate(0deg) scale(1.1); }\n    10% { transform: translate(-1px, -2px) rotate(-1deg) scale(1.1); }\n    20% { transform: translate(-3px, 0px) rotate(1deg) scale(1.1); }\n    30% { transform: translate(3px, 2px) rotate(0deg) scale(1.1); }\n    40% { transform: translate(1px, -1px) rotate(1deg) scale(1.2); }\n    50% { transform: translate(-1px, 2px) rotate(-1deg) scale(1.2); }\n    60% { transform: translate(-3px, 1px) rotate(0deg) scale(1.2); }\n    70% { transform: translate(3px, 1px) rotate(-1deg) scale(1.2); }\n    80% { transform: translate(-1px, -1px) rotate(1deg) scale(1.1); }\n    90% { transform: translate(1px, 2px) rotate(0deg) scale(1.1); }\n    100% { transform: translate(1px, -2px) rotate(-1deg) scale(1.1); }\n  }\n\n.decorBallOne , .decorBallTwo, .decorBallThree, .decorBallFour {\n    position: absolute;\n    height: 40vh;\n    width: 40vh;\n    background-color: rebeccapurple;\n  }\n\n.decorBallOne {\n    bottom: 0%;\n    left: 12%;\n    width: 320px;\n    height: 160px; /* as the half of the width */\n    background:url(./assets/decor-first.jpg);\n    background-size: cover;\n    border-top-left-radius: 170px;  \n    border-top-right-radius: 170px; \n    border: 10px solid yellow;\n    border-bottom: 0;\n}\n\n.decorBallTwo {\n    bottom: 0%;\n    left: 32%;\n    width: 320px;\n    height: 160px; /* as the half of the width */\n    background:url(./assets/decor-second.jpg);\n    background-size:cover;\n    border-top-left-radius: 170px;  \n    border-top-right-radius: 170px; \n    border: 10px solid yellow;\n    border-bottom: 0;\n}\n\n.decorBallThree {\n    bottom: 0%;\n    left: 52%;\n    width: 320px;\n    height: 160px; \n    background:url(./assets/decor-three.jpg);\n    background-size:cover;\n    border-top-left-radius: 170px;  \n    border-top-right-radius: 170px; \n    border: 10px solid yellow;\n    border-bottom: 0;\n}\n\n.decorBallFour {\n    bottom: 0%;\n    left: 72%;\n    width: 320px;\n    height: 160px; \n    background:url(./assets/decor-four.jpg);\n    background-size:cover;\n    border-top-left-radius: 170px;  \n    border-top-right-radius: 170px; \n    border: 10px solid yellow;\n    border-bottom: 0;\n}\n\n/* Contact page layout */\n\n\n.contactContainer {\n    display: grid;\n    grid-template-rows: 10vh 1fr 20vh;\n    width: 100%;\n    height: 100%;\n}\n\n.contactHeader .menuBtn, .menuHeader .contactBtn {\n    opacity: 1;\n}\n\n\n.contactInfo {\n  padding: 2vh;\n  grid-area: 2 / 1 / 3 / 5;\n  justify-items: center;\n  text-align: center;\n  color: white;\n}\n\nh3 {\n  padding: 2vh;\n  font-size: 1.25rem;\n}\n\n\n\n\n\n\n"],"sourceRoot":""}]);
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
    document.querySelectorAll('button').forEach(a => a.classList.add('revealing'));
    document.querySelector('.text-container').classList.add('fade');
};

/***/ }),

/***/ "./src/contact-page-load.js":
/*!**********************************!*\
  !*** ./src/contact-page-load.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendingContact": () => (/* binding */ appendingContact)
/* harmony export */ });
const appendingContact = () => {
    const container = document.getElementById('content');
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contactContainer')

    const header = document.createElement('div');
    header.classList.add('contactHeader');
    const returnBtn = document.createElement('button');
    returnBtn.classList = 'returnMain';
    returnBtn.textContent = "RETURN";
    const contactTitle = document.createElement('h1');
    contactTitle.textContent = "Contacts us";
    const menuBtn = document.createElement('button');
    menuBtn.classList = "menuBtn";
    menuBtn.textContent = "MENU";
    header.appendChild(returnBtn);
    header.appendChild(contactTitle);
    header.appendChild(menuBtn);
    contactContainer.appendChild(header);


    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contactInfo');
    contactContainer.appendChild(header);
    contactContainer.appendChild(contactInfo);

    const gelaccio = document.createElement('h3');
    gelaccio.textContent = 'Gelaccio';
    contactInfo.appendChild(gelaccio)

    const adress = document.createElement('p');
    adress.textContent = 'As for now you can not find us anywhere on the map.'
    contactInfo.appendChild(adress);

    const fill = document.createElement('p');
    fill.textContent = 'You can still fill this form for reasons.';
    contactInfo.appendChild(fill)



    const IceCreamBallOne = document.createElement('div');
    IceCreamBallOne.classList.add('decorBallOne');
    contactContainer.appendChild(IceCreamBallOne);

    const IceCreamBallTwo = document.createElement('div');
    IceCreamBallTwo.classList.add('decorBallTwo');
    contactContainer.appendChild(IceCreamBallTwo)

    const IceCreamBallThree = document.createElement('div');
    IceCreamBallThree.classList.add('decorBallThree');
    contactContainer.appendChild(IceCreamBallThree)

    const IceCreamBallFour = document.createElement('div');
    IceCreamBallFour.classList.add('decorBallFour');
    contactContainer.appendChild(IceCreamBallFour)



    


    container.appendChild(contactContainer);


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
        };
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
const iceBallTwo = document.createElement('div');
iceBallTwo.classList.add('ballTwo');
container.appendChild(iceBallTwo);
const iceCream = document.createElement('div');
iceCream.classList.add('text-container');
const firstLine = document.createElement('div');
firstLine.classList.add('textOne');
firstLine.textContent = "Ice Cream";
iceCream.appendChild(firstLine);
const secondLine = document.createElement('div');
secondLine.textContent = "Time";
secondLine.classList.add('textTwo');
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
};

handwritten.appendChild(component());
container.appendChild(handwritten);

const buttonModal = document.createElement('div');
buttonModal.classList.add('button-modal');
const btnOne = document.createElement('div');
btnOne.classList.add('button-one');
const menuBtn = document.createElement('button');
menuBtn.classList.add('menuBtn');
menuBtn.textContent = "MENU"
btnOne.appendChild(menuBtn); 
const btnTwo = document.createElement('div');
btnTwo.classList.add('button-two');
const contactBtn = document.createElement('button');
contactBtn.classList.add('contactBtn')
contactBtn.textContent = "CONTACT";
btnTwo.appendChild(contactBtn); 
const btnThree = document.createElement('div');
btnThree.classList.add('button-three');
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
    const header = document.createElement('div');
    header.classList.add('menuHeader')
    const returnBtn = document.createElement('button');
    returnBtn.classList = 'returnMain';
    returnBtn.textContent = "RETURN";
    const menuTitle = document.createElement('h1');
    menuTitle.textContent = "Choose Your Flavor!";
    const contractBtn = document.createElement('button');
    contractBtn.classList = "contactBtn"
    contractBtn.textContent = "CONTRACT"
    header.appendChild(returnBtn);
    header.appendChild(menuTitle);
    header.appendChild(contractBtn);
    menuContent.appendChild(header);


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


    const IceCreamBallOne = document.createElement('div');
    IceCreamBallOne.classList.add('decorBallOne');
    menuContent.appendChild(IceCreamBallOne)

    const IceCreamBallTwo = document.createElement('div');
    IceCreamBallTwo.classList.add('decorBallTwo');
    menuContent.appendChild(IceCreamBallTwo)

    const IceCreamBallThree = document.createElement('div');
    IceCreamBallThree.classList.add('decorBallThree');
    menuContent.appendChild(IceCreamBallThree)

    const IceCreamBallFour = document.createElement('div');
    IceCreamBallFour.classList.add('decorBallFour');
    menuContent.appendChild(IceCreamBallFour)

    container.appendChild(menuContent); 
}



/***/ }),

/***/ "./src/assets/decor-first.jpg":
/*!************************************!*\
  !*** ./src/assets/decor-first.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "dec0f2d9b58bed1b07de.jpg";

/***/ }),

/***/ "./src/assets/decor-four.jpg":
/*!***********************************!*\
  !*** ./src/assets/decor-four.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b30b0892925c0ffb20c6.jpg";

/***/ }),

/***/ "./src/assets/decor-second.jpg":
/*!*************************************!*\
  !*** ./src/assets/decor-second.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d20e2c9fe5b0f48fff5e.jpg";

/***/ }),

/***/ "./src/assets/decor-three.jpg":
/*!************************************!*\
  !*** ./src/assets/decor-three.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a0079698f75fafa956fb.jpg";

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
/* harmony import */ var _contact_page_load__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-page-load */ "./src/contact-page-load.js");








const eventHandler = (() => {

    (0,_main_page_load__WEBPACK_IMPORTED_MODULE_0__.appendingMain)();

    setTimeout(_animation_main__WEBPACK_IMPORTED_MODULE_1__.delay, 4800);
    
    

    let container = document.getElementById('content');

    let createMenu = () => {
        (0,_empty_content__WEBPACK_IMPORTED_MODULE_3__.emptyContent)(container);
        container.style.display = "flex";
        (0,_menu_page_load__WEBPACK_IMPORTED_MODULE_4__.populateMenu)();
        document.querySelector('.returnMain').addEventListener('click',eventHandler.createMain);
        document.querySelector('.contactBtn').addEventListener('click',eventHandler.createContact);
    };

    let createMain = () => {
        (0,_empty_content__WEBPACK_IMPORTED_MODULE_3__.emptyContent)(container);
        container.style.display = "grid";
        (0,_main_page_load__WEBPACK_IMPORTED_MODULE_0__.appendingMain)();
        setTimeout(_animation_main__WEBPACK_IMPORTED_MODULE_1__.delay, 4800);
        document.querySelector('.menuBtn').addEventListener('click',eventHandler.createMenu); 
        document.querySelector('.contactBtn').addEventListener('click',eventHandler.createContact);
    };

    let createContact = () => {
        (0,_empty_content__WEBPACK_IMPORTED_MODULE_3__.emptyContent)(container);
        container.style.display = "flex";
        (0,_contact_page_load__WEBPACK_IMPORTED_MODULE_5__.appendingContact)();
        document.querySelector('.returnMain').addEventListener('click',eventHandler.createMain);
        document.querySelector('.menuBtn').addEventListener('click',eventHandler.createMenu); 
    }

    

    return {
        createMenu,
        createMain,
        createContact,
    };

})();

document.querySelector('.menuBtn').addEventListener('click',eventHandler.createMenu);
document.querySelector('.contactBtn').addEventListener('click',eventHandler.createContact);






})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxZQUFZLFNBQVMsS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLGFBQWEsS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLG9CQUFvQixvQkFBb0IsT0FBTyxLQUFLLG9CQUFvQixvQkFBb0IsT0FBTyxLQUFLLG9CQUFvQixvQkFBb0IsT0FBTyxLQUFLLG9CQUFvQixvQkFBb0IsT0FBTyxLQUFLLG9CQUFvQixvQkFBb0IsT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxRQUFRLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxRQUFRLEtBQUssVUFBVSxV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d0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCaUQ7QUFDVjtBQUNsQjtBQUN3QjtBQUNDO0FBQ087OztBQUdyRDs7QUFFQSxJQUFJLDhEQUFhOztBQUVqQixlQUFlLGtEQUFLO0FBQ3BCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxRQUFRLDREQUFZO0FBQ3BCO0FBQ0EsUUFBUSw2REFBWTtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLDREQUFZO0FBQ3BCO0FBQ0EsUUFBUSw4REFBYTtBQUNyQixtQkFBbUIsa0RBQUs7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSw0REFBWTtBQUNwQjtBQUNBLFFBQVEsb0VBQWdCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvSUNlaWdodC5zdmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9JQ2ZpdmUuc3ZnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvSUNmb3VyLnN2ZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL0lDb25lLnN2ZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL0lDc2V2ZW4uc3ZnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvSUNzaXguc3ZnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvSUN0aHJlZS5zdmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9JQ3R3by5zdmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2dlbHN2Zy5zdmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2FuaW1hdGlvbi1tYWluLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LXBhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZW1wdHktY29udGVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWFpbi1wYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUtcGFnZS1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiaWNlLWNyZWFtLXNob3AuYXZpZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2RlY29yLWZpcnN0LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2RlY29yLXNlY29uZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9kZWNvci10aHJlZS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9kZWNvci1mb3VyLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHsgXFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBmMTYwYztcXG59XFxuXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDR2dyAzMHZ3IDFmciAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMHZoIDIyLjV2aCAyNi4yNXZoIDI2LjI1dmggNXZoO1xcbn1cXG5cXG4ubGVmdC1zaWRlLWJhciB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyA1IC8gMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG59XFxuXFxuLmJhbGxUd28ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNSU7XFxuICAgIGxlZnQ6IDMwJTtcXG4gICAgd2lkdGg6IDUwdmg7XFxuICAgIGhlaWdodDogNTB2aDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwMHB4O1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcgLCB3aGl0ZSA1MCUsIHJnYigyNTUsIDE2NiwgMCkgMTAwJSk7XFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDJweCAxMHB4IHJnYigxOTQsIDE3NSwgOTEpKTtcXG4gICAgdHJhbnNpdGlvbjogMzUwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4ubGVmdC1tb2RhbC1vbmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYxNjBjO1xcbiAgICB3aWR0aDogMXZ3O1xcbn1cXG5cXG4ubGVmdC1tb2RhbC10d28ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZkM2QxO1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gNSAvIDI7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgd2lkdGg6IDZ2aDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgICB0cmFuc2l0aW9uOiAxNTAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5kcm9wcGluZyB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQgOmxpbmVhci1ncmFkaWVudCggI2NlOTQ0OSAyNSUsICM0MzIzMDQgMTAwJSlcXG59XFxuXFxuLmhhbmR3cml0dGVuIHtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDFzO1xcbiAgICBncmlkLWNvbHVtbjogMi80O1xcbiAgICBncmlkLXJvdzogMS8zO1xcbiAgICB6LWluZGV4OiA5OTk7XFxufVxcblxcblxcbi5oYW5kd3JpdHRlbiAuc3ZnIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDMwdmg7XFxuICAgIHdpZHRoOiAxMDB2aDtcXG4gICAgei1pbmRleDogOTk5O1xcbiAgICBcXG59XFxuI3dyaXR0ZW4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNSU7XFxuICAgIGxlZnQ6IC02MCU7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBoZWlnaHQ6IDEydmg7XFxuICAgIGxlZnQ6IDEwJTtcXG4gICAgei1pbmRleDogMTAwMDsgICBcXG59XFxuXFxuLm1hc2sge1xcbiAgICBmaWxsOiBub25lO1xcbiAgICBzdHJva2U6IHdoaXRlO1xcbn1cXG5cXG5cXG4ubWFzayB7XFxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDEwMDA7XFxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxMDAwO1xcbiAgfVxcbiAgXFxuICBAa2V5ZnJhbWVzIHN0cm9rZU9mZnNldCB7XFxuICAgIHRvIHtcXG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcXG4gICAgfVxcbiAgfVxcbiAgXFxuXFxuICAjTWFzay1nZWxhY2Npby1HbWFpbiB7XFxuICAgIGFuaW1hdGlvbjogc3Ryb2tlT2Zmc2V0IDFzIGxpbmVhciBmb3J3YXJkcztcXG4gIH1cXG5cXG4gICNNYXNrLWdlbGFjY2lvLUdzdWIge1xcbiAgICBhbmltYXRpb246IHN0cm9rZU9mZnNldCAycyBsaW5lYXIgZm9yd2FyZHMgMC41cztcXG4gIH1cXG5cXG4gICNNYXNrLWdlbGFjY2lvLWUge1xcbiAgICBhbmltYXRpb246IHN0cm9rZU9mZnNldCAxcyBsaW5lYXIgZm9yd2FyZHMgMXM7IFxcbiAgfVxcblxcbiAgI01hc2stZ2VsYWNjaW8tbCB7XFxuICAgIGFuaW1hdGlvbjogc3Ryb2tlT2Zmc2V0IDFzIGxpbmVhciBmb3J3YXJkcyAxLjVzOyBcXG4gIH1cXG5cXG4gICNNYXNrLWdlbGFjY2lvLWEge1xcbiAgICBhbmltYXRpb246IHN0cm9rZU9mZnNldCAxcyBsaW5lYXIgZm9yd2FyZHMgMnM7IFxcbiAgfVxcblxcbiAgI01hc2stZ2VsYWNjaW8tYyB7XFxuICAgIGFuaW1hdGlvbjogc3Ryb2tlT2Zmc2V0IDFzIGxpbmVhciBmb3J3YXJkcyAyLjVzOyBcXG4gIH1cXG5cXG4gICNNYXNrLWdlbGFjY2lvLWNjIHtcXG4gICAgYW5pbWF0aW9uOiBzdHJva2VPZmZzZXQgMXMgbGluZWFyIGZvcndhcmRzIDNzOyBcXG4gIH1cXG5cXG4gICNNYXNrLWdlbGFjY2lvLWltYWluIHtcXG4gICAgYW5pbWF0aW9uOiBzdHJva2VPZmZzZXQgMXMgbGluZWFyIGZvcndhcmRzIDMuNXM7IFxcbiAgfVxcblxcblxcbiAgI01hc2stZ2VsYWNjaW8tbyB7XFxuICAgIGFuaW1hdGlvbjogc3Ryb2tlT2Zmc2V0IDFzIGxpbmVhciBmb3J3YXJkcyA0LjBzOyBcXG4gIH1cXG5cXG4gICNNYXNrLWdlbGFjY2lvLWlzdWIge1xcbiAgICBhbmltYXRpb246IHN0cm9rZU9mZnNldCAycyBsaW5lYXIgZm9yd2FyZHMgNC43czsgXFxuICB9XFxuXFxuXFxuXFxuLnRleHQtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHZ3O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwdnc7XFxuICAgIGdyaWQtYXJlYTogMiAvIDQgLyAzIC8gNjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB6LWluZGV4OiAxMDA0O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IDM1MDBtcztcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnICxyZ2IoMjU1LCAxNjYsIDApIDUwJSAsIHdoaXRlIDEwMCUpO1xcbn1cXG5cXG4udGV4dE9uZSAsIC50ZXh0VHdvIHtcXG5cXG4gICAgcGFkZGluZzogMXZoIDF2aCAwdmggMXZoO1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHJnYigyNTUsIDE2NiwgMCk7XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHJnYigyNTUsIDE2NiwgMCk7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICB3aWR0aDogNDAlO1xcbn1cXG5cXG4udGV4dE9uZSB7XFxuICAgIGNvbG9yIDpyZ2IoMjU1LCAxNjYsIDApO1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgcmdiKDI1NSwgMTY2LCAwKTtcXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggI2Q2ZDNkMTtcXG59XFxuXFxuLnRleHRUd28ge1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDI1NSwgMTY2LCAwKTtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCByZ2IoMjU1LCAxNjYsIDApO1xcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xcbn1cXG5cXG4uZmFkZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5pbWFnZS1jb250YWluZXIge1xcbiAgICB6LWluZGV4OiAxMDAyO1xcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gNSAvIDQ7IFxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDRweCAwcHggM3B4ICNjZGFkOGYpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG5pbWcge1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gNSAvIDM7XFxufVxcblxcbi5idXR0b24tbW9kYWwge1xcbiAgICBncmlkLWFyZWE6IDMgLyAzIC8gNSAvIDY7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBnYXA6IDF2aDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAgMWZyIDFmciAxZnI7XFxuICAgIHRyYW5zaXRpb246IDE1MDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmJ1dHRvbi1vbmUsIC5idXR0b24tdHdvLCAuYnV0dG9uLXRocmVlICB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xcbiAgICB3aWR0aDogMDtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNkOGQ1ZDAgNTAlICwgI2JlODE0MiAxMDAlKTtcXG4gICAgdHJhbnNpdGlvbjogMTUwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICB6LWluZGV4OiAxMDAxO1xcbiAgICBcXG59XFxuXFxuXFxuXFxuYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OmJsb2NrO1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgbWFyZ2luOiAxMHB4IDdweDtcXG4gICAgcGFkZGluZzogNXB4IDVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgICBjb2xvcjogIzM4MzczNjtcXG4gICAgYm9yZGVyOiAycHggIzM4MzczNiBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBvdXRsaW5lOiAwO1xcbiAgICBvdmVyZmxvdzpoaWRkZW47XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogICAgICAgICAwLjA4cyBlYXNlLWluO1xcbiAgICAtby10cmFuc2l0aW9uOiAgICAgIDAuMDhzIGVhc2UtaW47XFxuICAgIC1tcy10cmFuc2l0aW9uOiAgICAgMC4wOHMgZWFzZS1pbjtcXG4gICAgLW1vei10cmFuc2l0aW9uOiAgICAwLjA4cyBlYXNlLWluO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuMDhzIGVhc2UtaW47XFxuICB9XFxuICBcXG4gIGJ1dHRvbjpob3ZlciB7XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgfVxcbiAgXFxuICBidXR0b246YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZDogIzM4MzczNjtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAxMDAlO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgdHJhbnNpdGlvbjogdG9wIDAuMDlzIGVhc2UtaW47XFxuICB9XFxuICBcXG4gIGJ1dHRvbjpob3ZlcjpiZWZvcmUge1xcbiAgICB0b3A6IDA7XFxuICB9XFxuXFxuICAubWVudUJ0biAsIC5jb250YWN0QnRuIHtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgXFxuIFxcbi5yZXZlYWxpbmcge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4uYnV0dG9uLXR3byB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZTgxNDI7XFxufVxcblxcbi5idXR0b24tdGhyZWUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDMyMzA0O1xcbn1cXG5cXG4uZXh0ZW5kaW5nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5leHRPbmUge1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uZXh0VHdvIHtcXG4gICAgd2lkdGg6IDU1JTtcXG59XFxuXFxuLmV4dFRocmVlIHtcXG4gICAgd2lkdGg6IDYwJTtcXG59XFxuXFxuLmltYWdlLWNvbnRhaW5lciB7XFxuICAgIGFuaW1hdGlvbjogZmFkZUluIDdzO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDQuNXM7XFxuICAgIC1tb3otYW5pbWF0aW9uOiBmYWRlSW4gNC41cztcXG4gICAgLW8tYW5pbWF0aW9uOiBmYWRlSW4gNC41cztcXG4gICAgLW1zLWFuaW1hdGlvbjogZmFkZUluIDQuNXM7XFxuICB9XFxuICBAa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAgIDAlIHtvcGFjaXR5OjA7fVxcbiAgICAxMDAlIHtvcGFjaXR5OjE7fVxcbiAgfVxcbiAgXFxuICBALW1vei1rZXlmcmFtZXMgZmFkZUluIHtcXG4gICAgMCUge29wYWNpdHk6MDt9XFxuICAgIDEwMCUge29wYWNpdHk6MTt9XFxuICB9XFxuICBcXG4gIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICAwJSB7b3BhY2l0eTowO31cXG4gICAgMTAwJSB7b3BhY2l0eToxO31cXG4gIH1cXG4gIFxcbiAgQC1vLWtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICAwJSB7b3BhY2l0eTowO31cXG4gICAgMTAwJSB7b3BhY2l0eToxO31cXG4gIH1cXG4gIFxcbiAgQC1tcy1rZXlmcmFtZXMgZmFkZUluIHtcXG4gICAgMCUge29wYWNpdHk6MDt9XFxuICAgIDEwMCUge29wYWNpdHk6MTt9XFxuICB9IFxcblxcbiAgLyogTWVudSBwYWdlIHN0eWxpbmcgKi9cXG5cXG4ubWVudUNvbnRlbnQge1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMHZoIDFmciAxZnI7XFxuICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICAgIGdhcDogNHZoO1xcbiAgfVxcblxcbmgxIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NywgMTc3LCA2Nik7XFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDJweCBibGFjaztcXG59XFxuXFxuXFxuLm1lbnVIZWFkZXIsIC5jb250YWN0SGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NywgMTc3LCA2Nik7XFxuICAgICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyA1IDtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xcbiAgfVxcblxcbiAgXFxuc3ZnOm5vdCgjd3JpdHRlbiAgKSB7XFxuICAgICAgd2lkdGg6IDEwdnc7XFxuICAgICAgaGVpZ2h0OiAxMHZ3O1xcbiAgICAgIHBhZGRpbmc6IDV2aDtcXG4gICAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLW91dDtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNTAwcHg7XFxuICB9XFxuXFxuXFxuXFxuc3ZnOm5vdCgjd3JpdHRlbik6aG92ZXIge1xcbiAgICAgIGFuaW1hdGlvbjogc2hha2UgMC41cyBlYXNlLWluLW91dDtcXG4gICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gICAgICB6LWluZGV4OiAxMDAwO1xcbiAgICAgIGJhY2tncm91bmQ6IHJnYigxOTcsIDE3NywgNjYpO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwMHB4O1xcbiAgfVxcblxcblxcblxcbiAgQGtleWZyYW1lcyBzaGFrZSB7XFxuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAxcHgpIHJvdGF0ZSgwZGVnKSBzY2FsZSgxLjEpOyB9XFxuICAgIDEwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIC0ycHgpIHJvdGF0ZSgtMWRlZykgc2NhbGUoMS4xKTsgfVxcbiAgICAyMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtM3B4LCAwcHgpIHJvdGF0ZSgxZGVnKSBzY2FsZSgxLjEpOyB9XFxuICAgIDMwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDNweCwgMnB4KSByb3RhdGUoMGRlZykgc2NhbGUoMS4xKTsgfVxcbiAgICA0MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIC0xcHgpIHJvdGF0ZSgxZGVnKSBzY2FsZSgxLjIpOyB9XFxuICAgIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIDJweCkgcm90YXRlKC0xZGVnKSBzY2FsZSgxLjIpOyB9XFxuICAgIDYwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIDFweCkgcm90YXRlKDBkZWcpIHNjYWxlKDEuMik7IH1cXG4gICAgNzAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoM3B4LCAxcHgpIHJvdGF0ZSgtMWRlZykgc2NhbGUoMS4yKTsgfVxcbiAgICA4MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAtMXB4KSByb3RhdGUoMWRlZykgc2NhbGUoMS4xKTsgfVxcbiAgICA5MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIDJweCkgcm90YXRlKDBkZWcpIHNjYWxlKDEuMSk7IH1cXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgLTJweCkgcm90YXRlKC0xZGVnKSBzY2FsZSgxLjEpOyB9XFxuICB9XFxuXFxuLmRlY29yQmFsbE9uZSAsIC5kZWNvckJhbGxUd28sIC5kZWNvckJhbGxUaHJlZSwgLmRlY29yQmFsbEZvdXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogNDB2aDtcXG4gICAgd2lkdGg6IDQwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlYmVjY2FwdXJwbGU7XFxuICB9XFxuXFxuLmRlY29yQmFsbE9uZSB7XFxuICAgIGJvdHRvbTogMCU7XFxuICAgIGxlZnQ6IDEyJTtcXG4gICAgd2lkdGg6IDMyMHB4O1xcbiAgICBoZWlnaHQ6IDE2MHB4OyAvKiBhcyB0aGUgaGFsZiBvZiB0aGUgd2lkdGggKi9cXG4gICAgYmFja2dyb3VuZDp1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNzBweDsgIFxcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTcwcHg7IFxcbiAgICBib3JkZXI6IDEwcHggc29saWQgeWVsbG93O1xcbiAgICBib3JkZXItYm90dG9tOiAwO1xcbn1cXG5cXG4uZGVjb3JCYWxsVHdvIHtcXG4gICAgYm90dG9tOiAwJTtcXG4gICAgbGVmdDogMzIlO1xcbiAgICB3aWR0aDogMzIwcHg7XFxuICAgIGhlaWdodDogMTYwcHg7IC8qIGFzIHRoZSBoYWxmIG9mIHRoZSB3aWR0aCAqL1xcbiAgICBiYWNrZ3JvdW5kOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTcwcHg7ICBcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE3MHB4OyBcXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkIHllbGxvdztcXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcXG59XFxuXFxuLmRlY29yQmFsbFRocmVlIHtcXG4gICAgYm90dG9tOiAwJTtcXG4gICAgbGVmdDogNTIlO1xcbiAgICB3aWR0aDogMzIwcHg7XFxuICAgIGhlaWdodDogMTYwcHg7IFxcbiAgICBiYWNrZ3JvdW5kOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTcwcHg7ICBcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE3MHB4OyBcXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkIHllbGxvdztcXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcXG59XFxuXFxuLmRlY29yQmFsbEZvdXIge1xcbiAgICBib3R0b206IDAlO1xcbiAgICBsZWZ0OiA3MiU7XFxuICAgIHdpZHRoOiAzMjBweDtcXG4gICAgaGVpZ2h0OiAxNjBweDsgXFxuICAgIGJhY2tncm91bmQ6dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNzBweDsgIFxcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTcwcHg7IFxcbiAgICBib3JkZXI6IDEwcHggc29saWQgeWVsbG93O1xcbiAgICBib3JkZXItYm90dG9tOiAwO1xcbn1cXG5cXG4vKiBDb250YWN0IHBhZ2UgbGF5b3V0ICovXFxuXFxuXFxuLmNvbnRhY3RDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwdmggMWZyIDIwdmg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jb250YWN0SGVhZGVyIC5tZW51QnRuLCAubWVudUhlYWRlciAuY29udGFjdEJ0biB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcblxcbi5jb250YWN0SW5mbyB7XFxuICBwYWRkaW5nOiAydmg7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDU7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmgzIHtcXG4gIHBhZGRpbmc6IDJ2aDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLCtDQUErQztJQUMvQyxtREFBbUQ7QUFDdkQ7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IscUVBQXFFO0lBQ3JFLG1EQUFtRDtJQUNuRCw4QkFBOEI7SUFDOUIsVUFBVTtBQUNkOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLFVBQVU7SUFDVixTQUFTO0lBQ1QsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYjtBQUNKOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7OztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTs7QUFFaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osU0FBUztJQUNULGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtBQUNqQjs7O0FBR0E7SUFDSSxzQkFBc0I7SUFDdEIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0U7TUFDRSxvQkFBb0I7SUFDdEI7RUFDRjs7O0VBR0E7SUFDRSwwQ0FBMEM7RUFDNUM7O0VBRUE7SUFDRSwrQ0FBK0M7RUFDakQ7O0VBRUE7SUFDRSw2Q0FBNkM7RUFDL0M7O0VBRUE7SUFDRSwrQ0FBK0M7RUFDakQ7O0VBRUE7SUFDRSw2Q0FBNkM7RUFDL0M7O0VBRUE7SUFDRSwrQ0FBK0M7RUFDakQ7O0VBRUE7SUFDRSw2Q0FBNkM7RUFDL0M7O0VBRUE7SUFDRSwrQ0FBK0M7RUFDakQ7OztFQUdBO0lBQ0UsK0NBQStDO0VBQ2pEOztFQUVBO0lBQ0UsK0NBQStDO0VBQ2pEOzs7O0FBSUY7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLHFFQUFxRTtBQUN6RTs7QUFFQTs7SUFFSSx3QkFBd0I7SUFDeEIsdUNBQXVDO0lBQ3ZDLHdDQUF3QztJQUN4QyxpQkFBaUI7SUFDakIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHNDQUFzQztJQUN0QyxrQkFBa0I7SUFDbEIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLGVBQWU7SUFDZixZQUFZO0lBQ1oseUNBQXlDO0lBQ3pDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsbURBQW9DO0lBQ3BDLHdDQUF3QztJQUN4Qyw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixRQUFRO0lBQ1IsUUFBUTtJQUNSLGdDQUFnQztJQUNoQyw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsUUFBUTtJQUNSLHVEQUF1RDtJQUN2RCw4QkFBOEI7SUFDOUIsYUFBYTs7QUFFakI7Ozs7QUFJQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsZUFBZTtJQUNmLGlDQUFpQztJQUNqQyxpQ0FBaUM7SUFDakMsaUNBQWlDO0lBQ2pDLGlDQUFpQztJQUNqQyxpQ0FBaUM7RUFDbkM7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztJQUNYLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLE1BQU07RUFDUjs7RUFFQTtNQUNJLFVBQVU7RUFDZDs7O0FBR0Y7SUFDSSxVQUFVO0FBQ2Q7Ozs7Ozs7OztBQVNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsSUFBSSxTQUFTLENBQUM7SUFDZCxNQUFNLFNBQVMsQ0FBQztFQUNsQjs7RUFFQTtJQUNFLElBQUksU0FBUyxDQUFDO0lBQ2QsTUFBTSxTQUFTLENBQUM7RUFDbEI7O0VBRUE7SUFDRSxJQUFJLFNBQVMsQ0FBQztJQUNkLE1BQU0sU0FBUyxDQUFDO0VBQ2xCOztFQUVBO0lBQ0UsSUFBSSxTQUFTLENBQUM7SUFDZCxNQUFNLFNBQVMsQ0FBQztFQUNsQjs7RUFFQTtJQUNFLElBQUksU0FBUyxDQUFDO0lBQ2QsTUFBTSxTQUFTLENBQUM7RUFDbEI7O0VBRUEsc0JBQXNCOztBQUV4QjtNQUNNLGFBQWE7TUFDYixXQUFXO01BQ1gsc0NBQXNDO01BQ3RDLGdDQUFnQztNQUNoQyxxQkFBcUI7TUFDckIsUUFBUTtFQUNaOztBQUVGO0lBQ0ksbUNBQW1DO0lBQ25DLDhCQUE4QjtBQUNsQzs7O0FBR0E7SUFDSSxtQ0FBbUM7TUFDakMseUJBQXlCO01BQ3pCLFlBQVk7TUFDWixhQUFhO01BQ2Isa0JBQWtCO01BQ2xCLDZCQUE2QjtNQUM3QixtQkFBbUI7TUFDbkIsWUFBWTtNQUNaLFdBQVc7TUFDWCw4QkFBOEI7RUFDbEM7OztBQUdGO01BQ00sV0FBVztNQUNYLFlBQVk7TUFDWixZQUFZO01BQ1osMEJBQTBCO01BQzFCLGtCQUFrQjtNQUNsQixvQkFBb0I7RUFDeEI7Ozs7QUFJRjtNQUNNLGlDQUFpQztNQUNqQyxtQ0FBbUM7TUFDbkMsYUFBYTtNQUNiLDZCQUE2QjtNQUM3QixvQkFBb0I7RUFDeEI7Ozs7RUFJQTtJQUNFLEtBQUssc0RBQXNELEVBQUU7SUFDN0QsTUFBTSx5REFBeUQsRUFBRTtJQUNqRSxNQUFNLHVEQUF1RCxFQUFFO0lBQy9ELE1BQU0sc0RBQXNELEVBQUU7SUFDOUQsTUFBTSx1REFBdUQsRUFBRTtJQUMvRCxNQUFNLHdEQUF3RCxFQUFFO0lBQ2hFLE1BQU0sdURBQXVELEVBQUU7SUFDL0QsTUFBTSx1REFBdUQsRUFBRTtJQUMvRCxNQUFNLHdEQUF3RCxFQUFFO0lBQ2hFLE1BQU0sc0RBQXNELEVBQUU7SUFDOUQsT0FBTyx3REFBd0QsRUFBRTtFQUNuRTs7QUFFRjtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLCtCQUErQjtFQUNqQzs7QUFFRjtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1QsWUFBWTtJQUNaLGFBQWEsRUFBRSw2QkFBNkI7SUFDNUMsa0RBQXdDO0lBQ3hDLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULFlBQVk7SUFDWixhQUFhLEVBQUUsNkJBQTZCO0lBQzVDLGtEQUF5QztJQUN6QyxxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxZQUFZO0lBQ1osYUFBYTtJQUNiLGtEQUF3QztJQUN4QyxxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxZQUFZO0lBQ1osYUFBYTtJQUNiLGtEQUF1QztJQUN2QyxxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUVBLHdCQUF3Qjs7O0FBR3hCO0lBQ0ksYUFBYTtJQUNiLGlDQUFpQztJQUNqQyxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7O0FBR0E7RUFDRSxZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHsgXFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBmMTYwYztcXG59XFxuXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDR2dyAzMHZ3IDFmciAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMHZoIDIyLjV2aCAyNi4yNXZoIDI2LjI1dmggNXZoO1xcbn1cXG5cXG4ubGVmdC1zaWRlLWJhciB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyA1IC8gMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG59XFxuXFxuLmJhbGxUd28ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNSU7XFxuICAgIGxlZnQ6IDMwJTtcXG4gICAgd2lkdGg6IDUwdmg7XFxuICAgIGhlaWdodDogNTB2aDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwMHB4O1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcgLCB3aGl0ZSA1MCUsIHJnYigyNTUsIDE2NiwgMCkgMTAwJSk7XFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDJweCAxMHB4IHJnYigxOTQsIDE3NSwgOTEpKTtcXG4gICAgdHJhbnNpdGlvbjogMzUwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4ubGVmdC1tb2RhbC1vbmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYxNjBjO1xcbiAgICB3aWR0aDogMXZ3O1xcbn1cXG5cXG4ubGVmdC1tb2RhbC10d28ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZkM2QxO1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gNSAvIDI7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgd2lkdGg6IDZ2aDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgICB0cmFuc2l0aW9uOiAxNTAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5kcm9wcGluZyB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQgOmxpbmVhci1ncmFkaWVudCggI2NlOTQ0OSAyNSUsICM0MzIzMDQgMTAwJSlcXG59XFxuXFxuLmhhbmR3cml0dGVuIHtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDFzO1xcbiAgICBncmlkLWNvbHVtbjogMi80O1xcbiAgICBncmlkLXJvdzogMS8zO1xcbiAgICB6LWluZGV4OiA5OTk7XFxufVxcblxcblxcbi5oYW5kd3JpdHRlbiAuc3ZnIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDMwdmg7XFxuICAgIHdpZHRoOiAxMDB2aDtcXG4gICAgei1pbmRleDogOTk5O1xcbiAgICBcXG59XFxuI3dyaXR0ZW4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNSU7XFxuICAgIGxlZnQ6IC02MCU7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBoZWlnaHQ6IDEydmg7XFxuICAgIGxlZnQ6IDEwJTtcXG4gICAgei1pbmRleDogMTAwMDsgICBcXG59XFxuXFxuLm1hc2sge1xcbiAgICBmaWxsOiBub25lO1xcbiAgICBzdHJva2U6IHdoaXRlO1xcbn1cXG5cXG5cXG4ubWFzayB7XFxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDEwMDA7XFxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxMDAwO1xcbiAgfVxcbiAgXFxuICBAa2V5ZnJhbWVzIHN0cm9rZU9mZnNldCB7XFxuICAgIHRvIHtcXG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcXG4gICAgfVxcbiAgfVxcbiAgXFxuXFxuICAjTWFzay1nZWxhY2Npby1HbWFpbiB7XFxuICAgIGFuaW1hdGlvbjogc3Ryb2tlT2Zmc2V0IDFzIGxpbmVhciBmb3J3YXJkcztcXG4gIH1cXG5cXG4gICNNYXNrLWdlbGFjY2lvLUdzdWIge1xcbiAgICBhbmltYXRpb246IHN0cm9rZU9mZnNldCAycyBsaW5lYXIgZm9yd2FyZHMgMC41cztcXG4gIH1cXG5cXG4gICNNYXNrLWdlbGFjY2lvLWUge1xcbiAgICBhbmltYXRpb246IHN0cm9rZU9mZnNldCAxcyBsaW5lYXIgZm9yd2FyZHMgMXM7IFxcbiAgfVxcblxcbiAgI01hc2stZ2VsYWNjaW8tbCB7XFxuICAgIGFuaW1hdGlvbjogc3Ryb2tlT2Zmc2V0IDFzIGxpbmVhciBmb3J3YXJkcyAxLjVzOyBcXG4gIH1cXG5cXG4gICNNYXNrLWdlbGFjY2lvLWEge1xcbiAgICBhbmltYXRpb246IHN0cm9rZU9mZnNldCAxcyBsaW5lYXIgZm9yd2FyZHMgMnM7IFxcbiAgfVxcblxcbiAgI01hc2stZ2VsYWNjaW8tYyB7XFxuICAgIGFuaW1hdGlvbjogc3Ryb2tlT2Zmc2V0IDFzIGxpbmVhciBmb3J3YXJkcyAyLjVzOyBcXG4gIH1cXG5cXG4gICNNYXNrLWdlbGFjY2lvLWNjIHtcXG4gICAgYW5pbWF0aW9uOiBzdHJva2VPZmZzZXQgMXMgbGluZWFyIGZvcndhcmRzIDNzOyBcXG4gIH1cXG5cXG4gICNNYXNrLWdlbGFjY2lvLWltYWluIHtcXG4gICAgYW5pbWF0aW9uOiBzdHJva2VPZmZzZXQgMXMgbGluZWFyIGZvcndhcmRzIDMuNXM7IFxcbiAgfVxcblxcblxcbiAgI01hc2stZ2VsYWNjaW8tbyB7XFxuICAgIGFuaW1hdGlvbjogc3Ryb2tlT2Zmc2V0IDFzIGxpbmVhciBmb3J3YXJkcyA0LjBzOyBcXG4gIH1cXG5cXG4gICNNYXNrLWdlbGFjY2lvLWlzdWIge1xcbiAgICBhbmltYXRpb246IHN0cm9rZU9mZnNldCAycyBsaW5lYXIgZm9yd2FyZHMgNC43czsgXFxuICB9XFxuXFxuXFxuXFxuLnRleHQtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHZ3O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwdnc7XFxuICAgIGdyaWQtYXJlYTogMiAvIDQgLyAzIC8gNjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB6LWluZGV4OiAxMDA0O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IDM1MDBtcztcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnICxyZ2IoMjU1LCAxNjYsIDApIDUwJSAsIHdoaXRlIDEwMCUpO1xcbn1cXG5cXG4udGV4dE9uZSAsIC50ZXh0VHdvIHtcXG5cXG4gICAgcGFkZGluZzogMXZoIDF2aCAwdmggMXZoO1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHJnYigyNTUsIDE2NiwgMCk7XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHJnYigyNTUsIDE2NiwgMCk7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICB3aWR0aDogNDAlO1xcbn1cXG5cXG4udGV4dE9uZSB7XFxuICAgIGNvbG9yIDpyZ2IoMjU1LCAxNjYsIDApO1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgcmdiKDI1NSwgMTY2LCAwKTtcXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggI2Q2ZDNkMTtcXG59XFxuXFxuLnRleHRUd28ge1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDI1NSwgMTY2LCAwKTtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCByZ2IoMjU1LCAxNjYsIDApO1xcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xcbn1cXG5cXG4uZmFkZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5pbWFnZS1jb250YWluZXIge1xcbiAgICB6LWluZGV4OiAxMDAyO1xcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gNSAvIDQ7IFxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoaWNlLWNyZWFtLXNob3AuYXZpZik7XFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coNHB4IDBweCAzcHggI2NkYWQ4Zik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbmltZyB7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxuICAgIGdyaWQtYXJlYTogMiAvIDIgLyA1IC8gMztcXG59XFxuXFxuLmJ1dHRvbi1tb2RhbCB7XFxuICAgIGdyaWQtYXJlYTogMyAvIDMgLyA1IC8gNjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGdhcDogMXZoO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6ICAxZnIgMWZyIDFmcjtcXG4gICAgdHJhbnNpdGlvbjogMTUwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uYnV0dG9uLW9uZSwgLmJ1dHRvbi10d28sIC5idXR0b24tdGhyZWUgIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2Q4ZDVkMCA1MCUgLCAjYmU4MTQyIDEwMCUpO1xcbiAgICB0cmFuc2l0aW9uOiAxNTAwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIHotaW5kZXg6IDEwMDE7XFxuICAgIFxcbn1cXG5cXG5cXG5cXG5idXR0b24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6YmxvY2s7XFxuICAgIGhlaWdodDogNDVweDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBtYXJnaW46IDEwcHggN3B4O1xcbiAgICBwYWRkaW5nOiA1cHggNXB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICAgIGNvbG9yOiAjMzgzNzM2O1xcbiAgICBib3JkZXI6IDJweCAjMzgzNzM2IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIG91dGxpbmU6IDA7XFxuICAgIG92ZXJmbG93OmhpZGRlbjtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAgICAgICAgIDAuMDhzIGVhc2UtaW47XFxuICAgIC1vLXRyYW5zaXRpb246ICAgICAgMC4wOHMgZWFzZS1pbjtcXG4gICAgLW1zLXRyYW5zaXRpb246ICAgICAwLjA4cyBlYXNlLWluO1xcbiAgICAtbW96LXRyYW5zaXRpb246ICAgIDAuMDhzIGVhc2UtaW47XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4wOHMgZWFzZS1pbjtcXG4gIH1cXG4gIFxcbiAgYnV0dG9uOmhvdmVyIHtcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxuICB9XFxuICBcXG4gIGJ1dHRvbjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kOiAjMzgzNzM2O1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDEwMCU7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICB0cmFuc2l0aW9uOiB0b3AgMC4wOXMgZWFzZS1pbjtcXG4gIH1cXG4gIFxcbiAgYnV0dG9uOmhvdmVyOmJlZm9yZSB7XFxuICAgIHRvcDogMDtcXG4gIH1cXG5cXG4gIC5tZW51QnRuICwgLmNvbnRhY3RCdG4ge1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICBcXG4gXFxuLnJldmVhbGluZyB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcblxcblxcblxcblxcblxcblxcblxcbi5idXR0b24tdHdvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JlODE0MjtcXG59XFxuXFxuLmJ1dHRvbi10aHJlZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MzIzMDQ7XFxufVxcblxcbi5leHRlbmRpbmcge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmV4dE9uZSB7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbi5leHRUd28ge1xcbiAgICB3aWR0aDogNTUlO1xcbn1cXG5cXG4uZXh0VGhyZWUge1xcbiAgICB3aWR0aDogNjAlO1xcbn1cXG5cXG4uaW1hZ2UtY29udGFpbmVyIHtcXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gN3M7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gNC41cztcXG4gICAgLW1vei1hbmltYXRpb246IGZhZGVJbiA0LjVzO1xcbiAgICAtby1hbmltYXRpb246IGZhZGVJbiA0LjVzO1xcbiAgICAtbXMtYW5pbWF0aW9uOiBmYWRlSW4gNC41cztcXG4gIH1cXG4gIEBrZXlmcmFtZXMgZmFkZUluIHtcXG4gICAgMCUge29wYWNpdHk6MDt9XFxuICAgIDEwMCUge29wYWNpdHk6MTt9XFxuICB9XFxuICBcXG4gIEAtbW96LWtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICAwJSB7b3BhY2l0eTowO31cXG4gICAgMTAwJSB7b3BhY2l0eToxO31cXG4gIH1cXG4gIFxcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAgIDAlIHtvcGFjaXR5OjA7fVxcbiAgICAxMDAlIHtvcGFjaXR5OjE7fVxcbiAgfVxcbiAgXFxuICBALW8ta2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAgIDAlIHtvcGFjaXR5OjA7fVxcbiAgICAxMDAlIHtvcGFjaXR5OjE7fVxcbiAgfVxcbiAgXFxuICBALW1zLWtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICAwJSB7b3BhY2l0eTowO31cXG4gICAgMTAwJSB7b3BhY2l0eToxO31cXG4gIH0gXFxuXFxuICAvKiBNZW51IHBhZ2Ugc3R5bGluZyAqL1xcblxcbi5tZW51Q29udGVudCB7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwdmggMWZyIDFmcjtcXG4gICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgZ2FwOiA0dmg7XFxuICB9XFxuXFxuaDEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk3LCAxNzcsIDY2KTtcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4IGJsYWNrO1xcbn1cXG5cXG5cXG4ubWVudUhlYWRlciwgLmNvbnRhY3RIZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk3LCAxNzcsIDY2KTtcXG4gICAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDUgO1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxuICB9XFxuXFxuICBcXG5zdmc6bm90KCN3cml0dGVuICApIHtcXG4gICAgICB3aWR0aDogMTB2dztcXG4gICAgICBoZWlnaHQ6IDEwdnc7XFxuICAgICAgcGFkZGluZzogNXZoO1xcbiAgICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2Utb3V0O1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1MDBweDtcXG4gIH1cXG5cXG5cXG5cXG5zdmc6bm90KCN3cml0dGVuKTpob3ZlciB7XFxuICAgICAgYW5pbWF0aW9uOiBzaGFrZSAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgICAgIHotaW5kZXg6IDEwMDA7XFxuICAgICAgYmFja2dyb3VuZDogcmdiKDE5NywgMTc3LCA2Nik7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNTAwcHg7XFxuICB9XFxuXFxuXFxuXFxuICBAa2V5ZnJhbWVzIHNoYWtlIHtcXG4gICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIDFweCkgcm90YXRlKDBkZWcpIHNjYWxlKDEuMSk7IH1cXG4gICAgMTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgLTJweCkgcm90YXRlKC0xZGVnKSBzY2FsZSgxLjEpOyB9XFxuICAgIDIwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIDBweCkgcm90YXRlKDFkZWcpIHNjYWxlKDEuMSk7IH1cXG4gICAgMzAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoM3B4LCAycHgpIHJvdGF0ZSgwZGVnKSBzY2FsZSgxLjEpOyB9XFxuICAgIDQwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgLTFweCkgcm90YXRlKDFkZWcpIHNjYWxlKDEuMik7IH1cXG4gICAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgMnB4KSByb3RhdGUoLTFkZWcpIHNjYWxlKDEuMik7IH1cXG4gICAgNjAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgMXB4KSByb3RhdGUoMGRlZykgc2NhbGUoMS4yKTsgfVxcbiAgICA3MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzcHgsIDFweCkgcm90YXRlKC0xZGVnKSBzY2FsZSgxLjIpOyB9XFxuICAgIDgwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIC0xcHgpIHJvdGF0ZSgxZGVnKSBzY2FsZSgxLjEpOyB9XFxuICAgIDkwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgMnB4KSByb3RhdGUoMGRlZykgc2NhbGUoMS4xKTsgfVxcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAtMnB4KSByb3RhdGUoLTFkZWcpIHNjYWxlKDEuMSk7IH1cXG4gIH1cXG5cXG4uZGVjb3JCYWxsT25lICwgLmRlY29yQmFsbFR3bywgLmRlY29yQmFsbFRocmVlLCAuZGVjb3JCYWxsRm91ciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiA0MHZoO1xcbiAgICB3aWR0aDogNDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmViZWNjYXB1cnBsZTtcXG4gIH1cXG5cXG4uZGVjb3JCYWxsT25lIHtcXG4gICAgYm90dG9tOiAwJTtcXG4gICAgbGVmdDogMTIlO1xcbiAgICB3aWR0aDogMzIwcHg7XFxuICAgIGhlaWdodDogMTYwcHg7IC8qIGFzIHRoZSBoYWxmIG9mIHRoZSB3aWR0aCAqL1xcbiAgICBiYWNrZ3JvdW5kOnVybCguL2Fzc2V0cy9kZWNvci1maXJzdC5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNzBweDsgIFxcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTcwcHg7IFxcbiAgICBib3JkZXI6IDEwcHggc29saWQgeWVsbG93O1xcbiAgICBib3JkZXItYm90dG9tOiAwO1xcbn1cXG5cXG4uZGVjb3JCYWxsVHdvIHtcXG4gICAgYm90dG9tOiAwJTtcXG4gICAgbGVmdDogMzIlO1xcbiAgICB3aWR0aDogMzIwcHg7XFxuICAgIGhlaWdodDogMTYwcHg7IC8qIGFzIHRoZSBoYWxmIG9mIHRoZSB3aWR0aCAqL1xcbiAgICBiYWNrZ3JvdW5kOnVybCguL2Fzc2V0cy9kZWNvci1zZWNvbmQuanBnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNzBweDsgIFxcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTcwcHg7IFxcbiAgICBib3JkZXI6IDEwcHggc29saWQgeWVsbG93O1xcbiAgICBib3JkZXItYm90dG9tOiAwO1xcbn1cXG5cXG4uZGVjb3JCYWxsVGhyZWUge1xcbiAgICBib3R0b206IDAlO1xcbiAgICBsZWZ0OiA1MiU7XFxuICAgIHdpZHRoOiAzMjBweDtcXG4gICAgaGVpZ2h0OiAxNjBweDsgXFxuICAgIGJhY2tncm91bmQ6dXJsKC4vYXNzZXRzL2RlY29yLXRocmVlLmpwZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTcwcHg7ICBcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE3MHB4OyBcXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkIHllbGxvdztcXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcXG59XFxuXFxuLmRlY29yQmFsbEZvdXIge1xcbiAgICBib3R0b206IDAlO1xcbiAgICBsZWZ0OiA3MiU7XFxuICAgIHdpZHRoOiAzMjBweDtcXG4gICAgaGVpZ2h0OiAxNjBweDsgXFxuICAgIGJhY2tncm91bmQ6dXJsKC4vYXNzZXRzL2RlY29yLWZvdXIuanBnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNzBweDsgIFxcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTcwcHg7IFxcbiAgICBib3JkZXI6IDEwcHggc29saWQgeWVsbG93O1xcbiAgICBib3JkZXItYm90dG9tOiAwO1xcbn1cXG5cXG4vKiBDb250YWN0IHBhZ2UgbGF5b3V0ICovXFxuXFxuXFxuLmNvbnRhY3RDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwdmggMWZyIDIwdmg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jb250YWN0SGVhZGVyIC5tZW51QnRuLCAubWVudUhlYWRlciAuY29udGFjdEJ0biB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcblxcbi5jb250YWN0SW5mbyB7XFxuICBwYWRkaW5nOiAydmg7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDU7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmgzIHtcXG4gIHBhZGRpbmc6IDJ2aDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZlcnNpb249XFxcIjEuMVxcXCIgaWQ9XFxcIkxheWVyXzFcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHg9XFxcIjBweFxcXCIgeT1cXFwiMHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMzQ3LjUyOSAzNDcuNTI5XFxcIiBzdHlsZT1cXFwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNDcuNTI5IDM0Ny41Mjk7XFxcIiB4bWw6c3BhY2U9XFxcInByZXNlcnZlXFxcIj48ZyBpZD1cXFwiWE1MSURfMTQxNl9cXFwiPjxwYXRoIGlkPVxcXCJYTUxJRF81ODVfXFxcIiBzdHlsZT1cXFwiZmlsbDojRkZBMjUwO1xcXCIgZD1cXFwiTTE3My43NjQsMzQ3LjUyOUwxNzMuNzY0LDM0Ny41MjljLTEzLjczOCwwLTI0Ljk3OC0xMS4yNC0yNC45NzgtMjQuOTc4di05NS45MDIgYzAtMTMuNzM4LDExLjI0LTI0Ljk3OCwyNC45NzgtMjQuOTc4bDAsMGMxMy43MzgsMCwyNC45NzgsMTEuMjQsMjQuOTc4LDI0Ljk3OHY5NS45MDIgQzE5OC43NDMsMzM2LjI4OCwxODcuNTAyLDM0Ny41MjksMTczLjc2NCwzNDcuNTI5elxcXCI+PC9wYXRoPjxwYXRoIGlkPVxcXCJYTUxJRF81ODRfXFxcIiBzdHlsZT1cXFwiZmlsbDojRkY1OTU5O1xcXCIgZD1cXFwiTTIxOS4wMTQsMjU5LjM0N2gtOTAuNWMtMjAuODUxLDAtMzcuNzU0LTE2LjkwMy0zNy43NTQtMzcuNzU0VjgzLjAwNCBDOTAuNzYsMzcuMTYyLDEyNy45MjIsMCwxNzMuNzY0LDBsMCwwYzQ1Ljg0MiwwLDgzLjAwNCwzNy4xNjIsODMuMDA0LDgzLjAwNHYxMzguNTg5IEMyNTYuNzY5LDI0Mi40NDQsMjM5Ljg2NiwyNTkuMzQ3LDIxOS4wMTQsMjU5LjM0N3pcXFwiPjwvcGF0aD48cGF0aCBpZD1cXFwiWE1MSURfMTQxN19cXFwiIHN0eWxlPVxcXCJmaWxsOiNGRkZFQjk7XFxcIiBkPVxcXCJNMjU2Ljc2OSwxMjYuMzY5VjgzLjAwNEMyNTYuNzY5LDM3LjE2MiwyMTkuNjA2LDAsMTczLjc2NCwwbDAsMCBDMTI3LjkyMiwwLDkwLjc2LDM3LjE2Miw5MC43Niw4My4wMDR2NDMuMzY1SDI1Ni43Njl6XFxcIj48L3BhdGg+PGcgaWQ9XFxcIlhNTElEXzE0MThfXFxcIj48cGF0aCBpZD1cXFwiWE1MSURfMTQxOV9cXFwiIHN0eWxlPVxcXCJmaWxsOiNGRkZFQjk7XFxcIiBkPVxcXCJNMTY1LjIyNSwxMjQuMDQ2Yy0wLjEwNSwwLjgwOS0wLjE2NSwxLjYzMS0wLjE2NSwyLjQ2N3Y1NS45MTQgYzAsMTAuNTg0LDguNjU5LDE5LjI0MywxOS4yNDMsMTkuMjQzbDAsMGMxMC41ODQsMCwxOS4yNDMtOC42NiwxOS4yNDMtMTkuMjQzdi01Ny45MTRjMC0wLjgzNi0wLjA2LDAuMzQyLTAuMTY1LTAuNDY3SDE2NS4yMjV6XFxcIj48L3BhdGg+PHBhdGggaWQ9XFxcIlhNTElEXzE0MjBfXFxcIiBzdHlsZT1cXFwiZmlsbDojRkZGRUI5O1xcXCIgZD1cXFwiTTEyNy45MSwxMjQuMDQ2djI5LjEzOGMwLDEwLjU4NCw4LjY2LDE5LjI0MywxOS4yNDMsMTkuMjQzbDAsMCBjMTAuNTg0LDAsMTkuMjQzLTguNjU5LDE5LjI0My0xOS4yNDN2LTI5LjEzOEMxNjYuMzk2LDEyNC4wNDYsMTI3LjkxLDEyNC4wNDYsMTI3LjkxLDEyNC4wNDZ6XFxcIj48L3BhdGg+PHBhdGggaWQ9XFxcIlhNTElEXzE0MjFfXFxcIiBzdHlsZT1cXFwiZmlsbDojRkZGRUI5O1xcXCIgZD1cXFwiTTkwLjc2LDEyNC4wNDZ2NTAuMzAxYzAsMTAuNTg0LDguNjYsMTkuMjQzLDE5LjI0MywxOS4yNDMgczE5LjI0My04LjY1OSwxOS4yNDMtMTkuMjQzdi01MC4zMDFDMTI5LjI0NiwxMjQuMDQ2LDkwLjc2LDEyNC4wNDYsOTAuNzYsMTI0LjA0NnpcXFwiPjwvcGF0aD48L2c+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmVyc2lvbj1cXFwiMS4xXFxcIiBpZD1cXFwiQ2FwYV8xXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB4PVxcXCIwcHhcXFwiIHk9XFxcIjBweFxcXCIgdmlld0JveD1cXFwiMCAwIDU5IDU5XFxcIiBzdHlsZT1cXFwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1OSA1OTtcXFwiIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiPjxnPjxnPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNGQkQ0OTA7XFxcIiBkPVxcXCJNMjUuNSw0MnYxNGMwLDEuMSwwLjksMiwyLDJoNGMxLjEsMCwyLTAuOSwyLTJWNDJIMjUuNXpcXFwiPjwvcGF0aD48cGF0aCBzdHlsZT1cXFwiZmlsbDojRkJENDkwO1xcXCIgZD1cXFwiTTMxLjUsNTloLTRjLTEuNjU0LDAtMy0xLjM0Ni0zLTNWNDFoMTB2MTVDMzQuNSw1Ny42NTQsMzMuMTU0LDU5LDMxLjUsNTl6IE0yNi41LDQzdjEzIGMwLDAuNTUyLDAuNDQ4LDEsMSwxaDRjMC41NTIsMCwxLTAuNDQ4LDEtMVY0M0gyNi41elxcXCI+PC9wYXRoPjwvZz48cGF0aCBzdHlsZT1cXFwiZmlsbDojRUVBRjRCO1xcXCIgZD1cXFwiTTMzLjUwMSw1Ny41Yy0wLjA4NiwwLTAuMTc0LTAuMDExLTAuMjYxLTAuMDM0Yy0xLjI2Ni0wLjM0MS02LjIyNy0yLjM3Ni01LjUxNC01LjQyOSBjMC4xODMtMC43ODUtMS40NTctMi4wNTctMi42Ni0yLjYzNmMtMC40OTgtMC4yNC0wLjcwNy0wLjgzNy0wLjQ2OC0xLjMzNWMwLjI0MS0wLjQ5NiwwLjgzOS0wLjcwNiwxLjMzNS0wLjQ2OCBjMC40NDksMC4yMTcsNC4zNzEsMi4xOSwzLjc0LDQuODk0Yy0wLjIyOCwwLjk3NSwyLjM4NiwyLjU4NSw0LjA4NiwzLjA0MmMwLjUzMywwLjE0NCwwLjg1LDAuNjkyLDAuNzA2LDEuMjI2IEMzNC4zNDYsNTcuMjA2LDMzLjk0MSw1Ny41LDMzLjUwMSw1Ny41elxcXCI+PC9wYXRoPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNFRUFGNEI7XFxcIiBkPVxcXCJNMzMuNSw0OWMtMi41MjMsMC00LjUtMS41MzctNC41LTMuNXMxLjk3Ny0zLjUsNC41LTMuNWMwLjU1MywwLDEsMC40NDcsMSwxcy0wLjQ0NywxLTEsMSBjLTEuNDc0LDAtMi41LDAuNzktMi41LDEuNXMxLjAyNiwxLjUsMi41LDEuNWMwLjU1MywwLDEsMC40NDcsMSwxUzM0LjA1Myw0OSwzMy41LDQ5elxcXCI+PC9wYXRoPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNGOUQ3MEI7XFxcIiBkPVxcXCJNMzkuNSw0MmgtMjBsNS0zOGMwLTIuMiwxLjgtNCw0LTRoMmMyLjIsMCw0LDEuOCw0LDRMMzkuNSw0MnpcXFwiPjwvcGF0aD48cGF0aCBzdHlsZT1cXFwiZmlsbDojRjlFQTgwO1xcXCIgZD1cXFwiTTMyLjAwMywyMi4wMzhjLTEuMzc2LDAtMi40OTYtMS4xMi0yLjQ5Ni0yLjQ5NnYtMi42OTRjMC0wLjU1MywwLjQ0Ny0xLDEtMXMxLDAuNDQ3LDEsMXYyLjY5NCBjMCwwLjI2OSwwLjIyOCwwLjQ5NiwwLjQ5NiwwLjQ5NmMwLjI3LDAsMC40OTctMC4yMjgsMC40OTctMC40OTZ2LTIuNjk0YzAtMC41NTMsMC40NDctMSwxLTFzMSwwLjQ0NywxLDF2Mi42OTQgQzM0LjUsMjAuOTE4LDMzLjM4LDIyLjAzOCwzMi4wMDMsMjIuMDM4elxcXCI+PC9wYXRoPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNGOUVBODA7XFxcIiBkPVxcXCJNMjYuODA1LDMwLjAzOGMtMS4zNzcsMC0yLjQ5Ny0xLjEyLTIuNDk3LTIuNDk2di0xLjQ5N2MwLTAuNTUzLDAuNDQ3LTEsMS0xczEsMC40NDcsMSwxdjEuNDk3IGMwLDAuMjY5LDAuMjI4LDAuNDk2LDAuNDk3LDAuNDk2YzAuMjY5LDAsMC40OTYtMC4yMjgsMC40OTYtMC40OTZ2LTEuNDk3YzAtMC41NTMsMC40NDctMSwxLTFzMSwwLjQ0NywxLDF2MS40OTcgQzI5LjMwMSwyOC45MTgsMjguMTgxLDMwLjAzOCwyNi44MDUsMzAuMDM4elxcXCI+PC9wYXRoPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNGOUVBODA7XFxcIiBkPVxcXCJNMzIuOTk3LDM3LjAzOGMtMS4zNzcsMC0yLjQ5Ny0xLjEyLTIuNDk3LTIuNDk2di0xLjQ5N2MwLTAuNTUzLDAuNDQ3LTEsMS0xczEsMC40NDcsMSwxdjEuNDk3IGMwLDAuMjY5LDAuMjI4LDAuNDk2LDAuNDk3LDAuNDk2YzAuMjY5LDAsMC40OTYtMC4yMjgsMC40OTYtMC40OTZ2LTEuNDk3YzAtMC41NTMsMC40NDctMSwxLTFzMSwwLjQ0NywxLDF2MS40OTcgQzM1LjQ5MywzNS45MTgsMzQuMzczLDM3LjAzOCwzMi45OTcsMzcuMDM4elxcXCI+PC9wYXRoPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNGOUVBODA7XFxcIiBkPVxcXCJNMjcuOTk3LDExLjk5M2MtMS4zNzcsMC0yLjQ5Ny0xLjEyLTIuNDk3LTIuNDk2VjhjMC0wLjU1MywwLjQ0Ny0xLDEtMXMxLDAuNDQ3LDEsMXYxLjQ5NyBjMCwwLjI2OSwwLjIyOCwwLjQ5NiwwLjQ5NywwLjQ5NmMwLjI2OSwwLDAuNDk2LTAuMjI4LDAuNDk2LTAuNDk2VjhjMC0wLjU1MywwLjQ0Ny0xLDEtMXMxLDAuNDQ3LDEsMXYxLjQ5NyBDMzAuNDkzLDEwLjg3MywyOS4zNzMsMTEuOTkzLDI3Ljk5NywxMS45OTN6XFxcIj48L3BhdGg+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmVyc2lvbj1cXFwiMS4xXFxcIiBpZD1cXFwiTGF5ZXJfMVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgeD1cXFwiMHB4XFxcIiB5PVxcXCIwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAyODkuOTQgMjg5Ljk0XFxcIiBzdHlsZT1cXFwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyODkuOTQgMjg5Ljk0O1xcXCIgeG1sOnNwYWNlPVxcXCJwcmVzZXJ2ZVxcXCI+PGc+PHBhdGggc3R5bGU9XFxcImZpbGw6I0NCNEU0NDtcXFwiIGQ9XFxcIk0xNDQuOTcsMGMzMC4wMjcsMCw1NC4zNjQsMjQuMzQ2LDU0LjM2NCw1NC4zNjRjMCwzMC4wMjctMjQuMzM3LDU0LjM2NC01NC4zNjQsNTQuMzY0IGMtMzAuMDE4LDAtNTQuMzY0LTI0LjMzNy01NC4zNjQtNTQuMzY0QzkwLjYwNiwyNC4zNDYsMTE0Ljk1MiwwLDE0NC45NywwelxcXCI+PC9wYXRoPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNFNTY4NUU7XFxcIiBkPVxcXCJNMTA0LjE5NywyNy4xODJjMjcuNTI2LDAsNDkuODMzLDIyLjMxNiw0OS44MzMsNDkuODMzYzAsMjcuNTI2LTIyLjMwNyw0OS44MzMtNDkuODMzLDQ5LjgzMyBzLTQ5LjgzMy0yMi4zMDctNDkuODMzLTQ5LjgzM0M1NC4zNjQsNDkuNDk4LDc2LjY3MSwyNy4xODIsMTA0LjE5NywyNy4xODJ6XFxcIj48L3BhdGg+PHBhdGggc3R5bGU9XFxcImZpbGw6I0U5ODE3OTtcXFwiIGQ9XFxcIk0xODUuNzQyLDI3LjE4MmMyNy41MTcsMCw0OS44MzMsMjIuMzE2LDQ5LjgzMyw0OS44MzNjMCwyNy41MjYtMjIuMzE2LDQ5LjgzMy00OS44MzMsNDkuODMzIGMtMjcuNTM1LDAtNDkuODMzLTIyLjMwNy00OS44MzMtNDkuODMzQzEzNS45MDksNDkuNDk4LDE1OC4yMDcsMjcuMTgyLDE4NS43NDIsMjcuMTgyelxcXCI+PC9wYXRoPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNFRkM3NUU7XFxcIiBkPVxcXCJNNTQuMzY0LDgxLjI2NXY0NS41ODRjMCwxMC4wMDMsOC4xMTgsMTguMTIxLDE4LjEyMSwxOC4xMjFoMTguMTIxbDQ1LjMwMywxNDQuOTdoMTguMTIxIGw0NS4zMDMtMTQ0Ljk3aDE4LjEyMWMxMC4wMDMsMCwxOC4xMjEtOC4xMTgsMTguMTIxLTE4LjEyMVY4MS4yNjVINTQuMzY0elxcXCI+PC9wYXRoPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNEN0IzNTQ7XFxcIiBkPVxcXCJNNTQuMzY0LDk5LjY2N2gxODEuMjEydjI3LjE4Mkg1NC4zNjRWOTkuNjY3elxcXCI+PC9wYXRoPjxwb2x5Z29uIHN0eWxlPVxcXCJmaWxsOiNEN0IzNTQ7XFxcIiBwb2ludHM9XFxcIjExNi40OTIsMjI3LjgxMSAxOTkuMzMzLDE0NC45NyA5MC42MDYsMTQ0Ljk3IFxcXCI+PC9wb2x5Z29uPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZlcnNpb249XFxcIjEuMVxcXCIgaWQ9XFxcIkxheWVyXzFcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHg9XFxcIjBweFxcXCIgeT1cXFwiMHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgNTEyIDUxMlxcXCIgc3R5bGU9XFxcImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjtcXFwiIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNEMThCNUM7XFxcIiBkPVxcXCJNMjU2LDMwMS40MDJMMjU2LDMwMS40MDJjMTAuNTczLDAsMTkuMjIsOC42NSwxOS4yMiwxOS4yMTh2MTcyLjE2MyBjMCwxMC41Ny04LjY0NywxOS4yMTgtMTkuMjIsMTkuMjE4bDAsMGMtMTAuNTczLDAtMTkuMjItOC42NDctMTkuMjItMTkuMjE4VjMyMC42MkMyMzYuNzgsMzEwLjA0OSwyNDUuNDI3LDMwMS40MDIsMjU2LDMwMS40MDJ6XFxcIj48L3BhdGg+PHBhdGggc3R5bGU9XFxcImZpbGw6I0ZGQzI3MztcXFwiIGQ9XFxcIk0yNTYsMEwyNTYsMGM0Ny44NzUsMCw4Ny4wNDcsMzkuMTcsODcuMDQ3LDg3LjA0NHYyODQuNTA0YzAsMjEuMTI1LTE3LjI4NCwzOC40MDctMzguNDA5LDM4LjQwNyBIMjA3LjM2Yy0yMS4xMjIsMC0zOC40MDctMTcuMjgyLTM4LjQwNy0zOC40MDdWODcuMDQ0QzE2OC45NTYsMzkuMTcsMjA4LjEyMywwLDI1NiwwelxcXCI+PC9wYXRoPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNGRkQ4QTY7XFxcIiBkPVxcXCJNMjIxLjkxNiw2Ny4xMjFMMjIxLjkxNiw2Ny4xMjFjOC43ODIsMCwxNS45NjQsNy4xODUsMTUuOTY0LDE1Ljk2NnYyNzYuNzE3IGMwLDguNzgxLTcuMTgyLDE1Ljk2Ni0xNS45NjQsMTUuOTY2bDAsMGMtOC43ODEsMC0xNS45NjQtNy4xODUtMTUuOTY0LTE1Ljk2NlY4My4wODggQzIwNS45NSw3NC4zMDYsMjEzLjEzNCw2Ny4xMjEsMjIxLjkxNiw2Ny4xMjF6XFxcIj48L3BhdGg+PHBhdGggc3R5bGU9XFxcImZpbGw6I0ZGRDhBNjtcXFwiIGQ9XFxcIk0yOTAuMDgyLDY3LjEyMUwyOTAuMDgyLDY3LjEyMWM4Ljc4MSwwLDE1Ljk2NCw3LjE4NSwxNS45NjQsMTUuOTY2djI3Ni43MTcgYzAsOC43ODEtNy4xODIsMTUuOTY2LTE1Ljk2NCwxNS45NjZsMCwwYy04Ljc4MSwwLTE1Ljk2NC03LjE4NS0xNS45NjQtMTUuOTY2VjgzLjA4OEMyNzQuMTE1LDc0LjMwNiwyODEuMyw2Ny4xMjEsMjkwLjA4Miw2Ny4xMjEgelxcXCI+PC9wYXRoPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNGRkQ4QTY7XFxcIiBkPVxcXCJNMTgzLjAwOSw1OC4xMzdjMy43NzMtMTMuOTQ4LDIwLjYyOC0zMi4zNzksMzYuNzM2LTM5LjkxMWMxNC45NDUtNi45ODcsMTguMzY1LDUuMzA0LDguMDEzLDEwLjA5MiBjLTEzLjQzMyw2LjIxMS0yNy42MjgsMjEuMTQ2LTMzLjA3OSwzNC40MjFDMTkwLjUyOCw3Mi44NDksMTgwLjA3Niw2OC45OTUsMTgzLjAwOSw1OC4xMzd6XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlkPVxcXCJMYXllcl8xXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB4PVxcXCIwcHhcXFwiIHk9XFxcIjBweFxcXCIgdmlld0JveD1cXFwiMCAwIDUxMiA1MTJcXFwiIHN0eWxlPVxcXCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7XFxcIiB4bWw6c3BhY2U9XFxcInByZXNlcnZlXFxcIj48cG9seWdvbiBzdHlsZT1cXFwiZmlsbDojRTA5RDcwO1xcXCIgcG9pbnRzPVxcXCIzNDEuNTE1LDIwNi40OTggMjY2LjM2NSw1MTIgMjQ1LjYzMyw1MTIgMTcwLjQ4NSwyMDYuNDk4IFxcXCI+PC9wb2x5Z29uPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNEMThCNUM7XFxcIiBkPVxcXCJNMzQwLjEyNywyMTIuMTM4bC0xLjUyOSw2LjIwOWwtMjIuMTg1LTExLjg0OGgxMy4xNTJMMzQwLjEyNywyMTIuMTM4TDM0MC4xMjcsMjEyLjEzOHogTTMzNS41ODUsMjMwLjU5NWwtNDUuMTE0LTI0LjA5N2gtMTMuMTUybDU2Ljc0LDMwLjMwNUwzMzUuNTg1LDIzMC41OTVMMzM1LjU4NSwyMzAuNTk1eiBNMzMxLjA0NSwyNDkuMDUybC03OS42NjYtNDIuNTU0aC0xMy4xNTQgbDkxLjI5NCw0OC43NjJMMzMxLjA0NSwyNDkuMDUyTDMzMS4wNDUsMjQ5LjA1MnogTTMyNi41MDYsMjY3LjUwN2wtMTE0LjIxOC02MS4wMDhoLTEzLjE1NGwxMjUuODQ2LDY3LjIxN0wzMjYuNTA2LDI2Ny41MDcgTDMyNi41MDYsMjY3LjUwN3ogTTMyMS45NjYsMjg1Ljk2NGwtMTQ4Ljc3My03OS40NjVoLTIuNzA4bDEuNTc5LDYuNDIybDE0OC4zNzMsNzkuMjUyTDMyMS45NjYsMjg1Ljk2NEwzMjEuOTY2LDI4NS45NjR6IE0zMTcuNDI2LDMwNC40MjFsLTEuNTI2LDYuMjA5bC0xMzcuOTI1LTczLjY2OGwtMS45ODYtOC4wODZMMzE3LjQyNiwzMDQuNDIxTDMxNy40MjYsMzA0LjQyMXogTTMxMi44ODYsMzIyLjg3NWwtMS41MjksNi4yMDkgTDE4My44OTEsMjYxbC0xLjk4OS04LjA4NkwzMTIuODg2LDMyMi44NzVMMzEyLjg4NiwzMjIuODc1eiBNMzA4LjM0NywzNDEuMzMybC0xLjUyOSw2LjIwOWwtMTE3LjAxNC02Mi41bC0xLjk4OS04LjA4NiBMMzA4LjM0NywzNDEuMzMyTDMwOC4zNDcsMzQxLjMzMnogTTMwMy44MDcsMzU5Ljc4OWwtMTEwLjA3Ni01OC43OTZsMS45ODYsOC4wODlsMTA2LjU2MSw1Ni45MTlMMzAzLjgwNywzNTkuNzg5TDMwMy44MDcsMzU5Ljc4OXogTTI5OS4yNjcsMzc4LjI0NGwtOTkuNjI1LTUzLjIxM2wxLjk4OSw4LjA4OWw5Ni4xMDgsNTEuMzMzTDI5OS4yNjcsMzc4LjI0NEwyOTkuMjY3LDM3OC4yNDR6IE0yOTQuNzI1LDM5Ni43MDFsLTEuNTI2LDYuMjA5IGwtODUuNjUyLTQ1Ljc1MWwtMS45ODktOC4wODZMMjk0LjcyNSwzOTYuNzAxTDI5NC43MjUsMzk2LjcwMXogTTI5MC4xODUsNDE1LjE1NmwtMS41MjYsNi4yMDlsLTc1LjE5OS00MC4xNjdsLTEuOTg5LTguMDg2IEwyOTAuMTg1LDQxNS4xNTZMMjkwLjE4NSw0MTUuMTU2eiBNMjg1LjY0NSw0MzMuNjEzbC02OC4yNjQtMzYuNDYzbDEuOTg5LDguMDg5bDY0Ljc0OSwzNC41ODRMMjg1LjY0NSw0MzMuNjEzTDI4NS42NDUsNDMzLjYxM3ogTTI4MS4xMDYsNDUyLjA3bC01Ny44MDgtMzAuODhsMS45ODksOC4wODZsNTQuMjkxLDI5TDI4MS4xMDYsNDUyLjA3TDI4MS4xMDYsNDUyLjA3eiBNMjc2LjU2Niw0NzAuNTI0bC0xLjUyNiw2LjIwOSBsLTQzLjg0Mi0yMy40MTZsLTEuOTg5LTguMDg2TDI3Ni41NjYsNDcwLjUyNEwyNzYuNTY2LDQ3MC41MjR6IE0yNzIuMDI2LDQ4OC45ODFsLTM2LjkwMi0xOS43MDlsMS45ODksOC4wODZsMzMuMzg0LDE3LjgzMiBMMjcyLjAyNiw0ODguOTgxTDI3Mi4wMjYsNDg4Ljk4MXogTTI2Ny40ODYsNTA3LjQzOEwyNjYuMzY1LDUxMmgtMy40OTFsLTE5Ljg0NS0xMC42MDFsLTEuOTg5LTguMDg2TDI2Ny40ODYsNTA3LjQzOHpcXFwiPjwvcGF0aD48cGF0aCBzdHlsZT1cXFwiZmlsbDojRjdDMjlFO1xcXCIgZD1cXFwiTTM0MS41MTUsMjA2LjQ5OGwtMS42NTUsNi43MjdsLTE0OC4yNDUsNzkuMTgybC0xLjUyNi02LjIwOWwxNDkuMjE0LTc5LjdIMzQxLjUxNUwzNDEuNTE1LDIwNi40OTh6IE0zMzUuOTM2LDIyOS4xNzhMMTk0LjYzLDMwNC42NTNsMS41MjksNi4yMDlsMTM3Ljc4OS03My41OThMMzM1LjkzNiwyMjkuMTc4TDMzNS45MzYsMjI5LjE3OHogTTMzMC4wMjEsMjUzLjIxNmwtMTMwLjg1NCw2OS44OTIgbDEuNTI5LDYuMjA5bDEyNy4zMzQtNjguMDE0TDMzMC4wMjEsMjUzLjIxNkwzMzAuMDIxLDI1My4yMTZ6IE0zMjQuMTA3LDI3Ny4yNTdsLTEyMC4zOTgsNjQuMzA4bDEuNTI5LDYuMjA5bDExNi44ODEtNjIuNDMgTDMyNC4xMDcsMjc3LjI1N0wzMjQuMTA3LDI3Ny4yNTd6IE0zMTguMTk2LDMwMS4yOTZsLTEuOTg5LDguMDg5TDIwOS43OCwzNjYuMjMxbC0xLjUyOS02LjIwOUwzMTguMTk2LDMwMS4yOTZMMzE4LjE5NiwzMDEuMjk2eiBNMzEyLjI4MSwzMjUuMzM3bC0xLjk4OSw4LjA4NmwtOTUuOTc1LDUxLjI2MmwtMS41MjYtNi4yMDlMMzEyLjI4MSwzMjUuMzM3TDMxMi4yODEsMzI1LjMzN3ogTTMwNi4zNjcsMzQ5LjM3NWwtODkuMDM3LDQ3LjU1OSBsMS41MjYsNi4yMDlsODUuNTIxLTQ1LjY3OUwzMDYuMzY3LDM0OS4zNzVMMzA2LjM2NywzNDkuMzc1eiBNMzAwLjQ1NCwzNzMuNDE2bC03OC41ODYsNDEuOTc1bDEuNTMxLDYuMjA5bDc1LjA2Ni00MC4wOTUgTDMwMC40NTQsMzczLjQxNkwzMDAuNDU0LDM3My40MTZ6IE0yOTQuNTQxLDM5Ny40NTRsLTEuOTg5LDguMDg5bC02NC42MTUsMzQuNTExbC0xLjUyNi02LjIwOUwyOTQuNTQxLDM5Ny40NTRMMjk0LjU0MSwzOTcuNDU0eiBNMjg4LjYzLDQyMS40OTVsLTEuOTg5LDguMDg2bC01NC4xNiwyOC45MjdsLTEuNTI5LTYuMjA5TDI4OC42Myw0MjEuNDk1TDI4OC42Myw0MjEuNDk1eiBNMjgyLjcxNCw0NDUuNTM2bC00Ny4yMjQsMjUuMjI1IGwxLjUyNiw2LjIwOWw0My43MDktMjMuMzQ2TDI4Mi43MTQsNDQ1LjUzNkwyODIuNzE0LDQ0NS41MzZ6IE0yNzYuODAxLDQ2OS41NzVsLTEuOTg5LDguMDg5bC0zMy4yNTQsMTcuNzYybC0xLjUyOS02LjIwOSBMMjc2LjgwMSw0NjkuNTc1TDI3Ni44MDEsNDY5LjU3NXogTTI3MC44ODUsNDkzLjYxNWwtMjYuMzE2LDE0LjA1OGwxLjA2Myw0LjMyN2gzLjk4N2wxOS4yNzYtMTAuMjk2TDI3MC44ODUsNDkzLjYxNSBMMjcwLjg4NSw0OTMuNjE1eiBNMTg3LjA3OSwyNzMuOTQ4bDEyNi4yODItNjcuNDUyaC0xMy4xNTJMMTg1LjU1LDI2Ny43MzlMMTg3LjA3OSwyNzMuOTQ4TDE4Ny4wNzksMjczLjk0OHogTTE4Mi41MzYsMjU1LjQ5NCBsOTEuNzMtNDguOTk1aC0xMy4xNTJsLTgwLjEwNSw0Mi43ODZMMTgyLjUzNiwyNTUuNDk0TDE4Mi41MzYsMjU1LjQ5NHogTTE3Ny45OTcsMjM3LjAzOWw1Ny4xNzgtMzAuNTRoLTEzLjE1MmwtNDUuNTUzLDI0LjMzMiBMMTc3Ljk5NywyMzcuMDM5TDE3Ny45OTcsMjM3LjAzOXogTTE3My40NTcsMjE4LjU4MmwyMi42MjQtMTIuMDgzaC0xMy4xNTJsLTEwLjk5OCw1Ljg3NUwxNzMuNDU3LDIxOC41ODJ6XFxcIj48L3BhdGg+PGc+PHBhdGggc3R5bGU9XFxcImZpbGw6I0ZFN0U4RDtcXFwiIGQ9XFxcIk0zMDUuNzkzLDIwOC4yNzljLTQ1LjY3NCwyMC4yMzUtMTUyLjc1MywyNi4yOTktMTQ0LjkxMS0yMi4yNTggQzE2OC43MjEsMTM3LjQ2NSwzNTguNzc4LDE2Ni4zNjcsMzA1Ljc5MywyMDguMjc5elxcXCI+PC9wYXRoPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNGQ0UzQzg7XFxcIiBkPVxcXCJNMTk2LjEyOSwxMzQuODdjLTQ0LjM4MywwLjkxNi02MC43NDksMzQuNjE4LTI0LjMxLDU3Ljk0NiBjNDcuMTksMzAuMjEzLDE4MS4zNiwzNy40NzgsMTg4LjA3OCw3LjgyNUMzNjYuNjE1LDE3MC45ODksMjYyLjI1OSwxMzMuNTA0LDE5Ni4xMjksMTM0Ljg3elxcXCI+PC9wYXRoPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNGRTdFOEQ7XFxcIiBkPVxcXCJNMjE5LjMwMywxMDAuNDQ0Yy00NC4wMzktMi4xMi04MS4yODcsMjguNDIxLTM2LjAzNSw1NS40MTIgYzQ5Ljc2MSwyOS42OCwxMjQuNDE3LTEuNTg5LDE3My4zNDcsMzIuMDI1QzM2OC4wOSwxNTguNjg2LDI4NC45MTYsMTAzLjYwMywyMTkuMzAzLDEwMC40NDR6XFxcIj48L3BhdGg+PHBhdGggc3R5bGU9XFxcImZpbGw6I0ZDRTNDODtcXFwiIGQ9XFxcIk0zNDUuNjQxLDE1OC4wNTNjLTQ2Ljc0Ny0zOC40MTEtODUuMjk2LTE4Ljc3Mi0xMzIuMzU2LTM2LjQyNyBjLTQ3LjA1OS0xNy42NTgtMzMuNDk4LTU0LjMxNy05LjczMS01Ni4zNzJjMC45NC0xNi42MjgtNS40OTctNDQuMzQxLDQ0Ljc2MS02NC45OTZjNS4wOTksMzAuMjU3LDEwLjc4Myw2OS40OCw0Ni40ODMsODMuNTk4IFMzNTQuNjcsMTMyLjI4OCwzNDUuNjQxLDE1OC4wNTN6XFxcIj48L3BhdGg+PHBhdGggc3R5bGU9XFxcImZpbGw6I0ZFN0U4RDtcXFwiIGQ9XFxcIk0xOTkuNTMsNTguNTFjLTQuNzYzLTE3LjQ5OCw5LjQ0OC00MC44NjgsNDAuNTA0LTU1LjYwMWM1LjY0OS0yLjY3OSwxMi42MzYtNS41MzEsMTMuMzYsMS40OTUgYzIuOTM4LDI4LjU2Niw5LjUxNiw2Ni44MzksNDEuNDA1LDc5LjQ1M2M5LjMxNSwzLjY4NSwxNy44OTUsOSwyNS4yODYsMTUuMzI1QzI5My4zNzUsODEuNzgzLDIwNy4zNCw4Ny4yLDE5OS41Myw1OC41MXpcXFwiPjwvcGF0aD48Zz48cGF0aCBzdHlsZT1cXFwiZmlsbDpub25lO3N0cm9rZTojRkZBQkI1O3N0cm9rZS13aWR0aDoyLjQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjIyLjkyNjtcXFwiIGQ9XFxcIiBNMjI0LjYwNiwyNC40NTNjLTUuNDEyLDMuMjE3LTEyLjI3NywxMS45NDUtMTUuODgyLDIyLjI2XFxcIj48L3BhdGg+PHBhdGggc3R5bGU9XFxcImZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6Mi40O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyMi45MjY7XFxcIiBkPVxcXCIgTTIwOS4yMTgsNzguMDc1Yy02LjA5NywwLjUwMS0xNC40MzMsMTAuNzgzLTE0LjM0OCwyMC4xMTRcXFwiPjwvcGF0aD48cGF0aCBzdHlsZT1cXFwiZmlsbDpub25lO3N0cm9rZTojRkZBQkI1O3N0cm9rZS13aWR0aDoyLjQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjIyLjkyNjtcXFwiIGQ9XFxcIiBNMTgzLjQ1OSwxMTcuMzQ2Yy00LjY1OCwwLjM4My0xMS4wMyw4LjIzOS0xMC45NjQsMTUuMzcxXFxcIj48L3BhdGg+PHBhdGggc3R5bGU9XFxcImZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6Mi40O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyMi45MjY7XFxcIiBkPVxcXCIgTTE2Ni4zOTEsMTUyLjM5NGMtNC44MzUsMS43NTktMTAuNjU0LDEwLjE1My0xMC41NjksMTkuNDg0XFxcIj48L3BhdGg+PC9nPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZlcnNpb249XFxcIjEuMVxcXCIgaWQ9XFxcIkxheWVyXzFcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHg9XFxcIjBweFxcXCIgeT1cXFwiMHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMzY0Ljk1IDM2NC45NVxcXCIgc3R5bGU9XFxcImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzY0Ljk1IDM2NC45NTtcXFwiIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiPjxnIGlkPVxcXCJYTUxJRF8xNDI0X1xcXCI+PHBhdGggaWQ9XFxcIlhNTElEXzU4M19cXFwiIHN0eWxlPVxcXCJmaWxsOiNGRkEyNTA7XFxcIiBkPVxcXCJNMTgyLjQ3NSwzNjQuOTVMMTgyLjQ3NSwzNjQuOTVjLTEzLjczOCwwLTI0Ljk3OC0xMS4yNC0yNC45NzgtMjQuOTc4VjI0NC4wNyBjMC0xMy43MzgsMTEuMjQtMjQuOTc4LDI0Ljk3OC0yNC45NzhsMCwwYzEzLjczOCwwLDI0Ljk3OCwxMS4yNCwyNC45NzgsMjQuOTc4djk1LjkwMiBDMjA3LjQ1MywzNTMuNzEsMTk2LjIxMywzNjQuOTUsMTgyLjQ3NSwzNjQuOTV6XFxcIj48L3BhdGg+PGcgaWQ9XFxcIlhNTElEXzE0MjVfXFxcIj48cGF0aCBpZD1cXFwiWE1MSURfMTQyNl9cXFwiIHN0eWxlPVxcXCJmaWxsOiNGRjU5NTk7XFxcIiBkPVxcXCJNNzEuOSwyMTUuMDE0bDg2LjExMS0xOTcuOTI2YzkuOTEyLTIyLjc4NCwzOS4wMTUtMjIuNzg0LDQ4LjkyNywwIGw4Ni4xMTEsMTk3LjkyNmM4Ljc2MywyMC4xNDItNC4zOTEsNDMuNTY4LTI0LjQ2NCw0My41NjhIOTYuMzY0Qzc2LjI5MSwyNTguNTgxLDYzLjEzNywyMzUuMTU2LDcxLjksMjE1LjAxNHpcXFwiPjwvcGF0aD48cGF0aCBpZD1cXFwiWE1MSURfMTQyN19cXFwiIHN0eWxlPVxcXCJmaWxsOiNGRkZFQjk7XFxcIiBkPVxcXCJNMjcwLjkyMSwxNjQuMTUxSDk0LjAyOUw3MS45LDIxNS4wMTRjLTguNzYzLDIwLjE0MSw0LjM5MSw0My41NjgsMjQuNDY0LDQzLjU2OCBoMTcyLjIyMmMyMC4wNzMsMCwzMy4yMjctMjMuNDI2LDI0LjQ2NC00My41NjhMMjcwLjkyMSwxNjQuMTUxelxcXCI+PC9wYXRoPjxwYXRoIGlkPVxcXCJYTUxJRF8xNDI4X1xcXCIgc3R5bGU9XFxcImZpbGw6IzVGRDJEQjtcXFwiIGQ9XFxcIk0yODMuNDk3LDE5My4wNTdIODEuNDUzTDcxLjksMjE1LjAxNGMtOC43NjMsMjAuMTQxLDQuMzkxLDQzLjU2OCwyNC40NjQsNDMuNTY4IGgxNzIuMjIyYzIwLjA3MywwLDMzLjIyNy0yMy40MjYsMjQuNDY0LTQzLjU2OEwyODMuNDk3LDE5My4wNTd6XFxcIj48L3BhdGg+PC9nPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZlcnNpb249XFxcIjEuMVxcXCIgaWQ9XFxcIkxheWVyXzFcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHg9XFxcIjBweFxcXCIgeT1cXFwiMHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgNDE2LjM2IDQxNi4zNlxcXCIgc3R5bGU9XFxcImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDE2LjM2IDQxNi4zNjtcXFwiIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiPjxnPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNGQ0VEQ0E7XFxcIiBkPVxcXCJNMzUyLjcxLDBsLTE4Ljc2LDU3LjU4bC03LjE4LDIyLjAyTDIyMy41NzcsMzk2LjMxNWMtNC44NTYsMTQuOTAyLTI1LjkzOCwxNC45MDItMzAuNzkzLDAgTDg5LjU5LDc5LjZsLTcuMTgtMjIuMDJMNjMuNjUsMEgzNTIuNzF6XFxcIj48L3BhdGg+PHBhdGggc3R5bGU9XFxcImZpbGw6I0REQzg5RjtcXFwiIGQ9XFxcIk0zNTIuNzEsMGwtMTguNzYsNTcuNThsLTcuMTgsMjIuMDJsLTg4LjEyNCwyNzAuNDY3Yy01LjUwNywxNi45MDItMzAuNDY2LDEyLjkzOS0zMC40NjYtNC44MzhWMCBIMzUyLjcxelxcXCI+PC9wYXRoPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNCNTYwMEI7XFxcIiBkPVxcXCJNMzMzLjk1LDU3LjU4bC03LjE4LDIyLjAybC05OS41NjEsMzA1LjU2N2MtNi4wMDEsMTguNDE4LTMyLjA1NywxOC40MTgtMzguMDU4LDBMODkuNTksNzkuNiBsLTcuMTgtMjIuMDJDODIuNDEsNTcuNTgsMzMzLjk1LDU3LjU4LDMzMy45NSw1Ny41OHpcXFwiPjwvcGF0aD48cGF0aCBzdHlsZT1cXFwiZmlsbDojRkZENDFEO1xcXCIgZD1cXFwiTTMyNi43Nyw3OS42bC03LjcsMjMuNjJsLTIsNi4xM2wtNy42OSwyMy42MmwtNS40MywxNi42NWwtODQuMTYsMjU4LjMyIGMtMS44Myw1LjYyLTYuNzIsOC40Mi0xMS42MSw4LjQycy05Ljc4LTIuOC0xMS42MS04LjQybC03MS45LTIyMC42OGwtMTcuNjktNTQuMjlsLTkuNjktMjkuNzVsLTcuNy0yMy42MkgzMjYuNzd6XFxcIj48L3BhdGg+PHBhdGggc3R5bGU9XFxcImZpbGw6I0VBNTg3RjtcXFwiIGQ9XFxcIk04My44OCwwYzMuODksMjUuMDMsOC4zLDQ2LjYzLDE1LjksNDYuNjNjNy42LDAsMTIuMDEtMjEuNiwxNS45LTQ2LjYzXFxcIj48L3BhdGg+PHBhdGggc3R5bGU9XFxcImZpbGw6I0VBNTg3RjtcXFwiIGQ9XFxcIk0yMjguNCwwYzMuODksMjUuMDMsOC4zLDQ2LjYzLDE1LjksNDYuNjNjNy42LDAsMTIuMDEtMjEuNiwxNS45LTQ2LjYzXFxcIj48L3BhdGg+PHBhdGggc3R5bGU9XFxcImZpbGw6I0VBNTg3RjtcXFwiIGQ9XFxcIk0zMDAuNjcsMGMzLjg5LDI1LjAzLDguMjksNDYuNjMsMTUuOSw0Ni42M3MxMi4wMS0yMS42LDE1LjktNDYuNjNcXFwiPjwvcGF0aD48cGF0aCBzdHlsZT1cXFwiZmlsbDojRUE1ODdGO1xcXCIgZD1cXFwiTTE1Ni4xNCwwYzMuODksMjUuMDMsOC4zLDQ2LjYzLDE1LjksNDYuNjNjNy42LDAsMTIuMDEtMjEuNiwxNS45LTQ2LjYzXFxcIj48L3BhdGg+PHBvbHlnb24gc3R5bGU9XFxcImZpbGw6I0ZGQTkxRjtcXFwiIHBvaW50cz1cXFwiMzE5LjA3LDEwMy4yMiAzMDkuMzgsMTMyLjk3IDEwNi45OCwxMzIuOTcgOTcuMjksMTAzLjIyIFxcXCI+PC9wb2x5Z29uPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNGRkQ0MUQ7XFxcIiBkPVxcXCJNMzM0LjIzLDk0LjQ3YzAsNC4xMS0xLjY2LDcuODMtNC4zNiwxMC41MmMtMi42OSwyLjY5LTYuNCw0LjM2LTEwLjUxLDQuMzZIOTcgYy04LjIxLDAtMTQuODctNi42Ni0xNC44Ny0xNC44OGMwLTQuMTEsMS42Ni03LjgyLDQuMzYtMTAuNTFjMi42OS0yLjcsNi40LTQuMzYsMTAuNTEtNC4zNmgyMjIuMzYgQzMyNy41Nyw3OS42LDMzNC4yMyw4Ni4yNiwzMzQuMjMsOTQuNDd6XFxcIj48L3BhdGg+PHBhdGggc3R5bGU9XFxcImZpbGw6I0ZGQTkxRjtcXFwiIGQ9XFxcIk0zMzQuMjMsOTQuNDdjMCw0LjExLTEuNjYsNy44My00LjM2LDEwLjUyYy0yLjY5LDIuNjktNi40LDQuMzYtMTAuNTEsNC4zNkgyMDguMThWNzkuNmgxMTEuMTggQzMyNy41Nyw3OS42LDMzNC4yMyw4Ni4yNiwzMzQuMjMsOTQuNDd6XFxcIj48L3BhdGg+PHBvbHlnb24gc3R5bGU9XFxcImZpbGw6IzkxNEQwOTtcXFwiIHBvaW50cz1cXFwiMzMzLjk1LDU3LjU4IDMyNi43Nyw3OS42IDIwOC4xOCw3OS42IDIwOC4xOCw1Ny41OCBcXFwiPjwvcG9seWdvbj48cGF0aCBzdHlsZT1cXFwiZmlsbDojRkZBOTFGO1xcXCIgZD1cXFwiTTMxNy4wNywxMDkuMzVsLTcuNjksMjMuNjJsLTg5LjU5LDI3NC45N2MtMS44Myw1LjYyLTYuNzIsOC40Mi0xMS42MSw4LjQyVjEwOS4zNUgzMTcuMDd6XFxcIj48L3BhdGg+PHBhdGggc3R5bGU9XFxcImZpbGw6I0VBNTg3RjtcXFwiIGQ9XFxcIk0zMDMuOTUsMTQ5LjYybC04NC4xNiwyNTguMzJjLTEuODMsNS42Mi02LjcyLDguNDItMTEuNjEsOC40MnMtOS43OC0yLjgtMTEuNjEtOC40MmwtNzEuOS0yMjAuNjggbDgzLjUxLTE3LjUzTDMwMy45NSwxNDkuNjJ6XFxcIj48L3BhdGg+PHBhdGggc3R5bGU9XFxcImZpbGw6I0NFM0U2QjtcXFwiIGQ9XFxcIk0zMDMuOTUsMTQ5LjYybC04NC4xNiwyNTguMzJjLTEuODMsNS42Mi02LjcyLDguNDItMTEuNjEsOC40MlYxNjkuNzNMMzAzLjk1LDE0OS42MnpcXFwiPjwvcGF0aD48cGF0aCBzdHlsZT1cXFwiZmlsbDojRkZBOTFGO1xcXCIgZD1cXFwiTTIwOC4xOCwxMDkuMzVIOTcuMDFjLTguMjE4LDAtMTQuODgtNi42NjItMTQuODgtMTQuODhsMCwwaDEyNi4wNUwyMDguMTgsMTA5LjM1TDIwOC4xOCwxMDkuMzV6XFxcIj48L3BhdGg+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmVyc2lvbj1cXFwiMS4xXFxcIiBpZD1cXFwiTGF5ZXJfMVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgeD1cXFwiMHB4XFxcIiB5PVxcXCIwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCA1MTIgNTEyXFxcIiBzdHlsZT1cXFwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyO1xcXCIgeG1sOnNwYWNlPVxcXCJwcmVzZXJ2ZVxcXCI+PGc+PHBvbHlnb24gc3R5bGU9XFxcImZpbGw6I0QxRjBFRjtcXFwiIHBvaW50cz1cXFwiMTczLjA4OCwyMTUuMjI2IDM1MS41NjQsMjE1LjIyNiAyODcuMDYzLDUxMiAyMzcuNTg0LDUxMiBcXFwiPjwvcG9seWdvbj48cG9seWdvbiBzdHlsZT1cXFwiZmlsbDojRDJCNEIzO1xcXCIgcG9pbnRzPVxcXCIzMTMuMTA0LDM5Mi4xNzYgMjkxLjgwOSw0OTAuMTcyIDIzMi44NDEsNDkwLjE3MiAyMTEuNTQzLDM5Mi4xNzYgXFxcIj48L3BvbHlnb24+PHBhdGggc3R5bGU9XFxcImZpbGw6I0U0RUFCQTtcXFwiIGQ9XFxcIk0zMTkuNiwzNjIuM2wtMTguNzcsODYuMzU5Yy0zMC41Mi00LjA3OS01Ny44MDEtMTAuNDY3LTgwLjc5NC0xNy40MTlMMjA1LjA1LDM2Mi4zSDMxOS42elxcXCI+PC9wYXRoPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNEMkI0QjM7XFxcIiBkPVxcXCJNMzI5LjY3LDMxNS45NjFsLTE5LjAzNCw4Ny41ODFjLTM5LjUzOS00LjUyNi03NC4wNjQtMTMuMDYtMTAxLjQxNS0yMi4wNDhsLTE0LjI0MS02NS41MzJIMzI5LjY3elxcXCI+PC9wYXRoPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNFNEVBQkE7XFxcIiBkPVxcXCJNMzQwLjYxNywyNjUuNTkybC0xOS4xOTMsODguMzA3Yy01MC43NjMtNS4xNDQtOTMuNjc3LTE3LjAyNC0xMjQuMzc5LTI4LjQ0NWwtMTMuMDEyLTU5Ljg2MSBIMzQwLjYxN0wzNDAuNjE3LDI2NS41OTJ6XFxcIj48L3BhdGg+PHBhdGggc3R5bGU9XFxcImZpbGw6I0QyQjRCMztcXFwiIGQ9XFxcIk0xNzMuMDg4LDIxNS4yMjZoMTc4LjQ3NmwtMTkuNDA0LDg5LjI4M2MtNjIuNTc4LTUuMDI5LTExNC4xNjctMjAuNjE2LTE0Ny4wNzctMzQuMDg3IEwxNzMuMDg4LDIxNS4yMjZ6XFxcIj48L3BhdGg+PHBhdGggc3R5bGU9XFxcImZpbGw6I0ZGRjFBRDtcXFwiIGQ9XFxcIk0zNDcuODIxLDUxMmgtMTcwLjk5di0xMC45MTRjMC02LjAwMiw0LjkwOS0xMC45MTQsMTAuOTE0LTEwLjkxNGgxNDkuMTYzIGM2LjAwMiwwLDEwLjkxNCw0LjkxMSwxMC45MTQsMTAuOTE0TDM0Ny44MjEsNTEyTDM0Ny44MjEsNTEyelxcXCI+PC9wYXRoPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNEMzNCM0E7XFxcIiBkPVxcXCJNMzA5LjQxOSwyMjMuNzM2Yy00OS4wMDEsMjEuNzA1LTE2My44NzMsMjguMjEyLTE1NS40NjEtMjMuODggQzE2Mi4zNjksMTQ3Ljc2NiwzNjYuMjU5LDE3OC43NzQsMzA5LjQxOSwyMjMuNzM2elxcXCI+PC9wYXRoPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNGNkUzODU7XFxcIiBkPVxcXCJNMTkxLjc3MSwxNDQuOTg1Yy00Ny42MTYsMC45ODYtNjUuMTcyLDM3LjEzOC0yNi4wOCw2Mi4xNjcgYzUwLjYyOCwzMi40MDksMTk0LjU2LDQwLjIwNywyMDEuNzcsOC4zOTJDMzc0LjY2OCwxODMuNzMzLDI2Mi43MTQsMTQzLjUxOCwxOTEuNzcxLDE0NC45ODV6XFxcIj48L3BhdGg+PHBhdGggc3R5bGU9XFxcImZpbGw6I0QzM0IzQTtcXFwiIGQ9XFxcIk0yMTYuNjM0LDEwOC4wNTJjLTQ3LjI0My0yLjI3Ni04Ny4yMDYsMzAuNDg4LTM4LjY1OSw1OS40NDYgYzUzLjM4NSwzMS44NDIsMTMzLjQ3OC0xLjcwNCwxODUuOTY3LDM0LjM1NkMzNzYuMjUyLDE3MC41MzMsMjg3LjAyMiwxMTEuNDM5LDIxNi42MzQsMTA4LjA1MnpcXFwiPjwvcGF0aD48cGF0aCBzdHlsZT1cXFwiZmlsbDojRjZFMzg1O1xcXCIgZD1cXFwiTTM1Mi4xNjUsMTY5Ljg1M2MtNTAuMTUtNDEuMjA3LTk3LjIzNy0yMS4xODMtMTQxLjk4OC0zOS4wOHMtMjcuNTk5LTQ5LjQxMi00LjE4NS01NS43ODQgYzIzLjQxNC02LjM3My0xOC40MDQtMzUuNTgyLDQxLjc2NS03NC40MTdjNS40NzEsMzIuNDYsMTEuNTcsNzQuNTM1LDQ5Ljg2OSw4OS42ODRTMzYxLjg1MywxNDIuMjE2LDM1Mi4xNjUsMTY5Ljg1M3pcXFwiPjwvcGF0aD48cGF0aCBzdHlsZT1cXFwiZmlsbDojRDMzQjNBO1xcXCIgZD1cXFwiTTIwNi4zNjMsNjEuNTAzYy0zLjAyNC0xMS45OTgsMC4yMzYtMzUuNTA1LDMyLjUwOC01OC4wODdjNS4yOTYtMy43MDIsMTMuNTU4LTUuOTMzLDE0LjMzMiwxLjYwNiBjMy4xNTEsMzAuNjQ1LDEwLjIwOSw3MS43MDUsNDQuNDE5LDg1LjIzNGM5Ljk5MywzLjk1NCwxOS4xOTcsOS42NTYsMjcuMTI1LDE2LjQ0QzI5Ni4wOTcsODguMDM1LDIxNC4xNTEsOTIuMzc4LDIwNi4zNjMsNjEuNTAzelxcXCI+PC9wYXRoPjxnPjxwYXRoIHN0eWxlPVxcXCJmaWxsOm5vbmU7c3Ryb2tlOiNFNjYzNjM7c3Ryb2tlLXdpZHRoOjIuNDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MjIuOTI2O1xcXCIgZD1cXFwiIE0yMzcuOTU0LDE2LjEwNmMtNS44MDgsMy40NTItMTMuMTczLDEyLjgxNS0xNy4wMzYsMjMuODgzXFxcIj48L3BhdGg+PHBhdGggc3R5bGU9XFxcImZpbGw6bm9uZTtzdHJva2U6I0ZGRjFBRDtzdHJva2Utd2lkdGg6Mi40O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyMi45MjY7XFxcIiBkPVxcXCIgTTIwNS44MTIsODQuMDU0Yy02LjUzOSwwLjUzNi0xNS40ODMsMTEuNTY3LTE1LjM5MiwyMS41OFxcXCI+PC9wYXRoPjxwYXRoIHN0eWxlPVxcXCJmaWxsOm5vbmU7c3Ryb2tlOiNFNjYzNjM7c3Ryb2tlLXdpZHRoOjIuNDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MjIuOTI2O1xcXCIgZD1cXFwiIE0xNzguMTgyLDEyNi4xODRjLTQuOTk4LDAuNDA5LTExLjgzMiw4LjgzOS0xMS43NjIsMTYuNDg4XFxcIj48L3BhdGg+PHBhdGggc3R5bGU9XFxcImZpbGw6bm9uZTtzdHJva2U6I0ZGRjFBRDtzdHJva2Utd2lkdGg6Mi40O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyMi45MjY7XFxcIiBkPVxcXCIgTTE1OS44NjcsMTYzLjc4NmMtNS4xODgsMS44ODctMTEuNDMsMTAuODktMTEuMzM5LDIwLjkwMlxcXCI+PC9wYXRoPjwvZz48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIGlkPVxcXCJ3cml0dGVuXFxcIiBkYXRhLW5hbWU9XFxcIkxheWVyIDFcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDQwODMuODggNDMwLjM1XFxcIj48dGl0bGU+Z2VsYWNjaW88L3RpdGxlPjxnIGlkPVxcXCJnZWxhY2Npb1xcXCI+PGcgaWQ9XFxcImdlbGFjY2lvLXVuZGVybGluZVxcXCI+PGc+PHBhdGggZD1cXFwiTTEwNzcuOTQsNzA0LjUxYzQsLjEzLTEuMTQtLjkxLTUuNTItMS43NmwtNC4xNS44WlxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoLTk1LjM3IC0zMTcuNzQpXFxcIiBmaWxsPVxcXCIjY2RhOTgwXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTEwNTYuMjgsNzAxLjg2bC0xMSwuMTIsOCwuMjJjOC42OCwxLjU3LTEuMzEsMS4yMi00LjYzLDEuMTFDMTA2Mi45LDcwNC41MSwxMDUzLjkxLDcwMi4zNCwxMDU2LjI4LDcwMS44NlpcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKC05NS4zNyAtMzE3Ljc0KVxcXCIgZmlsbD1cXFwiI2NkYTk4MFxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xMDM0LjY5LDcwMC42MmMtNy0uNzQtNS4xMi4yNy0yLjIxLjgxQzEwMzMsNzAxLjExLDEwMzcuNjEsNzAxLjE2LDEwMzQuNjksNzAwLjYyWlxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoLTk1LjM3IC0zMTcuNzQpXFxcIiBmaWxsPVxcXCIjY2RhOTgwXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTU5OC4wOSw2ODQuMjNjMiwuMTEsNC4zMS4xNSw0LC4zOUM2MDQuMjgsNjg0LjMxLDYwNC43NCw2ODQuMDksNTk4LjA5LDY4NC4yM1pcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKC05NS4zNyAtMzE3Ljc0KVxcXCIgZmlsbD1cXFwiI2NkYTk4MFxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk02MDIuMDksNjg0LjYybC0xLjQyLjE5LDEuMzItLjFDNjAyLjEyLDY4NC42Nyw2MDIuMDUsNjg0LjY1LDYwMi4wOSw2ODQuNjJaXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgtOTUuMzcgLTMxNy43NClcXFwiIGZpbGw9XFxcIiNjZGE5ODBcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNNzQzLjk0LDY5Mi40NGM3LjkxLS41OCwxMi4zNS0uMjQsMTkuODItLjM1bDQuMTYsMS4xMWM4LjEtLjIxLDMuNTktLjgyLDkuNDgtMS4yNiw3LjM3Ljc5LDIzLC40LDI2LjQ1LjYyLDIuNDIuNTUtMywuNTctNC4yMy44Miw5LjQ5LS4wNyw4Ljg1LTEuMDcsMjAuNjQtLjc0bC4xOS4yOWMyOC4yMi0uNzUsNjMuOSwxLjM4LDk1LjI2LDIuMjVhNC4zNyw0LjM3LDAsMCwxLTIuMzgtLjYxYzguMjcuMzUsMTYuODUuOTQsMjUuNDgsMS40bDEzLC43MSw2LjQ1LjM0LDYuMzkuMzhjMTYuOTQsMSwzMywxLjU3LDQ2LjIsMS42Ni00LjQ3LS4zNC05LjY5LS45Mi0xNS4zMi0xLjQ3bC0xNy42Ni0xLjdjLTYtLjU2LTEyLjA3LTEuMDctMTcuNzYtMS40MnMtMTEtLjQxLTE1LjU5LS4yN2MtNi42OS0xLjE5LTE3LjE1LS44My0xOS44OC0yLjA2LTYuNDktLjU4LTEyLS44Mi0xNy4wOC0xcy05LjU5LS4yMy0xNC4xMS0uMjctOS0uMDctMTMuOTQtLjE3LTEwLjI4LS4xNS0xNi41My0uNDFjLTMuNTgtLjM0LTEuODItLjc4LTIuODMtMS4zMWwxOS44Ni4zN2MtNC0uMzYtOC4wNS0uNjMtMTIuMDctMSwyLjYyLS4xMSw3LjEyLDAsMTEuMTUuMTNzNy41OC4xOCw4LjMzLS4yNWMtOC42OSwwLTIwLS4zMi0zMS0uNzEtNS40OS0uMTktMTAuOTItLjM3LTE1LjkyLS40NnMtOS41NywwLTEzLjM3LjIxYzMuNTYuMjMsNy41NS4zMiwxMS43Mi40NHM4LjQ4LjI4LDEyLjY4LjQ5YzMuNjkuNDksOS40MSwxLDksMS40Ni0xMi4wNi4yMi0yMy4wNi0uMTItMzQuMTUtLjMzTDgwOS41OCw2ODljLTUuNzMtLjE0LTExLjYxLS4zMi0xNy43OS0uMjdzLTE0LjYtLjIxLTE1LjYyLS43MmM0LjA3LS4xLDEtLjU2LDQuMzUtLjc0LTguNzcuMjgtLjkxLDEuNzctMTMuNTcsMS4zNmwxLjY0LTEuNjhjLTIuNTMuODYtNi40LjcxLTEwLjc4LjQ3YTkwLjMzLDkwLjMzLDAsMCwwLTEzLjc2LDBjLTMuMjQtLjY5LDIuNzUtMS4wNyw5LjY5LTEuMDktNy44OC0uMzMtOC42LjY3LTE0Ljg5LjYxbDYtMS40M2MtNi43LDEuMzctMTItLjMyLTE1LjgtLjgtLjQ1LjM1LDMuMDgsMS40OC01LjMyLDEuMzYtMy42LS4yLTEuNzYtLjU2LTIuNjEtLjc3LS40Ni4zNS0zLjQ4LDEtOSwxLjA5LTEtLjQ4LDMuNjgtLjc3LDQtMS4yN2E4MS40MSw4MS40MSwwLDAsMS0xMC42Mi0uMThjLTcuNC40Ny40OC43LTQsMS4yNy0xMS4zNi0uMjUtMS4xNS0xLjY5LTUuMzQtMi42OSw4LjU1LS43NSwxOS41OC0xLjExLDI0LjE2LTEuNDgtNS40OC4xMi0xMSwuMzQtMTYuNDMuNTEsMS0uNTgtMTEuMTMtLjg4LTIuNDUtMS41Mi04LjItLjE3LTE3LjI1LS4xMS0yNi4yLjE4cy0xNy44My44MS0yNS42OCwxLjIxYzIuMjMuMTUsNS4xLjIxLDQuNjQuNTgtOC4xMi41Mi03LjIzLS4yMi04LjkxLS42LTYsLjU0LTUuMywxLjQ4LTksMi4zMy0xMi40Mi0uNC0xNC4xNC4xNi0yNC43NC0uNjhsLjY4LDFjLTcuNTEtLjUzLTguNTQsMS0xNi42Mi43MS0uNDYtLjIsMi42Mi0uNTksNS4wOS0uOS03LjEzLjU4LTYuNjItLjU0LTEzLjU2LjE1bDUuNDctMS4zNmMtNS41NC4zLTEzLjY2LDEtMTAuODQtLjA1LTkuNjUsMS41OS0yNi42NywxLjg4LTM4LjczLDMuMzRsLjc2LS45MWMtNi4xOSwxLjQzLTIzLDEuMy0yOC4zNCwyLjkybC0uOTUtLjI4LTEyLjM1LDJjLTUuNjQuMzEtMy44Mi0xLjEyLTQuMjUtLjczLTEyLjM0LDEuMTMtMjIsMS44Ny0zMCwyLjE2LTEuOSwxLjMxLTE0Ljg2LDIuNzItMjUuMTgsMy43NS0yNC45LDEuODQtNTAuNjgsNC41NS03NS44OCw4LjQxYTY1MC44Nyw2NTAuODcsMCwwLDAtNzIuMjIsMTVjLTYuNzcsMS42Mi0xNS43LDUuMzEtMjMuODcsOC4xOSw1LjE1LTEuMjgsNy45Mi0yLjEzLDEwLjY3LTNzNS40OS0xLjY4LDEwLjU0LTIuOTVhNjYuMzgsNjYuMzgsMCwwLDEsOS4xMS0xLjE5YzIuNTctLjE1LDUtLjE4LDguMzktLjU1bC0zLjU1LS4yMWE0NS45Miw0NS45MiwwLDAsMSw4LjQyLTIsMzEuOCwzMS44LDAsMCwwLDYuNzktMS42OWwwLDEuNmMyLjcyLTEuMzYsMTAuMS0yLjA3LDEzLjE2LTIuMmwyLjUtMS41NGM2LjY1LS41NywxMS0xLDEzLjEzLS4zM2wtLjc5LS44OGMyLjU1LjExLDI1LjMtMy44MiwxNy43Mi0xYTM4Ljg4LDM4Ljg4LDAsMCwxLDcuNzUtMS42OWwuNzcuODljNi0xLDEyLjczLTIuMDYsMTQuNTUtMS42OWExNC44OCwxNC44OCwwLDAsMC01LjMzLDEuNzVjMTIuNzktMS40NiwxNC4wNi0yLjM4LDE1LTMuMzNzMS40Mi0xLjkxLDEyLjc5LTMuMTRsLS4xOS42Nyw1LjctMS4yNyw2LjE0LjIxYzgtMy4wNSwzMi0yLjY4LDQ1LjY5LTVhODguNzksODguNzksMCwwLDEsOS42My0uMzNjMy43NywwLDguMTUsMCwxMy4yOS0uNDZsLS43NC0uOTRjNC4xOS4yLDE0LS4xLDIzLjgyLS4yNHMxOS41MS4xMSwyMy40NiwxYzcuNzYtMS4yMy0uODQtLjE2LS43MS0xLDE1LjE5LTEuOTEsMTYuMzMtLjUxLDI0LjM2LS4yOSw5LjM3LS45My03LjIsMC0yLjE5LTEsMTQuNDMuMDcsMTEuNjMtMS43NiwyOS40NS0xLjk0LDEuNzkuNDctNC41Ny42LTYuMzksMS4wNUM1OTYuMDUsNjkzLDYxOS40MSw2OTMsNjM4LDY5Mi4wOWMxMC42Ni4xMiwyMy44Ni4wOCwzNy41LDBzMjcuNzUuMyw0MC4yLjYybC40Ni0uMzZjMTAuMzUuOTIsMjEuNTcuMTQsMzMuNjYuNThaXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgtOTUuMzcgLTMxNy43NClcXFwiIGZpbGw9XFxcIiNjZGE5ODBcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNODkzLDY4Ny41bC0xLjk0LTEtMTEuNDYsMEM4ODQuMTgsNjg3LjQzLDg4Ni42MSw2ODcsODkzLDY4Ny41WlxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoLTk1LjM3IC0zMTcuNzQpXFxcIiBmaWxsPVxcXCIjY2RhOTgwXFxcIj48L3BhdGg+PHBvbHlnb24gcG9pbnRzPVxcXCI3OTUuMDIgMzcyLjE5IDgwMS4wMiAzNzIuMTIgNzkxLjM0IDM3MS42NiA3OTUuMDIgMzcyLjE5XFxcIiBmaWxsPVxcXCIjY2RhOTgwXFxcIj48L3BvbHlnb24+PHBvbHlnb24gcG9pbnRzPVxcXCI2NTAuMSAzNjYuNjEgNjUxLjU4IDM2Ni43NSA2NjIuNDkgMzY2LjQ0IDY3My40MSAzNjYuMjYgNjYxLjc1IDM2Ni4zNyA2NTAuMSAzNjYuNjFcXFwiIGZpbGw9XFxcIiNjZGE5ODBcXFwiPjwvcG9seWdvbj48cGF0aCBkPVxcXCJNNTk4Ljg2LDY4My4zNWMyLjQ4LS41Myw2LjA4LS40Niw4LjY2LS44NmwtMTAuMTQuNzhaXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgtOTUuMzcgLTMxNy43NClcXFwiIGZpbGw9XFxcIiNjZGE5ODBcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNNTAwLjI2LDY4NS40OWMtMy43NSwxLjc5LTcuNjguNTQtMi40NiwxLjU0QzUwMy44Niw2ODYuMzQsNDk4LjU1LDY4Ni4xMiw1MDAuMjYsNjg1LjQ5WlxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoLTk1LjM3IC0zMTcuNzQpXFxcIiBmaWxsPVxcXCIjY2RhOTgwXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTQ3Ny41Nyw2ODkuMzZhNTAuMjYsNTAuMjYsMCwwLDAsNy4zMi0uOTRDNDgwLjIyLDY4OC4wOCw0ODAuMTMsNjg4Ljg3LDQ3Ny41Nyw2ODkuMzZaXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgtOTUuMzcgLTMxNy43NClcXFwiIGZpbGw9XFxcIiNjZGE5ODBcXFwiPjwvcGF0aD48L2c+PC9nPjxwYXRoIG1hc2s9XFxcInVybCgjTWFzay1HKVxcXCIgaWQ9XFxcImdlbGFjY2lvLUdcXFwiIGQ9XFxcIk0xNzQuODcsNjc4LjIxYTU5LDU5LDAsMCwxLTM2Ljc4LTEyLjdxLTE2LjU2LTEyLjcxLTI2LjQ5LTM2Ljh0LTkuOTMtNTguMTFhMjY2LjIxLDI2Ni4yMSwwLDAsMSw4LjgzLTY3LjE0LDMzNCwzMzQsMCwwLDEsMjQuMDktNjQuNzgsMjkxLjE1LDI5MS4xNSwwLDAsMSwzNS4xMy01NS4wOXExOS44Ni0yNC4zMSw0MS43NS0zOC4zMXQ0NC0xNHExNS40NSwwLDI0LjY0LDcuMWEzOS42MSwzOS42MSwwLDAsMSwxMy4yNSwxOC41MSw3Mi40MSw3Mi40MSwwLDAsMSw0LDI0LjMyLDEwMC40MiwxMDAuNDIsMCwwLDEtNC42LDI5LjkxcS00LjU5LDE0Ljg1LTEyLjMyLDI0Ljc1dC0xNi45Miw5LjlBMTEuOCwxMS44LDAsMCwxLDI1Niw0NDNxLTMuNDktMi43OS02LjQ0LTEwLjExLDUuMTUtNC4zMSwxMi0xNS4yOGExNDUuNTYsMTQ1LjU2LDAsMCwwLDExLjk1LTI0LjMycTUuMTUtMTMuMzMsNS4xNS0yNC4xYzAtNi0xLjYtMTEtNC43OC0xNS4wN3MtOC40Ni02LTE1LjgyLTZxLTE2LjU1LDAtMzMuODQsMTQuNjN0LTMzLjEsMzlhMzU2LjgxLDM1Ni44MSwwLDAsMC0yOC43LDU0LjQ1LDM3NC43OSwzNzQuNzksMCwwLDAtMjAuMjMsNjEuMzQsMjU3Ljk0LDI1Ny45NCwwLDAsMC03LjM2LDU5LjE4cTAsMzkuMTcsMTQuMzUsNjEuMTJ0MzQuOTUsMjJxMTQuNywwLDI3LjU4LTExLjYydDIyLjYzLTMwLjM0YTIwMC44MSwyMDAuODEsMCwwLDAsMTUuNjMtNDAuNjgsMjI3Ljc5LDIyNy43OSwwLDAsMCw3LjM2LTQyLjYxLDE2OS4wNiwxNjkuMDYsMCwwLDAtMTkuODctMy42NiwxNjIuODgsMTYyLjg4LDAsMCwwLTE4Ljc2LTEuMDhjLTMuNjcsMC03LjQyLjA4LTExLjIyLjIycy03LjkuMjEtMTIuMzIuMjFRMTk4LDUxNS45NSwyMDUsNTA5Ljd0MTcuNjYtNi4yNGE2NC41Myw2NC41MywwLDAsMSwyMi4yNSw0LjA5cTExLjIyLDQuMDksMjIuNDQsOC44MmExNTQuNTgsMTU0LjU4LDAsMCwwLDIxLjE1LDcuMzJsLTMuMzEsMTMuNzdxLTYuNjIsMjIuODEtMTAuODUsMzguNzR0LTYuNjIsMjcuMzNBMTY1Ljc1LDE2NS43NSwwLDAsMCwyNjQuNjIsNjI0cS0uNzQsOS0uNzMsMTcuNjR0LjM3LDE3LjY1cS4zNiw5LC43MywyMC42Ni05LjE5LTIuMTYtMTQuMzQtNy4zMmEyNi4zMiwyNi4zMiwwLDAsMS03LTEyLjQ4LDU5LjY3LDU5LjY3LDAsMCwxLTEuODQtMTQuNjNxMC0zLC4xOC02YTQzLjY3LDQzLjY3LDAsMCwxLC45Mi02LjQ1LDEyNi4yNiwxMjYuMjYsMCwwLDEtMjkuNzksMzIuNDlBNjIuMTksNjIuMTksMCwwLDEsMTc0Ljg3LDY3OC4yMVpcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKC05NS4zNyAtMzE3Ljc0KVxcXCIgZmlsbD1cXFwiI2M2OWM2ZFxcXCIgc3Ryb2tlPVxcXCIjYzY5YzZkXFxcIiBzdHJva2UtbWl0ZXJsaW1pdD1cXFwiMTBcXFwiIHN0cm9rZS13aWR0aD1cXFwiNFxcXCI+PC9wYXRoPjxwYXRoIG1hc2s9XFxcInVybCgjTWFzay1lKVxcXCIgaWQ9XFxcImdlbGFjY2lvLWVcXFwiIGQ9XFxcIk0zNDMuNzEsNjU5LjdxLTIzLjE4LDAtMzUuMzItMTQuNjN0LTEyLjEzLTM2LjU5cTAtMTkuMzcsOC4yNy00MC42N2ExNjguNDUsMTY4LjQ1LDAsMCwxLDIyLjI2LTQwLDEzNy43NSwxMzcuNzUsMCwwLDEsMzAuNzEtMzAuNTZxMTYuNzQtMTEuODQsMzMuMjktMTEuODRhMzAuNjcsMzAuNjcsMCwwLDEsMTcuNDcsNS42cTguMjgsNS41OSw4LjI4LDIyLjM4YTYwLjc3LDYwLjc3LDAsMCwxLTguMjgsMzAuNzcsOTQsOTQsMCwwLDEtMjEuNywyNS42MUExMjIuMTgsMTIyLjE4LDAsMCwxLDM1Ni43Nyw1ODhhMTExLjEzLDExMS4xMywwLDAsMS0zMi41Niw4LjgyYy0uMjUsMS43Mi0uNDksMy40NC0uNzMsNS4xN2E1MC4yLDUwLjIsMCwwLDAtLjM3LDYuODgsNjEuNjUsNjEuNjUsMCwwLDAsLjkyLDkuMjYsNDIuNTQsNDIuNTQsMCwwLDAsMy42OCwxMS42MiwyMy43MiwyMy43MiwwLDAsMCw4LjY0LDkuNjhxNS44OCwzLjg3LDE1LjQ1LDMuODcsMTUuNDUsMCwzMS4wOC0xMC4zMmExMjguODYsMTI4Ljg2LDAsMCwwLDI5LjI1LTI3LjM0QTE3MS42NiwxNzEuNjYsMCwwLDAsNDM0LjkzLDU2OGw2LjI2LDZhMTY1LjkyLDE2NS45MiwwLDAsMS0yNS4zOCw0NXEtMTUuNDUsMTkuMTUtMzQsMjkuOTFUMzQzLjcxLDY1OS43Wm0tMTYuMTktNzYuMThxOS41Ny0yLjE2LDIxLjcxLTguODNhMTE5LjQ2LDExOS40NiwwLDAsMCwyMy4xNy0xNi43OCw5Ny44NCw5Ny44NCwwLDAsMCwxOC4yMS0yMi4xNyw0Ny40Niw0Ny40NiwwLDAsMCw3LjE3LTI0LjUzYzAtMy4xNi0uNDktNS40NS0xLjQ3LTYuODlzLTIuNy0yLjE1LTUuMTUtMi4xNXEtOC44NCwwLTE4LjIxLDcuNTNhMTEwLjY4LDExMC42OCwwLDAsMC0xOC4zOSwxOS4zNywxNTMuNTIsMTUzLjUyLDAsMCwwLTE2LDI2LjI1QTE4My44MSwxODMuODEsMCwwLDAsMzI3LjUyLDU4My41MlpcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKC05NS4zNyAtMzE3Ljc0KVxcXCIgZmlsbD1cXFwiI2M2OWM2ZFxcXCIgc3Ryb2tlPVxcXCIjYzY5YzZkXFxcIiBzdHJva2UtbWl0ZXJsaW1pdD1cXFwiMTBcXFwiIHN0cm9rZS13aWR0aD1cXFwiNFxcXCI+PC9wYXRoPjxwYXRoIG1hc2s9XFxcInVybCgjTWFzay1sKVxcXCIgaWQ9XFxcImdlbGFjY2lvLWxcXFwiIGQ9XFxcIk00NTcuNzQsNjUzLjY3cS0xNi45MiwwLTIzLjczLTEzLjM0dC02LjgtMzEuODVxMC0yMS4wOCw2LjYyLTQ5LjVhNTg5Ljc2LDU4OS43NiwwLDAsMSwxNy40Ny01OS42MXExMC44NC0zMS4yLDIzLjkxLTYxLjEyVDUwMS4zMywzODRxMTMuMDUtMjQuMzEsMjQuMjgtMzguNzR0MTcuODQtMTQuNDJxNC40MSwwLDcuNTQsNS42QTUxLjkzLDUxLjkzLDAsMCwxLDU1NiwzNTBhNjQuNTQsNjQuNTQsMCwwLDEsMS44NCwxNC40MnEwLDExLjYzLTUsMzAuMzVhMzY2LjI4LDM2Ni4yOCwwLDAsMS0xNCw0MS4zMiw0ODYuNDcsNDg2LjQ3LDAsMCwxLTIxLjM0LDQ2LDQzNS4xNSw0MzUuMTUsMCwwLDEtMjcsNDQuNzcsMjE2LjMxLDIxNi4zMSwwLDAsMS0zMS42NCwzNi44cS0xLjQ3LDEwLjc1LTIuNzYsMjEuNTJBMTY3LDE2NywwLDAsMCw0NTQuOCw2MDVxMCwxNS45Myw0LjIzLDIzLjQ2VDQ3MC42MSw2MzZxOS41NywwLDE5LjMyLTEwLjMzYTEzMi4xMSwxMzIuMTEsMCwwLDAsMTguNTctMjZBMjYyLjU5LDI2Mi41OSwwLDAsMCw1MjQsNTY3LjE2bDcuNzMsNS4xN3EtMTUuNDUsMzcuNDQtMzQuMjEsNTkuMzlUNDU3Ljc0LDY1My42N1ptNi42Mi0xMTIuNzZhMjc5LjY5LDI3OS42OSwwLDAsMCwyNC4yOC0zNC40NHExMS40LTE4LjkzLDIxLjE1LTM5dDE3LjEtMzguNzRhMzMwLjc2LDMzMC43NiwwLDAsMCwxMS40MS0zMy41N3E0LTE0Ljg1LDQuNDEtMjMuNDZhNi4xLDYuMSwwLDAsMC0uNzMtM3EtMywwLTkuNzUsMTAuMTFhMzAwLjUxLDMwMC41MSwwLDAsMC0xNS44MiwyNy4zM3EtOSwxNy4yMi0xOC41OCwzOS42VDQ3OS40NCw0OTIuN1E0NzAuNjIsNTE3LjIzLDQ2NC4zNiw1NDAuOTFaXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgtOTUuMzcgLTMxNy43NClcXFwiIGZpbGw9XFxcIiNjNjljNmRcXFwiIHN0cm9rZT1cXFwiI2M2OWM2ZFxcXCIgc3Ryb2tlLW1pdGVybGltaXQ9XFxcIjEwXFxcIiBzdHJva2Utd2lkdGg9XFxcIjRcXFwiPjwvcGF0aD48cGF0aCBtYXNrPVxcXCJ1cmwoI01hc2stYSlcXFwiIGlkPVxcXCJnZWxhY2Npby1hXFxcIiBkPVxcXCJNNTM1LDY2MXEtMTEuNzgsMC0yMC40MS05LjI1VDUwNS45Miw2MjRxMC0xNS41LDUuODktMzMuMTVBMTc3LjI2LDE3Ny4yNiwwLDAsMSw1MjgsNTU2YTE4Ni4xOSwxODYuMTksMCwwLDEsMjMuNTUtMzEuNDIsMTIyLDEyMiwwLDAsMSwyOC4xNC0yMi44MXExNC45LTguNjEsMjkuNjEtOC42MSwxNS40NSwwLDI1LjkzLDkuMjV0MTAuNDksMjQuMzJxMCwxMS42My02LjI2LDE2LjM2dC0xNS40NSwzcS43NC0zLjQ0LDEuMjktNy41M2E1OS4yLDU5LjIsMCwwLDAsLjU1LTgsMzYuMzEsMzYuMzEsMCwwLDAtMy4zMS0xNS45M3EtMy4zMS02Ljg4LTEyLjg3LTYuODktMTAuMywwLTIxLDguMThhMTA4LjQ0LDEwOC40NCwwLDAsMC0yMC42LDIxLjUyLDE4Mi4yMSwxODIuMjEsMCwwLDAtMTcuNjYsMjkuMjcsMTk0LjQ0LDE5NC40NCwwLDAsMC0xMi4xNCwzMS40MnEtNC40MSwxNS41LTQuNDEsMjcuNTUsMCwxNC42NCw5LjIsMTQuNjMsOC40NSwwLDE4LjU3LTkuNDdhMTYzLDE2MywwLDAsMCwyMC42LTI0LjFxMTAuNDktMTQuNjIsMjAtMjkuOTF0MTYuNTUtMjYuOTFjMS0xLjQzLDEuODQtMi4xNSwyLjU4LTIuMTVhNTguMzgsNTguMzgsMCwwLDEsNS44OCwxLjk0LDI3LjY4LDI3LjY4LDAsMCwxLDcuMzYsNC4wOSw4LjI5LDguMjksMCwwLDEsMy4zMSw2Ljg5cTAsNC4zMS0zLjMxLDExbC03LjM2LDE0Ljg1cS00LDguMTgtNy4zNSwxNi4zNmE0Mi4yNCw0Mi4yNCwwLDAsMC0zLjMyLDE1LjkyLDIzLjgyLDIzLjgyLDAsMCwwLDIuNzYsMTEsOS4zOSw5LjM5LDAsMCwwLDksNS4zOHE5LjE4LDAsMjUuMTktMTUuNzFUNjg2LjE3LDU2OGw1Ljg4LDYuODlhMTc2LjY4LDE3Ni42OCwwLDAsMS0yMC43OCw0MC44OXEtMTIuMzMsMTcuNjYtMjUuOTMsMjcuNzZ0LTI3LjIyLDEwLjExcS0xNC43MywwLTIxLjcxLTEwLjU0YTQ1Ljg1LDQ1Ljg1LDAsMCwxLTcuNzItMjMsMjMuODEsMjMuODEsMCwwLDEsLjE4LTIuOCwyMy42NCwyMy42NCwwLDAsMCwuMTktMi43OVE1NzQsNjM2LjQ1LDU2MS40Nyw2NDguNzNUNTM1LDY2MVpcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKC05NS4zNyAtMzE3Ljc0KVxcXCIgZmlsbD1cXFwiI2M2OWM2ZFxcXCIgc3Ryb2tlPVxcXCIjYzY5YzZkXFxcIiBzdHJva2UtbWl0ZXJsaW1pdD1cXFwiMTBcXFwiIHN0cm9rZS13aWR0aD1cXFwiNFxcXCI+PC9wYXRoPjxwYXRoIG1hc2s9XFxcInVybCgjTWFzay1jKVxcXCIgaWQ9XFxcImdlbGFjY2lvLWNcXFwiIGQ9XFxcIk03MTguNTQsNjY0Ljg3cS0xOC43NiwwLTMwLjktMTR0LTEyLjE0LTQyLjRhMTIyLjksMTIyLjksMCwwLDEsNy4xNy00MS4zMiwxNDUsMTQ1LDAsMCwxLDE5LTM2LjU4cTExLjc2LTE2LjM3LDI2LjExLTI1LjgzdDI5LjA2LTkuNDdxMTUuNDUsMCwyMS44OSw5LjQ3YTM2LjY4LDM2LjY4LDAsMCwxLDYuNDQsMjEuMDksNTQuNzUsNTQuNzUsMCwwLDEtNSwyMy4yNHEtNSwxMC43Ny0xMy40MywxMC43Ni03LDAtMTEuNC03Ljc0LDQuNDEtMyw4LjQ2LTEyLjA2YTUwLDUwLDAsMCwwLDQuMDUtMjAuNjZjMC0yLjg2LS41LTUtMS40Ny02LjQ1cy0zLTIuMTUtNS44OS0yLjE1cS05LjU3LDAtMTkuNjgsOS45dC0xOC45NCwyNS42MWExNzcuNjksMTc3LjY5LDAsMCwwLTE0LjM1LDMyLjkyQTEwNiwxMDYsMCwwLDAsNzAyLDYxMS40OWE0Ny42NSw0Ny42NSwwLDAsMCw1LjUyLDIyLjgycTUuNTIsMTAuMzIsMjEsMTAuMzMsMTQuMzQsMCwyOS4yNC05LjQ3dDI4LjE0LTI2LjY5cTEzLjI0LTE3LjIxLDIxLTQwLjg5bDYuNjIsNi44OWExNjcuMjgsMTY3LjI4LDAsMCwxLTI0LjA5LDQ2LjI3UTc3NC4wOCw2NDEuMTksNzU1LjUsNjUzVDcxOC41NCw2NjQuODdaXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgtOTUuMzcgLTMxNy43NClcXFwiIGZpbGw9XFxcIiNjNjljNmRcXFwiIHN0cm9rZT1cXFwiI2M2OWM2ZFxcXCIgc3Ryb2tlLW1pdGVybGltaXQ9XFxcIjEwXFxcIiBzdHJva2Utd2lkdGg9XFxcIjRcXFwiPjwvcGF0aD48cGF0aCBtYXNrPVxcXCJ1cmwoI01hc2stY2MpXFxcIiBpZD1cXFwiZ2VsYWNjaW8tY2NcXFwiIGQ9XFxcIk04MzkuOTIsNjY0Ljg3cS0xOC43NiwwLTMwLjktMTR0LTEyLjE0LTQyLjRhMTIyLjY2LDEyMi42NiwwLDAsMSw3LjE4LTQxLjMyQTE0NS4yNiwxNDUuMjYsMCwwLDEsODIzLDUzMC41OHExMS43OC0xNi4zNywyNi4xMi0yNS44M3QyOS4wNi05LjQ3cTE1LjQ1LDAsMjEuODgsOS40N2EzNi42OCwzNi42OCwwLDAsMSw2LjQ0LDIxLjA5LDU0Ljc0LDU0Ljc0LDAsMCwxLTUsMjMuMjRxLTUsMTAuNzctMTMuNDMsMTAuNzYtNywwLTExLjQtNy43NCw0LjQxLTMsOC40Ni0xMi4wNmE1MC4xNyw1MC4xNywwLDAsMCw0LTIwLjY2cTAtNC4yOS0xLjQ3LTYuNDV0LTUuODgtMi4xNXEtOS41NywwLTE5LjY4LDkuOXQtMTguOTUsMjUuNjFhMTc3LjY1LDE3Ny42NSwwLDAsMC0xNC4zNCwzMi45MiwxMDYsMTA2LDAsMCwwLTUuNTIsMzIuMjgsNDcuNjUsNDcuNjUsMCwwLDAsNS41MiwyMi44MnE1LjUsMTAuMzIsMjEsMTAuMzMsMTQuMzUsMCwyOS4yNS05LjQ3dDI4LjE0LTI2LjY5cTEzLjI1LTE3LjIxLDIxLTQwLjg5bDYuNjMsNi44OWExNjcuMzEsMTY3LjMxLDAsMCwxLTI0LjEsNDYuMjdRODk1LjQ2LDY0MS4xOSw4NzYuODksNjUzVDgzOS45Miw2NjQuODdaXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgtOTUuMzcgLTMxNy43NClcXFwiIGZpbGw9XFxcIiNjNjljNmRcXFwiIHN0cm9rZT1cXFwiI2M2OWM2ZFxcXCIgc3Ryb2tlLW1pdGVybGltaXQ9XFxcIjEwXFxcIiBzdHJva2Utd2lkdGg9XFxcIjRcXFwiPjwvcGF0aD48cGF0aCBtYXNrPVxcXCJ1cmwoI01hc2staSlcXFwiIGlkPVxcXCJnZWxhY2Npby1pXFxcIiBkPVxcXCJNOTQ4LjgsNjUzLjI1cS0xNS40NSwwLTIzLjE4LTExdC03LjcyLTI2LjlxMC05LjksMi45NC0yNWEyNzUuNzUsMjc1Ljc1LDAsMCwxLDguMjgtMzEuNjMsMjQ5LjM4LDI0OS4zOCwwLDAsMSwxMi4zMi0zMS4yMXE3LTE0LjYyLDE0LjktMjMuODlUOTcyLDQ5NC40MmExMC4xLDEwLjEsMCwwLDEsNy4xOCwzYzIuMDgsMiwzLjEyLDQuODksMy4xMiw4LjYxcy0xLjksOS4zMy01LjcsMTYuNzktOC4yOCwxNi4xNC0xMy40MywyNmEyNDcuMiwyNDcuMiwwLDAsMC0xMy40MiwzMC43N0E5MC4zOCw5MC4zOCwwLDAsMCw5NDQsNjEwLjJxMCwxNC4yLDQuNDEsMTguOTR0MTIuODcsNC43NHExMi41MSwwLDI3LTE0LjY0VDEwMTguNjksNTY4bDQuNzgsNnEtMTIuMTMsMzcuODgtMzIuMTksNTguNTNUOTQ4LjgsNjUzLjI1Wm00My43Ny0xOTUuNDJhMTkuODUsMTkuODUsMCwwLDEtMTItMy44N3EtNS4zNC0zLjg3LTUuMzQtMTEuNjIsMC0xMC4zMyw5LjM4LTE3LjQzdDE5LjMxLTcuMWExNS4zNywxNS4zNywwLDAsMSwxMC4zLDMuNDRxNC4wNSwzLjQ1LDQuMDUsMTEuNjIsMCw5LTguMDksMTdUOTkyLjU3LDQ1Ny44M1pcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKC05NS4zNyAtMzE3Ljc0KVxcXCIgZmlsbD1cXFwiI2M2OWM2ZFxcXCIgc3Ryb2tlPVxcXCIjYzY5YzZkXFxcIiBzdHJva2UtbWl0ZXJsaW1pdD1cXFwiMTBcXFwiIHN0cm9rZS13aWR0aD1cXFwiNFxcXCI+PC9wYXRoPjxwYXRoIG1hc2s9XFxcInVybCgjTWFzay1vKVxcXCIgaWQ9XFxcImdlbGFjY2lvLW9cXFwiIGQ9XFxcIk0xMDM0LjUsNjU0LjU0cS0xNi4xOCwwLTIyLjQzLTEyLjI3YTYwLjI0LDYwLjI0LDAsMCwxLTYuMjYtMjcuNzYsMTExLjQ0LDExMS40NCwwLDAsMSwzLjY4LTI4LDEzNC44NywxMzQuODcsMCwwLDEsOS45My0yNi42OSw3Ny44MSw3Ny44MSwwLDAsMSwxNC0yMC4yM3E3LjcyLTcuNzQsMTUuODItNy43NGExNywxNywwLDAsMSw1LjMzLDEuMDcsMTAuNDYsMTAuNDYsMCwwLDEsNC42LDIuOCw4Mi45Myw4Mi45MywwLDAsMC04LjY0LDE0LjY0LDE5Mi4zNCwxOTIuMzQsMCwwLDAtOC40NiwyMC40NCwxODIuNTgsMTgyLjU4LDAsMCwwLTYuMjYsMjEuOTUsOTQuMzYsOTQuMzYsMCwwLDAtMi4zOSwyMHEwLDkuOSwyLjk0LDE1LjQ5dDkuNTcsNS42cTcuMzUsMCwxNy40Ny05LjI2QTEzMS43NiwxMzEuNzYsMCwwLDAsMTA4Mi42OSw2MDIsNzEuNjgsNzEuNjgsMCwwLDEsMTA2Niw1NzUuMTJxLTUuMzQtMTUuMjctNS4zNC0zNC42NWE3MS43Nyw3MS43NywwLDAsMSw0LjA1LTIyLjgxLDQ5LjUzLDQ5LjUzLDAsMCwxLDEyLjUtMjAuMjNxOC40Ni04LjE2LDIyLjA4LTguMTgsMTUuNDUsMCwyMS41MSwxMC4xMnQ2LjA3LDI0LjMycTAsMTUuOTMtNy4xNywzNS45NGEyNjMuNywyNjMuNywwLDAsMS0xNy4xLDM4LjA5LDIwLDIwLDAsMCwwLDExLjQsMy40NHE1LjUyLDAsMTMuMjQtM0E0NC4xNiw0NC4xNiwwLDAsMCwxMTQyLjEsNTg4cTcuMTctNy4xMSwxMS41OS0xOC43M2w1Ljg4LDUuMTdxLTcuNzIsMjEuMDktMjEuMTUsMzAuNzd0LTI1LjkzLDkuNjlhNDMuMzUsNDMuMzUsMCwwLDEtOS41Ny0xLjA4LDM0LjQ1LDM0LjQ1LDAsMCwxLTguODItMy4yMywxNTEuNzUsMTUxLjc1LDAsMCwxLTI4LjE0LDMxUTEwNTAuMzIsNjU0LjU0LDEwMzQuNSw2NTQuNTRabTU2LjY1LTY1LjQzYTE2OC42MywxNjguNjMsMCwwLDAsMTUuMjctMzIuNDlxNi4wNy0xNy40NSw2LjA3LTMyLjA3LDAtMTAuNzUtMi43Ni0xNS43MXQtNy41NC00Ljk1cS03LjM3LDAtMTQuNzIsMTEuODR0LTcuMzUsMjkuOTFhMTA5LjI5LDEwOS4yOSwwLDAsMCwyLjc2LDIzUTEwODUuNjQsNTgxLjM2LDEwOTEuMTUsNTg5LjExWlxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoLTk1LjM3IC0zMTcuNzQpXFxcIiBmaWxsPVxcXCIjYzY5YzZkXFxcIiBzdHJva2U9XFxcIiNjNjljNmRcXFwiIHN0cm9rZS1taXRlcmxpbWl0PVxcXCIxMFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCI0XFxcIj48L3BhdGg+PC9nPjxkZWZzPjxnIGlkPVxcXCJnZWxhY2Npby1tYXNrc1xcXCI+PHBvbHlsaW5lIGlkPVxcXCJNYXNrLWdlbGFjY2lvLXVuZGVybGluZVxcXCIgcG9pbnRzPVxcXCIxNzQuOTQgNDEzLjkzIDI2Ny4yOCAzODkuMDYgMzcyLjMgMzgxLjI2IDQ2MC44NyAzNzUuOTMgNTUyLjk3IDM3NS45MyA2MjQuMyAzNzUuOTMgNzAzLjYzIDM3NS45MyA3NzAuNDkgMzc1LjkzIDg3MC45NyAzODEuMjYgOTQ3LjgyIDM4My40NCA5OTQuMyAzODcuNzhcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiIzAwMFxcXCIgc3Ryb2tlLW1pdGVybGltaXQ9XFxcIjEwXFxcIiBzdHJva2Utd2lkdGg9XFxcIjM0XFxcIj48L3BvbHlsaW5lPjxnIGlkPVxcXCJNYXNrLWdlbGFjY2lvLUdcXFwiPjxtYXNrIGlkPVxcXCJNYXNrLUdcXFwiPjxwYXRoIGNsYXNzPVxcXCJtYXNrXFxcIiBpZD1cXFwiTWFzay1nZWxhY2Npby1Hc3ViXFxcIiBkPVxcXCJNMTkzLjY3LDUxNS42N2w3Mi42Niw4LjY2LDEwLDRTMjYzLDU1Ny44MSwyNTksNTgwLjA3cy0xMS43OCw2Mi42OC03LjMzLDc5LjYzTDI2NSw2NzkuOTNcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiIzAwMFxcXCIgc3Ryb2tlLW1pdGVybGltaXQ9XFxcIjEwXFxcIiBzdHJva2Utd2lkdGg9XFxcIjM0XFxcIj48L3BhdGg+PHBhdGggY2xhc3M9XFxcIm1hc2tcXFwiIGlkPVxcXCJNYXNrLWdlbGFjY2lvLUdtYWluXFxcIiBkPVxcXCJNMjQ3LDQ0MC40YzEyLjQ2LTUuODcsMzIuNDQtMTIuODUsMzYtMzcuNCw0LjQ0LTMwLjY3LDUuODgtMjkuNzUsMS44OC00MC4xNVMyNzksMzQxLDI2NSwzMzguMzNzLTMzLjMzLDQtNDMuMzMsMTJTMTk0LjMzLDM3MywxODUsMzgzLjY3cy0xNC42NywxNi4yNy0yNCwzNC4xNGEyNjAuODUsMjYwLjg1LDAsMCwwLTE4LDQzLjg2Yy0zLjMzLDEwLjY2LTkuNTUsMjIuMS0xNi42Nyw0Ny4zMy03LjMzLDI2LTE2LDU2LjIxLTcuMzQsMTAwLjY3LDYuNTYsMzMuNjYsMzkuMzQsNTUuMiwzOS4zNCw1NS4yczM2LjY3LDcuNTMsNTAtNS4xNywyOC0yNy4zNywzMC42Ny00Mi43bDIuNjgtMTUuMzNcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiIzAwMFxcXCIgc3Ryb2tlLW1pdGVybGltaXQ9XFxcIjEwXFxcIiBzdHJva2Utd2lkdGg9XFxcIjQwXFxcIj48L3BhdGg+PC9tYXNrPjwvZz48bWFzayBpZD1cXFwiTWFzay1lXFxcIj48cGF0aCBjbGFzcz1cXFwibWFza1xcXCIgaWQ9XFxcIk1hc2stZ2VsYWNjaW8tZVxcXCIgZD1cXFwiTTMyMyw1ODkuMTFsMjguNjctOXMzMC44OS0xNy43NCw0Ni4xMS00MS43NCwyMS4xNS0zMC43LDExLjIyLTM2LjE2Yy0xOC05LjktNDkuMzMsMS4yMS00OS4zMywxLjIxTDMzOSw1MjcuNjdzLTE5LjM0LDMyLjIyLTI0LDQ5LjM5Yy00LjgxLDE3LjczLTYuNjcsNDMuMjcsMi42Nyw1Ni42MXMyNiwyMy4xNSwzOCwxOS41OCwzMi0xNi4yNSw0Ni42Ni0zMC4yNSwyNC44OC0zMS4zMywyNC44OC0zMS4zM0w0MzQuOTMsNTY4XFxcIiBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcIiMwMDBcXFwiIHN0cm9rZS1taXRlcmxpbWl0PVxcXCIxMFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIzNFxcXCI+PC9wYXRoPjwvbWFzaz48bWFzayBpZD1cXFwiTWFzay1sXFxcIj48cGF0aCBjbGFzcz1cXFwibWFza1xcXCIgaWQ9XFxcIk1hc2stZ2VsYWNjaW8tbFxcXCIgZD1cXFwiTTQ3MSw1NTUuNjcsNDkyLjUsNTEyLDUxOSw0NjEuNjdsMTguNjctNDBTNTcxLDM1MSw1NDguMzMsMzQwLjQyYy0xNi4zOS03LjYyLTQ0Ljc5LDYzLjI1LTUxLjkyLDgwLjQ1TDQ3OSw0NjNsLTE0LjY0LDM5LjE3LTEyLjY5LDQ5LjVTNDQxLjE5LDU5Nyw0NDEuMTksNjEyLjMzczE4LjUzLDM0LjY3LDIzLjE3LDMzLjM0LDI1LjQ5LTE4LjY2LDMxLjMxLTI2LjYyLDE4LTIzLjA4LDE4LTIzLjA4bDguODktMTUuOUw1MjguMzMsNTYzXFxcIiBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcIiMwMDBcXFwiIHN0cm9rZS1taXRlcmxpbWl0PVxcXCIxMFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIzNFxcXCI+PC9wYXRoPjwvbWFzaz48bWFzayBpZD1cXFwiTWFzay1hXFxcIj48cGF0aCBjbGFzcz1cXFwibWFza1xcXCIgaWQ9XFxcIk1hc2stZ2VsYWNjaW8tYVxcXCIgZD1cXFwiTTYyOSw1NDYuMzNzMTcuNzctMjkuMjUtNi00MC43MlM1NzkuNjcsNTEyLDU3OS42Nyw1MTJMNTUxLDU0Ni41bC0xMy44MSwyNkw1MjMsNjE1cy04LjY3LDIwLjEzLDAsMzAuNzNTNTU2LjI0LDY0Myw1NTYuMjQsNjQzbDMzLjQzLTM2TDYxMyw1NzcuMDZsMTQuMzEtMjcuMzMsMy43MywxLjcxcy0yOS4zNyw2OC44OS0yNC43MSw3OC44OSwxMCwxNiwyMCwxMmE5Ny4wOSw5Ny4wOSwwLDAsMCwzNC0yMy4zM0M2NzEuNjcsNjA3LDY4Myw1ODAuMDcsNjgzLDU4MC4wN0w2ODYuMTcsNTY4XFxcIiBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcIiMwMDBcXFwiIHN0cm9rZS1taXRlcmxpbWl0PVxcXCIxMFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIzNFxcXCI+PC9wYXRoPjwvbWFzaz48bWFzayBpZD1cXFwiTWFzay1jXFxcIj48cGF0aCBjbGFzcz1cXFwibWFza1xcXCIgaWQ9XFxcIk1hc2stZ2VsYWNjaW8tY1xcXCIgZD1cXFwiTTc1OC4zMyw1NjEuNjdjOC43NS0xMC44LDEyLjItMTYuMTYsMTMuNDItMTguMjVhOC4zNyw4LjM3LDAsMCwwLC44Ni0yLjFjMS4xMi00LjE4LDQuOTItMjAuMzctLjI4LTI5LjMyLTYtMTAuMzMtMzItNi4zOS0zMi02LjM5UzcxNy42Nyw1MjMsNzEwLjMzLDUzNyw2OTcsNTcyLjU0LDY5Nyw1NzIuNTRzLTkuNjYsMzEuNzktMTAuODMsNDQuNDYsMTYuMTYsMjguNzMsMTYuMTYsMjguNzNTNzE2LjExLDY2Myw3MzAuNTYsNjU3czMxLjExLTE4LDMxLjExLTE4bDI2LTI0LjY3TDgwMyw1OTNzMy44Mi0xMy44OSwzLjgyLTE5LjE3XFxcIiBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcIiMwMDBcXFwiIHN0cm9rZS1taXRlcmxpbWl0PVxcXCIxMFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIzNFxcXCI+PC9wYXRoPjwvbWFzaz48bWFzayBpZD1cXFwiTWFzay1jY1xcXCI+PHBhdGggY2xhc3M9XFxcIm1hc2tcXFwiIGlkPVxcXCJNYXNrLWdlbGFjY2lvLWNjXFxcIiBkPVxcXCJNODczLDU1OC4xN2wyMC0xNy4zM3M2LTIwLDAtMzAuMzQtMzItNi4zOC0zMi02LjM4LTIyLjY3LDE3LjM4LTMwLDMxLjM4LTEzLjMzLDM1LjU1LTEzLjMzLDM1LjU1LTQuMjcsMzEuMjMtNC4yNyw0NGMwLDIwLDkuNiwyOS4yNCw5LjYsMjkuMjRzMTMuNzgsMTcuMjYsMjguMjIsMTEuMjYsMzEuMTEtMTgsMzEuMTEtMThsMjYtMjQuNjZMOTIxLDU4Ni4xN2w2LjQ5LTIwLjA3XFxcIiBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcIiMwMDBcXFwiIHN0cm9rZS1taXRlcmxpbWl0PVxcXCIxMFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIzNFxcXCI+PC9wYXRoPjwvbWFzaz48ZyBpZD1cXFwiTWFzay1nZWxhY2Npby1pXFxcIj48bWFzayBpZD1cXFwiTWFzay1pXFxcIj48cGF0aCBjbGFzcz1cXFwibWFza1xcXCIgaWQ9XFxcIk1hc2stZ2VsYWNjaW8taXN1YlxcXCIgZD1cXFwiTTk5Myw0NTQuODJzMjgtMTUuMTUsMjAtMjMuMTUtMTkuMzMtNi0yMi42Ny0zLjM0LTcuMzMsMjAtNy4zMywyMGwzLjMzLDYuNDlaXFxcIiBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcIiMwMDBcXFwiIHN0cm9rZS1taXRlcmxpbWl0PVxcXCIxMFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIzNFxcXCI+PC9wYXRoPjxwYXRoIGNsYXNzPVxcXCJtYXNrXFxcIiBpZD1cXFwiTWFzay1nZWxhY2Npby1pbWFpblxcXCIgZD1cXFwiTTk3NS4yOCw0OTIuMjcsOTU5LjY3LDUyM3MtMTEuMzQsMjQuNjctMTMuMzQsMzIuNjdTOTMxLjY3LDU5NSw5MzAuMzMsNjExLDk0Myw2MzkuNjcsOTQzLDYzOS42N3MyMS4zMywyLjY2LDM1LjMzLTYuNjcsMjguNDgtMzIuODksMjguNDgtMzIuODlsMTYuNjYtMjYuMDZ2LTcuOTFcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiIzAwMFxcXCIgc3Ryb2tlLW1pdGVybGltaXQ9XFxcIjEwXFxcIiBzdHJva2Utd2lkdGg9XFxcIjM0XFxcIj48L3BhdGg+PC9tYXNrPjwvZz48bWFzayBpZD1cXFwiTWFzay1vXFxcIj48cGF0aCBjbGFzcz1cXFwibWFza1xcXCIgaWQ9XFxcIk1hc2stZ2VsYWNjaW8tb1xcXCIgZD1cXFwiTTEwNTYuMzMsNTI4LjMzcy0xOS4zMywyLTI2LDMxLjM0UzEwMTMuNjcsNjM5LDEwMjcsNjQwczI2LDMsNDAtMTEsMzQuNjctNDQuNDcsMzQuNjctNDQuNDdsMTUuMzMtMzhzMTAtMzguNzUsMC00My4xMi0yNi42MS0xMi0zNC4zMSwxLjQ5LTExLjc1LDM2LTExLjc1LDM2LS4zNywzOC4wOSw5LjE4LDQ1LjQyLDI3LjIzLDE5LjExLDQxLjMyLDIwLDM4LjEzLTMxLjg1LDM4LjEzLTMxLjg1bDUuNDMtOC4zNFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlPVxcXCIjMDAwXFxcIiBzdHJva2UtbWl0ZXJsaW1pdD1cXFwiMTBcXFwiIHN0cm9rZS13aWR0aD1cXFwiMzRcXFwiPjwvcGF0aD48L21hc2s+PC9nPjwvZGVmcz48L3N2Zz5cIiIsImV4cG9ydCB7ZGVsYXl9O1xuXG5jb25zdCBkZWxheSA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGVmdC1tb2RhbC10d28nKS5jbGFzc0xpc3QuYWRkKCdkcm9wcGluZycpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tbW9kYWwnKS5jbGFzc0xpc3QuYWRkKCdleHRlbmRpbmcnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLW9uZScpLmNsYXNzTGlzdC5hZGQoJ2V4dE9uZScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tdHdvJykuY2xhc3NMaXN0LmFkZCgnZXh0VHdvJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi10aHJlZScpLmNsYXNzTGlzdC5hZGQoJ2V4dFRocmVlJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhbGxUd28nKS5jbGFzc0xpc3QuYWRkKCdyZXZlYWxpbmcnKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKS5mb3JFYWNoKGEgPT4gYS5jbGFzc0xpc3QuYWRkKCdyZXZlYWxpbmcnKSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpLmZvckVhY2goYSA9PiBhLmNsYXNzTGlzdC5hZGQoJ3JldmVhbGluZycpKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKS5mb3JFYWNoKGEgPT4gYS5jbGFzc0xpc3QuYWRkKCdyZXZlYWxpbmcnKSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHQtY29udGFpbmVyJykuY2xhc3NMaXN0LmFkZCgnZmFkZScpO1xufTsiLCJjb25zdCBhcHBlbmRpbmdDb250YWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc3QgY29udGFjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdENvbnRhaW5lcicpXG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdEhlYWRlcicpO1xuICAgIGNvbnN0IHJldHVybkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHJldHVybkJ0bi5jbGFzc0xpc3QgPSAncmV0dXJuTWFpbic7XG4gICAgcmV0dXJuQnRuLnRleHRDb250ZW50ID0gXCJSRVRVUk5cIjtcbiAgICBjb25zdCBjb250YWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnRhY3RUaXRsZS50ZXh0Q29udGVudCA9IFwiQ29udGFjdHMgdXNcIjtcbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbWVudUJ0bi5jbGFzc0xpc3QgPSBcIm1lbnVCdG5cIjtcbiAgICBtZW51QnRuLnRleHRDb250ZW50ID0gXCJNRU5VXCI7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHJldHVybkJ0bik7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhY3RUaXRsZSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG1lbnVCdG4pO1xuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuXG4gICAgY29uc3QgY29udGFjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0SW5mby5jbGFzc0xpc3QuYWRkKCdjb250YWN0SW5mbycpO1xuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RJbmZvKTtcblxuICAgIGNvbnN0IGdlbGFjY2lvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBnZWxhY2Npby50ZXh0Q29udGVudCA9ICdHZWxhY2Npbyc7XG4gICAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoZ2VsYWNjaW8pXG5cbiAgICBjb25zdCBhZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYWRyZXNzLnRleHRDb250ZW50ID0gJ0FzIGZvciBub3cgeW91IGNhbiBub3QgZmluZCB1cyBhbnl3aGVyZSBvbiB0aGUgbWFwLidcbiAgICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChhZHJlc3MpO1xuXG4gICAgY29uc3QgZmlsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBmaWxsLnRleHRDb250ZW50ID0gJ1lvdSBjYW4gc3RpbGwgZmlsbCB0aGlzIGZvcm0gZm9yIHJlYXNvbnMuJztcbiAgICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChmaWxsKVxuXG5cblxuICAgIGNvbnN0IEljZUNyZWFtQmFsbE9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIEljZUNyZWFtQmFsbE9uZS5jbGFzc0xpc3QuYWRkKCdkZWNvckJhbGxPbmUnKTtcbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKEljZUNyZWFtQmFsbE9uZSk7XG5cbiAgICBjb25zdCBJY2VDcmVhbUJhbGxUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBJY2VDcmVhbUJhbGxUd28uY2xhc3NMaXN0LmFkZCgnZGVjb3JCYWxsVHdvJyk7XG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChJY2VDcmVhbUJhbGxUd28pXG5cbiAgICBjb25zdCBJY2VDcmVhbUJhbGxUaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIEljZUNyZWFtQmFsbFRocmVlLmNsYXNzTGlzdC5hZGQoJ2RlY29yQmFsbFRocmVlJyk7XG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChJY2VDcmVhbUJhbGxUaHJlZSlcblxuICAgIGNvbnN0IEljZUNyZWFtQmFsbEZvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBJY2VDcmVhbUJhbGxGb3VyLmNsYXNzTGlzdC5hZGQoJ2RlY29yQmFsbEZvdXInKTtcbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKEljZUNyZWFtQmFsbEZvdXIpXG5cblxuXG4gICAgXG5cblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0Q29udGFpbmVyKTtcblxuXG59O1xuXG5cbmV4cG9ydCB7YXBwZW5kaW5nQ29udGFjdH07IiwiZXhwb3J0IHtlbXB0eUNvbnRlbnR9O1xuXG5sZXQgZW1wdHlDb250ZW50ID0gKHBhcmVudCkgPT4ge1xuICAgICAgICB3aGlsZSAocGFyZW50Lmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50Lmxhc3RFbGVtZW50Q2hpbGQpO1xuICAgICAgICB9O1xuICAgIH07IiwiaW1wb3J0IGdlbHN2ZyBmcm9tICcuL2dlbHN2Zy5zdmcnO1xuXG5jb25zdCBhcHBlbmRpbmdNYWluID0gKCkgPT4ge1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuY29uc3QgaWNlQmFsbFR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuaWNlQmFsbFR3by5jbGFzc0xpc3QuYWRkKCdiYWxsVHdvJyk7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQoaWNlQmFsbFR3byk7XG5jb25zdCBpY2VDcmVhbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuaWNlQ3JlYW0uY2xhc3NMaXN0LmFkZCgndGV4dC1jb250YWluZXInKTtcbmNvbnN0IGZpcnN0TGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZmlyc3RMaW5lLmNsYXNzTGlzdC5hZGQoJ3RleHRPbmUnKTtcbmZpcnN0TGluZS50ZXh0Q29udGVudCA9IFwiSWNlIENyZWFtXCI7XG5pY2VDcmVhbS5hcHBlbmRDaGlsZChmaXJzdExpbmUpO1xuY29uc3Qgc2Vjb25kTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuc2Vjb25kTGluZS50ZXh0Q29udGVudCA9IFwiVGltZVwiO1xuc2Vjb25kTGluZS5jbGFzc0xpc3QuYWRkKCd0ZXh0VHdvJyk7XG5pY2VDcmVhbS5hcHBlbmRDaGlsZChzZWNvbmRMaW5lKVxuY29udGFpbmVyLmFwcGVuZENoaWxkKGljZUNyZWFtKTtcblxuY29uc3QgaW1hZ2VXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5pbWFnZVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaW1hZ2UtY29udGFpbmVyJyk7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2VXcmFwcGVyKTtcblxuXG5jb25zdCBsZWZ0QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5sZWZ0QmFyLmNsYXNzTGlzdC5hZGQoJ2xlZnQtc2lkZS1iYXInKTtcbmNvbnN0IGxlZnRNb2RhbEZpcnN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbmxlZnRNb2RhbEZpcnN0LmNsYXNzTGlzdC5hZGQoJ2xlZnQtbW9kYWwtb25lJyk7XG5jb25zdCBsZWZ0TW9kYWxTZWNvbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmxlZnRNb2RhbFNlY29uZC5jbGFzc0xpc3QuYWRkKCdsZWZ0LW1vZGFsLXR3bycpO1xubGVmdEJhci5hcHBlbmRDaGlsZChsZWZ0TW9kYWxGaXJzdCk7XG5sZWZ0QmFyLmFwcGVuZENoaWxkKGxlZnRNb2RhbFNlY29uZCk7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQobGVmdEJhcik7XG5cbmNvbnN0IGhhbmR3cml0dGVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5oYW5kd3JpdHRlbi5jbGFzc0xpc3QuYWRkKCdoYW5kd3JpdHRlbicpO1xuZnVuY3Rpb24gY29tcG9uZW50KCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGdlbHN2ZztcbiAgICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmhhbmR3cml0dGVuLmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChoYW5kd3JpdHRlbik7XG5cbmNvbnN0IGJ1dHRvbk1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5idXR0b25Nb2RhbC5jbGFzc0xpc3QuYWRkKCdidXR0b24tbW9kYWwnKTtcbmNvbnN0IGJ0bk9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuYnRuT25lLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1vbmUnKTtcbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbm1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnbWVudUJ0bicpO1xubWVudUJ0bi50ZXh0Q29udGVudCA9IFwiTUVOVVwiXG5idG5PbmUuYXBwZW5kQ2hpbGQobWVudUJ0bik7IFxuY29uc3QgYnRuVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5idG5Ud28uY2xhc3NMaXN0LmFkZCgnYnV0dG9uLXR3bycpO1xuY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuY29udGFjdEJ0bi5jbGFzc0xpc3QuYWRkKCdjb250YWN0QnRuJylcbmNvbnRhY3RCdG4udGV4dENvbnRlbnQgPSBcIkNPTlRBQ1RcIjtcbmJ0blR3by5hcHBlbmRDaGlsZChjb250YWN0QnRuKTsgXG5jb25zdCBidG5UaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuYnRuVGhyZWUuY2xhc3NMaXN0LmFkZCgnYnV0dG9uLXRocmVlJyk7XG5idXR0b25Nb2RhbC5hcHBlbmRDaGlsZChidG5PbmUpO1xuYnV0dG9uTW9kYWwuYXBwZW5kQ2hpbGQoYnRuVHdvKTtcbmJ1dHRvbk1vZGFsLmFwcGVuZENoaWxkKGJ0blRocmVlKTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25Nb2RhbCk7XG5cbn1cblxuXG5leHBvcnQge2FwcGVuZGluZ01haW59O1xuIiwiaW1wb3J0IElDb25lIGZyb20gJy4vYXNzZXRzL0lDb25lLnN2Zyc7XG5pbXBvcnQgSUN0d28gZnJvbSAnLi9hc3NldHMvSUN0d28uc3ZnJztcbmltcG9ydCBJQ3RocmVlIGZyb20gJy4vYXNzZXRzL0lDdGhyZWUuc3ZnJztcbmltcG9ydCBJQ2ZvdXIgZnJvbSAnLi9hc3NldHMvSUNmb3VyLnN2Zyc7XG5pbXBvcnQgSUNmaXZlIGZyb20gJy4vYXNzZXRzL0lDZml2ZS5zdmcnO1xuaW1wb3J0IElDc2l4IGZyb20gJy4vYXNzZXRzL0lDc2l4LnN2Zyc7XG5pbXBvcnQgSUNzZXZlbiBmcm9tICcuL2Fzc2V0cy9JQ3NldmVuLnN2Zyc7XG5pbXBvcnQgSUNlaWdodCBmcm9tICcuL2Fzc2V0cy9JQ2VpZ2h0LnN2Zyc7XG5cbmxldCBwb3B1bGF0ZU1lbnUgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpOyBcbiAgICBjb25zdCBtZW51Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVDb250ZW50LmNsYXNzTGlzdC5hZGQoJ21lbnVDb250ZW50Jyk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21lbnVIZWFkZXInKVxuICAgIGNvbnN0IHJldHVybkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHJldHVybkJ0bi5jbGFzc0xpc3QgPSAncmV0dXJuTWFpbic7XG4gICAgcmV0dXJuQnRuLnRleHRDb250ZW50ID0gXCJSRVRVUk5cIjtcbiAgICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIG1lbnVUaXRsZS50ZXh0Q29udGVudCA9IFwiQ2hvb3NlIFlvdXIgRmxhdm9yIVwiO1xuICAgIGNvbnN0IGNvbnRyYWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29udHJhY3RCdG4uY2xhc3NMaXN0ID0gXCJjb250YWN0QnRuXCJcbiAgICBjb250cmFjdEJ0bi50ZXh0Q29udGVudCA9IFwiQ09OVFJBQ1RcIlxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChyZXR1cm5CdG4pO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChtZW51VGl0bGUpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjb250cmFjdEJ0bik7XG4gICAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuXG4gICAgZnVuY3Rpb24gaWNlQ3JlYW1TdmdDcmVhdG9yKHBhdGgpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHBhdGhcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICB9O1xuXG4gICAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoaWNlQ3JlYW1TdmdDcmVhdG9yKElDb25lKSk7XG4gICAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoaWNlQ3JlYW1TdmdDcmVhdG9yKElDdHdvKSk7XG4gICAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoaWNlQ3JlYW1TdmdDcmVhdG9yKElDdGhyZWUpKTtcbiAgICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChpY2VDcmVhbVN2Z0NyZWF0b3IoSUNmb3VyKSk7XG4gICAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoaWNlQ3JlYW1TdmdDcmVhdG9yKElDZml2ZSkpO1xuICAgIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKGljZUNyZWFtU3ZnQ3JlYXRvcihJQ3NpeCkpO1xuICAgIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKGljZUNyZWFtU3ZnQ3JlYXRvcihJQ3NldmVuKSk7XG4gICAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoaWNlQ3JlYW1TdmdDcmVhdG9yKElDZWlnaHQpKTsgICBcblxuXG4gICAgY29uc3QgSWNlQ3JlYW1CYWxsT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgSWNlQ3JlYW1CYWxsT25lLmNsYXNzTGlzdC5hZGQoJ2RlY29yQmFsbE9uZScpO1xuICAgIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKEljZUNyZWFtQmFsbE9uZSlcblxuICAgIGNvbnN0IEljZUNyZWFtQmFsbFR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIEljZUNyZWFtQmFsbFR3by5jbGFzc0xpc3QuYWRkKCdkZWNvckJhbGxUd28nKTtcbiAgICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChJY2VDcmVhbUJhbGxUd28pXG5cbiAgICBjb25zdCBJY2VDcmVhbUJhbGxUaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIEljZUNyZWFtQmFsbFRocmVlLmNsYXNzTGlzdC5hZGQoJ2RlY29yQmFsbFRocmVlJyk7XG4gICAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoSWNlQ3JlYW1CYWxsVGhyZWUpXG5cbiAgICBjb25zdCBJY2VDcmVhbUJhbGxGb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgSWNlQ3JlYW1CYWxsRm91ci5jbGFzc0xpc3QuYWRkKCdkZWNvckJhbGxGb3VyJyk7XG4gICAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoSWNlQ3JlYW1CYWxsRm91cilcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51Q29udGVudCk7IFxufVxuXG5leHBvcnQge3BvcHVsYXRlTWVudX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgeyBhcHBlbmRpbmdNYWluIH0gZnJvbSAnLi9tYWluLXBhZ2UtbG9hZCc7XG5pbXBvcnQge2RlbGF5fSBmcm9tICcuL2FuaW1hdGlvbi1tYWluJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtlbXB0eUNvbnRlbnR9IGZyb20gJy4vZW1wdHktY29udGVudCc7XG5pbXBvcnQge3BvcHVsYXRlTWVudX0gZnJvbSAnLi9tZW51LXBhZ2UtbG9hZCc7XG5pbXBvcnQge2FwcGVuZGluZ0NvbnRhY3R9IGZyb20gJy4vY29udGFjdC1wYWdlLWxvYWQnO1xuXG5cbmNvbnN0IGV2ZW50SGFuZGxlciA9ICgoKSA9PiB7XG5cbiAgICBhcHBlbmRpbmdNYWluKCk7XG5cbiAgICBzZXRUaW1lb3V0KGRlbGF5LCA0ODAwKTtcbiAgICBcbiAgICBcblxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gICAgbGV0IGNyZWF0ZU1lbnUgPSAoKSA9PiB7XG4gICAgICAgIGVtcHR5Q29udGVudChjb250YWluZXIpO1xuICAgICAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICBwb3B1bGF0ZU1lbnUoKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJldHVybk1haW4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZXZlbnRIYW5kbGVyLmNyZWF0ZU1haW4pO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdEJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxldmVudEhhbmRsZXIuY3JlYXRlQ29udGFjdCk7XG4gICAgfTtcblxuICAgIGxldCBjcmVhdGVNYWluID0gKCkgPT4ge1xuICAgICAgICBlbXB0eUNvbnRlbnQoY29udGFpbmVyKTtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbiAgICAgICAgYXBwZW5kaW5nTWFpbigpO1xuICAgICAgICBzZXRUaW1lb3V0KGRlbGF5LCA0ODAwKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVCdG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZXZlbnRIYW5kbGVyLmNyZWF0ZU1lbnUpOyBcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3RCdG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZXZlbnRIYW5kbGVyLmNyZWF0ZUNvbnRhY3QpO1xuICAgIH07XG5cbiAgICBsZXQgY3JlYXRlQ29udGFjdCA9ICgpID0+IHtcbiAgICAgICAgZW1wdHlDb250ZW50KGNvbnRhaW5lcik7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIGFwcGVuZGluZ0NvbnRhY3QoKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJldHVybk1haW4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZXZlbnRIYW5kbGVyLmNyZWF0ZU1haW4pO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudUJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxldmVudEhhbmRsZXIuY3JlYXRlTWVudSk7IFxuICAgIH1cblxuICAgIFxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlTWVudSxcbiAgICAgICAgY3JlYXRlTWFpbixcbiAgICAgICAgY3JlYXRlQ29udGFjdCxcbiAgICB9O1xuXG59KSgpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudUJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxldmVudEhhbmRsZXIuY3JlYXRlTWVudSk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdEJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxldmVudEhhbmRsZXIuY3JlYXRlQ29udGFjdCk7XG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9