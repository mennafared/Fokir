document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navbar = document.querySelector('.navbar');
  const navRight = document.querySelector('.nav-right');

  hamburger.addEventListener('click', function() {
    navbar.classList.toggle('active');
    if (navbar.classList.contains('active')) {
      navRight.style.maxHeight = navRight.scrollHeight + 'px';
    } else {
      navRight.style.maxHeight = '0';
    }
  });
});