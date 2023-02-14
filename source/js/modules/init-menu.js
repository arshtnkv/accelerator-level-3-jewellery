const initMenu = () => {
  const header = document.querySelector('.header');

  if (!header || document.documentElement.clientWidth > 767) {
    return;
  }

  const menu = header.querySelector('.header__menu');
  const burger = header.querySelector('.burger');
  const links = menu.querySelectorAll('.main-nav__link');
  burger.addEventListener('click', toggleMenu);
  document.addEventListener('keydown', onPopupEscPress);
  window.addEventListener('resize', closeMenu);

  links.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  function toggleMenu() {
    if (!header.classList.contains('is-open')) {
      openMenu();
    } else {
      closeMenu();
    }
  }

  function openMenu() {
    header.classList.add('is-open');
    burger.classList.add('is-open');
    menu.classList.add('is-open');
    document.body.classList.add('scroll-lock');
  }

  function closeMenu() {
    header.classList.remove('is-open');
    burger.classList.remove('is-open');
    menu.classList.remove('is-open');
    document.body.classList.remove('scroll-lock');
  }

  function onPopupEscPress(evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closeMenu();
    }
  }
};

export {initMenu};
