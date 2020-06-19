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
/******/ 	deferredModules.push(["./src/app/index.js","vendors~index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/modal.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*{\r\n    box-sizing: border-box;\r\n\r\n}\r\n#modal {\r\n    display: flex;\r\n    align-content: center;\r\n    align-items: center;\r\n    justify-content: center;\r\n    justify-items: center;\r\n    position: absolute;\r\n    font-family: 'Segoe Print Bold';\r\n    top: -120%;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    z-index: 9999;\r\n    background: rgba(0,0,0,0.7);\r\n}\r\n.modalActive{\r\n    top: 0 !important;\r\n    position: fixed !important;\r\n    transition: all 0.4s linear;\r\n}\r\n\r\n.modalForm{\r\n    background: #fff;\r\n    width: 35em;\r\n    border-radius: 5px;\r\n    font-size: 1.3em;\r\n    box-shadow: 0 3px 7px rgba(0,0,0,.25);\r\n    text-align: center;\r\n}\r\n.modalForm main{\r\n    margin: 20px auto;\r\n}\r\n.modalForm main p{\r\n    margin: 20px auto;\r\n}\r\n.modalForm header, .modalForm footer {\r\n    background: #c5c5c5;\r\n    border-bottom: 1px solid #939393;\r\n    border-radius: 5px 5px 0 0;\r\n}\r\n.modalForm footer {\r\n    border-top: 1px solid #939393;\r\n    border-radius: 0 0 5px 5px;\r\n    /*-moz-border-radius: 0 0 5px 5px;*/\r\n    /*-webkit-border-radius: 0 0 5px 5px;*/\r\n}\r\n.modalForm div, .modalForm header, .modalForm footer {\r\n    padding: 15px;\r\n    z-index: 200;\r\n}\r\n.modalForm h2 {\r\n    font-size: 2em;\r\n    text-align: center;\r\n    margin: 0;\r\n    color: black;\r\n}\r\n.modalForm .btn {\r\n    cursor: pointer;\r\n    color: #000068;\r\n}\r\n.contacts{\r\ncursor: pointer;\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/reset.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/reset.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "html, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed,\r\nfigure, figcaption, footer, header, hgroup,\r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\nmargin: 0;\r\npadding: 0;\r\nborder: 0;\r\nfont-size: 100%;\r\nfont: inherit;\r\nvertical-align: baseline;\r\n}\r\n*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure,\r\nfooter, header, hgroup, menu, nav, section {\r\ndisplay: block;\r\n}\r\nbody {\r\nline-height: 1;\r\n}\r\nol, ul {\r\nlist-style: none;\r\n}\r\nblockquote, q {\r\nquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\ncontent: '';\r\ncontent: none;\r\n}\r\ntable {\r\nborder-collapse: collapse;\r\nborder-spacing: 0;\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/slideWeOffer/style1100.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/slideWeOffer/style1100.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media screen and (max-width: 1100px){\r\n\r\n    img.catWeOfffer {\r\n        width : 25%;\r\n    }\r\n\r\n\r\n    img.moonWeOfffer,\r\n    img.sunWeOfffer {\r\n        width : 18%;\r\n    }\r\n\r\n\r\n    img.sunWeOffferWeOfffer {\r\n        right: 100%;\r\n    }\r\n\r\n\r\n    text {\r\n        font-size: 28px;\r\n    }\r\n\r\n\r\n    .starWeOfffer,\r\n    .starYellow,\r\n    .starBlue,\r\n    .starRed {\r\n        width : 3px;\r\n        height : 3px;\r\n    }\r\n\r\n    \r\n    /* ====================== modal windows ============================== */\r\n    \r\n    \r\n    .modalWeOfffer {\r\n        justify-content : flex-end;\r\n    }\r\n\r\n\r\n    .modalWeOfffer p {\r\n        width : 60%;\r\n        font-size : 28px;\r\n        text-align : left;\r\n        padding : 0px 70px 0px 40px;\r\n        line-height : 1.3;\r\n    }    \r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/slideWeOffer/style1400.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/slideWeOffer/style1400.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media screen and (max-width: 1400px){}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/slideWeOffer/style1600.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/slideWeOffer/style1600.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media screen and (max-width: 1600px) {\r\n\r\n    image {\r\n        transform-box : fill-box;\r\n        transform-origin : center;\r\n        animation : rotateCircle 2s linear infinite;\r\n    }\r\n\r\n\r\n    @keyframes rotateCircle {\r\n        0% {\r\n            transform : rotate(0deg);\r\n        }\r\n\r\n        100% {\r\n            transform : rotate(360deg);\r\n        }\r\n    }\r\n      \r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/slideWeOffer/style1920.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/slideWeOffer/style1920.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media screen and (max-width: 2000px){\r\n\r\n    image {\r\n        transform-box : fill-box;\r\n        transform-origin : center;\r\n        animation : rotateCircle 2s linear infinite;\r\n    }\r\n\r\n\r\n    @keyframes rotateCircle {\r\n        0% {\r\n            transform : rotate(0deg);\r\n        }\r\n        \r\n        100% {\r\n            transform : rotate(360deg);\r\n        }\r\n    }\r\n       \r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/slideWeOffer/style2560.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/slideWeOffer/style2560.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media screen and (max-width: 2600px){\r\n\r\n    image {\r\n        transform-box : fill-box;\r\n        transform-origin : center;\r\n        animation : rotateCircle 2s linear infinite;\r\n    }\r\n\r\n    @keyframes rotateCircle {\r\n        0% {\r\n            transform : rotate(0deg);\r\n        }\r\n\r\n        100% {\r\n            transform : rotate(360deg);\r\n        }\r\n    }\r\n        \r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/slideWeOffer/style320.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/slideWeOffer/style320.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media screen and (max-width: 320px) {\r\n    \r\n    img.catWeOfffer {\r\n        bottom : 0px;\r\n        left : 4%;\r\n        width : 45%;\r\n    }\r\n\r\n\r\n    img.moonWeOfffer,\r\n    img.sunWeOfffer {\r\n        width : 26%;\r\n    }\r\n\r\n\r\n    img.sunWeOfffer {\r\n        right : 100%;\r\n    }\r\n    \r\n\r\n    text {\r\n        font-size : 18px;\r\n    }\r\n\r\n    .starWeOfffer,\r\n    .starYellow,\r\n    .starBlue,\r\n    .starRed {\r\n        z-index : -1000;\r\n        width : 1.5px;\r\n        height : 1.5px;\r\n        position : absolute;\r\n        border-radius : 50%;\r\n        opacity : 0;\r\n    }\r\n\r\n    \r\n    /* ====================== modal windows ============================== */\r\n    \r\n    \r\n    .modalWeOfffer {\r\n        justify-content : flex-start;\r\n        align-items : flex-start;\r\n    }\r\n    \r\n\r\n    .modalWeOfffer>.containerWeOfffer {\r\n        width : 70%;\r\n        flex-wrap : wrap;\r\n    }\r\n\r\n    button {\r\n        width : 35px;\r\n        height : 35px;\r\n        font-size : 20px;\r\n    }\r\n\r\n    .modalWeOfffer p {\r\n        width : 100%;\r\n        font-size : 18px;\r\n        text-align : left;\r\n        padding : 10px 10px 0px 10px;\r\n        line-height : 1.15;\r\n    }    \r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/slideWeOffer/style400.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/slideWeOffer/style400.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media screen and (max-width: 400px){\r\n\r\n    img.catWeOfffer {\r\n        bottom : 0px;\r\n        left : 4%;\r\n        width : 45%;\r\n    }\r\n\r\n\r\n    img.moonWeOfffer,\r\n    img.sunWeOfffer {\r\n        width : 30%;\r\n    }\r\n\r\n\r\n    img.sunWeOfffer {\r\n        right : 100%;\r\n    }\r\n    \r\n\r\n    text {\r\n        font-size : 20px;\r\n    }\r\n\r\n\r\n    .starWeOfffer,\r\n    .starYellow,\r\n    .starBlue,\r\n    .starRed {\r\n        width : 2px;\r\n        height : 2px;\r\n    }\r\n    \r\n    \r\n    /* ====================== modal windows ============================== */\r\n    \r\n    \r\n    .modalWeOfffer {\r\n        justify-content : flex-start;\r\n        align-items : flex-start;\r\n    }\r\n    \r\n\r\n    .modalWeOfffer>.containerWeOfffer {\r\n        width : 70%;\r\n        flex-wrap : wrap;\r\n        /* flex-direction: column-reverse; */\r\n    }\r\n\r\n    \r\n    button {\r\n        margin: 5px 0 0 10px;\r\n        width : 40px;\r\n        height : 40px;\r\n        font-size : 25px;\r\n    }\r\n\r\n\r\n    .modalWeOfffer p {\r\n        width : 100%;\r\n        font-size : 20px;\r\n        text-align : left;\r\n        padding : 10px 10px 0px 10px;\r\n        line-height : 1.3;\r\n    }    \r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/slideWeOffer/style450.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/slideWeOffer/style450.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media screen and (max-width: 450px) {\r\n    img.moonWeOfffer,\r\n    img.sunWeOfffer {\r\n        top : 50px;\r\n    }\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/slideWeOffer/style600.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/slideWeOffer/style600.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media screen and (max-width: 600px){\r\n\r\n    img.catWeOfffer{\r\n        bottom: 10px;\r\n        left: 4%;\r\n        width: 35%;\r\n    }\r\n\r\n\r\n    img.grassWeOfffer {\r\n        width : 80%;\r\n    }\r\n\r\n\r\n    img.moonWeOfffer,\r\n    img.sunWeOfffer {\r\n        width : 25%;\r\n    }\r\n\r\n\r\n    img.sunWeOfffer {\r\n        right : 100%;\r\n    }\r\n    \r\n\r\n    text {\r\n        font-size : 22px;\r\n    }\r\n\r\n\r\n    .starWeOfffer,\r\n    .starYellow,\r\n    .starBlue,\r\n    .starRed {\r\n        width : 2px;\r\n        height : 2px;\r\n    }\r\n    \r\n    \r\n    /* ====================== modal windows ============================== */\r\n    \r\n\r\n    .modalWeOfffer>.containerWeOfffer {\r\n        width : 100%;\r\n    }\r\n\r\n\r\n    button {\r\n        width : 45px;\r\n        height : 45px;\r\n        font-size : 30px;\r\n    }\r\n\r\n\r\n    .modalWeOfffer p {\r\n        width : 80%;\r\n        font-size : 22px;\r\n        text-align : left;\r\n        padding : 0px 20px 0px 40px;\r\n        line-height : 1.3;\r\n    }    \r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/slideWeOffer/style800.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/slideWeOffer/style800.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media screen and (max-width: 800px){\r\n\r\n    img.catWeOfffer {\r\n        bottom : 10px;\r\n        left : 4%;\r\n        width : 30%;\r\n    }\r\n\r\n\r\n    img.moonWeOfffer,\r\n    img.sunWeOfffer {\r\n        width : 20%;\r\n    }\r\n\r\n\r\n    img.sunWeOffferWeOfffer {\r\n        right : 100%;\r\n    }\r\n    \r\n\r\n    text {\r\n        font-size : 25px;\r\n    }\r\n\r\n\r\n    .starWeOfffer,\r\n    .starYellow,\r\n    .starBlue,\r\n    .starRed {\r\n        width : 2px;\r\n        height : 2px;\r\n    }\r\n    \r\n    \r\n    /* ====================== modal windows ============================== */\r\n    \r\n    \r\n    .modalWeOfffer {\r\n        justify-content : flex-end;\r\n        align-items : center;\r\n    }\r\n    \r\n\r\n    .modalWeOfffer>.containerWeOfffer {\r\n        width : 65%;\r\n    }\r\n\r\n\r\n    button {\r\n        width : 45px;\r\n        height : 45px;\r\n        border-radius : 50%;\r\n        font-size : 30px;\r\n    }\r\n\r\n\r\n    .modalWeOfffer p {\r\n        width : 65%;\r\n        font-size : 25px;\r\n        text-align : left;\r\n        padding : 0px 40px 0px 40px;\r\n        line-height : 1.3;\r\n    }    \r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/slideWeOffer/styleWeOffer.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/slideWeOffer/styleWeOffer.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ":root {\r\n    --colorText-stroke : red;\r\n    --colorText-fill : white;\r\n}\r\n    \r\n\r\nhtml {\r\n    width : 100%;\r\n    height : 100%;\r\n    user-select : none;\r\n}\r\n\r\n\r\nbody {\r\n    height : 100%;\r\n}\r\n\r\n\r\nmain {\r\n    width : 100%;\r\n    height : 100%;\r\n}\r\n\r\n\r\ndiv.slid2 {\r\n    background : linear-gradient(rgba(3,12,113, 1), rgba(65,105,225, 1), rgba(255,255,255, 1));\r\n    background-size: 100% 200%;\r\n    background-position-y: 0%;\r\n    width : 100%;\r\n    height : 100%;\r\n    transition: transform 0.4s, background-position-y 1.5s;\r\n    /*transition: background-position-y 1.5s;*/\r\n}\r\n\r\n\r\nh2.titleWeOffer {\r\n    color : white;\r\n    z-index: 1000;\r\n}\r\n\r\n\r\nimg.homeWeOfffer {\r\n    position : absolute;\r\n    bottom : 0;\r\n    height : auto;\r\n    width : 100%;\r\n    z-index : 0;\r\n}\r\n\r\n\r\nimg.catWeOfffer {\r\n    display : block;\r\n    position : absolute;\r\n    bottom : 12px;\r\n    left : 5%;\r\n    width : 19%;\r\n    z-index : 100;\r\n}\r\n\r\n\r\nimg.grassWeOfffer {\r\n    display : block;\r\n    position : absolute;\r\n    bottom : 0;\r\n    left : 0;\r\n    width : 60%;\r\n    z-index : 100;\r\n}\r\n\r\n\r\nimg.moonWeOfffer,\r\nimg.sunWeOfffer {\r\n    display : block;\r\n    position : absolute;\r\n    top : 0px;\r\n    right : 0%;\r\n    width : 12%;\r\n    z-index : 50;\r\n    opacity : 1;\r\n    transition : right 1.5s;\r\n}\r\n\r\n\r\nimg.sunWeOfffer {\r\n    right : 100%;\r\n}\r\n    \r\n\r\n.blockSVG {\r\n    position : fixed;\r\n    left : 0%;\r\n    width : 100%;\r\n    height : 100%;\r\n    opacity : 1;\r\n    transition : left 1.5s;\r\n}\r\n\r\n\r\nsvg {\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n\r\ntext {\r\n    font-family : 'Segoe Print Bold';\r\n    cursor : pointer;\r\n    transition : .15s linear;\r\n    stroke : var(--colorText-stroke);\r\n    fill : var(--colorText-fill);\r\n    font-size: 30px;\r\n    transition: .15s linear;\r\n}\r\n    \r\n\r\ntext:hover {\r\n    fill : orange;\r\n}\r\n\r\n    \r\npath {\r\n    /* stroke : white; */\r\n    fill : transparent;\r\n}\r\n\r\n\r\n.starWeOfffer,\r\n.starYellow,\r\n.starBlue,\r\n.starRed {\r\n    z-index : 10;\r\n    width : 4px;\r\n    height : 4px;\r\n    position : absolute;\r\n    border-radius : 50%;\r\n    opacity : 0;\r\n}\r\n\r\n\r\n.starYellow {\r\n    animation : movie 9s linear 6s infinite;\r\n}\r\n\r\n\r\n.starRed {\r\n    animation : movie 9s linear infinite;\r\n}\r\n\r\n\r\n.starBlue {\r\n    animation : movie 9s linear 3s infinite;\r\n}\r\n\r\n\r\n@keyframes movie {\r\n    0%, 30% {\r\n        opacity : 0;\r\n    }\r\n\r\n    50% {\r\n        opacity : 1;\r\n    }\r\n\r\n    80%, 100% {\r\n        opacity : 0;\r\n    }\r\n}\r\n    \r\n    \r\n/* ========================= modal windows =========================== */\r\n    \r\n    \r\n.modalWeOfffer {\r\n    display : flex;\r\n    justify-content : center;\r\n    align-items : center;\r\n    position : fixed;\r\n    opacity : 1;\r\n    transition : left 1.5s;\r\n}\r\n    \r\n\r\n.internetShop,\r\n.siteCompany,\r\n.blog,\r\n.portfolio,\r\n.socialNetwork,\r\n.forum,\r\n.landing,\r\n.gameSours {\r\n    left : -100%;\r\n    z-index : 150;\r\n    width : 100%;\r\n    height : 100%;\r\n}\r\n\r\n\r\n.modalWeOfffer>.containerWeOfffer {\r\n    width : 60%;\r\n    display : flex;\r\n    flex-wrap : nowrap;\r\n}\r\n\r\n\r\nbutton {\r\n    cursor : pointer;\r\n    background-color : rgb(244, 107, 28);\r\n    margin : 0 0 0 0;\r\n    width : 50px;\r\n    height : 50px;\r\n    border-radius : 50%;\r\n    font-size : 30px;\r\n    border : solid 1px black;\r\n    outline : none;\r\n}\r\n\r\n\r\n.modalWeOfffer p {\r\n    color : black;\r\n    width : 90%;\r\n    font-size : 30px;\r\n    font-family : 'Segoe Print Bold';\r\n    text-align : justify;\r\n    padding: 0px 70px 0px 40px;\r\n    line-height : 1.4;\r\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/slideWeOffer/style_h450.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/slideWeOffer/style_h450.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media screen and (max-height: 450px){\r\n\r\n    img.homeWeOfffer {\r\n        height : 120px;\r\n    }\r\n\r\n    img.catWeOfffer {\r\n        width : 15%;\r\n    }\r\n\r\n\r\n    img.moonWeOfffer,\r\n    img.sunWeOfffer {\r\n        width : 10%;\r\n    }\r\n\r\n\r\n    img.sunWeOfffer {\r\n        right : 100%;\r\n    }\r\n    \r\n\r\n    text {\r\n        font-size : 18px;\r\n    }\r\n\r\n\r\n    .starWeOfffer,\r\n    .starYellow,\r\n    .starBlue,\r\n    .starRed{\r\n        width : 1.5px;\r\n        height : 1.5px;\r\n    }\r\n    \r\n    \r\n    /* ====================== modal windows ============================== */\r\n    \r\n\r\n    .modalWeOfffer {\r\n        justify-content : flex-start;\r\n        align-items : flex-start;\r\n    }\r\n    \r\n\r\n    .modalWeOfffer>.containerWeOfffer {\r\n        width : 80%;\r\n        flex-wrap : wrap;\r\n        padding: 0 0 0 35px;\r\n    }\r\n\r\n\r\n    button {\r\n        margin: 10px 0 0 10px;\r\n        width: 35px;\r\n        height: 35px;\r\n        border-radius: 50%;\r\n        font-size: 20px;\r\n    }\r\n\r\n    \r\n    .modalWeOfffer p{\r\n        width: 80%;\r\n        font-size: 17px;\r\n        text-align: right;\r\n        padding: 10px 10px 0px 10px;\r\n        line-height: 1.3;\r\n    }    \r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/slide_1.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/slide_1.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../img/cloud_1.png */ "./src/img/cloud_1.png");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../img/cloud_2.png */ "./src/img/cloud_2.png");
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../img/cloud_3.png */ "./src/img/cloud_3.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
// Module
exports.push([module.i, ":root{\r\n    --left: 50%;\r\n    /*--top : 100%*/\r\n    /*--num  : 90deg;*/\r\n}\r\n.h1{\r\n    position: absolute;\r\n    top:0;\r\n    width: 100%;\r\n    font-family: \"Hanging Letters\";\r\n    font-size: 4em;\r\n    z-index: 99;\r\n    text-align: center;\r\n    color: #67c2fb;\r\n    line-height: 100px;\r\n}\r\n.topBlock{\r\n    height: 50%;\r\n    width: 100%;\r\n}\r\n.bottomBlock{\r\n    height: 50%;\r\n    width: 100%;\r\n}\r\n.mainDiv{\r\n    height: 100%;\r\n    width: 80%;\r\n    position: relative;\r\n    left: calc((100% - 80%)/2);\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.blockCat{\r\n    width: 50%;\r\n    height: 50%;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 10%;\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n.cat{\r\n    width: 40%;\r\n    display: flex;\r\n    align-items: flex-end;\r\n}\r\n.cat img{\r\n    height: 50%;\r\n    width: auto;\r\n    margin-bottom: 20px;\r\n\r\n}\r\n.blockMoon{\r\n    width: 30%;\r\n    height: auto;\r\n    max-height: calc(100% / 3);\r\n    position: absolute;\r\n    top: 10px;\r\n    left: calc(100% - 35%);\r\n    z-index: 99;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n}\r\n.blockMoon img{\r\n      width: 90%;\r\n      height: 90%;\r\n      max-width: 270px;\r\n      max-height: 270px;\r\n      text-align: left;\r\n}\r\n.comment{\r\n    width: 60%;\r\n}\r\n.comment img{\r\n    height: 50%;\r\n    width: auto;\r\n}\r\n.grass{\r\n    width: auto;\r\n    height: 15%;\r\n    z-index: 99;\r\n    position: absolute;\r\n    top: calc(100% - 15%);\r\n}\r\n.star{\r\n    position: absolute;\r\n    width: auto;\r\n    transition: .5s;\r\n}\r\n.cloud1{\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n    width: 40%;\r\n    max-width: 250px;\r\n    height: 28%;\r\n    max-height: 200px;\r\n    position: absolute;\r\n    top:10%;\r\n    left: -50%;\r\n    z-index: 98;\r\n}\r\n@keyframes Cloud1{\r\n    from{\r\n        display: none;\r\n        left: -50%;\r\n    }\r\n    20%{\r\n        display: block;\r\n    }\r\n    100%{\r\n        left: calc(100vh + 50%);\r\n        display: none;\r\n    }\r\n}\r\n.moveCloud_1{\r\n    left: -50%;\r\n    animation: 70000ms linear Cloud1;\r\n    animation-delay: 10s;\r\n    animation-iteration-count: infinite;\r\n}\r\n.cloud2{\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n    width: 40%;\r\n    max-width: 250px;\r\n    height: 28%;\r\n    max-height: 200px;\r\n    position: absolute;\r\n    top:15%;\r\n    left: -50%;\r\n    z-index: 100;\r\n}\r\n@keyframes Cloud2{\r\n    from{\r\n        display: none;\r\n        left: -50%;\r\n    }\r\n    20%{\r\n        display: block;\r\n    }\r\n    100%{\r\n        left: calc(100vh + 50%);\r\n        display: none;\r\n    }\r\n}\r\n.moveCloud_2{\r\n    left: -50%;\r\n    animation: 90000ms linear Cloud2;\r\n    animation-delay: 20s;\r\n    animation-iteration-count: infinite;\r\n}\r\n.cloud3 {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n    width: 65%;\r\n    height: 25%;\r\n    max-width: 450px;\r\n    max-height: 170px;\r\n    position: absolute;\r\n    top: 20%;\r\n    left: -70%;\r\n    z-index: 101;\r\n}\r\n@keyframes Cloud3{\r\n    from{\r\n        display: none;\r\n        left: -70%;\r\n    }\r\n    20%{\r\n        display: block;\r\n    }\r\n    100%{\r\n        left:calc(100vh + 70%);\r\n        display: none;\r\n    }\r\n}\r\n.moveCloud_3{\r\n    left: -70%;\r\n    animation: 120000ms linear Cloud3;\r\n    animation-iteration-count: infinite;\r\n}\r\n.wordsBlock{\r\n    width: 30%;\r\n    height: 30%;\r\n    overflow: hidden;\r\n    position: absolute;\r\n    top: calc(100% - 30% - 35%);\r\n    left: calc(100% - 20%);\r\n    display: flex;\r\n    flex-direction: column;\r\n    border-top-right-radius: 50%;\r\n    border-top-left-radius: 50%;\r\n\r\n}\r\n.wordsBlock div{\r\n    width: 100%;\r\n    height: 100%;\r\n    position: relative;\r\n    top:0;\r\n    left: 0;\r\n    background: linear-gradient(to top, transparent 60%, rgba(20, 33, 69, 0.45));\r\n    overflow: hidden;\r\n\r\n}\r\n.wordsBlock span{\r\n    position: absolute;\r\n    left: 45%;\r\n    top: 110%;\r\n    font-size: 24px;\r\n    font-family: \"Segoe Print Bold\";\r\n    font-style: italic;\r\n}\r\n\r\n@keyframes moveWords{\r\n   from{\r\n       top:110%;\r\n       left: 25%;\r\n       opacity: 0;\r\n   }\r\n    15%{\r\n        opacity: 0;\r\n    }\r\n    20%{\r\n        opacity: .5;\r\n    }\r\n    30%{\r\n        opacity: 1;\r\n    }\r\n    50%{\r\n        opacity: 0;\r\n    }\r\n    100%{\r\n        top:0;\r\n        left: var(--left);\r\n        opacity: 0;\r\n    }\r\n\r\n}\r\n.moveW{\r\n    animation: 6s linear moveWords;\r\n}\r\n/*-------------------------------------------------------------*/\r\n@media screen and (max-width: 1050px) and (orientation: landscape){\r\n   .blockCat{\r\n     width: 40% !important;\r\n   }\r\n}\r\n/*-------------------------------------------------------------*/\r\n@media screen and (max-width: 825px) and (orientation: landscape){\r\n    .mainDiv{\r\n        width: 70%;\r\n        left: calc((100% - 70%)/2);\r\n    }\r\n    .h1{\r\n        font-size: 2.5em !important;\r\n        line-height: 60px !important;\r\n    }\r\n    h2{\r\n        font-size: 2.5em !important;\r\n    }\r\n    .blockMoon img {\r\n        width: 50%;\r\n        height: 50%;\r\n    }\r\n    .comment {\r\n        width: 40%;\r\n    }\r\n}\r\n/*--------------------------------------------------------------*/\r\n@media screen and (max-width: 1050px) {\r\n    .mainDiv{\r\n        width: 90% !important;\r\n        left: calc((100% - 90%)/2);\r\n    }\r\n    .wordsBlock{\r\n        width: 30%;\r\n        left: calc(100% - 30%);\r\n    }\r\n    .blockCat{\r\n        width: 60%;\r\n        height: 40%;\r\n        top: 58%;\r\n    }\r\n    .comment img {\r\n        height: auto;\r\n        width: 90%;\r\n    }\r\n    .comment img {\r\n        height: 40%;\r\n\r\n    }\r\n    .cloud1{\r\n        width: 30%;\r\n        height: 20%;\r\n    }\r\n    .cloud2{\r\n        width: 30%;\r\n        height: 20%;\r\n    }\r\n    .cloud3 {\r\n        width: 50%;\r\n        height: 20%;\r\n    }\r\n}\r\n/*--------------------------------------------------------------*/\r\n@media screen and (max-width: 900px) {\r\n    .h1{\r\n        font-size: 3em;\r\n        line-height: 80px;\r\n    }\r\n    h2{\r\n        font-size: 3em;\r\n    }\r\n    .blockMoon img{\r\n        max-width: 150px;\r\n        max-height: 150px;\r\n\r\n    }\r\n    .wordsBlock{\r\n      width: 20%;\r\n      top:calc(100% - 30% - 30%);\r\n      left: calc(100% - 20%);\r\n    }\r\n    .wordsBlock span{\r\n        font-size: 16px;\r\n    }\r\n}\r\n/*--------------------------------------------------------------*/\r\n@media screen and (max-width: 800px) {\r\n    .h1{\r\n        font-size: 3em;\r\n        line-height: 80px;\r\n    }\r\n    h2{\r\n        font-size: 3em;\r\n    }\r\n}\r\n/*-------------------------------------------------------------*/\r\n@media screen and (max-width: 600px) {\r\n    .h1{\r\n        font-size: 2em;\r\n        line-height: 50px;\r\n    }\r\n    .mainDiv{\r\n        width: 90%;\r\n        left: calc((100% - 90%)/2);\r\n\r\n    }\r\n    .blockCat{\r\n        width: 80%;\r\n        left: 1%;\r\n    }\r\n    .blockMoon{\r\n        width: 50%;\r\n    }\r\n    .cat img {\r\n        height: 40%;\r\n        /*margin-bottom: 20px;*/\r\n    }\r\n    .comment img {\r\n        height: 40%;\r\n    }\r\n    .grass{\r\n        height: 10%;\r\n        top: calc(100% - 10%);\r\n    }\r\n\r\n}\r\n/*-------------------------------------------------------------*/\r\n@media screen and (max-width: 600px) {\r\n    .wordsBlock{\r\n        width: 40%;\r\n        left: calc(100% - 40%);\r\n        top: calc(100% - 30% - 20%);\r\n\r\n    }\r\n    .comment{\r\n        z-index: 99;\r\n    }\r\n}\r\n/*---------------------------------------------------------------*/\r\n@media screen and (max-width: 570px) and (orientation: landscape) {\r\n    .wordsBlock{\r\n        width: 20%;\r\n        left: calc(100% - 20%);\r\n        top: calc(100% - 30% - 30%);\r\n    }\r\n    .wordsBlock span{\r\n        font-size: 12px;\r\n    }\r\n}\r\n/*---------------------------------------------------------------*/\r\n@media screen and (max-width: 420px){\r\n    .wordsBlock{\r\n        width: 40%;\r\n        left: calc(100% - 45%);\r\n        /*top: calc(100% - 30% - 30%);*/\r\n    }\r\n    .wordsBlock span{\r\n        font-size: 12px;\r\n    }\r\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/slide_2.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/slide_2.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./slideWeOffer/styleWeOffer.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/slideWeOffer/styleWeOffer.css");
var ___CSS_LOADER_AT_RULE_IMPORT_1___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./slideWeOffer/style2560.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/slideWeOffer/style2560.css");
var ___CSS_LOADER_AT_RULE_IMPORT_2___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./slideWeOffer/style1920.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/slideWeOffer/style1920.css");
var ___CSS_LOADER_AT_RULE_IMPORT_3___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./slideWeOffer/style1600.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/slideWeOffer/style1600.css");
var ___CSS_LOADER_AT_RULE_IMPORT_4___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./slideWeOffer/style1400.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/slideWeOffer/style1400.css");
var ___CSS_LOADER_AT_RULE_IMPORT_5___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./slideWeOffer/style1100.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/slideWeOffer/style1100.css");
var ___CSS_LOADER_AT_RULE_IMPORT_6___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./slideWeOffer/style800.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/slideWeOffer/style800.css");
var ___CSS_LOADER_AT_RULE_IMPORT_7___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./slideWeOffer/style600.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/slideWeOffer/style600.css");
var ___CSS_LOADER_AT_RULE_IMPORT_8___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./slideWeOffer/style450.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/slideWeOffer/style450.css");
var ___CSS_LOADER_AT_RULE_IMPORT_9___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./slideWeOffer/style400.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/slideWeOffer/style400.css");
var ___CSS_LOADER_AT_RULE_IMPORT_10___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./slideWeOffer/style320.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/slideWeOffer/style320.css");
var ___CSS_LOADER_AT_RULE_IMPORT_11___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./slideWeOffer/style_h450.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/slideWeOffer/style_h450.css");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_1___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_2___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_3___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_4___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_5___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_6___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_7___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_8___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_9___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_10___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_11___);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/slide_3.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/slide_3.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".mainSlide3{\r\n    width: 100%;\r\n    height: 95%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-around;\r\n    position: relative;\r\n    top:2%;\r\n    border: solid transparent;\r\n    border-width: 20px 10px 50px 10px;\r\n    border-radius: 2%;\r\n    overflow: hidden;\r\n\r\n}\r\n.position{\r\n    position: absolute;\r\n}\r\n.center{\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.block{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border: 3px solid rgba(57, 57, 57, 0.79);\r\n    box-shadow: 0 0 10px 4px rgba(57, 57, 57, 0.79);\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n    padding: 0;\r\n}\r\n.transition{\r\n    transition: 0s !important;\r\n}\r\n.blockCenter img{\r\n    width: auto !important;\r\n}\r\n.block img{\r\n    height: auto !important;\r\n}\r\n.block_1, .block_7, .block_8, .block_11,\r\n.block_12, .block_15, .block_16{\r\n    transition:  10s linear;\r\n}\r\n.block_2, .block_6, .block_10, .block_14{\r\n    transition:  10s linear;\r\n}\r\n.block_3, .block_5, .block_9, .block_13{\r\n    transition: 10s linear;\r\n}\r\n.block_4{\r\n    transition: 10s linear;\r\n}\r\n@media screen and (max-width: 1100px) {\r\n    .block{\r\n        border: 1px solid rgba(57, 57, 57, 0.79);\r\n        box-shadow: 0 0 5px 2px rgba(57, 57, 57, 0.79);\r\n        border-radius: 5px;\r\n\r\n    }\r\n}\r\n@media screen and (max-width: 450px){\r\n    .block{\r\n        border: .5px solid rgba(57, 57, 57, 0.79);\r\n        box-shadow: 0 0 4px 1px rgba(57, 57, 57, 0.79);\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/slide_4.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/slide_4.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".main{\r\n    width: 100%;\r\n    height: 95%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-around;\r\n    position: relative;\r\n    top:2%;\r\n    border: solid #f3ff86;\r\n    border-width: 20px 10px 50px 10px;\r\n    border-radius: 2%;\r\n    overflow: hidden;\r\n\r\n}\r\n.template{\r\n    width: calc((100% / 3) - 7%);\r\n    height: 16em;\r\n    border: 3px solid #000068;\r\n    border-radius: 5px;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    transition: 1s;\r\n    cursor: pointer;\r\n    margin: 5px;\r\n}\r\n/*.resize{*/\r\n/*    position: absolute;*/\r\n/*    width: 80%;*/\r\n/*    height: 80%;*/\r\n/*    left: 10%;*/\r\n/*    top: 5%;*/\r\n/*}*/\r\n/*----------------------------------------------------------*/\r\n@media screen and (max-width: 1400px) and (orientation: landscape) {\r\n    .template {\r\n        width: calc((100% / 3) - 2%);\r\n        height: 15em;\r\n    }\r\n}\r\n/*-----------------------------------------------------------*/\r\n@media screen and (max-width: 1300px) {\r\n    .template {\r\n        width: calc((100% / 3) - 5%);\r\n        height: 13em;\r\n    }\r\n}\r\n/*-----------------------------------------------------------*/\r\n@media screen and (max-width: 1050px) {\r\n    .main{\r\n        overflow-y: scroll;\r\n        -webkit-overflow-scrolling:touch !important;\r\n        padding-top: 10px;\r\n\r\n    }\r\n    .template {\r\n        width: calc((100% / 2) - 5%);\r\n        height: auto;\r\n        margin: 10px;\r\n    }\r\n}\r\n/*---------------------------------------------------------------*/\r\n@media screen and (max-width: 1050px) and (orientation: landscape) {\r\n    .main{\r\n        overflow-y: scroll;\r\n        -webkit-overflow-scrolling:touch !important;\r\n\r\n    }\r\n    .template {\r\n        width: calc((100% / 2) - 5%);\r\n        height: 15em;\r\n        margin: 10px;\r\n    }\r\n}\r\n/*-----------------------------------------------------------*/\r\n@media screen and (max-width: 800px) {\r\n    .template{\r\n        width: 40em;\r\n        height: 20em;\r\n    }\r\n\r\n}\r\n/*-----------------------------------------------------------*/\r\n@media screen and (max-width: 740px)  and (orientation: landscape){\r\n    .template{\r\n        width: 35em;\r\n        height: 17em;\r\n    }\r\n\r\n}\r\n/*-----------------------------------------------------------*/\r\n@media screen and (max-width: 700px)  and (orientation: landscape){\r\n    .template{\r\n        width: 35em;\r\n        height: 17em;\r\n    }\r\n}\r\n/*----------------------------------------------------------*/\r\n@media screen and (max-width: 600px) {\r\n    .template {\r\n        width: 26em;\r\n        height: 13em;\r\n    }\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/slider.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/slider.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../img/grass.png */ "./src/img/grass.png");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../img/backGround-min.png */ "./src/img/backGround-min.png");
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../img/blue_sky.jpg */ "./src/img/blue_sky.jpg");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
// Module
exports.push([module.i, "\r\n/*-----------------------Slider---------------------------------------------------*/\r\n.slid{\r\n    width: 100% !important;\r\n    height: 100% !important;\r\n    position: absolute;\r\n    top: 0;\r\n    left:0;\r\n    transition: transform 0.4s;\r\n\r\n}\r\n\r\n.slid1{\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") repeat-x bottom,\r\n                url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat bottom,\r\n                linear-gradient(to top, #af8230, #1a2b58, #121e3e 60%);\r\n    color: aliceblue;\r\n    transition-delay: 0.20s;\r\n    background-size:auto,100% auto, auto;\r\n    z-index: 20;\r\n}\r\n.slid2{\r\n    background-color: rgba(67, 61, 154, 1);\r\n    transition-delay: 0.15s;\r\n    z-index: 19;\r\n\r\n}\r\n.slid3{\r\n    /*background-color: #7df0c8;*/\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat center center;\r\n    background-size: cover;\r\n    box-shadow: inset 0px 0px 40px 20px rgba(18, 30, 62, 0.6) ;\r\n    transition-delay: 0.10s;\r\n    z-index: 18;\r\n    color: #000068;\r\n\r\n}\r\n.slid3.menu-btn{\r\n    color: #000068;\r\n}\r\n.slid4{\r\n    background-color: #f3ff86;\r\n    color: #000068;\r\n    transition-delay: 0.05s;\r\n    z-index: 17;\r\n\r\n}\r\n.slid5{\r\n    background-color: #000068;\r\n    color: aliceblue !important;\r\n    transition-delay: 0s;\r\n    z-index: 16;\r\n\r\n}\r\n@keyframes slidDown{\r\n    0%{\r\n        top: 0;\r\n    }\r\n    100% {\r\n        top:100vh;\r\n    }\r\n}\r\n@keyframes slidUp{\r\n    from {\r\n        top: 100vh;\r\n    }\r\n    100% {\r\n        top:0;\r\n    }\r\n}\r\n.down{\r\n    top: 100vh;\r\n    animation: 1.2s ease-in-out slidDown;\r\n\r\n}\r\n.up{\r\n    top: 0;\r\n    animation: 1s ease-in-out slidUp;\r\n}\r\n.show {\r\n    z-index: 150;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n\r\n}\r\n/*----------------------------Arrow------------------------------------------------------*/\r\n@keyframes moveButton{\r\n    from {\r\n        margin-top: 0;\r\n    }\r\n    5%{\r\n        margin-top: 10px;\r\n    }\r\n    10%{\r\n        margin-top: 0;\r\n    }\r\n    15%{\r\n        margin-top: 10px;\r\n    }\r\n    20%{\r\n        margin-top: 0;\r\n    }\r\n    100%{\r\n        margin-top: 0;\r\n    }\r\n\r\n}\r\n.divArrowUP{\r\n    position: absolute;\r\n    width: 4em;\r\n    height: 4em;\r\n    padding: 8px 2px 2px 2px !important;\r\n    top:.5em;\r\n    left: calc(100vw - 5em);\r\n    border-radius: 50%;\r\n    z-index: 200;\r\n    outline:none;\r\n}\r\n.divArrowUP img {\r\n    height: 90%;\r\n    width: 90%;\r\n}\r\n.divArrowDown{\r\n    position: absolute;\r\n    width: 4em;\r\n    height: 4em;\r\n    transform: rotate(-90deg);\r\n    padding: 8px 2px 2px 2px !important;\r\n    top: calc(100% - 4em - 3em);\r\n    left: calc(100vw - 5em);\r\n    border-radius: 50%;\r\n    z-index: 200;\r\n    outline:none;\r\n}\r\n.divArrowDown img {\r\n    height: 90%;\r\n    width: 90%;\r\n    transform: rotate(90deg);\r\n\r\n}\r\n.animButton{\r\n    margin-top: 0;\r\n    animation: moveButton 5s ease-in-out infinite;\r\n}\r\n\r\n/*---------------------------------------------------------------*/\r\n@media screen and (max-width: 1200px){\r\n    .slid1{\r\n        background-size: auto,140% 30%, auto;\r\n        background-position: bottom, 100% bottom;\r\n    }\r\n}\r\n/*---------------------------------------------------------------*/\r\n@media screen and (max-width: 1100px){\r\n\r\n    .downW{\r\n        top: 0;\r\n        transition: .6s linear !important;\r\n\r\n    }\r\n    .upW{\r\n        top: -100vh;\r\n        transition:  .6s linear !important;\r\n    }\r\n    .slid3{\r\n        box-shadow: inset 0px 0px 40px 10px rgba(18, 30, 62, 0.6) ;\r\n\r\n    }\r\n    .down{\r\n        animation: 1.5s ease-in-out slidDown;\r\n\r\n    }\r\n    .up{\r\n\r\n        animation: 1.2s ease-in-out slidUp;\r\n    }\r\n}\r\n/*--------------------------------------------------------------*/\r\n@media screen and (max-width: 900px) and (orientation: landscape) {\r\n    .divArrowDown{\r\n        top: calc(100% - 4em - 1em);\r\n    }\r\n    .slid1{\r\n        background-size: auto 15%,100% 35%, auto;\r\n        background-position: bottom, 100% bottom;\r\n    }\r\n}\r\n/*---------------------------------------------------------------*/\r\n@media screen and (max-width: 450px){\r\n    .slid1{\r\n        background-size: auto 15%,190% 25%, auto;\r\n        background-position: bottom, 100% bottom;\r\n    }\r\n    .divArrowDown, .divArrowUP{\r\n        width: 3em;\r\n        height: 3em;\r\n        left: calc(100vw - 3em);\r\n    }\r\n    .slid3{\r\n        box-shadow: inset 0px 0px 40px 5px rgba(18, 30, 62, 0.6) ;\r\n\r\n    }\r\n}\r\n\r\n", ""]);
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
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/reset.css");
var ___CSS_LOADER_AT_RULE_IMPORT_1___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./slider.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/slider.css");
var ___CSS_LOADER_AT_RULE_IMPORT_2___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./slide_1.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/slide_1.css");
var ___CSS_LOADER_AT_RULE_IMPORT_3___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./slide_2.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/slide_2.css");
var ___CSS_LOADER_AT_RULE_IMPORT_4___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./slide_3.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/slide_3.css");
var ___CSS_LOADER_AT_RULE_IMPORT_5___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./slide_4.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/slide_4.css");
var ___CSS_LOADER_AT_RULE_IMPORT_6___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../fonts/font.css */ "./node_modules/css-loader/dist/cjs.js!./src/fonts/font.css");
var ___CSS_LOADER_AT_RULE_IMPORT_7___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./modal.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../img/menu_white.png */ "./src/img/menu_white.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_1___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_2___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_3___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_4___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_5___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_6___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ":root{\r\n    --vh : 1;\r\n}\r\n\r\n.container {\r\n    height: 100vh;\r\n    height: calc(var(--vh, 1vh) * 100);\r\n    width: 100vw !important;\r\n    position: fixed;\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n.displayCenter{\r\n    display: flex;\r\n    justify-content: center;\r\n    justify-items: center;\r\n    align-items: center;\r\n    align-content: center;\r\n}\r\n.none{\r\n     display: none;\r\n }\r\nh1{\r\n    cursor: pointer;\r\n    font-family: \"Segoe Print Bold\";\r\n    font-size: 2em;\r\n}\r\nh2{\r\n    cursor: pointer;\r\n    font-family: \"Segoe Print Bold\";\r\n    font-size: 2em;\r\n    text-align: center;\r\n    margin-top: 20px;\r\n}\r\n/*----------------------------------------------------------------------------------------------*/\r\n.menu-btn {\r\n    position: absolute;\r\n    z-index: 99999;\r\n    top: 0;\r\n    left: 0;\r\n    height: 60px;\r\n    width: 60px;\r\n    cursor: pointer;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center;\r\n    background-size: 40px 50px;\r\n}\r\n.menuOpen{\r\n    align-items: normal !important;\r\n    align-content: normal !important;\r\n}\r\n/*-------------------------------------------------------------------------------------------------*/\r\n@media screen and (max-width: 700px) {\r\n    h2{\r\n        font-size: 1.7em !important;\r\n    }\r\n}\r\n\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/fonts/font.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/fonts/font.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./Hanging Letters.ttf */ "./src/fonts/Hanging Letters.ttf");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ./Segoe Print Bold.ttf */ "./src/fonts/Segoe Print Bold.ttf");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
exports.push([module.i, "@font-face {\r\n font-family: 'Hanging Letters';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n@font-face {\r\n    font-family: \"Segoe Print Bold\";\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n", ""]);
// Exports
module.exports = exports;


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
/* harmony import */ var _slides_slide5__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./slides/slide5 */ "./src/app/slides/slide5.js");










const obj = {
    container : document.querySelector('.container'),
    menuButton: document.querySelector('.menu-btn'),
    divArrowUp: document.querySelector('.divArrowUP'),
    divArrowDown: document.querySelector('.divArrowDown'),
    modalWindow: null,
    openModal  : document.querySelector('.contacts'),
    closeModal : null,
    contacts   : document.querySelector('#Contacts'),
    template  : document.querySelector('#Templates'),
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
    cont.appendChild(_slides_slide5__WEBPACK_IMPORTED_MODULE_8__["default"]);
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
   const index = obj.index;

   if(index === 2 && obj.divArrowUp.classList.contains('none')) {
       obj.divArrowUp.classList.remove('none');
       obj.divArrowDown.classList.add('none');
       return;
   }
   if(index === 3 && obj.divArrowDown.classList.contains('none')){
       obj.divArrowUp.classList.add('none');
       obj.divArrowDown.classList.remove('none');
       return;

   }else {
       return;
   }

}
//------------------------------------------------------------------------------------
function sliderGoUp(item) {

    if (item.classList.contains('show')) {
        if (window.screen.width > 1100) {
            if (item.nextElementSibling && item.nextElementSibling !== obj.divArrowUp
                && item.nextElementSibling.id !== 'Contacts') {
                lastItemOfArr();
                item.classList.remove('show', 'up');
                item.nextElementSibling.classList.remove('down');
                item.nextElementSibling.classList.add('show', 'up');

                return true;
            }
        } else {
            if (item.previousElementSibling && item.previousElementSibling !== obj.divArrowDown) {
                if(item.previousElementSibling.id === 'Contacts'){
                    return false;
                }else {
                    lastItemOfArr();
                    item.classList.remove('show');
                    item.classList.add('upW');

                    setTimeout(() => {
                        item.previousElementSibling.classList.add('show');
                    }, 1000);
                    return true;
                }
            }
        }
    }
    return false;

}
//-----------------------------------------------------------------------------------
function sliderGoDown(item) {

    if(item.classList.contains('show')) {
        if (window.screen.width > 1100) {
            if (item.previousElementSibling && item.previousElementSibling !== obj.divArrowDown
                && item.previousElementSibling.id !== 'Contacts') {
                lastItemOfArr();
                item.classList.remove('show', 'up');
                item.classList.add('down');

                setTimeout(() => {
                    item.previousElementSibling.classList.add('show');
                }, 1000);

                return true;
            }
        }else {
            if (item.nextElementSibling && item.nextElementSibling !== obj.divArrowUp) {
                if(item.nextElementSibling.id === 'Contacts'){
                    return false;
                }else {
                    lastItemOfArr();
                        item.classList.remove('show', 'downW');
                        item.nextElementSibling.classList.remove('upW');
                        item.nextElementSibling.classList.add('show', 'downW');

                    return true;
                }

            }
        }
    }
    return false;
}
//-----------------------------------------------------------------------------------
function changeSliderUP() {
    let mass = obj.massSlides,
        len = null;
        (window.screen.width > 1100) ? len = mass.length - 1: len = mass.length;
    obj.ArrowUp.classList.remove('animButton');

    for (let i = 1; i < len; i++) {
        obj.index = i;
        if(sliderGoUp(mass[i])){
            return;
        }
    }
}
// ------------------------------------------------------------------------------------
function changeSliderDOWN() {
    let mass = obj.massSlides,
        len = null;
    (window.screen.width > 1100) ? len = mass.length: len = mass.length-1;
    obj.ArrowUp.classList.remove('animButton');

    for (let i = 1; i < len; i++){
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
            } else {
                // swiped right
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
}
//----------------------------------------------------------------------------
function buttonDown(event) {
    if(window.screen.width > 1100) {
        if (event.code === 'ArrowDown') {
            changeSliderDOWN();
        }
        if (event.code === 'ArrowUp') {
            changeSliderUP();
        }
    }else{
        if (event.code === 'ArrowDown') {
            changeSliderUP();
        }
        if (event.code === 'ArrowUp') {
            changeSliderDOWN();
        }
    }
}
//--------------------------------------------------------------------------
function mouseWheel(e) {

    let delta = e.deltaY || e.detail || e.wheelDelta;
    if(window.screen.width > 1100){
        delta > 0 ? changeSliderDOWN()
            :  ( window.onmousewheel = null ,
                changeSliderUP(),
                setTimeout(()=> window.onmousewheel = mouseWheel, 500));
    }else {
        delta > 0 ? changeSliderUP()
            :  ( window.onmousewheel = null,
                changeSliderDOWN(),
                setTimeout(()=> window.onmousewheel = mouseWheel, 500));
    }

}
//-----------------------------------------------------------------------------------
function startListener(){
    document.onkeydown = buttonDown;
    window.onmousewheel = mouseWheel;
    document.ontouchstart = startTouch;
    document.ontouchmove = moveTouch;

}
//-----------------------------------------------------------------------------------
function stopListener(){
    document.onkeydown = null;
    window.onmousewheel = null;
    document.ontouchstart = null;
    document.ontouchmove = null;
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
        flag = false,
        len = mass.length;


    for (let i = len-1; i > 0; i--){

        if(id === 'Contacts') {
            closeMenu(mass[i]);
            modalWindow();

        }else{
            if(mass[i].id === id) {
                obj.index = i;
                flag = true;
                setTimeout(()=>{
                    mass[i].classList.add('show');
                  }, 1000);
                lastItemOfArr();
                removeChange(mass[i]);
                continue;

            }else {
                if(flag){
                    if(window.screen.width > 1100){
                        mass[i].classList.remove('show');
                        mass[i].classList.add('up');
                    }else{
                        mass[i].classList.remove('show');
                    }

                }else{
                    if(window.screen.width > 1100) {
                        mass[i].classList.remove('show', 'up');
                        mass[i].classList.add('down');
                    }else {
                        mass[i].classList.remove('show');
                        mass[i].classList.add('upW');
                    }
                }
                removeChange(mass[i]);
            }
        }
    }

    startListener();
}
//----------------------------------------------------------------------------------
function closeMenu(item) {
    item.style.transform = 'none';
    item.classList.remove('menuOpen');
    item.style.borderRadius = `0`;
    obj.divArrowDown.classList.remove('none');
    item.removeEventListener('click', choosePage);
}
//-----------------------------------------------------------------------------------
function menuShow() {

    const mass = obj.massSlides,
        len = mass.length;
    let transForm = 0;

        mass.forEach( el => {
            el.classList.remove('up', 'down', 'upW', 'downW','show');
        });
        mass[len-1].classList.add('show');

        for (let i = 0; i < len; i++){

        if(!mass[i].style.transform || mass[i].style.transform === 'none'){
            if(i){
                window.screen.width < 1100 ? transForm += 70 : transForm += 80;
                mass[i].style.borderRadius = `8px 8px 0 0`;
                mass[i].style.transform = `translateY(${transForm}px)`;

            }
            mass[i].classList.add('menuOpen');
            mass[i].addEventListener('click', choosePage);
            obj.divArrowDown.classList.add('none');
            obj.divArrowUp.classList.add('none');
            stopListener();
        }else {
            closeMenu(mass[i]);
            startListener();

        }
    }
}
// -----------------------------------------------------------------------------------
function creatModalWindow() {
    const div = document.createElement('div'),
          str = `<div class="modalForm">
                        <header>
                            <h2>Свяжитесь с нами</h2>
                        </header>
                        <main>
                            <p>Skype: _________________</p>
                            <p>Vibe: __________________</p>
                            <p>Telegram: ______________</p>
                        </main>
                        <footer>
                            <a class="btn">Закрыть</a>
                        </footer>
                   </div>`;

    div.setAttribute('id','modal');
    div.innerHTML = str;
    obj.modalWindow = div;
    document.body.insertBefore(div,obj.container.nextElementSibling);
    obj.closeModal = document.querySelector('.btn');
}
// -----------------------------------------------------------------------------------
function modalWindow(){
    const modal = obj.modalWindow,
          btnClose = obj.closeModal;

    modal.classList.add('modalActive');
    stopListener();
    btnClose.addEventListener('click', ()=> {
        modal.classList.remove('modalActive');
        startListener();
    });
}
// --------------------------------------------------------
obj.menuButton.addEventListener('click', menuShow);
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
//
// слушаем событие resize
window.addEventListener('resize', () => {
    // получаем текущее значение высоты
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

function orientationScreen(){
    let lock = window.screen.orientation.lock("portrait")|| window.screen.lockOrientation("portrait");
    return lock;
}


// -------------------------------------------------------------
sliderContainer();
creatModalWindow();
arrowButtons();
startListener();






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
/* harmony import */ var _img_cat_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/cat.png */ "./src/img/cat.png");
/* harmony import */ var _img_Moon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/Moon.png */ "./src/img/Moon.png");
/* harmony import */ var _img_star_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../img/star.png */ "./src/img/star.png");
/* harmony import */ var _img_commentText_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../img/commentText.png */ "./src/img/commentText.png");
/* harmony import */ var _img_grassSnail_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../img/grassSnail.png */ "./src/img/grassSnail.png");







const obj = {
    slide    : document.createElement('div'),
    main     : document.createElement('div'),
    topBlock : document.createElement('div'),
    bottomBlock :document.createElement('div'),
    blockCat : document.createElement('div'),
    blockMoon: document.createElement('div'),
    cat      : document.createElement('div'),
    comm     : document.createElement('div'),
    wordsBlock: document.createElement('div'),
    inblWords : document.createElement('div'),
    left : 30,
    Cat  : new Image(),
    Moon : new Image(),
    Comment : new Image(),
    Snail : new Image()
}
// -------------------------------------------------------------
function addImage() {

    obj.Moon.src = _img_Moon_png__WEBPACK_IMPORTED_MODULE_2__["default"];
    obj.Moon.alt = 'Moon';
    obj.Moon.classList.add('moon');
    obj.blockMoon.appendChild(obj.Moon);

    obj.Cat.src = _img_cat_png__WEBPACK_IMPORTED_MODULE_1__["default"];
    obj.Cat.alt = 'Cat';
    obj.cat.appendChild(obj.Cat);

    obj.Comment.src = _img_commentText_png__WEBPACK_IMPORTED_MODULE_4__["default"];
    obj.Comment.alt = 'Comment';
    obj.comm.appendChild(obj.Comment);

    obj.Snail.src = _img_grassSnail_png__WEBPACK_IMPORTED_MODULE_5__["default"];
    obj.Snail.alt = 'Snail';
    obj.Snail.classList.add('grass');
    obj.main.appendChild(obj.Snail);

}
//-------------------------------------------------------------
function cloudsImg() {
    let div1 = document.createElement('div'),
        div2 = document.createElement('div'),
        div3 = document.createElement('div');

    div1.classList.add('cloud1','cloud', 'moveCloud_1');
    obj.main.appendChild(div1);

    div2.classList.add('cloud2', 'cloud', 'moveCloud_2');
    obj.main.appendChild(div2);

    div3.classList.add('cloud3', 'cloud', 'moveCloud_3');
    obj.main.appendChild(div3);

}
//------------------------------------------------------------
function moveMoon() {
    let moon = document.querySelector('.moon'),
        transf = (moon.style.transform).replace(/rotate\(/,''),
        num = transf.replace(/deg\)/,'');
       num = Number(num) +  0.5;
    if(moon.style.transform === ''){
        num = 0;
    }
    moon.style.transform = `rotate(${num}deg)`;

}
//-------------------------------------------------------------
function changePositionStars() {
    let massStars = obj.main.querySelectorAll('.star');

     for(let i = 0; i < massStars.length; i++){
         let top = Math.round(Math.random()*(40 - 5) + 5),
             left =  Math.round(Math.random()*(100 - 1) + 1);
             massStars[i].style.top = top + '%';
             massStars[i].style.left = left + '%';
     }
}
//-------------------------------------------------------------
function positionStar(newStar) {

    let top = Math.round(Math.random()*(40 - 5) + 5),
        left =  Math.round(Math.random()*(100 - 1) + 1);

        newStar.style.top = top + '%';
        newStar.style.left = left + '%';
}
//-------------------------------------------------------------
function sizeStar() {
    let size = 40;
    if(window.screen.width < 1000){
        size = 20;
    }
    return Math.round(Math.random()*(size - 5) + 5);
}
//--------------------------------------------------------------
function stars() {

    let amount = 0;

    if(window.screen.width < 1000){
        amount = Math.random()*(10 - 5) + 5;
    }else {
        amount = Math.random()*(20 - 10) + 10;
    }

    for (let i = 0; i < Math.round(amount); i++){
        let Star = new Image();
         Star.src = _img_star_png__WEBPACK_IMPORTED_MODULE_3__["default"];
         Star.alt = 'star';
         Star.classList.add('star');
         Star.style.height = sizeStar() + 'px';
         positionStar(Star);
         obj.main.appendChild(Star);

    }
}
//--------------------------------------------------------------
function words() {
    let massWords = ['&lt;b>', '&lt;h1>', '&lt;div>', '&lt;p>'],
        div = obj.inblWords,
        left = 0,
        p = document.createElement('p'),
        index = Math.floor(Math.random() * massWords.length),
        len = Math.floor(Math.random() * (5 - 2) + 2),
        num = Math.floor(Math.random() * (135 - 60) + 60);

        num < 90 ? left = Math.floor(Math.random() * (90 - 45) + 45):
                   left = Math.floor(Math.random() * (125 - 90) + 90);
       document.documentElement.style.setProperty('--left', `${left}%`);
       document.documentElement.style.setProperty('--num', `${num}deg`);


           for (let i = 0; i < len; i++) {
               let span = document.createElement('span');
                   span.innerHTML = `${massWords[index]}`;
                   div.appendChild(span);
                   // span.style.left = num + '%';
                   // span.style.top = '110%';

                   span.classList.add('moveW');

               setTimeout(()=>{span.remove();},10000);

           }

    // span.style.transform = `rotate(${num}deg)`;

}

// --------------------------------------------------------------
function container() {
    const slid1 = obj.slide,
          main  = obj.main,
          topBl = obj.topBlock,
          bttmBl = obj.bottomBlock,
          blockCat = obj.blockCat,
          blockMoon = obj.blockMoon,
          blockWords = obj.wordsBlock,
          inblW = obj.inblWords,
          name = document.createElement('h1'),
          cat = obj.cat,
          comm = obj.comm;

    slid1.classList.add('slid', 'slid1', 'show');
    slid1.style.height = document.documentElement.clientHeight + 'px';
    slid1.id = 'Main';

    main.classList.add('mainDiv');
    slid1.appendChild(main);

    topBl.classList.add('topBlock');
    main.appendChild(topBl);

    bttmBl.classList.add('bottomBlock');
    main.appendChild(bttmBl);

    name.classList.add('h1');
    name.innerHTML = 'ANY WEB';
    main.appendChild(name);


    blockCat.classList.add('blockCat');
    bttmBl.appendChild(blockCat);

    cat.classList.add('cat');
    comm.classList.add('comment');
    blockCat.appendChild(cat);
    blockCat.appendChild(comm);

    blockMoon.classList.add('blockMoon');
    topBl.appendChild(blockMoon);

    blockWords.classList.add('wordsBlock');
    blockWords.appendChild(inblW);
    bttmBl.appendChild(blockWords);

    addImage();
    stars();
    cloudsImg();
    setInterval(changePositionStars, 20000);
    setInterval(moveMoon,10000);
    setInterval(moveMoon,10000);
    setInterval(words, 5000);

}

container();


/* harmony default export */ __webpack_exports__["default"] = (obj.slide);

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
/* harmony import */ var _img_catWeOfffer_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/catWeOfffer.png */ "./src/img/catWeOfffer.png");
/* harmony import */ var _img_moonWeOffer_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/moonWeOffer.png */ "./src/img/moonWeOffer.png");
/* harmony import */ var _img_sun_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../img/sun.png */ "./src/img/sun.png");
/* harmony import */ var _img_backGround_min_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../img/backGround-min.png */ "./src/img/backGround-min.png");
/* harmony import */ var _img_grass_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../img/grass.png */ "./src/img/grass.png");
/* harmony import */ var _img_circle_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../img/circle.png */ "./src/img/circle.png");
/* harmony import */ var _json_svg_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../json/svg.json */ "./src/json/svg.json");
var _json_svg_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../json/svg.json */ "./src/json/svg.json", 1);









const slid2 = document.createElement('div');

slid2.classList.add('slid', 'slid2');
slid2.style.height = document.documentElement.clientHeight + 'px';
slid2.id = 'We suppose';

// create elements for slide We offer ================================================

const createElementsSlidWeOffer = {
    titleWeOffer : document.createElement('h2'),
    textTitleWeOffer : document.createTextNode('Мы предлагаем'),

    blockSVGWeOffer : document.createElement('div'),
    modalWindowInternetShop : document.createElement('div'),
    modalWindowSiteCompany : document.createElement('div'),
    modalWindowBlog : document.createElement('div'),
    modalWindowPortfolio : document.createElement('div'),
    modalWindowSocialNetwork : document.createElement('div'),
    modalWindowForum : document.createElement('div'),
    modalWindowLanding : document.createElement('div'),
    modalWindowGameSours : document.createElement('div'),

    containerModalInternetShop : document.createElement('div'),
    containerModalSiteCompany : document.createElement('div'),
    containerModalBlog : document.createElement('div'),
    containerModalPortfolio : document.createElement('div'),
    containerModalSocialNetwork : document.createElement('div'),
    containerModalForum : document.createElement('div'),
    containerModalLanding : document.createElement('div'),
    containerModalGameSours : document.createElement('div'),

    blockTextModalInternetShop : document.createElement('p'),
    blockTextModalSiteCompany : document.createElement('p'),
    blockTextModalBlog : document.createElement('p'),
    blockTextModalPortfolio : document.createElement('p'),
    blockTextModalSocialNetwork : document.createElement('p'),
    blockTextModalForum : document.createElement('p'),
    blockTextModalLanding : document.createElement('p'),
    blockTextModalGameSours : document.createElement('p'),

    buttonModalInternetShop : document.createElement('button'),
    buttonModalSiteCompany : document.createElement('button'),
    buttonModalBlog : document.createElement('button'),
    buttonModalPortfolio : document.createElement('button'),
    buttonModalSocialNetwork : document.createElement('button'),
    buttonModalForum : document.createElement('button'),
    buttonModalLanding : document.createElement('button'),
    buttonModalGameSours : document.createElement('button'),

    CatWeOffer : new Image(),
    MoonWeOffer : new Image(),
    Sun : new Image(),
    BackgroundHome : new Image(),
    Grass : new Image(),
}

// ===================================================================



// text for modal windows ===========================================

const createTextForModalWindows = {
    textModalInternetShop : document.createTextNode('Здесь слова излишни. Желаете продать? Поможем!'),
    textModalSiteCompany : document.createTextNode('У Вас есть фирма но знаете о ней только вы и сосед? Сделайте сайт - это шаг во всемирную паутину!'),
    textModalBlog : document.createTextNode('В душе Вы блогер и хотите иметь кучу подписчиков и отвечать на их коментарии? Это не сложно!'),
    textModalPortfolio : document.createTextNode('Вам надоело расказывать о себе. Или вы хотите чтобы о вас знали все - Портфолио, теперь все ваши достижения собраны в одном месте'),
    textModalSocialNetwork : document.createTextNode('Портрет самого Марка висит у вас в спальне, его лозунги у вас на заставке? Тогда вперед! Социальная сеть строит себя сама!'),
    textModalForum : document.createTextNode('Ваша цель помочь людям и сделать это мир чем-то лучше? Форум самое то! Вопросы и ответы сами найдутся - Вы есть "Супер модератор"!'),
    textModalLanding : document.createTextNode('Ваши клиенты восновном любят ленту? Без проблем - лендинг, нет ограничений по длинне'),
    textModalGameSours : document.createTextNode('Вы придумали неккий интерактив для развлечения офисного планктона или просто любиделей интернет серфинга. Вам необходим сайт с кучей условий и функций для воплощения этого в жизнь? Да не проблема)'),

    textButtonInternetShop : document.createTextNode('⨯'),
    textButtonSiteCompany : document.createTextNode('⨯'),
    textButtonBlog : document.createTextNode('⨯'),
    textButtonPortfolio : document.createTextNode('⨯'),
    textButtonSocialNetwork : document.createTextNode('⨯'),
    textButtonForum : document.createTextNode('⨯'),
    textButtonLanding : document.createTextNode('⨯'),
    textButtonGameSours : document.createTextNode('⨯'),
    // textButton : document.createTextNode('⨯'),
    
}

// ==================================================================



// img slide =======================================================

function imagesSlidWeOffer() {
    createElementsSlidWeOffer.CatWeOffer.src = _img_catWeOfffer_png__WEBPACK_IMPORTED_MODULE_1__["default"];
    createElementsSlidWeOffer.CatWeOffer.alt = 'catWeOffer';
    createElementsSlidWeOffer.CatWeOffer.classList.add('catWeOfffer');
    slid2.appendChild(createElementsSlidWeOffer.CatWeOffer);

    createElementsSlidWeOffer.MoonWeOffer.src = _img_moonWeOffer_png__WEBPACK_IMPORTED_MODULE_2__["default"];
    createElementsSlidWeOffer.MoonWeOffer.alt = 'moon';
    createElementsSlidWeOffer.MoonWeOffer.classList.add('moonWeOfffer');
    slid2.appendChild(createElementsSlidWeOffer.MoonWeOffer);

    createElementsSlidWeOffer.Sun.src = _img_sun_png__WEBPACK_IMPORTED_MODULE_3__["default"];
    createElementsSlidWeOffer.Sun.alt = 'Sun';
    createElementsSlidWeOffer.Sun.classList.add('sunWeOfffer');
    slid2.appendChild(createElementsSlidWeOffer.Sun);

    createElementsSlidWeOffer.BackgroundHome.src = _img_backGround_min_png__WEBPACK_IMPORTED_MODULE_4__["default"];
    createElementsSlidWeOffer.BackgroundHome.alt = 'BackgroundHome';
    createElementsSlidWeOffer.BackgroundHome.classList.add('homeWeOfffer');
    slid2.appendChild(createElementsSlidWeOffer.BackgroundHome);

    createElementsSlidWeOffer.Grass.src = _img_grass_png__WEBPACK_IMPORTED_MODULE_5__["default"];
    createElementsSlidWeOffer.Grass.alt = 'Grass';
    createElementsSlidWeOffer.Grass.classList.add('grassWeOfffer');
    slid2.appendChild(createElementsSlidWeOffer.Grass);
}

// ==================================================================



// function for create page ===========================================

function buildPage() {
    //create title
    createElementsSlidWeOffer.titleWeOffer.classList.add('titleWeOffer');
    createElementsSlidWeOffer.titleWeOffer.appendChild(createElementsSlidWeOffer.textTitleWeOffer);
    slid2.appendChild(createElementsSlidWeOffer.titleWeOffer);

    // create svg
    createElementsSlidWeOffer.blockSVGWeOffer.classList.add('blockSVG');
    slid2.appendChild(createElementsSlidWeOffer.blockSVGWeOffer);

    // create modal window for internet shop
    createElementsSlidWeOffer.modalWindowInternetShop.classList.add('modalWeOfffer', 'internetShop');
    createElementsSlidWeOffer.containerModalInternetShop.classList.add('containerWeOfffer');
    createElementsSlidWeOffer.buttonModalInternetShop.classList.add('internetShopButton');
    createElementsSlidWeOffer.buttonModalInternetShop.appendChild(createTextForModalWindows.textButtonInternetShop);
    createElementsSlidWeOffer.containerModalInternetShop.appendChild(createElementsSlidWeOffer.blockTextModalInternetShop);
    createElementsSlidWeOffer.containerModalInternetShop.appendChild(createElementsSlidWeOffer.buttonModalInternetShop);
    createElementsSlidWeOffer.blockTextModalInternetShop.appendChild(createTextForModalWindows.textModalInternetShop);
    createElementsSlidWeOffer.modalWindowInternetShop.appendChild(createElementsSlidWeOffer.containerModalInternetShop);
    slid2.appendChild(createElementsSlidWeOffer.modalWindowInternetShop);

    // create modal window for site company
    createElementsSlidWeOffer.modalWindowSiteCompany.classList.add('modalWeOfffer', 'siteCompany');
    createElementsSlidWeOffer.containerModalSiteCompany.classList.add('containerWeOfffer');
    createElementsSlidWeOffer.buttonModalSiteCompany.classList.add('siteCompanyButton');
    createElementsSlidWeOffer.buttonModalSiteCompany.appendChild(createTextForModalWindows.textButtonSiteCompany);
    createElementsSlidWeOffer.containerModalSiteCompany.appendChild(createElementsSlidWeOffer.blockTextModalSiteCompany);
    createElementsSlidWeOffer.containerModalSiteCompany.appendChild(createElementsSlidWeOffer.buttonModalSiteCompany);
    createElementsSlidWeOffer.blockTextModalSiteCompany.appendChild(createTextForModalWindows.textModalSiteCompany);
    createElementsSlidWeOffer.modalWindowSiteCompany.appendChild(createElementsSlidWeOffer.containerModalSiteCompany);
    slid2.appendChild(createElementsSlidWeOffer.modalWindowSiteCompany);

    // create modal window for Blog
    createElementsSlidWeOffer.modalWindowBlog.classList.add('modalWeOfffer', 'blog');
    createElementsSlidWeOffer.containerModalBlog.classList.add('containerWeOfffer');
    createElementsSlidWeOffer.buttonModalBlog.classList.add('blogButton');
    createElementsSlidWeOffer.buttonModalBlog.appendChild(createTextForModalWindows.textButtonBlog);
    createElementsSlidWeOffer.containerModalBlog.appendChild(createElementsSlidWeOffer.blockTextModalBlog);
    createElementsSlidWeOffer.containerModalBlog.appendChild(createElementsSlidWeOffer.buttonModalBlog);
    createElementsSlidWeOffer.blockTextModalBlog.appendChild(createTextForModalWindows.textModalBlog);
    createElementsSlidWeOffer.modalWindowBlog.appendChild(createElementsSlidWeOffer.containerModalBlog);
    slid2.appendChild(createElementsSlidWeOffer.modalWindowBlog);

    // create modal window for Portfolio
    createElementsSlidWeOffer.modalWindowPortfolio.classList.add('modalWeOfffer', 'portfolio');
    createElementsSlidWeOffer.containerModalPortfolio.classList.add('containerWeOfffer');
    createElementsSlidWeOffer.buttonModalPortfolio.classList.add('portfolioButton');
    createElementsSlidWeOffer.buttonModalPortfolio.appendChild(createTextForModalWindows.textButtonPortfolio);
    createElementsSlidWeOffer.containerModalPortfolio.appendChild(createElementsSlidWeOffer.blockTextModalPortfolio);
    createElementsSlidWeOffer.containerModalPortfolio.appendChild(createElementsSlidWeOffer.buttonModalPortfolio);
    createElementsSlidWeOffer.blockTextModalPortfolio.appendChild(createTextForModalWindows.textModalPortfolio);
    createElementsSlidWeOffer.modalWindowPortfolio.appendChild(createElementsSlidWeOffer.containerModalPortfolio);
    slid2.appendChild(createElementsSlidWeOffer.modalWindowPortfolio);

    // create modal window for Social Network
    createElementsSlidWeOffer.modalWindowSocialNetwork.classList.add('modalWeOfffer', 'socialNetwork');
    createElementsSlidWeOffer.containerModalSocialNetwork.classList.add('containerWeOfffer');
    createElementsSlidWeOffer.buttonModalSocialNetwork.classList.add('socialNetworkButton');
    createElementsSlidWeOffer.buttonModalSocialNetwork.appendChild(createTextForModalWindows.textButtonSocialNetwork);
    createElementsSlidWeOffer.containerModalSocialNetwork.appendChild(createElementsSlidWeOffer.blockTextModalSocialNetwork);
    createElementsSlidWeOffer.containerModalSocialNetwork.appendChild(createElementsSlidWeOffer.buttonModalSocialNetwork);
    createElementsSlidWeOffer.blockTextModalSocialNetwork.appendChild(createTextForModalWindows.textModalSocialNetwork);
    createElementsSlidWeOffer.modalWindowSocialNetwork.appendChild(createElementsSlidWeOffer.containerModalSocialNetwork);
    slid2.appendChild(createElementsSlidWeOffer.modalWindowSocialNetwork);

    // create modal window for Forum
    createElementsSlidWeOffer.modalWindowForum.classList.add('modalWeOfffer', 'forum');
    createElementsSlidWeOffer.containerModalForum.classList.add('containerWeOfffer');
    createElementsSlidWeOffer.buttonModalForum.classList.add('forumButton');
    createElementsSlidWeOffer.buttonModalForum.appendChild(createTextForModalWindows.textButtonForum);
    createElementsSlidWeOffer.containerModalForum.appendChild(createElementsSlidWeOffer.blockTextModalForum);
    createElementsSlidWeOffer.containerModalForum.appendChild(createElementsSlidWeOffer.buttonModalForum);
    createElementsSlidWeOffer.blockTextModalForum.appendChild(createTextForModalWindows.textModalForum);
    createElementsSlidWeOffer.modalWindowForum.appendChild(createElementsSlidWeOffer.containerModalForum);
    slid2.appendChild(createElementsSlidWeOffer.modalWindowForum);

    // create modal window for Landing
    createElementsSlidWeOffer.modalWindowLanding.classList.add('modalWeOfffer', 'landing');
    createElementsSlidWeOffer.containerModalLanding.classList.add('containerWeOfffer');
    createElementsSlidWeOffer.buttonModalLanding.classList.add('landingButton');
    createElementsSlidWeOffer.buttonModalLanding.appendChild(createTextForModalWindows.textButtonLanding);
    createElementsSlidWeOffer.containerModalLanding.appendChild(createElementsSlidWeOffer.blockTextModalLanding);
    createElementsSlidWeOffer.containerModalLanding.appendChild(createElementsSlidWeOffer.buttonModalLanding);
    createElementsSlidWeOffer.blockTextModalLanding.appendChild(createTextForModalWindows.textModalLanding);
    createElementsSlidWeOffer.modalWindowLanding.appendChild(createElementsSlidWeOffer.containerModalLanding);
    slid2.appendChild(createElementsSlidWeOffer.modalWindowLanding);

    // create modal window for Game Sours
    createElementsSlidWeOffer.modalWindowGameSours.classList.add('modalWeOfffer', 'gameSours');
    createElementsSlidWeOffer.containerModalGameSours.classList.add('containerWeOfffer');
    createElementsSlidWeOffer.buttonModalGameSours.classList.add('gameSoursButton');
    createElementsSlidWeOffer.buttonModalGameSours.appendChild(createTextForModalWindows.textButtonGameSours);
    createElementsSlidWeOffer.containerModalGameSours.appendChild(createElementsSlidWeOffer.blockTextModalGameSours);
    createElementsSlidWeOffer.containerModalGameSours.appendChild(createElementsSlidWeOffer.buttonModalGameSours);
    createElementsSlidWeOffer.blockTextModalGameSours.appendChild(createTextForModalWindows.textModalGameSours);
    createElementsSlidWeOffer.modalWindowGameSours.appendChild(createElementsSlidWeOffer.containerModalGameSours);
    slid2.appendChild(createElementsSlidWeOffer.modalWindowGameSours);
}

// ==================================================================


imagesSlidWeOffer();
buildPage();


const variables = {
    counterDivs : 0,
    counter : 0,
    classRedStars : '.starRed',
    classYellowStars : '.starYellow',
    classBlueStars : '.starBlue',
    bgcColorRedStar : '#FA8072',
    bgcColorYellowStar : 'yellow',
    bgcColorBlueStar : '#00FFFF',
    r1color : 4,
    r2color : 14,
    r3color : 114,
    r4color : 66,
    r5color : 106,
    r6color : 224,
    linkSvgDataJSON: '/svg.json',
    arrSvgElements : ['textSiteCompany', 'textSocialNetwork', 'textForum', 'textGameSours', 'textBlog', 'textLanding', 'textPortfolio', 'textInternetShop'],
    modalWindows : ['.siteCompany', '.socialNetwork', '.forum', '.gameSours', '.blog', '.landing', '.portfolio', '.internetShop'],
    closeModalWindows : ['siteCompanyButton', 'socialNetworkButton', 'forumButton', 'gameSoursButton', 'blogButton', 'landingButton', 'portfolioButton', 'internetShopButton'],
    paramsScreen : [300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1150, 1300, 1450, 1600, 1950, 2600],
}



// position for <text> in svg and animation circle ==========================

const fnwh = function heigthWidth(data){
    if(window.innerHeight < 450){
        createElementsSlidWeOffer.blockSVGWeOffer.innerHTML = data.h450;
    }else{
        for(let i = 0; i <= variables.paramsScreen.length; i++){
            if(window.innerWidth < variables.paramsScreen[i]){
                createElementsSlidWeOffer.blockSVGWeOffer.innerHTML = data[variables.paramsScreen[i]];
                break;
            }
        }
    }
}
fnwh(_json_svg_json__WEBPACK_IMPORTED_MODULE_7__);


const sizeWindow = window.addEventListener('resize', () => { fnwh(_json_svg_json__WEBPACK_IMPORTED_MODULE_7__) });

// ===========================================================================



// function for stars ========================================================

const createDiv = setInterval(() =>{
    let div = document.createElement('div');
    variables.counterDivs < 33 ? div.classList.add('starRed') : '';
    (variables.counterDivs > 33 && variables.counterDivs < 66) ? div.classList.add('starYellow') : '';
    variables.counterDivs > 66 ? div.classList.add('starBlue') : '';
    slid2.appendChild(div);
    variables.counterDivs++;
    variables.counterDivs === 100 ? clearInterval(createDiv) : '';
}, 0.01);


const coordinatesAndColorStars = function stars(color, htmlClass){
    let askDiv = document.querySelectorAll(htmlClass);
    askDiv.forEach((item) => {
        item.style.top = Math.floor(Math.random() * Math.floor(80)) + '%';
        item.style.left = Math.floor(Math.random() * Math.floor(98)) + '%';
        item.style.backgroundColor = color;
    });
}


const callFunctionStars = setInterval(() => {
    variables.counter ++;
    variables.counter === 3 ? variables.counter = 0 : '';
    variables.counter === 0 ? coordinatesAndColorStars(variables.bgcColorYellowStar, variables.classYellowStars) : '';
    variables.counter === 1 ? coordinatesAndColorStars(variables.bgcColorRedStar, variables.classRedStars) : '';
    variables.counter === 2 ? coordinatesAndColorStars(variables.bgcColorBlueStar, variables.classBlueStars) : '';
}, 3000);

// ==========================================================================



// functions for modal windows ==============================================

const openModal = function openModalWindow(classModal){
    let someModal = document.querySelector(variables.modalWindows[classModal]);

    createElementsSlidWeOffer.blockSVGWeOffer.style.left = 100 + '%';
    createElementsSlidWeOffer.MoonWeOffer.style.right = -35 + '%';
    createElementsSlidWeOffer.Sun.style.opacity = 1;
    someModal.style.opacity = 1;

    setTimeout(() => {
        bgcColorModWin('day');
        createElementsSlidWeOffer.blockSVGWeOffer.style.opacity = 0;
        createElementsSlidWeOffer.MoonWeOffer.style.opacity = 0;
        createElementsSlidWeOffer.MoonWeOffer.style.right = 100 + '%';
        createElementsSlidWeOffer.blockSVGWeOffer.style.left = -100 + '%';
        someModal.style.left = 0 + '%';
        createElementsSlidWeOffer.Sun.style.right = 0 + '%';
        variables.bgcColorRedStar = 'transparent';
        variables.bgcColorBlueStar = 'transparent';
        variables.bgcColorYellowStar = 'transparent';
    }, 1000);
}


const closeModal = function closeModalWindow(classModal){
    let someModal = document.querySelector(variables.modalWindows[classModal]);

    someModal.style.left = 100 + '%';
    createElementsSlidWeOffer.Sun.style.right = -35 + '%';
    createElementsSlidWeOffer.MoonWeOffer.style.opacity = 1;
    createElementsSlidWeOffer.blockSVGWeOffer.style.opacity = 1;

    setTimeout(() => {
        bgcColorModWin('night');
        someModal.style.opacity = 0;
        createElementsSlidWeOffer.Sun.style.opacity = 0;
        createElementsSlidWeOffer.Sun.style.right = 100 + '%';
        someModal.style.left = -100 + '%';
        createElementsSlidWeOffer.blockSVGWeOffer.style.left = 0 + '%';
        createElementsSlidWeOffer.MoonWeOffer.style.right = 0 + '%';
        variables.bgcColorRedStar = '#FA8072';
        variables.bgcColorBlueStar = '#00FFFF';
        variables.bgcColorYellowStar = 'yellow';
    }, 1000);
}

// bgc nigth or day
const bgcColorModWin = function backgroundColorModalWindows(paramsBgcol){
    paramsBgcol === 'day' ? slid2.style.backgroundPositionY = 100 + '%' : slid2.style.backgroundPositionY = 0 + '%';
}


slid2.addEventListener('click', (event) => {
    if(event.target.closest('div.blockSVG')){
        variables.arrSvgElements.forEach((item, index) => {
            item === event.target.className.baseVal ? openModal(index) : '';
        });
    }
    if(event.target.closest('div')){
        variables.closeModalWindows.forEach((item, index) => {
            item === event.target.className ? closeModal(index) : '';
        });
    }
});

// =========================================================================


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
/* harmony import */ var _img_template_1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/template_1.png */ "./src/img/template_1.png");
/* harmony import */ var _img_template_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/template_2.jpg */ "./src/img/template_2.jpg");
/* harmony import */ var _img_template_3_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../img/template_3.png */ "./src/img/template_3.png");
/* harmony import */ var _img_template_4_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../img/template_4.png */ "./src/img/template_4.png");
/* harmony import */ var _img_template_5_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../img/template_5.png */ "./src/img/template_5.png");
/* harmony import */ var _img_template_6_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../img/template_6.png */ "./src/img/template_6.png");
/* harmony import */ var _img_template_7_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../img/template_7.png */ "./src/img/template_7.png");
/* harmony import */ var _img_amaioswim_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../img/amaioswim.jpg */ "./src/img/amaioswim.jpg");
/* harmony import */ var _img_anyW4Ytmpl_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../img/anyW4Ytmpl.jpg */ "./src/img/anyW4Ytmpl.jpg");
/* harmony import */ var _img_cosm_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../img/cosm.jpg */ "./src/img/cosm.jpg");
/* harmony import */ var _img_destiny_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../img/destiny.jpg */ "./src/img/destiny.jpg");
/* harmony import */ var _img_proudandpunch_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../img/proudandpunch.jpg */ "./src/img/proudandpunch.jpg");
/* harmony import */ var _img_rainforestfoods_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../img/rainforestfoods.jpg */ "./src/img/rainforestfoods.jpg");















const obj = {
    slide : document.createElement('div'),
    main  : document.createElement('div'),
    massImg: [_img_template_1_png__WEBPACK_IMPORTED_MODULE_1__["default"], _img_template_2_jpg__WEBPACK_IMPORTED_MODULE_2__["default"], _img_template_3_png__WEBPACK_IMPORTED_MODULE_3__["default"], _img_template_4_png__WEBPACK_IMPORTED_MODULE_4__["default"], _img_template_5_png__WEBPACK_IMPORTED_MODULE_5__["default"], _img_template_6_png__WEBPACK_IMPORTED_MODULE_6__["default"], _img_template_7_png__WEBPACK_IMPORTED_MODULE_7__["default"], _img_amaioswim_jpg__WEBPACK_IMPORTED_MODULE_8__["default"], _img_anyW4Ytmpl_jpg__WEBPACK_IMPORTED_MODULE_9__["default"], _img_cosm_jpg__WEBPACK_IMPORTED_MODULE_10__["default"],
              _img_destiny_jpg__WEBPACK_IMPORTED_MODULE_11__["default"], _img_proudandpunch_jpg__WEBPACK_IMPORTED_MODULE_12__["default"], _img_rainforestfoods_jpg__WEBPACK_IMPORTED_MODULE_13__["default"]],
    massBlocks : [],

}
//-------------------------------------------------------------
function sizeBlock(size) {
    return Math.round(Math.random()*(size - 160) + 160);
}
//--------------------------------------------------------------
function sizeScreen() {
    let size = 0,
        docWidth = document.documentElement.clientWidth*.8,
        docHeight = document.documentElement.clientHeight*.8;

    docWidth > docHeight ?
        size = Math.round(docHeight / 2.1):
        size = Math.round( docWidth/ 3.1);
    if(window.screen.width < 1000){
        size = Math.round(docWidth/ 2);
    }
    return size;
}
//----------------------------------------------------------
// function newHeight(parent) {
//     let height = parent.clientHeight;
//     if(window.screen.width < 900)
//     {
//         height = parent.clientWidth/2;
//     }else {
//         height = parent.clientWidth/3
//     }
//     return Math.round(Math.random()*(height - height/3) + height/3);
// }
//--------------------------------------------------------------
function newWidth(parent) {
    let width = 0;
    if(window.screen.width < 900)
    {
        width = parent.clientWidth/2;
    }else {
        width = parent.clientWidth/3
    }
    return Math.round(Math.random()*(width - width/2) + width/2);
}
// ---------------------------------------------------------
function createBlock( type, size, ...classes) {
    let block = document.createElement(type);
        block.classList.add(...classes);
        return block;
}

//--------------------------------------------------------------
function massBlocks() {
   let size = sizeScreen(),
       massImg = obj.massImg,
       len = massImg.length;

        if(window.screen.width < 1000){
            len = 10;
        }
        for (let i = 0; i < len; i++){
        let div = null,
            img = new Image();
            img.src = massImg[i];
            img.width = sizeBlock(size);
            div = createBlock('div', size, 'block',`block_${i+1}`);
            div.appendChild(img);
            div.addEventListener('click', focus);
            obj.massBlocks.push(div);
    }

}
//---------------------------------------------------------------
function newPositionTop(el) {
    let parent = el.offsetParent,
        elH = el.offsetHeight,
        prH = parent.offsetHeight,
        endPoint = prH - elH;

    return Math.round(Math.random()*(endPoint - 1 + 1) + 1);
}
//---------------------------------------------------------------
function newPositionLeft(el) {
    let parent = el.offsetParent,
        elW = el.offsetWidth,
        prW = parent.offsetWidth,
        endPoint = prW - elW;
    return Math.round(Math.random()*(endPoint - 1 + 1) + 1);
}
//---------------------------------------------------------------
function zIndex() {
    return Math.round(Math.random()*(10 - 1) + 1);
}
// ---------------------------------------------------------------
 function positionBlock() {
    let mass = obj.massBlocks;

    mass.forEach(el=>{
        el.style.top = newPositionTop(el) + 'px';
        el.style.left = newPositionLeft(el) + 'px';
        el.style.zIndex = zIndex();
        el.firstElementChild.style.width = newWidth(el.parentElement) +'px';
        el.style.position = 'absolute';
    })
}
//--------------------------------------------------------
function  fillMain() {
    let main = obj.main,
        mass = obj.massBlocks;

    mass.forEach(el=>{
        main.appendChild(el);
    });
}
// -------------------------------------------------------
function container() {
    const container = obj.slide,
        main = obj.main,
        name = document.createElement('h2');


    container.classList.add('slid', 'slid3');
    container.style.height = document.documentElement.clientHeight + 'px';
    container.id = 'Our work';

    name.innerHTML = 'Наши работы';
    container.appendChild(name);

    main.classList.add('mainSlide3');
    container.appendChild(main);
    massBlocks();
    fillMain();

    let moveBlocksInterval = undefined,
        moveBlockTimeOut= undefined;

    container.addEventListener('change',()=>{
        if(container.classList.contains('show')){
            moveBlocksInterval = setInterval(()=> positionBlock(), 20000);
            moveBlockTimeOut = setTimeout(()=> positionBlock(), 0);
        }else {
            clearTimeout(moveBlockTimeOut);
            clearInterval(moveBlocksInterval);
        }
    })


}
//---------------------------------------------------------------
function positionCenter(valueScr, valueBl) {
    return Math.round(valueScr/2 - valueBl/2);
}

//----------------------------------------------------------------
function focus(ev) {
    let el = ev.target,
        parent = el.parentElement,
        docWidth = parent.parentElement.clientWidth,
        docHeight = parent.parentElement.clientHeight,
        size = undefined;

     el.clientWidth > el.clientHeight ? size = docWidth/1.5 : size = docHeight-20;

    el.clientWidth > el.clientHeight ? el.style.width = Math.ceil(size) + 'px' :
        (el.style.height = Math.ceil(size) + 'px', el.classList.add('blockCenter'));
    parent.style.zIndex = 20;
    parent.classList.add('transition');
    parent.style.left = positionCenter(docWidth, el.clientWidth) + 'px';
    parent.style.top = positionCenter(docHeight, el.clientHeight) + 'px';
    setTimeout(()=>{
        positionBlock();
        parent.classList.remove('transition');
        el.classList.remove('blockCenter');
    },5000);
}

container();


/* harmony default export */ __webpack_exports__["default"] = (obj.slide);




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
/* harmony import */ var _img_template_1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/template_1.png */ "./src/img/template_1.png");
/* harmony import */ var _img_template_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/template_2.jpg */ "./src/img/template_2.jpg");
/* harmony import */ var _img_template_3_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../img/template_3.png */ "./src/img/template_3.png");
/* harmony import */ var _img_template_4_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../img/template_4.png */ "./src/img/template_4.png");
/* harmony import */ var _img_template_5_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../img/template_5.png */ "./src/img/template_5.png");
/* harmony import */ var _img_template_6_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../img/template_6.png */ "./src/img/template_6.png");
/* harmony import */ var _img_template_7_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../img/template_7.png */ "./src/img/template_7.png");








// import Temp_8 from '../../img/template_8.png';

const obj = {
    slide : document.createElement('div'),
    main  : document.createElement('div'),
    massImages : [],

}
// --------------------------------------------------------------------
function Images() {
    let temp_1 = new Image();
        temp_1.src = _img_template_1_png__WEBPACK_IMPORTED_MODULE_1__["default"];
        temp_1.alt = 'Template';
        obj.massImages.push(temp_1);

    let temp_2 = new Image();
        temp_2.src = _img_template_2_jpg__WEBPACK_IMPORTED_MODULE_2__["default"];
        temp_2.alt = 'Template';
        obj.massImages.push(temp_2);

    let temp_3 = new Image();
        temp_3.src = _img_template_3_png__WEBPACK_IMPORTED_MODULE_3__["default"];
        temp_3.alt = 'Template';
        obj.massImages.push(temp_3);

    let temp_4 = new Image();
        temp_4.src = _img_template_4_png__WEBPACK_IMPORTED_MODULE_4__["default"];
        temp_4.alt = 'Template';
        obj.massImages.push(temp_4);

    let temp_5 = new Image();
        temp_5.src = _img_template_5_png__WEBPACK_IMPORTED_MODULE_5__["default"];
        temp_5.alt = 'Template';
        obj.massImages.push(temp_5);

    let temp_6 = new Image();
        temp_6.src = _img_template_6_png__WEBPACK_IMPORTED_MODULE_6__["default"];
        temp_6.alt = 'Template';
        obj.massImages.push(temp_6);

    let temp_7 = new Image();
        temp_7.src = _img_template_7_png__WEBPACK_IMPORTED_MODULE_7__["default"];
        temp_7.alt = 'Template';
        obj.massImages.push(temp_7);

    let temp_8 = new Image();
        temp_8.src = _img_template_1_png__WEBPACK_IMPORTED_MODULE_1__["default"];
        temp_8.alt = 'Template';
        obj.massImages.push(temp_8);

    let temp_9 = new Image();
        temp_9.src = _img_template_2_jpg__WEBPACK_IMPORTED_MODULE_2__["default"];
        temp_9.alt = 'Template';
        obj.massImages.push(temp_9);
}
// --------------------------------------------------------
// function resizeImage(e) {
//
//     if( document.innerWidth < 1000){
//         this.classList.contains('resize')? this.classList.remove('resize')
//                                          :this.classList.add('resize');
//     }else {
//         this.removeEventListener('click',resizeImage);
//     }
//
// }
// -------------------------------------------------------
function templates() {

    for (let i = 0; i < 9; i++){
        let div = document.createElement('div');
            div.classList.add('template');
            div.style.backgroundImage = `url("${obj.massImages[i].src}")`;
            obj.main.appendChild(div);

            // div.addEventListener('click',resizeImage);
    }

}

// -------------------------------------------------------
function container() {
    const container = obj.slide,
          main = obj.main,
          name = document.createElement('h2');


    container.classList.add('slid', 'slid4');
    container.style.height = document.documentElement.clientHeight + 'px';
    container.id = 'Templates';

    name.innerHTML = 'PSD шаблоны';
    container.appendChild(name);

    main.classList.add('main');
    container.appendChild(main);
    Images();
    templates();
}
container();

/* harmony default export */ __webpack_exports__["default"] = (obj.slide);


/***/ }),

/***/ "./src/app/slides/slide5.js":
/*!**********************************!*\
  !*** ./src/app/slides/slide5.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


const slid5 = document.createElement('div');

slid5.classList.add('slid', 'slid5');
slid5.style.height = document.documentElement.clientHeight + 'px';
slid5.innerHTML =  `<h2 class="contacts">Контакты</h2>`;
slid5.id = 'Contacts';
/* harmony default export */ __webpack_exports__["default"] = (slid5);

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

/***/ "./src/fonts/Hanging Letters.ttf":
/*!***************************************!*\
  !*** ./src/fonts/Hanging Letters.ttf ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1da2ac0ce2475f77ead14788891e054a.ttf");

/***/ }),

/***/ "./src/fonts/Segoe Print Bold.ttf":
/*!****************************************!*\
  !*** ./src/fonts/Segoe Print Bold.ttf ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4ed8298204138b08c1e73d2d9a6cba9a.ttf");

/***/ }),

/***/ "./src/img/Moon.png":
/*!**************************!*\
  !*** ./src/img/Moon.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/Moon.png");

/***/ }),

/***/ "./src/img/amaioswim.jpg":
/*!*******************************!*\
  !*** ./src/img/amaioswim.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/amaioswim.jpg");

/***/ }),

/***/ "./src/img/anyW4Ytmpl.jpg":
/*!********************************!*\
  !*** ./src/img/anyW4Ytmpl.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/anyW4Ytmpl.jpg");

/***/ }),

/***/ "./src/img/backGround-min.png":
/*!************************************!*\
  !*** ./src/img/backGround-min.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/backGround-min.png");

/***/ }),

/***/ "./src/img/blue_sky.jpg":
/*!******************************!*\
  !*** ./src/img/blue_sky.jpg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/blue_sky.jpg");

/***/ }),

/***/ "./src/img/cat.png":
/*!*************************!*\
  !*** ./src/img/cat.png ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/cat.png");

/***/ }),

/***/ "./src/img/catWeOfffer.png":
/*!*********************************!*\
  !*** ./src/img/catWeOfffer.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/catWeOfffer.png");

/***/ }),

/***/ "./src/img/circle.png":
/*!****************************!*\
  !*** ./src/img/circle.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/circle.png");

/***/ }),

/***/ "./src/img/cloud_1.png":
/*!*****************************!*\
  !*** ./src/img/cloud_1.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/cloud_1.png");

/***/ }),

/***/ "./src/img/cloud_2.png":
/*!*****************************!*\
  !*** ./src/img/cloud_2.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/cloud_2.png");

/***/ }),

/***/ "./src/img/cloud_3.png":
/*!*****************************!*\
  !*** ./src/img/cloud_3.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/cloud_3.png");

/***/ }),

/***/ "./src/img/commentText.png":
/*!*********************************!*\
  !*** ./src/img/commentText.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/commentText.png");

/***/ }),

/***/ "./src/img/cosm.jpg":
/*!**************************!*\
  !*** ./src/img/cosm.jpg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/cosm.jpg");

/***/ }),

/***/ "./src/img/destiny.jpg":
/*!*****************************!*\
  !*** ./src/img/destiny.jpg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/destiny.jpg");

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

/***/ "./src/img/grass.png":
/*!***************************!*\
  !*** ./src/img/grass.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/grass.png");

/***/ }),

/***/ "./src/img/grassSnail.png":
/*!********************************!*\
  !*** ./src/img/grassSnail.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/grassSnail.png");

/***/ }),

/***/ "./src/img/menu_white.png":
/*!********************************!*\
  !*** ./src/img/menu_white.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/menu_white.png");

/***/ }),

/***/ "./src/img/moonWeOffer.png":
/*!*********************************!*\
  !*** ./src/img/moonWeOffer.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/moonWeOffer.png");

/***/ }),

/***/ "./src/img/proudandpunch.jpg":
/*!***********************************!*\
  !*** ./src/img/proudandpunch.jpg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/proudandpunch.jpg");

/***/ }),

/***/ "./src/img/rainforestfoods.jpg":
/*!*************************************!*\
  !*** ./src/img/rainforestfoods.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/rainforestfoods.jpg");

/***/ }),

/***/ "./src/img/star.png":
/*!**************************!*\
  !*** ./src/img/star.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/star.png");

/***/ }),

/***/ "./src/img/sun.png":
/*!*************************!*\
  !*** ./src/img/sun.png ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/sun.png");

/***/ }),

/***/ "./src/img/template_1.png":
/*!********************************!*\
  !*** ./src/img/template_1.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/template_1.png");

/***/ }),

/***/ "./src/img/template_2.jpg":
/*!********************************!*\
  !*** ./src/img/template_2.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/template_2.jpg");

/***/ }),

/***/ "./src/img/template_3.png":
/*!********************************!*\
  !*** ./src/img/template_3.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/template_3.png");

/***/ }),

/***/ "./src/img/template_4.png":
/*!********************************!*\
  !*** ./src/img/template_4.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/template_4.png");

/***/ }),

/***/ "./src/img/template_5.png":
/*!********************************!*\
  !*** ./src/img/template_5.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/template_5.png");

/***/ }),

/***/ "./src/img/template_6.png":
/*!********************************!*\
  !*** ./src/img/template_6.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/template_6.png");

/***/ }),

/***/ "./src/img/template_7.png":
/*!********************************!*\
  !*** ./src/img/template_7.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/template_7.png");

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

/***/ }),

/***/ "./src/json/svg.json":
/*!***************************!*\
  !*** ./src/json/svg.json ***!
  \***************************/
/*! exports provided: 0, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1150, 1300, 1450, 1600, 1950, 2600, h450, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"0\":\"param0\",\"300\":\"<svg width='100%' height='100%' class='svgContainer'><text x='22%' y='36%' class='textSiteCompany' stroke='red' stroke-width='1px' fill='white'>Сайт компании</text><text x='41%' y='26%' class='textSocialNetwork' stroke='red' stroke-width='1px' fill='white'>Социальные сети</text><text x='60%' y='68%' class='textForum' stroke='red' stroke-width='1px' fill='white'>Форум</text><text x='28%' y='48%' class='textGameSours' stroke='red' stroke-width='1px' fill='white'>Развлекательный ресурс</text><text x='14%' y='8%' class='textBlog' stroke='red' stroke-width='1px' fill='white'>Блог</text><text x='68%' y='80%' class='textLanding' stroke='red' stroke-width='1px' fill='white'>Лендинг</text><text x='20%' y='17%' class='textPortfolio' stroke='red' stroke-width='1px' fill='white'>Портфолио</text><text x='5%' y='58%' class='textInternetShop' stroke='red' stroke-width='1px' fill='white'>Интернет магазин</text></svg>\",\"350\":\"<svg width='100%' height='100%' class='svgContainer'><text x='22%' y='36%' class='textSiteCompany' stroke='red' stroke-width='1px' fill='white'>Сайт компании</text><text x='41%' y='26%' class='textSocialNetwork' stroke='red' stroke-width='1px' fill='white'>Социальные сети</text><text x='60%' y='68%' class='textForum' stroke='red' stroke-width='1px' fill='white'>Форум</text><text x='25%' y='48%' class='textGameSours' stroke='red' stroke-width='1px' fill='white'>Развлекательный ресурс</text><text x='14%' y='8%' class='textBlog' stroke='red' stroke-width='1px' fill='white'>Блог</text><text x='68%' y='77%' class='textLanding' stroke='red' stroke-width='1px' fill='white'>Лендинг</text><text x='20%' y='17%' class='textPortfolio' stroke='red' stroke-width='1px' fill='white'>Портфолио</text><text x='5%' y='58%' class='textInternetShop' stroke='red' stroke-width='1px' fill='white'>Интернет магазин</text></svg>\",\"400\":\"<svg width='100%' height='100%' class='svgContainer'><text x='22%' y='36%' class='textSiteCompany' stroke='red' stroke-width='1px' fill='white'>Сайт компании</text><text x='41%' y='26%' class='textSocialNetwork' stroke='red' stroke-width='1px' fill='white'>Социальные сети</text><text x='60%' y='68%' class='textForum' stroke='red' stroke-width='1px' fill='white'>Форум</text><text x='28%' y='48%' class='textGameSours' stroke='red' stroke-width='1px' fill='white'>Развлекательный ресурс</text><text x='14%' y='8%' class='textBlog' stroke='red' stroke-width='1px' fill='white'>Блог</text><text x='68%' y='80%' class='textLanding' stroke='red' stroke-width='1px' fill='white'>Лендинг</text><text x='20%' y='17%' class='textPortfolio' stroke='red' stroke-width='1px' fill='white'>Портфолио</text><text x='5%' y='58%' class='textInternetShop' stroke='red' stroke-width='1px' fill='white'>Интернет магазин</text></svg>\",\"450\":\"<svg width='100%' height='100%' class='svgContainer'><text x='22%' y='36%' class='textSiteCompany' stroke='red' stroke-width='1px' fill='white'>Сайт компании</text><text x='41%' y='26%' class='textSocialNetwork' stroke='red' stroke-width='1px' fill='white'>Социальные сети</text><text x='60%' y='68%' class='textForum' stroke='red' stroke-width='1px' fill='white'>Форум</text><text x='28%' y='48%' class='textGameSours' stroke='red' stroke-width='1px' fill='white'>Развлекательный ресурс</text><text x='14%' y='8%' class='textBlog' stroke='red' stroke-width='1px' fill='white'>Блог</text><text x='68%' y='80%' class='textLanding' stroke='red' stroke-width='1px' fill='white'>Лендинг</text><text x='20%' y='17%' class='textPortfolio' stroke='red' stroke-width='1px' fill='white'>Портфолио</text><text x='5%' y='58%' class='textInternetShop' stroke='red' stroke-width='1px' fill='white'>Интернет магазин</text></svg>\",\"500\":\"<svg width='100%' height='100%' class='svgContainer'><text x='22%' y='36%' class='textSiteCompany' stroke='red' stroke-width='1px' fill='white'>Сайт компании</text><text x='41%' y='26%' class='textSocialNetwork' stroke='red' stroke-width='1px' fill='white'>Социальные сети</text><text x='60%' y='68%' class='textForum' stroke='red' stroke-width='1px' fill='white'>Форум</text><text x='28%' y='48%' class='textGameSours' stroke='red' stroke-width='1px' fill='white'>Развлекательный ресурс</text><text x='14%' y='8%' class='textBlog' stroke='red' stroke-width='1px' fill='white'>Блог</text><text x='68%' y='80%' class='textLanding' stroke='red' stroke-width='1px' fill='white'>Лендинг</text><text x='20%' y='17%' class='textPortfolio' stroke='red' stroke-width='1px' fill='white'>Портфолио</text><text x='5%' y='58%' class='textInternetShop' stroke='red' stroke-width='1px' fill='white'>Интернет магазин</text></svg>\",\"550\":\"<svg width='100%' height='100%' class='svgContainer'><text x='45%' y='66%' class='textSiteCompany' stroke='red' stroke-width='1px' fill='white'>Сайт компании</text> <text x='50%' y='35%' class='textSocialNetwork' stroke='red' stroke-width='1px' fill='white'>Социальные сети</text> <text x='11%' y='30%' class='textForum' stroke='red' stroke-width='1px' fill='white'>Форум</text> <text x='35%' y='21%' class='textGameSours' stroke='red' stroke-width='1px' fill='white'>Развлекательный ресурс</text> <text x='63%' y='78%' class='textBlog' stroke='red' stroke-width='1px' fill='white'>Блог</text> <text x='10%' y='10%' class='textLanding' stroke='red' stroke-width='1px' fill='white'>Лендинг</text> <text x='70%' y='55%' class='textPortfolio' stroke='red' stroke-width='1px' fill='white'>Портфолио</text> <text x='19%' y='45%' class='textInternetShop' stroke='red' stroke-width='1px' fill='white'>Интернет магазин</text></svg>\",\"600\":\"<svg width='100%' height='100%' class='svgContainer'><text x='10%' y='10%' class='textSiteCompany' stroke='red' stroke-width='1px' fill='white'>Сайт компании</text> <text x='50%' y='35%' class='textSocialNetwork' stroke='red' stroke-width='1px' fill='white'>Социальные сети</text> <text x='11%' y='30%' class='textForum' stroke='red' stroke-width='1px' fill='white'>Форум</text> <text x='35%' y='21%' class='textGameSours' stroke='red' stroke-width='1px' fill='white'>Развлекательный ресурс</text> <text x='63%' y='60%' class='textBlog' stroke='red' stroke-width='1px' fill='white'>Блог</text> <text x='40%' y='56%' class='textLanding' stroke='red' stroke-width='1px' fill='white'>Лендинг</text> <text x='70%' y='45%' class='textPortfolio' stroke='red' stroke-width='1px' fill='white'>Портфолио</text> <text x='19%' y='45%' class='textInternetShop' stroke='red' stroke-width='1px' fill='white'>Интернет магазин</text></svg>\",\"650\":\"<svg width='100%' height='100%' class='svgContainer'><text x='10%' y='10%' class='textSiteCompany' stroke='red' stroke-width='1px' fill='white'>Сайт компании</text> <text x='50%' y='35%' class='textSocialNetwork' stroke='red' stroke-width='1px' fill='white'>Социальные сети</text> <text x='11%' y='30%' class='textForum' stroke='red' stroke-width='1px' fill='white'>Форум</text> <text x='35%' y='21%' class='textGameSours' stroke='red' stroke-width='1px' fill='white'>Развлекательный ресурс</text> <text x='63%' y='60%' class='textBlog' stroke='red' stroke-width='1px' fill='white'>Блог</text> <text x='40%' y='56%' class='textLanding' stroke='red' stroke-width='1px' fill='white'>Лендинг</text> <text x='70%' y='45%' class='textPortfolio' stroke='red' stroke-width='1px' fill='white'>Портфолио</text> <text x='19%' y='45%' class='textInternetShop' stroke='red' stroke-width='1px' fill='white'>Интернет магазин</text></svg>\",\"700\":\"<svg width='100%' height='100%' class='svgContainer'><text x='10%' y='10%' class='textSiteCompany' stroke='red' stroke-width='1px' fill='white'>Сайт компании</text> <text x='50%' y='35%' class='textSocialNetwork' stroke='red' stroke-width='1px' fill='white'>Социальные сети</text> <text x='11%' y='30%' class='textForum' stroke='red' stroke-width='1px' fill='white'>Форум</text> <text x='35%' y='21%' class='textGameSours' stroke='red' stroke-width='1px' fill='white'>Развлекательный ресурс</text> <text x='63%' y='60%' class='textBlog' stroke='red' stroke-width='1px' fill='white'>Блог</text> <text x='40%' y='56%' class='textLanding' stroke='red' stroke-width='1px' fill='white'>Лендинг</text> <text x='70%' y='45%' class='textPortfolio' stroke='red' stroke-width='1px' fill='white'>Портфолио</text> <text x='19%' y='45%' class='textInternetShop' stroke='red' stroke-width='1px' fill='white'>Интернет магазин</text></svg>\",\"750\":\"<svg width='100%' height='100%' class='svgContainer'><text x='45%' y='66%' class='textSiteCompany' stroke='red' stroke-width='1px' fill='white'>Сайт компании</text> <text x='10%' y='10%' class='textSocialNetwork' stroke='red' stroke-width='1px' fill='white'>Социальные сети</text> <text x='11%' y='30%' class='textForum' stroke='red' stroke-width='1px' fill='white'>Форум</text> <text x='35%' y='25%' class='textGameSours' stroke='red' stroke-width='1px' fill='white'>Развлекательный ресурс</text> <text x='70%' y='38%' class='textBlog' stroke='red' stroke-width='1px' fill='white'>Блог</text> <text x='60%' y='12%' class='textLanding' stroke='red' stroke-width='1px' fill='white'>Лендинг</text> <text x='70%' y='55%' class='textPortfolio' stroke='red' stroke-width='1px' fill='white'>Портфолио</text> <text x='19%' y='45%' class='textInternetShop' stroke='red' stroke-width='1px' fill='white'>Интернет магазин</text></svg>\",\"800\":\"<svg width='100%' height='100%' class='svgContainer'><text x='45%' y='66%' class='textSiteCompany' stroke='red' stroke-width='1px' fill='white'>Сайт компании</text> <text x='10%' y='10%' class='textSocialNetwork' stroke='red' stroke-width='1px' fill='white'>Социальные сети</text> <text x='11%' y='30%' class='textForum' stroke='red' stroke-width='1px' fill='white'>Форум</text> <text x='35%' y='25%' class='textGameSours' stroke='red' stroke-width='1px' fill='white'>Развлекательный ресурс</text> <text x='70%' y='38%' class='textBlog' stroke='red' stroke-width='1px' fill='white'>Блог</text> <text x='60%' y='12%' class='textLanding' stroke='red' stroke-width='1px' fill='white'>Лендинг</text> <text x='70%' y='55%' class='textPortfolio' stroke='red' stroke-width='1px' fill='white'>Портфолио</text> <text x='19%' y='45%' class='textInternetShop' stroke='red' stroke-width='1px' fill='white'>Интернет магазин</text></svg>\",\"850\":\"<svg width='100%' height='100%' class='svgContainer'><text x='45%' y='66%' class='textSiteCompany' stroke='red' stroke-width='1px' fill='white'>Сайт компании</text> <text x='10%' y='10%' class='textSocialNetwork' stroke='red' stroke-width='1px' fill='white'>Социальные сети</text> <text x='11%' y='30%' class='textForum' stroke='red' stroke-width='1px' fill='white'>Форум</text> <text x='35%' y='25%' class='textGameSours' stroke='red' stroke-width='1px' fill='white'>Развлекательный ресурс</text> <text x='70%' y='38%' class='textBlog' stroke='red' stroke-width='1px' fill='white'>Блог</text> <text x='60%' y='12%' class='textLanding' stroke='red' stroke-width='1px' fill='white'>Лендинг</text> <text x='70%' y='55%' class='textPortfolio' stroke='red' stroke-width='1px' fill='white'>Портфолио</text> <text x='19%' y='45%' class='textInternetShop' stroke='red' stroke-width='1px' fill='white'>Интернет магазин</text></svg>\",\"900\":\"<svg width='100%' height='100%' class='svgContainer'><text x='45%' y='66%' class='textSiteCompany' stroke='red' stroke-width='1px' fill='white'>Сайт компании</text><text x='40%' y='10%' class='textSocialNetwork' stroke='red' stroke-width='1px' fill='white'>Социальные сети</text><text x='70%' y='38%' class='textForum' stroke='red' stroke-width='1px' fill='white'>Форум</text><text x='19%' y='48%' class='textGameSours' stroke='red' stroke-width='1px' fill='white'>Развлекательный ресурс</text><text x='60%' y='23%' class='textBlog' stroke='red' stroke-width='1px' fill='white'>Блог</text><text x='12%' y='15%' class='textLanding' stroke='red' stroke-width='1px' fill='white'>Лендинг</text><text x='75%' y='55%' class='textPortfolio' stroke='red' stroke-width='1px' fill='white'>Портфолио</text><text x='11%' y='30%' class='textInternetShop' stroke='red' stroke-width='1px' fill='white'>Интернет магазин</text></svg>\",\"950\":\"<svg width='100%' height='100%' class='svgContainer'><text x='45%' y='66%' class='textSiteCompany' stroke='red' stroke-width='1px' fill='white'>Сайт компании</text><text x='40%' y='10%' class='textSocialNetwork' stroke='red' stroke-width='1px' fill='white'>Социальные сети</text><text x='70%' y='38%' class='textForum' stroke='red' stroke-width='1px' fill='white'>Форум</text><text x='19%' y='48%' class='textGameSours' stroke='red' stroke-width='1px' fill='white'>Развлекательный ресурс</text><text x='60%' y='23%' class='textBlog' stroke='red' stroke-width='1px' fill='white'>Блог</text><text x='12%' y='15%' class='textLanding' stroke='red' stroke-width='1px' fill='white'>Лендинг</text><text x='75%' y='55%' class='textPortfolio' stroke='red' stroke-width='1px' fill='white'>Портфолио</text><text x='11%' y='30%' class='textInternetShop' stroke='red' stroke-width='1px' fill='white'>Интернет магазин</text></svg>\",\"1000\":\"<svg width='100%' height='100%' class='svgContainer'><text x='45%' y='66%' class='textSiteCompany' stroke='red' stroke-width='1px' fill='white'>Сайт компании</text><text x='40%' y='10%' class='textSocialNetwork' stroke='red' stroke-width='1px' fill='white'>Социальные сети</text><text x='70%' y='38%' class='textForum' stroke='red' stroke-width='1px' fill='white'>Форум</text><text x='19%' y='48%' class='textGameSours' stroke='red' stroke-width='1px' fill='white'>Развлекательный ресурс</text><text x='60%' y='23%' class='textBlog' stroke='red' stroke-width='1px' fill='white'>Блог</text><text x='12%' y='15%' class='textLanding' stroke='red' stroke-width='1px' fill='white'>Лендинг</text><text x='75%' y='55%' class='textPortfolio' stroke='red' stroke-width='1px' fill='white'>Портфолио</text><text x='11%' y='30%' class='textInternetShop' stroke='red' stroke-width='1px' fill='white'>Интернет магазин</text></svg>\",\"1150\":\"<svg width='100%' height='100%' class='svgContainer'><text x='45%' y='66%' class='textSiteCompany' stroke='red' stroke-width='1px' fill='white'>Сайт компании</text><text x='50%' y='12%' class='textSocialNetwork' stroke='red' stroke-width='1px' fill='white'>Социальные сети</text><text x='11%' y='30%' class='textForum' stroke='red' stroke-width='1px' fill='white'>Форум</text><text x='19%' y='45%' class='textGameSours' stroke='red' stroke-width='1px' fill='white'>Развлекательный ресурс</text><text x='70%' y='38%' class='textBlog' stroke='red' stroke-width='1px' fill='white'>Блог</text><text x='10%' y='10%' class='textLanding' stroke='red' stroke-width='1px' fill='white'>Лендинг</text><text x='75%' y='55%' class='textPortfolio' stroke='red' stroke-width='1px' fill='white'>Портфолио</text><text x='35%' y='27%' class='textInternetShop' stroke='red' stroke-width='1px' fill='white'>Интернет магазин</text></svg>\",\"1300\":\"<svg width='100%' height='100%' class='svgContainer'><text x='19%' y='46%' class='textSiteCompany' stroke='red' stroke-width='1px' fill='white'>Сайт компании</text> <text x='53%' y='43%' class='textSocialNetwork' stroke='red' stroke-width='1px' fill='white'>Социальные сети</text> <text x='11%' y='30%' class='textForum' stroke='red' stroke-width='1px' fill='white'>Форум</text> <text x='50%' y='12%' class='textGameSours' stroke='red' stroke-width='1px' fill='white'>Развлекательный ресурс</text> <text x='75%' y='60%' class='textBlog' stroke='red' stroke-width='1px' fill='white'>Блог</text> <text x='15%' y='11%' class='textLanding' stroke='red' stroke-width='1px' fill='white'>Лендинг</text> <text x='45%' y='66%' class='textPortfolio' stroke='red' stroke-width='1px' fill='white'>Портфолио</text> <text x='35%' y='27%' class='textInternetShop' stroke='red' stroke-width='1px' fill='white'>Интернет магазин</text></svg>\",\"1450\":\"<svg width='100%' height='100%' class='svgContainer'><text x='19%' y='45%' class='textSiteCompany' stroke='red' stroke-width='1px' fill='white'>Сайт компании</text> <text x='53%' y='42%' class='textSocialNetwork' stroke='red' stroke-width='1px' fill='white'>Социальные сети</text> <text x='11%' y='30%' class='textForum' stroke='red' stroke-width='1px' fill='white'>Форум</text> <text x='10%' y='10%' class='textGameSours' stroke='red' stroke-width='1px' fill='white'>Развлекательный ресурс</text> <text x='45%' y='66%' class='textBlog' stroke='red' stroke-width='1px' fill='white'>Блог</text> <text x='60%' y='82%' class='textLanding' stroke='red' stroke-width='1px' fill='white'>Лендинг</text> <text x='75%' y='60%' class='textPortfolio' stroke='red' stroke-width='1px' fill='white'>Портфолио</text> <text x='35%' y='24%' class='textInternetShop' stroke='red' stroke-width='1px' fill='white'>Интернет магазин</text></svg>\",\"1600\":\"<svg width='100%' height='100%' class='svgContainer'><path d='M450 215 C 800 215, 800 378, 480 380' stroke='white'/> <path d='M480 380 C 470 380, 400 380, 220 380' stroke='white'/> <path d='M220 380 C 0 380, 0 535, 255 535' stroke='white'/> <path d='M255 535 C 300 535, 370 535, 400 535' stroke='white'/> <path d='M400 535 C 450 535, 500 535, 520 570' stroke='white'/> <path d='M520 570 C 550 620, 650 620, 780 620' stroke='white'/> <path d='M780 620 C 910 620, 945 600, 970 560' stroke='white'/> <path d='M970 560 C 980 550, 990 500, 1075 500' stroke='white'/>  <path d='M1075 500 C 1100 500, 1150 500, 1280 500' stroke='white'/> <path d='M1280 500 C 1490 500, 1550 360, 1200 380 S 650 250, 955 250' stroke='white'/> <path d='M955 250 C 1000 250, 1150 250, 1250 250' stroke='white'/> <path d='M1250 250 C 1450 250, 1450 130, 960 130' stroke='white'/> <path d='M960 130 C 900 130, 850 130, 550 130' stroke='white'/> <path d='M550 130 C 200 120, -50 205, 150 215' stroke='white'/> <path d='M150 215 C 200 215, 220 215, 450 215' stroke='white'/> <image xlink:href='img/circle.png' id='circle' x='515' y='95' height='70' width='70'/> <animateMotion xlink:href='#circle' dur='50s' begin='0s' repeatCount='indefinite' fill='freeze' path='M0 0  c -350 -10, -600 75, -400 85 c 50 0, 70 0, 300 0 c 350 0, 350 163, 30 165 c -10 0, -80 0, -260 0 c -220 0, -220 155, 35 155 c 45 0, 115 0, 145 0 c 50 0, 100 0, 120 35 c 30 50, 130 50, 260 50 c 130 0, 165 -20, 190 -60 c 10 -10, 20 -60, 105 -60 c 25 0, 75 0, 205 0 c 210 0, 270 -140, -80 -120 s -550 -130, -245 -130 c 45 0, 195 0, 295 0 c 200 0, 200 -120, -290 -120 c -60 0, -110 0, -410 0' /> <text x='225' y='375' font-size='30px' stroke='red' stroke-width='1px' fill='white' class='textSiteCompany'> <animate attributeName='font-size' dur='50s' values='30px; 30px; 42px; 42px; 42px; 42px; 30px; 30px' keyTimes='0; 0.23; 0.24; 0.24; 0.26; 0.3; 0.31; 1' begin='0s' repeatCount='indefinite' fill='freeze'/> Сайт компании</text> <text x='966' y='245' font-size='30px' stroke='red' stroke-width='1px' fill='white' class='textSocialNetwork'> <animate attributeName='font-size' dur='50s' values='30px; 30px; 42px; 42px; 42px; 42px; 30px; 30px' keyTimes='0; 0.76; 0.77; 0.78; 0.79; 0.83; 0.84; 1' begin='0s' repeatCount='indefinite' fill='freeze'/> Социальные сети</text> <text x='259' y='529' font-size='30px' stroke='red' stroke-width='1px' fill='white' class='textForum'> <animate attributeName='font-size' dur='50s' values='30px; 30px; 42px; 42px; 42px; 42px; 30px; 30px' keyTimes='0; 0.37; 0.38; 0.39; 0.4; 0.405; 0.415; 1' begin='0s' repeatCount='indefinite' fill='freeze'/> Форум</text> <text x='566' y='125' font-size='30px' stroke='red' stroke-width='1px' fill='white' class='textGameSours'> <animate attributeName='font-size' dur='50s' values='30px; 30px; 42px; 42px; 42px; 42px; 30px; 30px' keyTimes='0; 0.88; 0.89; 0.96; 0.965; 0.99; 1; 1' begin='0s' repeatCount='indefinite' fill='freeze'/> Развлекательный ресурс</text> <text x='1093' y='377' font-size='30px' stroke='red' stroke-width='1px' fill='white' class='textBlog'> <animate attributeName='font-size' dur='50s' values='30px; 30px; 42px; 42px; 42px; 42px; 30px; 30px' keyTimes='0; 0.65; 0.66; 0.665; 0.67; 0.68; 0.69; 1' begin='0s' repeatCount='indefinite' fill='freeze'/> Блог</text> <text x='703' y='615' font-size='30px' stroke='red' stroke-width='1px' fill='white' class='textLanding'> <animate attributeName='font-size' dur='50s' values='30px; 30px; 42px; 42px; 42px; 42px; 30px; 30px' keyTimes='0; 0.455; 0.465; 0.475; 0.49; 0.50; 0.51; 1' begin='0s' repeatCount='indefinite' fill='freeze'/> Лендинг</text> <text x='1085' y='495' font-size='30px' stroke='red' stroke-width='1px' fill='white' class='textPortfolio'> <animate attributeName='font-size' dur='50s' values='30px; 30px; 42px; 42px; 42px; 42px; 30px; 30px' keyTimes='0; 0.53; 0.54; 0.57; 0.58; 0.59; 0.6; 1' begin='0s' repeatCount='indefinite' fill='freeze'/> Портфолио</text> <text x='130' y='210' font-size='30px' stroke='red' stroke-width='1px' fill='white' class='textInternetShop'> <animate attributeName='font-size' dur='50s' values='30px; 30px; 42px; 42px; 42px; 42px; 30px; 30px' keyTimes='0; 0.09; 0.1; 0.105; 0.11; 0.17; 0.18; 1' begin='0s' repeatCount='indefinite' fill='freeze'/> Интернет магазин</text></svg>\",\"1950\":\"<svg width='100%' height='100%' class='svgContainer'><path d='M90 170 C 100 170, 200 170, 310 170' stroke='white'/> <path d='M310 170 C 550 170, 600 260, 300 270 S 200 386, 450 386' stroke='white'/> <path d='M450 386 C 480 386, 500 386, 820 386' stroke='white'/> <path d='M820 386 C 1100 386, 1300 500, 980 510'stroke='white'/> <path d='M980 510 C 900 510, 800 510, 750 510' stroke='white'/> <path d='M750 510 C 490 510, 490 630, 1000 630' stroke='white'/> <path d='M1000 630 C 1010 630, 1050 630, 1100 630'stroke='white' /> <path d='M1100 630 C 1150 630, 1230 620, 1250 585'stroke='white' /> <path d='M1250 585 C 1270 560, 1320 550, 1385 550'stroke='white' /> <path d='M1385 550 C 1720 550, 1720 450, 1450 450' stroke='white'/> <path d='M1450 450 C 1200 450, 1200 350, 1500 350 S 1700 250, 1530 250' stroke='white'/> <path d='M1530 250 C 1400 250, 1400 250, 1350 250' stroke='white'/> <path d='M1350 250 C 1220 250, 1205 230, 1185 210' stroke='white'/> <path d='M1185 210 C 1170 195, 1150 186, 950 186'stroke='white' /> <path d='M950 186 C 840 190, 820 165, 820 150' stroke='white'/> <path d='M820 150 C 820 145, 830 90, 600 90' stroke='white'/> <path d='M600 90 C 450 90, 400 90, 380 90' stroke='white'/> <path d='M380 90 C 100 80, -100 170, 90 170' stroke='white'/> <image xlink:href='img/circle.png' id='circle' x='345' y='55' height='70' width='70' /> <animateMotion xlink:href='#circle' dur='60s' begin='0s' repeatCount='indefinite' fill='freeze' path='M0 0 c -280 -10, -480 80, -290 80 c 10 0, 110 0, 220 0 c 240 0, 290 90, -10 100 s -100 116, 150 116 c 30 0, 50 0, 370 0 c 280 0, 480 114, 160 124 c -80 0, -180 0, -230 0 c -260 0, -260 120, 250 120 c 10 0, 50 0, 100 0 c 50 0, 130 -10, 150 -45 c 20 -25, 70 -35, 135 -35 c 335 0, 335 -100, 65 -100 c -250 0, -250 -100, 50 -100 s 200 -100, 30 -100 c -130 0, -130 0, -180 0 c -130 0, -145 -20, -165 -40 c -15 -15, -35 -24, -235 -24 c -110 4, -130 -21, -130 -36 c 0 -5, 10 -60, -220 -60 c -150 0, -200 0, -220 0' /> <text x='100' y='167' font-size='30px' stroke='red' stroke-width='1px' fill='white' class='textSiteCompany'> <animate attributeName='font-size' dur='60s' values='30px; 30px; 42px; 42px; 42px; 42px; 30px; 30px' keyTimes='0; 0.06; 0.07; 0.08; 0.09; 0.125; 0.135; 1' begin='0s' repeatCount='indefinite' fill='freeze'/> Сайт компании</text> <text x='700' y='505' font-size='30px' stroke='red' stroke-width='1px' fill='white' class='textSocialNetwork'> <animate attributeName='font-size' dur='60s' values='30px; 30px; 42px; 42px; 42px; 42px; 30px; 30px' keyTimes='0; 0.37; 0.38; 0.42; 0.43; 0.44; 0.45; 1' begin='0s' repeatCount='indefinite' fill='freeze'/> Социальные сети</text> <text x='950' y='183' font-size='30px' stroke='red' stroke-width='1px' fill='white' class='textForum'> <animate attributeName='font-size' dur='60s' values='30px; 30px; 42px; 42px; 42px; 42px; 30px; 30px' keyTimes='0; 0.87; 0.88; 0.885; 0.89; 0.9; 0.91; 1' begin='0s' repeatCount='indefinite' fill='freeze'/> Форум</text> <text x='420' y='383' font-size='30px' stroke='red' stroke-width='1px' fill='white' class='textGameSours'> <animate attributeName='font-size' dur='60s' values='30px; 30px; 42px; 42px; 42px; 42px; 30px; 30px' keyTimes='0; 0.24; 0.25; 0.3; 0.31; 0.33; 0.34; 1' begin='0s' repeatCount='indefinite' fill='freeze'/> Развлекательный ресурс</text> <text x='1440' y='445' font-size='30px' stroke='red' stroke-width='1px' fill='white' class='textBlog'> <animate attributeName='font-size' dur='60s' values='30px; 30px; 42px; 42px; 42px; 42px; 30px; 30px' keyTimes='0; 0.65; 0.66; 0.665; 0.67; 0.675; 0.685; 1' begin='0s' repeatCount='indefinite' fill='freeze'/> Блог</text> <text x='960' y='625' font-size='30px' stroke='red' stroke-width='1px' fill='white' class='textLanding'> <animate attributeName='font-size' dur='60s' values='30px; 30px; 42px; 42px; 42px; 42px; 30px; 30px' keyTimes='0; 0.515; 0.525; 0.54; 0.545; 0.555; 0.565; 1' begin='0s' repeatCount='indefinite' fill='freeze'/> Лендинг</text> <text x='1350' y='247' font-size='30px' stroke='red' stroke-width='1px' fill='white' class='textPortfolio'> <animate attributeName='font-size' dur='60s' values='30px; 30px; 42px; 42px; 42px; 42px; 30px; 30px' keyTimes='0; 0.78; 0.79; 0.815; 0.82; 0.835; 0.845; 1' begin='0s' repeatCount='indefinite' fill='freeze'/> Портфолио</text> <text x='350' y='87' font-size='30px' stroke='red' stroke-width='1px' fill='white' class='textInternetShop'> <animate attributeName='font-size' dur='60s' values='30px; 30px; 42px; 42px; 42px; 42px; 30px; 30px' keyTimes='0; 0.925; 0.935; 0.95; 0.955; 0.99; 1; 1' begin='0s' repeatCount='indefinite' fill='freeze'/> Интернет магазин</text></svg>\",\"2600\":\"<svg width='100%' height='100%' class='svgContainer'><path d='M520 205 C 850 205, 800 320, 350 320 S 100 480, 380 480' stroke='white'/><path d='M380 480 C 500 480, 600 480, 790 480' stroke='white'/><path d='M790 480 C 1400 480, 1400 601, 1120 601' stroke='white'/><path d='M1120 601 C 1100 601, 1100 601, 800 601' stroke='white'/><path d='M800 601 C 550 601, 550 750, 1400 750' stroke='white'/><path d='M1400 750 C 2135 750, 2450 550, 2130 540' stroke='white'/><path d='M2130 540 C 2000 540, 1950 540, 1780 540' stroke='white'/><path d='M1780 540 C 1400 540, 1400 400, 1850 410 S 2200 300, 1860 302' stroke='white'/><path d='M1860 302 C 1800 302, 1800 302, 1650 302' stroke='white'/><path d='M1650 302 C 700 320, 900 210, 1140 220' stroke='white'/><path d='M1140 220 C 1200 220, 1200 220, 1280 220' stroke='white'/><path d='M1280 220 C 1600 220, 1550 100, 800 100' stroke='white'/><path d='M800 100 C 0 100, 50 200, 250 205' stroke='white'/><path d='M250 205 C 400 205, 500 205, 520 205' stroke='white'/><image xlink:href='img/circle.png' id='circle' x='485' y='170' height='70' width='70'/>  <animateMotion  xlink:href='#circle' dur='90s' begin='0s' repeatCount='indefinite' fill='freeze' path='M0 0 c 330 0, 280 115, -170 115 s -250 160, 30 160 c 120 0, 220 0, 410 0 c 610 0, 610 121, 330 121 c -20 0, -20 0, -320 0 c -250 0, -250 149, 600 149 c 735 0, 1050 -200, 730 -210 c -130 0, -180 0, -350 0 c -380 0, -380 -140, 70 -130 s 350 -110, 10 -108 c -60 0, -60 0, -210 0 c -950 18, -750 -92, -510 -82 c 60 0, 60 0, 140 0 c 320 0, 270 -120, -480 -120 c -800 0, -750 100, -550 105 c 150 0, 250 0, 270 0'/><text x='250' y='200' font-size='30px' stroke='red' stroke-width='1px' fill='white' class='textSiteCompany'> <animate attributeName='font-size' dur='90s' values='30px; 30px; 42px; 42px; 42px; 42px; 30px; 30px' keyTimes='0; 0.96; 0.965; 0.98; 0.99; 0.995; 1; 1' begin='0s' repeatCount='indefinite' fill='freeze'/> Сайт компании</text><text x='800' y='595' font-size='30px' stroke='red' stroke-width='1px' fill='white' class='textSocialNetwork'> <animate attributeName='font-size' dur='90s' values='30px; 30px; 42px; 42px; 42px; 42px; 30px; 30px' keyTimes='0; 0.235; 0.24; 0.25; 0.26; 0.28; 0.285; 1' begin='0s' repeatCount='indefinite' fill='freeze'/> Социальные сети</text><text x='1145' y='210' font-size='30px' stroke='red' stroke-width='1px' fill='white' class='textForum'> <animate attributeName='font-size' dur='90s' values='30px; 30px; 42px; 42px; 42px; 42px; 30px; 30px' keyTimes='0; 0.77; 0.775; 0.785; 0.79; 0.795; 0.8; 1' begin='0s' repeatCount='indefinite' fill='freeze'/> Форум</text><text x='385' y='475' font-size='30px' stroke='red' stroke-width='1px' fill='white' class='textGameSours'> <animate attributeName='font-size' dur='90s' values='30px; 30px; 42px; 42px; 42px; 42px; 30px; 30px' keyTimes='0; 0.125; 0.13; 0.14; 0.15; 0.18; 0.185; 1' begin='0s' repeatCount='indefinite' fill='freeze'/> Развлекательный ресурс</text><text x='765' y='93' font-size='30px' stroke='red' stroke-width='1px' fill='white' class='textBlog'> <animate attributeName='font-size' dur='90s' values='30px; 30px; 42px; 42px; 42px; 42px; 30px; 30px' keyTimes='0; 0.875; 0.88; 0.88; 0.885; 0.89; 0.895; 1' begin='0s' repeatCount='indefinite' fill='freeze'/> Блог</text><text x='1330' y='743' font-size='30px' stroke='red' stroke-width='1px' fill='white' class='textLanding'> <animate attributeName='font-size' dur='90s' values='30px; 30px; 42px; 42px; 42px; 42px; 30px; 30px' keyTimes='0; 0.365; 0.37; 0.38; 0.385; 0.39; 0.395; 1' begin='0s' repeatCount='indefinite' fill='freeze'/> Лендинг</text><text x='1665' y='295' font-size='30px' stroke='red' stroke-width='1px' fill='white' class='textPortfolio'> <animate attributeName='font-size' dur='90s' values='30px; 30px; 42px; 42px; 42px; 42px; 30px; 30px' keyTimes='0; 0.65; 0.655; 0.66; 0.67; 0.68; 0.685; 1' begin='0s' repeatCount='indefinite' fill='freeze'/> Портфолио</text><text x='1790' y='535' font-size='30px' stroke='red' stroke-width='1px' fill='white' class='textInternetShop'> <animate attributeName='font-size' dur='90s' values='30px; 30px; 42px; 42px; 42px; 42px; 30px; 30px' keyTimes='0; 0.475; 0.48; 0.5; 0.51; 0.52; 0.525; 1' begin='0s' repeatCount='indefinite' fill='freeze'/> Интернет магазин</text></svg>\",\"h450\":\"<svg width='100%' height='100%' class='svgContainer'> <text x='10%' y='10%' class='textSiteCompany' stroke='red' stroke-width='1px' fill='white'>Сайт компании</text> <text x='55%' y='32%' class='textSocialNetwork' stroke='red' stroke-width='1px' fill='white'>Социальные сети</text> <text x='23%' y='51%' class='textForum' stroke='red' stroke-width='1px' fill='white'>Форум</text> <text x='45%' y='18%' class='textGameSours' stroke='red' stroke-width='1px' fill='white'>Развлекательный ресурс</text> <text x='65%' y='47%' class='textBlog' stroke='red' stroke-width='1px' fill='white'>Блог</text> <text x='43%' y='50%' class='textLanding' stroke='red' stroke-width='1px' fill='white'>Лендинг</text> <text x='25%' y='38%' class='textPortfolio' stroke='red' stroke-width='1px' fill='white'>Портфолио</text> <text x='5%' y='25%' class='textInternetShop' stroke='red' stroke-width='1px' fill='white'>Интернет магазин</text> </svg>\"}");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9tb2RhbC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zbGlkZVdlT2ZmZXIvc3R5bGUxMTAwLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3NsaWRlV2VPZmZlci9zdHlsZTE0MDAuY3NzIiwid2VicGFjazovLy8uL3NyYy9jc3Mvc2xpZGVXZU9mZmVyL3N0eWxlMTYwMC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zbGlkZVdlT2ZmZXIvc3R5bGUxOTIwLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3NsaWRlV2VPZmZlci9zdHlsZTI1NjAuY3NzIiwid2VicGFjazovLy8uL3NyYy9jc3Mvc2xpZGVXZU9mZmVyL3N0eWxlMzIwLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3NsaWRlV2VPZmZlci9zdHlsZTQwMC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zbGlkZVdlT2ZmZXIvc3R5bGU0NTAuY3NzIiwid2VicGFjazovLy8uL3NyYy9jc3Mvc2xpZGVXZU9mZmVyL3N0eWxlNjAwLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3NsaWRlV2VPZmZlci9zdHlsZTgwMC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zbGlkZVdlT2ZmZXIvc3R5bGVXZU9mZmVyLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3NsaWRlV2VPZmZlci9zdHlsZV9oNDUwLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3NsaWRlXzEuY3NzIiwid2VicGFjazovLy8uL3NyYy9jc3Mvc2xpZGVfMi5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zbGlkZV8zLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3NsaWRlXzQuY3NzIiwid2VicGFjazovLy8uL3NyYy9jc3Mvc2xpZGVyLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9udHMvZm9udC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NsaWRlcy9zbGlkZTEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zbGlkZXMvc2xpZGUyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2xpZGVzL3NsaWRlMy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NsaWRlcy9zbGlkZTQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zbGlkZXMvc2xpZGU1LmpzIiwid2VicGFjazovLy8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnRzL0hhbmdpbmcgTGV0dGVycy50dGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnRzL1NlZ29lIFByaW50IEJvbGQudHRmIiwid2VicGFjazovLy8uL3NyYy9pbWcvTW9vbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9hbWFpb3N3aW0uanBnIiwid2VicGFjazovLy8uL3NyYy9pbWcvYW55VzRZdG1wbC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9iYWNrR3JvdW5kLW1pbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9ibHVlX3NreS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9jYXQucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvY2F0V2VPZmZmZXIucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvY2lyY2xlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2Nsb3VkXzEucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvY2xvdWRfMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9jbG91ZF8zLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2NvbW1lbnRUZXh0LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2Nvc20uanBnIiwid2VicGFjazovLy8uL3NyYy9pbWcvZGVzdGlueS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9kb3duQXJyb3cucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvZ3Jhc3MucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvZ3Jhc3NTbmFpbC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9tZW51X3doaXRlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL21vb25XZU9mZmVyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL3Byb3VkYW5kcHVuY2guanBnIiwid2VicGFjazovLy8uL3NyYy9pbWcvcmFpbmZvcmVzdGZvb2RzLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL3N0YXIucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvc3VuLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL3RlbXBsYXRlXzEucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvdGVtcGxhdGVfMi5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy90ZW1wbGF0ZV8zLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL3RlbXBsYXRlXzQucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvdGVtcGxhdGVfNS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy90ZW1wbGF0ZV82LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL3RlbXBsYXRlXzcucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvdXBBcnJvdy5wbmciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJC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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixTQUFTO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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QTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHNCQUFzQixvQ0FBb0M7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLDJDQUFPOzs7QUFHWiw0REFBNEQsTUFBTSwyQ0FBTyxHQUFHOztBQUU1RTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7QUFJQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDOztBQUVEOzs7QUFHZSxvRUFBSyxFOzs7Ozs7Ozs7Ozs7QUNyWXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVCO0FBQ3VCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7QUFDQztBQUNMO0FBQ0c7QUFDTTtBQUNDOztBQUVuRDtBQUNBO0FBQ0E7QUFDQSxjQUFjLDJEQUFNLEVBQUUsMkRBQU0sRUFBRSwyREFBTSxFQUFFLDJEQUFNLEVBQUUsMkRBQU0sRUFBRSwyREFBTSxFQUFFLDJEQUFNLEVBQUUsMERBQU0sRUFBRSwyREFBTSxFQUFFLHNEQUFPO0FBQzdGLGNBQWMseURBQU8sRUFBRSwrREFBTyxFQUFFLGlFQUFPO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxJQUFJO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7O0FBR2Usd0VBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDdE16QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1QjtBQUN1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM5Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyREFBTTtBQUMzQjtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLDJEQUFNO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsMkRBQU07QUFDM0I7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQiwyREFBTTtBQUMzQjtBQUNBOztBQUVBO0FB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O0FDQTdEO0FBQWUsb0ZBQXVCLHVCQUF1QixFOzs7Ozs7Ozs7Ozs7QUNBN0Q7QUFBZSxvRkFBdUIsdUJBQXVCLEU7Ozs7Ozs7Ozs7OztBQ0E3RDtBQUFlLG9GQUF1QixvQkFBb0IsRSIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiaW5kZXhcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9hcHAvaW5kZXguanNcIixcInZlbmRvcnN+aW5kZXhcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiKntcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHJcXG59XFxyXFxuI21vZGFsIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgUHJpbnQgQm9sZCc7XFxyXFxuICAgIHRvcDogLTEyMCU7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgei1pbmRleDogOTk5OTtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjcpO1xcclxcbn1cXHJcXG4ubW9kYWxBY3RpdmV7XFxyXFxuICAgIHRvcDogMCAhaW1wb3J0YW50O1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgbGluZWFyO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWxGb3Jte1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICB3aWR0aDogMzVlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBmb250LXNpemU6IDEuM2VtO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDNweCA3cHggcmdiYSgwLDAsMCwuMjUpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5tb2RhbEZvcm0gbWFpbntcXHJcXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XFxyXFxufVxcclxcbi5tb2RhbEZvcm0gbWFpbiBwe1xcclxcbiAgICBtYXJnaW46IDIwcHggYXV0bztcXHJcXG59XFxyXFxuLm1vZGFsRm9ybSBoZWFkZXIsIC5tb2RhbEZvcm0gZm9vdGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2M1YzVjNTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5MzkzOTM7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xcclxcbn1cXHJcXG4ubW9kYWxGb3JtIGZvb3RlciB7XFxyXFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjOTM5MzkzO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcXHJcXG4gICAgLyotbW96LWJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4OyovXFxyXFxuICAgIC8qLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDsqL1xcclxcbn1cXHJcXG4ubW9kYWxGb3JtIGRpdiwgLm1vZGFsRm9ybSBoZWFkZXIsIC5tb2RhbEZvcm0gZm9vdGVyIHtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgei1pbmRleDogMjAwO1xcclxcbn1cXHJcXG4ubW9kYWxGb3JtIGgyIHtcXHJcXG4gICAgZm9udC1zaXplOiAyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcbi5tb2RhbEZvcm0gLmJ0biB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgY29sb3I6ICMwMDAwNjg7XFxyXFxufVxcclxcbi5jb250YWN0c3tcXHJcXG5jdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcclxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXHJcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxyXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcclxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxyXFxuYiwgdSwgaSwgY2VudGVyLFxcclxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxyXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxyXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXFxyXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcclxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcclxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxyXFxubWFyZ2luOiAwO1xcclxcbnBhZGRpbmc6IDA7XFxyXFxuYm9yZGVyOiAwO1xcclxcbmZvbnQtc2l6ZTogMTAwJTtcXHJcXG5mb250OiBpbmhlcml0O1xcclxcbnZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuKntcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcXHJcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcclxcbmRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG5saW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxub2wsIHVsIHtcXHJcXG5saXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlLCBxIHtcXHJcXG5xdW90ZXM6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcclxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXHJcXG5jb250ZW50OiAnJztcXHJcXG5jb250ZW50OiBub25lO1xcclxcbn1cXHJcXG50YWJsZSB7XFxyXFxuYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG5ib3JkZXItc3BhY2luZzogMDtcXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpe1xcclxcblxcclxcbiAgICBpbWcuY2F0V2VPZmZmZXIge1xcclxcbiAgICAgICAgd2lkdGggOiAyNSU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgaW1nLm1vb25XZU9mZmZlcixcXHJcXG4gICAgaW1nLnN1bldlT2ZmZmVyIHtcXHJcXG4gICAgICAgIHdpZHRoIDogMTglO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIGltZy5zdW5XZU9mZmZlcldlT2ZmZmVyIHtcXHJcXG4gICAgICAgIHJpZ2h0OiAxMDAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIHRleHQge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIC5zdGFyV2VPZmZmZXIsXFxyXFxuICAgIC5zdGFyWWVsbG93LFxcclxcbiAgICAuc3RhckJsdWUsXFxyXFxuICAgIC5zdGFyUmVkIHtcXHJcXG4gICAgICAgIHdpZHRoIDogM3B4O1xcclxcbiAgICAgICAgaGVpZ2h0IDogM3B4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIFxcclxcbiAgICAvKiA9PT09PT09PT09PT09PT09PT09PT09IG1vZGFsIHdpbmRvd3MgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuICAgIFxcclxcbiAgICBcXHJcXG4gICAgLm1vZGFsV2VPZmZmZXIge1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50IDogZmxleC1lbmQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgLm1vZGFsV2VPZmZmZXIgcCB7XFxyXFxuICAgICAgICB3aWR0aCA6IDYwJTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZSA6IDI4cHg7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduIDogbGVmdDtcXHJcXG4gICAgICAgIHBhZGRpbmcgOiAwcHggNzBweCAwcHggNDBweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0IDogMS4zO1xcclxcbiAgICB9ICAgIFxcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MDBweCl7fVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSB7XFxyXFxuXFxyXFxuICAgIGltYWdlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybS1ib3ggOiBmaWxsLWJveDtcXHJcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW4gOiBjZW50ZXI7XFxyXFxuICAgICAgICBhbmltYXRpb24gOiByb3RhdGVDaXJjbGUgMnMgbGluZWFyIGluZmluaXRlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIEBrZXlmcmFtZXMgcm90YXRlQ2lyY2xlIHtcXHJcXG4gICAgICAgIDAlIHtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm0gOiByb3RhdGUoMGRlZyk7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAxMDAlIHtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm0gOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICAgIFxcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDIwMDBweCl7XFxyXFxuXFxyXFxuICAgIGltYWdlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybS1ib3ggOiBmaWxsLWJveDtcXHJcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW4gOiBjZW50ZXI7XFxyXFxuICAgICAgICBhbmltYXRpb24gOiByb3RhdGVDaXJjbGUgMnMgbGluZWFyIGluZmluaXRlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIEBrZXlmcmFtZXMgcm90YXRlQ2lyY2xlIHtcXHJcXG4gICAgICAgIDAlIHtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm0gOiByb3RhdGUoMGRlZyk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBcXHJcXG4gICAgICAgIDEwMCUge1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybSA6IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgICAgIFxcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI2MDBweCl7XFxyXFxuXFxyXFxuICAgIGltYWdlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybS1ib3ggOiBmaWxsLWJveDtcXHJcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW4gOiBjZW50ZXI7XFxyXFxuICAgICAgICBhbmltYXRpb24gOiByb3RhdGVDaXJjbGUgMnMgbGluZWFyIGluZmluaXRlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIEBrZXlmcmFtZXMgcm90YXRlQ2lyY2xlIHtcXHJcXG4gICAgICAgIDAlIHtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm0gOiByb3RhdGUoMGRlZyk7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAxMDAlIHtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm0gOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICAgICAgXFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcXHJcXG4gICAgXFxyXFxuICAgIGltZy5jYXRXZU9mZmZlciB7XFxyXFxuICAgICAgICBib3R0b20gOiAwcHg7XFxyXFxuICAgICAgICBsZWZ0IDogNCU7XFxyXFxuICAgICAgICB3aWR0aCA6IDQ1JTtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICBpbWcubW9vbldlT2ZmZmVyLFxcclxcbiAgICBpbWcuc3VuV2VPZmZmZXIge1xcclxcbiAgICAgICAgd2lkdGggOiAyNiU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgaW1nLnN1bldlT2ZmZmVyIHtcXHJcXG4gICAgICAgIHJpZ2h0IDogMTAwJTtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG5cXHJcXG4gICAgdGV4dCB7XFxyXFxuICAgICAgICBmb250LXNpemUgOiAxOHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zdGFyV2VPZmZmZXIsXFxyXFxuICAgIC5zdGFyWWVsbG93LFxcclxcbiAgICAuc3RhckJsdWUsXFxyXFxuICAgIC5zdGFyUmVkIHtcXHJcXG4gICAgICAgIHotaW5kZXggOiAtMTAwMDtcXHJcXG4gICAgICAgIHdpZHRoIDogMS41cHg7XFxyXFxuICAgICAgICBoZWlnaHQgOiAxLjVweDtcXHJcXG4gICAgICAgIHBvc2l0aW9uIDogYWJzb2x1dGU7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzIDogNTAlO1xcclxcbiAgICAgICAgb3BhY2l0eSA6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgXFxyXFxuICAgIC8qID09PT09PT09PT09PT09PT09PT09PT0gbW9kYWwgd2luZG93cyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG4gICAgXFxyXFxuICAgIFxcclxcbiAgICAubW9kYWxXZU9mZmZlciB7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQgOiBmbGV4LXN0YXJ0O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXMgOiBmbGV4LXN0YXJ0O1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcblxcclxcbiAgICAubW9kYWxXZU9mZmZlcj4uY29udGFpbmVyV2VPZmZmZXIge1xcclxcbiAgICAgICAgd2lkdGggOiA3MCU7XFxyXFxuICAgICAgICBmbGV4LXdyYXAgOiB3cmFwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGJ1dHRvbiB7XFxyXFxuICAgICAgICB3aWR0aCA6IDM1cHg7XFxyXFxuICAgICAgICBoZWlnaHQgOiAzNXB4O1xcclxcbiAgICAgICAgZm9udC1zaXplIDogMjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubW9kYWxXZU9mZmZlciBwIHtcXHJcXG4gICAgICAgIHdpZHRoIDogMTAwJTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZSA6IDE4cHg7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduIDogbGVmdDtcXHJcXG4gICAgICAgIHBhZGRpbmcgOiAxMHB4IDEwcHggMHB4IDEwcHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodCA6IDEuMTU7XFxyXFxuICAgIH0gICAgXFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpe1xcclxcblxcclxcbiAgICBpbWcuY2F0V2VPZmZmZXIge1xcclxcbiAgICAgICAgYm90dG9tIDogMHB4O1xcclxcbiAgICAgICAgbGVmdCA6IDQlO1xcclxcbiAgICAgICAgd2lkdGggOiA0NSU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgaW1nLm1vb25XZU9mZmZlcixcXHJcXG4gICAgaW1nLnN1bldlT2ZmZmVyIHtcXHJcXG4gICAgICAgIHdpZHRoIDogMzAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIGltZy5zdW5XZU9mZmZlciB7XFxyXFxuICAgICAgICByaWdodCA6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuXFxyXFxuICAgIHRleHQge1xcclxcbiAgICAgICAgZm9udC1zaXplIDogMjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICAuc3RhcldlT2ZmZmVyLFxcclxcbiAgICAuc3RhclllbGxvdyxcXHJcXG4gICAgLnN0YXJCbHVlLFxcclxcbiAgICAuc3RhclJlZCB7XFxyXFxuICAgICAgICB3aWR0aCA6IDJweDtcXHJcXG4gICAgICAgIGhlaWdodCA6IDJweDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgXFxyXFxuICAgIC8qID09PT09PT09PT09PT09PT09PT09PT0gbW9kYWwgd2luZG93cyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG4gICAgXFxyXFxuICAgIFxcclxcbiAgICAubW9kYWxXZU9mZmZlciB7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQgOiBmbGV4LXN0YXJ0O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXMgOiBmbGV4LXN0YXJ0O1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcblxcclxcbiAgICAubW9kYWxXZU9mZmZlcj4uY29udGFpbmVyV2VPZmZmZXIge1xcclxcbiAgICAgICAgd2lkdGggOiA3MCU7XFxyXFxuICAgICAgICBmbGV4LXdyYXAgOiB3cmFwO1xcclxcbiAgICAgICAgLyogZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlOyAqL1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIFxcclxcbiAgICBidXR0b24ge1xcclxcbiAgICAgICAgbWFyZ2luOiA1cHggMCAwIDEwcHg7XFxyXFxuICAgICAgICB3aWR0aCA6IDQwcHg7XFxyXFxuICAgICAgICBoZWlnaHQgOiA0MHB4O1xcclxcbiAgICAgICAgZm9udC1zaXplIDogMjVweDtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICAubW9kYWxXZU9mZmZlciBwIHtcXHJcXG4gICAgICAgIHdpZHRoIDogMTAwJTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZSA6IDIwcHg7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduIDogbGVmdDtcXHJcXG4gICAgICAgIHBhZGRpbmcgOiAxMHB4IDEwcHggMHB4IDEwcHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodCA6IDEuMztcXHJcXG4gICAgfSAgICBcXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xcclxcbiAgICBpbWcubW9vbldlT2ZmZmVyLFxcclxcbiAgICBpbWcuc3VuV2VPZmZmZXIge1xcclxcbiAgICAgICAgdG9wIDogNTBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXtcXHJcXG5cXHJcXG4gICAgaW1nLmNhdFdlT2ZmZmVye1xcclxcbiAgICAgICAgYm90dG9tOiAxMHB4O1xcclxcbiAgICAgICAgbGVmdDogNCU7XFxyXFxuICAgICAgICB3aWR0aDogMzUlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIGltZy5ncmFzc1dlT2ZmZmVyIHtcXHJcXG4gICAgICAgIHdpZHRoIDogODAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIGltZy5tb29uV2VPZmZmZXIsXFxyXFxuICAgIGltZy5zdW5XZU9mZmZlciB7XFxyXFxuICAgICAgICB3aWR0aCA6IDI1JTtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICBpbWcuc3VuV2VPZmZmZXIge1xcclxcbiAgICAgICAgcmlnaHQgOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcblxcclxcbiAgICB0ZXh0IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZSA6IDIycHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgLnN0YXJXZU9mZmZlcixcXHJcXG4gICAgLnN0YXJZZWxsb3csXFxyXFxuICAgIC5zdGFyQmx1ZSxcXHJcXG4gICAgLnN0YXJSZWQge1xcclxcbiAgICAgICAgd2lkdGggOiAycHg7XFxyXFxuICAgICAgICBoZWlnaHQgOiAycHg7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIFxcclxcbiAgICAvKiA9PT09PT09PT09PT09PT09PT09PT09IG1vZGFsIHdpbmRvd3MgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuICAgIFxcclxcblxcclxcbiAgICAubW9kYWxXZU9mZmZlcj4uY29udGFpbmVyV2VPZmZmZXIge1xcclxcbiAgICAgICAgd2lkdGggOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIGJ1dHRvbiB7XFxyXFxuICAgICAgICB3aWR0aCA6IDQ1cHg7XFxyXFxuICAgICAgICBoZWlnaHQgOiA0NXB4O1xcclxcbiAgICAgICAgZm9udC1zaXplIDogMzBweDtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICAubW9kYWxXZU9mZmZlciBwIHtcXHJcXG4gICAgICAgIHdpZHRoIDogODAlO1xcclxcbiAgICAgICAgZm9udC1zaXplIDogMjJweDtcXHJcXG4gICAgICAgIHRleHQtYWxpZ24gOiBsZWZ0O1xcclxcbiAgICAgICAgcGFkZGluZyA6IDBweCAyMHB4IDBweCA0MHB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQgOiAxLjM7XFxyXFxuICAgIH0gICAgXFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpe1xcclxcblxcclxcbiAgICBpbWcuY2F0V2VPZmZmZXIge1xcclxcbiAgICAgICAgYm90dG9tIDogMTBweDtcXHJcXG4gICAgICAgIGxlZnQgOiA0JTtcXHJcXG4gICAgICAgIHdpZHRoIDogMzAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIGltZy5tb29uV2VPZmZmZXIsXFxyXFxuICAgIGltZy5zdW5XZU9mZmZlciB7XFxyXFxuICAgICAgICB3aWR0aCA6IDIwJTtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICBpbWcuc3VuV2VPZmZmZXJXZU9mZmZlciB7XFxyXFxuICAgICAgICByaWdodCA6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuXFxyXFxuICAgIHRleHQge1xcclxcbiAgICAgICAgZm9udC1zaXplIDogMjVweDtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICAuc3RhcldlT2ZmZmVyLFxcclxcbiAgICAuc3RhclllbGxvdyxcXHJcXG4gICAgLnN0YXJCbHVlLFxcclxcbiAgICAuc3RhclJlZCB7XFxyXFxuICAgICAgICB3aWR0aCA6IDJweDtcXHJcXG4gICAgICAgIGhlaWdodCA6IDJweDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgXFxyXFxuICAgIC8qID09PT09PT09PT09PT09PT09PT09PT0gbW9kYWwgd2luZG93cyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG4gICAgXFxyXFxuICAgIFxcclxcbiAgICAubW9kYWxXZU9mZmZlciB7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQgOiBmbGV4LWVuZDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zIDogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcblxcclxcbiAgICAubW9kYWxXZU9mZmZlcj4uY29udGFpbmVyV2VPZmZmZXIge1xcclxcbiAgICAgICAgd2lkdGggOiA2NSU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgYnV0dG9uIHtcXHJcXG4gICAgICAgIHdpZHRoIDogNDVweDtcXHJcXG4gICAgICAgIGhlaWdodCA6IDQ1cHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzIDogNTAlO1xcclxcbiAgICAgICAgZm9udC1zaXplIDogMzBweDtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICAubW9kYWxXZU9mZmZlciBwIHtcXHJcXG4gICAgICAgIHdpZHRoIDogNjUlO1xcclxcbiAgICAgICAgZm9udC1zaXplIDogMjVweDtcXHJcXG4gICAgICAgIHRleHQtYWxpZ24gOiBsZWZ0O1xcclxcbiAgICAgICAgcGFkZGluZyA6IDBweCA0MHB4IDBweCA0MHB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQgOiAxLjM7XFxyXFxuICAgIH0gICAgXFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgICAtLWNvbG9yVGV4dC1zdHJva2UgOiByZWQ7XFxyXFxuICAgIC0tY29sb3JUZXh0LWZpbGwgOiB3aGl0ZTtcXHJcXG59XFxyXFxuICAgIFxcclxcblxcclxcbmh0bWwge1xcclxcbiAgICB3aWR0aCA6IDEwMCU7XFxyXFxuICAgIGhlaWdodCA6IDEwMCU7XFxyXFxuICAgIHVzZXItc2VsZWN0IDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGhlaWdodCA6IDEwMCU7XFxyXFxufVxcclxcblxcclxcblxcclxcbm1haW4ge1xcclxcbiAgICB3aWR0aCA6IDEwMCU7XFxyXFxuICAgIGhlaWdodCA6IDEwMCU7XFxyXFxufVxcclxcblxcclxcblxcclxcbmRpdi5zbGlkMiB7XFxyXFxuICAgIGJhY2tncm91bmQgOiBsaW5lYXItZ3JhZGllbnQocmdiYSgzLDEyLDExMywgMSksIHJnYmEoNjUsMTA1LDIyNSwgMSksIHJnYmEoMjU1LDI1NSwyNTUsIDEpKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDIwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogMCU7XFxyXFxuICAgIHdpZHRoIDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0IDogMTAwJTtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMsIGJhY2tncm91bmQtcG9zaXRpb24teSAxLjVzO1xcclxcbiAgICAvKnRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24teSAxLjVzOyovXFxyXFxufVxcclxcblxcclxcblxcclxcbmgyLnRpdGxlV2VPZmZlciB7XFxyXFxuICAgIGNvbG9yIDogd2hpdGU7XFxyXFxuICAgIHotaW5kZXg6IDEwMDA7XFxyXFxufVxcclxcblxcclxcblxcclxcbmltZy5ob21lV2VPZmZmZXIge1xcclxcbiAgICBwb3NpdGlvbiA6IGFic29sdXRlO1xcclxcbiAgICBib3R0b20gOiAwO1xcclxcbiAgICBoZWlnaHQgOiBhdXRvO1xcclxcbiAgICB3aWR0aCA6IDEwMCU7XFxyXFxuICAgIHotaW5kZXggOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5pbWcuY2F0V2VPZmZmZXIge1xcclxcbiAgICBkaXNwbGF5IDogYmxvY2s7XFxyXFxuICAgIHBvc2l0aW9uIDogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbSA6IDEycHg7XFxyXFxuICAgIGxlZnQgOiA1JTtcXHJcXG4gICAgd2lkdGggOiAxOSU7XFxyXFxuICAgIHotaW5kZXggOiAxMDA7XFxyXFxufVxcclxcblxcclxcblxcclxcbmltZy5ncmFzc1dlT2ZmZmVyIHtcXHJcXG4gICAgZGlzcGxheSA6IGJsb2NrO1xcclxcbiAgICBwb3NpdGlvbiA6IGFic29sdXRlO1xcclxcbiAgICBib3R0b20gOiAwO1xcclxcbiAgICBsZWZ0IDogMDtcXHJcXG4gICAgd2lkdGggOiA2MCU7XFxyXFxuICAgIHotaW5kZXggOiAxMDA7XFxyXFxufVxcclxcblxcclxcblxcclxcbmltZy5tb29uV2VPZmZmZXIsXFxyXFxuaW1nLnN1bldlT2ZmZmVyIHtcXHJcXG4gICAgZGlzcGxheSA6IGJsb2NrO1xcclxcbiAgICBwb3NpdGlvbiA6IGFic29sdXRlO1xcclxcbiAgICB0b3AgOiAwcHg7XFxyXFxuICAgIHJpZ2h0IDogMCU7XFxyXFxuICAgIHdpZHRoIDogMTIlO1xcclxcbiAgICB6LWluZGV4IDogNTA7XFxyXFxuICAgIG9wYWNpdHkgOiAxO1xcclxcbiAgICB0cmFuc2l0aW9uIDogcmlnaHQgMS41cztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuaW1nLnN1bldlT2ZmZmVyIHtcXHJcXG4gICAgcmlnaHQgOiAxMDAlO1xcclxcbn1cXHJcXG4gICAgXFxyXFxuXFxyXFxuLmJsb2NrU1ZHIHtcXHJcXG4gICAgcG9zaXRpb24gOiBmaXhlZDtcXHJcXG4gICAgbGVmdCA6IDAlO1xcclxcbiAgICB3aWR0aCA6IDEwMCU7XFxyXFxuICAgIGhlaWdodCA6IDEwMCU7XFxyXFxuICAgIG9wYWNpdHkgOiAxO1xcclxcbiAgICB0cmFuc2l0aW9uIDogbGVmdCAxLjVzO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5zdmcge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG50ZXh0IHtcXHJcXG4gICAgZm9udC1mYW1pbHkgOiAnU2Vnb2UgUHJpbnQgQm9sZCc7XFxyXFxuICAgIGN1cnNvciA6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb24gOiAuMTVzIGxpbmVhcjtcXHJcXG4gICAgc3Ryb2tlIDogdmFyKC0tY29sb3JUZXh0LXN0cm9rZSk7XFxyXFxuICAgIGZpbGwgOiB2YXIoLS1jb2xvclRleHQtZmlsbCk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogLjE1cyBsaW5lYXI7XFxyXFxufVxcclxcbiAgICBcXHJcXG5cXHJcXG50ZXh0OmhvdmVyIHtcXHJcXG4gICAgZmlsbCA6IG9yYW5nZTtcXHJcXG59XFxyXFxuXFxyXFxuICAgIFxcclxcbnBhdGgge1xcclxcbiAgICAvKiBzdHJva2UgOiB3aGl0ZTsgKi9cXHJcXG4gICAgZmlsbCA6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uc3RhcldlT2ZmZmVyLFxcclxcbi5zdGFyWWVsbG93LFxcclxcbi5zdGFyQmx1ZSxcXHJcXG4uc3RhclJlZCB7XFxyXFxuICAgIHotaW5kZXggOiAxMDtcXHJcXG4gICAgd2lkdGggOiA0cHg7XFxyXFxuICAgIGhlaWdodCA6IDRweDtcXHJcXG4gICAgcG9zaXRpb24gOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1cyA6IDUwJTtcXHJcXG4gICAgb3BhY2l0eSA6IDA7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5zdGFyWWVsbG93IHtcXHJcXG4gICAgYW5pbWF0aW9uIDogbW92aWUgOXMgbGluZWFyIDZzIGluZmluaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uc3RhclJlZCB7XFxyXFxuICAgIGFuaW1hdGlvbiA6IG1vdmllIDlzIGxpbmVhciBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnN0YXJCbHVlIHtcXHJcXG4gICAgYW5pbWF0aW9uIDogbW92aWUgOXMgbGluZWFyIDNzIGluZmluaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIG1vdmllIHtcXHJcXG4gICAgMCUsIDMwJSB7XFxyXFxuICAgICAgICBvcGFjaXR5IDogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICA1MCUge1xcclxcbiAgICAgICAgb3BhY2l0eSA6IDE7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgODAlLCAxMDAlIHtcXHJcXG4gICAgICAgIG9wYWNpdHkgOiAwO1xcclxcbiAgICB9XFxyXFxufVxcclxcbiAgICBcXHJcXG4gICAgXFxyXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PSBtb2RhbCB3aW5kb3dzID09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcbiAgICBcXHJcXG4gICAgXFxyXFxuLm1vZGFsV2VPZmZmZXIge1xcclxcbiAgICBkaXNwbGF5IDogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50IDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtcyA6IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb24gOiBmaXhlZDtcXHJcXG4gICAgb3BhY2l0eSA6IDE7XFxyXFxuICAgIHRyYW5zaXRpb24gOiBsZWZ0IDEuNXM7XFxyXFxufVxcclxcbiAgICBcXHJcXG5cXHJcXG4uaW50ZXJuZXRTaG9wLFxcclxcbi5zaXRlQ29tcGFueSxcXHJcXG4uYmxvZyxcXHJcXG4ucG9ydGZvbGlvLFxcclxcbi5zb2NpYWxOZXR3b3JrLFxcclxcbi5mb3J1bSxcXHJcXG4ubGFuZGluZyxcXHJcXG4uZ2FtZVNvdXJzIHtcXHJcXG4gICAgbGVmdCA6IC0xMDAlO1xcclxcbiAgICB6LWluZGV4IDogMTUwO1xcclxcbiAgICB3aWR0aCA6IDEwMCU7XFxyXFxuICAgIGhlaWdodCA6IDEwMCU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5tb2RhbFdlT2ZmZmVyPi5jb250YWluZXJXZU9mZmZlciB7XFxyXFxuICAgIHdpZHRoIDogNjAlO1xcclxcbiAgICBkaXNwbGF5IDogZmxleDtcXHJcXG4gICAgZmxleC13cmFwIDogbm93cmFwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgICBjdXJzb3IgOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDogcmdiKDI0NCwgMTA3LCAyOCk7XFxyXFxuICAgIG1hcmdpbiA6IDAgMCAwIDA7XFxyXFxuICAgIHdpZHRoIDogNTBweDtcXHJcXG4gICAgaGVpZ2h0IDogNTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1cyA6IDUwJTtcXHJcXG4gICAgZm9udC1zaXplIDogMzBweDtcXHJcXG4gICAgYm9yZGVyIDogc29saWQgMXB4IGJsYWNrO1xcclxcbiAgICBvdXRsaW5lIDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm1vZGFsV2VPZmZmZXIgcCB7XFxyXFxuICAgIGNvbG9yIDogYmxhY2s7XFxyXFxuICAgIHdpZHRoIDogOTAlO1xcclxcbiAgICBmb250LXNpemUgOiAzMHB4O1xcclxcbiAgICBmb250LWZhbWlseSA6ICdTZWdvZSBQcmludCBCb2xkJztcXHJcXG4gICAgdGV4dC1hbGlnbiA6IGp1c3RpZnk7XFxyXFxuICAgIHBhZGRpbmc6IDBweCA3MHB4IDBweCA0MHB4O1xcclxcbiAgICBsaW5lLWhlaWdodCA6IDEuNDtcXHJcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpe1xcclxcblxcclxcbiAgICBpbWcuaG9tZVdlT2ZmZmVyIHtcXHJcXG4gICAgICAgIGhlaWdodCA6IDEyMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGltZy5jYXRXZU9mZmZlciB7XFxyXFxuICAgICAgICB3aWR0aCA6IDE1JTtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICBpbWcubW9vbldlT2ZmZmVyLFxcclxcbiAgICBpbWcuc3VuV2VPZmZmZXIge1xcclxcbiAgICAgICAgd2lkdGggOiAxMCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgaW1nLnN1bldlT2ZmZmVyIHtcXHJcXG4gICAgICAgIHJpZ2h0IDogMTAwJTtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG5cXHJcXG4gICAgdGV4dCB7XFxyXFxuICAgICAgICBmb250LXNpemUgOiAxOHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIC5zdGFyV2VPZmZmZXIsXFxyXFxuICAgIC5zdGFyWWVsbG93LFxcclxcbiAgICAuc3RhckJsdWUsXFxyXFxuICAgIC5zdGFyUmVke1xcclxcbiAgICAgICAgd2lkdGggOiAxLjVweDtcXHJcXG4gICAgICAgIGhlaWdodCA6IDEuNXB4O1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICBcXHJcXG4gICAgLyogPT09PT09PT09PT09PT09PT09PT09PSBtb2RhbCB3aW5kb3dzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcbiAgICBcXHJcXG5cXHJcXG4gICAgLm1vZGFsV2VPZmZmZXIge1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50IDogZmxleC1zdGFydDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zIDogZmxleC1zdGFydDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG5cXHJcXG4gICAgLm1vZGFsV2VPZmZmZXI+LmNvbnRhaW5lcldlT2ZmZmVyIHtcXHJcXG4gICAgICAgIHdpZHRoIDogODAlO1xcclxcbiAgICAgICAgZmxleC13cmFwIDogd3JhcDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgMCAwIDM1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgYnV0dG9uIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMTBweCAwIDAgMTBweDtcXHJcXG4gICAgICAgIHdpZHRoOiAzNXB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIFxcclxcbiAgICAubW9kYWxXZU9mZmZlciBwe1xcclxcbiAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICAgICAgcGFkZGluZzogMTBweCAxMHB4IDBweCAxMHB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMztcXHJcXG4gICAgfSAgICBcXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiLi4vaW1nL2Nsb3VkXzEucG5nXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gcmVxdWlyZShcIi4uL2ltZy9jbG91ZF8yLnBuZ1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IHJlcXVpcmUoXCIuLi9pbWcvY2xvdWRfMy5wbmdcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3R7XFxyXFxuICAgIC0tbGVmdDogNTAlO1xcclxcbiAgICAvKi0tdG9wIDogMTAwJSovXFxyXFxuICAgIC8qLS1udW0gIDogOTBkZWc7Ki9cXHJcXG59XFxyXFxuLmgxe1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDowO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJIYW5naW5nIExldHRlcnNcXFwiO1xcclxcbiAgICBmb250LXNpemU6IDRlbTtcXHJcXG4gICAgei1pbmRleDogOTk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6ICM2N2MyZmI7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxMDBweDtcXHJcXG59XFxyXFxuLnRvcEJsb2Nre1xcclxcbiAgICBoZWlnaHQ6IDUwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi5ib3R0b21CbG9ja3tcXHJcXG4gICAgaGVpZ2h0OiA1MCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4ubWFpbkRpdntcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGxlZnQ6IGNhbGMoKDEwMCUgLSA4MCUpLzIpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG4uYmxvY2tDYXR7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGhlaWdodDogNTAlO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiAxMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcbi5jYXR7XFxyXFxuICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuLmNhdCBpbWd7XFxyXFxuICAgIGhlaWdodDogNTAlO1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG5cXHJcXG59XFxyXFxuLmJsb2NrTW9vbntcXHJcXG4gICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLyAzKTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDEwcHg7XFxyXFxuICAgIGxlZnQ6IGNhbGMoMTAwJSAtIDM1JSk7XFxyXFxuICAgIHotaW5kZXg6IDk5O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG4uYmxvY2tNb29uIGltZ3tcXHJcXG4gICAgICB3aWR0aDogOTAlO1xcclxcbiAgICAgIGhlaWdodDogOTAlO1xcclxcbiAgICAgIG1heC13aWR0aDogMjcwcHg7XFxyXFxuICAgICAgbWF4LWhlaWdodDogMjcwcHg7XFxyXFxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuLmNvbW1lbnR7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxufVxcclxcbi5jb21tZW50IGltZ3tcXHJcXG4gICAgaGVpZ2h0OiA1MCU7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbn1cXHJcXG4uZ3Jhc3N7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IDE1JTtcXHJcXG4gICAgei1pbmRleDogOTk7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiBjYWxjKDEwMCUgLSAxNSUpO1xcclxcbn1cXHJcXG4uc3RhcntcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgdHJhbnNpdGlvbjogLjVzO1xcclxcbn1cXHJcXG4uY2xvdWQxe1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgIG1heC13aWR0aDogMjUwcHg7XFxyXFxuICAgIGhlaWdodDogMjglO1xcclxcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6MTAlO1xcclxcbiAgICBsZWZ0OiAtNTAlO1xcclxcbiAgICB6LWluZGV4OiA5ODtcXHJcXG59XFxyXFxuQGtleWZyYW1lcyBDbG91ZDF7XFxyXFxuICAgIGZyb217XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgbGVmdDogLTUwJTtcXHJcXG4gICAgfVxcclxcbiAgICAyMCV7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcbiAgICAxMDAle1xcclxcbiAgICAgICAgbGVmdDogY2FsYygxMDB2aCArIDUwJSk7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5tb3ZlQ2xvdWRfMXtcXHJcXG4gICAgbGVmdDogLTUwJTtcXHJcXG4gICAgYW5pbWF0aW9uOiA3MDAwMG1zIGxpbmVhciBDbG91ZDE7XFxyXFxuICAgIGFuaW1hdGlvbi1kZWxheTogMTBzO1xcclxcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXHJcXG59XFxyXFxuLmNsb3VkMntcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDI4JTtcXHJcXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOjE1JTtcXHJcXG4gICAgbGVmdDogLTUwJTtcXHJcXG4gICAgei1pbmRleDogMTAwO1xcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIENsb3VkMntcXHJcXG4gICAgZnJvbXtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICBsZWZ0OiAtNTAlO1xcclxcbiAgICB9XFxyXFxuICAgIDIwJXtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCV7XFxyXFxuICAgICAgICBsZWZ0OiBjYWxjKDEwMHZoICsgNTAlKTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLm1vdmVDbG91ZF8ye1xcclxcbiAgICBsZWZ0OiAtNTAlO1xcclxcbiAgICBhbmltYXRpb246IDkwMDAwbXMgbGluZWFyIENsb3VkMjtcXHJcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAyMHM7XFxyXFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcclxcbn1cXHJcXG4uY2xvdWQzIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgICB3aWR0aDogNjUlO1xcclxcbiAgICBoZWlnaHQ6IDI1JTtcXHJcXG4gICAgbWF4LXdpZHRoOiA0NTBweDtcXHJcXG4gICAgbWF4LWhlaWdodDogMTcwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAyMCU7XFxyXFxuICAgIGxlZnQ6IC03MCU7XFxyXFxuICAgIHotaW5kZXg6IDEwMTtcXHJcXG59XFxyXFxuQGtleWZyYW1lcyBDbG91ZDN7XFxyXFxuICAgIGZyb217XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgbGVmdDogLTcwJTtcXHJcXG4gICAgfVxcclxcbiAgICAyMCV7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcbiAgICAxMDAle1xcclxcbiAgICAgICAgbGVmdDpjYWxjKDEwMHZoICsgNzAlKTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLm1vdmVDbG91ZF8ze1xcclxcbiAgICBsZWZ0OiAtNzAlO1xcclxcbiAgICBhbmltYXRpb246IDEyMDAwMG1zIGxpbmVhciBDbG91ZDM7XFxyXFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcclxcbn1cXHJcXG4ud29yZHNCbG9ja3tcXHJcXG4gICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgaGVpZ2h0OiAzMCU7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiBjYWxjKDEwMCUgLSAzMCUgLSAzNSUpO1xcclxcbiAgICBsZWZ0OiBjYWxjKDEwMCUgLSAyMCUpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNTAlO1xcclxcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MCU7XFxyXFxuXFxyXFxufVxcclxcbi53b3Jkc0Jsb2NrIGRpdntcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0b3A6MDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgdHJhbnNwYXJlbnQgNjAlLCByZ2JhKDIwLCAzMywgNjksIDAuNDUpKTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHJcXG59XFxyXFxuLndvcmRzQmxvY2sgc3BhbntcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiA0NSU7XFxyXFxuICAgIHRvcDogMTEwJTtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlNlZ29lIFByaW50IEJvbGRcXFwiO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgbW92ZVdvcmRze1xcclxcbiAgIGZyb217XFxyXFxuICAgICAgIHRvcDoxMTAlO1xcclxcbiAgICAgICBsZWZ0OiAyNSU7XFxyXFxuICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgfVxcclxcbiAgICAxNSV7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB9XFxyXFxuICAgIDIwJXtcXHJcXG4gICAgICAgIG9wYWNpdHk6IC41O1xcclxcbiAgICB9XFxyXFxuICAgIDMwJXtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG4gICAgNTAle1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcbiAgICAxMDAle1xcclxcbiAgICAgICAgdG9wOjA7XFxyXFxuICAgICAgICBsZWZ0OiB2YXIoLS1sZWZ0KTtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XFxyXFxuLm1vdmVXe1xcclxcbiAgICBhbmltYXRpb246IDZzIGxpbmVhciBtb3ZlV29yZHM7XFxyXFxufVxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA1MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpe1xcclxcbiAgIC5ibG9ja0NhdHtcXHJcXG4gICAgIHdpZHRoOiA0MCUgIWltcG9ydGFudDtcXHJcXG4gICB9XFxyXFxufVxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODI1cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSl7XFxyXFxuICAgIC5tYWluRGl2e1xcclxcbiAgICAgICAgd2lkdGg6IDcwJTtcXHJcXG4gICAgICAgIGxlZnQ6IGNhbGMoKDEwMCUgLSA3MCUpLzIpO1xcclxcbiAgICB9XFxyXFxuICAgIC5oMXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMi41ZW0gIWltcG9ydGFudDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG4gICAgaDJ7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIuNWVtICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG4gICAgLmJsb2NrTW9vbiBpbWcge1xcclxcbiAgICAgICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgICAgIGhlaWdodDogNTAlO1xcclxcbiAgICB9XFxyXFxuICAgIC5jb21tZW50IHtcXHJcXG4gICAgICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA1MHB4KSB7XFxyXFxuICAgIC5tYWluRGl2e1xcclxcbiAgICAgICAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xcclxcbiAgICAgICAgbGVmdDogY2FsYygoMTAwJSAtIDkwJSkvMik7XFxyXFxuICAgIH1cXHJcXG4gICAgLndvcmRzQmxvY2t7XFxyXFxuICAgICAgICB3aWR0aDogMzAlO1xcclxcbiAgICAgICAgbGVmdDogY2FsYygxMDAlIC0gMzAlKTtcXHJcXG4gICAgfVxcclxcbiAgICAuYmxvY2tDYXR7XFxyXFxuICAgICAgICB3aWR0aDogNjAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiA0MCU7XFxyXFxuICAgICAgICB0b3A6IDU4JTtcXHJcXG4gICAgfVxcclxcbiAgICAuY29tbWVudCBpbWcge1xcclxcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgfVxcclxcbiAgICAuY29tbWVudCBpbWcge1xcclxcbiAgICAgICAgaGVpZ2h0OiA0MCU7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG4gICAgLmNsb3VkMXtcXHJcXG4gICAgICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDIwJTtcXHJcXG4gICAgfVxcclxcbiAgICAuY2xvdWQye1xcclxcbiAgICAgICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgICAgIGhlaWdodDogMjAlO1xcclxcbiAgICB9XFxyXFxuICAgIC5jbG91ZDMge1xcclxcbiAgICAgICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgICAgIGhlaWdodDogMjAlO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxyXFxuICAgIC5oMXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogM2VtO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDgwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgaDJ7XFxyXFxuICAgICAgICBmb250LXNpemU6IDNlbTtcXHJcXG4gICAgfVxcclxcbiAgICAuYmxvY2tNb29uIGltZ3tcXHJcXG4gICAgICAgIG1heC13aWR0aDogMTUwcHg7XFxyXFxuICAgICAgICBtYXgtaGVpZ2h0OiAxNTBweDtcXHJcXG5cXHJcXG4gICAgfVxcclxcbiAgICAud29yZHNCbG9ja3tcXHJcXG4gICAgICB3aWR0aDogMjAlO1xcclxcbiAgICAgIHRvcDpjYWxjKDEwMCUgLSAzMCUgLSAzMCUpO1xcclxcbiAgICAgIGxlZnQ6IGNhbGMoMTAwJSAtIDIwJSk7XFxyXFxuICAgIH1cXHJcXG4gICAgLndvcmRzQmxvY2sgc3BhbntcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcclxcbiAgICAuaDF7XFxyXFxuICAgICAgICBmb250LXNpemU6IDNlbTtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA4MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIGgye1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgICAuaDF7XFxyXFxuICAgICAgICBmb250LXNpemU6IDJlbTtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5tYWluRGl2e1xcclxcbiAgICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgICAgIGxlZnQ6IGNhbGMoKDEwMCUgLSA5MCUpLzIpO1xcclxcblxcclxcbiAgICB9XFxyXFxuICAgIC5ibG9ja0NhdHtcXHJcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgICAgICBsZWZ0OiAxJTtcXHJcXG4gICAgfVxcclxcbiAgICAuYmxvY2tNb29ue1xcclxcbiAgICAgICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgfVxcclxcbiAgICAuY2F0IGltZyB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDQwJTtcXHJcXG4gICAgICAgIC8qbWFyZ2luLWJvdHRvbTogMjBweDsqL1xcclxcbiAgICB9XFxyXFxuICAgIC5jb21tZW50IGltZyB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDQwJTtcXHJcXG4gICAgfVxcclxcbiAgICAuZ3Jhc3N7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwJTtcXHJcXG4gICAgICAgIHRvcDogY2FsYygxMDAlIC0gMTAlKTtcXHJcXG4gICAgfVxcclxcblxcclxcbn1cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICAgIC53b3Jkc0Jsb2Nre1xcclxcbiAgICAgICAgd2lkdGg6IDQwJTtcXHJcXG4gICAgICAgIGxlZnQ6IGNhbGMoMTAwJSAtIDQwJSk7XFxyXFxuICAgICAgICB0b3A6IGNhbGMoMTAwJSAtIDMwJSAtIDIwJSk7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG4gICAgLmNvbW1lbnR7XFxyXFxuICAgICAgICB6LWluZGV4OiA5OTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTcwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xcclxcbiAgICAud29yZHNCbG9ja3tcXHJcXG4gICAgICAgIHdpZHRoOiAyMCU7XFxyXFxuICAgICAgICBsZWZ0OiBjYWxjKDEwMCUgLSAyMCUpO1xcclxcbiAgICAgICAgdG9wOiBjYWxjKDEwMCUgLSAzMCUgLSAzMCUpO1xcclxcbiAgICB9XFxyXFxuICAgIC53b3Jkc0Jsb2NrIHNwYW57XFxyXFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KXtcXHJcXG4gICAgLndvcmRzQmxvY2t7XFxyXFxuICAgICAgICB3aWR0aDogNDAlO1xcclxcbiAgICAgICAgbGVmdDogY2FsYygxMDAlIC0gNDUlKTtcXHJcXG4gICAgICAgIC8qdG9wOiBjYWxjKDEwMCUgLSAzMCUgLSAzMCUpOyovXFxyXFxuICAgIH1cXHJcXG4gICAgLndvcmRzQmxvY2sgc3BhbntcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgfVxcclxcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2xpZGVXZU9mZmVyL3N0eWxlV2VPZmZlci5jc3NcIik7XG52YXIgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fID0gcmVxdWlyZShcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zbGlkZVdlT2ZmZXIvc3R5bGUyNTYwLmNzc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzJfX18gPSByZXF1aXJlKFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NsaWRlV2VPZmZlci9zdHlsZTE5MjAuY3NzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfM19fXyA9IHJlcXVpcmUoXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2xpZGVXZU9mZmVyL3N0eWxlMTYwMC5jc3NcIik7XG52YXIgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF80X19fID0gcmVxdWlyZShcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zbGlkZVdlT2ZmZXIvc3R5bGUxNDAwLmNzc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzVfX18gPSByZXF1aXJlKFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NsaWRlV2VPZmZlci9zdHlsZTExMDAuY3NzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfNl9fXyA9IHJlcXVpcmUoXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2xpZGVXZU9mZmVyL3N0eWxlODAwLmNzc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzdfX18gPSByZXF1aXJlKFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NsaWRlV2VPZmZlci9zdHlsZTYwMC5jc3NcIik7XG52YXIgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF84X19fID0gcmVxdWlyZShcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zbGlkZVdlT2ZmZXIvc3R5bGU0NTAuY3NzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfOV9fXyA9IHJlcXVpcmUoXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2xpZGVXZU9mZmVyL3N0eWxlNDAwLmNzc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzEwX19fID0gcmVxdWlyZShcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zbGlkZVdlT2ZmZXIvc3R5bGUzMjAuY3NzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMTFfX18gPSByZXF1aXJlKFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NsaWRlV2VPZmZlci9zdHlsZV9oNDUwLmNzc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuZXhwb3J0cy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5leHBvcnRzLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fKTtcbmV4cG9ydHMuaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzJfX18pO1xuZXhwb3J0cy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfM19fXyk7XG5leHBvcnRzLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF80X19fKTtcbmV4cG9ydHMuaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzVfX18pO1xuZXhwb3J0cy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfNl9fXyk7XG5leHBvcnRzLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF83X19fKTtcbmV4cG9ydHMuaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzhfX18pO1xuZXhwb3J0cy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfOV9fXyk7XG5leHBvcnRzLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xMF9fXyk7XG5leHBvcnRzLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xMV9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1haW5TbGlkZTN7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDk1JTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0b3A6MiU7XFxyXFxuICAgIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMjBweCAxMHB4IDUwcHggMTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMiU7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFxyXFxufVxcclxcbi5wb3NpdGlvbntcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG4uY2VudGVye1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmJsb2Nre1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiYSg1NywgNTcsIDU3LCAwLjc5KTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggNHB4IHJnYmEoNTcsIDU3LCA1NywgMC43OSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcbi50cmFuc2l0aW9ue1xcclxcbiAgICB0cmFuc2l0aW9uOiAwcyAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4uYmxvY2tDZW50ZXIgaW1ne1xcclxcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4uYmxvY2sgaW1ne1xcclxcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcXHJcXG59XFxyXFxuLmJsb2NrXzEsIC5ibG9ja183LCAuYmxvY2tfOCwgLmJsb2NrXzExLFxcclxcbi5ibG9ja18xMiwgLmJsb2NrXzE1LCAuYmxvY2tfMTZ7XFxyXFxuICAgIHRyYW5zaXRpb246ICAxMHMgbGluZWFyO1xcclxcbn1cXHJcXG4uYmxvY2tfMiwgLmJsb2NrXzYsIC5ibG9ja18xMCwgLmJsb2NrXzE0e1xcclxcbiAgICB0cmFuc2l0aW9uOiAgMTBzIGxpbmVhcjtcXHJcXG59XFxyXFxuLmJsb2NrXzMsIC5ibG9ja181LCAuYmxvY2tfOSwgLmJsb2NrXzEze1xcclxcbiAgICB0cmFuc2l0aW9uOiAxMHMgbGluZWFyO1xcclxcbn1cXHJcXG4uYmxvY2tfNHtcXHJcXG4gICAgdHJhbnNpdGlvbjogMTBzIGxpbmVhcjtcXHJcXG59XFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XFxyXFxuICAgIC5ibG9ja3tcXHJcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNTcsIDU3LCA1NywgMC43OSk7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgNXB4IDJweCByZ2JhKDU3LCA1NywgNTcsIDAuNzkpO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcclxcbiAgICB9XFxyXFxufVxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KXtcXHJcXG4gICAgLmJsb2Nre1xcclxcbiAgICAgICAgYm9yZGVyOiAuNXB4IHNvbGlkIHJnYmEoNTcsIDU3LCA1NywgMC43OSk7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgNHB4IDFweCByZ2JhKDU3LCA1NywgNTcsIDAuNzkpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1haW57XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDk1JTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0b3A6MiU7XFxyXFxuICAgIGJvcmRlcjogc29saWQgI2YzZmY4NjtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAyMHB4IDEwcHggNTBweCAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyJTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHJcXG59XFxyXFxuLnRlbXBsYXRle1xcclxcbiAgICB3aWR0aDogY2FsYygoMTAwJSAvIDMpIC0gNyUpO1xcclxcbiAgICBoZWlnaHQ6IDE2ZW07XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMwMDAwNjg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMXM7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgbWFyZ2luOiA1cHg7XFxyXFxufVxcclxcbi8qLnJlc2l6ZXsqL1xcclxcbi8qICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsqL1xcclxcbi8qICAgIHdpZHRoOiA4MCU7Ki9cXHJcXG4vKiAgICBoZWlnaHQ6IDgwJTsqL1xcclxcbi8qICAgIGxlZnQ6IDEwJTsqL1xcclxcbi8qICAgIHRvcDogNSU7Ki9cXHJcXG4vKn0qL1xcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcXHJcXG4gICAgLnRlbXBsYXRlIHtcXHJcXG4gICAgICAgIHdpZHRoOiBjYWxjKCgxMDAlIC8gMykgLSAyJSk7XFxyXFxuICAgICAgICBoZWlnaHQ6IDE1ZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTMwMHB4KSB7XFxyXFxuICAgIC50ZW1wbGF0ZSB7XFxyXFxuICAgICAgICB3aWR0aDogY2FsYygoMTAwJSAvIDMpIC0gNSUpO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxM2VtO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNTBweCkge1xcclxcbiAgICAubWFpbntcXHJcXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNoICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG5cXHJcXG4gICAgfVxcclxcbiAgICAudGVtcGxhdGUge1xcclxcbiAgICAgICAgd2lkdGg6IGNhbGMoKDEwMCUgLyAyKSAtIDUlKTtcXHJcXG4gICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA1MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcXHJcXG4gICAgLm1haW57XFxyXFxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICAgICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzp0b3VjaCAhaW1wb3J0YW50O1xcclxcblxcclxcbiAgICB9XFxyXFxuICAgIC50ZW1wbGF0ZSB7XFxyXFxuICAgICAgICB3aWR0aDogY2FsYygoMTAwJSAvIDIpIC0gNSUpO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxNWVtO1xcclxcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxyXFxuICAgIC50ZW1wbGF0ZXtcXHJcXG4gICAgICAgIHdpZHRoOiA0MGVtO1xcclxcbiAgICAgICAgaGVpZ2h0OiAyMGVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxufVxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc0MHB4KSAgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKXtcXHJcXG4gICAgLnRlbXBsYXRle1xcclxcbiAgICAgICAgd2lkdGg6IDM1ZW07XFxyXFxuICAgICAgICBoZWlnaHQ6IDE3ZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpICBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpe1xcclxcbiAgICAudGVtcGxhdGV7XFxyXFxuICAgICAgICB3aWR0aDogMzVlbTtcXHJcXG4gICAgICAgIGhlaWdodDogMTdlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICAgIC50ZW1wbGF0ZSB7XFxyXFxuICAgICAgICB3aWR0aDogMjZlbTtcXHJcXG4gICAgICAgIGhlaWdodDogMTNlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCIuLi9pbWcvZ3Jhc3MucG5nXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gcmVxdWlyZShcIi4uL2ltZy9iYWNrR3JvdW5kLW1pbi5wbmdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSByZXF1aXJlKFwiLi4vaW1nL2JsdWVfc2t5LmpwZ1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tU2xpZGVyLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG4uc2xpZHtcXHJcXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OjA7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uc2xpZDF7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgcmVwZWF0LXggYm90dG9tLFxcclxcbiAgICAgICAgICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIG5vLXJlcGVhdCBib3R0b20sXFxyXFxuICAgICAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNhZjgyMzAsICMxYTJiNTgsICMxMjFlM2UgNjAlKTtcXHJcXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcXHJcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC4yMHM7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTphdXRvLDEwMCUgYXV0bywgYXV0bztcXHJcXG4gICAgei1pbmRleDogMjA7XFxyXFxufVxcclxcbi5zbGlkMntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NywgNjEsIDE1NCwgMSk7XFxyXFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMTVzO1xcclxcbiAgICB6LWluZGV4OiAxOTtcXHJcXG5cXHJcXG59XFxyXFxuLnNsaWQze1xcclxcbiAgICAvKmJhY2tncm91bmQtY29sb3I6ICM3ZGYwYzg7Ki9cXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA0MHB4IDIwcHggcmdiYSgxOCwgMzAsIDYyLCAwLjYpIDtcXHJcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC4xMHM7XFxyXFxuICAgIHotaW5kZXg6IDE4O1xcclxcbiAgICBjb2xvcjogIzAwMDA2ODtcXHJcXG5cXHJcXG59XFxyXFxuLnNsaWQzLm1lbnUtYnRue1xcclxcbiAgICBjb2xvcjogIzAwMDA2ODtcXHJcXG59XFxyXFxuLnNsaWQ0e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmZjg2O1xcclxcbiAgICBjb2xvcjogIzAwMDA2ODtcXHJcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC4wNXM7XFxyXFxuICAgIHotaW5kZXg6IDE3O1xcclxcblxcclxcbn1cXHJcXG4uc2xpZDV7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwNjg7XFxyXFxuICAgIGNvbG9yOiBhbGljZWJsdWUgIWltcG9ydGFudDtcXHJcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XFxyXFxuICAgIHotaW5kZXg6IDE2O1xcclxcblxcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIHNsaWREb3due1xcclxcbiAgICAwJXtcXHJcXG4gICAgICAgIHRvcDogMDtcXHJcXG4gICAgfVxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAgIHRvcDoxMDB2aDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIHNsaWRVcHtcXHJcXG4gICAgZnJvbSB7XFxyXFxuICAgICAgICB0b3A6IDEwMHZoO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgICAgdG9wOjA7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLmRvd257XFxyXFxuICAgIHRvcDogMTAwdmg7XFxyXFxuICAgIGFuaW1hdGlvbjogMS4ycyBlYXNlLWluLW91dCBzbGlkRG93bjtcXHJcXG5cXHJcXG59XFxyXFxuLnVwe1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGFuaW1hdGlvbjogMXMgZWFzZS1pbi1vdXQgc2xpZFVwO1xcclxcbn1cXHJcXG4uc2hvdyB7XFxyXFxuICAgIHotaW5kZXg6IDE1MDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuXFxyXFxufVxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUFycm93LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5Aa2V5ZnJhbWVzIG1vdmVCdXR0b257XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gICAgfVxcclxcbiAgICA1JXtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAle1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gICAgfVxcclxcbiAgICAxNSV7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIDIwJXtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJXtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XFxyXFxuLmRpdkFycm93VVB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDRlbTtcXHJcXG4gICAgaGVpZ2h0OiA0ZW07XFxyXFxuICAgIHBhZGRpbmc6IDhweCAycHggMnB4IDJweCAhaW1wb3J0YW50O1xcclxcbiAgICB0b3A6LjVlbTtcXHJcXG4gICAgbGVmdDogY2FsYygxMDB2dyAtIDVlbSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgei1pbmRleDogMjAwO1xcclxcbiAgICBvdXRsaW5lOm5vbmU7XFxyXFxufVxcclxcbi5kaXZBcnJvd1VQIGltZyB7XFxyXFxuICAgIGhlaWdodDogOTAlO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbn1cXHJcXG4uZGl2QXJyb3dEb3due1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiA0ZW07XFxyXFxuICAgIGhlaWdodDogNGVtO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xcclxcbiAgICBwYWRkaW5nOiA4cHggMnB4IDJweCAycHggIWltcG9ydGFudDtcXHJcXG4gICAgdG9wOiBjYWxjKDEwMCUgLSA0ZW0gLSAzZW0pO1xcclxcbiAgICBsZWZ0OiBjYWxjKDEwMHZ3IC0gNWVtKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICB6LWluZGV4OiAyMDA7XFxyXFxuICAgIG91dGxpbmU6bm9uZTtcXHJcXG59XFxyXFxuLmRpdkFycm93RG93biBpbWcge1xcclxcbiAgICBoZWlnaHQ6IDkwJTtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcclxcblxcclxcbn1cXHJcXG4uYW5pbUJ1dHRvbntcXHJcXG4gICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gICAgYW5pbWF0aW9uOiBtb3ZlQnV0dG9uIDVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KXtcXHJcXG4gICAgLnNsaWQxe1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBhdXRvLDE0MCUgMzAlLCBhdXRvO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tLCAxMDAlIGJvdHRvbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KXtcXHJcXG5cXHJcXG4gICAgLmRvd25Xe1xcclxcbiAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogLjZzIGxpbmVhciAhaW1wb3J0YW50O1xcclxcblxcclxcbiAgICB9XFxyXFxuICAgIC51cFd7XFxyXFxuICAgICAgICB0b3A6IC0xMDB2aDtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246ICAuNnMgbGluZWFyICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG4gICAgLnNsaWQze1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA0MHB4IDEwcHggcmdiYSgxOCwgMzAsIDYyLCAwLjYpIDtcXHJcXG5cXHJcXG4gICAgfVxcclxcbiAgICAuZG93bntcXHJcXG4gICAgICAgIGFuaW1hdGlvbjogMS41cyBlYXNlLWluLW91dCBzbGlkRG93bjtcXHJcXG5cXHJcXG4gICAgfVxcclxcbiAgICAudXB7XFxyXFxuXFxyXFxuICAgICAgICBhbmltYXRpb246IDEuMnMgZWFzZS1pbi1vdXQgc2xpZFVwO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcXHJcXG4gICAgLmRpdkFycm93RG93bntcXHJcXG4gICAgICAgIHRvcDogY2FsYygxMDAlIC0gNGVtIC0gMWVtKTtcXHJcXG4gICAgfVxcclxcbiAgICAuc2xpZDF7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTUlLDEwMCUgMzUlLCBhdXRvO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tLCAxMDAlIGJvdHRvbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpe1xcclxcbiAgICAuc2xpZDF7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTUlLDE5MCUgMjUlLCBhdXRvO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tLCAxMDAlIGJvdHRvbTtcXHJcXG4gICAgfVxcclxcbiAgICAuZGl2QXJyb3dEb3duLCAuZGl2QXJyb3dVUHtcXHJcXG4gICAgICAgIHdpZHRoOiAzZW07XFxyXFxuICAgICAgICBoZWlnaHQ6IDNlbTtcXHJcXG4gICAgICAgIGxlZnQ6IGNhbGMoMTAwdncgLSAzZW0pO1xcclxcbiAgICB9XFxyXFxuICAgIC5zbGlkM3tcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggNDBweCA1cHggcmdiYSgxOCwgMzAsIDYyLCAwLjYpIDtcXHJcXG5cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyA9IHJlcXVpcmUoXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2xpZGVyLmNzc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzJfX18gPSByZXF1aXJlKFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NsaWRlXzEuY3NzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfM19fXyA9IHJlcXVpcmUoXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2xpZGVfMi5jc3NcIik7XG52YXIgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF80X19fID0gcmVxdWlyZShcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zbGlkZV8zLmNzc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzVfX18gPSByZXF1aXJlKFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NsaWRlXzQuY3NzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfNl9fXyA9IHJlcXVpcmUoXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL2ZvbnRzL2ZvbnQuY3NzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfN19fXyA9IHJlcXVpcmUoXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9kYWwuY3NzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCIuLi9pbWcvbWVudV93aGl0ZS5wbmdcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbmV4cG9ydHMuaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuZXhwb3J0cy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyk7XG5leHBvcnRzLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fKTtcbmV4cG9ydHMuaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzNfX18pO1xuZXhwb3J0cy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfNF9fXyk7XG5leHBvcnRzLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF81X19fKTtcbmV4cG9ydHMuaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzZfX18pO1xuZXhwb3J0cy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfN19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdHtcXHJcXG4gICAgLS12aCA6IDE7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0tdmgsIDF2aCkgKiAxMDApO1xcclxcbiAgICB3aWR0aDogMTAwdncgIWltcG9ydGFudDtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uZGlzcGxheUNlbnRlcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4ubm9uZXtcXHJcXG4gICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuIH1cXHJcXG5oMXtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlNlZ29lIFByaW50IEJvbGRcXFwiO1xcclxcbiAgICBmb250LXNpemU6IDJlbTtcXHJcXG59XFxyXFxuaDJ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBQcmludCBCb2xkXFxcIjtcXHJcXG4gICAgZm9udC1zaXplOiAyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG59XFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG4ubWVudS1idG4ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IDk5OTk5O1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGhlaWdodDogNjBweDtcXHJcXG4gICAgd2lkdGg6IDYwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQwcHggNTBweDtcXHJcXG59XFxyXFxuLm1lbnVPcGVue1xcclxcbiAgICBhbGlnbi1pdGVtczogbm9ybWFsICFpbXBvcnRhbnQ7XFxyXFxuICAgIGFsaWduLWNvbnRlbnQ6IG5vcm1hbCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxyXFxuICAgIGgye1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjdlbSAhaW1wb3J0YW50O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi4vSGFuZ2luZyBMZXR0ZXJzLnR0ZlwiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IHJlcXVpcmUoXCIuL1NlZ29lIFByaW50IEJvbGQudHRmXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxyXFxuIGZvbnQtZmFtaWx5OiAnSGFuZ2luZyBMZXR0ZXJzJztcXHJcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbn1cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBQcmludCBCb2xkXFxcIjtcXHJcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0ICcuLi9jc3Mvc3R5bGUuY3NzJztcclxuaW1wb3J0IEFycm93RG93biBmcm9tICcuLi9pbWcvZG93bkFycm93LnBuZyc7XHJcbmltcG9ydCBBcnJvd1VwIGZyb20gJy4uL2ltZy91cEFycm93LnBuZyc7XHJcbmltcG9ydCBzbGlkMSBmcm9tIFwiLi9zbGlkZXMvc2xpZGUxXCI7XHJcbmltcG9ydCBzbGlkMiBmcm9tIFwiLi9zbGlkZXMvc2xpZGUyXCI7XHJcbmltcG9ydCBzbGlkMyBmcm9tIFwiLi9zbGlkZXMvc2xpZGUzXCI7XHJcbmltcG9ydCBzbGlkNCBmcm9tIFwiLi9zbGlkZXMvc2xpZGU0XCI7XHJcbmltcG9ydCBzbGlkNSBmcm9tIFwiLi9zbGlkZXMvc2xpZGU1XCI7XHJcblxyXG5jb25zdCBvYmogPSB7XHJcbiAgICBjb250YWluZXIgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyksXHJcbiAgICBtZW51QnV0dG9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1idG4nKSxcclxuICAgIGRpdkFycm93VXA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXZBcnJvd1VQJyksXHJcbiAgICBkaXZBcnJvd0Rvd246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXZBcnJvd0Rvd24nKSxcclxuICAgIG1vZGFsV2luZG93OiBudWxsLFxyXG4gICAgb3Blbk1vZGFsICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0cycpLFxyXG4gICAgY2xvc2VNb2RhbCA6IG51bGwsXHJcbiAgICBjb250YWN0cyAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0NvbnRhY3RzJyksXHJcbiAgICB0ZW1wbGF0ZSAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjVGVtcGxhdGVzJyksXHJcbiAgICBBcnJvd1VwICAgOiBuZXcgSW1hZ2UoKSxcclxuICAgIEFycm93RG93biA6IG5ldyBJbWFnZSgpLFxyXG4gICAgbWFzc1NsaWRlczogW10sXHJcbiAgICBpbmRleCAgICAgOiBudWxsLFxyXG4gICAgaW5pdGlhbFggIDogbnVsbCxcclxuICAgIGluaXRpYWxZICA6bnVsbFxyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIHNsaWRlckNvbnRhaW5lcigpe1xyXG5cclxuICAgIGNvbnN0IGNvbnQgPSBvYmouY29udGFpbmVyO1xyXG4gICAgY29udC5hcHBlbmRDaGlsZChzbGlkNSk7XHJcbiAgICBjb250LmFwcGVuZENoaWxkKHNsaWQ0KTtcclxuICAgIGNvbnQuYXBwZW5kQ2hpbGQoc2xpZDMpO1xyXG4gICAgY29udC5hcHBlbmRDaGlsZChzbGlkMik7XHJcbiAgICBjb250LmFwcGVuZENoaWxkKHNsaWQxKTtcclxuXHJcbiAgICBvYmoubWFzc1NsaWRlcyA9IGNvbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWQnKTtcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gYXJyb3dCdXR0b25zKCkge1xyXG5cclxuICAgIGNvbnN0IGRpdkFycm93VXAgPSBvYmouZGl2QXJyb3dVcCxcclxuICAgICAgICAgIGRpdkFycm93RG93biA9IG9iai5kaXZBcnJvd0Rvd247XHJcblxyXG4gICAgb2JqLkFycm93VXAuc3JjID0gQXJyb3dVcDtcclxuICAgIG9iai5BcnJvd1VwLmFsdCA9ICdhcnJvd1VwJztcclxuICAgIGRpdkFycm93VXAuYXBwZW5kQ2hpbGQoIG9iai5BcnJvd1VwKTtcclxuXHJcbiAgICBvYmouQXJyb3dEb3duLnNyYyA9IEFycm93RG93bjtcclxuICAgIG9iai5BcnJvd0Rvd24uYWx0ID0gJ2Fycm93RG93bic7XHJcbiAgICBkaXZBcnJvd0Rvd24uYXBwZW5kQ2hpbGQob2JqLkFycm93RG93bik7XHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBsYXN0SXRlbU9mQXJyKCkge1xyXG4gICBjb25zdCBpbmRleCA9IG9iai5pbmRleDtcclxuXHJcbiAgIGlmKGluZGV4ID09PSAyICYmIG9iai5kaXZBcnJvd1VwLmNsYXNzTGlzdC5jb250YWlucygnbm9uZScpKSB7XHJcbiAgICAgICBvYmouZGl2QXJyb3dVcC5jbGFzc0xpc3QucmVtb3ZlKCdub25lJyk7XHJcbiAgICAgICBvYmouZGl2QXJyb3dEb3duLmNsYXNzTGlzdC5hZGQoJ25vbmUnKTtcclxuICAgICAgIHJldHVybjtcclxuICAgfVxyXG4gICBpZihpbmRleCA9PT0gMyAmJiBvYmouZGl2QXJyb3dEb3duLmNsYXNzTGlzdC5jb250YWlucygnbm9uZScpKXtcclxuICAgICAgIG9iai5kaXZBcnJvd1VwLmNsYXNzTGlzdC5hZGQoJ25vbmUnKTtcclxuICAgICAgIG9iai5kaXZBcnJvd0Rvd24uY2xhc3NMaXN0LnJlbW92ZSgnbm9uZScpO1xyXG4gICAgICAgcmV0dXJuO1xyXG5cclxuICAgfWVsc2Uge1xyXG4gICAgICAgcmV0dXJuO1xyXG4gICB9XHJcblxyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIHNsaWRlckdvVXAoaXRlbSkge1xyXG5cclxuICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5zY3JlZW4ud2lkdGggPiAxMTAwKSB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLm5leHRFbGVtZW50U2libGluZyAmJiBpdGVtLm5leHRFbGVtZW50U2libGluZyAhPT0gb2JqLmRpdkFycm93VXBcclxuICAgICAgICAgICAgICAgICYmIGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nLmlkICE9PSAnQ29udGFjdHMnKSB7XHJcbiAgICAgICAgICAgICAgICBsYXN0SXRlbU9mQXJyKCk7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnLCAndXAnKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2Rvd24nKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ3Nob3cnLCAndXAnKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLnByZXZpb3VzRWxlbWVudFNpYmxpbmcgJiYgaXRlbS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nICE9PSBvYmouZGl2QXJyb3dEb3duKSB7XHJcbiAgICAgICAgICAgICAgICBpZihpdGVtLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaWQgPT09ICdDb250YWN0cycpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsYXN0SXRlbU9mQXJyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCd1cFcnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcblxyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gc2xpZGVyR29Eb3duKGl0ZW0pIHtcclxuXHJcbiAgICBpZihpdGVtLmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5zY3JlZW4ud2lkdGggPiAxMTAwKSB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLnByZXZpb3VzRWxlbWVudFNpYmxpbmcgJiYgaXRlbS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nICE9PSBvYmouZGl2QXJyb3dEb3duXHJcbiAgICAgICAgICAgICAgICAmJiBpdGVtLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaWQgIT09ICdDb250YWN0cycpIHtcclxuICAgICAgICAgICAgICAgIGxhc3RJdGVtT2ZBcnIoKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycsICd1cCcpO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdkb3duJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5uZXh0RWxlbWVudFNpYmxpbmcgJiYgaXRlbS5uZXh0RWxlbWVudFNpYmxpbmcgIT09IG9iai5kaXZBcnJvd1VwKSB7XHJcbiAgICAgICAgICAgICAgICBpZihpdGVtLm5leHRFbGVtZW50U2libGluZy5pZCA9PT0gJ0NvbnRhY3RzJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RJdGVtT2ZBcnIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93JywgJ2Rvd25XJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ3VwVycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdzaG93JywgJ2Rvd25XJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIGNoYW5nZVNsaWRlclVQKCkge1xyXG4gICAgbGV0IG1hc3MgPSBvYmoubWFzc1NsaWRlcyxcclxuICAgICAgICBsZW4gPSBudWxsO1xyXG4gICAgICAgICh3aW5kb3cuc2NyZWVuLndpZHRoID4gMTEwMCkgPyBsZW4gPSBtYXNzLmxlbmd0aCAtIDE6IGxlbiA9IG1hc3MubGVuZ3RoO1xyXG4gICAgb2JqLkFycm93VXAuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbUJ1dHRvbicpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICBvYmouaW5kZXggPSBpO1xyXG4gICAgICAgIGlmKHNsaWRlckdvVXAobWFzc1tpXSkpe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBjaGFuZ2VTbGlkZXJET1dOKCkge1xyXG4gICAgbGV0IG1hc3MgPSBvYmoubWFzc1NsaWRlcyxcclxuICAgICAgICBsZW4gPSBudWxsO1xyXG4gICAgKHdpbmRvdy5zY3JlZW4ud2lkdGggPiAxMTAwKSA/IGxlbiA9IG1hc3MubGVuZ3RoOiBsZW4gPSBtYXNzLmxlbmd0aC0xO1xyXG4gICAgb2JqLkFycm93VXAuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbUJ1dHRvbicpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGVuOyBpKyspe1xyXG4gICAgICAgIG9iai5pbmRleCA9IGk7XHJcbiAgICAgICAgaWYoc2xpZGVyR29Eb3duKG1hc3NbaV0pKSByZXR1cm47XHJcbiAgICB9XHJcblxyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tU3dpcGUgVXAgLyBEb3duIC8gTGVmdCAvIFJpZ2h0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBzdGFydFRvdWNoKGUpIHtcclxuICAgICAgIG9iai5pbml0aWFsWCA9IGUudG91Y2hlc1swXS5jbGllbnRYO1xyXG4gICAgICAgb2JqLmluaXRpYWxZID0gZS50b3VjaGVzWzBdLmNsaWVudFk7XHJcbn1cclxuZnVuY3Rpb24gbW92ZVRvdWNoKGUpIHtcclxuXHJcbiAgICBpZiAob2JqLmluaXRpYWxYID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChvYmouaW5pdGlhbFkgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGN1cnJlbnRYID0gZS50b3VjaGVzWzBdLmNsaWVudFgsXHJcbiAgICAgICAgICAgIGN1cnJlbnRZID0gZS50b3VjaGVzWzBdLmNsaWVudFk7XHJcblxyXG4gICAgICAgIGxldCBkaWZmWCA9IG9iai5pbml0aWFsWCAtIGN1cnJlbnRYLFxyXG4gICAgICAgICAgICBkaWZmWSA9IG9iai5pbml0aWFsWSAtIGN1cnJlbnRZO1xyXG5cclxuXHJcblxyXG4gICAgICAgIGlmIChNYXRoLmFicyhkaWZmWCkgPiBNYXRoLmFicyhkaWZmWSkpIHtcclxuICAgICAgICAgICAgLy8gc2xpZGluZyBob3Jpem9udGFsbHlcclxuICAgICAgICAgICAgaWYgKGRpZmZYID4gMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gc3dpcGVkIGxlZnRcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIHN3aXBlZCByaWdodFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gc2xpZGluZyB2ZXJ0aWNhbGx5XHJcbiAgICAgICAgICAgIGlmIChkaWZmWSA+IDApIHtcclxuICAgICAgICAgICAgICAgIC8vIHN3aXBlZCB1cFxyXG4gICAgICAgICAgICAgICBjaGFuZ2VTbGlkZXJVUCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gc3dpcGVkIGRvd25cclxuICAgICAgICAgICAgICAgIGNoYW5nZVNsaWRlckRPV04oKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9iai5pbml0aWFsWCA9IG51bGw7XHJcbiAgICAgICAgb2JqLmluaXRpYWxZID0gbnVsbDtcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gYnV0dG9uRG93bihldmVudCkge1xyXG4gICAgaWYod2luZG93LnNjcmVlbi53aWR0aCA+IDExMDApIHtcclxuICAgICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0Fycm93RG93bicpIHtcclxuICAgICAgICAgICAgY2hhbmdlU2xpZGVyRE9XTigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0Fycm93VXAnKSB7XHJcbiAgICAgICAgICAgIGNoYW5nZVNsaWRlclVQKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdBcnJvd0Rvd24nKSB7XHJcbiAgICAgICAgICAgIGNoYW5nZVNsaWRlclVQKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC5jb2RlID09PSAnQXJyb3dVcCcpIHtcclxuICAgICAgICAgICAgY2hhbmdlU2xpZGVyRE9XTigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIG1vdXNlV2hlZWwoZSkge1xyXG5cclxuICAgIGxldCBkZWx0YSA9IGUuZGVsdGFZIHx8IGUuZGV0YWlsIHx8IGUud2hlZWxEZWx0YTtcclxuICAgIGlmKHdpbmRvdy5zY3JlZW4ud2lkdGggPiAxMTAwKXtcclxuICAgICAgICBkZWx0YSA+IDAgPyBjaGFuZ2VTbGlkZXJET1dOKClcclxuICAgICAgICAgICAgOiAgKCB3aW5kb3cub25tb3VzZXdoZWVsID0gbnVsbCAsXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VTbGlkZXJVUCgpLFxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+IHdpbmRvdy5vbm1vdXNld2hlZWwgPSBtb3VzZVdoZWVsLCA1MDApKTtcclxuICAgIH1lbHNlIHtcclxuICAgICAgICBkZWx0YSA+IDAgPyBjaGFuZ2VTbGlkZXJVUCgpXHJcbiAgICAgICAgICAgIDogICggd2luZG93Lm9ubW91c2V3aGVlbCA9IG51bGwsXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VTbGlkZXJET1dOKCksXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT4gd2luZG93Lm9ubW91c2V3aGVlbCA9IG1vdXNlV2hlZWwsIDUwMCkpO1xyXG4gICAgfVxyXG5cclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIHN0YXJ0TGlzdGVuZXIoKXtcclxuICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IGJ1dHRvbkRvd247XHJcbiAgICB3aW5kb3cub25tb3VzZXdoZWVsID0gbW91c2VXaGVlbDtcclxuICAgIGRvY3VtZW50Lm9udG91Y2hzdGFydCA9IHN0YXJ0VG91Y2g7XHJcbiAgICBkb2N1bWVudC5vbnRvdWNobW92ZSA9IG1vdmVUb3VjaDtcclxuXHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBzdG9wTGlzdGVuZXIoKXtcclxuICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IG51bGw7XHJcbiAgICB3aW5kb3cub25tb3VzZXdoZWVsID0gbnVsbDtcclxuICAgIGRvY3VtZW50Lm9udG91Y2hzdGFydCA9IG51bGw7XHJcbiAgICBkb2N1bWVudC5vbnRvdWNobW92ZSA9IG51bGw7XHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiByZW1vdmVDaGFuZ2UoaXRlbSkge1xyXG4gICAgaXRlbS5zdHlsZS50cmFuc2Zvcm0gPSAnbm9uZSc7XHJcbiAgICBpdGVtLnN0eWxlLmJvcmRlclJhZGl1cyA9IGAwYDtcclxuICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnbWVudU9wZW4nKTtcclxufVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gY2hvb3NlUGFnZShlKSB7XHJcbiAgICBsZXQgbWFzcyA9IG9iai5tYXNzU2xpZGVzLFxyXG4gICAgICAgIGlkID0gdGhpcy5pZCxcclxuICAgICAgICBmbGFnID0gZmFsc2UsXHJcbiAgICAgICAgbGVuID0gbWFzcy5sZW5ndGg7XHJcblxyXG5cclxuICAgIGZvciAobGV0IGkgPSBsZW4tMTsgaSA+IDA7IGktLSl7XHJcblxyXG4gICAgICAgIGlmKGlkID09PSAnQ29udGFjdHMnKSB7XHJcbiAgICAgICAgICAgIGNsb3NlTWVudShtYXNzW2ldKTtcclxuICAgICAgICAgICAgbW9kYWxXaW5kb3coKTtcclxuXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmKG1hc3NbaV0uaWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICBvYmouaW5kZXggPSBpO1xyXG4gICAgICAgICAgICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgbWFzc1tpXS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcbiAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgbGFzdEl0ZW1PZkFycigpO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2hhbmdlKG1hc3NbaV0pO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZihmbGFnKXtcclxuICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cuc2NyZWVuLndpZHRoID4gMTEwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc3NbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNzW2ldLmNsYXNzTGlzdC5hZGQoJ3VwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc3NbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cuc2NyZWVuLndpZHRoID4gMTEwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnLCAndXAnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFzc1tpXS5jbGFzc0xpc3QuYWRkKCdkb3duJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFzc1tpXS5jbGFzc0xpc3QuYWRkKCd1cFcnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDaGFuZ2UobWFzc1tpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRMaXN0ZW5lcigpO1xyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBjbG9zZU1lbnUoaXRlbSkge1xyXG4gICAgaXRlbS5zdHlsZS50cmFuc2Zvcm0gPSAnbm9uZSc7XHJcbiAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnVPcGVuJyk7XHJcbiAgICBpdGVtLnN0eWxlLmJvcmRlclJhZGl1cyA9IGAwYDtcclxuICAgIG9iai5kaXZBcnJvd0Rvd24uY2xhc3NMaXN0LnJlbW92ZSgnbm9uZScpO1xyXG4gICAgaXRlbS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNob29zZVBhZ2UpO1xyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gbWVudVNob3coKSB7XHJcblxyXG4gICAgY29uc3QgbWFzcyA9IG9iai5tYXNzU2xpZGVzLFxyXG4gICAgICAgIGxlbiA9IG1hc3MubGVuZ3RoO1xyXG4gICAgbGV0IHRyYW5zRm9ybSA9IDA7XHJcblxyXG4gICAgICAgIG1hc3MuZm9yRWFjaCggZWwgPT4ge1xyXG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCd1cCcsICdkb3duJywgJ3VwVycsICdkb3duVycsJ3Nob3cnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBtYXNzW2xlbi0xXS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspe1xyXG5cclxuICAgICAgICBpZighbWFzc1tpXS5zdHlsZS50cmFuc2Zvcm0gfHwgbWFzc1tpXS5zdHlsZS50cmFuc2Zvcm0gPT09ICdub25lJyl7XHJcbiAgICAgICAgICAgIGlmKGkpe1xyXG4gICAgICAgICAgICAgICAgd2luZG93LnNjcmVlbi53aWR0aCA8IDExMDAgPyB0cmFuc0Zvcm0gKz0gNzAgOiB0cmFuc0Zvcm0gKz0gODA7XHJcbiAgICAgICAgICAgICAgICBtYXNzW2ldLnN0eWxlLmJvcmRlclJhZGl1cyA9IGA4cHggOHB4IDAgMGA7XHJcbiAgICAgICAgICAgICAgICBtYXNzW2ldLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7dHJhbnNGb3JtfXB4KWA7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1hc3NbaV0uY2xhc3NMaXN0LmFkZCgnbWVudU9wZW4nKTtcclxuICAgICAgICAgICAgbWFzc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNob29zZVBhZ2UpO1xyXG4gICAgICAgICAgICBvYmouZGl2QXJyb3dEb3duLmNsYXNzTGlzdC5hZGQoJ25vbmUnKTtcclxuICAgICAgICAgICAgb2JqLmRpdkFycm93VXAuY2xhc3NMaXN0LmFkZCgnbm9uZScpO1xyXG4gICAgICAgICAgICBzdG9wTGlzdGVuZXIoKTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIGNsb3NlTWVudShtYXNzW2ldKTtcclxuICAgICAgICAgICAgc3RhcnRMaXN0ZW5lcigpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gY3JlYXRNb2RhbFdpbmRvdygpIHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgICAgICAgc3RyID0gYDxkaXYgY2xhc3M9XCJtb2RhbEZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj7QodCy0Y/QttC40YLQtdGB0Ywg0YEg0L3QsNC80Lg8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Ta3lwZTogX19fX19fX19fX19fX19fX188L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5WaWJlOiBfX19fX19fX19fX19fX19fX188L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UZWxlZ3JhbTogX19fX19fX19fX19fX188L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuXCI+0JfQsNC60YDRi9GC0Yw8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcclxuXHJcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsJ21vZGFsJyk7XHJcbiAgICBkaXYuaW5uZXJIVE1MID0gc3RyO1xyXG4gICAgb2JqLm1vZGFsV2luZG93ID0gZGl2O1xyXG4gICAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoZGl2LG9iai5jb250YWluZXIubmV4dEVsZW1lbnRTaWJsaW5nKTtcclxuICAgIG9iai5jbG9zZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bicpO1xyXG59XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIG1vZGFsV2luZG93KCl7XHJcbiAgICBjb25zdCBtb2RhbCA9IG9iai5tb2RhbFdpbmRvdyxcclxuICAgICAgICAgIGJ0bkNsb3NlID0gb2JqLmNsb3NlTW9kYWw7XHJcblxyXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWxBY3RpdmUnKTtcclxuICAgIHN0b3BMaXN0ZW5lcigpO1xyXG4gICAgYnRuQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcclxuICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbEFjdGl2ZScpO1xyXG4gICAgICAgIHN0YXJ0TGlzdGVuZXIoKTtcclxuICAgIH0pO1xyXG59XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbm9iai5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWVudVNob3cpO1xyXG5sZXQgdmggPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjAxO1xyXG4vLyBUaGVuIHdlIHNldCB0aGUgdmFsdWUgaW4gdGhlIC0tdmggY3VzdG9tIHByb3BlcnR5IHRvIHRoZSByb290IG9mIHRoZSBkb2N1bWVudFxyXG5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmgnLCBgJHt2aH1weGApO1xyXG4vL1xyXG4vLyDRgdC70YPRiNCw0LXQvCDRgdC+0LHRi9GC0LjQtSByZXNpemVcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgIC8vINC/0L7Qu9GD0YfQsNC10Lwg0YLQtdC60YPRidC10LUg0LfQvdCw0YfQtdC90LjQtSDQstGL0YHQvtGC0YtcclxuICAgIGxldCB2aCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMDE7XHJcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmgnLCBgJHt2aH1weGApO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIG9yaWVudGF0aW9uU2NyZWVuKCl7XHJcbiAgICBsZXQgbG9jayA9IHdpbmRvdy5zY3JlZW4ub3JpZW50YXRpb24ubG9jayhcInBvcnRyYWl0XCIpfHwgd2luZG93LnNjcmVlbi5sb2NrT3JpZW50YXRpb24oXCJwb3J0cmFpdFwiKTtcclxuICAgIHJldHVybiBsb2NrO1xyXG59XHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5zbGlkZXJDb250YWluZXIoKTtcclxuY3JlYXRNb2RhbFdpbmRvdygpO1xyXG5hcnJvd0J1dHRvbnMoKTtcclxuc3RhcnRMaXN0ZW5lcigpO1xyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IENhdCBmcm9tICcuLi8uLi9pbWcvY2F0LnBuZyc7XHJcbmltcG9ydCBNb29uIGZyb20gJy4uLy4uL2ltZy9Nb29uLnBuZyc7XHJcbmltcG9ydCBzdGFyIGZyb20gJy4uLy4uL2ltZy9zdGFyLnBuZyc7XHJcbmltcG9ydCAgQ29tbWVudCBmcm9tICcuLi8uLi9pbWcvY29tbWVudFRleHQucG5nJztcclxuaW1wb3J0IHNuYWlsIGZyb20gJy4uLy4uL2ltZy9ncmFzc1NuYWlsLnBuZyc7XHJcblxyXG5jb25zdCBvYmogPSB7XHJcbiAgICBzbGlkZSAgICA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgbWFpbiAgICAgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgIHRvcEJsb2NrIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICBib3R0b21CbG9jayA6ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICBibG9ja0NhdCA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgYmxvY2tNb29uOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgIGNhdCAgICAgIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICBjb21tICAgICA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgd29yZHNCbG9jazogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICBpbmJsV29yZHMgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgIGxlZnQgOiAzMCxcclxuICAgIENhdCAgOiBuZXcgSW1hZ2UoKSxcclxuICAgIE1vb24gOiBuZXcgSW1hZ2UoKSxcclxuICAgIENvbW1lbnQgOiBuZXcgSW1hZ2UoKSxcclxuICAgIFNuYWlsIDogbmV3IEltYWdlKClcclxufVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIGFkZEltYWdlKCkge1xyXG5cclxuICAgIG9iai5Nb29uLnNyYyA9IE1vb247XHJcbiAgICBvYmouTW9vbi5hbHQgPSAnTW9vbic7XHJcbiAgICBvYmouTW9vbi5jbGFzc0xpc3QuYWRkKCdtb29uJyk7XHJcbiAgICBvYmouYmxvY2tNb29uLmFwcGVuZENoaWxkKG9iai5Nb29uKTtcclxuXHJcbiAgICBvYmouQ2F0LnNyYyA9IENhdDtcclxuICAgIG9iai5DYXQuYWx0ID0gJ0NhdCc7XHJcbiAgICBvYmouY2F0LmFwcGVuZENoaWxkKG9iai5DYXQpO1xyXG5cclxuICAgIG9iai5Db21tZW50LnNyYyA9IENvbW1lbnQ7XHJcbiAgICBvYmouQ29tbWVudC5hbHQgPSAnQ29tbWVudCc7XHJcbiAgICBvYmouY29tbS5hcHBlbmRDaGlsZChvYmouQ29tbWVudCk7XHJcblxyXG4gICAgb2JqLlNuYWlsLnNyYyA9IHNuYWlsO1xyXG4gICAgb2JqLlNuYWlsLmFsdCA9ICdTbmFpbCc7XHJcbiAgICBvYmouU25haWwuY2xhc3NMaXN0LmFkZCgnZ3Jhc3MnKTtcclxuICAgIG9iai5tYWluLmFwcGVuZENoaWxkKG9iai5TbmFpbCk7XHJcblxyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBjbG91ZHNJbWcoKSB7XHJcbiAgICBsZXQgZGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgICAgIGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgICAgICBkaXYzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgZGl2MS5jbGFzc0xpc3QuYWRkKCdjbG91ZDEnLCdjbG91ZCcsICdtb3ZlQ2xvdWRfMScpO1xyXG4gICAgb2JqLm1haW4uYXBwZW5kQ2hpbGQoZGl2MSk7XHJcblxyXG4gICAgZGl2Mi5jbGFzc0xpc3QuYWRkKCdjbG91ZDInLCAnY2xvdWQnLCAnbW92ZUNsb3VkXzInKTtcclxuICAgIG9iai5tYWluLmFwcGVuZENoaWxkKGRpdjIpO1xyXG5cclxuICAgIGRpdjMuY2xhc3NMaXN0LmFkZCgnY2xvdWQzJywgJ2Nsb3VkJywgJ21vdmVDbG91ZF8zJyk7XHJcbiAgICBvYmoubWFpbi5hcHBlbmRDaGlsZChkaXYzKTtcclxuXHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gbW92ZU1vb24oKSB7XHJcbiAgICBsZXQgbW9vbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb29uJyksXHJcbiAgICAgICAgdHJhbnNmID0gKG1vb24uc3R5bGUudHJhbnNmb3JtKS5yZXBsYWNlKC9yb3RhdGVcXCgvLCcnKSxcclxuICAgICAgICBudW0gPSB0cmFuc2YucmVwbGFjZSgvZGVnXFwpLywnJyk7XHJcbiAgICAgICBudW0gPSBOdW1iZXIobnVtKSArICAwLjU7XHJcbiAgICBpZihtb29uLnN0eWxlLnRyYW5zZm9ybSA9PT0gJycpe1xyXG4gICAgICAgIG51bSA9IDA7XHJcbiAgICB9XHJcbiAgICBtb29uLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoJHtudW19ZGVnKWA7XHJcblxyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBjaGFuZ2VQb3NpdGlvblN0YXJzKCkge1xyXG4gICAgbGV0IG1hc3NTdGFycyA9IG9iai5tYWluLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdGFyJyk7XHJcblxyXG4gICAgIGZvcihsZXQgaSA9IDA7IGkgPCBtYXNzU3RhcnMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICBsZXQgdG9wID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKig0MCAtIDUpICsgNSksXHJcbiAgICAgICAgICAgICBsZWZ0ID0gIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSooMTAwIC0gMSkgKyAxKTtcclxuICAgICAgICAgICAgIG1hc3NTdGFyc1tpXS5zdHlsZS50b3AgPSB0b3AgKyAnJSc7XHJcbiAgICAgICAgICAgICBtYXNzU3RhcnNbaV0uc3R5bGUubGVmdCA9IGxlZnQgKyAnJSc7XHJcbiAgICAgfVxyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBwb3NpdGlvblN0YXIobmV3U3Rhcikge1xyXG5cclxuICAgIGxldCB0b3AgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqKDQwIC0gNSkgKyA1KSxcclxuICAgICAgICBsZWZ0ID0gIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSooMTAwIC0gMSkgKyAxKTtcclxuXHJcbiAgICAgICAgbmV3U3Rhci5zdHlsZS50b3AgPSB0b3AgKyAnJSc7XHJcbiAgICAgICAgbmV3U3Rhci5zdHlsZS5sZWZ0ID0gbGVmdCArICclJztcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gc2l6ZVN0YXIoKSB7XHJcbiAgICBsZXQgc2l6ZSA9IDQwO1xyXG4gICAgaWYod2luZG93LnNjcmVlbi53aWR0aCA8IDEwMDApe1xyXG4gICAgICAgIHNpemUgPSAyMDtcclxuICAgIH1cclxuICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqKHNpemUgLSA1KSArIDUpO1xyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gc3RhcnMoKSB7XHJcblxyXG4gICAgbGV0IGFtb3VudCA9IDA7XHJcblxyXG4gICAgaWYod2luZG93LnNjcmVlbi53aWR0aCA8IDEwMDApe1xyXG4gICAgICAgIGFtb3VudCA9IE1hdGgucmFuZG9tKCkqKDEwIC0gNSkgKyA1O1xyXG4gICAgfWVsc2Uge1xyXG4gICAgICAgIGFtb3VudCA9IE1hdGgucmFuZG9tKCkqKDIwIC0gMTApICsgMTA7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLnJvdW5kKGFtb3VudCk7IGkrKyl7XHJcbiAgICAgICAgbGV0IFN0YXIgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgU3Rhci5zcmMgPSBzdGFyO1xyXG4gICAgICAgICBTdGFyLmFsdCA9ICdzdGFyJztcclxuICAgICAgICAgU3Rhci5jbGFzc0xpc3QuYWRkKCdzdGFyJyk7XHJcbiAgICAgICAgIFN0YXIuc3R5bGUuaGVpZ2h0ID0gc2l6ZVN0YXIoKSArICdweCc7XHJcbiAgICAgICAgIHBvc2l0aW9uU3RhcihTdGFyKTtcclxuICAgICAgICAgb2JqLm1haW4uYXBwZW5kQ2hpbGQoU3Rhcik7XHJcblxyXG4gICAgfVxyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gd29yZHMoKSB7XHJcbiAgICBsZXQgbWFzc1dvcmRzID0gWycmbHQ7Yj4nLCAnJmx0O2gxPicsICcmbHQ7ZGl2PicsICcmbHQ7cD4nXSxcclxuICAgICAgICBkaXYgPSBvYmouaW5ibFdvcmRzLFxyXG4gICAgICAgIGxlZnQgPSAwLFxyXG4gICAgICAgIHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyksXHJcbiAgICAgICAgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXNzV29yZHMubGVuZ3RoKSxcclxuICAgICAgICBsZW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNSAtIDIpICsgMiksXHJcbiAgICAgICAgbnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEzNSAtIDYwKSArIDYwKTtcclxuXHJcbiAgICAgICAgbnVtIDwgOTAgPyBsZWZ0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDkwIC0gNDUpICsgNDUpOlxyXG4gICAgICAgICAgICAgICAgICAgbGVmdCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMjUgLSA5MCkgKyA5MCk7XHJcbiAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tbGVmdCcsIGAke2xlZnR9JWApO1xyXG4gICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLW51bScsIGAke251bX1kZWdgKTtcclxuXHJcblxyXG4gICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgICAgICAgICBzcGFuLmlubmVySFRNTCA9IGAke21hc3NXb3Jkc1tpbmRleF19YDtcclxuICAgICAgICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChzcGFuKTtcclxuICAgICAgICAgICAgICAgICAgIC8vIHNwYW4uc3R5bGUubGVmdCA9IG51bSArICclJztcclxuICAgICAgICAgICAgICAgICAgIC8vIHNwYW4uc3R5bGUudG9wID0gJzExMCUnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZCgnbW92ZVcnKTtcclxuXHJcbiAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntzcGFuLnJlbW92ZSgpO30sMTAwMDApO1xyXG5cclxuICAgICAgICAgICB9XHJcblxyXG4gICAgLy8gc3Bhbi5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7bnVtfWRlZylgO1xyXG5cclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gY29udGFpbmVyKCkge1xyXG4gICAgY29uc3Qgc2xpZDEgPSBvYmouc2xpZGUsXHJcbiAgICAgICAgICBtYWluICA9IG9iai5tYWluLFxyXG4gICAgICAgICAgdG9wQmwgPSBvYmoudG9wQmxvY2ssXHJcbiAgICAgICAgICBidHRtQmwgPSBvYmouYm90dG9tQmxvY2ssXHJcbiAgICAgICAgICBibG9ja0NhdCA9IG9iai5ibG9ja0NhdCxcclxuICAgICAgICAgIGJsb2NrTW9vbiA9IG9iai5ibG9ja01vb24sXHJcbiAgICAgICAgICBibG9ja1dvcmRzID0gb2JqLndvcmRzQmxvY2ssXHJcbiAgICAgICAgICBpbmJsVyA9IG9iai5pbmJsV29yZHMsXHJcbiAgICAgICAgICBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKSxcclxuICAgICAgICAgIGNhdCA9IG9iai5jYXQsXHJcbiAgICAgICAgICBjb21tID0gb2JqLmNvbW07XHJcblxyXG4gICAgc2xpZDEuY2xhc3NMaXN0LmFkZCgnc2xpZCcsICdzbGlkMScsICdzaG93Jyk7XHJcbiAgICBzbGlkMS5zdHlsZS5oZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ICsgJ3B4JztcclxuICAgIHNsaWQxLmlkID0gJ01haW4nO1xyXG5cclxuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbkRpdicpO1xyXG4gICAgc2xpZDEuYXBwZW5kQ2hpbGQobWFpbik7XHJcblxyXG4gICAgdG9wQmwuY2xhc3NMaXN0LmFkZCgndG9wQmxvY2snKTtcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQodG9wQmwpO1xyXG5cclxuICAgIGJ0dG1CbC5jbGFzc0xpc3QuYWRkKCdib3R0b21CbG9jaycpO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChidHRtQmwpO1xyXG5cclxuICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgnaDEnKTtcclxuICAgIG5hbWUuaW5uZXJIVE1MID0gJ0FOWSBXRUInO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChuYW1lKTtcclxuXHJcblxyXG4gICAgYmxvY2tDYXQuY2xhc3NMaXN0LmFkZCgnYmxvY2tDYXQnKTtcclxuICAgIGJ0dG1CbC5hcHBlbmRDaGlsZChibG9ja0NhdCk7XHJcblxyXG4gICAgY2F0LmNsYXNzTGlzdC5hZGQoJ2NhdCcpO1xyXG4gICAgY29tbS5jbGFzc0xpc3QuYWRkKCdjb21tZW50Jyk7XHJcbiAgICBibG9ja0NhdC5hcHBlbmRDaGlsZChjYXQpO1xyXG4gICAgYmxvY2tDYXQuYXBwZW5kQ2hpbGQoY29tbSk7XHJcblxyXG4gICAgYmxvY2tNb29uLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrTW9vbicpO1xyXG4gICAgdG9wQmwuYXBwZW5kQ2hpbGQoYmxvY2tNb29uKTtcclxuXHJcbiAgICBibG9ja1dvcmRzLmNsYXNzTGlzdC5hZGQoJ3dvcmRzQmxvY2snKTtcclxuICAgIGJsb2NrV29yZHMuYXBwZW5kQ2hpbGQoaW5ibFcpO1xyXG4gICAgYnR0bUJsLmFwcGVuZENoaWxkKGJsb2NrV29yZHMpO1xyXG5cclxuICAgIGFkZEltYWdlKCk7XHJcbiAgICBzdGFycygpO1xyXG4gICAgY2xvdWRzSW1nKCk7XHJcbiAgICBzZXRJbnRlcnZhbChjaGFuZ2VQb3NpdGlvblN0YXJzLCAyMDAwMCk7XHJcbiAgICBzZXRJbnRlcnZhbChtb3ZlTW9vbiwxMDAwMCk7XHJcbiAgICBzZXRJbnRlcnZhbChtb3ZlTW9vbiwxMDAwMCk7XHJcbiAgICBzZXRJbnRlcnZhbCh3b3JkcywgNTAwMCk7XHJcblxyXG59XHJcblxyXG5jb250YWluZXIoKTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBvYmouc2xpZGU7IiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IENhdFdlT2ZmZXIgZnJvbSAnLi4vLi4vaW1nL2NhdFdlT2ZmZmVyLnBuZyc7XHJcbmltcG9ydCBNb29uV2VPZmZlciBmcm9tICcuLi8uLi9pbWcvbW9vbldlT2ZmZXIucG5nJztcclxuaW1wb3J0IFN1biBmcm9tICcuLi8uLi9pbWcvc3VuLnBuZyc7XHJcbmltcG9ydCBCYWNrZ3JvdW5kSG9tZSBmcm9tICcuLi8uLi9pbWcvYmFja0dyb3VuZC1taW4ucG5nJztcclxuaW1wb3J0IEdyYXNzIGZyb20gJy4uLy4uL2ltZy9ncmFzcy5wbmcnO1xyXG5pbXBvcnQgQ2lyY2xlIGZyb20gJy4uLy4uL2ltZy9jaXJjbGUucG5nJztcclxuaW1wb3J0IHN2Z0pTT04gZnJvbSAnLi4vLi4vanNvbi9zdmcuanNvbic7XHJcblxyXG5jb25zdCBzbGlkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuc2xpZDIuY2xhc3NMaXN0LmFkZCgnc2xpZCcsICdzbGlkMicpO1xyXG5zbGlkMi5zdHlsZS5oZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ICsgJ3B4Jztcclxuc2xpZDIuaWQgPSAnV2Ugc3VwcG9zZSc7XHJcblxyXG4vLyBjcmVhdGUgZWxlbWVudHMgZm9yIHNsaWRlIFdlIG9mZmVyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuY29uc3QgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlciA9IHtcclxuICAgIHRpdGxlV2VPZmZlciA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyksXHJcbiAgICB0ZXh0VGl0bGVXZU9mZmVyIDogZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ9Cc0Ysg0L/RgNC10LTQu9Cw0LPQsNC10LwnKSxcclxuXHJcbiAgICBibG9ja1NWR1dlT2ZmZXIgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgIG1vZGFsV2luZG93SW50ZXJuZXRTaG9wIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICBtb2RhbFdpbmRvd1NpdGVDb21wYW55IDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICBtb2RhbFdpbmRvd0Jsb2cgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgIG1vZGFsV2luZG93UG9ydGZvbGlvIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICBtb2RhbFdpbmRvd1NvY2lhbE5ldHdvcmsgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgIG1vZGFsV2luZG93Rm9ydW0gOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgIG1vZGFsV2luZG93TGFuZGluZyA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgbW9kYWxXaW5kb3dHYW1lU291cnMgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHJcbiAgICBjb250YWluZXJNb2RhbEludGVybmV0U2hvcCA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgY29udGFpbmVyTW9kYWxTaXRlQ29tcGFueSA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgY29udGFpbmVyTW9kYWxCbG9nIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICBjb250YWluZXJNb2RhbFBvcnRmb2xpbyA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgY29udGFpbmVyTW9kYWxTb2NpYWxOZXR3b3JrIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICBjb250YWluZXJNb2RhbEZvcnVtIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICBjb250YWluZXJNb2RhbExhbmRpbmcgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgIGNvbnRhaW5lck1vZGFsR2FtZVNvdXJzIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblxyXG4gICAgYmxvY2tUZXh0TW9kYWxJbnRlcm5ldFNob3AgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyksXHJcbiAgICBibG9ja1RleHRNb2RhbFNpdGVDb21wYW55IDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLFxyXG4gICAgYmxvY2tUZXh0TW9kYWxCbG9nIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLFxyXG4gICAgYmxvY2tUZXh0TW9kYWxQb3J0Zm9saW8gOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyksXHJcbiAgICBibG9ja1RleHRNb2RhbFNvY2lhbE5ldHdvcmsgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyksXHJcbiAgICBibG9ja1RleHRNb2RhbEZvcnVtIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLFxyXG4gICAgYmxvY2tUZXh0TW9kYWxMYW5kaW5nIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLFxyXG4gICAgYmxvY2tUZXh0TW9kYWxHYW1lU291cnMgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyksXHJcblxyXG4gICAgYnV0dG9uTW9kYWxJbnRlcm5ldFNob3AgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSxcclxuICAgIGJ1dHRvbk1vZGFsU2l0ZUNvbXBhbnkgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSxcclxuICAgIGJ1dHRvbk1vZGFsQmxvZyA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpLFxyXG4gICAgYnV0dG9uTW9kYWxQb3J0Zm9saW8gOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSxcclxuICAgIGJ1dHRvbk1vZGFsU29jaWFsTmV0d29yayA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpLFxyXG4gICAgYnV0dG9uTW9kYWxGb3J1bSA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpLFxyXG4gICAgYnV0dG9uTW9kYWxMYW5kaW5nIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyksXHJcbiAgICBidXR0b25Nb2RhbEdhbWVTb3VycyA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpLFxyXG5cclxuICAgIENhdFdlT2ZmZXIgOiBuZXcgSW1hZ2UoKSxcclxuICAgIE1vb25XZU9mZmVyIDogbmV3IEltYWdlKCksXHJcbiAgICBTdW4gOiBuZXcgSW1hZ2UoKSxcclxuICAgIEJhY2tncm91bmRIb21lIDogbmV3IEltYWdlKCksXHJcbiAgICBHcmFzcyA6IG5ldyBJbWFnZSgpLFxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuXHJcbi8vIHRleHQgZm9yIG1vZGFsIHdpbmRvd3MgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuY29uc3QgY3JlYXRlVGV4dEZvck1vZGFsV2luZG93cyA9IHtcclxuICAgIHRleHRNb2RhbEludGVybmV0U2hvcCA6IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCfQl9C00LXRgdGMINGB0LvQvtCy0LAg0LjQt9C70LjRiNC90LguINCW0LXQu9Cw0LXRgtC1INC/0YDQvtC00LDRgtGMPyDQn9C+0LzQvtC20LXQvCEnKSxcclxuICAgIHRleHRNb2RhbFNpdGVDb21wYW55IDogZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ9CjINCS0LDRgSDQtdGB0YLRjCDRhNC40YDQvNCwINC90L4g0LfQvdCw0LXRgtC1INC+INC90LXQuSDRgtC+0LvRjNC60L4g0LLRiyDQuCDRgdC+0YHQtdC0PyDQodC00LXQu9Cw0LnRgtC1INGB0LDQudGCIC0g0Y3RgtC+INGI0LDQsyDQstC+INCy0YHQtdC80LjRgNC90YPRjiDQv9Cw0YPRgtC40L3RgyEnKSxcclxuICAgIHRleHRNb2RhbEJsb2cgOiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgn0JIg0LTRg9GI0LUg0JLRiyDQsdC70L7Qs9C10YAg0Lgg0YXQvtGC0LjRgtC1INC40LzQtdGC0Ywg0LrRg9GH0YMg0L/QvtC00L/QuNGB0YfQuNC60L7QsiDQuCDQvtGC0LLQtdGH0LDRgtGMINC90LAg0LjRhSDQutC+0LzQtdC90YLQsNGA0LjQuD8g0K3RgtC+INC90LUg0YHQu9C+0LbQvdC+IScpLFxyXG4gICAgdGV4dE1vZGFsUG9ydGZvbGlvIDogZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ9CS0LDQvCDQvdCw0LTQvtC10LvQviDRgNCw0YHQutCw0LfRi9Cy0LDRgtGMINC+INGB0LXQsdC1LiDQmNC70Lgg0LLRiyDRhdC+0YLQuNGC0LUg0YfRgtC+0LHRiyDQviDQstCw0YEg0LfQvdCw0LvQuCDQstGB0LUgLSDQn9C+0YDRgtGE0L7Qu9C40L4sINGC0LXQv9C10YDRjCDQstGB0LUg0LLQsNGI0Lgg0LTQvtGB0YLQuNC20LXQvdC40Y8g0YHQvtCx0YDQsNC90Ysg0LIg0L7QtNC90L7QvCDQvNC10YHRgtC1JyksXHJcbiAgICB0ZXh0TW9kYWxTb2NpYWxOZXR3b3JrIDogZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ9Cf0L7RgNGC0YDQtdGCINGB0LDQvNC+0LPQviDQnNCw0YDQutCwINCy0LjRgdC40YIg0YMg0LLQsNGBINCyINGB0L/QsNC70YzQvdC1LCDQtdCz0L4g0LvQvtC30YPQvdCz0Lgg0YMg0LLQsNGBINC90LAg0LfQsNGB0YLQsNCy0LrQtT8g0KLQvtCz0LTQsCDQstC/0LXRgNC10LQhINCh0L7RhtC40LDQu9GM0L3QsNGPINGB0LXRgtGMINGB0YLRgNC+0LjRgiDRgdC10LHRjyDRgdCw0LzQsCEnKSxcclxuICAgIHRleHRNb2RhbEZvcnVtIDogZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ9CS0LDRiNCwINGG0LXQu9GMINC/0L7QvNC+0YfRjCDQu9GO0LTRj9C8INC4INGB0LTQtdC70LDRgtGMINGN0YLQviDQvNC40YAg0YfQtdC8LdGC0L4g0LvRg9GH0YjQtT8g0KTQvtGA0YPQvCDRgdCw0LzQvtC1INGC0L4hINCS0L7Qv9GA0L7RgdGLINC4INC+0YLQstC10YLRiyDRgdCw0LzQuCDQvdCw0LnQtNGD0YLRgdGPIC0g0JLRiyDQtdGB0YLRjCBcItCh0YPQv9C10YAg0LzQvtC00LXRgNCw0YLQvtGAXCIhJyksXHJcbiAgICB0ZXh0TW9kYWxMYW5kaW5nIDogZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ9CS0LDRiNC4INC60LvQuNC10L3RgtGLINCy0L7RgdC90L7QstC90L7QvCDQu9GO0LHRj9GCINC70LXQvdGC0YM/INCR0LXQtyDQv9GA0L7QsdC70LXQvCAtINC70LXQvdC00LjQvdCzLCDQvdC10YIg0L7Qs9GA0LDQvdC40YfQtdC90LjQuSDQv9C+INC00LvQuNC90L3QtScpLFxyXG4gICAgdGV4dE1vZGFsR2FtZVNvdXJzIDogZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ9CS0Ysg0L/RgNC40LTRg9C80LDQu9C4INC90LXQutC60LjQuSDQuNC90YLQtdGA0LDQutGC0LjQsiDQtNC70Y8g0YDQsNC30LLQu9C10YfQtdC90LjRjyDQvtGE0LjRgdC90L7Qs9C+INC/0LvQsNC90LrRgtC+0L3QsCDQuNC70Lgg0L/RgNC+0YHRgtC+INC70Y7QsdC40LTQtdC70LXQuSDQuNC90YLQtdGA0L3QtdGCINGB0LXRgNGE0LjQvdCz0LAuINCS0LDQvCDQvdC10L7QsdGF0L7QtNC40Lwg0YHQsNC50YIg0YEg0LrRg9GH0LXQuSDRg9GB0LvQvtCy0LjQuSDQuCDRhNGD0L3QutGG0LjQuSDQtNC70Y8g0LLQvtC/0LvQvtGJ0LXQvdC40Y8g0Y3RgtC+0LPQviDQsiDQttC40LfQvdGMPyDQlNCwINC90LUg0L/RgNC+0LHQu9C10LzQsCknKSxcclxuXHJcbiAgICB0ZXh0QnV0dG9uSW50ZXJuZXRTaG9wIDogZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ+KorycpLFxyXG4gICAgdGV4dEJ1dHRvblNpdGVDb21wYW55IDogZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ+KorycpLFxyXG4gICAgdGV4dEJ1dHRvbkJsb2cgOiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgn4qivJyksXHJcbiAgICB0ZXh0QnV0dG9uUG9ydGZvbGlvIDogZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ+KorycpLFxyXG4gICAgdGV4dEJ1dHRvblNvY2lhbE5ldHdvcmsgOiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgn4qivJyksXHJcbiAgICB0ZXh0QnV0dG9uRm9ydW0gOiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgn4qivJyksXHJcbiAgICB0ZXh0QnV0dG9uTGFuZGluZyA6IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCfiqK8nKSxcclxuICAgIHRleHRCdXR0b25HYW1lU291cnMgOiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgn4qivJyksXHJcbiAgICAvLyB0ZXh0QnV0dG9uIDogZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ+KorycpLFxyXG4gICAgXHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcblxyXG4vLyBpbWcgc2xpZGUgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZnVuY3Rpb24gaW1hZ2VzU2xpZFdlT2ZmZXIoKSB7XHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLkNhdFdlT2ZmZXIuc3JjID0gQ2F0V2VPZmZlcjtcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuQ2F0V2VPZmZlci5hbHQgPSAnY2F0V2VPZmZlcic7XHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLkNhdFdlT2ZmZXIuY2xhc3NMaXN0LmFkZCgnY2F0V2VPZmZmZXInKTtcclxuICAgIHNsaWQyLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuQ2F0V2VPZmZlcik7XHJcblxyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5Nb29uV2VPZmZlci5zcmMgPSBNb29uV2VPZmZlcjtcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuTW9vbldlT2ZmZXIuYWx0ID0gJ21vb24nO1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5Nb29uV2VPZmZlci5jbGFzc0xpc3QuYWRkKCdtb29uV2VPZmZmZXInKTtcclxuICAgIHNsaWQyLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuTW9vbldlT2ZmZXIpO1xyXG5cclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuU3VuLnNyYyA9IFN1bjtcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuU3VuLmFsdCA9ICdTdW4nO1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5TdW4uY2xhc3NMaXN0LmFkZCgnc3VuV2VPZmZmZXInKTtcclxuICAgIHNsaWQyLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuU3VuKTtcclxuXHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLkJhY2tncm91bmRIb21lLnNyYyA9IEJhY2tncm91bmRIb21lO1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5CYWNrZ3JvdW5kSG9tZS5hbHQgPSAnQmFja2dyb3VuZEhvbWUnO1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5CYWNrZ3JvdW5kSG9tZS5jbGFzc0xpc3QuYWRkKCdob21lV2VPZmZmZXInKTtcclxuICAgIHNsaWQyLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuQmFja2dyb3VuZEhvbWUpO1xyXG5cclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuR3Jhc3Muc3JjID0gR3Jhc3M7XHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLkdyYXNzLmFsdCA9ICdHcmFzcyc7XHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLkdyYXNzLmNsYXNzTGlzdC5hZGQoJ2dyYXNzV2VPZmZmZXInKTtcclxuICAgIHNsaWQyLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuR3Jhc3MpO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG5cclxuLy8gZnVuY3Rpb24gZm9yIGNyZWF0ZSBwYWdlID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmZ1bmN0aW9uIGJ1aWxkUGFnZSgpIHtcclxuICAgIC8vY3JlYXRlIHRpdGxlXHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLnRpdGxlV2VPZmZlci5jbGFzc0xpc3QuYWRkKCd0aXRsZVdlT2ZmZXInKTtcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIudGl0bGVXZU9mZmVyLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIudGV4dFRpdGxlV2VPZmZlcik7XHJcbiAgICBzbGlkMi5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLnRpdGxlV2VPZmZlcik7XHJcblxyXG4gICAgLy8gY3JlYXRlIHN2Z1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5ibG9ja1NWR1dlT2ZmZXIuY2xhc3NMaXN0LmFkZCgnYmxvY2tTVkcnKTtcclxuICAgIHNsaWQyLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuYmxvY2tTVkdXZU9mZmVyKTtcclxuXHJcbiAgICAvLyBjcmVhdGUgbW9kYWwgd2luZG93IGZvciBpbnRlcm5ldCBzaG9wXHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLm1vZGFsV2luZG93SW50ZXJuZXRTaG9wLmNsYXNzTGlzdC5hZGQoJ21vZGFsV2VPZmZmZXInLCAnaW50ZXJuZXRTaG9wJyk7XHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLmNvbnRhaW5lck1vZGFsSW50ZXJuZXRTaG9wLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcldlT2ZmZmVyJyk7XHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLmJ1dHRvbk1vZGFsSW50ZXJuZXRTaG9wLmNsYXNzTGlzdC5hZGQoJ2ludGVybmV0U2hvcEJ1dHRvbicpO1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5idXR0b25Nb2RhbEludGVybmV0U2hvcC5hcHBlbmRDaGlsZChjcmVhdGVUZXh0Rm9yTW9kYWxXaW5kb3dzLnRleHRCdXR0b25JbnRlcm5ldFNob3ApO1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5jb250YWluZXJNb2RhbEludGVybmV0U2hvcC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLmJsb2NrVGV4dE1vZGFsSW50ZXJuZXRTaG9wKTtcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuY29udGFpbmVyTW9kYWxJbnRlcm5ldFNob3AuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5idXR0b25Nb2RhbEludGVybmV0U2hvcCk7XHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLmJsb2NrVGV4dE1vZGFsSW50ZXJuZXRTaG9wLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRGb3JNb2RhbFdpbmRvd3MudGV4dE1vZGFsSW50ZXJuZXRTaG9wKTtcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIubW9kYWxXaW5kb3dJbnRlcm5ldFNob3AuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5jb250YWluZXJNb2RhbEludGVybmV0U2hvcCk7XHJcbiAgICBzbGlkMi5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLm1vZGFsV2luZG93SW50ZXJuZXRTaG9wKTtcclxuXHJcbiAgICAvLyBjcmVhdGUgbW9kYWwgd2luZG93IGZvciBzaXRlIGNvbXBhbnlcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIubW9kYWxXaW5kb3dTaXRlQ29tcGFueS5jbGFzc0xpc3QuYWRkKCdtb2RhbFdlT2ZmZmVyJywgJ3NpdGVDb21wYW55Jyk7XHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLmNvbnRhaW5lck1vZGFsU2l0ZUNvbXBhbnkuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyV2VPZmZmZXInKTtcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuYnV0dG9uTW9kYWxTaXRlQ29tcGFueS5jbGFzc0xpc3QuYWRkKCdzaXRlQ29tcGFueUJ1dHRvbicpO1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5idXR0b25Nb2RhbFNpdGVDb21wYW55LmFwcGVuZENoaWxkKGNyZWF0ZVRleHRGb3JNb2RhbFdpbmRvd3MudGV4dEJ1dHRvblNpdGVDb21wYW55KTtcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuY29udGFpbmVyTW9kYWxTaXRlQ29tcGFueS5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLmJsb2NrVGV4dE1vZGFsU2l0ZUNvbXBhbnkpO1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5jb250YWluZXJNb2RhbFNpdGVDb21wYW55LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuYnV0dG9uTW9kYWxTaXRlQ29tcGFueSk7XHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLmJsb2NrVGV4dE1vZGFsU2l0ZUNvbXBhbnkuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dEZvck1vZGFsV2luZG93cy50ZXh0TW9kYWxTaXRlQ29tcGFueSk7XHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLm1vZGFsV2luZG93U2l0ZUNvbXBhbnkuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5jb250YWluZXJNb2RhbFNpdGVDb21wYW55KTtcclxuICAgIHNsaWQyLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIubW9kYWxXaW5kb3dTaXRlQ29tcGFueSk7XHJcblxyXG4gICAgLy8gY3JlYXRlIG1vZGFsIHdpbmRvdyBmb3IgQmxvZ1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5tb2RhbFdpbmRvd0Jsb2cuY2xhc3NMaXN0LmFkZCgnbW9kYWxXZU9mZmZlcicsICdibG9nJyk7XHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLmNvbnRhaW5lck1vZGFsQmxvZy5jbGFzc0xpc3QuYWRkKCdjb250YWluZXJXZU9mZmZlcicpO1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5idXR0b25Nb2RhbEJsb2cuY2xhc3NMaXN0LmFkZCgnYmxvZ0J1dHRvbicpO1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5idXR0b25Nb2RhbEJsb2cuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dEZvck1vZGFsV2luZG93cy50ZXh0QnV0dG9uQmxvZyk7XHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLmNvbnRhaW5lck1vZGFsQmxvZy5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLmJsb2NrVGV4dE1vZGFsQmxvZyk7XHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLmNvbnRhaW5lck1vZGFsQmxvZy5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLmJ1dHRvbk1vZGFsQmxvZyk7XHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLmJsb2NrVGV4dE1vZGFsQmxvZy5hcHBlbmRDaGlsZChjcmVhdGVUZXh0Rm9yTW9kYWxXaW5kb3dzLnRleHRNb2RhbEJsb2cpO1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5tb2RhbFdpbmRvd0Jsb2cuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5jb250YWluZXJNb2RhbEJsb2cpO1xyXG4gICAgc2xpZDIuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5tb2RhbFdpbmRvd0Jsb2cpO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBtb2RhbCB3aW5kb3cgZm9yIFBvcnRmb2xpb1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5tb2RhbFdpbmRvd1BvcnRmb2xpby5jbGFzc0xpc3QuYWRkKCdtb2RhbFdlT2ZmZmVyJywgJ3BvcnRmb2xpbycpO1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5jb250YWluZXJNb2RhbFBvcnRmb2xpby5jbGFzc0xpc3QuYWRkKCdjb250YWluZXJXZU9mZmZlcicpO1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5idXR0b25Nb2RhbFBvcnRmb2xpby5jbGFzc0xpc3QuYWRkKCdwb3J0Zm9saW9CdXR0b24nKTtcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuYnV0dG9uTW9kYWxQb3J0Zm9saW8uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dEZvck1vZGFsV2luZG93cy50ZXh0QnV0dG9uUG9ydGZvbGlvKTtcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuY29udGFpbmVyTW9kYWxQb3J0Zm9saW8uYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5ibG9ja1RleHRNb2RhbFBvcnRmb2xpbyk7XHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLmNvbnRhaW5lck1vZGFsUG9ydGZvbGlvLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuYnV0dG9uTW9kYWxQb3J0Zm9saW8pO1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5ibG9ja1RleHRNb2RhbFBvcnRmb2xpby5hcHBlbmRDaGlsZChjcmVhdGVUZXh0Rm9yTW9kYWxXaW5kb3dzLnRleHRNb2RhbFBvcnRmb2xpbyk7XHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLm1vZGFsV2luZG93UG9ydGZvbGlvLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuY29udGFpbmVyTW9kYWxQb3J0Zm9saW8pO1xyXG4gICAgc2xpZDIuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5tb2RhbFdpbmRvd1BvcnRmb2xpbyk7XHJcblxyXG4gICAgLy8gY3JlYXRlIG1vZGFsIHdpbmRvdyBmb3IgU29jaWFsIE5ldHdvcmtcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIubW9kYWxXaW5kb3dTb2NpYWxOZXR3b3JrLmNsYXNzTGlzdC5hZGQoJ21vZGFsV2VPZmZmZXInLCAnc29jaWFsTmV0d29yaycpO1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5jb250YWluZXJNb2RhbFNvY2lhbE5ldHdvcmsuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyV2VPZmZmZXInKTtcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuYnV0dG9uTW9kYWxTb2NpYWxOZXR3b3JrLmNsYXNzTGlzdC5hZGQoJ3NvY2lhbE5ldHdvcmtCdXR0b24nKTtcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuYnV0dG9uTW9kYWxTb2NpYWxOZXR3b3JrLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRGb3JNb2RhbFdpbmRvd3MudGV4dEJ1dHRvblNvY2lhbE5ldHdvcmspO1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5jb250YWluZXJNb2RhbFNvY2lhbE5ldHdvcmsuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5ibG9ja1RleHRNb2RhbFNvY2lhbE5ldHdvcmspO1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5jb250YWluZXJNb2RhbFNvY2lhbE5ldHdvcmsuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5idXR0b25Nb2RhbFNvY2lhbE5ldHdvcmspO1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5ibG9ja1RleHRNb2RhbFNvY2lhbE5ldHdvcmsuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dEZvck1vZGFsV2luZG93cy50ZXh0TW9kYWxTb2NpYWxOZXR3b3JrKTtcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIubW9kYWxXaW5kb3dTb2NpYWxOZXR3b3JrLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuY29udGFpbmVyTW9kYWxTb2NpYWxOZXR3b3JrKTtcclxuICAgIHNsaWQyLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIubW9kYWxXaW5kb3dTb2NpYWxOZXR3b3JrKTtcclxuXHJcbiAgICAvLyBjcmVhdGUgbW9kYWwgd2luZG93IGZvciBGb3J1bVxyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5tb2RhbFdpbmRvd0ZvcnVtLmNsYXNzTGlzdC5hZGQoJ21vZGFsV2VPZmZmZXInLCAnZm9ydW0nKTtcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuY29udGFpbmVyTW9kYWxGb3J1bS5jbGFzc0xpc3QuYWRkKCdjb250YWluZXJXZU9mZmZlcicpO1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5idXR0b25Nb2RhbEZvcnVtLmNsYXNzTGlzdC5hZGQoJ2ZvcnVtQnV0dG9uJyk7XHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLmJ1dHRvbk1vZGFsRm9ydW0uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dEZvck1vZGFsV2luZG93cy50ZXh0QnV0dG9uRm9ydW0pO1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5jb250YWluZXJNb2RhbEZvcnVtLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuYmxvY2tUZXh0TW9kYWxGb3J1bSk7XHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLmNvbnRhaW5lck1vZGFsRm9ydW0uYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5idXR0b25Nb2RhbEZvcnVtKTtcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuYmxvY2tUZXh0TW9kYWxGb3J1bS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0Rm9yTW9kYWxXaW5kb3dzLnRleHRNb2RhbEZvcnVtKTtcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIubW9kYWxXaW5kb3dGb3J1bS5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLmNvbnRhaW5lck1vZGFsRm9ydW0pO1xyXG4gICAgc2xpZDIuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5tb2RhbFdpbmRvd0ZvcnVtKTtcclxuXHJcbiAgICAvLyBjcmVhdGUgbW9kYWwgd2luZG93IGZvciBMYW5kaW5nXHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLm1vZGFsV2luZG93TGFuZGluZy5jbGFzc0xpc3QuYWRkKCdtb2RhbFdlT2ZmZmVyJywgJ2xhbmRpbmcnKTtcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuY29udGFpbmVyTW9kYWxMYW5kaW5nLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcldlT2ZmZmVyJyk7XHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLmJ1dHRvbk1vZGFsTGFuZGluZy5jbGFzc0xpc3QuYWRkKCdsYW5kaW5nQnV0dG9uJyk7XHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLmJ1dHRvbk1vZGFsTGFuZGluZy5hcHBlbmRDaGlsZChjcmVhdGVUZXh0Rm9yTW9kYWxXaW5kb3dzLnRleHRCdXR0b25MYW5kaW5nKTtcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuY29udGFpbmVyTW9kYWxMYW5kaW5nLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuYmxvY2tUZXh0TW9kYWxMYW5kaW5nKTtcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuY29udGFpbmVyTW9kYWxMYW5kaW5nLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuYnV0dG9uTW9kYWxMYW5kaW5nKTtcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuYmxvY2tUZXh0TW9kYWxMYW5kaW5nLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRGb3JNb2RhbFdpbmRvd3MudGV4dE1vZGFsTGFuZGluZyk7XHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLm1vZGFsV2luZG93TGFuZGluZy5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLmNvbnRhaW5lck1vZGFsTGFuZGluZyk7XHJcbiAgICBzbGlkMi5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLm1vZGFsV2luZG93TGFuZGluZyk7XHJcblxyXG4gICAgLy8gY3JlYXRlIG1vZGFsIHdpbmRvdyBmb3IgR2FtZSBTb3Vyc1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5tb2RhbFdpbmRvd0dhbWVTb3Vycy5jbGFzc0xpc3QuYWRkKCdtb2RhbFdlT2ZmZmVyJywgJ2dhbWVTb3VycycpO1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5jb250YWluZXJNb2RhbEdhbWVTb3Vycy5jbGFzc0xpc3QuYWRkKCdjb250YWluZXJXZU9mZmZlcicpO1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5idXR0b25Nb2RhbEdhbWVTb3Vycy5jbGFzc0xpc3QuYWRkKCdnYW1lU291cnNCdXR0b24nKTtcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuYnV0dG9uTW9kYWxHYW1lU291cnMuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dEZvck1vZGFsV2luZG93cy50ZXh0QnV0dG9uR2FtZVNvdXJzKTtcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuY29udGFpbmVyTW9kYWxHYW1lU291cnMuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5ibG9ja1RleHRNb2RhbEdhbWVTb3Vycyk7XHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLmNvbnRhaW5lck1vZGFsR2FtZVNvdXJzLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuYnV0dG9uTW9kYWxHYW1lU291cnMpO1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5ibG9ja1RleHRNb2RhbEdhbWVTb3Vycy5hcHBlbmRDaGlsZChjcmVhdGVUZXh0Rm9yTW9kYWxXaW5kb3dzLnRleHRNb2RhbEdhbWVTb3Vycyk7XHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLm1vZGFsV2luZG93R2FtZVNvdXJzLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuY29udGFpbmVyTW9kYWxHYW1lU291cnMpO1xyXG4gICAgc2xpZDIuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5tb2RhbFdpbmRvd0dhbWVTb3Vycyk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcbmltYWdlc1NsaWRXZU9mZmVyKCk7XHJcbmJ1aWxkUGFnZSgpO1xyXG5cclxuXHJcbmNvbnN0IHZhcmlhYmxlcyA9IHtcclxuICAgIGNvdW50ZXJEaXZzIDogMCxcclxuICAgIGNvdW50ZXIgOiAwLFxyXG4gICAgY2xhc3NSZWRTdGFycyA6ICcuc3RhclJlZCcsXHJcbiAgICBjbGFzc1llbGxvd1N0YXJzIDogJy5zdGFyWWVsbG93JyxcclxuICAgIGNsYXNzQmx1ZVN0YXJzIDogJy5zdGFyQmx1ZScsXHJcbiAgICBiZ2NDb2xvclJlZFN0YXIgOiAnI0ZBODA3MicsXHJcbiAgICBiZ2NDb2xvclllbGxvd1N0YXIgOiAneWVsbG93JyxcclxuICAgIGJnY0NvbG9yQmx1ZVN0YXIgOiAnIzAwRkZGRicsXHJcbiAgICByMWNvbG9yIDogNCxcclxuICAgIHIyY29sb3IgOiAxNCxcclxuICAgIHIzY29sb3IgOiAxMTQsXHJcbiAgICByNGNvbG9yIDogNjYsXHJcbiAgICByNWNvbG9yIDogMTA2LFxyXG4gICAgcjZjb2xvciA6IDIyNCxcclxuICAgIGxpbmtTdmdEYXRhSlNPTjogJy9zdmcuanNvbicsXHJcbiAgICBhcnJTdmdFbGVtZW50cyA6IFsndGV4dFNpdGVDb21wYW55JywgJ3RleHRTb2NpYWxOZXR3b3JrJywgJ3RleHRGb3J1bScsICd0ZXh0R2FtZVNvdXJzJywgJ3RleHRCbG9nJywgJ3RleHRMYW5kaW5nJywgJ3RleHRQb3J0Zm9saW8nLCAndGV4dEludGVybmV0U2hvcCddLFxyXG4gICAgbW9kYWxXaW5kb3dzIDogWycuc2l0ZUNvbXBhbnknLCAnLnNvY2lhbE5ldHdvcmsnLCAnLmZvcnVtJywgJy5nYW1lU291cnMnLCAnLmJsb2cnLCAnLmxhbmRpbmcnLCAnLnBvcnRmb2xpbycsICcuaW50ZXJuZXRTaG9wJ10sXHJcbiAgICBjbG9zZU1vZGFsV2luZG93cyA6IFsnc2l0ZUNvbXBhbnlCdXR0b24nLCAnc29jaWFsTmV0d29ya0J1dHRvbicsICdmb3J1bUJ1dHRvbicsICdnYW1lU291cnNCdXR0b24nLCAnYmxvZ0J1dHRvbicsICdsYW5kaW5nQnV0dG9uJywgJ3BvcnRmb2xpb0J1dHRvbicsICdpbnRlcm5ldFNob3BCdXR0b24nXSxcclxuICAgIHBhcmFtc1NjcmVlbiA6IFszMDAsIDM1MCwgNDAwLCA0NTAsIDUwMCwgNTUwLCA2MDAsIDY1MCwgNzAwLCA3NTAsIDgwMCwgODUwLCA5MDAsIDk1MCwgMTAwMCwgMTE1MCwgMTMwMCwgMTQ1MCwgMTYwMCwgMTk1MCwgMjYwMF0sXHJcbn1cclxuXHJcblxyXG5cclxuLy8gcG9zaXRpb24gZm9yIDx0ZXh0PiBpbiBzdmcgYW5kIGFuaW1hdGlvbiBjaXJjbGUgPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmNvbnN0IGZud2ggPSBmdW5jdGlvbiBoZWlndGhXaWR0aChkYXRhKXtcclxuICAgIGlmKHdpbmRvdy5pbm5lckhlaWdodCA8IDQ1MCl7XHJcbiAgICAgICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5ibG9ja1NWR1dlT2ZmZXIuaW5uZXJIVE1MID0gZGF0YS5oNDUwO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8PSB2YXJpYWJsZXMucGFyYW1zU2NyZWVuLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgaWYod2luZG93LmlubmVyV2lkdGggPCB2YXJpYWJsZXMucGFyYW1zU2NyZWVuW2ldKXtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuYmxvY2tTVkdXZU9mZmVyLmlubmVySFRNTCA9IGRhdGFbdmFyaWFibGVzLnBhcmFtc1NjcmVlbltpXV07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5mbndoKHN2Z0pTT04pO1xyXG5cclxuXHJcbmNvbnN0IHNpemVXaW5kb3cgPSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4geyBmbndoKHN2Z0pTT04pIH0pO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIGZvciBzdGFycyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuY29uc3QgY3JlYXRlRGl2ID0gc2V0SW50ZXJ2YWwoKCkgPT57XHJcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB2YXJpYWJsZXMuY291bnRlckRpdnMgPCAzMyA/IGRpdi5jbGFzc0xpc3QuYWRkKCdzdGFyUmVkJykgOiAnJztcclxuICAgICh2YXJpYWJsZXMuY291bnRlckRpdnMgPiAzMyAmJiB2YXJpYWJsZXMuY291bnRlckRpdnMgPCA2NikgPyBkaXYuY2xhc3NMaXN0LmFkZCgnc3RhclllbGxvdycpIDogJyc7XHJcbiAgICB2YXJpYWJsZXMuY291bnRlckRpdnMgPiA2NiA/IGRpdi5jbGFzc0xpc3QuYWRkKCdzdGFyQmx1ZScpIDogJyc7XHJcbiAgICBzbGlkMi5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgdmFyaWFibGVzLmNvdW50ZXJEaXZzKys7XHJcbiAgICB2YXJpYWJsZXMuY291bnRlckRpdnMgPT09IDEwMCA/IGNsZWFySW50ZXJ2YWwoY3JlYXRlRGl2KSA6ICcnO1xyXG59LCAwLjAxKTtcclxuXHJcblxyXG5jb25zdCBjb29yZGluYXRlc0FuZENvbG9yU3RhcnMgPSBmdW5jdGlvbiBzdGFycyhjb2xvciwgaHRtbENsYXNzKXtcclxuICAgIGxldCBhc2tEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGh0bWxDbGFzcyk7XHJcbiAgICBhc2tEaXYuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGl0ZW0uc3R5bGUudG9wID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcig4MCkpICsgJyUnO1xyXG4gICAgICAgIGl0ZW0uc3R5bGUubGVmdCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoOTgpKSArICclJztcclxuICAgICAgICBpdGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5jb25zdCBjYWxsRnVuY3Rpb25TdGFycyA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgIHZhcmlhYmxlcy5jb3VudGVyICsrO1xyXG4gICAgdmFyaWFibGVzLmNvdW50ZXIgPT09IDMgPyB2YXJpYWJsZXMuY291bnRlciA9IDAgOiAnJztcclxuICAgIHZhcmlhYmxlcy5jb3VudGVyID09PSAwID8gY29vcmRpbmF0ZXNBbmRDb2xvclN0YXJzKHZhcmlhYmxlcy5iZ2NDb2xvclllbGxvd1N0YXIsIHZhcmlhYmxlcy5jbGFzc1llbGxvd1N0YXJzKSA6ICcnO1xyXG4gICAgdmFyaWFibGVzLmNvdW50ZXIgPT09IDEgPyBjb29yZGluYXRlc0FuZENvbG9yU3RhcnModmFyaWFibGVzLmJnY0NvbG9yUmVkU3RhciwgdmFyaWFibGVzLmNsYXNzUmVkU3RhcnMpIDogJyc7XHJcbiAgICB2YXJpYWJsZXMuY291bnRlciA9PT0gMiA/IGNvb3JkaW5hdGVzQW5kQ29sb3JTdGFycyh2YXJpYWJsZXMuYmdjQ29sb3JCbHVlU3RhciwgdmFyaWFibGVzLmNsYXNzQmx1ZVN0YXJzKSA6ICcnO1xyXG59LCAzMDAwKTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuXHJcbi8vIGZ1bmN0aW9ucyBmb3IgbW9kYWwgd2luZG93cyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5jb25zdCBvcGVuTW9kYWwgPSBmdW5jdGlvbiBvcGVuTW9kYWxXaW5kb3coY2xhc3NNb2RhbCl7XHJcbiAgICBsZXQgc29tZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih2YXJpYWJsZXMubW9kYWxXaW5kb3dzW2NsYXNzTW9kYWxdKTtcclxuXHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLmJsb2NrU1ZHV2VPZmZlci5zdHlsZS5sZWZ0ID0gMTAwICsgJyUnO1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5Nb29uV2VPZmZlci5zdHlsZS5yaWdodCA9IC0zNSArICclJztcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuU3VuLnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgc29tZU1vZGFsLnN0eWxlLm9wYWNpdHkgPSAxO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGJnY0NvbG9yTW9kV2luKCdkYXknKTtcclxuICAgICAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLmJsb2NrU1ZHV2VPZmZlci5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLk1vb25XZU9mZmVyLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuTW9vbldlT2ZmZXIuc3R5bGUucmlnaHQgPSAxMDAgKyAnJSc7XHJcbiAgICAgICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5ibG9ja1NWR1dlT2ZmZXIuc3R5bGUubGVmdCA9IC0xMDAgKyAnJSc7XHJcbiAgICAgICAgc29tZU1vZGFsLnN0eWxlLmxlZnQgPSAwICsgJyUnO1xyXG4gICAgICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuU3VuLnN0eWxlLnJpZ2h0ID0gMCArICclJztcclxuICAgICAgICB2YXJpYWJsZXMuYmdjQ29sb3JSZWRTdGFyID0gJ3RyYW5zcGFyZW50JztcclxuICAgICAgICB2YXJpYWJsZXMuYmdjQ29sb3JCbHVlU3RhciA9ICd0cmFuc3BhcmVudCc7XHJcbiAgICAgICAgdmFyaWFibGVzLmJnY0NvbG9yWWVsbG93U3RhciA9ICd0cmFuc3BhcmVudCc7XHJcbiAgICB9LCAxMDAwKTtcclxufVxyXG5cclxuXHJcbmNvbnN0IGNsb3NlTW9kYWwgPSBmdW5jdGlvbiBjbG9zZU1vZGFsV2luZG93KGNsYXNzTW9kYWwpe1xyXG4gICAgbGV0IHNvbWVNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodmFyaWFibGVzLm1vZGFsV2luZG93c1tjbGFzc01vZGFsXSk7XHJcblxyXG4gICAgc29tZU1vZGFsLnN0eWxlLmxlZnQgPSAxMDAgKyAnJSc7XHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLlN1bi5zdHlsZS5yaWdodCA9IC0zNSArICclJztcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuTW9vbldlT2ZmZXIuc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLmJsb2NrU1ZHV2VPZmZlci5zdHlsZS5vcGFjaXR5ID0gMTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBiZ2NDb2xvck1vZFdpbignbmlnaHQnKTtcclxuICAgICAgICBzb21lTW9kYWwuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5TdW4uc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5TdW4uc3R5bGUucmlnaHQgPSAxMDAgKyAnJSc7XHJcbiAgICAgICAgc29tZU1vZGFsLnN0eWxlLmxlZnQgPSAtMTAwICsgJyUnO1xyXG4gICAgICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuYmxvY2tTVkdXZU9mZmVyLnN0eWxlLmxlZnQgPSAwICsgJyUnO1xyXG4gICAgICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuTW9vbldlT2ZmZXIuc3R5bGUucmlnaHQgPSAwICsgJyUnO1xyXG4gICAgICAgIHZhcmlhYmxlcy5iZ2NDb2xvclJlZFN0YXIgPSAnI0ZBODA3Mic7XHJcbiAgICAgICAgdmFyaWFibGVzLmJnY0NvbG9yQmx1ZVN0YXIgPSAnIzAwRkZGRic7XHJcbiAgICAgICAgdmFyaWFibGVzLmJnY0NvbG9yWWVsbG93U3RhciA9ICd5ZWxsb3cnO1xyXG4gICAgfSwgMTAwMCk7XHJcbn1cclxuXHJcbi8vIGJnYyBuaWd0aCBvciBkYXlcclxuY29uc3QgYmdjQ29sb3JNb2RXaW4gPSBmdW5jdGlvbiBiYWNrZ3JvdW5kQ29sb3JNb2RhbFdpbmRvd3MocGFyYW1zQmdjb2wpe1xyXG4gICAgcGFyYW1zQmdjb2wgPT09ICdkYXknID8gc2xpZDIuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9IDEwMCArICclJyA6IHNsaWQyLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSAwICsgJyUnO1xyXG59XHJcblxyXG5cclxuc2xpZDIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgIGlmKGV2ZW50LnRhcmdldC5jbG9zZXN0KCdkaXYuYmxvY2tTVkcnKSl7XHJcbiAgICAgICAgdmFyaWFibGVzLmFyclN2Z0VsZW1lbnRzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0gPT09IGV2ZW50LnRhcmdldC5jbGFzc05hbWUuYmFzZVZhbCA/IG9wZW5Nb2RhbChpbmRleCkgOiAnJztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmKGV2ZW50LnRhcmdldC5jbG9zZXN0KCdkaXYnKSl7XHJcbiAgICAgICAgdmFyaWFibGVzLmNsb3NlTW9kYWxXaW5kb3dzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0gPT09IGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPyBjbG9zZU1vZGFsKGluZGV4KSA6ICcnO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzbGlkMjsiLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgVGVtcF8xIGZyb20gJy4uLy4uL2ltZy90ZW1wbGF0ZV8xLnBuZyc7XHJcbmltcG9ydCBUZW1wXzIgZnJvbSAnLi4vLi4vaW1nL3RlbXBsYXRlXzIuanBnJztcclxuaW1wb3J0IFRlbXBfMyBmcm9tICcuLi8uLi9pbWcvdGVtcGxhdGVfMy5wbmcnO1xyXG5pbXBvcnQgVGVtcF80IGZyb20gJy4uLy4uL2ltZy90ZW1wbGF0ZV80LnBuZyc7XHJcbmltcG9ydCBUZW1wXzUgZnJvbSAnLi4vLi4vaW1nL3RlbXBsYXRlXzUucG5nJztcclxuaW1wb3J0IFRlbXBfNiBmcm9tICcuLi8uLi9pbWcvdGVtcGxhdGVfNi5wbmcnO1xyXG5pbXBvcnQgVGVtcF83IGZyb20gJy4uLy4uL2ltZy90ZW1wbGF0ZV83LnBuZyc7XHJcbmltcG9ydCBUZW1wXzggZnJvbSAnLi4vLi4vaW1nL2FtYWlvc3dpbS5qcGcnO1xyXG5pbXBvcnQgVGVtcF85IGZyb20gJy4uLy4uL2ltZy9hbnlXNFl0bXBsLmpwZyc7XHJcbmltcG9ydCBUZW1wXzEwIGZyb20gJy4uLy4uL2ltZy9jb3NtLmpwZyc7XHJcbmltcG9ydCBUZW1wXzExIGZyb20gJy4uLy4uL2ltZy9kZXN0aW55LmpwZyc7XHJcbmltcG9ydCBUZW1wXzEyIGZyb20gJy4uLy4uL2ltZy9wcm91ZGFuZHB1bmNoLmpwZyc7XHJcbmltcG9ydCBUZW1wXzEzIGZyb20gJy4uLy4uL2ltZy9yYWluZm9yZXN0Zm9vZHMuanBnJ1xyXG5cclxuY29uc3Qgb2JqID0ge1xyXG4gICAgc2xpZGUgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgIG1haW4gIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICBtYXNzSW1nOiBbVGVtcF8xLCBUZW1wXzIsIFRlbXBfMywgVGVtcF80LCBUZW1wXzUsIFRlbXBfNiwgVGVtcF83LCBUZW1wXzgsIFRlbXBfOSwgVGVtcF8xMCxcclxuICAgICAgICAgICAgICBUZW1wXzExLCBUZW1wXzEyLCBUZW1wXzEzXSxcclxuICAgIG1hc3NCbG9ja3MgOiBbXSxcclxuXHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIHNpemVCbG9jayhzaXplKSB7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKihzaXplIC0gMTYwKSArIDE2MCk7XHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBzaXplU2NyZWVuKCkge1xyXG4gICAgbGV0IHNpemUgPSAwLFxyXG4gICAgICAgIGRvY1dpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKi44LFxyXG4gICAgICAgIGRvY0hlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQqLjg7XHJcblxyXG4gICAgZG9jV2lkdGggPiBkb2NIZWlnaHQgP1xyXG4gICAgICAgIHNpemUgPSBNYXRoLnJvdW5kKGRvY0hlaWdodCAvIDIuMSk6XHJcbiAgICAgICAgc2l6ZSA9IE1hdGgucm91bmQoIGRvY1dpZHRoLyAzLjEpO1xyXG4gICAgaWYod2luZG93LnNjcmVlbi53aWR0aCA8IDEwMDApe1xyXG4gICAgICAgIHNpemUgPSBNYXRoLnJvdW5kKGRvY1dpZHRoLyAyKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzaXplO1xyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBmdW5jdGlvbiBuZXdIZWlnaHQocGFyZW50KSB7XHJcbi8vICAgICBsZXQgaGVpZ2h0ID0gcGFyZW50LmNsaWVudEhlaWdodDtcclxuLy8gICAgIGlmKHdpbmRvdy5zY3JlZW4ud2lkdGggPCA5MDApXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgaGVpZ2h0ID0gcGFyZW50LmNsaWVudFdpZHRoLzI7XHJcbi8vICAgICB9ZWxzZSB7XHJcbi8vICAgICAgICAgaGVpZ2h0ID0gcGFyZW50LmNsaWVudFdpZHRoLzNcclxuLy8gICAgIH1cclxuLy8gICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqKGhlaWdodCAtIGhlaWdodC8zKSArIGhlaWdodC8zKTtcclxuLy8gfVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIG5ld1dpZHRoKHBhcmVudCkge1xyXG4gICAgbGV0IHdpZHRoID0gMDtcclxuICAgIGlmKHdpbmRvdy5zY3JlZW4ud2lkdGggPCA5MDApXHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGggPSBwYXJlbnQuY2xpZW50V2lkdGgvMjtcclxuICAgIH1lbHNlIHtcclxuICAgICAgICB3aWR0aCA9IHBhcmVudC5jbGllbnRXaWR0aC8zXHJcbiAgICB9XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKih3aWR0aCAtIHdpZHRoLzIpICsgd2lkdGgvMik7XHJcbn1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIGNyZWF0ZUJsb2NrKCB0eXBlLCBzaXplLCAuLi5jbGFzc2VzKSB7XHJcbiAgICBsZXQgYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xyXG4gICAgICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XHJcbiAgICAgICAgcmV0dXJuIGJsb2NrO1xyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIG1hc3NCbG9ja3MoKSB7XHJcbiAgIGxldCBzaXplID0gc2l6ZVNjcmVlbigpLFxyXG4gICAgICAgbWFzc0ltZyA9IG9iai5tYXNzSW1nLFxyXG4gICAgICAgbGVuID0gbWFzc0ltZy5sZW5ndGg7XHJcblxyXG4gICAgICAgIGlmKHdpbmRvdy5zY3JlZW4ud2lkdGggPCAxMDAwKXtcclxuICAgICAgICAgICAgbGVuID0gMTA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspe1xyXG4gICAgICAgIGxldCBkaXYgPSBudWxsLFxyXG4gICAgICAgICAgICBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgaW1nLnNyYyA9IG1hc3NJbWdbaV07XHJcbiAgICAgICAgICAgIGltZy53aWR0aCA9IHNpemVCbG9jayhzaXplKTtcclxuICAgICAgICAgICAgZGl2ID0gY3JlYXRlQmxvY2soJ2RpdicsIHNpemUsICdibG9jaycsYGJsb2NrXyR7aSsxfWApO1xyXG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgICAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZm9jdXMpO1xyXG4gICAgICAgICAgICBvYmoubWFzc0Jsb2Nrcy5wdXNoKGRpdik7XHJcbiAgICB9XHJcblxyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIG5ld1Bvc2l0aW9uVG9wKGVsKSB7XHJcbiAgICBsZXQgcGFyZW50ID0gZWwub2Zmc2V0UGFyZW50LFxyXG4gICAgICAgIGVsSCA9IGVsLm9mZnNldEhlaWdodCxcclxuICAgICAgICBwckggPSBwYXJlbnQub2Zmc2V0SGVpZ2h0LFxyXG4gICAgICAgIGVuZFBvaW50ID0gcHJIIC0gZWxIO1xyXG5cclxuICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqKGVuZFBvaW50IC0gMSArIDEpICsgMSk7XHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gbmV3UG9zaXRpb25MZWZ0KGVsKSB7XHJcbiAgICBsZXQgcGFyZW50ID0gZWwub2Zmc2V0UGFyZW50LFxyXG4gICAgICAgIGVsVyA9IGVsLm9mZnNldFdpZHRoLFxyXG4gICAgICAgIHByVyA9IHBhcmVudC5vZmZzZXRXaWR0aCxcclxuICAgICAgICBlbmRQb2ludCA9IHByVyAtIGVsVztcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqKGVuZFBvaW50IC0gMSArIDEpICsgMSk7XHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gekluZGV4KCkge1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSooMTAgLSAxKSArIDEpO1xyXG59XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gZnVuY3Rpb24gcG9zaXRpb25CbG9jaygpIHtcclxuICAgIGxldCBtYXNzID0gb2JqLm1hc3NCbG9ja3M7XHJcblxyXG4gICAgbWFzcy5mb3JFYWNoKGVsPT57XHJcbiAgICAgICAgZWwuc3R5bGUudG9wID0gbmV3UG9zaXRpb25Ub3AoZWwpICsgJ3B4JztcclxuICAgICAgICBlbC5zdHlsZS5sZWZ0ID0gbmV3UG9zaXRpb25MZWZ0KGVsKSArICdweCc7XHJcbiAgICAgICAgZWwuc3R5bGUuekluZGV4ID0gekluZGV4KCk7XHJcbiAgICAgICAgZWwuZmlyc3RFbGVtZW50Q2hpbGQuc3R5bGUud2lkdGggPSBuZXdXaWR0aChlbC5wYXJlbnRFbGVtZW50KSArJ3B4JztcclxuICAgICAgICBlbC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICB9KVxyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gIGZpbGxNYWluKCkge1xyXG4gICAgbGV0IG1haW4gPSBvYmoubWFpbixcclxuICAgICAgICBtYXNzID0gb2JqLm1hc3NCbG9ja3M7XHJcblxyXG4gICAgbWFzcy5mb3JFYWNoKGVsPT57XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChlbCk7XHJcbiAgICB9KTtcclxufVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIGNvbnRhaW5lcigpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IG9iai5zbGlkZSxcclxuICAgICAgICBtYWluID0gb2JqLm1haW4sXHJcbiAgICAgICAgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcblxyXG5cclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzbGlkJywgJ3NsaWQzJyk7XHJcbiAgICBjb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCArICdweCc7XHJcbiAgICBjb250YWluZXIuaWQgPSAnT3VyIHdvcmsnO1xyXG5cclxuICAgIG5hbWUuaW5uZXJIVE1MID0gJ9Cd0LDRiNC4INGA0LDQsdC+0YLRiyc7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmFtZSk7XHJcblxyXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluU2xpZGUzJyk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XHJcbiAgICBtYXNzQmxvY2tzKCk7XHJcbiAgICBmaWxsTWFpbigpO1xyXG5cclxuICAgIGxldCBtb3ZlQmxvY2tzSW50ZXJ2YWwgPSB1bmRlZmluZWQsXHJcbiAgICAgICAgbW92ZUJsb2NrVGltZU91dD0gdW5kZWZpbmVkO1xyXG5cclxuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCgpPT57XHJcbiAgICAgICAgaWYoY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKXtcclxuICAgICAgICAgICAgbW92ZUJsb2Nrc0ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCk9PiBwb3NpdGlvbkJsb2NrKCksIDIwMDAwKTtcclxuICAgICAgICAgICAgbW92ZUJsb2NrVGltZU91dCA9IHNldFRpbWVvdXQoKCk9PiBwb3NpdGlvbkJsb2NrKCksIDApO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KG1vdmVCbG9ja1RpbWVPdXQpO1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKG1vdmVCbG9ja3NJbnRlcnZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcblxyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIHBvc2l0aW9uQ2VudGVyKHZhbHVlU2NyLCB2YWx1ZUJsKSB7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZVNjci8yIC0gdmFsdWVCbC8yKTtcclxufVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIGZvY3VzKGV2KSB7XHJcbiAgICBsZXQgZWwgPSBldi50YXJnZXQsXHJcbiAgICAgICAgcGFyZW50ID0gZWwucGFyZW50RWxlbWVudCxcclxuICAgICAgICBkb2NXaWR0aCA9IHBhcmVudC5wYXJlbnRFbGVtZW50LmNsaWVudFdpZHRoLFxyXG4gICAgICAgIGRvY0hlaWdodCA9IHBhcmVudC5wYXJlbnRFbGVtZW50LmNsaWVudEhlaWdodCxcclxuICAgICAgICBzaXplID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICBlbC5jbGllbnRXaWR0aCA+IGVsLmNsaWVudEhlaWdodCA/IHNpemUgPSBkb2NXaWR0aC8xLjUgOiBzaXplID0gZG9jSGVpZ2h0LTIwO1xyXG5cclxuICAgIGVsLmNsaWVudFdpZHRoID4gZWwuY2xpZW50SGVpZ2h0ID8gZWwuc3R5bGUud2lkdGggPSBNYXRoLmNlaWwoc2l6ZSkgKyAncHgnIDpcclxuICAgICAgICAoZWwuc3R5bGUuaGVpZ2h0ID0gTWF0aC5jZWlsKHNpemUpICsgJ3B4JywgZWwuY2xhc3NMaXN0LmFkZCgnYmxvY2tDZW50ZXInKSk7XHJcbiAgICBwYXJlbnQuc3R5bGUuekluZGV4ID0gMjA7XHJcbiAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbicpO1xyXG4gICAgcGFyZW50LnN0eWxlLmxlZnQgPSBwb3NpdGlvbkNlbnRlcihkb2NXaWR0aCwgZWwuY2xpZW50V2lkdGgpICsgJ3B4JztcclxuICAgIHBhcmVudC5zdHlsZS50b3AgPSBwb3NpdGlvbkNlbnRlcihkb2NIZWlnaHQsIGVsLmNsaWVudEhlaWdodCkgKyAncHgnO1xyXG4gICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgIHBvc2l0aW9uQmxvY2soKTtcclxuICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgndHJhbnNpdGlvbicpO1xyXG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2Jsb2NrQ2VudGVyJyk7XHJcbiAgICB9LDUwMDApO1xyXG59XHJcblxyXG5jb250YWluZXIoKTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBvYmouc2xpZGU7XHJcblxyXG5cclxuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IFRlbXBfMSBmcm9tICcuLi8uLi9pbWcvdGVtcGxhdGVfMS5wbmcnO1xyXG5pbXBvcnQgVGVtcF8yIGZyb20gJy4uLy4uL2ltZy90ZW1wbGF0ZV8yLmpwZyc7XHJcbmltcG9ydCBUZW1wXzMgZnJvbSAnLi4vLi4vaW1nL3RlbXBsYXRlXzMucG5nJztcclxuaW1wb3J0IFRlbXBfNCBmcm9tICcuLi8uLi9pbWcvdGVtcGxhdGVfNC5wbmcnO1xyXG5pbXBvcnQgVGVtcF81IGZyb20gJy4uLy4uL2ltZy90ZW1wbGF0ZV81LnBuZyc7XHJcbmltcG9ydCBUZW1wXzYgZnJvbSAnLi4vLi4vaW1nL3RlbXBsYXRlXzYucG5nJztcclxuaW1wb3J0IFRlbXBfNyBmcm9tICcuLi8uLi9pbWcvdGVtcGxhdGVfNy5wbmcnO1xyXG4vLyBpbXBvcnQgVGVtcF84IGZyb20gJy4uLy4uL2ltZy90ZW1wbGF0ZV84LnBuZyc7XHJcblxyXG5jb25zdCBvYmogPSB7XHJcbiAgICBzbGlkZSA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgbWFpbiAgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgIG1hc3NJbWFnZXMgOiBbXSxcclxuXHJcbn1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gSW1hZ2VzKCkge1xyXG4gICAgbGV0IHRlbXBfMSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRlbXBfMS5zcmMgPSBUZW1wXzE7XHJcbiAgICAgICAgdGVtcF8xLmFsdCA9ICdUZW1wbGF0ZSc7XHJcbiAgICAgICAgb2JqLm1hc3NJbWFnZXMucHVzaCh0ZW1wXzEpO1xyXG5cclxuICAgIGxldCB0ZW1wXzIgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB0ZW1wXzIuc3JjID0gVGVtcF8yO1xyXG4gICAgICAgIHRlbXBfMi5hbHQgPSAnVGVtcGxhdGUnO1xyXG4gICAgICAgIG9iai5tYXNzSW1hZ2VzLnB1c2godGVtcF8yKTtcclxuXHJcbiAgICBsZXQgdGVtcF8zID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGVtcF8zLnNyYyA9IFRlbXBfMztcclxuICAgICAgICB0ZW1wXzMuYWx0ID0gJ1RlbXBsYXRlJztcclxuICAgICAgICBvYmoubWFzc0ltYWdlcy5wdXNoKHRlbXBfMyk7XHJcblxyXG4gICAgbGV0IHRlbXBfNCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRlbXBfNC5zcmMgPSBUZW1wXzQ7XHJcbiAgICAgICAgdGVtcF80LmFsdCA9ICdUZW1wbGF0ZSc7XHJcbiAgICAgICAgb2JqLm1hc3NJbWFnZXMucHVzaCh0ZW1wXzQpO1xyXG5cclxuICAgIGxldCB0ZW1wXzUgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB0ZW1wXzUuc3JjID0gVGVtcF81O1xyXG4gICAgICAgIHRlbXBfNS5hbHQgPSAnVGVtcGxhdGUnO1xyXG4gICAgICAgIG9iai5tYXNzSW1hZ2VzLnB1c2godGVtcF81KTtcclxuXHJcbiAgICBsZXQgdGVtcF82ID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGVtcF82LnNyYyA9IFRlbXBfNjtcclxuICAgICAgICB0ZW1wXzYuYWx0ID0gJ1RlbXBsYXRlJztcclxuICAgICAgICBvYmoubWFzc0ltYWdlcy5wdXNoKHRlbXBfNik7XHJcblxyXG4gICAgbGV0IHRlbXBfNyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRlbXBfNy5zcmMgPSBUZW1wXzc7XHJcbiAgICAgICAgdGVtcF83LmFsdCA9ICdUZW1wbGF0ZSc7XHJcbiAgICAgICAgb2JqLm1hc3NJbWFnZXMucHVzaCh0ZW1wXzcpO1xyXG5cclxuICAgIGxldCB0ZW1wXzggPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB0ZW1wXzguc3JjID0gVGVtcF8xO1xyXG4gICAgICAgIHRlbXBfOC5hbHQgPSAnVGVtcGxhdGUnO1xyXG4gICAgICAgIG9iai5tYXNzSW1hZ2VzLnB1c2godGVtcF84KTtcclxuXHJcbiAgICBsZXQgdGVtcF85ID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGVtcF85LnNyYyA9IFRlbXBfMjtcclxuICAgICAgICB0ZW1wXzkuYWx0ID0gJ1RlbXBsYXRlJztcclxuICAgICAgICBvYmoubWFzc0ltYWdlcy5wdXNoKHRlbXBfOSk7XHJcbn1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gZnVuY3Rpb24gcmVzaXplSW1hZ2UoZSkge1xyXG4vL1xyXG4vLyAgICAgaWYoIGRvY3VtZW50LmlubmVyV2lkdGggPCAxMDAwKXtcclxuLy8gICAgICAgICB0aGlzLmNsYXNzTGlzdC5jb250YWlucygncmVzaXplJyk/IHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgncmVzaXplJylcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dGhpcy5jbGFzc0xpc3QuYWRkKCdyZXNpemUnKTtcclxuLy8gICAgIH1lbHNlIHtcclxuLy8gICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxyZXNpemVJbWFnZSk7XHJcbi8vICAgICB9XHJcbi8vXHJcbi8vIH1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiB0ZW1wbGF0ZXMoKSB7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5OyBpKyspe1xyXG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3RlbXBsYXRlJyk7XHJcbiAgICAgICAgICAgIGRpdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiJHtvYmoubWFzc0ltYWdlc1tpXS5zcmN9XCIpYDtcclxuICAgICAgICAgICAgb2JqLm1haW4uYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcbiAgICAgICAgICAgIC8vIGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycscmVzaXplSW1hZ2UpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBjb250YWluZXIoKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBvYmouc2xpZGUsXHJcbiAgICAgICAgICBtYWluID0gb2JqLm1haW4sXHJcbiAgICAgICAgICBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuXHJcblxyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NsaWQnLCAnc2xpZDQnKTtcclxuICAgIGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ICsgJ3B4JztcclxuICAgIGNvbnRhaW5lci5pZCA9ICdUZW1wbGF0ZXMnO1xyXG5cclxuICAgIG5hbWUuaW5uZXJIVE1MID0gJ1BTRCDRiNCw0LHQu9C+0L3Riyc7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmFtZSk7XHJcblxyXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XHJcbiAgICBJbWFnZXMoKTtcclxuICAgIHRlbXBsYXRlcygpO1xyXG59XHJcbmNvbnRhaW5lcigpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgb2JqLnNsaWRlO1xyXG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5jb25zdCBzbGlkNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5zbGlkNS5jbGFzc0xpc3QuYWRkKCdzbGlkJywgJ3NsaWQ1Jyk7XG5zbGlkNS5zdHlsZS5oZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ICsgJ3B4JztcbnNsaWQ1LmlubmVySFRNTCA9ICBgPGgyIGNsYXNzPVwiY29udGFjdHNcIj7QmtC+0L3RgtCw0LrRgtGLPC9oMj5gO1xuc2xpZDUuaWQgPSAnQ29udGFjdHMnO1xuZXhwb3J0IGRlZmF1bHQgc2xpZDU7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShtb2R1bGUuaWQsIGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxZGEyYWMwY2UyNDc1Zjc3ZWFkMTQ3ODg4OTFlMDU0YS50dGZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNGVkODI5ODIwNDEzOGIwOGMxZTczZDJkOWE2Y2JhOWEudHRmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9Nb29uLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYW1haW9zd2ltLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYW55VzRZdG1wbC5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2JhY2tHcm91bmQtbWluLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYmx1ZV9za3kuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9jYXQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9jYXRXZU9mZmZlci5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2NpcmNsZS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2Nsb3VkXzEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9jbG91ZF8yLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvY2xvdWRfMy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2NvbW1lbnRUZXh0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvY29zbS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2Rlc3RpbnkuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9kb3duQXJyb3cucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9ncmFzcy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2dyYXNzU25haWwucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9tZW51X3doaXRlLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvbW9vbldlT2ZmZXIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9wcm91ZGFuZHB1bmNoLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvcmFpbmZvcmVzdGZvb2RzLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvc3Rhci5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL3N1bi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL3RlbXBsYXRlXzEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy90ZW1wbGF0ZV8yLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvdGVtcGxhdGVfMy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL3RlbXBsYXRlXzQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy90ZW1wbGF0ZV81LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvdGVtcGxhdGVfNi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL3RlbXBsYXRlXzcucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy91cEFycm93LnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=