let r = 0;
let g = 0;
let b = 0;

function setup() {
  createCanvas(400, 400);
  background(0);
  strokeWeight(8);
  strokeCap(ROUND);
}

function draw() {
  if (mouseIsPressed) {

    r = (r + 10) % 256;
    g = (g + 4) % 256;
    b = (b + 6) % 256;

    stroke(r, g, b);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function mousePressed(){
background(0)
}