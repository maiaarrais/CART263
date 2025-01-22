let canWidth = 600; // canvas width
let canHeight = 400; // canvas height
let rectWidth = canWidth / 3; // Each rectangle is 1/3 of the canvas width
let rectHeight = canHeight; 

const rectColors = {
    rect1: [0, 199, 193],
    rect2: [0, 72, 199],
    rect3: [21, 0, 199]
  };

  let currentColor1 = rectColors.rect1;
  let currentColor2 = rectColors.rect2;
  let currentColor3 = rectColors.rect3;

  function setup() {
    createCanvas(canWidth, canHeight);
  }

  function draw() {
    // First rectangle
    if (mouseX > 0 && mouseX < rectWidth) {
      currentColor1 = '255';
    } else {
      currentColor1 = rectColors.rect1;
    }
    fill(currentColor1);
    rect(0, 0, rectWidth, rectHeight);
  
    // Second rectangle
    if (mouseX > rectWidth && mouseX < rectWidth * 2) {
      currentColor2 = '255';
    } else {
      currentColor2 = rectColors.rect2;
    }
    fill(currentColor2);
    rect(rectWidth, 0, rectWidth, rectHeight);
  
    // Third rectangle
    if (mouseX > rectWidth * 2 && mouseX < rectWidth * 3) {
      currentColor3 = '255';
    } else {
      currentColor3 = rectColors.rect3;
    }
    fill(currentColor3);
    rect(rectWidth * 2, 0, rectWidth, rectHeight);
  }
  
  