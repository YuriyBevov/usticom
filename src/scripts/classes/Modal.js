import { gsap } from 'gsap';

export class Modal {
  constructor( modal, options = {} ) {
    this.preventBodyLock = options.preventBodyLock ? true : false,

    this.modal           = modal;
    this.overlay         = this.modal.querySelector('.modal__overlay');
    this.content         = this.modal.querySelector('.modal__content');
    this.close           = this.modal.querySelector('.modal-closer');

    this.id              = this.modal.getAttribute('id');
    this.openers         = document.querySelectorAll('[data-modal-anchor="' + this.id + '"]');
    this.isInited        = false;

    this.focusableElements = [
      'a[href]',
      'input',
      'select',
      'textarea',
      'button',
      'iframe',
      '[contenteditable]',
      '[tabindex]:not([tabindex^="-"])'
    ];
    this.init();
  }

  bodyLocker = (bool) => {
    const body = document.querySelector('body');

    if(bool) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }

  focusTrap = () => {
    const firstFocusableElement = this.modal.querySelectorAll(this.focusableElements)[0];
    const focusableContent = this.modal.querySelectorAll(this.focusableElements);
    const lastFocusableElement = focusableContent[focusableContent.length - 1];

    if(focusableContent.length) {
      const onBtnClickHandler = (evt) => {
          const isTabPressed = evt.key === 'Tab' || evt.key === 9;

          if(evt.key === 'Escape') {
              document.removeEventListener('keydown', onBtnClickHandler);
          }

          if (!isTabPressed) {
              return;
          }

          if (evt.shiftKey) {
              if (document.activeElement === firstFocusableElement) {
                  lastFocusableElement.focus();
                  evt.preventDefault();
              }
          } else {
              if (document.activeElement === lastFocusableElement) {
                  firstFocusableElement.focus();
                  evt.preventDefault();
              }
          }
      }

      document.addEventListener('keydown', onBtnClickHandler);

      firstFocusableElement.focus();
    }
  }

  addListeners = () => {
    if(this.openers) {
      this.openers.forEach(opener => {
          opener.removeEventListener('click', this.openModal);
      });
    }

    document.addEventListener('click', this.closeByOverlayClick);
    document.addEventListener('keydown', this.closeByEscBtn);

    if(this.close) {
      this.close.addEventListener('click', this.closeByBtnClick);
    }
  }

  refresh = () => {
    document.removeEventListener('click', this.closeByOverlayClick);
    document.removeEventListener('keydown', this.closeByEscBtn);

    if(this.close) {
      this.close.removeEventListener('click', this.closeByBtnClick);
    }

    gsap.fromTo(this.modal, {display: 'flex'}, {
      opacity: 0,
      duration: .6,
      ease: 'ease-in',
      onComplete: () => {
        this.modal.style.display = 'none';
        //если в модалке есть форма, при закрытии обнуляю поля
        this.modal.querySelectorAll('form').forEach(f=>f.reset());
      }
    });

    !this.preventBodyLock ?
    this.bodyLocker(false) : null;

    this.preventBodyLock = false;

    if(this.openers) {
      this.openers.forEach(opener => {
          opener.addEventListener('click', this.openModal);
      });
    }
  }

  closeByOverlayClick = (evt) => {
    if(evt.target === this.overlay) {
      this.refresh();
    }
  }

  closeByEscBtn = (evt) => {
    if (evt.key === "Escape") {
        this.refresh();
    }
  }

  closeByBtnClick = () => {
    this.refresh();
  }

  openModal = (evt) => {
    let delay = 0;
    if(evt.currentTarget.dataset.modalAnchor === 'staff-card') {
      delay = 100;
      /*Обнуляю все записи*/
      const staffPhoto = this.modal.querySelector('.staff-card img');
      staffPhoto.setAttribute('src', '');
      staffPhoto.setAttribute('alt', '');

      const staffName = this.modal.querySelector('.staff-card__title');
      staffName.innerHtml = '';

      const staffDesc = this.modal.querySelector('.staff-card__desc');
      staffDesc.innerHtml = '';

      const staffList = this.modal.querySelector('.staff-card__list');
      staffList.querySelectorAll('li').forEach(el=>el.remove());
      /*Обнуляю все записи*/

      /*Подставляю простые свойства в модалку*/
      const parentNode = evt.currentTarget.parentNode;

      const img = parentNode.parentNode.querySelector('.staff-card img');
      const name = parentNode.querySelector('.staff-card__title');
      const desc = parentNode.querySelector('.staff-card__desc');

      staffPhoto.setAttribute('src', img.getAttribute('src'));
      staffPhoto.setAttribute('alt', img.getAttribute('alt'));
      staffName.innerHTML = name.innerHTML;
      staffDesc.innerHTML = desc.innerHTML;
      /*Подставляю простые свойства в модалку*/

      /*Забераю все li из html-fragment и создаю новый для вставки в модалку*/
      const fragment = document.createDocumentFragment();
      const template = parentNode.querySelector('#staff-card-full-description');
      const content = template.content.cloneNode(true);
      content.querySelectorAll('li').forEach(item => {
        fragment.appendChild(item);
      });
      /*Забераю все li из html-fragment*/

      /*Пушу все элементы в список характеристик сотрудника в модалке*/
      staffList.appendChild(fragment);
      /*Пушу все элементы в список характеристик сотрудника в модалке*/
    }

    evt.preventDefault();

    setTimeout(() => {
      this.bodyLocker(true);
      gsap.fromTo(this.modal, {display: 'none', opacity: 0}, {
        display: 'flex',
        opacity: 1,
        duration: .6,
        ease: 'ease-in',
        onComplete: () => {
          this.addListeners();
          this.focusTrap();
        }
      });
    }, delay);
  }

  show = () => {
    this.isBodyLocked ?
    this.bodyLocker(true) : null;

    gsap.fromTo(this.modal, {display: 'none', opacity: 0}, {
      display: 'flex',
      opacity: 1,
      duration: .6,
      ease: 'ease-in',
      onComplete: () => {
        this.addListeners();
        this.focusTrap();
      }
    });
  }

  init() {
      if(this.openers) {
          this.isInited = true;

          this.openers.forEach(opener => {
              opener.addEventListener('click', this.openModal);
          })
      } else {
          console.error('Не добавлена кнопка открытия модального окна, либо в ней не прописан аттр-т: data-modal-anchor={modal-id} ')
      }
  };
}
