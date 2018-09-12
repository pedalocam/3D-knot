var m;

function setup(){
    createCanvas(640, 360);    
    m = new Mover();
}

function draw(){    
    background(248,131,121);
    
    var wind = createVector(0.2,0.5);
    var gravity = createVector(0,2);
    
    m.applyForce(gravity);
    
    m.applyForce(wind);
       
    m.update();
    m.edges();
    m.display();
    
}