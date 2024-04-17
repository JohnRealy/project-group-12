import Swiper from 'swiper';

const swiper = new Swiper('.about-me-section .swiper', {
  slidesPerView: 1, // Відображення однієї карточки за раз
  loop: true, // Безкінечний цикл
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

document
  .querySelector('.swiper-button-next-about')
  .addEventListener('click', function () {
    swiper.slideNext(); // Перехід до наступної карточки
  });
