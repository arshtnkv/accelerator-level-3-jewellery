const initFilter = () => {
  const filter = document.querySelector('[data-filter="filter"]');

  if (!filter || document.documentElement.clientWidth > 1023) {
    return;
  }

  const trigger = document.querySelector('[data-filter="trigger"]');
  const close = filter.querySelector('[data-filter="close"]');
  const overlay = filter.querySelector('[data-filter="overlay"]');
  const addClass = 'is-open';

  trigger.addEventListener('click', openFilter);
  close.addEventListener('click', closeFilter);
  overlay.addEventListener('click', closeFilter);
  document.addEventListener('keydown', onPopupEscPress);

  function openFilter() {
    if (!filter.classList.contains(addClass)) {
      filter.classList.add(addClass);
    }
  }

  function closeFilter() {
    if (filter.classList.contains(addClass)) {
      filter.classList.remove(addClass);
    }
  }

  function onPopupEscPress(evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closeFilter();
    }
  }
};

export {initFilter};
