document.addEventListener('DOMContentLoaded', () => {
    // 1. Terminal Typing Effect for the Header Brand Name
    const brandLong = document.getElementById('brand-long');
    const brandShort = document.getElementById('brand-short');
    const brandCursor = document.querySelector('.brand-cursor');
    
    if (brandLong && brandShort) {
        const textLong = brandLong.textContent;
        const textShort = brandShort.textContent;
        
        brandLong.textContent = '';
        brandShort.textContent = '';
        
        let indexLong = 0;
        let indexShort = 0;
        
        function typeLong() {
            if (indexLong < textLong.length) {
                brandLong.textContent += textLong.charAt(indexLong);
                indexLong++;
                setTimeout(typeLong, 50); // 50ms typing speed
            } else {
                checkTypingFinished();
            }
        }
        
        function typeShort() {
            if (indexShort < textShort.length) {
                brandShort.textContent += textShort.charAt(indexShort);
                indexShort++;
                setTimeout(typeShort, 100); // slightly slower for mobile brand text
            } else {
                checkTypingFinished();
            }
        }
        
        let finishedCount = 0;
        function checkTypingFinished() {
            finishedCount++;
            if (finishedCount === 2 && brandCursor) {
                // Both typed! Maintain pulse/blinking cursor
                brandCursor.style.animation = 'blink-cursor 0.8s infinite';
            }
        }
        
        // Start typing shortly after DOM loads
        setTimeout(() => {
            typeLong();
            typeShort();
        }, 300);
    }

    // 2. Mobile Navigation Toggle & Smooth Centered Scrolling
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            const isActive = menuToggle.classList.toggle('active');
            nav.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', isActive);
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }

            // Close mobile nav overlay
            if (menuToggle && nav) {
                menuToggle.classList.remove('active');
                nav.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // 3. Scroll Highlighter for Navigation Links
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // Highlight triggers slightly early (160px buffer)
            if (pageYOffset >= (sectionTop - 160)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href.startsWith('#') && href === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});
