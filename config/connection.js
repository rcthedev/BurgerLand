// set up mysql connection
let mysql = require('mysql');

let connection;
if (process.env.JAWSDB_URL) {
    // Database is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
        connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'Sage43236984C!',
        database: 'burgerland_db'
    });
};
// let mysql = require('mysql');

// make connection
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id' + connection.threadId);
});

module.exports = connection;