"use strict";
let x, y, w; 
let r, g, b;

function setup() {
  createCanvas(300, 300);

  background(0);

}

function draw() {
  x = 0;
  y = 0; 
  w = 0; 
 
  r = 0; 
  g = 0; 
  b = 0; 

  fill(r+159, g+43, b+104);
  ellipse(x+30, y+30, w+30);

  fill(r+218, g+112, b+214);
  ellipse (x+60, y+60, w+40);

  fill(r+255, g+0, b+255);
  ellipse (x+100, y+100, w+50);
}