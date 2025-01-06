document.addEventListener("DOMContentLoaded", () => {
  // Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const menuIcon = document.getElementById('menuIcon');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('#navMenu a'); // Select all menu links

  // Toggle the menu and icon
  menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('translate-x-full');

      if (menuIcon.classList.contains('fa-bars')) {
          menuIcon.classList.remove('fa-bars');
          menuIcon.classList.add('fa-bars-staggered');
          menuIcon.style.color = "white"; // Change icon to white
      } else {
          menuIcon.classList.remove('fa-bars-staggered');
          menuIcon.classList.add('fa-bars');
          menuIcon.style.color = "white"; // Change icon to gray
      }
  });

  // Close the menu when a link is clicked
  navLinks.forEach(link => {
      link.addEventListener('click', () => {
          navMenu.classList.add('translate-x-full'); // Hide menu
          menuIcon.classList.remove('fa-bars-staggered');
          menuIcon.classList.add('fa-bars');
          menuIcon.style.color = "white"; // Reset icon to gray
      });
  });

  // Enable smooth scrolling for the entire page
  document.documentElement.style.scrollBehavior = "smooth";

});

