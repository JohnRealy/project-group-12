// import Swiper from 'swiper';
// import { getData } from './api';
// import Swiper from './swiper';
// import Swiper, { Navigation } from 'swiper';
// import Swiper from 'swiper';
import { getReviews } from './api';
import { getSwiper } from './swiper';

// import { Navigation, Keyboard } from 'swiper/modules';

new Swiper('.swiper', {
  breakpoints: {
    375: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1440: {
      slidesPerView: 4,
      grabCursor: true,
      spaceBetween: 18,
    },
  },
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
// API

function createMarkup(arr) {
  return arr
    .map(
      user => `<li class="reviews-item swiper-slide">
          <img
            class="reviews-item-img"
            src="${user.avatar_url}"
            alt="Ihor Trachuk"
          />
          <h3 class="reviews-item-name">${user.author}</h3>
          <p class="reviews-text">
            ${user.review}
          </p>
        </li>`
    )
    .join('');
}

const reviewList = document.querySelector('.reviews-list');

document.addEventListener('DOMContentLoaded', renderPage);

async function renderPage() {
  reviewList.insertAdjacentHTML('afterbegin', createMarkup(await getReviews()));
}

getSwiper(),{
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      375: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1440: {
        slidesPerView: 4,
        grabCursor: true,
        spaceBetween: 18,
      },
    },
  };
// const slide = document.querySelector('.swiper').swiper;

// Now you can use all slider methods like
// slide.slideNext();

// ==========================================================

const reviewsSwiper = new Swiper('.swiper', {
  speed: 800,
  grabCursor: true,
  direction: 'horizontal',
  watchOverflow: false,
  spaceBetween: 16,

  navigation: {
    nextEl: '.next-review-btn',
    prevEl: '.prev-review-btn',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

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
});

// =======================================================
