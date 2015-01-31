	//acquire interval from Justin


	
	interval = 100;
	
	//iterates timer
	window.setInterval(function(){
		// do functions
	   	var choice = Math.floor(Math.random() * 4)+1;
	   	var rgb= [];
	   	switch(choice) {
		    case 1:
				rgb = intervalRGB();
		        break;
		    case 2:
		        rgb = randomRGB();
		        break;
		    case 3:
		    	rgb = twoOnRGB(1,0,0);
		    	break;
		    case 4:
		    	rgb = twoOnRGB(0,1,0);
		    	break;
		    default:
		        
		}
		var red_list = document.getElementById("red");
		var blue_list = document.getElementById("blue");
		var green_list = document.getElementById("green");
		red_list.style.opacity = rgb[0];
		blue_list.style.opacity = rgb[1];
		green_list.style.opacity = rgb[2];
	 	console.log(rgb);

	}, interval);

//sequence functions
	//Use trig functions to fade two colours in
	//function(currentColour, otherColour, dtime);
	//var fadeduration = 1 sec;
	//scale 1 sec to pi = x
	//sin/cos(x * dtime);

	function fadeColors(currentColour,otherColour,dtime){
		var fadeduration = 1;
		var pi = Math.PI;

		console.log();
	}


	//basic interation sequence
	var counter = 0;
	function intervalRGB(){
		counter += interval;
		if (counter==interval){
			return [1,0,0];
		}
		if (counter==2*interval){
			return [0,1,0];
		} 
		if (counter==3*interval){
			counter=0;
			return [0,0,1];	
		}
	}

	//random seqeunce
	function randomRGB(){
		return [Math.random(),Math.random(),Math.random()];
	}

	//two off, 1 on..
	var red=0;
	var blue=0;
	var green=0;
	function twoOnRGB(red_set,blue_set,green_set){
		red = red_set;
		blue = blue_set;
		green = green_set;
		if(red&&!blue&&!green){
			red=0;
			blue=1;
			green=1;
			return [0,1,1];
		}
		if(blue&&!red&&!green){
			red=1;
			blue=0;
			green=1;
			return [1,0,1];
		}
		if(green&&!red&&!blue){
			red=1;
			blue=1;
			green=0;
			return [1,1,0];
		}
		if(blue&&green){
		   red=1;
		   blue=0;
		   green=0;
		   return [1,0,0];
		}
		if(red&&green){
			red=0;
		  	blue=1;
		   	green=0;
		   	return [0,1,0];
		}
		if(red&&blue){
			red=0;
			blue=0;
			green=1;
			return [0,0,1];
		}

	}