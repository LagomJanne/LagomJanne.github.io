
function burgerC(button) {
    button.classList.toggle("change"); 
    const navList = document.getElementById("nav-list"); 
    const screenWidth = window.innerWidth;

    if (screenWidth <= 1000) {
      if (navList.style.display === "block") {
        navList.style.display = "none"; // Hide the navigation menu
      } else {
        navList.style.display = "block"; // Show the navigation menu
      }
    }
}

function resizeFunction() {
  var w = window.innerWidth;

  if (w >= 1000) {
    document.getElementById('nav-list').style.display ="block";
    
  }
}