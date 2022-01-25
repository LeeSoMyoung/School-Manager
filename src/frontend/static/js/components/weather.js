'use strict';

import WEATHER_API_KEY from '../../../../../server.js';

const WEATHER = "weather";
const GEOLOCATION = "geoloaction";

function getGeolocation(){
    navigator.geolocation.getCurrentPosition(getWeather,showError);
}

function weatherError(){
    // geolocation을 불러오는 데 실패했을 시
    alert("geolocation을 불러오는데 실패했습니다.");
}

function getWeather(pos){
    // geolocation을 불러오는 데 성공했을 시
    let geoInfo;
    const info = JSON.parse(localStorage.getItem(GEOLOCATION));
    console.log(pos);
    console.log(info);

    if(info!==null){
        // 로컬스토리지에 이미 저장되어 있는 geolocation 정보가 존재한다면
        geoInfo = saveGeolocation(pos);
    }
    else{
        geoInfo = saveGeolocation(pos);
    }
    
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${geoInfo.lat}&lon=${geoInfo.lon}&appid=${WEATHER_API_KEY}&units=metric`
    )
    .then((res)=>{
        return res.json();
    })
    .then((json)=>{
        return saveWeather(json);
    })
}

function saveWeather(json){
    const weathericon = json.weather[0].icon;
    const temperature = json.main.temp;
    const region = json.name;
    const weatherInfo={
        icon : ""+weathericon,
        temperature : ""+temperature+"°C",
        region : ""+region
    };
    //json 데이터로 weather에 저장하기 
    localStorage.setItem(WEATHER, JSON.stringify(weatherInfo));
    return weatherInfo;
}

function saveGeolocation(pos){
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const geoinfo={
        lat : lat,
        lon : lon
    };
    localStorage.setItem(GEOLOC, JSON.stringify(geoinfo));
    return geoinfo;
}

function retrial(){
    localStorage.setItem(WEATHER,null);
    localStorage.setItem(GEOLOCATION,null);
    getGeolocation();
}

function loadGeolocation(){
    return JSON.parse(localStorage.getItem(GEOLOCATION));
}

function loadWeather(){
    let weather = JSON.parse(localStorage.getItem(WEATHER));
    if(weather!==null){
        return weather;
    }
    else{
        const loc = loadGeolocation();
        if(loc!==null){
            // localStorage에 저장되어 있던 geolocation 정보가 있을 시
            getWeather(null);
        }
        else{
            getGeolocation();
        }
    }
}

function showError(){
    alert('날씨를 불러오지 못했습니다.');
}

module.exports={getGeolocation, weatherError, getWeather,saveWeather,saveGeolocation,retrial,loadGeolocation,loadWeather};
export {getGeolocation, weatherError, getWeather,saveWeather,saveGeolocation,retrial,loadGeolocation,loadWeather};