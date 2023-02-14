import * as noUiSlider from 'nouislider';

const initRange = () => {
  const handlesRange = document.querySelector('.range');

  if (!handlesRange) {
    return;
  }

  noUiSlider.create(handlesRange, {
    start: [4000, 8000],
    range: {
      'min': [2000],
      'max': [10000],
    },
  });
};

export {initRange};
