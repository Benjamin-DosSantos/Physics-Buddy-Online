var pauseButton;
var paused = true;
var traceButton;
var trace = false;

function setup(){
  createCanvas(windowWidth - 20, windowHeight - 20);
  background(0);

  pauseButton = createButton("Play");
  pauseButton.position(10, 10);
  pauseButton.mousePressed(swapPause);

  traceButton = createButton("Toggle Traces");
  traceButton.position(70, 10);
  traceButton.mousePressed(swapTrace);

  var clearTraces = createButton("Clear Traces");
  clearTraces.position(200, 10);
  clearTraces.mousePressed(clearAllTraces);
}// End of Setup Function

function draw(){
  clear();
  background(0, 150, 228);
  stroke(66);
  DrawBackground();
  drawAllObjects();
  drawAllTracePoints();
  // drawCurrentObject();
  removeObjects();
}// End of draw Function 

function swapPause(){
  paused = !paused;

  if(paused){
    pauseButton.value("Play");
  }else{
    pauseButton.value("Pause");
  }
}

function swapTrace(){
  trace = !trace;
}

function getPauseState(){
  return paused;
}

function getTraceState(){
  return trace;
}