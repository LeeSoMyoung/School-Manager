'use strict';

const TODO = "toDos";

function saveToDos(toDoList) {
    localStorage.setItem(TODO, JSON.stringify(toDoList));
}

function deleteToDo(event, toDoList) {
    const li = event.target.parentElement;
    li.remove();
    toDoList = toDoList.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos(toDoList);
}

function onToDoSubmit(event, toDoList, todo_panel, schedule) {
    event.preventDefault();
    const todo_input = todo_panel.querySelector('input');
    const newSchedule = todo_input.value;

    if (newSchedule !== "") {
        todo_input.value = "";
        const newScheduleObj = {
            text: newSchedule,
            id: Date.now(),
            isDone: false
        };
        toDoList.push(newScheduleObj);
        showToDoList(newScheduleObj, toDoList, schedule);
        saveToDos(toDoList);
    }
    todo_input.focus();
}

function showToDoList(newScheduleObj, toDoList, schedule) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const delete_btn = document.createElement('button');

    li.id = newScheduleObj.id;
    delete_btn.innerText = "❌";
    span.innerText = newScheduleObj.text;

    delete_btn.addEventListener('click', (event)=>{
        deleteToDo(event, toDoList);
    });

    li.appendChild(span);
    li.appendChild(delete_btn);
    schedule.appendChild(li);
}

export { showToDoList, onToDoSubmit };