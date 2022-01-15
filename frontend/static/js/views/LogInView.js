import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle('로그인');
    }

    async getHtml(){
        return `
            <h1>로그인 화면</h1>
        `;
    }
}