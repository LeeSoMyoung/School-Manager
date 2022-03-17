'use strict';

require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 8081;

// 라우터들
const logInRouter = require('./src/backend/routes/logIn.js');
const mainRouter = require('./src/backend/routes/main.js');

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());

// 사용한 static 디렉터리
app.use('/static', express.static(path.resolve(__dirname, 'src', 'frontend', 'static')));
app.use('/backend', express.static(path.resolve(__dirname, 'src', 'backend')));

// 라우터
app.use('/login', logInRouter);
app.use('/', mainRouter);

app.get('/*', (req, res) => {
    res.sendFile(path.resolve('src', 'frontend', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;