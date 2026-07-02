document.addEventListener('DOMContentLoaded', () => {
    
    /* ==========================================================================
       1. Theme Switcher Utility (Interactive Prototype Selector)
       ========================================================================== */
    const switcherBtns = document.querySelectorAll('.switcher-btn');
    
    switcherBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all switcher buttons
            switcherBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Get selected theme
            const theme = btn.getAttribute('data-theme');
            
            // Remove all layout themes from body
            document.body.className = '';
            
            // Add selected theme class
            document.body.classList.add(`theme-${theme}`);
            
            // Trigger tab check in case of interactive theme
            if (theme === 'interactive') {
                switchToTab('hero');
            } else {
                // Ensure all sections are visible when not in tab mode
                const sections = document.querySelectorAll('section');
                sections.forEach(s => s.classList.add('active-section'));
            }
        });
    });

    /* ==========================================================================
       2. Terminal Brand Name Typing Animation
       ========================================================================== */
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
                setTimeout(typeLong, 55);
            } else {
                checkTypingFinished();
            }
        }
        
        function typeShort() {
            if (indexShort < textShort.length) {
                brandShort.textContent += textShort.charAt(indexShort);
                indexShort++;
                setTimeout(typeShort, 100);
            } else {
                checkTypingFinished();
            }
        }
        
        let finishedCount = 0;
        function checkTypingFinished() {
            finishedCount++;
            if (finishedCount === 2 && brandCursor) {
                brandCursor.style.animation = 'blink-cursor 0.8s infinite';
            }
        }
        
        setTimeout(() => {
            typeLong();
            typeShort();
        }, 300);
    }

    /* ==========================================================================
       3. Interactive Tabs Manager (Concept 4 support)
       ========================================================================== */
    const tabBtns = document.querySelectorAll('.tab-btn');
    const sections = document.querySelectorAll('section');
    
    function switchToTab(tabId) {
        // Handle section IDs matching tabs (hero maps to tab "hero", animations to "animations", etc.)
        let targetId = tabId;
        if (tabId === 'team') targetId = 'team';
        
        sections.forEach(sec => {
            if (sec.getAttribute('id') === targetId) {
                sec.classList.add('active-section');
            } else {
                sec.classList.remove('active-section');
            }
        });
        
        // Update active class on tab buttons
        tabBtns.forEach(btn => {
            if (btn.getAttribute('data-tab') === tabId) {
                btn.classList.add('active-tab');
            } else {
                btn.classList.remove('active-tab');
            }
        });
    }
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            switchToTab(tabId);
        });
    });

    /* ==========================================================================
       4. Navigation Logic & Scrolling
       ========================================================================== */
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav a, .split-nav a');

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
            
            // Check if interactive theme mode is active
            if (document.body.classList.contains('theme-interactive')) {
                e.preventDefault();
                let tabId = 'hero';
                if (href === '#animations') tabId = 'animations';
                if (href === '#contribute') tabId = 'contribute';
                switchToTab(tabId);
            }
            
            // Close mobile menu if open
            if (menuToggle && nav) {
                menuToggle.classList.remove('active');
                nav.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Scroll Highlighter (Disabled in interactive tab mode)
    window.addEventListener('scroll', () => {
        if (document.body.classList.contains('theme-interactive')) return;
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // Highlight slightly before section enters viewport
            if (pageYOffset >= (sectionTop - 180)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            
            // Normalise contribute section match
            let normCurrent = current;
            if (href === '#hero' && normCurrent === 'hero') link.classList.add('active');
            if (href === '#animations' && normCurrent === 'animations') link.classList.add('active');
            if (href === '#contribute' && normCurrent === 'contribute') link.classList.add('active');
        });
    });
});
