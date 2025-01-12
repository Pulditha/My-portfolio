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





// Disable browser scroll restoration
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

// Scroll to top on page unload
window.addEventListener("beforeunload", () => {
  window.scrollTo(0, 0);
});

// Ensure ScrollTrigger starts from the top on load
window.addEventListener("load", () => {
  setTimeout(() => {
    window.scrollTo(0, 0); // Force scroll to top
    ScrollTrigger.refresh(); // Refresh ScrollTrigger for accurate calculations
  }, 0);
});

// GSAP and ScrollTrigger setup
const races = document.querySelector(".races");

function getScrollAmount() {
  return -(races.scrollWidth - window.innerWidth);
}

const tween = gsap.to(races, {
  x: getScrollAmount,
  duration: 3,
  ease: "none",
});

ScrollTrigger.create({
  trigger: ".racesWrapper",
  start: "top top",
  end: () => `+=${races.scrollWidth - window.innerWidth}`,
  pin: true,
  animation: tween,
  scrub: 1,
  invalidateOnRefresh: true,
});

// Refresh ScrollTrigger on window resize for responsiveness
window.addEventListener("resize", () => {
  ScrollTrigger.refresh();
});




// // Loader functionality
// function startLoader() {
//   let counterElement = document.querySelector(".counter");
//   let currentValue = 0;

//   function updateCounter() {
//     if (currentValue === 100) {
//       return;
//     }
//     currentValue += Math.floor(Math.random() * 10) + 1;

//     if (currentValue > 100) {
//       currentValue = 100;
//     }
//     counterElement.textContent = currentValue;

//     let delay = Math.floor(Math.random() * 200) + 50;
//     setTimeout(updateCounter, delay);
//   }

//   updateCounter();
// }

// startLoader();

// gsap.to(".counter", 0.25, {
//   delay: 3.5,
//   opacity: 0,
// });
// gsap.to(".bar", 1.5, {
//   delay: 3.5,
//   height: 0,
//   stagger: {
//     amount: 0.5,
//   },
//   ease: "power4.inOut",
// });

// gsap.from(".h1", 1.5, {
//   delay: 4,
//   y: 700,
//   stagger: {
//     amount: 0.5,
//   },
//   ease: "power4.inOut",
// });

  // Smooth scroll for anchor links


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


var typed = new Typed('.auto-type', {
  strings: ['Fullstack', 'Web'],
  typeSpeed: 150,
  backSpeed: 150, // Note: Corrected 'backspeed' to 'backSpeed'
  loop: true // Corrected 'looped' to 'loop'
});


//download cv button 
const magneto = document.querySelector('.magneto')
const magnetoText = document.querySelector('.magneto .text')
const dbgr = document.querySelector('#debugger')

const activateMagneto = (event) =>{
let boundBox = magneto.getBoundingClientRect()
const magnetoStrength = 90
const magnetotextStrength = 70
const newX = ((event.clientX - boundBox.left)/magneto.offsetWidth) - 0.5
const newY = ((event.clientY - boundBox.top)/magneto.offsetHeight) - 0.5

dbgr.innerHTML = 'cursorX:' +event.clientX +'<br>boxLeft: ' +Math.ceil(boundBox.left)+
'<br>cursorInsideButton: ' +Math.ceil(event.clientX - boundBox.left) + '<br>relativeToTotalWidth: ' +((event.clientX - boundBox.left)/magneto.offsetWidth).toFixed(2)
+'<br>shifted: ' + ((event.clientX - boundBox.left)/magneto.offsetWidth-0.5).toFixed(2)

gsap.to(magneto,{
  duration: 1 , 
  x:newX * magnetoStrength,
  y:newY * magnetoStrength,
  ease:Power4.easeOut
})
gsap.to(magnetoText,{
  duration: 1 , 
  x:newX * magnetotextStrength,
  y:newY * magnetotextStrength,
  ease:Power4.easeOut
})

}

const resetMagneto =(event) =>{
  gsap.to(magneto,{
    duration: 1 , 
    x:0 ,
    y:0 ,
    ease:Elastic.easeOut
  })
  
  gsap.to(magnetoText,{
    duration: 1 , 
    x:0 ,
    y:0 ,
    ease:Elastic.easeOut
  })
  
}

magneto.addEventListener('mousemove',activateMagneto)
magneto.addEventListener('mouseleave',resetMagneto  )




// Hamburger button
const hamburger2 = document.querySelector('#hamburger');
const hamburgerIcons = document.querySelectorAll('#hamburger i'); 
const dbgr2 = document.querySelector('#debugger2');

const activateHamburgerEffect = (event) => {
  let boundBox = hamburger.getBoundingClientRect();
  const hamburgerStrength = 40;
  const iconStrength = 20;
  const newX = ((event.clientX - boundBox.left) / hamburger.offsetWidth) - 0.5;
  const newY = ((event.clientY - boundBox.top) / hamburger.offsetHeight) - 0.5;

  dbgr2.innerHTML = 'cursorX:' + event.clientX + '<br>boxLeft: ' + Math.ceil(boundBox.left) +
  '<br>cursorInsideButton: ' + Math.ceil(event.clientX - boundBox.left) + '<br>relativeToTotalWidth: ' + ((event.clientX - boundBox.left) / hamburger.offsetWidth).toFixed(2)
  + '<br>shifted: ' + ((event.clientX - boundBox.left) / hamburger.offsetWidth - 0.5).toFixed(2);
  
  gsap.to(hamburger, {
    duration: 1,
    x: newX * hamburgerStrength,
    y: newY * hamburgerStrength,
    ease: Power4.easeOut
  });
  
  gsap.to(hamburgerIcons, {
    duration: 1,
    x: newX * iconStrength,
    y: newY * iconStrength,
    ease: Power4.easeOut
  });
};

const resetHamburgerEffect = (event) => {
  gsap.to(hamburger, {
    duration: 1,
    x: 0,
    y: 0,
    ease: Elastic.easeOut
  });
  
  gsap.to(hamburgerIcons, {
    duration: 1,
    x: 0,
    y: 0,
    ease: Elastic.easeOut
  });
};

// Event listeners
hamburger.addEventListener('mousemove', activateHamburgerEffect);
hamburger.addEventListener('mouseleave', resetHamburgerEffect);


gsap.registerPlugin(ScrollTrigger);

// Animate the Title
gsap.from("#about-title h1", {
  scrollTrigger: {
    trigger: "#about-title",
    start: "top 80%",
    end: "top 30%",
    toggleActions: "play none none reverse"
  },
  opacity: 0,
  y: 50,
  duration: 1
});

// Animate the Image
gsap.from("#about-image img", {
  scrollTrigger: {
    trigger: "#about-image",
    start: "top 80%",
    end: "top 30%",
    toggleActions: "play none none reverse"
  },
  opacity: 0,
  scale: 0.8,
  duration: 1
});

// Animate the Divider
gsap.from("#about-divider", {
  scrollTrigger: {
    trigger: "#about-divider",
    start: "top 80%",
    end: "top 30%",
    toggleActions: "play none none reverse"
  },
  opacity: 0,
  width: 0,
  duration: 1
});



gsap.utils.toArray(".skill-bar").forEach((bar) => {
  const percent = bar.getAttribute("data-percent");

  gsap.to(bar, {
    width: percent,
    duration: 1.5,
    ease: "power1.out",
    scrollTrigger: {
      trigger: "#skills", // Start animation when #skills section enters viewport
      start: "top 80%", // Adjust based on your layout
    },
  });
});
// Animate the Description
gsap.from("#about-description p", {
  scrollTrigger: {
    trigger: "#about-description",
    start: "top 80%",
    end: "top 30%",
    toggleActions: "play none none reverse"
  },
  opacity: 0,
  y: 50,
  duration: 1
});

// Animate the Button
gsap.from("#about-button", {
  scrollTrigger: {
    trigger: "#about-button",
    start: "top 80%",
    end: "top 30%",
    toggleActions: "play none none reverse"
  },
  opacity: 0,
  y: 50,
  duration: 1
});



document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".link");
  const hoverImg = document.querySelector(".hover-img");

  links.forEach((link) => {
    const textElements = link.querySelectorAll(".text h2, .text p, .arrow");

    link.addEventListener("mousemove", (e) => {
      const imgSrc = link.getAttribute("data-img-src");
      hoverImg.style.backgroundImage = `url(${imgSrc})`;

      // Position the hover image
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      gsap.to(hoverImg, {
        duration: 0.2,
        scale: 1,
        x: mouseX + 15,
        y: mouseY + 15,
        opacity: 1,
      });

      // Animate text and arrow on hover
      gsap.to(textElements, {
        duration: 0.3,
        x: 5,
        opacity: 1,
        stagger: 0.1,
      });
    });

    link.addEventListener("mouseleave", () => {
      // Hide hover image
      gsap.to(hoverImg, {
        duration: 0.2,
        scale: 0,
        opacity: 0,
      });

      // Reset text and arrow animation
      gsap.to(textElements, {
        duration: 0.3,
        x: 0,
        opacity: 0.8,
        stagger: 0.1,
      });
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
    const counterElement = document.querySelector(".counter");
    let currentValue = 0;
  
    function startLoader() {
      function updateCounter() {
        if (currentValue === 100) {
          // Once loading is complete, start the GSAP animations
          gsap.to(".counter", { duration: 0.25, opacity: 0, delay: 0.5 });
          gsap.to("#loading-screen", {
            duration: 1.5,
            height: 0,
            ease: "power4.inOut",
            delay: 1,
            onComplete: () => {
              document.getElementById("loading-screen").style.display = "none";
  
              // Animate content from bottom to top
              gsap.to("#content", {
                opacity: 1,
                y: 0,
                duration: 1,
              });
  
              // Animate heading
              gsap.to(".h1", {
                duration: 1.5,
                y: 0,
                ease: "power4.inOut",
                delay: 0.5,
              });
            },
          });
          return;
        }
  
        // Increment the counter by a random value
        currentValue += Math.floor(Math.random() * 10) + 1;
  
        if (currentValue > 100) {
          currentValue = 100;
        }
  
        counterElement.textContent = `${currentValue}`;
  
        // Random delay for updating the counter
        let delay = Math.floor(Math.random() * 200) + 50;
        setTimeout(updateCounter, delay);
      }
  
      updateCounter();
    }
  
    startLoader();
  });
  
// Create the grid dynamically
const gridContainer = document.querySelector('.grid-container');
const cols = 10; // Number of columns
const rows = 10; // Number of rows

// Generate grid lines dynamically
for (let i = 0; i < cols * rows; i++) {
  const gridLine = document.createElement('div');
  gridLine.classList.add('grid-line');
  gridContainer.appendChild(gridLine);
}

// Ensure GSAP and ScrollTrigger are registered
gsap.registerPlugin(ScrollTrigger);

// GSAP Animation for random lines forming the grid
const gridLines = document.querySelectorAll('.grid-line');

// Prepare horizontal and vertical animations
const gridAnimation = gsap.timeline();
const duration = 1.5;
const stagger = 0.1;

for (let i = 0; i < gridLines.length; i++) {
  const isHorizontal = Math.random() > 0.5; // Randomly decide if the line is horizontal or vertical
  const direction = Math.random() > 0.5 ? 1 : -1; // Randomly decide the direction

  if (isHorizontal) {
    // Horizontal line
    gridAnimation.fromTo(
      gridLines[i],
      { scaleX: 0, opacity: 0, transformOrigin: direction > 0 ? 'left' : 'right' },
      {
        scaleX: 1,
        opacity: 1,
        duration,
        ease: 'power2.out',
        delay: Math.random() * 0.5, // Add randomness to delay
      },
      i * stagger
    );
  } else {
    // Vertical line
    gridAnimation.fromTo(
      gridLines[i],
      { scaleY: 0, opacity: 0, transformOrigin: direction > 0 ? 'top' : 'bottom' },
      {
        scaleY: 1,
        opacity: 1,
        duration,
        ease: 'power2.out',
        delay: Math.random() * 0.5, // Add randomness to delay
      },
      i * stagger
    );
  }
}

// ScrollTrigger for scaling grid container on scroll
gsap.to(gridContainer, {
  scale: 1.2, // Slight zoom effect
  rotation: 5, // Subtle rotation
  duration: 2,
  scrollTrigger: {
    trigger: '#home',
    start: 'top top',
    end: 'bottom bottom',
    scrub: true, // Smooth effect
    toggleActions: 'restart pause reverse pause', // Restart and reverse effects on scroll
  },
});
  
   // Function to animate the highlighter
   function animateHighlighter() {
    const highlighter = document.createElement('div');
    highlighter.classList.add('highlighter');
    gridContainer.appendChild(highlighter);

    const direction = Math.random() > 0.5 ? 'horizontal' : 'vertical'; // Randomize direction
    const position = Math.floor(Math.random() * (direction === 'horizontal' ? rows : cols)); // Random row/column

    // Set position and size based on direction
    if (direction === 'horizontal') {
      highlighter.style.gridRow = `${position + 1}`;
      highlighter.style.gridColumn = '1 / -1'; // Span all columns
      highlighter.style.height = '2px'; // Thin line for horizontal
      highlighter.style.width = '100%'; // Full width
      gsap.fromTo(
        highlighter,
        { left: '-100%' },
        {
          left: '100%',
          duration: 2,
          ease: 'power2.inOut',
          onComplete: () => highlighter.remove(),
        }
      );
    } else {
      highlighter.style.gridColumn = `${position + 1}`;
      highlighter.style.gridRow = '1 / -1'; // Span all rows
      highlighter.style.width = '2px'; // Thin line for vertical
      highlighter.style.height = '100%'; // Full height
      gsap.fromTo(
        highlighter,
        { top: '-100%' },
        {
          top: '100%',
          duration: 2,
          ease: 'power2.inOut',
          onComplete: () => highlighter.remove(),
        }
      );
    }

    // Schedule the next highlighter animation
    setTimeout(animateHighlighter, Math.random() * 3000 + 2000); // Random interval between 2-5 seconds
  }

  // Start the highlighter animation
  animateHighlighter();

  
