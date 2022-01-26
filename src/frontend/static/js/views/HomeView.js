'use strict';

import AbstractView from './AbstractView.js';
//import {getGeolocation, weatherError, getWeather,saveWeather,saveGeolocation,retrial,loadGeolocation,loadWeather} from '../components/weather.js';
import { getClock, getToday } from '../components/clock.js';
import getGreeting  from '../components/greeting.js';
//import styles from '../../css/styles.css';

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

    }
}