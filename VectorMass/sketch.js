var movers = [];

function setup(){
    createCanvas(innerWidth, innerHeight);    
    for(var i = 0; i < 2; i++){
        movers.push(new Mover());
    }
}

function draw(){    
    background(248,131,121);    

    for(var i = 0; i < movers.length; i++){
        var wind = createVector(0.2,0);
        var gravity = createVector(0,.5);
        //gravity.mult(movers[i].mass);
        movers[i].applyForce(gravity);
        movers[i].applyForce(wind);
        
        var friction = createVector(0,0);
        friction = movers[i].velocity;
        friction.normalize();
        
        var c = -0.1;
        friction.mult(c);
        
        movers[i].applyForce(c);
        
        movers[i].update();
        movers[i].edges();
        movers[i].display();
    }

    
}