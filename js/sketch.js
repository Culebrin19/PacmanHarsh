const map = [
  [1, 1, 1, 1],
  [0, 1, 1, 0],
  [1, 1, 1, 1]
];

const ROWS = 4;
const COLUMNS = 4;
const IMAGE_SIZE = 32;
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
}

function draw() {
  background(171, 248, 168);
}

globalThis.setup = setup;
globalThis.draw = draw;
globalThis.preload = preload;
