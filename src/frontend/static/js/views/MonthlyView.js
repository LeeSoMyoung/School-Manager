'use strict';

import AbstractView from "./AbstractView.js";
import { showMonthlyCalendar } from "../components/monthlyCalendar.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle('월간 계획표');
    }

    async getHtml(){
        return `
            <div id = "monthly-calendar-container"></div>
        `;
    }

    attachEvent(){
        const monthlyCalendar = document.querySelector('#monthly-calendar-container');
        showMonthlyCalendar(monthlyCalendar);
    }

}