function keyPressed(){
	switch(keyCode){
		// Space Key Switches the pause state
		case 32:
			swapPause();
			break;
		// T toggles the visibility of traces 
		case 84:
			swapTrace();
			break; 
	}

	console.log(keyCode);
}