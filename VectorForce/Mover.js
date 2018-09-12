function Mover() {
    this.location = createVector(width/2, height/2);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.f = createVector(0,0);
    var mass = 1;
    
    this.applyForce = function(force){
        this.acceleration.add(force);
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
        fill(62);
        ellipse(this.location.x, this.location.y, 48, 48);

    }
}
