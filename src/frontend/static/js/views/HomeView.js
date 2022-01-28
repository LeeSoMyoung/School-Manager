'use strict';

import AbstractView from './AbstractView.js';
import { getClock, getToday } from '../components/clock.js';
import getGreeting from '../components/greeting.js';
import { showToDoList, saveToDos } from '../components/todo.js';
//import { getGeolocation, retrial, loadWeather } from '../components/weather.js';

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle('School Manager');
    }

    async getHtml() {
        return `
            <div class="home-board">
                <div class = "inner-item" id = "timeboard">
                    <h1 id="clock-panel">Clock</h1>
                    <h2 id="date-panel">Date</h2>
                </div>
                <div class = "inner-item">
                    <h1 id="greeting-panel"></h1>
                </div>
                <div class = "inner-item" id = "weather">
                    <div id = "weather-item">
                        <img class="weather-init" id="weather-state-icon" width="25px" height="25px">
                        <span class="weather-init" id="weather-temperature">temperature</span>
                        <span class="weather-init" id="weather-region">region</span>
                        <img class="weather-init" id="weather-update-icon" 
                        width="25px" height="25px" src="/static/img/redo_maincolor.png" onclick="retrial()">
                    </div>
                    <div id = "weather-error">
                        <img id="retry-icon" width="20px" height="20px" 
                        src="/staitc/img/redo_maincolor.png">
                    </div>
                </div>
                <div class = "inner-item" id = "todo">
                    <form id = "todo-input-box">
                        <input style="-ms-ime-mode:active" name="todoinput" type="text" 
                        size="30" style="-ms-ime-mode:auto" 
                        required placeholder="등록할 일정을 입력해주세요!">
                        <img id="plus-icon" width="25px" height="25px" src="/static/img/plus.png" >
                        <div id="todo-item-box"></div>
                    </form>
                </div>
            </div>
        `;
    }

    attachEvent() {
        /*
            현재 시간, 현재 날짜, 인삿말을 다루는 코드
        */
        const clock = document.querySelector('#clock-panel');
        const date = document.querySelector('#date-panel');
        const greeting = document.querySelector('#greeting-panel');

        getClock(clock);
        getToday(date);
        getGreeting(greeting);

        setInterval(() => {
            getClock(clock);
            getToday(date);
            getGreeting(greeting);
        }, 1000);

        ////////////////////////////////////////////////////
        /** 
         * to-do list를 보여주는 코드
        */

        const todo_panel = document.querySelector('#todo-input-box');
        const add = todo_panel.querySelector('img');
        const schedule = document.querySelector('#todo-item-box');

        const TODO = "toDos";

        todo_panel.addEventListener('submit', onToDoSubmit);
        add.addEventListener('click', onToDoSubmit);

        let toDoList = [];

        todo_panel.addEventListener('submit',onToDoSubmit);
        add.addEventListener('click',onToDoSubmit);

        function onToDoSubmit(event) {
            event.preventDefault();
            console.log(toDoList);
            const toDo = todo_panel.querySelector('input');
            const newSchedule = toDo.value;

            if (newSchedule !== "") {
                toDo.value = "";
                const newToDoObj = {
                    text: newSchedule,
                    id: Date.now(),
                    isDone: false
                }
                toDoList.push(newToDoObj);
                showToDoList(newToDoObj, schedule, deleteToDo);
                saveToDos(toDoList);
            }
            toDo.focus();
        }

        function deleteToDo(event){
            const li = event.target.parentElement;
            li.remove();
            toDoList = toDoList.filter((todo)=>todo.id!==parseInt(li.id));
            saveToDos(toDoList);
        }

        const savedToDoList = localStorage.getItem(TODO);

        if(savedToDoList!==null){
            const parsedToDos = JSON.parse(savedToDoList);
            toDoList = parsedToDos;
            toDoList.forEach(todo=>showToDoList(todo, schedule, deleteToDo));
        }


        ////////////////////////////////
        /**
         * 날씨 정보를 불러오는 코드들
         */

        const weather_panel = document.querySelector('#weather');
        const weather_item = weather_panel.querySelector('#weather-item');
        const weather_state = weather_item.querySelector('#weather-state-icon');
        const weather_error = document.querySelector('#weather-error');

        function paintError() {
            weather_error.style.display = "block";
        }

    }
}