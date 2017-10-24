$(document).ready(function() {

  $("form#inputItem").submit(function(event) {

    var item1 = $("input#item1").val().toUpperCase();
    var item2 = $("input#item2").val().toUpperCase();
    var item3 = $("input#item3").val().toUpperCase();
    var item4 = $("input#item4").val().toUpperCase();
    var item5 = $("input#item5").val().toUpperCase();

    var items=[item1, item2, item3, item4, item5];

    items.sort().forEach(function(item) {
      $("li#shoppingItem").append("<li>" + item + "</li>");
    });




    $("#inputItem").hide();
    $(".shoppingList").show();

    event.preventDefault();
  });
});
