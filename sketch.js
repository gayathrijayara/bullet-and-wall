var wall;
var thickness;
var speed;
var weight;
var bullet;
var lbullet;
var bulletspeed;
var lwall;
 var Lwall;
 var Lbullet;
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 50);
  wall=createSprite(1200,200,thickness,height/2);
  bullet.shapeColor="blue";
  wall.shapeColor=rgb(80,80,80);
  speed=random(223,321);
  weight=random(30,52)
  thickness=random(22,83)
  bullet.velocityX=speed;
  }
function draw() {
  background("white"); 
  if(hascollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  
    if(damage>10)
    {
      wall.shapeColor=rgb(255,0,0);
    }
    if(damage<10)
    {
      wall.shapeColor=rgb(0,255,0);
    }
  }
 drawSprites();
}
function hascollided(Lbullet,Lwall){
bulletRightEdge= Lbullet.x +Lbullet.width;
wallLeftEdge=Lwall.x;
if(bulletRightEdge>=wallLeftEdge)
{
  return true
}
return false;

}
