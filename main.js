// JavaScript to add parallax effect
document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const layers = document.querySelectorAll('.parallax-layer');

    layers.forEach((layer) => {
        const depth = layer.getAttribute('data-depth') || 0.5;
        const translateY = scrollPosition * depth;
        layer.style.transform = `translateY(${translateY}px)`;
    });
});


function toggleMenu() {
    const nav = document.querySelector('header nav');
    nav.classList.toggle('hidden');
  }
  