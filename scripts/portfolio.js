// JavaScript to toggle sidenav
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.body.style.marginLeft = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.marginLeft = "0";
  }

//   Home section slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  // Hide all slides
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = "block";  // Show the next slide
  setTimeout(showSlides, 3000);  // Change image every 3 seconds
}

// Home text animation
document.addEventListener("DOMContentLoaded", function() {
  const texts = [
    "I am a Junior Web Developer.", 
    "I love to design..",
    "I build responsive websites.", 
    "I love working with clients", 
    "...to achieve their goals."
  ]; // Array of sentences to display
  let textIndex = 0; // Tracks the current sentence
  let charIndex = 0; // Tracks the current character in the sentence
  const speed = 100; // Typing speed in milliseconds
  const delayBetweenTexts = 1000; // Delay before starting the next sentence
  const typewriterElement = document.getElementById("typewriter-text");

  function typeWriter() {
    if (charIndex < texts[textIndex].length) {
      typewriterElement.textContent += texts[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, speed); // Continue typing the current sentence
    } else {
      // Wait and then move to the next sentence
      setTimeout(() => {
        deleteText(); // Start deleting the current sentence
      }, delayBetweenTexts);
    }
  }

  function deleteText() {
    if (charIndex >= 0) {
      typewriterElement.textContent = texts[textIndex].substring(0, charIndex);
      charIndex--;
      setTimeout(deleteText, speed / 2); // Speed up deletion
    } else {
      // Move to the next text in the array
      textIndex = (textIndex + 1) % texts.length; // Loop back to the first sentence
      setTimeout(typeWriter, speed);
    }
  }

  // Start the typewriter effect
  typeWriter();
});


// Select all tab links
const tabLinks = document.querySelectorAll('.tab_header ul li a');

// Add click event to each tab link
tabLinks.forEach((tab) => {
    tab.addEventListener('click', function(e) {
        e.preventDefault();

        // Remove 'active' class from all tabs and contents
        document.querySelector('.tab_header ul li.active').classList.remove('active');
        document.querySelector('.tab_content .tab_item.active').classList.remove('active');

        // Add 'active' class to the clicked tab
        tab.parentElement.classList.add('active');

        // Show the corresponding content
        const target = document.querySelector(tab.getAttribute('href'));
        target.classList.add('active');
    });
});

// Function to animate progress bars when the Skills tab is opened
function animateProgressBars() {
  // Select all progress bars
  const progressBars = document.querySelectorAll('.progress_item');

  progressBars.forEach(function (bar) {
      // Get the data-value attribute (the percentage to fill)
      const progressValue = bar.getAttribute('data-value');
      
      // Find the progress background element and set its width to the percentage
      const progressBg = bar.querySelector('.progress_bg');
      progressBg.style.width = progressValue + '%';
  });
}

// Event listener to trigger the animation when the skills tab is clicked
document.querySelector('a[href="#tab3"]').addEventListener('click', function() {
  setTimeout(animateProgressBars, 300); // Delay to ensure the tab is fully active
});


// Carousel functionality for the Work section
let workSlideIndex = 1;
showWorkSlides(workSlideIndex);

// Next/previous controls
function plusSlides(n) {
  showWorkSlides(workSlideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showWorkSlides(workSlideIndex = n);
}

function showWorkSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel-slide");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) { workSlideIndex = 1 }
  if (n < 1) { workSlideIndex = slides.length }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[workSlideIndex - 1].style.display = "block";  
  dots[workSlideIndex - 1].className += " active";
}
