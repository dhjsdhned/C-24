// all these are modules in the library: matter.min.js
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// create variables for the up button and the for the fixed angle of the spinner
var btn2;
var angle=60; 


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  // makes sure that the ball bounces and that it stops after sometime due to air friction
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   // makes sure that the body does not move and remains in the same place
   var ground_options ={
     isStatic: true
   };
  // create button so that when we press it, the ball will move upwards
   btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);

  ground = Bodies.rectangle(100,400,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  // create a rotating body in the memory location of the computer
  spinner= Bodies.rectangle(100,300,100,20, ground_options);
  World.add(world,spinner);
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
   
  console.log(ground.position.y);
  Matter.Body.rotate(spinner,angle);

  // without this, the ball is not visible and is present only in the memory location of the computer
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,500,20);

  // start the settings
  push();
  // make sure that the spinner rotates on its own axis and at the gived coordinates
  translate(spinner.position.x, spinner.position.y);
  // this enables the body to rotate in a particular angle
  rotate(angle);
  // origin has to be (0,0) for the body to rotate
  rect(0,0,100,20);
  // to stop the settings
  pop ();

  // used to increment/increase the speed of the spinner
  angle+=0.1;

}  
// this function is responsible to make the ball move upwards
function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  