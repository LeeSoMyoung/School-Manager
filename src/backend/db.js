require('dotenv').config();

const mysql = require('mysql');

const DB_PASSWORD = process.env.DB_PASSWORD;

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:DB_PASSWORD,
    database:'school_manager'
});
connection.connect();
// 쿼리 작성
connection.end();