//Variable named "Stripes" to create a new group
var stripes;

function setup() {
  createCanvas(450, 400);
  for(var x=30;x<450;x=x+55){
    var stripes=createSprite(x,200,35,300);
    stripes.shapeColor="white";
  }

   //Draw stripes using for loop

}

function draw() {
  background("gray");

  drawSprites();
}
