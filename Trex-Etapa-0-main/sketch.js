
var trex ,trex_running;
var edges;
function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");

}

function setup(){
  createCanvas(600,200)
  
  //crie um sprite de trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);

  edges = createEdgeSprites();


  trex.scale = 0.5;
  trex.x = 50;
  
}

function draw(){
  background("gray");

  if(keyDown("space")){
    trex.velocityY = -10;
  }

  //Gerando gravidade para trex
  trex.velocityY = trex.velocityY + 0.5;

  //trex não cair = criando colisão com borda inferior
  trex.collide(edges[3]);


  console.log(trex.y);
  drawSprites();

}