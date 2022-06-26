function editConnections(classID, classList) {
    document.querySelector(classID).remove();
    document.querySelector(".connection-number").innerText--;
    if (classList[1] == "accept") {
        document.querySelector("#total-connections").innerText++;
    }
}

function changeName() {
    document.querySelector("#user-name").innerText = "Kevin Huynh"
}