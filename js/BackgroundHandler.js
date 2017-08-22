var zoomFactor = 5.0;
var defaultNumberOfLines = 10;
var maxZoomFactor = 5;
var minZoomFactor = 1;
var linesOnScreen;
var lineSpace;

/** 
	This function draws a grid in the background
	this will make it easier to show the size of objects
**/
function DrawBackground(){
	linesOnScreen = defaultNumberOfLines * zoomFactor;
	lineSpace = width / (linesOnScreen + 1);

	for(var currentLine = 1; currentLine <= linesOnScreen; currentLine++){
		var lineOffset = lineSpace * currentLine;
		line(lineOffset, 0, lineOffset, height); // Line from top to bottom 
		line(0, lineOffset, width, lineOffset); // Line from left to right
	}// End of for the number of lines to draw
}// End of DrawBackground function 

function getZoomFactor(){
	return zoomFactor;
}

function getLineSpace(){
	return lineSpace;
}

function getMaxZoomFactor(){
	return maxZoomFactor;
}

function mouseWheel(event) {
	var changeAmount = (event.delta / 30);

	if(changeAmount > 0 && (zoomFactor < maxZoomFactor)){
		if(zoomFactor + changeAmount > maxZoomFactor){
			zoomFactor = maxZoomFactor;
		}else{
			zoomFactor += changeAmount;
		}// End of if the change would overflow the max
	}// End of if the change amount is positive 

	if(changeAmount < 0 && (zoomFactor > minZoomFactor)){
		if(zoomFactor + changeAmount < minZoomFactor){
			zoomFactor = minZoomFactor;
		}else{
			zoomFactor += changeAmount;
		}// End of if the change would underflow the min
	}// End of if the change amount is negitive
	
	return false; // Stop the page from scrolling 
}// End of mouse zoom function