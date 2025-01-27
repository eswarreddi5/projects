
let clockHrs = document.getElementById("hrs");
let clockMin = document.getElementById("min");
let clockSec = document.getElementById("sec");

setInterval(() => {
    let currentTime = new Date();
    clockHrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    clockMin.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    clockSec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);


const clockBtn = document.getElementById('clock-btn');
const stopwatchBtn = document.getElementById('stopwatch-btn');
const clockDisplay = document.getElementById('clock-display');
const stopwatchDisplay = document.getElementById('stopwatch-display');

clockBtn.addEventListener('click', () => {
    clockDisplay.style.opacity = 1;
    clockDisplay.style.transform = 'translateX(0)';
    clockDisplay.style.display = 'flex';
    stopwatchDisplay.style.opacity = 0;
    stopwatchDisplay.style.transform = 'translateX(100%)';
    setTimeout(() => {
        stopwatchDisplay.style.display = 'none';
    }, 500);
});

stopwatchBtn.addEventListener('click', () => {
    clockDisplay.style.opacity = 0;
    clockDisplay.style.transform = 'translateX(-100%)';
    setTimeout(() => {
        clockDisplay.style.display = 'none';
    }, 500);
    stopwatchDisplay.style.opacity = 1;
    stopwatchDisplay.style.transform = 'translateX(0)';
    stopwatchDisplay.style.display = 'flex';
});


let stopwatchInterval;
let stopwatchElapsedTime = 0;
let stopwatchHrs = document.getElementById("stopwatch-hrs");
let stopwatchMin = document.getElementById("stopwatch-min");
let stopwatchSec = document.getElementById("stopwatch-sec");
let stopwatchMs = document.getElementById("stopwatch-ms");

function startStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = setInterval(updateStopwatchDisplay, 10);
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchElapsedTime = 0;
    updateStopwatchDisplay();
}

function updateStopwatchDisplay() {
    stopwatchElapsedTime += 10;

    let milliseconds = Math.floor((stopwatchElapsedTime % 1000) / 10);
    let seconds = Math.floor((stopwatchElapsedTime / 1000) % 60);
    let minutes = Math.floor((stopwatchElapsedTime / (1000 * 60)) % 60);
    let hours = Math.floor((stopwatchElapsedTime / (1000 * 60 * 60)) % 24);

    stopwatchHrs.innerHTML = (hours < 10 ? "0" : "") + hours;
    stopwatchMin.innerHTML = (minutes < 10 ? "0" : "") + minutes;
    stopwatchSec.innerHTML = (seconds < 10 ? "0" : "") + seconds;
    stopwatchMs.innerHTML = (milliseconds < 10 ? "0" : "") + milliseconds;
}