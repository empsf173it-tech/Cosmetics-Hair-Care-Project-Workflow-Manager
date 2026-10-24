/* assets/js/main.js */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Reset any remnant direction or theme classes from localStorage
    try {
        localStorage.removeItem('color-theme');
        localStorage.removeItem('direction');
    } catch (e) {
        // Storage access gracefully handled
    }
    document.documentElement.classList.remove('dark');
    document.documentElement.setAttribute('dir', 'ltr');

    // 2. Header Scroll Effect
    const header = document.getElementById('main-header');
    
    if (header) {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                header.classList.remove('header-transparent');
                header.classList.add('header-scrolled');
            } else {
                header.classList.add('header-transparent');
                header.classList.remove('header-scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check on load
    }

    // 3. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
            
            if (isExpanded) {
                mobileMenu.classList.add('hidden');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
                mobileMenuBtn.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
                if (window.lucide) lucide.createIcons();
            } else {
                mobileMenu.classList.remove('hidden');
                mobileMenuBtn.setAttribute('aria-expanded', 'true');
                document.body.style.overflow = 'hidden';
                mobileMenuBtn.innerHTML = '<i data-lucide="x" class="w-6 h-6"></i>';
                if (window.lucide) lucide.createIcons();
            }
        });

        // Close menu when clicking on mobile menu links
        const menuLinks = mobileMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
                mobileMenuBtn.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
                if (window.lucide) lucide.createIcons();
            });
        });
    }
});
