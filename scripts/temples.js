// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');

// Toggle navigation visibility
hamburger.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamburger.textContent = navigation.classList.contains('open') ? '✖' : '☰';
});

// Responsive hamburger button visibility
const mediaQuery = window.matchMedia('(min-width: 768px)');

function handleResize(e) {
    if (e.matches) {
        nav.style.display = 'flex';
    } else {
        nav.style.display = 'none';
    }
}

mediaQuery.addEventListener('change', handleResize);
handleResize(mediaQuery);
