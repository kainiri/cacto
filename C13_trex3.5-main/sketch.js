var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;

var cacto1, cacto2, cacto3, cacto4, cacto5, cacto6;
var cacto;
var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
  cacto1 = loadImage("obstlacle1.png");
  cacto2 = loadImage("obstlacle2.png");
  cacto3 = loadImage("obstlacle3.png");
  cacto4 = loadImage("obstlacle4.png");
  cacto5 = loadImage("obstlacle5.png");
  cacto6 = loadImage("obstlacle6.png");

}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)
  
}

function draw() {
  background(180);
  
  
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //gerar as nuvens
  spawnClouds();
  spawnobstacles();
  drawSprites();
}

function spawnClouds() {
  //escreva o código aqui para gerar as nuvens
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //atribua tempo de vida à variável
    cloud.lifetime = 200;
    
    //ajuste a profundidade
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}
function spawnobstacles() {
  if (frameCount %60 === 0){
cacto = createSprite(600,165,10,40);
 cacto.velocityX = -3;
 cacto.lifetime = 200;
 var cac = Math.round(random(1,6));
switch(cac){
  case 1: cacto.addImage(cacto1);
break;

 case 2: cacto.addImage(cacto2);
 break;
  case 3: cacto.addImage(cacto3);
  break;
  case 4: cacto.addImage(cacto4);
  break;
  case 5: cacto.addImage(cacto5);
  break;
  case 6: cacto.addImage(cacto6);
  break;

default:break;


}
 cacto.scale = 0.5;


  }
}
