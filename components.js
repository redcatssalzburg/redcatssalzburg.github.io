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
                        <a href="kader.html" class="nav-link text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200">Kader</a>
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
                <a href="kader.html" class="block px-3 py-2 text-gray-700 hover:text-red-600">Kader</a>
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
    <footer class="bg-gray-900 text-white">
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div class="col-span-1 md:col-span-2">
                    <h3 class="text-xl font-bold text-red-400 mb-4">RedCats Salzburg</h3>
                    <p class="text-gray-300 mb-4">Der Volleyball-Verein für Leidenschaft, Teamgeist und Erfolg in Salzburg.</p>
                    <div class="flex space-x-4">
                        <a href="#" class="text-gray-300 hover:text-red-400 transition-colors duration-200">
                            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                            </svg>
                        </a>
                        <a href="#" class="text-gray-300 hover:text-red-400 transition-colors duration-200">
                            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                            </svg>
                        </a>
                        <a href="#" class="text-gray-300 hover:text-red-400 transition-colors duration-200">
                            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z.017 0z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div>
                    <h4 class="text-lg font-semibold mb-4">Kontakt</h4>
                    <div class="space-y-2 text-gray-300">
                        <p>📧 redcatssalzburg@gmail.com</p>
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
            <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; 2024 RedCats Salzburg. Alle Rechte vorbehalten.</p>
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
