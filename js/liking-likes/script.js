// var likes= document.querySelector(".like-count");
function incrementLike(element) {
    if (element == "button-1") {
        getLikeCount(1)
        // var likes = document.querySelector(".like-count-1");
        // newValue = Number(likes.outerText) + 1;
        // likes.innerText = newValue
    } else if (element == "button-2") {
        getLikeCount(2);
    } else if (element == "button-3") {
        getLikeCount(3);
    }
    // console.log(element)
    // var likes = document.querySelector(".like-count");
    // console.log(likes.outerText)
    // var sliced = likes.outerText.slice(0,2);
    // console.log(typeof(Number(sliced)))
    // newValue = Number(likes.outerText) + 1;
    // likes.innerText = newValue
    
}

function getLikeCount(buttonNumber) {
    var selector = ".like-count-" + buttonNumber;
    var likes = document.querySelector(selector);
    likes.innerText = Number(likes.outerText) + 1;
}
