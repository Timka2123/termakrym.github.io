document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mainMenu = document.querySelector('.main-menu');
  
  menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    mainMenu.classList.toggle('active');
  });
  
  // Закрытие меню при клике на ссылку
  const menuLinks = document.querySelectorAll('.main-menu a');
  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      menuToggle.classList.remove('active');
      mainMenu.classList.remove('active');
    });
  });
  
  // Пример: плавное появление элементов при скролле
  const revealElements = document.querySelectorAll('.big-image-block, .medium-image-block, .wide-image-block, .reviews-section, .contacts-map-block');
  
  function revealOnScroll() {
    let windowHeight = window.innerHeight;

    revealElements.forEach(el => {
      let top = el.getBoundingClientRect().top;
      if (top < windowHeight - 80) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        el.style.transition = 'opacity 0.8s, transform 0.8s';
      }
    });
  }

  // Скрываем секции изначально
  revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(60px)';
  });
  
  window.addEventListener('scroll', revealOnScroll);
  setTimeout(revealOnScroll, 180);
});