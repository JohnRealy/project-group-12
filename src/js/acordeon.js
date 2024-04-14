import Accordion from 'accordion-js';

document.addEventListener('DOMContentLoaded', function () {
  // Инициализация аккордеона
  const accordion = new Accordion('.accordion-container');
  const button = document.querySelector('.ac-trigger');
  // // Обработчик события для кнопки разворачивания аккордеона
  button.addEventListener('click', function () {
    accordion.toggle();
  });
});
