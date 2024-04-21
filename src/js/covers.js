const coversSection = document.querySelector('section-covers'); // Присвоєння змінної елементу з ID "section-covers"
const marqueeLines = document.querySelectorAll('.marquee__line'); // Вибір усіх елементів з класом "marquee__line"

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY; // Отримання поточної позиції прокрутки
  const sectionTop = coversSection.offsetTop; // Отримання верхньої позиції розділу

  if (scrollPosition >= sectionTop - window.innerHeight / 2) {
    marqueeLines.forEach(line => line.classList.add('animation')); // Додавання класу "animated" до кожного елемента "marquee__line"
  } else {
    marqueeLines.forEach(line => line.classList.remove('animation')); // Видалення класу "animated" з кожного елемента "marquee__line"
  }
});
