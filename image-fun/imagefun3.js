//
let icecream;
let bubbles = [];
let pictures = [];

function preload() {
  icecream = loadImage("images/icecream.jpg");
  for (let i = 0; i < 5; i++) {
    pictures[i] = loadImage(`images/${i}.jpg`);
  }
}

function setup() {
  let myCanvas = createCanvas(800, 600);
  myCanvas.parent("app");

  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(50, 100);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }
}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked(mouseX, mouseY);
  }
}

function draw() {
  background(100, 100, 255);

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].show();
    bubbles[i].move();
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.picture = random(pictures);
  }

  clicked(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      if (px > this.x && px < this.x + this.r && py > this.y && py < this.y + this.r) this.picture = icecream;
    }
  }

  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  show() {
    image(this.picture, this.x, this.y, this.r, this.r);
  }
}
