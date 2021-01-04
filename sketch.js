
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperball;
var ground;
var bat, batsprite, batimg;
var sling1;

function preload()
{
	batimg = loadImage("Bat.png");
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	
	batsprite = createSprite(200, 500, 50, 50);
	batsprite.addImage("bat", batimg);
	batsprite.scale = 0.5;
	bat = new bar(200,500, 50, 200);
	paperball = new paper(1200,50,20);
	ground = new Ground(width/2,670,width,20);
	sling1 = new Sling(bat.body, {x: 150, y: 500});
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  batsprite.x = bat.body.position.x;
  batsprite.y = bat.body.position.y;

  ground.display();
  paperball.display();
  sling1.display();

 drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:-85,y:-85});
	}
}

function mouseDragged(){
	Matter.Body.setPosition(bat.body, {x: mouseX, y: mouseY})
}



