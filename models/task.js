var orm = require('../config/orm');

var task = {
    all: function (cb) {
        orm.all('tasks', function (res) {
            cb(res);
        })
    },
    create: function (col, val, cb) {
        orm.create('tasks', col, val, function (res) {
            cb(res);
        })
    },
    update: function (val, condition, cb) {
        orm.update('tasks', val, where, function (res) {
            cb(res);
        })
    },
    delete: function (where, cb) {
        orm.delete('tasks', where, function (res) {
            cb(res);
        })
    }
};

module.exports = task;