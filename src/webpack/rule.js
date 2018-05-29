import 'babel-polyfill';
import velocity from 'velocity-animate';
import Hammer from 'hammerjs';

class Index {
  constructor() {
    this.$menuButton = document.querySelector('.navi__menu');
    this.$menu = document.querySelector('.menu__main');
    this.$overlay = document.querySelector('.menu__overlay');
    this.$menuSummaryButton = document.querySelector('.menu__item__summary');
    this.$main = document.querySelector('#main');
    this.isOpen = false;
    this.initialize();
  }

  initialize() {
    const hammerMenuButton = new Hammer(this.$menuButton);
    hammerMenuButton.on('tap', (e) => {
      console.log('tapped');
      e.preventDefault();
      this.toggleMenu();
    });
    const hammerOverlay = new Hammer(this.$overlay);
    hammerOverlay.on('tap', (e) => {
      e.preventDefault();
      this.toggleMenu();
    });
    const hammerSummaryButton = new Hammer(this.$menuSummaryButton);
    hammerSummaryButton.on('tap', (e) => {
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
      this.isOpen = true;
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
      this.isOpen = false;
    }
  }
}
window.IMJCUP2018 = window.IMJCUP2018 || {};
window.IMJCUP2018.INDEX = window.IMJCUP2018.INDEX || new Index();
