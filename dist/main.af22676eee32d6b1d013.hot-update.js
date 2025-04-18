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

/***/ "./src/entities/players/EnemyTest.ts":
/*!*******************************************!*\
  !*** ./src/entities/players/EnemyTest.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EnemyTest: () => (/* binding */ EnemyTest)\n/* harmony export */ });\n/* harmony import */ var _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babylonjs/core */ \"./node_modules/@babylonjs/core/index.js\");\n/* harmony import */ var _utils_HealthBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/HealthBar */ \"./src/utils/HealthBar.ts\");\n\n\nclass EnemyTest {\n    constructor(mesh, scene, position) {\n        this.mesh = mesh;\n        this.scene = scene;\n        this.enemyMesh = _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__.MeshBuilder.CreateBox(\"enemy\", { size: 1 }, scene);\n        this.enemyMesh.position = position;\n        // Create physics impostor for enemy\n        this.enemyMesh.physicsImpostor = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__.PhysicsImpostor(this.enemyMesh, _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__.PhysicsImpostor.BoxImpostor, { mass: 1, restitution: 0, friction: 0.5 }, scene);\n        this.health = 100;\n        // Create health bar\n        this.healthBar = new _utils_HealthBar__WEBPACK_IMPORTED_MODULE_1__.HealthBar(scene, this.enemyMesh, this.health);\n        // Log impostor creation\n        console.log(\"Enemy collision box physicsImpostor created:\", !!this.enemyMesh.physicsImpostor);\n    }\n    takeDamage(amount) {\n        this.health -= amount;\n        this.healthBar.updateHealth(this.health);\n        // Visual feedback for damage\n        const mat = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__.StandardMaterial(\"enemyMat\", this.scene);\n        mat.diffuseColor = _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__.Color3.Red();\n        this.enemyMesh.material = mat;\n        setTimeout(() => {\n            this.enemyMesh.material = null;\n        }, 100);\n        // Check if the enemy should be destroyed\n        if (this.health <= 0) {\n            this.die();\n        }\n    }\n    die() {\n        this.healthBar.dispose();\n        this.enemyMesh.dispose();\n    }\n}\n\n\n//# sourceURL=webpack://the-wonderful-world/./src/entities/players/EnemyTest.ts?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f723233a14f5a8130b73")
/******/ })();
/******/ 
/******/ }
);