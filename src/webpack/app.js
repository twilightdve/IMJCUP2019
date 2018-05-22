import 'babel-polyfill';
import velocity from 'velocity-animate';

class Index {
  constructor() {
    this.$menuButton = document.querySelector('.navi__menu');
    this.$menu = document.querySelector('.menu__main');
    this.$overlay = document.querySelector('.menu__overlay');
    this.$menuTopButton = document.querySelector('.menu__item__top');
    this.isOpen = false;
    this.initialize();
  }

  initialize() {
    this.$menuButton.addEventListener('click', () => {
      this.toggleMenu();
    });
    this.$menuTopButton.addEventListener('click', () => {
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
