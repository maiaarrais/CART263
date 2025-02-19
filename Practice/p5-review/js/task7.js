let size = 50;
let randomColor; 
let drawCircles = true;

function setup() {
  createCanvas(600, 600);
  randomColor = color(random(255), random(255), random(255)); 
}

function draw() {
  background(0);

  let cols = width / size; 
  let rows = height / size;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * size + size / 2; // Center x position
      let y = j * size + size / 2; // Center y position
      fill(randomColor); 

      if (drawCircles) {
        ellipse(x, y, size); 
      } else {
        rectMode(CENTER);
        rect(x, y, size, size); 
      }
    }
  }
}

function keyPressed() {
  if (key === ' ') { 
    randomColor = color(random(255), random(255), random(255));
  }
}

function mousePressed() {
    drawCircles = !drawCircles; 
  }