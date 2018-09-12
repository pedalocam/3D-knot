function Mover() {
    this.location = createVector(random(width), height/2);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.f = createVector(0,0);
    this.friction = createVector(0,0);
    this.c = -0.01;
    this.mass = random(0.5,5);
    this.r = random(1,62);
    this.g = random(1,150);
    this.b = random(1,270);
    
    this.applyForce = function(force){
        this.f.div(force, this.mass);
        this.acceleration.add(this.f);
    }
    
    this.update = function(){
        this.velocity.add(this.acceleration);
        this.location.add(this.velocity);
        this.acceleration.mult(0);
        //this.velocity.limit(5);
    }
      
//    this.applyFriction = function(_friction){
//        
//        this.friction = this.velocity;
//        this.friction.normalize;
//        this.friction.mult(this.c);
//        this.applyForce(this.c);
//    }
    
    this.edges = function(){    
        if (this.location.x > width) {
            this.location.x = width;
            this.velocity.x *= -1;
        } 
        
        else if (this.location.x < 0) {
            this.velocity.x *= -1;
            this.location.x = 0;
        }

        if (this.location.y > height) {
            this.velocity.y *= -1;
            this.location.y = height;
        }

    }

    this.display = function(){
        noStroke();
        fill(this.r, this.g, this.b);
        ellipse(this.location.x, this.location.y, this.mass*20, this.mass*20);

    }
}
