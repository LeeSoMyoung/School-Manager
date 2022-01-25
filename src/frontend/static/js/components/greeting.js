'use strict';

const USER_NAME = "username";

function loadName(){
    const name = localStorage.getItem(USER_NAME);
    
    return name; // null일 때 View 쪽에서 예외처리

}

function saveName(name){
    localStorage.setItem(USER_NAME,name);
}

function getGreeting(){
    const now = new Date();
    const hours = now.getHours;

    if(hours>=6&&hours<12){
        return "Good Morning";
    }
    else if(hours>=12&&hours<17){
        return "Good Afternoon";
    }
    else if(hours>=17&&hours<22){
        return "Good Evening";
    }
    else{
        return "Good Night";
    }
}

export {loadName, saveName, getGreeting};