
document.getElementById("subscription-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission to the server
    
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message");

    // Simple email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (name && email && emailPattern.test(email)) {
        // Success message
        message.textContent = `Thank you for subscribing, ${name}! You will receive updates at ${email}.`;
        message.style.color = "#28a745";  // Green success message
    } else {
        // Error message
        message.textContent = "Please provide a valid name and email address.";
        message.style.color = "#dc3545";  // Red error message
    }
});




// Dynamically populate the current year
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Dynamically populate the last modified date
document.getElementById('lastModified').textContent = "Last Modified: " + document.lastModified;