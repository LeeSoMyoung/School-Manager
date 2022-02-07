'use strict';

require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');
const { generateAccessToken, authenticationToken } = require('./src/backend/api/token');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');

const PORT = process.env.PORT || 8081;

app.use(logger('dev'));
app.use(express.json());

app.use('/static', express.static(path.resolve(__dirname, 'src', 'frontend', 'static')));
app.use('/backend', express.static(path.resolve(__dirname, 'src', 'backend')));

app.get('/*', (req, res) => {
    res.sendFile(path.resolve('src', 'frontend', 'index.html'));
});

app.post('/login', (req, res) => {
    const id = req.body.id;
    const pw = req.body.pw;
    const user = { id: id, pw: pw };
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);

    res.json({ accessToken: accessToken });
});

app.get('/login', authenticationToken, (req, res) => {
    res.json({ "id": req.user.id });
});

app.get('/', authenticationToken, (req, res) => {
    res.json({ "현재 유저의 id": req.user.id });
});

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE
});

db.connect((error)=>{
    if(error){
        // DB를 연결하지 못했다면 연결하지 못한 원인을 띄운다.
        console.log(error);
    }
    else{
        console.log('MySQL is Connected...');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;