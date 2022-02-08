'use strict';

require('dotenv').config();

const mysql = require('mysql');
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

module.exports = db;