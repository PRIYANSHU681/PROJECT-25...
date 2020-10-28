
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
		ball= new paperclass(50,650,60);
		ground = new Ground(width/2, 680, width, 35 )
		dustbin1= new dustbin(1000,650)
}



function draw() {
  rectMode(CENTER);
  background("pink");
  Engine.update(engine);
  ball.display();
 ground.display();
 dustbin1.display();
 
 
}

	function keyPressed() {
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:800,y:-800})
	}
	}