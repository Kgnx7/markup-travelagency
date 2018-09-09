import '../css/main.scss';

import Glide from '@glidejs/glide'
// import Glide, { Controls, Breakpoints, Autoplay } from '@glidejs/glide/dist/glide.modular.esm';

window.addEventListener('load', main);

function sliders() {
  const configs = {
    packages__slider: {
      perView: 3,
      breakpoints: {
        800: {
          perView: 1
        }
      },
      type: 'carousel',
      autoplay: 4000,
      dragThreshold: 120
    }
  }

  Object.keys(configs).forEach(key => new Glide(`.${key}`, configs[key]).mount())
}

function main() {
  sliders();
}

if (module.hot) {
  module.hot.accept();
}
