var attractors = [];
var particles = [];

function setup() {
  createCanvas(600, 600);
  for(let i = 0; i < 50; i++){
    particles.push(new Particle(random(width), random(height)));
  }    
}

function mousePressed(){
  attractors.push(createVector(mouseX, mouseY));
  for(var i = 0; i < particles.length; i++){
    console.log(particles[i]);
  }
}

  function draw() {
    background(51);
    stroke(255);
    strokeWeight(4);

    for(var i = 0; i < attractors.length; i++){
      stroke(0, 255, 0);
      point(attractors[i].x, attractors[i].y);
    }

    for(let i = 0; i < particles.length; i++){
      var particle = particles[i];
      for(let j = 0; j < attractors.length; j++){
        particle.attracted(attractors[j]);
      }        
      particle.update();
      particle.show();
    }
}
