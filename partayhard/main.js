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

 var pwm1 = new mraa.Pwm(5, -1, false);
pwm1.enable(true);

var pwm2 = new mraa.Pwm(3, -1, false);
pwm2.enable(true);


//set the period in microseconds.
pwm.period_us(2000);

pwm1.period_us(2000);
pwm2.period_us(2000);

var value = 0.0;



var upmMicrophone = require("jsupm_mic");
var mic = new upmMicrophone.Microphone(0);

var threshContext = new upmMicrophone.thresholdContext;
threshContext.averageReading = 0;
threshContext.runningAverage = 0;
threshContext.averagedOver = 2;

var onboard = new mraa.Gpio(13);
onboard.dir(mraa.DIR_OUT);

var is_running = false;

//Array of the most recent n samples
var maxThresh = 0;

var pastThresh = [];
var index = 0;
var threshPersistance = 10;

for (var i = 0; i < threshPersistance; i++){
    pastThresh[i] = 0;
}

//Gets the max value in the most recent n samples
function manageThresh(thresh){
    pastThresh[index] = thresh;
    index = (index + 1) % threshPersistance;
    maxThresh = Math.max.apply(Math, pastThresh);
}

setInterval(function () {    
    var buffer = new upmMicrophone.uint16Array(2);
    
    var len = mic.getSampledWindow(1, 2, buffer);
    
    //pwm1.write(0.1);
    //pwm2.write(0.5);
    
    if (len){
        var thresh = mic.findThreshold(threshContext, 1, buffer, len);
        
        manageThresh(thresh);
        
        //pwm.write(Math.max(0, (thresh/maxThresh)/7-0.05));
        pwm.write((Math.max(0, (thresh/maxThresh))));
        pwm1.write((Math.max(0, (thresh/maxThresh)/7)));
        pwm2.write((Math.max(0, (thresh/maxThresh)/7)));
//        pwm.write(0.8);
        console.log(pwm2.read());
        
        if (thresh >= maxThresh * 0.9){
            onboard.write(1);
        } else {
            onboard.write(0);
        }
        
    }
    
}, 16);
