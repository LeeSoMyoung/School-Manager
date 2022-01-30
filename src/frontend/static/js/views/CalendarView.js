'use strict';

import AbstractView from './AbstractView.js';

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle('일정 관리');
    }

    async getHtml(){
        return `
            <div id="calendar-container"></div>
        `;
    }

    attachEvent(){
        
    }

}