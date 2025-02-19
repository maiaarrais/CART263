let x, y, w, h;
let r, g, b;

function setup(){
    createCanvas(400, 400)
    background(0);
    drawEllipse(30, 30, 30, 30, 159, 43, 104); 
    drawEllipse(60, 60, 40, 40, 218, 112, 214);
    drawEllipse(100, 100, 50, 50, 255, 0, 255);
}

function draw(){
    
}

function drawEllipse(x,y,w,h,r,g,b){
    push();
    fill(r,g,b);
    ellipse(x,y,w,h);
    pop();
}

