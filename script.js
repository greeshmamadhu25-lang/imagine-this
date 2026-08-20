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
const choices = document.getElementById("choices");

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

            setTimeout(function () {
                choices.classList.remove("hidden");
            }, 1200);

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


const openPhoto = document.getElementById("openPhoto");
const deletePhoto = document.getElementById("deletePhoto");

if (openPhoto) {
    openPhoto.addEventListener("click", function () {
        alert("The photograph opens.");
    });
}

if (deletePhoto) {
    deletePhoto.addEventListener("click", function () {
        alert("You deleted the photograph.");
    });
}
