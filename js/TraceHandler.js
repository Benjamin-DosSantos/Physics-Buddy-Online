var tracePoints = []; // Array of trace points

function drawAllTracePoints(){
	if(getTraceState()){
		for(var currentTrace = 0; currentTrace < tracePoints.length; currentTrace++){
			tracePoints[currentTrace].draw();
		}
	}
}

function addTrace(newTrace){
	if(!getPauseState()){
		tracePoints.push(newTrace);
	}
}

function clearAllTraces(){
	tracePoints = [];
}