import { GameObject } from "./classes/GameObject.js";

const map = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0, 1],
  [1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 2, 0, 2, 0, 2, 0, 0, 2, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

const ROWS = 14;
const COLUMNS = 14;
export const IMAGE_SIZE = 32;
const WIDTH_CANVAS = 448;
const HEIGHT_CANVAS = 448; // IMAGE_SIZE * ROWS

let imgRock;
let imgFood;

const arrRocks = [];
const arrFood = [];
const numberImagesLoaded = 0;
console.log("Boff");

function preload() {
  console.log("o");
  imgRock = loadImage("../img/roca.png", handleImage, handleError);
  imgFood = loadImage("../img/food.png", handleImage, handleError);
}

function handleError() {
  console.error("Error carregar imatge");
}

function handleImage() {
  console.error("Images carregada correctament");
  // numberImagesLoaded++;
}

function setup() {
  createCanvas(WIDTH_CANVAS, HEIGHT_CANVAS).parent("sketch-pacman");
  for (let filaActual = 0; filaActual < ROWS; filaActual++) {
    for (let columnaActual = 0; columnaActual < COLUMNS; columnaActual++) {
      if (map[filaActual][columnaActual] === 1) {
        const roca = new GameObject(filaActual, columnaActual);
        console.log(`He creat roca a posicio fila ${ROWS}i columna ${COLUMNS}`);
        arrRocks.push(roca);
      } else if (map[filaActual][columnaActual] === 2) {
        const menjar = new GameObject(filaActual, columnaActual);
        console.log(`He creat roca a posicio fila ${ROWS}i columna ${COLUMNS}`);
        arrFood.push(menjar);
      }
    }
    console.log(arrRocks.length);
  }
}

function draw() {
  background(171, 248, 168);
  arrRocks.forEach((roca) => roca.showObject(imgRock));
  arrFood.forEach((menjar) => menjar.showObject(imgFood));
}

globalThis.setup = setup;
globalThis.draw = draw;
globalThis.preload = preload;
