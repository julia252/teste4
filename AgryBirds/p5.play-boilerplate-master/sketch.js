var retFixo, retMovendo;

function setup() {
  createCanvas(800,400);

  retFixo = createSprite(200,200,50,80);
  retFixo.shapeColor = "green";
  retFixo.debug = true;

  retMovendo = createSprite(400,100,30,45);
  retMovendo.shapeColor = "green";
  retMovendo.debug = true;
  
}

function draw() {
  background(0,0,0);  

  retMovendo.x = World.mouseX;
  retMovendo.y = World.mouseY;

  if(retMovendo.x - retFixo.x < retFixo.width/2 + retMovendo.width/2){
    retMovendo.shapeColor = "red";
    retFixo.shapeColor = "red";
  }
  else{
    retMovendo.shapeColor = "green";
    retFixo.shapeColor = "green";
  }
  drawSprites();
}