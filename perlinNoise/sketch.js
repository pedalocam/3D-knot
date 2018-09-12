var inc = 0.01;
var start = 0;

function setup() {
		createCanvas(420,360);
}

function draw() {
		background(51);
		stroke(255);
		noFill();
		beginShape();
		var xoff = start;
		for(var x = 0; x < width; x++){
			var n = map(noise(xoff), 0, 1, 0, height);
			var s = map(sin(xoff), -1, 1, -50, 50);
			var y = s + n;

				//var y = noise(xoff) * 100 + height / 2 - 1 + sin(xoff) * height / 2 +5;
			vertex(x,y);

			xoff += inc;

}
		endShape();
		start += inc;
}
