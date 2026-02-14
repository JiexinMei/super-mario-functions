// Player position
let x = 100;
let y = 300;


let velocityX = 0;
let acceleration = 1.2;
let friction = 0.9;
let maxSpeed = 14;

// Jump state
let jumping = false;
let jumpFrame = 0;

function setup() {
  createCanvas(1000, 400);
}

function draw() {
  background(120, 190, 255); // sky

  // ground
  fill(60, 200, 90);
  rect(0, 330, width, 70);

  handleMovement();
  updateJump();
  drawPlayer();
}

function handleMovement() {


  if (keyIsDown(65)) {
    velocityX -= acceleration;
  }

  if (keyIsDown(68)) {
    velocityX += acceleration;
  }

  velocityX *= friction;

  velocityX = constrain(velocityX, -maxSpeed, maxSpeed);

  x += velocityX;

  x = constrain(x, 0, width - 40);
}

// ==================================================
// 🧠 JUMP FUNCTION
// ==================================================
function jump() {
  if (!jumping) {
    jumping = true;
    jumpFrame = 0;
  }
}

function keyPressed() {
  if (key === " ") jump();
}

function updateJump() {
  if (!jumping) return;

  jumpFrame++;

  let t = jumpFrame / 30;
  let height = sin(t * PI) * 120;
  y = 300 - height;

  if (jumpFrame >= 30) {
    jumping = false;
    y = 300;
  }
}

// ==================================================
// 🎨 DRAW PLAYER
// ==================================================
function drawPlayer() {
  fill(255, 60, 60);
  rect(x, y-60, 40, 40);
ellipse(x+20, y-80, 40, 40);
rect(x-10, y-60, 10, 50)
rect(x+40, y-60, 10, 50)
rect(x+5, y-20, 10, 50)
rect(x+25, y-20, 10, 50)
}
