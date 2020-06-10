var car, wall;
var car2, wall2;

var speed, weight;
var speed2, weight2;

var deformation;
var deformation2;

var gameState = "play";
var gameState2 = "play";

function setup() {
  createCanvas(1600,600);

  var divider = createSprite(800,300,1600,5);
  divider.shapeColor = "yellow";
  
  car = createSprite(50, 150, 30, 30);
  car.shapeColor = "white";

  car2 = createSprite(50, 450, 30, 30);
  car2.shapeColor = "white";

  wall = createSprite(1550, 150, 10, 100);
  wall2 = createSprite(1550, 450, 10, 100);

  speed = random(55,90);
  weight = random(400,1500);
  speed2 = random(55,90);
  weight2 = random(400,1500);

  deformation = (0.5 * weight * speed * speed)/ 22500;
  deformation2 = (0.5 * weight2 * speed2 * speed2)/ 22500;

}

function draw() {
  background("black");
  
  if(gameState === "play"){
    car.velocityX = speed;

    fill(0,255,0);
    textSize(25);
    text("STARrunner - Speed : " + Math.round(speed) + " - Weight : " + Math.round(weight), 450, 150);

    if(wall.x - car.x < (wall.width + car.width) / 2){
      gameState = "end";
      car.velocityX = 0;
    }

  }

  if(gameState2 === "play"){
    car2.velocityX = speed2;

    fill(0,255,0);
    textSize(25);
    text("ThunderBird - Speed : " + Math.round(speed2) + " - Weight : " + Math.round(weight2),450,450);

    if(wall2.x - car2.x < (wall2.width + car2.width) / 2){
      gameState2 = "end";
      car2.velocityX = 0;
    }

  }

  if(gameState === "end"){
    car.velocityX = 0;

    if(deformation > 180){
      car.shapeColor = "red";

      fill(0,255,0);
      textSize(25);
      text("STARrunner - Speed : " + Math.round(speed) + " - Weight : " + Math.round(weight), 450, 150);
      text("Crash Test Status : Excellent[A+]",470,180);
    }

    if(deformation < 180 && deformation > 100){
      car.shapeColor = "blue";

      fill(0,255,0);
      textSize(25);
      text("STARrunner - Speed : " + Math.round(speed) + " - Weight : " + Math.round(weight), 450, 150);
      text("Crash Test Status : Good[B+]",470,180);    
    }

    if(deformation < 100){
      car.shapeColor = "green";

      fill(0,255,0);
      textSize(25);
      text("STARrunner - Speed : " + Math.round(speed) + " - Weight : " + Math.round(weight), 450, 150);
      text("Crash Test Status : Needs Reform and ReTest",430,180);
    }

  }

  if(gameState2 === "end"){
    car2.velocityX = 0;

    if(deformation2 > 180){
      car2.shapeColor = "red";

      fill(0,255,0);
      textSize(25);
      text("ThunderBird - Speed : " + Math.round(speed2) + " - Weight : " + Math.round(weight2), 450, 450);
      text("Crash Test Status : Excellent[A+]",470,480);
    }

    if(deformation2 < 180 && deformation2 > 100){
      car2.shapeColor = "blue";

      fill(0,255,0);
      textSize(25);
      text("ThunderBird - Speed : " + Math.round(speed2) + " - Weight : " + Math.round(weight2), 450, 450);
      text("Crash Test Status : Good[B+]",470,480);    
    }

    if(deformation2 < 100){
      car2.shapeColor = "green";

      fill(0,255,0);
      textSize(25);
      text("ThunderBird - Speed : " + Math.round(speed2) + " - Weight : " + Math.round(weight2), 450, 450);
      text("Crash Test Status : Needs Reform and ReTest[C]",430,480);
    }
  }

  drawSprites();
}