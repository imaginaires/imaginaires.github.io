document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    // Mobile Navigation Toggle
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            const isActive = menuToggle.classList.toggle('active');
            nav.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', isActive);
        });

        // Close mobile nav when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                nav.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Scroll Highlighter for Navigation Links
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Subtracting 120px to trigger the highlight slightly before entering the section
            if (pageYOffset >= (sectionTop - 120)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            // Check if it's an internal anchor link
            if (href.startsWith('#') && href === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});
