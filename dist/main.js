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
___CSS_LOADER_EXPORT___.push([module.id, "* { \n    margin: 0;\n    padding: 0;\n    background-color: #0f160c;\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n}\n\n\n#content {\n    display: grid;\n    grid-template-columns: 4vw 30vw 1fr 1fr 1fr 1fr;\n    grid-template-rows: 20vh 22.5vh 26.25vh 26.25vh 5vh;\n}\n\n.left-side-bar {\n    grid-area: 1 / 1 / 5 / 2;\n    display: flex;\n\n}\n\n.ballTwo {\n    position: absolute;\n    top: 5%;\n    left: 30%;\n    width: 50vh;\n    height: 50vh;\n    border-radius: 1000px;\n    z-index: 1000;\n    background: linear-gradient(90deg , white 50%, rgb(255, 166, 0) 100%);\n    filter: drop-shadow(2px 2px 10px rgb(194, 175, 91));\n    transition: 3500ms ease-in-out;\n    opacity: 0;\n}\n\n.left-modal-one {\n    background-color: #0f160c;\n    width: 1vw;\n}\n\n.left-modal-two {\n    background-color: #d6d3d1;\n    grid-area: 1 / 1 / 5 / 2;\n    opacity: 0.5;\n    width: 6vh;\n    height: 0;\n    z-index: 1000;\n    transition: 1500ms ease-in-out;\n}\n\n.dropping {\n    height: 100vh;\n    background :linear-gradient( #ce9449 25%, #432304 100%)\n}\n\n.handwritten {\n    transition: all 1s ease;\n    transition-delay: 1s;\n    grid-column: 2/4;\n    grid-row: 1/3;\n    z-index: 999;\n}\n\n\n.handwritten .svg {\n    position: absolute;\n    height: 30vh;\n    width: 100vh;\n    z-index: 999;\n    \n}\n#written {\n    position: absolute;\n    top: 5%;\n    left: -60%;\n    width: auto;\n    height: 12vh;\n    left: 10%;\n    z-index: 1000;   \n}\n\n.mask {\n    fill: none;\n    stroke: white;\n}\n\n\n.mask {\n    stroke-dasharray: 1000;\n    stroke-dashoffset: 1000;\n  }\n  \n  @keyframes strokeOffset {\n    to {\n      stroke-dashoffset: 0;\n    }\n  }\n  \n\n  #Mask-gelaccio-Gmain {\n    animation: strokeOffset 1s linear forwards;\n  }\n\n  #Mask-gelaccio-Gsub {\n    animation: strokeOffset 2s linear forwards 0.5s;\n  }\n\n  #Mask-gelaccio-e {\n    animation: strokeOffset 1s linear forwards 1s; \n  }\n\n  #Mask-gelaccio-l {\n    animation: strokeOffset 1s linear forwards 1.5s; \n  }\n\n  #Mask-gelaccio-a {\n    animation: strokeOffset 1s linear forwards 2s; \n  }\n\n  #Mask-gelaccio-c {\n    animation: strokeOffset 1s linear forwards 2.5s; \n  }\n\n  #Mask-gelaccio-cc {\n    animation: strokeOffset 1s linear forwards 3s; \n  }\n\n  #Mask-gelaccio-imain {\n    animation: strokeOffset 1s linear forwards 3.5s; \n  }\n\n\n  #Mask-gelaccio-o {\n    animation: strokeOffset 1s linear forwards 4.0s; \n  }\n\n  #Mask-gelaccio-isub {\n    animation: strokeOffset 2s linear forwards 4.7s; \n  }\n\n\n\n.text-container {\n    margin-left: -10vw;\n    margin-right: 10vw;\n    grid-area: 2 / 4 / 3 / 6;\n    align-self: center;\n    z-index: 1004;\n    font-size: 40px;\n    opacity: 0;\n    transition: 3500ms;\n    background: linear-gradient(90deg ,rgb(255, 166, 0) 50% , white 100%);\n}\n\n.textOne , .textTwo {\n\n    padding: 1vh 1vh 0vh 1vh;\n    border-left: 2px solid rgb(255, 166, 0);\n    border-right: 2px solid rgb(255, 166, 0);\n    text-align: start;\n    width: 40%;\n}\n\n.textOne {\n    color :rgb(255, 166, 0);\n    border-top: 2px solid rgb(255, 166, 0);\n    font-size: 1.75rem;\n    text-shadow: 1px 1px 1px #d6d3d1;\n}\n\n.textTwo {\n    border-bottom: 2px solid rgb(255, 166, 0);\n    font-size: 3rem;\n    color: white;\n    text-shadow: 1px 1px 1px rgb(255, 166, 0);\n    letter-spacing: 3px;\n}\n\n.fade {\n    opacity: 1;\n}\n\n.image-container {\n    z-index: 1002;\n    grid-area: 2 / 2 / 5 / 4; \n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    filter: drop-shadow(4px 0px 3px #cdad8f);\n    background-repeat: no-repeat;\n}\n\nimg {\n    z-index: 1000;\n    grid-area: 2 / 2 / 5 / 3;\n}\n\n.button-modal {\n    grid-area: 3 / 3 / 5 / 6;\n    display: grid;\n    width: 0;\n    gap: 1vh;\n    grid-template-rows:  1fr 1fr 1fr;\n    transition: 1500ms ease-in-out;\n}\n\n.button-one, .button-two, .button-three  {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    border-top-right-radius: 20px;\n    width: 0;\n    background: linear-gradient(#d8d5d0 50% , #be8142 100%);\n    transition: 1500ms ease-in-out;\n    z-index: 1001;\n    \n}\n\n\n\nbutton {\n    position: relative;\n    display:block;\n    height: 45px;\n    width: 150px;\n    margin: 10px 7px;\n    padding: 5px 5px;\n    font-weight: 700;\n    font-size: 15px;\n    letter-spacing: 2px;\n    color: #383736;\n    border: 2px #383736 solid;\n    border-radius: 4px;\n    text-transform: uppercase;\n    outline: 0;\n    overflow:hidden;\n    background: none;\n    z-index: 1;\n    cursor: pointer;\n    transition:         0.08s ease-in;\n    -o-transition:      0.08s ease-in;\n    -ms-transition:     0.08s ease-in;\n    -moz-transition:    0.08s ease-in;\n    -webkit-transition: 0.08s ease-in;\n  }\n  \n  button:hover {\n    color: whitesmoke;\n  }\n  \n  button:before {\n    content: \"\";\n    position: absolute;\n    background: #383736;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    top: 100%;\n    z-index: -1;\n    transition: top 0.09s ease-in;\n  }\n  \n  button:hover:before {\n    top: 0;\n  }\n\n  .menuBtn , .contactBtn {\n      opacity: 0;\n  }\n  \n \n.revealing {\n    opacity: 1;\n}\n\n\n\n\n\n\n\n\n.button-two {\n    background-color: #be8142;\n}\n\n.button-three {\n    background-color: #432304;\n}\n\n.extending {\n    width: 100%;\n}\n\n.extOne {\n    width: 50%;\n}\n\n.extTwo {\n    width: 55%;\n}\n\n.extThree {\n    width: 60%;\n}\n\n.image-container {\n    animation: fadeIn 7s;\n    -webkit-animation: fadeIn 4.5s;\n    -moz-animation: fadeIn 4.5s;\n    -o-animation: fadeIn 4.5s;\n    -ms-animation: fadeIn 4.5s;\n  }\n  @keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  }\n  \n  @-moz-keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  }\n  \n  @-webkit-keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  }\n  \n  @-o-keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  }\n  \n  @-ms-keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  } \n\n  /* Menu page styling */\n\n.menuContent {\n      display: grid;\n      width: 100%;\n      grid-template-columns: 1fr 1fr 1fr 1fr;\n      grid-template-rows: 10vh 1fr 1fr;\n      justify-items: center;\n      gap: 4vh;\n  }\n\nh1 {\n    background-color: rgb(197, 177, 66);\n    text-shadow: 2px 2px 2px black;\n}\n\n\n.menuHeader, .contactHeader {\n    background-color: rgb(197, 177, 66);\n      grid-area: 1 / 1 / 2 / 5 ;\n      height: 100%;\n      display: flex;\n      align-self: center;\n      justify-content: space-around;\n      align-items: center;\n      color: white;\n      width: 100%;\n      border-bottom: 2px solid white;\n  }\n\n  \nsvg:not(#written  ) {\n      width: 10vw;\n      height: 10vw;\n      padding: 5vh;\n      transition: 200ms ease-out;\n      position: relative;\n      border-radius: 500px;\n  }\n\n\n\nsvg:not(#written):hover {\n      animation: shake 0.5s ease-in-out;\n      animation-iteration-count: infinite;\n      z-index: 1000;\n      background: rgb(197, 177, 66);\n      border-radius: 500px;\n  }\n\n\n\n  @keyframes shake {\n    0% { transform: translate(1px, 1px) rotate(0deg) scale(1.1); }\n    10% { transform: translate(-1px, -2px) rotate(-1deg) scale(1.1); }\n    20% { transform: translate(-3px, 0px) rotate(1deg) scale(1.1); }\n    30% { transform: translate(3px, 2px) rotate(0deg) scale(1.1); }\n    40% { transform: translate(1px, -1px) rotate(1deg) scale(1.2); }\n    50% { transform: translate(-1px, 2px) rotate(-1deg) scale(1.2); }\n    60% { transform: translate(-3px, 1px) rotate(0deg) scale(1.2); }\n    70% { transform: translate(3px, 1px) rotate(-1deg) scale(1.2); }\n    80% { transform: translate(-1px, -1px) rotate(1deg) scale(1.1); }\n    90% { transform: translate(1px, 2px) rotate(0deg) scale(1.1); }\n    100% { transform: translate(1px, -2px) rotate(-1deg) scale(1.1); }\n  }\n\n.decorBallOne , .decorBallTwo, .decorBallThree, .decorBallFour {\n    position: absolute;\n    height: 40vh;\n    width: 40vh;\n    background-color: rebeccapurple;\n  }\n\n.decorBallOne {\n    bottom: 0%;\n    left: 12%;\n    width: 320px;\n    height: 160px; /* as the half of the width */\n    background:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-size: cover;\n    border-top-left-radius: 170px;  \n    border-top-right-radius: 170px; \n    border: 10px solid yellow;\n    border-bottom: 0;\n}\n\n.decorBallTwo {\n    bottom: 0%;\n    left: 32%;\n    width: 320px;\n    height: 160px; /* as the half of the width */\n    background:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-size:cover;\n    border-top-left-radius: 170px;  \n    border-top-right-radius: 170px; \n    border: 10px solid yellow;\n    border-bottom: 0;\n}\n\n.decorBallThree {\n    bottom: 0%;\n    left: 52%;\n    width: 320px;\n    height: 160px; \n    background:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    background-size:cover;\n    border-top-left-radius: 170px;  \n    border-top-right-radius: 170px; \n    border: 10px solid yellow;\n    border-bottom: 0;\n}\n\n.decorBallFour {\n    bottom: 0%;\n    left: 72%;\n    width: 320px;\n    height: 160px; \n    background:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n    background-size:cover;\n    border-top-left-radius: 170px;  \n    border-top-right-radius: 170px; \n    border: 10px solid yellow;\n    border-bottom: 0;\n}\n\n/* Contact page layout */\n\n.contactContainer {\n    display: grid;\n    grid-template-rows: 10vh 1fr 20vh;\n    width: 100%;\n    height: 100%;\n}\n\n.contactHeader .menuBtn, .menuHeader .contactBtn {\n    opacity: 1;\n}\n\n\n\n\n\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* { \n    margin: 0;\n    padding: 0;\n    background-color: #0f160c;\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n}\n\n\n#content {\n    display: grid;\n    grid-template-columns: 4vw 30vw 1fr 1fr 1fr 1fr;\n    grid-template-rows: 20vh 22.5vh 26.25vh 26.25vh 5vh;\n}\n\n.left-side-bar {\n    grid-area: 1 / 1 / 5 / 2;\n    display: flex;\n\n}\n\n.ballTwo {\n    position: absolute;\n    top: 5%;\n    left: 30%;\n    width: 50vh;\n    height: 50vh;\n    border-radius: 1000px;\n    z-index: 1000;\n    background: linear-gradient(90deg , white 50%, rgb(255, 166, 0) 100%);\n    filter: drop-shadow(2px 2px 10px rgb(194, 175, 91));\n    transition: 3500ms ease-in-out;\n    opacity: 0;\n}\n\n.left-modal-one {\n    background-color: #0f160c;\n    width: 1vw;\n}\n\n.left-modal-two {\n    background-color: #d6d3d1;\n    grid-area: 1 / 1 / 5 / 2;\n    opacity: 0.5;\n    width: 6vh;\n    height: 0;\n    z-index: 1000;\n    transition: 1500ms ease-in-out;\n}\n\n.dropping {\n    height: 100vh;\n    background :linear-gradient( #ce9449 25%, #432304 100%)\n}\n\n.handwritten {\n    transition: all 1s ease;\n    transition-delay: 1s;\n    grid-column: 2/4;\n    grid-row: 1/3;\n    z-index: 999;\n}\n\n\n.handwritten .svg {\n    position: absolute;\n    height: 30vh;\n    width: 100vh;\n    z-index: 999;\n    \n}\n#written {\n    position: absolute;\n    top: 5%;\n    left: -60%;\n    width: auto;\n    height: 12vh;\n    left: 10%;\n    z-index: 1000;   \n}\n\n.mask {\n    fill: none;\n    stroke: white;\n}\n\n\n.mask {\n    stroke-dasharray: 1000;\n    stroke-dashoffset: 1000;\n  }\n  \n  @keyframes strokeOffset {\n    to {\n      stroke-dashoffset: 0;\n    }\n  }\n  \n\n  #Mask-gelaccio-Gmain {\n    animation: strokeOffset 1s linear forwards;\n  }\n\n  #Mask-gelaccio-Gsub {\n    animation: strokeOffset 2s linear forwards 0.5s;\n  }\n\n  #Mask-gelaccio-e {\n    animation: strokeOffset 1s linear forwards 1s; \n  }\n\n  #Mask-gelaccio-l {\n    animation: strokeOffset 1s linear forwards 1.5s; \n  }\n\n  #Mask-gelaccio-a {\n    animation: strokeOffset 1s linear forwards 2s; \n  }\n\n  #Mask-gelaccio-c {\n    animation: strokeOffset 1s linear forwards 2.5s; \n  }\n\n  #Mask-gelaccio-cc {\n    animation: strokeOffset 1s linear forwards 3s; \n  }\n\n  #Mask-gelaccio-imain {\n    animation: strokeOffset 1s linear forwards 3.5s; \n  }\n\n\n  #Mask-gelaccio-o {\n    animation: strokeOffset 1s linear forwards 4.0s; \n  }\n\n  #Mask-gelaccio-isub {\n    animation: strokeOffset 2s linear forwards 4.7s; \n  }\n\n\n\n.text-container {\n    margin-left: -10vw;\n    margin-right: 10vw;\n    grid-area: 2 / 4 / 3 / 6;\n    align-self: center;\n    z-index: 1004;\n    font-size: 40px;\n    opacity: 0;\n    transition: 3500ms;\n    background: linear-gradient(90deg ,rgb(255, 166, 0) 50% , white 100%);\n}\n\n.textOne , .textTwo {\n\n    padding: 1vh 1vh 0vh 1vh;\n    border-left: 2px solid rgb(255, 166, 0);\n    border-right: 2px solid rgb(255, 166, 0);\n    text-align: start;\n    width: 40%;\n}\n\n.textOne {\n    color :rgb(255, 166, 0);\n    border-top: 2px solid rgb(255, 166, 0);\n    font-size: 1.75rem;\n    text-shadow: 1px 1px 1px #d6d3d1;\n}\n\n.textTwo {\n    border-bottom: 2px solid rgb(255, 166, 0);\n    font-size: 3rem;\n    color: white;\n    text-shadow: 1px 1px 1px rgb(255, 166, 0);\n    letter-spacing: 3px;\n}\n\n.fade {\n    opacity: 1;\n}\n\n.image-container {\n    z-index: 1002;\n    grid-area: 2 / 2 / 5 / 4; \n    background: url(ice-cream-shop.avif);\n    filter: drop-shadow(4px 0px 3px #cdad8f);\n    background-repeat: no-repeat;\n}\n\nimg {\n    z-index: 1000;\n    grid-area: 2 / 2 / 5 / 3;\n}\n\n.button-modal {\n    grid-area: 3 / 3 / 5 / 6;\n    display: grid;\n    width: 0;\n    gap: 1vh;\n    grid-template-rows:  1fr 1fr 1fr;\n    transition: 1500ms ease-in-out;\n}\n\n.button-one, .button-two, .button-three  {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    border-top-right-radius: 20px;\n    width: 0;\n    background: linear-gradient(#d8d5d0 50% , #be8142 100%);\n    transition: 1500ms ease-in-out;\n    z-index: 1001;\n    \n}\n\n\n\nbutton {\n    position: relative;\n    display:block;\n    height: 45px;\n    width: 150px;\n    margin: 10px 7px;\n    padding: 5px 5px;\n    font-weight: 700;\n    font-size: 15px;\n    letter-spacing: 2px;\n    color: #383736;\n    border: 2px #383736 solid;\n    border-radius: 4px;\n    text-transform: uppercase;\n    outline: 0;\n    overflow:hidden;\n    background: none;\n    z-index: 1;\n    cursor: pointer;\n    transition:         0.08s ease-in;\n    -o-transition:      0.08s ease-in;\n    -ms-transition:     0.08s ease-in;\n    -moz-transition:    0.08s ease-in;\n    -webkit-transition: 0.08s ease-in;\n  }\n  \n  button:hover {\n    color: whitesmoke;\n  }\n  \n  button:before {\n    content: \"\";\n    position: absolute;\n    background: #383736;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    top: 100%;\n    z-index: -1;\n    transition: top 0.09s ease-in;\n  }\n  \n  button:hover:before {\n    top: 0;\n  }\n\n  .menuBtn , .contactBtn {\n      opacity: 0;\n  }\n  \n \n.revealing {\n    opacity: 1;\n}\n\n\n\n\n\n\n\n\n.button-two {\n    background-color: #be8142;\n}\n\n.button-three {\n    background-color: #432304;\n}\n\n.extending {\n    width: 100%;\n}\n\n.extOne {\n    width: 50%;\n}\n\n.extTwo {\n    width: 55%;\n}\n\n.extThree {\n    width: 60%;\n}\n\n.image-container {\n    animation: fadeIn 7s;\n    -webkit-animation: fadeIn 4.5s;\n    -moz-animation: fadeIn 4.5s;\n    -o-animation: fadeIn 4.5s;\n    -ms-animation: fadeIn 4.5s;\n  }\n  @keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  }\n  \n  @-moz-keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  }\n  \n  @-webkit-keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  }\n  \n  @-o-keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  }\n  \n  @-ms-keyframes fadeIn {\n    0% {opacity:0;}\n    100% {opacity:1;}\n  } \n\n  /* Menu page styling */\n\n.menuContent {\n      display: grid;\n      width: 100%;\n      grid-template-columns: 1fr 1fr 1fr 1fr;\n      grid-template-rows: 10vh 1fr 1fr;\n      justify-items: center;\n      gap: 4vh;\n  }\n\nh1 {\n    background-color: rgb(197, 177, 66);\n    text-shadow: 2px 2px 2px black;\n}\n\n\n.menuHeader, .contactHeader {\n    background-color: rgb(197, 177, 66);\n      grid-area: 1 / 1 / 2 / 5 ;\n      height: 100%;\n      display: flex;\n      align-self: center;\n      justify-content: space-around;\n      align-items: center;\n      color: white;\n      width: 100%;\n      border-bottom: 2px solid white;\n  }\n\n  \nsvg:not(#written  ) {\n      width: 10vw;\n      height: 10vw;\n      padding: 5vh;\n      transition: 200ms ease-out;\n      position: relative;\n      border-radius: 500px;\n  }\n\n\n\nsvg:not(#written):hover {\n      animation: shake 0.5s ease-in-out;\n      animation-iteration-count: infinite;\n      z-index: 1000;\n      background: rgb(197, 177, 66);\n      border-radius: 500px;\n  }\n\n\n\n  @keyframes shake {\n    0% { transform: translate(1px, 1px) rotate(0deg) scale(1.1); }\n    10% { transform: translate(-1px, -2px) rotate(-1deg) scale(1.1); }\n    20% { transform: translate(-3px, 0px) rotate(1deg) scale(1.1); }\n    30% { transform: translate(3px, 2px) rotate(0deg) scale(1.1); }\n    40% { transform: translate(1px, -1px) rotate(1deg) scale(1.2); }\n    50% { transform: translate(-1px, 2px) rotate(-1deg) scale(1.2); }\n    60% { transform: translate(-3px, 1px) rotate(0deg) scale(1.2); }\n    70% { transform: translate(3px, 1px) rotate(-1deg) scale(1.2); }\n    80% { transform: translate(-1px, -1px) rotate(1deg) scale(1.1); }\n    90% { transform: translate(1px, 2px) rotate(0deg) scale(1.1); }\n    100% { transform: translate(1px, -2px) rotate(-1deg) scale(1.1); }\n  }\n\n.decorBallOne , .decorBallTwo, .decorBallThree, .decorBallFour {\n    position: absolute;\n    height: 40vh;\n    width: 40vh;\n    background-color: rebeccapurple;\n  }\n\n.decorBallOne {\n    bottom: 0%;\n    left: 12%;\n    width: 320px;\n    height: 160px; /* as the half of the width */\n    background:url(./assets/decor-first.jpg);\n    background-size: cover;\n    border-top-left-radius: 170px;  \n    border-top-right-radius: 170px; \n    border: 10px solid yellow;\n    border-bottom: 0;\n}\n\n.decorBallTwo {\n    bottom: 0%;\n    left: 32%;\n    width: 320px;\n    height: 160px; /* as the half of the width */\n    background:url(./assets/decor-second.jpg);\n    background-size:cover;\n    border-top-left-radius: 170px;  \n    border-top-right-radius: 170px; \n    border: 10px solid yellow;\n    border-bottom: 0;\n}\n\n.decorBallThree {\n    bottom: 0%;\n    left: 52%;\n    width: 320px;\n    height: 160px; \n    background:url(./assets/decor-three.jpg);\n    background-size:cover;\n    border-top-left-radius: 170px;  \n    border-top-right-radius: 170px; \n    border: 10px solid yellow;\n    border-bottom: 0;\n}\n\n.decorBallFour {\n    bottom: 0%;\n    left: 72%;\n    width: 320px;\n    height: 160px; \n    background:url(./assets/decor-four.jpg);\n    background-size:cover;\n    border-top-left-radius: 170px;  \n    border-top-right-radius: 170px; \n    border: 10px solid yellow;\n    border-bottom: 0;\n}\n\n/* Contact page layout */\n\n.contactContainer {\n    display: grid;\n    grid-template-rows: 10vh 1fr 20vh;\n    width: 100%;\n    height: 100%;\n}\n\n.contactHeader .menuBtn, .menuHeader .contactBtn {\n    opacity: 1;\n}\n\n\n\n\n\n\n\n"],"sourceRoot":""}]);
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

/***/ "./src/contant-page-load.js":
/*!**********************************!*\
  !*** ./src/contant-page-load.js ***!
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
/* harmony import */ var _contant_page_load__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contant-page-load */ "./src/contant-page-load.js");








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
        (0,_contant_page_load__WEBPACK_IMPORTED_MODULE_5__.appendingContact)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsWUFBWSxTQUFTLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxhQUFhLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxvQkFBb0Isb0JBQW9CLE9BQU8sS0FBSyxvQkFBb0Isb0JBQW9CLE9BQU8sS0FBSyxvQkFBb0Isb0JBQW9CLE9BQU8sS0FBSyxvQkFBb0Isb0JBQW9CLE9BQU8sS0FBSyxvQkFBb0Isb0JBQW9CLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsUUFBUSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksUUFBUSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFNBQVMsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsU0FBUyxLQUFLLHNC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Ozs7Ozs7Ozs7QUNyQmlEO0FBQ1Y7QUFDbEI7QUFDd0I7QUFDQztBQUNPOzs7QUFHckQ7O0FBRUEsSUFBSSw4REFBYTs7QUFFakIsZUFBZSxrREFBSztBQUNwQjtBQUNBOztBQUVBOztBQUVBO0FBQ0EsUUFBUSw0REFBWTtBQUNwQjtBQUNBLFFBQVEsNkRBQVk7QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSw0REFBWTtBQUNwQjtBQUNBLFFBQVEsOERBQWE7QUFDckIsbUJBQW1CLGtEQUFLO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsNERBQVk7QUFDcEI7QUFDQSxRQUFRLG9FQUFnQjtBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL0lDZWlnaHQuc3ZnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvSUNmaXZlLnN2ZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL0lDZm91ci5zdmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9JQ29uZS5zdmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9JQ3NldmVuLnN2ZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL0lDc2l4LnN2ZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL0lDdGhyZWUuc3ZnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvSUN0d28uc3ZnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9nZWxzdmcuc3ZnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hbmltYXRpb24tbWFpbi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFudC1wYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2VtcHR5LWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21haW4tcGFnZS1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LXBhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImljZS1jcmVhbS1zaG9wLmF2aWZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9kZWNvci1maXJzdC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9kZWNvci1zZWNvbmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZGVjb3ItdGhyZWUuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZGVjb3ItZm91ci5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7IFxcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZjE2MGM7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcblxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0dncgMzB2dyAxZnIgMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjB2aCAyMi41dmggMjYuMjV2aCAyNi4yNXZoIDV2aDtcXG59XFxuXFxuLmxlZnQtc2lkZS1iYXIge1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gNSAvIDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxufVxcblxcbi5iYWxsVHdvIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUlO1xcbiAgICBsZWZ0OiAzMCU7XFxuICAgIHdpZHRoOiA1MHZoO1xcbiAgICBoZWlnaHQ6IDUwdmg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMDBweDtcXG4gICAgei1pbmRleDogMTAwMDtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnICwgd2hpdGUgNTAlLCByZ2IoMjU1LCAxNjYsIDApIDEwMCUpO1xcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCAycHggMTBweCByZ2IoMTk0LCAxNzUsIDkxKSk7XFxuICAgIHRyYW5zaXRpb246IDM1MDBtcyBlYXNlLWluLW91dDtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmxlZnQtbW9kYWwtb25lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBmMTYwYztcXG4gICAgd2lkdGg6IDF2dztcXG59XFxuXFxuLmxlZnQtbW9kYWwtdHdvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDNkMTtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDUgLyAyO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIHdpZHRoOiA2dmg7XFxuICAgIGhlaWdodDogMDtcXG4gICAgei1pbmRleDogMTAwMDtcXG4gICAgdHJhbnNpdGlvbjogMTUwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZHJvcHBpbmcge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kIDpsaW5lYXItZ3JhZGllbnQoICNjZTk0NDkgMjUlLCAjNDMyMzA0IDEwMCUpXFxufVxcblxcbi5oYW5kd3JpdHRlbiB7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAxcztcXG4gICAgZ3JpZC1jb2x1bW46IDIvNDtcXG4gICAgZ3JpZC1yb3c6IDEvMztcXG4gICAgei1pbmRleDogOTk5O1xcbn1cXG5cXG5cXG4uaGFuZHdyaXR0ZW4gLnN2ZyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAzMHZoO1xcbiAgICB3aWR0aDogMTAwdmg7XFxuICAgIHotaW5kZXg6IDk5OTtcXG4gICAgXFxufVxcbiN3cml0dGVuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUlO1xcbiAgICBsZWZ0OiAtNjAlO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgaGVpZ2h0OiAxMnZoO1xcbiAgICBsZWZ0OiAxMCU7XFxuICAgIHotaW5kZXg6IDEwMDA7ICAgXFxufVxcblxcbi5tYXNrIHtcXG4gICAgZmlsbDogbm9uZTtcXG4gICAgc3Ryb2tlOiB3aGl0ZTtcXG59XFxuXFxuXFxuLm1hc2sge1xcbiAgICBzdHJva2UtZGFzaGFycmF5OiAxMDAwO1xcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMTAwMDtcXG4gIH1cXG4gIFxcbiAgQGtleWZyYW1lcyBzdHJva2VPZmZzZXQge1xcbiAgICB0byB7XFxuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XFxuICAgIH1cXG4gIH1cXG4gIFxcblxcbiAgI01hc2stZ2VsYWNjaW8tR21haW4ge1xcbiAgICBhbmltYXRpb246IHN0cm9rZU9mZnNldCAxcyBsaW5lYXIgZm9yd2FyZHM7XFxuICB9XFxuXFxuICAjTWFzay1nZWxhY2Npby1Hc3ViIHtcXG4gICAgYW5pbWF0aW9uOiBzdHJva2VPZmZzZXQgMnMgbGluZWFyIGZvcndhcmRzIDAuNXM7XFxuICB9XFxuXFxuICAjTWFzay1nZWxhY2Npby1lIHtcXG4gICAgYW5pbWF0aW9uOiBzdHJva2VPZmZzZXQgMXMgbGluZWFyIGZvcndhcmRzIDFzOyBcXG4gIH1cXG5cXG4gICNNYXNrLWdlbGFjY2lvLWwge1xcbiAgICBhbmltYXRpb246IHN0cm9rZU9mZnNldCAxcyBsaW5lYXIgZm9yd2FyZHMgMS41czsgXFxuICB9XFxuXFxuICAjTWFzay1nZWxhY2Npby1hIHtcXG4gICAgYW5pbWF0aW9uOiBzdHJva2VPZmZzZXQgMXMgbGluZWFyIGZvcndhcmRzIDJzOyBcXG4gIH1cXG5cXG4gICNNYXNrLWdlbGFjY2lvLWMge1xcbiAgICBhbmltYXRpb246IHN0cm9rZU9mZnNldCAxcyBsaW5lYXIgZm9yd2FyZHMgMi41czsgXFxuICB9XFxuXFxuICAjTWFzay1nZWxhY2Npby1jYyB7XFxuICAgIGFuaW1hdGlvbjogc3Ryb2tlT2Zmc2V0IDFzIGxpbmVhciBmb3J3YXJkcyAzczsgXFxuICB9XFxuXFxuICAjTWFzay1nZWxhY2Npby1pbWFpbiB7XFxuICAgIGFuaW1hdGlvbjogc3Ryb2tlT2Zmc2V0IDFzIGxpbmVhciBmb3J3YXJkcyAzLjVzOyBcXG4gIH1cXG5cXG5cXG4gICNNYXNrLWdlbGFjY2lvLW8ge1xcbiAgICBhbmltYXRpb246IHN0cm9rZU9mZnNldCAxcyBsaW5lYXIgZm9yd2FyZHMgNC4wczsgXFxuICB9XFxuXFxuICAjTWFzay1nZWxhY2Npby1pc3ViIHtcXG4gICAgYW5pbWF0aW9uOiBzdHJva2VPZmZzZXQgMnMgbGluZWFyIGZvcndhcmRzIDQuN3M7IFxcbiAgfVxcblxcblxcblxcbi50ZXh0LWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMTB2dztcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHZ3O1xcbiAgICBncmlkLWFyZWE6IDIgLyA0IC8gMyAvIDY7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMTAwNDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiAzNTAwbXM7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZyAscmdiKDI1NSwgMTY2LCAwKSA1MCUgLCB3aGl0ZSAxMDAlKTtcXG59XFxuXFxuLnRleHRPbmUgLCAudGV4dFR3byB7XFxuXFxuICAgIHBhZGRpbmc6IDF2aCAxdmggMHZoIDF2aDtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCByZ2IoMjU1LCAxNjYsIDApO1xcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCByZ2IoMjU1LCAxNjYsIDApO1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgd2lkdGg6IDQwJTtcXG59XFxuXFxuLnRleHRPbmUge1xcbiAgICBjb2xvciA6cmdiKDI1NSwgMTY2LCAwKTtcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYigyNTUsIDE2NiwgMCk7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICNkNmQzZDE7XFxufVxcblxcbi50ZXh0VHdvIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYigyNTUsIDE2NiwgMCk7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggcmdiKDI1NSwgMTY2LCAwKTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXG59XFxuXFxuLmZhZGUge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uaW1hZ2UtY29udGFpbmVyIHtcXG4gICAgei1pbmRleDogMTAwMjtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDUgLyA0OyBcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdyg0cHggMHB4IDNweCAjY2RhZDhmKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuaW1nIHtcXG4gICAgei1pbmRleDogMTAwMDtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDUgLyAzO1xcbn1cXG5cXG4uYnV0dG9uLW1vZGFsIHtcXG4gICAgZ3JpZC1hcmVhOiAzIC8gMyAvIDUgLyA2O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogMDtcXG4gICAgZ2FwOiAxdmg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogIDFmciAxZnIgMWZyO1xcbiAgICB0cmFuc2l0aW9uOiAxNTAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5idXR0b24tb25lLCAuYnV0dG9uLXR3bywgLmJ1dHRvbi10aHJlZSAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZDhkNWQwIDUwJSAsICNiZTgxNDIgMTAwJSk7XFxuICAgIHRyYW5zaXRpb246IDE1MDBtcyBlYXNlLWluLW91dDtcXG4gICAgei1pbmRleDogMTAwMTtcXG4gICAgXFxufVxcblxcblxcblxcbmJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTpibG9jaztcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIG1hcmdpbjogMTBweCA3cHg7XFxuICAgIHBhZGRpbmc6IDVweCA1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gICAgY29sb3I6ICMzODM3MzY7XFxuICAgIGJvcmRlcjogMnB4ICMzODM3MzYgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgb3V0bGluZTogMDtcXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246ICAgICAgICAgMC4wOHMgZWFzZS1pbjtcXG4gICAgLW8tdHJhbnNpdGlvbjogICAgICAwLjA4cyBlYXNlLWluO1xcbiAgICAtbXMtdHJhbnNpdGlvbjogICAgIDAuMDhzIGVhc2UtaW47XFxuICAgIC1tb3otdHJhbnNpdGlvbjogICAgMC4wOHMgZWFzZS1pbjtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjA4cyBlYXNlLWluO1xcbiAgfVxcbiAgXFxuICBidXR0b246aG92ZXIge1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIH1cXG4gIFxcbiAgYnV0dG9uOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQ6ICMzODM3MzY7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMTAwJTtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIHRyYW5zaXRpb246IHRvcCAwLjA5cyBlYXNlLWluO1xcbiAgfVxcbiAgXFxuICBidXR0b246aG92ZXI6YmVmb3JlIHtcXG4gICAgdG9wOiAwO1xcbiAgfVxcblxcbiAgLm1lbnVCdG4gLCAuY29udGFjdEJ0biB7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIFxcbiBcXG4ucmV2ZWFsaW5nIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuLmJ1dHRvbi10d28ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmU4MTQyO1xcbn1cXG5cXG4uYnV0dG9uLXRocmVlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQzMjMwNDtcXG59XFxuXFxuLmV4dGVuZGluZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZXh0T25lIHtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLmV4dFR3byB7XFxuICAgIHdpZHRoOiA1NSU7XFxufVxcblxcbi5leHRUaHJlZSB7XFxuICAgIHdpZHRoOiA2MCU7XFxufVxcblxcbi5pbWFnZS1jb250YWluZXIge1xcbiAgICBhbmltYXRpb246IGZhZGVJbiA3cztcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiA0LjVzO1xcbiAgICAtbW96LWFuaW1hdGlvbjogZmFkZUluIDQuNXM7XFxuICAgIC1vLWFuaW1hdGlvbjogZmFkZUluIDQuNXM7XFxuICAgIC1tcy1hbmltYXRpb246IGZhZGVJbiA0LjVzO1xcbiAgfVxcbiAgQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICAwJSB7b3BhY2l0eTowO31cXG4gICAgMTAwJSB7b3BhY2l0eToxO31cXG4gIH1cXG4gIFxcbiAgQC1tb3ota2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAgIDAlIHtvcGFjaXR5OjA7fVxcbiAgICAxMDAlIHtvcGFjaXR5OjE7fVxcbiAgfVxcbiAgXFxuICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcXG4gICAgMCUge29wYWNpdHk6MDt9XFxuICAgIDEwMCUge29wYWNpdHk6MTt9XFxuICB9XFxuICBcXG4gIEAtby1rZXlmcmFtZXMgZmFkZUluIHtcXG4gICAgMCUge29wYWNpdHk6MDt9XFxuICAgIDEwMCUge29wYWNpdHk6MTt9XFxuICB9XFxuICBcXG4gIEAtbXMta2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAgIDAlIHtvcGFjaXR5OjA7fVxcbiAgICAxMDAlIHtvcGFjaXR5OjE7fVxcbiAgfSBcXG5cXG4gIC8qIE1lbnUgcGFnZSBzdHlsaW5nICovXFxuXFxuLm1lbnVDb250ZW50IHtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTB2aCAxZnIgMWZyO1xcbiAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgICBnYXA6IDR2aDtcXG4gIH1cXG5cXG5oMSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTcsIDE3NywgNjYpO1xcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7XFxufVxcblxcblxcbi5tZW51SGVhZGVyLCAuY29udGFjdEhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTcsIDE3NywgNjYpO1xcbiAgICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gNSA7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXG4gIH1cXG5cXG4gIFxcbnN2Zzpub3QoI3dyaXR0ZW4gICkge1xcbiAgICAgIHdpZHRoOiAxMHZ3O1xcbiAgICAgIGhlaWdodDogMTB2dztcXG4gICAgICBwYWRkaW5nOiA1dmg7XFxuICAgICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1vdXQ7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwMHB4O1xcbiAgfVxcblxcblxcblxcbnN2Zzpub3QoI3dyaXR0ZW4pOmhvdmVyIHtcXG4gICAgICBhbmltYXRpb246IHNoYWtlIDAuNXMgZWFzZS1pbi1vdXQ7XFxuICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICAgICAgei1pbmRleDogMTAwMDtcXG4gICAgICBiYWNrZ3JvdW5kOiByZ2IoMTk3LCAxNzcsIDY2KTtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1MDBweDtcXG4gIH1cXG5cXG5cXG5cXG4gIEBrZXlmcmFtZXMgc2hha2Uge1xcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgMXB4KSByb3RhdGUoMGRlZykgc2NhbGUoMS4xKTsgfVxcbiAgICAxMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAtMnB4KSByb3RhdGUoLTFkZWcpIHNjYWxlKDEuMSk7IH1cXG4gICAgMjAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgMHB4KSByb3RhdGUoMWRlZykgc2NhbGUoMS4xKTsgfVxcbiAgICAzMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzcHgsIDJweCkgcm90YXRlKDBkZWcpIHNjYWxlKDEuMSk7IH1cXG4gICAgNDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAtMXB4KSByb3RhdGUoMWRlZykgc2NhbGUoMS4yKTsgfVxcbiAgICA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAycHgpIHJvdGF0ZSgtMWRlZykgc2NhbGUoMS4yKTsgfVxcbiAgICA2MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtM3B4LCAxcHgpIHJvdGF0ZSgwZGVnKSBzY2FsZSgxLjIpOyB9XFxuICAgIDcwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDNweCwgMXB4KSByb3RhdGUoLTFkZWcpIHNjYWxlKDEuMik7IH1cXG4gICAgODAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgLTFweCkgcm90YXRlKDFkZWcpIHNjYWxlKDEuMSk7IH1cXG4gICAgOTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAycHgpIHJvdGF0ZSgwZGVnKSBzY2FsZSgxLjEpOyB9XFxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIC0ycHgpIHJvdGF0ZSgtMWRlZykgc2NhbGUoMS4xKTsgfVxcbiAgfVxcblxcbi5kZWNvckJhbGxPbmUgLCAuZGVjb3JCYWxsVHdvLCAuZGVjb3JCYWxsVGhyZWUsIC5kZWNvckJhbGxGb3VyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDQwdmg7XFxuICAgIHdpZHRoOiA0MHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWJlY2NhcHVycGxlO1xcbiAgfVxcblxcbi5kZWNvckJhbGxPbmUge1xcbiAgICBib3R0b206IDAlO1xcbiAgICBsZWZ0OiAxMiU7XFxuICAgIHdpZHRoOiAzMjBweDtcXG4gICAgaGVpZ2h0OiAxNjBweDsgLyogYXMgdGhlIGhhbGYgb2YgdGhlIHdpZHRoICovXFxuICAgIGJhY2tncm91bmQ6dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTcwcHg7ICBcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE3MHB4OyBcXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkIHllbGxvdztcXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcXG59XFxuXFxuLmRlY29yQmFsbFR3byB7XFxuICAgIGJvdHRvbTogMCU7XFxuICAgIGxlZnQ6IDMyJTtcXG4gICAgd2lkdGg6IDMyMHB4O1xcbiAgICBoZWlnaHQ6IDE2MHB4OyAvKiBhcyB0aGUgaGFsZiBvZiB0aGUgd2lkdGggKi9cXG4gICAgYmFja2dyb3VuZDp1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE3MHB4OyAgXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNzBweDsgXFxuICAgIGJvcmRlcjogMTBweCBzb2xpZCB5ZWxsb3c7XFxuICAgIGJvcmRlci1ib3R0b206IDA7XFxufVxcblxcbi5kZWNvckJhbGxUaHJlZSB7XFxuICAgIGJvdHRvbTogMCU7XFxuICAgIGxlZnQ6IDUyJTtcXG4gICAgd2lkdGg6IDMyMHB4O1xcbiAgICBoZWlnaHQ6IDE2MHB4OyBcXG4gICAgYmFja2dyb3VuZDp1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE3MHB4OyAgXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNzBweDsgXFxuICAgIGJvcmRlcjogMTBweCBzb2xpZCB5ZWxsb3c7XFxuICAgIGJvcmRlci1ib3R0b206IDA7XFxufVxcblxcbi5kZWNvckJhbGxGb3VyIHtcXG4gICAgYm90dG9tOiAwJTtcXG4gICAgbGVmdDogNzIlO1xcbiAgICB3aWR0aDogMzIwcHg7XFxuICAgIGhlaWdodDogMTYwcHg7IFxcbiAgICBiYWNrZ3JvdW5kOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTcwcHg7ICBcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE3MHB4OyBcXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkIHllbGxvdztcXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcXG59XFxuXFxuLyogQ29udGFjdCBwYWdlIGxheW91dCAqL1xcblxcbi5jb250YWN0Q29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMHZoIDFmciAyMHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY29udGFjdEhlYWRlciAubWVudUJ0biwgLm1lbnVIZWFkZXIgLmNvbnRhY3RCdG4ge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsK0NBQStDO0lBQy9DLG1EQUFtRDtBQUN2RDs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixhQUFhOztBQUVqQjs7QUFFQTtJQUNJLGtCQUFrQjtJ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U0FBUztJQUNULFlBQVk7SUFDWixhQUFhO0lBQ2Isa0RBQXVDO0lBQ3ZDLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7O0FBRUEsd0JBQXdCOztBQUV4QjtJQUNJLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7IFxcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZjE2MGM7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcblxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0dncgMzB2dyAxZnIgMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjB2aCAyMi41dmggMjYuMjV2aCAyNi4yNXZoIDV2aDtcXG59XFxuXFxuLmxlZnQtc2lkZS1iYXIge1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gNSAvIDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxufVxcblxcbi5iYWxsVHdvIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUlO1xcbiAgICBsZWZ0OiAzMCU7XFxuICAgIHdpZHRoOiA1MHZoO1xcbiAgICBoZWlnaHQ6IDUwdmg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMDBweDtcXG4gICAgei1pbmRleDogMTAwMDtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnICwgd2hpdGUgNTAlLCByZ2IoMjU1LCAxNjYsIDApIDEwMCUpO1xcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCAycHggMTBweCByZ2IoMTk0LCAxNzUsIDkxKSk7XFxuICAgIHRyYW5zaXRpb246IDM1MDBtcyBlYXNlLWluLW91dDtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmxlZnQtbW9kYWwtb25lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBmMTYwYztcXG4gICAgd2lkdGg6IDF2dztcXG59XFxuXFxuLmxlZnQtbW9kYWwtdHdvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDNkMTtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDUgLyAyO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIHdpZHRoOiA2dmg7XFxuICAgIGhlaWdodDogMDtcXG4gICAgei1pbmRleDogMTAwMDtcXG4gICAgdHJhbnNpdGlvbjogMTUwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZHJvcHBpbmcge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kIDpsaW5lYXItZ3JhZGllbnQoICNjZTk0NDkgMjUlLCAjNDMyMzA0IDEwMCUpXFxufVxcblxcbi5oYW5kd3JpdHRlbiB7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAxcztcXG4gICAgZ3JpZC1jb2x1bW46IDIvNDtcXG4gICAgZ3JpZC1yb3c6IDEvMztcXG4gICAgei1pbmRleDogOTk5O1xcbn1cXG5cXG5cXG4uaGFuZHdyaXR0ZW4gLnN2ZyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAzMHZoO1xcbiAgICB3aWR0aDogMTAwdmg7XFxuICAgIHotaW5kZXg6IDk5OTtcXG4gICAgXFxufVxcbiN3cml0dGVuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUlO1xcbiAgICBsZWZ0OiAtNjAlO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgaGVpZ2h0OiAxMnZoO1xcbiAgICBsZWZ0OiAxMCU7XFxuICAgIHotaW5kZXg6IDEwMDA7ICAgXFxufVxcblxcbi5tYXNrIHtcXG4gICAgZmlsbDogbm9uZTtcXG4gICAgc3Ryb2tlOiB3aGl0ZTtcXG59XFxuXFxuXFxuLm1hc2sge1xcbiAgICBzdHJva2UtZGFzaGFycmF5OiAxMDAwO1xcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMTAwMDtcXG4gIH1cXG4gIFxcbiAgQGtleWZyYW1lcyBzdHJva2VPZmZzZXQge1xcbiAgICB0byB7XFxuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XFxuICAgIH1cXG4gIH1cXG4gIFxcblxcbiAgI01hc2stZ2VsYWNjaW8tR21haW4ge1xcbiAgICBhbmltYXRpb246IHN0cm9rZU9mZnNldCAxcyBsaW5lYXIgZm9yd2FyZHM7XFxuICB9XFxuXFxuICAjTWFzay1nZWxhY2Npby1Hc3ViIHtcXG4gICAgYW5pbWF0aW9uOiBzdHJva2VPZmZzZXQgMnMgbGluZWFyIGZvcndhcmRzIDAuNXM7XFxuICB9XFxuXFxuICAjTWFzay1nZWxhY2Npby1lIHtcXG4gICAgYW5pbWF0aW9uOiBzdHJva2VPZmZzZXQgMXMgbGluZWFyIGZvcndhcmRzIDFzOyBcXG4gIH1cXG5cXG4gICNNYXNrLWdlbGFjY2lvLWwge1xcbiAgICBhbmltYXRpb246IHN0cm9rZU9mZnNldCAxcyBsaW5lYXIgZm9yd2FyZHMgMS41czsgXFxuICB9XFxuXFxuICAjTWFzay1nZWxhY2Npby1hIHtcXG4gICAgYW5pbWF0aW9uOiBzdHJva2VPZmZzZXQgMXMgbGluZWFyIGZvcndhcmRzIDJzOyBcXG4gIH1cXG5cXG4gICNNYXNrLWdlbGFjY2lvLWMge1xcbiAgICBhbmltYXRpb246IHN0cm9rZU9mZnNldCAxcyBsaW5lYXIgZm9yd2FyZHMgMi41czsgXFxuICB9XFxuXFxuICAjTWFzay1nZWxhY2Npby1jYyB7XFxuICAgIGFuaW1hdGlvbjogc3Ryb2tlT2Zmc2V0IDFzIGxpbmVhciBmb3J3YXJkcyAzczsgXFxuICB9XFxuXFxuICAjTWFzay1nZWxhY2Npby1pbWFpbiB7XFxuICAgIGFuaW1hdGlvbjogc3Ryb2tlT2Zmc2V0IDFzIGxpbmVhciBmb3J3YXJkcyAzLjVzOyBcXG4gIH1cXG5cXG5cXG4gICNNYXNrLWdlbGFjY2lvLW8ge1xcbiAgICBhbmltYXRpb246IHN0cm9rZU9mZnNldCAxcyBsaW5lYXIgZm9yd2FyZHMgNC4wczsgXFxuICB9XFxuXFxuICAjTWFzay1nZWxhY2Npby1pc3ViIHtcXG4gICAgYW5pbWF0aW9uOiBzdHJva2VPZmZzZXQgMnMgbGluZWFyIGZvcndhcmRzIDQuN3M7IFxcbiAgfVxcblxcblxcblxcbi50ZXh0LWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMTB2dztcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHZ3O1xcbiAgICBncmlkLWFyZWE6IDIgLyA0IC8gMyAvIDY7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMTAwNDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiAzNTAwbXM7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZyAscmdiKDI1NSwgMTY2LCAwKSA1MCUgLCB3aGl0ZSAxMDAlKTtcXG59XFxuXFxuLnRleHRPbmUgLCAudGV4dFR3byB7XFxuXFxuICAgIHBhZGRpbmc6IDF2aCAxdmggMHZoIDF2aDtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCByZ2IoMjU1LCAxNjYsIDApO1xcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCByZ2IoMjU1LCAxNjYsIDApO1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgd2lkdGg6IDQwJTtcXG59XFxuXFxuLnRleHRPbmUge1xcbiAgICBjb2xvciA6cmdiKDI1NSwgMTY2LCAwKTtcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYigyNTUsIDE2NiwgMCk7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICNkNmQzZDE7XFxufVxcblxcbi50ZXh0VHdvIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYigyNTUsIDE2NiwgMCk7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggcmdiKDI1NSwgMTY2LCAwKTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXG59XFxuXFxuLmZhZGUge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uaW1hZ2UtY29udGFpbmVyIHtcXG4gICAgei1pbmRleDogMTAwMjtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDUgLyA0OyBcXG4gICAgYmFja2dyb3VuZDogdXJsKGljZS1jcmVhbS1zaG9wLmF2aWYpO1xcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDRweCAwcHggM3B4ICNjZGFkOGYpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG5pbWcge1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gNSAvIDM7XFxufVxcblxcbi5idXR0b24tbW9kYWwge1xcbiAgICBncmlkLWFyZWE6IDMgLyAzIC8gNSAvIDY7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBnYXA6IDF2aDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAgMWZyIDFmciAxZnI7XFxuICAgIHRyYW5zaXRpb246IDE1MDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmJ1dHRvbi1vbmUsIC5idXR0b24tdHdvLCAuYnV0dG9uLXRocmVlICB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xcbiAgICB3aWR0aDogMDtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNkOGQ1ZDAgNTAlICwgI2JlODE0MiAxMDAlKTtcXG4gICAgdHJhbnNpdGlvbjogMTUwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICB6LWluZGV4OiAxMDAxO1xcbiAgICBcXG59XFxuXFxuXFxuXFxuYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OmJsb2NrO1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgbWFyZ2luOiAxMHB4IDdweDtcXG4gICAgcGFkZGluZzogNXB4IDVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgICBjb2xvcjogIzM4MzczNjtcXG4gICAgYm9yZGVyOiAycHggIzM4MzczNiBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBvdXRsaW5lOiAwO1xcbiAgICBvdmVyZmxvdzpoaWRkZW47XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogICAgICAgICAwLjA4cyBlYXNlLWluO1xcbiAgICAtby10cmFuc2l0aW9uOiAgICAgIDAuMDhzIGVhc2UtaW47XFxuICAgIC1tcy10cmFuc2l0aW9uOiAgICAgMC4wOHMgZWFzZS1pbjtcXG4gICAgLW1vei10cmFuc2l0aW9uOiAgICAwLjA4cyBlYXNlLWluO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuMDhzIGVhc2UtaW47XFxuICB9XFxuICBcXG4gIGJ1dHRvbjpob3ZlciB7XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgfVxcbiAgXFxuICBidXR0b246YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZDogIzM4MzczNjtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAxMDAlO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgdHJhbnNpdGlvbjogdG9wIDAuMDlzIGVhc2UtaW47XFxuICB9XFxuICBcXG4gIGJ1dHRvbjpob3ZlcjpiZWZvcmUge1xcbiAgICB0b3A6IDA7XFxuICB9XFxuXFxuICAubWVudUJ0biAsIC5jb250YWN0QnRuIHtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgXFxuIFxcbi5yZXZlYWxpbmcge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4uYnV0dG9uLXR3byB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZTgxNDI7XFxufVxcblxcbi5idXR0b24tdGhyZWUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDMyMzA0O1xcbn1cXG5cXG4uZXh0ZW5kaW5nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5leHRPbmUge1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uZXh0VHdvIHtcXG4gICAgd2lkdGg6IDU1JTtcXG59XFxuXFxuLmV4dFRocmVlIHtcXG4gICAgd2lkdGg6IDYwJTtcXG59XFxuXFxuLmltYWdlLWNvbnRhaW5lciB7XFxuICAgIGFuaW1hdGlvbjogZmFkZUluIDdzO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDQuNXM7XFxuICAgIC1tb3otYW5pbWF0aW9uOiBmYWRlSW4gNC41cztcXG4gICAgLW8tYW5pbWF0aW9uOiBmYWRlSW4gNC41cztcXG4gICAgLW1zLWFuaW1hdGlvbjogZmFkZUluIDQuNXM7XFxuICB9XFxuICBAa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAgIDAlIHtvcGFjaXR5OjA7fVxcbiAgICAxMDAlIHtvcGFjaXR5OjE7fVxcbiAgfVxcbiAgXFxuICBALW1vei1rZXlmcmFtZXMgZmFkZUluIHtcXG4gICAgMCUge29wYWNpdHk6MDt9XFxuICAgIDEwMCUge29wYWNpdHk6MTt9XFxuICB9XFxuICBcXG4gIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICAwJSB7b3BhY2l0eTowO31cXG4gICAgMTAwJSB7b3BhY2l0eToxO31cXG4gIH1cXG4gIFxcbiAgQC1vLWtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICAwJSB7b3BhY2l0eTowO31cXG4gICAgMTAwJSB7b3BhY2l0eToxO31cXG4gIH1cXG4gIFxcbiAgQC1tcy1rZXlmcmFtZXMgZmFkZUluIHtcXG4gICAgMCUge29wYWNpdHk6MDt9XFxuICAgIDEwMCUge29wYWNpdHk6MTt9XFxuICB9IFxcblxcbiAgLyogTWVudSBwYWdlIHN0eWxpbmcgKi9cXG5cXG4ubWVudUNvbnRlbnQge1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMHZoIDFmciAxZnI7XFxuICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICAgIGdhcDogNHZoO1xcbiAgfVxcblxcbmgxIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NywgMTc3LCA2Nik7XFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDJweCBibGFjaztcXG59XFxuXFxuXFxuLm1lbnVIZWFkZXIsIC5jb250YWN0SGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NywgMTc3LCA2Nik7XFxuICAgICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyA1IDtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xcbiAgfVxcblxcbiAgXFxuc3ZnOm5vdCgjd3JpdHRlbiAgKSB7XFxuICAgICAgd2lkdGg6IDEwdnc7XFxuICAgICAgaGVpZ2h0OiAxMHZ3O1xcbiAgICAgIHBhZGRpbmc6IDV2aDtcXG4gICAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLW91dDtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNTAwcHg7XFxuICB9XFxuXFxuXFxuXFxuc3ZnOm5vdCgjd3JpdHRlbik6aG92ZXIge1xcbiAgICAgIGFuaW1hdGlvbjogc2hha2UgMC41cyBlYXNlLWluLW91dDtcXG4gICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gICAgICB6LWluZGV4OiAxMDAwO1xcbiAgICAgIGJhY2tncm91bmQ6IHJnYigxOTcsIDE3NywgNjYpO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwMHB4O1xcbiAgfVxcblxcblxcblxcbiAgQGtleWZyYW1lcyBzaGFrZSB7XFxuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAxcHgpIHJvdGF0ZSgwZGVnKSBzY2FsZSgxLjEpOyB9XFxuICAgIDEwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIC0ycHgpIHJvdGF0ZSgtMWRlZykgc2NhbGUoMS4xKTsgfVxcbiAgICAyMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtM3B4LCAwcHgpIHJvdGF0ZSgxZGVnKSBzY2FsZSgxLjEpOyB9XFxuICAgIDMwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDNweCwgMnB4KSByb3RhdGUoMGRlZykgc2NhbGUoMS4xKTsgfVxcbiAgICA0MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIC0xcHgpIHJvdGF0ZSgxZGVnKSBzY2FsZSgxLjIpOyB9XFxuICAgIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIDJweCkgcm90YXRlKC0xZGVnKSBzY2FsZSgxLjIpOyB9XFxuICAgIDYwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIDFweCkgcm90YXRlKDBkZWcpIHNjYWxlKDEuMik7IH1cXG4gICAgNzAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoM3B4LCAxcHgpIHJvdGF0ZSgtMWRlZykgc2NhbGUoMS4yKTsgfVxcbiAgICA4MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAtMXB4KSByb3RhdGUoMWRlZykgc2NhbGUoMS4xKTsgfVxcbiAgICA5MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIDJweCkgcm90YXRlKDBkZWcpIHNjYWxlKDEuMSk7IH1cXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgLTJweCkgcm90YXRlKC0xZGVnKSBzY2FsZSgxLjEpOyB9XFxuICB9XFxuXFxuLmRlY29yQmFsbE9uZSAsIC5kZWNvckJhbGxUd28sIC5kZWNvckJhbGxUaHJlZSwgLmRlY29yQmFsbEZvdXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogNDB2aDtcXG4gICAgd2lkdGg6IDQwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlYmVjY2FwdXJwbGU7XFxuICB9XFxuXFxuLmRlY29yQmFsbE9uZSB7XFxuICAgIGJvdHRvbTogMCU7XFxuICAgIGxlZnQ6IDEyJTtcXG4gICAgd2lkdGg6IDMyMHB4O1xcbiAgICBoZWlnaHQ6IDE2MHB4OyAvKiBhcyB0aGUgaGFsZiBvZiB0aGUgd2lkdGggKi9cXG4gICAgYmFja2dyb3VuZDp1cmwoLi9hc3NldHMvZGVjb3ItZmlyc3QuanBnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTcwcHg7ICBcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE3MHB4OyBcXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkIHllbGxvdztcXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcXG59XFxuXFxuLmRlY29yQmFsbFR3byB7XFxuICAgIGJvdHRvbTogMCU7XFxuICAgIGxlZnQ6IDMyJTtcXG4gICAgd2lkdGg6IDMyMHB4O1xcbiAgICBoZWlnaHQ6IDE2MHB4OyAvKiBhcyB0aGUgaGFsZiBvZiB0aGUgd2lkdGggKi9cXG4gICAgYmFja2dyb3VuZDp1cmwoLi9hc3NldHMvZGVjb3Itc2Vjb25kLmpwZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTcwcHg7ICBcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE3MHB4OyBcXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkIHllbGxvdztcXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcXG59XFxuXFxuLmRlY29yQmFsbFRocmVlIHtcXG4gICAgYm90dG9tOiAwJTtcXG4gICAgbGVmdDogNTIlO1xcbiAgICB3aWR0aDogMzIwcHg7XFxuICAgIGhlaWdodDogMTYwcHg7IFxcbiAgICBiYWNrZ3JvdW5kOnVybCguL2Fzc2V0cy9kZWNvci10aHJlZS5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE3MHB4OyAgXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNzBweDsgXFxuICAgIGJvcmRlcjogMTBweCBzb2xpZCB5ZWxsb3c7XFxuICAgIGJvcmRlci1ib3R0b206IDA7XFxufVxcblxcbi5kZWNvckJhbGxGb3VyIHtcXG4gICAgYm90dG9tOiAwJTtcXG4gICAgbGVmdDogNzIlO1xcbiAgICB3aWR0aDogMzIwcHg7XFxuICAgIGhlaWdodDogMTYwcHg7IFxcbiAgICBiYWNrZ3JvdW5kOnVybCguL2Fzc2V0cy9kZWNvci1mb3VyLmpwZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTcwcHg7ICBcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE3MHB4OyBcXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkIHllbGxvdztcXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcXG59XFxuXFxuLyogQ29udGFjdCBwYWdlIGxheW91dCAqL1xcblxcbi5jb250YWN0Q29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMHZoIDFmciAyMHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY29udGFjdEhlYWRlciAubWVudUJ0biwgLm1lbnVIZWFkZXIgLmNvbnRhY3RCdG4ge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmVyc2lvbj1cXFwiMS4xXFxcIiBpZD1cXFwiTGF5ZXJfMVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgeD1cXFwiMHB4XFxcIiB5PVxcXCIwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAzNDcuNTI5IDM0Ny41MjlcXFwiIHN0eWxlPVxcXCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM0Ny41MjkgMzQ3LjUyOTtcXFwiIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiPjxnIGlkPVxcXCJYTUxJRF8xNDE2X1xcXCI+PHBhdGggaWQ9XFxcIlhNTElEXzU4NV9cXFwiIHN0eWxlPVxcXCJmaWxsOiNGRkEyNTA7XFxcIiBkPVxcXCJNMTczLjc2NCwzNDcuNTI5TDE3My43NjQsMzQ3LjUyOWMtMTMuNzM4LDAtMjQuOTc4LTExLjI0LTI0Ljk3OC0yNC45Nzh2LTk1LjkwMiBjMC0xMy43MzgsMTEuMjQtMjQuOTc4LDI0Ljk3OC0yNC45NzhsMCwwYzEzLjczOCwwLDI0Ljk3OCwxMS4yNCwyNC45NzgsMjQuOTc4djk1LjkwMiBDMTk4Ljc0MywzMzYuMjg4LDE4Ny41MDIsMzQ3LjUyOSwxNzMuNzY0LDM0Ny41Mjl6XFxcIj48L3BhdGg+PHBhdGggaWQ9XFxcIlhNTElEXzU4NF9cXFwiIHN0eWxlPVxcXCJmaWxsOiNGRjU5NTk7XFxcIiBkPVxcXCJNMjE5LjAxNCwyNTkuMzQ3aC05MC41Yy0yMC44NTEsMC0zNy43NTQtMTYuOTAzLTM3Ljc1NC0zNy43NTRWODMuMDA0IEM5MC43NiwzNy4xNjIsMTI3LjkyMiwwLDE3My43NjQsMGwwLDBjNDUuODQyLDAsODMuMDA0LDM3LjE2Miw4My4wMDQsODMuMDA0djEzOC41ODkgQzI1Ni43NjksMjQyLjQ0NCwyMzkuODY2LDI1OS4zNDcsMjE5LjAxNCwyNTkuMzQ3elxcXCI+PC9wYXRoPjxwYXRoIGlkPVxcXCJYTUxJRF8xNDE3X1xcXCIgc3R5bGU9XFxcImZpbGw6I0ZGRkVCOTtcXFwiIGQ9XFxcIk0yNTYuNzY5LDEyNi4zNjlWODMuMDA0QzI1Ni43NjksMzcuMTYyLDIxOS42MDYsMCwxNzMuNzY0LDBsMCwwIEMxMjcuOTIyLDAsOTAuNzYsMzcuMTYyLDkwLjc2LDgzLjAwNHY0My4zNjVIMjU2Ljc2OXpcXFwiPjwvcGF0aD48ZyBpZD1cXFwiWE1MSURfMTQxOF9cXFwiPjxwYXRoIGlkPVxcXCJYTUxJRF8xNDE5X1xcXCIgc3R5bGU9XFxcImZpbGw6I0ZGRkVCOTtcXFwiIGQ9XFxcIk0xNjUuMjI1LDEyNC4wNDZjLTAuMTA1LDAuODA5LTAuMTY1LDEuNjMxLTAuMTY1LDIuNDY3djU1LjkxNCBjMCwxMC41ODQsOC42NTksMTkuMjQzLDE5LjI0MywxOS4yNDNsMCwwYzEwLjU4NCwwLDE5LjI0My04LjY2LDE5LjI0My0xOS4yNDN2LTU3LjkxNGMwLTAuODM2LTAuMDYsMC4zNDItMC4xNjUtMC40NjdIMTY1LjIyNXpcXFwiPjwvcGF0aD48cGF0aCBpZD1cXFwiWE1MSURfMTQyMF9cXFwiIHN0eWxlPVxcXCJmaWxsOiNGRkZFQjk7XFxcIiBkPVxcXCJNMTI3LjkxLDEyNC4wNDZ2MjkuMTM4YzAsMTAuNTg0LDguNjYsMTkuMjQzLDE5LjI0MywxOS4yNDNsMCwwIGMxMC41ODQsMCwxOS4yNDMtOC42NTksMTkuMjQzLTE5LjI0M3YtMjkuMTM4QzE2Ni4zOTYsMTI0LjA0NiwxMjcuOTEsMTI0LjA0NiwxMjcuOTEsMTI0LjA0NnpcXFwiPjwvcGF0aD48cGF0aCBpZD1cXFwiWE1MSURfMTQyMV9cXFwiIHN0eWxlPVxcXCJmaWxsOiNGRkZFQjk7XFxcIiBkPVxcXCJNOTAuNzYsMTI0LjA0NnY1MC4zMDFjMCwxMC41ODQsOC42NiwxOS4yNDMsMTkuMjQzLDE5LjI0MyBzMTkuMjQzLTguNjU5LDE5LjI0My0xOS4yNDN2LTUwLjMwMUMxMjkuMjQ2LDEyNC4wNDYsOTAuNzYsMTI0LjA0Niw5MC43NiwxMjQuMDQ2elxcXCI+PC9wYXRoPjwvZz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlkPVxcXCJDYXBhXzFcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHg9XFxcIjBweFxcXCIgeT1cXFwiMHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgNTkgNTlcXFwiIHN0eWxlPVxcXCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU5IDU5O1xcXCIgeG1sOnNwYWNlPVxcXCJwcmVzZXJ2ZVxcXCI+PGc+PGc+PHBhdGggc3R5bGU9XFxcImZpbGw6I0ZCRDQ5MDtcXFwiIGQ9XFxcIk0yNS41LDQydjE0YzAsMS4xLDAuOSwyLDIsMmg0YzEuMSwwLDItMC45LDItMlY0MkgyNS41elxcXCI+PC9wYXRoPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNGQkQ0OTA7XFxcIiBkPVxcXCJNMzEuNSw1OWgtNGMtMS42NTQsMC0zLTEuMzQ2LTMtM1Y0MWgxMHYxNUMzNC41LDU3LjY1NCwzMy4xNTQsNTksMzEuNSw1OXogTTI2LjUsNDN2MTMgYzAsMC41NTIsMC40NDgsMSwxLDFoNGMwLjU1MiwwLDEtMC40NDgsMS0xVjQzSDI2LjV6XFxcIj48L3BhdGg+PC9nPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNFRUFGNEI7XFxcIiBkPVxcXCJNMzMuNTAxLDU3LjVjLTAuMDg2LDAtMC4xNzQtMC4wMTEtMC4yNjEtMC4wMzRjLTEuMjY2LTAuMzQxLTYuMjI3LTIuMzc2LTUuNTE0LTUuNDI5IGMwLjE4My0wLjc4NS0xLjQ1Ny0yLjA1Ny0yLjY2LTIuNjM2Yy0wLjQ5OC0wLjI0LTAuNzA3LTAuODM3LTAuNDY4LTEuMzM1YzAuMjQxLTAuNDk2LDAuODM5LTAuNzA2LDEuMzM1LTAuNDY4IGMwLjQ0OSwwLjIxNyw0LjM3MSwyLjE5LDMuNzQsNC44OTRjLTAuMjI4LDAuOTc1LDIuMzg2LDIuNTg1LDQuMDg2LDMuMDQyYzAuNTMzLDAuMTQ0LDAuODUsMC42OTIsMC43MDYsMS4yMjYgQzM0LjM0Niw1Ny4yMDYsMzMuOTQxLDU3LjUsMzMuNTAxLDU3LjV6XFxcIj48L3BhdGg+PHBhdGggc3R5bGU9XFxcImZpbGw6I0VFQUY0QjtcXFwiIGQ9XFxcIk0zMy41LDQ5Yy0yLjUyMywwLTQuNS0xLjUzNy00LjUtMy41czEuOTc3LTMuNSw0LjUtMy41YzAuNTUzLDAsMSwwLjQ0NywxLDFzLTAuNDQ3LDEtMSwxIGMtMS40NzQsMC0yLjUsMC43OS0yLjUsMS41czEuMDI2LDEuNSwyLjUsMS41YzAuNTUzLDAsMSwwLjQ0NywxLDFTMzQuMDUzLDQ5LDMzLjUsNDl6XFxcIj48L3BhdGg+PHBhdGggc3R5bGU9XFxcImZpbGw6I0Y5RDcwQjtcXFwiIGQ9XFxcIk0zOS41LDQyaC0yMGw1LTM4YzAtMi4yLDEuOC00LDQtNGgyYzIuMiwwLDQsMS44LDQsNEwzOS41LDQyelxcXCI+PC9wYXRoPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNGOUVBODA7XFxcIiBkPVxcXCJNMzIuMDAzLDIyLjAzOGMtMS4zNzYsMC0yLjQ5Ni0xLjEyLTIuNDk2LTIuNDk2di0yLjY5NGMwLTAuNTUzLDAuNDQ3LTEsMS0xczEsMC40NDcsMSwxdjIuNjk0IGMwLDAuMjY5LDAuMjI4LDAuNDk2LDAuNDk2LDAuNDk2YzAuMjcsMCwwLjQ5Ny0wLjIyOCwwLjQ5Ny0wLjQ5NnYtMi42OTRjMC0wLjU1MywwLjQ0Ny0xLDEtMXMxLDAuNDQ3LDEsMXYyLjY5NCBDMzQuNSwyMC45MTgsMzMuMzgsMjIuMDM4LDMyLjAwMywyMi4wMzh6XFxcIj48L3BhdGg+PHBhdGggc3R5bGU9XFxcImZpbGw6I0Y5RUE4MDtcXFwiIGQ9XFxcIk0yNi44MDUsMzAuMDM4Yy0xLjM3NywwLTIuNDk3LTEuMTItMi40OTctMi40OTZ2LTEuNDk3YzAtMC41NTMsMC40NDctMSwxLTFzMSwwLjQ0NywxLDF2MS40OTcgYzAsMC4yNjksMC4yMjgsMC40OTYsMC40OTcsMC40OTZjMC4yNjksMCwwLjQ5Ni0wLjIyOCwwLjQ5Ni0wLjQ5NnYtMS40OTdjMC0wLjU1MywwLjQ0Ny0xLDEtMXMxLDAuNDQ3LDEsMXYxLjQ5NyBDMjkuMzAxLDI4LjkxOCwyOC4xODEsMzAuMDM4LDI2LjgwNSwzMC4wMzh6XFxcIj48L3BhdGg+PHBhdGggc3R5bGU9XFxcImZpbGw6I0Y5RUE4MDtcXFwiIGQ9XFxcIk0zMi45OTcsMzcuMDM4Yy0xLjM3NywwLTIuNDk3LTEuMTItMi40OTctMi40OTZ2LTEuNDk3YzAtMC41NTMsMC40NDctMSwxLTFzMSwwLjQ0NywxLDF2MS40OTcgYzAsMC4yNjksMC4yMjgsMC40OTYsMC40OTcsMC40OTZjMC4yNjksMCwwLjQ5Ni0wLjIyOCwwLjQ5Ni0wLjQ5NnYtMS40OTdjMC0wLjU1MywwLjQ0Ny0xLDEtMXMxLDAuNDQ3LDEsMXYxLjQ5NyBDMzUuNDkzLDM1LjkxOCwzNC4zNzMsMzcuMDM4LDMyLjk5NywzNy4wMzh6XFxcIj48L3BhdGg+PHBhdGggc3R5bGU9XFxcImZpbGw6I0Y5RUE4MDtcXFwiIGQ9XFxcIk0yNy45OTcsMTEuOTkzYy0xLjM3NywwLTIuNDk3LTEuMTItMi40OTctMi40OTZWOGMwLTAuNTUzLDAuNDQ3LTEsMS0xczEsMC40NDcsMSwxdjEuNDk3IGMwLDAuMjY5LDAuMjI4LDAuNDk2LDAuNDk3LDAuNDk2YzAuMjY5LDAsMC40OTYtMC4yMjgsMC40OTYtMC40OTZWOGMwLTAuNTUzLDAuNDQ3LTEsMS0xczEsMC40NDcsMSwxdjEuNDk3IEMzMC40OTMsMTAuODczLDI5LjM3MywxMS45OTMsMjcuOTk3LDExLjk5M3pcXFwiPjwvcGF0aD48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlkPVxcXCJMYXllcl8xXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB4PVxcXCIwcHhcXFwiIHk9XFxcIjBweFxcXCIgdmlld0JveD1cXFwiMCAwIDI4OS45NCAyODkuOTRcXFwiIHN0eWxlPVxcXCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI4OS45NCAyODkuOTQ7XFxcIiB4bWw6c3BhY2U9XFxcInByZXNlcnZlXFxcIj48Zz48cGF0aCBzdHlsZT1cXFwiZmlsbDojQ0I0RTQ0O1xcXCIgZD1cXFwiTTE0NC45NywwYzMwLjAyNywwLDU0LjM2NCwyNC4zNDYsNTQuMzY0LDU0LjM2NGMwLDMwLjAyNy0yNC4zMzcsNTQuMzY0LTU0LjM2NCw1NC4zNjQgYy0zMC4wMTgsMC01NC4zNjQtMjQuMzM3LTU0LjM2NC01NC4zNjRDOTAuNjA2LDI0LjM0NiwxMTQuOTUyLDAsMTQ0Ljk3LDB6XFxcIj48L3BhdGg+PHBhdGggc3R5bGU9XFxcImZpbGw6I0U1Njg1RTtcXFwiIGQ9XFxcIk0xMDQuMTk3LDI3LjE4MmMyNy41MjYsMCw0OS44MzMsMjIuMzE2LDQ5LjgzMyw0OS44MzNjMCwyNy41MjYtMjIuMzA3LDQ5LjgzMy00OS44MzMsNDkuODMzIHMtNDkuODMzLTIyLjMwNy00OS44MzMtNDkuODMzQzU0LjM2NCw0OS40OTgsNzYuNjcxLDI3LjE4MiwxMDQuMTk3LDI3LjE4MnpcXFwiPjwvcGF0aD48cGF0aCBzdHlsZT1cXFwiZmlsbDojRTk4MTc5O1xcXCIgZD1cXFwiTTE4NS43NDIsMjcuMTgyYzI3LjUxNywwLDQ5LjgzMywyMi4zMTYsNDkuODMzLDQ5LjgzM2MwLDI3LjUyNi0yMi4zMTYsNDkuODMzLTQ5LjgzMyw0OS44MzMgYy0yNy41MzUsMC00OS44MzMtMjIuMzA3LTQ5LjgzMy00OS44MzNDMTM1LjkwOSw0OS40OTgsMTU4LjIwNywyNy4xODIsMTg1Ljc0MiwyNy4xODJ6XFxcIj48L3BhdGg+PHBhdGggc3R5bGU9XFxcImZpbGw6I0VGQzc1RTtcXFwiIGQ9XFxcIk01NC4zNjQsODEuMjY1djQ1LjU4NGMwLDEwLjAwMyw4LjExOCwxOC4xMjEsMTguMTIxLDE4LjEyMWgxOC4xMjFsNDUuMzAzLDE0NC45N2gxOC4xMjEgbDQ1LjMwMy0xNDQuOTdoMTguMTIxYzEwLjAwMywwLDE4LjEyMS04LjExOCwxOC4xMjEtMTguMTIxVjgxLjI2NUg1NC4zNjR6XFxcIj48L3BhdGg+PHBhdGggc3R5bGU9XFxcImZpbGw6I0Q3QjM1NDtcXFwiIGQ9XFxcIk01NC4zNjQsOTkuNjY3aDE4MS4yMTJ2MjcuMTgySDU0LjM2NFY5OS42Njd6XFxcIj48L3BhdGg+PHBvbHlnb24gc3R5bGU9XFxcImZpbGw6I0Q3QjM1NDtcXFwiIHBvaW50cz1cXFwiMTE2LjQ5MiwyMjcuODExIDE5OS4zMzMsMTQ0Ljk3IDkwLjYwNiwxNDQuOTcgXFxcIj48L3BvbHlnb24+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmVyc2lvbj1cXFwiMS4xXFxcIiBpZD1cXFwiTGF5ZXJfMVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgeD1cXFwiMHB4XFxcIiB5PVxcXCIwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCA1MTIgNTEyXFxcIiBzdHlsZT1cXFwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyO1xcXCIgeG1sOnNwYWNlPVxcXCJwcmVzZXJ2ZVxcXCI+PHBhdGggc3R5bGU9XFxcImZpbGw6I0QxOEI1QztcXFwiIGQ9XFxcIk0yNTYsMzAxLjQwMkwyNTYsMzAxLjQwMmMxMC41NzMsMCwxOS4yMiw4LjY1LDE5LjIyLDE5LjIxOHYxNzIuMTYzIGMwLDEwLjU3LTguNjQ3LDE5LjIxOC0xOS4yMiwxOS4yMThsMCwwYy0xMC41NzMsMC0xOS4yMi04LjY0Ny0xOS4yMi0xOS4yMThWMzIwLjYyQzIzNi43OCwzMTAuMDQ5LDI0NS40MjcsMzAxLjQwMiwyNTYsMzAxLjQwMnpcXFwiPjwvcGF0aD48cGF0aCBzdHlsZT1cXFwiZmlsbDojRkZDMjczO1xcXCIgZD1cXFwiTTI1NiwwTDI1NiwwYzQ3Ljg3NSwwLDg3LjA0NywzOS4xNyw4Ny4wNDcsODcuMDQ0djI4NC41MDRjMCwyMS4xMjUtMTcuMjg0LDM4LjQwNy0zOC40MDksMzguNDA3IEgyMDcuMzZjLTIxLjEyMiwwLTM4LjQwNy0xNy4yODItMzguNDA3LTM4LjQwN1Y4Ny4wNDRDMTY4Ljk1NiwzOS4xNywyMDguMTIzLDAsMjU2LDB6XFxcIj48L3BhdGg+PHBhdGggc3R5bGU9XFxcImZpbGw6I0ZGRDhBNjtcXFwiIGQ9XFxcIk0yMjEuOTE2LDY3LjEyMUwyMjEuOTE2LDY3LjEyMWM4Ljc4MiwwLDE1Ljk2NCw3LjE4NSwxNS45NjQsMTUuOTY2djI3Ni43MTcgYzAsOC43ODEtNy4xODIsMTUuOTY2LTE1Ljk2NCwxNS45NjZsMCwwYy04Ljc4MSwwLTE1Ljk2NC03LjE4NS0xNS45NjQtMTUuOTY2VjgzLjA4OCBDMjA1Ljk1LDc0LjMwNiwyMTMuMTM0LDY3LjEyMSwyMjEuOTE2LDY3LjEyMXpcXFwiPjwvcGF0aD48cGF0aCBzdHlsZT1cXFwiZmlsbDojRkZEOEE2O1xcXCIgZD1cXFwiTTI5MC4wODIsNjcuMTIxTDI5MC4wODIsNjcuMTIxYzguNzgxLDAsMTUuOTY0LDcuMTg1LDE1Ljk2NCwxNS45NjZ2Mjc2LjcxNyBjMCw4Ljc4MS03LjE4MiwxNS45NjYtMTUuOTY0LDE1Ljk2NmwwLDBjLTguNzgxLDAtMTUuOTY0LTcuMTg1LTE1Ljk2NC0xNS45NjZWODMuMDg4QzI3NC4xMTUsNzQuMzA2LDI4MS4zLDY3LjEyMSwyOTAuMDgyLDY3LjEyMSB6XFxcIj48L3BhdGg+PHBhdGggc3R5bGU9XFxcImZpbGw6I0ZGRDhBNjtcXFwiIGQ9XFxcIk0xODMuMDA5LDU4LjEzN2MzLjc3My0xMy45NDgsMjAuNjI4LTMyLjM3OSwzNi43MzYtMzkuOTExYzE0Ljk0NS02Ljk4NywxOC4zNjUsNS4zMDQsOC4wMTMsMTAuMDkyIGMtMTMuNDMzLDYuMjExLTI3LjYyOCwyMS4xNDYtMzMuMDc5LDM0LjQyMUMxOTAuNTI4LDcyLjg0OSwxODAuMDc2LDY4Ljk5NSwxODMuMDA5LDU4LjEzN3pcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZlcnNpb249XFxcIjEuMVxcXCIgaWQ9XFxcIkxheWVyXzFcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHg9XFxcIjBweFxcXCIgeT1cXFwiMHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgNTEyIDUxMlxcXCIgc3R5bGU9XFxcImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjtcXFwiIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiPjxwb2x5Z29uIHN0eWxlPVxcXCJmaWxsOiNFMDlENzA7XFxcIiBwb2ludHM9XFxcIjM0MS41MTUsMjA2LjQ5OCAyNjYuMzY1LDUxMiAyNDUuNjMzLDUxMiAxNzAuNDg1LDIwNi40OTggXFxcIj48L3BvbHlnb24+PHBhdGggc3R5bGU9XFxcImZpbGw6I0QxOEI1QztcXFwiIGQ9XFxcIk0zNDAuMTI3LDIxMi4xMzhsLTEuNTI5LDYuMjA5bC0yMi4xODUtMTEuODQ4aDEzLjE1MkwzNDAuMTI3LDIxMi4xMzhMMzQwLjEyNywyMTIuMTM4eiBNMzM1LjU4NSwyMzAuNTk1bC00NS4xMTQtMjQuMDk3aC0xMy4xNTJsNTYuNzQsMzAuMzA1TDMzNS41ODUsMjMwLjU5NUwzMzUuNTg1LDIzMC41OTV6IE0zMzEuMDQ1LDI0OS4wNTJsLTc5LjY2Ni00Mi41NTRoLTEzLjE1NCBsOTEuMjk0LDQ4Ljc2MkwzMzEuMDQ1LDI0OS4wNTJMMzMxLjA0NSwyNDkuMDUyeiBNMzI2LjUwNiwyNjcuNTA3bC0xMTQuMjE4LTYxLjAwOGgtMTMuMTU0bDEyNS44NDYsNjcuMjE3TDMyNi41MDYsMjY3LjUwNyBMMzI2LjUwNiwyNjcuNTA3eiBNMzIxLjk2NiwyODUuOTY0bC0xNDguNzczLTc5LjQ2NWgtMi43MDhsMS41NzksNi40MjJsMTQ4LjM3Myw3OS4yNTJMMzIxLjk2NiwyODUuOTY0TDMyMS45NjYsMjg1Ljk2NHogTTMxNy40MjYsMzA0LjQyMWwtMS41MjYsNi4yMDlsLTEzNy45MjUtNzMuNjY4bC0xLjk4Ni04LjA4NkwzMTcuNDI2LDMwNC40MjFMMzE3LjQyNiwzMDQuNDIxeiBNMzEyLjg4NiwzMjIuODc1bC0xLjUyOSw2LjIwOSBMMTgzLjg5MSwyNjFsLTEuOTg5LTguMDg2TDMxMi44ODYsMzIyLjg3NUwzMTIuODg2LDMyMi44NzV6IE0zMDguMzQ3LDM0MS4zMzJsLTEuNTI5LDYuMjA5bC0xMTcuMDE0LTYyLjVsLTEuOTg5LTguMDg2IEwzMDguMzQ3LDM0MS4zMzJMMzA4LjM0NywzNDEuMzMyeiBNMzAzLjgwNywzNTkuNzg5bC0xMTAuMDc2LTU4Ljc5NmwxLjk4Niw4LjA4OWwxMDYuNTYxLDU2LjkxOUwzMDMuODA3LDM1OS43ODlMMzAzLjgwNywzNTkuNzg5eiBNMjk5LjI2NywzNzguMjQ0bC05OS42MjUtNTMuMjEzbDEuOTg5LDguMDg5bDk2LjEwOCw1MS4zMzNMMjk5LjI2NywzNzguMjQ0TDI5OS4yNjcsMzc4LjI0NHogTTI5NC43MjUsMzk2LjcwMWwtMS41MjYsNi4yMDkgbC04NS42NTItNDUuNzUxbC0xLjk4OS04LjA4NkwyOTQuNzI1LDM5Ni43MDFMMjk0LjcyNSwzOTYuNzAxeiBNMjkwLjE4NSw0MTUuMTU2bC0xLjUyNiw2LjIwOWwtNzUuMTk5LTQwLjE2N2wtMS45ODktOC4wODYgTDI5MC4xODUsNDE1LjE1NkwyOTAuMTg1LDQxNS4xNTZ6IE0yODUuNjQ1LDQzMy42MTNsLTY4LjI2NC0zNi40NjNsMS45ODksOC4wODlsNjQuNzQ5LDM0LjU4NEwyODUuNjQ1LDQzMy42MTNMMjg1LjY0NSw0MzMuNjEzeiBNMjgxLjEwNiw0NTIuMDdsLTU3LjgwOC0zMC44OGwxLjk4OSw4LjA4Nmw1NC4yOTEsMjlMMjgxLjEwNiw0NTIuMDdMMjgxLjEwNiw0NTIuMDd6IE0yNzYuNTY2LDQ3MC41MjRsLTEuNTI2LDYuMjA5IGwtNDMuODQyLTIzLjQxNmwtMS45ODktOC4wODZMMjc2LjU2Niw0NzAuNTI0TDI3Ni41NjYsNDcwLjUyNHogTTI3Mi4wMjYsNDg4Ljk4MWwtMzYuOTAyLTE5LjcwOWwxLjk4OSw4LjA4NmwzMy4zODQsMTcuODMyIEwyNzIuMDI2LDQ4OC45ODFMMjcyLjAyNiw0ODguOTgxeiBNMjY3LjQ4Niw1MDcuNDM4TDI2Ni4zNjUsNTEyaC0zLjQ5MWwtMTkuODQ1LTEwLjYwMWwtMS45ODktOC4wODZMMjY3LjQ4Niw1MDcuNDM4elxcXCI+PC9wYXRoPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNGN0MyOUU7XFxcIiBkPVxcXCJNMzQxLjUxNSwyMDYuNDk4bC0xLjY1NSw2LjcyN2wtMTQ4LjI0NSw3OS4xODJsLTEuNTI2LTYuMjA5bDE0OS4yMTQtNzkuN0gzNDEuNTE1TDM0MS41MTUsMjA2LjQ5OHogTTMzNS45MzYsMjI5LjE3OEwxOTQuNjMsMzA0LjY1M2wxLjUyOSw2LjIwOWwxMzcuNzg5LTczLjU5OEwzMzUuOTM2LDIyOS4xNzhMMzM1LjkzNiwyMjkuMTc4eiBNMzMwLjAyMSwyNTMuMjE2bC0xMzAuODU0LDY5Ljg5MiBsMS41MjksNi4yMDlsMTI3LjMzNC02OC4wMTRMMzMwLjAyMSwyNTMuMjE2TDMzMC4wMjEsMjUzLjIxNnogTTMyNC4xMDcsMjc3LjI1N2wtMTIwLjM5OCw2NC4zMDhsMS41MjksNi4yMDlsMTE2Ljg4MS02Mi40MyBMMzI0LjEwNywyNzcuMjU3TDMyNC4xMDcsMjc3LjI1N3ogTTMxOC4xOTYsMzAxLjI5NmwtMS45ODksOC4wODlMMjA5Ljc4LDM2Ni4yMzFsLTEuNTI5LTYuMjA5TDMxOC4xOTYsMzAxLjI5NkwzMTguMTk2LDMwMS4yOTZ6IE0zMTIuMjgxLDMyNS4zMzdsLTEuOTg5LDguMDg2bC05NS45NzUsNTEuMjYybC0xLjUyNi02LjIwOUwzMTIuMjgxLDMyNS4zMzdMMzEyLjI4MSwzMjUuMzM3eiBNMzA2LjM2NywzNDkuMzc1bC04OS4wMzcsNDcuNTU5IGwxLjUyNiw2LjIwOWw4NS41MjEtNDUuNjc5TDMwNi4zNjcsMzQ5LjM3NUwzMDYuMzY3LDM0OS4zNzV6IE0zMDAuNDU0LDM3My40MTZsLTc4LjU4Niw0MS45NzVsMS41MzEsNi4yMDlsNzUuMDY2LTQwLjA5NSBMMzAwLjQ1NCwzNzMuNDE2TDMwMC40NTQsMzczLjQxNnogTTI5NC41NDEsMzk3LjQ1NGwtMS45ODksOC4wODlsLTY0LjYxNSwzNC41MTFsLTEuNTI2LTYuMjA5TDI5NC41NDEsMzk3LjQ1NEwyOTQuNTQxLDM5Ny40NTR6IE0yODguNjMsNDIxLjQ5NWwtMS45ODksOC4wODZsLTU0LjE2LDI4LjkyN2wtMS41MjktNi4yMDlMMjg4LjYzLDQyMS40OTVMMjg4LjYzLDQyMS40OTV6IE0yODIuNzE0LDQ0NS41MzZsLTQ3LjIyNCwyNS4yMjUgbDEuNTI2LDYuMjA5bDQzLjcwOS0yMy4zNDZMMjgyLjcxNCw0NDUuNTM2TDI4Mi43MTQsNDQ1LjUzNnogTTI3Ni44MDEsNDY5LjU3NWwtMS45ODksOC4wODlsLTMzLjI1NCwxNy43NjJsLTEuNTI5LTYuMjA5IEwyNzYuODAxLDQ2OS41NzVMMjc2LjgwMSw0NjkuNTc1eiBNMjcwLjg4NSw0OTMuNjE1bC0yNi4zMTYsMTQuMDU4bDEuMDYzLDQuMzI3aDMuOTg3bDE5LjI3Ni0xMC4yOTZMMjcwLjg4NSw0OTMuNjE1IEwyNzAuODg1LDQ5My42MTV6IE0xODcuMDc5LDI3My45NDhsMTI2LjI4Mi02Ny40NTJoLTEzLjE1MkwxODUuNTUsMjY3LjczOUwxODcuMDc5LDI3My45NDhMMTg3LjA3OSwyNzMuOTQ4eiBNMTgyLjUzNiwyNTUuNDk0IGw5MS43My00OC45OTVoLTEzLjE1MmwtODAuMTA1LDQyLjc4NkwxODIuNTM2LDI1NS40OTRMMTgyLjUzNiwyNTUuNDk0eiBNMTc3Ljk5NywyMzcuMDM5bDU3LjE3OC0zMC41NGgtMTMuMTUybC00NS41NTMsMjQuMzMyIEwxNzcuOTk3LDIzNy4wMzlMMTc3Ljk5NywyMzcuMDM5eiBNMTczLjQ1NywyMTguNTgybDIyLjYyNC0xMi4wODNoLTEzLjE1MmwtMTAuOTk4LDUuODc1TDE3My40NTcsMjE4LjU4MnpcXFwiPjwvcGF0aD48Zz48cGF0aCBzdHlsZT1cXFwiZmlsbDojRkU3RThEO1xcXCIgZD1cXFwiTTMwNS43OTMsMjA4LjI3OWMtNDUuNjc0LDIwLjIzNS0xNTIuNzUzLDI2LjI5OS0xNDQuOTExLTIyLjI1OCBDMTY4LjcyMSwxMzcuNDY1LDM1OC43NzgsMTY2LjM2NywzMDUuNzkzLDIwOC4yNzl6XFxcIj48L3BhdGg+PHBhdGggc3R5bGU9XFxcImZpbGw6I0ZDRTNDODtcXFwiIGQ9XFxcIk0xOTYuMTI5LDEzNC44N2MtNDQuMzgzLDAuOTE2LTYwLjc0OSwzNC42MTgtMjQuMzEsNTcuOTQ2IGM0Ny4xOSwzMC4yMTMsMTgxLjM2LDM3LjQ3OCwxODguMDc4LDcuODI1QzM2Ni42MTUsMTcwLjk4OSwyNjIuMjU5LDEzMy41MDQsMTk2LjEyOSwxMzQuODd6XFxcIj48L3BhdGg+PHBhdGggc3R5bGU9XFxcImZpbGw6I0ZFN0U4RDtcXFwiIGQ9XFxcIk0yMTkuMzAzLDEwMC40NDRjLTQ0LjAzOS0yLjEyLTgxLjI4NywyOC40MjEtMzYuMDM1LDU1LjQxMiBjNDkuNzYxLDI5LjY4LDEyNC40MTctMS41ODksMTczLjM0NywzMi4wMjVDMzY4LjA5LDE1OC42ODYsMjg0LjkxNiwxMDMuNjAzLDIxOS4zMDMsMTAwLjQ0NHpcXFwiPjwvcGF0aD48cGF0aCBzdHlsZT1cXFwiZmlsbDojRkNFM0M4O1xcXCIgZD1cXFwiTTM0NS42NDEsMTU4LjA1M2MtNDYuNzQ3LTM4LjQxMS04NS4yOTYtMTguNzcyLTEzMi4zNTYtMzYuNDI3IGMtNDcuMDU5LTE3LjY1OC0zMy40OTgtNTQuMzE3LTkuNzMxLTU2LjM3MmMwLjk0LTE2LjYyOC01LjQ5Ny00NC4zNDEsNDQuNzYxLTY0Ljk5NmM1LjA5OSwzMC4yNTcsMTAuNzgzLDY5LjQ4LDQ2LjQ4Myw4My41OTggUzM1NC42NywxMzIuMjg4LDM0NS42NDEsMTU4LjA1M3pcXFwiPjwvcGF0aD48cGF0aCBzdHlsZT1cXFwiZmlsbDojRkU3RThEO1xcXCIgZD1cXFwiTTE5OS41Myw1OC41MWMtNC43NjMtMTcuNDk4LDkuNDQ4LTQwLjg2OCw0MC41MDQtNTUuNjAxYzUuNjQ5LTIuNjc5LDEyLjYzNi01LjUzMSwxMy4zNiwxLjQ5NSBjMi45MzgsMjguNTY2LDkuNTE2LDY2LjgzOSw0MS40MDUsNzkuNDUzYzkuMzE1LDMuNjg1LDE3Ljg5NSw5LDI1LjI4NiwxNS4zMjVDMjkzLjM3NSw4MS43ODMsMjA3LjM0LDg3LjIsMTk5LjUzLDU4LjUxelxcXCI+PC9wYXRoPjxnPjxwYXRoIHN0eWxlPVxcXCJmaWxsOm5vbmU7c3Ryb2tlOiNGRkFCQjU7c3Ryb2tlLXdpZHRoOjIuNDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MjIuOTI2O1xcXCIgZD1cXFwiIE0yMjQuNjA2LDI0LjQ1M2MtNS40MTIsMy4yMTctMTIuMjc3LDExLjk0NS0xNS44ODIsMjIuMjZcXFwiPjwvcGF0aD48cGF0aCBzdHlsZT1cXFwiZmlsbDpub25lO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDoyLjQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjIyLjkyNjtcXFwiIGQ9XFxcIiBNMjA5LjIxOCw3OC4wNzVjLTYuMDk3LDAuNTAxLTE0LjQzMywxMC43ODMtMTQuMzQ4LDIwLjExNFxcXCI+PC9wYXRoPjxwYXRoIHN0eWxlPVxcXCJmaWxsOm5vbmU7c3Ryb2tlOiNGRkFCQjU7c3Ryb2tlLXdpZHRoOjIuNDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MjIuOTI2O1xcXCIgZD1cXFwiIE0xODMuNDU5LDExNy4zNDZjLTQuNjU4LDAuMzgzLTExLjAzLDguMjM5LTEwLjk2NCwxNS4zNzFcXFwiPjwvcGF0aD48cGF0aCBzdHlsZT1cXFwiZmlsbDpub25lO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDoyLjQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjIyLjkyNjtcXFwiIGQ9XFxcIiBNMTY2LjM5MSwxNTIuMzk0Yy00LjgzNSwxLjc1OS0xMC42NTQsMTAuMTUzLTEwLjU2OSwxOS40ODRcXFwiPjwvcGF0aD48L2c+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmVyc2lvbj1cXFwiMS4xXFxcIiBpZD1cXFwiTGF5ZXJfMVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgeD1cXFwiMHB4XFxcIiB5PVxcXCIwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAzNjQuOTUgMzY0Ljk1XFxcIiBzdHlsZT1cXFwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNjQuOTUgMzY0Ljk1O1xcXCIgeG1sOnNwYWNlPVxcXCJwcmVzZXJ2ZVxcXCI+PGcgaWQ9XFxcIlhNTElEXzE0MjRfXFxcIj48cGF0aCBpZD1cXFwiWE1MSURfNTgzX1xcXCIgc3R5bGU9XFxcImZpbGw6I0ZGQTI1MDtcXFwiIGQ9XFxcIk0xODIuNDc1LDM2NC45NUwxODIuNDc1LDM2NC45NWMtMTMuNzM4LDAtMjQuOTc4LTExLjI0LTI0Ljk3OC0yNC45NzhWMjQ0LjA3IGMwLTEzLjczOCwxMS4yNC0yNC45NzgsMjQuOTc4LTI0Ljk3OGwwLDBjMTMuNzM4LDAsMjQuOTc4LDExLjI0LDI0Ljk3OCwyNC45Nzh2OTUuOTAyIEMyMDcuNDUzLDM1My43MSwxOTYuMjEzLDM2NC45NSwxODIuNDc1LDM2NC45NXpcXFwiPjwvcGF0aD48ZyBpZD1cXFwiWE1MSURfMTQyNV9cXFwiPjxwYXRoIGlkPVxcXCJYTUxJRF8xNDI2X1xcXCIgc3R5bGU9XFxcImZpbGw6I0ZGNTk1OTtcXFwiIGQ9XFxcIk03MS45LDIxNS4wMTRsODYuMTExLTE5Ny45MjZjOS45MTItMjIuNzg0LDM5LjAxNS0yMi43ODQsNDguOTI3LDAgbDg2LjExMSwxOTcuOTI2YzguNzYzLDIwLjE0Mi00LjM5MSw0My41NjgtMjQuNDY0LDQzLjU2OEg5Ni4zNjRDNzYuMjkxLDI1OC41ODEsNjMuMTM3LDIzNS4xNTYsNzEuOSwyMTUuMDE0elxcXCI+PC9wYXRoPjxwYXRoIGlkPVxcXCJYTUxJRF8xNDI3X1xcXCIgc3R5bGU9XFxcImZpbGw6I0ZGRkVCOTtcXFwiIGQ9XFxcIk0yNzAuOTIxLDE2NC4xNTFIOTQuMDI5TDcxLjksMjE1LjAxNGMtOC43NjMsMjAuMTQxLDQuMzkxLDQzLjU2OCwyNC40NjQsNDMuNTY4IGgxNzIuMjIyYzIwLjA3MywwLDMzLjIyNy0yMy40MjYsMjQuNDY0LTQzLjU2OEwyNzAuOTIxLDE2NC4xNTF6XFxcIj48L3BhdGg+PHBhdGggaWQ9XFxcIlhNTElEXzE0MjhfXFxcIiBzdHlsZT1cXFwiZmlsbDojNUZEMkRCO1xcXCIgZD1cXFwiTTI4My40OTcsMTkzLjA1N0g4MS40NTNMNzEuOSwyMTUuMDE0Yy04Ljc2MywyMC4xNDEsNC4zOTEsNDMuNTY4LDI0LjQ2NCw0My41NjggaDE3Mi4yMjJjMjAuMDczLDAsMzMuMjI3LTIzLjQyNiwyNC40NjQtNDMuNTY4TDI4My40OTcsMTkzLjA1N3pcXFwiPjwvcGF0aD48L2c+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmVyc2lvbj1cXFwiMS4xXFxcIiBpZD1cXFwiTGF5ZXJfMVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgeD1cXFwiMHB4XFxcIiB5PVxcXCIwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCA0MTYuMzYgNDE2LjM2XFxcIiBzdHlsZT1cXFwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MTYuMzYgNDE2LjM2O1xcXCIgeG1sOnNwYWNlPVxcXCJwcmVzZXJ2ZVxcXCI+PGc+PHBhdGggc3R5bGU9XFxcImZpbGw6I0ZDRURDQTtcXFwiIGQ9XFxcIk0zNTIuNzEsMGwtMTguNzYsNTcuNThsLTcuMTgsMjIuMDJMMjIzLjU3NywzOTYuMzE1Yy00Ljg1NiwxNC45MDItMjUuOTM4LDE0LjkwMi0zMC43OTMsMCBMODkuNTksNzkuNmwtNy4xOC0yMi4wMkw2My42NSwwSDM1Mi43MXpcXFwiPjwvcGF0aD48cGF0aCBzdHlsZT1cXFwiZmlsbDojRERDODlGO1xcXCIgZD1cXFwiTTM1Mi43MSwwbC0xOC43Niw1Ny41OGwtNy4xOCwyMi4wMmwtODguMTI0LDI3MC40NjdjLTUuNTA3LDE2LjkwMi0zMC40NjYsMTIuOTM5LTMwLjQ2Ni00LjgzOFYwIEgzNTIuNzF6XFxcIj48L3BhdGg+PHBhdGggc3R5bGU9XFxcImZpbGw6I0I1NjAwQjtcXFwiIGQ9XFxcIk0zMzMuOTUsNTcuNThsLTcuMTgsMjIuMDJsLTk5LjU2MSwzMDUuNTY3Yy02LjAwMSwxOC40MTgtMzIuMDU3LDE4LjQxOC0zOC4wNTgsMEw4OS41OSw3OS42IGwtNy4xOC0yMi4wMkM4Mi40MSw1Ny41OCwzMzMuOTUsNTcuNTgsMzMzLjk1LDU3LjU4elxcXCI+PC9wYXRoPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNGRkQ0MUQ7XFxcIiBkPVxcXCJNMzI2Ljc3LDc5LjZsLTcuNywyMy42MmwtMiw2LjEzbC03LjY5LDIzLjYybC01LjQzLDE2LjY1bC04NC4xNiwyNTguMzIgYy0xLjgzLDUuNjItNi43Miw4LjQyLTExLjYxLDguNDJzLTkuNzgtMi44LTExLjYxLTguNDJsLTcxLjktMjIwLjY4bC0xNy42OS01NC4yOWwtOS42OS0yOS43NWwtNy43LTIzLjYySDMyNi43N3pcXFwiPjwvcGF0aD48cGF0aCBzdHlsZT1cXFwiZmlsbDojRUE1ODdGO1xcXCIgZD1cXFwiTTgzLjg4LDBjMy44OSwyNS4wMyw4LjMsNDYuNjMsMTUuOSw0Ni42M2M3LjYsMCwxMi4wMS0yMS42LDE1LjktNDYuNjNcXFwiPjwvcGF0aD48cGF0aCBzdHlsZT1cXFwiZmlsbDojRUE1ODdGO1xcXCIgZD1cXFwiTTIyOC40LDBjMy44OSwyNS4wMyw4LjMsNDYuNjMsMTUuOSw0Ni42M2M3LjYsMCwxMi4wMS0yMS42LDE1LjktNDYuNjNcXFwiPjwvcGF0aD48cGF0aCBzdHlsZT1cXFwiZmlsbDojRUE1ODdGO1xcXCIgZD1cXFwiTTMwMC42NywwYzMuODksMjUuMDMsOC4yOSw0Ni42MywxNS45LDQ2LjYzczEyLjAxLTIxLjYsMTUuOS00Ni42M1xcXCI+PC9wYXRoPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNFQTU4N0Y7XFxcIiBkPVxcXCJNMTU2LjE0LDBjMy44OSwyNS4wMyw4LjMsNDYuNjMsMTUuOSw0Ni42M2M3LjYsMCwxMi4wMS0yMS42LDE1LjktNDYuNjNcXFwiPjwvcGF0aD48cG9seWdvbiBzdHlsZT1cXFwiZmlsbDojRkZBOTFGO1xcXCIgcG9pbnRzPVxcXCIzMTkuMDcsMTAzLjIyIDMwOS4zOCwxMzIuOTcgMTA2Ljk4LDEzMi45NyA5Ny4yOSwxMDMuMjIgXFxcIj48L3BvbHlnb24+PHBhdGggc3R5bGU9XFxcImZpbGw6I0ZGRDQxRDtcXFwiIGQ9XFxcIk0zMzQuMjMsOTQuNDdjMCw0LjExLTEuNjYsNy44My00LjM2LDEwLjUyYy0yLjY5LDIuNjktNi40LDQuMzYtMTAuNTEsNC4zNkg5NyBjLTguMjEsMC0xNC44Ny02LjY2LTE0Ljg3LTE0Ljg4YzAtNC4xMSwxLjY2LTcuODIsNC4zNi0xMC41MWMyLjY5LTIuNyw2LjQtNC4zNiwxMC41MS00LjM2aDIyMi4zNiBDMzI3LjU3LDc5LjYsMzM0LjIzLDg2LjI2LDMzNC4yMyw5NC40N3pcXFwiPjwvcGF0aD48cGF0aCBzdHlsZT1cXFwiZmlsbDojRkZBOTFGO1xcXCIgZD1cXFwiTTMzNC4yMyw5NC40N2MwLDQuMTEtMS42Niw3LjgzLTQuMzYsMTAuNTJjLTIuNjksMi42OS02LjQsNC4zNi0xMC41MSw0LjM2SDIwOC4xOFY3OS42aDExMS4xOCBDMzI3LjU3LDc5LjYsMzM0LjIzLDg2LjI2LDMzNC4yMyw5NC40N3pcXFwiPjwvcGF0aD48cG9seWdvbiBzdHlsZT1cXFwiZmlsbDojOTE0RDA5O1xcXCIgcG9pbnRzPVxcXCIzMzMuOTUsNTcuNTggMzI2Ljc3LDc5LjYgMjA4LjE4LDc5LjYgMjA4LjE4LDU3LjU4IFxcXCI+PC9wb2x5Z29uPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNGRkE5MUY7XFxcIiBkPVxcXCJNMzE3LjA3LDEwOS4zNWwtNy42OSwyMy42MmwtODkuNTksMjc0Ljk3Yy0xLjgzLDUuNjItNi43Miw4LjQyLTExLjYxLDguNDJWMTA5LjM1SDMxNy4wN3pcXFwiPjwvcGF0aD48cGF0aCBzdHlsZT1cXFwiZmlsbDojRUE1ODdGO1xcXCIgZD1cXFwiTTMwMy45NSwxNDkuNjJsLTg0LjE2LDI1OC4zMmMtMS44Myw1LjYyLTYuNzIsOC40Mi0xMS42MSw4LjQycy05Ljc4LTIuOC0xMS42MS04LjQybC03MS45LTIyMC42OCBsODMuNTEtMTcuNTNMMzAzLjk1LDE0OS42MnpcXFwiPjwvcGF0aD48cGF0aCBzdHlsZT1cXFwiZmlsbDojQ0UzRTZCO1xcXCIgZD1cXFwiTTMwMy45NSwxNDkuNjJsLTg0LjE2LDI1OC4zMmMtMS44Myw1LjYyLTYuNzIsOC40Mi0xMS42MSw4LjQyVjE2OS43M0wzMDMuOTUsMTQ5LjYyelxcXCI+PC9wYXRoPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNGRkE5MUY7XFxcIiBkPVxcXCJNMjA4LjE4LDEwOS4zNUg5Ny4wMWMtOC4yMTgsMC0xNC44OC02LjY2Mi0xNC44OC0xNC44OGwwLDBoMTI2LjA1TDIwOC4xOCwxMDkuMzVMMjA4LjE4LDEwOS4zNXpcXFwiPjwvcGF0aD48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlkPVxcXCJMYXllcl8xXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB4PVxcXCIwcHhcXFwiIHk9XFxcIjBweFxcXCIgdmlld0JveD1cXFwiMCAwIDUxMiA1MTJcXFwiIHN0eWxlPVxcXCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7XFxcIiB4bWw6c3BhY2U9XFxcInByZXNlcnZlXFxcIj48Zz48cG9seWdvbiBzdHlsZT1cXFwiZmlsbDojRDFGMEVGO1xcXCIgcG9pbnRzPVxcXCIxNzMuMDg4LDIxNS4yMjYgMzUxLjU2NCwyMTUuMjI2IDI4Ny4wNjMsNTEyIDIzNy41ODQsNTEyIFxcXCI+PC9wb2x5Z29uPjxwb2x5Z29uIHN0eWxlPVxcXCJmaWxsOiNEMkI0QjM7XFxcIiBwb2ludHM9XFxcIjMxMy4xMDQsMzkyLjE3NiAyOTEuODA5LDQ5MC4xNzIgMjMyLjg0MSw0OTAuMTcyIDIxMS41NDMsMzkyLjE3NiBcXFwiPjwvcG9seWdvbj48cGF0aCBzdHlsZT1cXFwiZmlsbDojRTRFQUJBO1xcXCIgZD1cXFwiTTMxOS42LDM2Mi4zbC0xOC43Nyw4Ni4zNTljLTMwLjUyLTQuMDc5LTU3LjgwMS0xMC40NjctODAuNzk0LTE3LjQxOUwyMDUuMDUsMzYyLjNIMzE5LjZ6XFxcIj48L3BhdGg+PHBhdGggc3R5bGU9XFxcImZpbGw6I0QyQjRCMztcXFwiIGQ9XFxcIk0zMjkuNjcsMzE1Ljk2MWwtMTkuMDM0LDg3LjU4MWMtMzkuNTM5LTQuNTI2LTc0LjA2NC0xMy4wNi0xMDEuNDE1LTIyLjA0OGwtMTQuMjQxLTY1LjUzMkgzMjkuNjd6XFxcIj48L3BhdGg+PHBhdGggc3R5bGU9XFxcImZpbGw6I0U0RUFCQTtcXFwiIGQ9XFxcIk0zNDAuNjE3LDI2NS41OTJsLTE5LjE5Myw4OC4zMDdjLTUwLjc2My01LjE0NC05My42NzctMTcuMDI0LTEyNC4zNzktMjguNDQ1bC0xMy4wMTItNTkuODYxIEgzNDAuNjE3TDM0MC42MTcsMjY1LjU5MnpcXFwiPjwvcGF0aD48cGF0aCBzdHlsZT1cXFwiZmlsbDojRDJCNEIzO1xcXCIgZD1cXFwiTTE3My4wODgsMjE1LjIyNmgxNzguNDc2bC0xOS40MDQsODkuMjgzYy02Mi41NzgtNS4wMjktMTE0LjE2Ny0yMC42MTYtMTQ3LjA3Ny0zNC4wODcgTDE3My4wODgsMjE1LjIyNnpcXFwiPjwvcGF0aD48cGF0aCBzdHlsZT1cXFwiZmlsbDojRkZGMUFEO1xcXCIgZD1cXFwiTTM0Ny44MjEsNTEyaC0xNzAuOTl2LTEwLjkxNGMwLTYuMDAyLDQuOTA5LTEwLjkxNCwxMC45MTQtMTAuOTE0aDE0OS4xNjMgYzYuMDAyLDAsMTAuOTE0LDQuOTExLDEwLjkxNCwxMC45MTRMMzQ3LjgyMSw1MTJMMzQ3LjgyMSw1MTJ6XFxcIj48L3BhdGg+PHBhdGggc3R5bGU9XFxcImZpbGw6I0QzM0IzQTtcXFwiIGQ9XFxcIk0zMDkuNDE5LDIyMy43MzZjLTQ5LjAwMSwyMS43MDUtMTYzLjg3MywyOC4yMTItMTU1LjQ2MS0yMy44OCBDMTYyLjM2OSwxNDcuNzY2LDM2Ni4yNTksMTc4Ljc3NCwzMDkuNDE5LDIyMy43MzZ6XFxcIj48L3BhdGg+PHBhdGggc3R5bGU9XFxcImZpbGw6I0Y2RTM4NTtcXFwiIGQ9XFxcIk0xOTEuNzcxLDE0NC45ODVjLTQ3LjYxNiwwLjk4Ni02NS4xNzIsMzcuMTM4LTI2LjA4LDYyLjE2NyBjNTAuNjI4LDMyLjQwOSwxOTQuNTYsNDAuMjA3LDIwMS43Nyw4LjM5MkMzNzQuNjY4LDE4My43MzMsMjYyLjcxNCwxNDMuNTE4LDE5MS43NzEsMTQ0Ljk4NXpcXFwiPjwvcGF0aD48cGF0aCBzdHlsZT1cXFwiZmlsbDojRDMzQjNBO1xcXCIgZD1cXFwiTTIxNi42MzQsMTA4LjA1MmMtNDcuMjQzLTIuMjc2LTg3LjIwNiwzMC40ODgtMzguNjU5LDU5LjQ0NiBjNTMuMzg1LDMxLjg0MiwxMzMuNDc4LTEuNzA0LDE4NS45NjcsMzQuMzU2QzM3Ni4yNTIsMTcwLjUzMywyODcuMDIyLDExMS40MzksMjE2LjYzNCwxMDguMDUyelxcXCI+PC9wYXRoPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNGNkUzODU7XFxcIiBkPVxcXCJNMzUyLjE2NSwxNjkuODUzYy01MC4xNS00MS4yMDctOTcuMjM3LTIxLjE4My0xNDEuOTg4LTM5LjA4cy0yNy41OTktNDkuNDEyLTQuMTg1LTU1Ljc4NCBjMjMuNDE0LTYuMzczLTE4LjQwNC0zNS41ODIsNDEuNzY1LTc0LjQxN2M1LjQ3MSwzMi40NiwxMS41Nyw3NC41MzUsNDkuODY5LDg5LjY4NFMzNjEuODUzLDE0Mi4yMTYsMzUyLjE2NSwxNjkuODUzelxcXCI+PC9wYXRoPjxwYXRoIHN0eWxlPVxcXCJmaWxsOiNEMzNCM0E7XFxcIiBkPVxcXCJNMjA2LjM2Myw2MS41MDNjLTMuMDI0LTExLjk5OCwwLjIzNi0zNS41MDUsMzIuNTA4LTU4LjA4N2M1LjI5Ni0zLjcwMiwxMy41NTgtNS45MzMsMTQuMzMyLDEuNjA2IGMzLjE1MSwzMC42NDUsMTAuMjA5LDcxLjcwNSw0NC40MTksODUuMjM0YzkuOTkzLDMuOTU0LDE5LjE5Nyw5LjY1NiwyNy4xMjUsMTYuNDRDMjk2LjA5Nyw4OC4wMzUsMjE0LjE1MSw5Mi4zNzgsMjA2LjM2Myw2MS41MDN6XFxcIj48L3BhdGg+PGc+PHBhdGggc3R5bGU9XFxcImZpbGw6bm9uZTtzdHJva2U6I0U2NjM2MztzdHJva2Utd2lkdGg6Mi40O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyMi45MjY7XFxcIiBkPVxcXCIgTTIzNy45NTQsMTYuMTA2Yy01LjgwOCwzLjQ1Mi0xMy4xNzMsMTIuODE1LTE3LjAzNiwyMy44ODNcXFwiPjwvcGF0aD48cGF0aCBzdHlsZT1cXFwiZmlsbDpub25lO3N0cm9rZTojRkZGMUFEO3N0cm9rZS13aWR0aDoyLjQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjIyLjkyNjtcXFwiIGQ9XFxcIiBNMjA1LjgxMiw4NC4wNTRjLTYuNTM5LDAuNTM2LTE1LjQ4MywxMS41NjctMTUuMzkyLDIxLjU4XFxcIj48L3BhdGg+PHBhdGggc3R5bGU9XFxcImZpbGw6bm9uZTtzdHJva2U6I0U2NjM2MztzdHJva2Utd2lkdGg6Mi40O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyMi45MjY7XFxcIiBkPVxcXCIgTTE3OC4xODIsMTI2LjE4NGMtNC45OTgsMC40MDktMTEuODMyLDguODM5LTExLjc2MiwxNi40ODhcXFwiPjwvcGF0aD48cGF0aCBzdHlsZT1cXFwiZmlsbDpub25lO3N0cm9rZTojRkZGMUFEO3N0cm9rZS13aWR0aDoyLjQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjIyLjkyNjtcXFwiIGQ9XFxcIiBNMTU5Ljg2NywxNjMuNzg2Yy01LjE4OCwxLjg4Ny0xMS40MywxMC44OS0xMS4zMzksMjAuOTAyXFxcIj48L3BhdGg+PC9nPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgaWQ9XFxcIndyaXR0ZW5cXFwiIGRhdGEtbmFtZT1cXFwiTGF5ZXIgMVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgNDA4My44OCA0MzAuMzVcXFwiPjx0aXRsZT5nZWxhY2NpbzwvdGl0bGU+PGcgaWQ9XFxcImdlbGFjY2lvXFxcIj48ZyBpZD1cXFwiZ2VsYWNjaW8tdW5kZXJsaW5lXFxcIj48Zz48cGF0aCBkPVxcXCJNMTA3Ny45NCw3MDQuNTFjNCwuMTMtMS4xNC0uOTEtNS41Mi0xLjc2bC00LjE1LjhaXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgtOTUuMzcgLTMxNy43NClcXFwiIGZpbGw9XFxcIiNjZGE5ODBcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTA1Ni4yOCw3MDEuODZsLTExLC4xMiw4LC4yMmM4LjY4LDEuNTctMS4zMSwxLjIyLTQuNjMsMS4xMUMxMDYyLjksNzA0LjUxLDEwNTMuOTEsNzAyLjM0LDEwNTYuMjgsNzAxLjg2WlxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoLTk1LjM3IC0zMTcuNzQpXFxcIiBmaWxsPVxcXCIjY2RhOTgwXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTEwMzQuNjksNzAwLjYyYy03LS43NC01LjEyLjI3LTIuMjEuODFDMTAzMyw3MDEuMTEsMTAzNy42MSw3MDEuMTYsMTAzNC42OSw3MDAuNjJaXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgtOTUuMzcgLTMxNy43NClcXFwiIGZpbGw9XFxcIiNjZGE5ODBcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNNTk4LjA5LDY4NC4yM2MyLC4xMSw0LjMxLjE1LDQsLjM5QzYwNC4yOCw2ODQuMzEsNjA0Ljc0LDY4NC4wOSw1OTguMDksNjg0LjIzWlxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoLTk1LjM3IC0zMTcuNzQpXFxcIiBmaWxsPVxcXCIjY2RhOTgwXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTYwMi4wOSw2ODQuNjJsLTEuNDIuMTksMS4zMi0uMUM2MDIuMTIsNjg0LjY3LDYwMi4wNSw2ODQuNjUsNjAyLjA5LDY4NC42MlpcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKC05NS4zNyAtMzE3Ljc0KVxcXCIgZmlsbD1cXFwiI2NkYTk4MFxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk03NDMuOTQsNjkyLjQ0YzcuOTEtLjU4LDEyLjM1LS4yNCwxOS44Mi0uMzVsNC4xNiwxLjExYzguMS0uMjEsMy41OS0uODIsOS40OC0xLjI2LDcuMzcuNzksMjMsLjQsMjYuNDUuNjIsMi40Mi41NS0zLC41Ny00LjIzLjgyLDkuNDktLjA3LDguODUtMS4wNywyMC42NC0uNzRsLjE5LjI5YzI4LjIyLS43NSw2My45LDEuMzgsOTUuMjYsMi4yNWE0LjM3LDQuMzcsMCwwLDEtMi4zOC0uNjFjOC4yNy4zNSwxNi44NS45NCwyNS40OCwxLjRsMTMsLjcxLDYuNDUuMzQsNi4zOS4zOGMxNi45NCwxLDMzLDEuNTcsNDYuMiwxLjY2LTQuNDctLjM0LTkuNjktLjkyLTE1LjMyLTEuNDdsLTE3LjY2LTEuN2MtNi0uNTYtMTIuMDctMS4wNy0xNy43Ni0xLjQycy0xMS0uNDEtMTUuNTktLjI3Yy02LjY5LTEuMTktMTcuMTUtLjgzLTE5Ljg4LTIuMDYtNi40OS0uNTgtMTItLjgyLTE3LjA4LTFzLTkuNTktLjIzLTE0LjExLS4yNy05LS4wNy0xMy45NC0uMTctMTAuMjgtLjE1LTE2LjUzLS40MWMtMy41OC0uMzQtMS44Mi0uNzgtMi44My0xLjMxbDE5Ljg2LjM3Yy00LS4zNi04LjA1LS42My0xMi4wNy0xLDIuNjItLjExLDcuMTIsMCwxMS4xNS4xM3M3LjU4LjE4LDguMzMtLjI1Yy04LjY5LDAtMjAtLjMyLTMxLS43MS01LjQ5LS4xOS0xMC45Mi0uMzctMTUuOTItLjQ2cy05LjU3LDAtMTMuMzcuMjFjMy41Ni4yMyw3LjU1LjMyLDExLjcyLjQ0czguNDguMjgsMTIuNjguNDljMy42OS40OSw5LjQxLDEsOSwxLjQ2LTEyLjA2LjIyLTIzLjA2LS4xMi0zNC4xNS0uMzNMODA5LjU4LDY4OWMtNS43My0uMTQtMTEuNjEtLjMyLTE3Ljc5LS4yN3MtMTQuNi0uMjEtMTUuNjItLjcyYzQuMDctLjEsMS0uNTYsNC4zNS0uNzQtOC43Ny4yOC0uOTEsMS43Ny0xMy41NywxLjM2bDEuNjQtMS42OGMtMi41My44Ni02LjQuNzEtMTAuNzguNDdhOTAuMzMsOTAuMzMsMCwwLDAtMTMuNzYsMGMtMy4yNC0uNjksMi43NS0xLjA3LDkuNjktMS4wOS03Ljg4LS4zMy04LjYuNjctMTQuODkuNjFsNi0xLjQzYy02LjcsMS4zNy0xMi0uMzItMTUuOC0uOC0uNDUuMzUsMy4wOCwxLjQ4LTUuMzIsMS4zNi0zLjYtLjItMS43Ni0uNTYtMi42MS0uNzctLjQ2LjM1LTMuNDgsMS05LDEuMDktMS0uNDgsMy42OC0uNzcsNC0xLjI3YTgxLjQxLDgxLjQxLDAsMCwxLTEwLjYyLS4xOGMtNy40LjQ3LjQ4LjctNCwxLjI3LTExLjM2LS4yNS0xLjE1LTEuNjktNS4zNC0yLjY5LDguNTUtLjc1LDE5LjU4LTEuMTEsMjQuMTYtMS40OC01LjQ4LjEyLTExLC4zNC0xNi40My41MSwxLS41OC0xMS4xMy0uODgtMi40NS0xLjUyLTguMi0uMTctMTcuMjUtLjExLTI2LjIuMThzLTE3LjgzLjgxLTI1LjY4LDEuMjFjMi4yMy4xNSw1LjEuMjEsNC42NC41OC04LjEyLjUyLTcuMjMtLjIyLTguOTEtLjYtNiwuNTQtNS4zLDEuNDgtOSwyLjMzLTEyLjQyLS40LTE0LjE0LjE2LTI0Ljc0LS42OGwuNjgsMWMtNy41MS0uNTMtOC41NCwxLTE2LjYyLjcxLS40Ni0uMiwyLjYyLS41OSw1LjA5LS45LTcuMTMuNTgtNi42Mi0uNTQtMTMuNTYuMTVsNS40Ny0xLjM2Yy01LjU0LjMtMTMuNjYsMS0xMC44NC0uMDUtOS42NSwxLjU5LTI2LjY3LDEuODgtMzguNzMsMy4zNGwuNzYtLjkxYy02LjE5LDEuNDMtMjMsMS4zLTI4LjM0LDIuOTJsLS45NS0uMjgtMTIuMzUsMmMtNS42NC4zMS0zLjgyLTEuMTItNC4yNS0uNzMtMTIuMzQsMS4xMy0yMiwxLjg3LTMwLDIuMTYtMS45LDEuMzEtMTQuODYsMi43Mi0yNS4xOCwzLjc1LTI0LjksMS44NC01MC42OCw0LjU1LTc1Ljg4LDguNDFhNjUwLjg3LDY1MC44NywwLDAsMC03Mi4yMiwxNWMtNi43NywxLjYyLTE1LjcsNS4zMS0yMy44Nyw4LjE5LDUuMTUtMS4yOCw3LjkyLTIuMTMsMTAuNjctM3M1LjQ5LTEuNjgsMTAuNTQtMi45NWE2Ni4zOCw2Ni4zOCwwLDAsMSw5LjExLTEuMTljMi41Ny0uMTUsNS0uMTgsOC4zOS0uNTVsLTMuNTUtLjIxYTQ1LjkyLDQ1LjkyLDAsMCwxLDguNDItMiwzMS44LDMxLjgsMCwwLDAsNi43OS0xLjY5bDAsMS42YzIuNzItMS4zNiwxMC4xLTIuMDcsMTMuMTYtMi4ybDIuNS0xLjU0YzYuNjUtLjU3LDExLTEsMTMuMTMtLjMzbC0uNzktLjg4YzIuNTUuMTEsMjUuMy0zLjgyLDE3LjcyLTFhMzguODgsMzguODgsMCwwLDEsNy43NS0xLjY5bC43Ny44OWM2LTEsMTIuNzMtMi4wNiwxNC41NS0xLjY5YTE0Ljg4LDE0Ljg4LDAsMCwwLTUuMzMsMS43NWMxMi43OS0xLjQ2LDE0LjA2LTIuMzgsMTUtMy4zM3MxLjQyLTEuOTEsMTIuNzktMy4xNGwtLjE5LjY3LDUuNy0xLjI3LDYuMTQuMjFjOC0zLjA1LDMyLTIuNjgsNDUuNjktNWE4OC43OSw4OC43OSwwLDAsMSw5LjYzLS4zM2MzLjc3LDAsOC4xNSwwLDEzLjI5LS40NmwtLjc0LS45NGM0LjE5LjIsMTQtLjEsMjMuODItLjI0czE5LjUxLjExLDIzLjQ2LDFjNy43Ni0xLjIzLS44NC0uMTYtLjcxLTEsMTUuMTktMS45MSwxNi4zMy0uNTEsMjQuMzYtLjI5LDkuMzctLjkzLTcuMiwwLTIuMTktMSwxNC40My4wNywxMS42My0xLjc2LDI5LjQ1LTEuOTQsMS43OS40Ny00LjU3LjYtNi4zOSwxLjA1QzU5Ni4wNSw2OTMsNjE5LjQxLDY5Myw2MzgsNjkyLjA5YzEwLjY2LjEyLDIzLjg2LjA4LDM3LjUsMHMyNy43NS4zLDQwLjIuNjJsLjQ2LS4zNmMxMC4zNS45MiwyMS41Ny4xNCwzMy42Ni41OFpcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKC05NS4zNyAtMzE3Ljc0KVxcXCIgZmlsbD1cXFwiI2NkYTk4MFxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk04OTMsNjg3LjVsLTEuOTQtMS0xMS40NiwwQzg4NC4xOCw2ODcuNDMsODg2LjYxLDY4Nyw4OTMsNjg3LjVaXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgtOTUuMzcgLTMxNy43NClcXFwiIGZpbGw9XFxcIiNjZGE5ODBcXFwiPjwvcGF0aD48cG9seWdvbiBwb2ludHM9XFxcIjc5NS4wMiAzNzIuMTkgODAxLjAyIDM3Mi4xMiA3OTEuMzQgMzcxLjY2IDc5NS4wMiAzNzIuMTlcXFwiIGZpbGw9XFxcIiNjZGE5ODBcXFwiPjwvcG9seWdvbj48cG9seWdvbiBwb2ludHM9XFxcIjY1MC4xIDM2Ni42MSA2NTEuNTggMzY2Ljc1IDY2Mi40OSAzNjYuNDQgNjczLjQxIDM2Ni4yNiA2NjEuNzUgMzY2LjM3IDY1MC4xIDM2Ni42MVxcXCIgZmlsbD1cXFwiI2NkYTk4MFxcXCI+PC9wb2x5Z29uPjxwYXRoIGQ9XFxcIk01OTguODYsNjgzLjM1YzIuNDgtLjUzLDYuMDgtLjQ2LDguNjYtLjg2bC0xMC4xNC43OFpcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKC05NS4zNyAtMzE3Ljc0KVxcXCIgZmlsbD1cXFwiI2NkYTk4MFxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk01MDAuMjYsNjg1LjQ5Yy0zLjc1LDEuNzktNy42OC41NC0yLjQ2LDEuNTRDNTAzLjg2LDY4Ni4zNCw0OTguNTUsNjg2LjEyLDUwMC4yNiw2ODUuNDlaXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgtOTUuMzcgLTMxNy43NClcXFwiIGZpbGw9XFxcIiNjZGE5ODBcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNNDc3LjU3LDY4OS4zNmE1MC4yNiw1MC4yNiwwLDAsMCw3LjMyLS45NEM0ODAuMjIsNjg4LjA4LDQ4MC4xMyw2ODguODcsNDc3LjU3LDY4OS4zNlpcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKC05NS4zNyAtMzE3Ljc0KVxcXCIgZmlsbD1cXFwiI2NkYTk4MFxcXCI+PC9wYXRoPjwvZz48L2c+PHBhdGggbWFzaz1cXFwidXJsKCNNYXNrLUcpXFxcIiBpZD1cXFwiZ2VsYWNjaW8tR1xcXCIgZD1cXFwiTTE3NC44Nyw2NzguMjFhNTksNTksMCwwLDEtMzYuNzgtMTIuN3EtMTYuNTYtMTIuNzEtMjYuNDktMzYuOHQtOS45My01OC4xMWEyNjYuMjEsMjY2LjIxLDAsMCwxLDguODMtNjcuMTQsMzM0LDMzNCwwLDAsMSwyNC4wOS02NC43OCwyOTEuMTUsMjkxLjE1LDAsMCwxLDM1LjEzLTU1LjA5cTE5Ljg2LTI0LjMxLDQxLjc1LTM4LjMxdDQ0LTE0cTE1LjQ1LDAsMjQuNjQsNy4xYTM5LjYxLDM5LjYxLDAsMCwxLDEzLjI1LDE4LjUxLDcyLjQxLDcyLjQxLDAsMCwxLDQsMjQuMzIsMTAwLjQyLDEwMC40MiwwLDAsMS00LjYsMjkuOTFxLTQuNTksMTQuODUtMTIuMzIsMjQuNzV0LTE2LjkyLDkuOUExMS44LDExLjgsMCwwLDEsMjU2LDQ0M3EtMy40OS0yLjc5LTYuNDQtMTAuMTEsNS4xNS00LjMxLDEyLTE1LjI4YTE0NS41NiwxNDUuNTYsMCwwLDAsMTEuOTUtMjQuMzJxNS4xNS0xMy4zMyw1LjE1LTI0LjFjMC02LTEuNi0xMS00Ljc4LTE1LjA3cy04LjQ2LTYtMTUuODItNnEtMTYuNTUsMC0zMy44NCwxNC42M3QtMzMuMSwzOWEzNTYuODEsMzU2LjgxLDAsMCwwLTI4LjcsNTQuNDUsMzc0Ljc5LDM3NC43OSwwLDAsMC0yMC4yMyw2MS4zNCwyNTcuOTQsMjU3Ljk0LDAsMCwwLTcuMzYsNTkuMThxMCwzOS4xNywxNC4zNSw2MS4xMnQzNC45NSwyMnExNC43LDAsMjcuNTgtMTEuNjJ0MjIuNjMtMzAuMzRhMjAwLjgxLDIwMC44MSwwLDAsMCwxNS42My00MC42OCwyMjcuNzksMjI3Ljc5LDAsMCwwLDcuMzYtNDIuNjEsMTY5LjA2LDE2OS4wNiwwLDAsMC0xOS44Ny0zLjY2LDE2Mi44OCwxNjIuODgsMCwwLDAtMTguNzYtMS4wOGMtMy42NywwLTcuNDIuMDgtMTEuMjIuMjJzLTcuOS4yMS0xMi4zMi4yMVExOTgsNTE1Ljk1LDIwNSw1MDkuN3QxNy42Ni02LjI0YTY0LjUzLDY0LjUzLDAsMCwxLDIyLjI1LDQuMDlxMTEuMjIsNC4wOSwyMi40NCw4LjgyYTE1NC41OCwxNTQuNTgsMCwwLDAsMjEuMTUsNy4zMmwtMy4zMSwxMy43N3EtNi42MiwyMi44MS0xMC44NSwzOC43NHQtNi42MiwyNy4zM0ExNjUuNzUsMTY1Ljc1LDAsMCwwLDI2NC42Miw2MjRxLS43NCw5LS43MywxNy42NHQuMzcsMTcuNjVxLjM2LDksLjczLDIwLjY2LTkuMTktMi4xNi0xNC4zNC03LjMyYTI2LjMyLDI2LjMyLDAsMCwxLTctMTIuNDgsNTkuNjcsNTkuNjcsMCwwLDEtMS44NC0xNC42M3EwLTMsLjE4LTZhNDMuNjcsNDMuNjcsMCwwLDEsLjkyLTYuNDUsMTI2LjI2LDEyNi4yNiwwLDAsMS0yOS43OSwzMi40OUE2Mi4xOSw2Mi4xOSwwLDAsMSwxNzQuODcsNjc4LjIxWlxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoLTk1LjM3IC0zMTcuNzQpXFxcIiBmaWxsPVxcXCIjYzY5YzZkXFxcIiBzdHJva2U9XFxcIiNjNjljNmRcXFwiIHN0cm9rZS1taXRlcmxpbWl0PVxcXCIxMFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCI0XFxcIj48L3BhdGg+PHBhdGggbWFzaz1cXFwidXJsKCNNYXNrLWUpXFxcIiBpZD1cXFwiZ2VsYWNjaW8tZVxcXCIgZD1cXFwiTTM0My43MSw2NTkuN3EtMjMuMTgsMC0zNS4zMi0xNC42M3QtMTIuMTMtMzYuNTlxMC0xOS4zNyw4LjI3LTQwLjY3YTE2OC40NSwxNjguNDUsMCwwLDEsMjIuMjYtNDAsMTM3Ljc1LDEzNy43NSwwLDAsMSwzMC43MS0zMC41NnExNi43NC0xMS44NCwzMy4yOS0xMS44NGEzMC42NywzMC42NywwLDAsMSwxNy40Nyw1LjZxOC4yOCw1LjU5LDguMjgsMjIuMzhhNjAuNzcsNjAuNzcsMCwwLDEtOC4yOCwzMC43Nyw5NCw5NCwwLDAsMS0yMS43LDI1LjYxQTEyMi4xOCwxMjIuMTgsMCwwLDEsMzU2Ljc3LDU4OGExMTEuMTMsMTExLjEzLDAsMCwxLTMyLjU2LDguODJjLS4yNSwxLjcyLS40OSwzLjQ0LS43Myw1LjE3YTUwLjIsNTAuMiwwLDAsMC0uMzcsNi44OCw2MS42NSw2MS42NSwwLDAsMCwuOTIsOS4yNiw0Mi41NCw0Mi41NCwwLDAsMCwzLjY4LDExLjYyLDIzLjcyLDIzLjcyLDAsMCwwLDguNjQsOS42OHE1Ljg4LDMuODcsMTUuNDUsMy44NywxNS40NSwwLDMxLjA4LTEwLjMyYTEyOC44NiwxMjguODYsMCwwLDAsMjkuMjUtMjcuMzRBMTcxLjY2LDE3MS42NiwwLDAsMCw0MzQuOTMsNTY4bDYuMjYsNmExNjUuOTIsMTY1LjkyLDAsMCwxLTI1LjM4LDQ1cS0xNS40NSwxOS4xNS0zNCwyOS45MVQzNDMuNzEsNjU5LjdabS0xNi4xOS03Ni4xOHE5LjU3LTIuMTYsMjEuNzEtOC44M2ExMTkuNDYsMTE5LjQ2LDAsMCwwLDIzLjE3LTE2Ljc4LDk3Ljg0LDk3Ljg0LDAsMCwwLDE4LjIxLTIyLjE3LDQ3LjQ2LDQ3LjQ2LDAsMCwwLDcuMTctMjQuNTNjMC0zLjE2LS40OS01LjQ1LTEuNDctNi44OXMtMi43LTIuMTUtNS4xNS0yLjE1cS04Ljg0LDAtMTguMjEsNy41M2ExMTAuNjgsMTEwLjY4LDAsMCwwLTE4LjM5LDE5LjM3LDE1My41MiwxNTMuNTIsMCwwLDAtMTYsMjYuMjVBMTgzLjgxLDE4My44MSwwLDAsMCwzMjcuNTIsNTgzLjUyWlxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoLTk1LjM3IC0zMTcuNzQpXFxcIiBmaWxsPVxcXCIjYzY5YzZkXFxcIiBzdHJva2U9XFxcIiNjNjljNmRcXFwiIHN0cm9rZS1taXRlcmxpbWl0PVxcXCIxMFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCI0XFxcIj48L3BhdGg+PHBhdGggbWFzaz1cXFwidXJsKCNNYXNrLWwpXFxcIiBpZD1cXFwiZ2VsYWNjaW8tbFxcXCIgZD1cXFwiTTQ1Ny43NCw2NTMuNjdxLTE2LjkyLDAtMjMuNzMtMTMuMzR0LTYuOC0zMS44NXEwLTIxLjA4LDYuNjItNDkuNWE1ODkuNzYsNTg5Ljc2LDAsMCwxLDE3LjQ3LTU5LjYxcTEwLjg0LTMxLjIsMjMuOTEtNjEuMTJUNTAxLjMzLDM4NHExMy4wNS0yNC4zMSwyNC4yOC0zOC43NHQxNy44NC0xNC40MnE0LjQxLDAsNy41NCw1LjZBNTEuOTMsNTEuOTMsMCwwLDEsNTU2LDM1MGE2NC41NCw2NC41NCwwLDAsMSwxLjg0LDE0LjQycTAsMTEuNjMtNSwzMC4zNWEzNjYuMjgsMzY2LjI4LDAsMCwxLTE0LDQxLjMyLDQ4Ni40Nyw0ODYuNDcsMCwwLDEtMjEuMzQsNDYsNDM1LjE1LDQzNS4xNSwwLDAsMS0yNyw0NC43NywyMTYuMzEsMjE2LjMxLDAsMCwxLTMxLjY0LDM2LjhxLTEuNDcsMTAuNzUtMi43NiwyMS41MkExNjcsMTY3LDAsMCwwLDQ1NC44LDYwNXEwLDE1LjkzLDQuMjMsMjMuNDZUNDcwLjYxLDYzNnE5LjU3LDAsMTkuMzItMTAuMzNhMTMyLjExLDEzMi4xMSwwLDAsMCwxOC41Ny0yNkEyNjIuNTksMjYyLjU5LDAsMCwwLDUyNCw1NjcuMTZsNy43Myw1LjE3cS0xNS40NSwzNy40NC0zNC4yMSw1OS4zOVQ0NTcuNzQsNjUzLjY3Wm02LjYyLTExMi43NmEyNzkuNjksMjc5LjY5LDAsMCwwLDI0LjI4LTM0LjQ0cTExLjQtMTguOTMsMjEuMTUtMzl0MTcuMS0zOC43NGEzMzAuNzYsMzMwLjc2LDAsMCwwLDExLjQxLTMzLjU3cTQtMTQuODUsNC40MS0yMy40NmE2LjEsNi4xLDAsMCwwLS43My0zcS0zLDAtOS43NSwxMC4xMWEzMDAuNTEsMzAwLjUxLDAsMCwwLTE1LjgyLDI3LjMzcS05LDE3LjIyLTE4LjU4LDM5LjZUNDc5LjQ0LDQ5Mi43UTQ3MC42Miw1MTcuMjMsNDY0LjM2LDU0MC45MVpcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKC05NS4zNyAtMzE3Ljc0KVxcXCIgZmlsbD1cXFwiI2M2OWM2ZFxcXCIgc3Ryb2tlPVxcXCIjYzY5YzZkXFxcIiBzdHJva2UtbWl0ZXJsaW1pdD1cXFwiMTBcXFwiIHN0cm9rZS13aWR0aD1cXFwiNFxcXCI+PC9wYXRoPjxwYXRoIG1hc2s9XFxcInVybCgjTWFzay1hKVxcXCIgaWQ9XFxcImdlbGFjY2lvLWFcXFwiIGQ9XFxcIk01MzUsNjYxcS0xMS43OCwwLTIwLjQxLTkuMjVUNTA1LjkyLDYyNHEwLTE1LjUsNS44OS0zMy4xNUExNzcuMjYsMTc3LjI2LDAsMCwxLDUyOCw1NTZhMTg2LjE5LDE4Ni4xOSwwLDAsMSwyMy41NS0zMS40MiwxMjIsMTIyLDAsMCwxLDI4LjE0LTIyLjgxcTE0LjktOC42MSwyOS42MS04LjYxLDE1LjQ1LDAsMjUuOTMsOS4yNXQxMC40OSwyNC4zMnEwLDExLjYzLTYuMjYsMTYuMzZ0LTE1LjQ1LDNxLjc0LTMuNDQsMS4yOS03LjUzYTU5LjIsNTkuMiwwLDAsMCwuNTUtOCwzNi4zMSwzNi4zMSwwLDAsMC0zLjMxLTE1LjkzcS0zLjMxLTYuODgtMTIuODctNi44OS0xMC4zLDAtMjEsOC4xOGExMDguNDQsMTA4LjQ0LDAsMCwwLTIwLjYsMjEuNTIsMTgyLjIxLDE4Mi4yMSwwLDAsMC0xNy42NiwyOS4yNywxOTQuNDQsMTk0LjQ0LDAsMCwwLTEyLjE0LDMxLjQycS00LjQxLDE1LjUtNC40MSwyNy41NSwwLDE0LjY0LDkuMiwxNC42Myw4LjQ1LDAsMTguNTctOS40N2ExNjMsMTYzLDAsMCwwLDIwLjYtMjQuMXExMC40OS0xNC42MiwyMC0yOS45MXQxNi41NS0yNi45MWMxLTEuNDMsMS44NC0yLjE1LDIuNTgtMi4xNWE1OC4zOCw1OC4zOCwwLDAsMSw1Ljg4LDEuOTQsMjcuNjgsMjcuNjgsMCwwLDEsNy4zNiw0LjA5LDguMjksOC4yOSwwLDAsMSwzLjMxLDYuODlxMCw0LjMxLTMuMzEsMTFsLTcuMzYsMTQuODVxLTQsOC4xOC03LjM1LDE2LjM2YTQyLjI0LDQyLjI0LDAsMCwwLTMuMzIsMTUuOTIsMjMuODIsMjMuODIsMCwwLDAsMi43NiwxMSw5LjM5LDkuMzksMCwwLDAsOSw1LjM4cTkuMTgsMCwyNS4xOS0xNS43MVQ2ODYuMTcsNTY4bDUuODgsNi44OWExNzYuNjgsMTc2LjY4LDAsMCwxLTIwLjc4LDQwLjg5cS0xMi4zMywxNy42Ni0yNS45MywyNy43NnQtMjcuMjIsMTAuMTFxLTE0LjczLDAtMjEuNzEtMTAuNTRhNDUuODUsNDUuODUsMCwwLDEtNy43Mi0yMywyMy44MSwyMy44MSwwLDAsMSwuMTgtMi44LDIzLjY0LDIzLjY0LDAsMCwwLC4xOS0yLjc5UTU3NCw2MzYuNDUsNTYxLjQ3LDY0OC43M1Q1MzUsNjYxWlxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoLTk1LjM3IC0zMTcuNzQpXFxcIiBmaWxsPVxcXCIjYzY5YzZkXFxcIiBzdHJva2U9XFxcIiNjNjljNmRcXFwiIHN0cm9rZS1taXRlcmxpbWl0PVxcXCIxMFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCI0XFxcIj48L3BhdGg+PHBhdGggbWFzaz1cXFwidXJsKCNNYXNrLWMpXFxcIiBpZD1cXFwiZ2VsYWNjaW8tY1xcXCIgZD1cXFwiTTcxOC41NCw2NjQuODdxLTE4Ljc2LDAtMzAuOS0xNHQtMTIuMTQtNDIuNGExMjIuOSwxMjIuOSwwLDAsMSw3LjE3LTQxLjMyLDE0NSwxNDUsMCwwLDEsMTktMzYuNThxMTEuNzYtMTYuMzcsMjYuMTEtMjUuODN0MjkuMDYtOS40N3ExNS40NSwwLDIxLjg5LDkuNDdhMzYuNjgsMzYuNjgsMCwwLDEsNi40NCwyMS4wOSw1NC43NSw1NC43NSwwLDAsMS01LDIzLjI0cS01LDEwLjc3LTEzLjQzLDEwLjc2LTcsMC0xMS40LTcuNzQsNC40MS0zLDguNDYtMTIuMDZhNTAsNTAsMCwwLDAsNC4wNS0yMC42NmMwLTIuODYtLjUtNS0xLjQ3LTYuNDVzLTMtMi4xNS01Ljg5LTIuMTVxLTkuNTcsMC0xOS42OCw5Ljl0LTE4Ljk0LDI1LjYxYTE3Ny42OSwxNzcuNjksMCwwLDAtMTQuMzUsMzIuOTJBMTA2LDEwNiwwLDAsMCw3MDIsNjExLjQ5YTQ3LjY1LDQ3LjY1LDAsMCwwLDUuNTIsMjIuODJxNS41MiwxMC4zMiwyMSwxMC4zMywxNC4zNCwwLDI5LjI0LTkuNDd0MjguMTQtMjYuNjlxMTMuMjQtMTcuMjEsMjEtNDAuODlsNi42Miw2Ljg5YTE2Ny4yOCwxNjcuMjgsMCwwLDEtMjQuMDksNDYuMjdRNzc0LjA4LDY0MS4xOSw3NTUuNSw2NTNUNzE4LjU0LDY2NC44N1pcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKC05NS4zNyAtMzE3Ljc0KVxcXCIgZmlsbD1cXFwiI2M2OWM2ZFxcXCIgc3Ryb2tlPVxcXCIjYzY5YzZkXFxcIiBzdHJva2UtbWl0ZXJsaW1pdD1cXFwiMTBcXFwiIHN0cm9rZS13aWR0aD1cXFwiNFxcXCI+PC9wYXRoPjxwYXRoIG1hc2s9XFxcInVybCgjTWFzay1jYylcXFwiIGlkPVxcXCJnZWxhY2Npby1jY1xcXCIgZD1cXFwiTTgzOS45Miw2NjQuODdxLTE4Ljc2LDAtMzAuOS0xNHQtMTIuMTQtNDIuNGExMjIuNjYsMTIyLjY2LDAsMCwxLDcuMTgtNDEuMzJBMTQ1LjI2LDE0NS4yNiwwLDAsMSw4MjMsNTMwLjU4cTExLjc4LTE2LjM3LDI2LjEyLTI1LjgzdDI5LjA2LTkuNDdxMTUuNDUsMCwyMS44OCw5LjQ3YTM2LjY4LDM2LjY4LDAsMCwxLDYuNDQsMjEuMDksNTQuNzQsNTQuNzQsMCwwLDEtNSwyMy4yNHEtNSwxMC43Ny0xMy40MywxMC43Ni03LDAtMTEuNC03Ljc0LDQuNDEtMyw4LjQ2LTEyLjA2YTUwLjE3LDUwLjE3LDAsMCwwLDQtMjAuNjZxMC00LjI5LTEuNDctNi40NXQtNS44OC0yLjE1cS05LjU3LDAtMTkuNjgsOS45dC0xOC45NSwyNS42MWExNzcuNjUsMTc3LjY1LDAsMCwwLTE0LjM0LDMyLjkyLDEwNiwxMDYsMCwwLDAtNS41MiwzMi4yOCw0Ny42NSw0Ny42NSwwLDAsMCw1LjUyLDIyLjgycTUuNSwxMC4zMiwyMSwxMC4zMywxNC4zNSwwLDI5LjI1LTkuNDd0MjguMTQtMjYuNjlxMTMuMjUtMTcuMjEsMjEtNDAuODlsNi42Myw2Ljg5YTE2Ny4zMSwxNjcuMzEsMCwwLDEtMjQuMSw0Ni4yN1E4OTUuNDYsNjQxLjE5LDg3Ni44OSw2NTNUODM5LjkyLDY2NC44N1pcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKC05NS4zNyAtMzE3Ljc0KVxcXCIgZmlsbD1cXFwiI2M2OWM2ZFxcXCIgc3Ryb2tlPVxcXCIjYzY5YzZkXFxcIiBzdHJva2UtbWl0ZXJsaW1pdD1cXFwiMTBcXFwiIHN0cm9rZS13aWR0aD1cXFwiNFxcXCI+PC9wYXRoPjxwYXRoIG1hc2s9XFxcInVybCgjTWFzay1pKVxcXCIgaWQ9XFxcImdlbGFjY2lvLWlcXFwiIGQ9XFxcIk05NDguOCw2NTMuMjVxLTE1LjQ1LDAtMjMuMTgtMTF0LTcuNzItMjYuOXEwLTkuOSwyLjk0LTI1YTI3NS43NSwyNzUuNzUsMCwwLDEsOC4yOC0zMS42MywyNDkuMzgsMjQ5LjM4LDAsMCwxLDEyLjMyLTMxLjIxcTctMTQuNjIsMTQuOS0yMy44OVQ5NzIsNDk0LjQyYTEwLjEsMTAuMSwwLDAsMSw3LjE4LDNjMi4wOCwyLDMuMTIsNC44OSwzLjEyLDguNjFzLTEuOSw5LjMzLTUuNywxNi43OS04LjI4LDE2LjE0LTEzLjQzLDI2YTI0Ny4yLDI0Ny4yLDAsMCwwLTEzLjQyLDMwLjc3QTkwLjM4LDkwLjM4LDAsMCwwLDk0NCw2MTAuMnEwLDE0LjIsNC40MSwxOC45NHQxMi44Nyw0Ljc0cTEyLjUxLDAsMjctMTQuNjRUMTAxOC42OSw1NjhsNC43OCw2cS0xMi4xMywzNy44OC0zMi4xOSw1OC41M1Q5NDguOCw2NTMuMjVabTQzLjc3LTE5NS40MmExOS44NSwxOS44NSwwLDAsMS0xMi0zLjg3cS01LjM0LTMuODctNS4zNC0xMS42MiwwLTEwLjMzLDkuMzgtMTcuNDN0MTkuMzEtNy4xYTE1LjM3LDE1LjM3LDAsMCwxLDEwLjMsMy40NHE0LjA1LDMuNDUsNC4wNSwxMS42MiwwLDktOC4wOSwxN1Q5OTIuNTcsNDU3LjgzWlxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoLTk1LjM3IC0zMTcuNzQpXFxcIiBmaWxsPVxcXCIjYzY5YzZkXFxcIiBzdHJva2U9XFxcIiNjNjljNmRcXFwiIHN0cm9rZS1taXRlcmxpbWl0PVxcXCIxMFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCI0XFxcIj48L3BhdGg+PHBhdGggbWFzaz1cXFwidXJsKCNNYXNrLW8pXFxcIiBpZD1cXFwiZ2VsYWNjaW8tb1xcXCIgZD1cXFwiTTEwMzQuNSw2NTQuNTRxLTE2LjE4LDAtMjIuNDMtMTIuMjdhNjAuMjQsNjAuMjQsMCwwLDEtNi4yNi0yNy43NiwxMTEuNDQsMTExLjQ0LDAsMCwxLDMuNjgtMjgsMTM0Ljg3LDEzNC44NywwLDAsMSw5LjkzLTI2LjY5LDc3LjgxLDc3LjgxLDAsMCwxLDE0LTIwLjIzcTcuNzItNy43NCwxNS44Mi03Ljc0YTE3LDE3LDAsMCwxLDUuMzMsMS4wNywxMC40NiwxMC40NiwwLDAsMSw0LjYsMi44LDgyLjkzLDgyLjkzLDAsMCwwLTguNjQsMTQuNjQsMTkyLjM0LDE5Mi4zNCwwLDAsMC04LjQ2LDIwLjQ0LDE4Mi41OCwxODIuNTgsMCwwLDAtNi4yNiwyMS45NSw5NC4zNiw5NC4zNiwwLDAsMC0yLjM5LDIwcTAsOS45LDIuOTQsMTUuNDl0OS41Nyw1LjZxNy4zNSwwLDE3LjQ3LTkuMjZBMTMxLjc2LDEzMS43NiwwLDAsMCwxMDgyLjY5LDYwMiw3MS42OCw3MS42OCwwLDAsMSwxMDY2LDU3NS4xMnEtNS4zNC0xNS4yNy01LjM0LTM0LjY1YTcxLjc3LDcxLjc3LDAsMCwxLDQuMDUtMjIuODEsNDkuNTMsNDkuNTMsMCwwLDEsMTIuNS0yMC4yM3E4LjQ2LTguMTYsMjIuMDgtOC4xOCwxNS40NSwwLDIxLjUxLDEwLjEydDYuMDcsMjQuMzJxMCwxNS45My03LjE3LDM1Ljk0YTI2My43LDI2My43LDAsMCwxLTE3LjEsMzguMDksMjAsMjAsMCwwLDAsMTEuNCwzLjQ0cTUuNTIsMCwxMy4yNC0zQTQ0LjE2LDQ0LjE2LDAsMCwwLDExNDIuMSw1ODhxNy4xNy03LjExLDExLjU5LTE4LjczbDUuODgsNS4xN3EtNy43MiwyMS4wOS0yMS4xNSwzMC43N3QtMjUuOTMsOS42OWE0My4zNSw0My4zNSwwLDAsMS05LjU3LTEuMDgsMzQuNDUsMzQuNDUsMCwwLDEtOC44Mi0zLjIzLDE1MS43NSwxNTEuNzUsMCwwLDEtMjguMTQsMzFRMTA1MC4zMiw2NTQuNTQsMTAzNC41LDY1NC41NFptNTYuNjUtNjUuNDNhMTY4LjYzLDE2OC42MywwLDAsMCwxNS4yNy0zMi40OXE2LjA3LTE3LjQ1LDYuMDctMzIuMDcsMC0xMC43NS0yLjc2LTE1LjcxdC03LjU0LTQuOTVxLTcuMzcsMC0xNC43MiwxMS44NHQtNy4zNSwyOS45MWExMDkuMjksMTA5LjI5LDAsMCwwLDIuNzYsMjNRMTA4NS42NCw1ODEuMzYsMTA5MS4xNSw1ODkuMTFaXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgtOTUuMzcgLTMxNy43NClcXFwiIGZpbGw9XFxcIiNjNjljNmRcXFwiIHN0cm9rZT1cXFwiI2M2OWM2ZFxcXCIgc3Ryb2tlLW1pdGVybGltaXQ9XFxcIjEwXFxcIiBzdHJva2Utd2lkdGg9XFxcIjRcXFwiPjwvcGF0aD48L2c+PGRlZnM+PGcgaWQ9XFxcImdlbGFjY2lvLW1hc2tzXFxcIj48cG9seWxpbmUgaWQ9XFxcIk1hc2stZ2VsYWNjaW8tdW5kZXJsaW5lXFxcIiBwb2ludHM9XFxcIjE3NC45NCA0MTMuOTMgMjY3LjI4IDM4OS4wNiAzNzIuMyAzODEuMjYgNDYwLjg3IDM3NS45MyA1NTIuOTcgMzc1LjkzIDYyNC4zIDM3NS45MyA3MDMuNjMgMzc1LjkzIDc3MC40OSAzNzUuOTMgODcwLjk3IDM4MS4yNiA5NDcuODIgMzgzLjQ0IDk5NC4zIDM4Ny43OFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlPVxcXCIjMDAwXFxcIiBzdHJva2UtbWl0ZXJsaW1pdD1cXFwiMTBcXFwiIHN0cm9rZS13aWR0aD1cXFwiMzRcXFwiPjwvcG9seWxpbmU+PGcgaWQ9XFxcIk1hc2stZ2VsYWNjaW8tR1xcXCI+PG1hc2sgaWQ9XFxcIk1hc2stR1xcXCI+PHBhdGggY2xhc3M9XFxcIm1hc2tcXFwiIGlkPVxcXCJNYXNrLWdlbGFjY2lvLUdzdWJcXFwiIGQ9XFxcIk0xOTMuNjcsNTE1LjY3bDcyLjY2LDguNjYsMTAsNFMyNjMsNTU3LjgxLDI1OSw1ODAuMDdzLTExLjc4LDYyLjY4LTcuMzMsNzkuNjNMMjY1LDY3OS45M1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlPVxcXCIjMDAwXFxcIiBzdHJva2UtbWl0ZXJsaW1pdD1cXFwiMTBcXFwiIHN0cm9rZS13aWR0aD1cXFwiMzRcXFwiPjwvcGF0aD48cGF0aCBjbGFzcz1cXFwibWFza1xcXCIgaWQ9XFxcIk1hc2stZ2VsYWNjaW8tR21haW5cXFwiIGQ9XFxcIk0yNDcsNDQwLjRjMTIuNDYtNS44NywzMi40NC0xMi44NSwzNi0zNy40LDQuNDQtMzAuNjcsNS44OC0yOS43NSwxLjg4LTQwLjE1UzI3OSwzNDEsMjY1LDMzOC4zM3MtMzMuMzMsNC00My4zMywxMlMxOTQuMzMsMzczLDE4NSwzODMuNjdzLTE0LjY3LDE2LjI3LTI0LDM0LjE0YTI2MC44NSwyNjAuODUsMCwwLDAtMTgsNDMuODZjLTMuMzMsMTAuNjYtOS41NSwyMi4xLTE2LjY3LDQ3LjMzLTcuMzMsMjYtMTYsNTYuMjEtNy4zNCwxMDAuNjcsNi41NiwzMy42NiwzOS4zNCw1NS4yLDM5LjM0LDU1LjJzMzYuNjcsNy41Myw1MC01LjE3LDI4LTI3LjM3LDMwLjY3LTQyLjdsMi42OC0xNS4zM1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlPVxcXCIjMDAwXFxcIiBzdHJva2UtbWl0ZXJsaW1pdD1cXFwiMTBcXFwiIHN0cm9rZS13aWR0aD1cXFwiNDBcXFwiPjwvcGF0aD48L21hc2s+PC9nPjxtYXNrIGlkPVxcXCJNYXNrLWVcXFwiPjxwYXRoIGNsYXNzPVxcXCJtYXNrXFxcIiBpZD1cXFwiTWFzay1nZWxhY2Npby1lXFxcIiBkPVxcXCJNMzIzLDU4OS4xMWwyOC42Ny05czMwLjg5LTE3Ljc0LDQ2LjExLTQxLjc0LDIxLjE1LTMwLjcsMTEuMjItMzYuMTZjLTE4LTkuOS00OS4zMywxLjIxLTQ5LjMzLDEuMjFMMzM5LDUyNy42N3MtMTkuMzQsMzIuMjItMjQsNDkuMzljLTQuODEsMTcuNzMtNi42Nyw0My4yNywyLjY3LDU2LjYxczI2LDIzLjE1LDM4LDE5LjU4LDMyLTE2LjI1LDQ2LjY2LTMwLjI1LDI0Ljg4LTMxLjMzLDI0Ljg4LTMxLjMzTDQzNC45Myw1NjhcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiIzAwMFxcXCIgc3Ryb2tlLW1pdGVybGltaXQ9XFxcIjEwXFxcIiBzdHJva2Utd2lkdGg9XFxcIjM0XFxcIj48L3BhdGg+PC9tYXNrPjxtYXNrIGlkPVxcXCJNYXNrLWxcXFwiPjxwYXRoIGNsYXNzPVxcXCJtYXNrXFxcIiBpZD1cXFwiTWFzay1nZWxhY2Npby1sXFxcIiBkPVxcXCJNNDcxLDU1NS42Nyw0OTIuNSw1MTIsNTE5LDQ2MS42N2wxOC42Ny00MFM1NzEsMzUxLDU0OC4zMywzNDAuNDJjLTE2LjM5LTcuNjItNDQuNzksNjMuMjUtNTEuOTIsODAuNDVMNDc5LDQ2M2wtMTQuNjQsMzkuMTctMTIuNjksNDkuNVM0NDEuMTksNTk3LDQ0MS4xOSw2MTIuMzNzMTguNTMsMzQuNjcsMjMuMTcsMzMuMzQsMjUuNDktMTguNjYsMzEuMzEtMjYuNjIsMTgtMjMuMDgsMTgtMjMuMDhsOC44OS0xNS45TDUyOC4zMyw1NjNcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiIzAwMFxcXCIgc3Ryb2tlLW1pdGVybGltaXQ9XFxcIjEwXFxcIiBzdHJva2Utd2lkdGg9XFxcIjM0XFxcIj48L3BhdGg+PC9tYXNrPjxtYXNrIGlkPVxcXCJNYXNrLWFcXFwiPjxwYXRoIGNsYXNzPVxcXCJtYXNrXFxcIiBpZD1cXFwiTWFzay1nZWxhY2Npby1hXFxcIiBkPVxcXCJNNjI5LDU0Ni4zM3MxNy43Ny0yOS4yNS02LTQwLjcyUzU3OS42Nyw1MTIsNTc5LjY3LDUxMkw1NTEsNTQ2LjVsLTEzLjgxLDI2TDUyMyw2MTVzLTguNjcsMjAuMTMsMCwzMC43M1M1NTYuMjQsNjQzLDU1Ni4yNCw2NDNsMzMuNDMtMzZMNjEzLDU3Ny4wNmwxNC4zMS0yNy4zMywzLjczLDEuNzFzLTI5LjM3LDY4Ljg5LTI0LjcxLDc4Ljg5LDEwLDE2LDIwLDEyYTk3LjA5LDk3LjA5LDAsMCwwLDM0LTIzLjMzQzY3MS42Nyw2MDcsNjgzLDU4MC4wNyw2ODMsNTgwLjA3TDY4Ni4xNyw1NjhcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiIzAwMFxcXCIgc3Ryb2tlLW1pdGVybGltaXQ9XFxcIjEwXFxcIiBzdHJva2Utd2lkdGg9XFxcIjM0XFxcIj48L3BhdGg+PC9tYXNrPjxtYXNrIGlkPVxcXCJNYXNrLWNcXFwiPjxwYXRoIGNsYXNzPVxcXCJtYXNrXFxcIiBpZD1cXFwiTWFzay1nZWxhY2Npby1jXFxcIiBkPVxcXCJNNzU4LjMzLDU2MS42N2M4Ljc1LTEwLjgsMTIuMi0xNi4xNiwxMy40Mi0xOC4yNWE4LjM3LDguMzcsMCwwLDAsLjg2LTIuMWMxLjEyLTQuMTgsNC45Mi0yMC4zNy0uMjgtMjkuMzItNi0xMC4zMy0zMi02LjM5LTMyLTYuMzlTNzE3LjY3LDUyMyw3MTAuMzMsNTM3LDY5Nyw1NzIuNTQsNjk3LDU3Mi41NHMtOS42NiwzMS43OS0xMC44Myw0NC40NiwxNi4xNiwyOC43MywxNi4xNiwyOC43M1M3MTYuMTEsNjYzLDczMC41Niw2NTdzMzEuMTEtMTgsMzEuMTEtMThsMjYtMjQuNjdMODAzLDU5M3MzLjgyLTEzLjg5LDMuODItMTkuMTdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiIzAwMFxcXCIgc3Ryb2tlLW1pdGVybGltaXQ9XFxcIjEwXFxcIiBzdHJva2Utd2lkdGg9XFxcIjM0XFxcIj48L3BhdGg+PC9tYXNrPjxtYXNrIGlkPVxcXCJNYXNrLWNjXFxcIj48cGF0aCBjbGFzcz1cXFwibWFza1xcXCIgaWQ9XFxcIk1hc2stZ2VsYWNjaW8tY2NcXFwiIGQ9XFxcIk04NzMsNTU4LjE3bDIwLTE3LjMzczYtMjAsMC0zMC4zNC0zMi02LjM4LTMyLTYuMzgtMjIuNjcsMTcuMzgtMzAsMzEuMzgtMTMuMzMsMzUuNTUtMTMuMzMsMzUuNTUtNC4yNywzMS4yMy00LjI3LDQ0YzAsMjAsOS42LDI5LjI0LDkuNiwyOS4yNHMxMy43OCwxNy4yNiwyOC4yMiwxMS4yNiwzMS4xMS0xOCwzMS4xMS0xOGwyNi0yNC42Nkw5MjEsNTg2LjE3bDYuNDktMjAuMDdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiIzAwMFxcXCIgc3Ryb2tlLW1pdGVybGltaXQ9XFxcIjEwXFxcIiBzdHJva2Utd2lkdGg9XFxcIjM0XFxcIj48L3BhdGg+PC9tYXNrPjxnIGlkPVxcXCJNYXNrLWdlbGFjY2lvLWlcXFwiPjxtYXNrIGlkPVxcXCJNYXNrLWlcXFwiPjxwYXRoIGNsYXNzPVxcXCJtYXNrXFxcIiBpZD1cXFwiTWFzay1nZWxhY2Npby1pc3ViXFxcIiBkPVxcXCJNOTkzLDQ1NC44MnMyOC0xNS4xNSwyMC0yMy4xNS0xOS4zMy02LTIyLjY3LTMuMzQtNy4zMywyMC03LjMzLDIwbDMuMzMsNi40OVpcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZT1cXFwiIzAwMFxcXCIgc3Ryb2tlLW1pdGVybGltaXQ9XFxcIjEwXFxcIiBzdHJva2Utd2lkdGg9XFxcIjM0XFxcIj48L3BhdGg+PHBhdGggY2xhc3M9XFxcIm1hc2tcXFwiIGlkPVxcXCJNYXNrLWdlbGFjY2lvLWltYWluXFxcIiBkPVxcXCJNOTc1LjI4LDQ5Mi4yNyw5NTkuNjcsNTIzcy0xMS4zNCwyNC42Ny0xMy4zNCwzMi42N1M5MzEuNjcsNTk1LDkzMC4zMyw2MTEsOTQzLDYzOS42Nyw5NDMsNjM5LjY3czIxLjMzLDIuNjYsMzUuMzMtNi42NywyOC40OC0zMi44OSwyOC40OC0zMi44OWwxNi42Ni0yNi4wNnYtNy45MVxcXCIgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlPVxcXCIjMDAwXFxcIiBzdHJva2UtbWl0ZXJsaW1pdD1cXFwiMTBcXFwiIHN0cm9rZS13aWR0aD1cXFwiMzRcXFwiPjwvcGF0aD48L21hc2s+PC9nPjxtYXNrIGlkPVxcXCJNYXNrLW9cXFwiPjxwYXRoIGNsYXNzPVxcXCJtYXNrXFxcIiBpZD1cXFwiTWFzay1nZWxhY2Npby1vXFxcIiBkPVxcXCJNMTA1Ni4zMyw1MjguMzNzLTE5LjMzLDItMjYsMzEuMzRTMTAxMy42Nyw2MzksMTAyNyw2NDBzMjYsMyw0MC0xMSwzNC42Ny00NC40NywzNC42Ny00NC40N2wxNS4zMy0zOHMxMC0zOC43NSwwLTQzLjEyLTI2LjYxLTEyLTM0LjMxLDEuNDktMTEuNzUsMzYtMTEuNzUsMzYtLjM3LDM4LjA5LDkuMTgsNDUuNDIsMjcuMjMsMTkuMTEsNDEuMzIsMjAsMzguMTMtMzEuODUsMzguMTMtMzEuODVsNS40My04LjM0XFxcIiBmaWxsPVxcXCJub25lXFxcIiBzdHJva2U9XFxcIiMwMDBcXFwiIHN0cm9rZS1taXRlcmxpbWl0PVxcXCIxMFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIzNFxcXCI+PC9wYXRoPjwvbWFzaz48L2c+PC9kZWZzPjwvc3ZnPlwiIiwiZXhwb3J0IHtkZWxheX07XG5cbmNvbnN0IGRlbGF5ID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0LW1vZGFsLXR3bycpLmNsYXNzTGlzdC5hZGQoJ2Ryb3BwaW5nJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1tb2RhbCcpLmNsYXNzTGlzdC5hZGQoJ2V4dGVuZGluZycpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tb25lJykuY2xhc3NMaXN0LmFkZCgnZXh0T25lJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi10d28nKS5jbGFzc0xpc3QuYWRkKCdleHRUd28nKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLXRocmVlJykuY2xhc3NMaXN0LmFkZCgnZXh0VGhyZWUnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFsbFR3bycpLmNsYXNzTGlzdC5hZGQoJ3JldmVhbGluZycpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpLmZvckVhY2goYSA9PiBhLmNsYXNzTGlzdC5hZGQoJ3JldmVhbGluZycpKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhJykuZm9yRWFjaChhID0+IGEuY2xhc3NMaXN0LmFkZCgncmV2ZWFsaW5nJykpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpLmZvckVhY2goYSA9PiBhLmNsYXNzTGlzdC5hZGQoJ3JldmVhbGluZycpKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGV4dC1jb250YWluZXInKS5jbGFzc0xpc3QuYWRkKCdmYWRlJyk7XG59OyIsImNvbnN0IGFwcGVuZGluZ0NvbnRhY3QgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWN0Q29udGFpbmVyJylcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdjb250YWN0SGVhZGVyJyk7XG4gICAgY29uc3QgcmV0dXJuQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmV0dXJuQnRuLmNsYXNzTGlzdCA9ICdyZXR1cm5NYWluJztcbiAgICByZXR1cm5CdG4udGV4dENvbnRlbnQgPSBcIlJFVFVSTlwiO1xuICAgIGNvbnN0IGNvbnRhY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29udGFjdFRpdGxlLnRleHRDb250ZW50ID0gXCJDb250YWN0cyB1c1wiO1xuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtZW51QnRuLmNsYXNzTGlzdCA9IFwibWVudUJ0blwiO1xuICAgIG1lbnVCdG4udGV4dENvbnRlbnQgPSBcIk1FTlVcIjtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQocmV0dXJuQnRuKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY29udGFjdFRpdGxlKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG5cblxuICAgIGNvbnN0IGNvbnRhY3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdEluZm8uY2xhc3NMaXN0LmFkZCgnY29udGFjdEluZm8nKTtcbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0Q29udGFpbmVyKTtcblxuXG59O1xuXG5cbmV4cG9ydCB7YXBwZW5kaW5nQ29udGFjdH07IiwiZXhwb3J0IHtlbXB0eUNvbnRlbnR9O1xuXG5sZXQgZW1wdHlDb250ZW50ID0gKHBhcmVudCkgPT4ge1xuICAgICAgICB3aGlsZSAocGFyZW50Lmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50Lmxhc3RFbGVtZW50Q2hpbGQpO1xuICAgICAgICB9O1xuICAgIH07IiwiaW1wb3J0IGdlbHN2ZyBmcm9tICcuL2dlbHN2Zy5zdmcnO1xuXG5jb25zdCBhcHBlbmRpbmdNYWluID0gKCkgPT4ge1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuY29uc3QgaWNlQmFsbFR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuaWNlQmFsbFR3by5jbGFzc0xpc3QuYWRkKCdiYWxsVHdvJyk7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQoaWNlQmFsbFR3byk7XG5jb25zdCBpY2VDcmVhbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuaWNlQ3JlYW0uY2xhc3NMaXN0LmFkZCgndGV4dC1jb250YWluZXInKTtcbmNvbnN0IGZpcnN0TGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZmlyc3RMaW5lLmNsYXNzTGlzdC5hZGQoJ3RleHRPbmUnKTtcbmZpcnN0TGluZS50ZXh0Q29udGVudCA9IFwiSWNlIENyZWFtXCI7XG5pY2VDcmVhbS5hcHBlbmRDaGlsZChmaXJzdExpbmUpO1xuY29uc3Qgc2Vjb25kTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuc2Vjb25kTGluZS50ZXh0Q29udGVudCA9IFwiVGltZVwiO1xuc2Vjb25kTGluZS5jbGFzc0xpc3QuYWRkKCd0ZXh0VHdvJyk7XG5pY2VDcmVhbS5hcHBlbmRDaGlsZChzZWNvbmRMaW5lKVxuY29udGFpbmVyLmFwcGVuZENoaWxkKGljZUNyZWFtKTtcblxuY29uc3QgaW1hZ2VXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5pbWFnZVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaW1hZ2UtY29udGFpbmVyJyk7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2VXcmFwcGVyKTtcblxuXG5jb25zdCBsZWZ0QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5sZWZ0QmFyLmNsYXNzTGlzdC5hZGQoJ2xlZnQtc2lkZS1iYXInKTtcbmNvbnN0IGxlZnRNb2RhbEZpcnN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbmxlZnRNb2RhbEZpcnN0LmNsYXNzTGlzdC5hZGQoJ2xlZnQtbW9kYWwtb25lJyk7XG5jb25zdCBsZWZ0TW9kYWxTZWNvbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmxlZnRNb2RhbFNlY29uZC5jbGFzc0xpc3QuYWRkKCdsZWZ0LW1vZGFsLXR3bycpO1xubGVmdEJhci5hcHBlbmRDaGlsZChsZWZ0TW9kYWxGaXJzdCk7XG5sZWZ0QmFyLmFwcGVuZENoaWxkKGxlZnRNb2RhbFNlY29uZCk7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQobGVmdEJhcik7XG5cbmNvbnN0IGhhbmR3cml0dGVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5oYW5kd3JpdHRlbi5jbGFzc0xpc3QuYWRkKCdoYW5kd3JpdHRlbicpO1xuZnVuY3Rpb24gY29tcG9uZW50KCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGdlbHN2ZztcbiAgICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmhhbmR3cml0dGVuLmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChoYW5kd3JpdHRlbik7XG5cbmNvbnN0IGJ1dHRvbk1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5idXR0b25Nb2RhbC5jbGFzc0xpc3QuYWRkKCdidXR0b24tbW9kYWwnKTtcbmNvbnN0IGJ0bk9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuYnRuT25lLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1vbmUnKTtcbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbm1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnbWVudUJ0bicpO1xubWVudUJ0bi50ZXh0Q29udGVudCA9IFwiTUVOVVwiXG5idG5PbmUuYXBwZW5kQ2hpbGQobWVudUJ0bik7IFxuY29uc3QgYnRuVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5idG5Ud28uY2xhc3NMaXN0LmFkZCgnYnV0dG9uLXR3bycpO1xuY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuY29udGFjdEJ0bi5jbGFzc0xpc3QuYWRkKCdjb250YWN0QnRuJylcbmNvbnRhY3RCdG4udGV4dENvbnRlbnQgPSBcIkNPTlRBQ1RcIjtcbmJ0blR3by5hcHBlbmRDaGlsZChjb250YWN0QnRuKTsgXG5jb25zdCBidG5UaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuYnRuVGhyZWUuY2xhc3NMaXN0LmFkZCgnYnV0dG9uLXRocmVlJyk7XG5idXR0b25Nb2RhbC5hcHBlbmRDaGlsZChidG5PbmUpO1xuYnV0dG9uTW9kYWwuYXBwZW5kQ2hpbGQoYnRuVHdvKTtcbmJ1dHRvbk1vZGFsLmFwcGVuZENoaWxkKGJ0blRocmVlKTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25Nb2RhbCk7XG5cbn1cblxuXG5leHBvcnQge2FwcGVuZGluZ01haW59O1xuIiwiaW1wb3J0IElDb25lIGZyb20gJy4vYXNzZXRzL0lDb25lLnN2Zyc7XG5pbXBvcnQgSUN0d28gZnJvbSAnLi9hc3NldHMvSUN0d28uc3ZnJztcbmltcG9ydCBJQ3RocmVlIGZyb20gJy4vYXNzZXRzL0lDdGhyZWUuc3ZnJztcbmltcG9ydCBJQ2ZvdXIgZnJvbSAnLi9hc3NldHMvSUNmb3VyLnN2Zyc7XG5pbXBvcnQgSUNmaXZlIGZyb20gJy4vYXNzZXRzL0lDZml2ZS5zdmcnO1xuaW1wb3J0IElDc2l4IGZyb20gJy4vYXNzZXRzL0lDc2l4LnN2Zyc7XG5pbXBvcnQgSUNzZXZlbiBmcm9tICcuL2Fzc2V0cy9JQ3NldmVuLnN2Zyc7XG5pbXBvcnQgSUNlaWdodCBmcm9tICcuL2Fzc2V0cy9JQ2VpZ2h0LnN2Zyc7XG5cbmxldCBwb3B1bGF0ZU1lbnUgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpOyBcbiAgICBjb25zdCBtZW51Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVDb250ZW50LmNsYXNzTGlzdC5hZGQoJ21lbnVDb250ZW50Jyk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21lbnVIZWFkZXInKVxuICAgIGNvbnN0IHJldHVybkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHJldHVybkJ0bi5jbGFzc0xpc3QgPSAncmV0dXJuTWFpbic7XG4gICAgcmV0dXJuQnRuLnRleHRDb250ZW50ID0gXCJSRVRVUk5cIjtcbiAgICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIG1lbnVUaXRsZS50ZXh0Q29udGVudCA9IFwiQ2hvb3NlIFlvdXIgRmxhdm9yIVwiO1xuICAgIGNvbnN0IGNvbnRyYWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29udHJhY3RCdG4uY2xhc3NMaXN0ID0gXCJjb250YWN0QnRuXCJcbiAgICBjb250cmFjdEJ0bi50ZXh0Q29udGVudCA9IFwiQ09OVFJBQ1RcIlxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChyZXR1cm5CdG4pO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChtZW51VGl0bGUpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjb250cmFjdEJ0bik7XG4gICAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuXG4gICAgZnVuY3Rpb24gaWNlQ3JlYW1TdmdDcmVhdG9yKHBhdGgpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHBhdGhcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICB9O1xuXG4gICAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoaWNlQ3JlYW1TdmdDcmVhdG9yKElDb25lKSk7XG4gICAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoaWNlQ3JlYW1TdmdDcmVhdG9yKElDdHdvKSk7XG4gICAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoaWNlQ3JlYW1TdmdDcmVhdG9yKElDdGhyZWUpKTtcbiAgICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChpY2VDcmVhbVN2Z0NyZWF0b3IoSUNmb3VyKSk7XG4gICAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoaWNlQ3JlYW1TdmdDcmVhdG9yKElDZml2ZSkpO1xuICAgIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKGljZUNyZWFtU3ZnQ3JlYXRvcihJQ3NpeCkpO1xuICAgIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKGljZUNyZWFtU3ZnQ3JlYXRvcihJQ3NldmVuKSk7XG4gICAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoaWNlQ3JlYW1TdmdDcmVhdG9yKElDZWlnaHQpKTsgICBcblxuXG4gICAgY29uc3QgSWNlQ3JlYW1CYWxsT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgSWNlQ3JlYW1CYWxsT25lLmNsYXNzTGlzdC5hZGQoJ2RlY29yQmFsbE9uZScpO1xuICAgIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKEljZUNyZWFtQmFsbE9uZSlcblxuICAgIGNvbnN0IEljZUNyZWFtQmFsbFR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIEljZUNyZWFtQmFsbFR3by5jbGFzc0xpc3QuYWRkKCdkZWNvckJhbGxUd28nKTtcbiAgICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChJY2VDcmVhbUJhbGxUd28pXG5cbiAgICBjb25zdCBJY2VDcmVhbUJhbGxUaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIEljZUNyZWFtQmFsbFRocmVlLmNsYXNzTGlzdC5hZGQoJ2RlY29yQmFsbFRocmVlJyk7XG4gICAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoSWNlQ3JlYW1CYWxsVGhyZWUpXG5cbiAgICBjb25zdCBJY2VDcmVhbUJhbGxGb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgSWNlQ3JlYW1CYWxsRm91ci5jbGFzc0xpc3QuYWRkKCdkZWNvckJhbGxGb3VyJyk7XG4gICAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoSWNlQ3JlYW1CYWxsRm91cilcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51Q29udGVudCk7IFxufVxuXG5leHBvcnQge3BvcHVsYXRlTWVudX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgeyBhcHBlbmRpbmdNYWluIH0gZnJvbSAnLi9tYWluLXBhZ2UtbG9hZCc7XG5pbXBvcnQge2RlbGF5fSBmcm9tICcuL2FuaW1hdGlvbi1tYWluJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtlbXB0eUNvbnRlbnR9IGZyb20gJy4vZW1wdHktY29udGVudCc7XG5pbXBvcnQge3BvcHVsYXRlTWVudX0gZnJvbSAnLi9tZW51LXBhZ2UtbG9hZCc7XG5pbXBvcnQge2FwcGVuZGluZ0NvbnRhY3R9IGZyb20gJy4vY29udGFudC1wYWdlLWxvYWQnO1xuXG5cbmNvbnN0IGV2ZW50SGFuZGxlciA9ICgoKSA9PiB7XG5cbiAgICBhcHBlbmRpbmdNYWluKCk7XG5cbiAgICBzZXRUaW1lb3V0KGRlbGF5LCA0ODAwKTtcbiAgICBcbiAgICBcblxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gICAgbGV0IGNyZWF0ZU1lbnUgPSAoKSA9PiB7XG4gICAgICAgIGVtcHR5Q29udGVudChjb250YWluZXIpO1xuICAgICAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICBwb3B1bGF0ZU1lbnUoKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJldHVybk1haW4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZXZlbnRIYW5kbGVyLmNyZWF0ZU1haW4pO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdEJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxldmVudEhhbmRsZXIuY3JlYXRlQ29udGFjdCk7XG4gICAgfTtcblxuICAgIGxldCBjcmVhdGVNYWluID0gKCkgPT4ge1xuICAgICAgICBlbXB0eUNvbnRlbnQoY29udGFpbmVyKTtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbiAgICAgICAgYXBwZW5kaW5nTWFpbigpO1xuICAgICAgICBzZXRUaW1lb3V0KGRlbGF5LCA0ODAwKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVCdG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZXZlbnRIYW5kbGVyLmNyZWF0ZU1lbnUpOyBcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3RCdG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZXZlbnRIYW5kbGVyLmNyZWF0ZUNvbnRhY3QpO1xuICAgIH07XG5cbiAgICBsZXQgY3JlYXRlQ29udGFjdCA9ICgpID0+IHtcbiAgICAgICAgZW1wdHlDb250ZW50KGNvbnRhaW5lcik7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIGFwcGVuZGluZ0NvbnRhY3QoKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJldHVybk1haW4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZXZlbnRIYW5kbGVyLmNyZWF0ZU1haW4pO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudUJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxldmVudEhhbmRsZXIuY3JlYXRlTWVudSk7IFxuICAgIH1cblxuICAgIFxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlTWVudSxcbiAgICAgICAgY3JlYXRlTWFpbixcbiAgICAgICAgY3JlYXRlQ29udGFjdCxcbiAgICB9O1xuXG59KSgpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudUJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxldmVudEhhbmRsZXIuY3JlYXRlTWVudSk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdEJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxldmVudEhhbmRsZXIuY3JlYXRlQ29udGFjdCk7XG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9