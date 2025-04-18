"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatethe_wonderful_world"]("main",{

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babylonjs/core */ \"./node_modules/@babylonjs/core/index.js\");\n/* harmony import */ var _babylonjs_loaders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babylonjs/loaders */ \"./node_modules/@babylonjs/loaders/index.js\");\n/* harmony import */ var _entities_players_HeroController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entities/players/HeroController */ \"./src/entities/players/HeroController.ts\");\n/* harmony import */ var _entities_players_Ground__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entities/players/Ground */ \"./src/entities/players/Ground.ts\");\n\n\n\n\n\nconst canvas = document.getElementById(\"renderCanvas\");\nif (!(canvas instanceof HTMLCanvasElement)) {\n    throw new Error(\"Canvas element not found\");\n}\nconst engine = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__.Engine(canvas, true);\nconst scene = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__.Scene(engine);\nconst camera = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__.ArcRotateCamera(\"camera\", Math.PI / 2, Math.PI / 2.5, 20, _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero(), scene);\ncamera.attachControl(canvas, true);\nconst light = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__.HemisphericLight(\"light\", new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 1, 0), scene);\n// Initialize physics with Oimo.js\nconst gravityVector = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, -9.81, 0);\nscene.enablePhysics(gravityVector, new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__.OimoJSPlugin());\n// Add ground and hero\n(0,_entities_players_Ground__WEBPACK_IMPORTED_MODULE_3__.createGround)(scene);\nnew _entities_players_HeroController__WEBPACK_IMPORTED_MODULE_2__.HeroController(scene);\nengine.runRenderLoop(() => {\n    scene.render();\n});\n\n\n//# sourceURL=webpack://the-wonderful-world/./src/app.ts?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("afe29c5bb2a2f2182dcb")
/******/ })();
/******/ 
/******/ }
);