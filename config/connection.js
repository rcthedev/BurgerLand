// set up mysql connection
let mysql = require('mysql');


    let connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'Sage43236984C!',
        database: 'burgerland_db'
    });


// make connection
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id' + connection.threadId);
});

module.exports = connection;