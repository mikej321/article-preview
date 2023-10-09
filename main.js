/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/fadeOut.js":
/*!****************************!*\
  !*** ./modules/fadeOut.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fadeOut: () => (/* binding */ fadeOut)
/* harmony export */ });
function fadeOut(event) {
    let tarElement = event.target
    if (tarElement.classList.contains('buttonContainer')) {
            tarElement.parentElement.classList.add('fadeOut');
            tarElement.parentElement.nextSibling.classList.add('fadeIn');
        
    }

    if (tarElement.classList.contains('myButton')) {
        tarElement.parentElement.parentElement.classList.add('fadeOut');
        tarElement.parentElement.parentElement.nextSibling.classList.add('fadeIn');
    }

    if (tarElement.classList.contains('shareContainerButton') || tarElement.classList.contains('share')) {
        tarElement.parentElement.parentElement.classList.remove('fadeIn');
        tarElement.parentElement.parentElement.parentElement.firstChild.classList.remove('fadeOut');
    }

    if (tarElement.classList.contains('invertedShareContainer') || tarElement.classList.contains('share')) {
        tarElement.parentElement.classList.remove('fadeIn');
        tarElement.parentElement.parentElement.firstChild.classList.remove('fadeOut');
    }
}



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Manrope.ttf */ "./src/fonts/Manrope.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/drawers.jpg */ "./src/images/drawers.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'Manrope semi-bold';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Manrope bold';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    font-weight: 700;
    font-style: normal;
}

:root {
    --very-dark-grayish-blue: hsl(217, 19%, 35%);
    --desaturated-dark-blue: hsl(214, 17%, 51%);
    --grayish-blue: hsl(212, 23%, 69%);
    --light-grayish-blue: hsl(210, 46%, 95%);
    --font-size: 13px;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

* {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
}

html {
    font-size: 62.5%;
}

body {
    font-size: var(--font-size);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--light-grayish-blue);
    
}

.myBody {
    max-width: 375px;
    background-color: white;
    font-family: 'Manrope semi-bold';
    border-radius: 8px;
    display: grid;
    grid-template-areas: "image"
                         "body"
                         "share";
    
}

.myHeaderDiv {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) no-repeat;
    border-radius: 12px 12px 0 0;
    width: 375px;
    height: 245px;
    overflow: hidden;
    grid-area: image;
}

.myHeaderImg {
    max-width: 375px;
    border-radius: 12px 12px 0 0;
}

.myCard {
    grid-area: body;
    display: grid;
    grid-template-areas: "header"
                         "paragraph"
                         "user";
    gap: 1.5rem;
    margin-top: 4rem;
}

.myCardHeader {
    font-family: 'Manrope bold';
    font-size: 1.6rem;
    grid-area: header;
    color: var(--very-dark-grayish-blue);
    margin-inline: 4rem;
}

.myCardBody {
    grid-area: paragraph;
    max-width: 257px;
    line-height: 2rem;
    margin-inline: 4rem;
    margin-bottom: 2rem;
    color: var(--desaturated-dark-blue);
}

.infoContainer {
    position: relative;

}

.userInfo {
    display: flex;
    gap: 2rem;
    align-items: center;
    grid-area: user;
    
    margin-inline: 4rem;
    /* animate margin-bottom as well as opacity
    on click...do a slide animation that makes the info slide out right
    and appear underneath the share portion */
    margin-bottom: 2rem;
    position: relative;
    z-index: 2;
    transition: all 0.4s ease-out;
}

.fadeOut {
    opacity: 0;
    translate: 375px;
}

.profilePic {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.userData {
    margin-right: 3rem;
    display: flex;
    flex-direction: column;
    gap: .25rem;
}

.userName {
    font-family: 'Manrope bold';
    color: var(--very-dark-grayish-blue);
    font-size: 1.3rem;
}

.userDate {
    color: var(--grayish-blue);
}

.buttonContainer {
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: var(--light-grayish-blue);
    cursor: pointer;
    transition: scale 0.2s ease-in-out;
}

.buttonContainer:hover {
    scale: 1.1;
}

.shareContainer {
    display: flex;
    align-items: center;
    gap: 2rem;
    /* Animate the padding-inline/block & max-height/overflow on click */
    width: 100%;
    background-color: var(--very-dark-grayish-blue);
    padding-inline: 4rem;
    padding-block: 2rem;
    border-radius: 0 0 12px 12px;
    position: absolute;
    z-index: 1;
    bottom: 0;
    /* Control the element with opacity */
    opacity: 0;
    transition: all 0.2s ease-in;
}

.fadeIn {
    opacity: 1;
}

.share {
    text-transform: uppercase;
    letter-spacing: 4px;
    font-size: 1.5rem;
    color: var(--grayish-blue);
}

.shareIconContainer {
    display: flex;
    width: 100%;
    max-width: 100px;
    align-items: center;
    justify-content: space-between;
    margin-right: 3rem;
}

.facebookIcon {
    cursor: pointer;
    transition: scale 0.4s ease-in-out;
}

.facebookIcon:hover {
    scale: 1.2;
}

.twitterIcon {
    cursor: pointer;
    transition: scale 0.2s ease-in-out;
}

.twitterIcon:hover {
    scale: 1.2;
}

.pinterestIcon {
    cursor: pointer;
    transition: scale 0.2s ease-in-out;
}

.pinterestIcon:hover {
    scale: 1.2;
}

.invertedShareContainer {
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    background-color: var(--desaturated-dark-blue);
    transition: scale 0.2s ease-in-out;
}

.invertedShareContainer:hover {
    scale: 1.1;
}

.shareContainerButton {
    filter: brightness(0) invert(1);
}

@media screen and (min-width: 600px) {
    
    .myBody {
        max-width: 770px;
        grid-template-areas: "image body"
                             "image share";
        
    }
    
    .myHeaderDiv {
        border-radius: 8px 0 0 8px;
        width: 300px;
        height: 343px;
    }
    
    .myHeaderImg {
        border-radius: 8px 0 0 8px;
        height: 343px;
    }
    
    .myCardHeader {
        font-size: 2.2rem;
        line-height: 3.2rem;
        min-width: 370px;
    }

    .myCardHeader p {

    }
    
    .myCardBody {
        max-width: 46ch;
        font-size: 1.4rem;
        line-height: 2rem;
    }

    .myCardBody p {
        line-height: 2.3rem;
    }
    
    .infoContainer {
        position: relative;
    
    }
    
    .userInfo {
        /* animate margin-bottom as well as opacity
        on click...do a slide animation that makes the info slide out right
        and appear underneath the share portion */
        position: relative;
        z-index: 2;
        transition: all 0.4s ease-out;
    }
    
    .fadeOut {
        opacity: unset;
        translate: unset;
    }
    
    .profilePic {
        width: 45px;
        height: 45px;
    }
    
    .userData {
        margin-right: 14.3rem;
        width: 100%;
        max-width: 15rem;
    }
    
    .userName {
        font-size: 1.4rem;
    }
    
    .buttonContainer {
        width: 100%;
        max-width: 35px;
        height: 35px;
        transition: scale 0.2s ease-in-out;
    }
    
    .buttonContainer:hover {
        scale: 1.1;
    }
    
    .shareContainer {
        /* Animate the padding-inline/block & max-height/overflow on click */
        width: 60%;
        padding-inline: unset;
        padding-block: 2rem;
        border-radius: 12px;
        justify-content: center;
        position: absolute;
        z-index: 1;
        bottom: 103px;
        /* Control the element with opacity */
        opacity: 0;
        right: -88px;
        transition: all 0.4s ease-in;
        border-bottom: 1px solid var(--very-dark-grayish-blue);
    }

    .shareContainer:after {
        content: '';
        width: 0;
        height: 0;
        margin: 0 11.1rem;
        position: absolute;
        top: 50px;
        left: 0;
        right: 0;
        border-top: 25px solid var(--very-dark-grayish-blue);
        border-left: 25px solid transparent;
        border-right: 25px solid transparent;
    }
    
    .fadeIn {
        opacity: 1;
    }
    
    .share {
        text-transform: uppercase;
        letter-spacing: 4px;
        font-size: 1.5rem;
        color: var(--grayish-blue);
        cursor: pointer;
        transition: scale 0.2s ease-in-out;
    }

    .share:hover {
        scale: 1.1;        
    }
    
    .shareIconContainer {
        width: 100%;
        max-width: 100px;
        margin-right: unset;
    }
    
    .facebookIcon {
        cursor: pointer;
        transition: scale 0.4s ease-in-out;
    }
    
    .twitterIcon {
        cursor: pointer;
        transition: scale 0.2s ease-in-out;
    }
       
    .pinterestIcon {
        cursor: pointer;
        transition: scale 0.2s ease-in-out;
    }
    
    .invertedShareContainer {
        display: none;
    }

}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'Manrope semi-bold';\n    src: url(./fonts/Manrope.ttf);\n    font-weight: 500;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Manrope bold';\n    src: url(./fonts/Manrope.ttf);\n    font-weight: 700;\n    font-style: normal;\n}\n\n:root {\n    --very-dark-grayish-blue: hsl(217, 19%, 35%);\n    --desaturated-dark-blue: hsl(214, 17%, 51%);\n    --grayish-blue: hsl(212, 23%, 69%);\n    --light-grayish-blue: hsl(210, 46%, 95%);\n    --font-size: 13px;\n}\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    scroll-behavior: smooth;\n}\n\nhtml {\n    font-size: 62.5%;\n}\n\nbody {\n    font-size: var(--font-size);\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background-color: var(--light-grayish-blue);\n    \n}\n\n.myBody {\n    max-width: 375px;\n    background-color: white;\n    font-family: 'Manrope semi-bold';\n    border-radius: 8px;\n    display: grid;\n    grid-template-areas: \"image\"\n                         \"body\"\n                         \"share\";\n    \n}\n\n.myHeaderDiv {\n    background: url(./images/drawers.jpg) no-repeat;\n    border-radius: 12px 12px 0 0;\n    width: 375px;\n    height: 245px;\n    overflow: hidden;\n    grid-area: image;\n}\n\n.myHeaderImg {\n    max-width: 375px;\n    border-radius: 12px 12px 0 0;\n}\n\n.myCard {\n    grid-area: body;\n    display: grid;\n    grid-template-areas: \"header\"\n                         \"paragraph\"\n                         \"user\";\n    gap: 1.5rem;\n    margin-top: 4rem;\n}\n\n.myCardHeader {\n    font-family: 'Manrope bold';\n    font-size: 1.6rem;\n    grid-area: header;\n    color: var(--very-dark-grayish-blue);\n    margin-inline: 4rem;\n}\n\n.myCardBody {\n    grid-area: paragraph;\n    max-width: 257px;\n    line-height: 2rem;\n    margin-inline: 4rem;\n    margin-bottom: 2rem;\n    color: var(--desaturated-dark-blue);\n}\n\n.infoContainer {\n    position: relative;\n\n}\n\n.userInfo {\n    display: flex;\n    gap: 2rem;\n    align-items: center;\n    grid-area: user;\n    \n    margin-inline: 4rem;\n    /* animate margin-bottom as well as opacity\n    on click...do a slide animation that makes the info slide out right\n    and appear underneath the share portion */\n    margin-bottom: 2rem;\n    position: relative;\n    z-index: 2;\n    transition: all 0.4s ease-out;\n}\n\n.fadeOut {\n    opacity: 0;\n    translate: 375px;\n}\n\n.profilePic {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n}\n\n.userData {\n    margin-right: 3rem;\n    display: flex;\n    flex-direction: column;\n    gap: .25rem;\n}\n\n.userName {\n    font-family: 'Manrope bold';\n    color: var(--very-dark-grayish-blue);\n    font-size: 1.3rem;\n}\n\n.userDate {\n    color: var(--grayish-blue);\n}\n\n.buttonContainer {\n    width: 35px;\n    height: 35px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n    background-color: var(--light-grayish-blue);\n    cursor: pointer;\n    transition: scale 0.2s ease-in-out;\n}\n\n.buttonContainer:hover {\n    scale: 1.1;\n}\n\n.shareContainer {\n    display: flex;\n    align-items: center;\n    gap: 2rem;\n    /* Animate the padding-inline/block & max-height/overflow on click */\n    width: 100%;\n    background-color: var(--very-dark-grayish-blue);\n    padding-inline: 4rem;\n    padding-block: 2rem;\n    border-radius: 0 0 12px 12px;\n    position: absolute;\n    z-index: 1;\n    bottom: 0;\n    /* Control the element with opacity */\n    opacity: 0;\n    transition: all 0.2s ease-in;\n}\n\n.fadeIn {\n    opacity: 1;\n}\n\n.share {\n    text-transform: uppercase;\n    letter-spacing: 4px;\n    font-size: 1.5rem;\n    color: var(--grayish-blue);\n}\n\n.shareIconContainer {\n    display: flex;\n    width: 100%;\n    max-width: 100px;\n    align-items: center;\n    justify-content: space-between;\n    margin-right: 3rem;\n}\n\n.facebookIcon {\n    cursor: pointer;\n    transition: scale 0.4s ease-in-out;\n}\n\n.facebookIcon:hover {\n    scale: 1.2;\n}\n\n.twitterIcon {\n    cursor: pointer;\n    transition: scale 0.2s ease-in-out;\n}\n\n.twitterIcon:hover {\n    scale: 1.2;\n}\n\n.pinterestIcon {\n    cursor: pointer;\n    transition: scale 0.2s ease-in-out;\n}\n\n.pinterestIcon:hover {\n    scale: 1.2;\n}\n\n.invertedShareContainer {\n    width: 35px;\n    height: 35px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n    cursor: pointer;\n    background-color: var(--desaturated-dark-blue);\n    transition: scale 0.2s ease-in-out;\n}\n\n.invertedShareContainer:hover {\n    scale: 1.1;\n}\n\n.shareContainerButton {\n    filter: brightness(0) invert(1);\n}\n\n@media screen and (min-width: 600px) {\n    \n    .myBody {\n        max-width: 770px;\n        grid-template-areas: \"image body\"\n                             \"image share\";\n        \n    }\n    \n    .myHeaderDiv {\n        border-radius: 8px 0 0 8px;\n        width: 300px;\n        height: 343px;\n    }\n    \n    .myHeaderImg {\n        border-radius: 8px 0 0 8px;\n        height: 343px;\n    }\n    \n    .myCardHeader {\n        font-size: 2.2rem;\n        line-height: 3.2rem;\n        min-width: 370px;\n    }\n\n    .myCardHeader p {\n\n    }\n    \n    .myCardBody {\n        max-width: 46ch;\n        font-size: 1.4rem;\n        line-height: 2rem;\n    }\n\n    .myCardBody p {\n        line-height: 2.3rem;\n    }\n    \n    .infoContainer {\n        position: relative;\n    \n    }\n    \n    .userInfo {\n        /* animate margin-bottom as well as opacity\n        on click...do a slide animation that makes the info slide out right\n        and appear underneath the share portion */\n        position: relative;\n        z-index: 2;\n        transition: all 0.4s ease-out;\n    }\n    \n    .fadeOut {\n        opacity: unset;\n        translate: unset;\n    }\n    \n    .profilePic {\n        width: 45px;\n        height: 45px;\n    }\n    \n    .userData {\n        margin-right: 14.3rem;\n        width: 100%;\n        max-width: 15rem;\n    }\n    \n    .userName {\n        font-size: 1.4rem;\n    }\n    \n    .buttonContainer {\n        width: 100%;\n        max-width: 35px;\n        height: 35px;\n        transition: scale 0.2s ease-in-out;\n    }\n    \n    .buttonContainer:hover {\n        scale: 1.1;\n    }\n    \n    .shareContainer {\n        /* Animate the padding-inline/block & max-height/overflow on click */\n        width: 60%;\n        padding-inline: unset;\n        padding-block: 2rem;\n        border-radius: 12px;\n        justify-content: center;\n        position: absolute;\n        z-index: 1;\n        bottom: 103px;\n        /* Control the element with opacity */\n        opacity: 0;\n        right: -88px;\n        transition: all 0.4s ease-in;\n        border-bottom: 1px solid var(--very-dark-grayish-blue);\n    }\n\n    .shareContainer:after {\n        content: '';\n        width: 0;\n        height: 0;\n        margin: 0 11.1rem;\n        position: absolute;\n        top: 50px;\n        left: 0;\n        right: 0;\n        border-top: 25px solid var(--very-dark-grayish-blue);\n        border-left: 25px solid transparent;\n        border-right: 25px solid transparent;\n    }\n    \n    .fadeIn {\n        opacity: 1;\n    }\n    \n    .share {\n        text-transform: uppercase;\n        letter-spacing: 4px;\n        font-size: 1.5rem;\n        color: var(--grayish-blue);\n        cursor: pointer;\n        transition: scale 0.2s ease-in-out;\n    }\n\n    .share:hover {\n        scale: 1.1;        \n    }\n    \n    .shareIconContainer {\n        width: 100%;\n        max-width: 100px;\n        margin-right: unset;\n    }\n    \n    .facebookIcon {\n        cursor: pointer;\n        transition: scale 0.4s ease-in-out;\n    }\n    \n    .twitterIcon {\n        cursor: pointer;\n        transition: scale 0.2s ease-in-out;\n    }\n       \n    .pinterestIcon {\n        cursor: pointer;\n        transition: scale 0.2s ease-in-out;\n    }\n    \n    .invertedShareContainer {\n        display: none;\n    }\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/fonts/Manrope.ttf":
/*!*******************************!*\
  !*** ./src/fonts/Manrope.ttf ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4afb283bba326df875f6.ttf";

/***/ }),

/***/ "./src/images/avatar-michelle.jpg":
/*!****************************************!*\
  !*** ./src/images/avatar-michelle.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5edd0ebc4ded70f481ec.jpg";

/***/ }),

/***/ "./src/images/drawers.jpg":
/*!********************************!*\
  !*** ./src/images/drawers.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "631135b079e9f19bada8.jpg";

/***/ }),

/***/ "./src/images/icon-facebook.svg":
/*!**************************************!*\
  !*** ./src/images/icon-facebook.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1e9b33385e6dfe7a61ac.svg";

/***/ }),

/***/ "./src/images/icon-pinterest.svg":
/*!***************************************!*\
  !*** ./src/images/icon-pinterest.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "45264b1d1cdf7f0c420d.svg";

/***/ }),

/***/ "./src/images/icon-share.svg":
/*!***********************************!*\
  !*** ./src/images/icon-share.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "890102fe1500a6fba9a7.svg";

/***/ }),

/***/ "./src/images/icon-twitter.svg":
/*!*************************************!*\
  !*** ./src/images/icon-twitter.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "45735e3b0e1132259059.svg";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images_avatar_michelle_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/avatar-michelle.jpg */ "./src/images/avatar-michelle.jpg");
/* harmony import */ var _images_drawers_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/drawers.jpg */ "./src/images/drawers.jpg");
/* harmony import */ var _images_icon_facebook_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/icon-facebook.svg */ "./src/images/icon-facebook.svg");
/* harmony import */ var _images_icon_pinterest_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/icon-pinterest.svg */ "./src/images/icon-pinterest.svg");
/* harmony import */ var _images_icon_share_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/icon-share.svg */ "./src/images/icon-share.svg");
/* harmony import */ var _images_icon_twitter_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/icon-twitter.svg */ "./src/images/icon-twitter.svg");
/* harmony import */ var _modules_fadeOut__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/fadeOut */ "./modules/fadeOut.js");









function component() {
    const myBody = document.createElement('div');
    myBody.classList.add('myBody');
    
    const myHeaderDiv = document.createElement('div');
    myHeaderDiv.classList.add('myHeaderDiv');

    const myHeaderImg = new Image();
    myHeaderImg.src = _images_drawers_jpg__WEBPACK_IMPORTED_MODULE_2__;
    myHeaderImg.classList.add('myHeaderImg');

    myHeaderDiv.append(myHeaderImg);
    
    myBody.append(myHeaderDiv);

    const myCard = document.createElement('div');
    myCard.classList.add('myCard');

    const myCardHeader = document.createElement('div');
    myCardHeader.classList.add('myCardHeader');

    const myCardHeaderP = document.createElement('p');
    myCardHeaderP.textContent = `Shift the overall look and feel
    by adding these wonderful touches to furniture in your home`;

    myCardHeader.append(myCardHeaderP);

    const myCardBody = document.createElement('div');
    myCardBody.classList.add('myCardBody');

    const myCardBodyP = document.createElement('p');
    myCardBodyP.textContent = `Ever been in a room and felt like
    something was missing? Perhaps it felt slightly bare and uninviting.
    I've got some simple tips to help you make any room feel complete.`;

    myCardBody.append(myCardBodyP);

    const infoContainer = document.createElement('div');
    infoContainer.classList.add('infoContainer');

    const userInfo = document.createElement('div');
    userInfo.classList.add('userInfo');

    const profilePic = document.createElement('img');
    profilePic.src = _images_avatar_michelle_jpg__WEBPACK_IMPORTED_MODULE_1__;
    profilePic.classList.add('profilePic')

    const userData = document.createElement('div');
    userData.classList.add('userData');

    const userName = document.createElement('p');
    userName.classList.add('userName');
    userName.textContent = 'Michelle Appleton';

    const userDate = document.createElement('p');
    userDate.classList.add('userDate');
    userDate.textContent = '28 Jun 2020';

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('buttonContainer');
    const button = document.createElement('img');
    button.src = _images_icon_share_svg__WEBPACK_IMPORTED_MODULE_5__;
    button.classList.add('myButton');
    buttonContainer.append(button);

    infoContainer.append(userInfo);

    const shareContainer = document.createElement('div');
    shareContainer.classList.add('shareContainer');

    const share = document.createElement('p');
    share.textContent = 'share';
    share.classList.add('share');

    shareContainer.append(share);

    const shareIconContainer = document.createElement('div');
    shareIconContainer.classList.add('shareIconContainer');

    const facebookIcon = document.createElement('img');
    facebookIcon.src = _images_icon_facebook_svg__WEBPACK_IMPORTED_MODULE_3__;
    facebookIcon.classList.add('facebookIcon');
    shareIconContainer.append(facebookIcon);

    const twitterIcon = document.createElement('img');
    twitterIcon.src = _images_icon_twitter_svg__WEBPACK_IMPORTED_MODULE_6__;
    twitterIcon.classList.add('twitterIcon');
    shareIconContainer.append(twitterIcon);

    const pinterestIcon = document.createElement('img');
    pinterestIcon.src = _images_icon_pinterest_svg__WEBPACK_IMPORTED_MODULE_4__;
    pinterestIcon.classList.add('pinterestIcon');
    shareIconContainer.append(pinterestIcon);

    shareContainer.append(shareIconContainer);

    const invertedShareContainer = document.createElement('div');
    invertedShareContainer.classList.add('invertedShareContainer');

    const shareContainerButton = document.createElement('img');
    shareContainerButton.src = _images_icon_share_svg__WEBPACK_IMPORTED_MODULE_5__;
    shareContainerButton.classList.add('shareContainerButton');
    invertedShareContainer.append(shareContainerButton);

    shareContainer.append(invertedShareContainer);

    userInfo.append(profilePic);
    userInfo.append(userData);
    userInfo.append(buttonContainer);
    
    infoContainer.append(shareContainer);

    userData.append(userName);
    userData.append(userDate);

    myCard.append(myCardHeader);
    myCard.append(myCardBody);
    myCard.append(infoContainer);

    myBody.append(myCard);
    

    return myBody;
}

document.body.append(component());

document.addEventListener('click', _modules_fadeOut__WEBPACK_IMPORTED_MODULE_7__.fadeOut);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsbUhBQXNDO0FBQ2xGLDRDQUE0QyxxSEFBdUM7QUFDbkYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLFFBQVEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLE9BQU8sV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxZQUFZLFlBQVksT0FBTyxPQUFPLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sS0FBSyxZQUFZLE1BQU0sUUFBUSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssTUFBTSxPQUFPLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFV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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUMrQjtBQUNSO0FBQ007QUFDQztBQUNKO0FBQ0M7QUFDSDs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLGdEQUFRO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLHdEQUFRO0FBQzdCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsbURBQVE7QUFDekI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLHNEQUFRO0FBQy9CO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IscURBQVE7QUFDOUI7QUFDQTs7QUFFQTtBQUNBLHdCQUF3Qix1REFBUTtBQUNoQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0IsbURBQVE7QUFDdkM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxtQ0FBbUMscURBQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcnRpY2xlLXByZXZpZXcvLi9tb2R1bGVzL2ZhZGVPdXQuanMiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS1wcmV2aWV3Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9hcnRpY2xlLXByZXZpZXcvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2FydGljbGUtcHJldmlldy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS1wcmV2aWV3Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS1wcmV2aWV3Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2FydGljbGUtcHJldmlldy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9hcnRpY2xlLXByZXZpZXcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2FydGljbGUtcHJldmlldy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9hcnRpY2xlLXByZXZpZXcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS1wcmV2aWV3Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS1wcmV2aWV3Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYXJ0aWNsZS1wcmV2aWV3L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FydGljbGUtcHJldmlldy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9hcnRpY2xlLXByZXZpZXcvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FydGljbGUtcHJldmlldy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2FydGljbGUtcHJldmlldy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FydGljbGUtcHJldmlldy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FydGljbGUtcHJldmlldy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9hcnRpY2xlLXByZXZpZXcvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYXJ0aWNsZS1wcmV2aWV3L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9hcnRpY2xlLXByZXZpZXcvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZmFkZU91dChldmVudCkge1xuICAgIGxldCB0YXJFbGVtZW50ID0gZXZlbnQudGFyZ2V0XG4gICAgaWYgKHRhckVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdidXR0b25Db250YWluZXInKSkge1xuICAgICAgICAgICAgdGFyRWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZhZGVPdXQnKTtcbiAgICAgICAgICAgIHRhckVsZW1lbnQucGFyZW50RWxlbWVudC5uZXh0U2libGluZy5jbGFzc0xpc3QuYWRkKCdmYWRlSW4nKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgaWYgKHRhckVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdteUJ1dHRvbicpKSB7XG4gICAgICAgIHRhckVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZhZGVPdXQnKTtcbiAgICAgICAgdGFyRWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQubmV4dFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnZmFkZUluJyk7XG4gICAgfVxuXG4gICAgaWYgKHRhckVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGFyZUNvbnRhaW5lckJ1dHRvbicpIHx8IHRhckVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGFyZScpKSB7XG4gICAgICAgIHRhckVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGVJbicpO1xuICAgICAgICB0YXJFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZU91dCcpO1xuICAgIH1cblxuICAgIGlmICh0YXJFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnaW52ZXJ0ZWRTaGFyZUNvbnRhaW5lcicpIHx8IHRhckVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGFyZScpKSB7XG4gICAgICAgIHRhckVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlSW4nKTtcbiAgICAgICAgdGFyRWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlT3V0Jyk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBmYWRlT3V0IH07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvTWFucm9wZS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9kcmF3ZXJzLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTWFucm9wZSBzZW1pLWJvbGQnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ01hbnJvcGUgYm9sZCc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbjpyb290IHtcbiAgICAtLXZlcnktZGFyay1ncmF5aXNoLWJsdWU6IGhzbCgyMTcsIDE5JSwgMzUlKTtcbiAgICAtLWRlc2F0dXJhdGVkLWRhcmstYmx1ZTogaHNsKDIxNCwgMTclLCA1MSUpO1xuICAgIC0tZ3JheWlzaC1ibHVlOiBoc2woMjEyLCAyMyUsIDY5JSk7XG4gICAgLS1saWdodC1ncmF5aXNoLWJsdWU6IGhzbCgyMTAsIDQ2JSwgOTUlKTtcbiAgICAtLWZvbnQtc2l6ZTogMTNweDtcbn1cblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuaHRtbCB7XG4gICAgZm9udC1zaXplOiA2Mi41JTtcbn1cblxuYm9keSB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyYXlpc2gtYmx1ZSk7XG4gICAgXG59XG5cbi5teUJvZHkge1xuICAgIG1heC13aWR0aDogMzc1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6ICdNYW5yb3BlIHNlbWktYm9sZCc7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJpbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgXCJib2R5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcInNoYXJlXCI7XG4gICAgXG59XG5cbi5teUhlYWRlckRpdiB7XG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIG5vLXJlcGVhdDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4IDEycHggMCAwO1xuICAgIHdpZHRoOiAzNzVweDtcbiAgICBoZWlnaHQ6IDI0NXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZ3JpZC1hcmVhOiBpbWFnZTtcbn1cblxuLm15SGVhZGVySW1nIHtcbiAgICBtYXgtd2lkdGg6IDM3NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHggMTJweCAwIDA7XG59XG5cbi5teUNhcmQge1xuICAgIGdyaWQtYXJlYTogYm9keTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaGVhZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcInBhcmFncmFwaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgXCJ1c2VyXCI7XG4gICAgZ2FwOiAxLjVyZW07XG4gICAgbWFyZ2luLXRvcDogNHJlbTtcbn1cblxuLm15Q2FyZEhlYWRlciB7XG4gICAgZm9udC1mYW1pbHk6ICdNYW5yb3BlIGJvbGQnO1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xuICAgIGNvbG9yOiB2YXIoLS12ZXJ5LWRhcmstZ3JheWlzaC1ibHVlKTtcbiAgICBtYXJnaW4taW5saW5lOiA0cmVtO1xufVxuXG4ubXlDYXJkQm9keSB7XG4gICAgZ3JpZC1hcmVhOiBwYXJhZ3JhcGg7XG4gICAgbWF4LXdpZHRoOiAyNTdweDtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICBtYXJnaW4taW5saW5lOiA0cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgY29sb3I6IHZhcigtLWRlc2F0dXJhdGVkLWRhcmstYmx1ZSk7XG59XG5cbi5pbmZvQ29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbn1cblxuLnVzZXJJbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMnJlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdyaWQtYXJlYTogdXNlcjtcbiAgICBcbiAgICBtYXJnaW4taW5saW5lOiA0cmVtO1xuICAgIC8qIGFuaW1hdGUgbWFyZ2luLWJvdHRvbSBhcyB3ZWxsIGFzIG9wYWNpdHlcbiAgICBvbiBjbGljay4uLmRvIGEgc2xpZGUgYW5pbWF0aW9uIHRoYXQgbWFrZXMgdGhlIGluZm8gc2xpZGUgb3V0IHJpZ2h0XG4gICAgYW5kIGFwcGVhciB1bmRlcm5lYXRoIHRoZSBzaGFyZSBwb3J0aW9uICovXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLW91dDtcbn1cblxuLmZhZGVPdXQge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNsYXRlOiAzNzVweDtcbn1cblxuLnByb2ZpbGVQaWMge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi51c2VyRGF0YSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IC4yNXJlbTtcbn1cblxuLnVzZXJOYW1lIHtcbiAgICBmb250LWZhbWlseTogJ01hbnJvcGUgYm9sZCc7XG4gICAgY29sb3I6IHZhcigtLXZlcnktZGFyay1ncmF5aXNoLWJsdWUpO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4udXNlckRhdGUge1xuICAgIGNvbG9yOiB2YXIoLS1ncmF5aXNoLWJsdWUpO1xufVxuXG4uYnV0dG9uQ29udGFpbmVyIHtcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmF5aXNoLWJsdWUpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBzY2FsZSAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uYnV0dG9uQ29udGFpbmVyOmhvdmVyIHtcbiAgICBzY2FsZTogMS4xO1xufVxuXG4uc2hhcmVDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDJyZW07XG4gICAgLyogQW5pbWF0ZSB0aGUgcGFkZGluZy1pbmxpbmUvYmxvY2sgJiBtYXgtaGVpZ2h0L292ZXJmbG93IG9uIGNsaWNrICovXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdmVyeS1kYXJrLWdyYXlpc2gtYmx1ZSk7XG4gICAgcGFkZGluZy1pbmxpbmU6IDRyZW07XG4gICAgcGFkZGluZy1ibG9jazogMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMTJweCAxMnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJvdHRvbTogMDtcbiAgICAvKiBDb250cm9sIHRoZSBlbGVtZW50IHdpdGggb3BhY2l0eSAqL1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcbn1cblxuLmZhZGVJbiB7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLnNoYXJlIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgY29sb3I6IHZhcigtLWdyYXlpc2gtYmx1ZSk7XG59XG5cbi5zaGFyZUljb25Db250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tcmlnaHQ6IDNyZW07XG59XG5cbi5mYWNlYm9va0ljb24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBzY2FsZSAwLjRzIGVhc2UtaW4tb3V0O1xufVxuXG4uZmFjZWJvb2tJY29uOmhvdmVyIHtcbiAgICBzY2FsZTogMS4yO1xufVxuXG4udHdpdHRlckljb24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBzY2FsZSAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4udHdpdHRlckljb246aG92ZXIge1xuICAgIHNjYWxlOiAxLjI7XG59XG5cbi5waW50ZXJlc3RJY29uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogc2NhbGUgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLnBpbnRlcmVzdEljb246aG92ZXIge1xuICAgIHNjYWxlOiAxLjI7XG59XG5cbi5pbnZlcnRlZFNoYXJlQ29udGFpbmVyIHtcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVzYXR1cmF0ZWQtZGFyay1ibHVlKTtcbiAgICB0cmFuc2l0aW9uOiBzY2FsZSAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uaW52ZXJ0ZWRTaGFyZUNvbnRhaW5lcjpob3ZlciB7XG4gICAgc2NhbGU6IDEuMTtcbn1cblxuLnNoYXJlQ29udGFpbmVyQnV0dG9uIHtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgaW52ZXJ0KDEpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAgIFxuICAgIC5teUJvZHkge1xuICAgICAgICBtYXgtd2lkdGg6IDc3MHB4O1xuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImltYWdlIGJvZHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImltYWdlIHNoYXJlXCI7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAubXlIZWFkZXJEaXYge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHggMCAwIDhweDtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICBoZWlnaHQ6IDM0M3B4O1xuICAgIH1cbiAgICBcbiAgICAubXlIZWFkZXJJbWcge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHggMCAwIDhweDtcbiAgICAgICAgaGVpZ2h0OiAzNDNweDtcbiAgICB9XG4gICAgXG4gICAgLm15Q2FyZEhlYWRlciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMy4ycmVtO1xuICAgICAgICBtaW4td2lkdGg6IDM3MHB4O1xuICAgIH1cblxuICAgIC5teUNhcmRIZWFkZXIgcCB7XG5cbiAgICB9XG4gICAgXG4gICAgLm15Q2FyZEJvZHkge1xuICAgICAgICBtYXgtd2lkdGg6IDQ2Y2g7XG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICB9XG5cbiAgICAubXlDYXJkQm9keSBwIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIuM3JlbTtcbiAgICB9XG4gICAgXG4gICAgLmluZm9Db250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgXG4gICAgfVxuICAgIFxuICAgIC51c2VySW5mbyB7XG4gICAgICAgIC8qIGFuaW1hdGUgbWFyZ2luLWJvdHRvbSBhcyB3ZWxsIGFzIG9wYWNpdHlcbiAgICAgICAgb24gY2xpY2suLi5kbyBhIHNsaWRlIGFuaW1hdGlvbiB0aGF0IG1ha2VzIHRoZSBpbmZvIHNsaWRlIG91dCByaWdodFxuICAgICAgICBhbmQgYXBwZWFyIHVuZGVybmVhdGggdGhlIHNoYXJlIHBvcnRpb24gKi9cbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLW91dDtcbiAgICB9XG4gICAgXG4gICAgLmZhZGVPdXQge1xuICAgICAgICBvcGFjaXR5OiB1bnNldDtcbiAgICAgICAgdHJhbnNsYXRlOiB1bnNldDtcbiAgICB9XG4gICAgXG4gICAgLnByb2ZpbGVQaWMge1xuICAgICAgICB3aWR0aDogNDVweDtcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgIH1cbiAgICBcbiAgICAudXNlckRhdGEge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE0LjNyZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDE1cmVtO1xuICAgIH1cbiAgICBcbiAgICAudXNlck5hbWUge1xuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICB9XG4gICAgXG4gICAgLmJ1dHRvbkNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDM1cHg7XG4gICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgdHJhbnNpdGlvbjogc2NhbGUgMC4ycyBlYXNlLWluLW91dDtcbiAgICB9XG4gICAgXG4gICAgLmJ1dHRvbkNvbnRhaW5lcjpob3ZlciB7XG4gICAgICAgIHNjYWxlOiAxLjE7XG4gICAgfVxuICAgIFxuICAgIC5zaGFyZUNvbnRhaW5lciB7XG4gICAgICAgIC8qIEFuaW1hdGUgdGhlIHBhZGRpbmctaW5saW5lL2Jsb2NrICYgbWF4LWhlaWdodC9vdmVyZmxvdyBvbiBjbGljayAqL1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICBwYWRkaW5nLWlubGluZTogdW5zZXQ7XG4gICAgICAgIHBhZGRpbmctYmxvY2s6IDJyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIGJvdHRvbTogMTAzcHg7XG4gICAgICAgIC8qIENvbnRyb2wgdGhlIGVsZW1lbnQgd2l0aCBvcGFjaXR5ICovXG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHJpZ2h0OiAtODhweDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbjtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXZlcnktZGFyay1ncmF5aXNoLWJsdWUpO1xuICAgIH1cblxuICAgIC5zaGFyZUNvbnRhaW5lcjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICBtYXJnaW46IDAgMTEuMXJlbTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwcHg7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3JkZXItdG9wOiAyNXB4IHNvbGlkIHZhcigtLXZlcnktZGFyay1ncmF5aXNoLWJsdWUpO1xuICAgICAgICBib3JkZXItbGVmdDogMjVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAyNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICBcbiAgICAuZmFkZUluIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgXG4gICAgLnNoYXJlIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ncmF5aXNoLWJsdWUpO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IHNjYWxlIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgfVxuXG4gICAgLnNoYXJlOmhvdmVyIHtcbiAgICAgICAgc2NhbGU6IDEuMTsgICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAuc2hhcmVJY29uQ29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogdW5zZXQ7XG4gICAgfVxuICAgIFxuICAgIC5mYWNlYm9va0ljb24ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IHNjYWxlIDAuNHMgZWFzZS1pbi1vdXQ7XG4gICAgfVxuICAgIFxuICAgIC50d2l0dGVySWNvbiB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogc2NhbGUgMC4ycyBlYXNlLWluLW91dDtcbiAgICB9XG4gICAgICAgXG4gICAgLnBpbnRlcmVzdEljb24ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IHNjYWxlIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgfVxuICAgIFxuICAgIC5pbnZlcnRlZFNoYXJlQ29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291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LG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixhQUFhO1FBQ2IscUNBQXFDO1FBQ3JDLFVBQVU7UUFDVixZQUFZO1FBQ1osNEJBQTRCO1FBQzVCLHNEQUFzRDtJQUMxRDs7SUFFQTtRQUNJLFdBQVc7UUFDWCxRQUFRO1FBQ1IsU0FBUztRQUNULGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsU0FBUztRQUNULE9BQU87UUFDUCxRQUFRO1FBQ1Isb0RBQW9EO1FBQ3BELG1DQUFtQztRQUNuQyxvQ0FBb0M7SUFDeEM7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSx5QkFBeUI7UUFDekIsbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQiwwQkFBMEI7UUFDMUIsZUFBZTtRQUNmLGtDQUFrQztJQUN0Qzs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGtDQUFrQztJQUN0Qzs7SUFFQTtRQUNJLGVBQWU7UUFDZixrQ0FBa0M7SUFDdEM7O0lBRUE7UUFDSSxlQUFlO1FBQ2Ysa0NBQWtDO0lBQ3RDOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7QUFFSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNYW5yb3BlIHNlbWktYm9sZCc7XFxuICAgIHNyYzogdXJsKC4vZm9udHMvTWFucm9wZS50dGYpO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ01hbnJvcGUgYm9sZCc7XFxuICAgIHNyYzogdXJsKC4vZm9udHMvTWFucm9wZS50dGYpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS12ZXJ5LWRhcmstZ3JheWlzaC1ibHVlOiBoc2woMjE3LCAxOSUsIDM1JSk7XFxuICAgIC0tZGVzYXR1cmF0ZWQtZGFyay1ibHVlOiBoc2woMjE0LCAxNyUsIDUxJSk7XFxuICAgIC0tZ3JheWlzaC1ibHVlOiBoc2woMjEyLCAyMyUsIDY5JSk7XFxuICAgIC0tbGlnaHQtZ3JheWlzaC1ibHVlOiBoc2woMjEwLCA0NiUsIDk1JSk7XFxuICAgIC0tZm9udC1zaXplOiAxM3B4O1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgZm9udC1zaXplOiA2Mi41JTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmF5aXNoLWJsdWUpO1xcbiAgICBcXG59XFxuXFxuLm15Qm9keSB7XFxuICAgIG1heC13aWR0aDogMzc1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ01hbnJvcGUgc2VtaS1ib2xkJztcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiaW1hZ2VcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJib2R5XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICBcXFwic2hhcmVcXFwiO1xcbiAgICBcXG59XFxuXFxuLm15SGVhZGVyRGl2IHtcXG4gICAgYmFja2dyb3VuZDogdXJsKC4vaW1hZ2VzL2RyYXdlcnMuanBnKSBuby1yZXBlYXQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHggMTJweCAwIDA7XFxuICAgIHdpZHRoOiAzNzVweDtcXG4gICAgaGVpZ2h0OiAyNDVweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZ3JpZC1hcmVhOiBpbWFnZTtcXG59XFxuXFxuLm15SGVhZGVySW1nIHtcXG4gICAgbWF4LXdpZHRoOiAzNzVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4IDAgMDtcXG59XFxuXFxuLm15Q2FyZCB7XFxuICAgIGdyaWQtYXJlYTogYm9keTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImhlYWRlclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgXFxcInBhcmFncmFwaFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgXFxcInVzZXJcXFwiO1xcbiAgICBnYXA6IDEuNXJlbTtcXG4gICAgbWFyZ2luLXRvcDogNHJlbTtcXG59XFxuXFxuLm15Q2FyZEhlYWRlciB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTWFucm9wZSBib2xkJztcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICBjb2xvcjogdmFyKC0tdmVyeS1kYXJrLWdyYXlpc2gtYmx1ZSk7XFxuICAgIG1hcmdpbi1pbmxpbmU6IDRyZW07XFxufVxcblxcbi5teUNhcmRCb2R5IHtcXG4gICAgZ3JpZC1hcmVhOiBwYXJhZ3JhcGg7XFxuICAgIG1heC13aWR0aDogMjU3cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgICBtYXJnaW4taW5saW5lOiA0cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZGVzYXR1cmF0ZWQtZGFyay1ibHVlKTtcXG59XFxuXFxuLmluZm9Db250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxufVxcblxcbi51c2VySW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC1hcmVhOiB1c2VyO1xcbiAgICBcXG4gICAgbWFyZ2luLWlubGluZTogNHJlbTtcXG4gICAgLyogYW5pbWF0ZSBtYXJnaW4tYm90dG9tIGFzIHdlbGwgYXMgb3BhY2l0eVxcbiAgICBvbiBjbGljay4uLmRvIGEgc2xpZGUgYW5pbWF0aW9uIHRoYXQgbWFrZXMgdGhlIGluZm8gc2xpZGUgb3V0IHJpZ2h0XFxuICAgIGFuZCBhcHBlYXIgdW5kZXJuZWF0aCB0aGUgc2hhcmUgcG9ydGlvbiAqL1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2Utb3V0O1xcbn1cXG5cXG4uZmFkZU91dCB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zbGF0ZTogMzc1cHg7XFxufVxcblxcbi5wcm9maWxlUGljIHtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4udXNlckRhdGEge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDNyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogLjI1cmVtO1xcbn1cXG5cXG4udXNlck5hbWUge1xcbiAgICBmb250LWZhbWlseTogJ01hbnJvcGUgYm9sZCc7XFxuICAgIGNvbG9yOiB2YXIoLS12ZXJ5LWRhcmstZ3JheWlzaC1ibHVlKTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi51c2VyRGF0ZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5aXNoLWJsdWUpO1xcbn1cXG5cXG4uYnV0dG9uQ29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JheWlzaC1ibHVlKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBzY2FsZSAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uYnV0dG9uQ29udGFpbmVyOmhvdmVyIHtcXG4gICAgc2NhbGU6IDEuMTtcXG59XFxuXFxuLnNoYXJlQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICAvKiBBbmltYXRlIHRoZSBwYWRkaW5nLWlubGluZS9ibG9jayAmIG1heC1oZWlnaHQvb3ZlcmZsb3cgb24gY2xpY2sgKi9cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZlcnktZGFyay1ncmF5aXNoLWJsdWUpO1xcbiAgICBwYWRkaW5nLWlubGluZTogNHJlbTtcXG4gICAgcGFkZGluZy1ibG9jazogMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDEycHggMTJweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBib3R0b206IDA7XFxuICAgIC8qIENvbnRyb2wgdGhlIGVsZW1lbnQgd2l0aCBvcGFjaXR5ICovXFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XFxufVxcblxcbi5mYWRlSW4ge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc2hhcmUge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWdyYXlpc2gtYmx1ZSk7XFxufVxcblxcbi5zaGFyZUljb25Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAxMDBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDNyZW07XFxufVxcblxcbi5mYWNlYm9va0ljb24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IHNjYWxlIDAuNHMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5mYWNlYm9va0ljb246aG92ZXIge1xcbiAgICBzY2FsZTogMS4yO1xcbn1cXG5cXG4udHdpdHRlckljb24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IHNjYWxlIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50d2l0dGVySWNvbjpob3ZlciB7XFxuICAgIHNjYWxlOiAxLjI7XFxufVxcblxcbi5waW50ZXJlc3RJY29uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBzY2FsZSAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ucGludGVyZXN0SWNvbjpob3ZlciB7XFxuICAgIHNjYWxlOiAxLjI7XFxufVxcblxcbi5pbnZlcnRlZFNoYXJlQ29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZXNhdHVyYXRlZC1kYXJrLWJsdWUpO1xcbiAgICB0cmFuc2l0aW9uOiBzY2FsZSAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uaW52ZXJ0ZWRTaGFyZUNvbnRhaW5lcjpob3ZlciB7XFxuICAgIHNjYWxlOiAxLjE7XFxufVxcblxcbi5zaGFyZUNvbnRhaW5lckJ1dHRvbiB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBpbnZlcnQoMSk7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XFxuICAgIFxcbiAgICAubXlCb2R5IHtcXG4gICAgICAgIG1heC13aWR0aDogNzcwcHg7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiaW1hZ2UgYm9keVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJpbWFnZSBzaGFyZVxcXCI7XFxuICAgICAgICBcXG4gICAgfVxcbiAgICBcXG4gICAgLm15SGVhZGVyRGl2IHtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweCAwIDAgOHB4O1xcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAzNDNweDtcXG4gICAgfVxcbiAgICBcXG4gICAgLm15SGVhZGVySW1nIHtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweCAwIDAgOHB4O1xcbiAgICAgICAgaGVpZ2h0OiAzNDNweDtcXG4gICAgfVxcbiAgICBcXG4gICAgLm15Q2FyZEhlYWRlciB7XFxuICAgICAgICBmb250LXNpemU6IDIuMnJlbTtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzLjJyZW07XFxuICAgICAgICBtaW4td2lkdGg6IDM3MHB4O1xcbiAgICB9XFxuXFxuICAgIC5teUNhcmRIZWFkZXIgcCB7XFxuXFxuICAgIH1cXG4gICAgXFxuICAgIC5teUNhcmRCb2R5IHtcXG4gICAgICAgIG1heC13aWR0aDogNDZjaDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XFxuICAgIH1cXG5cXG4gICAgLm15Q2FyZEJvZHkgcCB7XFxuICAgICAgICBsaW5lLWhlaWdodDogMi4zcmVtO1xcbiAgICB9XFxuICAgIFxcbiAgICAuaW5mb0NvbnRhaW5lciB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIFxcbiAgICB9XFxuICAgIFxcbiAgICAudXNlckluZm8ge1xcbiAgICAgICAgLyogYW5pbWF0ZSBtYXJnaW4tYm90dG9tIGFzIHdlbGwgYXMgb3BhY2l0eVxcbiAgICAgICAgb24gY2xpY2suLi5kbyBhIHNsaWRlIGFuaW1hdGlvbiB0aGF0IG1ha2VzIHRoZSBpbmZvIHNsaWRlIG91dCByaWdodFxcbiAgICAgICAgYW5kIGFwcGVhciB1bmRlcm5lYXRoIHRoZSBzaGFyZSBwb3J0aW9uICovXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB6LWluZGV4OiAyO1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1vdXQ7XFxuICAgIH1cXG4gICAgXFxuICAgIC5mYWRlT3V0IHtcXG4gICAgICAgIG9wYWNpdHk6IHVuc2V0O1xcbiAgICAgICAgdHJhbnNsYXRlOiB1bnNldDtcXG4gICAgfVxcbiAgICBcXG4gICAgLnByb2ZpbGVQaWMge1xcbiAgICAgICAgd2lkdGg6IDQ1cHg7XFxuICAgICAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgIH1cXG4gICAgXFxuICAgIC51c2VyRGF0YSB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE0LjNyZW07XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1heC13aWR0aDogMTVyZW07XFxuICAgIH1cXG4gICAgXFxuICAgIC51c2VyTmFtZSB7XFxuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgfVxcbiAgICBcXG4gICAgLmJ1dHRvbkNvbnRhaW5lciB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1heC13aWR0aDogMzVweDtcXG4gICAgICAgIGhlaWdodDogMzVweDtcXG4gICAgICAgIHRyYW5zaXRpb246IHNjYWxlIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgIH1cXG4gICAgXFxuICAgIC5idXR0b25Db250YWluZXI6aG92ZXIge1xcbiAgICAgICAgc2NhbGU6IDEuMTtcXG4gICAgfVxcbiAgICBcXG4gICAgLnNoYXJlQ29udGFpbmVyIHtcXG4gICAgICAgIC8qIEFuaW1hdGUgdGhlIHBhZGRpbmctaW5saW5lL2Jsb2NrICYgbWF4LWhlaWdodC9vdmVyZmxvdyBvbiBjbGljayAqL1xcbiAgICAgICAgd2lkdGg6IDYwJTtcXG4gICAgICAgIHBhZGRpbmctaW5saW5lOiB1bnNldDtcXG4gICAgICAgIHBhZGRpbmctYmxvY2s6IDJyZW07XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICAgICAgYm90dG9tOiAxMDNweDtcXG4gICAgICAgIC8qIENvbnRyb2wgdGhlIGVsZW1lbnQgd2l0aCBvcGFjaXR5ICovXFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgcmlnaHQ6IC04OHB4O1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbjtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS12ZXJ5LWRhcmstZ3JheWlzaC1ibHVlKTtcXG4gICAgfVxcblxcbiAgICAuc2hhcmVDb250YWluZXI6YWZ0ZXIge1xcbiAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICB3aWR0aDogMDtcXG4gICAgICAgIGhlaWdodDogMDtcXG4gICAgICAgIG1hcmdpbjogMCAxMS4xcmVtO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiA1MHB4O1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgYm9yZGVyLXRvcDogMjVweCBzb2xpZCB2YXIoLS12ZXJ5LWRhcmstZ3JheWlzaC1ibHVlKTtcXG4gICAgICAgIGJvcmRlci1sZWZ0OiAyNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAyNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICB9XFxuICAgIFxcbiAgICAuZmFkZUluIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG4gICAgXFxuICAgIC5zaGFyZSB7XFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgICAgY29sb3I6IHZhcigtLWdyYXlpc2gtYmx1ZSk7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB0cmFuc2l0aW9uOiBzY2FsZSAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgICB9XFxuXFxuICAgIC5zaGFyZTpob3ZlciB7XFxuICAgICAgICBzY2FsZTogMS4xOyAgICAgICAgXFxuICAgIH1cXG4gICAgXFxuICAgIC5zaGFyZUljb25Db250YWluZXIge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiB1bnNldDtcXG4gICAgfVxcbiAgICBcXG4gICAgLmZhY2Vib29rSWNvbiB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB0cmFuc2l0aW9uOiBzY2FsZSAwLjRzIGVhc2UtaW4tb3V0O1xcbiAgICB9XFxuICAgIFxcbiAgICAudHdpdHRlckljb24ge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgdHJhbnNpdGlvbjogc2NhbGUgMC4ycyBlYXNlLWluLW91dDtcXG4gICAgfVxcbiAgICAgICBcXG4gICAgLnBpbnRlcmVzdEljb24ge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgdHJhbnNpdGlvbjogc2NhbGUgMC4ycyBlYXNlLWluLW91dDtcXG4gICAgfVxcbiAgICBcXG4gICAgLmludmVydGVkU2hhcmVDb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgbXlJbWFnZTEgZnJvbSAnLi9pbWFnZXMvYXZhdGFyLW1pY2hlbGxlLmpwZyc7XG5pbXBvcnQgbXlJbWFnZTIgZnJvbSAnLi9pbWFnZXMvZHJhd2Vycy5qcGcnO1xuaW1wb3J0IG15SW1hZ2UzIGZyb20gJy4vaW1hZ2VzL2ljb24tZmFjZWJvb2suc3ZnJztcbmltcG9ydCBteUltYWdlNCBmcm9tICcuL2ltYWdlcy9pY29uLXBpbnRlcmVzdC5zdmcnO1xuaW1wb3J0IG15SW1hZ2U1IGZyb20gJy4vaW1hZ2VzL2ljb24tc2hhcmUuc3ZnJztcbmltcG9ydCBteUltYWdlNiBmcm9tICcuL2ltYWdlcy9pY29uLXR3aXR0ZXIuc3ZnJ1xuaW1wb3J0IHsgZmFkZU91dCB9IGZyb20gJy4uL21vZHVsZXMvZmFkZU91dCc7XG5cbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcbiAgICBjb25zdCBteUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBteUJvZHkuY2xhc3NMaXN0LmFkZCgnbXlCb2R5Jyk7XG4gICAgXG4gICAgY29uc3QgbXlIZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBteUhlYWRlckRpdi5jbGFzc0xpc3QuYWRkKCdteUhlYWRlckRpdicpO1xuXG4gICAgY29uc3QgbXlIZWFkZXJJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBteUhlYWRlckltZy5zcmMgPSBteUltYWdlMjtcbiAgICBteUhlYWRlckltZy5jbGFzc0xpc3QuYWRkKCdteUhlYWRlckltZycpO1xuXG4gICAgbXlIZWFkZXJEaXYuYXBwZW5kKG15SGVhZGVySW1nKTtcbiAgICBcbiAgICBteUJvZHkuYXBwZW5kKG15SGVhZGVyRGl2KTtcblxuICAgIGNvbnN0IG15Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG15Q2FyZC5jbGFzc0xpc3QuYWRkKCdteUNhcmQnKTtcblxuICAgIGNvbnN0IG15Q2FyZEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG15Q2FyZEhlYWRlci5jbGFzc0xpc3QuYWRkKCdteUNhcmRIZWFkZXInKTtcblxuICAgIGNvbnN0IG15Q2FyZEhlYWRlclAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbXlDYXJkSGVhZGVyUC50ZXh0Q29udGVudCA9IGBTaGlmdCB0aGUgb3ZlcmFsbCBsb29rIGFuZCBmZWVsXG4gICAgYnkgYWRkaW5nIHRoZXNlIHdvbmRlcmZ1bCB0b3VjaGVzIHRvIGZ1cm5pdHVyZSBpbiB5b3VyIGhvbWVgO1xuXG4gICAgbXlDYXJkSGVhZGVyLmFwcGVuZChteUNhcmRIZWFkZXJQKTtcblxuICAgIGNvbnN0IG15Q2FyZEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBteUNhcmRCb2R5LmNsYXNzTGlzdC5hZGQoJ215Q2FyZEJvZHknKTtcblxuICAgIGNvbnN0IG15Q2FyZEJvZHlQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG15Q2FyZEJvZHlQLnRleHRDb250ZW50ID0gYEV2ZXIgYmVlbiBpbiBhIHJvb20gYW5kIGZlbHQgbGlrZVxuICAgIHNvbWV0aGluZyB3YXMgbWlzc2luZz8gUGVyaGFwcyBpdCBmZWx0IHNsaWdodGx5IGJhcmUgYW5kIHVuaW52aXRpbmcuXG4gICAgSSd2ZSBnb3Qgc29tZSBzaW1wbGUgdGlwcyB0byBoZWxwIHlvdSBtYWtlIGFueSByb29tIGZlZWwgY29tcGxldGUuYDtcblxuICAgIG15Q2FyZEJvZHkuYXBwZW5kKG15Q2FyZEJvZHlQKTtcblxuICAgIGNvbnN0IGluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2luZm9Db250YWluZXInKTtcblxuICAgIGNvbnN0IHVzZXJJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdXNlckluZm8uY2xhc3NMaXN0LmFkZCgndXNlckluZm8nKTtcblxuICAgIGNvbnN0IHByb2ZpbGVQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBwcm9maWxlUGljLnNyYyA9IG15SW1hZ2UxO1xuICAgIHByb2ZpbGVQaWMuY2xhc3NMaXN0LmFkZCgncHJvZmlsZVBpYycpXG5cbiAgICBjb25zdCB1c2VyRGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHVzZXJEYXRhLmNsYXNzTGlzdC5hZGQoJ3VzZXJEYXRhJyk7XG5cbiAgICBjb25zdCB1c2VyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB1c2VyTmFtZS5jbGFzc0xpc3QuYWRkKCd1c2VyTmFtZScpO1xuICAgIHVzZXJOYW1lLnRleHRDb250ZW50ID0gJ01pY2hlbGxlIEFwcGxldG9uJztcblxuICAgIGNvbnN0IHVzZXJEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHVzZXJEYXRlLmNsYXNzTGlzdC5hZGQoJ3VzZXJEYXRlJyk7XG4gICAgdXNlckRhdGUudGV4dENvbnRlbnQgPSAnMjggSnVuIDIwMjAnO1xuXG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbkNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGJ1dHRvbi5zcmMgPSBteUltYWdlNTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnbXlCdXR0b24nKTtcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kKGJ1dHRvbik7XG5cbiAgICBpbmZvQ29udGFpbmVyLmFwcGVuZCh1c2VySW5mbyk7XG5cbiAgICBjb25zdCBzaGFyZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNoYXJlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NoYXJlQ29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBzaGFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBzaGFyZS50ZXh0Q29udGVudCA9ICdzaGFyZSc7XG4gICAgc2hhcmUuY2xhc3NMaXN0LmFkZCgnc2hhcmUnKTtcblxuICAgIHNoYXJlQ29udGFpbmVyLmFwcGVuZChzaGFyZSk7XG5cbiAgICBjb25zdCBzaGFyZUljb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaGFyZUljb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2hhcmVJY29uQ29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBmYWNlYm9va0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBmYWNlYm9va0ljb24uc3JjID0gbXlJbWFnZTM7XG4gICAgZmFjZWJvb2tJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhY2Vib29rSWNvbicpO1xuICAgIHNoYXJlSWNvbkNvbnRhaW5lci5hcHBlbmQoZmFjZWJvb2tJY29uKTtcblxuICAgIGNvbnN0IHR3aXR0ZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgdHdpdHRlckljb24uc3JjID0gbXlJbWFnZTY7XG4gICAgdHdpdHRlckljb24uY2xhc3NMaXN0LmFkZCgndHdpdHRlckljb24nKTtcbiAgICBzaGFyZUljb25Db250YWluZXIuYXBwZW5kKHR3aXR0ZXJJY29uKTtcblxuICAgIGNvbnN0IHBpbnRlcmVzdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBwaW50ZXJlc3RJY29uLnNyYyA9IG15SW1hZ2U0O1xuICAgIHBpbnRlcmVzdEljb24uY2xhc3NMaXN0LmFkZCgncGludGVyZXN0SWNvbicpO1xuICAgIHNoYXJlSWNvbkNvbnRhaW5lci5hcHBlbmQocGludGVyZXN0SWNvbik7XG5cbiAgICBzaGFyZUNvbnRhaW5lci5hcHBlbmQoc2hhcmVJY29uQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGludmVydGVkU2hhcmVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbnZlcnRlZFNoYXJlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ludmVydGVkU2hhcmVDb250YWluZXInKTtcblxuICAgIGNvbnN0IHNoYXJlQ29udGFpbmVyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgc2hhcmVDb250YWluZXJCdXR0b24uc3JjID0gbXlJbWFnZTU7XG4gICAgc2hhcmVDb250YWluZXJCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2hhcmVDb250YWluZXJCdXR0b24nKTtcbiAgICBpbnZlcnRlZFNoYXJlQ29udGFpbmVyLmFwcGVuZChzaGFyZUNvbnRhaW5lckJ1dHRvbik7XG5cbiAgICBzaGFyZUNvbnRhaW5lci5hcHBlbmQoaW52ZXJ0ZWRTaGFyZUNvbnRhaW5lcik7XG5cbiAgICB1c2VySW5mby5hcHBlbmQocHJvZmlsZVBpYyk7XG4gICAgdXNlckluZm8uYXBwZW5kKHVzZXJEYXRhKTtcbiAgICB1c2VySW5mby5hcHBlbmQoYnV0dG9uQ29udGFpbmVyKTtcbiAgICBcbiAgICBpbmZvQ29udGFpbmVyLmFwcGVuZChzaGFyZUNvbnRhaW5lcik7XG5cbiAgICB1c2VyRGF0YS5hcHBlbmQodXNlck5hbWUpO1xuICAgIHVzZXJEYXRhLmFwcGVuZCh1c2VyRGF0ZSk7XG5cbiAgICBteUNhcmQuYXBwZW5kKG15Q2FyZEhlYWRlcik7XG4gICAgbXlDYXJkLmFwcGVuZChteUNhcmRCb2R5KTtcbiAgICBteUNhcmQuYXBwZW5kKGluZm9Db250YWluZXIpO1xuXG4gICAgbXlCb2R5LmFwcGVuZChteUNhcmQpO1xuICAgIFxuXG4gICAgcmV0dXJuIG15Qm9keTtcbn1cblxuZG9jdW1lbnQuYm9keS5hcHBlbmQoY29tcG9uZW50KCkpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZhZGVPdXQpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=