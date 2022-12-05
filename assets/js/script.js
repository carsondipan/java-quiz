var score = 0
var timeEl = document.querySelector(".time")



function takeQuiz() {
    document.getElementById("button").addEventListener("click", )
}


function displayTime() {
    var secondsLeft = 60;
    var label = "seconds";
    if (secondsLeft === 1) {
        label = "second";
    }
    timeEl.textContent = secondsLeft + " " + label + " until quiz ends.";
    var timeInterval = setInterval(function () {
        secondsLeft--;
        displayTime(timeLeft);
        if (secondsLeft === 0) {
            clearInterval(timeInterval);
            displayMessage();
        }
    }, 1000);
}