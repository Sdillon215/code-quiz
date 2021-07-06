var startBtnEl = document.getElementById("start-btn");
var timeLeft = document.getElementById("time-left").innerText = 60;
var points = 0;
var right = document.getElementById("right");
var oneBtnEl = document.querySelectorAll(".answer-one");
var twoBtnEl = document.querySelectorAll(".answer-two");
var threeBtnEl = document.querySelectorAll(".answer-three");
var intBtnEl = document.getElementById("save-int");
var scoreArr = [];



// function to hide start screen on click of start-btn
var startHide = function (event) {
    document.getElementById("start-hide").style.display = "none";


    // Timer function initialized on click of start btn
    var quizTime = setInterval(function () {
        if (timeLeft === 0) {
            endQuiz();
        }
        if (timeLeft <= 0) {
            clearInterval(quizTime);
        }
        document.getElementById("time-left").innerText = timeLeft;
        timeLeft--;
    }, 1000);

    questionOne();
};

var hideAll = function () {
    document.getElementById("1").style.display = "none";
    document.getElementById("2").style.display = "none";
    document.getElementById("3").style.display = "none";
    document.getElementById("end").style.display = "none";
}

var questionOne = function () {
    document.getElementById("1").style.display = "flex";

}

var questionTwo = function () {
    document.getElementById("1").style.display = "none";
    document.getElementById("2").style.display = "flex";
}

var questionThree = function () {
    document.getElementById("2").style.display = "none";
    document.getElementById("3").style.display = "flex";
}

var endQuiz = function () {
    hideAll();
    document.getElementById("3").style.display = "none";
    document.getElementById("end").style.display = "flex";
    document.getElementById("score").innerText = points;
}

var saveInt = function () {
    
    var int = document.getElementById("text-input").value;
    scoreArr.push(int + " " + points);
    localStorage.setItem("scoreArr", JSON.stringify(scoreArr));
    highScore();
}

var highScore = function() {
    var savedHighScore = localStorage.getItem("scoreArr");
    savedHighScore = JSON.parse(savedHighScore);
    document.getElementById("all-scores").innerText = savedHighScore;
}

intBtnEl.addEventListener("click", saveInt);
startBtnEl.addEventListener("click", startHide);
oneBtnEl.forEach(element => {
    element.addEventListener("click", (e) => {
        if (element.id === "right") {
            points = points + 5;
        } else {
            timeLeft = timeLeft - 5;
        }
        questionTwo();
    });
});

twoBtnEl.forEach(element => {
    element.addEventListener("click", (e) => {
        if (element.id === "right") {
            points = points + 5;
        } else {
            timeLeft = timeLeft - 5;
        }
        questionThree();
    });
});

threeBtnEl.forEach(element => {
    element.addEventListener("click", (e) => {
        if (element.id === "right") {
            points = points + 5;
        } else {
            timeLeft = timeLeft - 5;
        }
        endQuiz();
    });
});

hideAll();
highScore();