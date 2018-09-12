var stars = [];

var speed;

var backgroundstarsX = [];
var backgroundstarsY = [];

function setup() {
  createCanvas(innerWidth, innerHeight);
  for (var i = 0; i < 800; i++) {
    stars[i] = new Star();
  }

  for (let i = 0; i < 400; i++) {
    for (let j = 0; j < 400; j++) {
      let x = random(0, innerWidth);
      let y = random(0, innerHeight);
      backgroundstarsX.push([x]);
      backgroundstarsY.push([y]);
    }
  }

}

function draw() {

  speed = map(mouseX, 0, width, 0, 50);
  background(0);
  for (let j = 0; j < 400; j++) {
    fill(180);
    noStroke();
    ellipse(backgroundstarsX[j], backgroundstarsY[j], 2);
  }
  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}
