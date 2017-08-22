function mousePressed(){
	if(!mouseButton == LEFT){
		var newDrawObject = new DrawObject(mouseX, mouseY);
		setCurrentDrawObject(newDrawObject);
	}else{
		if(mouseY >= 50){
			var newCube = new Cube(mouseX * getZoomFactor(), mouseY * getZoomFactor(), 100, 100);
			newCube.xSpeed = 10;
			newCube.ySpeed = -80;
			newCube.yAcceleration = 0.98;
			addObject(newCube);
		}
	}
}

function mouseDragged(){
	getCurrentDrawObject().currentXPoint = mouseX;
	getCurrentDrawObject().currentYPoint = mouseY;
}

function mouseReleased(){
	clearCurrentDrawObject();
}