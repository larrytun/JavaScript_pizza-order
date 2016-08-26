// BS
function Pizza (name, size) {
  this.customerName = name;
  this.pizzaSize = size;
  this.toppings = [];
  this.totalCost = 9;
}
function Topping (toppingType) {
  this.topping = toppingType;
}

Pizza.prototype.finalPizza = function() {
  return this.customerName + ", " + this.pizzaSize + ", " + this.toppings + ", " + this.totalCost;
}







// UI
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
                            '</div>');
  });

  $("form#newPizzaOrder").submit(function(event) {
    event.preventDefault();
    debugger;

    var inputtedCustomerName = $("input#new-customer-name").val();
    var inputtedPizzaSize = $("#newPizzaSize :selected").val();
    var newPizza = new Pizza(inputtedCustomerName, inputtedPizzaSize);

    $(".newTopping").each(function() {
      var inputtedTopping = $(this).find("#newPizzaToppings :selected").val();
      var newSingleTopping = new Topping(inputtedTopping)
      newPizza.toppings.push(newSingleTopping)
    });

    $("ul#pizzaPlace").append("<li><span class='pizza'>" + newPizza.finalPizza() +  "</span></li>");

  });

});
