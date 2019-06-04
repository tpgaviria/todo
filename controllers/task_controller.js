var express = require("express");
var router = express.Router();
var task = require("../models/task.js");

router.get("/", function (req, res) {
    res.redirect('/tasks');
});

router.get('/tasks', function (req, res) {
    task.all(function (data) {
        res.render('index', { task_data: data })
    })
})

router.post("/tasks/create", function (req, res) {
    task.create(req.body.task_string, function (result) {
        console.log(result);
        res.redirect("/");
    });
});

router.put("/tasks/:id", function (req, res) {
    task.update(req.params.id, function (result) {
        console.log(result);
        res.sendStatus(200);
    });
});

router.post("/tasks/:id", function (req, res) {
    task.undo(req.params.id, function (result) {
        console.log(result);
        res.sendStatus(200);
    });
});

router.delete("/tasks/:id", function (req, res) {
    task.delete(req.params.id, function (result) {
        console.log(result);
        res.sendStatus(200);
    }
    )
});

module.exports = router;
