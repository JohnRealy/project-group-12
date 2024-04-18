// Вибираємо секцію .section-covers
const sectionCovers = document.querySelector('.section-covers');

// Вибираємо всі елементи з класом .marquee__line
const marqueeLines = document.querySelectorAll('.marquee__line');

// Функція для перевірки видимості секції .section-covers
function checkSectionVisibility() {
  // Отримуємо прямокутник секції .section-covers
  const rect = sectionCovers.getBoundingClientRect();

  // Отримуємо висоту видимого вікна
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;

  // Перевіряємо, чи верхня межа секції більше половини висоти видимого вікна
  if (rect.top <= windowHeight / 2) {
    // Якщо так, то анімуємо всі елементи .marquee__line
    marqueeLines.forEach(marqueeLine => {
      marqueeLine.classList.add('animation');
    });
  } else {
    // В іншому випадку видаляємо анімацію з усіх елементів .marquee__line
    marqueeLines.forEach(marqueeLine => {
      marqueeLine.classList.remove('animation');
    });
  }
}

// Викликаємо функцію при завантаженні сторінки і при переміщенні користувача
window.addEventListener('load', checkSectionVisibility);
window.addEventListener('scroll', checkSectionVisibility);
