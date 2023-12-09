function convertToFahrenheit() {
  let fahrenheitValue = parseFloat(document.getElementById('fahrenheitInput').value);
  let celsiusValue = (5 / 9) * (fahrenheitValue - 32);
  document.getElementById('celsiusInput').value = celsiusValue.toFixed(2);
}

function convertToCelsius() {
  let celsiusValue = parseFloat(document.getElementById('celsiusInput').value);
  let fahrenheitValue = (celsiusValue * 9 / 5) + 32;
  document.getElementById('fahrenheitInput').value = fahrenheitValue.toFixed(2);
}
