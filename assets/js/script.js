/* Declare DOM Variables */
var welcomeMsg = document.getElementById("welcomeMsg");
var playQuizBtn = document.getElementById("playQuiz");
var quizQuestionBox = document.getElementById("quizQuestions")
var quizAnswerBox = document.getElementById("quizAnswers");

/* Declare Javascript Variables */
var questionIndex = 0;

const quizData = [
    {
        question: "Commonly used data type Do Not include:---",
        choices: ["Strings", "Booleans", "Alerts", "Numbers"],
        answer: "Alerts"
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
    // Hide  Welcome Message and "Take Quiz" Button
    welcomeMsg.setAttribute("class", "hide");

    // Show Question Box and Answer Buttons
    quizQuestionBox.setAttribute("class", "show");
    quizAnswerBox.setAttribute("class", "show");

    displayQuestion();
}

function displayQuestion() {
    // Iterate over Question and Answer Arrays
    quizQuestionBox.textContent = quizData[questionIndex].question;
    for (var i = 0; i < 4; i++) {
        var answerBtn = document.createElement("button");
        answerBtn.textContent = quizData[questionIndex].choices[i];
        answerBtn.setAttribute("data-id", i);
        quizAnswerBox.appendChild(answerBtn);
        answerBtn.addEventListener("click", function () {
            if (this.textContent === quizData[questionIndex].answer) {
                // notify correct
                questionIndex++;
                quizAnswerBox.textContent = "";
                if (questionIndex == quizData.length) {
                    endGame();
                } else {
                    displayQuestion();
                }
            } else {
                // subtract time from timer
                questionIndex++;
                quizAnswerBox.textContent = "";
                if (questionIndex == quizData.length) {
                    endGame();
                } else {
                    displayQuestion();
                }
            }
        })
    }
}

function endGame() {
    console.log("game over");
}

/* Register Event Listeners */
playQuizBtn.addEventListener("click", playQuiz);