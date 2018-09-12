var m;

function setup(){
    createCanvas(innerWidth,innerHeight);    
    m = new Mover();
}

function draw(){    
    background(51);
    m.update();
    //m.edges();
    m.display();
    
}