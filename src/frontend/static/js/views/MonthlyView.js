import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle('월간 계획표');
    }

    async getHtml(){
        return `
            <h1>월간 계획표</h1>
        `;
    }
}