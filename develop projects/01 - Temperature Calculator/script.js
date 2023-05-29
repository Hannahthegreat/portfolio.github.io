// Get the elements from the DOM
const inputs = document.querySelectorAll(".card input");
const celsius = document.querySelector("#celsius");
const fahrenheit = document.querySelector("#fahrenheit");
const kelvin = document.querySelector("#kelvin");

// Using a forEach loop we loop through all the inputs 
inputs.forEach(input => {
    // We add an Event listener to all the inputs 
    input.addEventListener("input", e => {
        // We define a constant variable = "input" to target the ids of all the inputs
        const unit = e.target.id;
        // We define another constant variable == "v" to get the value of what we typed in the input
        const v = parseInt(e.target.value);
        // If the user types in the input of celsius
        if(unit === "celsius") {
            // Convert the value to fahrenheit
            fahrenheit.value = parseFloat((v * 1.8) + 32).toFixed(2) * 1;
            // Convert the value to kelvin
            kelvin.value = parseFloat(v + 273.15).toFixed(2) * 1;
        }
        // If the user types in the input of fahrenheit
        else if (unit === "fahrenheit") {
            // Convert the value to celsius
            celsius.value = parseFloat((v - 32) * 5 / 9).toFixed(2) * 1;
            // Convert the value to kelvin 
            kelvin.value = parseFloat(((v -32) * 5 / 9) + 273.15).toFixed(2) * 1;
        }
        else if (unit === "kelvin") {
            // Convert the value to celsius
            celsius.value = parseFloat(v - 273.15).toFixed(2) * 1;
            // Convert the value to fahrenheit
            fahrenheit.value = parseFloat((v - 273.15) * 9/5 +32).toFixed(2) * 1;
        }
    })
});