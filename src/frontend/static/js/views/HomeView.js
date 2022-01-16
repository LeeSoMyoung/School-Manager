'use strict';

import AbstractView from './AbstractView.js';

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle('School Manager');
    }

    async getHtml(){
        return `
            <h1>홈 화면</h1>
            <div id="weather">
            </div>
            <script src="../components/weather.js"></script>
        `;
    }
}