const mysql = require('mysql2');

const database = mysql.createConnection({
    host: 'localhost',
    // port: '3307',
    user: 'root',
    // password: 'root',
    database: 'pnd-web-serv'
});

database.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});


module.exports = database;

//global.db = db;