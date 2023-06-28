function convertTemperature() {
  var temperatureInput = document.getElementById("temperatureInput").value;
  var unitSelect = document.getElementById("unitSelect").value;
  var result = document.getElementById("result");

  // Validate input
  if (isNaN(temperatureInput)) {
    result.innerHTML = "Please enter a valid temperature.";
    return;
  }

  var temperature = parseFloat(temperatureInput);
  var convertedTemperature;
  var unit;

  // Perform conversion
  if (unitSelect === "celsius") {
    convertedTemperature = (temperature - 32) * 5 / 9;
    unit = "°C";
  } else if (unitSelect === "fahrenheit") {
    convertedTemperature = (temperature * 9 / 5) + 32;
    unit = "°F";
  } else if (unitSelect === "kelvin") {
    convertedTemperature = temperature + 273.15;
    unit = "K";
  }

  // Display result
  result.innerHTML = "Converted temperature: " + convertedTemperature.toFixed(2) + unit;
}
