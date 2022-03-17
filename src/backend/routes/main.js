'use strict';

require('dotenv').config();

const express = require('express');
const router = express.Router();

const weatherLib = require('./libs/weather.js');

const userMiddleware = require('../middlewares/users.js');

router.get('/', userMiddleware.isLoggedIn);

module.exports = router;