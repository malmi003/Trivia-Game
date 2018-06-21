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




// -------------declaring variables--------------

let vegeArray = [
    {
        vegetableName: "Pea",
        vegePic: "assets/images/" + "pea_seedling_-_wikimedia_commons_credit_-_250x250.jpg",
        statusPic: "assets/images/" + "rachael-gorjestani-154907-unsplash.jpg",
        option1: "Cabbage",
        option2: "Onion",
        option3: "Corn",
        option4: "Parsnip",
    },
    {
        vegetableName: "Bush Bean",
        vegePic: "assets/images/" + "bean_seedling_-_pixabay_-_250x250.jpg",
        statusPic: "assets/images/" + "sonja-langford-974-unsplash.jpg",
        option1: "Eggplant",
        option2: "Okra",
        option3: "Spinach",
        option4: "Collard greens",
    },
    {
        vegetableName: "Beet",
        vegePic: "assets/images/" + "beet_-_beta_vulgaris_crapaudine_-_wikimedia_credit_-_250x250..jpg",
        statusPic: "assets/images/" + "foodism360-397333-unsplash.jpg",
        option1: "Asparagus",
        option2: "Cauliflower",
        option3: "Green Onions",
        option4: "Radicchio"
    },
    {
        vegetableName: "Carrot",
        vegePic: "assets/images/" + "carrot_seedling_-_wikimedia_commons_credit_-_250x250..jpg",
        statusPic: "assets/images/" + "gabriel-gurrola-609666-unsplash.jpg",
        option1: "Chilli Pepper",
        option2: "Celery",
        option3: "Pumpkin",
        option4: "Tomatillo"
    },
    {
        vegetableName: "Kale",
        vegePic: "assets/images/" + "kale_seedling_-_wikimedia_commons_credit_-_250x250..jpg",
        statusPic: "assets/images/" + "helena-yankovska-408205-unsplash.jpg",
        option1: "Chard",
        option2: "Broccoli",
        option3: "Zucchini",
        option4: "Rutabaga"
    },
    {
        vegetableName: "Tomato",
        vegePic: "assets/images/" + "primary_-_tomato_seedling_-_pixabay_250x250.jpg",
        statusPic: "assets/images/" + "edgar-castrejon-459818-unsplash.jpg",
        option1: "Spinach",
        option2: "Brussels Sprouts",
        option3: "Potato",
        option4: "Turnip"
    },
    {
        vegetableName: "Cucumber",
        vegePic: "assets/images/" + "cucumber_seedling_-_pixabay_-_250x250.jpg",
        statusPic: "assets/images/" + "kelly-neil-558227-unsplash.jpg",
        option1: "Leek",
        option2: "Leaf Lettuce",
        option3: "Kohlrabi",
        option4: "Shallot"
    },
    {
        vegetableName: "Radish",
        vegePic: "assets/images/" + "radish_seedling_-_pixabay_-_250x250.jpg",
        statusPic: "assets/images/" + "daiga-ellaby-699145-unsplash.jpg",
        option1: "Sweet Pepper",
        option2: "Sprouts",
        option3: "Artichoke",
        option4: "Arugula"
    },
];

let winCount = 0,
    lossCount = 0,
    unansweredCount = 0,
    intervalTimer = 20,
    currentVegeIndex = 0,
    currentVegeName = "";
btnId = "";


// -------------declaring functions--------------

function decrementTimer() {
    intervalTimer--;
    $("#timer").html(intervalTimer + " seconds");
    // return intervalTimer;
}

function resetInterval() {
    // clearInterval(interval);

    setInterval(decrementTimer, 1000);
};

function increaseCurrentVegeIndex() {
    currentVegeIndex++;
};

function nextQuestion() {
    //displays next questions/answers
    if (currentVegeIndex < vegeArray.length) {
        plantPicSrc = vegeArray[currentVegeIndex].vegePic;
        $("#plantPic").attr("src", plantPicSrc);

        currentVegeName = vegeArray[currentVegeIndex].vegetableName;
        correctAnswerOption = Math.floor(Math.random() * 4) + 1;
        for (let i = 1; i < 5; i++) {
            if (i === correctAnswerOption) {
                btnId = "#btn" + i + " span";
                $(btnId).html(currentVegeName);
            } else {
                let optionId = "option" + i;
                let currentOptionName = vegeArray[currentVegeIndex][optionId];
                let btnId = "#btn" + i + " span";
                $(btnId).html(currentOptionName);
            }
        }
        $("#statusSection").addClass("d-none");
        $("#quizSection").removeClass("d-none");
        intervalTimer = 20;
    } else {
        lastPage();
    }
}

function onWin() {
    $("#statusSection").removeClass("d-none");
    $("#quizSection").addClass("d-none");
    winCount++;
    plantPicSrc = vegeArray[currentVegeIndex].statusPic;
    $("#plantPic2").attr("src", plantPicSrc);
    $("#status").html("That's right!");
    let plantName = vegeArray[currentVegeIndex].vegetableName;
    $("#plantName").html(`The answer was ${plantName}.`);
    currentVegeIndex++;
    setTimeout(nextQuestion, 4000);
}

function onLoss() {
    $("#statusSection").removeClass("d-none");
    $("#quizSection").addClass("d-none");
    lossCount++;
    plantPicSrc = vegeArray[currentVegeIndex].statusPic;
    $("#plantPic2").attr("src", plantPicSrc);
    $("#status").html("Good try.");
    let plantName = vegeArray[currentVegeIndex].vegetableName;
    $("#plantName").html(`The answer was ${plantName}.`);
    currentVegeIndex++;
    setTimeout(nextQuestion, 4000);
}

function timesUp() {
    $("#statusSection").removeClass("d-none");
    $("#quizSection").addClass("d-none");
    unansweredCount++;
    plantPicSrc = vegeArray[currentVegeIndex].statusPic;
    $("#plantPic2").attr("src", plantPicSrc);
    $("#status").html("Time's up!");
    let plantName = vegeArray[currentVegeIndex].vegetableName;
    $("#plantName").html(`The answer was ${plantName}.`);
    currentVegeIndex++;
    setTimeout(nextQuestion, 4000);
}

function lastPage() {
    $("#summary").removeClass("d-none");
    $("#winCount").html(winCount);
    $("#lossCount").html(lossCount);
    $("#unansweredCount").html(unansweredCount);
    $("#startBtnText").html("Start Again");
    restart();
}

function restart() {
    //start the game over again from the beginning
    $("#startBtn").removeClass("d-none");
    $("#quizSection").addClass("d-none");
    $("#statusSection").addClass("d-none");
}

$(document).ready(function () {
    // -------------Playing the Game--------------
    $("#summary").addClass("d-none");
    restart();

    $("#startBtn").on("click", function () {
        $("#startBtn").addClass("d-none");
        $("#summary").addClass("d-none");
        resetInterval();
        nextQuestion();
    });

    if (intervalTimer >= 0) {
        $("#quizSection button").on("click", function () {
            //capture which button was clicked...
            let clickId = this.id;
            if (`#${clickId} span` === btnId) {
                onWin();
            } else {
                onLoss();
            }
        });
    } else {
        //can't get this to work
        console.log("do something else")
        timesUp();
    }

    $("#startBtn").on("click", function () {
        $("#startBtn").addClass("d-none");
        $("#summary").addClass("d-none");
        currentVegeIndex = 0;
        nextQuestion();
    });
})