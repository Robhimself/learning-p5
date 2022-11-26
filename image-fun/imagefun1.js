//
let bubbleA;
let bubbleB;
let bubbleC;

function setup() {
  let myCanvas = createCanvas(800, 600);
  myCanvas.parent("app");
  bubbleA = new Bubble(50, 50, 25);
  bubbleB = new Bubble(150, 150, 50);
  bubbleC = new Bubble(250, 250, 75);
}

function draw() {
  background(200);

  if (bubbleA.intersects(bubbleB) || bubbleA.intersects(bubbleC)) {
    background(200, 0, 100);
  }

  bubbleA.show();
  bubbleA.x = mouseX;
  bubbleA.y = mouseY;

  bubbleB.show();
  bubbleB.move();

  bubbleC.show();
  bubbleC.move();
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }

  //super interessant å gi attributtene show() og move() mm. inne i classen.
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
    // også mulig å returnere samme if-sjekken som koden under, siden det vil returnere true/false. -> "return (d < this.r + other.r)"
    if (d < this.r + other.r) {
      return true;
    }
  }
}
