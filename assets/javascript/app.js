/* 
*give them 30 seconds per Q
 create arrays with question, series of answers (or randomly populate answers from other array of options)
 * reset/start function that starts the game and resets it when it's done
 * start timer for set period for each question
    * populate the questions and answers for each new question
    * when timer expires show times up with correct answer
    * after set period, go to next question
* when game is over, show total wins and losses and restart button
* need to find way to randomly assign to multiple choice.

*/


$(document).ready(function() {

    // -------------declaring variables--------------

    let vegeArray = [
        {
            vegetableName: "Pea",
            vegePic: "assets/images/" + "pea_seedling_-_wikimedia_commons_credit_-_250x250.jpg",
            statusPic: "assets/images/" + "rachael-gorjestani-154907-unsplash.jpg",
            option1: "",
            option2: "",
            option3: "",
        },
        {
            vegetableName: "Bush Bean",
            vegePic: "assets/images/" + "bean_seedling_-_pixabay_-_250x250.jpg",
            statusPic: "assets/images/" + "sonja-langford-974-unsplash.jpg",
            option1: "",
            option2: "",
            option3: "",
        },
        {
            vegetableName: "Beet",
            vegePic: "assets/images/" + "beet_-_beta_vulgaris_crapaudine_-_wikimedia_credit_-_250x250..jpg",
            statusPic: "assets/images/" + "foodism360-397333-unsplash.jpg",
            option1: "",
            option2: "",
            option3: "",
        },
        {
            vegetableName: "Carrot",
            vegePic: "assets/images/" + "carrot_seedling_-_wikimedia_commons_credit_-_250x250..jpg",
            statusPic: "assets/images/" + "rachael-gorjestani-154907-unsplash.jpg",
            option1: "",
            option2: "",
            option3: "",
        },
        {
            vegetableName: "Kale",
            vegePic: "assets/images/" + "kale_seedling_-_wikimedia_commons_credit_-_250x250..jpg",
            statusPic: "assets/images/" + "helena-yankovska-408205-unsplash.jpg",
            option1: "",
            option2: "",
            option3: "",
        },
        {
            vegetableName: "Tomato",
            vegePic: "assets/images/" + "primary_-_tomato_seedling_-_pixabay_250x250.jpg",
            statusPic: "assets/images/" + "edgar-castrejon-459818-unsplash.jpg",
            option1: "",
            option2: "",
            option3: "",
        },
        {
            vegetableName: "Cucumber",
            vegePic: "assets/images/" + "cucumber_seedling_-_pixabay_-_250x250.jpg",
            statusPic: "assets/images/" + "kelly-neil-558227-unsplash.jpg",
            option1: "",
            option2: "",
            option3: "",
        },
        {
            vegetableName: "Radish",
            vegePic: "assets/images/" + "radish_seedling_-_pixabay_-_250x250.jpg",
            statusPic: "assets/images/" + "daiga-ellaby-699145-unsplash.jpg",
            option1: "",
            option2: "",
            option3: "",
        },
    ];


let optionArray = ["Sweet Pepper", "Broccoli", "Asparagus", "Cauliflower", "Zucchini", "Spinach", "Pumpkin", "Chilli Pepper", "Cabbage", "Chard", "Corn", "Potato", "Onion", "Eggplant", "Leek", "Kohlrabi", "Okra", "Leaf Lettuce", "Sprouts", "Green Onions", "Artichoke", "Celery", "Spinach", "Brussels Sprouts"];

let winCount = 0;
let lossCount = 0;
let unansweredCount = 0;
let intervalTimer = 30;
let currentVegeIndex = 0;
let currentVegeName = "";
let correctAnswerValue= 0;


// -------------declaring functions--------------

function decrementTimer() {
    intervalTimer--;
    $("#timer").html(intervalTimer + " seconds")
}

function resetInterval() {
    // clearInterval(interval);
    setInterval(decrementTimer, 1000);
};

function increaseCurrentVegeIndex() {
    currentVegeIndex++;
};

// left off here!!!!!
function nextQuestion() {
    //displays next questions/answers
    currentVegeName = vegeArray[currentVegeIndex].vegetableName;
    correctAnswerValue = Math.floor(Math.random()*4)+1;
    //create look that looks for value
    for (let i=0; 0<4; i++) {
        if ($("btn-group-vertical btn").val() == correctAnswerValue) {
            
        }
    }
    

    //gets random number 1-4, assigns the correct answer to that index, then pulls 3 other randos, assigns them to remaining options, and removes from array.
}
nextQuestion()


function onWin() {

}

function onLoss() {

}

function timesUp() {

}

function restart() {
    //start the game over again from the beginning
    $("#startBtn").removeClass("d-none");
    $("#quizSection").addClass("d-none");
}


// -------------Playing the Game--------------

restart();
//on click of startBtn
$("#startBtn").on("click", function () {
    $("#startBtn").addClass("d-none");
    $("#quizSection").removeClass("d-none");
    resetInterval();
});

if (intervalTimer >= 0) {
    //onclick of the correct answer, wrong answer
    $("btn-group-vertical btn").on("click", function () {
        if ($(this).text() === currentVegeIndex.vegetableName) {
            onWin();
        } else {
            onLoss();
        }
    });
} else {
    timesUp();
}


//in order to start the game need to pull first question, assign/send it to a button, then need to pick 3 veges from the optionArray randomly, assign them to remaining buttons, remove them from array

//if there is still time remaining:
//on click of correct answer, show name of vege and new pic, congrats message, wait for timeout, then go to next Q, add to correct count

//if there is still time remaining:
//on click of wrong answer, show name of vege and new pic, loser message, wait for timeout, then go to next Q, add to incorrect count

//if there is no time remaining:
//show name of vege and new pic, out of time message, wait for timeout, then go to next Q, add to unanswered count

//After last Q, display final message (or maybe 2-3 depending on how well they did), correct, incorrect, unanswered count, stop timer (maybe), have try again button

})