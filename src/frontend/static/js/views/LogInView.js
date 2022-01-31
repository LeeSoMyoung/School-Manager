'use strict';

import AbstractView from "./AbstractView.js";
import { showSidebars, hideSidebars } from '../controller/sidebars.js';

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle('로그인');
    }

    async getHtml() {
        return `
        <div class="container" align="center">
        <form class="form" id="login">
            <h1 class="form__title">로그인 하기</h1>
            <div class="form__message form__message--error"></div>
            <div class="form__input-group">
                <input type="text" class="form__input" autofocus placeholder="트리니티 아이디">
                <div class="form__input-error-message"></div>
            </div>
            <div class="form__input-group">
                <input type="password" class="form__input" autofocus placeholder="트리니티 비밀번호">
                <div class="form__input-error-message"></div>
            </div>
            <button class="form__button" type="submit" id="login-btn">로그인</button>
            <p>
                <h3>트리니티 아이디와 비밀번호는</h3>
                <h3>서비스를 위한 용도로만 사용됩니다.</h3>
            </p>
        </form>
        </div>
        `;
    }

    attachEvent() {
        hideSidebars();

        const login_btn = document.querySelector('#login-btn');
        
    }
}