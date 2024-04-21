import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

const btnNext = document.querySelector('.swiper-button-next');
const btnPrev = document.querySelector('.swiper-button-prev');

const parameters = {
  modules: [Navigation, Keyboard, Mousewheel],
  navigation: {
    nextEl: btnNext,
    prevEl: btnPrev,
  },
  mousewheel: {
    invert: false,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  breakpoints: {
    320: {
      // slidesPerGroup: 1,
      slidesPerView: 2,
    },
    768: {
      // slidesPerGroup: 2,
      slidesPerView: 3,
    },
    1440: {
      // slidesPerGroup: 4,
      slidesPerView: 6,
    },
  },
  loop: true,
  spaceBetween: 16,
};

export function getSwiper(params = {}) {
  const mergedParams = { ...parameters, ...params };
  new Swiper('.swiper', mergedParams);
}

// ================ / call in your file example / ================

// import { getSwiper } from './swiper';

// const btnNext = document.querySelector('.swiper-button-next-about');

// const params = {
//   loop: false,
//   spaceBetween: 0,
// };

// getSwiper(params);

// ================ / your html example / ================

// <!-- Slider main container -->
// <div class="swiper">
//   <!-- Additional required wrapper -->
//   <div class="swiper-wrapper">
//     <!-- Slides -->
//     <div class="swiper-slide">Slide 1</div>
//     <div class="swiper-slide">Slide 2</div>
//     <div class="swiper-slide">Slide 3</div>
//     ...
//   </div>
//  <button class="swiper-button-next">
//  <button class="swiper-button-prew">
//  </button>;
