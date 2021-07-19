
var shipImages,ship,seaImage,sea;

function preload(){
  seaImage=loadImage("sea.png");
  shipImages=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  //Creating canvas
  createCanvas(400,400);
  
  //Creating Ship
  ship=createSprite(20,190,20,20);
  ship.addAnimation("ship",shipImages);
  
  //Creating Sea
  sea=createSprite(200,180,400,20);
  sea.addImage("sea",seaImage);
  sea.x = sea.width/2;

}

function draw() {
  background("blue");

  sea.velocityX = -2
  console.log(sea.x)

  if(sea.x<0){
    sea.x = sea.widht/2;
  }

  if(keyDown("right")){
    ship.x = ship.x+2;
  }

  if(keyDown("left")){
    ship.x = ship.x-2;
  }

  ship.collide(sea);
  drawSprites();
}