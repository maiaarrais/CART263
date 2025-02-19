let counter = 0;
const orangeSquare = { w: 40, h: 40, x: 40, y: 40, color: [255, 165, 0] }; 
const redSquare = { w: 40, h: 40, x: 90, y: 40, color: [255, 0, 0] }; 

let radius = 40; 
let ellipseAlpha = 50; 

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);

  displaySquare(orangeSquare);
  displaySquare(redSquare);

  if (checkCollisionWithSquare(orangeSquare)) {
    fill(255, 200, 100); // Lighter orange
    rect(orangeSquare.x, orangeSquare.y, orangeSquare.w, orangeSquare.h);
  }
  if (checkCollisionWithSquare(redSquare)) {
    fill(255, 100, 100); // Lighter red
    rect(redSquare.x, redSquare.y, redSquare.w, redSquare.h);
  }

  // Draw ellipses if counter is between 1 and 10
  if (counter > 0 && counter <= 10) {
    let currentRadius = radius;
    let currentAlpha = ellipseAlpha;
    let ellipseCount = counter;

    while (ellipseCount > 0) {
      drawCircle(width / 2, height / 2, currentRadius, currentAlpha);
      currentRadius += 10; // Increase size of next ellipse
      currentAlpha += 20; // Increase alpha value of next ellipse
      ellipseCount--;
    }
  }
}

function displaySquare(square) {
  fill(square.color);
  rect(square.x, square.y, square.w, square.h);
}

// Function to check if mouse is inside a square
function checkCollisionWithSquare(square) {
  return mouseX > square.x && mouseX < square.x + square.w && mouseY > square.y && mouseY < square.y + square.h;
}

//draw circle
function drawCircle(x, y, radius, alpha) {
  fill(255, alpha);
  noStroke();
  ellipse(x, y, radius * 2);
}

function mousePressed() {
  if (checkCollisionWithSquare(orangeSquare)) {
    counter++;
  }

  if (checkCollisionWithSquare(redSquare)) {
    counter--;
  }
  counter = constrain(counter, 0, 10);
}
