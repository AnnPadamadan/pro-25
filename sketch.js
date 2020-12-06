
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


engine = Engine.create()
world = engine.world


	//Create the Bodies Here.

db = new DustBin(590,650, 20, 80);
ball1 = new Ball(200, 200,35, 35);


ground1 = new Ground(400, 700, 800, 10);

var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 1200,
    height: 700,
    wireframes: false
  }
});

  Engine.run(engine);
  //Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  text(mouseX+ ", "+mouseY, mouseX, mouseY);

  
  ball1.display();
 db.display();
  
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85});
  
  }
}



