const greeting = document.querySelector('.greeting');
const input = document.querySelector('.input');
const greetingForm = document.querySelector('.form');
const existingUser = "";

function printGreeting(greeting) {
    const time = new Date();
    
    if (time.getHours() < 12) {
        greeting.innerHTML += `Good morning!`;
    } else if (time.getHours() >= 12 && time.getHours() < 18) {
        greeting.innerHTML += `Good afternoon!`;
    } else {
        greeting.innerHTML += `Good evening!`;
    }
}

function getName() {
    greetingForm.addEventListener('submit', updateGreeting);
}

function updateGreeting(event) {
    event.preventDefault();
    greeting.innerHTML = greeting.innerHTML.replace('!', ` ${input.value}!`);
    greetingForm.style.display = 'none';
    saveUser(input.value);
}

function saveUser(name) {
    localStorage.setItem(existingUser, name);
}

function isUser() {
    const user = localStorage.getItem(existingUser);
    if (user === null) {
        greetingForm.style.display = 'block';
        getName();
    } else {
        greeting.innerHTML = greeting.innerHTML.replace('!', ` ${user}!`);
        greetingForm.style.display = 'none';
    }
}

function refreshGreeting() {
    const time = new Date();
    if (time.getHours() < 12) {
        greeting.innerHTML = greeting.innerHTML.replace('evening', 'morning');
    } else if (time.getHours() >= 12 && time.getHours() < 18) {
        greeting.innerHTML = greeting.innerHTML.replace('morning', 'afternoon');
    } else {
        greeting.innerHTML = greeting.innerHTML.replace('afternoon', 'evening');
    }
}

const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
    localStorage.removeItem(existingUser);
})

printGreeting(greeting);
isUser();
setInterval(refreshGreeting, 500);