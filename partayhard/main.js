/*jslint node:true, vars:true, bitwise:true, unparam:true */
/*jshint unused:true */
/*global */

/*
Pulse Width Modulation, or PWM, is a technique for getting analog results with digital means.

A simple node.js application intended to read and write analog values to fade a LED from Digital pins on the Intel based development boards such as the Intel(R) Galileo and Edison with Arduino breakout board.

MRAA - Low Level Skeleton Library for Communication on GNU/Linux platforms
Library in C/C++ to interface with Galileo & other Intel platforms, in a structured and sane API with port nanmes/numbering that match boards & with bindings to javascript & python.

Steps for installing MRAA & UPM Library on Intel IoT Platform with IoTDevKit Linux* image
Using a ssh client: 
1. echo "src maa-upm http://iotdk.intel.com/repos/1.1/intelgalactic" > /etc/opkg/intel-iotdk.conf
2. opkg update
3. opkg upgrade

Article: https://software.intel.com/en-us/html5/articles/intel-xdk-iot-edition-nodejs-templates
*/

var mraa = require("mraa"); //require mraa
//Initialize PWM on Digital Pin #3 (D3) and enable the pwm pin
var pwm = new mraa.Pwm(9, -1, false);
pwm.enable(true);

//set the period in microseconds.
pwm.period_us(2000);
var value = 0.0;

var upmMicrophone = require("jsupm_mic");
var mic = new upmMicrophone.Microphone(0);



var threshContext = new upmMicrophone.thresholdContext;
threshContext.averageReading = 0;
threshContext.runningAverage = 0;
threshContext.averagedOver = 2;

var is_running = false;

//Array of the most recent n samples
var maxThresh = 0;

var pastThresh = [];
var index = 0;
var threshPersistance = 30;

for (var i = 0; i < threshPersistance; i++){
    pastThresh[i] = 0;
}

//Gets the max value in the most recent n samples
function manageThresh(thresh){
    pastThresh[index] = thresh;
    index = (index + 1) % threshPersistance;
    
    maxThresh = Math.max.apply(Math, pastThresh);
    console.log(maxThresh);
}

setInterval(function () {    
    var buffer = new upmMicrophone.uint16Array(5);
    var len = mic.getSampledWindow(1, 5, buffer);
    if (len){
        var thresh = mic.findThreshold(threshContext, 1, buffer, len);
        mic.printGraph(threshContext);
        
        manageThresh(thresh);
        
        pwm.write(Math.max(0, (thresh/maxThresh)/5-0.05));
        console.log(pwm.read());
        
    }
    
}, 20);