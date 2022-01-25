'use strict';

const USER_NAME = "username";

function loadName() {
    const name = localStorage.getItem(USER_NAME);

    return name; // null일 때 View 쪽에서 예외처리

}

function saveName(name) {
    localStorage.setItem(USER_NAME, name);
}

function getGreeting(greeting_panel) {
    const now = new Date();
    const hours = now.getHours;
    let greet;

    if (hours >= 6 && hours < 12) {
        greet = "Good Morning";
    }
    else if (hours >= 12 && hours < 17) {
        greet = "Good Afternoon";
    }
    else if (hours >= 17 && hours < 22) {
        greet = "Good Evening";
    }
    else {
        greet = "Good Night";
    }

    greeting_panel.innerText = greet;
}

export { loadName, saveName, getGreeting };