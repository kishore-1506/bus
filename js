document.addEventListener("DOMContentLoaded", () => {
    const loginPage = document.getElementById('login-page');
    const enteringPage = document.getElementById('entering-page');
    const bookingPage = document.getElementById('booking-page');
    const paymentPage = document.getElementById('payment-page');
    const successPage = document.getElementById('success-page');

    // Login form submission
    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        loginPage.classList.remove('active');
        enteringPage.classList.add('active');
    });

    // Proceed to Booking
    document.getElementById('book-now').addEventListener('click', () => {
        enteringPage.classList.remove('active');
        bookingPage.classList.add('active');
    });

    // Booking form submission
    document.getElementById('booking-form').addEventListener('submit', (e) => {
        e.preventDefault();
        bookingPage.classList.remove('active');
        paymentPage.classList.add('active');
    });

    // Payment form submission
    document.getElementById('payment-form').addEventListener('submit', (e) => {
        e.preventDefault();
        paymentPage.classList.remove('active');
        successPage.classList.add('active');
    });

    // Go to home after success
    document.getElementById('home-btn').addEventListener('click', () => {
        successPage.classList.remove('active');
        enteringPage.classList.add('active');
    });

    // Prevent screenshots
    document.addEventListener('keydown', function(event) {
        if (event.key === 'PrintScreen') {
            event.preventDefault();
            alert('Screenshots are disabled!');
        }
    });

    document.addEventListener('copy', function(event) {
        event.preventDefault();
        alert('Copying is disabled!');
    });

    // Set initial page as login
    loginPage.classList.add('active');
});
