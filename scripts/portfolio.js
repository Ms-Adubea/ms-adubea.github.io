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
  


  document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    
    if (!carousel || !prevButton || !nextButton) {
        return;
    }
  
    const itemWidth = document.querySelector('.carousel-item').offsetWidth + 20; // Include margin
  
    let currentPosition = 0;
    let isAutoSliding = true;
    let autoSlideInterval;
  
    function moveCarousel(direction) {
        const maxPosition = -(carousel.scrollWidth - carousel.clientWidth);
        if (direction === 'prev' && currentPosition < 0) {
            currentPosition += itemWidth;
        } else if (direction === 'next' && currentPosition > maxPosition) {
            currentPosition -= itemWidth;
        } else if (direction === 'next' && currentPosition <= maxPosition) {
            // Reset to the beginning when reaching the end
            currentPosition = 0;
        }
        carousel.style.transform = `translateX(${currentPosition}px)`;
    }
  
    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            moveCarousel('next');
        }, 3000); // Change slide every 3 seconds
    }
  
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }
  
    prevButton.addEventListener('click', () => {
        moveCarousel('prev');
        stopAutoSlide();
        isAutoSliding = false;
    });
  
    nextButton.addEventListener('click', () => {
        moveCarousel('next');
        stopAutoSlide();
        isAutoSliding = false;
    });
  
    carousel.addEventListener('mouseenter', () => {
        stopAutoSlide();
    });
  
    carousel.addEventListener('mouseleave', () => {
        if (isAutoSliding) {
            startAutoSlide();
        }
    });
  
    // Start auto-sliding
    startAutoSlide();
  });