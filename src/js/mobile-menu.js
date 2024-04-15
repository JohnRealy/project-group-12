const menuCloseButton = document.getElementById('mobile-menu-close');
const menuOpenButton = document.getElementById('mobile-menu-open');
const mainModalMenuOpenButton = document.getElementById('main-modal-menu-open');
const menu = document.getElementById('mobile-menu-id');
const menuLink = document.querySelectorAll('mobile-menu-nav-list-item');
const mainModalMenu = document.getElementById('main-modal-menu-id');
const mainModalMenuLink = document.querySelectorAll('main-modal-list-item');
const body = document.getElementsByTagName('body');
const mainMenu = document.querySelector('.main-modal-menu');


// show/hide the menu when the button is clicked
for (let link of menuLink) {
  // console.log(link);
  link.addEventListener('click', () => {
    menu.classList.remove('is-open');
    body[0].classList.remove('no-scroll');
  });
}

for (let link of mainModalMenuLink) {
  // console.log(link);
  link.addEventListener('click', () => {
    mainModalMenu.classList.remove('is-open');
    body[0].classList.remove('no-scroll');
  });
}

menuOpenButton.addEventListener('click', () => {
  menu.classList.add('is-open');
  body[0].classList.add('no-scroll');
});

menuCloseButton.addEventListener('click', () => {
  menu.classList.remove('is-open');
  body[0].classList.remove('no-scroll');
});

mainModalMenuOpenButton.addEventListener('click', handleClick);

function handleClick() {
  mainModalMenuOpenButton.addEventListener('click', remove);
  addOpen();
  mainModalMenuOpenButton.removeEventListener('click', handleClick);
}

function addOpen() {
  mainMenu.classList.add('is-open2');
}

function remove() {
  mainMenu.classList.remove('is-open2');
  mainModalMenuOpenButton.addEventListener('click', handleClick);
}

// hide the menu when a click event occurs outside the menu
document.addEventListener('click', event => {
  if (
    !mainMenu.contains(event.target) &&
    !mainModalMenuOpenButton.contains(event.target) &&
    !menu.contains(event.target)
  ) {
    console.log('clicked outside menu');
    remove();
    console.log(menu);
  }
});