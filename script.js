var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");

var clock = setInterval(
    function time(){
var date = new Date();
var hr = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();

if(hr<10){
    hr = "0"+hr;
}
if(min<10){
    min = "0"+min;
}
if(sec<10){
    sec = "0"+sec;
}

hour.textContent = hr;
minute.textContent = min;
second.textContent = sec;
;    },1000)