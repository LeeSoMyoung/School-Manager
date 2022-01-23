'use strict';

import AbstractView from './AbstractView.js';
//import style from '../../css/style.css';

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle('School Manager');
    }

    async getHtml(){
        return `
            <h1>홈 화면</h1>
        `;
    }
}