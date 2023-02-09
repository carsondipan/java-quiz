var question = document.querySelector('#question');
var choices = Array.from(document.querySelectorAll('choice-text'));
var score = document.querySelector('#score');
var startQuiz = document.querySelector('#secsLeft')
var score = 0
var maxQuestions = 3
var secsLeft = 30;
time = secsLeft;

var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

var startTimer = function() {
    console.log('Timer Start');
};

var displayquestion = function () {
    console.log('Question shows');
};
//      Questions

var availableQuestions = [
    {
        question: 'What is your name?',
        choice0: 'I am Arthur, King of the Britons.',
        choice1: 'My name is Sir Lancelot of Camelot.',
        choice2: 'Sir Robin of Camelot.',
        choice3: 'An Unladen Swallow (european).',
        answer: 2,
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

function getNewQuestion() {

    if (availableQuestions.length === 0 || questionsCount > totalQuestions) {
        localStorage.setItem('highScore', score)
        alert, ''
    }

    questionCount++
    progressText.innerText = `Question ${questionCount} of ${totalQuestions}`

    var questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question
}

function startQuiz() {
    document.getElementById('startBtn').addEventListener("click", getNewQuestion);
    questionCount = 3
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()

}

//      High Scores
