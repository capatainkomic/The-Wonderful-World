import * as BABYLON from "@babylonjs/core";
import { HealthBar } from "../../utils/HealthBar";

export class EnemyTest {
  public mesh: BABYLON.Mesh;
  private enemyMesh: BABYLON.Mesh;
  private scene: BABYLON.Scene;
  private health: number;
  private healthBar: HealthBar;

  constructor(scene: BABYLON.Scene, position: BABYLON.Vector3) {
    this.scene = scene;
    this.enemyMesh = BABYLON.MeshBuilder.CreateBox("enemy", { size: 1 }, scene);
    this.enemyMesh.position = position;

    // Create physics impostor for enemy
    this.enemyMesh.physicsImpostor = new BABYLON.PhysicsImpostor(
      this.enemyMesh,
      BABYLON.PhysicsImpostor.BoxImpostor,
      { mass: 1, restitution: 0, friction: 0.5 },
      scene
    );

    this.health = 100;

    // Create health bar
    this.healthBar = new HealthBar(scene, this.enemyMesh, this.health);

    // Log impostor creation
    console.log("Enemy collision box physicsImpostor created:", !!this.enemyMesh.physicsImpostor);
  }

  public takeDamage(amount: number) {
    this.health -= amount;
    this.healthBar.updateHealth(this.health);

    // Visual feedback for damage
    const mat = new BABYLON.StandardMaterial("enemyMat", this.scene);
    mat.diffuseColor = BABYLON.Color3.Red();
    this.enemyMesh.material = mat;

    setTimeout(() => {
      this.enemyMesh.material = null;
    }, 100);

    // Check if the enemy should be destroyed
    if (this.health <= 0) {
      this.die();
    }
  }

  private die() {
    this.healthBar.dispose();
    this.enemyMesh.dispose();
  }
}
