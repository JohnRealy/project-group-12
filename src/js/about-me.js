import Swiper from 'swiper';

const swiper = new Swiper('.about-me-section .swiper', {
  slidesPerView: 6, // Відображення однієї карточки за раз
  loop: true, // Безкінечний цикл
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

document
  .querySelector('.swiper-button-next-about')
  .addEventListener('click', stepNext);

function stepNext() {}
