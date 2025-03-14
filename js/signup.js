document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Save user data to localStorage (For now, until backend integration)
    localStorage.setItem("user", JSON.stringify({ username, email, password }));
    alert("Signup successful! You can now log in.");
    window.location.href = "login.html"; // Redirect to login page
});
