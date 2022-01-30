'use strict';

function dayConvert(day){
    // 요일을 얻는 함수
    const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    return days[day];
}

function getClock(clock){
    // 현재 시각을 얻는 함수
    const now = new Date();
    const min = now.getMinutes();
    const hour = now.getHours();
    const sec = now.getSeconds();
    
    clock.innerText=`${hour}: ${min}: ${sec}`;
}

function getToday(date_panel){
    const now = new Date();
    const month = now.getMonth()+1;
    const day = dayConvert(now.getDay());
    const date = now.getDate();
    
    date_panel.innerText = `${month}. ${date} ${day}`;
}

export default function showClock(clock, date_panel){
    getClock(clock);
    getToday(date_panel);

    setInterval(()=>{
        getClock(clock);
        getToday(date_panel);
    }, 1000);
}