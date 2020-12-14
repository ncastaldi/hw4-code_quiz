/* Declare Variables */
var generateBtn = document.querySelector("#playQuiz");

const quizData = [
    {
        question: "Who invented JavaScript?",
        answers: {
            a: "Douglas Crockford",
            b: "Sheryl Sandberg",
            c: "Brendan Eich",
            d: "Johnathan Watson"
        },
        correctAnswer: "c"
    },
    {
        question: "What do we do with arrays?",
        answers: {
            a: "Iterate over them",
            b: "Ignore them",
            c: "Stringify them"
            d: "Console log them"
        },
        correctAnswer: "a"
    },
    {
        question: "Inside which HTML element do we put the JavaScript??",
        answers: {
            a: "<scripting>",
            b: "<script>",
            c: "<javascript>",
            d: "<js>"
        },
        correctAnswer: "b"
    }
];

console.log(quizData[2].question); //Validating syntax

function playQuiz() {
    // Hide "Take Quiz" Button
    document.getElementById("playQuiz").style.display = "none";

    // Show Question text
    document.getElementById("questionBox").style.display = "flex";

    // Declare Variables
    var userScore = [0, 0]; // TODO: Replace with local storage
    var gameTimer = 100; //TODO: Replace with SetInterval function
    var userAnswer = "";

}

document.getElementById("questionBox").value = "Game Over";

// Switch on answer button response --> Eventlistener on button group



// Add event listener to generate button
generateBtn.addEventListener("click", playQuiz);
