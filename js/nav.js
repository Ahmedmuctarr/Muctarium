const navToggles = document.querySelector('.menu');
// Function to toggle the navigation menu
function toggleNav() {
    const navMenu = document.querySelector('ul');
    navMenu.classList.toggle('active');
    let navToggle = navToggles.querySelector('i');
    if (navToggle) {
        if(navToggle.classList.contains('bx-menu')) {
            navToggle.classList.remove('bx-menu');
            navToggle.classList.add('bx-x');
        } else {
            navToggle.classList.remove('bx-x');
            navToggle.classList.add('bx-menu');
        }
    }
}
// Initialize navigation functionality
document.addEventListener('DOMContentLoaded', () => {
    if (navToggles) {
        navToggles.addEventListener('click', toggleNav);
    }
});