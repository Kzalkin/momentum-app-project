const dateContainer = document.querySelector('.date-container');
const global_day = document.querySelector('.day');
const global_date = document.querySelector('.date');

dateContainer.addEventListener('mouseenter', () => {
    global_date.classList.remove('hide2');
})

dateContainer.addEventListener('mouseleave', () => {
    global_date.classList.add('hide2');
})

function determineMonth(x) {
    const date = new Date();
    switch (date.getMonth()) {
        case 0: return x = "January";
        case 1:  return x = "February";
        case 2:  return x = "March";
        case 3:  return x = "April";
        case 4:  return x = "May";
        case 5:  return x = "June";
        case 6:  return x = "July";
        case 7:  return x = "August";
        case 8:  return x = "September";
        case 9:  return x = "October";
        case 10:  return x = "November";
        case 11:  return x = "January";
    }
}

function determineDay(x) {
    const date = new Date();
    switch (date.getDay()) {
        case 0: return x = "Sunday";
        case 1:  return x = "Monday";
        case 2:  return x = "Tuesday";
        case 3:  return x = "Wednesday";
        case 4:  return x = "Thursday";
        case 5:  return x = "Friday";
        case 6:  return x = "Saturday";
    }
}

function getDate() {
    const date = new Date();
    global_day.innerHTML = `Today is ${determineDay(date.getDay())}!`;
    global_date.innerHTML = `${determineMonth(date.getMonth())} ${date.getDate()}, ${date.getFullYear()}`;
}

getDate();