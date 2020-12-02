const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4;
var pig1,pig2,pig3;
var log1,log2,log3,log4;
var bird1

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(760,height - 10,50,50);
    box2 = new Box(640,height - 10,50,50);
    pig1 = new Pig(700,height - 10);
    log1 = new Log(700,height - 30,200,PI/2);

    box3 = new Box(760,height - 40,50,50);
    box4 = new Box(640,height - 40,50,50);
    pig2 = new Pig(700,height - 40);
    log2 = new Log(700,height - 70,200,PI/2);

    pig3 = new Pig(700,height - 80);
    log3 = new Log(700,height - 160,200,-PI/1.1);
    log4 = new Log(710,height - 160,200,PI/1.1);

    bird1 = new Bird();

    ground = new Ground(600,height,width,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    pig3.display();
    log3.display();
    log4.display();

    bird1.display();

    ground.display();
}