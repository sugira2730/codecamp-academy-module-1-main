const clickButton = document.getElementById("clickButton");
const counterText = document.getElementById("counter");
const message = document.getElementById("message");


//Counter variable
let counter = 0;

//Event listener
clickButton.addEventListener("click", function () {
    //increase the counter
    counter++;

    //update counter on webpage
    counterText.textContent = counter;

    //update message
    message.textContent = "button clicked successfully!";
});