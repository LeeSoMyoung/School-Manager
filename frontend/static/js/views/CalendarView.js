import AbstractView from './AbstractView.js';

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle('일정 관리');
    }

    async getHtml(){
        return `
            <h1>일정 관리</h1>
        `;
    }
}