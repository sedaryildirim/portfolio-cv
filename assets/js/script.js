// Hamburber Menu

// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger-menu');
const modal = document.querySelector('.modal');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
});

// Close modal when clicking a nav link
const navLinks = document.querySelectorAll('.modal a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        modal.style.display = 'none';
    });
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        hamburger.classList.remove('active');
        modal.style.display = 'none';
    }
});