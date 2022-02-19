const task = document.querySelector('.focus');
const focusForm = document.querySelector('.task-form');
const focusDisplay = document.querySelector('.focus-display');

function getFocus() {
    focusForm.addEventListener('submit', updateFocus);
}

function updateFocus(event) {
    event.preventDefault();
    focusDisplay.innerHTML = task.value;
    focusForm.style.display = 'none';
    focusDisplay.style.display = 'block';
}

getFocus();