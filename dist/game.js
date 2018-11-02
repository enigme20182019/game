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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([\n  {scene : 'home',fileName : 'salon.jpg', shapes : [{coords : [310,138,455,300], transition : 'tv'}, {coords : [126,110,262,255], transition : 'radio'}, {coords : [490,141,590,241], transition : 'card1'}, {coords : [605,141,705,241], transition : 'card2'}]},\n  {scene : 'tv',fileName : 'tv.jpg', shapes : [{coords : [574,105,620,225], action : 'javascript:_tv_preview()'}, {coords : [620,105,665,225], action : 'javascript:_tv_next()'}]},\n  {scene : 'radio',fileName : 'radio.jpg', shapes : [{coords : [170,330,300,460], action : 'javascript:_radio_preview()'}, {coords : [530,330,660,460], action : 'javascript:_radio_next()'}]},\n  {scene : 'card1',fileName : 'card1.jpg', shapes : [\n      {coords : [300,175,370,295], action : 'javascript:_card(1)'},\n      {coords : [395,175,465,295], action : 'javascript:_card(2)'},\n      {coords : [485,175,555,295], action : 'javascript:_card(3)'},\n      {coords : [295,310,365,430], action : 'javascript:_card(4)'},\n      {coords : [395,310,465,430], action : 'javascript:_card(5)'},\n      {coords : [500,310,570,430], action : 'javascript:_card(6)'},\n      {coords : [285,450,255,570], action : 'javascript:_card(7)'},\n      {coords : [405,450,475,570], action : 'javascript:_card(8)'},\n      {coords : [510,450,580,570], action : 'javascript:_card(9)'},\n      ]},\n  {scene : 'card2',fileName : 'card2.jpg', shapes : [\n    {coords : [360,560,440,705], action : 'javascript:_card(10)'},\n    {coords : [450,560,530,705], action : 'javascript:_card(11)'},\n    {coords : [535,560,6050,705], action : 'javascript:_card(12)'},\n      ]}\n]);\n\n//# sourceURL=webpack:///./src/img_definitions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _img_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img_definitions */ \"./src/img_definitions.js\");\n/* harmony import */ var _tv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tv */ \"./src/tv.js\");\n/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./radio */ \"./src/radio.js\");\n\n\n\nconst current = _img_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"][0]\nconst displayHandle = document.querySelector('#display')\n\n\nconst tv = new _tv__WEBPACK_IMPORTED_MODULE_1__[\"default\"]()\nconst radio = new _radio__WEBPACK_IMPORTED_MODULE_2__[\"default\"]()\n\nconst setup = () => {\n  showScene(current)\n}\n\nconst showScene = (img) => {\n  console.log(img)\n  let area = img.shapes.map((shape) => {\n    let method = '#'\n    if(shape.action) {\n      method = `javascript:${shape.action}`\n    } else if(shape.transition){\n      method = `javascript:_scene('${shape.transition}')`\n    }\n    return `<area shape=\"rect\" coords=\"${shape.coords.join(',')}\" href=\"${method}\">`\n  })\n  displayHandle.innerHTML = `<img class=\"display-pic\" src=\"./pictures/${img.fileName}\" usemap=\"#ima1\"><map name=\"ima1\">${area.join('')}</map>`\n}\n\nwindow._scene = (scene) => {\n  let newScene = _img_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find((imgDef) => {\n    return imgDef.scene === scene\n  })\n\n  showScene(newScene)\n}\n\n\nsetup()\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/music.js":
/*!**********************!*\
  !*** ./src/music.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Music; });\nclass Music {\n  constructor(sourceUri) {\n    this.sourceUri = sourceUri\n    this.context = new (window.AudioContext || window.webkitAudioContext)();\n    this.source = this.context.createBufferSource()\n    this.playing = false\n    this.loaded = false\n  }\n\n  stop() {\n    if(this.playing) {\n      this.source.stop(0)\n      this.playing = false\n    }\n  }\n\n\n  async play() {\n    if(this.loaded === false) {\n      this.playing = true\n      this.source.buffer = await this.load()                // tell the source which sound to play\n      this.source.connect(this.context.destination)         // connect the source to the context's destination (the speakers)\n    }\n    this.source.start(0);\n  }\n\n  async load() {\n    return new Promise((resolve) => {\n\n      let request = new XMLHttpRequest();\n      request.open('GET', `/sounds/${this.sourceUri}.mp3`, true);\n      request.responseType = 'arraybuffer';\n\n      // Decode asynchronously\n      request.onload = () => {\n        this.loaded = true\n        this.context.decodeAudioData(request.response, (buffer) => {\n          resolve(buffer)\n        }, this.onError);\n      }\n      request.send();\n    })\n  }\n\n  onError(e) {\n    console.error(e)\n  }\n\n}\n\n//# sourceURL=webpack:///./src/music.js?");

/***/ }),

/***/ "./src/radio.js":
/*!**********************!*\
  !*** ./src/radio.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Radio; });\n/* harmony import */ var _music__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./music */ \"./src/music.js\");\n\n\nconst musicsSettings = [\n  {path : 'radio/aime_paris_mai', frequency : [88,5]},\n  {path : 'radio/au_printemps', frequency : [90,2]}\n]\n\n\nconst cardSettings = [\n  {path : 'cards/aime_paris_mai'},\n  {path : 'cards/au_printemps'},\n  {path : 'cards/celine'},\n  {path : 'cards/cro_magnon'},\n  {path : 'cards/mon_mec_a_moi'},\n  {path : 'cards/paris_mai'},\n  {path : 'cards/quand_reviendras_tu'},\n  {path : 'cards/suis_un_homme'},\n  {path : 'cards/suis_venu_te_dire'},\n  {path : 'cards/mon_ptit_loup'},\n  {path : 'cards/pardonne_moi'},\n  {path : 'cards/voulez_vous_danser'},\n\n]\n\nclass Radio {\n  constructor() {\n    this.display = document.getElementById('radio-display')\n    this.on = false\n    this.current = 0\n    this.frequency = [87,5] /* max 108 0 */\n    this.musics = musicsSettings.map((musicPath) => {\n      return new _music__WEBPACK_IMPORTED_MODULE_0__[\"default\"](musicPath.path)\n    })\n\n    this.cardsMusics = cardSettings.map((musicPath) => {\n      return new _music__WEBPACK_IMPORTED_MODULE_0__[\"default\"](musicPath.path)\n    })\n\n    this.currentMusic = this.musics[this.current]\n    window._radio_next = () => {\n      this.current = (this.current+1) % musicsSettings.length\n      this.switchFrequency()\n    }\n\n    window._radio_preview = () => {\n      this.current = (this.current-1) % musicsSettings.length\n      if(this.current === -1) {\n        this.current = musicsSettings.length - 1\n      }\n      this.switchFrequency()\n    }\n\n    window._card = (i) => {\n      this.currentMusic.stop()\n      this.currentMusic = this.cardsMusics[i]\n      this.currentMusic.play()\n    }\n  }\n\n  switchFrequency() {\n    this.display.style.display = 'block'\n    this.currentMusic.stop()\n    this.currentMusic = this.musics[this.current]\n    this.frequency = musicsSettings[this.current].frequency\n    this.play()\n  }\n\n  play() {\n    this.currentMusic.play()\n    this.display.innerHTML = `<div>${this.frequency[0]}.${this.frequency[1]}</div>`\n  }\n}\n\n//# sourceURL=webpack:///./src/radio.js?");

/***/ }),

/***/ "./src/tv.js":
/*!*******************!*\
  !*** ./src/tv.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Tv; });\nclass Tv {\n\n\n  constructor() {\n    this.c = document.getElementById('video-display')\n    this.current = 0\n\n    this.images = ['11.jpg', '7.jpg', '5.jpg', '9.jpg', '10.jpg', '1.jpg', '3.jpg', '8.jpg', '4.jpg', '6.jpg', '2.jpg', '12.jpg']\n\n\n    window._tv_next = () => {\n      this.next()\n    }\n\n    window._tv_preview = () => {\n      this.preview()\n    }\n  }\n\n  next() {\n    this.current = Math.abs((this.current+1) % this.images.length)\n    this.up()\n  }\n  preview() {\n    this.current = (this.current-1)\n    if(this.current === -1)\n      this.current = this.images.length - 1\n    this.up()\n  }\n\n  up() {\n    this.c.innerHTML=`<div class=\"tv-pic\" style=\"background-image: url('./pictures/tv/${this.images[this.current]}');\"></div>`\n  }\n}\n\n//# sourceURL=webpack:///./src/tv.js?");

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