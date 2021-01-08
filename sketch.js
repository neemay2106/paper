var red,red1,red2,boxY,boxposition;
var ground,redbody,redbase,redbody2;
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
  paper = new paperclass(100,630,70,70);

  boxposition = width/1.6 ;
	boxY = 610;
	red = createSprite(boxposition,boxY,20,100);
	red.shapeColor = "red";
	redbody = Bodies.rectangle(boxposition + 200 , boxY,20,100,{isStatic:true} );
	
	World.add(world,redbody);

	red1 = createSprite(boxposition + 100 ,boxY + 40,200,20);
	red1.shapeColor = "red";
	redbase = Bodies.rectangle(boxposition + 100 , boxY + 45 - 20,200,20,{isStatic:true} );
	World.add(world,redbase);
	red2 = createSprite(boxposition + 200 ,boxY,20,100);
	red2.shapeColor = "red";
	redbody2 = Bodies.rectangle(boxposition + 200 -20  , boxY,20,100,{isStatic:true} );
	World.add(world,redbody2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  paper.display();
  drawSprites();
                 
}






