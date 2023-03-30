var accordions = document.querySelectorAll('.chi-accordion');

accordions.forEach((accordion) => {
  var accordionItem = accordion.querySelector('.chi-accordion__item');
  var hasActiveChild = !!accordion.querySelector('.-active');

  if (hasActiveChild) {
    accordionItem.classList.add('-expanded');
  }
});
