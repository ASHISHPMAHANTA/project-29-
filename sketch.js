const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,ground1,ground2;
var block1,block2,block3,block4,block5,block6;
var block7,block8,block9,block10;
var block11,block12,block13;
var slingShot;
var ball;


function setup() {
  createCanvas(1200,450);
  engine = Engine.create();
  world = engine.world;


 block1 = new Block(820,355,30,40);
 block2 = new Block(790,355,30,40);
 block3 = new Block(760,355,30,40);
 block4 = new Block(850,355,30,40);
 block5 = new Block(880,355,30,40);
 block6 = new Block(730,355,30,40);

 block7 = new Block(790,315,30,40);
 block8 = new Block(820,315,30,40);
 block9 = new Block(850,315,30,40);
 block10 = new Block(760,315,30,40);

 block11 = new Block(790,275,30,40);
 block12 = new Block(820,275,30,40);

block13 = new Block(805,235,30,40);

block14 = new Block(1060,275,30,40);
block15 = new Block(1030,275,30,40);
block16 = new Block(1000,275,30,40);
block17 = new Block(970,275,30,40);
block18 = new Block(940,275,30,40);

block19 = new Block(1045,235,30,40);
block20 = new Block(1015,235,30,40);
block21 = new Block(985,235,30,40);
block22 = new Block(955,235,30,40);

block23 = new Block(1030,195,30,40);
block24 = new Block(1000,195,30,40);
block25 = new Block(970,195,30,40);

block26 = new Block(1015,155,30,40);
block27 = new Block(985,155,30,40);
block28 = new Block(1000,115,30,40);

ground = new Ground(805,380,230,5);
ground1 = new Ground(600,440,1200,10);
ground2 = new Ground(1000,300,200,5);

ball = new Ball(100,100,50,50);
slingShot = new Slingshot(ball.body,{x:200,y:100});
}

function draw() {
  background(150);  
  Engine.update(engine);

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();

block7.display();
block8.display();
block9.display();
block10.display();

block11.display();
block12.display();

block13.display();
block14.display();
block15.display();
block16.display();
block17.display();
block18.display();

 block19.display();
 block20.display();
 block21.display();
 block22.display(); 

 block23.display();
 block24.display();
 block25.display();

 block26.display();
 block27.display();
 
 block28.display();


ball.display();
slingShot.display();

ground.display();
ground1.display();
ground2.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
  }
  
  function mouseReleased(){
  slingShot.fly();
  
  }