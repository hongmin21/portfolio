document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('nav-toggle');
  const navBar = document.querySelector('.nav-bar');

  navToggle.addEventListener('click', function() {
    navBar.classList.toggle('active');
  });
});