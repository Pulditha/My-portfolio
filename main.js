const menuToggle = document.getElementById('menuToggle');
const menuIcon = document.getElementById('menuIcon');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('#navMenu a'); // Select all menu links

// Toggle the menu and icon
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('translate-x-full');

    // Toggle icon between bars and staggered bars
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

// Enable smooth scrolling
document.documentElement.style.scrollBehavior = "smooth";

document.querySelectorAll('#projects div').forEach((project, index) => {
  project.addEventListener('click', () => {
      document.getElementById('projects').scrollTo({
          left: index * window.innerWidth,
          behavior: 'smooth',
      });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const projectsSection = document.querySelector("#projects");

  projectsSection.addEventListener("wheel", (event) => {
      if (event.deltaY !== 0) {
          // Prevent default vertical scrolling
          event.preventDefault();
          // Scroll horizontally based on vertical scroll delta
          projectsSection.scrollLeft += event.deltaY;
      }
  });
});




