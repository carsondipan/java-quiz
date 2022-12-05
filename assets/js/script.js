var score = localStorage.getItem("score")
var timeEl = document.querySelector(".time")
var secondsLeft = 60
var startTimer = document.querySelector("#startTimer")

function setTime() {
    displayTime();
    var timerInterval = setInterval(function () {
        secondsLeft--;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            registerHighScore()
        };
    })
    1000;
}

startTimer.addEventListener("click", displayTime);

function takeQuiz() {
    document.getElementById(".startTimer").addEventListener("click", displayTime)
}

function displayTime() {
    var label = "seconds";
    if (secondsLeft === 1) {
        label = "second"
    }
    timeEl.textContent = secondsLeft + " " + label + " left till completion."
}

function registerHighScore() {

}





