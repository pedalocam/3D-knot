function setup(){
    createCanvas(innerWidth, innerHeight);

}

function draw(){    
    background(91);

    //steering = desired - velocity
    fill(51);
    strokeWeight(4);
    ellipse(mouseX, mouseY, 60, 60);
    vehicle();
}

function vehicle(){
    fill(51);
    let r = 30
    ellipse(innerWidth/2-r, innerHeight/2-r, r, r);
}

function steering(){
    
}