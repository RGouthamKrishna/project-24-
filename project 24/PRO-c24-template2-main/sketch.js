const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;




function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    ruBber = new Rubber(100,20,20);
    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(50,20);
   
    
    iron = new Iron(200,40);
    stone = new Stone(200,10)

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    ruBber.display();
    iron.display();
    stone.display();
 
}