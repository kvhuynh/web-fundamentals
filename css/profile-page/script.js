function removeConnection(input) {
    if (input[1] == "button-1") {
        fetchElement(1);

    } else if (input[1] =="button-2") {
        fetchElement(2);
    }
    
    decrementConnection(input);
}

function fetchElement(number) {
    var selector = "#connection-" + number;
    var connection = document.querySelector(selector);
    connection.remove(connection);
}

function decrementConnection(input) {
    document.querySelector(".connection-number").innerText--;
    if (input[2] == "accept") {
        document.querySelector("#total-connections").innerText++;
    }
}

function changeName() {
    document.querySelector("#user-name").innerText = "Kevin Huynh"
}