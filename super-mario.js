let x = 100;
let y = 330; // y = feet position (aligned to top of ground)
let widthPlayer = 40;
let bodyHeight = 40;
let legHeight = 20;

// Horizontal movement
let velocityX = 0;
let acceleration = 1.2;
let friction = 0.9;
let maxSpeed = 14;

// Vertical movement
let verticalVelocity = 0;
let gravity = 0.8;
let jumping = false;

let platform = {
  x: 400,
  y: 250,
  width: 200,
  height: 20
};

// Ground
let groundY = 330; // top of the ground

function setup() {
  createCanvas(1000, 400);
}

function draw() {
  background(120, 190, 255); // sky

  drawGround();
  drawPlatform();
  handleMovement();
  applyGravity();
  drawPlayer();
}

function handleMovement() {
  if (keyIsDown(65)) { // A
    velocityX -= acceleration;
  }
  if (keyIsDown(68)) { // D
    velocityX += acceleration;
  }

  velocityX *= friction;
  velocityX = constrain(velocityX, -maxSpeed, maxSpeed);
  x += velocityX;

  x = constrain(x, 0, width - widthPlayer);
}

function keyPressed() {
  if (key === " ") jump();
}

function jump() {
  if (!jumping) {
    verticalVelocity = -15;
    jumping = true;
  }
}

function applyGravity() {
  let previousY = y;

  verticalVelocity += gravity;
  y += verticalVelocity;

  if (y > groundY) {
    y = groundY;
    verticalVelocity = 0;
    jumping = false;
  }
  if (
    verticalVelocity >= 0 && 
    x + widthPlayer > platform.x &&
    x < platform.x + platform.width &&
    previousY <= platform.y &&
    y >= platform.y
  ) {
    y = platform.y; // snap feet to top of platform
    verticalVelocity = 0;
    jumping = false;
  }
}

function drawPlayer() {

  fill(50, 50, 255);
  rect(x + 5, y - legHeight, 10, legHeight);  
  rect(x + 25, y - legHeight, 10, legHeight);  
  fill(255, 60, 60);
  rect(x, y - legHeight - bodyHeight, widthPlayer, bodyHeight);
  fill(255, 200, 180);
  ellipse(x + widthPlayer / 2, y - legHeight - bodyHeight - 20, 40, 40);
  fill(255, 60, 60);
  rect(x - 10, y - legHeight - bodyHeight + 10, 10, 30); 
  rect(x + widthPlayer, y - legHeight - bodyHeight + 10, 10, 30); 
}

function drawPlatform() {
  fill(150, 100, 10);
  rect(platform.x, platform.y, platform.width, platform.height);
}

function drawGround() {
  fill(60, 200, 90);
  rect(0, groundY, width, height - groundY);
}
