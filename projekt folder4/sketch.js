var balls = [];
var ball = {
	x: 300,
	y: 200,
	xSpeed: 0,
	ySpeed: 0
}
var col = {
	r:0,
	g:0,
	b:0
}

function setup() {
	createCanvas(600,400);
	col.r = random(0,255);
	col.g = random(0,255);
	col.b = random(0,255);
	ball.xSpeed = random(2,6);
	ball.ySpeed = random(-4,-2);
}

function draw() {
	
	background(61);	
	move();
	bounce();
	display();
}

function move(){
	ball.x = ball.x + ball.xSpeed;
	ball.y = ball.y + ball.ySpeed;
}

function bounce(){
		
	if(ball.x > width || ball.x < 0){
		ball.xSpeed = ball.xSpeed * -1;
	}
	
	if(ball.y > height || ball.y < 0){
		ball.ySpeed = ball.ySpeed * -1;
	}
}

function display(){
	stroke(51);
	fill(col.r,col.g,col.b);
	for(var i = 0; i < 10 ; i++){
		
		ellipse(ball.x,ball.y,50,50);
		
	}
	balls.push(ball);
}