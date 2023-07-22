import { bodyLocker } from "../utils/bodyLocker";

const nav = document.querySelector('.main-nav');

if(nav) {
  document.addEventListener('DOMContentLoaded', () => nav.classList.add('initialized'));

  /*Установка мобильной/десктопной версии для навигации*/
  const setMobileNav = () => {
    !nav.classList.contains('main-nav--mobile') ?
    nav.classList.add('main-nav--mobile') : null;
  }

  const setDesktopNav = () => {

    /*Обновляю мобильное меню в момент перестроения на ПК*/
    if(nav.classList.contains('active')) {
      closeNavHandler();
    };
    /*Обновляю мобильное меню в момент перестроения на ПК*/

    nav.classList.contains('main-nav--mobile') ?
    nav.classList.remove('main-nav--mobile') : null;
  }

  const checkWidth = () => {
    if(window.innerWidth < 1281) {
      setMobileNav();
    } else {
      setDesktopNav();
    }
  }

  checkWidth();
  window.addEventListener('resize', checkWidth);
  /*Установка мобильной/десктопной версии для навигации*/

  /*Открытие/закрытие мобильного меню*/
  const opener = document.querySelector('.main-nav__opener');
  const closer = document.querySelector('.main-nav__closer');

  const openNavHandler = () => {
    bodyLocker(true);

    nav.classList.add('active');

    opener.removeEventListener('click', openNavHandler);
    closer.addEventListener('click', closeNavHandler);
  }

  const closeNavHandler = () => {
    bodyLocker(false);

    nav.classList.remove('active');

    /*Сворачиваю все открытые пункты меню*/
    document.querySelectorAll('.main-nav--mobile .active').forEach(item => {
      item.classList.remove('active');
    });
    /*Сворачиваю все открытые пункты меню*/

    closer.removeEventListener('click', closeNavHandler);
    opener.addEventListener('click', openNavHandler);
  }

  if(opener) {
    opener.addEventListener('click', openNavHandler);
  }

  const links = document.querySelectorAll('li.has-inner > a');

  if(links) {
    links.forEach(item => {
      item.addEventListener('click', (evt) => {
        if(!nav.classList.contains('main-nav--mobile')) return;

        evt.preventDefault();
        item.parentNode.classList.toggle('active');
        item.parentNode.querySelector('.main-nav__inner-list').classList.toggle('active');
      });
    })
  }
   /*Открытие/закрытие мобильного меню*/
}
