import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle('주간 일정');
    }

    async getHtml(){
        return `
            <h1>주간 일정표</h1>
        `;
    }

    attachEvent(){
        
    }

}