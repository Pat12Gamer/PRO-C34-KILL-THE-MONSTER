const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg;

function preload() {
  backgroundImg = loadImage("images/GamingBackground.png")
  superheroImg = loadImage("images/Superhero-01.png")
}

function setup() {
  createCanvas(1525, 750);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(500, 750, 1500, 10)

  hero = new Hero(200, 400, 200)

  box1 = new Box(900,500,80,70);
  box2 = new Box(900,500,80,70);
  box3 = new Box(900,500,80,70);
  box4 = new Box(800,600,70,70);
  box5 = new Box(800,600,70,70);
  box6 = new Box(800,600,70,70);
  box7 = new Box(700,700,70,70);
  box8 = new Box(700,700,70,70);
  box9 = new Box(700,600,70,70);
  box10 = new Box(600,400,70,70);
  box11 = new Box(600,400,70,70);
  box12 = new Box(600,400,70,70);
  box13 = new Box(500,300,70,70);
  box14 = new Box(500,300,70,70);
  box15 = new Box(400,300,70,70);
  box16 = new Box(400,300,70,70);
  box17 = new Box(400,300,70,70);

  monster = new Monster(1100, 400, 30)

  fly1 = new Fly(hero.body, {x: 200, y: 200})
  fly2 = new Fly(monster.body, {x: 1100, y: 200})
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  ground.display();

  hero.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();

  monster.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  fly1.fly();
}

