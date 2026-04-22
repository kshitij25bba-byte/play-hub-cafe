// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form validation and submission
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        
        // Simple validation
        if (!formData.get('name').trim()) {
            alert('Please enter your name.');
            return;
        }
        if (!formData.get('email').includes('@')) {
            alert('Please enter a valid email address.');
            return;
        }
        
        alert('Thank you for your booking request! We will contact you soon at ' + formData.get('email'));
        this.reset();
    });
}