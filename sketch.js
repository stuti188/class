const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope;
var fruit;
var fruitConstraint;

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
  rope = new Rope(5,{x:250,y:10});

  fruit = Bodies.circle(250,450,15);
  World.add(world,fruit);
  Matter.Composite.add(rope.body,fruit)
//we attached fruit to the rope
fruitConstraint = new Link(rope,fruit);
//total number of objects making up the rope is 6
//he index of the 6 objects are 0,1,2,3,4,5.
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ground.show();
  
  ellipse(fruit.position.x,fruit.position.y,15,15);
  rope.show(); 
  
  

 
   
}
