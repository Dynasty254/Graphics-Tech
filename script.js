// Slideshow JavaScript functionality
let slideIndex = 0;
showSlides();

// Function to show the slides
function showSlides() {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  
  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove "active" class from all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show the current slide
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";

  // Add "active" class to the current dot
  dots[slideIndex - 1].className += " active";

  // Set a timeout to change slides every 5 seconds
  setTimeout(showSlides, 5000);
}