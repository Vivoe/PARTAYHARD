	//acquire interval from Justin
	interval = 1000;
	//do functions on intervals
	var counter = 0;
	var time = setInterval(
		function () {
			counter += interval;
			//console.log(counter);
			if (counter==interval){
				alternateRGB(1,0,0);
				console.log(alternateRGB(1,0,0));
			}
			if (counter==2*interval){
				alternateRGB(0,1,0);
				console.log(alternateRGB(0,1,0));
			} 
			if (counter==3*interval){
				alternateRGB(0,0,1);
				console.log(alternateRGB(0,0,1));
				counter=0;
			}
			
		}, interval
	);

	//returns literally RANDOM float rounded to 2 demicals
	function randomRGB(){
		return [(Math.random()).toFixed(2),(Math.random()).toFixed(2),(Math.random()).toFixed(2)];
	}

	function alternateRGB(red,blue,green){
			if(red==1){
				red=0;
				blue=1;
				green=0;
			}else if(blue==1){
				red=0;
				blue=0;
				green=1;
			}else{
				red=1;
				blue=0;
				green=0;
			}
			return[red,blue,green];
	}
	function alternateRGBs(red,blue,green){
			if(red==1){
				return[this.blue,red,green];
			}else if(blue==1){
				return[red,green,blue];
			}else if (green=1){
				return[green,blue,red];
			}
			else{
				return[red,blue,green];
			}
			
	}