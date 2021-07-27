const buttonIncart = document.querySelectorAll('.product-incart-btn');
const input = document.querySelector('.stepper__input');
const quantityCart = document.querySelector('.header__cart-quantity');
const sumCart = document.querySelector('.header__cart-sum');
const cart = document.querySelector('.cart');
const cartList = document.querySelector('.cart__list');
const fullPrice = document.querySelector('.cart__sum-text');
const headerCart = document.querySelector('.header__cart');
const headerCartMobileQuantity = document.querySelector('.header__cart--quantity');

let price = 0;
let allCountProducts = 0;

const generateCartProduct = (code, img, quantity, priceNumber) => {
  return `
   <li class="cart__item item">
        <div class="item__img">
          <span class="item__img-code">${code}</span>
          <img src="${img}" alt="product photo">
        </div>
        <div class="item__quantity">
          <span class="item__quantity-text">Кол-во</span>
          <span class="item__quantity-number">${quantity}</span>
        </div>
        <div class="item__price">
          <span class="item__price-text">Цена, руб</span>
          <span class="item__price-number">${priceNumber}</span>
        </div>
        <div class="item__delete"></div>
    </li>
`;
}

const priceWithoutSpace = (str) => {
  return str.replace(/\s/g, '');
}

const normalPrice = (str) => {
  return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};

const plusFullPrice = (currentPrice) => {
  return price += currentPrice
}

const minusFullPrice = (currentPrice) => {
  return price -= currentPrice
}

const cartVisible = () => {
  cart.classList.remove('cart-hidden');
  cart.classList.add('cart-visible');
}

const cartHidden =() => {
  cart.classList.remove('cart-visible');
  cart.classList.add('cart-hidden');
}

const num_word = (value, words) => {
  value = Math.abs(value) % 100;
  let num = value % 10;
  if (value > 10 && value < 20) return words[2];
  if (num > 1 && num < 5) return words[1];
  if (num == 1) return words[0];
  return words[2];
}

buttonIncart.forEach(el => {
  let elParent = el.closest('.product');
  el.addEventListener('click', () => {
    let quantity = parseInt(elParent.querySelector('.stepper__input').value);
    let priceNumber = parseInt(priceWithoutSpace(elParent.querySelector('.product__price').textContent)) * quantity;
    let img = elParent.querySelector('img').getAttribute('src');
    let code = elParent.querySelector('.product__id').textContent;

    allCountProducts += quantity;
    cartList.insertAdjacentHTML('afterbegin', generateCartProduct(code, img, quantity, priceNumber));
    price = plusFullPrice(priceNumber);
    fullPrice.textContent = `Итого: ${price} руб`;
    quantityCart.textContent = `${allCountProducts} ${num_word(allCountProducts, ['товар', 'товара', 'товаров'])}`;
    headerCartMobileQuantity.textContent = allCountProducts;
    sumCart.textContent = `на сумму ${price} руб`;

    if (cartList.children.length > 0) {
        headerCart.addEventListener('mouseenter', cartVisible);
        headerCart.addEventListener('mouseleave', cartHidden);
    }
  });
});

cart.addEventListener('click', e => {
  let deleteProduct = document.querySelectorAll('.item__delete');
  deleteProduct.forEach(el => {
    if (e.target === el) {
      let parent = el.closest('.cart__item');
      let quantity = parseInt(parent.querySelector('.item__quantity-number').textContent);
      allCountProducts -= quantity;
      let priceNumber = parseInt(parent.querySelector('.item__price-number').textContent);
      price = minusFullPrice(priceNumber);
      fullPrice.textContent = `Итого: ${price} руб`;
      quantityCart.textContent = `${allCountProducts} ${num_word(allCountProducts, ['товар', 'товара', 'товаров'])}`;
      headerCartMobileQuantity.textContent = allCountProducts;
      sumCart.textContent =  `на сумму ${price} руб`;
      el.closest('.cart__item').remove();

    if (cartList.children.length === 0) {
        headerCart.removeEventListener('mouseenter', cartVisible);
        headerCart.removeEventListener('mouseleave', cartHidden);
        cartHidden();
      }
    }
  });
});