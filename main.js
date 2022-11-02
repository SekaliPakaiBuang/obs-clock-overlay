// Elements and variables
const dateLabel = document.getElementById("date");
const separator = document.getElementsByClassName("separator");

const hourLabel = document.getElementById("hour");
const minuteLabel = document.getElementById("minute");
const secondLabel = document.getElementById("second");

const secondsBar = document.getElementById("seconds-bar");
const secondsProgress = document.getElementById("seconds-progress");

// Everlasting Loop Function
function loop() {
    let now = new Date();

    let time = {
        date: now.toDateString(),

        hour: now.getHours(),
        minute: now.getMinutes(),
        second: now.getSeconds(),
        millis: now.getMilliseconds(),
    };

    dateLabel.innerHTML = time.date;

    // Blink every second
    for (let i=0; i<separator.length; i++) {
        separator[i].style.opacity = `${(1000 - (time.millis % 1000)) / 1000}`;
    }

    // Display time
    hourLabel.innerHTML = time.hour.toString().padStart(2, "0");
    minuteLabel.innerHTML = time.minute.toString().padStart(2, "0");
    secondLabel.innerHTML = time.second.toString().padStart(2, "0");

    secondsProgress.style.width = `${((time.second * 1000 + time.millis) / 600)}%`;

    // Progress bar logic
    switch (time.minute % 4) {
        case 0:
            secondsBar.style.backgroundColor = "var(--bar-color-1)";
            secondsProgress.style.backgroundColor = "var(--bar-color-2)";
            break;

        case 1:
            secondsBar.style.backgroundColor = "var(--bar-color-2)";
            secondsProgress.style.backgroundColor = "var(--bar-color-3)";
            break;

        case 2:
            secondsBar.style.backgroundColor = "var(--bar-color-3)";
            secondsProgress.style.backgroundColor = "var(--bar-color-4)";
            break;

        case 3:
            secondsBar.style.backgroundColor = "var(--bar-color-4)";
            secondsProgress.style.backgroundColor = "var(--bar-color-1)";
            break;
    }

    requestAnimationFrame(loop);
}

// Init
console.log(separator);
requestAnimationFrame(loop);