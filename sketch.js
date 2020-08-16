const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
var world, engine;
var boxes = [];
var player;
var sling = [];
function setup() {
    createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;
    player = new Player();
    for (let i = 0; i< 10; i++) {
    boxes.push(new Static());
    }
}


function draw() {
  background(51);
  Engine.update(engine);
  for(var i = 0; i < 10; i++) {
    boxes[i].display();
  }
  if(keyDown (UP_ARROW)) {
  for(var i = 0; i < 10; i++)  {
    if(player.body.position.x - boxes[i].body.position.x < 100 && 
    boxes[i].body.position.x  - player.body.position.x && 
    player.body.position.y - boxes[i].body.position.y < 100 &&
    boxes[i].body.position.y  - player.body.position.y) {
      sling.push(new slingShot(player.body, boxes[i].body));
      break;
      console.log("constraint");
    }

  }
}
  for(var j = 0; j < sling.length; j++){
    sling[j].display();

  }
  if(sling != undefined && frameCount % 90 == 0) {
    for(var j = 0; j < sling.length; j++) {
      sling[j].fly();
    }
  }

  if(player.body.position.x > windowWidth - 150) {
    for(var j = 0; j < sling.length; j++) {
      sling[j].fly();
    }
    sling = [];
    for(var i = 0; i < 10; i++) {
      boxes[i].body.isStatic = false;
      World.remove(world, boxes[i]);
    }
    boxes = [];
    for (let i = 0; i< 10; i++) {
    boxes.push(new Static());
    }
    Matter.Body.setPosition(player.body, {x:random(10, windowWidth - 20), y:0 })
  }

  if(player.body.position.y > windowHeight * 2) {
    player.body.position.y = 10;

  }

  player.display();
}