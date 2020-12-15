/* Declare DOM Variables */
var highScoreBox = document.getElementById("highScoreLink");
var timerBox = document.getElementById("gameTimer");
var title = document.getElementById("title");
var welcomeMsg = document.getElementById("welcomeMsg");
var playQuizBtn = document.getElementById("playQuiz");
var quizQuestionBox = document.getElementById("quizQuestions")
var quizAnswerBox = document.getElementById("quizAnswers");
var quizMsgBox = document.getElementById("quizMessages");

/* Declare Javascript Variables */
var questionIndex = 0;
var totalSeconds = 60;
var secondsElapsed = 0;
var interval;

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
    playQuizBtn.setAttribute("class", "hide");

    // Show Question Box and Answer Buttons
    quizQuestionBox.setAttribute("class", "show");
    quizAnswerBox.setAttribute("class", "show");

    // Start Timer
    startTimer();

    // Show First Question
    displayQuestion();
}

function displayQuestion() {
    // Iterate over Question and Answer Arrays
    quizQuestionBox.textContent = quizData[questionIndex].question;
    for (var i = 0; i < 4; i++) {

        var answerList = document.createElement("ul");

        var answerBtn = document.createElement("button");
        answerBtn.textContent = quizData[questionIndex].choices[i];
        answerBtn.setAttribute("data-id", i);
        answerBtn.setAttribute("class", "btn btn-primary");
        answerList.appendChild(answerBtn);

        quizAnswerBox.appendChild(answerList);

        // Listen for answer button click
        answerBtn.addEventListener("click", function () {
            if (this.textContent === quizData[questionIndex].answer) {
                questionIndex++;
                quizAnswerBox.textContent = "";
                if (questionIndex == quizData.length) {
                    endGame();
                } else {
                    quizMsgBox.textContent = "That was correct!";
                    displayQuestion();
                }
            } else {
                secondsElapsed += 10;
                questionIndex++;
                quizAnswerBox.textContent = "";
                if (questionIndex == quizData.length) {
                    endGame();
                } else {
                    quizMsgBox.textContent = "That was incorrect! You lose 5 seconds.";
                    displayQuestion();
                }
            }
        })
    }
}

function endGame() {
    /* End timer */
    clearInterval(interval);

    /* Hide title */
    title.setAttribute("class", "hide");

    /* Clear questions and answers from screen */
    quizQuestionBox.textContent = "";
    quizAnswerBox.textContent = "";
    quizMsgBox.textContent = "";

    /* Show Game Over Message */
    welcomeMsg.textContent = "Game Over";
    welcomeMsg.setAttribute("text-align", "center");
    welcomeMsg.setAttribute("class", "show");

    /* Create Form to Capture User's Initials */
    var captureInitialsLabel = document.createElement("p");
    captureInitialsLabel.innerHTML = "Enter Your Initials";
    quizAnswerBox.appendChild(captureInitialsLabel);
    var captureInitalsBox = document.createElement("input");
    captureInitalsBox.setAttribute("type", "text");
    quizAnswerBox.appendChild(captureInitalsBox);
    var submitInitialsBtn = document.createElement("button");
    submitInitialsBtn.setAttribute("type", "Submit");
    captureInitalsBox.appendChild(submitInitialsBtn);

    /* Store Initials and Score to Local Storage */
    localStorage.setItem("High Score", JSON.stringify(todos));
}

function startTimer() {
    interval = setInterval(function () {
        timerBox.textContent = "Time Remaining: " + parseInt(totalSeconds - secondsElapsed);
        secondsElapsed++;
        if (totalSeconds === secondsElapsed) {
            clearInterval(interval);
            endGame();
        }
    }, 1000);
}

function showHighScores() {
    //Hide everything on the page
    //Pull scores from local storage
    //Create heading: HIGH SCORES
    //Create UL of scores
    alert("Feature In Development");
}

/* Register Event Listeners */
playQuizBtn.addEventListener("click", playQuiz);
highScoreBox.addEventListener("click", showHighScores);