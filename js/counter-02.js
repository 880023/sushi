// Додаємо прослушку на всьому вікні
// Add a eavesdropper to the entire window

window.addEventListener('click', function (event) {

     let counter;

     // Перевіряємо клік строго по кнопкам Плюс або Мінус
     // We check the click strictly on the Plus or Minus buttons
     if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {

          // Знаходимо обертку лічильника
          // Find the counter wrapper
          const counterWrapper = event.target.closest('.counter-wrapper');

          // Знаходимо div з числом лічильника
          // Find the div with the number of the counter
          counter = counterWrapper.querySelector('[data-counter]');
     }



     // Перевіряє чи являеться елемент кнопкою Плюс
     // Checks if an element is a plus button
     if (event.target.dataset.action === 'plus') {

          // Змінюєто текст в лічильнику зменьшаючи йогоо на 1
          // Changes the text in the counter, incrementing it by 1
          counter.innerText = ++counter.innerText;


     }

     // Перевіряє чи являеться елемент кнопкою Мінус
     // Checks if an element is a Minus button
     if (event.target.dataset.action === 'minus') {

          // Перевіряємо щоб лічильник був більше 1
          if (parseInt(counter.innerText) > 1) {

               // Змінюєто текст в лічильнику зменьшаючи йогоо на 1
               // Changes the text in the counter, decrementing it by 1
               counter.innerText = --counter.innerText;
          } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
               // Перевірка на товар який знаходиться в кошику

               // Видаляємо товар з корзини
               event.target.closest('.cart-item').remove();

               // Відображення статусу кошика Пуста / Повна
               toggleCartStatus();

               // Перераховування спільної коштовності товару в кошику
               calkCartPriceAndDelivery();
          }

     }

     // Перевіряємо клік на + або - всередині кошика
     if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
          // Перераховування спільної коштовності товару в кошику
          calkCartPriceAndDelivery();
     }

});