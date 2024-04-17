var img, img2;
function preload() {
  img = loadImage("data/face_eyes_closed.png");
  img2 = loadImage("data/face_eyes_open.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  noStroke();
  fill(0);
}
function draw() {
  if (mouseIsPressed) {
    image(img, mouseX, mouseY, 150, 150);
  } else {
    image(img2, mouseX, mouseY, 150, 150);
  }
}
function keyPressed() {
  counter++;
  background(255, 255, 255, a);
}
let i = 0;
let txt =
  "welcome to the coding library\n Here you will explore the limits of creativity. HINT: there are none. Are you ready to explore the unexplored?\n Loading nonsense… Connecting to synaesthesia… Employing hacktivism..";
/* The text */
let speed = 5; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  document.getElementById("hoverTiles").style.visibility = "hidden";
  if (i < txt.length) {
    document.getElementById("typeTool").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    noFill();
  }
}
function loadPage() {
  document.getElementById("typeTool").style.display = "none";
  document.getElementById("loadPage").style.display = "none";
  document.getElementById("hoverTiles").style.visibility = "visible";
}
function w4() {
  document.getElementById("w4").style.visibility = "hidden";
  document.getElementById("w4frame").style.visibility = "visible";
}
function w4out() {
  document.getElementById("w4").style.visibility = "visible";
  document.getElementById("w4frame").style.visibility = "hidden";
}
function w5() {
  document.getElementById("w5").style.visibility = "hidden";
  document.getElementById("w5frame").style.visibility = "visible";
}
function w5out() {
  document.getElementById("w5").style.visibility = "visible";
  document.getElementById("w5frame").style.visibility = "hidden";
}
function w6() {
  document.getElementById("w6").style.visibility = "hidden";
  document.getElementById("w6frame").style.visibility = "visible";
}
function w6out() {
  document.getElementById("w6").style.visibility = "visible";
  document.getElementById("w6frame").style.visibility = "hidden";
}

