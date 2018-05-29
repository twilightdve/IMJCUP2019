import 'babel-polyfill';
import velocity from 'velocity-animate';

class Index {
  constructor() {
    this.$menuButton = document.querySelector('.navi__menu');
    this.$menu = document.querySelector('.menu__main');
    this.$overlay = document.querySelector('.menu__overlay');
    this.$menuSummaryButton = document.querySelector('.menu__item__summary');
    this.isOpen = false;
    this.initialize();
  }

  initialize() {
    const _click = window.ontouchstart === undefined ? 'click' : 'touchstart';
    this.$menuButton.addEventListener('click', (e) => {
      e.preventDefault();
      this.toggleMenu();
    });
    this.$overlay.addEventListener('click', (e) => {
      e.preventDefault();
      this.toggleMenu();
    });
    this.$menuSummaryButton.addEventListener('click', (e) => {
      e.preventDefault();
      this.toggleMenu();
    });
  }

  toggleMenu() {
    if (!this.isOpen) {
      velocity(this.$menu, 'slideDown', {
        duration: 300,
        easing: 'easeOutCubic',
        display: 'block'
      });
      velocity(
        this.$overlay,
        {
          opacity: 1
        },
        {
          duration: 300,
          easing: 'easeOutCubic',
          display: 'block'
        }
      );
      this.$menuButton.classList.remove('navi__menu__line');
      this.$menuButton.classList.add('navi__menu__close');
    } else {
      velocity(this.$menu, 'slideUp', {
        duration: 300,
        easing: 'easeOutCubic',
        display: 'none'
      });
      velocity(
        this.$overlay,
        {
          opacity: 0
        },
        {
          duration: 300,
          easing: 'easeOutCubic',
          display: 'none'
        }
      );
      this.$menuButton.classList.remove('navi__menu__close');
      this.$menuButton.classList.add('navi__menu__line');
    }
    this.isOpen = !this.isOpen;
  }
}
window.IMJCUP2018 = window.IMJCUP2018 || {};
window.IMJCUP2018.INDEX = window.IMJCUP2018.INDEX || new Index();
