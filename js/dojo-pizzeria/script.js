function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
// console.log(pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
// console.log(pizza2);

var pizza3 = pizzaOven("hand tossed", "marinara", ["cheddar"], ["pineapple, ham"]);
// console.log(pizza3);

var pizza4 = pizzaOven("deep dish", "white sauce", ["feta"], ["bacon", "chicken", "brocolli"]);
// console.log(pizza4);


var crustOptions = ["deep dish", "hand tossed", "thick crust", "thin crust"]
var sauceOptions = ["traditional", "marinara", "white sauce"]
var cheeseOptions = ["feta", "mozarella", "cheddar", "parmesan", "gouda"]
var toppingOptions = ["pepperoni", "sausage", "mushrooms", "olives", "onions", "pineapple", "ham", "bacon", "chicken"]   


function chooseRandom(ingredient) {
    return Math.floor(Math.random() * ingredient.length);
}


function randomPizza() {
    var pizza = {};
    pizza.crustType = crustOptions[chooseRandom(crustOptions)];
    pizza.sauceType = sauceOptions[chooseRandom(sauceOptions)]; 
    pizza.cheeses = [];
    pizza.toppings = [];

    for (var i = 0; i < (Math.random() * cheeseOptions.length); i++) {
        pizza.cheeses.push(cheeseOptions[chooseRandom(cheeseOptions)]);
    }

    for (var i = 0; i < (Math.random() * toppingOptions.length); i++) {
        pizza.toppings.push(toppingOptions[chooseRandom(toppingOptions)]);
    }
    return pizza;
    }
