// Select elements
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const counterValue = document.getElementById("counter-value");

// Initial count
let count = 0;

// Event listeners
incrementBtn.addEventListener("click", () => {
  count++;
  counterValue.textContent = count;
});

decrementBtn.addEventListener("click", () => {
  count--;
  counterValue.textContent = count;
});
