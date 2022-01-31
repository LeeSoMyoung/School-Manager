'use strict';

function isWeekend(day){
    return true;
}

function showMonthlyCalendar(monthlyCalendarContainer){

    for(let day = 1;day<=31;++day){

        const weekend = isWeekend(day);

        monthlyCalendarContainer.insertAdjacentHTML(
            'beforeend',
            `<div class = "day">${day}</div>`
        );
    }
}

export {showMonthlyCalendar};