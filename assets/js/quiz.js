var startBtnEl = document.getElementById("start-btn");
var timeLeft = document.getElementById("time-left").innerText = 10;




// function to hide start screen on click of start-btn
var startHide = function (event) {
    document.getElementById("start-hide").style.display = "none";

    // Timer function initialized on click of start btn
    var quizTime = setInterval(function () {
        if (timeLeft <= 0) {
            clearInterval(quizTime);
        }
        document.getElementById("time-left").innerText = timeLeft;
        timeLeft--;
    }, 1000);
    questions();
};

// questions function
var questions = function () {
    console.log("questions bruh");
};

startBtnEl.addEventListener("click", startHide);