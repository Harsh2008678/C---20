var movingrect;
var fixedrect;


function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400,200,80,80);
  fixedrect.shapeColor = "black";
  fixedrect.debug = true;
  movingrect = createSprite(400, 200, 50, 50);
  movingrect.shapeColor = "purple";
  movingrect.debug = true;
}

function draw() {
  background("chartreuse");  
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
  if (movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2 && fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2 && fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2 && movingrect.y - fixedrect.y < fixedrect.height/2 + movingrect.height/2)
  {
    movingrect.shapeColor = "green";
  }else 
  {
    movingrect.shapeColor = "purple";
  }
  drawSprites();
}