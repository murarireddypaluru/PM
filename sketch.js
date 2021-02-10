
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	boyImage = loadImage("boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	tree = new Tree(680, 500)
	ground = new Ground(400, 675, 800, 70)
	mango1 = new Mango(680, 400, 30, 30)
	mango2 = new Mango(670, 450, 30, 30)
	mango3 = new Mango(750, 460, 30, 30)
	mango4 = new Mango(575, 460, 30, 30)
	boy = createSprite(225, 600)
	boy.addAnimation("boy", boyImage)
	boy.scale = 0.1
	stone = new Stone(175, 550, 30, 30)
	launcher = new SlingShot(stone.body,{x:175, y:550})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  tree.display()
  ground.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  stone.display()
  detectollision(mango1)
  detectollision(mango2)
  detectollision(mango3)
  detectollision(mango4)
  drawSprites()
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher.fly();
}
function keyPressed(){
    if(keyCode == 32){
        launcher.attach(stone.body)
    }
}
function detectollision(lmango){
	if(stone.body == lmango.x && stone.body == lmango.y){
		Matter.Body.setStatic(lmango,false)
	}
}
