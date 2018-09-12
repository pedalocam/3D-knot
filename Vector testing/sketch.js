var ball;
var locationX;
var locationY;

function setup(){
    createCanvas(600,400);
    this.locationX = random(0,600);
    this.locationY = random(0,400);
}

function draw(){    
    background(51);
    ellipse(this.locationX,this.locationY,25,25);
    fill(250,150,135);
    noStroke();    
    force();
    edges();
}

function force(){
    this.locationX.add(.1);
    
}

function edges(){
    if(this.locationX > 600)
        this.locationX = 0;
}