import { getReviews } from './api';

document.addEventListener('DOMContentLoaded', async () => {
  const reviewList = document.querySelector('.reviews-list');
  reviewList.insertAdjacentHTML('afterbegin', createMarkup(await getReviews()));

  new Swiper('.swiper', {
    slides: 6,
    initialSlide: 0,
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
  });
});

function createMarkup(arr) {
  return arr
    .map(
      user => `
    <li class="reviews-item swiper-slide">
      <img class="reviews-item-img" src="${user.avatar_url}" alt="Ihor Trachuk" />
      <h3 class="reviews-item-name">${user.author}</h3>
      <p class="reviews-text">${user.review}</p>
    </li>
  `
    )
    .join('');
}
