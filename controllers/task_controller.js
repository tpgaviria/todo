// required dependencies
var express = require("express");
var router = express.Router();

// imports task object with methods
var task = require("../models/task.js");

// if url is root, will be directed to /tasks
router.get("/", function (req, res) {
    res.redirect('/tasks');
});

// root + /tasks will render table data into html
router.get('/tasks', function (req, res) {
    task.all(function (data) {
        res.render('index', { task_data: data })
    })
})

// posts input string into database using model and orm
router.post("/tasks/create", function (req, res) {
    task.create(req.body.task_string, function (result) {
        console.log(result);
        res.redirect("/");
    });
});

// updates specified item in database, in this case "completed" to "true"
router.put("/tasks/:id", function (req, res) {
    task.update(req.params.id, function (result) {
        console.log(result);
        res.sendStatus(200);
    });
});

// updates specified item in database, in this case undoes "completed" and sets back to false
router.post("/tasks/:id", function (req, res) {
    task.undo(req.params.id, function (result) {
        console.log(result);
        res.sendStatus(200);
    });
});

// deleted specified item in database
router.delete("/tasks/:id", function (req, res) {
    task.delete(req.params.id, function (result) {
        console.log(result);
        res.sendStatus(200);
    }
    )
});

// exports express router
module.exports = router;
