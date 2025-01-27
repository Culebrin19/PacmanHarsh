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

  }

  moveLeft() {

  }

  moveDown() {

  }
}
