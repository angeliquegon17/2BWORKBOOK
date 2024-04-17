var capture;
function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size = (640, 480);
  imageMode(CENTER);
}

function draw() {
  if (!mouseIsPressed) {
    image(capture, mouseX, mouseY, 320, 240);
  } else {
    scale(-1.0, 1.0);
    image(capture, mouseX, mouseY, 320, 240);
    //filter(THRESHOLD);
  }
}

