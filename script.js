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


/* OPEN THE PHOTO */

const openPhoto = document.getElementById("openPhoto");

if (openPhoto) {

    openPhoto.addEventListener("click", function () {

        story.innerHTML = "";

        choices.classList.add("hidden");

        const newLines = [
            "You open the photograph.",
            "At first, everything looks normal.",
            "Your bedroom is exactly as it is now.",
            "Your eyes are closed.",
            "But then you notice something.",
            "Someone is standing behind you."
        ];

        newLines.forEach(function (text, index) {

            setTimeout(function () {

                const line = document.createElement("p");

                line.classList.add("story-line");

                if (index === 5) {
                    line.classList.add("emphasis");
                }

                line.textContent = text;

                story.appendChild(line);

            }, index * 1800);

        });

    });

}


/* DELETE THE PHOTO */

const deletePhoto = document.getElementById("deletePhoto");

if (deletePhoto) {

    deletePhoto.addEventListener("click", function () {

        story.innerHTML = "";

        choices.classList.add("hidden");

        const newLines = [
            "You delete the photograph.",
            "The screen goes black for a second.",
            "Then your phone vibrates.",
            "You have one new photo.",
            "You stare at the screen.",
            "It's the same photograph."
        ];

        newLines.forEach(function (text, index) {

            setTimeout(function () {

                const line = document.createElement("p");

                line.classList.add("story-line");

                if (index === 5) {
                    line.classList.add("emphasis");
                }

                line.textContent = text;

                story.appendChild(line);

            }, index * 1800);

        });

    });

}
