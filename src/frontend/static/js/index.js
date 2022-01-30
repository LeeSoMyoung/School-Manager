'use strict';

import HomeView from './views/HomeView.js';
import CalendarView from './views/CalendarView.js';
import NotFoundView from './views/NotFoundView.js';
import LogInView from './views/LogInView.js';
import CreditView from './views/CreditView.js';
import EnrollmentView from './views/EnrollmentView.js';
import MonthlyView from './views/MonthlyView.js';
import WeeklyView from './views/WeeklyView.js';

const pathToRegex = (path) => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g));

const navigateTo = (url) => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const routes = [
        { path: "/", view: HomeView },
        { path: "/calendar", view: CalendarView },
        { path: "/login", view: LogInView },
        { path: "/enrollment", view: EnrollmentView },
        { path: "/credit", view: CreditView },
        { path: "/calendar/weekly", view: WeeklyView },
        { path: "/calendar/monthly", view: MonthlyView }
    ];

    const pathList = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let matchedPath = pathList.find(path => path.isMatch);

    if (!matchedPath) {
        // 만약 맞는 location이 존재하지 않는다면
        matchedPath = {
            route: {
                path: location.pathname,
                view: NotFoundView // notFound view를 통해 존재하지 않는 페이지라는 것을 알림
            },
            isMatch: true
        };
    }

    const view = new matchedPath.route.view();

    const app = document.querySelector('#app');

    app.innerHTML = await view.getHtml();

    view.attachEvent();

    console.log(matchedPath.route.path);

}

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (event) => {
        if (event.target.matches('[data-link]')) {
            event.preventDefault();
            navigateTo(event.target.href);
        }
        else if (event.target.matches('[data-img]')) {
            event.preventDefault();
            navigateTo(event.target.attributes.href.nodeValue);
        }
    });
    router();
});

export { navigateTo, router };