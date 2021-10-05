var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
  
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  ghost = createSprite(300,300) 
  ghost.addImage("ghost",ghostImg)
ghost.scale=0.4;
ghost.velocityY = 6;
ghost.debug=true
ghost.setCollider("rectangle",0,0,200,300)
climbersGroup= new Group()
doorsGroup= new Group()
}

function draw() {
  background(200);
  

  if(tower.y > 400){
      tower.y = 300
    }
if (keyWentDown("space")){

  ghost.velocityY=-4;
}
if (keyWentUp("space")){

  ghost.velocityY=6;
}
if (keyDown("Left")){

  ghost.x-=8;
}
if (keyDown("Right")){

  ghost.x+=8;
}
if (frameCount % 50===0){

  spawndoors()
}
ghost.collide(climbersGroup);



    drawSprites()
    if (ghost.y<0 || ghost.y>600){
fill("black")
      textSize(30)
      text ("game over",300,300)
    
      //spookySound.play()
      
      climbersGroup.setVelocityYEach(-10)
      doorsGroup.setVelocityYEach(-10)
    }
} 
function spawndoors (){

var door = createSprite(Math.round(random(100,500)),0)
door.addImage("door",doorImg)
door.velocityY=6;

var climber = createSprite(door.x,70)
climber.addImage("climber",climberImg)
climber.velocityY=6;

climbersGroup.add(climber);

doorsGroup.add(door);

climber.lifetime=300;
door.lifetime=300;
} 

