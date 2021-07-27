const form = document.querySelector('.form-container');
const callBtn = document.querySelector('.call-btn');
const cross = form.querySelector('.cross');
const padding = window.innerWidth - document.body.clientWidth + 'px';

callBtn.addEventListener('click', (e) => {
  e.preventDefault();
  form.classList.add('open-form');
  document.body.style.overflowY = 'hidden';
  document.body.style.paddingRight = padding;
});

cross.addEventListener('click', (e) => {
  console.log(e.target);
  e.preventDefault();
  form.classList.remove('open-form');
  document.body.style.overflowY = '';
  document.body.style.paddingRight = '0';
});
