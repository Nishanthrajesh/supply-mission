var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody;
var box1,box2,box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() 
{
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 20,20);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 20 , {restitution:0.2,isStatic:true})
	World.add(world, packageBody);

	box2 = new BOX(500,650,20,100,"red");
	box3 = new BOX(295,650,20,100,"red");
	box1 = new BOX(400,690,200,20,"red");
	
	Engine.run(engine);
}


function draw() 
{
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();

  helicopterSprite.velocityX=0
	
  if(keyDown("down")) 
  {
	Matter.Body.setStatic(packageBody,false);
	packageSprite.velocityX=0
  }
  
  if(keyDown("right"))
  {
	helicopterSprite.velocityX=4
	Matter.Body.translate(packageBody,{x:4,y:0})
  }

  if(keyDown("left"))
  {
	helicopterSprite.velocityX=-4
    Matter.Body.translate(packageBody,{x:-4,y:0})
  }
	
	box1.display();
	box2.display();
	box3.display();
}