var man ,path,leftBoundary ,rightBoundary;
var manImage,pathImage

function preload(){

  //pre-load images

  manImage=loadAnimation("Runner-1.png","Runner-2.png");
  pathImage=loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImage);
  path.velocityY=4;
  path.scale=1.2;

  man=createSprite(175,340,30,30);
  man.addAnimation("manRunning",manImage);
  man.scale=0.08

  leftBoundary=createSprite(1,0,100,800);
  leftBoundary .visible=false

  rightBoundary=createSprite(499,0,100,800)
  rightBoundary.visible=false
}

function draw() {
  background(0);
  path.velocityY=3;

man.x= World.mouseX;

edges=createEdgeSprites();
man.collide(edges[3]);
man.collide(leftBoundary);
man.collide(rightBoundary);

if (path.y > 400){
  path.y=height/2;
}

drawSprites();
}
