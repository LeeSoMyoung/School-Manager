'use strict';

function dayConvert(day){
    // 요일을 얻는 함수
    const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    return days[day];
}

function getClock(){
    // 현재 시각을 얻는 함수
    const now = new Date();
    const min = now.getMinutes();
    const hour = now.getHours();
    const sec = now.getSeconds();
    const clock={
        seconds:sec,
        minutes:min,
        hours:hour
    };

    return clock;
}

function getToday(){
    const now = new Date();
    const month = now.getMonth()+1;
    const day = dayConvert(now.getDay());
    const date = now.getDate();
    
    const today = {
        month: month,
        date:date,
        day:day
    };

    return today;
}

export {getClock, getToday};