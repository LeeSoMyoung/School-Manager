'use strict';

const USER_NAME = "username";

function loadName() {
    const name = localStorage.getItem(USER_NAME);
    return name;

}

function saveName(name) {
    localStorage.setItem(USER_NAME, name);
}

export default function getGreeting(greeting_panel) {
    const now = new Date();
    const hours = now.getHours();
    const name = loadName();

    let greet;

    if (name === null) {
        // TODO : name이 null이면 이름 저장하는 화면 관련 코드 작성

    }
    else {
        greet = name;
    }

    if (hours >= 6 && hours < 12) {
        greet += " Good Morning";
    }
    else if (hours >= 12 && hours < 17) {
        greet += " Good Afternoon";
    }
    else if (hours >= 17 && hours < 22) {
        greet += " Good Evening";
    }
    else {
        greet += " Good Night";
    }

    greeting_panel.innerText = greet;
}