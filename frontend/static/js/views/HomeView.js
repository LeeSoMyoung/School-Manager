import AbstractView from './AbstractView.js';

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle('School Manager');
    }

    async getHtml(){
        return `
            <h1>School Manager 홈 화면</h1>
        `;
    }
}