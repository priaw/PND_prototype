var mysql = require('mysql');
var c = mysql.createConnection({
  host     : 'localhost',
 // port     : '3306',
  user     : 'root',
  password : 'root',
  database : 'restaurant'

});

// enable error logging for each connection query
c.on('error', function(err) {
  console.log(err.code); // example : 'ER_BAD_DB_ERROR'
});

exports.connection = function() {
    return c;
};