const mysql = require('mysql');

mysql.createPool({
    connectionLimit: 10
});