var img, img2;
function preload() {
img= loadImage("data/face_eyes_closed.png");
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
  fill(0);
}
let i = 0;
let txt =
  "welcome to the coding library\n Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ad aperiam deserunt voluptates dolorum. Consectetur eaque obcaecati omnis, sunt, distinctio quo placeat est atque tempora, molestias officiis molestiae veritatis suscipit.\n enter your name to enter the library";
/* The text */
let speed = 5; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  document.getElementById("hoverTiles").style.visibility = "hidden";
  if (i < txt.length) {
    document.getElementById("typeTool").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
function loadPage() {
  document.getElementById("typeTool").style.display = "none";
  document.getElementById("loadPage").style.display = "none";
  document.getElementById("hoverTiles").style.visibility = "visible";
}
/*function columns() {
  background(0, 0, 204);
  if (mouseX < windowWidth / 4) {
    rect(0, 0, windowWidth / 4, windowHeight); // 1
  } else if (mouseX < windowWidth / 2) {
    rect(windowWidth / 4, 0, windowWidth / 4, windowHeight); // 2
  } else if (mouseX < (3 * windowWidth) / 4) {
    rect(windowWidth / 2, 0, windowWidth / 4, windowHeight); // 3
  } else {
    rect((3 * windowWidth) / 4, 0, windowWidth / 4, windowHeight); // 4
  }
}
*/
function hover() {
  document.getElementById("w4").onmouseover = functio
}
