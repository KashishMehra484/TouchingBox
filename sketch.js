var MovingRect,FixedRect;

function setup() {
  createCanvas(800,400);
MovingRect = createSprite(200, 200, 50, 50);
FixedRect = createSprite (150,200,50,50);
MovingRect.shapeColor ="red";
FixedRect.shapeColor = "blue";
}

function draw() {
  background(255,255,255);
  MovingRect.x=mouseX;
  MovingRect.y=mouseY; 
  if (MovingRect.x - FixedRect.x < MovingRect.width/2 + FixedRect.width/2 
  && FixedRect.x - MovingRect.x < MovingRect.width/2 + FixedRect.width/2
  && MovingRect.y - FixedRect.y < MovingRect.height/2 + FixedRect.height/2 
  && FixedRect.y - MovingRect.y< MovingRect.height/2 + FixedRect.height/2 ) {
  MovingRect.shapeColor = "pink";
  FixedRect.shapeColor = "green";  
  } 
  else{
   MovingRect.shapeColor ="red";
   FixedRect.shapeColor = "blue";  
  }
  drawSprites();
}