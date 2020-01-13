/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/app/index.js","vendors~another~index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/slider.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/slider.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*-----------------------Slider---------------------------------------------------*/\r\nh1{\r\n    cursor: pointer;\r\n}\r\n.slid{\r\n    width: 100vw !important;\r\n    height: 100% !important;\r\n    position: absolute;\r\n    top: 0;\r\n    left:0;\r\n    transition: transform 0.4s;\r\n}\r\n\r\n.slid1{\r\n    background-color: #000068;\r\n    color: aliceblue;\r\n    transition-delay: 0.15s;\r\n}\r\n.slid2{\r\n    background-color: rgba(67, 61, 154, 1);\r\n    transition-delay: 0.1s;\r\n\r\n}\r\n.slid3{\r\n    background-color: #7df0c8;\r\n    transition-delay: 0.05s;\r\n\r\n}\r\n.slid4{\r\n    background-color: #000068;\r\n    color: aliceblue;\r\n    transition-delay: 0s;\r\n\r\n}\r\n.container {\r\n    height: 100vh !important;\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n@keyframes slidDown{\r\n    0%{\r\n        top: 0;\r\n    }\r\n    40%{\r\n        top:40vh;\r\n    }\r\n    60%{\r\n        top:40vh;\r\n    }\r\n\r\n    100% {\r\n        top:100vh;\r\n    }\r\n}\r\n@keyframes slidUp{\r\n    from {\r\n        top: 100vh;\r\n    }\r\n    100% {\r\n        top:0;\r\n    }\r\n}\r\n.down{\r\n    top: 100vh;\r\n    animation: 2s ease-in-out slidDown;\r\n}\r\n.up{\r\n    top: 0;\r\n    animation: 1s ease-in-out slidUp;\r\n}\r\n.show {\r\n    z-index: 9;\r\n    position: fixed;\r\n\r\n}\r\n/*----------------------------Arrow------------------------------------------------------*/\r\n@keyframes moveButton{\r\n    from {\r\n        margin-top: 0;\r\n    }\r\n    5%{\r\n        margin-top: 10px;\r\n    }\r\n    10%{\r\n        margin-top: 0;\r\n    }\r\n    15%{\r\n        margin-top: 10px;\r\n    }\r\n    20%{\r\n        margin-top: 0;\r\n    }\r\n    100%{\r\n        margin-top: 0;\r\n    }\r\n\r\n}\r\n.divArrowUP{\r\n    position: absolute;\r\n    width: 4em;\r\n    height: 4em;\r\n    padding: 8px 2px 2px 2px !important;\r\n    top:.5em;\r\n    left: calc(100vw - 6em);\r\n    border-radius: 50%;\r\n    z-index: 99;\r\n    outline:none;\r\n}\r\n.divArrowUP img {\r\n    height: 90%;\r\n    width: 90%;\r\n    /*transform: rotate(90deg);*/\r\n\r\n}\r\n.divArrowDown{\r\n    position: absolute;\r\n    width: 4em;\r\n    height: 4em;\r\n    transform: rotate(-90deg);\r\n    padding: 8px 2px 2px 2px !important;\r\n    top: calc(100% - 13%);\r\n    left: calc(100vw - 6em);\r\n    border-radius: 50%;\r\n    z-index: 99;\r\n    outline:none;\r\n}\r\n.divArrowDown img {\r\n    height: 90%;\r\n    width: 90%;\r\n    transform: rotate(90deg);\r\n\r\n}\r\n.animButton{\r\n    margin-top: 0;\r\n    animation: moveButton 5s ease-in-out infinite;\r\n}\r\n\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./slider.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/slider.css");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
// Module
exports.push([module.i, "*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n.displayCenter{\r\n    display: flex;\r\n    justify-content: center;\r\n    justify-items: center;\r\n    align-items: center;\r\n    align-content: center;\r\n}\r\n.none{\r\n     display: none;\r\n }\r\n/*----------------------------------------------------------------------------------------------*/\r\n.menu-btn {\r\n    position: absolute;\r\n    z-index: 10;\r\n    top: 0;\r\n    left: 0;\r\n    height: 70px;\r\n    width: 54px;\r\n    cursor: pointer;\r\n    background: url(https://iamturner.co.uk/codepen/menu-icon.png) no-repeat center;\r\n    background-size: 44px;\r\n}\r\n.menuOpen{\r\n    align-items: normal !important;\r\n    align-content: normal !important;\r\n}\r\n/*-----------------------------------------------------------------------------------------------*/\r\n@media screen and (max-width: 600px) {\r\n\r\n}\r\n\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = {};

function modulesToDom(moduleId, list, options) {
  for (var i = 0; i < list.length; i++) {
    var part = {
      css: list[i][1],
      media: list[i][2],
      sourceMap: list[i][3]
    };

    if (stylesInDom[moduleId][i]) {
      stylesInDom[moduleId][i](part);
    } else {
      stylesInDom[moduleId].push(addStyle(part, options));
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (moduleId, list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  moduleId = options.base ? moduleId + options.base : moduleId;
  list = list || [];

  if (!stylesInDom[moduleId]) {
    stylesInDom[moduleId] = [];
  }

  modulesToDom(moduleId, list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    if (!stylesInDom[moduleId]) {
      stylesInDom[moduleId] = [];
    }

    modulesToDom(moduleId, newList, options);

    for (var j = newList.length; j < stylesInDom[moduleId].length; j++) {
      stylesInDom[moduleId][j]();
    }

    stylesInDom[moduleId].length = newList.length;

    if (stylesInDom[moduleId].length === 0) {
      delete stylesInDom[moduleId];
    }
  };
};

/***/ }),

/***/ "./src/app/index.js":
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_downArrow_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/downArrow.png */ "./src/img/downArrow.png");
/* harmony import */ var _img_upArrow_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/upArrow.png */ "./src/img/upArrow.png");
/* harmony import */ var _slides_slide1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slides/slide1 */ "./src/app/slides/slide1.js");
/* harmony import */ var _slides_slide2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slides/slide2 */ "./src/app/slides/slide2.js");
/* harmony import */ var _slides_slide3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slides/slide3 */ "./src/app/slides/slide3.js");
/* harmony import */ var _slides_slide4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./slides/slide4 */ "./src/app/slides/slide4.js");









const obj = {
    container : document.querySelector('.container'),
    menuButton: document.querySelector('.menu-btn'),
    divArrowUp: document.querySelector('.divArrowUP'),
    divArrowDown: document.querySelector('.divArrowDown'),
    ArrowUp   : new Image(),
    ArrowDown : new Image(),
    massSlides: [],
    index     : null,
    initialX  : null,
    initialY  :null
}
//------------------------------------------------------------------------------------
function sliderContainer(){

    const cont = obj.container;

    cont.appendChild(_slides_slide4__WEBPACK_IMPORTED_MODULE_7__["default"]);
    cont.appendChild(_slides_slide3__WEBPACK_IMPORTED_MODULE_6__["default"]);
    cont.appendChild(_slides_slide2__WEBPACK_IMPORTED_MODULE_5__["default"]);
    cont.appendChild(_slides_slide1__WEBPACK_IMPORTED_MODULE_4__["default"]);

    obj.massSlides = cont.querySelectorAll('.slid');
}
//-------------------------------------------------------------------------------------
function arrowButtons() {

    const divArrowUp = obj.divArrowUp,
          divArrowDown = obj.divArrowDown;

    obj.ArrowUp.src = _img_upArrow_png__WEBPACK_IMPORTED_MODULE_3__["default"];
    obj.ArrowUp.alt = 'arrowUp';
    divArrowUp.appendChild( obj.ArrowUp);

    obj.ArrowDown.src = _img_downArrow_png__WEBPACK_IMPORTED_MODULE_2__["default"];
    obj.ArrowDown.alt = 'arrowDown';
    divArrowDown.appendChild(obj.ArrowDown);
}
//-----------------------------------------------------------------------------------
function lastItemOfArr() {
   const mass = obj.massSlides,
       len = mass.length,
       index = obj.index;

   if(index === 1){
       obj.divArrowUp.classList.remove('none');
       obj.divArrowDown.classList.add('none');
   }
   if(index === len-2){
       obj.divArrowUp.classList.add('none');
       obj.divArrowDown.classList.remove('none');
   }else {
       return;
   }

}
//------------------------------------------------------------------------------------
function sliderGoUp(item) {

    if (item.classList.contains('show')) {
        if (item.nextElementSibling && item.nextElementSibling !== obj.divArrowUp && item.nextElementSibling !== obj.menuButton) {
            lastItemOfArr();
            item.classList.remove('show', 'up');
            item.nextElementSibling.classList.remove('down');
            item.nextElementSibling.classList.add('show', 'up');

            return true;
           }
        }
    return false;

}
//-----------------------------------------------------------------------------------
function sliderGoDown(item) {

    if(item.classList.contains('show')) {
        if (item.previousElementSibling && item.previousElementSibling !== obj.divArrowDown && item.previousElementSibling !== obj.menuButton) {
            lastItemOfArr();
            item.classList.remove('show', 'up');
            item.classList.add('down');

            setTimeout(() => {
                item.previousElementSibling.classList.add('show');
                }, 2000);
            return true;
        }
    }
    return false;
}
//-----------------------------------------------------------------------------------
function changeSliderUP() {
    let mass = obj.massSlides,
        len = mass.length;
    obj.ArrowUp.classList.remove('animButton');

    for (let i = 0; i < len; i++) {
        obj.index = i;
        if(sliderGoUp(mass[i])) return;
    }
}
// ------------------------------------------------------------------------------------
function changeSliderDOWN() {
    let mass = obj.massSlides,
        len = mass.length;

    for (let i = 0; i < len; i++){
        obj.index = i;
        if(sliderGoDown(mass[i])) return;
    }

}
//---------------------Swipe Up / Down / Left / Right-------------------------------------------------------------
function startTouch(e) {
       obj.initialX = e.touches[0].clientX;
       obj.initialY = e.touches[0].clientY;
}
function moveTouch(e) {
        if (obj.initialX === null) {
            return;
        }

        if (obj.initialY === null) {
            return;
        }

        let currentX = e.touches[0].clientX,
            currentY = e.touches[0].clientY;

        let diffX = obj.initialX - currentX,
            diffY = obj.initialY - currentY;

        if (Math.abs(diffX) > Math.abs(diffY)) {
            // sliding horizontally
            if (diffX > 0) {
                // swiped left
                // console.log("swiped left");
            } else {
                // swiped right
                // console.log("swiped right");
            }
        } else {
            // sliding vertically
            if (diffY > 0) {
                // swiped up
                changeSliderUP();
            } else {
                // swiped down
                changeSliderDOWN();
            }
        }

        obj.initialX = null;
        obj.initialY = null;

        e.preventDefault();
}
//----------------------------------------------------------------------------
function buttonDown(event) {

    if (event.code === 'ArrowDown') {
        changeSliderDOWN();
    }
    if (event.code === 'ArrowUp') {
        changeSliderUP();
    }
}
//--------------------------------------------------------------------------
function mouseWheel(e) {
    let delta = e.deltaY || e.detail;
    delta > 0 ? changeSliderUP() : changeSliderDOWN();

}
//-----------------------------------------------------------------------------------
function startListener(){
    document.addEventListener('keydown', buttonDown);
    window.addEventListener('wheel', mouseWheel);

    const container = obj.container;
    container.addEventListener("touchstart", startTouch, false);
    container.addEventListener("touchmove", moveTouch, false);
}
//-----------------------------------------------------------------------------------
function stopListener(){
    document.removeEventListener('keydown', buttonDown);
    window.removeEventListener('wheel', mouseWheel);

    const container = obj.container;
    container.removeEventListener("touchstart", startTouch);
    container.removeEventListener("touchmove", moveTouch);
}
//--------------------------------------------------------------------------------
function removeChange(item) {
    item.style.transform = 'none';
    item.style.borderRadius = `0`;
    item.classList.remove('menuOpen');
}
//---------------------------------------------------------------------------------
function choosePage(e) {
    let mass = obj.massSlides,
        id = this.id,
        len = mass.length;

    for (let i = len-1; i >= 0; i--){
        if(mass[i].id === id) {
            removeChange(mass[i]);
            continue;
        }
        if(mass[i].classList.contains('show')) {
            if (mass[i].previousElementSibling && mass[i].previousElementSibling !== obj.menuButton) {
                mass[i].classList.remove('show', 'up');
                mass[i].classList.add('down');
                mass[i].previousElementSibling.classList.add('show');

            }
        }
        removeChange(mass[i]);
    }
    startListener();
}
//-----------------------------------------------------------------------------------
function menuShow() {

    const mass = obj.massSlides,
        len = mass.length;
    let transForm = 0;
    mass.forEach( el => {
        sliderGoUp(el);
    });

    for (let i = 0; i < len; i++){

        if(!mass[i].style.transform || mass[i].style.transform === 'none'){
            if(i){
                transForm += 80;
                mass[i].style.borderRadius = `8px 8px 0 0`;
                mass[i].style.transform = `translateY(${transForm}px)`;

            }
            mass[i].classList.add('menuOpen');
            mass[i].addEventListener('click', choosePage);
            obj.divArrowDown.classList.add('none');
            obj.divArrowUp.classList.add('none');
            stopListener();
        }else {
            mass[i].style.transform = 'none';
            mass[i].classList.remove('menuOpen');
            mass[i].style.borderRadius = `0`;
            obj.divArrowDown.classList.remove('none');
            startListener();
            mass[i].removeEventListener('click', choosePage);

        }
    }
}
// -----------------------------------------------------------------------------------
obj.menuButton.addEventListener('click', menuShow);
sliderContainer();
startListener();
arrowButtons();




/***/ }),

/***/ "./src/app/slides/slide1.js":
/*!**********************************!*\
  !*** ./src/app/slides/slide1.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


const slid1 = document.createElement('div');

slid1.classList.add('slid', 'slid1', 'show', 'displayCenter');
slid1.style.height = document.documentElement.clientHeight + 'px';
slid1.innerHTML = `<h1>Главная</h1>`;
slid1.id = 'Main';


/* harmony default export */ __webpack_exports__["default"] = (slid1);

/***/ }),

/***/ "./src/app/slides/slide2.js":
/*!**********************************!*\
  !*** ./src/app/slides/slide2.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


const slid2 = document.createElement('div');

slid2.classList.add('slid', 'slid2', 'displayCenter');
slid2.style.height = document.documentElement.clientHeight + 'px';
slid2.innerHTML = `<h1>О нас</h1>`;
slid2.id = 'About Us';


/* harmony default export */ __webpack_exports__["default"] = (slid2);

/***/ }),

/***/ "./src/app/slides/slide3.js":
/*!**********************************!*\
  !*** ./src/app/slides/slide3.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


const slid3 = document.createElement('div');

slid3.classList.add('slid', 'slid3', 'displayCenter');
slid3.style.height = document.documentElement.clientHeight + 'px';
slid3.innerHTML = `<h1>Наши работы</h1>`;
slid3.id = 'Our work';




/* harmony default export */ __webpack_exports__["default"] = (slid3);

/***/ }),

/***/ "./src/app/slides/slide4.js":
/*!**********************************!*\
  !*** ./src/app/slides/slide4.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


const slid4 = document.createElement('div');

slid4.classList.add('slid', 'slid4', 'displayCenter');
slid4.style.height = document.documentElement.clientHeight + 'px';
slid4.innerHTML =  `<h1>Контакты</h1>`;
slid4.id = 'Contacts';

/* harmony default export */ __webpack_exports__["default"] = (slid4);

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(module.i, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/img/downArrow.png":
/*!*******************************!*\
  !*** ./src/img/downArrow.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/downArrow.png");

/***/ }),

/***/ "./src/img/upArrow.png":
/*!*****************************!*\
  !*** ./src/img/upArrow.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/upArrow.png");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zbGlkZXIuY3NzIiwid2VicGFjazovLy8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zbGlkZXMvc2xpZGUxLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2xpZGVzL3NsaWRlMi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NsaWRlcy9zbGlkZTMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zbGlkZXMvc2xpZGU0LmpzIiwid2VicGFjazovLy8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9kb3duQXJyb3cucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvdXBBcnJvdy5wbmciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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ZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJpbmRleFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2FwcC9pbmRleC5qc1wiLFwidmVuZG9yc35hbm90aGVyfmluZGV4XCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1TbGlkZXItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbmgxe1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5zbGlke1xcclxcbiAgICB3aWR0aDogMTAwdncgIWltcG9ydGFudDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OjA7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZDF7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwNjg7XFxyXFxuICAgIGNvbG9yOiBhbGljZWJsdWU7XFxyXFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMTVzO1xcclxcbn1cXHJcXG4uc2xpZDJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjcsIDYxLCAxNTQsIDEpO1xcclxcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xcclxcblxcclxcbn1cXHJcXG4uc2xpZDN7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZGYwYzg7XFxyXFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMDVzO1xcclxcblxcclxcbn1cXHJcXG4uc2xpZDR7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwNjg7XFxyXFxuICAgIGNvbG9yOiBhbGljZWJsdWU7XFxyXFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xcclxcblxcclxcbn1cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgc2xpZERvd257XFxyXFxuICAgIDAle1xcclxcbiAgICAgICAgdG9wOiAwO1xcclxcbiAgICB9XFxyXFxuICAgIDQwJXtcXHJcXG4gICAgICAgIHRvcDo0MHZoO1xcclxcbiAgICB9XFxyXFxuICAgIDYwJXtcXHJcXG4gICAgICAgIHRvcDo0MHZoO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgICAgdG9wOjEwMHZoO1xcclxcbiAgICB9XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgc2xpZFVwe1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICAgIHRvcDogMTAwdmg7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgICB0b3A6MDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4uZG93bntcXHJcXG4gICAgdG9wOiAxMDB2aDtcXHJcXG4gICAgYW5pbWF0aW9uOiAycyBlYXNlLWluLW91dCBzbGlkRG93bjtcXHJcXG59XFxyXFxuLnVwe1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGFuaW1hdGlvbjogMXMgZWFzZS1pbi1vdXQgc2xpZFVwO1xcclxcbn1cXHJcXG4uc2hvdyB7XFxyXFxuICAgIHotaW5kZXg6IDk7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHJcXG59XFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQXJyb3ctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbkBrZXlmcmFtZXMgbW92ZUJ1dHRvbntcXHJcXG4gICAgZnJvbSB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgICB9XFxyXFxuICAgIDUle1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgfVxcclxcbiAgICAxMCV7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgICB9XFxyXFxuICAgIDE1JXtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgMjAle1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gICAgfVxcclxcbiAgICAxMDAle1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbn1cXHJcXG4uZGl2QXJyb3dVUHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogNGVtO1xcclxcbiAgICBoZWlnaHQ6IDRlbTtcXHJcXG4gICAgcGFkZGluZzogOHB4IDJweCAycHggMnB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIHRvcDouNWVtO1xcclxcbiAgICBsZWZ0OiBjYWxjKDEwMHZ3IC0gNmVtKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICB6LWluZGV4OiA5OTtcXHJcXG4gICAgb3V0bGluZTpub25lO1xcclxcbn1cXHJcXG4uZGl2QXJyb3dVUCBpbWcge1xcclxcbiAgICBoZWlnaHQ6IDkwJTtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgLyp0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7Ki9cXHJcXG5cXHJcXG59XFxyXFxuLmRpdkFycm93RG93bntcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogNGVtO1xcclxcbiAgICBoZWlnaHQ6IDRlbTtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcXHJcXG4gICAgcGFkZGluZzogOHB4IDJweCAycHggMnB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIHRvcDogY2FsYygxMDAlIC0gMTMlKTtcXHJcXG4gICAgbGVmdDogY2FsYygxMDB2dyAtIDZlbSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgei1pbmRleDogOTk7XFxyXFxuICAgIG91dGxpbmU6bm9uZTtcXHJcXG59XFxyXFxuLmRpdkFycm93RG93biBpbWcge1xcclxcbiAgICBoZWlnaHQ6IDkwJTtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcclxcblxcclxcbn1cXHJcXG4uYW5pbUJ1dHRvbntcXHJcXG4gICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gICAgYW5pbWF0aW9uOiBtb3ZlQnV0dG9uIDVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2xpZGVyLmNzc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuZXhwb3J0cy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIip7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuLmRpc3BsYXlDZW50ZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLm5vbmV7XFxyXFxuICAgICBkaXNwbGF5OiBub25lO1xcclxcbiB9XFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG4ubWVudS1idG4ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IDEwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGhlaWdodDogNzBweDtcXHJcXG4gICAgd2lkdGg6IDU0cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vaWFtdHVybmVyLmNvLnVrL2NvZGVwZW4vbWVudS1pY29uLnBuZykgbm8tcmVwZWF0IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiA0NHB4O1xcclxcbn1cXHJcXG4ubWVudU9wZW57XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBub3JtYWwgIWltcG9ydGFudDtcXHJcXG4gICAgYWxpZ24tY29udGVudDogbm9ybWFsICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuXFxyXFxufVxcclxcblxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obW9kdWxlSWQsIGxpc3QsIG9wdGlvbnMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBjc3M6IGxpc3RbaV1bMV0sXG4gICAgICBtZWRpYTogbGlzdFtpXVsyXSxcbiAgICAgIHNvdXJjZU1hcDogbGlzdFtpXVszXVxuICAgIH07XG5cbiAgICBpZiAoc3R5bGVzSW5Eb21bbW9kdWxlSWRdW2ldKSB7XG4gICAgICBzdHlsZXNJbkRvbVttb2R1bGVJZF1baV0ocGFydCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tW21vZHVsZUlkXS5wdXNoKGFkZFN0eWxlKHBhcnQsIG9wdGlvbnMpKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChtb2R1bGVJZCwgbGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBtb2R1bGVJZCA9IG9wdGlvbnMuYmFzZSA/IG1vZHVsZUlkICsgb3B0aW9ucy5iYXNlIDogbW9kdWxlSWQ7XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuXG4gIGlmICghc3R5bGVzSW5Eb21bbW9kdWxlSWRdKSB7XG4gICAgc3R5bGVzSW5Eb21bbW9kdWxlSWRdID0gW107XG4gIH1cblxuICBtb2R1bGVzVG9Eb20obW9kdWxlSWQsIGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXN0eWxlc0luRG9tW21vZHVsZUlkXSkge1xuICAgICAgc3R5bGVzSW5Eb21bbW9kdWxlSWRdID0gW107XG4gICAgfVxuXG4gICAgbW9kdWxlc1RvRG9tKG1vZHVsZUlkLCBuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIGogPSBuZXdMaXN0Lmxlbmd0aDsgaiA8IHN0eWxlc0luRG9tW21vZHVsZUlkXS5sZW5ndGg7IGorKykge1xuICAgICAgc3R5bGVzSW5Eb21bbW9kdWxlSWRdW2pdKCk7XG4gICAgfVxuXG4gICAgc3R5bGVzSW5Eb21bbW9kdWxlSWRdLmxlbmd0aCA9IG5ld0xpc3QubGVuZ3RoO1xuXG4gICAgaWYgKHN0eWxlc0luRG9tW21vZHVsZUlkXS5sZW5ndGggPT09IDApIHtcbiAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVttb2R1bGVJZF07XG4gICAgfVxuICB9O1xufTsiLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgJy4uL2Nzcy9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgQXJyb3dEb3duIGZyb20gJy4uL2ltZy9kb3duQXJyb3cucG5nJztcclxuaW1wb3J0IEFycm93VXAgZnJvbSAnLi4vaW1nL3VwQXJyb3cucG5nJztcclxuaW1wb3J0IHNsaWQxIGZyb20gXCIuL3NsaWRlcy9zbGlkZTFcIjtcclxuaW1wb3J0IHNsaWQyIGZyb20gXCIuL3NsaWRlcy9zbGlkZTJcIjtcclxuaW1wb3J0IHNsaWQzIGZyb20gXCIuL3NsaWRlcy9zbGlkZTNcIjtcclxuaW1wb3J0IHNsaWQ0IGZyb20gXCIuL3NsaWRlcy9zbGlkZTRcIjtcclxuXHJcbmNvbnN0IG9iaiA9IHtcclxuICAgIGNvbnRhaW5lciA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKSxcclxuICAgIG1lbnVCdXR0b246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWJ0bicpLFxyXG4gICAgZGl2QXJyb3dVcDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpdkFycm93VVAnKSxcclxuICAgIGRpdkFycm93RG93bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpdkFycm93RG93bicpLFxyXG4gICAgQXJyb3dVcCAgIDogbmV3IEltYWdlKCksXHJcbiAgICBBcnJvd0Rvd24gOiBuZXcgSW1hZ2UoKSxcclxuICAgIG1hc3NTbGlkZXM6IFtdLFxyXG4gICAgaW5kZXggICAgIDogbnVsbCxcclxuICAgIGluaXRpYWxYICA6IG51bGwsXHJcbiAgICBpbml0aWFsWSAgOm51bGxcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBzbGlkZXJDb250YWluZXIoKXtcclxuXHJcbiAgICBjb25zdCBjb250ID0gb2JqLmNvbnRhaW5lcjtcclxuXHJcbiAgICBjb250LmFwcGVuZENoaWxkKHNsaWQ0KTtcclxuICAgIGNvbnQuYXBwZW5kQ2hpbGQoc2xpZDMpO1xyXG4gICAgY29udC5hcHBlbmRDaGlsZChzbGlkMik7XHJcbiAgICBjb250LmFwcGVuZENoaWxkKHNsaWQxKTtcclxuXHJcbiAgICBvYmoubWFzc1NsaWRlcyA9IGNvbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWQnKTtcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gYXJyb3dCdXR0b25zKCkge1xyXG5cclxuICAgIGNvbnN0IGRpdkFycm93VXAgPSBvYmouZGl2QXJyb3dVcCxcclxuICAgICAgICAgIGRpdkFycm93RG93biA9IG9iai5kaXZBcnJvd0Rvd247XHJcblxyXG4gICAgb2JqLkFycm93VXAuc3JjID0gQXJyb3dVcDtcclxuICAgIG9iai5BcnJvd1VwLmFsdCA9ICdhcnJvd1VwJztcclxuICAgIGRpdkFycm93VXAuYXBwZW5kQ2hpbGQoIG9iai5BcnJvd1VwKTtcclxuXHJcbiAgICBvYmouQXJyb3dEb3duLnNyYyA9IEFycm93RG93bjtcclxuICAgIG9iai5BcnJvd0Rvd24uYWx0ID0gJ2Fycm93RG93bic7XHJcbiAgICBkaXZBcnJvd0Rvd24uYXBwZW5kQ2hpbGQob2JqLkFycm93RG93bik7XHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBsYXN0SXRlbU9mQXJyKCkge1xyXG4gICBjb25zdCBtYXNzID0gb2JqLm1hc3NTbGlkZXMsXHJcbiAgICAgICBsZW4gPSBtYXNzLmxlbmd0aCxcclxuICAgICAgIGluZGV4ID0gb2JqLmluZGV4O1xyXG5cclxuICAgaWYoaW5kZXggPT09IDEpe1xyXG4gICAgICAgb2JqLmRpdkFycm93VXAuY2xhc3NMaXN0LnJlbW92ZSgnbm9uZScpO1xyXG4gICAgICAgb2JqLmRpdkFycm93RG93bi5jbGFzc0xpc3QuYWRkKCdub25lJyk7XHJcbiAgIH1cclxuICAgaWYoaW5kZXggPT09IGxlbi0yKXtcclxuICAgICAgIG9iai5kaXZBcnJvd1VwLmNsYXNzTGlzdC5hZGQoJ25vbmUnKTtcclxuICAgICAgIG9iai5kaXZBcnJvd0Rvd24uY2xhc3NMaXN0LnJlbW92ZSgnbm9uZScpO1xyXG4gICB9ZWxzZSB7XHJcbiAgICAgICByZXR1cm47XHJcbiAgIH1cclxuXHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gc2xpZGVyR29VcChpdGVtKSB7XHJcblxyXG4gICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykpIHtcclxuICAgICAgICBpZiAoaXRlbS5uZXh0RWxlbWVudFNpYmxpbmcgJiYgaXRlbS5uZXh0RWxlbWVudFNpYmxpbmcgIT09IG9iai5kaXZBcnJvd1VwICYmIGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nICE9PSBvYmoubWVudUJ1dHRvbikge1xyXG4gICAgICAgICAgICBsYXN0SXRlbU9mQXJyKCk7XHJcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycsICd1cCcpO1xyXG4gICAgICAgICAgICBpdGVtLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKCdkb3duJyk7XHJcbiAgICAgICAgICAgIGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ3Nob3cnLCAndXAnKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcblxyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gc2xpZGVyR29Eb3duKGl0ZW0pIHtcclxuXHJcbiAgICBpZihpdGVtLmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKSB7XHJcbiAgICAgICAgaWYgKGl0ZW0ucHJldmlvdXNFbGVtZW50U2libGluZyAmJiBpdGVtLnByZXZpb3VzRWxlbWVudFNpYmxpbmcgIT09IG9iai5kaXZBcnJvd0Rvd24gJiYgaXRlbS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nICE9PSBvYmoubWVudUJ1dHRvbikge1xyXG4gICAgICAgICAgICBsYXN0SXRlbU9mQXJyKCk7XHJcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycsICd1cCcpO1xyXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2Rvd24nKTtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICAgICAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBjaGFuZ2VTbGlkZXJVUCgpIHtcclxuICAgIGxldCBtYXNzID0gb2JqLm1hc3NTbGlkZXMsXHJcbiAgICAgICAgbGVuID0gbWFzcy5sZW5ndGg7XHJcbiAgICBvYmouQXJyb3dVcC5jbGFzc0xpc3QucmVtb3ZlKCdhbmltQnV0dG9uJyk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgIG9iai5pbmRleCA9IGk7XHJcbiAgICAgICAgaWYoc2xpZGVyR29VcChtYXNzW2ldKSkgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBjaGFuZ2VTbGlkZXJET1dOKCkge1xyXG4gICAgbGV0IG1hc3MgPSBvYmoubWFzc1NsaWRlcyxcclxuICAgICAgICBsZW4gPSBtYXNzLmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKXtcclxuICAgICAgICBvYmouaW5kZXggPSBpO1xyXG4gICAgICAgIGlmKHNsaWRlckdvRG93bihtYXNzW2ldKSkgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVN3aXBlIFVwIC8gRG93biAvIExlZnQgLyBSaWdodC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gc3RhcnRUb3VjaChlKSB7XHJcbiAgICAgICBvYmouaW5pdGlhbFggPSBlLnRvdWNoZXNbMF0uY2xpZW50WDtcclxuICAgICAgIG9iai5pbml0aWFsWSA9IGUudG91Y2hlc1swXS5jbGllbnRZO1xyXG59XHJcbmZ1bmN0aW9uIG1vdmVUb3VjaChlKSB7XHJcbiAgICAgICAgaWYgKG9iai5pbml0aWFsWCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob2JqLmluaXRpYWxZID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBjdXJyZW50WCA9IGUudG91Y2hlc1swXS5jbGllbnRYLFxyXG4gICAgICAgICAgICBjdXJyZW50WSA9IGUudG91Y2hlc1swXS5jbGllbnRZO1xyXG5cclxuICAgICAgICBsZXQgZGlmZlggPSBvYmouaW5pdGlhbFggLSBjdXJyZW50WCxcclxuICAgICAgICAgICAgZGlmZlkgPSBvYmouaW5pdGlhbFkgLSBjdXJyZW50WTtcclxuXHJcbiAgICAgICAgaWYgKE1hdGguYWJzKGRpZmZYKSA+IE1hdGguYWJzKGRpZmZZKSkge1xyXG4gICAgICAgICAgICAvLyBzbGlkaW5nIGhvcml6b250YWxseVxyXG4gICAgICAgICAgICBpZiAoZGlmZlggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzd2lwZWQgbGVmdFxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzd2lwZWQgbGVmdFwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIHN3aXBlZCByaWdodFxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzd2lwZWQgcmlnaHRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBzbGlkaW5nIHZlcnRpY2FsbHlcclxuICAgICAgICAgICAgaWYgKGRpZmZZID4gMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gc3dpcGVkIHVwXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VTbGlkZXJVUCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gc3dpcGVkIGRvd25cclxuICAgICAgICAgICAgICAgIGNoYW5nZVNsaWRlckRPV04oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb2JqLmluaXRpYWxYID0gbnVsbDtcclxuICAgICAgICBvYmouaW5pdGlhbFkgPSBudWxsO1xyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIGJ1dHRvbkRvd24oZXZlbnQpIHtcclxuXHJcbiAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0Fycm93RG93bicpIHtcclxuICAgICAgICBjaGFuZ2VTbGlkZXJET1dOKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0Fycm93VXAnKSB7XHJcbiAgICAgICAgY2hhbmdlU2xpZGVyVVAoKTtcclxuICAgIH1cclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIG1vdXNlV2hlZWwoZSkge1xyXG4gICAgbGV0IGRlbHRhID0gZS5kZWx0YVkgfHwgZS5kZXRhaWw7XHJcbiAgICBkZWx0YSA+IDAgPyBjaGFuZ2VTbGlkZXJVUCgpIDogY2hhbmdlU2xpZGVyRE9XTigpO1xyXG5cclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIHN0YXJ0TGlzdGVuZXIoKXtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBidXR0b25Eb3duKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIG1vdXNlV2hlZWwpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IG9iai5jb250YWluZXI7XHJcbiAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgc3RhcnRUb3VjaCwgZmFsc2UpO1xyXG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgbW92ZVRvdWNoLCBmYWxzZSk7XHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBzdG9wTGlzdGVuZXIoKXtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBidXR0b25Eb3duKTtcclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIG1vdXNlV2hlZWwpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IG9iai5jb250YWluZXI7XHJcbiAgICBjb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgc3RhcnRUb3VjaCk7XHJcbiAgICBjb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBtb3ZlVG91Y2gpO1xyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gcmVtb3ZlQ2hhbmdlKGl0ZW0pIHtcclxuICAgIGl0ZW0uc3R5bGUudHJhbnNmb3JtID0gJ25vbmUnO1xyXG4gICAgaXRlbS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBgMGA7XHJcbiAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnVPcGVuJyk7XHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gY2hvb3NlUGFnZShlKSB7XHJcbiAgICBsZXQgbWFzcyA9IG9iai5tYXNzU2xpZGVzLFxyXG4gICAgICAgIGlkID0gdGhpcy5pZCxcclxuICAgICAgICBsZW4gPSBtYXNzLmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gbGVuLTE7IGkgPj0gMDsgaS0tKXtcclxuICAgICAgICBpZihtYXNzW2ldLmlkID09PSBpZCkge1xyXG4gICAgICAgICAgICByZW1vdmVDaGFuZ2UobWFzc1tpXSk7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihtYXNzW2ldLmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKSB7XHJcbiAgICAgICAgICAgIGlmIChtYXNzW2ldLnByZXZpb3VzRWxlbWVudFNpYmxpbmcgJiYgbWFzc1tpXS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nICE9PSBvYmoubWVudUJ1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgbWFzc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93JywgJ3VwJyk7XHJcbiAgICAgICAgICAgICAgICBtYXNzW2ldLmNsYXNzTGlzdC5hZGQoJ2Rvd24nKTtcclxuICAgICAgICAgICAgICAgIG1hc3NbaV0ucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlbW92ZUNoYW5nZShtYXNzW2ldKTtcclxuICAgIH1cclxuICAgIHN0YXJ0TGlzdGVuZXIoKTtcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIG1lbnVTaG93KCkge1xyXG5cclxuICAgIGNvbnN0IG1hc3MgPSBvYmoubWFzc1NsaWRlcyxcclxuICAgICAgICBsZW4gPSBtYXNzLmxlbmd0aDtcclxuICAgIGxldCB0cmFuc0Zvcm0gPSAwO1xyXG4gICAgbWFzcy5mb3JFYWNoKCBlbCA9PiB7XHJcbiAgICAgICAgc2xpZGVyR29VcChlbCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKXtcclxuXHJcbiAgICAgICAgaWYoIW1hc3NbaV0uc3R5bGUudHJhbnNmb3JtIHx8IG1hc3NbaV0uc3R5bGUudHJhbnNmb3JtID09PSAnbm9uZScpe1xyXG4gICAgICAgICAgICBpZihpKXtcclxuICAgICAgICAgICAgICAgIHRyYW5zRm9ybSArPSA4MDtcclxuICAgICAgICAgICAgICAgIG1hc3NbaV0uc3R5bGUuYm9yZGVyUmFkaXVzID0gYDhweCA4cHggMCAwYDtcclxuICAgICAgICAgICAgICAgIG1hc3NbaV0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHt0cmFuc0Zvcm19cHgpYDtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWFzc1tpXS5jbGFzc0xpc3QuYWRkKCdtZW51T3BlbicpO1xyXG4gICAgICAgICAgICBtYXNzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hvb3NlUGFnZSk7XHJcbiAgICAgICAgICAgIG9iai5kaXZBcnJvd0Rvd24uY2xhc3NMaXN0LmFkZCgnbm9uZScpO1xyXG4gICAgICAgICAgICBvYmouZGl2QXJyb3dVcC5jbGFzc0xpc3QuYWRkKCdub25lJyk7XHJcbiAgICAgICAgICAgIHN0b3BMaXN0ZW5lcigpO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgbWFzc1tpXS5zdHlsZS50cmFuc2Zvcm0gPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIG1hc3NbaV0uY2xhc3NMaXN0LnJlbW92ZSgnbWVudU9wZW4nKTtcclxuICAgICAgICAgICAgbWFzc1tpXS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBgMGA7XHJcbiAgICAgICAgICAgIG9iai5kaXZBcnJvd0Rvd24uY2xhc3NMaXN0LnJlbW92ZSgnbm9uZScpO1xyXG4gICAgICAgICAgICBzdGFydExpc3RlbmVyKCk7XHJcbiAgICAgICAgICAgIG1hc3NbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaG9vc2VQYWdlKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbm9iai5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWVudVNob3cpO1xyXG5zbGlkZXJDb250YWluZXIoKTtcclxuc3RhcnRMaXN0ZW5lcigpO1xyXG5hcnJvd0J1dHRvbnMoKTtcclxuXHJcblxyXG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuY29uc3Qgc2xpZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbnNsaWQxLmNsYXNzTGlzdC5hZGQoJ3NsaWQnLCAnc2xpZDEnLCAnc2hvdycsICdkaXNwbGF5Q2VudGVyJyk7XHJcbnNsaWQxLnN0eWxlLmhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgKyAncHgnO1xyXG5zbGlkMS5pbm5lckhUTUwgPSBgPGgxPtCT0LvQsNCy0L3QsNGPPC9oMT5gO1xyXG5zbGlkMS5pZCA9ICdNYWluJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzbGlkMTsiLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuY29uc3Qgc2xpZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbnNsaWQyLmNsYXNzTGlzdC5hZGQoJ3NsaWQnLCAnc2xpZDInLCAnZGlzcGxheUNlbnRlcicpO1xyXG5zbGlkMi5zdHlsZS5oZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ICsgJ3B4Jztcclxuc2xpZDIuaW5uZXJIVE1MID0gYDxoMT7QniDQvdCw0YE8L2gxPmA7XHJcbnNsaWQyLmlkID0gJ0Fib3V0IFVzJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzbGlkMjsiLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuY29uc3Qgc2xpZDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbnNsaWQzLmNsYXNzTGlzdC5hZGQoJ3NsaWQnLCAnc2xpZDMnLCAnZGlzcGxheUNlbnRlcicpO1xyXG5zbGlkMy5zdHlsZS5oZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ICsgJ3B4Jztcclxuc2xpZDMuaW5uZXJIVE1MID0gYDxoMT7QndCw0YjQuCDRgNCw0LHQvtGC0Ys8L2gxPmA7XHJcbnNsaWQzLmlkID0gJ091ciB3b3JrJztcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNsaWQzOyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5jb25zdCBzbGlkNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuc2xpZDQuY2xhc3NMaXN0LmFkZCgnc2xpZCcsICdzbGlkNCcsICdkaXNwbGF5Q2VudGVyJyk7XHJcbnNsaWQ0LnN0eWxlLmhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgKyAncHgnO1xyXG5zbGlkNC5pbm5lckhUTUwgPSAgYDxoMT7QmtC+0L3RgtCw0LrRgtGLPC9oMT5gO1xyXG5zbGlkNC5pZCA9ICdDb250YWN0cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzbGlkNDsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKG1vZHVsZS5pZCwgY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9kb3duQXJyb3cucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy91cEFycm93LnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=