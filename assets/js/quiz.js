var startBtnEl = document.getElementById("start-btn");
var timeLeft = document.getElementById("time-left").innerText = 60;




// function to hide start screen on click of start-btn
var startHide = function (event) {
    document.getElementById("start-hide").style.display = "none";

    // Timer function called by startHide function on start click to start the timer for the quiz
    var quizTime = setInterval(function() {
        if(timeLeft <= 0) {
            clearInterval(quizTime);
        }
        document.getElementById("time-left").innerText = timeLeft;
        timeLeft--;
    }, 1000);
};

startBtnEl.addEventListener("click", startHide);