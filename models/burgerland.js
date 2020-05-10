// import orm
let orm = require('../config/orm.js');

let burger = {
    all: function(cb) {
        orm.all('funkyburgers', function(res) {
            console.log(res);
            cb(res);
        });
    },
    create: function(burgerName, value, cb) {
        orm.create('funkyburgers', burgerName, value, function(res) {
            console.log(res);
            cb(res);
        });
    },
    update: function(burgerName, value, cb) {
        orm.update('funkyburgers', burgerName, value, function(res) {
            cb(res);
        });
    },
    delete: function(burgerName, cb) {
        orm.delete('funkyburgers', burgerName, function(res) {
            cb(res);
        })
    }
};

// export database functions for controller
module.exports = burger;