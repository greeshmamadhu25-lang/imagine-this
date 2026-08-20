const beginBtn = document.getElementById("beginBtn");

beginBtn.addEventListener("click", function () {
    document.body.classList.add("fade-out");

    setTimeout(function () {
        window.location.href = "story.html";
    }, 800);
});
