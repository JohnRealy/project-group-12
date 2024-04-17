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
const swiperBox = document.querySelector('.projects-section > .swiper');
export const nextBtn = document.querySelector('.projects-next-btn');
export const prevBtn = document.querySelector('.projects-prev-btn');

const swiper = new Swiper('.mySwiper', {
  navigation: {
    nextEl: '.projects-next-btn',
    prevEl: '.projects-prev-btn',
  },
});

const nextBtnObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.attributeName === 'class') {
      const disabled = nextBtn.classList.contains('swiper-button-disabled');
      if (disabled) {
        nextBtn.style.opacity = '0.5';
        nextBtn.style.cursor = 'not-allowed';
      } else {
        nextBtn.style.opacity = '1';
        nextBtn.style.cursor = 'pointer';
      }
    }
  });
});

nextBtnObserver.observe(nextBtn, { attributes: true });

const prevBtnObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.attributeName === 'class') {
      const disabled = prevBtn.classList.contains('swiper-button-disabled');
      if (disabled) {
        prevBtn.style.opacity = '0.5';
        prevBtn.style.cursor = 'not-allowed';
      } else {
        prevBtn.style.opacity = '1';
        prevBtn.style.cursor = 'pointer';
      }
    }
  });
});

prevBtnObserver.observe(prevBtn, { attributes: true });
