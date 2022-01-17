import AbstractView from './AbstractView.js';

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle('수강 신청');
    }

    async getHtml(){
        return `
            <h1>수강 신청</h1>
        `;
    }
}