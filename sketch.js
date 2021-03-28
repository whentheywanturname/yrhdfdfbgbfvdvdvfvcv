var blob;
var f;
function preload(){
  f = loadImage("test drawing(2).png")
}
function setup() {
  createCanvas(800,400);
  blob=createSprite(400, 200, 50, 50);
  
}

function draw() {
  background("magenta");  
  if(keyDown=UP_ARROW){
    blob.y=blob.y+10;
  }
  if(keyDown=UP_ARROW){
    blob.y=blob.y-10;
  }
  if(keyDown=LEFT_ARROW){
    blob.x=blob.x-10;
  }
  if(keyDown=RIGHT_ARROW){
    blob.x=blob.x+10;
  }
  drawSprites();
}