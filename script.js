const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const submit = document.getElementById("submit");
const result = document.getElementById("result");

let answer;

document.getElementById("submit").addEventListener("click", () => {
  if (toFahrenheit.checked) {
    answer = Number(textBox.value);
    answer = Math.floor((answer * 9) / 5 + 32);
    result.textContent = `${answer}°F`;
  } else if (toCelsius.checked) {
    answer = Number(textBox.value);
    answer = Math.floor(((answer - 32) * 5) / 9);
    result.textContent = `${answer}°C`;
  } else {
    result.textContent = `error`;
  }
});
