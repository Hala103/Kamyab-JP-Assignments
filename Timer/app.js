var DMIN = document.getElementById('dmin');
var DSEC = document.getElementById('dsec');
var DMS = document.getElementById('dms');
var startbtn = document.getElementById('startbtn');
var pausebtn = document.getElementById('pausebtn');
var resetbtn = document.getElementById('resetbtn');



var num = +prompt("Tell us the time(in minutes) you want to set on the timer");
DMIN.innerHTML = num;
var min = num - 1;
var sec = 59;
var msec = 99;

function timer (){
    msec--;
    DMS.innerHTML = msec;
    DSEC.innerHTML = sec;
    DMIN.innerHTML = min;
    if(msec < 0){
        sec--;
        msec = 99;
        DSEC.innerHTML = sec;
    } if (sec < 0){
        min--;
        sec = 59;
        msec = 99;
        DMIN.innerHTML = min;
    } if(min < 0){
         clearInterval(interval);
        min = 0;
        sec = "00";
        msec = "00";
        DMIN.innerHTML = min;
        DSEC.innerHTML = sec;
        DMS.innerHTML = msec;
    }
};

function start (){
    interval = setInterval(timer, 10)
    startbtn.disabled = true;
    pausebtn.disabled = false;
    resetbtn.disabled = false;
}

function pause(){
    clearInterval(interval);
    startbtn.disabled = false;
    pausebtn.disabled = true;
    resetbtn.disabled = false;
}
function reset() {
    pause();
    min = num;
    sec = "00";
    msec = "00";
    DMIN.innerHTML = min;
    DSEC.innerHTML = sec;
    DMS.innerHTML = msec;
    startbtn.disabled = false;
    pausebtn.disabled = true;
    resetbtn.disabled = true;
}