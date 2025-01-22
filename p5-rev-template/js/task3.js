x1 = 20;
x2 = 40; 
x3 = 40; 
y1 = 20; 
y2 = 40; 
y3 = 300;
w = 50;
r1 = 218;
r2 = 255;
r3 = 199; 
g1 = 247; 
g2 = 195;
g3 = 0;
b1 = 166;
b2 = 0;
b3 = 57;

function setup(){
    createCanvas(400, 400);

}

function draw(){
    background(0);
    fill(r1, g1, b1);
    rect(x1, y1, w);
    fill(r2, g2, b2);
    rect(x2, y2, w);
    movingSquare();
    fill(r3, g3, b3);
    rect(x3, y3, w);
    
}

function mouseClicked(){
   x1 += 30 ;
   if (x1 > width){
    x1 = 20;
   }

}

function movingSquare(){
    if (y3 <= width){
        y3 += 5;
        x3 = x1
    }
    else if (y3 >= width){
        y3  = 20;
    }

}

function keyPressed(){
    if (keyCode === ''){
        x2+=20;
        y2+=15;
    }
    if (y2 >=height || x2 >=width){
        y2 = 40;
        x2 = 40;
    }
}