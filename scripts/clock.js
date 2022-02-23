const timeDisplay = document.querySelector('.clock-time');
const isFormat = "false";

let format = localStorage.getItem("format");

if (format === null) {
    localStorage.setItem("format", isFormat);
    format = localStorage.getItem("format");
} else {
    setInterval(getFormat,1)
}

timeDisplay.addEventListener('click', () => {
    if (format === "true") {
        format = "false";
    } else if (format === "false") {
        format = "true";
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

function saveFormat(x) {
    localStorage.setItem("format", x)
}

function getFormat() {
    if (format === "true") {
        displayTime();
        saveFormat(format)
    } else if(format === "false"){
        displayOtherTime();
        saveFormat(format)
    }
}