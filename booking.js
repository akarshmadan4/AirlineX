// booking.js

document.addEventListener('DOMContentLoaded', function() {
    console.log('Booking page scripts loaded');
    
    const bookingForm = document.getElementById('bookingForm');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Add booking functionality
            const from = document.getElementById('from').value;
            const to = document.getElementById('to').value;
            const date = document.getElementById('date').value;
            const passengers = document.getElementById('passengers').value;
            console.log(`Booking from ${from} to ${to} on ${date} for ${passengers} passengers`);
        });
    }
});
