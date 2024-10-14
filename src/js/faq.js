document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-list-type'); // всі елементи списку
  const buttons = document.querySelectorAll('.faq-open-btn'); // кнопки для розгортання

  // Відкриваємо перший елемент за замовчуванням
  faqItems[0].classList.add('active');
  faqItems[0].querySelector('.faq-list-text').style.display = 'block';

  // Функція для згортання всіх елементів
  function closeAllItems() {
    faqItems.forEach(item => {
      item.classList.remove('active');
      item.querySelector('.faq-list-text').style.display = 'none';
    });
  }

  // Обробник кліку для кожної кнопки
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const faqItem = faqItems[index];

      // Якщо елемент відкритий, закриваємо його
      if (faqItem.classList.contains('active')) {
        faqItem.classList.remove('active');
        faqItem.querySelector('.faq-list-text').style.display = 'none';
      } else {
        // Закриваємо всі інші елементи
        closeAllItems();

        // Відкриваємо поточний елемент
        faqItem.classList.add('active');
        faqItem.querySelector('.faq-list-text').style.display = 'block';
      }
    });
  });
});
