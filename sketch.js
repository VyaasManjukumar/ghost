var tower;
var towerImage;
var ghost;
var ghostImage;
var jumpingImage;


function preload(){
ghostImage=loadImage("ghost-standing.png");
jumpingImage=loadImage("ghost-jumping.png");
towerImage=loadImage("tower.png");  
}

function setup(){
createCanvas(600,600);
tower=createSprite(300,300);
tower.addImage(towerImage);
tower.velocityY=1;
  
ghost=createSprite(300,300);
ghost.addImage(ghostImage);
ghost.scale=0.5;
}

function draw(){
background("blue");
if(tower.y > 400){
      tower.y = 300
    }
  
if(keyWentDown("space")){
  ghost.addImage(jumpingImage);
  ghost.velocityY=-10;
}
 ghost.velocityY=ghost.velocityY+0.5; 
if(keyWentUp("space")){
  ghost.addImage(ghostImage);
}
 if(keyDown("left_arrow")){
  ghost.x=ghost.x-5; 
 } 
 if(keyDown("right_arrow")){
  ghost.x=ghost.x+5; 
 }  
  
 drawSprites();
}