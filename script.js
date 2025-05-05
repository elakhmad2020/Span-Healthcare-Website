// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    // Toggle menu
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle');
    
    // Animate links
    if (navLinks.classList.contains('active')) {
        links.forEach((link, index) => {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.3}s`;
        });
    } else {
        links.forEach(link => {
            link.style.animation = '';
        });
    }
});

// Close menu when clicking links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('toggle');
        links.forEach(link => {
            link.style.animation = '';
        });
    });
});
