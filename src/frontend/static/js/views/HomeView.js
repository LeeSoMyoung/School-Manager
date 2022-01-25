'use strict';

import AbstractView from './AbstractView.js';
//import {getGeolocation, weatherError, getWeather,saveWeather,saveGeolocation,retrial,loadGeolocation,loadWeather} from '../components/weather.js';
import { getClock, getToday } from '../components/clock.js';
import { loadName, saveName, getGreeting } from '../components/greeting.js';
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
                    <h2 id="greeting-panel>Greeting<h2>
                    <h3 id="date-panel">Date</h3>
                </div>
            </div>
        `;
    }

    attachEvent() {
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
    }

}