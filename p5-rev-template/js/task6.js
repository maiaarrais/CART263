let textObj = {
    content: "test",
    color: 255, 
    size: 28,
    x: 0,
    y: 0
  };
  
  function setup() {
    createCanvas(500, 500);
    textAlign(CENTER, CENTER);
  }
  
  function draw() {
    background(0);
  
    // Display "test" in the center of the screen
    textSize(textObj.size);
    fill(textObj.color);
    text(textObj.content, width / 2, height / 2);
  
    //Display counter from 0 to 9, offsetting x position
    for (let i = 0; i < 10; i++) {
      let xPos = 40 + i * 20; 
      text(i, xPos, 50);
    }
  
    //Display counter from 1 to 15, offsetting y position
    for (let i = 1; i <= 15; i++) {
      let yPos = 60 + i * 25; 
      text(i, 40, yPos); 
    }
    //BONUS: Display Counter inversely
    for (let i = 15; i >= 1; i--){
        let yPos = 80 + (15 - i) * 25;
        text(i, 450, yPos)
    }
}