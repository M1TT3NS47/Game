
import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Player extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("base", "./Player/costumes/base.png", {
        x: 0,
        y: 0,
      }),

new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      ];

  this.vars.xVel = 0;
  this.vars.yVel = 0;

  }

*whenStartGameClicked() {
  this.goto(0, 0);
  this.vars.xVel= 0;
  this.size= 50;
  this.costume= "base";
  while (true) {
    this.x += this.toNumber (this.vars.xVel);
    this.x += this.toNumber (this.vars.yVel);
    this.vars.xVel +=
      2 *
      (this.toNumber(this.keyPressed("d")) -
        this.toNumber(this.keyPressed("a")));
    this.vars.yVel +=
      2 *
        (this.toNumber(this.keyPressed("w")) -
          this.toNumber(this.keyPressed("s")));
    this.vars.xVel = 0.7 * this.toNumber(this.vars.xVel);
      this.vars.yVel = 0.7 * this.toNumber(this.vars.yVel);
      yield;
    }
  }
