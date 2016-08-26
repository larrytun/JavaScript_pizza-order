$(document).ready(function() {
  $("#addMoreToppings").click(function() {
    $("#newToppings").append('<div class ="newTopping">' +
                              '<select class="form-control" id="newPizzaToppings">' +
                                '<option>Cheese</option>' +
                                '<option>Pepperoni</option>' +
                                '<option>Sausage</option>' +
                                '<option>Mushrooms</option>' +
                                '<option>Jalapenos</option>' +
                                '<option>Onions</option>' +
                                '<option>Bacon</option>' +
                              '</select>' +
                            '</div>')
  });
});
