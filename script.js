const durationInput = document.getElementById("durationInput");
const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButton");
const resetButton = document.getElementById("resetButton");
const countdownDisplay = document.getElementById("countdownDisplay");
const completionMessage = document.getElementById("completionMessage");

let countdown;
let duration;

startButton.addEventListener("click", () => {
    if (!countdown && durationInput.value > 0) {
        startCountdown();
    }
});

pauseButton.addEventListener("click", pauseCountdown);
resetButton.addEventListener("click", resetCountdown);

function startCountdown() {
    duration = parseInt(durationInput.value) * 60; // Convert minutes to seconds
    startButton.disabled = true;
    pauseButton.disabled = false;
    resetButton.disabled = false;

    countdown = setInterval(() => {
        if (duration <= 0) {
            clearInterval(countdown);
            completionMessage.textContent = "Countdown Complete!";
            return;
        }

        const minutes = Math.floor(duration / 60);
        const seconds = duration % 60;
        const displayMinutes = String(minutes).padStart(2, "0");
        const displaySeconds = String(seconds).padStart(2, "0");

        countdownDisplay.textContent = `${displayMinutes}:${displaySeconds}`;
        duration--;
    }, 1000); // Update every 1 second (1000 milliseconds)
}

function pauseCountdown() {
    clearInterval(countdown);
    countdown = null;
    startButton.disabled = false;
    pauseButton.disabled = true;
}

function resetCountdown() {
    clearInterval(countdown);
    countdown = null;
    startButton.disabled = false;
    pauseButton.disabled = true;
    resetButton.disabled = true;
    completionMessage.textContent = "";
    countdownDisplay.textContent = "00:00";
}
