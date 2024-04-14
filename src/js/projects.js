// import Swiper from 'swiper';

// // ================ / html example / ================

// export function getSwiper(params) {
//   new Swiper('.swiper', params);
// }

// // ================ / please call me / ================

// getSwiper({
//   modules: [Navigation, Keyboard],
//   speed: 800,
//   grabCursor: true,
//   allowTouchMove: true,
//   direction: 'horizontal',
//   watchOverflow: true,
//   spaceBetween: 16,

//   navigation: {
//     nextEl: '.projects-next-btn',
//     prevEl: '.projects-prev-btn',
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


var swiper = new Swiper(".mySwiper", {
      navigation: {
        nextEl: ".projects-next-btn",
        prevEl: ".projects-prev-btn",
      },
    });