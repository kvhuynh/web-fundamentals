function alertReport(city) {
    alert("Loading weather report for " + city.innerText + "...");
}

function removeCookie() {
    document.querySelector(".cookie-container").remove();
}

function convertTemp(high, low) {
    var nodeListHigh = document.querySelectorAll(high); // returns an array of all elements with the selector
    var nodeListLow = document.querySelectorAll(low);
    var unit = checkUnit();

    if (unit == "farenheit") {
        for (var i = 0; i < nodeListHigh.length; i++) {
            nodeListHigh[i].innerText = Math.round((nodeListHigh[i].innerText) * 9/5 + 32);
            nodeListLow[i].innerText = Math.round((nodeListLow[i].innerText) * 9/5 + 32);
        }

    } else {
        for (var i = 0; i < nodeListHigh.length; i++) {
            nodeListHigh[i].innerText = Math.round(((nodeListHigh[i].innerText) - 32) * 5/9);
            nodeListLow[i].innerText = Math.round(((nodeListHigh[i].innerText) - 32) * 5/9);
        }
    }
}



function checkUnit() {
    return document.querySelector("#toggle-temperature").value;
}



