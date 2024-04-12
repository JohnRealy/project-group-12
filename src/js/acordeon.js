document.addEventListener('DOMContentLoaded', function() {
  // Инициализация аккордеона
  const accordion = new Accordion('.accordion-container');

  // Обработчик события для кнопки разворачивания аккордеона
  document.getElementById('toggleAccordion').addEventListener('click', function() {
    accordion.toggleAll();
  });
});
