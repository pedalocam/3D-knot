
function setup() {
	createCanvas(600,400)
	
}

function draw() {
	background(51);
	
	noStroke();
	
	fill(100,157,164);
	
	for(var i = 20; i < width; i = i + 50)
	{
		ellipse(i,300,25,25);
	}
	
	fill(15,124,100);
	
	for(var i = 10; i < width; i = i + 50)
	{
		rect(i,100,25,25);
	}
}
