const menuCloseButton = document.getElementById('mobile-menu-close');
const menuOpenButton = document.getElementById('mobile-menu-open');
const menu = document.getElementById('mobile-menu-id');
const body = document.getElementsByTagName('body');

menuOpenButton.addEventListener('click', () => {
  console.log('clicked open button');
  menu.classList.add('is-open');
  body[0].classList.add('no-scroll');
});

menuCloseButton.addEventListener('click', () => {
  console.log("clicked close button");
  menu.classList.remove('is-open');
  body[0].classList.remove('no-scroll');
});