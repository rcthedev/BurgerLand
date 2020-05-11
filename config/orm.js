// import my sql connection
let connection = require('../config/connection.js');

let orm = {
    all: function(burgerName, cb) {
        let queryStr = 'SELECT * FROM ' + burgerName + ';';
        connection.query(queryStr, function(err,result) {
            if (err) { throw err; } 
            cb(result);
        });
    },
    create: function(burgerName, value, cb) {
        let queryStr = "INSERT INTO " + burgerName + " (burger_name, devoured) VALUES ('" + value[0] + "', 0);"
        
        

        connection.query(queryStr, value, function(err, result) {
            if (err) { throw err; }
            cb(result);
        });
    },
    update: function(burgerName, obj, condition, cb) {
        
        let queryStr = "UPDATE " + burgerName + " SET devoured = 1 WHERE id = " + condition + ";";

        console.log(queryStr);

        connection.query(queryStr, function(err, result) {
            if (err) { throw err; }
            cb(result);
        });
    },
    delete: function(burgerName, cb) {
        let queryStr = 'DELETE FROM burgers WHERE burger_name = ' + burgerName;
        connection.query(queryStr, function(err,result) {
            if (err) { throw err; } 
            cb(result);
        });
    }
}; 

module.exports = orm;