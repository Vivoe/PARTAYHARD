	
	var counter = 0;
	var shit = [1,0,0];
	function idk() {
	//acquire interval from Justin
<<<<<<< HEAD
	interval = 50;
	

	var red_test = 0;
	var blue_test = 0;
	var green_test = 0;
	//iterates timer
	window.setInterval(function(){
		//do functions
	   	var choice = Math.floor(Math.random() * 4)+1;
	   	var rgb= [];
	 //   	switch(choice) {
		//     case 1:
		// 		rgb = intervalRGB();
		//         break;
		//     case 2:
		//         rgb = randomRGB();
		//         break;
		//     case 3:
		//     	rgb = twoOnRGB(1,0,0);
		//     	break;
		//     case 4:
		//     	rgb = twoOnRGB(0,1,0);
		//     	break;
		//     default:
		        
		// }
		rgb = [fadeColors(0,0,0),1,1];
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
		var x = 1/(10*pi);
		console.log(Math.abs(Math.cos(red_test)));
		red_test += x;
		return Math.abs(Math.cos(red_test));
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
=======
	interval = 1000;
	//do functions on intervals

	setInterval(
		function () {
			counter += interval;
			//console.log(counter);
			if (counter==interval){
				shit = [1,0,0];
				console.log([1,0,0]);
			}
			if (counter==2*interval){
				shit = [0,1,0];
				console.log([0,1,0]);
			} 
			if (counter==3*interval){
				shit = [0,0,1];
				console.log([0,0,1]);
				counter=0;
			}
			
			blink(shit);

		}, interval
	);
}
	//returns literally RANDOM float rounded to 2 demicals
>>>>>>> 86ad7064aa25e472ef4af8fe1eb6120d2e49a3c7
	function randomRGB(){
		return [Math.random(),Math.random(),Math.random()];
	}

<<<<<<< HEAD
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
=======
	//testing the code using testingRGB.html
	function blink(shit) {
		console.log(shit);
		if(shit[1]==1){
			var green = document.getElementById("green");
			green.style.backgroundColor = null;
			var blue = document.getElementById("blue");
			blue.style.backgroundColor = null;
		}
		else if(shit[2]==1){
			document.getElementById("red");
			document.getElementById("blue");
		}
		else{
			document.getElementById("red");
			document.getElementById("blue");
		}
	}



//we will change the pattern little by little
//currently every time interval a LED take turn to light up
>>>>>>> 86ad7064aa25e472ef4af8fe1eb6120d2e49a3c7
