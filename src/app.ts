import * as BABYLON from '@babylonjs/core';
import "@babylonjs/loaders";
import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight } from "@babylonjs/core";
import { HeroController } from "./entities/players/HeroController";  
import { createGround } from "./entities/players/Ground";

declare global {
    interface Window {
        HK: Promise<any>;
    }
}

const canvas = document.getElementById("renderCanvas");
if (!(canvas instanceof HTMLCanvasElement)) {
    throw new Error("Canvas element not found");
}
const engine = new Engine(canvas, true);
const scene = new Scene(engine);

const camera = new ArcRotateCamera("camera", Math.PI / 2, Math.PI / 2.5, 20, Vector3.Zero(), scene);
camera.attachControl(canvas, true);

const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

// Initialize physics with Oimo.js
const gravityVector = new Vector3(0, -9.81, 0);
scene.enablePhysics(gravityVector, new BABYLON.OimoJSPlugin());

// Add ground and hero
createGround(scene);
new HeroController(scene);

engine.runRenderLoop(() => {
    scene.render();
});
