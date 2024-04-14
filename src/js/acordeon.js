import Accordion from 'accordion-js';

document.addEventListener('DOMContentLoaded', function () {
  // Инициализация аккордеона
  const accordion = new Accordion('.accordion-container');
  const faqelement = document.querySelector('.ac-trigger');
  // // Обработчик события для кнопки разворачивания аккордеона
  faqelement.addEventListener('click', function () {
    accordion.toggle();
  });
});
