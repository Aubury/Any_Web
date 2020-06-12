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
exports.push([module.i, "@media screen and (max-width: 320px) {\r\n    \r\n    img.catWeOfffer {\r\n        bottom : 0px;\r\n        left : 4%;\r\n        width : 45%;\r\n    }\r\n\r\n\r\n    img.moonWeOfffer,\r\n    img.sunWeOfffer {\r\n        width : 30%;\r\n    }\r\n\r\n\r\n    img.sunWeOfffer {\r\n        right : 100%;\r\n    }\r\n    \r\n\r\n    text {\r\n        font-size : 18px;\r\n    }\r\n\r\n    .starWeOfffer,\r\n    .starYellow,\r\n    .starBlue,\r\n    .starRed {\r\n        z-index : -1000;\r\n        width : 1.5px;\r\n        height : 1.5px;\r\n        position : absolute;\r\n        border-radius : 50%;\r\n        opacity : 0;\r\n    }\r\n\r\n    \r\n    /* ====================== modal windows ============================== */\r\n    \r\n    \r\n    .modalWeOfffer {\r\n        justify-content : flex-start;\r\n        align-items : flex-start;\r\n    }\r\n    \r\n\r\n    .modalWeOfffer>.containerWeOfffer {\r\n        width : 70%;\r\n        flex-wrap : wrap;\r\n        flex-direction: column-reverse;\r\n    }\r\n\r\n    button {\r\n        margin : 10px 10px 0 auto;\r\n        width : 35px;\r\n        height : 35px;\r\n        font-size : 20px;\r\n    }\r\n\r\n    .modalWeOfffer p {\r\n        width : 100%;\r\n        font-size : 18px;\r\n        text-align : left;\r\n        padding : 10px 10px 0px 10px;\r\n        line-height : 1.15;\r\n    }    \r\n}\r\n", ""]);
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
exports.push([module.i, "@media screen and (max-width: 400px){\r\n\r\n    img.catWeOfffer {\r\n        bottom : 0px;\r\n        left : 4%;\r\n        width : 45%;\r\n    }\r\n\r\n\r\n    img.moonWeOfffer,\r\n    img.sunWeOfffer {\r\n        width : 30%;\r\n    }\r\n\r\n\r\n    img.sunWeOfffer {\r\n        right : 100%;\r\n    }\r\n    \r\n\r\n    text {\r\n        font-size : 20px;\r\n    }\r\n\r\n\r\n    .starWeOfffer,\r\n    .starYellow,\r\n    .starBlue,\r\n    .starRed {\r\n        width : 2px;\r\n        height : 2px;\r\n    }\r\n    \r\n    \r\n    /* ====================== modal windows ============================== */\r\n    \r\n    \r\n    .modalWeOfffer {\r\n        justify-content : flex-start;\r\n        align-items : flex-start;\r\n    }\r\n    \r\n\r\n    .modalWeOfffer>.containerWeOfffer {\r\n        width : 70%;\r\n        flex-wrap : wrap;\r\n        flex-direction: column-reverse;\r\n    }\r\n\r\n    \r\n    button {\r\n        margin : 10px 10px 0 auto;\r\n        width : 40px;\r\n        height : 40px;\r\n        font-size : 25px;\r\n    }\r\n\r\n\r\n    .modalWeOfffer p {\r\n        width : 100%;\r\n        font-size : 20px;\r\n        text-align : left;\r\n        padding : 10px 10px 0px 10px;\r\n        line-height : 1.3;\r\n    }    \r\n}\r\n", ""]);
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
exports.push([module.i, ":root {\r\n    --colorText-stroke : red;\r\n    --colorText-fill : white;\r\n}\r\n    \r\n\r\nhtml {\r\n    width : 100%;\r\n    height : 100%;\r\n    user-select : none;\r\n}\r\n\r\n\r\nbody {\r\n    height : 100%;\r\n}\r\n\r\n\r\nmain {\r\n    width : 100%;\r\n    height : 100%;\r\n}\r\n\r\n\r\ndiv.slid2 {\r\n    background : linear-gradient(rgba(4 ,14 ,114, 1) 30%, rgba(66, 106,224, 1) 100%) fixed;\r\n    width : 100%;\r\n    height : 100%;\r\n}\r\n\r\n\r\nimg.homeWeOfffer {\r\n    position : absolute;\r\n    bottom : 0;\r\n    height : auto;\r\n    width : 100%;\r\n    z-index : 0;\r\n}\r\n\r\n\r\nimg.catWeOfffer {\r\n    display : block;\r\n    position : absolute;\r\n    bottom : 12px;\r\n    left : 5%;\r\n    width : 19%;\r\n    z-index : 100;\r\n}\r\n\r\n\r\nimg.grassWeOfffer {\r\n    display : block;\r\n    position : absolute;\r\n    bottom : 0;\r\n    left : 0;\r\n    width : 60%;\r\n    z-index : 100;\r\n}\r\n\r\n\r\nimg.moonWeOfffer,\r\nimg.sunWeOfffer {\r\n    display : block;\r\n    position : absolute;\r\n    top : 0px;\r\n    right : 0%;\r\n    width : 12%;\r\n    z-index : 50;\r\n}\r\n\r\n\r\nimg.sunWeOfffer {\r\n    right : 100%;\r\n}\r\n    \r\n\r\n.blockSVG {\r\n    position : fixed;\r\n    left : 0%;\r\n    width : 100%;\r\n    height : 100%;\r\n}\r\n\r\n\r\nsvg {\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n\r\ntext {\r\n    font-family : 'Segoe Print';\r\n    cursor : pointer;\r\n    transition : .15s linear;\r\n    stroke : var(--colorText-stroke);\r\n    fill : var(--colorText-fill);\r\n    font-size: 30px;\r\n    transition: .15s linear;\r\n}\r\n    \r\n\r\ntext:hover {\r\n    fill : orange;\r\n}\r\n\r\n    \r\npath {\r\n    /* stroke : white; */\r\n    fill : transparent;\r\n}\r\n\r\n\r\n.starWeOfffer,\r\n.starYellow,\r\n.starBlue,\r\n.starRed {\r\n    z-index : 10;\r\n    width : 4px;\r\n    height : 4px;\r\n    position : absolute;\r\n    border-radius : 50%;\r\n    opacity : 0;\r\n}\r\n\r\n\r\n.starYellow {\r\n    animation : movie 9s linear 6s infinite;\r\n}\r\n\r\n\r\n.starRed {\r\n    animation : movie 9s linear infinite;\r\n}\r\n\r\n\r\n.starBlue {\r\n    animation : movie 9s linear 3s infinite;\r\n}\r\n\r\n\r\n@keyframes movie {\r\n    0%, 30% {\r\n        opacity : 0;\r\n    }\r\n\r\n    50% {\r\n        opacity : 1;\r\n    }\r\n\r\n    80%, 100% {\r\n        opacity : 0;\r\n    }\r\n}\r\n    \r\n    \r\n/* ========================= modal windows =========================== */\r\n    \r\n    \r\n.modalWeOfffer {\r\n    display : flex;\r\n    justify-content : center;\r\n    align-items : center;\r\n    position : fixed;\r\n}\r\n    \r\n\r\n.internetShop,\r\n.siteCompany,\r\n.blog,\r\n.portfolio,\r\n.socialNetwork,\r\n.forum,\r\n.landing,\r\n.gameSours {\r\n    left : -100%;\r\n    z-index : 150;\r\n    width : 100%;\r\n    height : 100%;\r\n}\r\n\r\n\r\n.modalWeOfffer>.containerWeOfffer {\r\n    width : 60%;\r\n    display : flex;\r\n    flex-wrap : nowrap;\r\n}\r\n\r\n\r\nbutton {\r\n    cursor : pointer;\r\n    background-color : rgb(244, 107, 28);\r\n    margin : 0 0 0 0;\r\n    width : 50px;\r\n    height : 50px;\r\n    border-radius : 50%;\r\n    font-size : 30px;\r\n    border : solid 1px black;\r\n    outline : none;\r\n}\r\n\r\n\r\n.modalWeOfffer p {\r\n    color : black;\r\n    width : 90%;\r\n    font-size : 30px;\r\n    font-family : 'Segoe Print';\r\n    text-align : justify;\r\n    padding: 0px 70px 0px 40px;\r\n    line-height : 1.4;\r\n}", ""]);
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
exports.push([module.i, "@media screen and (max-height: 450px){\r\n\r\n    img.homeWeOfffer {\r\n        height : 120px;\r\n    }\r\n\r\n    img.catWeOfffer {\r\n        width : 15%;\r\n    }\r\n\r\n\r\n    img.moonWeOfffer,\r\n    img.sunWeOfffer {\r\n        width : 10%;\r\n    }\r\n\r\n\r\n    img.sunWeOfffer {\r\n        right : 100%;\r\n    }\r\n    \r\n\r\n    text {\r\n        font-size : 18px;\r\n    }\r\n\r\n\r\n    .starWeOfffer,\r\n    .starYellow,\r\n    .starBlue,\r\n    .starRed{\r\n        width : 1.5px;\r\n        height : 1.5px;\r\n    }\r\n    \r\n    \r\n    /* ====================== modal windows ============================== */\r\n    \r\n\r\n    .modalWeOfffer {\r\n        justify-content : flex-start;\r\n        align-items : flex-start;\r\n    }\r\n    \r\n\r\n    .modalWeOfffer>.containerWeOfffer {\r\n        width : 80%;\r\n        flex-wrap : wrap;\r\n        padding: 0 0 0 35px;\r\n    }\r\n\r\n\r\n    button {\r\n        margin: 10px 0 0 10px;\r\n        width: 35px;\r\n        height: 35px;\r\n        border-radius: 50%;\r\n        font-size: 20px;\r\n    }\r\n\r\n    \r\n    .modalWeOfffer p{\r\n        width: 80%;\r\n        font-size: 18px;\r\n        text-align: right;\r\n        padding: 10px 10px 0px 10px;\r\n        line-height: 1.3;\r\n    }    \r\n}\r\n", ""]);
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
var ___CSS_LOADER_AT_RULE_IMPORT_8___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./slideWeOffer/style400.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/slideWeOffer/style400.css");
var ___CSS_LOADER_AT_RULE_IMPORT_9___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./slideWeOffer/style320.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/slideWeOffer/style320.css");
var ___CSS_LOADER_AT_RULE_IMPORT_10___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./slideWeOffer/style_h450.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/slideWeOffer/style_h450.css");
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
exports.push([module.i, ".mainSlide3{\r\n    width: 100%;\r\n    height: 95%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-around;\r\n    position: relative;\r\n    top:2%;\r\n    border: solid transparent;\r\n    border-width: 20px 10px 50px 10px;\r\n    border-radius: 2%;\r\n    overflow: hidden;\r\n\r\n}\r\n.position{\r\n    position: absolute;\r\n}\r\n.center{\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.block{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border: 3px solid rgba(57, 57, 57, 0.79);\r\n    box-shadow: 0 0 10px 4px rgba(57, 57, 57, 0.79);\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n    padding: 0;\r\n}\r\n.transition{\r\n    transition: 0s !important;\r\n}\r\n.blockCenter img{\r\n    width: auto !important;\r\n}\r\n.block img{\r\n    height: auto !important;\r\n}\r\n.block_1, .block_7, .block_8, .block_11,\r\n.block_12, .block_15, .block_16{\r\n    transition:  50s linear;\r\n}\r\n.block_2, .block_6, .block_10, .block_14{\r\n    transition:  40s linear;\r\n}\r\n.block_3, .block_5, .block_9, .block_13{\r\n    transition: 30s linear;\r\n}\r\n.block_4{\r\n    transition: 20s linear;\r\n}\r\n@media screen and (max-width: 1100px) {\r\n    .block{\r\n        border: 1px solid rgba(57, 57, 57, 0.79);\r\n        box-shadow: 0 0 5px 2px rgba(57, 57, 57, 0.79);\r\n        border-radius: 5px;\r\n\r\n    }\r\n}\r\n@media screen and (max-width: 450px){\r\n    .block{\r\n        border: .5px solid rgba(57, 57, 57, 0.79);\r\n        box-shadow: 0 0 4px 1px rgba(57, 57, 57, 0.79);\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n", ""]);
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
exports.push([module.i, "\r\n/*-----------------------Slider---------------------------------------------------*/\r\n.slid{\r\n    width: 100% !important;\r\n    height: 100% !important;\r\n    position: absolute;\r\n    top: 0;\r\n    left:0;\r\n    transition: transform 0.4s;\r\n\r\n}\r\n\r\n.slid1{\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") repeat-x bottom,\r\n                url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat bottom,\r\n                linear-gradient(to top, #af8230, #1a2b58, #121e3e 60%);\r\n    color: aliceblue;\r\n    transition-delay: 0.20s;\r\n    background-size:auto,100% auto, auto;\r\n    z-index: 20;\r\n}\r\n.slid2{\r\n    background-color: rgba(67, 61, 154, 1);\r\n    transition-delay: 0.15s;\r\n    z-index: 19;\r\n\r\n}\r\n.slid3{\r\n    /*background-color: #7df0c8;*/\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat center center;\r\n    background-size: cover;\r\n    box-shadow: inset 0px 0px 40px 20px rgba(18, 30, 62, 0.6) ;\r\n    transition-delay: 0.10s;\r\n    z-index: 18;\r\n    color: #000068;\r\n\r\n}\r\n.slid3.menu-btn{\r\n    color: #000068;\r\n}\r\n.slid4{\r\n    background-color: #f3ff86;\r\n    color: #000068;\r\n    transition-delay: 0.05s;\r\n    z-index: 17;\r\n\r\n}\r\n.slid5{\r\n    background-color: #000068;\r\n    color: aliceblue !important;\r\n    transition-delay: 0s;\r\n    z-index: 16;\r\n\r\n}\r\n@keyframes slidDown{\r\n    0%{\r\n        top: 0;\r\n    }\r\n    100% {\r\n        top:100vh;\r\n    }\r\n}\r\n@keyframes slidUp{\r\n    from {\r\n        top: 100vh;\r\n    }\r\n    100% {\r\n        top:0;\r\n    }\r\n}\r\n.down{\r\n    top: 100vh;\r\n    animation: 1.2s ease-in-out slidDown;\r\n\r\n}\r\n.up{\r\n    top: 0;\r\n    animation: 1s ease-in-out slidUp;\r\n}\r\n.show {\r\n    z-index: 150;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n\r\n}\r\n/*----------------------------Arrow------------------------------------------------------*/\r\n@keyframes moveButton{\r\n    from {\r\n        margin-top: 0;\r\n    }\r\n    5%{\r\n        margin-top: 10px;\r\n    }\r\n    10%{\r\n        margin-top: 0;\r\n    }\r\n    15%{\r\n        margin-top: 10px;\r\n    }\r\n    20%{\r\n        margin-top: 0;\r\n    }\r\n    100%{\r\n        margin-top: 0;\r\n    }\r\n\r\n}\r\n.divArrowUP{\r\n    position: absolute;\r\n    width: 4em;\r\n    height: 4em;\r\n    padding: 8px 2px 2px 2px !important;\r\n    top:.5em;\r\n    left: calc(100vw - 5em);\r\n    border-radius: 50%;\r\n    z-index: 200;\r\n    outline:none;\r\n}\r\n.divArrowUP img {\r\n    height: 90%;\r\n    width: 90%;\r\n}\r\n.divArrowDown{\r\n    position: absolute;\r\n    width: 4em;\r\n    height: 4em;\r\n    transform: rotate(-90deg);\r\n    padding: 8px 2px 2px 2px !important;\r\n    top: calc(100% - 4em - 3em);\r\n    left: calc(100vw - 5em);\r\n    border-radius: 50%;\r\n    z-index: 200;\r\n    outline:none;\r\n}\r\n.divArrowDown img {\r\n    height: 90%;\r\n    width: 90%;\r\n    transform: rotate(90deg);\r\n\r\n}\r\n.animButton{\r\n    margin-top: 0;\r\n    animation: moveButton 5s ease-in-out infinite;\r\n}\r\n\r\n/*---------------------------------------------------------------*/\r\n@media screen and (max-width: 1200px){\r\n    .slid1{\r\n        background-size: auto,140% 30%, auto;\r\n        background-position: bottom, 100% bottom;\r\n    }\r\n}\r\n/*---------------------------------------------------------------*/\r\n@media screen and (max-width: 1100px){\r\n    .slid{\r\n        transition:  .6s linear;\r\n    }\r\n    .downW{\r\n        top: 0;\r\n        /*animation: 1.2s ease-in-out slidUp;*/\r\n\r\n    }\r\n    .upW{\r\n        top: -100vh;\r\n        /*animation: 1s ease-in-out slidDown;*/\r\n    }\r\n    .slid3{\r\n        box-shadow: inset 0px 0px 40px 10px rgba(18, 30, 62, 0.6) ;\r\n\r\n    }\r\n}\r\n/*--------------------------------------------------------------*/\r\n@media screen and (max-width: 900px) and (orientation: landscape) {\r\n    .divArrowDown{\r\n        top: calc(100% - 4em - 1em);\r\n    }\r\n    .slid1{\r\n        background-size: auto 15%,100% 35%, auto;\r\n        background-position: bottom, 100% bottom;\r\n    }\r\n}\r\n/*---------------------------------------------------------------*/\r\n@media screen and (max-width: 450px){\r\n    .slid1{\r\n        background-size: auto 15%,190% 25%, auto;\r\n        background-position: bottom, 100% bottom;\r\n    }\r\n    .divArrowDown, .divArrowUP{\r\n        width: 3em;\r\n        height: 3em;\r\n        left: calc(100vw - 3em);\r\n    }\r\n    .slid3{\r\n        box-shadow: inset 0px 0px 40px 5px rgba(18, 30, 62, 0.6) ;\r\n\r\n    }\r\n}\r\n\r\n", ""]);
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
                    if(item.id === 'Templates'){
                        if(item.lastElementChild.scrollTop === 0){
                            item.classList.remove('show', 'up');
                            item.nextElementSibling.classList.remove('upW');
                            item.nextElementSibling.classList.add('show');
                        }
                    }else {
                        item.classList.remove('show', 'downW');
                        item.nextElementSibling.classList.remove('upW');
                        item.nextElementSibling.classList.add('show', 'downW');
                    }
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



// function for create page ==========================================

function buildPage() {
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
    positionMoon : 0,
    positionSun : 100,
    classRedStars : '.starRed',
    classYellowStars : '.starYellow',
    classBlueStars : '.starBlue',
    bgcColorRedStar : '#FA8072',
    bgcColorYellowStar : 'yellow',
    bgcColorBlueStar : '#00FFFF',
    positionModal : -100,
    positionSvgContainer : 0,
    countRotateSvgContainer : 0,
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
    for(let i = 0; i <= variables.paramsScreen.length; i++){
        if(window.innerWidth < variables.paramsScreen[i]){
            createElementsSlidWeOffer.blockSVGWeOffer.innerHTML = data[variables.paramsScreen[i]];
            break;
        }
    }
};


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
    let someModal = document.querySelector(variables.modalWindows[classModal]),
        timeOpen = setInterval(() => {
            if(variables.positionSvgContainer === 100){
                variables.positionModal += 2 ;
                variables.positionSun -= 2 ;
            }else{
                variables.positionSvgContainer += 2 ;
            }
            variables.positionMoon === -36 ? '' : variables.positionMoon -- ;
            variables.positionModal === -70 ? bgcColorModWin('day') : '';
            createElementsSlidWeOffer.blockSVGWeOffer.style.left = variables.positionSvgContainer + '%';
            createElementsSlidWeOffer.MoonWeOffer.style.right = variables.positionMoon + '%';
            createElementsSlidWeOffer.Sun.style.right = variables.positionSun + '%';
            someModal.style.left = variables.positionModal + '%';
            if(variables.positionModal === 0){
                clearInterval(timeOpen);
                variables.positionSvgContainer = -100;
                variables.positionModal = 0;
                variables.positionMoon = 100;
                variables.bgcColorRedStar = 'transparent';
                variables.bgcColorBlueStar = 'transparent';
                variables.bgcColorYellowStar = 'transparent';
            }
        }, 5);
}


const closeModal = function closeModalWindow(classModal){
    let someModal = document.querySelector(variables.modalWindows[classModal]),
        timeClose = setInterval(() => {
            if(variables.positionModal === 100){
                variables.positionSvgContainer += 2 ;
                variables.positionMoon -= 2 ;
            }else{
                variables.positionModal += 2 ;
            }
            variables.positionSun === -36 ? '' : variables.positionSun -- ;
            variables.positionSvgContainer === -70 ? bgcColorModWin('night') : '';
            createElementsSlidWeOffer.blockSVGWeOffer.style.left = variables.positionSvgContainer + '%';
            createElementsSlidWeOffer.MoonWeOffer.style.right = variables.positionMoon + '%';
            createElementsSlidWeOffer.Sun.style.right = variables.positionSun + '%';
            someModal.style.left = variables.positionModal + '%';
            if(variables.positionSvgContainer === 0){
                clearInterval(timeClose);
                variables.positionSvgContainer = 0;
                variables.positionModal = -100;
                variables.positionSun = 100;
                variables.bgcColorRedStar = '#FA8072';
                variables.bgcColorBlueStar = '#00FFFF';
                variables.bgcColorYellowStar = 'yellow';
            }
        }, 5);
}

// bgc nigth or day
const bgcColorModWin = function backgroundColorModalWindows(paramsBgcol){
    let color = setInterval(() => {
        if(paramsBgcol === 'day'){
            variables.r1color === 66 ? '' : variables.r1color += 2 ;
            variables.r2color === 106 ? '' : variables.r2color += 2 ;
            variables.r3color === 224 ? '' : variables.r3color += 2 ;
            variables.r4color === 254 ? '' : variables.r4color += 2 ;
            variables.r5color === 254 ? '' : variables.r5color += 2 ;
            variables.r6color === 254 ? '' : variables.r6color += 2 ;
            variables.r1color === 66 && variables.r2color === 106 && variables.r3color === 224 && variables.r4color === 254 && variables.r5color === 254 && variables.r6color === 254? clearInterval(color) : '';
        }else{
            variables.r1color === 4 ? '' : variables.r1color -= 2 ;
            variables.r2color === 14 ? '' : variables.r2color -= 2 ;
            variables.r3color === 114 ? '' : variables.r3color -= 2 ;
            variables.r4color === 66 ? '' : variables.r4color -= 2 ;
            variables.r5color === 106 ? '' : variables.r5color -= 2 ;
            variables.r6color === 224 ? '' : variables.r6color -= 2 ;
            variables.r1color === 4 && variables.r2color === 14 && variables.r3color === 114 && variables.r4color === 66 && variables.r5color === 106 && variables.r6color === 224 ? clearInterval(color) : '';
        }
        slid2.style.background = `linear-gradient(rgba(${variables.r1color},${variables.r2color},${variables.r3color}, 1) 30%, rgba(${variables.r4color},${variables.r5color},${variables.r6color}, 1) 100%) fixed`;
    }, .000001);
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
    setTimeout(()=> positionBlock(), 0);
    setInterval(()=> positionBlock(), 40000);
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
/*! exports provided: 0, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1150, 1300, 1450, 1600, 1950, 2600, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"0\":\"param0\",\"300\":\"<svg width='100%' height='100%' class='svgContainer'><text x='22%' y='36%' class='textSiteCompany' stroke='red' stroke-width='1px' fill='white'>Сайт компании</text><text x='41%' y='26%' class='textSocialNetwork' stroke='red' stroke-width='1px' fill='white'>Социальные сети</text><text x='60%' y='68%' class='textForum' stroke='red' stroke-width='1px' fill='white'>Форум</text><text x='28%' y='48%' class='textGameSours' stroke='red' stroke-width='1px' fill='white'>Развлекательный ресурс</text><text x='14%' y='8%' class='textBlog' stroke='red' stroke-width='1px' fill='white'>Блог</text><text x='68%' y='80%' class='textLanding' stroke='red' stroke-width='1px' fill='white'>Лендинг</text><text x='20%' y='17%' class='textPortfolio' stroke='red' stroke-width='1px' fill='white'>Портфолио</text><text x='5%' y='58%' class='textInternetShop' stroke='red' stroke-width='1px' fill='white'>Интернет магазин</text></svg>\",\"350\":\"<svg width='100%' height='100%' class='svgContainer'><text x='22%' y='36%' class='textSiteCompany' stroke='red' stroke-width='1px' fill='white'>Сайт компании</text><text x='41%' y='26%' class='textSocialNetwork' stroke='red' stroke-width='1px' fill='white'>Социальные сети</text><text x='60%' y='68%' class='textForum' stroke='red' stroke-width='1px' fill='white'>Форум</text><text x='25%' y='48%' class='textGameSours' stroke='red' stroke-width='1px' fill='white'>Развлекательный ресурс</text><text x='14%' y='8%' class='textBlog' stroke='red' stroke-width='1px' fill='white'>Блог</text><text x='68%' y='80%' class='textLanding' stroke='red' stroke-width='1px' fill='white'>Лендинг</text><text x='20%' y='17%' class='textPortfolio' stroke='red' stroke-width='1px' fill='white'>Портфолио</text><text x='5%' y='58%' class='textInternetShop' stroke='red' stroke-width='1px' fill='white'>Интернет магазин</text></svg>\",\"400\":\"<svg width='100%' height='100%' class='svgContainer'><text x='22%' y='36%' class='textSiteCompany' stroke='red' stroke-width='1px' fill='white'>Сайт компании</text><text x='41%' y='26%' class='textSocialNetwork' stroke='red' stroke-width='1px' fill='white'>Социальные сети</text><text x='60%' y='68%' class='textForum' stroke='red' stroke-width='1px' fill='white'>Форум</text><text x='28%' y='48%' class='textGameSours' stroke='red' stroke-width='1px' fill='white'>Развлекательный ресурс</text><text x='14%' y='8%' class='textBlog' stroke='red' stroke-width='1px' fill='white'>Блог</text><text x='68%' y='80%' class='textLanding' stroke='red' stroke-width='1px' fill='white'>Лендинг</text><text x='20%' y='17%' class='textPortfolio' stroke='red' stroke-width='1px' fill='white'>Портфолио</text><text x='5%' y='58%' class='textInternetShop' stroke='red' stroke-width='1px' fill='white'>Интернет магазин</text></svg>\",\"450\":\"<svg width='100%' height='100%' class='svgContainer'><text x='22%' y='36%' class='textSiteCompany' stroke='red' stroke-width='1px' fill='white'>Сайт компании</text><text x='41%' y='26%' class='textSocialNetwork' stroke='red' stroke-width='1px' fill='white'>Социальные сети</text><text x='60%' y='68%' class='textForum' stroke='red' stroke-width='1px' fill='white'>Форум</text><text x='28%' y='48%' class='textGameSours' stroke='red' stroke-width='1px' fill='white'>Развлекательный ресурс</text><text x='14%' y='8%' class='textBlog' stroke='red' stroke-width='1px' fill='white'>Блог</text><text x='68%' y='80%' class='textLanding' stroke='red' stroke-width='1px' fill='white'>Лендинг</text><text x='20%' y='17%' class='textPortfolio' stroke='red' stroke-width='1px' fill='white'>Портфолио</text><text x='5%' y='58%' class='textInternetShop' stroke='red' stroke-width='1px' fill='white'>Интернет магазин</text></svg>\",\"500\":\"<svg width='100%' height='100%' class='svgContainer'><text x='22%' y='36%' class='textSiteCompany' stroke='red' stroke-width='1px' fill='white'>Сайт компании</text><text x='41%' y='26%' class='textSocialNetwork' stroke='red' stroke-width='1px' fill='white'>Социальные сети</text><text x='60%' y='68%' class='textForum' stroke='red' stroke-width='1px' fill='white'>Форум</text><text x='28%' y='48%' class='textGameSours' stroke='red' stroke-width='1px' fill='white'>Развлекательный ресурс</text><text x='14%' y='8%' class='textBlog' stroke='red' stroke-width='1px' fill='white'>Блог</text><text x='68%' y='80%' class='textLanding' stroke='red' stroke-width='1px' fill='white'>Лендинг</text><text x='20%' y='17%' class='textPortfolio' stroke='red' stroke-width='1px' fill='white'>Портфолио</text><text x='5%' y='58%' class='textInternetShop' stroke='red' stroke-width='1px' fill='white'>Интернет магазин</text></svg>\",\"550\":\"<svg width='100%' height='100%' class='svgContainer'><text x='45%' y='66%' class='textSiteCompany' stroke='red' stroke-width='1px' fill='white'>Сайт компании</text> <text x='50%' y='35%' class='textSocialNetwork' stroke='red' stroke-width='1px' fill='white'>Социальные сети</text> <text x='11%' y='30%' class='textForum' stroke='red' stroke-width='1px' fill='white'>Форум</text> <text x='35%' y='21%' class='textGameSours' stroke='red' stroke-width='1px' fill='white'>Развлекательный ресурс</text> <text x='63%' y='78%' class='textBlog' stroke='red' stroke-width='1px' fill='white'>Блог</text> <text x='10%' y='10%' class='textLanding' stroke='red' stroke-width='1px' fill='white'>Лендинг</text> <text x='70%' y='55%' class='textPortfolio' stroke='red' stroke-width='1px' fill='white'>Портфолио</text> <text x='19%' y='45%' class='textInternetShop' stroke='red' stroke-width='1px' fill='white'>Интернет магазин</text></svg>\",\"600\":\"<text x='45%' y='66%' class='textSiteCompany' stroke='red' stroke-width='1px' fill='white'>Сайт компании</text> <text x='50%' y='35%' class='textSocialNetwork' stroke='red' stroke-width='1px' fill='white'>Социальные сети</text> <text x='11%' y='30%' class='textForum' stroke='red' stroke-width='1px' fill='white'>Форум</text> <text x='35%' y='21%' class='textGameSours' stroke='red' stroke-width='1px' fill='white'>Развлекательный ресурс</text> <text x='63%' y='78%' class='textBlog' stroke='red' stroke-width='1px' fill='white'>Блог</text> <text x='10%' y='10%' class='textLanding' stroke='red' stroke-width='1px' fill='white'>Лендинг</text> <text x='70%' y='55%' class='textPortfolio' stroke='red' stroke-width='1px' fill='white'>Портфолио</text> <text x='19%' y='45%' class='textInternetShop' stroke='red' stroke-width='1px' fill='white'>Интернет магазин</text></svg>\",\"650\":\"<svg width='100%' height='100%' class='svgContainer'><text x='45%' y='66%' class='textSiteCompany' stroke='red' stroke-width='1px' fill='white'>Сайт компании</text> <text x='50%' y='35%' class='textSocialNetwork' stroke='red' stroke-width='1px' fill='white'>Социальные сети</text> <text x='11%' y='30%' class='textForum' stroke='red' stroke-width='1px' fill='white'>Форум</text> <text x='35%' y='21%' class='textGameSours' stroke='red' stroke-width='1px' fill='white'>Развлекательный ресурс</text> <text x='63%' y='78%' class='textBlog' stroke='red' stroke-width='1px' fill='white'>Блог</text> <text x='10%' y='10%' class='textLanding' stroke='red' stroke-width='1px' fill='white'>Лендинг</text> <text x='70%' y='55%' class='textPortfolio' stroke='red' stroke-width='1px' fill='white'>Портфолио</text> <text x='19%' y='45%' class='textInternetShop' stroke='red' stroke-width='1px' fill='white'>Интернет магазин</text></svg>\",\"700\":\"<svg width='100%' height='100%' class='svgContainer'><text x='45%' y='66%' class='textSiteCompany' stroke='red' stroke-width='1px' fill='white'>Сайт компании</text> <text x='50%' y='35%' class='textSocialNetwork' stroke='red' stroke-width='1px' fill='white'>Социальные сети</text> <text x='11%' y='30%' class='textForum' stroke='red' stroke-width='1px' fill='white'>Форум</text> <text x='35%' y='21%' class='textGameSours' stroke='red' stroke-width='1px' fill='white'>Развлекательный ресурс</text> <text x='63%' y='78%' class='textBlog' stroke='red' stroke-width='1px' fill='white'>Блог</text> <text x='10%' y='10%' class='textLanding' stroke='red' stroke-width='1px' fill='white'>Лендинг</text> <text x='70%' y='55%' class='textPortfolio' stroke='red' stroke-width='1px' fill='white'>Портфолио</text> <text x='19%' y='45%' class='textInternetShop' stroke='red' stroke-width='1px' fill='white'>Интернет магазин</text></svg>\",\"750\":\"<svg width='100%' height='100%' class='svgContainer'><text x='45%' y='66%' class='textSiteCompany' stroke='red' stroke-width='1px' fill='white'>Сайт компании</text> <text x='10%' y='10%' class='textSocialNetwork' stroke='red' stroke-width='1px' fill='white'>Социальные сети</text> <text x='11%' y='30%' class='textForum' stroke='red' stroke-width='1px' fill='white'>Форум</text> <text x='35%' y='25%' class='textGameSours' stroke='red' stroke-width='1px' fill='white'>Развлекательный ресурс</text> <text x='70%' y='38%' class='textBlog' stroke='red' stroke-width='1px' fill='white'>Блог</text> <text x='60%' y='12%' class='textLanding' stroke='red' stroke-width='1px' fill='white'>Лендинг</text> <text x='70%' y='55%' class='textPortfolio' stroke='red' stroke-width='1px' fill='white'>Портфолио</text> <text x='19%' y='45%' class='textInternetShop' stroke='red' stroke-width='1px' fill='white'>Интернет магазин</text></svg>\",\"800\":\"<svg width='100%' height='100%' class='svgContainer'><text x='45%' y='66%' class='textSiteCompany' stroke='red' stroke-width='1px' fill='white'>Сайт компании</text> <text x='10%' y='10%' class='textSocialNetwork' stroke='red' stroke-width='1px' fill='white'>Социальные сети</text> <text x='11%' y='30%' class='textForum' stroke='red' stroke-width='1px' fill='white'>Форум</text> <text x='35%' y='25%' class='textGameSours' stroke='red' stroke-width='1px' fill='white'>Развлекательный ресурс</text> <text x='70%' y='38%' class='textBlog' stroke='red' stroke-width='1px' fill='white'>Блог</text> <text x='60%' y='12%' class='textLanding' stroke='red' stroke-width='1px' fill='white'>Лендинг</text> <text x='70%' y='55%' class='textPortfolio' stroke='red' stroke-width='1px' fill='white'>Портфолио</text> <text x='19%' y='45%' class='textInternetShop' stroke='red' stroke-width='1px' fill='white'>Интернет магазин</text></svg>\",\"850\":\"<svg width='100%' height='100%' class='svgContainer'><text x='45%' y='66%' class='textSiteCompany' stroke='red' stroke-width='1px' fill='white'>Сайт компании</text> <text x='10%' y='10%' class='textSocialNetwork' stroke='red' stroke-width='1px' fill='white'>Социальные сети</text> <text x='11%' y='30%' class='textForum' stroke='red' stroke-width='1px' fill='white'>Форум</text> <text x='35%' y='25%' class='textGameSours' stroke='red' stroke-width='1px' fill='white'>Развлекательный ресурс</text> <text x='70%' y='38%' class='textBlog' stroke='red' stroke-width='1px' fill='white'>Блог</text> <text x='60%' y='12%' class='textLanding' stroke='red' stroke-width='1px' fill='white'>Лендинг</text> <text x='70%' y='55%' class='textPortfolio' stroke='red' stroke-width='1px' fill='white'>Портфолио</text> <text x='19%' y='45%' class='textInternetShop' stroke='red' stroke-width='1px' fill='white'>Интернет магазин</text></svg>\",\"900\":\"<svg width='100%' height='100%' class='svgContainer'><text x='45%' y='66%' class='textSiteCompany' stroke='red' stroke-width='1px' fill='white'>Сайт компании</text><text x='40%' y='10%' class='textSocialNetwork' stroke='red' stroke-width='1px' fill='white'>Социальные сети</text><text x='70%' y='38%' class='textForum' stroke='red' stroke-width='1px' fill='white'>Форум</text><text x='19%' y='48%' class='textGameSours' stroke='red' stroke-width='1px' fill='white'>Развлекательный ресурс</text><text x='60%' y='23%' class='textBlog' stroke='red' stroke-width='1px' fill='white'>Блог</text><text x='12%' y='15%' class='textLanding' stroke='red' stroke-width='1px' fill='white'>Лендинг</text><text x='75%' y='55%' class='textPortfolio' stroke='red' stroke-width='1px' fill='white'>Портфолио</text><text x='11%' y='30%' class='textInternetShop' stroke='red' stroke-width='1px' fill='white'>Интернет магазин</text></svg>\",\"950\":\"<svg width='100%' height='100%' class='svgContainer'><text x='45%' y='66%' class='textSiteCompany' stroke='red' stroke-width='1px' fill='white'>Сайт компании</text><text x='40%' y='10%' class='textSocialNetwork' stroke='red' stroke-width='1px' fill='white'>Социальные сети</text><text x='70%' y='38%' class='textForum' stroke='red' stroke-width='1px' fill='white'>Форум</text><text x='19%' y='48%' class='textGameSours' stroke='red' stroke-width='1px' fill='white'>Развлекательный ресурс</text><text x='60%' y='23%' class='textBlog' stroke='red' stroke-width='1px' fill='white'>Блог</text><text x='12%' y='15%' class='textLanding' stroke='red' stroke-width='1px' fill='white'>Лендинг</text><text x='75%' y='55%' class='textPortfolio' stroke='red' stroke-width='1px' fill='white'>Портфолио</text><text x='11%' y='30%' class='textInternetShop' stroke='red' stroke-width='1px' fill='white'>Интернет магазин</text></svg>\",\"1000\":\"<svg width='100%' height='100%' class='svgContainer'><text x='45%' y='66%' class='textSiteCompany' stroke='red' stroke-width='1px' fill='white'>Сайт компании</text><text x='40%' y='10%' class='textSocialNetwork' stroke='red' stroke-width='1px' fill='white'>Социальные сети</text><text x='70%' y='38%' class='textForum' stroke='red' stroke-width='1px' fill='white'>Форум</text><text x='19%' y='48%' class='textGameSours' stroke='red' stroke-width='1px' fill='white'>Развлекательный ресурс</text><text x='60%' y='23%' class='textBlog' stroke='red' stroke-width='1px' fill='white'>Блог</text><text x='12%' y='15%' class='textLanding' stroke='red' stroke-width='1px' fill='white'>Лендинг</text><text x='75%' y='55%' class='textPortfolio' stroke='red' stroke-width='1px' fill='white'>Портфолио</text><text x='11%' y='30%' class='textInternetShop' stroke='red' stroke-width='1px' fill='white'>Интернет магазин</text></svg>\",\"1150\":\"<svg width='100%' height='100%' class='svgContainer'><text x='45%' y='66%' class='textSiteCompany' stroke='red' stroke-width='1px' fill='white'>Сайт компании</text><text x='50%' y='12%' class='textSocialNetwork' stroke='red' stroke-width='1px' fill='white'>Социальные сети</text><text x='11%' y='30%' class='textForum' stroke='red' stroke-width='1px' fill='white'>Форум</text><text x='19%' y='45%' class='textGameSours' stroke='red' stroke-width='1px' fill='white'>Развлекательный ресурс</text><text x='70%' y='38%' class='textBlog' stroke='red' stroke-width='1px' fill='white'>Блог</text><text x='10%' y='10%' class='textLanding' stroke='red' stroke-width='1px' fill='white'>Лендинг</text><text x='75%' y='55%' class='textPortfolio' stroke='red' stroke-width='1px' fill='white'>Портфолио</text><text x='35%' y='27%' class='textInternetShop' stroke='red' stroke-width='1px' fill='white'>Интернет магазин</text></svg>\",\"1300\":\"<svg width='100%' height='100%' class='svgContainer'><text x='19%' y='46%' class='textSiteCompany' stroke='red' stroke-width='1px' fill='white'>Сайт компании</text> <text x='53%' y='43%' class='textSocialNetwork' stroke='red' stroke-width='1px' fill='white'>Социальные сети</text> <text x='11%' y='30%' class='textForum' stroke='red' stroke-width='1px' fill='white'>Форум</text> <text x='50%' y='12%' class='textGameSours' stroke='red' stroke-width='1px' fill='white'>Развлекательный ресурс</text> <text x='75%' y='60%' class='textBlog' stroke='red' stroke-width='1px' fill='white'>Блог</text> <text x='15%' y='11%' class='textLanding' stroke='red' stroke-width='1px' fill='white'>Лендинг</text> <text x='45%' y='66%' class='textPortfolio' stroke='red' stroke-width='1px' fill='white'>Портфолио</text> <text x='35%' y='27%' class='textInternetShop' stroke='red' stroke-width='1px' fill='white'>Интернет магазин</text></svg>\",\"1450\":\"<svg width='100%' height='100%' class='svgContainer'><text x='19%' y='45%' class='textSiteCompany' stroke='red' stroke-width='1px' fill='white'>Сайт компании</text> <text x='53%' y='42%' class='textSocialNetwork' stroke='red' stroke-width='1px' fill='white'>Социальные сети</text> <text x='11%' y='30%' class='textForum' stroke='red' stroke-width='1px' fill='white'>Форум</text> <text x='10%' y='10%' class='textGameSours' stroke='red' stroke-width='1px' fill='white'>Развлекательный ресурс</text> <text x='45%' y='66%' class='textBlog' stroke='red' stroke-width='1px' fill='white'>Блог</text> <text x='60%' y='82%' class='textLanding' stroke='red' stroke-width='1px' fill='white'>Лендинг</text> <text x='75%' y='60%' class='textPortfolio' stroke='red' stroke-width='1px' fill='white'>Портфолио</text> <text x='35%' y='24%' class='textInternetShop' stroke='red' stroke-width='1px' fill='white'>Интернет магазин</text></svg>\",\"1600\":\"<svg width='100%' height='100%' class='svgContainer'><path d='M450 215 C 800 215, 800 378, 480 380' stroke='white'/> <path d='M480 380 C 470 380, 400 380, 220 380' stroke='white'/> <path d='M220 380 C 0 380, 0 535, 255 535' stroke='white'/> <path d='M255 535 C 300 535, 370 535, 400 535' stroke='white'/> <path d='M400 535 C 450 535, 500 535, 520 570' stroke='white'/> <path d='M520 570 C 550 620, 650 620, 780 620' stroke='white'/> <path d='M780 620 C 910 620, 945 600, 970 560' stroke='white'/> <path d='M970 560 C 980 550, 990 500, 1075 500' stroke='white'/>  <path d='M1075 500 C 1100 500, 1150 500, 1280 500' stroke='white'/> <path d='M1280 500 C 1490 500, 1550 360, 1200 380 S 650 250, 955 250' stroke='white'/> <path d='M955 250 C 1000 250, 1150 250, 1250 250' stroke='white'/> <path d='M1250 250 C 1450 250, 1450 130, 960 130' stroke='white'/> <path d='M960 130 C 900 130, 850 130, 550 130' stroke='white'/> <path d='M550 130 C 200 120, -50 205, 150 215' stroke='white'/> <path d='M150 215 C 200 215, 220 215, 450 215' stroke='white'/> <image xlink:href='img/circle.png' id='circle' x='515' y='95' height='70' width='70'/> <animateMotion xlink:href='#circle' dur='50s' begin='0s' repeatCount='indefinite' fill='freeze' path='M0 0  c -350 -10, -600 75, -400 85 c 50 0, 70 0, 300 0 c 350 0, 350 163, 30 165 c -10 0, -80 0, -260 0 c -220 0, -220 155, 35 155 c 45 0, 115 0, 145 0 c 50 0, 100 0, 120 35 c 30 50, 130 50, 260 50 c 130 0, 165 -20, 190 -60 c 10 -10, 20 -60, 105 -60 c 25 0, 75 0, 205 0 c 210 0, 270 -140, -80 -120 s -550 -130, -245 -130 c 45 0, 195 0, 295 0 c 200 0, 200 -120, -290 -120 c -60 0, -110 0, -410 0' /> <text x='225' y='375' font-size='30px' stroke='red' stroke-width='1px' fill='white' class='textSiteCompany'> <animate attributeName='font-size' dur='50s' values='30px; 30px; 42px; 42px; 42px; 42px; 30px; 30px' keyTimes='0; 0.23; 0.24; 0.24; 0.26; 0.3; 0.31; 1' begin='0s' repeatCount='indefinite' fill='freeze'/> Сайт компании</text> <text x='966' y='245' font-size='30px' stroke='red' stroke-width='1px' fill='white' class='textSocialNetwork'> <animate attributeName='font-size' dur='50s' values='30px; 30px; 42px; 42px; 42px; 42px; 30px; 30px' keyTimes='0; 0.76; 0.77; 0.78; 0.79; 0.83; 0.84; 1' begin='0s' repeatCount='indefinite' fill='freeze'/> Социальные сети</text> <text x='259' y='529' font-size='30px' stroke='red' stroke-width='1px' fill='white' class='textForum'> <animate attributeName='font-size' dur='50s' values='30px; 30px; 42px; 42px; 42px; 42px; 30px; 30px' keyTimes='0; 0.37; 0.38; 0.39; 0.4; 0.405; 0.415; 1' begin='0s' repeatCount='indefinite' fill='freeze'/> Форум</text> <text x='566' y='125' font-size='30px' stroke='red' stroke-width='1px' fill='white' class='textGameSours'> <animate attributeName='font-size' dur='50s' values='30px; 30px; 42px; 42px; 42px; 42px; 30px; 30px' keyTimes='0; 0.88; 0.89; 0.96; 0.965; 0.99; 1; 1' begin='0s' repeatCount='indefinite' fill='freeze'/> Развлекательный ресурс</text> <text x='1093' y='377' font-size='30px' stroke='red' stroke-width='1px' fill='white' class='textBlog'> <animate attributeName='font-size' dur='50s' values='30px; 30px; 42px; 42px; 42px; 42px; 30px; 30px' keyTimes='0; 0.65; 0.66; 0.665; 0.67; 0.68; 0.69; 1' begin='0s' repeatCount='indefinite' fill='freeze'/> Блог</text> <text x='703' y='615' font-size='30px' stroke='red' stroke-width='1px' fill='white' class='textLanding'> <animate attributeName='font-size' dur='50s' values='30px; 30px; 42px; 42px; 42px; 42px; 30px; 30px' keyTimes='0; 0.455; 0.465; 0.475; 0.49; 0.50; 0.51; 1' begin='0s' repeatCount='indefinite' fill='freeze'/> Лендинг</text> <text x='1085' y='495' font-size='30px' stroke='red' stroke-width='1px' fill='white' class='textPortfolio'> <animate attributeName='font-size' dur='50s' values='30px; 30px; 42px; 42px; 42px; 42px; 30px; 30px' keyTimes='0; 0.53; 0.54; 0.57; 0.58; 0.59; 0.6; 1' begin='0s' repeatCount='indefinite' fill='freeze'/> Портфолио</text> <text x='130' y='210' font-size='30px' stroke='red' stroke-width='1px' fill='white' class='textInternetShop'> <animate attributeName='font-size' dur='50s' values='30px; 30px; 42px; 42px; 42px; 42px; 30px; 30px' keyTimes='0; 0.09; 0.1; 0.105; 0.11; 0.17; 0.18; 1' begin='0s' repeatCount='indefinite' fill='freeze'/> Интернет магазин</text></svg>\",\"1950\":\"<svg width='100%' height='100%' class='svgContainer'><path d='M90 170 C 100 170, 200 170, 310 170' stroke='white'/> <path d='M310 170 C 550 170, 600 260, 300 270 S 200 386, 450 386' stroke='white'/> <path d='M450 386 C 480 386, 500 386, 820 386' stroke='white'/> <path d='M820 386 C 1100 386, 1300 500, 980 510'stroke='white'/> <path d='M980 510 C 900 510, 800 510, 750 510' stroke='white'/> <path d='M750 510 C 490 510, 490 630, 1000 630' stroke='white'/> <path d='M1000 630 C 1010 630, 1050 630, 1100 630'stroke='white' /> <path d='M1100 630 C 1150 630, 1230 620, 1250 585'stroke='white' /> <path d='M1250 585 C 1270 560, 1320 550, 1385 550'stroke='white' /> <path d='M1385 550 C 1720 550, 1720 450, 1450 450' stroke='white'/> <path d='M1450 450 C 1200 450, 1200 350, 1500 350 S 1700 250, 1530 250' stroke='white'/> <path d='M1530 250 C 1400 250, 1400 250, 1350 250' stroke='white'/> <path d='M1350 250 C 1220 250, 1205 230, 1185 210' stroke='white'/> <path d='M1185 210 C 1170 195, 1150 186, 950 186'stroke='white' /> <path d='M950 186 C 840 190, 820 165, 820 150' stroke='white'/> <path d='M820 150 C 820 145, 830 90, 600 90' stroke='white'/> <path d='M600 90 C 450 90, 400 90, 380 90' stroke='white'/> <path d='M380 90 C 100 80, -100 170, 90 170' stroke='white'/> <image xlink:href='img/circle.png' id='circle' x='345' y='55' height='70' width='70' /> <animateMotion xlink:href='#circle' dur='60s' begin='0s' repeatCount='indefinite' fill='freeze' path='M0 0 c -280 -10, -480 80, -290 80 c 10 0, 110 0, 220 0 c 240 0, 290 90, -10 100 s -100 116, 150 116 c 30 0, 50 0, 370 0 c 280 0, 480 114, 160 124 c -80 0, -180 0, -230 0 c -260 0, -260 120, 250 120 c 10 0, 50 0, 100 0 c 50 0, 130 -10, 150 -45 c 20 -25, 70 -35, 135 -35 c 335 0, 335 -100, 65 -100 c -250 0, -250 -100, 50 -100 s 200 -100, 30 -100 c -130 0, -130 0, -180 0 c -130 0, -145 -20, -165 -40 c -15 -15, -35 -24, -235 -24 c -110 4, -130 -21, -130 -36 c 0 -5, 10 -60, -220 -60 c -150 0, -200 0, -220 0' /> <text x='100' y='167' font-size='30px' stroke='red' stroke-width='1px' fill='white' class='textSiteCompany'> <animate attributeName='font-size' dur='60s' values='30px; 30px; 42px; 42px; 42px; 42px; 30px; 30px' keyTimes='0; 0.06; 0.07; 0.08; 0.09; 0.125; 0.135; 1' begin='0s' repeatCount='indefinite' fill='freeze'/> Сайт компании</text> <text x='700' y='505' font-size='30px' stroke='red' stroke-width='1px' fill='white' class='textSocialNetwork'> <animate attributeName='font-size' dur='60s' values='30px; 30px; 42px; 42px; 42px; 42px; 30px; 30px' keyTimes='0; 0.37; 0.38; 0.42; 0.43; 0.44; 0.45; 1' begin='0s' repeatCount='indefinite' fill='freeze'/> Социальные сети</text> <text x='950' y='183' font-size='30px' stroke='red' stroke-width='1px' fill='white' class='textForum'> <animate attributeName='font-size' dur='60s' values='30px; 30px; 42px; 42px; 42px; 42px; 30px; 30px' keyTimes='0; 0.87; 0.88; 0.885; 0.89; 0.9; 0.91; 1' begin='0s' repeatCount='indefinite' fill='freeze'/> Форум</text> <text x='420' y='383' font-size='30px' stroke='red' stroke-width='1px' fill='white' class='textGameSours'> <animate attributeName='font-size' dur='60s' values='30px; 30px; 42px; 42px; 42px; 42px; 30px; 30px' keyTimes='0; 0.24; 0.25; 0.3; 0.31; 0.33; 0.34; 1' begin='0s' repeatCount='indefinite' fill='freeze'/> Развлекательный ресурс</text> <text x='1440' y='445' font-size='30px' stroke='red' stroke-width='1px' fill='white' class='textBlog'> <animate attributeName='font-size' dur='60s' values='30px; 30px; 42px; 42px; 42px; 42px; 30px; 30px' keyTimes='0; 0.65; 0.66; 0.665; 0.67; 0.675; 0.685; 1' begin='0s' repeatCount='indefinite' fill='freeze'/> Блог</text> <text x='960' y='625' font-size='30px' stroke='red' stroke-width='1px' fill='white' class='textLanding'> <animate attributeName='font-size' dur='60s' values='30px; 30px; 42px; 42px; 42px; 42px; 30px; 30px' keyTimes='0; 0.515; 0.525; 0.54; 0.545; 0.555; 0.565; 1' begin='0s' repeatCount='indefinite' fill='freeze'/> Лендинг</text> <text x='1350' y='247' font-size='30px' stroke='red' stroke-width='1px' fill='white' class='textPortfolio'> <animate attributeName='font-size' dur='60s' values='30px; 30px; 42px; 42px; 42px; 42px; 30px; 30px' keyTimes='0; 0.78; 0.79; 0.815; 0.82; 0.835; 0.845; 1' begin='0s' repeatCount='indefinite' fill='freeze'/> Портфолио</text> <text x='350' y='87' font-size='30px' stroke='red' stroke-width='1px' fill='white' class='textInternetShop'> <animate attributeName='font-size' dur='60s' values='30px; 30px; 42px; 42px; 42px; 42px; 30px; 30px' keyTimes='0; 0.925; 0.935; 0.95; 0.955; 0.99; 1; 1' begin='0s' repeatCount='indefinite' fill='freeze'/> Интернет магазин</text></svg>\",\"2600\":\"<svg width='100%' height='100%' class='svgContainer'><path d='M520 205 C 850 205, 800 320, 350 320 S 100 480, 380 480' stroke='white'/><path d='M380 480 C 500 480, 600 480, 790 480' stroke='white'/><path d='M790 480 C 1400 480, 1400 601, 1120 601' stroke='white'/><path d='M1120 601 C 1100 601, 1100 601, 800 601' stroke='white'/><path d='M800 601 C 550 601, 550 750, 1400 750' stroke='white'/><path d='M1400 750 C 2135 750, 2450 550, 2130 540' stroke='white'/><path d='M2130 540 C 2000 540, 1950 540, 1780 540' stroke='white'/><path d='M1780 540 C 1400 540, 1400 400, 1850 410 S 2200 300, 1860 302' stroke='white'/><path d='M1860 302 C 1800 302, 1800 302, 1650 302' stroke='white'/><path d='M1650 302 C 700 320, 900 210, 1140 220' stroke='white'/><path d='M1140 220 C 1200 220, 1200 220, 1280 220' stroke='white'/><path d='M1280 220 C 1600 220, 1550 100, 800 100' stroke='white'/><path d='M800 100 C 0 100, 50 200, 250 205' stroke='white'/><path d='M250 205 C 400 205, 500 205, 520 205' stroke='white'/><image xlink:href='img/circle.png' id='circle' x='485' y='170' height='70' width='70'/>  <animateMotion  xlink:href='#circle' dur='90s' begin='0s' repeatCount='indefinite' fill='freeze' path='M0 0 c 330 0, 280 115, -170 115 s -250 160, 30 160 c 120 0, 220 0, 410 0 c 610 0, 610 121, 330 121 c -20 0, -20 0, -320 0 c -250 0, -250 149, 600 149 c 735 0, 1050 -200, 730 -210 c -130 0, -180 0, -350 0 c -380 0, -380 -140, 70 -130 s 350 -110, 10 -108 c -60 0, -60 0, -210 0 c -950 18, -750 -92, -510 -82 c 60 0, 60 0, 140 0 c 320 0, 270 -120, -480 -120 c -800 0, -750 100, -550 105 c 150 0, 250 0, 270 0'/><text x='250' y='200' font-size='30px' stroke='red' stroke-width='1px' fill='white' class='textSiteCompany'> <animate attributeName='font-size' dur='90s' values='30px; 30px; 42px; 42px; 42px; 42px; 30px; 30px' keyTimes='0; 0.96; 0.965; 0.98; 0.99; 0.995; 1; 1' begin='0s' repeatCount='indefinite' fill='freeze'/> Сайт компании</text><text x='800' y='595' font-size='30px' stroke='red' stroke-width='1px' fill='white' class='textSocialNetwork'> <animate attributeName='font-size' dur='90s' values='30px; 30px; 42px; 42px; 42px; 42px; 30px; 30px' keyTimes='0; 0.235; 0.24; 0.25; 0.26; 0.28; 0.285; 1' begin='0s' repeatCount='indefinite' fill='freeze'/> Социальные сети</text><text x='1145' y='210' font-size='30px' stroke='red' stroke-width='1px' fill='white' class='textForum'> <animate attributeName='font-size' dur='90s' values='30px; 30px; 42px; 42px; 42px; 42px; 30px; 30px' keyTimes='0; 0.77; 0.775; 0.785; 0.79; 0.795; 0.8; 1' begin='0s' repeatCount='indefinite' fill='freeze'/> Форум</text><text x='385' y='475' font-size='30px' stroke='red' stroke-width='1px' fill='white' class='textGameSours'> <animate attributeName='font-size' dur='90s' values='30px; 30px; 42px; 42px; 42px; 42px; 30px; 30px' keyTimes='0; 0.125; 0.13; 0.14; 0.15; 0.18; 0.185; 1' begin='0s' repeatCount='indefinite' fill='freeze'/> Развлекательный ресурс</text><text x='765' y='93' font-size='30px' stroke='red' stroke-width='1px' fill='white' class='textBlog'> <animate attributeName='font-size' dur='90s' values='30px; 30px; 42px; 42px; 42px; 42px; 30px; 30px' keyTimes='0; 0.875; 0.88; 0.88; 0.885; 0.89; 0.895; 1' begin='0s' repeatCount='indefinite' fill='freeze'/> Блог</text><text x='1330' y='743' font-size='30px' stroke='red' stroke-width='1px' fill='white' class='textLanding'> <animate attributeName='font-size' dur='90s' values='30px; 30px; 42px; 42px; 42px; 42px; 30px; 30px' keyTimes='0; 0.365; 0.37; 0.38; 0.385; 0.39; 0.395; 1' begin='0s' repeatCount='indefinite' fill='freeze'/> Лендинг</text><text x='1665' y='295' font-size='30px' stroke='red' stroke-width='1px' fill='white' class='textPortfolio'> <animate attributeName='font-size' dur='90s' values='30px; 30px; 42px; 42px; 42px; 42px; 30px; 30px' keyTimes='0; 0.65; 0.655; 0.66; 0.67; 0.68; 0.685; 1' begin='0s' repeatCount='indefinite' fill='freeze'/> Портфолио</text><text x='1790' y='535' font-size='30px' stroke='red' stroke-width='1px' fill='white' class='textInternetShop'> <animate attributeName='font-size' dur='90s' values='30px; 30px; 42px; 42px; 42px; 42px; 30px; 30px' keyTimes='0; 0.475; 0.48; 0.5; 0.51; 0.52; 0.525; 1' begin='0s' repeatCount='indefinite' fill='freeze'/> Интернет магазин</text></svg>\"}");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9tb2RhbC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zbGlkZVdlT2ZmZXIvc3R5bGUxMTAwLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3NsaWRlV2VPZmZlci9zdHlsZTE0MDAuY3NzIiwid2VicGFjazovLy8uL3NyYy9jc3Mvc2xpZGVXZU9mZmVyL3N0eWxlMTYwMC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zbGlkZVdlT2ZmZXIvc3R5bGUxOTIwLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3NsaWRlV2VPZmZlci9zdHlsZTI1NjAuY3NzIiwid2VicGFjazovLy8uL3NyYy9jc3Mvc2xpZGVXZU9mZmVyL3N0eWxlMzIwLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3NsaWRlV2VPZmZlci9zdHlsZTQwMC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zbGlkZVdlT2ZmZXIvc3R5bGU2MDAuY3NzIiwid2VicGFjazovLy8uL3NyYy9jc3Mvc2xpZGVXZU9mZmVyL3N0eWxlODAwLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3NsaWRlV2VPZmZlci9zdHlsZVdlT2ZmZXIuY3NzIiwid2VicGFjazovLy8uL3NyYy9jc3Mvc2xpZGVXZU9mZmVyL3N0eWxlX2g0NTAuY3NzIiwid2VicGFjazovLy8uL3NyYy9jc3Mvc2xpZGVfMS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zbGlkZV8yLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3NsaWRlXzMuY3NzIiwid2VicGFjazovLy8uL3NyYy9jc3Mvc2xpZGVfNC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zbGlkZXIuY3NzIiwid2VicGFjazovLy8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9mb250cy9mb250LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2xpZGVzL3NsaWRlMS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NsaWRlcy9zbGlkZTIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zbGlkZXMvc2xpZGUzLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2xpZGVzL3NsaWRlNC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NsaWRlcy9zbGlkZTUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly8vLi9zcmMvZm9udHMvSGFuZ2luZyBMZXR0ZXJzLnR0ZiIsIndlYnBhY2s6Ly8vLi9zcmMvZm9udHMvU2Vnb2UgUHJpbnQgQm9sZC50dGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9Nb29uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2FtYWlvc3dpbS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9hbnlXNFl0bXBsLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2JhY2tHcm91bmQtbWluLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2JsdWVfc2t5LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2NhdC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9jYXRXZU9mZmZlci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9jaXJjbGUucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvY2xvdWRfMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9jbG91ZF8yLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2Nsb3VkXzMucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvY29tbWVudFRleHQucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvY29zbS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9kZXN0aW55LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2Rvd25BcnJvdy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9ncmFzcy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9ncmFzc1NuYWlsLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL21lbnVfd2hpdGUucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvbW9vbldlT2ZmZXIucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvcHJvdWRhbmRwdW5jaC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9yYWluZm9yZXN0Zm9vZHMuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWcvc3Rhci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9zdW4ucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvdGVtcGxhdGVfMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy90ZW1wbGF0ZV8yLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL3RlbXBsYXRlXzMucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvdGVtcGxhdGVfNC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy90ZW1wbGF0ZV81LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL3RlbXBsYXRlXzYucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvdGVtcGxhdGVfNy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy91cEFycm93LnBuZyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtR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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0Esa0JBQWtCLG9DQUFvQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLEtBQUssMkNBQU87O0FBRVosNERBQTRELE1BQU0sMkNBQU8sR0FBRzs7QUFFNUU7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxrQkFBa0IsR0FBRyxrQkFBa0IsR0FBRyxrQkFBa0IsaUJBQWlCLGtCQUFrQixHQUFHLGtCQUFrQixHQUFHLGtCQUFrQjtBQUNsTSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQ0FBQzs7QUFFRDs7O0FBR2Usb0VBQUssRTs7Ozs7Ozs7Ozs7O0FDNVpwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1QjtBQUN1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEO0FBQ0M7QUFDTDtBQUNHO0FBQ007QUFDQzs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0EsY0FBYywyREFBTSxFQUFFLDJEQUFNLEVBQUUsMkRBQU0sRUFBRSwyREFBTSxFQUFFLDJEQUFNLEVBQUUsMkRBQU0sRUFBRSwyREFBTSxFQUFFLDBEQUFNLEVBQUUsMkRBQU0sRUFBRSxzREFBTztBQUM3RixjQUFjLHlEQUFPLEVBQUUsK0RBQU8sRUFBRSxpRUFBTztBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFNBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsSUFBSTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOzs7QUFHZSx3RUFBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN6THpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVCO0FBQ3VCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzlDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJEQUFNO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsMkRBQU07QUFDM0I7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQiwyREFBTTtBQUMzQjtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLDJEQUFNO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsMkRBQU07QUFDM0I7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQiwyREFBTTtBQUMzQjtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLDJEQUFN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QWUsb0ZBQXVCLG9CQUFvQixFIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJpbmRleFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2FwcC9pbmRleC5qc1wiLFwidmVuZG9yc35pbmRleFwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIqe1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcblxcclxcbn1cXHJcXG4jbW9kYWwge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBQcmludCBCb2xkJztcXHJcXG4gICAgdG9wOiAtMTIwJTtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB6LWluZGV4OiA5OTk5O1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNyk7XFxyXFxufVxcclxcbi5tb2RhbEFjdGl2ZXtcXHJcXG4gICAgdG9wOiAwICFpbXBvcnRhbnQ7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBsaW5lYXI7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbEZvcm17XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgIHdpZHRoOiAzNWVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zZW07XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDdweCByZ2JhKDAsMCwwLC4yNSk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLm1vZGFsRm9ybSBtYWlue1xcclxcbiAgICBtYXJnaW46IDIwcHggYXV0bztcXHJcXG59XFxyXFxuLm1vZGFsRm9ybSBtYWluIHB7XFxyXFxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xcclxcbn1cXHJcXG4ubW9kYWxGb3JtIGhlYWRlciwgLm1vZGFsRm9ybSBmb290ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjYzVjNWM1O1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzkzOTM5MztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XFxyXFxufVxcclxcbi5tb2RhbEZvcm0gZm9vdGVyIHtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM5MzkzOTM7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xcclxcbiAgICAvKi1tb3otYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7Ki9cXHJcXG4gICAgLyotd2Via2l0LWJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4OyovXFxyXFxufVxcclxcbi5tb2RhbEZvcm0gZGl2LCAubW9kYWxGb3JtIGhlYWRlciwgLm1vZGFsRm9ybSBmb290ZXIge1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICB6LWluZGV4OiAyMDA7XFxyXFxufVxcclxcbi5tb2RhbEZvcm0gaDIge1xcclxcbiAgICBmb250LXNpemU6IDJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuLm1vZGFsRm9ybSAuYnRuIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBjb2xvcjogIzAwMDA2ODtcXHJcXG59XFxyXFxuLmNvbnRhY3Rze1xcclxcbmN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxyXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcclxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXHJcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxyXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXHJcXG5iLCB1LCBpLCBjZW50ZXIsXFxyXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXHJcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXHJcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXHJcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcXHJcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXFxyXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxyXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXHJcXG5tYXJnaW46IDA7XFxyXFxucGFkZGluZzogMDtcXHJcXG5ib3JkZXI6IDA7XFxyXFxuZm9udC1zaXplOiAxMDAlO1xcclxcbmZvbnQ6IGluaGVyaXQ7XFxyXFxudmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG4qe1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXHJcXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxcclxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxyXFxuZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbmxpbmUtaGVpZ2h0OiAxO1xcclxcbn1cXHJcXG5vbCwgdWwge1xcclxcbmxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGUsIHEge1xcclxcbnF1b3Rlczogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxyXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcclxcbmNvbnRlbnQ6ICcnO1xcclxcbmNvbnRlbnQ6IG5vbmU7XFxyXFxufVxcclxcbnRhYmxlIHtcXHJcXG5ib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcbmJvcmRlci1zcGFjaW5nOiAwO1xcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCl7XFxyXFxuXFxyXFxuICAgIGltZy5jYXRXZU9mZmZlciB7XFxyXFxuICAgICAgICB3aWR0aCA6IDI1JTtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICBpbWcubW9vbldlT2ZmZmVyLFxcclxcbiAgICBpbWcuc3VuV2VPZmZmZXIge1xcclxcbiAgICAgICAgd2lkdGggOiAxOCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgaW1nLnN1bldlT2ZmZmVyV2VPZmZmZXIge1xcclxcbiAgICAgICAgcmlnaHQ6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgdGV4dCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDI4cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgLnN0YXJXZU9mZmZlcixcXHJcXG4gICAgLnN0YXJZZWxsb3csXFxyXFxuICAgIC5zdGFyQmx1ZSxcXHJcXG4gICAgLnN0YXJSZWQge1xcclxcbiAgICAgICAgd2lkdGggOiAzcHg7XFxyXFxuICAgICAgICBoZWlnaHQgOiAzcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgXFxyXFxuICAgIC8qID09PT09PT09PT09PT09PT09PT09PT0gbW9kYWwgd2luZG93cyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG4gICAgXFxyXFxuICAgIFxcclxcbiAgICAubW9kYWxXZU9mZmZlciB7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQgOiBmbGV4LWVuZDtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICAubW9kYWxXZU9mZmZlciBwIHtcXHJcXG4gICAgICAgIHdpZHRoIDogNjAlO1xcclxcbiAgICAgICAgZm9udC1zaXplIDogMjhweDtcXHJcXG4gICAgICAgIHRleHQtYWxpZ24gOiBsZWZ0O1xcclxcbiAgICAgICAgcGFkZGluZyA6IDBweCA3MHB4IDBweCA0MHB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQgOiAxLjM7XFxyXFxuICAgIH0gICAgXFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQwMHB4KXt9XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcXHJcXG5cXHJcXG4gICAgaW1hZ2Uge1xcclxcbiAgICAgICAgdHJhbnNmb3JtLWJveCA6IGZpbGwtYm94O1xcclxcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbiA6IGNlbnRlcjtcXHJcXG4gICAgICAgIGFuaW1hdGlvbiA6IHJvdGF0ZUNpcmNsZSAycyBsaW5lYXIgaW5maW5pdGU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgQGtleWZyYW1lcyByb3RhdGVDaXJjbGUge1xcclxcbiAgICAgICAgMCUge1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybSA6IHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIDEwMCUge1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybSA6IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgICAgXFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjAwMHB4KXtcXHJcXG5cXHJcXG4gICAgaW1hZ2Uge1xcclxcbiAgICAgICAgdHJhbnNmb3JtLWJveCA6IGZpbGwtYm94O1xcclxcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbiA6IGNlbnRlcjtcXHJcXG4gICAgICAgIGFuaW1hdGlvbiA6IHJvdGF0ZUNpcmNsZSAycyBsaW5lYXIgaW5maW5pdGU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgQGtleWZyYW1lcyByb3RhdGVDaXJjbGUge1xcclxcbiAgICAgICAgMCUge1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybSA6IHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgMTAwJSB7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtIDogcm90YXRlKDM2MGRlZyk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgICAgXFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjYwMHB4KXtcXHJcXG5cXHJcXG4gICAgaW1hZ2Uge1xcclxcbiAgICAgICAgdHJhbnNmb3JtLWJveCA6IGZpbGwtYm94O1xcclxcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbiA6IGNlbnRlcjtcXHJcXG4gICAgICAgIGFuaW1hdGlvbiA6IHJvdGF0ZUNpcmNsZSAycyBsaW5lYXIgaW5maW5pdGU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQGtleWZyYW1lcyByb3RhdGVDaXJjbGUge1xcclxcbiAgICAgICAgMCUge1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybSA6IHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIDEwMCUge1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybSA6IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgICAgICBcXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xcclxcbiAgICBcXHJcXG4gICAgaW1nLmNhdFdlT2ZmZmVyIHtcXHJcXG4gICAgICAgIGJvdHRvbSA6IDBweDtcXHJcXG4gICAgICAgIGxlZnQgOiA0JTtcXHJcXG4gICAgICAgIHdpZHRoIDogNDUlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIGltZy5tb29uV2VPZmZmZXIsXFxyXFxuICAgIGltZy5zdW5XZU9mZmZlciB7XFxyXFxuICAgICAgICB3aWR0aCA6IDMwJTtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICBpbWcuc3VuV2VPZmZmZXIge1xcclxcbiAgICAgICAgcmlnaHQgOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcblxcclxcbiAgICB0ZXh0IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZSA6IDE4cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnN0YXJXZU9mZmZlcixcXHJcXG4gICAgLnN0YXJZZWxsb3csXFxyXFxuICAgIC5zdGFyQmx1ZSxcXHJcXG4gICAgLnN0YXJSZWQge1xcclxcbiAgICAgICAgei1pbmRleCA6IC0xMDAwO1xcclxcbiAgICAgICAgd2lkdGggOiAxLjVweDtcXHJcXG4gICAgICAgIGhlaWdodCA6IDEuNXB4O1xcclxcbiAgICAgICAgcG9zaXRpb24gOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXMgOiA1MCU7XFxyXFxuICAgICAgICBvcGFjaXR5IDogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBcXHJcXG4gICAgLyogPT09PT09PT09PT09PT09PT09PT09PSBtb2RhbCB3aW5kb3dzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcbiAgICBcXHJcXG4gICAgXFxyXFxuICAgIC5tb2RhbFdlT2ZmZmVyIHtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudCA6IGZsZXgtc3RhcnQ7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtcyA6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuXFxyXFxuICAgIC5tb2RhbFdlT2ZmZmVyPi5jb250YWluZXJXZU9mZmZlciB7XFxyXFxuICAgICAgICB3aWR0aCA6IDcwJTtcXHJcXG4gICAgICAgIGZsZXgtd3JhcCA6IHdyYXA7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgYnV0dG9uIHtcXHJcXG4gICAgICAgIG1hcmdpbiA6IDEwcHggMTBweCAwIGF1dG87XFxyXFxuICAgICAgICB3aWR0aCA6IDM1cHg7XFxyXFxuICAgICAgICBoZWlnaHQgOiAzNXB4O1xcclxcbiAgICAgICAgZm9udC1zaXplIDogMjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubW9kYWxXZU9mZmZlciBwIHtcXHJcXG4gICAgICAgIHdpZHRoIDogMTAwJTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZSA6IDE4cHg7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduIDogbGVmdDtcXHJcXG4gICAgICAgIHBhZGRpbmcgOiAxMHB4IDEwcHggMHB4IDEwcHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodCA6IDEuMTU7XFxyXFxuICAgIH0gICAgXFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpe1xcclxcblxcclxcbiAgICBpbWcuY2F0V2VPZmZmZXIge1xcclxcbiAgICAgICAgYm90dG9tIDogMHB4O1xcclxcbiAgICAgICAgbGVmdCA6IDQlO1xcclxcbiAgICAgICAgd2lkdGggOiA0NSU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgaW1nLm1vb25XZU9mZmZlcixcXHJcXG4gICAgaW1nLnN1bldlT2ZmZmVyIHtcXHJcXG4gICAgICAgIHdpZHRoIDogMzAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIGltZy5zdW5XZU9mZmZlciB7XFxyXFxuICAgICAgICByaWdodCA6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuXFxyXFxuICAgIHRleHQge1xcclxcbiAgICAgICAgZm9udC1zaXplIDogMjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICAuc3RhcldlT2ZmZmVyLFxcclxcbiAgICAuc3RhclllbGxvdyxcXHJcXG4gICAgLnN0YXJCbHVlLFxcclxcbiAgICAuc3RhclJlZCB7XFxyXFxuICAgICAgICB3aWR0aCA6IDJweDtcXHJcXG4gICAgICAgIGhlaWdodCA6IDJweDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgXFxyXFxuICAgIC8qID09PT09PT09PT09PT09PT09PT09PT0gbW9kYWwgd2luZG93cyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG4gICAgXFxyXFxuICAgIFxcclxcbiAgICAubW9kYWxXZU9mZmZlciB7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQgOiBmbGV4LXN0YXJ0O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXMgOiBmbGV4LXN0YXJ0O1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcblxcclxcbiAgICAubW9kYWxXZU9mZmZlcj4uY29udGFpbmVyV2VPZmZmZXIge1xcclxcbiAgICAgICAgd2lkdGggOiA3MCU7XFxyXFxuICAgICAgICBmbGV4LXdyYXAgOiB3cmFwO1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIFxcclxcbiAgICBidXR0b24ge1xcclxcbiAgICAgICAgbWFyZ2luIDogMTBweCAxMHB4IDAgYXV0bztcXHJcXG4gICAgICAgIHdpZHRoIDogNDBweDtcXHJcXG4gICAgICAgIGhlaWdodCA6IDQwcHg7XFxyXFxuICAgICAgICBmb250LXNpemUgOiAyNXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIC5tb2RhbFdlT2ZmZmVyIHAge1xcclxcbiAgICAgICAgd2lkdGggOiAxMDAlO1xcclxcbiAgICAgICAgZm9udC1zaXplIDogMjBweDtcXHJcXG4gICAgICAgIHRleHQtYWxpZ24gOiBsZWZ0O1xcclxcbiAgICAgICAgcGFkZGluZyA6IDEwcHggMTBweCAwcHggMTBweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0IDogMS4zO1xcclxcbiAgICB9ICAgIFxcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXtcXHJcXG5cXHJcXG4gICAgaW1nLmNhdFdlT2ZmZmVye1xcclxcbiAgICAgICAgYm90dG9tOiAxMHB4O1xcclxcbiAgICAgICAgbGVmdDogNCU7XFxyXFxuICAgICAgICB3aWR0aDogMzUlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIGltZy5ncmFzc1dlT2ZmZmVyIHtcXHJcXG4gICAgICAgIHdpZHRoIDogODAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIGltZy5tb29uV2VPZmZmZXIsXFxyXFxuICAgIGltZy5zdW5XZU9mZmZlciB7XFxyXFxuICAgICAgICB3aWR0aCA6IDI1JTtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICBpbWcuc3VuV2VPZmZmZXIge1xcclxcbiAgICAgICAgcmlnaHQgOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcblxcclxcbiAgICB0ZXh0IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZSA6IDIycHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgLnN0YXJXZU9mZmZlcixcXHJcXG4gICAgLnN0YXJZZWxsb3csXFxyXFxuICAgIC5zdGFyQmx1ZSxcXHJcXG4gICAgLnN0YXJSZWQge1xcclxcbiAgICAgICAgd2lkdGggOiAycHg7XFxyXFxuICAgICAgICBoZWlnaHQgOiAycHg7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIFxcclxcbiAgICAvKiA9PT09PT09PT09PT09PT09PT09PT09IG1vZGFsIHdpbmRvd3MgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuICAgIFxcclxcblxcclxcbiAgICAubW9kYWxXZU9mZmZlcj4uY29udGFpbmVyV2VPZmZmZXIge1xcclxcbiAgICAgICAgd2lkdGggOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIGJ1dHRvbiB7XFxyXFxuICAgICAgICB3aWR0aCA6IDQ1cHg7XFxyXFxuICAgICAgICBoZWlnaHQgOiA0NXB4O1xcclxcbiAgICAgICAgZm9udC1zaXplIDogMzBweDtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICAubW9kYWxXZU9mZmZlciBwIHtcXHJcXG4gICAgICAgIHdpZHRoIDogODAlO1xcclxcbiAgICAgICAgZm9udC1zaXplIDogMjJweDtcXHJcXG4gICAgICAgIHRleHQtYWxpZ24gOiBsZWZ0O1xcclxcbiAgICAgICAgcGFkZGluZyA6IDBweCAyMHB4IDBweCA0MHB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQgOiAxLjM7XFxyXFxuICAgIH0gICAgXFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpe1xcclxcblxcclxcbiAgICBpbWcuY2F0V2VPZmZmZXIge1xcclxcbiAgICAgICAgYm90dG9tIDogMTBweDtcXHJcXG4gICAgICAgIGxlZnQgOiA0JTtcXHJcXG4gICAgICAgIHdpZHRoIDogMzAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIGltZy5tb29uV2VPZmZmZXIsXFxyXFxuICAgIGltZy5zdW5XZU9mZmZlciB7XFxyXFxuICAgICAgICB3aWR0aCA6IDIwJTtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICBpbWcuc3VuV2VPZmZmZXJXZU9mZmZlciB7XFxyXFxuICAgICAgICByaWdodCA6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuXFxyXFxuICAgIHRleHQge1xcclxcbiAgICAgICAgZm9udC1zaXplIDogMjVweDtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICAuc3RhcldlT2ZmZmVyLFxcclxcbiAgICAuc3RhclllbGxvdyxcXHJcXG4gICAgLnN0YXJCbHVlLFxcclxcbiAgICAuc3RhclJlZCB7XFxyXFxuICAgICAgICB3aWR0aCA6IDJweDtcXHJcXG4gICAgICAgIGhlaWdodCA6IDJweDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgXFxyXFxuICAgIC8qID09PT09PT09PT09PT09PT09PT09PT0gbW9kYWwgd2luZG93cyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG4gICAgXFxyXFxuICAgIFxcclxcbiAgICAubW9kYWxXZU9mZmZlciB7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQgOiBmbGV4LWVuZDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zIDogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcblxcclxcbiAgICAubW9kYWxXZU9mZmZlcj4uY29udGFpbmVyV2VPZmZmZXIge1xcclxcbiAgICAgICAgd2lkdGggOiA2NSU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgYnV0dG9uIHtcXHJcXG4gICAgICAgIHdpZHRoIDogNDVweDtcXHJcXG4gICAgICAgIGhlaWdodCA6IDQ1cHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzIDogNTAlO1xcclxcbiAgICAgICAgZm9udC1zaXplIDogMzBweDtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICAubW9kYWxXZU9mZmZlciBwIHtcXHJcXG4gICAgICAgIHdpZHRoIDogNjUlO1xcclxcbiAgICAgICAgZm9udC1zaXplIDogMjVweDtcXHJcXG4gICAgICAgIHRleHQtYWxpZ24gOiBsZWZ0O1xcclxcbiAgICAgICAgcGFkZGluZyA6IDBweCA0MHB4IDBweCA0MHB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQgOiAxLjM7XFxyXFxuICAgIH0gICAgXFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgICAtLWNvbG9yVGV4dC1zdHJva2UgOiByZWQ7XFxyXFxuICAgIC0tY29sb3JUZXh0LWZpbGwgOiB3aGl0ZTtcXHJcXG59XFxyXFxuICAgIFxcclxcblxcclxcbmh0bWwge1xcclxcbiAgICB3aWR0aCA6IDEwMCU7XFxyXFxuICAgIGhlaWdodCA6IDEwMCU7XFxyXFxuICAgIHVzZXItc2VsZWN0IDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGhlaWdodCA6IDEwMCU7XFxyXFxufVxcclxcblxcclxcblxcclxcbm1haW4ge1xcclxcbiAgICB3aWR0aCA6IDEwMCU7XFxyXFxuICAgIGhlaWdodCA6IDEwMCU7XFxyXFxufVxcclxcblxcclxcblxcclxcbmRpdi5zbGlkMiB7XFxyXFxuICAgIGJhY2tncm91bmQgOiBsaW5lYXItZ3JhZGllbnQocmdiYSg0ICwxNCAsMTE0LCAxKSAzMCUsIHJnYmEoNjYsIDEwNiwyMjQsIDEpIDEwMCUpIGZpeGVkO1xcclxcbiAgICB3aWR0aCA6IDEwMCU7XFxyXFxuICAgIGhlaWdodCA6IDEwMCU7XFxyXFxufVxcclxcblxcclxcblxcclxcbmltZy5ob21lV2VPZmZmZXIge1xcclxcbiAgICBwb3NpdGlvbiA6IGFic29sdXRlO1xcclxcbiAgICBib3R0b20gOiAwO1xcclxcbiAgICBoZWlnaHQgOiBhdXRvO1xcclxcbiAgICB3aWR0aCA6IDEwMCU7XFxyXFxuICAgIHotaW5kZXggOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5pbWcuY2F0V2VPZmZmZXIge1xcclxcbiAgICBkaXNwbGF5IDogYmxvY2s7XFxyXFxuICAgIHBvc2l0aW9uIDogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbSA6IDEycHg7XFxyXFxuICAgIGxlZnQgOiA1JTtcXHJcXG4gICAgd2lkdGggOiAxOSU7XFxyXFxuICAgIHotaW5kZXggOiAxMDA7XFxyXFxufVxcclxcblxcclxcblxcclxcbmltZy5ncmFzc1dlT2ZmZmVyIHtcXHJcXG4gICAgZGlzcGxheSA6IGJsb2NrO1xcclxcbiAgICBwb3NpdGlvbiA6IGFic29sdXRlO1xcclxcbiAgICBib3R0b20gOiAwO1xcclxcbiAgICBsZWZ0IDogMDtcXHJcXG4gICAgd2lkdGggOiA2MCU7XFxyXFxuICAgIHotaW5kZXggOiAxMDA7XFxyXFxufVxcclxcblxcclxcblxcclxcbmltZy5tb29uV2VPZmZmZXIsXFxyXFxuaW1nLnN1bldlT2ZmZmVyIHtcXHJcXG4gICAgZGlzcGxheSA6IGJsb2NrO1xcclxcbiAgICBwb3NpdGlvbiA6IGFic29sdXRlO1xcclxcbiAgICB0b3AgOiAwcHg7XFxyXFxuICAgIHJpZ2h0IDogMCU7XFxyXFxuICAgIHdpZHRoIDogMTIlO1xcclxcbiAgICB6LWluZGV4IDogNTA7XFxyXFxufVxcclxcblxcclxcblxcclxcbmltZy5zdW5XZU9mZmZlciB7XFxyXFxuICAgIHJpZ2h0IDogMTAwJTtcXHJcXG59XFxyXFxuICAgIFxcclxcblxcclxcbi5ibG9ja1NWRyB7XFxyXFxuICAgIHBvc2l0aW9uIDogZml4ZWQ7XFxyXFxuICAgIGxlZnQgOiAwJTtcXHJcXG4gICAgd2lkdGggOiAxMDAlO1xcclxcbiAgICBoZWlnaHQgOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5zdmcge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG50ZXh0IHtcXHJcXG4gICAgZm9udC1mYW1pbHkgOiAnU2Vnb2UgUHJpbnQnO1xcclxcbiAgICBjdXJzb3IgOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2l0aW9uIDogLjE1cyBsaW5lYXI7XFxyXFxuICAgIHN0cm9rZSA6IHZhcigtLWNvbG9yVGV4dC1zdHJva2UpO1xcclxcbiAgICBmaWxsIDogdmFyKC0tY29sb3JUZXh0LWZpbGwpO1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIHRyYW5zaXRpb246IC4xNXMgbGluZWFyO1xcclxcbn1cXHJcXG4gICAgXFxyXFxuXFxyXFxudGV4dDpob3ZlciB7XFxyXFxuICAgIGZpbGwgOiBvcmFuZ2U7XFxyXFxufVxcclxcblxcclxcbiAgICBcXHJcXG5wYXRoIHtcXHJcXG4gICAgLyogc3Ryb2tlIDogd2hpdGU7ICovXFxyXFxuICAgIGZpbGwgOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnN0YXJXZU9mZmZlcixcXHJcXG4uc3RhclllbGxvdyxcXHJcXG4uc3RhckJsdWUsXFxyXFxuLnN0YXJSZWQge1xcclxcbiAgICB6LWluZGV4IDogMTA7XFxyXFxuICAgIHdpZHRoIDogNHB4O1xcclxcbiAgICBoZWlnaHQgOiA0cHg7XFxyXFxuICAgIHBvc2l0aW9uIDogYWJzb2x1dGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXMgOiA1MCU7XFxyXFxuICAgIG9wYWNpdHkgOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uc3RhclllbGxvdyB7XFxyXFxuICAgIGFuaW1hdGlvbiA6IG1vdmllIDlzIGxpbmVhciA2cyBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnN0YXJSZWQge1xcclxcbiAgICBhbmltYXRpb24gOiBtb3ZpZSA5cyBsaW5lYXIgaW5maW5pdGU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5zdGFyQmx1ZSB7XFxyXFxuICAgIGFuaW1hdGlvbiA6IG1vdmllIDlzIGxpbmVhciAzcyBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQGtleWZyYW1lcyBtb3ZpZSB7XFxyXFxuICAgIDAlLCAzMCUge1xcclxcbiAgICAgICAgb3BhY2l0eSA6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgNTAlIHtcXHJcXG4gICAgICAgIG9wYWNpdHkgOiAxO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIDgwJSwgMTAwJSB7XFxyXFxuICAgICAgICBvcGFjaXR5IDogMDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4gICAgXFxyXFxuICAgIFxcclxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT0gbW9kYWwgd2luZG93cyA9PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG4gICAgXFxyXFxuICAgIFxcclxcbi5tb2RhbFdlT2ZmZmVyIHtcXHJcXG4gICAgZGlzcGxheSA6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudCA6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXMgOiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uIDogZml4ZWQ7XFxyXFxufVxcclxcbiAgICBcXHJcXG5cXHJcXG4uaW50ZXJuZXRTaG9wLFxcclxcbi5zaXRlQ29tcGFueSxcXHJcXG4uYmxvZyxcXHJcXG4ucG9ydGZvbGlvLFxcclxcbi5zb2NpYWxOZXR3b3JrLFxcclxcbi5mb3J1bSxcXHJcXG4ubGFuZGluZyxcXHJcXG4uZ2FtZVNvdXJzIHtcXHJcXG4gICAgbGVmdCA6IC0xMDAlO1xcclxcbiAgICB6LWluZGV4IDogMTUwO1xcclxcbiAgICB3aWR0aCA6IDEwMCU7XFxyXFxuICAgIGhlaWdodCA6IDEwMCU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5tb2RhbFdlT2ZmZmVyPi5jb250YWluZXJXZU9mZmZlciB7XFxyXFxuICAgIHdpZHRoIDogNjAlO1xcclxcbiAgICBkaXNwbGF5IDogZmxleDtcXHJcXG4gICAgZmxleC13cmFwIDogbm93cmFwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgICBjdXJzb3IgOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDogcmdiKDI0NCwgMTA3LCAyOCk7XFxyXFxuICAgIG1hcmdpbiA6IDAgMCAwIDA7XFxyXFxuICAgIHdpZHRoIDogNTBweDtcXHJcXG4gICAgaGVpZ2h0IDogNTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1cyA6IDUwJTtcXHJcXG4gICAgZm9udC1zaXplIDogMzBweDtcXHJcXG4gICAgYm9yZGVyIDogc29saWQgMXB4IGJsYWNrO1xcclxcbiAgICBvdXRsaW5lIDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm1vZGFsV2VPZmZmZXIgcCB7XFxyXFxuICAgIGNvbG9yIDogYmxhY2s7XFxyXFxuICAgIHdpZHRoIDogOTAlO1xcclxcbiAgICBmb250LXNpemUgOiAzMHB4O1xcclxcbiAgICBmb250LWZhbWlseSA6ICdTZWdvZSBQcmludCc7XFxyXFxuICAgIHRleHQtYWxpZ24gOiBqdXN0aWZ5O1xcclxcbiAgICBwYWRkaW5nOiAwcHggNzBweCAwcHggNDBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQgOiAxLjQ7XFxyXFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KXtcXHJcXG5cXHJcXG4gICAgaW1nLmhvbWVXZU9mZmZlciB7XFxyXFxuICAgICAgICBoZWlnaHQgOiAxMjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBpbWcuY2F0V2VPZmZmZXIge1xcclxcbiAgICAgICAgd2lkdGggOiAxNSU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgaW1nLm1vb25XZU9mZmZlcixcXHJcXG4gICAgaW1nLnN1bldlT2ZmZmVyIHtcXHJcXG4gICAgICAgIHdpZHRoIDogMTAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIGltZy5zdW5XZU9mZmZlciB7XFxyXFxuICAgICAgICByaWdodCA6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuXFxyXFxuICAgIHRleHQge1xcclxcbiAgICAgICAgZm9udC1zaXplIDogMThweDtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICAuc3RhcldlT2ZmZmVyLFxcclxcbiAgICAuc3RhclllbGxvdyxcXHJcXG4gICAgLnN0YXJCbHVlLFxcclxcbiAgICAuc3RhclJlZHtcXHJcXG4gICAgICAgIHdpZHRoIDogMS41cHg7XFxyXFxuICAgICAgICBoZWlnaHQgOiAxLjVweDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgXFxyXFxuICAgIC8qID09PT09PT09PT09PT09PT09PT09PT0gbW9kYWwgd2luZG93cyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG4gICAgXFxyXFxuXFxyXFxuICAgIC5tb2RhbFdlT2ZmZmVyIHtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudCA6IGZsZXgtc3RhcnQ7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtcyA6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuXFxyXFxuICAgIC5tb2RhbFdlT2ZmZmVyPi5jb250YWluZXJXZU9mZmZlciB7XFxyXFxuICAgICAgICB3aWR0aCA6IDgwJTtcXHJcXG4gICAgICAgIGZsZXgtd3JhcCA6IHdyYXA7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwIDAgMCAzNXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIGJ1dHRvbiB7XFxyXFxuICAgICAgICBtYXJnaW46IDEwcHggMCAwIDEwcHg7XFxyXFxuICAgICAgICB3aWR0aDogMzVweDtcXHJcXG4gICAgICAgIGhlaWdodDogMzVweDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBcXHJcXG4gICAgLm1vZGFsV2VPZmZmZXIgcHtcXHJcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAwcHggMTBweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XFxyXFxuICAgIH0gICAgXFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi4uL2ltZy9jbG91ZF8xLnBuZ1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IHJlcXVpcmUoXCIuLi9pbWcvY2xvdWRfMi5wbmdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSByZXF1aXJlKFwiLi4vaW1nL2Nsb3VkXzMucG5nXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIjpyb290e1xcclxcbiAgICAtLWxlZnQ6IDUwJTtcXHJcXG4gICAgLyotLXRvcCA6IDEwMCUqL1xcclxcbiAgICAvKi0tbnVtICA6IDkwZGVnOyovXFxyXFxufVxcclxcbi5oMXtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6MDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSGFuZ2luZyBMZXR0ZXJzXFxcIjtcXHJcXG4gICAgZm9udC1zaXplOiA0ZW07XFxyXFxuICAgIHotaW5kZXg6IDk5O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiAjNjdjMmZiO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTAwcHg7XFxyXFxufVxcclxcbi50b3BCbG9ja3tcXHJcXG4gICAgaGVpZ2h0OiA1MCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4uYm90dG9tQmxvY2t7XFxyXFxuICAgIGhlaWdodDogNTAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLm1haW5EaXZ7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBsZWZ0OiBjYWxjKCgxMDAlIC0gODAlKS8yKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuLmJsb2NrQ2F0e1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBoZWlnaHQ6IDUwJTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogMTAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbn1cXHJcXG4uY2F0e1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxufVxcclxcbi5jYXQgaW1ne1xcclxcbiAgICBoZWlnaHQ6IDUwJTtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuXFxyXFxufVxcclxcbi5ibG9ja01vb257XFxyXFxuICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC8gMyk7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAxMHB4O1xcclxcbiAgICBsZWZ0OiBjYWxjKDEwMCUgLSAzNSUpO1xcclxcbiAgICB6LWluZGV4OiA5OTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuLmJsb2NrTW9vbiBpbWd7XFxyXFxuICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgICBoZWlnaHQ6IDkwJTtcXHJcXG4gICAgICBtYXgtd2lkdGg6IDI3MHB4O1xcclxcbiAgICAgIG1heC1oZWlnaHQ6IDI3MHB4O1xcclxcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcbi5jb21tZW50e1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbn1cXHJcXG4uY29tbWVudCBpbWd7XFxyXFxuICAgIGhlaWdodDogNTAlO1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG59XFxyXFxuLmdyYXNze1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgaGVpZ2h0OiAxNSU7XFxyXFxuICAgIHotaW5kZXg6IDk5O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogY2FsYygxMDAlIC0gMTUlKTtcXHJcXG59XFxyXFxuLnN0YXJ7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIHRyYW5zaXRpb246IC41cztcXHJcXG59XFxyXFxuLmNsb3VkMXtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDI4JTtcXHJcXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOjEwJTtcXHJcXG4gICAgbGVmdDogLTUwJTtcXHJcXG4gICAgei1pbmRleDogOTg7XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgQ2xvdWQxe1xcclxcbiAgICBmcm9te1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgIGxlZnQ6IC01MCU7XFxyXFxuICAgIH1cXHJcXG4gICAgMjAle1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJXtcXHJcXG4gICAgICAgIGxlZnQ6IGNhbGMoMTAwdmggKyA1MCUpO1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4ubW92ZUNsb3VkXzF7XFxyXFxuICAgIGxlZnQ6IC01MCU7XFxyXFxuICAgIGFuaW1hdGlvbjogNzAwMDBtcyBsaW5lYXIgQ2xvdWQxO1xcclxcbiAgICBhbmltYXRpb24tZGVsYXk6IDEwcztcXHJcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxyXFxufVxcclxcbi5jbG91ZDJ7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gICAgd2lkdGg6IDQwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAyOCU7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDoxNSU7XFxyXFxuICAgIGxlZnQ6IC01MCU7XFxyXFxuICAgIHotaW5kZXg6IDEwMDtcXHJcXG59XFxyXFxuQGtleWZyYW1lcyBDbG91ZDJ7XFxyXFxuICAgIGZyb217XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgbGVmdDogLTUwJTtcXHJcXG4gICAgfVxcclxcbiAgICAyMCV7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcbiAgICAxMDAle1xcclxcbiAgICAgICAgbGVmdDogY2FsYygxMDB2aCArIDUwJSk7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5tb3ZlQ2xvdWRfMntcXHJcXG4gICAgbGVmdDogLTUwJTtcXHJcXG4gICAgYW5pbWF0aW9uOiA5MDAwMG1zIGxpbmVhciBDbG91ZDI7XFxyXFxuICAgIGFuaW1hdGlvbi1kZWxheTogMjBzO1xcclxcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXHJcXG59XFxyXFxuLmNsb3VkMyB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gICAgd2lkdGg6IDY1JTtcXHJcXG4gICAgaGVpZ2h0OiAyNSU7XFxyXFxuICAgIG1heC13aWR0aDogNDUwcHg7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDE3MHB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMjAlO1xcclxcbiAgICBsZWZ0OiAtNzAlO1xcclxcbiAgICB6LWluZGV4OiAxMDE7XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgQ2xvdWQze1xcclxcbiAgICBmcm9te1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgIGxlZnQ6IC03MCU7XFxyXFxuICAgIH1cXHJcXG4gICAgMjAle1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJXtcXHJcXG4gICAgICAgIGxlZnQ6Y2FsYygxMDB2aCArIDcwJSk7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5tb3ZlQ2xvdWRfM3tcXHJcXG4gICAgbGVmdDogLTcwJTtcXHJcXG4gICAgYW5pbWF0aW9uOiAxMjAwMDBtcyBsaW5lYXIgQ2xvdWQzO1xcclxcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXHJcXG59XFxyXFxuLndvcmRzQmxvY2t7XFxyXFxuICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgIGhlaWdodDogMzAlO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogY2FsYygxMDAlIC0gMzAlIC0gMzUlKTtcXHJcXG4gICAgbGVmdDogY2FsYygxMDAlIC0gMjAlKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTAlO1xcclxcblxcclxcbn1cXHJcXG4ud29yZHNCbG9jayBkaXZ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdG9wOjA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHRyYW5zcGFyZW50IDYwJSwgcmdiYSgyMCwgMzMsIDY5LCAwLjQ1KSk7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFxyXFxufVxcclxcbi53b3Jkc0Jsb2NrIHNwYW57XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogNDUlO1xcclxcbiAgICB0b3A6IDExMCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBQcmludCBCb2xkXFxcIjtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIG1vdmVXb3Jkc3tcXHJcXG4gICBmcm9te1xcclxcbiAgICAgICB0b3A6MTEwJTtcXHJcXG4gICAgICAgbGVmdDogMjUlO1xcclxcbiAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgIH1cXHJcXG4gICAgMTUle1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcbiAgICAyMCV7XFxyXFxuICAgICAgICBvcGFjaXR5OiAuNTtcXHJcXG4gICAgfVxcclxcbiAgICAzMCV7XFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB9XFxyXFxuICAgIDUwJXtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJXtcXHJcXG4gICAgICAgIHRvcDowO1xcclxcbiAgICAgICAgbGVmdDogdmFyKC0tbGVmdCk7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxufVxcclxcbi5tb3ZlV3tcXHJcXG4gICAgYW5pbWF0aW9uOiA2cyBsaW5lYXIgbW92ZVdvcmRzO1xcclxcbn1cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNTBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKXtcXHJcXG4gICAuYmxvY2tDYXR7XFxyXFxuICAgICB3aWR0aDogNDAlICFpbXBvcnRhbnQ7XFxyXFxuICAgfVxcclxcbn1cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgyNXB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpe1xcclxcbiAgICAubWFpbkRpdntcXHJcXG4gICAgICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgICAgICBsZWZ0OiBjYWxjKCgxMDAlIC0gNzAlKS8yKTtcXHJcXG4gICAgfVxcclxcbiAgICAuaDF7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIuNWVtICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogNjBweCAhaW1wb3J0YW50O1xcclxcbiAgICB9XFxyXFxuICAgIGgye1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyLjVlbSAhaW1wb3J0YW50O1xcclxcbiAgICB9XFxyXFxuICAgIC5ibG9ja01vb24gaW1nIHtcXHJcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDUwJTtcXHJcXG4gICAgfVxcclxcbiAgICAuY29tbWVudCB7XFxyXFxuICAgICAgICB3aWR0aDogNDAlO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNTBweCkge1xcclxcbiAgICAubWFpbkRpdntcXHJcXG4gICAgICAgIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcXHJcXG4gICAgICAgIGxlZnQ6IGNhbGMoKDEwMCUgLSA5MCUpLzIpO1xcclxcbiAgICB9XFxyXFxuICAgIC53b3Jkc0Jsb2Nre1xcclxcbiAgICAgICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgICAgIGxlZnQ6IGNhbGMoMTAwJSAtIDMwJSk7XFxyXFxuICAgIH1cXHJcXG4gICAgLmJsb2NrQ2F0e1xcclxcbiAgICAgICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgICAgIGhlaWdodDogNDAlO1xcclxcbiAgICAgICAgdG9wOiA1OCU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmNvbW1lbnQgaW1nIHtcXHJcXG4gICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmNvbW1lbnQgaW1nIHtcXHJcXG4gICAgICAgIGhlaWdodDogNDAlO1xcclxcblxcclxcbiAgICB9XFxyXFxuICAgIC5jbG91ZDF7XFxyXFxuICAgICAgICB3aWR0aDogMzAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAyMCU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmNsb3VkMntcXHJcXG4gICAgICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDIwJTtcXHJcXG4gICAgfVxcclxcbiAgICAuY2xvdWQzIHtcXHJcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDIwJTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcclxcbiAgICAuaDF7XFxyXFxuICAgICAgICBmb250LXNpemU6IDNlbTtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA4MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIGgye1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLmJsb2NrTW9vbiBpbWd7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xcclxcbiAgICAgICAgbWF4LWhlaWdodDogMTUwcHg7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG4gICAgLndvcmRzQmxvY2t7XFxyXFxuICAgICAgd2lkdGg6IDIwJTtcXHJcXG4gICAgICB0b3A6Y2FsYygxMDAlIC0gMzAlIC0gMzAlKTtcXHJcXG4gICAgICBsZWZ0OiBjYWxjKDEwMCUgLSAyMCUpO1xcclxcbiAgICB9XFxyXFxuICAgIC53b3Jkc0Jsb2NrIHNwYW57XFxyXFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXHJcXG4gICAgLmgxe1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzZW07XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogODBweDtcXHJcXG4gICAgfVxcclxcbiAgICBoMntcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogM2VtO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gICAgLmgxe1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyZW07XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcXHJcXG4gICAgfVxcclxcbiAgICAubWFpbkRpdntcXHJcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgICAgICBsZWZ0OiBjYWxjKCgxMDAlIC0gOTAlKS8yKTtcXHJcXG5cXHJcXG4gICAgfVxcclxcbiAgICAuYmxvY2tDYXR7XFxyXFxuICAgICAgICB3aWR0aDogODAlO1xcclxcbiAgICAgICAgbGVmdDogMSU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmJsb2NrTW9vbntcXHJcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmNhdCBpbWcge1xcclxcbiAgICAgICAgaGVpZ2h0OiA0MCU7XFxyXFxuICAgICAgICAvKm1hcmdpbi1ib3R0b206IDIwcHg7Ki9cXHJcXG4gICAgfVxcclxcbiAgICAuY29tbWVudCBpbWcge1xcclxcbiAgICAgICAgaGVpZ2h0OiA0MCU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmdyYXNze1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMCU7XFxyXFxuICAgICAgICB0b3A6IGNhbGMoMTAwJSAtIDEwJSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgICAud29yZHNCbG9ja3tcXHJcXG4gICAgICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgICAgICBsZWZ0OiBjYWxjKDEwMCUgLSA0MCUpO1xcclxcbiAgICAgICAgdG9wOiBjYWxjKDEwMCUgLSAzMCUgLSAyMCUpO1xcclxcblxcclxcbiAgICB9XFxyXFxuICAgIC5jb21tZW50e1xcclxcbiAgICAgICAgei1pbmRleDogOTk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcXHJcXG4gICAgLndvcmRzQmxvY2t7XFxyXFxuICAgICAgICB3aWR0aDogMjAlO1xcclxcbiAgICAgICAgbGVmdDogY2FsYygxMDAlIC0gMjAlKTtcXHJcXG4gICAgICAgIHRvcDogY2FsYygxMDAlIC0gMzAlIC0gMzAlKTtcXHJcXG4gICAgfVxcclxcbiAgICAud29yZHNCbG9jayBzcGFue1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCl7XFxyXFxuICAgIC53b3Jkc0Jsb2Nre1xcclxcbiAgICAgICAgd2lkdGg6IDQwJTtcXHJcXG4gICAgICAgIGxlZnQ6IGNhbGMoMTAwJSAtIDQ1JSk7XFxyXFxuICAgICAgICAvKnRvcDogY2FsYygxMDAlIC0gMzAlIC0gMzAlKTsqL1xcclxcbiAgICB9XFxyXFxuICAgIC53b3Jkc0Jsb2NrIHNwYW57XFxyXFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIH1cXHJcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NsaWRlV2VPZmZlci9zdHlsZVdlT2ZmZXIuY3NzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyA9IHJlcXVpcmUoXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2xpZGVXZU9mZmVyL3N0eWxlMjU2MC5jc3NcIik7XG52YXIgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fID0gcmVxdWlyZShcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zbGlkZVdlT2ZmZXIvc3R5bGUxOTIwLmNzc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzNfX18gPSByZXF1aXJlKFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NsaWRlV2VPZmZlci9zdHlsZTE2MDAuY3NzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfNF9fXyA9IHJlcXVpcmUoXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2xpZGVXZU9mZmVyL3N0eWxlMTQwMC5jc3NcIik7XG52YXIgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF81X19fID0gcmVxdWlyZShcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zbGlkZVdlT2ZmZXIvc3R5bGUxMTAwLmNzc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzZfX18gPSByZXF1aXJlKFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NsaWRlV2VPZmZlci9zdHlsZTgwMC5jc3NcIik7XG52YXIgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF83X19fID0gcmVxdWlyZShcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zbGlkZVdlT2ZmZXIvc3R5bGU2MDAuY3NzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfOF9fXyA9IHJlcXVpcmUoXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2xpZGVXZU9mZmVyL3N0eWxlNDAwLmNzc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzlfX18gPSByZXF1aXJlKFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NsaWRlV2VPZmZlci9zdHlsZTMyMC5jc3NcIik7XG52YXIgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xMF9fXyA9IHJlcXVpcmUoXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2xpZGVXZU9mZmVyL3N0eWxlX2g0NTAuY3NzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG5leHBvcnRzLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbmV4cG9ydHMuaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18pO1xuZXhwb3J0cy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyk7XG5leHBvcnRzLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8zX19fKTtcbmV4cG9ydHMuaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzRfX18pO1xuZXhwb3J0cy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfNV9fXyk7XG5leHBvcnRzLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF82X19fKTtcbmV4cG9ydHMuaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzdfX18pO1xuZXhwb3J0cy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfOF9fXyk7XG5leHBvcnRzLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF85X19fKTtcbmV4cG9ydHMuaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzEwX19fKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubWFpblNsaWRlM3tcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogOTUlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRvcDoyJTtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAyMHB4IDEwcHggNTBweCAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyJTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHJcXG59XFxyXFxuLnBvc2l0aW9ue1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcbi5jZW50ZXJ7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uYmxvY2t7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDU3LCA1NywgNTcsIDAuNzkpO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCA0cHggcmdiYSg1NywgNTcsIDU3LCAwLjc5KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuLnRyYW5zaXRpb257XFxyXFxuICAgIHRyYW5zaXRpb246IDBzICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbi5ibG9ja0NlbnRlciBpbWd7XFxyXFxuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbi5ibG9jayBpbWd7XFxyXFxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4uYmxvY2tfMSwgLmJsb2NrXzcsIC5ibG9ja184LCAuYmxvY2tfMTEsXFxyXFxuLmJsb2NrXzEyLCAuYmxvY2tfMTUsIC5ibG9ja18xNntcXHJcXG4gICAgdHJhbnNpdGlvbjogIDUwcyBsaW5lYXI7XFxyXFxufVxcclxcbi5ibG9ja18yLCAuYmxvY2tfNiwgLmJsb2NrXzEwLCAuYmxvY2tfMTR7XFxyXFxuICAgIHRyYW5zaXRpb246ICA0MHMgbGluZWFyO1xcclxcbn1cXHJcXG4uYmxvY2tfMywgLmJsb2NrXzUsIC5ibG9ja185LCAuYmxvY2tfMTN7XFxyXFxuICAgIHRyYW5zaXRpb246IDMwcyBsaW5lYXI7XFxyXFxufVxcclxcbi5ibG9ja180e1xcclxcbiAgICB0cmFuc2l0aW9uOiAyMHMgbGluZWFyO1xcclxcbn1cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcXHJcXG4gICAgLmJsb2Nre1xcclxcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg1NywgNTcsIDU3LCAwLjc5KTtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA1cHggMnB4IHJnYmEoNTcsIDU3LCA1NywgMC43OSk7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG59XFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpe1xcclxcbiAgICAuYmxvY2t7XFxyXFxuICAgICAgICBib3JkZXI6IC41cHggc29saWQgcmdiYSg1NywgNTcsIDU3LCAwLjc5KTtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA0cHggMXB4IHJnYmEoNTcsIDU3LCA1NywgMC43OSk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubWFpbntcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogOTUlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRvcDoyJTtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAjZjNmZjg2O1xcclxcbiAgICBib3JkZXItd2lkdGg6IDIwcHggMTBweCA1MHB4IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIlO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcclxcbn1cXHJcXG4udGVtcGxhdGV7XFxyXFxuICAgIHdpZHRoOiBjYWxjKCgxMDAlIC8gMykgLSA3JSk7XFxyXFxuICAgIGhlaWdodDogMTZlbTtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzAwMDA2ODtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICB0cmFuc2l0aW9uOiAxcztcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBtYXJnaW46IDVweDtcXHJcXG59XFxyXFxuLyoucmVzaXpleyovXFxyXFxuLyogICAgcG9zaXRpb246IGFic29sdXRlOyovXFxyXFxuLyogICAgd2lkdGg6IDgwJTsqL1xcclxcbi8qICAgIGhlaWdodDogODAlOyovXFxyXFxuLyogICAgbGVmdDogMTAlOyovXFxyXFxuLyogICAgdG9wOiA1JTsqL1xcclxcbi8qfSovXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xcclxcbiAgICAudGVtcGxhdGUge1xcclxcbiAgICAgICAgd2lkdGg6IGNhbGMoKDEwMCUgLyAzKSAtIDIlKTtcXHJcXG4gICAgICAgIGhlaWdodDogMTVlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzAwcHgpIHtcXHJcXG4gICAgLnRlbXBsYXRlIHtcXHJcXG4gICAgICAgIHdpZHRoOiBjYWxjKCgxMDAlIC8gMykgLSA1JSk7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEzZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA1MHB4KSB7XFxyXFxuICAgIC5tYWlue1xcclxcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2ggIWltcG9ydGFudDtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcblxcclxcbiAgICB9XFxyXFxuICAgIC50ZW1wbGF0ZSB7XFxyXFxuICAgICAgICB3aWR0aDogY2FsYygoMTAwJSAvIDIpIC0gNSUpO1xcclxcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xcclxcbiAgICAubWFpbntcXHJcXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNoICFpbXBvcnRhbnQ7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG4gICAgLnRlbXBsYXRlIHtcXHJcXG4gICAgICAgIHdpZHRoOiBjYWxjKCgxMDAlIC8gMikgLSA1JSk7XFxyXFxuICAgICAgICBoZWlnaHQ6IDE1ZW07XFxyXFxuICAgICAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXHJcXG4gICAgLnRlbXBsYXRle1xcclxcbiAgICAgICAgd2lkdGg6IDQwZW07XFxyXFxuICAgICAgICBoZWlnaHQ6IDIwZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzQwcHgpICBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpe1xcclxcbiAgICAudGVtcGxhdGV7XFxyXFxuICAgICAgICB3aWR0aDogMzVlbTtcXHJcXG4gICAgICAgIGhlaWdodDogMTdlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbn1cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkgIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSl7XFxyXFxuICAgIC50ZW1wbGF0ZXtcXHJcXG4gICAgICAgIHdpZHRoOiAzNWVtO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxN2VtO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gICAgLnRlbXBsYXRlIHtcXHJcXG4gICAgICAgIHdpZHRoOiAyNmVtO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxM2VtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi4uL2ltZy9ncmFzcy5wbmdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSByZXF1aXJlKFwiLi4vaW1nL2JhY2tHcm91bmQtbWluLnBuZ1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IHJlcXVpcmUoXCIuLi9pbWcvYmx1ZV9za3kuanBnXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1TbGlkZXItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbi5zbGlke1xcclxcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcclxcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6MDtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHM7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5zbGlkMXtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSByZXBlYXQteCBib3R0b20sXFxyXFxuICAgICAgICAgICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgbm8tcmVwZWF0IGJvdHRvbSxcXHJcXG4gICAgICAgICAgICAgICAgbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2FmODIzMCwgIzFhMmI1OCwgIzEyMWUzZSA2MCUpO1xcclxcbiAgICBjb2xvcjogYWxpY2VibHVlO1xcclxcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjIwcztcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOmF1dG8sMTAwJSBhdXRvLCBhdXRvO1xcclxcbiAgICB6LWluZGV4OiAyMDtcXHJcXG59XFxyXFxuLnNsaWQye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY3LCA2MSwgMTU0LCAxKTtcXHJcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC4xNXM7XFxyXFxuICAgIHotaW5kZXg6IDE5O1xcclxcblxcclxcbn1cXHJcXG4uc2xpZDN7XFxyXFxuICAgIC8qYmFja2dyb3VuZC1jb2xvcjogIzdkZjBjODsqL1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDQwcHggMjBweCByZ2JhKDE4LCAzMCwgNjIsIDAuNikgO1xcclxcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjEwcztcXHJcXG4gICAgei1pbmRleDogMTg7XFxyXFxuICAgIGNvbG9yOiAjMDAwMDY4O1xcclxcblxcclxcbn1cXHJcXG4uc2xpZDMubWVudS1idG57XFxyXFxuICAgIGNvbG9yOiAjMDAwMDY4O1xcclxcbn1cXHJcXG4uc2xpZDR7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2ZmODY7XFxyXFxuICAgIGNvbG9yOiAjMDAwMDY4O1xcclxcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjA1cztcXHJcXG4gICAgei1pbmRleDogMTc7XFxyXFxuXFxyXFxufVxcclxcbi5zbGlkNXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDA2ODtcXHJcXG4gICAgY29sb3I6IGFsaWNlYmx1ZSAhaW1wb3J0YW50O1xcclxcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcXHJcXG4gICAgei1pbmRleDogMTY7XFxyXFxuXFxyXFxufVxcclxcbkBrZXlmcmFtZXMgc2xpZERvd257XFxyXFxuICAgIDAle1xcclxcbiAgICAgICAgdG9wOiAwO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgICAgdG9wOjEwMHZoO1xcclxcbiAgICB9XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgc2xpZFVwe1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICAgIHRvcDogMTAwdmg7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgICB0b3A6MDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4uZG93bntcXHJcXG4gICAgdG9wOiAxMDB2aDtcXHJcXG4gICAgYW5pbWF0aW9uOiAxLjJzIGVhc2UtaW4tb3V0IHNsaWREb3duO1xcclxcblxcclxcbn1cXHJcXG4udXB7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgYW5pbWF0aW9uOiAxcyBlYXNlLWluLW91dCBzbGlkVXA7XFxyXFxufVxcclxcbi5zaG93IHtcXHJcXG4gICAgei1pbmRleDogMTUwO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG5cXHJcXG59XFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQXJyb3ctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbkBrZXlmcmFtZXMgbW92ZUJ1dHRvbntcXHJcXG4gICAgZnJvbSB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgICB9XFxyXFxuICAgIDUle1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgfVxcclxcbiAgICAxMCV7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgICB9XFxyXFxuICAgIDE1JXtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgMjAle1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gICAgfVxcclxcbiAgICAxMDAle1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbn1cXHJcXG4uZGl2QXJyb3dVUHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogNGVtO1xcclxcbiAgICBoZWlnaHQ6IDRlbTtcXHJcXG4gICAgcGFkZGluZzogOHB4IDJweCAycHggMnB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIHRvcDouNWVtO1xcclxcbiAgICBsZWZ0OiBjYWxjKDEwMHZ3IC0gNWVtKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICB6LWluZGV4OiAyMDA7XFxyXFxuICAgIG91dGxpbmU6bm9uZTtcXHJcXG59XFxyXFxuLmRpdkFycm93VVAgaW1nIHtcXHJcXG4gICAgaGVpZ2h0OiA5MCU7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxufVxcclxcbi5kaXZBcnJvd0Rvd257XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDRlbTtcXHJcXG4gICAgaGVpZ2h0OiA0ZW07XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XFxyXFxuICAgIHBhZGRpbmc6IDhweCAycHggMnB4IDJweCAhaW1wb3J0YW50O1xcclxcbiAgICB0b3A6IGNhbGMoMTAwJSAtIDRlbSAtIDNlbSk7XFxyXFxuICAgIGxlZnQ6IGNhbGMoMTAwdncgLSA1ZW0pO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIHotaW5kZXg6IDIwMDtcXHJcXG4gICAgb3V0bGluZTpub25lO1xcclxcbn1cXHJcXG4uZGl2QXJyb3dEb3duIGltZyB7XFxyXFxuICAgIGhlaWdodDogOTAlO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxyXFxuXFxyXFxufVxcclxcbi5hbmltQnV0dG9ue1xcclxcbiAgICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgICBhbmltYXRpb246IG1vdmVCdXR0b24gNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XFxyXFxufVxcclxcblxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpe1xcclxcbiAgICAuc2xpZDF7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8sMTQwJSAzMCUsIGF1dG87XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20sIDEwMCUgYm90dG9tO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpe1xcclxcbiAgICAuc2xpZHtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246ICAuNnMgbGluZWFyO1xcclxcbiAgICB9XFxyXFxuICAgIC5kb3duV3tcXHJcXG4gICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgIC8qYW5pbWF0aW9uOiAxLjJzIGVhc2UtaW4tb3V0IHNsaWRVcDsqL1xcclxcblxcclxcbiAgICB9XFxyXFxuICAgIC51cFd7XFxyXFxuICAgICAgICB0b3A6IC0xMDB2aDtcXHJcXG4gICAgICAgIC8qYW5pbWF0aW9uOiAxcyBlYXNlLWluLW91dCBzbGlkRG93bjsqL1xcclxcbiAgICB9XFxyXFxuICAgIC5zbGlkM3tcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggNDBweCAxMHB4IHJnYmEoMTgsIDMwLCA2MiwgMC42KSA7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xcclxcbiAgICAuZGl2QXJyb3dEb3due1xcclxcbiAgICAgICAgdG9wOiBjYWxjKDEwMCUgLSA0ZW0gLSAxZW0pO1xcclxcbiAgICB9XFxyXFxuICAgIC5zbGlkMXtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogYXV0byAxNSUsMTAwJSAzNSUsIGF1dG87XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20sIDEwMCUgYm90dG9tO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCl7XFxyXFxuICAgIC5zbGlkMXtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogYXV0byAxNSUsMTkwJSAyNSUsIGF1dG87XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20sIDEwMCUgYm90dG9tO1xcclxcbiAgICB9XFxyXFxuICAgIC5kaXZBcnJvd0Rvd24sIC5kaXZBcnJvd1VQe1xcclxcbiAgICAgICAgd2lkdGg6IDNlbTtcXHJcXG4gICAgICAgIGhlaWdodDogM2VtO1xcclxcbiAgICAgICAgbGVmdDogY2FsYygxMDB2dyAtIDNlbSk7XFxyXFxuICAgIH1cXHJcXG4gICAgLnNsaWQze1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA0MHB4IDVweCByZ2JhKDE4LCAzMCwgNjIsIDAuNikgO1xcclxcblxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIik7XG52YXIgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fID0gcmVxdWlyZShcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zbGlkZXIuY3NzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyA9IHJlcXVpcmUoXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2xpZGVfMS5jc3NcIik7XG52YXIgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8zX19fID0gcmVxdWlyZShcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zbGlkZV8yLmNzc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzRfX18gPSByZXF1aXJlKFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NsaWRlXzMuY3NzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfNV9fXyA9IHJlcXVpcmUoXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2xpZGVfNC5jc3NcIik7XG52YXIgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF82X19fID0gcmVxdWlyZShcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vZm9udHMvZm9udC5jc3NcIik7XG52YXIgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF83X19fID0gcmVxdWlyZShcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tb2RhbC5jc3NcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi4uL2ltZy9tZW51X3doaXRlLnBuZ1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuZXhwb3J0cy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5leHBvcnRzLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fKTtcbmV4cG9ydHMuaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzJfX18pO1xuZXhwb3J0cy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfM19fXyk7XG5leHBvcnRzLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF80X19fKTtcbmV4cG9ydHMuaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzVfX18pO1xuZXhwb3J0cy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfNl9fXyk7XG5leHBvcnRzLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF83X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIjpyb290e1xcclxcbiAgICAtLXZoIDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCk7XFxyXFxuICAgIHdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcblxcclxcbi5kaXNwbGF5Q2VudGVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5ub25le1xcclxcbiAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gfVxcclxcbmgxe1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgUHJpbnQgQm9sZFxcXCI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcclxcbn1cXHJcXG5oMntcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlNlZ29lIFByaW50IEJvbGRcXFwiO1xcclxcbiAgICBmb250LXNpemU6IDJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbn1cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbi5tZW51LWJ0biB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgei1pbmRleDogOTk5OTk7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICB3aWR0aDogNjBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogNDBweCA1MHB4O1xcclxcbn1cXHJcXG4ubWVudU9wZW57XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBub3JtYWwgIWltcG9ydGFudDtcXHJcXG4gICAgYWxpZ24tY29udGVudDogbm9ybWFsICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXHJcXG4gICAgaDJ7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuN2VtICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiLi9IYW5naW5nIExldHRlcnMudHRmXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gcmVxdWlyZShcIi4vU2Vnb2UgUHJpbnQgQm9sZC50dGZcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXHJcXG4gZm9udC1mYW1pbHk6ICdIYW5naW5nIExldHRlcnMnO1xcclxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxufVxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlNlZ29lIFByaW50IEJvbGRcXFwiO1xcclxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgJy4uL2Nzcy9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgQXJyb3dEb3duIGZyb20gJy4uL2ltZy9kb3duQXJyb3cucG5nJztcclxuaW1wb3J0IEFycm93VXAgZnJvbSAnLi4vaW1nL3VwQXJyb3cucG5nJztcclxuaW1wb3J0IHNsaWQxIGZyb20gXCIuL3NsaWRlcy9zbGlkZTFcIjtcclxuaW1wb3J0IHNsaWQyIGZyb20gXCIuL3NsaWRlcy9zbGlkZTJcIjtcclxuaW1wb3J0IHNsaWQzIGZyb20gXCIuL3NsaWRlcy9zbGlkZTNcIjtcclxuaW1wb3J0IHNsaWQ0IGZyb20gXCIuL3NsaWRlcy9zbGlkZTRcIjtcclxuaW1wb3J0IHNsaWQ1IGZyb20gXCIuL3NsaWRlcy9zbGlkZTVcIjtcclxuXHJcbmNvbnN0IG9iaiA9IHtcclxuICAgIGNvbnRhaW5lciA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKSxcclxuICAgIG1lbnVCdXR0b246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWJ0bicpLFxyXG4gICAgZGl2QXJyb3dVcDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpdkFycm93VVAnKSxcclxuICAgIGRpdkFycm93RG93bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpdkFycm93RG93bicpLFxyXG4gICAgbW9kYWxXaW5kb3c6IG51bGwsXHJcbiAgICBvcGVuTW9kYWwgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3RzJyksXHJcbiAgICBjbG9zZU1vZGFsIDogbnVsbCxcclxuICAgIGNvbnRhY3RzICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjQ29udGFjdHMnKSxcclxuICAgIHRlbXBsYXRlICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNUZW1wbGF0ZXMnKSxcclxuICAgIEFycm93VXAgICA6IG5ldyBJbWFnZSgpLFxyXG4gICAgQXJyb3dEb3duIDogbmV3IEltYWdlKCksXHJcbiAgICBtYXNzU2xpZGVzOiBbXSxcclxuICAgIGluZGV4ICAgICA6IG51bGwsXHJcbiAgICBpbml0aWFsWCAgOiBudWxsLFxyXG4gICAgaW5pdGlhbFkgIDpudWxsXHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gc2xpZGVyQ29udGFpbmVyKCl7XHJcblxyXG4gICAgY29uc3QgY29udCA9IG9iai5jb250YWluZXI7XHJcbiAgICBjb250LmFwcGVuZENoaWxkKHNsaWQ1KTtcclxuICAgIGNvbnQuYXBwZW5kQ2hpbGQoc2xpZDQpO1xyXG4gICAgY29udC5hcHBlbmRDaGlsZChzbGlkMyk7XHJcbiAgICBjb250LmFwcGVuZENoaWxkKHNsaWQyKTtcclxuICAgIGNvbnQuYXBwZW5kQ2hpbGQoc2xpZDEpO1xyXG5cclxuICAgIG9iai5tYXNzU2xpZGVzID0gY29udC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZCcpO1xyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBhcnJvd0J1dHRvbnMoKSB7XHJcblxyXG4gICAgY29uc3QgZGl2QXJyb3dVcCA9IG9iai5kaXZBcnJvd1VwLFxyXG4gICAgICAgICAgZGl2QXJyb3dEb3duID0gb2JqLmRpdkFycm93RG93bjtcclxuXHJcbiAgICBvYmouQXJyb3dVcC5zcmMgPSBBcnJvd1VwO1xyXG4gICAgb2JqLkFycm93VXAuYWx0ID0gJ2Fycm93VXAnO1xyXG4gICAgZGl2QXJyb3dVcC5hcHBlbmRDaGlsZCggb2JqLkFycm93VXApO1xyXG5cclxuICAgIG9iai5BcnJvd0Rvd24uc3JjID0gQXJyb3dEb3duO1xyXG4gICAgb2JqLkFycm93RG93bi5hbHQgPSAnYXJyb3dEb3duJztcclxuICAgIGRpdkFycm93RG93bi5hcHBlbmRDaGlsZChvYmouQXJyb3dEb3duKTtcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIGxhc3RJdGVtT2ZBcnIoKSB7XHJcbiAgIGNvbnN0IGluZGV4ID0gb2JqLmluZGV4O1xyXG5cclxuICAgaWYoaW5kZXggPT09IDIgJiYgb2JqLmRpdkFycm93VXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdub25lJykpIHtcclxuICAgICAgIG9iai5kaXZBcnJvd1VwLmNsYXNzTGlzdC5yZW1vdmUoJ25vbmUnKTtcclxuICAgICAgIG9iai5kaXZBcnJvd0Rvd24uY2xhc3NMaXN0LmFkZCgnbm9uZScpO1xyXG4gICAgICAgcmV0dXJuO1xyXG4gICB9XHJcbiAgIGlmKGluZGV4ID09PSAzICYmIG9iai5kaXZBcnJvd0Rvd24uY2xhc3NMaXN0LmNvbnRhaW5zKCdub25lJykpe1xyXG4gICAgICAgb2JqLmRpdkFycm93VXAuY2xhc3NMaXN0LmFkZCgnbm9uZScpO1xyXG4gICAgICAgb2JqLmRpdkFycm93RG93bi5jbGFzc0xpc3QucmVtb3ZlKCdub25lJyk7XHJcbiAgICAgICByZXR1cm47XHJcblxyXG4gICB9ZWxzZSB7XHJcbiAgICAgICByZXR1cm47XHJcbiAgIH1cclxuXHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gc2xpZGVyR29VcChpdGVtKSB7XHJcblxyXG4gICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykpIHtcclxuICAgICAgICBpZiAod2luZG93LnNjcmVlbi53aWR0aCA+IDExMDApIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nICYmIGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nICE9PSBvYmouZGl2QXJyb3dVcFxyXG4gICAgICAgICAgICAgICAgJiYgaXRlbS5uZXh0RWxlbWVudFNpYmxpbmcuaWQgIT09ICdDb250YWN0cycpIHtcclxuICAgICAgICAgICAgICAgIGxhc3RJdGVtT2ZBcnIoKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycsICd1cCcpO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgnZG93bicpO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnc2hvdycsICd1cCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0ucHJldmlvdXNFbGVtZW50U2libGluZyAmJiBpdGVtLnByZXZpb3VzRWxlbWVudFNpYmxpbmcgIT09IG9iai5kaXZBcnJvd0Rvd24pIHtcclxuICAgICAgICAgICAgICAgIGlmKGl0ZW0ucHJldmlvdXNFbGVtZW50U2libGluZy5pZCA9PT0gJ0NvbnRhY3RzJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RJdGVtT2ZBcnIoKTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ3VwVycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuXHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBzbGlkZXJHb0Rvd24oaXRlbSkge1xyXG5cclxuICAgIGlmKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykpIHtcclxuICAgICAgICBpZiAod2luZG93LnNjcmVlbi53aWR0aCA+IDExMDApIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0ucHJldmlvdXNFbGVtZW50U2libGluZyAmJiBpdGVtLnByZXZpb3VzRWxlbWVudFNpYmxpbmcgIT09IG9iai5kaXZBcnJvd0Rvd25cclxuICAgICAgICAgICAgICAgICYmIGl0ZW0ucHJldmlvdXNFbGVtZW50U2libGluZy5pZCAhPT0gJ0NvbnRhY3RzJykge1xyXG4gICAgICAgICAgICAgICAgbGFzdEl0ZW1PZkFycigpO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93JywgJ3VwJyk7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2Rvd24nKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLm5leHRFbGVtZW50U2libGluZyAmJiBpdGVtLm5leHRFbGVtZW50U2libGluZyAhPT0gb2JqLmRpdkFycm93VXApIHtcclxuICAgICAgICAgICAgICAgIGlmKGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nLmlkID09PSAnQ29udGFjdHMnKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdEl0ZW1PZkFycigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGl0ZW0uaWQgPT09ICdUZW1wbGF0ZXMnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXRlbS5sYXN0RWxlbWVudENoaWxkLnNjcm9sbFRvcCA9PT0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnLCAndXAnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ3VwVycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnLCAnZG93blcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgndXBXJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ3Nob3cnLCAnZG93blcnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gY2hhbmdlU2xpZGVyVVAoKSB7XHJcbiAgICBsZXQgbWFzcyA9IG9iai5tYXNzU2xpZGVzLFxyXG4gICAgICAgIGxlbiA9IG51bGw7XHJcbiAgICAgICAgKHdpbmRvdy5zY3JlZW4ud2lkdGggPiAxMTAwKSA/IGxlbiA9IG1hc3MubGVuZ3RoIC0gMTogbGVuID0gbWFzcy5sZW5ndGg7XHJcbiAgICBvYmouQXJyb3dVcC5jbGFzc0xpc3QucmVtb3ZlKCdhbmltQnV0dG9uJyk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgIG9iai5pbmRleCA9IGk7XHJcbiAgICAgICAgaWYoc2xpZGVyR29VcChtYXNzW2ldKSl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIGNoYW5nZVNsaWRlckRPV04oKSB7XHJcbiAgICBsZXQgbWFzcyA9IG9iai5tYXNzU2xpZGVzLFxyXG4gICAgICAgIGxlbiA9IG51bGw7XHJcbiAgICAod2luZG93LnNjcmVlbi53aWR0aCA+IDExMDApID8gbGVuID0gbWFzcy5sZW5ndGg6IGxlbiA9IG1hc3MubGVuZ3RoLTE7XHJcbiAgICBvYmouQXJyb3dVcC5jbGFzc0xpc3QucmVtb3ZlKCdhbmltQnV0dG9uJyk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBsZW47IGkrKyl7XHJcbiAgICAgICAgb2JqLmluZGV4ID0gaTtcclxuICAgICAgICBpZihzbGlkZXJHb0Rvd24obWFzc1tpXSkpIHJldHVybjtcclxuICAgIH1cclxuXHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS1Td2lwZSBVcCAvIERvd24gLyBMZWZ0IC8gUmlnaHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIHN0YXJ0VG91Y2goZSkge1xyXG4gICAgICAgb2JqLmluaXRpYWxYID0gZS50b3VjaGVzWzBdLmNsaWVudFg7XHJcbiAgICAgICBvYmouaW5pdGlhbFkgPSBlLnRvdWNoZXNbMF0uY2xpZW50WTtcclxufVxyXG5mdW5jdGlvbiBtb3ZlVG91Y2goZSkge1xyXG5cclxuICAgIGlmIChvYmouaW5pdGlhbFggPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9iai5pbml0aWFsWSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgY3VycmVudFggPSBlLnRvdWNoZXNbMF0uY2xpZW50WCxcclxuICAgICAgICAgICAgY3VycmVudFkgPSBlLnRvdWNoZXNbMF0uY2xpZW50WTtcclxuXHJcbiAgICAgICAgbGV0IGRpZmZYID0gb2JqLmluaXRpYWxYIC0gY3VycmVudFgsXHJcbiAgICAgICAgICAgIGRpZmZZID0gb2JqLmluaXRpYWxZIC0gY3VycmVudFk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgaWYgKE1hdGguYWJzKGRpZmZYKSA+IE1hdGguYWJzKGRpZmZZKSkge1xyXG4gICAgICAgICAgICAvLyBzbGlkaW5nIGhvcml6b250YWxseVxyXG4gICAgICAgICAgICBpZiAoZGlmZlggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzd2lwZWQgbGVmdFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gc3dpcGVkIHJpZ2h0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBzbGlkaW5nIHZlcnRpY2FsbHlcclxuICAgICAgICAgICAgaWYgKGRpZmZZID4gMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gc3dpcGVkIHVwXHJcbiAgICAgICAgICAgICAgIGNoYW5nZVNsaWRlclVQKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzd2lwZWQgZG93blxyXG4gICAgICAgICAgICAgICAgY2hhbmdlU2xpZGVyRE9XTigpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb2JqLmluaXRpYWxYID0gbnVsbDtcclxuICAgICAgICBvYmouaW5pdGlhbFkgPSBudWxsO1xyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBidXR0b25Eb3duKGV2ZW50KSB7XHJcbiAgICBpZih3aW5kb3cuc2NyZWVuLndpZHRoID4gMTEwMCkge1xyXG4gICAgICAgIGlmIChldmVudC5jb2RlID09PSAnQXJyb3dEb3duJykge1xyXG4gICAgICAgICAgICBjaGFuZ2VTbGlkZXJET1dOKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC5jb2RlID09PSAnQXJyb3dVcCcpIHtcclxuICAgICAgICAgICAgY2hhbmdlU2xpZGVyVVAoKTtcclxuICAgICAgICB9XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0Fycm93RG93bicpIHtcclxuICAgICAgICAgICAgY2hhbmdlU2xpZGVyVVAoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdBcnJvd1VwJykge1xyXG4gICAgICAgICAgICBjaGFuZ2VTbGlkZXJET1dOKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gbW91c2VXaGVlbChlKSB7XHJcblxyXG4gICAgbGV0IGRlbHRhID0gZS5kZWx0YVkgfHwgZS5kZXRhaWwgfHwgZS53aGVlbERlbHRhO1xyXG4gICAgaWYod2luZG93LnNjcmVlbi53aWR0aCA+IDExMDApe1xyXG4gICAgICAgIGRlbHRhID4gMCA/IGNoYW5nZVNsaWRlckRPV04oKVxyXG4gICAgICAgICAgICA6ICAoIHdpbmRvdy5vbm1vdXNld2hlZWwgPSBudWxsICxcclxuICAgICAgICAgICAgICAgIGNoYW5nZVNsaWRlclVQKCksXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT4gd2luZG93Lm9ubW91c2V3aGVlbCA9IG1vdXNlV2hlZWwsIDUwMCkpO1xyXG4gICAgfWVsc2Uge1xyXG4gICAgICAgIGRlbHRhID4gMCA/IGNoYW5nZVNsaWRlclVQKClcclxuICAgICAgICAgICAgOiAgKCB3aW5kb3cub25tb3VzZXdoZWVsID0gbnVsbCxcclxuICAgICAgICAgICAgICAgIGNoYW5nZVNsaWRlckRPV04oKSxcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PiB3aW5kb3cub25tb3VzZXdoZWVsID0gbW91c2VXaGVlbCwgNTAwKSk7XHJcbiAgICB9XHJcblxyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gc3RhcnRMaXN0ZW5lcigpe1xyXG4gICAgZG9jdW1lbnQub25rZXlkb3duID0gYnV0dG9uRG93bjtcclxuICAgIHdpbmRvdy5vbm1vdXNld2hlZWwgPSBtb3VzZVdoZWVsO1xyXG4gICAgZG9jdW1lbnQub250b3VjaHN0YXJ0ID0gc3RhcnRUb3VjaDtcclxuICAgIGRvY3VtZW50Lm9udG91Y2htb3ZlID0gbW92ZVRvdWNoO1xyXG5cclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIHN0b3BMaXN0ZW5lcigpe1xyXG4gICAgZG9jdW1lbnQub25rZXlkb3duID0gbnVsbDtcclxuICAgIHdpbmRvdy5vbm1vdXNld2hlZWwgPSBudWxsO1xyXG4gICAgZG9jdW1lbnQub250b3VjaHN0YXJ0ID0gbnVsbDtcclxuICAgIGRvY3VtZW50Lm9udG91Y2htb3ZlID0gbnVsbDtcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIHJlbW92ZUNoYW5nZShpdGVtKSB7XHJcbiAgICBpdGVtLnN0eWxlLnRyYW5zZm9ybSA9ICdub25lJztcclxuICAgIGl0ZW0uc3R5bGUuYm9yZGVyUmFkaXVzID0gYDBgO1xyXG4gICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51T3BlbicpO1xyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBjaG9vc2VQYWdlKGUpIHtcclxuICAgIGxldCBtYXNzID0gb2JqLm1hc3NTbGlkZXMsXHJcbiAgICAgICAgaWQgPSB0aGlzLmlkLFxyXG4gICAgICAgIGZsYWcgPSBmYWxzZSxcclxuICAgICAgICBsZW4gPSBtYXNzLmxlbmd0aDtcclxuXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IGxlbi0xOyBpID4gMDsgaS0tKXtcclxuXHJcbiAgICAgICAgaWYoaWQgPT09ICdDb250YWN0cycpIHtcclxuICAgICAgICAgICAgY2xvc2VNZW51KG1hc3NbaV0pO1xyXG4gICAgICAgICAgICBtb2RhbFdpbmRvdygpO1xyXG5cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaWYobWFzc1tpXS5pZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIG9iai5pbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgICBmbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICBtYXNzW2ldLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICBsYXN0SXRlbU9mQXJyKCk7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDaGFuZ2UobWFzc1tpXSk7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmKGZsYWcpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5zY3JlZW4ud2lkdGggPiAxMTAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFzc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc3NbaV0uY2xhc3NMaXN0LmFkZCgndXAnKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFzc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5zY3JlZW4ud2lkdGggPiAxMTAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc3NbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycsICd1cCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNzW2ldLmNsYXNzTGlzdC5hZGQoJ2Rvd24nKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc3NbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNzW2ldLmNsYXNzTGlzdC5hZGQoJ3VwVycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlbW92ZUNoYW5nZShtYXNzW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGFydExpc3RlbmVyKCk7XHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIGNsb3NlTWVudShpdGVtKSB7XHJcbiAgICBpdGVtLnN0eWxlLnRyYW5zZm9ybSA9ICdub25lJztcclxuICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnbWVudU9wZW4nKTtcclxuICAgIGl0ZW0uc3R5bGUuYm9yZGVyUmFkaXVzID0gYDBgO1xyXG4gICAgb2JqLmRpdkFycm93RG93bi5jbGFzc0xpc3QucmVtb3ZlKCdub25lJyk7XHJcbiAgICBpdGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hvb3NlUGFnZSk7XHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBtZW51U2hvdygpIHtcclxuXHJcbiAgICBjb25zdCBtYXNzID0gb2JqLm1hc3NTbGlkZXMsXHJcbiAgICAgICAgbGVuID0gbWFzcy5sZW5ndGg7XHJcbiAgICBsZXQgdHJhbnNGb3JtID0gMDtcclxuXHJcbiAgICAgICAgbWFzcy5mb3JFYWNoKCBlbCA9PiB7XHJcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ3VwJywgJ2Rvd24nLCAndXBXJywgJ2Rvd25XJywnc2hvdycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG1hc3NbbGVuLTFdLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKyl7XHJcblxyXG4gICAgICAgIGlmKCFtYXNzW2ldLnN0eWxlLnRyYW5zZm9ybSB8fCBtYXNzW2ldLnN0eWxlLnRyYW5zZm9ybSA9PT0gJ25vbmUnKXtcclxuICAgICAgICAgICAgaWYoaSl7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2NyZWVuLndpZHRoIDwgMTEwMCA/IHRyYW5zRm9ybSArPSA3MCA6IHRyYW5zRm9ybSArPSA4MDtcclxuICAgICAgICAgICAgICAgIG1hc3NbaV0uc3R5bGUuYm9yZGVyUmFkaXVzID0gYDhweCA4cHggMCAwYDtcclxuICAgICAgICAgICAgICAgIG1hc3NbaV0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHt0cmFuc0Zvcm19cHgpYDtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWFzc1tpXS5jbGFzc0xpc3QuYWRkKCdtZW51T3BlbicpO1xyXG4gICAgICAgICAgICBtYXNzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hvb3NlUGFnZSk7XHJcbiAgICAgICAgICAgIG9iai5kaXZBcnJvd0Rvd24uY2xhc3NMaXN0LmFkZCgnbm9uZScpO1xyXG4gICAgICAgICAgICBvYmouZGl2QXJyb3dVcC5jbGFzc0xpc3QuYWRkKCdub25lJyk7XHJcbiAgICAgICAgICAgIHN0b3BMaXN0ZW5lcigpO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgY2xvc2VNZW51KG1hc3NbaV0pO1xyXG4gICAgICAgICAgICBzdGFydExpc3RlbmVyKCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBjcmVhdE1vZGFsV2luZG93KCkge1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICAgICAgICBzdHIgPSBgPGRpdiBjbGFzcz1cIm1vZGFsRm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPtCh0LLRj9C20LjRgtC10YHRjCDRgSDQvdCw0LzQuDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNreXBlOiBfX19fX19fX19fX19fX19fXzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlZpYmU6IF9fX19fX19fX19fX19fX19fXzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRlbGVncmFtOiBfX19fX19fX19fX19fXzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG5cIj7Ql9Cw0LrRgNGL0YLRjDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG5cclxuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywnbW9kYWwnKTtcclxuICAgIGRpdi5pbm5lckhUTUwgPSBzdHI7XHJcbiAgICBvYmoubW9kYWxXaW5kb3cgPSBkaXY7XHJcbiAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShkaXYsb2JqLmNvbnRhaW5lci5uZXh0RWxlbWVudFNpYmxpbmcpO1xyXG4gICAgb2JqLmNsb3NlTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuJyk7XHJcbn1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gbW9kYWxXaW5kb3coKXtcclxuICAgIGNvbnN0IG1vZGFsID0gb2JqLm1vZGFsV2luZG93LFxyXG4gICAgICAgICAgYnRuQ2xvc2UgPSBvYmouY2xvc2VNb2RhbDtcclxuXHJcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbEFjdGl2ZScpO1xyXG4gICAgc3RvcExpc3RlbmVyKCk7XHJcbiAgICBidG5DbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xyXG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsQWN0aXZlJyk7XHJcbiAgICAgICAgc3RhcnRMaXN0ZW5lcigpO1xyXG4gICAgfSk7XHJcbn1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxub2JqLm1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtZW51U2hvdyk7XHJcbmxldCB2aCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMDE7XHJcbi8vIFRoZW4gd2Ugc2V0IHRoZSB2YWx1ZSBpbiB0aGUgLS12aCBjdXN0b20gcHJvcGVydHkgdG8gdGhlIHJvb3Qgb2YgdGhlIGRvY3VtZW50XHJcbmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS12aCcsIGAke3ZofXB4YCk7XHJcbi8vXHJcbi8vINGB0LvRg9GI0LDQtdC8INGB0L7QsdGL0YLQuNC1IHJlc2l6ZVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG4gICAgLy8g0L/QvtC70YPRh9Cw0LXQvCDRgtC10LrRg9GJ0LXQtSDQt9C90LDRh9C10L3QuNC1INCy0YvRgdC+0YLRi1xyXG4gICAgbGV0IHZoID0gd2luZG93LmlubmVySGVpZ2h0ICogMC4wMTtcclxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS12aCcsIGAke3ZofXB4YCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gb3JpZW50YXRpb25TY3JlZW4oKXtcclxuICAgIGxldCBsb2NrID0gd2luZG93LnNjcmVlbi5vcmllbnRhdGlvbi5sb2NrKFwicG9ydHJhaXRcIil8fCB3aW5kb3cuc2NyZWVuLmxvY2tPcmllbnRhdGlvbihcInBvcnRyYWl0XCIpO1xyXG4gICAgcmV0dXJuIGxvY2s7XHJcbn1cclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbnNsaWRlckNvbnRhaW5lcigpO1xyXG5jcmVhdE1vZGFsV2luZG93KCk7XHJcbmFycm93QnV0dG9ucygpO1xyXG5zdGFydExpc3RlbmVyKCk7XHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgQ2F0IGZyb20gJy4uLy4uL2ltZy9jYXQucG5nJztcclxuaW1wb3J0IE1vb24gZnJvbSAnLi4vLi4vaW1nL01vb24ucG5nJztcclxuaW1wb3J0IHN0YXIgZnJvbSAnLi4vLi4vaW1nL3N0YXIucG5nJztcclxuaW1wb3J0ICBDb21tZW50IGZyb20gJy4uLy4uL2ltZy9jb21tZW50VGV4dC5wbmcnO1xyXG5pbXBvcnQgc25haWwgZnJvbSAnLi4vLi4vaW1nL2dyYXNzU25haWwucG5nJztcclxuXHJcbmNvbnN0IG9iaiA9IHtcclxuICAgIHNsaWRlICAgIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICBtYWluICAgICA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgdG9wQmxvY2sgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgIGJvdHRvbUJsb2NrIDpkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgIGJsb2NrQ2F0IDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICBibG9ja01vb246IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgY2F0ICAgICAgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgIGNvbW0gICAgIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICB3b3Jkc0Jsb2NrOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgIGluYmxXb3JkcyA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgbGVmdCA6IDMwLFxyXG4gICAgQ2F0ICA6IG5ldyBJbWFnZSgpLFxyXG4gICAgTW9vbiA6IG5ldyBJbWFnZSgpLFxyXG4gICAgQ29tbWVudCA6IG5ldyBJbWFnZSgpLFxyXG4gICAgU25haWwgOiBuZXcgSW1hZ2UoKVxyXG59XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gYWRkSW1hZ2UoKSB7XHJcblxyXG4gICAgb2JqLk1vb24uc3JjID0gTW9vbjtcclxuICAgIG9iai5Nb29uLmFsdCA9ICdNb29uJztcclxuICAgIG9iai5Nb29uLmNsYXNzTGlzdC5hZGQoJ21vb24nKTtcclxuICAgIG9iai5ibG9ja01vb24uYXBwZW5kQ2hpbGQob2JqLk1vb24pO1xyXG5cclxuICAgIG9iai5DYXQuc3JjID0gQ2F0O1xyXG4gICAgb2JqLkNhdC5hbHQgPSAnQ2F0JztcclxuICAgIG9iai5jYXQuYXBwZW5kQ2hpbGQob2JqLkNhdCk7XHJcblxyXG4gICAgb2JqLkNvbW1lbnQuc3JjID0gQ29tbWVudDtcclxuICAgIG9iai5Db21tZW50LmFsdCA9ICdDb21tZW50JztcclxuICAgIG9iai5jb21tLmFwcGVuZENoaWxkKG9iai5Db21tZW50KTtcclxuXHJcbiAgICBvYmouU25haWwuc3JjID0gc25haWw7XHJcbiAgICBvYmouU25haWwuYWx0ID0gJ1NuYWlsJztcclxuICAgIG9iai5TbmFpbC5jbGFzc0xpc3QuYWRkKCdncmFzcycpO1xyXG4gICAgb2JqLm1haW4uYXBwZW5kQ2hpbGQob2JqLlNuYWlsKTtcclxuXHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIGNsb3Vkc0ltZygpIHtcclxuICAgIGxldCBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICAgICAgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgICAgIGRpdjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBkaXYxLmNsYXNzTGlzdC5hZGQoJ2Nsb3VkMScsJ2Nsb3VkJywgJ21vdmVDbG91ZF8xJyk7XHJcbiAgICBvYmoubWFpbi5hcHBlbmRDaGlsZChkaXYxKTtcclxuXHJcbiAgICBkaXYyLmNsYXNzTGlzdC5hZGQoJ2Nsb3VkMicsICdjbG91ZCcsICdtb3ZlQ2xvdWRfMicpO1xyXG4gICAgb2JqLm1haW4uYXBwZW5kQ2hpbGQoZGl2Mik7XHJcblxyXG4gICAgZGl2My5jbGFzc0xpc3QuYWRkKCdjbG91ZDMnLCAnY2xvdWQnLCAnbW92ZUNsb3VkXzMnKTtcclxuICAgIG9iai5tYWluLmFwcGVuZENoaWxkKGRpdjMpO1xyXG5cclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBtb3ZlTW9vbigpIHtcclxuICAgIGxldCBtb29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vb24nKSxcclxuICAgICAgICB0cmFuc2YgPSAobW9vbi5zdHlsZS50cmFuc2Zvcm0pLnJlcGxhY2UoL3JvdGF0ZVxcKC8sJycpLFxyXG4gICAgICAgIG51bSA9IHRyYW5zZi5yZXBsYWNlKC9kZWdcXCkvLCcnKTtcclxuICAgICAgIG51bSA9IE51bWJlcihudW0pICsgIDAuNTtcclxuICAgIGlmKG1vb24uc3R5bGUudHJhbnNmb3JtID09PSAnJyl7XHJcbiAgICAgICAgbnVtID0gMDtcclxuICAgIH1cclxuICAgIG1vb24uc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgke251bX1kZWcpYDtcclxuXHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIGNoYW5nZVBvc2l0aW9uU3RhcnMoKSB7XHJcbiAgICBsZXQgbWFzc1N0YXJzID0gb2JqLm1haW4ucXVlcnlTZWxlY3RvckFsbCgnLnN0YXInKTtcclxuXHJcbiAgICAgZm9yKGxldCBpID0gMDsgaSA8IG1hc3NTdGFycy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgIGxldCB0b3AgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqKDQwIC0gNSkgKyA1KSxcclxuICAgICAgICAgICAgIGxlZnQgPSAgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKigxMDAgLSAxKSArIDEpO1xyXG4gICAgICAgICAgICAgbWFzc1N0YXJzW2ldLnN0eWxlLnRvcCA9IHRvcCArICclJztcclxuICAgICAgICAgICAgIG1hc3NTdGFyc1tpXS5zdHlsZS5sZWZ0ID0gbGVmdCArICclJztcclxuICAgICB9XHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIHBvc2l0aW9uU3RhcihuZXdTdGFyKSB7XHJcblxyXG4gICAgbGV0IHRvcCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSooNDAgLSA1KSArIDUpLFxyXG4gICAgICAgIGxlZnQgPSAgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKigxMDAgLSAxKSArIDEpO1xyXG5cclxuICAgICAgICBuZXdTdGFyLnN0eWxlLnRvcCA9IHRvcCArICclJztcclxuICAgICAgICBuZXdTdGFyLnN0eWxlLmxlZnQgPSBsZWZ0ICsgJyUnO1xyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBzaXplU3RhcigpIHtcclxuICAgIGxldCBzaXplID0gNDA7XHJcbiAgICBpZih3aW5kb3cuc2NyZWVuLndpZHRoIDwgMTAwMCl7XHJcbiAgICAgICAgc2l6ZSA9IDIwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSooc2l6ZSAtIDUpICsgNSk7XHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBzdGFycygpIHtcclxuXHJcbiAgICBsZXQgYW1vdW50ID0gMDtcclxuXHJcbiAgICBpZih3aW5kb3cuc2NyZWVuLndpZHRoIDwgMTAwMCl7XHJcbiAgICAgICAgYW1vdW50ID0gTWF0aC5yYW5kb20oKSooMTAgLSA1KSArIDU7XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgICAgYW1vdW50ID0gTWF0aC5yYW5kb20oKSooMjAgLSAxMCkgKyAxMDtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1hdGgucm91bmQoYW1vdW50KTsgaSsrKXtcclxuICAgICAgICBsZXQgU3RhciA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICBTdGFyLnNyYyA9IHN0YXI7XHJcbiAgICAgICAgIFN0YXIuYWx0ID0gJ3N0YXInO1xyXG4gICAgICAgICBTdGFyLmNsYXNzTGlzdC5hZGQoJ3N0YXInKTtcclxuICAgICAgICAgU3Rhci5zdHlsZS5oZWlnaHQgPSBzaXplU3RhcigpICsgJ3B4JztcclxuICAgICAgICAgcG9zaXRpb25TdGFyKFN0YXIpO1xyXG4gICAgICAgICBvYmoubWFpbi5hcHBlbmRDaGlsZChTdGFyKTtcclxuXHJcbiAgICB9XHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiB3b3JkcygpIHtcclxuICAgIGxldCBtYXNzV29yZHMgPSBbJyZsdDtiPicsICcmbHQ7aDE+JywgJyZsdDtkaXY+JywgJyZsdDtwPiddLFxyXG4gICAgICAgIGRpdiA9IG9iai5pbmJsV29yZHMsXHJcbiAgICAgICAgbGVmdCA9IDAsXHJcbiAgICAgICAgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSxcclxuICAgICAgICBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1hc3NXb3Jkcy5sZW5ndGgpLFxyXG4gICAgICAgIGxlbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg1IC0gMikgKyAyKSxcclxuICAgICAgICBudW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTM1IC0gNjApICsgNjApO1xyXG5cclxuICAgICAgICBudW0gPCA5MCA/IGxlZnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoOTAgLSA0NSkgKyA0NSk6XHJcbiAgICAgICAgICAgICAgICAgICBsZWZ0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEyNSAtIDkwKSArIDkwKTtcclxuICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1sZWZ0JywgYCR7bGVmdH0lYCk7XHJcbiAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tbnVtJywgYCR7bnVtfWRlZ2ApO1xyXG5cclxuXHJcbiAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgICAgICAgIHNwYW4uaW5uZXJIVE1MID0gYCR7bWFzc1dvcmRzW2luZGV4XX1gO1xyXG4gICAgICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xyXG4gICAgICAgICAgICAgICAgICAgLy8gc3Bhbi5zdHlsZS5sZWZ0ID0gbnVtICsgJyUnO1xyXG4gICAgICAgICAgICAgICAgICAgLy8gc3Bhbi5zdHlsZS50b3AgPSAnMTEwJSc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdtb3ZlVycpO1xyXG5cclxuICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e3NwYW4ucmVtb3ZlKCk7fSwxMDAwMCk7XHJcblxyXG4gICAgICAgICAgIH1cclxuXHJcbiAgICAvLyBzcGFuLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoJHtudW19ZGVnKWA7XHJcblxyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBjb250YWluZXIoKSB7XHJcbiAgICBjb25zdCBzbGlkMSA9IG9iai5zbGlkZSxcclxuICAgICAgICAgIG1haW4gID0gb2JqLm1haW4sXHJcbiAgICAgICAgICB0b3BCbCA9IG9iai50b3BCbG9jayxcclxuICAgICAgICAgIGJ0dG1CbCA9IG9iai5ib3R0b21CbG9jayxcclxuICAgICAgICAgIGJsb2NrQ2F0ID0gb2JqLmJsb2NrQ2F0LFxyXG4gICAgICAgICAgYmxvY2tNb29uID0gb2JqLmJsb2NrTW9vbixcclxuICAgICAgICAgIGJsb2NrV29yZHMgPSBvYmoud29yZHNCbG9jayxcclxuICAgICAgICAgIGluYmxXID0gb2JqLmluYmxXb3JkcyxcclxuICAgICAgICAgIG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpLFxyXG4gICAgICAgICAgY2F0ID0gb2JqLmNhdCxcclxuICAgICAgICAgIGNvbW0gPSBvYmouY29tbTtcclxuXHJcbiAgICBzbGlkMS5jbGFzc0xpc3QuYWRkKCdzbGlkJywgJ3NsaWQxJywgJ3Nob3cnKTtcclxuICAgIHNsaWQxLnN0eWxlLmhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgKyAncHgnO1xyXG4gICAgc2xpZDEuaWQgPSAnTWFpbic7XHJcblxyXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluRGl2Jyk7XHJcbiAgICBzbGlkMS5hcHBlbmRDaGlsZChtYWluKTtcclxuXHJcbiAgICB0b3BCbC5jbGFzc0xpc3QuYWRkKCd0b3BCbG9jaycpO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZCh0b3BCbCk7XHJcblxyXG4gICAgYnR0bUJsLmNsYXNzTGlzdC5hZGQoJ2JvdHRvbUJsb2NrJyk7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGJ0dG1CbCk7XHJcblxyXG4gICAgbmFtZS5jbGFzc0xpc3QuYWRkKCdoMScpO1xyXG4gICAgbmFtZS5pbm5lckhUTUwgPSAnQU5ZIFdFQic7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKG5hbWUpO1xyXG5cclxuXHJcbiAgICBibG9ja0NhdC5jbGFzc0xpc3QuYWRkKCdibG9ja0NhdCcpO1xyXG4gICAgYnR0bUJsLmFwcGVuZENoaWxkKGJsb2NrQ2F0KTtcclxuXHJcbiAgICBjYXQuY2xhc3NMaXN0LmFkZCgnY2F0Jyk7XHJcbiAgICBjb21tLmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnQnKTtcclxuICAgIGJsb2NrQ2F0LmFwcGVuZENoaWxkKGNhdCk7XHJcbiAgICBibG9ja0NhdC5hcHBlbmRDaGlsZChjb21tKTtcclxuXHJcbiAgICBibG9ja01vb24uY2xhc3NMaXN0LmFkZCgnYmxvY2tNb29uJyk7XHJcbiAgICB0b3BCbC5hcHBlbmRDaGlsZChibG9ja01vb24pO1xyXG5cclxuICAgIGJsb2NrV29yZHMuY2xhc3NMaXN0LmFkZCgnd29yZHNCbG9jaycpO1xyXG4gICAgYmxvY2tXb3Jkcy5hcHBlbmRDaGlsZChpbmJsVyk7XHJcbiAgICBidHRtQmwuYXBwZW5kQ2hpbGQoYmxvY2tXb3Jkcyk7XHJcblxyXG4gICAgYWRkSW1hZ2UoKTtcclxuICAgIHN0YXJzKCk7XHJcbiAgICBjbG91ZHNJbWcoKTtcclxuICAgIHNldEludGVydmFsKGNoYW5nZVBvc2l0aW9uU3RhcnMsIDIwMDAwKTtcclxuICAgIHNldEludGVydmFsKG1vdmVNb29uLDEwMDAwKTtcclxuICAgIHNldEludGVydmFsKG1vdmVNb29uLDEwMDAwKTtcclxuICAgIHNldEludGVydmFsKHdvcmRzLCA1MDAwKTtcclxuXHJcbn1cclxuXHJcbmNvbnRhaW5lcigpO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG9iai5zbGlkZTsiLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgQ2F0V2VPZmZlciBmcm9tICcuLi8uLi9pbWcvY2F0V2VPZmZmZXIucG5nJztcclxuaW1wb3J0IE1vb25XZU9mZmVyIGZyb20gJy4uLy4uL2ltZy9tb29uV2VPZmZlci5wbmcnO1xyXG5pbXBvcnQgU3VuIGZyb20gJy4uLy4uL2ltZy9zdW4ucG5nJztcclxuaW1wb3J0IEJhY2tncm91bmRIb21lIGZyb20gJy4uLy4uL2ltZy9iYWNrR3JvdW5kLW1pbi5wbmcnO1xyXG5pbXBvcnQgR3Jhc3MgZnJvbSAnLi4vLi4vaW1nL2dyYXNzLnBuZyc7XHJcbmltcG9ydCBDaXJjbGUgZnJvbSAnLi4vLi4vaW1nL2NpcmNsZS5wbmcnO1xyXG5pbXBvcnQgc3ZnSlNPTiBmcm9tICcuLi8uLi9qc29uL3N2Zy5qc29uJztcclxuXHJcbmNvbnN0IHNsaWQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG5zbGlkMi5jbGFzc0xpc3QuYWRkKCdzbGlkJywgJ3NsaWQyJyk7XHJcbnNsaWQyLnN0eWxlLmhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgKyAncHgnO1xyXG5zbGlkMi5pZCA9ICdXZSBzdXBwb3NlJztcclxuXHJcbi8vIGNyZWF0ZSBlbGVtZW50cyBmb3Igc2xpZGUgV2Ugb2ZmZXIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5jb25zdCBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyID0ge1xyXG4gICAgYmxvY2tTVkdXZU9mZmVyIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICBtb2RhbFdpbmRvd0ludGVybmV0U2hvcCA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgbW9kYWxXaW5kb3dTaXRlQ29tcGFueSA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgbW9kYWxXaW5kb3dCbG9nIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICBtb2RhbFdpbmRvd1BvcnRmb2xpbyA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgbW9kYWxXaW5kb3dTb2NpYWxOZXR3b3JrIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICBtb2RhbFdpbmRvd0ZvcnVtIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICBtb2RhbFdpbmRvd0xhbmRpbmcgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgIG1vZGFsV2luZG93R2FtZVNvdXJzIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblxyXG4gICAgY29udGFpbmVyTW9kYWxJbnRlcm5ldFNob3AgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgIGNvbnRhaW5lck1vZGFsU2l0ZUNvbXBhbnkgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgIGNvbnRhaW5lck1vZGFsQmxvZyA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgY29udGFpbmVyTW9kYWxQb3J0Zm9saW8gOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgIGNvbnRhaW5lck1vZGFsU29jaWFsTmV0d29yayA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgY29udGFpbmVyTW9kYWxGb3J1bSA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgY29udGFpbmVyTW9kYWxMYW5kaW5nIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICBjb250YWluZXJNb2RhbEdhbWVTb3VycyA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cclxuICAgIGJsb2NrVGV4dE1vZGFsSW50ZXJuZXRTaG9wIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLFxyXG4gICAgYmxvY2tUZXh0TW9kYWxTaXRlQ29tcGFueSA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSxcclxuICAgIGJsb2NrVGV4dE1vZGFsQmxvZyA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSxcclxuICAgIGJsb2NrVGV4dE1vZGFsUG9ydGZvbGlvIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLFxyXG4gICAgYmxvY2tUZXh0TW9kYWxTb2NpYWxOZXR3b3JrIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLFxyXG4gICAgYmxvY2tUZXh0TW9kYWxGb3J1bSA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSxcclxuICAgIGJsb2NrVGV4dE1vZGFsTGFuZGluZyA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSxcclxuICAgIGJsb2NrVGV4dE1vZGFsR2FtZVNvdXJzIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLFxyXG5cclxuICAgIGJ1dHRvbk1vZGFsSW50ZXJuZXRTaG9wIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyksXHJcbiAgICBidXR0b25Nb2RhbFNpdGVDb21wYW55IDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyksXHJcbiAgICBidXR0b25Nb2RhbEJsb2cgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSxcclxuICAgIGJ1dHRvbk1vZGFsUG9ydGZvbGlvIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyksXHJcbiAgICBidXR0b25Nb2RhbFNvY2lhbE5ldHdvcmsgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSxcclxuICAgIGJ1dHRvbk1vZGFsRm9ydW0gOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSxcclxuICAgIGJ1dHRvbk1vZGFsTGFuZGluZyA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpLFxyXG4gICAgYnV0dG9uTW9kYWxHYW1lU291cnMgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSxcclxuXHJcbiAgICBDYXRXZU9mZmVyIDogbmV3IEltYWdlKCksXHJcbiAgICBNb29uV2VPZmZlciA6IG5ldyBJbWFnZSgpLFxyXG4gICAgU3VuIDogbmV3IEltYWdlKCksXHJcbiAgICBCYWNrZ3JvdW5kSG9tZSA6IG5ldyBJbWFnZSgpLFxyXG4gICAgR3Jhc3MgOiBuZXcgSW1hZ2UoKSxcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcblxyXG4vLyB0ZXh0IGZvciBtb2RhbCB3aW5kb3dzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmNvbnN0IGNyZWF0ZVRleHRGb3JNb2RhbFdpbmRvd3MgPSB7XHJcbiAgICB0ZXh0TW9kYWxJbnRlcm5ldFNob3AgOiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgn0JfQtNC10YHRjCDRgdC70L7QstCwINC40LfQu9C40YjQvdC4LiDQltC10LvQsNC10YLQtSDQv9GA0L7QtNCw0YLRjD8g0J/QvtC80L7QttC10LwhJyksXHJcbiAgICB0ZXh0TW9kYWxTaXRlQ29tcGFueSA6IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCfQoyDQktCw0YEg0LXRgdGC0Ywg0YTQuNGA0LzQsCDQvdC+INC30L3QsNC10YLQtSDQviDQvdC10Lkg0YLQvtC70YzQutC+INCy0Ysg0Lgg0YHQvtGB0LXQtD8g0KHQtNC10LvQsNC50YLQtSDRgdCw0LnRgiAtINGN0YLQviDRiNCw0LMg0LLQviDQstGB0LXQvNC40YDQvdGD0Y4g0L/QsNGD0YLQuNC90YMhJyksXHJcbiAgICB0ZXh0TW9kYWxCbG9nIDogZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ9CSINC00YPRiNC1INCS0Ysg0LHQu9C+0LPQtdGAINC4INGF0L7RgtC40YLQtSDQuNC80LXRgtGMINC60YPRh9GDINC/0L7QtNC/0LjRgdGH0LjQutC+0LIg0Lgg0L7RgtCy0LXRh9Cw0YLRjCDQvdCwINC40YUg0LrQvtC80LXQvdGC0LDRgNC40Lg/INCt0YLQviDQvdC1INGB0LvQvtC20L3QviEnKSxcclxuICAgIHRleHRNb2RhbFBvcnRmb2xpbyA6IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCfQktCw0Lwg0L3QsNC00L7QtdC70L4g0YDQsNGB0LrQsNC30YvQstCw0YLRjCDQviDRgdC10LHQtS4g0JjQu9C4INCy0Ysg0YXQvtGC0LjRgtC1INGH0YLQvtCx0Ysg0L4g0LLQsNGBINC30L3QsNC70Lgg0LLRgdC1IC0g0J/QvtGA0YLRhNC+0LvQuNC+LCDRgtC10L/QtdGA0Ywg0LLRgdC1INCy0LDRiNC4INC00L7RgdGC0LjQttC10L3QuNGPINGB0L7QsdGA0LDQvdGLINCyINC+0LTQvdC+0Lwg0LzQtdGB0YLQtScpLFxyXG4gICAgdGV4dE1vZGFsU29jaWFsTmV0d29yayA6IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCfQn9C+0YDRgtGA0LXRgiDRgdCw0LzQvtCz0L4g0JzQsNGA0LrQsCDQstC40YHQuNGCINGDINCy0LDRgSDQsiDRgdC/0LDQu9GM0L3QtSwg0LXQs9C+INC70L7Qt9GD0L3Qs9C4INGDINCy0LDRgSDQvdCwINC30LDRgdGC0LDQstC60LU/INCi0L7Qs9C00LAg0LLQv9C10YDQtdC0ISDQodC+0YbQuNCw0LvRjNC90LDRjyDRgdC10YLRjCDRgdGC0YDQvtC40YIg0YHQtdCx0Y8g0YHQsNC80LAhJyksXHJcbiAgICB0ZXh0TW9kYWxGb3J1bSA6IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCfQktCw0YjQsCDRhtC10LvRjCDQv9C+0LzQvtGH0Ywg0LvRjtC00Y/QvCDQuCDRgdC00LXQu9Cw0YLRjCDRjdGC0L4g0LzQuNGAINGH0LXQvC3RgtC+INC70YPRh9GI0LU/INCk0L7RgNGD0Lwg0YHQsNC80L7QtSDRgtC+ISDQktC+0L/RgNC+0YHRiyDQuCDQvtGC0LLQtdGC0Ysg0YHQsNC80Lgg0L3QsNC50LTRg9GC0YHRjyAtINCS0Ysg0LXRgdGC0YwgXCLQodGD0L/QtdGAINC80L7QtNC10YDQsNGC0L7RgFwiIScpLFxyXG4gICAgdGV4dE1vZGFsTGFuZGluZyA6IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCfQktCw0YjQuCDQutC70LjQtdC90YLRiyDQstC+0YHQvdC+0LLQvdC+0Lwg0LvRjtCx0Y/RgiDQu9C10L3RgtGDPyDQkdC10Lcg0L/RgNC+0LHQu9C10LwgLSDQu9C10L3QtNC40L3Qsywg0L3QtdGCINC+0LPRgNCw0L3QuNGH0LXQvdC40Lkg0L/QviDQtNC70LjQvdC90LUnKSxcclxuICAgIHRleHRNb2RhbEdhbWVTb3VycyA6IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCfQktGLINC/0YDQuNC00YPQvNCw0LvQuCDQvdC10LrQutC40Lkg0LjQvdGC0LXRgNCw0LrRgtC40LIg0LTQu9GPINGA0LDQt9Cy0LvQtdGH0LXQvdC40Y8g0L7RhNC40YHQvdC+0LPQviDQv9C70LDQvdC60YLQvtC90LAg0LjQu9C4INC/0YDQvtGB0YLQviDQu9GO0LHQuNC00LXQu9C10Lkg0LjQvdGC0LXRgNC90LXRgiDRgdC10YDRhNC40L3Qs9CwLiDQktCw0Lwg0L3QtdC+0LHRhdC+0LTQuNC8INGB0LDQudGCINGBINC60YPRh9C10Lkg0YPRgdC70L7QstC40Lkg0Lgg0YTRg9C90LrRhtC40Lkg0LTQu9GPINCy0L7Qv9C70L7RidC10L3QuNGPINGN0YLQvtCz0L4g0LIg0LbQuNC30L3RjD8g0JTQsCDQvdC1INC/0YDQvtCx0LvQtdC80LApJyksXHJcblxyXG4gICAgdGV4dEJ1dHRvbkludGVybmV0U2hvcCA6IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCfiqK8nKSxcclxuICAgIHRleHRCdXR0b25TaXRlQ29tcGFueSA6IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCfiqK8nKSxcclxuICAgIHRleHRCdXR0b25CbG9nIDogZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ+KorycpLFxyXG4gICAgdGV4dEJ1dHRvblBvcnRmb2xpbyA6IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCfiqK8nKSxcclxuICAgIHRleHRCdXR0b25Tb2NpYWxOZXR3b3JrIDogZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ+KorycpLFxyXG4gICAgdGV4dEJ1dHRvbkZvcnVtIDogZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ+KorycpLFxyXG4gICAgdGV4dEJ1dHRvbkxhbmRpbmcgOiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgn4qivJyksXHJcbiAgICB0ZXh0QnV0dG9uR2FtZVNvdXJzIDogZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ+KorycpLFxyXG4gICAgLy8gdGV4dEJ1dHRvbiA6IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCfiqK8nKSxcclxuICAgIFxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG5cclxuLy8gaW1nIHNsaWRlID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmZ1bmN0aW9uIGltYWdlc1NsaWRXZU9mZmVyKCkge1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5DYXRXZU9mZmVyLnNyYyA9IENhdFdlT2ZmZXI7XHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLkNhdFdlT2ZmZXIuYWx0ID0gJ2NhdFdlT2ZmZXInO1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5DYXRXZU9mZmVyLmNsYXNzTGlzdC5hZGQoJ2NhdFdlT2ZmZmVyJyk7XHJcbiAgICBzbGlkMi5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLkNhdFdlT2ZmZXIpO1xyXG5cclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuTW9vbldlT2ZmZXIuc3JjID0gTW9vbldlT2ZmZXI7XHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLk1vb25XZU9mZmVyLmFsdCA9ICdtb29uJztcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuTW9vbldlT2ZmZXIuY2xhc3NMaXN0LmFkZCgnbW9vbldlT2ZmZmVyJyk7XHJcbiAgICBzbGlkMi5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLk1vb25XZU9mZmVyKTtcclxuXHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLlN1bi5zcmMgPSBTdW47XHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLlN1bi5hbHQgPSAnU3VuJztcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuU3VuLmNsYXNzTGlzdC5hZGQoJ3N1bldlT2ZmZmVyJyk7XHJcbiAgICBzbGlkMi5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLlN1bik7XHJcblxyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5CYWNrZ3JvdW5kSG9tZS5zcmMgPSBCYWNrZ3JvdW5kSG9tZTtcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuQmFja2dyb3VuZEhvbWUuYWx0ID0gJ0JhY2tncm91bmRIb21lJztcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuQmFja2dyb3VuZEhvbWUuY2xhc3NMaXN0LmFkZCgnaG9tZVdlT2ZmZmVyJyk7XHJcbiAgICBzbGlkMi5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLkJhY2tncm91bmRIb21lKTtcclxuXHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLkdyYXNzLnNyYyA9IEdyYXNzO1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5HcmFzcy5hbHQgPSAnR3Jhc3MnO1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5HcmFzcy5jbGFzc0xpc3QuYWRkKCdncmFzc1dlT2ZmZmVyJyk7XHJcbiAgICBzbGlkMi5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLkdyYXNzKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIGZvciBjcmVhdGUgcGFnZSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmZ1bmN0aW9uIGJ1aWxkUGFnZSgpIHtcclxuICAgIC8vIGNyZWF0ZSBzdmdcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuYmxvY2tTVkdXZU9mZmVyLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrU1ZHJyk7XHJcbiAgICBzbGlkMi5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLmJsb2NrU1ZHV2VPZmZlcik7XHJcblxyXG4gICAgLy8gY3JlYXRlIG1vZGFsIHdpbmRvdyBmb3IgaW50ZXJuZXQgc2hvcFxyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5tb2RhbFdpbmRvd0ludGVybmV0U2hvcC5jbGFzc0xpc3QuYWRkKCdtb2RhbFdlT2ZmZmVyJywgJ2ludGVybmV0U2hvcCcpO1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5jb250YWluZXJNb2RhbEludGVybmV0U2hvcC5jbGFzc0xpc3QuYWRkKCdjb250YWluZXJXZU9mZmZlcicpO1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5idXR0b25Nb2RhbEludGVybmV0U2hvcC5jbGFzc0xpc3QuYWRkKCdpbnRlcm5ldFNob3BCdXR0b24nKTtcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuYnV0dG9uTW9kYWxJbnRlcm5ldFNob3AuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dEZvck1vZGFsV2luZG93cy50ZXh0QnV0dG9uSW50ZXJuZXRTaG9wKTtcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuY29udGFpbmVyTW9kYWxJbnRlcm5ldFNob3AuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5ibG9ja1RleHRNb2RhbEludGVybmV0U2hvcCk7XHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLmNvbnRhaW5lck1vZGFsSW50ZXJuZXRTaG9wLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuYnV0dG9uTW9kYWxJbnRlcm5ldFNob3ApO1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5ibG9ja1RleHRNb2RhbEludGVybmV0U2hvcC5hcHBlbmRDaGlsZChjcmVhdGVUZXh0Rm9yTW9kYWxXaW5kb3dzLnRleHRNb2RhbEludGVybmV0U2hvcCk7XHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLm1vZGFsV2luZG93SW50ZXJuZXRTaG9wLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuY29udGFpbmVyTW9kYWxJbnRlcm5ldFNob3ApO1xyXG4gICAgc2xpZDIuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5tb2RhbFdpbmRvd0ludGVybmV0U2hvcCk7XHJcblxyXG4gICAgLy8gY3JlYXRlIG1vZGFsIHdpbmRvdyBmb3Igc2l0ZSBjb21wYW55XHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLm1vZGFsV2luZG93U2l0ZUNvbXBhbnkuY2xhc3NMaXN0LmFkZCgnbW9kYWxXZU9mZmZlcicsICdzaXRlQ29tcGFueScpO1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5jb250YWluZXJNb2RhbFNpdGVDb21wYW55LmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcldlT2ZmZmVyJyk7XHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLmJ1dHRvbk1vZGFsU2l0ZUNvbXBhbnkuY2xhc3NMaXN0LmFkZCgnc2l0ZUNvbXBhbnlCdXR0b24nKTtcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuYnV0dG9uTW9kYWxTaXRlQ29tcGFueS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0Rm9yTW9kYWxXaW5kb3dzLnRleHRCdXR0b25TaXRlQ29tcGFueSk7XHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLmNvbnRhaW5lck1vZGFsU2l0ZUNvbXBhbnkuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5ibG9ja1RleHRNb2RhbFNpdGVDb21wYW55KTtcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuY29udGFpbmVyTW9kYWxTaXRlQ29tcGFueS5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLmJ1dHRvbk1vZGFsU2l0ZUNvbXBhbnkpO1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5ibG9ja1RleHRNb2RhbFNpdGVDb21wYW55LmFwcGVuZENoaWxkKGNyZWF0ZVRleHRGb3JNb2RhbFdpbmRvd3MudGV4dE1vZGFsU2l0ZUNvbXBhbnkpO1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5tb2RhbFdpbmRvd1NpdGVDb21wYW55LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuY29udGFpbmVyTW9kYWxTaXRlQ29tcGFueSk7XHJcbiAgICBzbGlkMi5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLm1vZGFsV2luZG93U2l0ZUNvbXBhbnkpO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBtb2RhbCB3aW5kb3cgZm9yIEJsb2dcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIubW9kYWxXaW5kb3dCbG9nLmNsYXNzTGlzdC5hZGQoJ21vZGFsV2VPZmZmZXInLCAnYmxvZycpO1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5jb250YWluZXJNb2RhbEJsb2cuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyV2VPZmZmZXInKTtcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuYnV0dG9uTW9kYWxCbG9nLmNsYXNzTGlzdC5hZGQoJ2Jsb2dCdXR0b24nKTtcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuYnV0dG9uTW9kYWxCbG9nLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRGb3JNb2RhbFdpbmRvd3MudGV4dEJ1dHRvbkJsb2cpO1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5jb250YWluZXJNb2RhbEJsb2cuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5ibG9ja1RleHRNb2RhbEJsb2cpO1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5jb250YWluZXJNb2RhbEJsb2cuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5idXR0b25Nb2RhbEJsb2cpO1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5ibG9ja1RleHRNb2RhbEJsb2cuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dEZvck1vZGFsV2luZG93cy50ZXh0TW9kYWxCbG9nKTtcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIubW9kYWxXaW5kb3dCbG9nLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuY29udGFpbmVyTW9kYWxCbG9nKTtcclxuICAgIHNsaWQyLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIubW9kYWxXaW5kb3dCbG9nKTtcclxuXHJcbiAgICAvLyBjcmVhdGUgbW9kYWwgd2luZG93IGZvciBQb3J0Zm9saW9cclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIubW9kYWxXaW5kb3dQb3J0Zm9saW8uY2xhc3NMaXN0LmFkZCgnbW9kYWxXZU9mZmZlcicsICdwb3J0Zm9saW8nKTtcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuY29udGFpbmVyTW9kYWxQb3J0Zm9saW8uY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyV2VPZmZmZXInKTtcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuYnV0dG9uTW9kYWxQb3J0Zm9saW8uY2xhc3NMaXN0LmFkZCgncG9ydGZvbGlvQnV0dG9uJyk7XHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLmJ1dHRvbk1vZGFsUG9ydGZvbGlvLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRGb3JNb2RhbFdpbmRvd3MudGV4dEJ1dHRvblBvcnRmb2xpbyk7XHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLmNvbnRhaW5lck1vZGFsUG9ydGZvbGlvLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuYmxvY2tUZXh0TW9kYWxQb3J0Zm9saW8pO1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5jb250YWluZXJNb2RhbFBvcnRmb2xpby5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLmJ1dHRvbk1vZGFsUG9ydGZvbGlvKTtcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuYmxvY2tUZXh0TW9kYWxQb3J0Zm9saW8uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dEZvck1vZGFsV2luZG93cy50ZXh0TW9kYWxQb3J0Zm9saW8pO1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5tb2RhbFdpbmRvd1BvcnRmb2xpby5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLmNvbnRhaW5lck1vZGFsUG9ydGZvbGlvKTtcclxuICAgIHNsaWQyLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIubW9kYWxXaW5kb3dQb3J0Zm9saW8pO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBtb2RhbCB3aW5kb3cgZm9yIFNvY2lhbCBOZXR3b3JrXHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLm1vZGFsV2luZG93U29jaWFsTmV0d29yay5jbGFzc0xpc3QuYWRkKCdtb2RhbFdlT2ZmZmVyJywgJ3NvY2lhbE5ldHdvcmsnKTtcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuY29udGFpbmVyTW9kYWxTb2NpYWxOZXR3b3JrLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcldlT2ZmZmVyJyk7XHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLmJ1dHRvbk1vZGFsU29jaWFsTmV0d29yay5jbGFzc0xpc3QuYWRkKCdzb2NpYWxOZXR3b3JrQnV0dG9uJyk7XHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLmJ1dHRvbk1vZGFsU29jaWFsTmV0d29yay5hcHBlbmRDaGlsZChjcmVhdGVUZXh0Rm9yTW9kYWxXaW5kb3dzLnRleHRCdXR0b25Tb2NpYWxOZXR3b3JrKTtcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuY29udGFpbmVyTW9kYWxTb2NpYWxOZXR3b3JrLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuYmxvY2tUZXh0TW9kYWxTb2NpYWxOZXR3b3JrKTtcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuY29udGFpbmVyTW9kYWxTb2NpYWxOZXR3b3JrLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuYnV0dG9uTW9kYWxTb2NpYWxOZXR3b3JrKTtcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuYmxvY2tUZXh0TW9kYWxTb2NpYWxOZXR3b3JrLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRGb3JNb2RhbFdpbmRvd3MudGV4dE1vZGFsU29jaWFsTmV0d29yayk7XHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLm1vZGFsV2luZG93U29jaWFsTmV0d29yay5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLmNvbnRhaW5lck1vZGFsU29jaWFsTmV0d29yayk7XHJcbiAgICBzbGlkMi5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLm1vZGFsV2luZG93U29jaWFsTmV0d29yayk7XHJcblxyXG4gICAgLy8gY3JlYXRlIG1vZGFsIHdpbmRvdyBmb3IgRm9ydW1cclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIubW9kYWxXaW5kb3dGb3J1bS5jbGFzc0xpc3QuYWRkKCdtb2RhbFdlT2ZmZmVyJywgJ2ZvcnVtJyk7XHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLmNvbnRhaW5lck1vZGFsRm9ydW0uY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyV2VPZmZmZXInKTtcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuYnV0dG9uTW9kYWxGb3J1bS5jbGFzc0xpc3QuYWRkKCdmb3J1bUJ1dHRvbicpO1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5idXR0b25Nb2RhbEZvcnVtLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRGb3JNb2RhbFdpbmRvd3MudGV4dEJ1dHRvbkZvcnVtKTtcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuY29udGFpbmVyTW9kYWxGb3J1bS5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLmJsb2NrVGV4dE1vZGFsRm9ydW0pO1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5jb250YWluZXJNb2RhbEZvcnVtLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuYnV0dG9uTW9kYWxGb3J1bSk7XHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLmJsb2NrVGV4dE1vZGFsRm9ydW0uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dEZvck1vZGFsV2luZG93cy50ZXh0TW9kYWxGb3J1bSk7XHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLm1vZGFsV2luZG93Rm9ydW0uYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5jb250YWluZXJNb2RhbEZvcnVtKTtcclxuICAgIHNsaWQyLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIubW9kYWxXaW5kb3dGb3J1bSk7XHJcblxyXG4gICAgLy8gY3JlYXRlIG1vZGFsIHdpbmRvdyBmb3IgTGFuZGluZ1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5tb2RhbFdpbmRvd0xhbmRpbmcuY2xhc3NMaXN0LmFkZCgnbW9kYWxXZU9mZmZlcicsICdsYW5kaW5nJyk7XHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLmNvbnRhaW5lck1vZGFsTGFuZGluZy5jbGFzc0xpc3QuYWRkKCdjb250YWluZXJXZU9mZmZlcicpO1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5idXR0b25Nb2RhbExhbmRpbmcuY2xhc3NMaXN0LmFkZCgnbGFuZGluZ0J1dHRvbicpO1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5idXR0b25Nb2RhbExhbmRpbmcuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dEZvck1vZGFsV2luZG93cy50ZXh0QnV0dG9uTGFuZGluZyk7XHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLmNvbnRhaW5lck1vZGFsTGFuZGluZy5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLmJsb2NrVGV4dE1vZGFsTGFuZGluZyk7XHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLmNvbnRhaW5lck1vZGFsTGFuZGluZy5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLmJ1dHRvbk1vZGFsTGFuZGluZyk7XHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLmJsb2NrVGV4dE1vZGFsTGFuZGluZy5hcHBlbmRDaGlsZChjcmVhdGVUZXh0Rm9yTW9kYWxXaW5kb3dzLnRleHRNb2RhbExhbmRpbmcpO1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5tb2RhbFdpbmRvd0xhbmRpbmcuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5jb250YWluZXJNb2RhbExhbmRpbmcpO1xyXG4gICAgc2xpZDIuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5tb2RhbFdpbmRvd0xhbmRpbmcpO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBtb2RhbCB3aW5kb3cgZm9yIEdhbWUgU291cnNcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIubW9kYWxXaW5kb3dHYW1lU291cnMuY2xhc3NMaXN0LmFkZCgnbW9kYWxXZU9mZmZlcicsICdnYW1lU291cnMnKTtcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuY29udGFpbmVyTW9kYWxHYW1lU291cnMuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyV2VPZmZmZXInKTtcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuYnV0dG9uTW9kYWxHYW1lU291cnMuY2xhc3NMaXN0LmFkZCgnZ2FtZVNvdXJzQnV0dG9uJyk7XHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLmJ1dHRvbk1vZGFsR2FtZVNvdXJzLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRGb3JNb2RhbFdpbmRvd3MudGV4dEJ1dHRvbkdhbWVTb3Vycyk7XHJcbiAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLmNvbnRhaW5lck1vZGFsR2FtZVNvdXJzLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuYmxvY2tUZXh0TW9kYWxHYW1lU291cnMpO1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5jb250YWluZXJNb2RhbEdhbWVTb3Vycy5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLmJ1dHRvbk1vZGFsR2FtZVNvdXJzKTtcclxuICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuYmxvY2tUZXh0TW9kYWxHYW1lU291cnMuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dEZvck1vZGFsV2luZG93cy50ZXh0TW9kYWxHYW1lU291cnMpO1xyXG4gICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5tb2RhbFdpbmRvd0dhbWVTb3Vycy5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLmNvbnRhaW5lck1vZGFsR2FtZVNvdXJzKTtcclxuICAgIHNsaWQyLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIubW9kYWxXaW5kb3dHYW1lU291cnMpO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG5pbWFnZXNTbGlkV2VPZmZlcigpO1xyXG5idWlsZFBhZ2UoKTtcclxuXHJcblxyXG5jb25zdCB2YXJpYWJsZXMgPSB7XHJcbiAgICBjb3VudGVyRGl2cyA6IDAsXHJcbiAgICBjb3VudGVyIDogMCxcclxuICAgIHBvc2l0aW9uTW9vbiA6IDAsXHJcbiAgICBwb3NpdGlvblN1biA6IDEwMCxcclxuICAgIGNsYXNzUmVkU3RhcnMgOiAnLnN0YXJSZWQnLFxyXG4gICAgY2xhc3NZZWxsb3dTdGFycyA6ICcuc3RhclllbGxvdycsXHJcbiAgICBjbGFzc0JsdWVTdGFycyA6ICcuc3RhckJsdWUnLFxyXG4gICAgYmdjQ29sb3JSZWRTdGFyIDogJyNGQTgwNzInLFxyXG4gICAgYmdjQ29sb3JZZWxsb3dTdGFyIDogJ3llbGxvdycsXHJcbiAgICBiZ2NDb2xvckJsdWVTdGFyIDogJyMwMEZGRkYnLFxyXG4gICAgcG9zaXRpb25Nb2RhbCA6IC0xMDAsXHJcbiAgICBwb3NpdGlvblN2Z0NvbnRhaW5lciA6IDAsXHJcbiAgICBjb3VudFJvdGF0ZVN2Z0NvbnRhaW5lciA6IDAsXHJcbiAgICByMWNvbG9yIDogNCxcclxuICAgIHIyY29sb3IgOiAxNCxcclxuICAgIHIzY29sb3IgOiAxMTQsXHJcbiAgICByNGNvbG9yIDogNjYsXHJcbiAgICByNWNvbG9yIDogMTA2LFxyXG4gICAgcjZjb2xvciA6IDIyNCxcclxuICAgIGxpbmtTdmdEYXRhSlNPTjogJy9zdmcuanNvbicsXHJcbiAgICBhcnJTdmdFbGVtZW50cyA6IFsndGV4dFNpdGVDb21wYW55JywgJ3RleHRTb2NpYWxOZXR3b3JrJywgJ3RleHRGb3J1bScsICd0ZXh0R2FtZVNvdXJzJywgJ3RleHRCbG9nJywgJ3RleHRMYW5kaW5nJywgJ3RleHRQb3J0Zm9saW8nLCAndGV4dEludGVybmV0U2hvcCddLFxyXG4gICAgbW9kYWxXaW5kb3dzIDogWycuc2l0ZUNvbXBhbnknLCAnLnNvY2lhbE5ldHdvcmsnLCAnLmZvcnVtJywgJy5nYW1lU291cnMnLCAnLmJsb2cnLCAnLmxhbmRpbmcnLCAnLnBvcnRmb2xpbycsICcuaW50ZXJuZXRTaG9wJ10sXHJcbiAgICBjbG9zZU1vZGFsV2luZG93cyA6IFsnc2l0ZUNvbXBhbnlCdXR0b24nLCAnc29jaWFsTmV0d29ya0J1dHRvbicsICdmb3J1bUJ1dHRvbicsICdnYW1lU291cnNCdXR0b24nLCAnYmxvZ0J1dHRvbicsICdsYW5kaW5nQnV0dG9uJywgJ3BvcnRmb2xpb0J1dHRvbicsICdpbnRlcm5ldFNob3BCdXR0b24nXSxcclxuICAgIHBhcmFtc1NjcmVlbiA6IFszMDAsIDM1MCwgNDAwLCA0NTAsIDUwMCwgNTUwLCA2MDAsIDY1MCwgNzAwLCA3NTAsIDgwMCwgODUwLCA5MDAsIDk1MCwgMTAwMCwgMTE1MCwgMTMwMCwgMTQ1MCwgMTYwMCwgMTk1MCwgMjYwMF0sXHJcbn1cclxuXHJcblxyXG5cclxuLy8gcG9zaXRpb24gZm9yIDx0ZXh0PiBpbiBzdmcgYW5kIGFuaW1hdGlvbiBjaXJjbGUgPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmNvbnN0IGZud2ggPSBmdW5jdGlvbiBoZWlndGhXaWR0aChkYXRhKXtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gdmFyaWFibGVzLnBhcmFtc1NjcmVlbi5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgaWYod2luZG93LmlubmVyV2lkdGggPCB2YXJpYWJsZXMucGFyYW1zU2NyZWVuW2ldKXtcclxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5ibG9ja1NWR1dlT2ZmZXIuaW5uZXJIVE1MID0gZGF0YVt2YXJpYWJsZXMucGFyYW1zU2NyZWVuW2ldXTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbmZud2goc3ZnSlNPTik7XHJcblxyXG5jb25zdCBzaXplV2luZG93ID0gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHsgZm53aChzdmdKU09OKSB9KTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcblxyXG4vLyBmdW5jdGlvbiBmb3Igc3RhcnMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmNvbnN0IGNyZWF0ZURpdiA9IHNldEludGVydmFsKCgpID0+e1xyXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdmFyaWFibGVzLmNvdW50ZXJEaXZzIDwgMzMgPyBkaXYuY2xhc3NMaXN0LmFkZCgnc3RhclJlZCcpIDogJyc7XHJcbiAgICAodmFyaWFibGVzLmNvdW50ZXJEaXZzID4gMzMgJiYgdmFyaWFibGVzLmNvdW50ZXJEaXZzIDwgNjYpID8gZGl2LmNsYXNzTGlzdC5hZGQoJ3N0YXJZZWxsb3cnKSA6ICcnO1xyXG4gICAgdmFyaWFibGVzLmNvdW50ZXJEaXZzID4gNjYgPyBkaXYuY2xhc3NMaXN0LmFkZCgnc3RhckJsdWUnKSA6ICcnO1xyXG4gICAgc2xpZDIuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgIHZhcmlhYmxlcy5jb3VudGVyRGl2cysrO1xyXG4gICAgdmFyaWFibGVzLmNvdW50ZXJEaXZzID09PSAxMDAgPyBjbGVhckludGVydmFsKGNyZWF0ZURpdikgOiAnJztcclxufSwgMC4wMSk7XHJcblxyXG5cclxuY29uc3QgY29vcmRpbmF0ZXNBbmRDb2xvclN0YXJzID0gZnVuY3Rpb24gc3RhcnMoY29sb3IsIGh0bWxDbGFzcyl7XHJcbiAgICBsZXQgYXNrRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChodG1sQ2xhc3MpO1xyXG4gICAgYXNrRGl2LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpdGVtLnN0eWxlLnRvcCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoODApKSArICclJztcclxuICAgICAgICBpdGVtLnN0eWxlLmxlZnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDk4KSkgKyAnJSc7XHJcbiAgICAgICAgaXRlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuY29uc3QgY2FsbEZ1bmN0aW9uU3RhcnMgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICB2YXJpYWJsZXMuY291bnRlciArKztcclxuICAgIHZhcmlhYmxlcy5jb3VudGVyID09PSAzID8gdmFyaWFibGVzLmNvdW50ZXIgPSAwIDogJyc7XHJcbiAgICB2YXJpYWJsZXMuY291bnRlciA9PT0gMCA/IGNvb3JkaW5hdGVzQW5kQ29sb3JTdGFycyh2YXJpYWJsZXMuYmdjQ29sb3JZZWxsb3dTdGFyLCB2YXJpYWJsZXMuY2xhc3NZZWxsb3dTdGFycykgOiAnJztcclxuICAgIHZhcmlhYmxlcy5jb3VudGVyID09PSAxID8gY29vcmRpbmF0ZXNBbmRDb2xvclN0YXJzKHZhcmlhYmxlcy5iZ2NDb2xvclJlZFN0YXIsIHZhcmlhYmxlcy5jbGFzc1JlZFN0YXJzKSA6ICcnO1xyXG4gICAgdmFyaWFibGVzLmNvdW50ZXIgPT09IDIgPyBjb29yZGluYXRlc0FuZENvbG9yU3RhcnModmFyaWFibGVzLmJnY0NvbG9yQmx1ZVN0YXIsIHZhcmlhYmxlcy5jbGFzc0JsdWVTdGFycykgOiAnJztcclxufSwgMzAwMCk7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcblxyXG4vLyBmdW5jdGlvbnMgZm9yIG1vZGFsIHdpbmRvd3MgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuY29uc3Qgb3Blbk1vZGFsID0gZnVuY3Rpb24gb3Blbk1vZGFsV2luZG93KGNsYXNzTW9kYWwpe1xyXG4gICAgbGV0IHNvbWVNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodmFyaWFibGVzLm1vZGFsV2luZG93c1tjbGFzc01vZGFsXSksXHJcbiAgICAgICAgdGltZU9wZW4gPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHZhcmlhYmxlcy5wb3NpdGlvblN2Z0NvbnRhaW5lciA9PT0gMTAwKXtcclxuICAgICAgICAgICAgICAgIHZhcmlhYmxlcy5wb3NpdGlvbk1vZGFsICs9IDIgO1xyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzLnBvc2l0aW9uU3VuIC09IDIgO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHZhcmlhYmxlcy5wb3NpdGlvblN2Z0NvbnRhaW5lciArPSAyIDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXJpYWJsZXMucG9zaXRpb25Nb29uID09PSAtMzYgPyAnJyA6IHZhcmlhYmxlcy5wb3NpdGlvbk1vb24gLS0gO1xyXG4gICAgICAgICAgICB2YXJpYWJsZXMucG9zaXRpb25Nb2RhbCA9PT0gLTcwID8gYmdjQ29sb3JNb2RXaW4oJ2RheScpIDogJyc7XHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuYmxvY2tTVkdXZU9mZmVyLnN0eWxlLmxlZnQgPSB2YXJpYWJsZXMucG9zaXRpb25TdmdDb250YWluZXIgKyAnJSc7XHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuTW9vbldlT2ZmZXIuc3R5bGUucmlnaHQgPSB2YXJpYWJsZXMucG9zaXRpb25Nb29uICsgJyUnO1xyXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50c1NsaWRXZU9mZmVyLlN1bi5zdHlsZS5yaWdodCA9IHZhcmlhYmxlcy5wb3NpdGlvblN1biArICclJztcclxuICAgICAgICAgICAgc29tZU1vZGFsLnN0eWxlLmxlZnQgPSB2YXJpYWJsZXMucG9zaXRpb25Nb2RhbCArICclJztcclxuICAgICAgICAgICAgaWYodmFyaWFibGVzLnBvc2l0aW9uTW9kYWwgPT09IDApe1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lT3Blbik7XHJcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXMucG9zaXRpb25TdmdDb250YWluZXIgPSAtMTAwO1xyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzLnBvc2l0aW9uTW9kYWwgPSAwO1xyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzLnBvc2l0aW9uTW9vbiA9IDEwMDtcclxuICAgICAgICAgICAgICAgIHZhcmlhYmxlcy5iZ2NDb2xvclJlZFN0YXIgPSAndHJhbnNwYXJlbnQnO1xyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzLmJnY0NvbG9yQmx1ZVN0YXIgPSAndHJhbnNwYXJlbnQnO1xyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzLmJnY0NvbG9yWWVsbG93U3RhciA9ICd0cmFuc3BhcmVudCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCA1KTtcclxufVxyXG5cclxuXHJcbmNvbnN0IGNsb3NlTW9kYWwgPSBmdW5jdGlvbiBjbG9zZU1vZGFsV2luZG93KGNsYXNzTW9kYWwpe1xyXG4gICAgbGV0IHNvbWVNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodmFyaWFibGVzLm1vZGFsV2luZG93c1tjbGFzc01vZGFsXSksXHJcbiAgICAgICAgdGltZUNsb3NlID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZih2YXJpYWJsZXMucG9zaXRpb25Nb2RhbCA9PT0gMTAwKXtcclxuICAgICAgICAgICAgICAgIHZhcmlhYmxlcy5wb3NpdGlvblN2Z0NvbnRhaW5lciArPSAyIDtcclxuICAgICAgICAgICAgICAgIHZhcmlhYmxlcy5wb3NpdGlvbk1vb24gLT0gMiA7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzLnBvc2l0aW9uTW9kYWwgKz0gMiA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyaWFibGVzLnBvc2l0aW9uU3VuID09PSAtMzYgPyAnJyA6IHZhcmlhYmxlcy5wb3NpdGlvblN1biAtLSA7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlcy5wb3NpdGlvblN2Z0NvbnRhaW5lciA9PT0gLTcwID8gYmdjQ29sb3JNb2RXaW4oJ25pZ2h0JykgOiAnJztcclxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5ibG9ja1NWR1dlT2ZmZXIuc3R5bGUubGVmdCA9IHZhcmlhYmxlcy5wb3NpdGlvblN2Z0NvbnRhaW5lciArICclJztcclxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudHNTbGlkV2VPZmZlci5Nb29uV2VPZmZlci5zdHlsZS5yaWdodCA9IHZhcmlhYmxlcy5wb3NpdGlvbk1vb24gKyAnJSc7XHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnRzU2xpZFdlT2ZmZXIuU3VuLnN0eWxlLnJpZ2h0ID0gdmFyaWFibGVzLnBvc2l0aW9uU3VuICsgJyUnO1xyXG4gICAgICAgICAgICBzb21lTW9kYWwuc3R5bGUubGVmdCA9IHZhcmlhYmxlcy5wb3NpdGlvbk1vZGFsICsgJyUnO1xyXG4gICAgICAgICAgICBpZih2YXJpYWJsZXMucG9zaXRpb25TdmdDb250YWluZXIgPT09IDApe1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lQ2xvc2UpO1xyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzLnBvc2l0aW9uU3ZnQ29udGFpbmVyID0gMDtcclxuICAgICAgICAgICAgICAgIHZhcmlhYmxlcy5wb3NpdGlvbk1vZGFsID0gLTEwMDtcclxuICAgICAgICAgICAgICAgIHZhcmlhYmxlcy5wb3NpdGlvblN1biA9IDEwMDtcclxuICAgICAgICAgICAgICAgIHZhcmlhYmxlcy5iZ2NDb2xvclJlZFN0YXIgPSAnI0ZBODA3Mic7XHJcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXMuYmdjQ29sb3JCbHVlU3RhciA9ICcjMDBGRkZGJztcclxuICAgICAgICAgICAgICAgIHZhcmlhYmxlcy5iZ2NDb2xvclllbGxvd1N0YXIgPSAneWVsbG93JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDUpO1xyXG59XHJcblxyXG4vLyBiZ2MgbmlndGggb3IgZGF5XHJcbmNvbnN0IGJnY0NvbG9yTW9kV2luID0gZnVuY3Rpb24gYmFja2dyb3VuZENvbG9yTW9kYWxXaW5kb3dzKHBhcmFtc0JnY29sKXtcclxuICAgIGxldCBjb2xvciA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICBpZihwYXJhbXNCZ2NvbCA9PT0gJ2RheScpe1xyXG4gICAgICAgICAgICB2YXJpYWJsZXMucjFjb2xvciA9PT0gNjYgPyAnJyA6IHZhcmlhYmxlcy5yMWNvbG9yICs9IDIgO1xyXG4gICAgICAgICAgICB2YXJpYWJsZXMucjJjb2xvciA9PT0gMTA2ID8gJycgOiB2YXJpYWJsZXMucjJjb2xvciArPSAyIDtcclxuICAgICAgICAgICAgdmFyaWFibGVzLnIzY29sb3IgPT09IDIyNCA/ICcnIDogdmFyaWFibGVzLnIzY29sb3IgKz0gMiA7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlcy5yNGNvbG9yID09PSAyNTQgPyAnJyA6IHZhcmlhYmxlcy5yNGNvbG9yICs9IDIgO1xyXG4gICAgICAgICAgICB2YXJpYWJsZXMucjVjb2xvciA9PT0gMjU0ID8gJycgOiB2YXJpYWJsZXMucjVjb2xvciArPSAyIDtcclxuICAgICAgICAgICAgdmFyaWFibGVzLnI2Y29sb3IgPT09IDI1NCA/ICcnIDogdmFyaWFibGVzLnI2Y29sb3IgKz0gMiA7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlcy5yMWNvbG9yID09PSA2NiAmJiB2YXJpYWJsZXMucjJjb2xvciA9PT0gMTA2ICYmIHZhcmlhYmxlcy5yM2NvbG9yID09PSAyMjQgJiYgdmFyaWFibGVzLnI0Y29sb3IgPT09IDI1NCAmJiB2YXJpYWJsZXMucjVjb2xvciA9PT0gMjU0ICYmIHZhcmlhYmxlcy5yNmNvbG9yID09PSAyNTQ/IGNsZWFySW50ZXJ2YWwoY29sb3IpIDogJyc7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlcy5yMWNvbG9yID09PSA0ID8gJycgOiB2YXJpYWJsZXMucjFjb2xvciAtPSAyIDtcclxuICAgICAgICAgICAgdmFyaWFibGVzLnIyY29sb3IgPT09IDE0ID8gJycgOiB2YXJpYWJsZXMucjJjb2xvciAtPSAyIDtcclxuICAgICAgICAgICAgdmFyaWFibGVzLnIzY29sb3IgPT09IDExNCA/ICcnIDogdmFyaWFibGVzLnIzY29sb3IgLT0gMiA7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlcy5yNGNvbG9yID09PSA2NiA/ICcnIDogdmFyaWFibGVzLnI0Y29sb3IgLT0gMiA7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlcy5yNWNvbG9yID09PSAxMDYgPyAnJyA6IHZhcmlhYmxlcy5yNWNvbG9yIC09IDIgO1xyXG4gICAgICAgICAgICB2YXJpYWJsZXMucjZjb2xvciA9PT0gMjI0ID8gJycgOiB2YXJpYWJsZXMucjZjb2xvciAtPSAyIDtcclxuICAgICAgICAgICAgdmFyaWFibGVzLnIxY29sb3IgPT09IDQgJiYgdmFyaWFibGVzLnIyY29sb3IgPT09IDE0ICYmIHZhcmlhYmxlcy5yM2NvbG9yID09PSAxMTQgJiYgdmFyaWFibGVzLnI0Y29sb3IgPT09IDY2ICYmIHZhcmlhYmxlcy5yNWNvbG9yID09PSAxMDYgJiYgdmFyaWFibGVzLnI2Y29sb3IgPT09IDIyNCA/IGNsZWFySW50ZXJ2YWwoY29sb3IpIDogJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNsaWQyLnN0eWxlLmJhY2tncm91bmQgPSBgbGluZWFyLWdyYWRpZW50KHJnYmEoJHt2YXJpYWJsZXMucjFjb2xvcn0sJHt2YXJpYWJsZXMucjJjb2xvcn0sJHt2YXJpYWJsZXMucjNjb2xvcn0sIDEpIDMwJSwgcmdiYSgke3ZhcmlhYmxlcy5yNGNvbG9yfSwke3ZhcmlhYmxlcy5yNWNvbG9yfSwke3ZhcmlhYmxlcy5yNmNvbG9yfSwgMSkgMTAwJSkgZml4ZWRgO1xyXG4gICAgfSwgLjAwMDAwMSk7XHJcbn1cclxuXHJcblxyXG5zbGlkMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgaWYoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2Rpdi5ibG9ja1NWRycpKXtcclxuICAgICAgICB2YXJpYWJsZXMuYXJyU3ZnRWxlbWVudHMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaXRlbSA9PT0gZXZlbnQudGFyZ2V0LmNsYXNzTmFtZS5iYXNlVmFsID8gb3Blbk1vZGFsKGluZGV4KSA6ICcnO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2RpdicpKXtcclxuICAgICAgICB2YXJpYWJsZXMuY2xvc2VNb2RhbFdpbmRvd3MuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaXRlbSA9PT0gZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA/IGNsb3NlTW9kYWwoaW5kZXgpIDogJyc7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNsaWQyOyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBUZW1wXzEgZnJvbSAnLi4vLi4vaW1nL3RlbXBsYXRlXzEucG5nJztcclxuaW1wb3J0IFRlbXBfMiBmcm9tICcuLi8uLi9pbWcvdGVtcGxhdGVfMi5qcGcnO1xyXG5pbXBvcnQgVGVtcF8zIGZyb20gJy4uLy4uL2ltZy90ZW1wbGF0ZV8zLnBuZyc7XHJcbmltcG9ydCBUZW1wXzQgZnJvbSAnLi4vLi4vaW1nL3RlbXBsYXRlXzQucG5nJztcclxuaW1wb3J0IFRlbXBfNSBmcm9tICcuLi8uLi9pbWcvdGVtcGxhdGVfNS5wbmcnO1xyXG5pbXBvcnQgVGVtcF82IGZyb20gJy4uLy4uL2ltZy90ZW1wbGF0ZV82LnBuZyc7XHJcbmltcG9ydCBUZW1wXzcgZnJvbSAnLi4vLi4vaW1nL3RlbXBsYXRlXzcucG5nJztcclxuaW1wb3J0IFRlbXBfOCBmcm9tICcuLi8uLi9pbWcvYW1haW9zd2ltLmpwZyc7XHJcbmltcG9ydCBUZW1wXzkgZnJvbSAnLi4vLi4vaW1nL2FueVc0WXRtcGwuanBnJztcclxuaW1wb3J0IFRlbXBfMTAgZnJvbSAnLi4vLi4vaW1nL2Nvc20uanBnJztcclxuaW1wb3J0IFRlbXBfMTEgZnJvbSAnLi4vLi4vaW1nL2Rlc3RpbnkuanBnJztcclxuaW1wb3J0IFRlbXBfMTIgZnJvbSAnLi4vLi4vaW1nL3Byb3VkYW5kcHVuY2guanBnJztcclxuaW1wb3J0IFRlbXBfMTMgZnJvbSAnLi4vLi4vaW1nL3JhaW5mb3Jlc3Rmb29kcy5qcGcnXHJcblxyXG5jb25zdCBvYmogPSB7XHJcbiAgICBzbGlkZSA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgbWFpbiAgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgIG1hc3NJbWc6IFtUZW1wXzEsIFRlbXBfMiwgVGVtcF8zLCBUZW1wXzQsIFRlbXBfNSwgVGVtcF82LCBUZW1wXzcsIFRlbXBfOCwgVGVtcF85LCBUZW1wXzEwLFxyXG4gICAgICAgICAgICAgIFRlbXBfMTEsIFRlbXBfMTIsIFRlbXBfMTNdLFxyXG4gICAgbWFzc0Jsb2NrcyA6IFtdLFxyXG5cclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gc2l6ZUJsb2NrKHNpemUpIHtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqKHNpemUgLSAxNjApICsgMTYwKTtcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIHNpemVTY3JlZW4oKSB7XHJcbiAgICBsZXQgc2l6ZSA9IDAsXHJcbiAgICAgICAgZG9jV2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgqLjgsXHJcbiAgICAgICAgZG9jSGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCouODtcclxuXHJcbiAgICBkb2NXaWR0aCA+IGRvY0hlaWdodCA/XHJcbiAgICAgICAgc2l6ZSA9IE1hdGgucm91bmQoZG9jSGVpZ2h0IC8gMi4xKTpcclxuICAgICAgICBzaXplID0gTWF0aC5yb3VuZCggZG9jV2lkdGgvIDMuMSk7XHJcbiAgICBpZih3aW5kb3cuc2NyZWVuLndpZHRoIDwgMTAwMCl7XHJcbiAgICAgICAgc2l6ZSA9IE1hdGgucm91bmQoZG9jV2lkdGgvIDIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNpemU7XHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIGZ1bmN0aW9uIG5ld0hlaWdodChwYXJlbnQpIHtcclxuLy8gICAgIGxldCBoZWlnaHQgPSBwYXJlbnQuY2xpZW50SGVpZ2h0O1xyXG4vLyAgICAgaWYod2luZG93LnNjcmVlbi53aWR0aCA8IDkwMClcclxuLy8gICAgIHtcclxuLy8gICAgICAgICBoZWlnaHQgPSBwYXJlbnQuY2xpZW50V2lkdGgvMjtcclxuLy8gICAgIH1lbHNlIHtcclxuLy8gICAgICAgICBoZWlnaHQgPSBwYXJlbnQuY2xpZW50V2lkdGgvM1xyXG4vLyAgICAgfVxyXG4vLyAgICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSooaGVpZ2h0IC0gaGVpZ2h0LzMpICsgaGVpZ2h0LzMpO1xyXG4vLyB9XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gbmV3V2lkdGgocGFyZW50KSB7XHJcbiAgICBsZXQgd2lkdGggPSAwO1xyXG4gICAgaWYod2luZG93LnNjcmVlbi53aWR0aCA8IDkwMClcclxuICAgIHtcclxuICAgICAgICB3aWR0aCA9IHBhcmVudC5jbGllbnRXaWR0aC8yO1xyXG4gICAgfWVsc2Uge1xyXG4gICAgICAgIHdpZHRoID0gcGFyZW50LmNsaWVudFdpZHRoLzNcclxuICAgIH1cclxuICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqKHdpZHRoIC0gd2lkdGgvMikgKyB3aWR0aC8yKTtcclxufVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gY3JlYXRlQmxvY2soIHR5cGUsIHNpemUsIC4uLmNsYXNzZXMpIHtcclxuICAgIGxldCBibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XHJcbiAgICAgICAgYmxvY2suY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcclxuICAgICAgICByZXR1cm4gYmxvY2s7XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gbWFzc0Jsb2NrcygpIHtcclxuICAgbGV0IHNpemUgPSBzaXplU2NyZWVuKCksXHJcbiAgICAgICBtYXNzSW1nID0gb2JqLm1hc3NJbWcsXHJcbiAgICAgICBsZW4gPSBtYXNzSW1nLmxlbmd0aDtcclxuXHJcbiAgICAgICAgaWYod2luZG93LnNjcmVlbi53aWR0aCA8IDEwMDApe1xyXG4gICAgICAgICAgICBsZW4gPSAxMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKyl7XHJcbiAgICAgICAgbGV0IGRpdiA9IG51bGwsXHJcbiAgICAgICAgICAgIGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICBpbWcuc3JjID0gbWFzc0ltZ1tpXTtcclxuICAgICAgICAgICAgaW1nLndpZHRoID0gc2l6ZUJsb2NrKHNpemUpO1xyXG4gICAgICAgICAgICBkaXYgPSBjcmVhdGVCbG9jaygnZGl2Jywgc2l6ZSwgJ2Jsb2NrJyxgYmxvY2tfJHtpKzF9YCk7XHJcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmb2N1cyk7XHJcbiAgICAgICAgICAgIG9iai5tYXNzQmxvY2tzLnB1c2goZGl2KTtcclxuICAgIH1cclxuXHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gbmV3UG9zaXRpb25Ub3AoZWwpIHtcclxuICAgIGxldCBwYXJlbnQgPSBlbC5vZmZzZXRQYXJlbnQsXHJcbiAgICAgICAgZWxIID0gZWwub2Zmc2V0SGVpZ2h0LFxyXG4gICAgICAgIHBySCA9IHBhcmVudC5vZmZzZXRIZWlnaHQsXHJcbiAgICAgICAgZW5kUG9pbnQgPSBwckggLSBlbEg7XHJcblxyXG4gICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSooZW5kUG9pbnQgLSAxICsgMSkgKyAxKTtcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBuZXdQb3NpdGlvbkxlZnQoZWwpIHtcclxuICAgIGxldCBwYXJlbnQgPSBlbC5vZmZzZXRQYXJlbnQsXHJcbiAgICAgICAgZWxXID0gZWwub2Zmc2V0V2lkdGgsXHJcbiAgICAgICAgcHJXID0gcGFyZW50Lm9mZnNldFdpZHRoLFxyXG4gICAgICAgIGVuZFBvaW50ID0gcHJXIC0gZWxXO1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSooZW5kUG9pbnQgLSAxICsgMSkgKyAxKTtcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiB6SW5kZXgoKSB7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKigxMCAtIDEpICsgMSk7XHJcbn1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiBmdW5jdGlvbiBwb3NpdGlvbkJsb2NrKCkge1xyXG4gICAgbGV0IG1hc3MgPSBvYmoubWFzc0Jsb2NrcztcclxuXHJcbiAgICBtYXNzLmZvckVhY2goZWw9PntcclxuICAgICAgICBlbC5zdHlsZS50b3AgPSBuZXdQb3NpdGlvblRvcChlbCkgKyAncHgnO1xyXG4gICAgICAgIGVsLnN0eWxlLmxlZnQgPSBuZXdQb3NpdGlvbkxlZnQoZWwpICsgJ3B4JztcclxuICAgICAgICBlbC5zdHlsZS56SW5kZXggPSB6SW5kZXgoKTtcclxuICAgICAgICBlbC5maXJzdEVsZW1lbnRDaGlsZC5zdHlsZS53aWR0aCA9IG5ld1dpZHRoKGVsLnBhcmVudEVsZW1lbnQpICsncHgnO1xyXG4gICAgICAgIGVsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIH0pXHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiAgZmlsbE1haW4oKSB7XHJcbiAgICBsZXQgbWFpbiA9IG9iai5tYWluLFxyXG4gICAgICAgIG1hc3MgPSBvYmoubWFzc0Jsb2NrcztcclxuXHJcbiAgICBtYXNzLmZvckVhY2goZWw9PntcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGVsKTtcclxuICAgIH0pO1xyXG59XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gY29udGFpbmVyKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gb2JqLnNsaWRlLFxyXG4gICAgICAgIG1haW4gPSBvYmoubWFpbixcclxuICAgICAgICBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuXHJcblxyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NsaWQnLCAnc2xpZDMnKTtcclxuICAgIGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ICsgJ3B4JztcclxuICAgIGNvbnRhaW5lci5pZCA9ICdPdXIgd29yayc7XHJcblxyXG4gICAgbmFtZS5pbm5lckhUTUwgPSAn0J3QsNGI0Lgg0YDQsNCx0L7RgtGLJztcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lKTtcclxuXHJcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW5TbGlkZTMnKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcclxuICAgIG1hc3NCbG9ja3MoKTtcclxuICAgIGZpbGxNYWluKCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpPT4gcG9zaXRpb25CbG9jaygpLCAwKTtcclxuICAgIHNldEludGVydmFsKCgpPT4gcG9zaXRpb25CbG9jaygpLCA0MDAwMCk7XHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gcG9zaXRpb25DZW50ZXIodmFsdWVTY3IsIHZhbHVlQmwpIHtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlU2NyLzIgLSB2YWx1ZUJsLzIpO1xyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gZm9jdXMoZXYpIHtcclxuICAgIGxldCBlbCA9IGV2LnRhcmdldCxcclxuICAgICAgICBwYXJlbnQgPSBlbC5wYXJlbnRFbGVtZW50LFxyXG4gICAgICAgIGRvY1dpZHRoID0gcGFyZW50LnBhcmVudEVsZW1lbnQuY2xpZW50V2lkdGgsXHJcbiAgICAgICAgZG9jSGVpZ2h0ID0gcGFyZW50LnBhcmVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LFxyXG4gICAgICAgIHNpemUgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgIGVsLmNsaWVudFdpZHRoID4gZWwuY2xpZW50SGVpZ2h0ID8gc2l6ZSA9IGRvY1dpZHRoLzEuNSA6IHNpemUgPSBkb2NIZWlnaHQtMjA7XHJcblxyXG4gICAgZWwuY2xpZW50V2lkdGggPiBlbC5jbGllbnRIZWlnaHQgPyBlbC5zdHlsZS53aWR0aCA9IE1hdGguY2VpbChzaXplKSArICdweCcgOlxyXG4gICAgICAgIChlbC5zdHlsZS5oZWlnaHQgPSBNYXRoLmNlaWwoc2l6ZSkgKyAncHgnLCBlbC5jbGFzc0xpc3QuYWRkKCdibG9ja0NlbnRlcicpKTtcclxuICAgIHBhcmVudC5zdHlsZS56SW5kZXggPSAyMDtcclxuICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKCd0cmFuc2l0aW9uJyk7XHJcbiAgICBwYXJlbnQuc3R5bGUubGVmdCA9IHBvc2l0aW9uQ2VudGVyKGRvY1dpZHRoLCBlbC5jbGllbnRXaWR0aCkgKyAncHgnO1xyXG4gICAgcGFyZW50LnN0eWxlLnRvcCA9IHBvc2l0aW9uQ2VudGVyKGRvY0hlaWdodCwgZWwuY2xpZW50SGVpZ2h0KSArICdweCc7XHJcbiAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgcG9zaXRpb25CbG9jaygpO1xyXG4gICAgICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCd0cmFuc2l0aW9uJyk7XHJcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnYmxvY2tDZW50ZXInKTtcclxuICAgIH0sNTAwMCk7XHJcbn1cclxuXHJcbmNvbnRhaW5lcigpO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG9iai5zbGlkZTtcclxuXHJcblxyXG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgVGVtcF8xIGZyb20gJy4uLy4uL2ltZy90ZW1wbGF0ZV8xLnBuZyc7XHJcbmltcG9ydCBUZW1wXzIgZnJvbSAnLi4vLi4vaW1nL3RlbXBsYXRlXzIuanBnJztcclxuaW1wb3J0IFRlbXBfMyBmcm9tICcuLi8uLi9pbWcvdGVtcGxhdGVfMy5wbmcnO1xyXG5pbXBvcnQgVGVtcF80IGZyb20gJy4uLy4uL2ltZy90ZW1wbGF0ZV80LnBuZyc7XHJcbmltcG9ydCBUZW1wXzUgZnJvbSAnLi4vLi4vaW1nL3RlbXBsYXRlXzUucG5nJztcclxuaW1wb3J0IFRlbXBfNiBmcm9tICcuLi8uLi9pbWcvdGVtcGxhdGVfNi5wbmcnO1xyXG5pbXBvcnQgVGVtcF83IGZyb20gJy4uLy4uL2ltZy90ZW1wbGF0ZV83LnBuZyc7XHJcbi8vIGltcG9ydCBUZW1wXzggZnJvbSAnLi4vLi4vaW1nL3RlbXBsYXRlXzgucG5nJztcclxuXHJcbmNvbnN0IG9iaiA9IHtcclxuICAgIHNsaWRlIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICBtYWluICA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgbWFzc0ltYWdlcyA6IFtdLFxyXG5cclxufVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBJbWFnZXMoKSB7XHJcbiAgICBsZXQgdGVtcF8xID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGVtcF8xLnNyYyA9IFRlbXBfMTtcclxuICAgICAgICB0ZW1wXzEuYWx0ID0gJ1RlbXBsYXRlJztcclxuICAgICAgICBvYmoubWFzc0ltYWdlcy5wdXNoKHRlbXBfMSk7XHJcblxyXG4gICAgbGV0IHRlbXBfMiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRlbXBfMi5zcmMgPSBUZW1wXzI7XHJcbiAgICAgICAgdGVtcF8yLmFsdCA9ICdUZW1wbGF0ZSc7XHJcbiAgICAgICAgb2JqLm1hc3NJbWFnZXMucHVzaCh0ZW1wXzIpO1xyXG5cclxuICAgIGxldCB0ZW1wXzMgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB0ZW1wXzMuc3JjID0gVGVtcF8zO1xyXG4gICAgICAgIHRlbXBfMy5hbHQgPSAnVGVtcGxhdGUnO1xyXG4gICAgICAgIG9iai5tYXNzSW1hZ2VzLnB1c2godGVtcF8zKTtcclxuXHJcbiAgICBsZXQgdGVtcF80ID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGVtcF80LnNyYyA9IFRlbXBfNDtcclxuICAgICAgICB0ZW1wXzQuYWx0ID0gJ1RlbXBsYXRlJztcclxuICAgICAgICBvYmoubWFzc0ltYWdlcy5wdXNoKHRlbXBfNCk7XHJcblxyXG4gICAgbGV0IHRlbXBfNSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRlbXBfNS5zcmMgPSBUZW1wXzU7XHJcbiAgICAgICAgdGVtcF81LmFsdCA9ICdUZW1wbGF0ZSc7XHJcbiAgICAgICAgb2JqLm1hc3NJbWFnZXMucHVzaCh0ZW1wXzUpO1xyXG5cclxuICAgIGxldCB0ZW1wXzYgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB0ZW1wXzYuc3JjID0gVGVtcF82O1xyXG4gICAgICAgIHRlbXBfNi5hbHQgPSAnVGVtcGxhdGUnO1xyXG4gICAgICAgIG9iai5tYXNzSW1hZ2VzLnB1c2godGVtcF82KTtcclxuXHJcbiAgICBsZXQgdGVtcF83ID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGVtcF83LnNyYyA9IFRlbXBfNztcclxuICAgICAgICB0ZW1wXzcuYWx0ID0gJ1RlbXBsYXRlJztcclxuICAgICAgICBvYmoubWFzc0ltYWdlcy5wdXNoKHRlbXBfNyk7XHJcblxyXG4gICAgbGV0IHRlbXBfOCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRlbXBfOC5zcmMgPSBUZW1wXzE7XHJcbiAgICAgICAgdGVtcF84LmFsdCA9ICdUZW1wbGF0ZSc7XHJcbiAgICAgICAgb2JqLm1hc3NJbWFnZXMucHVzaCh0ZW1wXzgpO1xyXG5cclxuICAgIGxldCB0ZW1wXzkgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB0ZW1wXzkuc3JjID0gVGVtcF8yO1xyXG4gICAgICAgIHRlbXBfOS5hbHQgPSAnVGVtcGxhdGUnO1xyXG4gICAgICAgIG9iai5tYXNzSW1hZ2VzLnB1c2godGVtcF85KTtcclxufVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBmdW5jdGlvbiByZXNpemVJbWFnZShlKSB7XHJcbi8vXHJcbi8vICAgICBpZiggZG9jdW1lbnQuaW5uZXJXaWR0aCA8IDEwMDApe1xyXG4vLyAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZXNpemUnKT8gdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdyZXNpemUnKVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp0aGlzLmNsYXNzTGlzdC5hZGQoJ3Jlc2l6ZScpO1xyXG4vLyAgICAgfWVsc2Uge1xyXG4vLyAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLHJlc2l6ZUltYWdlKTtcclxuLy8gICAgIH1cclxuLy9cclxuLy8gfVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIHRlbXBsYXRlcygpIHtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDk7IGkrKyl7XHJcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgndGVtcGxhdGUnKTtcclxuICAgICAgICAgICAgZGl2LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIke29iai5tYXNzSW1hZ2VzW2ldLnNyY31cIilgO1xyXG4gICAgICAgICAgICBvYmoubWFpbi5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuICAgICAgICAgICAgLy8gZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxyZXNpemVJbWFnZSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIGNvbnRhaW5lcigpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IG9iai5zbGlkZSxcclxuICAgICAgICAgIG1haW4gPSBvYmoubWFpbixcclxuICAgICAgICAgIG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG5cclxuXHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2xpZCcsICdzbGlkNCcpO1xyXG4gICAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgKyAncHgnO1xyXG4gICAgY29udGFpbmVyLmlkID0gJ1RlbXBsYXRlcyc7XHJcblxyXG4gICAgbmFtZS5pbm5lckhUTUwgPSAnUFNEINGI0LDQsdC70L7QvdGLJztcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lKTtcclxuXHJcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcclxuICAgIEltYWdlcygpO1xyXG4gICAgdGVtcGxhdGVzKCk7XHJcbn1cclxuY29udGFpbmVyKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvYmouc2xpZGU7XHJcbiIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmNvbnN0IHNsaWQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbnNsaWQ1LmNsYXNzTGlzdC5hZGQoJ3NsaWQnLCAnc2xpZDUnKTtcbnNsaWQ1LnN0eWxlLmhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgKyAncHgnO1xuc2xpZDUuaW5uZXJIVE1MID0gIGA8aDIgY2xhc3M9XCJjb250YWN0c1wiPtCa0L7QvdGC0LDQutGC0Ys8L2gyPmA7XG5zbGlkNS5pZCA9ICdDb250YWN0cyc7XG5leHBvcnQgZGVmYXVsdCBzbGlkNTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKG1vZHVsZS5pZCwgY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjFkYTJhYzBjZTI0NzVmNzdlYWQxNDc4ODg5MWUwNTRhLnR0ZlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI0ZWQ4Mjk4MjA0MTM4YjA4YzFlNzNkMmQ5YTZjYmE5YS50dGZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL01vb24ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9hbWFpb3N3aW0uanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9hbnlXNFl0bXBsLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYmFja0dyb3VuZC1taW4ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9ibHVlX3NreS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2NhdC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2NhdFdlT2ZmZmVyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvY2lyY2xlLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvY2xvdWRfMS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2Nsb3VkXzIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9jbG91ZF8zLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvY29tbWVudFRleHQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9jb3NtLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvZGVzdGlueS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2Rvd25BcnJvdy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2dyYXNzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvZ3Jhc3NTbmFpbC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL21lbnVfd2hpdGUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9tb29uV2VPZmZlci5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL3Byb3VkYW5kcHVuY2guanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9yYWluZm9yZXN0Zm9vZHMuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9zdGFyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvc3VuLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvdGVtcGxhdGVfMS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL3RlbXBsYXRlXzIuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy90ZW1wbGF0ZV8zLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvdGVtcGxhdGVfNC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL3RlbXBsYXRlXzUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy90ZW1wbGF0ZV82LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvdGVtcGxhdGVfNy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL3VwQXJyb3cucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==