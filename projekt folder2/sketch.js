var pos = {
	x:0,
	y:0
}

var col = {
	r:255,
	g:0,
	b:0
}

function setup() {
	createCanvas(800,400);
	background(0);
}

function draw() {
	
	pos.x = random(0,width);
	pos.y = random(0,height);
	
	col.r = random(0,255);
	col.g = random(0,255);
	col.b = random(0,255);
	
	noStroke();
	
	fill(col.r,col.g,col.b, 100);
	ellipse(pos.x, pos.y, 24,24);	
}

function mousePressed(){
	background(0);
}