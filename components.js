// Navigation-Komponente
function createNavigation() {
    return `
    <nav class="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <h1 class="text-2xl font-bold text-red-600">RedCats Salzburg</h1>
                    </div>
                </div>
                <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-8">
                        <a href="index.html" class="nav-link text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200">Home</a>
                        <a href="training.html" class="nav-link text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200">Training</a>
                        <a href="sponsors.html" class="nav-link text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200">Sponsoren</a>
                        <a href="about.html" class="nav-link text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200">About Us</a>
                    </div>
                </div>
                <div class="md:hidden">
                    <button id="mobile-menu-button" class="text-gray-700 hover:text-red-600 focus:outline-none">
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div id="mobile-menu" class="md:hidden hidden bg-white border-t">
            <div class="px-2 pt-2 pb-3 space-y-1">
                <a href="index.html" class="block px-3 py-2 text-gray-700 hover:text-red-600">Home</a>
                <a href="training.html" class="block px-3 py-2 text-gray-700 hover:text-red-600">Training</a>
                <a href="sponsors.html" class="block px-3 py-2 text-gray-700 hover:text-red-600">Sponsoren</a>
                <a href="about.html" class="block px-3 py-2 text-gray-700 hover:text-red-600">About Us</a>
            </div>
        </div>
    </nav>
    `;
}

// Footer-Komponente
function createFooter() {
    return `
    <footer class="bg-gray-900 text-white w-full">
        <div class="py-12 px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
                <div class="col-span-1 md:col-span-2">
                    <h3 class="text-xl font-bold text-red-400 mb-4">RedCats Salzburg</h3>
                    <p class="text-gray-300 mb-4">Der Volleyball-Verein für Leidenschaft, Teamgeist und Erfolg in Salzburg.</p>
                    <div class="flex space-x-4">
                        <a href="#" id="instagram-link" class="text-gray-300 hover:text-red-400 transition-colors duration-200" target="_blank" rel="noopener noreferrer">
                            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div>
                    <h4 class="text-lg font-semibold mb-4">Kontakt</h4>
                    <div class="space-y-2 text-gray-300">
                        <p>📧 <a href="mailto:redcatssalzburg@gmail.com" class="hover:text-red-400 transition-colors duration-200">redcatssalzburg@gmail.com</a></p>
                        <p>📍 Salzburg, Austria</p>
                    </div>
                </div>
                <div>
                    <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
                    <div class="space-y-2">
                        <a href="training.html" class="block text-gray-300 hover:text-red-400 transition-colors duration-200">Mitglied werden</a>
                        <a href="sponsors.html" class="block text-gray-300 hover:text-red-400 transition-colors duration-200">Sponsor werden</a>
                        <a href="about.html" class="block text-gray-300 hover:text-red-400 transition-colors duration-200">Vereinsgeschichte</a>
                    </div>
                </div>
            </div>
            <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 max-w-7xl mx-auto">
                <p>&copy; 2026 RedCats Salzburg. Alle Rechte vorbehalten.</p>
            </div>
        </div>
    </footer>
    `;
}

// Mobile Menu Toggle
function initMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// Aktiven Nav-Link hervorheben
function highlightActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('text-red-600');
            link.classList.remove('text-gray-700');
        }
    });
}

// Scroll Animationen
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, observerOptions);

    // Beobachte alle Elemente mit der Klasse 'animate-on-scroll'
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// Initialisierung beim DOM-Load
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    highlightActiveNavLink();
    initScrollAnimations();
});