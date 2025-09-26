function validateLogin(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get user inputs
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Hardcoded credentials for admin (You can replace this with a database check)
    var adminUsername = "admin";
    var adminPassword = "admin123";

    // Check if entered credentials match
    if (username === adminUsername && password === adminPassword) {
        alert("Login successful!");
        window.location.href = "admin.html"; // Redirect to admin panel
    } else {
        document.getElementById("error-message").innerText = "Invalid username or password!";
    }
}
