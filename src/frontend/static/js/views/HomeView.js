'use strict';

import AbstractView from './AbstractView.js';
import { loadName, showAskName, onNameSubmit } from '../models/greeting.js';
import { addHiddenClass, showHomeBoard } from '../models/viewFunctions.js';
import { showToDoList, onToDoSubmit } from '../models/todo.js';
import { getGeolocation, retrial, loadWeather } from '../models/weather.js';

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle('School Manager');
    }

    async getHtml() {
        return `
            <div class = "hidden" id="get-name">
                <h1>What is your name?</h1>
                <form id="name-form">
                    <input id="name-input" style="-ms-ime-mode:active" name="username" required type="text" minlength="2" maxlength="10"
                    size="30" placeholder="Write name and press enter">
                </form>
            </div>
            <div id="home-board">
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
                        required placeholder="????????? ????????? ??????????????????!">
                        <img id="plus-icon" width="25px" height="25px" src="/static/img/plus.png" >
                        <div id="todo-item-box"></div>
                    </form>
                </div>
            </div>
        `;
    }

    attachEvent(){

        /////////////////////////////
        /*
            ?????? ??????, ?????? ??????, ???????????? ????????? ??????
        */

        const clock = document.querySelector('#clock-panel');
        const date = document.querySelector('#date-panel');
        const greeting = document.querySelector('#greeting-panel');

        const name = loadName();

        const name_form = document.querySelector('#name-form');
        const home = document.querySelector('#home-board');
        const name_panel = document.querySelector('#get-name');

        if (name === null) {
            // localStorage??? ????????? name??? ???????????? ?????? ???

            name_form.addEventListener('submit',(event)=>{
                onNameSubmit(event, name_form, home, name_panel, clock, date, greeting);
            });
            addHiddenClass(home);
            showAskName(name_panel);
        }

        else {
            // localStorage??? ????????? name??? ????????? ???
            showHomeBoard(clock, date, greeting);
        }

        ////////////////////////////////////////////////////
        /** 
         * to-do list??? ???????????? ??????
        */

        const todo_panel = document.querySelector('#todo-input-box');
        const add = todo_panel.querySelector('img');
        const schedule = document.querySelector('#todo-item-box');

        const TODO = "toDos";

        let toDoList = [];

         todo_panel.addEventListener('submit',(event)=>{
             onToDoSubmit(event, toDoList, todo_panel, schedule);
         });
         add.addEventListener('click',(event)=>{
            onToDoSubmit(event, toDoList, todo_panel, schedule);
         });

         const savedToDoList = localStorage.getItem(TODO);

         if(savedToDoList!==null){
             const parsedToDoList = JSON.parse(savedToDoList);
             toDoList = parsedToDoList;
             parsedToDoList.forEach((todo)=>{
                 showToDoList(todo, toDoList, schedule);
             });
         }
       
        ////////////////////////////////
        /**
         * ?????? ????????? ???????????? ?????????
         */

        const weather_panel = document.querySelector('#weather');
        const weather_item = weather_panel.querySelector('#weather-item');
        const weather_state = weather_item.querySelector('#weather-state-icon');
        const weather_error = document.querySelector('#weather-error');

        function paintError() {
            weather_error.style.display = "block";
        }

        function paintWeather(){

        }

        loadWeather(paintWeather, paintError);
    }
}