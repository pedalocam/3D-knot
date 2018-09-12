var inc = 0.1;
var start = 0;
var scl = 10;
var cols, rows;

var minSlider;
var maxSlider;

var particles = [];

var flowfield;

var zoff = 0;
//var fr;

function setup() {  
	createCanvas(400,400);
	cols = floor(width / scl);
	rows = floor(height / scl);
	fr = createP('');
	
	flowfeild = new Array(cols * rows);
	
	for(var i = 0; i <500; i++){
		particles[i] = new Particle();
	}	
	
}

function draw() {
//	background(255);
	var yoff = 0;	
	
	for(var y = 0; y < rows; y++){
		var xoff = 0;

		for(var x = 0; x < cols; x++){
			var index = x + y * cols;				
			var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;			
			var v = p5.Vector.fromAngle(angle);
			v.setMag(1);
			flowfeild[index] = v;
			xoff += inc;
			stroke(0,50);

			push();
			translate(x * scl, y * scl);
			rotate(v.heading());
			strokeWeight(1);
			line(0, 0, scl, 0);
			pop();

		}
		yoff += inc;
		zoff += 0.0003;

	}
	for(var i = 0; i < particles.length; i++){
		particles[i].follow(flowfeild);
		particles[i].update();
		particles[i].edges();
		particles[i].show();
	}
	
	fr.html(floor(frameRate()));
}