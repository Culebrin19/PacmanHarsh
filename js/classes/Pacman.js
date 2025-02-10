import { GameObject } from "./GameObject.js";
import { IMAGE_SIZE, WIDTH_CANVAS, HEIGHT_CANVAS, LIVES_PACMAN } from "../sketch.js";
import { Food } from "./Food.js";

export class Pacman extends GameObject {
  constructor(y, x) {
    super(y, x);
    this.direction = 1;
    this.speedPacman = 32;
    this.score = 0;
    this.pacmanLive = LIVES_PACMAN; // acabar de veure com fer que restin
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
    const temp = this.coordXPixels - this.speedPacman;
    if (temp < 0 || this.testCollideRock(arrRocks, temp, this.coordYPixels)) {
      console.log("Error, no es pot moure a l'esquerra");
    } else {
      this.direction = 3;
      this.coordXPixels = temp;
      this.eatFood(arrFood);
    }
  }

  moveUp(arrFood, arrRocks) {
    const temp = this.coordYPixels - this.speedPacman;
    if (temp < 0 || this.testCollideRock(arrRocks, this.coordXPixels, temp)) {
      console.log("Error, no es pot moure a dalt");
    } else {
      this.direction = 2;
      this.coordYPixels = temp;
      this.eatFood(arrFood);
    }
  }

  moveDown(arrFood, arrRocks) {
    const temp = this.coordYPixels + this.speedPacman;
    if (temp >= WIDTH_CANVAS - IMAGE_SIZE || this.testCollideRock(arrRocks, this.coordXPixels, temp)) {
      console.log("Error, no es pot moure a baix");
    } else {
      this.direction = 4;
      this.coordYPixels = temp;
      this.eatFood(arrFood);
    }
  }

  testCollideRock(arrRocks, newX, newY) {
    for (const roca of arrRocks) {
      if (newX === roca.coordXPixels && newY === roca.coordYPixels) {
        console.log("Has colisionat amb una roca");
        alert("Has xocat amb una roca, has perdut una vida");
        this.coordYPixels = 160;
        this.coordXPixels = 256;
        this.pacmanLive--;
        return true;
      }
    }
    return false;
  }

  // testCollideFood(arrFood) {
  //   for (let i = 0; i < arrFood.length; i++) {
  //     if (this.coordXPixels === arrFood[i].coordXPixels && this.coordYPixels === arrFood[i].coordYPixels) {
  //       console.log("Has menjat food");
  //       arrFood.splice(i, 1);
  //     }
  //   }
  // }

  eatFood(arrFood) {
    for (let i = 0; i < arrFood.length; i++) {
      if (this.coordXPixels === arrFood[i].coordXPixels && this.coordYPixels === arrFood[i].coordYPixels) {
        console.log("Has menjat food");
        arrFood.splice(i, 1);
        this.score = this.score + arrFood[i].pointsFood;
        console.log(this.score);
      }
    }
  }
}
