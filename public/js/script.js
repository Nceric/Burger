$(function() {
    $(".create-form").on("click", function(event) {
        alert("hi")
      event.preventDefault();
  
      var newBurger = {
        burgername: $("#newburger")
          .val()
          .trim(),
        devoured: 0
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(function() {
        console.log("Added new burger");
        location.reload();
      });
    });
  
    $(".eatburger").on("click", function(event) {
      event.preventDefault();
  
      var id = $(this).data("id");
      var devouredState = {
        devoured: 1
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState
      }).then(function() {
        console.log("Burger terminated");
        location.reload();
      });
    });
  
  });

