// JavaScript to toggle sidenav
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.body.style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.marginLeft = "0";
  }
  
  // Close sidenav when clicking outside of it
  document.addEventListener("click", function(event) {
    const sidenav = document.getElementById("mySidenav");
    if (sidenav.style.width === "250px" && !sidenav.contains(event.target) && event.target.id !== "openNavButton") {
      closeNav();
    }
  });
  
  // Home section slideshow
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
      "I love to design.",
      "I build responsive websites.",
      "I love working with clients",
      "...to achieve their goals."
    ];
    let textIndex = 0;
    let charIndex = 0;
    const speed = 100;
    const delayBetweenTexts = 1000;
    const typewriterElement = document.getElementById("typewriter-text");
  
    function typeWriter() {
      if (charIndex < texts[textIndex].length) {
        typewriterElement.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, speed);
      } else {
        setTimeout(() => {
          deleteText();
        }, delayBetweenTexts);
      }
    }
  
    function deleteText() {
      if (charIndex >= 0) {
        typewriterElement.textContent = texts[textIndex].substring(0, charIndex);
        charIndex--;
        setTimeout(deleteText, speed / 2);
      } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeWriter, speed);
      }
    }
  
    typeWriter();
  });
  
  // Tabs functionality
  document.addEventListener("DOMContentLoaded", function() {
    const tabLinks = document.querySelectorAll('.tab_header ul li a');
    const tabItems = document.querySelectorAll('.tab_item');
  
    // Initialize the first tab as active
    tabLinks[0].parentElement.classList.add('active');
    tabItems[0].classList.add('active');
  
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
  
        // Trigger progress bar animation if Skills tab is opened
        if (tab.getAttribute('href') === "#tab3") {
          setTimeout(animateProgressBars, 300); // Ensure tab is fully active before animating
        }
      });
    });
  });
  
  // Function to animate progress bars when the Skills tab is opened
  function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress_item');
  
    progressBars.forEach(function (bar) {
      const progressValue = bar.getAttribute('data-value');
      const progressBg = bar.querySelector('.progress_bg');
      progressBg.style.width = progressValue + '%'; // Animate the progress bar to its set value
    });
  }
  