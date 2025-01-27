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

  moveRight() {
    const temp = this.coordXPixels + this.speedPacman;
    if (temp < 0 || temp > (WIDTH_CANVAS - IMAGE_SIZE)) {
      console.log("Error, no es pot moure a la dreta");
    } else {
      this.direction = 1;
      this.coordXPixels = temp;
    }
  }

  moveUp() {
    const temp = this.coordYPixels - this.speedPacman;
    if (temp < 0 || temp > (WIDTH_CANVAS - IMAGE_SIZE)) {
      console.log("Error, no es pot moure a dalt");
    } else {
      this.direction = 2;
      this.coordYPixels = temp;
    }
  }

  moveLeft() {
    const temp = this.coordXPixels - this.speedPacman;
    if (temp < 0 || temp > (WIDTH_CANVAS - IMAGE_SIZE)) {
      console.log("Error, no es pot moure a l'esquerra");
    } else {
      this.direction = 3;
      this.coordXPixels = temp;
    }
  }

  moveDown() {
    const temp = this.coordYPixels + this.speedPacman;
    if (temp < 0 || temp > (WIDTH_CANVAS - IMAGE_SIZE)) {
      console.log("Error, no es pot moure a baix");
    } else {
      this.direction = 4;
      this.coordYPixels = temp;
    }
  }
}
