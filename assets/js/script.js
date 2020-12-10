/* Declare Variables */
var generateBtn = document.querySelector("#playQuiz");

var quizData = [
  { question: "What color is the sky?", answer: "Blue" },
  { question: "What color is the grass?", answer: "Green" },
  { question: "What is the capitol of Georgia?", answer: "Atlanta" },
];

console.log(quizData[2].question); //Validating syntax

function playQuiz() {
  // Hide "Take Quiz" Button
  document.getElementById("playQuiz").style.display = "none";

  // Show Question text
  document.getElementById("questionBox").style.display = "flex";

  // Declare Variables
  var userScore = [0, 0];
  var gameTimer = 100;

  // Loop over length of quizData array
  for (var i = 0; i < quizData.length; i++) {
    // Show Question in textbox
    

    for (var j = 0; j < 5; j++) {
        document.getElementById("questionBox").value = quizData[i].question;
      for (var k = 0; k < 2; k++) {
        console.log(j);
        console.log(k);
        
      }
    }
    document.getElementById("questionBox").value = "Game Over";

    // Switch on answer button response
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", playQuiz);
