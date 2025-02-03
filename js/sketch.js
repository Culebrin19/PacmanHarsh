import { GameObject } from "./classes/GameObject.js";
import { Pacman } from "./classes/Pacman.js";
import { Food } from "./classes/Food.js";

const map = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 3, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0, 1],
  [1, 0, 2, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 2, 0, 0, 1, 0, 0, 2, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 1],
  [1, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 2, 0, 2, 1, 2, 1, 1, 2, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

const ROWS = 14;
const COLUMNS = 14;
export const IMAGE_SIZE = 32;
export const WIDTH_CANVAS = 448;
export const HEIGHT_CANVAS = 448; // IMAGE_SIZE * ROWS
const extraSize = 60;

let imgRock;
let imgFood;

let imgPacManRigth;
let imgPacManLeft;
let imgPacManUp;
let imgPacManDown;
let myPacman;

const arrRocks = [];
const arrFood = [];
const numberImagesLoaded = 0;
console.log("Boff");

function preload() {
  imgRock = loadImage("../img/roca.png", handleImage, handleError);
  imgFood = loadImage("../img/food.png", handleImage, handleError);
  imgPacManRigth = loadImage("../img/packRight.png", handleImage, handleError);
  imgPacManLeft = loadImage("../img/packLeft.png", handleImage, handleError);
  imgPacManUp = loadImage("../img/packUp.png", handleImage, handleError);
  imgPacManDown = loadImage("../img/packDown.png", handleImage, handleError);
}

function handleError() {
  console.error("Error carregar imatge");
}

function handleImage() {
  console.error("Images carregada correctament");
  // numberImagesLoaded++;
}

function setup() {
  createCanvas(WIDTH_CANVAS, HEIGHT_CANVAS + extraSize).parent("sketch-pacman");
  for (let filaActual = 0; filaActual < ROWS; filaActual++) {
    for (let columnaActual = 0; columnaActual < COLUMNS; columnaActual++) {
      if (map[filaActual][columnaActual] === 1) {
        const roca = new GameObject(filaActual, columnaActual);
        console.log(`He creat roca a posicio fila ${filaActual}i columna ${columnaActual}`);
        arrRocks.push(roca);
      } else if (map[filaActual][columnaActual] === 2) {
        const menjar = new Food(filaActual, columnaActual); // GameObject(filaActual, columnaActual);
        console.log(`He creat food a posicio fila ${ROWS}i columna ${COLUMNS}`);
        arrFood.push(menjar);
      } else if (map[filaActual][columnaActual] === 3) {
        myPacman = new Pacman(filaActual, columnaActual);
        console.log(`He creat pacman a posicio fila ${ROWS}i columna ${COLUMNS}`);
      }
    }
    console.log(arrRocks.length);
  }
}
// fer que no colisioni amb les roques
for (let i = 0; i < arrRocks.length; i++) {
  if (myPacman.coordXPixels === arrRocks[i].coordXPixels && myPacman.coordYPixels === arrRocks[i].coordYPixels) {
    console.log("Error, colisiona amb una roca");
  }
}

// fer que no colisioni amb les food
for (let i = 0; i < arrFood.length; i++) {
  if (myPacman.coordXPixels === arrFood[i].coordXPixels && myPacman.coordYPixels === arrFood[i].coordYPixels) {
    myPacman.testCollideRock(arrFood[i]);
  }
}

function draw() {
  background(171, 248, 168);
  arrRocks.forEach((roca) => roca.showObject(imgRock));
  arrFood.forEach((menjar) => menjar.showObject(imgFood));
  myPacman.showObject(imgPacManRigth);
  textSize(20);
  textAlign(LEFT, CENTER);
  text(`Puntuació: ${myPacman.score}`, 10, HEIGHT_CANVAS + 30);
  // switch (myPacman.direction) {
  // case 1: myPacman.showObject(imgPacManRigth); break;
  // case 2: myPacman.showObject(imgPacManLeft); break;
  // case 3: myPacman.showObject(imgPacManUp); break;
  // case 4: myPacman.showObject(imgPacManDown); break;
  // }
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    myPacman.moveRight(arrFood, arrRocks);
  } else if (keyCode === LEFT_ARROW) {
    myPacman.moveLeft(arrFood, arrRocks);
  } else if (keyCode === UP_ARROW) {
    myPacman.moveUp(arrFood, arrRocks);
  } else if (keyCode === DOWN_ARROW) {
    myPacman.moveDown(arrFood, arrRocks);
  } else {
    console.log("Error de tecla");
  }
}

globalThis.setup = setup;
globalThis.draw = draw;
globalThis.preload = preload;
globalThis.keyPressed = keyPressed;
