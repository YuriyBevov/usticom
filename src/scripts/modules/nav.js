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

  const opener = document.querySelector('.main-nav__opener');
  const closer = document.querySelector('.main-nav__closer');

  if(opener) {
    const onClickOpenNav = () => {
      bodyLocker(true);

      nav.classList.add('active');

      opener.removeEventListener('click', onClickOpenNav);
      closer.addEventListener('click', onClickCloseNav);
    }

    const onClickCloseNav = () => {
      bodyLocker(false);

      nav.classList.remove('active');

      /*Сворачиваю все открытые пункты меню*/
      document.querySelectorAll('.main-nav--mobile .active').forEach(item => {
        item.classList.remove('active');
      });
      /*Сворачиваю все открытые пункты меню*/

      closer.removeEventListener('click', onClickCloseNav);
      opener.addEventListener('click', onClickOpenNav);
    }

    opener.addEventListener('click', onClickOpenNav);
  }

  const parents = document.querySelectorAll('li.has-inner > a');

  console.log(parents);

  if(parents) {
    parents.forEach(item => {
      item.addEventListener('click', (evt) => {
        evt.preventDefault();

        item.parentNode.classList.toggle('active');
        item.parentNode.querySelector('.main-nav__inner-list').classList.toggle('active');
      });
    })
  }
}
