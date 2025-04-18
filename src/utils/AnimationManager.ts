import { AnimationGroup, Scene } from "@babylonjs/core";

export class AnimationManager {
  private animations: Record<string, AnimationGroup> = {};
  private currentAnimation: AnimationGroup | null = null;
  private scene: Scene;

  constructor(animationGroups: AnimationGroup[], scene: Scene) {
    this.scene = scene;
    animationGroups.forEach((anim) => {
      this.animations[anim.name.toLowerCase()] = anim;
    });
    console.log("Available animations:", this.getAvailableAnimations());
  }

  play(name: string, loop: boolean = true, onEnd?: () => void) {
    const anim = this.animations[name.toLowerCase()];
    if (!anim) {
      console.warn(`Animation "${name}" not found`);
      return;
    }

    if (this.currentAnimation && this.currentAnimation !== anim) {
      this.crossFade(this.currentAnimation, anim, 0.3, loop);
    } else {
      this.stopAll();
      anim.reset();
      anim.loopAnimation = loop;
      anim.play(true);
      console.log(`Playing animation: ${name}, loop: ${loop}`);
    }

    if (onEnd && !loop) {
      const observer = anim.onAnimationGroupEndObservable.addOnce(() => {
        onEnd();
        anim.stop();
        anim.reset();
        if (this.currentAnimation === anim) {
          this.currentAnimation = null;
        }
      });
      anim.onAnimationGroupPlayObservable.addOnce(() => {
        anim.onAnimationGroupEndObservable.remove(observer);
      });
    }

    this.currentAnimation = anim;
  }

  crossFade(from: AnimationGroup, to: AnimationGroup, duration: number, loop: boolean ){
    to.reset();
    to.loopAnimation = false;
    to.play(loop);
    console.log(`Cross-fading from ${from.name} to ${to.name}`);

    let progress = 0;
    const step = 1 / (duration * 60);

    const fadeObservable = this.scene.onBeforeRenderObservable.add(() => {
      progress += step;
      from.setWeightForAllAnimatables(1 - progress);
      to.setWeightForAllAnimatables(progress);

      if (progress >= 1) {
        from.stop();
        from.reset();
        to.setWeightForAllAnimatables(1);
        this.scene.onBeforeRenderObservable.remove(fadeObservable);
        this.currentAnimation = to;
      }
    });
  }

  stopAll() {
    Object.values(this.animations).forEach((anim) => {
      anim.stop();
      anim.reset();
    });
    this.currentAnimation = null;
  }

  getAvailableAnimations(): string[] {
    return Object.keys(this.animations);
  }
}