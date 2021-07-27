const steppers = document.querySelectorAll('.stepper');
const products = document.querySelectorAll('.product');
let countCart = 0;

products.forEach(el => {
  el.addEventListener('click', e => {
    let target = e.target;
    let input = el.querySelector('.stepper__input');
    let plus = el.querySelector('.stepper__btn--plus');
    let minus = el.querySelector('.stepper__btn--minus');

    if (target === plus) {
      let currentValue = parseInt(input.value);
      currentValue++;
      input.value = currentValue;
      minus.classList.remove('stepper__btn--disabled');

      if (input.value > 4) {
        input.value = 5;
        plus.classList.add('stepper__btn--disabled')
      } else {
        plus.classList.remove('stepper__btn--disabled')
      }
    }

    if (target === minus) {
      let currentValue = parseInt(input.value);
      currentValue--;
      input.value = currentValue;
      plus.classList.remove('stepper__btn--disabled');

      if (input.value <= 1) {
        input.value = 1;
        minus.classList.add('stepper__btn--disabled')
      } else {
        minus.classList.remove('stepper__btn--disabled')
      }
    }
  });
});








