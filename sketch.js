var helicopterIMG, hct, pkg,packageIMG;
var ground
var box1, box2, box3

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 600);

engine = Engine.create();
world = engine.world

var g = {

	isStatic: true
}

var p = {

	restitution:0
} 

box1 = new redzone(400,505,150,15);
box2 = new redzone(331,462,15,100);
box3 = new redzone(471,462,15,100);

pkg1 = createSprite(400,70,60,60)
pkg1.addImage(packageIMG)
pkg1.scale = 0.2

pkg = Bodies.circle(400,70,15,{restitution:0.4, isStatic:true})
World.add(world,pkg)


ground = createSprite(400,520,800,15)
ground.shapeColor = "brown"



ground = Bodies.rectangle(400,520,800,15,g)
World.add(world,ground)





hct = createSprite(400,50,60,60)
hct.addImage(helicopterIMG)
hct.scale = 0.5;


}


function draw() {
  
  background("lightblue");

  Engine.update(engine)

  
 


  keyPressed();

  pkg1.x= pkg.position.x
   pkg1.y= pkg.position.y
  
  


box1.display();
box2.display();
box3.display();

 drawSprites();
}

function keyPressed ()
{

  if(keyCode === DOWN_ARROW){
    Matter.Body.setStatic(pkg,false)
  }
}	





