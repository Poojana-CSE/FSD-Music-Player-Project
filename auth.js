function signup(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const user = { username, email, password };
    localStorage.setItem(email, JSON.stringify(user));
    alert('Sign Up Successful! You can now sign in.');
    window.location.href = 'sign_in.html';
}

function signin(event) {
    event.preventDefault();
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;
    
    const storedUser = localStorage.getItem(email);
    if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.password === password) {
            alert('Sign In Successful!');
            window.location.href = 'index.html'; // Redirect to home page
        } else {
            alert('Incorrect Password');
        }
    } else {
        alert('User not found. Please Sign Up.');
    }
}
