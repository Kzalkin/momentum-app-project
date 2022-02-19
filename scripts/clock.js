const timeDisplay = document.querySelector('.clock-time');

function displayTime() {
    const time = new Date();
    if (time.getMinutes() < 10) {
        timeDisplay.innerHTML = `${time.getHours()}:0${time.getMinutes()}`
    } else {
        timeDisplay.innerHTML = `${time.getHours()}:${time.getMinutes()}`;
    }
}

setInterval(displayTime, 500);