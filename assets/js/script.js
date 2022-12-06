var score = localStorage.getItem("score")
var timeEl = document.querySelector("#time")
var timeLeft = 30
var nextEl = document.querySelector('#next');
var cursor = 0;
var timerEl = document.getElementById('secsLeft');
var mainEl = document.getElementById('main');

//      TIMER
function displayTime(timeLeft) {
    document.querySelector("#time")
    var label = "seconds";
    if (timeLeft === 1) {
      label = "second";
    }
  }
  function countdown() {
    var timeLeft = 30;
    displayTime();
    var timeInterval = setInterval(function (displayTime) {
      timeLeft--;
      displayTime();
      if (timeLeft === 0) {
        clearInterval(timeInterval);
        displayMessage();
        timerEl.textContent = timeLeft + " " + label + " left until detonation of holy hand grenade.";
      }
    }, 1000);
}



//      Questions
var displayQuestion = function () {

};

var advance = function() {
  if (cursor < questions.length - 1) {
    cursor++;
  }
  displayQuestion();
};



displayQuestion();

//      High Scores
