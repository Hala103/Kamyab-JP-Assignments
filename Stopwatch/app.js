var DMIN = document.getElementById('dmin');
var DSEC = document.getElementById('dsec');
var DMS = document.getElementById('dms');
var startbtn = document.getElementById('startbtn');
var pausebtn = document.getElementById('pausebtn');
var resetbtn = document.getElementById('resetbtn');

var min = 0;
var sec = 0;
var msec = 0;

function timer () {
    msec++;
    DMS.innerHTML = msec;
    if(msec == 99) {
        sec++;
        msec = 0;
        DSEC.innerHTML = sec;
    } if (sec == 59) {
        min++;
        sec = 0;
        msec = 0;
        DMIN.innerHTML = min;
    }

}
function start() {
    interval = setInterval(timer, 10);
    startbtn.disabled = true;
    pausebtn.disabled = false;
    resetbtn.disabled= false;
}
function pause() {
    clearInterval(interval);
    startbtn.disabled = false;
    pausebtn.disabled = true;
    resetbtn.disabled = false;
}
function reset() {
    pause();
    msec = 0;
    min = 0;
    sec = 0;
    DMIN.innerHTML = min;
    DSEC.innerHTML = sec;
    DMS.innerHTML = msec;
    startbtn.disabled = false;
    pausebtn.disabled = true;
    resetbtn.disabled = true;
}