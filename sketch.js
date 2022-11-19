var box;
var box2;
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);
  box.shapeColor = "white"
  box2 = createSprite(100,100,30,30);
  box2.shapeColor = "purple"
  box2.velocityX = 5
}

function draw() 
{
   background(30);

  if (keyIsDown(RIGHT_ARROW)) 
  {
    box.position.x = box.position.x +5;
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    box.position.x= box.position.x -5;
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    box.position.y = box.position.y - 5;
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    box.position.y = box.position.y + 5;
  }

  drawSprites();
}




