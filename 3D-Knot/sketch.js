let angle = 0;
let points = [100];
let point;

function setup() {
  createCanvas(900, 700, WEBGL);
}

function draw() {
  background(0);

  rotateY(angle);
  angle += 0.03;

  let beta = 0;

  stroke(255, 100, 200);
  strokeWeight(6);
  beginShape();
  while (beta < PI) {
    var r = 200 * (0.8 + 0.6 * sin(6 * beta));
    var theta = 2 * beta;
    var phi = 0.6 * PI * sin(12 * beta);
    var x = r * cos(phi) * cos(theta);
    var y = r * cos(phi) * sin(theta);
    var z = r * sin(phi);
    vertex(x, y, z);
    beta += 0.001;
  }
  endShape();
}
