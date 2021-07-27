const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav');
const cross = menu.querySelector('.cross');

burger.addEventListener('click', e => {
  e.preventDefault();
  menu.style.display = 'block';
});

cross.addEventListener('click', e => {
  e.preventDefault();
  menu.style.display = 'none';
})

