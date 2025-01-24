class Pacman extends GameObject {
  constructor() {
    super(64, 64);
    this.direction = 0;
    this.points = 0;
    this.lives = 3;
    this.speed = 32;
    this.diameter = 32;
  }

  moveUp() {
    if (this.coordYPixels > limit_top) {
      this.coordYPixels -= this.speed;
    }
  }

  moveDown() {
    if (this.coordYPixels < limit_bot) {
      this.coordYPixels += this.speed;
    }
  }

  moveLeft() {
    if (this.coordXPixels > limit_left) {
      this.coordXPixels -= this.speed;
    }
  }

  moveRight() {
    if (this.coordXPixels < limit_right) {
      this.coordXPixels += this.speed;
    }
  }

  eatFood() {
    console.log("Pacman comió comida");
  }

  eatRock() {
    console.log("Pacman chocó con una roca");
  }

  showPacman(img) {
    this.showGameObject(img);
  }
}
