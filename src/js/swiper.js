import Swiper from 'swiper';

// ================ / html example / ================

export function getSwiper(params) {
  new Swiper('.swiper', params);
}

// ================ / please call me / ================

// import { getSwiper } from './swiper';

// getSwiper({
//   modules: [Navigation, Keyboard],
//   speed: 800,
//   grabCursor: true,
//   allowTouchMove: true,
//   direction: 'horizontal',
//   watchOverflow: true,
//   spaceBetween: 16,

//   navigation: {
//     nextEl: '.next-review-btn',
//     prevEl: '.prev-review-btn',
//   },

//   keyboard: {
//     enabled: true,
//     onlyInViewport: true,
//     pageUpDown: true,
//   },

//   breakpoints: {
//     320: {
//       slidesPerGroup: 1,
//       slidesPerView: 1,
//     },
//     768: {
//       slidesPerGroup: 2,
//       slidesPerView: 2,
//     },
//     1440: {
//       slidesPerGroup: 4,
//       slidesPerView: 4,
//     },
//   },
// });

// ================ / html example / ================

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
//   <!-- If we need pagination -->
//   <div class="swiper-pagination"></div>

//   <!-- If we need navigation buttons -->
//   <div class="swiper-button-prev"></div>
//   <div class="swiper-button-next"></div>

//   <!-- If we need scrollbar -->
//   <div class="swiper-scrollbar"></div>
// </div>
