
$(document).ready(function() {
  var hungry = $("select#hungry").val();
  var protein = $("select#protein").val();
  var sweet = $("select#sweet").val();
  var salty = $("select#salty").val();
  var bedtime = $("select#bedtime").val();

  $("#snackQuestions").submit(function(event) {
    event.preventDefault();

    $(".result").show();
  })
});
