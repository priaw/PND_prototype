const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const database = mysql.createConnection({
    host: 'localhost',
    // port: '3306',
    user: 'root',
    // password: 'root',
    database: 'pnd-web-serv'
});

module.exports = database;

//global.db = db;