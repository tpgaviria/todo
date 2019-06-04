var orm = require("../config/orm.js");

var task = {
  all: function(cb) {
    orm.all("tasks", function(res) {
      cb(res);
    });
  },
  create: function(todotask, cb) {
    orm.create("tasks", [
      "task_string", "completed"
    ], [
      todotask, false
    ], cb);
  },
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("tasks", {
      completed: true
    }, condition, cb);
  },
  undo: function(id, cb) {
    var condition = "id=" + id;
    orm.update("tasks", {
      completed: false
    }, condition, cb);
  },
  delete: function(id, cb) {
    var condition = "id=" + id;
    orm.delete("tasks", condition, function(res) {
        cb(res);
    });
  }
};

module.exports = task;
