function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  if (mouseIsPressed) {
    noStroke();
    fill(255);
    circle(mouseX, mouseY, 20);
  }
}