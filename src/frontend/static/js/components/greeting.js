'use strict';

const USER_NAME = "username";
const CLASS_HIDDEN = "hidden";

function loadName() {
    const name = localStorage.getItem(USER_NAME);
    return name;

}

function saveName(name) {
    localStorage.setItem(USER_NAME, name);
}

function showAskName(name_panel) {
    name_panel.classList.remove(CLASS_HIDDEN);
}

function getGreeting(greeting_panel) {
    const now = new Date();
    const hours = now.getHours();
    const name = loadName();

    let greet = name;

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

function showGreeting(greeting){
    getGreeting(greeting);
    
    setInterval(()=>{
        getGreeting(greeting);
    }, 1000);
}

export { showGreeting, saveName, loadName, showAskName };