// auth.js

document.addEventListener('DOMContentLoaded', function() {
    console.log('Authentication scripts loaded');
    
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');
    
    if (signInForm) {
        signInForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Add sign-in functionality
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            console.log(`Sign in with email: ${email} and password: ${password}`);
        });
    }
    
    if (signUpForm) {
        signUpForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Add sign-up functionality
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            console.log(`Sign up with email: ${email} and password: ${password}`);
        });
    }
});
