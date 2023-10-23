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