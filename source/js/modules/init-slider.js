const sliderContainers = document.querySelectorAll('[data-slider]');

const defaultSlider = (container) => new window.Swiper(container, {
  navigation: {
    nextEl: '.slider__btn--next',
    prevEl: '.slider__btn--prev',
  },
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,

  pagination: {
    el: '.slider__pagination',
    type: 'fraction',
    renderFraction(currentClass, totalClass) {
      return `<span class=" ${currentClass} "></span> of <span class=" ${totalClass} "></span>`;
    },
  },

  breakpoints: {
    400: {
      slidesPerView: 2,

    },

    767: {
      slidesPerView: 3,
    },

    1024: {
      slidesPerView: 4,
    },
  },
});

const initSetupSwiper = (type, container) => {
  switch (type) {
    default:
      defaultSlider(container);
  }
};

const initSlider = () => {
  sliderContainers.forEach((it) => {
    const type = it.dataset.slider;
    initSetupSwiper(type, it);
  });
};

export {initSlider};
