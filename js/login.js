document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const loginEmail = document.getElementById("loginEmail").value;
    const loginPassword = document.getElementById("loginPassword").value;

    // Retrieve user data from localStorage
    const userData = JSON.parse(localStorage.getItem("user"));

    if (userData && userData.email === loginEmail && userData.password === loginPassword) {
        alert("Login successful!");
        window.location.href = "index.html"; // Redirect to homepage
    } else {
        alert("Invalid email or password. Please try again.");
    }
});
