//
// let bubbleA;
// let bubbleB;
// let bubbleC;

let bubbles = [];

function setup() {
  let myCanvas = createCanvas(1200, 800);
  myCanvas.parent("app");
  // bubbleA = new Bubble(50, 50, 25);
  // bubbleB = new Bubble(150, 150, 50);
  // bubbleC = new Bubble(250, 250, 50);
  for (let i = 0; i < 100; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(5, 15);
    bubbles[i] = new Bubble(x, y, r);
  }
}

function draw() {
  background(100, 100, 255);

  // if (bubbleA.intersects(bubbleB) || bubbleA.intersects(bubbleC)) {
  //   background(200, 0, 100);
  // }

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].show();
    bubbles[i].move();
  }

  // bubbleA.show();
  // bubbleA.x = mouseX;
  // bubbleA.y = mouseY;

  // bubbleB.show();
  // bubbleB.move();

  // bubbleC.show();
  // bubbleC.move();
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }

  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.brightness, 125);
    ellipse(this.x, this.y, this.r * 2);
  }

  intersects(other) {
    let d = dist(this.x, this.y, other.x, other.y);

    if (d < this.r + other.r) {
      return true;
    }
  }
}
