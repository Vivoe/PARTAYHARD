	//acquire interval from Justin
	interval = 1000;
	//do functions on intervals
	var counter = 0;
	var time = setInterval(
		function () {
			counter += interval;
			//console.log(counter);
			if (counter==interval){
				console.log([1,0,0]);
			}
			if (counter==2*interval){
				console.log([0,1,0]);
			} 
			if (counter==3*interval){
				console.log([0,0,1]);
				counter=0;
			}
			
		}, interval
	);

	//returns literally RANDOM float rounded to 2 demicals
	function randomRGB(){
		return [(Math.random()).toFixed(2),(Math.random()).toFixed(2),(Math.random()).toFixed(2)];
	}

//we will change the pattern little by little
//currently every time interval a LED take turn to light up
