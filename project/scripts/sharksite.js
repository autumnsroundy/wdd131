// Dynamically populate the current year
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Dynamically populate the last modified date
document.getElementById('lastModified').textContent = "Last Modified: " + document.lastModified;

document.getElementById("subscription-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting to the server

    // Get form values
    const email = document.getElementById("email").value;
    const questionText = document.getElementById("text").value;
    const message = document.getElementById("message"); // Message display element

    // Simple email validation (using regex)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (email && questionText && emailPattern.test(email)) {
        // Success message
        message.textContent = `Response can be found in your email, ${email}.`;
        message.style.color = "#28a745";  // Green success message

        // Optionally, you can clear the form fields after successful submission:
        document.getElementById("subscription-form").reset();

    } else {
        // Error message for invalid input
        message.textContent = "Please provide a valid email and question.";
        message.style.color = "#dc3545";  // Red error message
    }
});
