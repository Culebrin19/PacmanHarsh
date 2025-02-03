import { GameObject } from "./GameObject.js";
import { IMAGE_SIZE, WIDTH_CANVAS } from "../sketch.js";

export class Pacman extends GameObject {
  constructor(y, x) {
    super(y, x);
    this.direction = 1;
    this.speedPacman = 32;
    this.widthCanvasPacman = 128;
    this.pacmanDiametre = 32;
  }

  moveRight(arrFood, arrRocks) {
    const temp = this.coordXPixels + this.speedPacman;
    if (temp >= WIDTH_CANVAS - IMAGE_SIZE || this.testCollideRock(arrRocks, temp, this.coordYPixels)) {
      console.log("Error, no es pot moure a la dreta");
    } else {
      this.direction = 1;
      this.coordXPixels = temp;
      this.eatFood(arrFood);
    }
  }

  moveLeft(arrFood, arrRocks) {
    const newX = this.coordXPixels - this.speedPacman;
    if (newX < 0 || this.testCollideRock(arrRocks, newX, this.coordYPixels)) {
      console.log("Error, no es pot moure a l'esquerra");
    } else {
      this.direction = 3;
      this.coordXPixels = newX;
      this.eatFood(arrFood);
    }
  }

  moveUp(arrFood, arrRocks) {
    const newY = this.coordYPixels - this.speedPacman;
    if (newY < 0 || this.testCollideRock(arrRocks, this.coordXPixels, newY)) {
      console.log("Error, no es pot moure a dalt");
    } else {
      this.direction = 2;
      this.coordYPixels = newY;
      this.eatFood(arrFood);
    }
  }

  moveDown(arrFood, arrRocks) {
    const newY = this.coordYPixels + this.speedPacman;
    if (newY >= WIDTH_CANVAS - IMAGE_SIZE || this.testCollideRock(arrRocks, this.coordXPixels, newY)) {
      console.log("Error, no es pot moure a baix");
    } else {
      this.direction = 4;
      this.coordYPixels = newY;
      this.eatFood(arrFood);
    }
  }

  testCollideRock(arrRocks, newX, newY) {
    for (const roca of arrRocks) {
      if (newX === roca.coordXPixels && newY === roca.coordYPixels) {
        console.log("Has colisionat amb una roca");
        return true;
      }
    }
    return false;
  }

  eatFood(arrFood) {
    for (let i = 0; i < arrFood.length; i++) {
      if (this.coordXPixels === arrFood[i].coordXPixels && this.coordYPixels === arrFood[i].coordYPixels) {
        console.log("Has menjat food");
        // veure com eliminar el menjar
      }
    }
  }
}
