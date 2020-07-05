var PLAY = 1;
var END = 0;
var gameState = PLAY;


var ground, peopleGroup,buildingsGroup;
var score;
var helicopter

var helicopterimg,fuelimg,waterimg,b1,b2,b3,b4,b5,b6,b7,b8,b9,cloudsimg,ropeimg;
var p1,p2,p3,p4,p5;

function preload () {
  helicopterimg=loadImage("helicopter.png");
  fuelimg=loadImage("fuel.jpg");
  cloudsimg=loadImage("clouds.png");
  b3=loadImage("building3.png");
  b2=loadImage("building2.png");
  b1=loadImage("building1.png");
  b4=loadImage("building4.png");
  b5=loadImage("building5.jpg");
  b6=loadImage("building6.jpg");
  b7=loadImage("building7.jpg");
  b8=loadImage("building8.png");
  b9=loadImage("building9.png");


  p1=loadImage("people1.png");
  p2=loadImage("people2.png");
  p3=loadImage("people3.png");
  p4=loadImage("people4.png");
  p5=loadImage("people5.png");
  
  
 // ropeimg=loadImage("rope.png");
 // waterimg=loadImage("water.png");
 }

function setup() {
  createCanvas(displayWidth-50,displayHeight-150);
  helicopter = createSprite(50,180,20,50);
  helicopter.addImage(helicopterimg);
  helicopter.scale=0.1;
  
  rope=createSprite(50,50,10,300);
  //rope.addImage(ropeimg);

  ground = createSprite(displayWidth,displayHeight-280,displayWidth*2,20);
  ground.x = ground.width /2;
  ground.velocityX = -4;
 // ground.addImage(waterimg);
  ground.shapeColor="lightblue"
  buildingsGroup = new Group();
  peopleGroup = new Group();
  score = 0;
}


function draw() {
background("white");
text("Score: "+ score, displayWidth-200,50);

helicopter.x = mouseX;
helicopter.y = mouseY;
rope.y=mouseY+150;
rope.x=mouseX;
if(peopleGroup.isTouching(rope)){
score=score+1;
}


if(ground.x < 0){
  ground.x = ground.width/2;
}
createBuildings();
createPeople();
spawnClouds();

  drawSprites();
  fill("blue");
  noStroke();
  shape(0,displayHeight-150,0,displayHeight-280,displayWidth-50,displayHeight-280,displayWidth-50,displayHeight-150);
}

function createBuildings(){
 if(frameCount % 60===0){
  var buiding=createSprite(displayWidth-50,displayHeight-280,30,100);
  buiding.velocityX=-6;
 var number=Math.round(random(1,9)) 
 
 switch(number){
  case 1: buiding.addImage(b3);buiding.scale=1.2;break;
  case 2:buiding.addImage(b2);buiding.scale=1.2;break;
  case 3:buiding.addImage(b1);buiding.scale=1.2;break;
  case 4:buiding.addImage(b4);buiding.scale=1.2;break;

  case 5:buiding.addImage(b5);buiding.scale=1.5;break;
  case 6:buiding.addImage(b6);buiding.scale=1.6;break;
  case 7:buiding.addImage(b7);buiding.scale=0.25;break;
  case 8:buiding.addImage(b8);buiding.scale=0.8;break;
  case 9:buiding.addImage(b9);buiding.scale=0.6;break;
 }

 var People=createSprite(buiding.x,buiding.y-150,20,30);
 People.velocityX=-6;
 People.shapeColor="Red";
 peopleGroup.add(People);
 var number1=Math.round(random(1,5)) 

switch(number1){
case 1:People.addImage(p3);People.scale=0.1;break;
case 2:People.addImage(p2);People.scale=0.1;break;
case 3:People.addImage(p1);People.scale=0.1;break;
case 4:People.addImage(p4);People.scale=0.1;break;
case 5:People.addImage(p5);People.scale=0.1;break;

}
 
 } 


}
function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 120 === 0) {
    var cloud = createSprite(displayWidth-50,displayHeight-500,10,10);
    cloud.y = random(0,displayHeight-500);
    cloud.addImage(cloudsimg);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    cloud.depth=helicopter.depth;
    helicopter.depth=helicopter.depth+1;
    rope.depth=helicopter.depth;
    

     //assign lifetime to the variable
    //cloud.lifetime = (displayWidth-50)/3;
  }
  }
function createPeople(){
  if(frameCount% 60===0){
   

  }
}








    
