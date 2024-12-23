document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerIcon = hamburger.querySelector('i');
  const menuLinks = mobileMenu.querySelectorAll('a'); // Select all links inside the mobile menu

  // Toggle the mobile menu and hamburger icon on hamburger click
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    hamburgerIcon.classList.toggle('fa-bars');
    hamburgerIcon.classList.toggle('fa-bars-staggered');
  });

  // Hide the mobile menu and reset the hamburger icon when a link is clicked
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      hamburgerIcon.classList.add('fa-bars');
      hamburgerIcon.classList.remove('fa-bars-staggered');
    });
  });
});
