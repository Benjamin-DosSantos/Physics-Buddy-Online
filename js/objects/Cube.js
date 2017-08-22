function Cube(xPos, yPos, width, height){
	this.xPos = xPos;
	this.yPos = yPos;
	this.width = width; 
	this.height = height;
	this.xAcceleration = 0;
	this.yAcceleration = 0;
	this.xSpeed = 0;
	this.ySpeed = 0;

	this.passedHeight = false;

	var traceIntervel = 5;
	var sinceLastTrace = traceIntervel;

	this.draw = function(){
		fill(204, 101, 192, 127);
  		stroke(127, 63, 120);
		rect(this.xPos / getZoomFactor(), this.yPos / getZoomFactor(), this.width / getZoomFactor(), this.height / getZoomFactor());

		if(sinceLastTrace == traceIntervel){
			var newTrace = new Trace((this.xPos / getZoomFactor()) + ((this.width / getZoomFactor()) / 2), (this.yPos / getZoomFactor()) + ((this.height / getZoomFactor()) / 2));
			addTrace(newTrace);
			sinceLastTrace = 0;
		}else{
			sinceLastTrace++;
		}
	}

	this.move = function(){
		this.xSpeed += this.xAcceleration;
		this.ySpeed += this.yAcceleration;
		this.xPos += this.xSpeed;
		this.yPos += this.ySpeed;

		if(this.yPos / getZoomFactor() >= height * getZoomFactor() * 1.8 && !this.passedHeight){
			this.ySpeed = -(this.ySpeed - (this.ySpeed * 0.1));
			this.passedHeight = true;
		}

		if(this.yPos / getZoomFactor() < height * getZoomFactor() * 1.8){
			this.passedHeight = false;
		}
	}
}