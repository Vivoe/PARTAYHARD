	
	var counter = 0;
	var shit = [1,0,0];
	function idk() {
	//acquire interval from Justin
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
	function randomRGB(){
		return [(Math.random()).toFixed(2),(Math.random()).toFixed(2),(Math.random()).toFixed(2)];
	}

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
