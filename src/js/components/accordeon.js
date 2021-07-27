const accordions = document.querySelectorAll('.accordion');

accordions.forEach(el => {
  el.addEventListener('click', (e) => {
    const self = e.currentTarget;
    const content = self.querySelector('.accordion__list');
    self.classList.toggle('open');

    if (self.classList.contains('open')) {
      content.setAttribute('aria-hidden', false);
    } else {
      content.setAttribute('aria-hidden', true);
    }
  });
});

