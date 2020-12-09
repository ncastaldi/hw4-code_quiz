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
    var userScore = [0, 0, 0];
    var userAns = "";

    for (var i = 0; i < quizData.length; i++) {
        userAns = prompt(quizData[i].q);
        switch (i) {
            case 0:
                if (userAns === "Blue" || userAns === "blue") {
                    alert("That is correct");
                    userScore[0]++;
                } else {
                    alert("That is incorrect\nYou lose 5 seconds.");
                    //TO DO: decreaseClock();
                }
                break;
            case 1:
                if (userAns === "Green" || userAns === "green") {
                    alert("That is correct");
                    userScore[0]++;
                } else {
                    alert("That is incorrect\nYou lose 5 seconds.");
                    //TO DO: decreaseClock();
                }
                break;
            case 2:
                if (userAns === "Atlanta" || userAns === "atlanta") {
                    alert("That is correct");
                    userScore[0]++;
                } else {
                    alert("That is incorrect\nYou lose 5 seconds.");
                    //TO DO: decreaseClock();
                }
                break;
             default:
                alert("You shouldn't see this!");
                break;
        }
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", playQuiz);