var objects = []; // Array of Objects

function drawAllObjects(){
	for(var currentObject = 0; currentObject < objects.length; currentObject++){
		objects[currentObject].draw();
		if(!getPauseState()){
			objects[currentObject].move();
		}
	}// End of for the current Object in the array
}

function addObject(objectToAdd){
	objects.push(objectToAdd);
}

function removeObjects(){
	for(var currentObject = objects.length - 1; currentObject >= 0; currentObject--){
		if(objects[currentObject].xPos > width * getMaxZoomFactor()){
			objects.splice(currentObject, 1);
		}
	}
}