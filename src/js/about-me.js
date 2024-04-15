import { getSwiper } from './swiper';
// import Swiper from 'swiper';

const nextSlide = document.querySelector('.swiper-button-next');

const param = {
  //   modules: [Keyboard],
  speed: 800,
  grabCursor: true,
  allowTouchMove: true,
  //   direction: 'horizontal',
  //   watchOverflow: true,
  spaceBetween: 16,
  //   navigation: {
  //     nextEl: '.next-review-btn',
  //     prevEl: '.prev-review-btn',
  //   },
  //   keyboard: {
  //     enabled: true,
  //     onlyInViewport: true,
  //     pageUpDown: true,
  //   },
  breakpoints: {
    320: {
      slidesPerGroup: 1,
      slidesPerView: 1,
    },
    768: {
      slidesPerGroup: 2,
      slidesPerView: 2,
    },
    1440: {
      slidesPerGroup: 4,
      slidesPerView: 4,
    },
  },
};

getSwiper(param);

swiper.slideNext(800);

// swiper.slideNext();
// const swiper = document.querySelector('.swiper').swiper;
