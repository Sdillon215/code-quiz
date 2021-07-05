var startBtnEl = document.getElementById("start-btn");
var timeLeft = document.getElementById("time-left").innerText = 60;




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
    document.getElementById("1").style.visibility = "hidden";

    if (startBtnEl) {
        document.getElementById("1").style.visibility = "visible";
    }
};

startBtnEl.addEventListener("click", startHide);
questions();