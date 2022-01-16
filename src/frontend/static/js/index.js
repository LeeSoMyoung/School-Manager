'use strict';

import HomeView from './views/HomeView.js';
import CalendarView from './views/CalendarView.js';
import NotFoundView from './views/NotFoundView.js';
import GraduationView from './views/GraduationView.js';
import LogInView from './views/LogInView.js';

const navigateTo=(url)=>{
    history.pushState(null,null,url);
    router();
}

const router = async ()=>{
    const routes=[
        {path:"/", view:HomeView},
        {path:"/calendar", view:CalendarView},
        {path:"/graduation", view:GraduationView},
        {path:"/login",view:LogInView},
    ];

    const pathList = routes.map(route=>{
        return {
            route:route,
            isMatch: location.pathname===route.path
        };
    });

    let matchedPath = pathList.find(path=>path.isMatch);

    if(!matchedPath){
        // 만약 맞는 location이 존재하지 않는다면
        matchedPath = {
            route:{
                path:location.pathname,
                view:NotFoundView
            },
            isMatch:true
        };
    }

    const view = new matchedPath.route.view();

    document.querySelector('#app').innerHTML=await view.getHtml();

    console.log(matchedPath.route.path);

}

window.addEventListener('popstate',router);

document.addEventListener('DOMContentLoaded',()=>{
    document.body.addEventListener('click',(event)=>{
        if(event.target.matches('[data-link]')){
            event.preventDefault();
            navigateTo(event.target.href);
        }
        else if(event.target.matches('[data-img]')){
            event.preventDefault();
            navigateTo(event.target.attributes.href.nodeValue);
        }
    });
    router();
});