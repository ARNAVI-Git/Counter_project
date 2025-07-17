let count = 0;

const counter = document.getElementById("counter-value");
const emoji = document.getElementById("emoji");

function updateCounterDisplay() {
    counter.innerText = count;

    if (count > 5) emoji.innerText = "😄";
    else if (count < -5) emoji.innerText = "😢";
    else emoji.innerText = "😐";
}

document.getElementById("increment").addEventListener("click", () => {
    count++;
    updateCounterDisplay();
});

document.getElementById("decrement").addEventListener("click", () => {
    count--;
    updateCounterDisplay();
});

document.getElementById("reset").addEventListener("click", () => {
    count = 0;
    updateCounterDisplay();
});
