//physics engine
/*
Ball: circle--cricket ball. it will bounce but depends on the force given to it
Plastic ball
Tennis ball-- bounce a lot

Step1: Namespacing the big terms 
Eg: Namita Sancheti Kuppama
Short Name: Namita

//Namespacing
const Namita = Namita Sancheti Kuppama

const = constant(the value is fixed)

const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World

var - value will be keep on changing
const - value will be fixed

Step 2: You have to create engine

Matter.Engine.create();

Step 3: add the engine to the world.


//depends upon the shape creae the body(4,5 and 6)
Step 4: Create the body

Step 5: Add the body to the world

Step 6: use that shape and describe about it in function draw

Step 7: update the engine in the function draw

*/

const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var myEng;
var myWorld;


function setup() {

  //creating 
  createCanvas(400,400);

 myEng=Engine.create();
 myWorld = myEng.world;

 //rect body: ground
 ground = Bodies.rectangle(200,390,200,20,{isStatic:true});
 World.add(myWorld, ground);

 //circle     
ball= Bodies.circle(200,200,30,{restitution:0.5});
World.add(myWorld,ball );
 //console.log(ball);
}

function draw() {
  background("pink"); 
  
  Engine.update(myEng)
  
  rectMode(CENTER);
  rect (ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30);

  
 //drawSprites();
} 