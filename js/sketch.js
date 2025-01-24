import { GameObject } from "./classes/GameObject.js";

const map = [
  [1, 1, 1, 1],
  [0, 1, 1, 0],
  [1, 1, 1, 1],
  [0, 0, 1, 1]
];

const ROWS = 4;
const COLUMNS = 4;
export const IMAGE_SIZE = 32;
const WIDTH_CANVAS = IMAGE_SIZE * COLUMNS;
const HEIGHT_CANVAS = IMAGE_SIZE * ROWS;

let imgRock;

const arrRocks = [];
const numberImagesLoaded = 0;
console.log("Boff");

function preload() {
  console.log("o");
  imgRock = loadImage("../img/roca.png", handleImage, handleError);
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
      }
    }
    console.log(arrRocks.length);
  }
}

function draw() {
  background(171, 248, 168);
  arrRocks.forEach((roca) => roca.showObject(imgRock));
}

globalThis.setup = setup;
globalThis.draw = draw;
globalThis.preload = preload;
