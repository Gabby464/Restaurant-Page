/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./slideshow/4.jpg */ "./src/slideshow/4.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".background>img{\r\n    width: 50px;\r\n    height: 30px;\r\n}\r\n* {\r\n    box-sizing: border-box;\r\n    padding:0px;\r\n    margin:0px;\r\n    font-family: 'Dancing Script', cursive;\r\n    font-family: 'IBM Plex Serif', serif;\r\n  }\r\n.content{ \r\n  width: 100%;\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5vh;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n.body-container{\r\n  background-color: rgba(255,255,255, .7);\r\n  color:aliceblue;\r\n  overflow: scroll;\r\n  max-height: calc(100% - 188px);\r\n}\r\n.body-container::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.cursive {\r\n  font-family: \"Dancing Script\", cursive;\r\n  font-size: 96px;\r\n  text-align: center;\r\n  text-transform: capitalize;\r\n \r\n}\r\n/* style the header  */\r\n\r\n.header{\r\n  width: 100vw;\r\n}\r\n.header > h1 {\r\n  color: #440d0fff;\r\n  text-shadow: 0 0 3px white, 0 0 5px black;\r\n}\r\n.header > h2 {\r\n  color: whitesmoke;\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-top: -10px;\r\n  margin-left: 100px;\r\n  font-size: 18px;\r\n  font-family: \"Dancing Script\";\r\n  font-weight: 100;\r\n}\r\n\r\n/* style the navbar */\r\n\r\n.nav-bar{\r\n  margin-bottom: 8vh;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    border: solid 1px beige;\r\n    \r\n}\r\n.navButtons{\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-content: center;\r\n  align-self: center;\r\n  width: 25vw;\r\n  color: beige;\r\n  background-color: firebrick;\r\n  height: 7vh;\r\n  font-family: 'Dancing Script';\r\n  font-size: x-large;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.navButtons:focus{\r\n  cursor: pointer;\r\n}\r\n\r\n/* style the home page */\r\n.bio>p{\r\n  display: flex;\r\n  /* justify-content: flex-end; */\r\n  flex-direction: column;\r\n  text-align: center;\r\n  gap: 20px;\r\n  font-weight: bold;\r\n  margin-right: 25vw;\r\n  margin-left: 25vw;\r\n  color:rgba(0, 0, 0, 0.8);\r\n  padding: 10px;\r\n}\r\nhr{\r\n  height: 12px;\r\n  border: 0;\r\n  box-shadow: inset 0 12px 12px -12px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n/* style the menu page  */\r\n.menu-container{\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: flex-start;\r\n  gap: 10px;\r\n}\r\n\r\n.name-price{\r\n  display: flex;\r\n  width: 30vw;\r\n  align-items: center;\r\n}\r\n.name-price .underline {\r\n  display: block;\r\n  width: 100%;\r\n  height: 1px;\r\n  margin-top: 1rem;\r\n  background-color: rgba(61,61,60,0.2);\r\n}\r\n.menu-description{\r\n  max-width: 30vw;\r\n  color: #525252;\r\n}\r\n.menu-header{\r\n  margin-bottom: 5vh;\r\n  text-decoration-line: underline;\r\n  color: black;\r\n  font-size: 35px;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n.price{\r\n  color: rgb(230, 89, 28);\r\n  font-weight: 900;\r\n}\r\n.name-item{\r\n  color: #292929;\r\n  font-size: 19px;;\r\n}\r\n.menu-section{\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 7px;\r\n\r\n}\r\n.items{\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n\r\n\r\n/* style the gallery */\r\n\r\n\r\n.body-container{\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100vh;\r\n  }\r\n.prev,\r\n.next {\r\n  cursor: pointer;\r\n  position: absolute;\r\n  top: 50%;\r\n  width: auto;\r\n  padding: 16px;\r\n  margin-top: -50px;\r\n  color: white;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n  border-radius: 0 3px 3px 0;\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n}\r\n.prev:hover,\r\n.next:hover {\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n}\r\n.next {\r\n    right: 0;\r\n    border-radius: 3px 0 0 3px;\r\n  }\r\n.prev, .next {\r\n  cursor: pointer;\r\n  position: absolute;\r\n  top: 50%;\r\n  width: auto;\r\n  padding: 16px;\r\n  margin-top: -50px;\r\n  color: white;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n  border-radius: 0 3px 3px 0;\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n}\r\n.gallery-container{\r\n  display: flex;\r\n  height: 100%;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.gallery-container>img{\r\n  width: 80%;\r\n}\r\n.map{\r\n  width: 100%;\r\n  height: calc(30vh + 50px);\r\n}\r\n.map>iframe{\r\n  width: 100%;\r\n  height: calc(30vh + 50px);\r\n}\r\n.contact-info{\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-items: center;\r\n  gap: 20px;\r\n  padding-top: 20px;\r\n}\r\n.info-tab>*{\r\n  text-align: center;\r\n}\r\n.info-tab>h1{\r\n  color:  black;\r\n  font-weight: bold;\r\n  margin-bottom: 30px;\r\n  margin-top: 20px;\r\n}\r\n.info-tab{\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 7px;\r\n}\r\n.info-tab>p{\r\n  color: #292929;\r\n  font-size: 19px;\r\n}\r\n  @media only screen and (max-width: 600px) {\r\n    .menu-container {\r\n      flex-direction: column;\r\n      align-items: center;\r\n    }\r\n    .menu-section{\r\n      width: 50vw;\r\n    }\r\n    .name-price{\r\n      width: 100%;\r\n    }\r\n    .body-container{\r\n      background-color: rgba(255,255,255, .4)\r\n    }\r\n  }", ""]);
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

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
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

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMainLayout": () => (/* binding */ createMainLayout)
/* harmony export */ });

const createMainLayout = (bodyContainer) => {

    function createInfoTab(title, ...info) {
        const infoDiv = document.createElement('div');
        infoDiv.className = 'info-tab';
        const infoTitle = document.createElement('h1');
        infoTitle.textContent = title;
        infoDiv.appendChild(infoTitle);
        console.log(info)
       for (let information of info){
            const infoP = document.createElement('p');
            infoP.textContent = information;
            infoDiv.appendChild(infoP);
        }
        return (infoDiv)
    }

    bodyContainer.innerHTML = ""
    const pageContent = document.createElement('div');
    pageContent.className = 'page-content'
    bodyContainer.append(pageContent)
    const mapDiv = document.createElement('div');
    mapDiv.className = 'map';
    mapDiv.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12397.194972006906!2d-120.60729177567022!3d39.031307491249244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809bb6ddbd111c3b%3A0xc611e23a42421cb5!2sEnd%20of%20the%20World!5e0!3m2!1sbg!2sbg!4v1670873855585!5m2!1sbg!2sbg"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    pageContent.appendChild(mapDiv);

    const contactDetails = document.createElement('div');
    contactDetails.className = 'contact-info';
    const location = createInfoTab('Location', 'End of the World', 'California, Usa');
    const hours = createInfoTab('Hours', 'Tue – Thu, 8 am – 10 pm', 'Fri – Sun, 8 am – 11 pm', 'Closed Mondays');
    const contact = createInfoTab('Contact', '(666) 777-6666', 'iHateWebpackSoooooBadly@gmail.com')
    contactDetails.append(location, hours, contact);
    pageContent.appendChild(contactDetails);

}



/***/ }),

/***/ "./src/galleryPage.js":
/*!****************************!*\
  !*** ./src/galleryPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGalleryElements": () => (/* binding */ createGalleryElements),
/* harmony export */   "createSlides": () => (/* binding */ createSlides),
/* harmony export */   "loadslides": () => (/* binding */ loadslides),
/* harmony export */   "plusSlides": () => (/* binding */ plusSlides),
/* harmony export */   "showSlides": () => (/* binding */ showSlides),
/* harmony export */   "slideIndex": () => (/* binding */ slideIndex)
/* harmony export */ });
//with the help ofhttps://www.w3schools.com/howto/howto_js_slideshow_gallery.asp
    const createGalleryElements = (bodyContainer) => {
    bodyContainer.innerHTML = '';
    const prevButton = document.createElement('prev');
    prevButton.className = 'prev'
    prevButton.innerHTML ='&#10094;';
    prevButton.addEventListener('click', function() {plusSlides(1)});
    const nextButton = document.createElement('next');
    nextButton.className = 'next'
    nextButton.innerHTML ='&#10095;';
    nextButton.addEventListener('click', function() {plusSlides(-1)}); 
    bodyContainer.append(prevButton, nextButton);
}
    function createSlides(path, bodyContainer) {
  const galeryContainer = document.createElement('div');
  galeryContainer.className = 'gallery-container';
  const imageEl = document.createElement('img');
  galeryContainer.appendChild(imageEl);
  imageEl.src = path;
  bodyContainer.appendChild(galeryContainer);
}
    let slideIndex = 1;
    function loadslides (){
    showSlides(slideIndex);
    }
    // Next/previous controls
    function plusSlides(index) {
      showSlides(slideIndex += index);
    }
    function showSlides(n) {
      let slides = document.getElementsByClassName('gallery-container');
      if (n > slides.length) {slideIndex = 1} // go back to the first
      if (n < 1) {slideIndex = slides.length} // go to the last
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[slideIndex-1].style.display = "flex";
}



/***/ }),

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHomePage": () => (/* binding */ createHomePage)
/* harmony export */ });
const createHomePage = (bodyContainer) => {
    bodyContainer.innerHTML = '';
    const bioDiv = document.createElement('div');
    bioDiv.className = 'bio';
    const bioParagraph = document.createElement('p');
    bioDiv.appendChild(bioParagraph);
    bioParagraph.innerHTML = "Scazz, is not the result of a coincidence, neither an impulse. Scazz Restaurant is rather a dream that has been cooking for years. It is the result of engineering the perfect food business and the perfect intimate atmosphere for our guests.<hr>After our vast experience in over 114 countries and 35+ years in the business, we have purified and distilled the good and the excellent of this art and eliminated the bad and the evil of this business. For us Scazz means perfection, sacrifice, exclusivity and creativity to the maximum expression.<hr>Scazz is destined to pamper and spoil our guests with Michelin style cuisine, diversity and attention to detail all into one unique experience."
    bodyContainer.appendChild(bioDiv);
}

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Item": () => (/* binding */ Item),
/* harmony export */   "menuCreator": () => (/* binding */ menuCreator)
/* harmony export */ });
class Item {
    constructor(Prname, price, description) {
        this.Prname = Prname;
        this.price = price;
        this.description = description;
    }
    createEl() {
        const itemDiv = document.createElement("div");
        itemDiv.className = "menu-item";

        const namePriceDiv = document.createElement("div");
        namePriceDiv.className = "name-price";
        itemDiv.appendChild(namePriceDiv);
        const header = document.createElement("h2");
        header.className = "name-item";
        header.textContent = this.Prname;
        namePriceDiv.appendChild(header);

        const span = document.createElement("span");
        span.className = "underline";
        namePriceDiv.appendChild(span);

        const price = document.createElement("div");
        price.className = "price";
        price.textContent = this.price;
        namePriceDiv.appendChild(price);

        const menuDescription = document.createElement("p");
        menuDescription.className = 'menu-description';
        menuDescription.textContent = this.description;
        itemDiv.appendChild(menuDescription);
        return itemDiv;
    }
}

const menuCreator = (bodyContainer) => {
    bodyContainer.innerHTML = ""
    const menuContainer = document.createElement("div");
    menuContainer.className = "menu-container";
    bodyContainer.appendChild(menuContainer); 
        //create nodes and return section element;
        class Section {
            constructor(content) {
                this.content = content
            }
            createElelment(content) {
                const mainDiv = document.createElement("div");
                mainDiv.className = 'menu-section';
                //main div = header + sectionItems
                const header = document.createElement("h1");
                header.className = 'menu-header';
                header.innerText = content;
                const sectionItems = document.createElement("div");
                sectionItems.class = "section-items";
                mainDiv.append(header, sectionItems);
                menuContainer.appendChild(mainDiv);
                return sectionItems;
            }
        }
        const createSections = () => {
            const salads = new Section();
            const saladItems = salads.createElelment('Salads');
            const main = new Section();
            const mainItems = main.createElelment('Main Courses');
            const desserts = new Section();
            const dessertItems = desserts.createElelment('Desserts')
            return([saladItems, mainItems, dessertItems])
        }

        ;
        const fillInSections = () => {
            const allSections = createSections()
            let saladItems, mainItems, dessertItems;
            [saladItems, mainItems, dessertItems] = allSections;
            saladItems.className = 'items';
            mainItems.className = 'items';
            dessertItems.className = 'items';
            const burrito = new Item('Burrito', '14.99USD', 'Wrap with veggies and rice, if you want we can add some meat in it');
            const pasta = new Item('Pasta', '18.99USD', 'Fresh pasta with homemade sauce made with mixed vegitables and mushrooms');
            const club = new Item('Club Sandwich', '11.99USD', 'Classic sandwich with ham and cheese, served with french fries');
            const trufflePasta = new Item('Truffle Pasta', '21.99USD', 'Fresh pasta with truffle sauce and chicken');
            const steak = new Item('Steak', '22.99USD', 'Beef steak served with baked potatos and a fresh salad');
            const cake = new Item('Cake', '7.99USD', 'Homemade chocolate cake, served with ice cream');
            const pancakes = new Item('Pancakes', '11.29USD', 'American pancakes served with various topings and fruit');
            const salad = new Item('Salad', '9.99USD', 'Chopped veggies with olive oil');
            const greekSalad = new Item('Greek Salad', '10.99USD', 'Chopped veggies with Feta cheese and olive oil')
        
            mainItems.append(club.createEl(), burrito.createEl(), steak.createEl(), pasta.createEl(), trufflePasta.createEl());
            saladItems.append(salad.createEl(), greekSalad.createEl());
            dessertItems.append(cake.createEl(), pancakes.createEl())
        }

        fillInSections()
}

/***/ }),

/***/ "./src/topPage.js":
/*!************************!*\
  !*** ./src/topPage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderTopPage": () => (/* binding */ renderTopPage)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _bg_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bg.jpg */ "./src/bg.jpg");


const renderTopPage = () => {
    //get content el
    const contentElement = document.querySelector('.content');
    const createHeader = () => {


        const headerDiv = document.createElement('div');
        headerDiv.className = 'header';
        const headerEl = document.createElement('h1');
        headerEl.textContent = 'Scazz';
        headerEl.className = "cursive"
        headerDiv.appendChild(headerEl);
        const headerTwoEl = document.createElement('h2');
        headerTwoEl.textContent = 'An experience...';
        headerDiv.appendChild(headerTwoEl);
        contentElement.appendChild(headerDiv);

    }
    //create nav
    const createNav = () => {
        const navEl = document.createElement('nav');
        navEl.className = 'nav-bar'
        const createButton = (id, content) => {
            const btn = document.createElement('button');
            btn.className = 'navButtons'
            btn.innerHTML = content;
            btn.setAttribute('id', id);
            navEl.appendChild(btn);
            return btn;
        }
        const homeBtn = createButton('home', 'Home');
        const menuBtn = createButton('menu', 'Menu');
        const galeryBtn = createButton('galery', 'Galery');
        const contactsBtn = createButton('contact', 'Contact us')
        contentElement.appendChild(navEl)
    }

   
        createHeader();
        createNav();
        const bodyContainer = document.createElement('div');
        bodyContainer.classList.add('body-container')
        contentElement.appendChild(bodyContainer);

    return(bodyContainer);
};



/***/ }),

/***/ "./src/bg.jpg":
/*!********************!*\
  !*** ./src/bg.jpg ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/bg.jpg";

/***/ }),

/***/ "./src/slideshow/1.jpg":
/*!*****************************!*\
  !*** ./src/slideshow/1.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/1.jpg";

/***/ }),

/***/ "./src/slideshow/2.jpg":
/*!*****************************!*\
  !*** ./src/slideshow/2.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/2.jpg";

/***/ }),

/***/ "./src/slideshow/3.jpg":
/*!*****************************!*\
  !*** ./src/slideshow/3.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/3.jpg";

/***/ }),

/***/ "./src/slideshow/4.jpg":
/*!*****************************!*\
  !*** ./src/slideshow/4.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/4.jpg";

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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "images": () => (/* binding */ images)
/* harmony export */ });
/* harmony import */ var _topPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topPage */ "./src/topPage.js");
/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homePage */ "./src/homePage.js");
/* harmony import */ var _bg_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bg.jpg */ "./src/bg.jpg");
/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuPage */ "./src/menuPage.js");
/* harmony import */ var _slideshow_1_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slideshow/1.jpg */ "./src/slideshow/1.jpg");
/* harmony import */ var _slideshow_2_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slideshow/2.jpg */ "./src/slideshow/2.jpg");
/* harmony import */ var _slideshow_3_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slideshow/3.jpg */ "./src/slideshow/3.jpg");
/* harmony import */ var _slideshow_4_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./slideshow/4.jpg */ "./src/slideshow/4.jpg");
/* harmony import */ var _galleryPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./galleryPage */ "./src/galleryPage.js");
/* harmony import */ var _contactPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contactPage */ "./src/contactPage.js");








const images = [_slideshow_1_jpg__WEBPACK_IMPORTED_MODULE_4__, _slideshow_2_jpg__WEBPACK_IMPORTED_MODULE_5__, _slideshow_3_jpg__WEBPACK_IMPORTED_MODULE_6__, _slideshow_4_jpg__WEBPACK_IMPORTED_MODULE_7__];



// require.context('./slideshow', true, /.jpg$/);
const bodyContainer = (0,_topPage__WEBPACK_IMPORTED_MODULE_0__.renderTopPage)(_bg_jpg__WEBPACK_IMPORTED_MODULE_2__);
(0,_homePage__WEBPACK_IMPORTED_MODULE_1__.createHomePage)(bodyContainer);

function listeners (){
    const menuBtn = document.getElementById('menu');
    const homeBtn = document.getElementById('home');
    const galleryBtn = document.getElementById('galery');
    const contactBtn = document.getElementById('contact');
    menuBtn.addEventListener('click', function () {(0,_menuPage__WEBPACK_IMPORTED_MODULE_3__.menuCreator)(bodyContainer)});
    homeBtn.addEventListener('click', function () {(0,_homePage__WEBPACK_IMPORTED_MODULE_1__.createHomePage)(bodyContainer)});
    galleryBtn.addEventListener('click', function () {renderSlideshow(bodyContainer)})
    contactBtn.addEventListener('click', function () {;(0,_contactPage__WEBPACK_IMPORTED_MODULE_9__.createMainLayout)(bodyContainer)})
}
listeners();

function renderSlideshow(bodyContainer) {
    (0,_galleryPage__WEBPACK_IMPORTED_MODULE_8__.createGalleryElements)(bodyContainer);
    (0,_galleryPage__WEBPACK_IMPORTED_MODULE_8__.createSlides)(_slideshow_1_jpg__WEBPACK_IMPORTED_MODULE_4__, bodyContainer);
    (0,_galleryPage__WEBPACK_IMPORTED_MODULE_8__.createSlides)(_slideshow_2_jpg__WEBPACK_IMPORTED_MODULE_5__, bodyContainer);
    (0,_galleryPage__WEBPACK_IMPORTED_MODULE_8__.createSlides)(_slideshow_3_jpg__WEBPACK_IMPORTED_MODULE_6__, bodyContainer);
    (0,_galleryPage__WEBPACK_IMPORTED_MODULE_8__.createSlides)(_slideshow_4_jpg__WEBPACK_IMPORTED_MODULE_7__, bodyContainer);
    (0,_galleryPage__WEBPACK_IMPORTED_MODULE_8__.loadslides)(_galleryPage__WEBPACK_IMPORTED_MODULE_8__.plusSlides, _galleryPage__WEBPACK_IMPORTED_MODULE_8__.showSlides)
}
})();

/******/ })()
;