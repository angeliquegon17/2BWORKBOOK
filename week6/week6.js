var storageData = [82, 220, 310, 99];
var total;
var randColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //noLoop();
}

function drawPI() {
  let lastPiece = 0;
  let total = getTotal(storageData);
  for (let i = 0; i < storageData.length; i++) {
    let randColor = color(random(255), random(255), random(255));
    let piece = map(storageData[i], 0, total, 0, TWO_PI);
    fill(randColor);
    stroke(0, 0, 0);
    arc(random(width), random(height), 300, 300, lastPiece, lastPiece + piece);
    lastPiece += piece;
  }
}
function draw() {
  let lastPiece = 0;
  let total = getTotal(storageData);
  for (let i = 0; i < storageData.length; i++) {
    let randColor = color(random(255), random(255), random(255));
    let piece = map(storageData[i], 0, total, 0, TWO_PI);
    fill(randColor);
    stroke(0, 0, 0);
    arc(width / 2, height / 2, 300, 300, lastPiece, lastPiece + piece);
    lastPiece += piece;
  }
}

function getTotal(data) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total += data[i];
  }
  return total;
}
