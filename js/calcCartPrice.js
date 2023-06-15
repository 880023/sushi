function calkCartPriceAndDelivery() {
     const cartWrapper = document.querySelector('.cart-wrapper');
     const cartItems = document.querySelectorAll('.cart-item');
     const totalPriceEl = document.querySelector('.total-price');
     const deliveryCost = document.querySelector('.delivery-cost');
     const cartDelivery = document.querySelector('[data-cart-delivery]');

     // Спільна коштовність товарів
     let priceTotal = 0;
     cartItems.forEach(function (item) {
          const amountEl = item.querySelector('[data-counter]').innerText;
          const priceEl = item.querySelector('.price__currency').innerText;
          const currentPrice = parseInt(amountEl) * parseInt(priceEl);

          priceTotal += currentPrice;
     });

     totalPriceEl.innerText = priceTotal;

     // Закриваємо або показуємо блок з коштовністю доставки
     if (priceTotal > 0) {
          cartDelivery.classList.remove('none');
     } else {
          cartDelivery.classList.add('none');
     }


     // Вказуємо коштовність доставки
     if (priceTotal >= 600) {
          deliveryCost.classList.add('free');
          deliveryCost.innerText = 'бесплатно';
     } else {
          deliveryCost.classList.remove('free');
          deliveryCost.innerText = 'бесплатна от 600 грн';
     }

}