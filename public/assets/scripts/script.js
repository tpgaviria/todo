console.log('script loaded');

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(document).ready(function () {

  
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