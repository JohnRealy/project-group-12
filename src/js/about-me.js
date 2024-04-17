import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const swiperBox = document.querySelector('.about-me-section .swiper');
const nextButtonRev = document.querySelector('.swiper-button-next-about');

console.log(swiperBox);

const swiper = new Swiper(swiperBox, {
  modules: [Navigation],
  slidesPerView: 2,
  loop: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },

    1440: {
      slidesPerView: 6,
    },
  },
  direction: 'horizontal',
  navigation: {
    nextEl: '.swiper-button-next-about',
  },
});
