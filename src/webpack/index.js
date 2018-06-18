import 'babel-polyfill';
import velocity from 'velocity-animate';
import Hammer from 'hammerjs';

class Index {
  constructor() {
    this.$menuButton = document.querySelector('.navi__menu');
    this.$menu = document.querySelector('.menu__main');
    this.$overlay = document.querySelector('.menu__overlay');
    this.$menuTopButton = document.querySelector('.menu__item__top');
    this.$kvAnniversary = document.querySelector('.kv__anniversary');
    this.$kvTitle = document.querySelector('.kv__title');
    this.$kvDate = document.querySelector('.kv__date');
    this.$kvScroll = document.querySelector('.kv__scrolldown');
    this.$pcText = document.querySelector('.js-pctext');
    this.$teamItems = document.querySelectorAll('.team__item');
    this.$teamModals = document.querySelectorAll('.team__modal__content');
    this.$modalOverlay = document.querySelector('.team__modal__overlay');
    // メニューの開閉
    this.isOpen = false;
    this.initialize();
  }

  initialize() {
    window.onload = () => {
      velocity(
        this.$kvAnniversary,
        {
          opacity: [1, 0],
          translateY: [0, 50]
          // rotateY: [0, '360deg']
        },
        {
          duration: 1000,
          delay: 300,
          easing: 'easeOutCubic',
          display: 'block',
          complete: () => {
            velocity(
              this.$kvTitle,
              {
                opacity: [1, 0],
                rotateY: [0, '90deg']
              },
              {
                duration: 800,
                easing: 'easeOutSine',
                display: 'block',
                complete: () => {
                  velocity(
                    this.$kvDate,
                    {
                      opacity: [1, 0]
                    },
                    {
                      duration: 300,
                      easing: 'easeOutCubic',
                      display: 'block',
                      complete: () => {
                        velocity(
                          [this.$kvScroll, this.$pcText],
                          {
                            opacity: [1, 0]
                          },
                          {
                            duration: 500,
                            delay: 500,
                            easing: 'easeOutCubic',
                            display: 'block',
                            complete: () => {
                              velocity(
                                this.$kvScroll,
                                {
                                  translateY: [15, 0]
                                },
                                {
                                  duration: 700,
                                  easing: 'easeInOutSine',
                                  loop: true
                                }
                              );
                            }
                          }
                        );
                      }
                    }
                  );
                }
              }
            );
          }
        }
      );
    };
    const hammerMenuButton = new Hammer(this.$menuButton);
    hammerMenuButton.on('tap', (e) => {
      e.preventDefault();
      this.toggleMenu();
    });
    const hammerOverlay = new Hammer(this.$overlay);
    hammerOverlay.on('tap', (e) => {
      e.preventDefault();
      this.toggleMenu();
    });
    const hammerTopButton = new Hammer(this.$menuTopButton);
    hammerTopButton.on('tap', (e) => {
      e.preventDefault();
      this.toggleMenu();
    });
    for (let i = 0; i < this.$teamItems.length; ++i) {
      const teamItem = new Hammer(this.$teamItems[i]);
      teamItem.on('tap', (e) => {
        e.preventDefault();
        this.$teamModals[i].classList.add('is-active');
        this.$modalOverlay.classList.add('is-active');
      });
    }
    const hammerModalOverlay = new Hammer(this.$modalOverlay);
    hammerModalOverlay.on('tap', (e) => {
      e.preventDefault();
      for (let i = 0; i < this.$teamItems.length; ++i) {
        this.$teamModals[i].classList.remove('is-active');
      }
      this.$modalOverlay.classList.remove('is-active');
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
