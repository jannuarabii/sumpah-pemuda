document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const wrapperMenu = document.querySelector(".wrapper-menu");
    const checkbox = menuToggle.querySelector("input[type='checkbox']");

    menuToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      wrapperMenu.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });
  
    document.addEventListener("click", function (e) {
      if (
        !wrapperMenu.contains(e.target) &&
        !menuToggle.contains(e.target)
      ) {
        wrapperMenu.classList.remove("active");
        menuToggle.classList.remove("active");
        if (checkbox) checkbox.checked = false;
      }
    });
  
    const navLinks = document.querySelectorAll(".wrapper-menu a");
    navLinks.forEach(link => {
      link.addEventListener("click", function () {
        wrapperMenu.classList.remove("active");
        menuToggle.classList.remove("active");
        if (checkbox) checkbox.checked = false; 
      });
    });
  });
  