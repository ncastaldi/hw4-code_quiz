/* Declare DOM Variables */
var startPage = document.getElementById("startPage");
var playQuizBtn = document.getElementById("playQuiz");
var quizQuestionBox = document.getElementById("quizQuestions")
var quizAnswerBox = document.getElementById("quizAnswers");


/* Declare Javascript Variables */
var questionIndex = 0;

const quizData = [
    {
        question: "Commonly used data type Do Not include:---",
        choices: ["strings", "booleance", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed within:---",
        choices: ["quotes", "Curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        question: "Arrays in JavaScript can be used to store:---",
        choices: ["numbers and strings", "others Arrays", "booleances", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "String values must be enclosed within --- when being assigned to variables ",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:---",
        choices: ["JavaScript", "terminal/bash", "alerts", "console.log"],
        answer: "console.log"
    },
]

/* Define functions */
function playQuiz() {
    //TEST
    console.log(quizData[1].choices[0]);
    //TEST

    // Hide  Welcome Message and "Take Quiz" Button
    startPage.setAttribute("class", "hide");

    // Show Question Box and Answer Buttons
    quizQuestionBox.setAttribute("class", "show");
    quizAnswerBox.setAttribute("class", "show");

    // Iterate over Question and Answer Arrays
    quizQuestionBox.textContent = quizData[questionIndex].question;
    for (var i = 0; i < 4; i++) {
        var answerBtn = document.createElement("button");
        answerBtn.textContent = quizData[questionIndex].choices[i];
        answerBtn.setAttribute("style", "btn btn-success");
        quizAnswerBox.appendChild(answerBtn);
    }
}

function nextQuestion(){
    console.log("working?");
}

/* Register Event Listeners */
playQuizBtn.addEventListener("click", playQuiz);
quizAnswerBox.addEventListener("click", nextQuestion);