function Trace(xPos, yPos){
	this.xPos = xPos;
	this.yPos = yPos;

	this.draw = function(){
		fill(0, 255, 0, 127);
		stroke(0, 100, 0);
		ellipse(this.xPos, this.yPos, 10, 10);
	}
}