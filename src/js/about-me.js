// import Swiper from 'swiper';

const swiper = new Swiper('.about-me-section .swiper', {
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
  loop: true, // Безкінечний цикл
});

// const list = document.querySelector('.swiper-wrapper-about');
// list.addEventListener('click', onClick);

document
  .querySelector('.swiper-button-next-about')
  .addEventListener('click', onClick);

const viewportWidth = window.innerWidth;
let numberOfSlides = 0;
if (viewportWidth >= 320 && viewportWidth < 767) {
  numberOfSlides = 2;
}
if (viewportWidth >= 768 && viewportWidth < 1439) {
  numberOfSlides = 3;
}
if (viewportWidth >= 1440) {
  numberOfSlides = 6;
}
function onClick(e) {
  const activeBtn = document.querySelector('.active-slide-about');
  if (numberOfSlides > 1) {
    console.log(activeBtn);
    activeBtn.classList.toggle('active-slide-about');
    activeBtn.nextElementSibling.classList.toggle('active-slide-about');
    numberOfSlides -= 1;
    return;
  }
  swiper.slideNext(); // Перехід до наступної карточки
  activeBtn.classList.toggle('active-slide-about');
  activeBtn.nextElementSibling.classList.toggle('active-slide-about');
}

//! ============================================
// const swiperBox = document.querySelector('.swiper-wrapper-about');

// swiperBox.addEventListener('click', onClick);

// function onClick(e) {
//   const btn = e.target;
//   const activeBtn = e.currentTarget.querySelector('.active-slide-about');
//   //   console.log(e.target);
//   //   console.log(e.currentTarget);
//   if (btn.nodeName !== 'LI' && btn.nodeName !== 'P') {
//     return;
//   }
//   if (btn.dataset.type === 'page') {
//     btn.classList.toggle('active-slide-about');
//     activeBtn.classList.toggle('active-slide-about');
//     return;
//   }
//   if (btn.parentNode.dataset.type === 'page') {
//     btn.parentNode.classList.toggle('active-slide-about');
//     activeBtn.classList.toggle('active-slide-about');
//     return;
//   }
//   if (
//     btn.dataset.type === 'next'
//     //   &&
//     // activeBtn.nextElementSibling.dataset.type === 'page'
//   ) {
//     console.log('llo');
//     activeBtn.classList.toggle('active-slide-about');
//     activeBtn.nextElementSibling.classList.toggle('active-slide-about');
//   }
// }
