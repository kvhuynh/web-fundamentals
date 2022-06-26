var pizzaIngredients = {crustOptions:["deep dish", "hand tossed", "thick crust", "thin crust"],
                        sauceOptions: ["traditional", "marinara", "white sauce"],
                        cheeseOptions: ["feta", "mozarella", "cheddar", "parmesan", "gouda"],
                        toppingOptions: ["pepperoni", "sausage", "mushrooms", "olives", "onions", "pineapple", "ham", "bacon", "chicken"]
                        }



function randomPizza() {
    var pizza = {};
    var keys = Object.keys(pizzaIngredients);
    console.log(keys)
    pizza.cheeseOptions = [];
    pizza.toppingOptions = [];
    for (var key in keys) {
        console.log(key)
        // var index = Math.floor(Math.random() * pizzaIngredients[key].length);
        // pizza[key] = pizzaIngredients[key][index]
    } 


    return pizza;
}
randomPizza();
// console.log(randomPizza());