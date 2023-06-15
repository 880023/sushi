// Знаходимо елементи на сторінці
// We find the elements on the page
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');

// Відстежуємо клік на кнопку Мінус
// We track clicking on the Minus button
btnMinus.addEventListener('click', function () {

     // Перевіряємо щоб лічильник був більше Одиниці
     // We make sure that the counter is greater than one
     if (parseInt(counter.innerText) > 1) {
          // Змінюєто текст в лічильнику зменьшаючи йогоо на 1
          // Changes the text in the counter, decrementing it by 1
          counter.innerText = --counter.innerText;
     }

});

// Відстежуємо клік на кнопку Плюс
// We track clicking on the Plus button
btnPlus.addEventListener('click', function () {
     // Змінюєто текст в лічильнику зменьшаючи йогоо на 1
     // Changes the text in the counter, incrementing it by 1
     counter.innerText = ++counter.innerText;
});

