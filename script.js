
function convert() {
    // Get the input temperature value
    var inputTemp = document.querySelector('input[type="text"]').value;
    // Get the conversion type
    var conversionType = document.querySelector('input[name="conversion"]:checked');

    // Check if input is valid and a conversion type is selected
    if (!inputTemp || isNaN(inputTemp)) {
        alert("Please enter a valid temperature value.");
        return;
    }

    if (!conversionType) {
        alert("Please select a conversion type.");
        return;
    }

    // Convert the temperature based on the selected conversion type
    var convertedTemp;
    if (conversionType.value === "c-to-f") {
        // Celsius to Fahrenheit
        convertedTemp = (parseFloat(inputTemp) * 9/5) + 32;
        alert(inputTemp + "°C is " + convertedTemp.toFixed(2) + "°F");
    } else if (conversionType.value === "f-to-c") {
        // Fahrenheit to Celsius
        convertedTemp = (parseFloat(inputTemp) - 32) * 5/9;
        alert(inputTemp + "°F is " + convertedTemp.toFixed(2) + "°C");
    }
}

