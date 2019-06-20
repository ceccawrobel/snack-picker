
$(document).ready(function() {
  var hungry = $("select#hungry").val();
  var protein = $("select#protein").val();
  var sweet = $("select#sweet").val();
  var salty = $("select#salty").val();
  var bedtime = $("select#bedtime").val();

  $("#snackQuestions").submit(function(event) {
    event.preventDefault();
    console.log("inputs are " + hungry + ", " + protein + ", " + sweet + ", " + salty + ", " + bedtime);
    if (hungry === "no" && bedtime === "yes") {
      $("#nosnack").show();
    } else if (protein === "no") {
      $("#sacha").show();
    } else if (hungry === "no" && sweet === "yes" && salty === "yes") {
      $("#licorice").show();
    } else if (hungry === "no" && sweet === "no" && salty === "no") {
      $("#celery").show();
    } else if (hungry === "no" && sweet === "yes" && salty === "no") {
      $("#cinnamon").show();
    } else if (hungry === "no" && sweet === "no" && salty === "yes") {
      $("#seaweed").show();
    } else if (hungry === "yes" && protein === "yes") {
      $("#pineapple").show();
      $("#granola").show();
    } else if (hungry === "no") {
      $("#licorice").show();
      $("#celery").show();
      $("#seaweed").show();
      $("#cinnamon").show();
    } else {
    $(".result").show();
  }
  });
});
