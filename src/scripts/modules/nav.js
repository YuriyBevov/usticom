const nav = document.querySelector('.main-nav');

if(nav) {
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
      nav.classList.add('active');

      opener.removeEventListener('click', onClickOpenNav);
      closer.addEventListener('click', onClickCloseNav);
    }

    const onClickCloseNav = () => {
      nav.classList.remove('active');


      closer.removeEventListener('click', onClickCloseNav);
      opener.addEventListener('click', onClickOpenNav);
    }

    opener.addEventListener('click', onClickOpenNav);
  }

}
