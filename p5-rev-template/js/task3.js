function setup(){
    createCanvas(400, 400);

    let x = random(width);
    let y = random(height);
    let w = random(10, 40);
    let h = random(10, 40);
    rectangle = new Rectangle(x, y, w, h);
}

function draw(){
    background(0)
    rectangle.show(mouseX, mouseY);
    
}

function mouseClicked(){
   
    

}

function mouseMoved(){

}