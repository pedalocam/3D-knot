function Mover(x,y,velX,velY) {
    this.location = createVector(width/2, height/2);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(1, 0);
    
    this.update = function(){
        this.mouse = createVector(mouseX, mouseY);
        this.mouse.sub(this.location);
        this.mouse.setMag(.5);
        this.acceleration = this.mouse;
        
        this.velocity.add(this.acceleration);
        this.location.add(this.velocity);
        this.velocity.limit(5);
    }

    this.edges = function(){    
        if(this.location.x > width)     this.location.x = 0;
        if(this.location.x < 0)         this.location.x = width;
        if(this.location.y > height)    this.location.y = 0;
        if(this.location.y < 0)         this.location.y = height;
    }

    this.display = function(){
        stroke(0);
        strokeWeight(2);
        fill(127);
        ellipse(this.location.x, this.location.y, 48, 48);

    }
}
