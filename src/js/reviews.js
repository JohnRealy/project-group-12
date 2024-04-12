import Swiper from 'swiper';
import { getData } from './api';
// import Swiper from './swiper';
// import Swiper, { Navigation } from 'swiper';

const swiper = new Swiper('.swiper-container', {
  modules: [Navigation],
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },
  navigation: {
    nextEl: '.nextBtn',
    prevEl: '.prevBtn',
    disabledClass: 'swiper-button-disabled',
  },
});
// API
const reviewList = document.querySelector('.reviews-list');

async function getReviews() {
  const data = await getData();
  console.log(data);
}
getReviews();
