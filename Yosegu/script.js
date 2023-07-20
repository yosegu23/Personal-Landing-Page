document.addEventListener('DOMContentLoaded', function(){
    const navbar = document.querySelector('.navbar');
    navbar.style.animation = 'none'; 
    navbar.offsetHeight; 
    navbar.style.animation = null;
});

// JavaScript to hide the splash screen after the website loads
window.addEventListener("load", function () {
    const splashScreen = document.querySelector(".splash-screen");
    splashScreen.classList.add("hide");
});

const typing = new Typed(".dynamic-text", {
  strings: ["Full Stack Developer", "UI/UX Designer", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 40,
  loop: true,
  });