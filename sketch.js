
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject,bobObject2,bobObject3,bobObject4,bobObject5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
var diameter = 50;
var engine, world;

function setup() {


	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,50,500,25);
	bobObject= new Bob(300,300,30,1.5);
	bobObject2= new Bob(320,300,30,1.5);
	bobObject3= new Bob(372,300,30,1.5);
	bobObject4= new Bob(415,300,30,1.5);
	bobObject5= new Bob(465,300,30,1.5);

	rope1 = new Rope(bobObject.body,roof.body, -diameter*2.5,0);
	rope2 = new Rope(bobObject2.body,roof.body, -diameter*1.5,0);
	rope3 = new Rope(bobObject3.body,roof.body, -diameter*0.25,0);
	rope4 = new Rope(bobObject4.body,roof.body, diameter*1.05,0);
	rope5 = new Rope(bobObject5.body,roof.body, diameter*2.025,0);

	Engine.run(engine);
  
}


function draw() {
	background(500,0,50);

	Engine.update(engine);

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

	roof.display();
	bobObject.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
 
}

function keyPressed(){
	if(keyCode === 38){
		Matter.Body.applyForce(bobObject.body, bobObject.body.position, {x:-150,y:1000});
	}
}