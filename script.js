const beginBtn = document.getElementById("beginBtn");

beginBtn.addEventListener("click", function () {
    document.body.classList.add("fade-out");

    setTimeout(function () {
        window.location.href = "story.html";
    }, 800);
});
const beginBtn = document.getElementById("beginBtn");

if (beginBtn) {
    beginBtn.addEventListener("click", function () {
        document.body.classList.add("fade-out");

        setTimeout(function () {
            window.location.href = "story.html";
        }, 800);
    });
}


const story = document.getElementById("story");

if (story) {

    const lines = [
        "You wake up tomorrow.",
        "Your phone is on the table beside you.",
        "There is one new photograph in your gallery.",
        "You open it.",
        "It's a photograph of you sleeping.",
        "You live alone."
    ];

    let index = 0;

    function showNextLine() {

        if (index >= lines.length) {
            return;
        }

        const line = document.createElement("p");

        line.classList.add("story-line");

        if (index === 4) {
            line.classList.add("emphasis");
        }

        line.textContent = lines[index];

        story.appendChild(line);

        index++;

        setTimeout(showNextLine, 1800);
    }

    showNextLine();
}
