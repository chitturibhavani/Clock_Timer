// clock time setter
let clockTimerContainer = document.getElementById("clock_timer_container");
let clockTimerValue = clockTimerContainer.textContent;
let startButton = document.getElementById("start_button");
let stopButton = document.getElementById("stop_button");
let resetButton = document.getElementById("reset_button");
let clockTimerRunningStatus = false;
let setTimeOutID;

function toStartClockTimer(){
    if(!clockTimerRunningStatus){
        toDecrementClockTimerValue();
        clockTimerRunningStatus = true;
    }
}
function toDecrementClockTimerValue(){
    if(clockTimerValue>0){
        clockTimerContainer.textContent = --clockTimerValue;
        setTimeOutID = setTimeout(toDecrementClockTimerValue,1000);
    }
}
function toStopClockTimer(){
    clearTimeout(setTimeOutID);
    clockTimerRunningStatus = false;
}
function toResetClockTimer(){
    toStopClockTimer();
    clockTimerValue=60;
    clockTimerContainer.textContent = clockTimerValue;
}
startButton.addEventListener("click",toStartClockTimer);
stopButton.addEventListener("click",toStopClockTimer);
resetButton.addEventListener("click",toResetClockTimer);