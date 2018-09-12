function Mover() {
    this.location = createVector(random(width), random(height));
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
//    this.f = createVector(0,0);
    this.mass = random(0.5,4);
    this.r = random(140, 290);
    this.g = random(30,100);
    this.b = random(50,170);
 
    this.applyForce = function(force){
        this.f = p5.Vector.div(force, this.mass);
        this.acceleration.add(this.f);
    }
    
    this.update = function(){
        this.velocity.add(this.acceleration);
        this.location.add(this.velocity);
        this.acceleration.mult(0);
        //this.velocity.limit(5);
    }

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
