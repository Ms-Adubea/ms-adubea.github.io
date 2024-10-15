// JavaScript to toggle sidenav
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.body.style.marginLeft = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.marginLeft = "0";
  }

  document.addEventListener("DOMContentLoaded", function() {
    const texts = [
      "I am a Junior Web Developer.", 
      "I love to design..",
      "I build responsive websites.", 
      "I love working with people."
    ]; // Array of sentences to display
    let textIndex = 0; // Tracks the current sentence
    let charIndex = 0; // Tracks the current character in the sentence
    const speed = 100; // Typing speed in milliseconds
    const delayBetweenTexts = 1000; // Delay before starting the next sentence
    const typewriterElement = document.getElementById("typewriter-text");
  
    function typeWriter() {
      if (charIndex < texts[textIndex].length) {
        const char = texts[textIndex].charAt(charIndex);
        const span = document.createElement("span");
        span.textContent = char;
  
        // Add characters alternately to the left and right of the center
        if (charIndex % 2 === 0) {
          span.style.left = `calc(50% - ${charIndex / 2}ch)`; // Shift left
        } else {
          span.style.left = `calc(50% + ${Math.floor(charIndex / 2)}ch)`; // Shift right
        }
  
        typewriterElement.appendChild(span);
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
        typewriterElement.innerHTML = ''; // Clear the text
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
