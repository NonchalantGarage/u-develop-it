const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'jackofalltrades',
    database: 'election'
    },
console.log('You are now connected to the election database')
);

module.exports = db;