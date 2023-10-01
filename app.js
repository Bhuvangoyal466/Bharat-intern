function convertTemperature() {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitResult = document.getElementById("fahrenheitResult");
    var kelvinResult = document.getElementById("kelvinResult");

    var celsius = parseFloat(celsiusInput.value);

    if (!isNaN(celsius)) {
        var fahrenheit = (celsius * 9) / 5 + 32;
        var kelvin = celsius + 273.15;

        fahrenheitResult.textContent = fahrenheit.toFixed(2);
        kelvinResult.textContent = kelvin.toFixed(2);
    } else {
        alert("Please enter a valid temperature in Celsius.");
    }
}
