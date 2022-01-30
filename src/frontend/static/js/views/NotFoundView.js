'use strict';

import AbstractView from './AbstractView.js';

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle('존재하지 않는 페이지입니다.');
    }

    async getHtml(){
        return `
            <h1>존재하지 않는 경로입니다.</h1>
            <h2>주소를 다시 확인해주세요.</h2>
        `;
    }
}