var mysql = require('mysql');
require('dotenv').config();

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.sqlpass,
    database: 'todo_list'
});

connection.connect(function(err){
if (err) {
    console.log('error connecting to my sql');
    return;
}
console.log('conneted as id ' + connection.threadId);
});

module.exports = connection;