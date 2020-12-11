var fixedRect, movingRect;
var newRect;
var psa;
function setup() {
  createCanvas(400,400);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(100,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  newRect = createSprite(300, 50, 80, 50);
  newRect.shapeColor = "green";
  psa = createSprite(200, 50, 60, 60);
  psa.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, fixedRect))
  {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else if(isTouching(movingRect, newRect)){
    movingRect.shapeColor = "red";
    newRect.shapeColor = "red";
  }
  else if(isTouching(movingRect, psa)){
  movingRect.shapeColor = "blue";
  psa.shapeColor = "blue";
  }

  
  else
  {
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  newRect.shapeColor = "green";
  psa.shapeColor = "green";
  }
  
  drawSprites();
}
