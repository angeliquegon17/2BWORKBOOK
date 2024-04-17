let one, two, three, four, five, six;
function preload() {
  one = loadImage("data/DICE-01.png");
  two = loadImage("data/DICE-02.png");
  three = loadImage("data/DICE-03.png");
  four = loadImage("data/DICE-04.png");
  five = loadImage("data/DICE-05.png");
  six = loadImage("data/DICE-06.png");
  dice = [one, two, three, four, five, six];
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill(0);
  imageMode(CENTER);
  background(255, 100, 255);
  textSize(40);
}

function draw() {
  frameRate(4);
  image(
    random(dice),
    random(width),
    random(height),
    random(width) / 2,
    random(height) / 2
  );

  text("offline", random(width), random(height));
  text("algorithmic", random(width), random(height));
  text("thinking", random(width), random(height));
  // text("probability", random(width), random(height));
  text("dice", random(width), random(height));
  text("generative", random(width), random(height));
  //text("creative", random(width), random(height));
  //text("coding", random(width), random(height));
}
