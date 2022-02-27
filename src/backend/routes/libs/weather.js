'use strict';

require('dotenv').config();

const GEOLOC = "geolocation";

const axios = require('axios');
const res = require('express/lib/response');

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

module.exports = {
    saveCurrentLocation: (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        const currentGeoInfo = {
            lat: lat.toString(),
            lon: lon.toString()
        };

        localStorage.setItem(GEOLOC, JSON.stringify(currentGeoInfo));

        return currentGeoInfo;
    },

    paintError: (err) => {
        alert(err);
    },

    getWeather: (pos) => {

        let geoInfo;
        const info = JSON.parse(localStorage.getItem(GEOLOC));

        if (info) {
            // localStorage에 이미 저장되어 있는 값이 있다면
            geoInfo = info;
        }
        else {
            info = this.saveCurrentLocation(pos);
        }

        const headers = {
            headers: {
                "Content-Type": "application/json"
            }
        };

        try {
            const result = axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${geoInfo.lat}&lon=${geoInfo.lon}&appid=${WEATHER_API_KEY}&units=metric`
                , headers);
            
            console.log(result);
            return result;
        }
        catch (err) {
            throw err;
            return res.status(500).send({
                message:"날씨 정보를 불러오는데 실패하였습니다."
            });
        }
    },

    getGeolocation: () => {
        navigator.geolocation.getCurrentPosition(getWeather, paintError);
    }
}