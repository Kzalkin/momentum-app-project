const timeDisplay = document.querySelector('.clock-time');
let isFormat = false;

timeDisplay.addEventListener('click', () => {
    if (isFormat) {
        isFormat = false;
    } else if (isFormat === false) {
        isFormat = true;
    }
})

function displayTime() {
    const time = new Date();
    if (time.getMinutes() < 10) {
        timeDisplay.innerHTML = `${time.getHours()}:0${time.getMinutes()}`
    } else {
        timeDisplay.innerHTML = `${time.getHours()}:${time.getMinutes()}`;
    }
}

function displayOtherTime() {
    const time = new Date();
    if (time.getHours() > 12) {
        if (time.getMinutes() < 10) {
            timeDisplay.innerHTML = `${time.getHours() % 12}:0${time.getMinutes()} PM`
        } else {
            timeDisplay.innerHTML = `${time.getHours() % 12}:${time.getMinutes()} PM`;
        }
    } else {
        if (time.getMinutes() < 10) {
            timeDisplay.innerHTML = `${time.getHours()}:0${time.getMinutes()} AM`
        } else {
            timeDisplay.innerHTML = `${time.getHours()}:${time.getMinutes()} AM`;
        }
    }
}

function getFormat() {
    if (isFormat) {
        displayTime();
    } else {
        displayOtherTime();
    }
}

setInterval(getFormat,1)