function DrawObject(startXPoint, startYPoint){
	this.startXPoint = startXPoint;
	this.startYPoint = startYPoint;
	this.currentXPoint = 0;
	this.currentYPoint = 0;


	this.draw = function(){
		line(this.startXPoint, this.startYPoint, this.currentXPoint, this.currentYPoint);
	}
}