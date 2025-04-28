const cursorDot = document.querySelector("[data-cursor-dot]")
const cursorOutline = document.querySelector("[data-cursor-outline]") 
window.addEventListener("mousemove", function(e){
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;
  // cursorOutline.style.left = `${posX}px`;
  // cursorOutline.style.top = `${posY}px`;

cursorOutline.animate({
  left:`${posX}px`,
  top: `${posY}px`
},{duration:200, fill: "forwards"});

})



const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const navbar = document.querySelector(".fixed-navbar");
const hamburgerIcon = hamburger.querySelector(".fa-bars");
const closeIcon = hamburger.querySelector(".fa-x");

// Function to toggle the menu and navbar styles
const toggleMenu = () => {
  if (navMenu.classList.contains("open")) {
    // If the menu is open and being closed
    navMenu.classList.remove("open");

    // Delay reverting the navbar's color until the menu is fully closed
    setTimeout(() => {
      navbar.classList.remove("open");
    }, 500); // Delay matches the CSS transition duration (500ms)
  } else {
    // If the menu is closed and being opened
    navMenu.classList.add("open");
    navbar.classList.add("open");
  }

  hamburgerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
};

// Toggle menu on hamburger click
hamburger.addEventListener("click", toggleMenu);

// Close menu when clicking outside
document.addEventListener("click", (event) => {
  const isClickInside = navMenu.contains(event.target) || hamburger.contains(event.target);
  if (!isClickInside && navMenu.classList.contains("open")) {
    toggleMenu();
  }
});

// Function to set the active link
const setActiveLink = (clickedLink) => {
  const navLinks = document.querySelectorAll("#navMenu a");
  navLinks.forEach((link) => {
    link.classList.remove("active"); // Remove active class from all links
  });
  clickedLink.classList.add("active"); // Add active class to the clicked link
};

// Close menu and set active link when clicking a navigation link
const navLinks = document.querySelectorAll("#navMenu a");
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    setActiveLink(event.target); // Set active link
    if (navMenu.classList.contains("open")) {
      toggleMenu(); // Close the menu if it's open
    }
  });
});


// GSAP Animations on Page Load
window.addEventListener('DOMContentLoaded', () => {
    gsap.from("#project-title", {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power4.out"
    });
  
    gsap.from("#main-img", {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.3,
      ease: "power4.out"
    });
  
    gsap.from("#project-description", {
      opacity: 0,
      x: -50,
      duration: 1,
      delay: 0.6,
      ease: "power4.out"
    });
  

  });

