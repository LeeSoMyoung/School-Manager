'use strict';

require('dotenv').config();

const express = require('express');
const router = express.Router();

const weatherLib = require('./libs/weather.js');

router.get('/', (req, res) => {
    const weatherInfo = weatherLib.getGeolocation();
    console.log('weatherInfo', weatherInfo);
});

module.exports = router;