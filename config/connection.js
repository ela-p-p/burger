var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Isolde2018!',
    database: 'burgers_db'
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting" + err);
        return;
    }
    console.log("connected at ID " + connection.threadId);
});

// connection.end();
module.exports = connection;