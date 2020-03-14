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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/slide_3.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/slide_3.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../img/anyW4Ytmpl.jpg */ "./src/img/anyW4Ytmpl.jpg");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../img/cosm.jpg */ "./src/img/cosm.jpg");
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../img/amaioswim.jpg */ "./src/img/amaioswim.jpg");
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ../img/proudandpunch.jpg */ "./src/img/proudandpunch.jpg");
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(/*! ../img/rainforestfoods.jpg */ "./src/img/rainforestfoods.jpg");
var ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(/*! ../img/template_1-min.png */ "./src/img/template_1-min.png");
var ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(/*! ../img/template_3-min.png */ "./src/img/template_3-min.png");
var ___CSS_LOADER_URL_IMPORT_7___ = __webpack_require__(/*! ../img/template_4-min.png */ "./src/img/template_4-min.png");
var ___CSS_LOADER_URL_IMPORT_8___ = __webpack_require__(/*! ../img/template_5-min.png */ "./src/img/template_5-min.png");
var ___CSS_LOADER_URL_IMPORT_9___ = __webpack_require__(/*! ../img/template_6-min.png */ "./src/img/template_6-min.png");
var ___CSS_LOADER_URL_IMPORT_10___ = __webpack_require__(/*! ../img/template_7-min.png */ "./src/img/template_7-min.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_10___);
// Module
exports.push([module.i, ".mainSlide3{\r\n    width: 100%;\r\n    height: 95%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-around;\r\n    position: relative;\r\n    top:2%;\r\n    border: solid transparent;\r\n    border-width: 20px 10px 50px 10px;\r\n    border-radius: 2%;\r\n    overflow: hidden;\r\n\r\n}\r\n.position{\r\n    position: absolute;\r\n}\r\n.center{\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n@keyframes moveBlocksIn{\r\n     0%{\r\n      opacity: 1;\r\n     }\r\n    40%{\r\n        opacity: 0;\r\n    }\r\n    50%{\r\n        opacity: 0;\r\n    }\r\n\r\n     100%{\r\n        opacity: 1;\r\n     }\r\n }\r\n@keyframes moveBlocksOut{\r\n    0%{\r\n        position: absolute;\r\n    }\r\n    100%{\r\n        display: block;\r\n    }\r\n}\r\n.moveIn{\r\n    animation: 30s ease-in moveBlocksIn;\r\n}\r\n.moveOut{\r\n    animation: 2s linear moveBlocksOut;\r\n}\r\n\r\n.block{\r\n    /*border: 2px solid white;*/\r\n    /*transition: transform 50s linear;*/\r\n    /*box-shadow: 0 0 10px 2px rgba(57, 57, 57, 0.79);*/\r\n}\r\n\r\n.block_1{\r\n    transition:  50s linear;\r\n    background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\r\n    background-size:  cover;\r\n    overflow: hidden;\r\n}\r\n.block_2{\r\n    transition:  40s linear;\r\n    background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center center;\r\n    background-size: contain;\r\n    overflow: hidden;\r\n\r\n}\r\n.block_3{\r\n    transition: 30s linear;\r\n    background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat center center;\r\n    background-size: contain;\r\n    overflow: hidden;\r\n}\r\n.block_4{\r\n    transition: 20s linear;\r\n    background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") no-repeat center center;\r\n    background-size: contain;\r\n    overflow: hidden;\r\n}\r\n.block_5{\r\n    transition:  30s linear;\r\n    background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") no-repeat center center;\r\n    background-size: contain;\r\n    overflow: hidden;\r\n}\r\n.block_6{\r\n    transition: 40s linear;\r\n    background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") no-repeat center center;\r\n    background-size: contain;\r\n    overflow: hidden;\r\n}\r\n.block_7{\r\n    transition:  50s linear;\r\n    background:  transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") no-repeat center center;\r\n    background-size: contain;\r\n    overflow: hidden;\r\n}\r\n.block_8{\r\n    transition:  50s linear;\r\n    background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") no-repeat center center;\r\n    background-size: contain;\r\n    overflow: hidden;\r\n}\r\n.block_9{\r\n    transition:  30s linear;\r\n    background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") no-repeat center center;\r\n    background-size: contain;\r\n    overflow: hidden;\r\n}\r\n.block_10{\r\n    transition: 40s linear;\r\n    background:  transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") no-repeat center center;\r\n    background-size: contain;\r\n    overflow: hidden;\r\n}\r\n.block_11{\r\n    transition:  50s linear;\r\n    background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") no-repeat center center;\r\n    background-size: contain;\r\n    overflow: hidden;\r\n}\r\n.block_12{\r\n    transition:  50s linear;\r\n    background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ") no-repeat center center;\r\n    background-size: contain;\r\n    overflow: hidden;\r\n}\r\n.block_13{\r\n    transition:  30s linear;\r\n    background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ") no-repeat center center;\r\n    background-size: contain;\r\n    overflow: hidden;\r\n}\r\n.block_14{\r\n    transition: 40s linear;\r\n    background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ") no-repeat center center;\r\n    background-size: contain;\r\n    overflow: hidden;\r\n}\r\n.block_15{\r\n    transition:  50s linear;\r\n    background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ") no-repeat center center;\r\n    background-size: contain;\r\n    overflow: hidden;\r\n}\r\n.block_16{\r\n    transition:  50s linear;\r\n    background: transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ") no-repeat center center;\r\n    background-size: contain;\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n", ""]);
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
exports.push([module.i, ".main{\r\n    width: 100%;\r\n    height: 95%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-around;\r\n    position: relative;\r\n    top:2%;\r\n    border: solid #f3ff86;\r\n    border-width: 20px 10px 50px 10px;\r\n    border-radius: 2%;\r\n    overflow: hidden;\r\n\r\n}\r\n.template{\r\n    width: calc((100% / 3) - 7%);\r\n    height: 16em;\r\n    border: 3px solid #000068;\r\n    border-radius: 5px;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    transition: 1s;\r\n    cursor: pointer;\r\n\r\n}\r\n/*.resize{*/\r\n/*    position: absolute;*/\r\n/*    width: 80%;*/\r\n/*    height: 80%;*/\r\n/*    left: 10%;*/\r\n/*    top: 5%;*/\r\n/*}*/\r\n/*----------------------------------------------------------*/\r\n@media screen and (max-width: 1400px) and (orientation: landscape) {\r\n    .template {\r\n        width: calc((100% / 3) - 2%);\r\n        height: 15em;\r\n    }\r\n}\r\n/*-----------------------------------------------------------*/\r\n@media screen and (max-width: 1300px) {\r\n    .template {\r\n        width: calc((100% / 3) - 5%);\r\n        height: 13em;\r\n    }\r\n}\r\n/*-----------------------------------------------------------*/\r\n@media screen and (max-width: 1050px) {\r\n    .main{\r\n        overflow-y: scroll;\r\n        -webkit-overflow-scrolling:touch !important;\r\n        padding-top: 10px;\r\n\r\n    }\r\n    .template {\r\n        width: calc((100% / 2) - 5%);\r\n        height: auto;\r\n        margin: 10px;\r\n    }\r\n}\r\n/*---------------------------------------------------------------*/\r\n@media screen and (max-width: 1050px) and (orientation: landscape) {\r\n    .main{\r\n        overflow-y: scroll;\r\n        -webkit-overflow-scrolling:touch !important;\r\n\r\n    }\r\n    .template {\r\n        width: calc((100% / 2) - 5%);\r\n        height: 15em;\r\n        margin: 10px;\r\n    }\r\n}\r\n/*-----------------------------------------------------------*/\r\n@media screen and (max-width: 800px) {\r\n    .template{\r\n        width: 40em;\r\n        height: 20em;\r\n    }\r\n\r\n}\r\n/*-----------------------------------------------------------*/\r\n@media screen and (max-width: 740px)  and (orientation: landscape){\r\n    .template{\r\n        width: 35em;\r\n        height: 17em;\r\n    }\r\n\r\n}\r\n/*-----------------------------------------------------------*/\r\n@media screen and (max-width: 700px)  and (orientation: landscape){\r\n    .template{\r\n        width: 35em;\r\n        height: 17em;\r\n    }\r\n}\r\n/*----------------------------------------------------------*/\r\n@media screen and (max-width: 600px) {\r\n    .template {\r\n        width: 26em;\r\n        height: 13em;\r\n    }\r\n}", ""]);
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
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
exports.push([module.i, "\r\n/*-----------------------Slider---------------------------------------------------*/\r\n.slid{\r\n    width: 100% !important;\r\n    height: 100% !important;\r\n    position: absolute;\r\n    top: 0;\r\n    left:0;\r\n    transition: transform 0.4s;\r\n\r\n}\r\n\r\n.slid1{\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") repeat-x bottom,\r\n                url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat bottom,\r\n                linear-gradient(to top, #af8230, #1a2b58, #121e3e 60%);\r\n    color: aliceblue;\r\n    transition-delay: 0.20s;\r\n    background-size:auto,100% auto, auto;\r\n    z-index: 20;\r\n}\r\n.slid2{\r\n    background-color: rgba(67, 61, 154, 1);\r\n    transition-delay: 0.15s;\r\n    z-index: 19;\r\n\r\n}\r\n.slid3{\r\n    background-color: #7df0c8;\r\n    transition-delay: 0.10s;\r\n    z-index: 18;\r\n}\r\n.slid4{\r\n    background-color: #f3ff86;\r\n    color: #000068;\r\n    transition-delay: 0.05s;\r\n    z-index: 17;\r\n\r\n}\r\n.slid5{\r\n    background-color: #000068;\r\n    color: aliceblue !important;\r\n    transition-delay: 0s;\r\n    z-index: 16;\r\n\r\n}\r\n@keyframes slidDown{\r\n    0%{\r\n        top: 0;\r\n    }\r\n    100% {\r\n        top:100vh;\r\n    }\r\n}\r\n@keyframes slidUp{\r\n    from {\r\n        top: 100vh;\r\n    }\r\n    100% {\r\n        top:0;\r\n    }\r\n}\r\n.down{\r\n    top: 100vh;\r\n    animation: 1.2s ease-in-out slidDown;\r\n\r\n}\r\n.up{\r\n    top: 0;\r\n    animation: 1s ease-in-out slidUp;\r\n}\r\n.show {\r\n    z-index: 150;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n\r\n}\r\n/*----------------------------Arrow------------------------------------------------------*/\r\n@keyframes moveButton{\r\n    from {\r\n        margin-top: 0;\r\n    }\r\n    5%{\r\n        margin-top: 10px;\r\n    }\r\n    10%{\r\n        margin-top: 0;\r\n    }\r\n    15%{\r\n        margin-top: 10px;\r\n    }\r\n    20%{\r\n        margin-top: 0;\r\n    }\r\n    100%{\r\n        margin-top: 0;\r\n    }\r\n\r\n}\r\n.divArrowUP{\r\n    position: absolute;\r\n    width: 4em;\r\n    height: 4em;\r\n    padding: 8px 2px 2px 2px !important;\r\n    top:.5em;\r\n    left: calc(100vw - 5em);\r\n    border-radius: 50%;\r\n    z-index: 200;\r\n    outline:none;\r\n}\r\n.divArrowUP img {\r\n    height: 90%;\r\n    width: 90%;\r\n}\r\n.divArrowDown{\r\n    position: absolute;\r\n    width: 4em;\r\n    height: 4em;\r\n    transform: rotate(-90deg);\r\n    padding: 8px 2px 2px 2px !important;\r\n    top: calc(100% - 4em - 3em);\r\n    left: calc(100vw - 5em);\r\n    border-radius: 50%;\r\n    z-index: 200;\r\n    outline:none;\r\n}\r\n.divArrowDown img {\r\n    height: 90%;\r\n    width: 90%;\r\n    transform: rotate(90deg);\r\n\r\n}\r\n.animButton{\r\n    margin-top: 0;\r\n    animation: moveButton 5s ease-in-out infinite;\r\n}\r\n\r\n/*---------------------------------------------------------------*/\r\n@media screen and (max-width: 1200px){\r\n    .slid1{\r\n        background-size: auto,140% 30%, auto;\r\n        background-position: bottom, 100% bottom;\r\n    }\r\n}\r\n/*---------------------------------------------------------------*/\r\n@media screen and (max-width: 1100px){\r\n    .slid{\r\n        transition:  .6s linear;\r\n    }\r\n    .downW{\r\n        top: 0;\r\n        /*animation: 1.2s ease-in-out slidUp;*/\r\n\r\n    }\r\n    .upW{\r\n        top: -100vh;\r\n        /*animation: 1s ease-in-out slidDown;*/\r\n    }\r\n}\r\n/*--------------------------------------------------------------*/\r\n@media screen and (max-width: 900px) and (orientation: landscape) {\r\n    .divArrowDown{\r\n        top: calc(100% - 4em - 1em);\r\n    }\r\n    .slid1{\r\n        background-size: auto 15%,100% 35%, auto;\r\n        background-position: bottom, 100% bottom;\r\n    }\r\n}\r\n/*---------------------------------------------------------------*/\r\n@media screen and (max-width: 450px){\r\n    .slid1{\r\n        background-size: auto 15%,190% 25%, auto;\r\n        background-position: bottom, 100% bottom;\r\n    }\r\n    .divArrowDown, .divArrowUP{\r\n        width: 3em;\r\n        height: 3em;\r\n        left: calc(100vw - 3em);\r\n    }\r\n}\r\n\r\n", ""]);
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
var ___CSS_LOADER_AT_RULE_IMPORT_3___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./slide_3.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/slide_3.css");
var ___CSS_LOADER_AT_RULE_IMPORT_4___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./slide_4.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/slide_4.css");
var ___CSS_LOADER_AT_RULE_IMPORT_5___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../fonts/font.css */ "./node_modules/css-loader/dist/cjs.js!./src/fonts/font.css");
var ___CSS_LOADER_AT_RULE_IMPORT_6___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./modal.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_1___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_2___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_3___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_4___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_5___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_6___);
// Module
exports.push([module.i, ":root{\r\n    --vh : 1;\r\n}\r\n\r\n.container {\r\n    height: 100vh;\r\n    height: calc(var(--vh, 1vh) * 100);\r\n    width: 100vw !important;\r\n    position: fixed;\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n.displayCenter{\r\n    display: flex;\r\n    justify-content: center;\r\n    justify-items: center;\r\n    align-items: center;\r\n    align-content: center;\r\n}\r\n.none{\r\n     display: none;\r\n }\r\nh1{\r\n    cursor: pointer;\r\n    font-family: \"Segoe Print Bold\";\r\n    font-size: 2em;\r\n}\r\nh2{\r\n    cursor: pointer;\r\n    font-family: \"Segoe Print Bold\";\r\n    font-size: 2em;\r\n    text-align: center;\r\n    margin-top: 20px;\r\n}\r\n/*----------------------------------------------------------------------------------------------*/\r\n.menu-btn {\r\n    position: absolute;\r\n    z-index: 99999;\r\n    top: 0;\r\n    left: 0;\r\n    height: 60px;\r\n    width: 60px;\r\n    cursor: pointer;\r\n    background: url(https://iamturner.co.uk/codepen/menu-icon.png) no-repeat center;\r\n    background-size: 70px;\r\n}\r\n.menuOpen{\r\n    align-items: normal !important;\r\n    align-content: normal !important;\r\n}\r\n/*-------------------------------------------------------------------------------------------------*/\r\n@media screen and (max-width: 600px) {\r\n    h2{\r\n        font-size: 1.7em;\r\n    }\r\n}\r\n\r\n", ""]);
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
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_js_dist_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/js/dist/util */ "./node_modules/bootstrap/js/dist/util.js");
/* harmony import */ var bootstrap_js_dist_util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_util__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery_src_jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery/src/jquery */ "./node_modules/jquery/src/jquery.js");
/* harmony import */ var jquery_src_jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery_src_jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
/* harmony import */ var _img_downArrow_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/downArrow.png */ "./src/img/downArrow.png");
/* harmony import */ var _img_upArrow_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/upArrow.png */ "./src/img/upArrow.png");
/* harmony import */ var _slides_slide1__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./slides/slide1 */ "./src/app/slides/slide1.js");
/* harmony import */ var _slides_slide2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./slides/slide2 */ "./src/app/slides/slide2.js");
/* harmony import */ var _slides_slide3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./slides/slide3 */ "./src/app/slides/slide3.js");
/* harmony import */ var _slides_slide4__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./slides/slide4 */ "./src/app/slides/slide4.js");
/* harmony import */ var _slides_slide5__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./slides/slide5 */ "./src/app/slides/slide5.js");
















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
    cont.appendChild(_slides_slide5__WEBPACK_IMPORTED_MODULE_13__["default"]);
    cont.appendChild(_slides_slide4__WEBPACK_IMPORTED_MODULE_12__["default"]);
    cont.appendChild(_slides_slide3__WEBPACK_IMPORTED_MODULE_11__["default"]);
    cont.appendChild(_slides_slide2__WEBPACK_IMPORTED_MODULE_10__["default"]);
    cont.appendChild(_slides_slide1__WEBPACK_IMPORTED_MODULE_9__["default"]);

    obj.massSlides = cont.querySelectorAll('.slid');
}
//-------------------------------------------------------------------------------------
function arrowButtons() {

    const divArrowUp = obj.divArrowUp,
          divArrowDown = obj.divArrowDown;

    obj.ArrowUp.src = _img_upArrow_png__WEBPACK_IMPORTED_MODULE_8__["default"];
    obj.ArrowUp.alt = 'arrowUp';
    divArrowUp.appendChild( obj.ArrowUp);

    obj.ArrowDown.src = _img_downArrow_png__WEBPACK_IMPORTED_MODULE_7__["default"];
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


const slid2 = document.createElement('div');

slid2.classList.add('slid', 'slid2');
slid2.style.height = document.documentElement.clientHeight + 'px';
slid2.innerHTML = `<h2>Мы предлагаем</h2>`;
slid2.id = 'We suppose';


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


const obj = {
    slide : document.createElement('div'),
    main  : document.createElement('div'),
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
function newHeight(parent) {
    let height = parent.clientHeight;
    if(window.screen.width < 900)
    {
        height = parent.clientWidth/2;
    }else {
        height = parent.clientWidth/3
    }
    return Math.round(Math.random()*(height - height/3) + height/3);
}
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
        block.style.height = sizeBlock(size) + "px";
        block.style.width = sizeBlock(size) + "px";
        return block;
}

//--------------------------------------------------------------
function massBlocks() {
   let len = 16,
       size = sizeScreen();

        if(window.screen.width < 1000){
            len = 10;
        }
        for (let i = 0; i < len; i++){
        let div = null;
        if(!i){
               div = document.createElement('div');
               div.classList.add('block',`block_${i+1}`);
               div.style.height = size + 'px';
               div.style.width = size + 'px';
               div.style.zIndex = zIndex();
        }else{
            div = createBlock('div', size, 'block',`block_${i+1}`);
        }

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
        el.style.width = newWidth(el.parentElement) +'px';
        el.style.height = newHeight(el.parentElement) + 'px';
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
    setTimeout(()=> positionBlock(), 10);
    setInterval(()=> positionBlock(), 50000);
}
//--------------------------------------------------------------
//вспомогательная функция
function putToCache(elem, cache){
    if(cache.indexOf(elem) != -1){
        return;
    }
    var i = Math.floor(Math.random()*(cache.length + 1));
    cache.splice(i, 0, elem);
}
//функция, возвращающая свеженький, девственный компаратор
function madness(){
    var cache = [];
    return function(a, b){
        putToCache(a, cache);
        putToCache(b, cache);
        return cache.indexOf(b) - cache.indexOf(a);
    }
}
//собственно функция перемешивания
function shuffle(arr){
    var compare = madness();
    return arr.sort(compare);
}
//---------------------------------------------------------------
function positionCenter(valueScr, valueBl) {
    return Math.round(valueScr/2 - valueBl/2);
}
//----------------------------------------------------------------

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
/* harmony import */ var _img_template_1_min_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/template_1-min.png */ "./src/img/template_1-min.png");
/* harmony import */ var _img_template_2_min_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/template_2-min.png */ "./src/img/template_2-min.png");
/* harmony import */ var _img_template_3_min_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../img/template_3-min.png */ "./src/img/template_3-min.png");
/* harmony import */ var _img_template_4_min_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../img/template_4-min.png */ "./src/img/template_4-min.png");
/* harmony import */ var _img_template_5_min_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../img/template_5-min.png */ "./src/img/template_5-min.png");
/* harmony import */ var _img_template_6_min_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../img/template_6-min.png */ "./src/img/template_6-min.png");
/* harmony import */ var _img_template_7_min_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../img/template_7-min.png */ "./src/img/template_7-min.png");
/* harmony import */ var _img_template_8_min_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../img/template_8-min.png */ "./src/img/template_8-min.png");










const obj = {
    slide : document.createElement('div'),
    main  : document.createElement('div'),
    massImages : [],

}
// --------------------------------------------------------------------
function Images() {
    let temp_1 = new Image();
        temp_1.src = _img_template_1_min_png__WEBPACK_IMPORTED_MODULE_1__["default"];
        temp_1.alt = 'Template';
        obj.massImages.push(temp_1);

    let temp_2 = new Image();
        temp_2.src = _img_template_2_min_png__WEBPACK_IMPORTED_MODULE_2__["default"];
        temp_2.alt = 'Template';
        obj.massImages.push(temp_2);

    let temp_3 = new Image();
        temp_3.src = _img_template_3_min_png__WEBPACK_IMPORTED_MODULE_3__["default"];
        temp_3.alt = 'Template';
        obj.massImages.push(temp_3);

    let temp_4 = new Image();
        temp_4.src = _img_template_4_min_png__WEBPACK_IMPORTED_MODULE_4__["default"];
        temp_4.alt = 'Template';
        obj.massImages.push(temp_4);

    let temp_5 = new Image();
        temp_5.src = _img_template_5_min_png__WEBPACK_IMPORTED_MODULE_5__["default"];
        temp_5.alt = 'Template';
        obj.massImages.push(temp_5);

    let temp_6 = new Image();
        temp_6.src = _img_template_6_min_png__WEBPACK_IMPORTED_MODULE_6__["default"];
        temp_6.alt = 'Template';
        obj.massImages.push(temp_6);

    let temp_7 = new Image();
        temp_7.src = _img_template_7_min_png__WEBPACK_IMPORTED_MODULE_7__["default"];
        temp_7.alt = 'Template';
        obj.massImages.push(temp_7);

    let temp_8 = new Image();
        temp_8.src = _img_template_8_min_png__WEBPACK_IMPORTED_MODULE_8__["default"];
        temp_8.alt = 'Template';
        obj.massImages.push(temp_8);

    let temp_9 = new Image();
        temp_9.src = _img_template_1_min_png__WEBPACK_IMPORTED_MODULE_1__["default"];
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

/***/ "./src/img/template_1-min.png":
/*!************************************!*\
  !*** ./src/img/template_1-min.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/template_1-min.png");

/***/ }),

/***/ "./src/img/template_2-min.png":
/*!************************************!*\
  !*** ./src/img/template_2-min.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/template_2-min.png");

/***/ }),

/***/ "./src/img/template_3-min.png":
/*!************************************!*\
  !*** ./src/img/template_3-min.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/template_3-min.png");

/***/ }),

/***/ "./src/img/template_4-min.png":
/*!************************************!*\
  !*** ./src/img/template_4-min.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/template_4-min.png");

/***/ }),

/***/ "./src/img/template_5-min.png":
/*!************************************!*\
  !*** ./src/img/template_5-min.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/template_5-min.png");

/***/ }),

/***/ "./src/img/template_6-min.png":
/*!************************************!*\
  !*** ./src/img/template_6-min.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/template_6-min.png");

/***/ }),

/***/ "./src/img/template_7-min.png":
/*!************************************!*\
  !*** ./src/img/template_7-min.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/template_7-min.png");

/***/ }),

/***/ "./src/img/template_8-min.png":
/*!************************************!*\
  !*** ./src/img/template_8-min.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/template_8-min.png");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9tb2RhbC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zbGlkZV8xLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3NsaWRlXzMuY3NzIiwid2VicGFjazovLy8uL3NyYy9jc3Mvc2xpZGVfNC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zbGlkZXIuY3NzIiwid2VicGFjazovLy8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9mb250cy9mb250LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2xpZGVzL3NsaWRlMS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NsaWRlcy9zbGlkZTIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zbGlkZXMvc2xpZGUzLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2xpZGVzL3NsaWRlNC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NsaWRlcy9zbGlkZTUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly8vLi9zcmMvZm9udHMvSGFuZ2luZyBMZXR0ZXJzLnR0ZiIsIndlYnBhY2s6Ly8vLi9zcmMvZm9udHMvU2Vnb2UgUHJpbnQgQm9sZC50dGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9Nb29uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2FtYWlvc3dpbS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9hbnlXNFl0bXBsLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2JhY2tHcm91bmQtbWluLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2NhdC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9jbG91ZF8xLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2Nsb3VkXzIucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvY2xvdWRfMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9jb21tZW50VGV4dC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9jb3NtLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2Rvd25BcnJvdy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9ncmFzcy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9ncmFzc1NuYWlsLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL3Byb3VkYW5kcHVuY2guanBnIiwid2VicGFjazovLy8uL3NyYy9pbWcvcmFpbmZvcmVzdGZvb2RzLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL3N0YXIucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvdGVtcGxhdGVfMS1taW4ucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvdGVtcGxhdGVfMi1taW4ucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvdGVtcGxhdGVfMy1taW4ucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvdGVtcGxhdGVfNC1taW4ucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvdGVtcGxhdGVfNS1taW4ucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvdGVtcGxhdGVfNi1taW4ucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvdGVtcGxhdGVfNy1taW4ucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvdGVtcGxhdGVfOC1taW4ucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvdXBBcnJvdy5wbmciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFZSx3RUFBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNoTHpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUI7QUFDMkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsK0RBQU07QUFDM0I7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQiwrREFBTTtBQUMzQjtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLCtEQUFNO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsK0RBQU07QUFDM0I7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQiwrREFBTTtBQUMzQjtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLCtEQUFNO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsK0RBQU07QUFDM0I7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQiwrREFBTTtBQUMzQjtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLCtEQUFNO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBLGdEQUFnRCxzQkFBc0I7QUFDdEU7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsd0VBQVMsRUFBQzs7Ozs7Ozs7Ozs7OztBQzdHekI7QUFBQTtBQUFBO0FBQXVCOztBQUV2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLG9FQUFLLEU7Ozs7Ozs7Ozs7O0FDUnBCLFVBQVUsbUJBQU8sQ0FBQyxzSkFBMkU7QUFDN0YsMEJBQTBCLG1CQUFPLENBQUMseUhBQXlEOztBQUUzRjs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLFFBQVM7O0FBRTFCOzs7O0FBSUEsMEI7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIsaUJBQWlCLEU7Ozs7Ozs7Ozs7OztBQ0F2RDtBQUFlLG9GQUF1QixzQkFBc0IsRTs7Ozs7Ozs7Ozs7O0FDQTVEO0FBQWUsb0ZBQXVCLHVCQUF1QixFOzs7Ozs7Ozs7Ozs7QUNBN0Q7QUFBZSxvRkFBdUIsMkJBQTJCLEU7Ozs7Ozs7Ozs7OztBQ0FqRTtBQUFlLG9GQUF1QixnQkFBZ0IsRTs7Ozs7Ozs7Ozs7O0FDQXREO0FBQWUsb0ZBQXVCLG9CQUFvQixFOzs7Ozs7Ozs7Ozs7QUNBMUQ7QUFBZSxvRkFBdUIsb0JBQW9CLEU7Ozs7Ozs7Ozs7OztBQ0ExRDtBQUFlLG9GQUF1QixvQkFBb0IsRTs7Ozs7Ozs7Ozs7O0FDQTFEO0FBQWUsb0ZBQXVCLHdCQUF3QixFOzs7Ozs7Ozs7Ozs7QUNBOUQ7QUFBZSxvRkFBdUIsaUJBQWlCLEU7Ozs7Ozs7Ozs7OztBQ0F2RDtBQUFlLG9GQUF1QixzQkFBc0IsRTs7Ozs7Ozs7Ozs7O0FDQTVEO0FBQWUsb0ZBQXVCLGtCQUFrQixFOzs7Ozs7Ozs7Ozs7QUNBeEQ7QUFBZSxvRkFBdUIsdUJBQXVCLEU7Ozs7Ozs7Ozs7OztBQ0E3RDtBQUFlLG9GQUF1QiwwQkFBMEIsRTs7Ozs7Ozs7Ozs7O0FDQWhFO0FBQWUsb0ZBQXVCLDRCQUE0QixFOzs7Ozs7Ozs7Ozs7QUNBbEU7QUFBZSxvRkFBdUIsaUJBQWlCLEU7Ozs7Ozs7Ozs7OztBQ0F2RDtBQUFlLG9GQUF1QiwyQkFBMkIsRTs7Ozs7Ozs7Ozs7O0FDQWpFO0FBQWUsb0ZBQXVCLDJCQUEyQixFOzs7Ozs7Ozs7Ozs7QUNBakU7QUFBZSxvRkFBdUIsMkJBQTJCLEU7Ozs7Ozs7Ozs7OztBQ0FqRTtBQUFlLG9GQUF1QiwyQkFBMkIsRTs7Ozs7Ozs7Ozs7O0FDQWpFO0FBQWUsb0ZBQXVCLDJCQUEyQixFOzs7Ozs7Ozs7Ozs7QUNBakU7QUFBZSxvRkFBdUIsMkJBQTJCLEU7Ozs7Ozs7Ozs7OztBQ0FqRTtBQUFlLG9GQUF1QiwyQkFBMkIsRTs7Ozs7Ozs7Ozs7O0FDQWpFO0FBQWUsb0ZBQXVCLDJCQUEyQixFOzs7Ozs7Ozs7Ozs7QUNBakU7QUFBZSxvRkFBdUIsb0JBQW9CLEUiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImluZGV4XCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvYXBwL2luZGV4LmpzXCIsXCJ2ZW5kb3JzfmluZGV4XCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIip7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFxyXFxufVxcclxcbiNtb2RhbCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFByaW50IEJvbGQnO1xcclxcbiAgICB0b3A6IC0xMjAlO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHotaW5kZXg6IDk5OTk7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC43KTtcXHJcXG59XFxyXFxuLm1vZGFsQWN0aXZle1xcclxcbiAgICB0b3A6IDAgIWltcG9ydGFudDtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGxpbmVhcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsRm9ybXtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgd2lkdGg6IDM1ZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNlbTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAzcHggN3B4IHJnYmEoMCwwLDAsLjI1KTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4ubW9kYWxGb3JtIG1haW57XFxyXFxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xcclxcbn1cXHJcXG4ubW9kYWxGb3JtIG1haW4gcHtcXHJcXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XFxyXFxufVxcclxcbi5tb2RhbEZvcm0gaGVhZGVyLCAubW9kYWxGb3JtIGZvb3RlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNjNWM1YzU7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTM5MzkzO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcXHJcXG59XFxyXFxuLm1vZGFsRm9ybSBmb290ZXIge1xcclxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzkzOTM5MztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XFxyXFxuICAgIC8qLW1vei1ib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDsqL1xcclxcbiAgICAvKi13ZWJraXQtYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7Ki9cXHJcXG59XFxyXFxuLm1vZGFsRm9ybSBkaXYsIC5tb2RhbEZvcm0gaGVhZGVyLCAubW9kYWxGb3JtIGZvb3RlciB7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIHotaW5kZXg6IDIwMDtcXHJcXG59XFxyXFxuLm1vZGFsRm9ybSBoMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG4ubW9kYWxGb3JtIC5idG4ge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGNvbG9yOiAjMDAwMDY4O1xcclxcbn1cXHJcXG4uY29udGFjdHN7XFxyXFxuY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXHJcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxyXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcclxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXHJcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcclxcbmIsIHUsIGksIGNlbnRlcixcXHJcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcclxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcclxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcclxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxcclxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXHJcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXHJcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcclxcbm1hcmdpbjogMDtcXHJcXG5wYWRkaW5nOiAwO1xcclxcbmJvcmRlcjogMDtcXHJcXG5mb250LXNpemU6IDEwMCU7XFxyXFxuZm9udDogaW5oZXJpdDtcXHJcXG52ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcbip7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcclxcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXFxyXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXHJcXG5kaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxubGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcbm9sLCB1bCB7XFxyXFxubGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZSwgcSB7XFxyXFxucXVvdGVzOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXHJcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxyXFxuY29udGVudDogJyc7XFxyXFxuY29udGVudDogbm9uZTtcXHJcXG59XFxyXFxudGFibGUge1xcclxcbmJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuYm9yZGVyLXNwYWNpbmc6IDA7XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi4uL2ltZy9jbG91ZF8xLnBuZ1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IHJlcXVpcmUoXCIuLi9pbWcvY2xvdWRfMi5wbmdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSByZXF1aXJlKFwiLi4vaW1nL2Nsb3VkXzMucG5nXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIjpyb290e1xcclxcbiAgICAtLWxlZnQ6IDUwJTtcXHJcXG4gICAgLyotLXRvcCA6IDEwMCUqL1xcclxcbiAgICAvKi0tbnVtICA6IDkwZGVnOyovXFxyXFxufVxcclxcbi5oMXtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6MDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSGFuZ2luZyBMZXR0ZXJzXFxcIjtcXHJcXG4gICAgZm9udC1zaXplOiA0ZW07XFxyXFxuICAgIHotaW5kZXg6IDk5O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiAjNjdjMmZiO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTAwcHg7XFxyXFxufVxcclxcbi50b3BCbG9ja3tcXHJcXG4gICAgaGVpZ2h0OiA1MCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4uYm90dG9tQmxvY2t7XFxyXFxuICAgIGhlaWdodDogNTAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLm1haW5EaXZ7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBsZWZ0OiBjYWxjKCgxMDAlIC0gODAlKS8yKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuLmJsb2NrQ2F0e1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBoZWlnaHQ6IDUwJTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogMTAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbn1cXHJcXG4uY2F0e1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxufVxcclxcbi5jYXQgaW1ne1xcclxcbiAgICBoZWlnaHQ6IDUwJTtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuXFxyXFxufVxcclxcbi5ibG9ja01vb257XFxyXFxuICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC8gMyk7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAxMHB4O1xcclxcbiAgICBsZWZ0OiBjYWxjKDEwMCUgLSAzNSUpO1xcclxcbiAgICB6LWluZGV4OiA5OTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuLmJsb2NrTW9vbiBpbWd7XFxyXFxuICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgICBoZWlnaHQ6IDkwJTtcXHJcXG4gICAgICBtYXgtd2lkdGg6IDI3MHB4O1xcclxcbiAgICAgIG1heC1oZWlnaHQ6IDI3MHB4O1xcclxcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcbi5jb21tZW50e1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbn1cXHJcXG4uY29tbWVudCBpbWd7XFxyXFxuICAgIGhlaWdodDogNTAlO1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG59XFxyXFxuLmdyYXNze1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgaGVpZ2h0OiAxNSU7XFxyXFxuICAgIHotaW5kZXg6IDk5O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogY2FsYygxMDAlIC0gMTUlKTtcXHJcXG59XFxyXFxuLnN0YXJ7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIHRyYW5zaXRpb246IC41cztcXHJcXG59XFxyXFxuLmNsb3VkMXtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDI4JTtcXHJcXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOjEwJTtcXHJcXG4gICAgbGVmdDogLTUwJTtcXHJcXG4gICAgei1pbmRleDogOTg7XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgQ2xvdWQxe1xcclxcbiAgICBmcm9te1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgIGxlZnQ6IC01MCU7XFxyXFxuICAgIH1cXHJcXG4gICAgMjAle1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJXtcXHJcXG4gICAgICAgIGxlZnQ6IGNhbGMoMTAwdmggKyA1MCUpO1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4ubW92ZUNsb3VkXzF7XFxyXFxuICAgIGxlZnQ6IC01MCU7XFxyXFxuICAgIGFuaW1hdGlvbjogNzAwMDBtcyBsaW5lYXIgQ2xvdWQxO1xcclxcbiAgICBhbmltYXRpb24tZGVsYXk6IDEwcztcXHJcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxyXFxufVxcclxcbi5jbG91ZDJ7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gICAgd2lkdGg6IDQwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAyOCU7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDoxNSU7XFxyXFxuICAgIGxlZnQ6IC01MCU7XFxyXFxuICAgIHotaW5kZXg6IDEwMDtcXHJcXG59XFxyXFxuQGtleWZyYW1lcyBDbG91ZDJ7XFxyXFxuICAgIGZyb217XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgbGVmdDogLTUwJTtcXHJcXG4gICAgfVxcclxcbiAgICAyMCV7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcbiAgICAxMDAle1xcclxcbiAgICAgICAgbGVmdDogY2FsYygxMDB2aCArIDUwJSk7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5tb3ZlQ2xvdWRfMntcXHJcXG4gICAgbGVmdDogLTUwJTtcXHJcXG4gICAgYW5pbWF0aW9uOiA5MDAwMG1zIGxpbmVhciBDbG91ZDI7XFxyXFxuICAgIGFuaW1hdGlvbi1kZWxheTogMjBzO1xcclxcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXHJcXG59XFxyXFxuLmNsb3VkMyB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gICAgd2lkdGg6IDY1JTtcXHJcXG4gICAgaGVpZ2h0OiAyNSU7XFxyXFxuICAgIG1heC13aWR0aDogNDUwcHg7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDE3MHB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMjAlO1xcclxcbiAgICBsZWZ0OiAtNzAlO1xcclxcbiAgICB6LWluZGV4OiAxMDE7XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgQ2xvdWQze1xcclxcbiAgICBmcm9te1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgIGxlZnQ6IC03MCU7XFxyXFxuICAgIH1cXHJcXG4gICAgMjAle1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJXtcXHJcXG4gICAgICAgIGxlZnQ6Y2FsYygxMDB2aCArIDcwJSk7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5tb3ZlQ2xvdWRfM3tcXHJcXG4gICAgbGVmdDogLTcwJTtcXHJcXG4gICAgYW5pbWF0aW9uOiAxMjAwMDBtcyBsaW5lYXIgQ2xvdWQzO1xcclxcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXHJcXG59XFxyXFxuLndvcmRzQmxvY2t7XFxyXFxuICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgIGhlaWdodDogMzAlO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogY2FsYygxMDAlIC0gMzAlIC0gMzUlKTtcXHJcXG4gICAgbGVmdDogY2FsYygxMDAlIC0gMjAlKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTAlO1xcclxcblxcclxcbn1cXHJcXG4ud29yZHNCbG9jayBkaXZ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdG9wOjA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHRyYW5zcGFyZW50IDYwJSwgcmdiYSgyMCwgMzMsIDY5LCAwLjQ1KSk7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFxyXFxufVxcclxcbi53b3Jkc0Jsb2NrIHNwYW57XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogNDUlO1xcclxcbiAgICB0b3A6IDExMCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBQcmludCBCb2xkXFxcIjtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIG1vdmVXb3Jkc3tcXHJcXG4gICBmcm9te1xcclxcbiAgICAgICB0b3A6MTEwJTtcXHJcXG4gICAgICAgbGVmdDogMjUlO1xcclxcbiAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgIH1cXHJcXG4gICAgMTUle1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcbiAgICAyMCV7XFxyXFxuICAgICAgICBvcGFjaXR5OiAuNTtcXHJcXG4gICAgfVxcclxcbiAgICAzMCV7XFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB9XFxyXFxuICAgIDUwJXtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJXtcXHJcXG4gICAgICAgIHRvcDowO1xcclxcbiAgICAgICAgbGVmdDogdmFyKC0tbGVmdCk7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxufVxcclxcbi5tb3ZlV3tcXHJcXG4gICAgYW5pbWF0aW9uOiA2cyBsaW5lYXIgbW92ZVdvcmRzO1xcclxcbn1cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNTBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKXtcXHJcXG4gICAuYmxvY2tDYXR7XFxyXFxuICAgICB3aWR0aDogNDAlICFpbXBvcnRhbnQ7XFxyXFxuICAgfVxcclxcbn1cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgyNXB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpe1xcclxcbiAgICAubWFpbkRpdntcXHJcXG4gICAgICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgICAgICBsZWZ0OiBjYWxjKCgxMDAlIC0gNzAlKS8yKTtcXHJcXG4gICAgfVxcclxcbiAgICAuaDF7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIuNWVtICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogNjBweCAhaW1wb3J0YW50O1xcclxcbiAgICB9XFxyXFxuICAgIGgye1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyLjVlbSAhaW1wb3J0YW50O1xcclxcbiAgICB9XFxyXFxuICAgIC5ibG9ja01vb24gaW1nIHtcXHJcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDUwJTtcXHJcXG4gICAgfVxcclxcbiAgICAuY29tbWVudCB7XFxyXFxuICAgICAgICB3aWR0aDogNDAlO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNTBweCkge1xcclxcbiAgICAubWFpbkRpdntcXHJcXG4gICAgICAgIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcXHJcXG4gICAgICAgIGxlZnQ6IGNhbGMoKDEwMCUgLSA5MCUpLzIpO1xcclxcbiAgICB9XFxyXFxuICAgIC53b3Jkc0Jsb2Nre1xcclxcbiAgICAgICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgICAgIGxlZnQ6IGNhbGMoMTAwJSAtIDMwJSk7XFxyXFxuICAgIH1cXHJcXG4gICAgLmJsb2NrQ2F0e1xcclxcbiAgICAgICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgICAgIGhlaWdodDogNDAlO1xcclxcbiAgICAgICAgdG9wOiA1OCU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmNvbW1lbnQgaW1nIHtcXHJcXG4gICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmNvbW1lbnQgaW1nIHtcXHJcXG4gICAgICAgIGhlaWdodDogNDAlO1xcclxcblxcclxcbiAgICB9XFxyXFxuICAgIC5jbG91ZDF7XFxyXFxuICAgICAgICB3aWR0aDogMzAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAyMCU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmNsb3VkMntcXHJcXG4gICAgICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDIwJTtcXHJcXG4gICAgfVxcclxcbiAgICAuY2xvdWQzIHtcXHJcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDIwJTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcclxcbiAgICAuaDF7XFxyXFxuICAgICAgICBmb250LXNpemU6IDNlbTtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA4MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIGgye1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLmJsb2NrTW9vbiBpbWd7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xcclxcbiAgICAgICAgbWF4LWhlaWdodDogMTUwcHg7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG4gICAgLndvcmRzQmxvY2t7XFxyXFxuICAgICAgd2lkdGg6IDIwJTtcXHJcXG4gICAgICB0b3A6Y2FsYygxMDAlIC0gMzAlIC0gMzAlKTtcXHJcXG4gICAgICBsZWZ0OiBjYWxjKDEwMCUgLSAyMCUpO1xcclxcbiAgICB9XFxyXFxuICAgIC53b3Jkc0Jsb2NrIHNwYW57XFxyXFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXHJcXG4gICAgLmgxe1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzZW07XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogODBweDtcXHJcXG4gICAgfVxcclxcbiAgICBoMntcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogM2VtO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gICAgLmgxe1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyZW07XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcXHJcXG4gICAgfVxcclxcbiAgICAubWFpbkRpdntcXHJcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgICAgICBsZWZ0OiBjYWxjKCgxMDAlIC0gOTAlKS8yKTtcXHJcXG5cXHJcXG4gICAgfVxcclxcbiAgICAuYmxvY2tDYXR7XFxyXFxuICAgICAgICB3aWR0aDogODAlO1xcclxcbiAgICAgICAgbGVmdDogMSU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmJsb2NrTW9vbntcXHJcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmNhdCBpbWcge1xcclxcbiAgICAgICAgaGVpZ2h0OiA0MCU7XFxyXFxuICAgICAgICAvKm1hcmdpbi1ib3R0b206IDIwcHg7Ki9cXHJcXG4gICAgfVxcclxcbiAgICAuY29tbWVudCBpbWcge1xcclxcbiAgICAgICAgaGVpZ2h0OiA0MCU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmdyYXNze1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMCU7XFxyXFxuICAgICAgICB0b3A6IGNhbGMoMTAwJSAtIDEwJSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgICAud29yZHNCbG9ja3tcXHJcXG4gICAgICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgICAgICBsZWZ0OiBjYWxjKDEwMCUgLSA0MCUpO1xcclxcbiAgICAgICAgdG9wOiBjYWxjKDEwMCUgLSAzMCUgLSAyMCUpO1xcclxcblxcclxcbiAgICB9XFxyXFxuICAgIC5jb21tZW50e1xcclxcbiAgICAgICAgei1pbmRleDogOTk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcXHJcXG4gICAgLndvcmRzQmxvY2t7XFxyXFxuICAgICAgICB3aWR0aDogMjAlO1xcclxcbiAgICAgICAgbGVmdDogY2FsYygxMDAlIC0gMjAlKTtcXHJcXG4gICAgICAgIHRvcDogY2FsYygxMDAlIC0gMzAlIC0gMzAlKTtcXHJcXG4gICAgfVxcclxcbiAgICAud29yZHNCbG9jayBzcGFue1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCl7XFxyXFxuICAgIC53b3Jkc0Jsb2Nre1xcclxcbiAgICAgICAgd2lkdGg6IDQwJTtcXHJcXG4gICAgICAgIGxlZnQ6IGNhbGMoMTAwJSAtIDQ1JSk7XFxyXFxuICAgICAgICAvKnRvcDogY2FsYygxMDAlIC0gMzAlIC0gMzAlKTsqL1xcclxcbiAgICB9XFxyXFxuICAgIC53b3Jkc0Jsb2NrIHNwYW57XFxyXFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIH1cXHJcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiLi4vaW1nL2FueVc0WXRtcGwuanBnXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gcmVxdWlyZShcIi4uL2ltZy9jb3NtLmpwZ1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IHJlcXVpcmUoXCIuLi9pbWcvYW1haW9zd2ltLmpwZ1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IHJlcXVpcmUoXCIuLi9pbWcvcHJvdWRhbmRwdW5jaC5qcGdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSByZXF1aXJlKFwiLi4vaW1nL3JhaW5mb3Jlc3Rmb29kcy5qcGdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSByZXF1aXJlKFwiLi4vaW1nL3RlbXBsYXRlXzEtbWluLnBuZ1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyA9IHJlcXVpcmUoXCIuLi9pbWcvdGVtcGxhdGVfMy1taW4ucG5nXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fID0gcmVxdWlyZShcIi4uL2ltZy90ZW1wbGF0ZV80LW1pbi5wbmdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzhfX18gPSByZXF1aXJlKFwiLi4vaW1nL3RlbXBsYXRlXzUtbWluLnBuZ1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOV9fXyA9IHJlcXVpcmUoXCIuLi9pbWcvdGVtcGxhdGVfNi1taW4ucG5nXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMF9fXyA9IHJlcXVpcmUoXCIuLi9pbWcvdGVtcGxhdGVfNy1taW4ucG5nXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzlfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEwX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTBfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubWFpblNsaWRlM3tcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogOTUlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRvcDoyJTtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAyMHB4IDEwcHggNTBweCAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyJTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHJcXG59XFxyXFxuLnBvc2l0aW9ue1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcbi5jZW50ZXJ7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIG1vdmVCbG9ja3NJbntcXHJcXG4gICAgIDAle1xcclxcbiAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgICB9XFxyXFxuICAgIDQwJXtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgNTAle1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAgMTAwJXtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgICB9XFxyXFxuIH1cXHJcXG5Aa2V5ZnJhbWVzIG1vdmVCbG9ja3NPdXR7XFxyXFxuICAgIDAle1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCV7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4ubW92ZUlue1xcclxcbiAgICBhbmltYXRpb246IDMwcyBlYXNlLWluIG1vdmVCbG9ja3NJbjtcXHJcXG59XFxyXFxuLm1vdmVPdXR7XFxyXFxuICAgIGFuaW1hdGlvbjogMnMgbGluZWFyIG1vdmVCbG9ja3NPdXQ7XFxyXFxufVxcclxcblxcclxcbi5ibG9ja3tcXHJcXG4gICAgLypib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTsqL1xcclxcbiAgICAvKnRyYW5zaXRpb246IHRyYW5zZm9ybSA1MHMgbGluZWFyOyovXFxyXFxuICAgIC8qYm94LXNoYWRvdzogMCAwIDEwcHggMnB4IHJnYmEoNTcsIDU3LCA1NywgMC43OSk7Ki9cXHJcXG59XFxyXFxuXFxyXFxuLmJsb2NrXzF7XFxyXFxuICAgIHRyYW5zaXRpb246ICA1MHMgbGluZWFyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiAgY292ZXI7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcbi5ibG9ja18ye1xcclxcbiAgICB0cmFuc2l0aW9uOiAgNDBzIGxpbmVhcjtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcclxcbn1cXHJcXG4uYmxvY2tfM3tcXHJcXG4gICAgdHJhbnNpdGlvbjogMzBzIGxpbmVhcjtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG4uYmxvY2tfNHtcXHJcXG4gICAgdHJhbnNpdGlvbjogMjBzIGxpbmVhcjtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG4uYmxvY2tfNXtcXHJcXG4gICAgdHJhbnNpdGlvbjogIDMwcyBsaW5lYXI7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuLmJsb2NrXzZ7XFxyXFxuICAgIHRyYW5zaXRpb246IDQwcyBsaW5lYXI7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuLmJsb2NrXzd7XFxyXFxuICAgIHRyYW5zaXRpb246ICA1MHMgbGluZWFyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAgdHJhbnNwYXJlbnQgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG4uYmxvY2tfOHtcXHJcXG4gICAgdHJhbnNpdGlvbjogIDUwcyBsaW5lYXI7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuLmJsb2NrXzl7XFxyXFxuICAgIHRyYW5zaXRpb246ICAzMHMgbGluZWFyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcbi5ibG9ja18xMHtcXHJcXG4gICAgdHJhbnNpdGlvbjogNDBzIGxpbmVhcjtcXHJcXG4gICAgYmFja2dyb3VuZDogIHRyYW5zcGFyZW50IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuLmJsb2NrXzExe1xcclxcbiAgICB0cmFuc2l0aW9uOiAgNTBzIGxpbmVhcjtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOV9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG4uYmxvY2tfMTJ7XFxyXFxuICAgIHRyYW5zaXRpb246ICA1MHMgbGluZWFyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMF9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG4uYmxvY2tfMTN7XFxyXFxuICAgIHRyYW5zaXRpb246ICAzMHMgbGluZWFyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMF9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG4uYmxvY2tfMTR7XFxyXFxuICAgIHRyYW5zaXRpb246IDQwcyBsaW5lYXI7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEwX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcbi5ibG9ja18xNXtcXHJcXG4gICAgdHJhbnNpdGlvbjogIDUwcyBsaW5lYXI7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEwX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcbi5ibG9ja18xNntcXHJcXG4gICAgdHJhbnNpdGlvbjogIDUwcyBsaW5lYXI7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEwX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcblxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1haW57XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDk1JTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0b3A6MiU7XFxyXFxuICAgIGJvcmRlcjogc29saWQgI2YzZmY4NjtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAyMHB4IDEwcHggNTBweCAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyJTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHJcXG59XFxyXFxuLnRlbXBsYXRle1xcclxcbiAgICB3aWR0aDogY2FsYygoMTAwJSAvIDMpIC0gNyUpO1xcclxcbiAgICBoZWlnaHQ6IDE2ZW07XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMwMDAwNjg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMXM7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHJcXG59XFxyXFxuLyoucmVzaXpleyovXFxyXFxuLyogICAgcG9zaXRpb246IGFic29sdXRlOyovXFxyXFxuLyogICAgd2lkdGg6IDgwJTsqL1xcclxcbi8qICAgIGhlaWdodDogODAlOyovXFxyXFxuLyogICAgbGVmdDogMTAlOyovXFxyXFxuLyogICAgdG9wOiA1JTsqL1xcclxcbi8qfSovXFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xcclxcbiAgICAudGVtcGxhdGUge1xcclxcbiAgICAgICAgd2lkdGg6IGNhbGMoKDEwMCUgLyAzKSAtIDIlKTtcXHJcXG4gICAgICAgIGhlaWdodDogMTVlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzAwcHgpIHtcXHJcXG4gICAgLnRlbXBsYXRlIHtcXHJcXG4gICAgICAgIHdpZHRoOiBjYWxjKCgxMDAlIC8gMykgLSA1JSk7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEzZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA1MHB4KSB7XFxyXFxuICAgIC5tYWlue1xcclxcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2ggIWltcG9ydGFudDtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcblxcclxcbiAgICB9XFxyXFxuICAgIC50ZW1wbGF0ZSB7XFxyXFxuICAgICAgICB3aWR0aDogY2FsYygoMTAwJSAvIDIpIC0gNSUpO1xcclxcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xcclxcbiAgICAubWFpbntcXHJcXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNoICFpbXBvcnRhbnQ7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG4gICAgLnRlbXBsYXRlIHtcXHJcXG4gICAgICAgIHdpZHRoOiBjYWxjKCgxMDAlIC8gMikgLSA1JSk7XFxyXFxuICAgICAgICBoZWlnaHQ6IDE1ZW07XFxyXFxuICAgICAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXHJcXG4gICAgLnRlbXBsYXRle1xcclxcbiAgICAgICAgd2lkdGg6IDQwZW07XFxyXFxuICAgICAgICBoZWlnaHQ6IDIwZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzQwcHgpICBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpe1xcclxcbiAgICAudGVtcGxhdGV7XFxyXFxuICAgICAgICB3aWR0aDogMzVlbTtcXHJcXG4gICAgICAgIGhlaWdodDogMTdlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbn1cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkgIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSl7XFxyXFxuICAgIC50ZW1wbGF0ZXtcXHJcXG4gICAgICAgIHdpZHRoOiAzNWVtO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxN2VtO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gICAgLnRlbXBsYXRlIHtcXHJcXG4gICAgICAgIHdpZHRoOiAyNmVtO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxM2VtO1xcclxcbiAgICB9XFxyXFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi4uL2ltZy9ncmFzcy5wbmdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSByZXF1aXJlKFwiLi4vaW1nL2JhY2tHcm91bmQtbWluLnBuZ1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1TbGlkZXItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbi5zbGlke1xcclxcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcclxcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6MDtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHM7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5zbGlkMXtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSByZXBlYXQteCBib3R0b20sXFxyXFxuICAgICAgICAgICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgbm8tcmVwZWF0IGJvdHRvbSxcXHJcXG4gICAgICAgICAgICAgICAgbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2FmODIzMCwgIzFhMmI1OCwgIzEyMWUzZSA2MCUpO1xcclxcbiAgICBjb2xvcjogYWxpY2VibHVlO1xcclxcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjIwcztcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOmF1dG8sMTAwJSBhdXRvLCBhdXRvO1xcclxcbiAgICB6LWluZGV4OiAyMDtcXHJcXG59XFxyXFxuLnNsaWQye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY3LCA2MSwgMTU0LCAxKTtcXHJcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC4xNXM7XFxyXFxuICAgIHotaW5kZXg6IDE5O1xcclxcblxcclxcbn1cXHJcXG4uc2xpZDN7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZGYwYzg7XFxyXFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMTBzO1xcclxcbiAgICB6LWluZGV4OiAxODtcXHJcXG59XFxyXFxuLnNsaWQ0e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmZjg2O1xcclxcbiAgICBjb2xvcjogIzAwMDA2ODtcXHJcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC4wNXM7XFxyXFxuICAgIHotaW5kZXg6IDE3O1xcclxcblxcclxcbn1cXHJcXG4uc2xpZDV7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwNjg7XFxyXFxuICAgIGNvbG9yOiBhbGljZWJsdWUgIWltcG9ydGFudDtcXHJcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XFxyXFxuICAgIHotaW5kZXg6IDE2O1xcclxcblxcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIHNsaWREb3due1xcclxcbiAgICAwJXtcXHJcXG4gICAgICAgIHRvcDogMDtcXHJcXG4gICAgfVxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAgIHRvcDoxMDB2aDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIHNsaWRVcHtcXHJcXG4gICAgZnJvbSB7XFxyXFxuICAgICAgICB0b3A6IDEwMHZoO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgICAgdG9wOjA7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLmRvd257XFxyXFxuICAgIHRvcDogMTAwdmg7XFxyXFxuICAgIGFuaW1hdGlvbjogMS4ycyBlYXNlLWluLW91dCBzbGlkRG93bjtcXHJcXG5cXHJcXG59XFxyXFxuLnVwe1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGFuaW1hdGlvbjogMXMgZWFzZS1pbi1vdXQgc2xpZFVwO1xcclxcbn1cXHJcXG4uc2hvdyB7XFxyXFxuICAgIHotaW5kZXg6IDE1MDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuXFxyXFxufVxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUFycm93LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5Aa2V5ZnJhbWVzIG1vdmVCdXR0b257XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gICAgfVxcclxcbiAgICA1JXtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAle1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gICAgfVxcclxcbiAgICAxNSV7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIDIwJXtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJXtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XFxyXFxuLmRpdkFycm93VVB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDRlbTtcXHJcXG4gICAgaGVpZ2h0OiA0ZW07XFxyXFxuICAgIHBhZGRpbmc6IDhweCAycHggMnB4IDJweCAhaW1wb3J0YW50O1xcclxcbiAgICB0b3A6LjVlbTtcXHJcXG4gICAgbGVmdDogY2FsYygxMDB2dyAtIDVlbSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgei1pbmRleDogMjAwO1xcclxcbiAgICBvdXRsaW5lOm5vbmU7XFxyXFxufVxcclxcbi5kaXZBcnJvd1VQIGltZyB7XFxyXFxuICAgIGhlaWdodDogOTAlO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbn1cXHJcXG4uZGl2QXJyb3dEb3due1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiA0ZW07XFxyXFxuICAgIGhlaWdodDogNGVtO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xcclxcbiAgICBwYWRkaW5nOiA4cHggMnB4IDJweCAycHggIWltcG9ydGFudDtcXHJcXG4gICAgdG9wOiBjYWxjKDEwMCUgLSA0ZW0gLSAzZW0pO1xcclxcbiAgICBsZWZ0OiBjYWxjKDEwMHZ3IC0gNWVtKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICB6LWluZGV4OiAyMDA7XFxyXFxuICAgIG91dGxpbmU6bm9uZTtcXHJcXG59XFxyXFxuLmRpdkFycm93RG93biBpbWcge1xcclxcbiAgICBoZWlnaHQ6IDkwJTtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcclxcblxcclxcbn1cXHJcXG4uYW5pbUJ1dHRvbntcXHJcXG4gICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gICAgYW5pbWF0aW9uOiBtb3ZlQnV0dG9uIDVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KXtcXHJcXG4gICAgLnNsaWQxe1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBhdXRvLDE0MCUgMzAlLCBhdXRvO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tLCAxMDAlIGJvdHRvbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KXtcXHJcXG4gICAgLnNsaWR7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiAgLjZzIGxpbmVhcjtcXHJcXG4gICAgfVxcclxcbiAgICAuZG93bld7XFxyXFxuICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICAvKmFuaW1hdGlvbjogMS4ycyBlYXNlLWluLW91dCBzbGlkVXA7Ki9cXHJcXG5cXHJcXG4gICAgfVxcclxcbiAgICAudXBXe1xcclxcbiAgICAgICAgdG9wOiAtMTAwdmg7XFxyXFxuICAgICAgICAvKmFuaW1hdGlvbjogMXMgZWFzZS1pbi1vdXQgc2xpZERvd247Ki9cXHJcXG4gICAgfVxcclxcbn1cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XFxyXFxuICAgIC5kaXZBcnJvd0Rvd257XFxyXFxuICAgICAgICB0b3A6IGNhbGMoMTAwJSAtIDRlbSAtIDFlbSk7XFxyXFxuICAgIH1cXHJcXG4gICAgLnNsaWQxe1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDE1JSwxMDAlIDM1JSwgYXV0bztcXHJcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSwgMTAwJSBib3R0b207XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KXtcXHJcXG4gICAgLnNsaWQxe1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDE1JSwxOTAlIDI1JSwgYXV0bztcXHJcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSwgMTAwJSBib3R0b207XFxyXFxuICAgIH1cXHJcXG4gICAgLmRpdkFycm93RG93biwgLmRpdkFycm93VVB7XFxyXFxuICAgICAgICB3aWR0aDogM2VtO1xcclxcbiAgICAgICAgaGVpZ2h0OiAzZW07XFxyXFxuICAgICAgICBsZWZ0OiBjYWxjKDEwMHZ3IC0gM2VtKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyA9IHJlcXVpcmUoXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2xpZGVyLmNzc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzJfX18gPSByZXF1aXJlKFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NsaWRlXzEuY3NzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfM19fXyA9IHJlcXVpcmUoXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2xpZGVfMy5jc3NcIik7XG52YXIgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF80X19fID0gcmVxdWlyZShcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zbGlkZV80LmNzc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzVfX18gPSByZXF1aXJlKFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9mb250cy9mb250LmNzc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzZfX18gPSByZXF1aXJlKFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFsLmNzc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuZXhwb3J0cy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5leHBvcnRzLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fKTtcbmV4cG9ydHMuaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzJfX18pO1xuZXhwb3J0cy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfM19fXyk7XG5leHBvcnRzLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF80X19fKTtcbmV4cG9ydHMuaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzVfX18pO1xuZXhwb3J0cy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfNl9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIjpyb290e1xcclxcbiAgICAtLXZoIDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCk7XFxyXFxuICAgIHdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcblxcclxcbi5kaXNwbGF5Q2VudGVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5ub25le1xcclxcbiAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gfVxcclxcbmgxe1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgUHJpbnQgQm9sZFxcXCI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcclxcbn1cXHJcXG5oMntcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlNlZ29lIFByaW50IEJvbGRcXFwiO1xcclxcbiAgICBmb250LXNpemU6IDJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbn1cXHJcXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcbi5tZW51LWJ0biB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgei1pbmRleDogOTk5OTk7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICB3aWR0aDogNjBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9pYW10dXJuZXIuY28udWsvY29kZXBlbi9tZW51LWljb24ucG5nKSBuby1yZXBlYXQgY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDcwcHg7XFxyXFxufVxcclxcbi5tZW51T3BlbntcXHJcXG4gICAgYWxpZ24taXRlbXM6IG5vcm1hbCAhaW1wb3J0YW50O1xcclxcbiAgICBhbGlnbi1jb250ZW50OiBub3JtYWwgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgICBoMntcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS43ZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiLi9IYW5naW5nIExldHRlcnMudHRmXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gcmVxdWlyZShcIi4vU2Vnb2UgUHJpbnQgQm9sZC50dGZcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXHJcXG4gZm9udC1mYW1pbHk6ICdIYW5naW5nIExldHRlcnMnO1xcclxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxufVxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlNlZ29lIFByaW50IEJvbGRcXFwiO1xcclxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgJy4uL2Nzcy9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcCc7XHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvanMvYm9vdHN0cmFwJztcclxuaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC91dGlsJztcclxuaW1wb3J0ICdqcXVlcnkvc3JjL2pxdWVyeSdcclxuaW1wb3J0ICdqcXVlcnkvZGlzdC9qcXVlcnknO1xyXG5pbXBvcnQgJ3BvcHBlci5qcyc7XHJcbmltcG9ydCBBcnJvd0Rvd24gZnJvbSAnLi4vaW1nL2Rvd25BcnJvdy5wbmcnO1xyXG5pbXBvcnQgQXJyb3dVcCBmcm9tICcuLi9pbWcvdXBBcnJvdy5wbmcnO1xyXG5pbXBvcnQgc2xpZDEgZnJvbSBcIi4vc2xpZGVzL3NsaWRlMVwiO1xyXG5pbXBvcnQgc2xpZDIgZnJvbSBcIi4vc2xpZGVzL3NsaWRlMlwiO1xyXG5pbXBvcnQgc2xpZDMgZnJvbSBcIi4vc2xpZGVzL3NsaWRlM1wiO1xyXG5pbXBvcnQgc2xpZDQgZnJvbSBcIi4vc2xpZGVzL3NsaWRlNFwiO1xyXG5pbXBvcnQgc2xpZDUgZnJvbSBcIi4vc2xpZGVzL3NsaWRlNVwiO1xyXG5cclxuY29uc3Qgb2JqID0ge1xyXG4gICAgY29udGFpbmVyIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpLFxyXG4gICAgbWVudUJ1dHRvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtYnRuJyksXHJcbiAgICBkaXZBcnJvd1VwOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGl2QXJyb3dVUCcpLFxyXG4gICAgZGl2QXJyb3dEb3duOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGl2QXJyb3dEb3duJyksXHJcbiAgICBtb2RhbFdpbmRvdzogbnVsbCxcclxuICAgIG9wZW5Nb2RhbCAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdHMnKSxcclxuICAgIGNsb3NlTW9kYWwgOiBudWxsLFxyXG4gICAgY29udGFjdHMgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNDb250YWN0cycpLFxyXG4gICAgdGVtcGxhdGUgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1RlbXBsYXRlcycpLFxyXG4gICAgQXJyb3dVcCAgIDogbmV3IEltYWdlKCksXHJcbiAgICBBcnJvd0Rvd24gOiBuZXcgSW1hZ2UoKSxcclxuICAgIG1hc3NTbGlkZXM6IFtdLFxyXG4gICAgaW5kZXggICAgIDogbnVsbCxcclxuICAgIGluaXRpYWxYICA6IG51bGwsXHJcbiAgICBpbml0aWFsWSAgOm51bGxcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBzbGlkZXJDb250YWluZXIoKXtcclxuXHJcbiAgICBjb25zdCBjb250ID0gb2JqLmNvbnRhaW5lcjtcclxuICAgIGNvbnQuYXBwZW5kQ2hpbGQoc2xpZDUpO1xyXG4gICAgY29udC5hcHBlbmRDaGlsZChzbGlkNCk7XHJcbiAgICBjb250LmFwcGVuZENoaWxkKHNsaWQzKTtcclxuICAgIGNvbnQuYXBwZW5kQ2hpbGQoc2xpZDIpO1xyXG4gICAgY29udC5hcHBlbmRDaGlsZChzbGlkMSk7XHJcblxyXG4gICAgb2JqLm1hc3NTbGlkZXMgPSBjb250LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkJyk7XHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIGFycm93QnV0dG9ucygpIHtcclxuXHJcbiAgICBjb25zdCBkaXZBcnJvd1VwID0gb2JqLmRpdkFycm93VXAsXHJcbiAgICAgICAgICBkaXZBcnJvd0Rvd24gPSBvYmouZGl2QXJyb3dEb3duO1xyXG5cclxuICAgIG9iai5BcnJvd1VwLnNyYyA9IEFycm93VXA7XHJcbiAgICBvYmouQXJyb3dVcC5hbHQgPSAnYXJyb3dVcCc7XHJcbiAgICBkaXZBcnJvd1VwLmFwcGVuZENoaWxkKCBvYmouQXJyb3dVcCk7XHJcblxyXG4gICAgb2JqLkFycm93RG93bi5zcmMgPSBBcnJvd0Rvd247XHJcbiAgICBvYmouQXJyb3dEb3duLmFsdCA9ICdhcnJvd0Rvd24nO1xyXG4gICAgZGl2QXJyb3dEb3duLmFwcGVuZENoaWxkKG9iai5BcnJvd0Rvd24pO1xyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gbGFzdEl0ZW1PZkFycigpIHtcclxuICAgY29uc3QgaW5kZXggPSBvYmouaW5kZXg7XHJcblxyXG4gICBpZihpbmRleCA9PT0gMiAmJiBvYmouZGl2QXJyb3dVcC5jbGFzc0xpc3QuY29udGFpbnMoJ25vbmUnKSkge1xyXG4gICAgICAgb2JqLmRpdkFycm93VXAuY2xhc3NMaXN0LnJlbW92ZSgnbm9uZScpO1xyXG4gICAgICAgb2JqLmRpdkFycm93RG93bi5jbGFzc0xpc3QuYWRkKCdub25lJyk7XHJcbiAgICAgICByZXR1cm47XHJcbiAgIH1cclxuICAgaWYoaW5kZXggPT09IDMgJiYgb2JqLmRpdkFycm93RG93bi5jbGFzc0xpc3QuY29udGFpbnMoJ25vbmUnKSl7XHJcbiAgICAgICBvYmouZGl2QXJyb3dVcC5jbGFzc0xpc3QuYWRkKCdub25lJyk7XHJcbiAgICAgICBvYmouZGl2QXJyb3dEb3duLmNsYXNzTGlzdC5yZW1vdmUoJ25vbmUnKTtcclxuICAgICAgIHJldHVybjtcclxuXHJcbiAgIH1lbHNlIHtcclxuICAgICAgIHJldHVybjtcclxuICAgfVxyXG5cclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBzbGlkZXJHb1VwKGl0ZW0pIHtcclxuXHJcbiAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3cnKSkge1xyXG4gICAgICAgIGlmICh3aW5kb3cuc2NyZWVuLndpZHRoID4gMTEwMCkge1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5uZXh0RWxlbWVudFNpYmxpbmcgJiYgaXRlbS5uZXh0RWxlbWVudFNpYmxpbmcgIT09IG9iai5kaXZBcnJvd1VwXHJcbiAgICAgICAgICAgICAgICAmJiBpdGVtLm5leHRFbGVtZW50U2libGluZy5pZCAhPT0gJ0NvbnRhY3RzJykge1xyXG4gICAgICAgICAgICAgICAgbGFzdEl0ZW1PZkFycigpO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93JywgJ3VwJyk7XHJcbiAgICAgICAgICAgICAgICBpdGVtLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKCdkb3duJyk7XHJcbiAgICAgICAgICAgICAgICBpdGVtLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdzaG93JywgJ3VwJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nICYmIGl0ZW0ucHJldmlvdXNFbGVtZW50U2libGluZyAhPT0gb2JqLmRpdkFycm93RG93bikge1xyXG4gICAgICAgICAgICAgICAgaWYoaXRlbS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmlkID09PSAnQ29udGFjdHMnKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdEl0ZW1PZkFycigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgndXBXJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG5cclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIHNsaWRlckdvRG93bihpdGVtKSB7XHJcblxyXG4gICAgaWYoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3cnKSkge1xyXG4gICAgICAgIGlmICh3aW5kb3cuc2NyZWVuLndpZHRoID4gMTEwMCkge1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nICYmIGl0ZW0ucHJldmlvdXNFbGVtZW50U2libGluZyAhPT0gb2JqLmRpdkFycm93RG93blxyXG4gICAgICAgICAgICAgICAgJiYgaXRlbS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmlkICE9PSAnQ29udGFjdHMnKSB7XHJcbiAgICAgICAgICAgICAgICBsYXN0SXRlbU9mQXJyKCk7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnLCAndXAnKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnZG93bicpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nICYmIGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nICE9PSBvYmouZGl2QXJyb3dVcCkge1xyXG4gICAgICAgICAgICAgICAgaWYoaXRlbS5uZXh0RWxlbWVudFNpYmxpbmcuaWQgPT09ICdDb250YWN0cycpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsYXN0SXRlbU9mQXJyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaXRlbS5pZCA9PT0gJ1RlbXBsYXRlcycpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpdGVtLmxhc3RFbGVtZW50Q2hpbGQuc2Nyb2xsVG9wID09PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycsICd1cCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgndXBXJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycsICdkb3duVycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKCd1cFcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnc2hvdycsICdkb3duVycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBjaGFuZ2VTbGlkZXJVUCgpIHtcclxuICAgIGxldCBtYXNzID0gb2JqLm1hc3NTbGlkZXMsXHJcbiAgICAgICAgbGVuID0gbnVsbDtcclxuICAgICAgICAod2luZG93LnNjcmVlbi53aWR0aCA+IDExMDApID8gbGVuID0gbWFzcy5sZW5ndGggLSAxOiBsZW4gPSBtYXNzLmxlbmd0aDtcclxuICAgIG9iai5BcnJvd1VwLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1CdXR0b24nKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgb2JqLmluZGV4ID0gaTtcclxuICAgICAgICBpZihzbGlkZXJHb1VwKG1hc3NbaV0pKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gY2hhbmdlU2xpZGVyRE9XTigpIHtcclxuICAgIGxldCBtYXNzID0gb2JqLm1hc3NTbGlkZXMsXHJcbiAgICAgICAgbGVuID0gbnVsbDtcclxuICAgICh3aW5kb3cuc2NyZWVuLndpZHRoID4gMTEwMCkgPyBsZW4gPSBtYXNzLmxlbmd0aDogbGVuID0gbWFzcy5sZW5ndGgtMTtcclxuICAgIG9iai5BcnJvd1VwLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1CdXR0b24nKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxlbjsgaSsrKXtcclxuICAgICAgICBvYmouaW5kZXggPSBpO1xyXG4gICAgICAgIGlmKHNsaWRlckdvRG93bihtYXNzW2ldKSkgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVN3aXBlIFVwIC8gRG93biAvIExlZnQgLyBSaWdodC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gc3RhcnRUb3VjaChlKSB7XHJcbiAgICAgICBvYmouaW5pdGlhbFggPSBlLnRvdWNoZXNbMF0uY2xpZW50WDtcclxuICAgICAgIG9iai5pbml0aWFsWSA9IGUudG91Y2hlc1swXS5jbGllbnRZO1xyXG59XHJcbmZ1bmN0aW9uIG1vdmVUb3VjaChlKSB7XHJcblxyXG4gICAgaWYgKG9iai5pbml0aWFsWCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob2JqLmluaXRpYWxZID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBjdXJyZW50WCA9IGUudG91Y2hlc1swXS5jbGllbnRYLFxyXG4gICAgICAgICAgICBjdXJyZW50WSA9IGUudG91Y2hlc1swXS5jbGllbnRZO1xyXG5cclxuICAgICAgICBsZXQgZGlmZlggPSBvYmouaW5pdGlhbFggLSBjdXJyZW50WCxcclxuICAgICAgICAgICAgZGlmZlkgPSBvYmouaW5pdGlhbFkgLSBjdXJyZW50WTtcclxuXHJcblxyXG5cclxuICAgICAgICBpZiAoTWF0aC5hYnMoZGlmZlgpID4gTWF0aC5hYnMoZGlmZlkpKSB7XHJcbiAgICAgICAgICAgIC8vIHNsaWRpbmcgaG9yaXpvbnRhbGx5XHJcbiAgICAgICAgICAgIGlmIChkaWZmWCA+IDApIHtcclxuICAgICAgICAgICAgICAgIC8vIHN3aXBlZCBsZWZ0XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzd2lwZWQgcmlnaHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHNsaWRpbmcgdmVydGljYWxseVxyXG4gICAgICAgICAgICBpZiAoZGlmZlkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzd2lwZWQgdXBcclxuICAgICAgICAgICAgICAgY2hhbmdlU2xpZGVyVVAoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIHN3aXBlZCBkb3duXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VTbGlkZXJET1dOKCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvYmouaW5pdGlhbFggPSBudWxsO1xyXG4gICAgICAgIG9iai5pbml0aWFsWSA9IG51bGw7XHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIGJ1dHRvbkRvd24oZXZlbnQpIHtcclxuICAgIGlmKHdpbmRvdy5zY3JlZW4ud2lkdGggPiAxMTAwKSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdBcnJvd0Rvd24nKSB7XHJcbiAgICAgICAgICAgIGNoYW5nZVNsaWRlckRPV04oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdBcnJvd1VwJykge1xyXG4gICAgICAgICAgICBjaGFuZ2VTbGlkZXJVUCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICAgIGlmIChldmVudC5jb2RlID09PSAnQXJyb3dEb3duJykge1xyXG4gICAgICAgICAgICBjaGFuZ2VTbGlkZXJVUCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0Fycm93VXAnKSB7XHJcbiAgICAgICAgICAgIGNoYW5nZVNsaWRlckRPV04oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBtb3VzZVdoZWVsKGUpIHtcclxuXHJcbiAgICBsZXQgZGVsdGEgPSBlLmRlbHRhWSB8fCBlLmRldGFpbCB8fCBlLndoZWVsRGVsdGE7XHJcbiAgICBpZih3aW5kb3cuc2NyZWVuLndpZHRoID4gMTEwMCl7XHJcbiAgICAgICAgZGVsdGEgPiAwID8gY2hhbmdlU2xpZGVyRE9XTigpXHJcbiAgICAgICAgICAgIDogICggd2luZG93Lm9ubW91c2V3aGVlbCA9IG51bGwgLFxyXG4gICAgICAgICAgICAgICAgY2hhbmdlU2xpZGVyVVAoKSxcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PiB3aW5kb3cub25tb3VzZXdoZWVsID0gbW91c2VXaGVlbCwgNTAwKSk7XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgICAgZGVsdGEgPiAwID8gY2hhbmdlU2xpZGVyVVAoKVxyXG4gICAgICAgICAgICA6ICAoIHdpbmRvdy5vbm1vdXNld2hlZWwgPSBudWxsLFxyXG4gICAgICAgICAgICAgICAgY2hhbmdlU2xpZGVyRE9XTigpLFxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+IHdpbmRvdy5vbm1vdXNld2hlZWwgPSBtb3VzZVdoZWVsLCA1MDApKTtcclxuICAgIH1cclxuXHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBzdGFydExpc3RlbmVyKCl7XHJcbiAgICBkb2N1bWVudC5vbmtleWRvd24gPSBidXR0b25Eb3duO1xyXG4gICAgd2luZG93Lm9ubW91c2V3aGVlbCA9IG1vdXNlV2hlZWw7XHJcbiAgICBkb2N1bWVudC5vbnRvdWNoc3RhcnQgPSBzdGFydFRvdWNoO1xyXG4gICAgZG9jdW1lbnQub250b3VjaG1vdmUgPSBtb3ZlVG91Y2g7XHJcblxyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gc3RvcExpc3RlbmVyKCl7XHJcbiAgICBkb2N1bWVudC5vbmtleWRvd24gPSBudWxsO1xyXG4gICAgd2luZG93Lm9ubW91c2V3aGVlbCA9IG51bGw7XHJcbiAgICBkb2N1bWVudC5vbnRvdWNoc3RhcnQgPSBudWxsO1xyXG4gICAgZG9jdW1lbnQub250b3VjaG1vdmUgPSBudWxsO1xyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gcmVtb3ZlQ2hhbmdlKGl0ZW0pIHtcclxuICAgIGl0ZW0uc3R5bGUudHJhbnNmb3JtID0gJ25vbmUnO1xyXG4gICAgaXRlbS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBgMGA7XHJcbiAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnVPcGVuJyk7XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIGNob29zZVBhZ2UoZSkge1xyXG4gICAgbGV0IG1hc3MgPSBvYmoubWFzc1NsaWRlcyxcclxuICAgICAgICBpZCA9IHRoaXMuaWQsXHJcbiAgICAgICAgZmxhZyA9IGZhbHNlLFxyXG4gICAgICAgIGxlbiA9IG1hc3MubGVuZ3RoO1xyXG5cclxuXHJcbiAgICBmb3IgKGxldCBpID0gbGVuLTE7IGkgPiAwOyBpLS0pe1xyXG5cclxuICAgICAgICBpZihpZCA9PT0gJ0NvbnRhY3RzJykge1xyXG4gICAgICAgICAgICBjbG9zZU1lbnUobWFzc1tpXSk7XHJcbiAgICAgICAgICAgIG1vZGFsV2luZG93KCk7XHJcblxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpZihtYXNzW2ldLmlkID09PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgb2JqLmluZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIG1hc3NbaV0uY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgIGxhc3RJdGVtT2ZBcnIoKTtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUNoYW5nZShtYXNzW2ldKTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYoZmxhZyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYod2luZG93LnNjcmVlbi53aWR0aCA+IDExMDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFzc1tpXS5jbGFzc0xpc3QuYWRkKCd1cCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYod2luZG93LnNjcmVlbi53aWR0aCA+IDExMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFzc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93JywgJ3VwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc3NbaV0uY2xhc3NMaXN0LmFkZCgnZG93bicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFzc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc3NbaV0uY2xhc3NMaXN0LmFkZCgndXBXJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2hhbmdlKG1hc3NbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0TGlzdGVuZXIoKTtcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gY2xvc2VNZW51KGl0ZW0pIHtcclxuICAgIGl0ZW0uc3R5bGUudHJhbnNmb3JtID0gJ25vbmUnO1xyXG4gICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51T3BlbicpO1xyXG4gICAgaXRlbS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBgMGA7XHJcbiAgICBvYmouZGl2QXJyb3dEb3duLmNsYXNzTGlzdC5yZW1vdmUoJ25vbmUnKTtcclxuICAgIGl0ZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaG9vc2VQYWdlKTtcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIG1lbnVTaG93KCkge1xyXG5cclxuICAgIGNvbnN0IG1hc3MgPSBvYmoubWFzc1NsaWRlcyxcclxuICAgICAgICBsZW4gPSBtYXNzLmxlbmd0aDtcclxuICAgIGxldCB0cmFuc0Zvcm0gPSAwO1xyXG5cclxuICAgICAgICBtYXNzLmZvckVhY2goIGVsID0+IHtcclxuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgndXAnLCAnZG93bicsICd1cFcnLCAnZG93blcnLCdzaG93Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbWFzc1tsZW4tMV0uY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKXtcclxuXHJcbiAgICAgICAgaWYoIW1hc3NbaV0uc3R5bGUudHJhbnNmb3JtIHx8IG1hc3NbaV0uc3R5bGUudHJhbnNmb3JtID09PSAnbm9uZScpe1xyXG4gICAgICAgICAgICBpZihpKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JlZW4ud2lkdGggPCAxMTAwID8gdHJhbnNGb3JtICs9IDcwIDogdHJhbnNGb3JtICs9IDgwO1xyXG4gICAgICAgICAgICAgICAgbWFzc1tpXS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBgOHB4IDhweCAwIDBgO1xyXG4gICAgICAgICAgICAgICAgbWFzc1tpXS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke3RyYW5zRm9ybX1weClgO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYXNzW2ldLmNsYXNzTGlzdC5hZGQoJ21lbnVPcGVuJyk7XHJcbiAgICAgICAgICAgIG1hc3NbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaG9vc2VQYWdlKTtcclxuICAgICAgICAgICAgb2JqLmRpdkFycm93RG93bi5jbGFzc0xpc3QuYWRkKCdub25lJyk7XHJcbiAgICAgICAgICAgIG9iai5kaXZBcnJvd1VwLmNsYXNzTGlzdC5hZGQoJ25vbmUnKTtcclxuICAgICAgICAgICAgc3RvcExpc3RlbmVyKCk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBjbG9zZU1lbnUobWFzc1tpXSk7XHJcbiAgICAgICAgICAgIHN0YXJ0TGlzdGVuZXIoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIGNyZWF0TW9kYWxXaW5kb3coKSB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgICAgICAgIHN0ciA9IGA8ZGl2IGNsYXNzPVwibW9kYWxGb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+0KHQstGP0LbQuNGC0LXRgdGMINGBINC90LDQvNC4PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+U2t5cGU6IF9fX19fX19fX19fX19fX19fPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VmliZTogX19fX19fX19fX19fX19fX19fPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGVsZWdyYW06IF9fX19fX19fX19fX19fPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0blwiPtCX0LDQutGA0YvRgtGMPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XHJcblxyXG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCdtb2RhbCcpO1xyXG4gICAgZGl2LmlubmVySFRNTCA9IHN0cjtcclxuICAgIG9iai5tb2RhbFdpbmRvdyA9IGRpdjtcclxuICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGRpdixvYmouY29udGFpbmVyLm5leHRFbGVtZW50U2libGluZyk7XHJcbiAgICBvYmouY2xvc2VNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4nKTtcclxufVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBtb2RhbFdpbmRvdygpe1xyXG4gICAgY29uc3QgbW9kYWwgPSBvYmoubW9kYWxXaW5kb3csXHJcbiAgICAgICAgICBidG5DbG9zZSA9IG9iai5jbG9zZU1vZGFsO1xyXG5cclxuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsQWN0aXZlJyk7XHJcbiAgICBzdG9wTGlzdGVuZXIoKTtcclxuICAgIGJ0bkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XHJcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWxBY3RpdmUnKTtcclxuICAgICAgICBzdGFydExpc3RlbmVyKCk7XHJcbiAgICB9KTtcclxufVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5vYmoubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1lbnVTaG93KTtcclxubGV0IHZoID0gd2luZG93LmlubmVySGVpZ2h0ICogMC4wMTtcclxuLy8gVGhlbiB3ZSBzZXQgdGhlIHZhbHVlIGluIHRoZSAtLXZoIGN1c3RvbSBwcm9wZXJ0eSB0byB0aGUgcm9vdCBvZiB0aGUgZG9jdW1lbnRcclxuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZoJywgYCR7dmh9cHhgKTtcclxuLy9cclxuLy8g0YHQu9GD0YjQsNC10Lwg0YHQvtCx0YvRgtC40LUgcmVzaXplXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICAvLyDQv9C+0LvRg9GH0LDQtdC8INGC0LXQutGD0YnQtdC1INC30L3QsNGH0LXQvdC40LUg0LLRi9GB0L7RgtGLXHJcbiAgICBsZXQgdmggPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjAxO1xyXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZoJywgYCR7dmh9cHhgKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBvcmllbnRhdGlvblNjcmVlbigpe1xyXG4gICAgbGV0IGxvY2sgPSB3aW5kb3cuc2NyZWVuLm9yaWVudGF0aW9uLmxvY2soXCJwb3J0cmFpdFwiKXx8IHdpbmRvdy5zY3JlZW4ubG9ja09yaWVudGF0aW9uKFwicG9ydHJhaXRcIik7XHJcbiAgICByZXR1cm4gbG9jaztcclxufVxyXG5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuc2xpZGVyQ29udGFpbmVyKCk7XHJcbmNyZWF0TW9kYWxXaW5kb3coKTtcclxuYXJyb3dCdXR0b25zKCk7XHJcbnN0YXJ0TGlzdGVuZXIoKTtcclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBDYXQgZnJvbSAnLi4vLi4vaW1nL2NhdC5wbmcnO1xyXG5pbXBvcnQgTW9vbiBmcm9tICcuLi8uLi9pbWcvTW9vbi5wbmcnO1xyXG5pbXBvcnQgc3RhciBmcm9tICcuLi8uLi9pbWcvc3Rhci5wbmcnO1xyXG5pbXBvcnQgIENvbW1lbnQgZnJvbSAnLi4vLi4vaW1nL2NvbW1lbnRUZXh0LnBuZyc7XHJcbmltcG9ydCBzbmFpbCBmcm9tICcuLi8uLi9pbWcvZ3Jhc3NTbmFpbC5wbmcnO1xyXG5cclxuY29uc3Qgb2JqID0ge1xyXG4gICAgc2xpZGUgICAgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgIG1haW4gICAgIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICB0b3BCbG9jayA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgYm90dG9tQmxvY2sgOmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgYmxvY2tDYXQgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgIGJsb2NrTW9vbjogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICBjYXQgICAgICA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgY29tbSAgICAgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgIHdvcmRzQmxvY2s6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgaW5ibFdvcmRzIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICBsZWZ0IDogMzAsXHJcbiAgICBDYXQgIDogbmV3IEltYWdlKCksXHJcbiAgICBNb29uIDogbmV3IEltYWdlKCksXHJcbiAgICBDb21tZW50IDogbmV3IEltYWdlKCksXHJcbiAgICBTbmFpbCA6IG5ldyBJbWFnZSgpXHJcbn1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBhZGRJbWFnZSgpIHtcclxuXHJcbiAgICBvYmouTW9vbi5zcmMgPSBNb29uO1xyXG4gICAgb2JqLk1vb24uYWx0ID0gJ01vb24nO1xyXG4gICAgb2JqLk1vb24uY2xhc3NMaXN0LmFkZCgnbW9vbicpO1xyXG4gICAgb2JqLmJsb2NrTW9vbi5hcHBlbmRDaGlsZChvYmouTW9vbik7XHJcblxyXG4gICAgb2JqLkNhdC5zcmMgPSBDYXQ7XHJcbiAgICBvYmouQ2F0LmFsdCA9ICdDYXQnO1xyXG4gICAgb2JqLmNhdC5hcHBlbmRDaGlsZChvYmouQ2F0KTtcclxuXHJcbiAgICBvYmouQ29tbWVudC5zcmMgPSBDb21tZW50O1xyXG4gICAgb2JqLkNvbW1lbnQuYWx0ID0gJ0NvbW1lbnQnO1xyXG4gICAgb2JqLmNvbW0uYXBwZW5kQ2hpbGQob2JqLkNvbW1lbnQpO1xyXG5cclxuICAgIG9iai5TbmFpbC5zcmMgPSBzbmFpbDtcclxuICAgIG9iai5TbmFpbC5hbHQgPSAnU25haWwnO1xyXG4gICAgb2JqLlNuYWlsLmNsYXNzTGlzdC5hZGQoJ2dyYXNzJyk7XHJcbiAgICBvYmoubWFpbi5hcHBlbmRDaGlsZChvYmouU25haWwpO1xyXG5cclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gY2xvdWRzSW1nKCkge1xyXG4gICAgbGV0IGRpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgICAgICBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICAgICAgZGl2MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGRpdjEuY2xhc3NMaXN0LmFkZCgnY2xvdWQxJywnY2xvdWQnLCAnbW92ZUNsb3VkXzEnKTtcclxuICAgIG9iai5tYWluLmFwcGVuZENoaWxkKGRpdjEpO1xyXG5cclxuICAgIGRpdjIuY2xhc3NMaXN0LmFkZCgnY2xvdWQyJywgJ2Nsb3VkJywgJ21vdmVDbG91ZF8yJyk7XHJcbiAgICBvYmoubWFpbi5hcHBlbmRDaGlsZChkaXYyKTtcclxuXHJcbiAgICBkaXYzLmNsYXNzTGlzdC5hZGQoJ2Nsb3VkMycsICdjbG91ZCcsICdtb3ZlQ2xvdWRfMycpO1xyXG4gICAgb2JqLm1haW4uYXBwZW5kQ2hpbGQoZGl2Myk7XHJcblxyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIG1vdmVNb29uKCkge1xyXG4gICAgbGV0IG1vb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9vbicpLFxyXG4gICAgICAgIHRyYW5zZiA9IChtb29uLnN0eWxlLnRyYW5zZm9ybSkucmVwbGFjZSgvcm90YXRlXFwoLywnJyksXHJcbiAgICAgICAgbnVtID0gdHJhbnNmLnJlcGxhY2UoL2RlZ1xcKS8sJycpO1xyXG4gICAgICAgbnVtID0gTnVtYmVyKG51bSkgKyAgMC41O1xyXG4gICAgaWYobW9vbi5zdHlsZS50cmFuc2Zvcm0gPT09ICcnKXtcclxuICAgICAgICBudW0gPSAwO1xyXG4gICAgfVxyXG4gICAgbW9vbi5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7bnVtfWRlZylgO1xyXG5cclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gY2hhbmdlUG9zaXRpb25TdGFycygpIHtcclxuICAgIGxldCBtYXNzU3RhcnMgPSBvYmoubWFpbi5xdWVyeVNlbGVjdG9yQWxsKCcuc3RhcicpO1xyXG5cclxuICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbWFzc1N0YXJzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgbGV0IHRvcCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSooNDAgLSA1KSArIDUpLFxyXG4gICAgICAgICAgICAgbGVmdCA9ICBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqKDEwMCAtIDEpICsgMSk7XHJcbiAgICAgICAgICAgICBtYXNzU3RhcnNbaV0uc3R5bGUudG9wID0gdG9wICsgJyUnO1xyXG4gICAgICAgICAgICAgbWFzc1N0YXJzW2ldLnN0eWxlLmxlZnQgPSBsZWZ0ICsgJyUnO1xyXG4gICAgIH1cclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gcG9zaXRpb25TdGFyKG5ld1N0YXIpIHtcclxuXHJcbiAgICBsZXQgdG9wID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKig0MCAtIDUpICsgNSksXHJcbiAgICAgICAgbGVmdCA9ICBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqKDEwMCAtIDEpICsgMSk7XHJcblxyXG4gICAgICAgIG5ld1N0YXIuc3R5bGUudG9wID0gdG9wICsgJyUnO1xyXG4gICAgICAgIG5ld1N0YXIuc3R5bGUubGVmdCA9IGxlZnQgKyAnJSc7XHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIHNpemVTdGFyKCkge1xyXG4gICAgbGV0IHNpemUgPSA0MDtcclxuICAgIGlmKHdpbmRvdy5zY3JlZW4ud2lkdGggPCAxMDAwKXtcclxuICAgICAgICBzaXplID0gMjA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKihzaXplIC0gNSkgKyA1KTtcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIHN0YXJzKCkge1xyXG5cclxuICAgIGxldCBhbW91bnQgPSAwO1xyXG5cclxuICAgIGlmKHdpbmRvdy5zY3JlZW4ud2lkdGggPCAxMDAwKXtcclxuICAgICAgICBhbW91bnQgPSBNYXRoLnJhbmRvbSgpKigxMCAtIDUpICsgNTtcclxuICAgIH1lbHNlIHtcclxuICAgICAgICBhbW91bnQgPSBNYXRoLnJhbmRvbSgpKigyMCAtIDEwKSArIDEwO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTWF0aC5yb3VuZChhbW91bnQpOyBpKyspe1xyXG4gICAgICAgIGxldCBTdGFyID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgIFN0YXIuc3JjID0gc3RhcjtcclxuICAgICAgICAgU3Rhci5hbHQgPSAnc3Rhcic7XHJcbiAgICAgICAgIFN0YXIuY2xhc3NMaXN0LmFkZCgnc3RhcicpO1xyXG4gICAgICAgICBTdGFyLnN0eWxlLmhlaWdodCA9IHNpemVTdGFyKCkgKyAncHgnO1xyXG4gICAgICAgICBwb3NpdGlvblN0YXIoU3Rhcik7XHJcbiAgICAgICAgIG9iai5tYWluLmFwcGVuZENoaWxkKFN0YXIpO1xyXG5cclxuICAgIH1cclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIHdvcmRzKCkge1xyXG4gICAgbGV0IG1hc3NXb3JkcyA9IFsnJmx0O2I+JywgJyZsdDtoMT4nLCAnJmx0O2Rpdj4nLCAnJmx0O3A+J10sXHJcbiAgICAgICAgZGl2ID0gb2JqLmluYmxXb3JkcyxcclxuICAgICAgICBsZWZ0ID0gMCxcclxuICAgICAgICBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLFxyXG4gICAgICAgIGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWFzc1dvcmRzLmxlbmd0aCksXHJcbiAgICAgICAgbGVuID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDUgLSAyKSArIDIpLFxyXG4gICAgICAgIG51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMzUgLSA2MCkgKyA2MCk7XHJcblxyXG4gICAgICAgIG51bSA8IDkwID8gbGVmdCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg5MCAtIDQ1KSArIDQ1KTpcclxuICAgICAgICAgICAgICAgICAgIGxlZnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTI1IC0gOTApICsgOTApO1xyXG4gICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWxlZnQnLCBgJHtsZWZ0fSVgKTtcclxuICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1udW0nLCBgJHtudW19ZGVnYCk7XHJcblxyXG5cclxuICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSBgJHttYXNzV29yZHNbaW5kZXhdfWA7XHJcbiAgICAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcbiAgICAgICAgICAgICAgICAgICAvLyBzcGFuLnN0eWxlLmxlZnQgPSBudW0gKyAnJSc7XHJcbiAgICAgICAgICAgICAgICAgICAvLyBzcGFuLnN0eWxlLnRvcCA9ICcxMTAlJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ21vdmVXJyk7XHJcblxyXG4gICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57c3Bhbi5yZW1vdmUoKTt9LDEwMDAwKTtcclxuXHJcbiAgICAgICAgICAgfVxyXG5cclxuICAgIC8vIHNwYW4uc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgke251bX1kZWcpYDtcclxuXHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIGNvbnRhaW5lcigpIHtcclxuICAgIGNvbnN0IHNsaWQxID0gb2JqLnNsaWRlLFxyXG4gICAgICAgICAgbWFpbiAgPSBvYmoubWFpbixcclxuICAgICAgICAgIHRvcEJsID0gb2JqLnRvcEJsb2NrLFxyXG4gICAgICAgICAgYnR0bUJsID0gb2JqLmJvdHRvbUJsb2NrLFxyXG4gICAgICAgICAgYmxvY2tDYXQgPSBvYmouYmxvY2tDYXQsXHJcbiAgICAgICAgICBibG9ja01vb24gPSBvYmouYmxvY2tNb29uLFxyXG4gICAgICAgICAgYmxvY2tXb3JkcyA9IG9iai53b3Jkc0Jsb2NrLFxyXG4gICAgICAgICAgaW5ibFcgPSBvYmouaW5ibFdvcmRzLFxyXG4gICAgICAgICAgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyksXHJcbiAgICAgICAgICBjYXQgPSBvYmouY2F0LFxyXG4gICAgICAgICAgY29tbSA9IG9iai5jb21tO1xyXG5cclxuICAgIHNsaWQxLmNsYXNzTGlzdC5hZGQoJ3NsaWQnLCAnc2xpZDEnLCAnc2hvdycpO1xyXG4gICAgc2xpZDEuc3R5bGUuaGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCArICdweCc7XHJcbiAgICBzbGlkMS5pZCA9ICdNYWluJztcclxuXHJcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW5EaXYnKTtcclxuICAgIHNsaWQxLmFwcGVuZENoaWxkKG1haW4pO1xyXG5cclxuICAgIHRvcEJsLmNsYXNzTGlzdC5hZGQoJ3RvcEJsb2NrJyk7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKHRvcEJsKTtcclxuXHJcbiAgICBidHRtQmwuY2xhc3NMaXN0LmFkZCgnYm90dG9tQmxvY2snKTtcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoYnR0bUJsKTtcclxuXHJcbiAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ2gxJyk7XHJcbiAgICBuYW1lLmlubmVySFRNTCA9ICdBTlkgV0VCJztcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQobmFtZSk7XHJcblxyXG5cclxuICAgIGJsb2NrQ2F0LmNsYXNzTGlzdC5hZGQoJ2Jsb2NrQ2F0Jyk7XHJcbiAgICBidHRtQmwuYXBwZW5kQ2hpbGQoYmxvY2tDYXQpO1xyXG5cclxuICAgIGNhdC5jbGFzc0xpc3QuYWRkKCdjYXQnKTtcclxuICAgIGNvbW0uY2xhc3NMaXN0LmFkZCgnY29tbWVudCcpO1xyXG4gICAgYmxvY2tDYXQuYXBwZW5kQ2hpbGQoY2F0KTtcclxuICAgIGJsb2NrQ2F0LmFwcGVuZENoaWxkKGNvbW0pO1xyXG5cclxuICAgIGJsb2NrTW9vbi5jbGFzc0xpc3QuYWRkKCdibG9ja01vb24nKTtcclxuICAgIHRvcEJsLmFwcGVuZENoaWxkKGJsb2NrTW9vbik7XHJcblxyXG4gICAgYmxvY2tXb3Jkcy5jbGFzc0xpc3QuYWRkKCd3b3Jkc0Jsb2NrJyk7XHJcbiAgICBibG9ja1dvcmRzLmFwcGVuZENoaWxkKGluYmxXKTtcclxuICAgIGJ0dG1CbC5hcHBlbmRDaGlsZChibG9ja1dvcmRzKTtcclxuXHJcbiAgICBhZGRJbWFnZSgpO1xyXG4gICAgc3RhcnMoKTtcclxuICAgIGNsb3Vkc0ltZygpO1xyXG4gICAgc2V0SW50ZXJ2YWwoY2hhbmdlUG9zaXRpb25TdGFycywgMjAwMDApO1xyXG4gICAgc2V0SW50ZXJ2YWwobW92ZU1vb24sMTAwMDApO1xyXG4gICAgc2V0SW50ZXJ2YWwobW92ZU1vb24sMTAwMDApO1xyXG4gICAgc2V0SW50ZXJ2YWwod29yZHMsIDUwMDApO1xyXG5cclxufVxyXG5cclxuY29udGFpbmVyKCk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgb2JqLnNsaWRlOyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5jb25zdCBzbGlkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuc2xpZDIuY2xhc3NMaXN0LmFkZCgnc2xpZCcsICdzbGlkMicpO1xyXG5zbGlkMi5zdHlsZS5oZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ICsgJ3B4Jztcclxuc2xpZDIuaW5uZXJIVE1MID0gYDxoMj7QnNGLINC/0YDQtdC00LvQsNCz0LDQtdC8PC9oMj5gO1xyXG5zbGlkMi5pZCA9ICdXZSBzdXBwb3NlJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzbGlkMjsiLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuY29uc3Qgb2JqID0ge1xyXG4gICAgc2xpZGUgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgIG1haW4gIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICBtYXNzQmxvY2tzIDogW10sXHJcblxyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBzaXplQmxvY2soc2l6ZSkge1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSooc2l6ZSAtIDE2MCkgKyAxNjApO1xyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gc2l6ZVNjcmVlbigpIHtcclxuICAgIGxldCBzaXplID0gMCxcclxuICAgICAgICBkb2NXaWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCouOCxcclxuICAgICAgICBkb2NIZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0Ki44O1xyXG5cclxuICAgIGRvY1dpZHRoID4gZG9jSGVpZ2h0ID9cclxuICAgICAgICBzaXplID0gTWF0aC5yb3VuZChkb2NIZWlnaHQgLyAyLjEpOlxyXG4gICAgICAgIHNpemUgPSBNYXRoLnJvdW5kKCBkb2NXaWR0aC8gMy4xKTtcclxuICAgIGlmKHdpbmRvdy5zY3JlZW4ud2lkdGggPCAxMDAwKXtcclxuICAgICAgICBzaXplID0gTWF0aC5yb3VuZChkb2NXaWR0aC8gMik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2l6ZTtcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gbmV3SGVpZ2h0KHBhcmVudCkge1xyXG4gICAgbGV0IGhlaWdodCA9IHBhcmVudC5jbGllbnRIZWlnaHQ7XHJcbiAgICBpZih3aW5kb3cuc2NyZWVuLndpZHRoIDwgOTAwKVxyXG4gICAge1xyXG4gICAgICAgIGhlaWdodCA9IHBhcmVudC5jbGllbnRXaWR0aC8yO1xyXG4gICAgfWVsc2Uge1xyXG4gICAgICAgIGhlaWdodCA9IHBhcmVudC5jbGllbnRXaWR0aC8zXHJcbiAgICB9XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKihoZWlnaHQgLSBoZWlnaHQvMykgKyBoZWlnaHQvMyk7XHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBuZXdXaWR0aChwYXJlbnQpIHtcclxuICAgIGxldCB3aWR0aCA9IDA7XHJcbiAgICBpZih3aW5kb3cuc2NyZWVuLndpZHRoIDwgOTAwKVxyXG4gICAge1xyXG4gICAgICAgIHdpZHRoID0gcGFyZW50LmNsaWVudFdpZHRoLzI7XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgICAgd2lkdGggPSBwYXJlbnQuY2xpZW50V2lkdGgvM1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSood2lkdGggLSB3aWR0aC8yKSArIHdpZHRoLzIpO1xyXG59XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBjcmVhdGVCbG9jayggdHlwZSwgc2l6ZSwgLi4uY2xhc3Nlcykge1xyXG4gICAgbGV0IGJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcclxuICAgICAgICBibG9jay5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xyXG4gICAgICAgIGJsb2NrLnN0eWxlLmhlaWdodCA9IHNpemVCbG9jayhzaXplKSArIFwicHhcIjtcclxuICAgICAgICBibG9jay5zdHlsZS53aWR0aCA9IHNpemVCbG9jayhzaXplKSArIFwicHhcIjtcclxuICAgICAgICByZXR1cm4gYmxvY2s7XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gbWFzc0Jsb2NrcygpIHtcclxuICAgbGV0IGxlbiA9IDE2LFxyXG4gICAgICAgc2l6ZSA9IHNpemVTY3JlZW4oKTtcclxuXHJcbiAgICAgICAgaWYod2luZG93LnNjcmVlbi53aWR0aCA8IDEwMDApe1xyXG4gICAgICAgICAgICBsZW4gPSAxMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKyl7XHJcbiAgICAgICAgbGV0IGRpdiA9IG51bGw7XHJcbiAgICAgICAgaWYoIWkpe1xyXG4gICAgICAgICAgICAgICBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2Jsb2NrJyxgYmxvY2tfJHtpKzF9YCk7XHJcbiAgICAgICAgICAgICAgIGRpdi5zdHlsZS5oZWlnaHQgPSBzaXplICsgJ3B4JztcclxuICAgICAgICAgICAgICAgZGl2LnN0eWxlLndpZHRoID0gc2l6ZSArICdweCc7XHJcbiAgICAgICAgICAgICAgIGRpdi5zdHlsZS56SW5kZXggPSB6SW5kZXgoKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgZGl2ID0gY3JlYXRlQmxvY2soJ2RpdicsIHNpemUsICdibG9jaycsYGJsb2NrXyR7aSsxfWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb2JqLm1hc3NCbG9ja3MucHVzaChkaXYpO1xyXG4gICAgfVxyXG5cclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBuZXdQb3NpdGlvblRvcChlbCkge1xyXG4gICAgbGV0IHBhcmVudCA9IGVsLm9mZnNldFBhcmVudCxcclxuICAgICAgICBlbEggPSBlbC5vZmZzZXRIZWlnaHQsXHJcbiAgICAgICAgcHJIID0gcGFyZW50Lm9mZnNldEhlaWdodCxcclxuICAgICAgICBlbmRQb2ludCA9IHBySCAtIGVsSDtcclxuXHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKihlbmRQb2ludCAtIDEgKyAxKSArIDEpO1xyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIG5ld1Bvc2l0aW9uTGVmdChlbCkge1xyXG4gICAgbGV0IHBhcmVudCA9IGVsLm9mZnNldFBhcmVudCxcclxuICAgICAgICBlbFcgPSBlbC5vZmZzZXRXaWR0aCxcclxuICAgICAgICBwclcgPSBwYXJlbnQub2Zmc2V0V2lkdGgsXHJcbiAgICAgICAgZW5kUG9pbnQgPSBwclcgLSBlbFc7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKihlbmRQb2ludCAtIDEgKyAxKSArIDEpO1xyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIHpJbmRleCgpIHtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqKDEwIC0gMSkgKyAxKTtcclxufVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuIGZ1bmN0aW9uIHBvc2l0aW9uQmxvY2soKSB7XHJcbiAgICBsZXQgbWFzcyA9IG9iai5tYXNzQmxvY2tzO1xyXG5cclxuICAgIG1hc3MuZm9yRWFjaChlbD0+e1xyXG4gICAgICAgIGVsLnN0eWxlLnRvcCA9IG5ld1Bvc2l0aW9uVG9wKGVsKSArICdweCc7XHJcbiAgICAgICAgZWwuc3R5bGUubGVmdCA9IG5ld1Bvc2l0aW9uTGVmdChlbCkgKyAncHgnO1xyXG4gICAgICAgIGVsLnN0eWxlLnpJbmRleCA9IHpJbmRleCgpO1xyXG4gICAgICAgIGVsLnN0eWxlLndpZHRoID0gbmV3V2lkdGgoZWwucGFyZW50RWxlbWVudCkgKydweCc7XHJcbiAgICAgICAgZWwuc3R5bGUuaGVpZ2h0ID0gbmV3SGVpZ2h0KGVsLnBhcmVudEVsZW1lbnQpICsgJ3B4JztcclxuICAgICAgICBlbC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICB9KVxyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gIGZpbGxNYWluKCkge1xyXG4gICAgbGV0IG1haW4gPSBvYmoubWFpbixcclxuICAgICAgICBtYXNzID0gb2JqLm1hc3NCbG9ja3M7XHJcblxyXG4gICAgbWFzcy5mb3JFYWNoKGVsPT57XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChlbCk7XHJcbiAgICB9KTtcclxufVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIGNvbnRhaW5lcigpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IG9iai5zbGlkZSxcclxuICAgICAgICBtYWluID0gb2JqLm1haW4sXHJcbiAgICAgICAgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcblxyXG5cclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzbGlkJywgJ3NsaWQzJyk7XHJcbiAgICBjb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCArICdweCc7XHJcbiAgICBjb250YWluZXIuaWQgPSAnT3VyIHdvcmsnO1xyXG5cclxuICAgIG5hbWUuaW5uZXJIVE1MID0gJ9Cd0LDRiNC4INGA0LDQsdC+0YLRiyc7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmFtZSk7XHJcblxyXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluU2xpZGUzJyk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XHJcbiAgICBtYXNzQmxvY2tzKCk7XHJcbiAgICBmaWxsTWFpbigpO1xyXG4gICAgc2V0VGltZW91dCgoKT0+IHBvc2l0aW9uQmxvY2soKSwgMTApO1xyXG4gICAgc2V0SW50ZXJ2YWwoKCk9PiBwb3NpdGlvbkJsb2NrKCksIDUwMDAwKTtcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8v0LLRgdC/0L7QvNC+0LPQsNGC0LXQu9GM0L3QsNGPINGE0YPQvdC60YbQuNGPXHJcbmZ1bmN0aW9uIHB1dFRvQ2FjaGUoZWxlbSwgY2FjaGUpe1xyXG4gICAgaWYoY2FjaGUuaW5kZXhPZihlbGVtKSAhPSAtMSl7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIGkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKGNhY2hlLmxlbmd0aCArIDEpKTtcclxuICAgIGNhY2hlLnNwbGljZShpLCAwLCBlbGVtKTtcclxufVxyXG4vL9GE0YPQvdC60YbQuNGPLCDQstC+0LfQstGA0LDRidCw0Y7RidCw0Y8g0YHQstC10LbQtdC90YzQutC40LksINC00LXQstGB0YLQstC10L3QvdGL0Lkg0LrQvtC80L/QsNGA0LDRgtC+0YBcclxuZnVuY3Rpb24gbWFkbmVzcygpe1xyXG4gICAgdmFyIGNhY2hlID0gW107XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oYSwgYil7XHJcbiAgICAgICAgcHV0VG9DYWNoZShhLCBjYWNoZSk7XHJcbiAgICAgICAgcHV0VG9DYWNoZShiLCBjYWNoZSk7XHJcbiAgICAgICAgcmV0dXJuIGNhY2hlLmluZGV4T2YoYikgLSBjYWNoZS5pbmRleE9mKGEpO1xyXG4gICAgfVxyXG59XHJcbi8v0YHQvtCx0YHRgtCy0LXQvdC90L4g0YTRg9C90LrRhtC40Y8g0L/QtdGA0LXQvNC10YjQuNCy0LDQvdC40Y9cclxuZnVuY3Rpb24gc2h1ZmZsZShhcnIpe1xyXG4gICAgdmFyIGNvbXBhcmUgPSBtYWRuZXNzKCk7XHJcbiAgICByZXR1cm4gYXJyLnNvcnQoY29tcGFyZSk7XHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZnVuY3Rpb24gcG9zaXRpb25DZW50ZXIodmFsdWVTY3IsIHZhbHVlQmwpIHtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlU2NyLzIgLSB2YWx1ZUJsLzIpO1xyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuY29udGFpbmVyKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvYmouc2xpZGU7XHJcblxyXG5cclxuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IFRlbXBfMSBmcm9tICcuLi8uLi9pbWcvdGVtcGxhdGVfMS1taW4ucG5nJztcclxuaW1wb3J0IFRlbXBfMiBmcm9tICcuLi8uLi9pbWcvdGVtcGxhdGVfMi1taW4ucG5nJztcclxuaW1wb3J0IFRlbXBfMyBmcm9tICcuLi8uLi9pbWcvdGVtcGxhdGVfMy1taW4ucG5nJztcclxuaW1wb3J0IFRlbXBfNCBmcm9tICcuLi8uLi9pbWcvdGVtcGxhdGVfNC1taW4ucG5nJztcclxuaW1wb3J0IFRlbXBfNSBmcm9tICcuLi8uLi9pbWcvdGVtcGxhdGVfNS1taW4ucG5nJztcclxuaW1wb3J0IFRlbXBfNiBmcm9tICcuLi8uLi9pbWcvdGVtcGxhdGVfNi1taW4ucG5nJztcclxuaW1wb3J0IFRlbXBfNyBmcm9tICcuLi8uLi9pbWcvdGVtcGxhdGVfNy1taW4ucG5nJztcclxuaW1wb3J0IFRlbXBfOCBmcm9tICcuLi8uLi9pbWcvdGVtcGxhdGVfOC1taW4ucG5nJztcclxuXHJcbmNvbnN0IG9iaiA9IHtcclxuICAgIHNsaWRlIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICBtYWluICA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgbWFzc0ltYWdlcyA6IFtdLFxyXG5cclxufVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBJbWFnZXMoKSB7XHJcbiAgICBsZXQgdGVtcF8xID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGVtcF8xLnNyYyA9IFRlbXBfMTtcclxuICAgICAgICB0ZW1wXzEuYWx0ID0gJ1RlbXBsYXRlJztcclxuICAgICAgICBvYmoubWFzc0ltYWdlcy5wdXNoKHRlbXBfMSk7XHJcblxyXG4gICAgbGV0IHRlbXBfMiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRlbXBfMi5zcmMgPSBUZW1wXzI7XHJcbiAgICAgICAgdGVtcF8yLmFsdCA9ICdUZW1wbGF0ZSc7XHJcbiAgICAgICAgb2JqLm1hc3NJbWFnZXMucHVzaCh0ZW1wXzIpO1xyXG5cclxuICAgIGxldCB0ZW1wXzMgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB0ZW1wXzMuc3JjID0gVGVtcF8zO1xyXG4gICAgICAgIHRlbXBfMy5hbHQgPSAnVGVtcGxhdGUnO1xyXG4gICAgICAgIG9iai5tYXNzSW1hZ2VzLnB1c2godGVtcF8zKTtcclxuXHJcbiAgICBsZXQgdGVtcF80ID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGVtcF80LnNyYyA9IFRlbXBfNDtcclxuICAgICAgICB0ZW1wXzQuYWx0ID0gJ1RlbXBsYXRlJztcclxuICAgICAgICBvYmoubWFzc0ltYWdlcy5wdXNoKHRlbXBfNCk7XHJcblxyXG4gICAgbGV0IHRlbXBfNSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRlbXBfNS5zcmMgPSBUZW1wXzU7XHJcbiAgICAgICAgdGVtcF81LmFsdCA9ICdUZW1wbGF0ZSc7XHJcbiAgICAgICAgb2JqLm1hc3NJbWFnZXMucHVzaCh0ZW1wXzUpO1xyXG5cclxuICAgIGxldCB0ZW1wXzYgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB0ZW1wXzYuc3JjID0gVGVtcF82O1xyXG4gICAgICAgIHRlbXBfNi5hbHQgPSAnVGVtcGxhdGUnO1xyXG4gICAgICAgIG9iai5tYXNzSW1hZ2VzLnB1c2godGVtcF82KTtcclxuXHJcbiAgICBsZXQgdGVtcF83ID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGVtcF83LnNyYyA9IFRlbXBfNztcclxuICAgICAgICB0ZW1wXzcuYWx0ID0gJ1RlbXBsYXRlJztcclxuICAgICAgICBvYmoubWFzc0ltYWdlcy5wdXNoKHRlbXBfNyk7XHJcblxyXG4gICAgbGV0IHRlbXBfOCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRlbXBfOC5zcmMgPSBUZW1wXzg7XHJcbiAgICAgICAgdGVtcF84LmFsdCA9ICdUZW1wbGF0ZSc7XHJcbiAgICAgICAgb2JqLm1hc3NJbWFnZXMucHVzaCh0ZW1wXzgpO1xyXG5cclxuICAgIGxldCB0ZW1wXzkgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB0ZW1wXzkuc3JjID0gVGVtcF8xO1xyXG4gICAgICAgIHRlbXBfOS5hbHQgPSAnVGVtcGxhdGUnO1xyXG4gICAgICAgIG9iai5tYXNzSW1hZ2VzLnB1c2godGVtcF85KTtcclxufVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBmdW5jdGlvbiByZXNpemVJbWFnZShlKSB7XHJcbi8vXHJcbi8vICAgICBpZiggZG9jdW1lbnQuaW5uZXJXaWR0aCA8IDEwMDApe1xyXG4vLyAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZXNpemUnKT8gdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdyZXNpemUnKVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp0aGlzLmNsYXNzTGlzdC5hZGQoJ3Jlc2l6ZScpO1xyXG4vLyAgICAgfWVsc2Uge1xyXG4vLyAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLHJlc2l6ZUltYWdlKTtcclxuLy8gICAgIH1cclxuLy9cclxuLy8gfVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIHRlbXBsYXRlcygpIHtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDk7IGkrKyl7XHJcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgndGVtcGxhdGUnKTtcclxuICAgICAgICAgICAgZGl2LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIke29iai5tYXNzSW1hZ2VzW2ldLnNyY31cIilgO1xyXG4gICAgICAgICAgICBvYmoubWFpbi5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuICAgICAgICAgICAgLy8gZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxyZXNpemVJbWFnZSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIGNvbnRhaW5lcigpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IG9iai5zbGlkZSxcclxuICAgICAgICAgIG1haW4gPSBvYmoubWFpbixcclxuICAgICAgICAgIG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG5cclxuXHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2xpZCcsICdzbGlkNCcpO1xyXG4gICAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgKyAncHgnO1xyXG4gICAgY29udGFpbmVyLmlkID0gJ1RlbXBsYXRlcyc7XHJcblxyXG4gICAgbmFtZS5pbm5lckhUTUwgPSAnUFNEINGI0LDQsdC70L7QvdGLJztcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lKTtcclxuXHJcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcclxuICAgIEltYWdlcygpO1xyXG4gICAgdGVtcGxhdGVzKCk7XHJcbn1cclxuY29udGFpbmVyKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvYmouc2xpZGU7XHJcbiIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmNvbnN0IHNsaWQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbnNsaWQ1LmNsYXNzTGlzdC5hZGQoJ3NsaWQnLCAnc2xpZDUnKTtcbnNsaWQ1LnN0eWxlLmhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgKyAncHgnO1xuc2xpZDUuaW5uZXJIVE1MID0gIGA8aDIgY2xhc3M9XCJjb250YWN0c1wiPtCa0L7QvdGC0LDQutGC0Ys8L2gyPmA7XG5zbGlkNS5pZCA9ICdDb250YWN0cyc7XG5leHBvcnQgZGVmYXVsdCBzbGlkNTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKG1vZHVsZS5pZCwgY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjFkYTJhYzBjZTI0NzVmNzdlYWQxNDc4ODg5MWUwNTRhLnR0ZlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI0ZWQ4Mjk4MjA0MTM4YjA4YzFlNzNkMmQ5YTZjYmE5YS50dGZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL01vb24ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9hbWFpb3N3aW0uanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9hbnlXNFl0bXBsLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYmFja0dyb3VuZC1taW4ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9jYXQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9jbG91ZF8xLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvY2xvdWRfMi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2Nsb3VkXzMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9jb21tZW50VGV4dC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2Nvc20uanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9kb3duQXJyb3cucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9ncmFzcy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2dyYXNzU25haWwucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9wcm91ZGFuZHB1bmNoLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvcmFpbmZvcmVzdGZvb2RzLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvc3Rhci5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL3RlbXBsYXRlXzEtbWluLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvdGVtcGxhdGVfMi1taW4ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy90ZW1wbGF0ZV8zLW1pbi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL3RlbXBsYXRlXzQtbWluLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvdGVtcGxhdGVfNS1taW4ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy90ZW1wbGF0ZV82LW1pbi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL3RlbXBsYXRlXzctbWluLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvdGVtcGxhdGVfOC1taW4ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy91cEFycm93LnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=