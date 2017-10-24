$(document).ready(function() {

  var items = [];

  $("button#addItem").click(function() {
    var item = $("input#item").val().toUpperCase();
    items.push(item);
  });

  $("form#inputItem").submit(function(event) {

    items.sort().forEach(function(item) {
      $("#shoppingItem").append("<li>" + item + "</li>");
    });

    $("#inputItem").hide();
    $(".shoppingList").show();

    event.preventDefault();
  });
});
