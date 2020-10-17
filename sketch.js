var wall, thickness;
var bullet, speed, weight;

function setUp(){
  createCanvas(1600, 400);

  thickness=random(223,321);
  speed=random(30,52);
  weight=random(400, 1500);
  bullet=createSprite(50, 200, 50, 50);
  bullet.shapeColor(rgb(255,255,255));
  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=(80,80,80);
  bullet.velocityX = speed;
}

function draw(){

  if(hasCollided(bullet, wall))
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10)
    {
      bullet.shapeColor=color(255,0,0);
    }
    if(damage<10)
    {
      bullet.shapeColor=color(0,255,0);
    }
  }

  drawSprites();
}

function hasCollided(lbullet, lwall)
{
    bulletRightEdge*lbullet.x*lbullet.width;
    wallLeftEdge*lwall.x;
    if (bulletRightEdge>=wallLeftEdge)
    {
        return true
    }
    return false;

}