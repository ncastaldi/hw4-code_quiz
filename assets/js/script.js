/* Declare Variables */
var generateBtn = document.querySelector("#playQuiz");

const quizData = [
    q1 = {
        q: "What color is the sky?",
        a: "Blue"
    },
    q2 = {
        q: "What color is the grass?",
        a: "Green"
    },
    q3 = {
        q: "What is the capitol of Georgia?",
        a: "Atlanta"
    }
];

function playQuiz() {
    // Hide "Take Quiz" Button
    document.getElementById("playQuiz").style.display = "none";


    // Show Question text
    document.getElementById("questionBox").style.display = "flex";

    var userScore = [0, 0];
    var userAns = "";

/*     for (var i = 0; i < quizData.length; i++) {
        userAns = prompt(quizData[i].q);
        switch (i) {
            case 0:
                if (userAns === "Blue" || userAns === "blue") {
                    alert("That is correct");
                    userScore[0]++;
                } else {
                    alert("That is incorrect\nYou lose 5 seconds.");
                    userScore[1]++;
                    //TO DO: decreaseClock();
                }
                break;
            case 1:
                if (userAns === "Green" || userAns === "green") {
                    alert("That is correct");
                    userScore[0]++;
                } else {
                    alert("That is incorrect\nYou lose 5 seconds.");
                    userScore[1]++;
                    //TO DO: decreaseClock();
                }
                break;
            case 2:
                if (userAns === "Atlanta" || userAns === "atlanta") {
                    alert("That is correct");
                    userScore[0]++;
                } else {
                    alert("That is incorrect\nYou lose 5 seconds.");
                    userScore[1]++;
                    //TO DO: decreaseClock();
                }
                break;
        }
    } */

 //   alert("Final Score:\nYou got " + userScore[0] + " correct and " + userScore[1] + " incorrect.");
}

// Add event listener to generate button
generateBtn.addEventListener("click", playQuiz);