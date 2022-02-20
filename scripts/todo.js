const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list-container');
const todoButton = document.querySelector('.todo-btn');
const todoContainer = document.querySelector('.todo-container');

todoForm.addEventListener('submit', addTodo);

function addTodo(event) {
    event.preventDefault();
    const todoListItem = document.createElement('div');
    const todoListText = document.createElement('p');
    const xMark = document.createElement('i');
    
    
    todoListItem.classList.add('todo-list');
    todoListText.innerHTML = todoInput.value;
    xMark.classList.add('fa-solid');
    xMark.classList.add('fa-xmark');
    xMark.addEventListener('click', removeTodo);
    todoListText.addEventListener('click', setDone);

    
    todoListItem.appendChild(todoListText);
    todoListItem.appendChild(xMark);
    todoList.appendChild(todoListItem);

    todoInput.value = "";
}

function removeTodo() {
    this.parentElement.remove();
}

function setDone() {
    this.style.textDecoration = 'line-through';
    this.style.color = 'gray';
}

todoButton.addEventListener('click', () => {
    todoContainer.classList.toggle('hide1');
})