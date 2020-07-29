var bullet, wall, speed, weight ,thickness;
function setup() {
  var canvas = createCanvas(1600,400);
  thickness = random(22,83); 
  weight = random(30,52); 
  speed=random(223,321);
  bullet = createSprite(55,200,50,10);
  bullet.shapeColor="white";
  wall = createSprite(1200,200,thickness,height/2);

    

  bullet.velocityX = speed;

}
function draw() {
  background("black");
  if(wall.x-bullet.x <= bullet.width/2+wall.width/2){
    bullet.velocityX=0;
    var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
    if (damage <= 10){
      wall.shapeColor = rgb(0, 255, 0);
    }
    
    else  {
      wall.shapeColor = rgb(255, 0, 0);
    }
  }



  drawSprites();
}