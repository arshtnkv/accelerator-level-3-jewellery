import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {initMenu} from './modules/init-menu';
import {initSlider} from './modules/init-slider';
import {initAccordions} from './modules/init-accordion';
import {initFilter} from './modules/init-filter';
import {initRange} from './modules/init-range';

window.addEventListener('DOMContentLoaded', () => {

  iosVhFix();

  initMenu();
  initSlider();
  initFilter();
  initRange();

  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
    initAccordions();
  });
});
