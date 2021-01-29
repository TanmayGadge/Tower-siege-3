const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, ground2;
var box1, box2, box3, box4, box5, box6, box7, box9, box10;
var box11, box12, box13, box14, box15, box17, box18, box19, box20;
var box21, box22, box23, box24, box25;
var polygon, chain, score;

function preload() {

}

function setup() {
    createCanvas(1400, 700);


    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(485, 650, 500, 15);
    ground2 = new Ground(1090, 450, 300, 15);

    box1 = new Box(350, 613, 45, 60);
    box2 = new Box(395, 613, 45, 60);
    box3 = new Box(440, 613, 45, 60);
    box4 = new Box(485, 613, 45, 60);
    box5 = new Box(530, 613, 45, 60);
    box6 = new Box(575, 613, 45, 60);
    box7 = new Box(620, 613, 45, 60);


    //level 2
    box8 = new Box(395, 553, 45, 60);
    box9 = new Box(440, 553, 45, 60);
    box10 = new Box(485, 553, 45, 60);
    box11 = new Box(530, 553, 45, 60);
    box12 = new Box(575, 553, 45, 60);

    //level 3
    box13 = new Box(440, 493, 45, 60);
    box14 = new Box(485, 493, 45, 60);
    box15 = new Box(530, 493, 45, 60);

    //level 4 | top level
    box16 = new Box(485, 433, 45, 60);



    //level 1
    box17 = new Box(1000, 413, 45, 60);
    box18 = new Box(1045, 413, 45, 60);
    box19 = new Box(1090, 413, 45, 60);
    box20 = new Box(1135, 413, 45, 60);
    box21 = new Box(1180, 413, 45, 60);

    //level 2
    box22 = new Box(1045, 353, 45, 60);
    box23 = new Box(1090, 353, 45, 60);
    box24 = new Box(1135, 353, 45, 60);

    //level 3 | top level
    box25 = new Box(1090, 293, 45, 60);

    polygon = new Polygon(100, 400, 20);


    chain = new SlingShot(polygon.body, { x: 100, y: 400 });

    score = 0;

    Engine.run(engine);
}

function draw() {
    background(56, 44, 44);

    ground1.display();
    ground2.display();

    push();
    fill(62, 224, 208);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    pop();

    push();
    fill(255, 192, 203);
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    pop();

    push();
    fill(135, 206, 234);
    box13.display();
    box14.display();
    box15.display();
    pop();

    push();
    fill(128, 128, 128);
    box16.display();
    pop();


    push();
    fill(135, 206, 234);
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    pop();

    push();
    fill(63, 244, 208);
    box22.display();
    box23.display();
    box24.display();
    pop();

    push();
    fill(255, 192, 203);
    box25.display();
    pop();


    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();

    polygon.display();
    chain.display();

    textSize(20);
    text("Score: " + score, 750, 40);
}

function mouseDragged() {
    Body.setPosition(polygon.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
    chain.fly();
}

function keyPressed() {
    if (keyCode === 32) {
        chain.attach();
    }
}