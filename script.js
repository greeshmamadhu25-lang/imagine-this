// ==============================
// REMEMBER THE USER'S CHOICE
// ==============================

const savedChoice = localStorage.getItem("imagineChoice");

console.log("Saved choice:", savedChoice);

if (savedChoice) {

    const smallText = document.querySelector(".small-text");
    const question = document.querySelector(".question");

    if (smallText && question) {

        smallText.textContent = "You came back.";

        if (savedChoice === "deleted") {
            question.textContent = "You deleted it last time.";
        }

        if (savedChoice === "opened") {
            question.textContent = "You opened it last time.";
        }
    }
}


// ==============================
// ENTER BUTTON
// ==============================

const beginBtn = document.getElementById("beginBtn");

if (beginBtn) {

    beginBtn.addEventListener("click", function () {

        document.body.classList.add("fade-out");

        setTimeout(function () {

            const currentChoice = localStorage.getItem("imagineChoice");

            if (currentChoice === "deleted") {

                window.location.href = "return-deleted.html";

            } else if (currentChoice === "opened") {

                window.location.href = "return-opened.html";

            } else {

                window.location.href = "story.html";

            }

        }, 800);

    });

}


// ==============================
// FIRST STORY
// ==============================

const story = document.getElementById("story");
const choices = document.getElementById("choices");

if (story && choices) {

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


// ==============================
// OPEN THE PHOTO
// ==============================

const openPhoto = document.getElementById("openPhoto");

if (openPhoto) {

    openPhoto.addEventListener("click", function () {

        story.innerHTML = "";
        choices.classList.add("hidden");

        localStorage.setItem("imagineChoice", "opened");

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


// ==============================
// DELETE THE PHOTO
// ==============================

const deletePhoto = document.getElementById("deletePhoto");

if (deletePhoto) {

    deletePhoto.addEventListener("click", function () {

        story.innerHTML = "";
        choices.classList.add("hidden");

        localStorage.setItem("imagineChoice", "deleted");

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


// ==============================
// RETURNING USER — DELETED PATH
// ==============================

const returnStory = document.getElementById("returnStory");

if (returnStory) {

    const returnLines = [
        "You deleted the photograph last time.",
        "You thought that was the end of it.",
        "It wasn't.",
        "You check your phone.",
        "There is one new photograph."
    ];

    returnLines.forEach(function (text, index) {

        setTimeout(function () {

            const line = document.createElement("p");

            line.classList.add("story-line");

            if (index === 2 || index === 4) {
                line.classList.add("emphasis");
            }

            line.textContent = text;

            returnStory.appendChild(line);

        }, index * 2000);

    });

}
const returnOpenedStory = document.getElementById("returnOpenedStory");

if (returnOpenedStory) {

    const openedLines = [
        "You opened the photograph last time.",
        "You saw someone standing behind you.",
        "You told yourself it was nothing.",
        "You look at the photograph again.",
        "The person is closer.",
        "Much closer."
    ];

    openedLines.forEach(function (text, index) {

        setTimeout(function () {

            const line = document.createElement("p");

            line.classList.add("story-line");

            if (index === 4 || index === 5) {
                line.classList.add("emphasis");
            }

            line.textContent = text;

            returnOpenedStory.appendChild(line);

        }, index * 2000);

    });

}
const returnOpenedStory = document.getElementById("returnOpenedStory");

if (returnOpenedStory) {

    const openedLines = [
        "You opened the photograph last time.",
        "You saw someone standing behind you.",
        "You told yourself it was nothing.",
        "You look at the photograph again.",
        "The person is closer.",
        "Much closer."
    ];

    openedLines.forEach(function (text, index) {

        setTimeout(function () {

            const line = document.createElement("p");

            line.classList.add("story-line");

            if (index === 4 || index === 5) {
                line.classList.add("emphasis");
            }

            line.textContent = text;

            returnOpenedStory.appendChild(line);

        }, index * 2000);

    });

}
