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
list.addEventListener('click', onClick);

function onClick(e) {
  const btn = e.target;
  const activeBtn = e.currentTarget.querySelector('.active-slide-about');
  if (btn.nodeName !== 'LI' && btn.nodeName !== 'P') {
    return;
  }
  if (btn.dataset.type === 'page') {
    btn.classList.toggle('active-slide-about');
    activeBtn.classList.toggle('active-slide-about');
    return;
  }
  if (btn.parentNode.dataset.type === 'page') {
    btn.parentNode.classList.toggle('active-slide-about');
    activeBtn.classList.toggle('active-slide-about');
    return;
  }
  if (
    btn.dataset.type === 'next'
    //   &&
    // activeBtn.nextElementSibling.dataset.type === 'page'
  ) {
    console.log('llo');
    activeBtn.classList.toggle('active-slide-about');
    activeBtn.nextElementSibling.classList.toggle('active-slide-about');
  }
}

document
  .querySelector('.swiper-button-next-about')
  .addEventListener('click', stepNext);

function stepNext() {
  // swiper.slideNext(); // Перехід до наступної карточки
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
