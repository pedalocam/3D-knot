function Bubble(x, y) {
	this.x = x;
	this.y = y;
	this.col = color(225,100);
	this.radius = 24;
	this.click = false;


	this.display = function() {
		stroke(0);
		fill(this.col);
		ellipse(this.x, this.y, this.radius, this.radius);
	}

	this.clicked = function() {
		var d = dist(mouseX, mouseY, this.x, this.y);
		if (d < this.radius/2){
			print("purple");
			if(this.click == false){
				this.col = color(random(0,255),random(0,225),random(0,225),random(0,225)); 
				print("purple");
				this.click = true;
			}					
			else if (this.click == true){
				this.col = color(random(0,255),random(0,225),random(0,225),random(0,225));
				print("grey");
				this.click = false;
			}
		}		
	}

	this.move = function() {
		this.x = this.x + random(-1, 1);
		this.y = this.y + random(-1, 1);
	}
}