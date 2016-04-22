window.onload = function(){
	
	var columns = document.getElementsByClassName("postthumb");
	
	for(var i = 0; i < columns.length; i++){
	
		
		var r = Math.floor((Math.random() * 256) + 1);
		var g = Math.floor((Math.random() * 256) + 1);
		var b = Math.floor((Math.random() * 256) + 1);
		
		var color = "rgba(" + r + "," + g + "," + b + ", 0.4)";
		
		
		columns[i].style.backgroundColor = color;
	}
}