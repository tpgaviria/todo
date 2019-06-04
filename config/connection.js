// dependencies
var mysql = require('mysql');
require('dotenv').config();

// mysql connection requirements - password hidden in .env file
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.sqlpass,
    database: 'todo_list'
});

// log if connected or failed
connection.connect(function(err){
if (err) {
    console.log('error connecting to my sql');
    return;
}
console.log('conneted as id ' + connection.threadId);
});

// exports connection for use in other files
module.exports = connection;