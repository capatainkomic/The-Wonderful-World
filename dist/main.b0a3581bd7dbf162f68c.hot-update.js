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

/***/ "./src/utils/AnimationManager.ts":
/*!***************************************!*\
  !*** ./src/utils/AnimationManager.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AnimationManager: () => (/* binding */ AnimationManager)\n/* harmony export */ });\nclass AnimationManager {\n    constructor(animationGroups, scene) {\n        this.animations = {};\n        this.currentAnimation = null;\n        this.scene = scene;\n        animationGroups.forEach((anim) => {\n            this.animations[anim.name.toLowerCase()] = anim;\n        });\n        console.log(\"Available animations:\", this.getAvailableAnimations());\n    }\n    play(name, loop = true, onEnd) {\n        const anim = this.animations[name.toLowerCase()];\n        if (!anim) {\n            console.warn(`Animation \"${name}\" not found`);\n            return;\n        }\n        if (this.currentAnimation && this.currentAnimation !== anim) {\n            this.crossFade(this.currentAnimation, anim, 0.3);\n        }\n        else {\n            this.stopAll();\n            anim.reset();\n            anim.loopAnimation = loop;\n            anim.play(true);\n            console.log(`Playing animation: ${name}, loop: ${loop}`);\n        }\n        if (onEnd && !loop) {\n            const observer = anim.onAnimationGroupEndObservable.addOnce(() => {\n                onEnd();\n                anim.stop();\n                anim.reset();\n                if (this.currentAnimation === anim) {\n                    this.currentAnimation = null;\n                }\n            });\n            anim.onAnimationGroupPlayObservable.addOnce(() => {\n                anim.onAnimationGroupEndObservable.remove(observer);\n            });\n        }\n        this.currentAnimation = anim;\n    }\n    crossFade(from, to, duration, loop = true) {\n        to.reset();\n        to.loopAnimation = false;\n        to.play(loop);\n        console.log(`Cross-fading from ${from.name} to ${to.name}`);\n        let progress = 0;\n        const step = 1 / (duration * 60);\n        const fadeObservable = this.scene.onBeforeRenderObservable.add(() => {\n            progress += step;\n            from.setWeightForAllAnimatables(1 - progress);\n            to.setWeightForAllAnimatables(progress);\n            if (progress >= 1) {\n                from.stop();\n                from.reset();\n                to.setWeightForAllAnimatables(1);\n                this.scene.onBeforeRenderObservable.remove(fadeObservable);\n                this.currentAnimation = to;\n            }\n        });\n    }\n    stopAll() {\n        Object.values(this.animations).forEach((anim) => {\n            anim.stop();\n            anim.reset();\n        });\n        this.currentAnimation = null;\n    }\n    getAvailableAnimations() {\n        return Object.keys(this.animations);\n    }\n}\n\n\n//# sourceURL=webpack://the-wonderful-world/./src/utils/AnimationManager.ts?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("974c24c5835d7a8a518a")
/******/ })();
/******/ 
/******/ }
);