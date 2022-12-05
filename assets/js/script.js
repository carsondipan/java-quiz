var score = localStorage.getItem("score")
var timeEl = document.querySelector(".time")
var questions =
var startTimer = document.querySelector("#startTimer")

function setTime() {
    var secondsLeft = 30
    displayTime(secondsLeft);
    var timerInterval = setInterval(function () {
        secondsLeft--;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            registerHighScore()
        };
    })
    1000;
    
    startTimer.addEventListener("click", displayTime);

    function displayTime() {
    var label = "seconds";
    if (secondsLeft === 1) {
        label = "second"
    }
    timeEl.textContent = secondsLeft + " " + label + " left till completion."
}
}



function takeQuiz() {
    document.getElementById(".startTimer").addEventListener("click", displayTime)
}



function registerHighScore() {

}