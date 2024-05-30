function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function scrollToExperience() {
  var targetSection = document.getElementById("experience");
  var offsetTop = targetSection.offsetTop;
  window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
  });
}

function scrollToProjects() {
  var targetSection = document.getElementById("projects");
  var offsetTop = targetSection.offsetTop;
  window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
  });
}



