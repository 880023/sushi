const cartWrapper = document.querySelector('.cart-wrapper');

// Відстежуємо клік по всій стронці
// Track the click on the entire page
window.addEventListener('click', function (event) {
     // Перевіряємо, шо клік був скоєний по кнопці "Додати в корзину" 
     // We check that the "Add to cart" button was clicked
     if (event.target.hasAttribute('data-cart')) {
          // Знаходимо карточку з товаром, всередині якої був скоєний клік
          // We find the card with the product inside which the click was made
          const card = event.target.closest('.card');

          // Збираємо данні з цього товару й записуємо їх в єдиний об'ект productInfo
          // We collect data from this product and write it into a single productInfo object
          const productInfo = {
               id: card.dataset.id,
               imgSrc: card.querySelector('.product-img').getAttribute('src'),
               title: card.querySelector('.item-title').innerText,
               itemsInBox: card.querySelector('[data-items-in-box]').innerText,
               weight: card.querySelector('.price__weight').innerText,
               price: card.querySelector('.price__currency').innerText,
               counter: card.querySelector('[data-counter]').innerText,
          };


          const cartItemHtml = `<div class="cart-item" data-id="${productInfo.id}">
          <div class="cart-item__top">
               <div class="cart-item__img">
                    <img src="${productInfo.imgSrc}" alt="${productInfo.title}">
               </div>
               <div class="cart-item__desc">
                    <div class="cart-item__title">${productInfo.title}</div>
                    <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}г.</div>

                    <!-- cart-item__details -->
                    <div class="cart-item__details">

                         <div class="items items--small counter-wrapper">
                              <div class="items__control" data-action="minus">-</div>
                              <div class="items__current" data-counter="">${productInfo.counter}</div>
                              <div class="items__control" data-action="plus">+</div>
                         </div>

                         <div class="price">
                              <div class="price__currency">${productInfo.price} грн</div>
                         </div>

                    </div>
                    <!-- // cart-item__details -->

               </div>
          </div>
     </div>`;

          cartWrapper.insertAdjacentHTML('beforeend', cartItemHtml);
     }
});
