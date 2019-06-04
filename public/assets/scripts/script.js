// test verifying file is loaded and running
console.log('script loaded');

// bootstrap function to initiate hover tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


$(document).ready(function () {
  
  // when "completed" checkbox is clicked, ajax method "PUT" updates database and reloads
  $(".completed").on("submit", function (event) {
    event.preventDefault();

    var task_id = $(this).children(".task_id").val();
    console.log(task_id)
    $.ajax({
      method: "PUT",
      url: "/tasks/" + task_id
    }).then(function (data) {
      location.reload();
    })
  });
  
  // when "undo" box is clicked, ajax method "POST" updates database and reloads
  $(".undo").on("submit", function (event) {
    event.preventDefault();

    var task_id = $(this).children(".task_id").val();
    console.log(task_id)
    $.ajax({
      method: "POST",
      url: "/tasks/" + task_id
    }).then(function (data) {
      location.reload();
    })
  });

  // when "delete" box is clicked, ajax method "DELETE" updates database and reloads
  $(".delete").on("submit", function (event) {
    event.preventDefault();

    var task_id = $(this).children(".task_id").val();
    console.log(task_id)
    $.ajax({
      method: "DELETE",
      url: "/tasks/" + task_id
    }).then(function (data) {
      location.reload();
    })
  })
});