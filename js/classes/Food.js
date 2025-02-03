import { GameObject } from "./GameObject.js";

export class Food extends GameObject {
  constructor(y, x) {
    super(y, x);
    this.pointsFood = 10;
  }

  toString() {
    console.log(`Food at row: ${this.coordY} column: ${this.coordX}`);
    return `Food: ${this.pointsFood}`;
  }
}
