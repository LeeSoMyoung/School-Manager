import AbstractView from './AbstractView.js';

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle('학사 관리');
    }

    async getHtml(){
        return `
            <h1>학사 관리</h1>
        `;
    }
}