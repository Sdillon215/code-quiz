var startBtnEl = document.getElementById("start-btn");

var startHide = function (event) {
    document.getElementById("start-hide").style.display = "none";
    console.log("clicked");
};

startBtnEl.addEventListener("click", startHide);