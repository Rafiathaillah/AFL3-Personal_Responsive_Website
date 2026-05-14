document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    // Check if the elements exist on the page to prevent errors
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            // Toggle the 'hidden' class provided by Tailwind
            mobileMenu.classList.toggle('hidden');
        });
    }
});