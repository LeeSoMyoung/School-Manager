'use strict';

import AbstractView from './AbstractView.js';
import { navigateTo } from '../index.js';

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle('존재하지 않는 페이지입니다.');
    }

    async getHtml() {
        return `
            <h1>존재하지 않는 경로입니다.</h1>
            <h2>주소를 다시 확인해주세요.</h2>
            <div class = "inner-item" id="error-buttons">
                <button class="error-btn" id="go-home">홈 화면으로 이동</button>
                <button class="error-btn" id="go-previous">이전 화면으로 이동</button>
            </div>
        `;
    }

    attachEvent() {
        const goHomeButton = document.querySelector('#go-home');
        const goPreviousButton = document.querySelector('#go-previous');

        function onHomeButtonClicked(event) {
            event.preventDefault();
            navigateTo('http://localhost:3000');
        }

        function onPreviousButtonClicked(event) {
            event.preventDefault();
            history.back();
        }

        goHomeButton.addEventListener('click', onHomeButtonClicked);
        goPreviousButton.addEventListener('click', onPreviousButtonClicked);
    }

}