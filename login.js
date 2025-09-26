document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const loginModal = document.getElementById("loginModal");
    const loginError = document.getElementById("loginError");

    function openModal() {
        loginModal.style.display = "block";
    }

    function closeModal() {
        loginModal.style.display = "none";
    }

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        // Dummy username & password for testing
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "admin" && password === "admin123") {
            window.location.href = "admin.html"; // Redirect to Admin Panel
        } else {
            loginError.style.display = "block";
        }
    });

    // Open login modal when clicking login button
    document.getElementById("loginBtn").addEventListener("click", openModal);
});
