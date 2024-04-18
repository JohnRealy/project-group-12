import Swiper from 'swiper';

const swiper = new Swiper('.about-me-section .swiper', {
  slidesPerView: 6, // Відображення однієї карточки за раз
  loop: true, // Безкінечний цикл
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const list = document.querySelector('.swiper-wrapper-about');

document
  .querySelector('.swiper-button-next-about')
  .addEventListener('click', stepNext);

function stepNext() {
  // swiper.slideNext(); // Перехід до наступної карточки
}
