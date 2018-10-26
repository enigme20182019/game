/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img_definitions.js":
/*!********************************!*\
  !*** ./src/img_definitions.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([\n  {scene : 'home',fileName : 'salon.jpg', shapes : [{coords : [310,138,455,300], transition : 'tv'}, {coords : [126,110,262,255], transition : 'radio'}]},\n  {scene : 'tv',fileName : 'tv.jpg', shapes : [{coords : [574,105,620,225], action : 'javascript:_tv_next()'}, {coords : [620,105,665,225], action : 'javascript:_tv_preview()'}]},\n  {scene : 'radio',fileName : 'radio.jpg', shapes : [{coords : [0,0,100,100], action : 'javascript:_radio_next()'}]},\n]);\n\n//# sourceURL=webpack:///./src/img_definitions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _img_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img_definitions */ \"./src/img_definitions.js\");\n/* harmony import */ var _tv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tv */ \"./src/tv.js\");\n/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./radio */ \"./src/radio.js\");\n\n\n\nconst current = _img_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"][0]\nconst displayHandle = document.querySelector('#display')\n\n\nconst tv = new _tv__WEBPACK_IMPORTED_MODULE_1__[\"default\"]()\nconst radio = new _radio__WEBPACK_IMPORTED_MODULE_2__[\"default\"]()\n\nconst setup = () => {\n  showScene(current)\n}\n\nconst showScene = (img) => {\n  console.log(img)\n  let area = img.shapes.map((shape) => {\n    let method = '#'\n    if(shape.action) {\n      method = `javascript:${shape.action}`\n    } else if(shape.transition){\n      method = `javascript:_scene('${shape.transition}')`\n    }\n    return `<area shape=\"rect\" coords=\"${shape.coords.join(',')}\" href=\"${method}\">`\n  })\n  displayHandle.innerHTML = `<img class=\"display-pic\" src=\"/pictures/${img.fileName}\" usemap=\"#ima1\"><map name=\"ima1\">${area.join('')}</map>`\n}\n\nwindow._scene = (scene) => {\n  let newScene = _img_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find((imgDef) => {\n    return imgDef.scene === scene\n  })\n\n  showScene(newScene)\n}\n\n\nsetup()\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/music.js":
/*!**********************!*\
  !*** ./src/music.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Music; });\nclass Music {\n  constructor(source) {\n    this.source = source\n    this.context = new AudioContext();\n  }\n\n\n  async play() {\n    this.load()\n    let source = this.context.createBufferSource(); // creates a sound source\n    source.buffer = buffer;                    // tell the source which sound to play\n    source.connect(this.context.destination);       // connect the source to the context's destination (the speakers)\n    source.start(0);\n  }\n\n  async load() {\n    return new Promise((resolve) => {\n\n      let request = new XMLHttpRequest();\n      request.open('GET', `/sounds/${this.source}`, true);\n      request.responseType = 'arraybuffer';\n\n      // Decode asynchronously\n      request.onload = function() {\n        this.context.decodeAudioData(request.response, (buffer) => {\n          resolve(buffer)\n        }, onError);\n      }\n      request.send();\n    })\n\n  }\n\n}\n\n//# sourceURL=webpack:///./src/music.js?");

/***/ }),

/***/ "./src/radio.js":
/*!**********************!*\
  !*** ./src/radio.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Radio; });\n/* harmony import */ var _music__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./music */ \"./src/music.js\");\n\n\nconst musicsSettings = [\n  {path : 'brass.mp3', frequency : [88,5]},\n  {path : 'white.ogg', frequency : [90,2]}\n]\n\nclass Radio {\n  constructor() {\n    this.display = document.getElementById('#radio-display')\n    this.on = false\n    this.current = 0\n    this.frequency = [87,5] /* max 108 0 */\n    this.musics = musicsSettings.map((musicPath) => {\n      return new _music__WEBPACK_IMPORTED_MODULE_0__[\"default\"](musicPath.path)\n    })\n\n    this.currentMusic = this.musics[this.current]\n    window._radio_next = () => {\n      this.current = (this.current+1) % musicsSettings.length\n      this.switchFrequency()\n    }\n\n    window._radio_prev = () => {\n      this.current = Math.abs((this.current-1) % musicsSettings.length)\n    }\n  }\n\n  switchFrequency() {\n    this.currentMusic = this.musics[this.current]\n    this.frequency = this.currentMusic.frequency\n    this.play()\n  }\n\n  play() {\n    this.currentMusic.play()\n    this.display.innerHTML = `<div>${this.frequency[0]}.${this.frequency[1]}</div>`\n  }\n}\n\n//# sourceURL=webpack:///./src/radio.js?");

/***/ }),

/***/ "./src/tv.js":
/*!*******************!*\
  !*** ./src/tv.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Tv; });\nclass Tv {\n\n\n  constructor() {\n    this.c = document.getElementById('video-display')\n    this.current = 0\n\n    this.images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg']\n\n    window._tv_next = () => {\n      this.next()\n    }\n\n    window._tv_preview = () => {\n      this.preview()\n    }\n  }\n\n  next() {\n    this.current = (this.current+1) % this.images.length\n    this.up()\n  }\n  preview() {\n    this.current = Math.abs((this.current-1) % this.images.length)\n    this.up()\n  }\n\n  up() {\n    this.c.innerHTML=`<div class=\"tv-pic\" style=\"background-image: url('/pictures/tv/${this.images[this.current]}');\"></div>`\n  }\n}\n\n//# sourceURL=webpack:///./src/tv.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js?");

/***/ })

/******/ });