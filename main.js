// Elements and variables
const dateLabel = document.querySelector("#date");
const separator = document.querySelectorAll(".separator");

const hourLabel = document.querySelector("#hour");
const minuteLabel = document.querySelector("#minute");
const secondLabel = document.querySelector("#second");

const secondsBar = document.querySelector("#seconds-bar");
const secondsProgress = document.querySelector("#seconds-progress");

// Everlasting Loop Function
function loop() {
    let now = new Date();

    dateLabel.innerHTML = now.toDateString();

    // Blink every second
    separator.forEach(i => {
        i.style.opacity = `${(1000 - (now.getMilliseconds() % 1000)) / 1000}`;
    });

    // Display time
    hourLabel.innerHTML = now.getHours().toString().padStart(2, "0");
    minuteLabel.innerHTML = now.getMinutes().toString().padStart(2, "0");
    secondLabel.innerHTML = now.getSeconds().toString().padStart(2, "0");

    secondsProgress.style.width = `${((now.getSeconds() * 1000 + now.getMilliseconds()) / 600)}%`;

    // Progress bar logic
    switch (now.getMinutes() % 4) {
        case 0:
            secondsBar.style.background = "var(--bar-color-1)";
            secondsProgress.style.background = "var(--bar-color-2)";
            break;

        case 1:
            secondsBar.style.background = "var(--bar-color-2)";
            secondsProgress.style.background = "var(--bar-color-3)";
            break;

        case 2:
            secondsBar.style.background = "var(--bar-color-3)";
            secondsProgress.style.background = "var(--bar-color-4)";
            break;

        case 3:
            secondsBar.style.background = "var(--bar-color-4)";
            secondsProgress.style.background = "var(--bar-color-1)";
            break;
    }

    requestAnimationFrame(loop);
}

// Init
loop();
