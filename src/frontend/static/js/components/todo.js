'use strict';

const TODO = "toDos";

function showToDoList(newToDoObj, schedule, deleteToDo) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const delete_btn = document.createElement('button');

    li.id = newToDoObj.id;
    delete_btn.innerText = "❌";
    span.innerText = newToDoObj.text;

    delete_btn.addEventListener('click', deleteToDo);
    li.appendChild(span);
    li.appendChild(delete_btn);

    schedule.appendChild(li);
}

function saveToDos(toDoList) {
    localStorage.setItem(TODO, JSON.stringify(toDoList));
}

export { showToDoList, saveToDos };