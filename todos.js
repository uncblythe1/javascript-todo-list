document.addEventListener('DOMContentLoaded', function () {

const title = document.createElement('h1');
document.body.appendChild(title);
title.innerText = 'Todo App'

let toDo = ''

const input = document.createElement('input');
document.body.appendChild(input);
input.addEventListener('keydown', (ev) => {
    if (ev.key === 'Enter') {
        const li = document.createElement('li');
        ul.appendChild(li);
        li.innerText = toDo;
        toDo = ''
        input.value = ''
    } else {
        toDo += ev.key;
    }
    
})

const ul = document.createElement('ul');
document.body.appendChild(ul);

const addToDoButton = document.createElement('button');
addToDoButton.id = 'add_todo'
addToDoButton.innerText = 'Add todo'
document.body.appendChild(addToDoButton);


})