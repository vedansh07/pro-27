
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new bob(300,200,40);
	bobObject2 = new bob(400,200,40);
	bobObject3 = new bob(500,200,40);
	bobObject4 = new bob(600,200,40);
	bobObject5 = new bob(700,200,40);

	roofObject= new roof(width/4,670,width,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();	
  bobObject4.display();
  bobObject5.display();
  
  roofObject.display();

  drawSprites();
 
}



