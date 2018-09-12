
var circles = [];

function setup() {
	createCanvas(innerWidth, innerHeight);
	background(255);

	while(circles.length < 1000){
		var circle = {
			x: random(0,innerWidth),
			y: random(0,innerHeight),
			r: random(6,20),
			r: random(121,248),
			g: random(131,248),
			b: random(191,248)
		};

		var overlapping = false;

		for(var j = 0; j < circles.length; j++){
			var other = circles[j];
			var d = dist(circle.x, circle.y, other.x, other.y);

			if(d < circle.r + other.r){
				overlapping = true;
				break;
			}
		}

		if(!overlapping){
			circles.push(circle);
		}
	}



	for(var i = 0; i < circles.length; i++){
		fill(circles[i].r,circles[i].g,circles[i].b);
		stroke(255);
		ellipse(circles[i].x, circles[i].y, circles[i].r*2,circles[i].r*2);
	}

}

function draw() {

}
