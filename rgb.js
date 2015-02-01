
	//acquire interval from Justin
	var interval = 100;
	

	var red_test = 0;
	var blue_test = 0;
	var green_test = 0;
	//iterates timer
	window.setInterval(function(){
		//do functions
	   	// var choice = Math.floor(Math.random() * 4)+1;
	   	// var rgb= [];
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
		// Display the color
		rgb = [fadeColorR(), fadeColorB(),fadeColorG()];
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

	// function fadeColors(shift){
	// 	var A = 5;
	// 	console.log(Math.abs(interval*Math.cos(red_test))+shift);
	// 	return Math.abs(Math.cos(red_test))+shift;
	// 	red
	// }

	// using sin to generate pattern
	function fadeColorR(){
		var pi = Math.PI;
		var x = 1/10;
		console.log(Math.abs(Math.sin(red_test)));
		red_test += x;
		return Math.abs(Math.sin(red_test));
	}

	function fadeColorB() {
		var pi = Math.PI;
		var x = 1/10;
		console.log(Math.abs(Math.sin(blue_test+(1/2*pi))));
		blue_test += x;
		return Math.abs(Math.sin(blue_test+(1/2*pi)));

	}

	function fadeColorG() {
		var pi = Math.PI;
		var x = 1/10;
		console.log(Math.abs(Math.sin(green_test+pi)));
		green_test += x;
		return Math.abs(Math.sin(green_test+pi));

	}
	//using sin to generate pattern


	//basic interation sequence
	// var counter = 0;
	// function intervalRGB(){
	// 	counter += interval;
	// 	if (counter==interval){
	// 		return [1,0,0];
	// 	}
	// 	if (counter==2*interval){
	// 		return [0,1,0];
	// 	} 
	// 	if (counter==3*interval){
	// 		counter=0;
	// 		return [0,0,1];	
	// 	}
	// }

	// setInterval(
	// 	function () {
	// 		counter += interval;
	// 		//console.log(counter);
	// 		if (counter==interval){
	// 			shit = [1,0,0];
	// 			console.log([1,0,0]);
	// 		}
	// 		if (counter==2*interval){
	// 			shit = [0,1,0];
	// 			console.log([0,1,0]);
	// 		} 
	// 		if (counter==3*interval){
	// 			shit = [0,0,1];
	// 			console.log([0,0,1]);
	// 			counter=0;
	// 		}

	// 	}, interval
	// );
	//returns literally RANDOM float rounded to 2 demicals
	// function randomRGB(){
	// 	return [Math.random(),Math.random(),Math.random()];
	// }

	//two off, 1 on..
	// var red=0;
	// var blue=0;
	// var green=0;
	// function twoOnRGB(red_set,blue_set,green_set){
	// 	red = red_set;
	// 	blue = blue_set;
	// 	green = green_set;
	// 	if(red&&!blue&&!green){
	// 		red=0;
	// 		blue=1;
	// 		green=1;
	// 		return [0,1,1];
	// 	}
	// 	if(blue&&!red&&!green){
	// 		red=1;
	// 		blue=0;
	// 		green=1;
	// 		return [1,0,1];
	// 	}
	// 	if(green&&!red&&!blue){
	// 		red=1;
	// 		blue=1;
	// 		green=0;
	// 		return [1,1,0];
	// 	}
	// 	if(blue&&green){
	// 	   red=1;
	// 	   blue=0;
	// 	   green=0;
	// 	   return [1,0,0];
	// 	}
	// 	if(red&&green){
	// 		red=0;
	// 	  	blue=1;
	// 	   	green=0;
	// 	   	return [0,1,0];
	// 	}
	// 	if(red&&blue){
	// 		red=0;
	// 		blue=0;
	// 		green=1;
	// 		return [0,0,1];
	// 	}

	// }



//we will change the pattern little by little
//currently every time interval a LED take turn to light up
