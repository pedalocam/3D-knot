var circle = {
	x:0,
	y:200,
	diameter:50
};
var circle2 = {
	x:400,
	y:200,
	diameter:50
};

var velX = 1;
var val1 = 5;
var val2 = 5;

var r = 0;
var g = 0;
var b = 0;

var col = 0;

function setup() {
	createCanvas(800,400);
}

function draw() {
	
	r = map(mouseX,0,800,0,255);
	g = map(mouseY,0,400,0,255);
	b = map(mouseX,0,800,255,0);

	
	background(r,g,b);
	fill(250,200,200);
	ellipse(circle.x, circle.y, circle.diameter, circle.diameter);
	circle.x = circle.x + val1;
	
	fill(200,250,200);
	ellipse(circle2.x, circle2.y, circle2.diameter, circle2.diameter);
	circle2.y = circle2.y + val2;
	
	fill(150,155,100);
	ellipse(mouseX, 100, 50, 50);
	
	if(circle.x>800 || circle.x<0)
	{
		val1 = val1*(-1);
	}	
	if(circle2.y>400 || circle2.y<0)
	{
		val2 = val2*(-1);
	}	
}
