// ================ / html example / =========================

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

// =============================================================

// import Swiper from 'swiper';
// import { getData } from './api';
// import Swiper from './swiper';
// import Swiper, { Navigation } from 'swiper';
// import Swiper from 'swiper';
// import { getReviews } from './api';

// import { Navigation, Keyboard } from 'swiper/modules';

// const swiper = new Swiper('.swiper-container', {
//   modules: [Navigation],
//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//     },
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 16,
//     },
//     1440: {
//       slidesPerView: 4,
//       spaceBetween: 16,
//     },
//   },
//   navigation: {
//     nextEl: '.nextBtn',
//     prevEl: '.prevBtn',
//     disabledClass: 'swiper-button-disabled',
//   },
// });
// API

// function createMarkup(arr) {
//   return arr
//     .map(
//       user => `<li class="reviews-item swiper-slide">
//           <img
//             class="reviews-item-img"
//             src="${user.avatar_url}"
//             alt="Ihor Trachuk"
//           />
//           <h3 class="reviews-item-name">${user.author}</h3>
//           <p class="reviews-text">
//             ${user.review}
//           </p>
//         </li>`
//     )
//     .join('');
// }

// const reviewList = document.querySelector('.reviews-list');

// document.addEventListener('DOMContentLoaded', renderPage);

// async function renderPage() {
//   reviewList.insertAdjacentHTML('afterbegin', createMarkup(await getReviews()));
// }

// new Swiper('.swiper', {
//   spaceBetween: 16,
// });

// const slide = document.querySelector('.swiper').swiper;

// Now you can use all slider methods like
// slide.slideNext();

// ==========================================================

// const reviewsSwiper = new Swiper('.reviews-swiper', {
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

// =======================================================
