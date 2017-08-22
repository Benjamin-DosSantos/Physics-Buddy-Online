var currentDrawObject = [];

function drawCurrentObject(){
	this.currentDrawObject[0].draw();
}

function getCurrentDrawObject(){
	return currentDrawObject;
}

function setCurrentDrawObject(currentDrawObject){
	this.currentDrawObject[0].push(currentDrawObject);
}

function clearCurrentDrawObject(){
	this.currentDrawObject = null;
}