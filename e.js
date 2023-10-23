// JavaScript function to handle the burger button click and adjust navigation display
function burgerC(button) {
    button.classList.toggle("change"); // Toggle the "change" class for animation
    const navList = document.getElementById("nav-list"); // Get the navigation menu
    const screenWidth = window.innerWidth;
  
    if (screenWidth <= 1000) {
      if (navList.style.display === "block") {
        navList.style.display = "none"; // Hide the navigation menu
      } else {
        navList.style.display = "block"; // Show the navigation menu
      }
    }
  }
  
  // Check the screen width when the window is resized
  window.addEventListener('resize', function() {
    const screenWidth = window.innerWidth;
    const navList = document.getElementById("nav-list");
    const burgerButton = document.querySelector(".container");
  
    if (screenWidth > 1000) {
      navList.style.display = "block"; // Show the navigation menu for screen width over 1000px
      if (burgerButton.classList.contains("change")) {
        burgerButton.classList.remove("change"); // Untoggle the button state
      }
    } else {
      navList.style.display = "none"; // Hide the navigation menu for screen width below or equal to 1000px
    }
  });
  
  // Ensure that the navigation menu is displayed by default
  window.addEventListener('load', function() {
    const screenWidth = window.innerWidth;
    const navList = document.getElementById("nav-list");
  
    if (screenWidth > 1000) {
      navList.style.display = "block"; // Show the navigation menu for screen width over 1000px
    }
  });
  