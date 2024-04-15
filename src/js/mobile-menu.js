const menuCloseButton = document.getElementById('mobile-menu-close');
const menuOpenButton = document.getElementById('mobile-menu-open');
const mainModalMenuOpenButton = document.getElementById('main-modal-menu-open');
const menu = document.getElementById('mobile-menu-id');
const mainModalMenu = document.getElementById('main-modal-menu-id');
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

mainModalMenuOpenButton.addEventListener('click', () => {
  console.log('clicked main menu button');
  mainModalMenu.classList.add('is-open2');
  body[0].classList.add('no-scroll');
});

// hide the menu when a click event occurs outside the menu
document.addEventListener('click', (event) => {
  if (!mainModalMenu.contains(event.target) && !mainModalMenuOpenButton.contains(event.target)) {
    console.log("clicked outside menu");
    mainModalMenu.classList.remove('is-open2');
    body[0].classList.remove('no-scroll');
    console.log(menu);
    console.log(body);
  }
});