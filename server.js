// dependencies
var express = require("express");
var exphbs = require("express-handlebars");

var app = express();

// sets local host port number
var PORT = 8080;

// allows use of static file in 'public' directory
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// sets engine to handlebars, sets default html layout to main.handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// imports controller file as router
var routes = require("./controllers/task_controller.js");

app.use(routes);

// starts localhost through port number
app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});
