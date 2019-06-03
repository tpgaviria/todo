var connection = require('./connection');

var orm = {
    all: function (tableInout, cb) {
        var queryString = 'SELECT * FROM ' + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    create: function (table, col, val, cb) {
        var queryString = 'INSERT INTO' + table + '('(col.toString()) + ') VALUES (?)';

        connection.query(queryString, val, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    update: function (table, val, condition, cb) {
        var queryString = 'UPDATE ' + table + 'SET ' + val + ' WHERE ' + condition + ';'
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    delete: function (table, condition, cb) {
        var queryString = 'DELETE FROM ' + table + ' WHERE ' + condition + ';'

        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;