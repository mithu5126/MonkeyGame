
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score=0;
var ground;
var survivalTime=0;
var obstaclesGroup, bananaGroup;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(600,400)
 //creating the monkey 
monkey = createSprite(50,315,20,20);  
monkey.addAnimation("running",monkey_running);
monkey.scale=0.1;

//Creating the round  
ground = createSprite(400,350,1500,10);
ground.x=ground.width/2;
console.log(ground.x);
  ground.velocityX=-4;

//creating bananaGroup and obstaclesGroup
 FoodGroup =new Group ;
 obstacleGroup=new Group; 
}


function draw() {
background("white") ; 
 stroke("white"); 
textSize(20);  
 fill("white"); 
text("Score:" + score,500,50); 
  
stroke("black")
textSize(20); 
fill("black");  
survivalTime=Math.ceil(frameCount/frameRate()) 
text("Survival Time: "+ survivalTime,100,50); 
  
  if(keyDown("space")&&monkey.y >= 100 ){
  monkey.velocityY= -10;
     }
  
monkey.velocityY = monkey.velocityY + 0.8;  
  
  if(ground.x < 0){
    ground.x = ground.width/2.9;
  }
spawnBananas();
spawnObstacles();
  
monkey.collide(ground);
 drawSprites() ;
}
function spawnBananas(){
if (frameCount % 80 === 0) {
   banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
  banana.lifetime = 200;
    
      banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1; 
    
    //add each banana to the group
    FoodGroup.add(banana);
  }
}

function spawnObstacles(){
if (frameCount % 300 === 0) {
    obstacle = createSprite(600,325,20,20);
   // obstacle.y = Math.round(random());
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;               
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
  obstacle.lifetime = 200;
    
    
    
    //add each banana to the group
    obstacleGroup.add(obstacle);
  }
}


