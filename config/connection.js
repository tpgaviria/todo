var mysql = require('mysql');
require('dotenv').config();

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.sqlpass,
    database: 'todolist'
});

connection.connect(function(err){
if (err) {
    console.log('error connection to my sql');
    return;
}
console.log('conneted as id ' + connection.threadId);
});

module.exports = connection;