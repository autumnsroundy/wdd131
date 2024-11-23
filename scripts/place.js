// Dynamically populate the current year
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Dynamically populate the last modified date
document.getElementById('lastModified').textContent = "Last Modified: " + document.lastModified;

// Example static values for weather calculation
const temperature = 5;  // Temperature in Celsius
const windSpeed = 10;   // Wind speed in km/h
    
const windChill = calculateWindChill(temperature, windSpeed);
    
// Displaying the wind chill factor in the "Weather" section
const windChillElement = document.querySelector('#windchill');
windChillElement.textContent = windChill ? `Wind Chill: ${windChill}°C` : "Wind Chill: N/A";

// Function to calculate Wind Chill
function calculateWindChill(temperature, windSpeed) {
    // For Celsius
    if (temperature <= 10 && windSpeed > 4.8) {
        // Using the wind chill formula for Celsius
        return Math.round(13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16));
    }
    return null;  // Return null if conditions for wind chill are not met
}
