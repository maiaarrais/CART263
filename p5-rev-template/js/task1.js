"use strict";

function setup() {
  createCanvas(300, 300);

  background(0);
  
  let r, g, b;

  r = 159;
  g = 43
  b = 104;

  fill(r,g,b);
  ellipse(30, 30, 30);

  fill(r+59, g+69, b+110);
  ellipse (60, 60, 40);

  fill(r+96, g-43, b+96);
  ellipse (100, 100, 50);

}

function draw() {

}