'use strict';

const WEATHER = "weather";
const GEOLOCATION = "geoloaction";

function loadGeolocation() {
    return JSON.parse(localStorage.getItem(GEOLOCATION));
}

function getGeolocation(paintError) {
    navigator.geolocation.getCurrentPosition(getWeather, paintError);
}

function retrial(paintError) {
    localStorage.setItem(WEATHER, null);
    localStorage.setItem(GEOLOCATION, null);
    getGeolocation(paintError);
}

function getWeather(pos) {
    let geoInfo;
    const info = JSON.parse(localStorage.getItem(GEOLOCATION));

    if (info !== null) {
        // 로컬 스토리지에 저장된 위치 정보가 존재한다면
        geoInfo = info;
    }
    else {
        // 저장된 정보가 없으면 현 위치를 저장하고 현 위치를 통해 날씨를 가져오도록 한다.
        geoInfo = saveGeolocation(pos);
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${geoInfo.lat}&lon=${geoInfo.lon}&appid=${WEATHER_API_KEY}&units=metric`)
        .then((res) => {
            return res.json();
        })
        .then((json)=>{
            saveWeather(json);
        });
}

function saveGeolocation(pos) {
    const lat = pos.coords.latitude;
    const lon = pos.corrds.longitude;
    const geoInfo = {
        lat: lat,
        lon: lon
    };

    localStorage.setItem(GEOLOCATION, geoInfo);
    return geoInfo;
}

function saveWeather(weatherInfo) {
    const region = weatherInfo.name;
    const temperature = weatherInfo.main.temp;
    const weather_icon = weatherInfo.weather[0].icon;

    const weather = {
        icon: String(weather_icon),
        region: region,
        temperature: String(temperature) + "°C"
    }

    localStorage.setItem(WEATHER, JSON.stringify(weather));

    return weather;
}

function loadWeather(paintWeather, paintError) {
    const current_weather = JSON.parse(localStorage.getItem(WEATHER));

    if (current_weather !== null) {
        // 현재 날씨가 존재하면
        paintWeather(current_weather);
    }
    else {
        const location = loadGeolocation();

        if (location !== null) {
            getWeather(location);
        }
        else {
            getGeolocation(paintError);
        }
    }
}

export { getGeolocation, retrial, loadWeather };