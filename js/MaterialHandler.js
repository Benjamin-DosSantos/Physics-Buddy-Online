var viewOpen = false;

var materialsToDisplay = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

var subCellsPerRow = 5;

function toggleMaterialView(){
	this.viewOpen = !this.viewOpen;
}

function drawMaterialView(){
	if(this.viewOpen){
		drawContainer();
		drawSubCells();
	}
}

function drawContainer(){
	fill(66, 66, 66, 80);
	stroke(0);
	rect(width / 4, 0, width / 2, height / 2);
}

function drawSubCells(){
	var row = 0;
	var col = 0;
	var subCellsDrawn = 0;
	var subCellWidth = ((width / 2) / subCellsPerRow);
	var subCellHeight = ((height / 2) / subCellsPerRow);
	for(var currentObject = 0; currentObject < materialsToDisplay.length; currentObject++){
		fill(66, 66, 66, 80);
		stroke(0);
		rect((width / 4) + (col * subCellWidth), (row * subCellHeight), subCellWidth, subCellHeight);
		subCellsDrawn++;
		
		if(subCellsDrawn == 5){
			subCellsDrawn = 0;
			col = 0;
			row++;
		}else{
			col++;
		}
	}

	console.log("Row: " + row + " Col: " + col);
}