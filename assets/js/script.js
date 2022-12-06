var question = document.querySelector('#question');
var choices = Array.from(document.querySelectorAll('choice-text'));
var score = document.querySelector('#score');
var startQuiz = document.querySelector('#time')

var secsLeft = 30;
time = secsLeft;

var secsLeftEl = document.getElementById('secLeft');

setInterval(countdownTimer, 1000);

function countdownTimer() {
    var time = Math.floor(time);
    secsLeftEl.innerHTML = `${time}`
}


//      Questions
var questions = [
    {
        question: 'What is your name?',
        choice0: 'I am Arthur, King of the Britons.',
        choice1: 'My name is Sir Lancelot of Camelot.',
        choice2: 'Sir Robin of Camelot.',
        choice3: 'An Unladen Swallow (european).',
        answer: 0,
    },
    {
        question: 'What is your quest?',
        choice0: 'I seek the Holy Grail.',
        choice1: 'To do a backflip.',
        choice2: 'To stack bread.',
        choice3: 'To throw some holy hand grenades (waiting until no more than 5, no less than 3)).',
        answer: 0,
    },
    {
        question: 'What is your favorite color?',
        choice0: 'Blue.',
        choice1: 'Blue! Oh waAHHHHHHHHHHHHHHHHHHHHHHHHHHHHhhhhhhhhhhhhhhhhhhh...',
        choice2: 'Red.',
        choice3: 'Orange.',
        answer: '0',
    },
] 

function startQuiz() {

}
var score = 0
var maxQuestions = 3



var advance = function() {
  if (cursor < questions.length - 1) {
    cursor++;
  }
  displayQuestion();
};





//      High Scores
