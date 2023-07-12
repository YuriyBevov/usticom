import { gsap } from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ScrollToPlugin} from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const titles = document.querySelectorAll('.js-content-menu-item');

if(titles) {
  const menu = document.querySelector('.content-menu__list:first-child');

  titles.forEach((title,index) => {
    title.setAttribute('data-id', index);
    const node = document.createElement("li");
    node.classList.add('content-menu__list-item');

    const link = document.createElement("a");
    node.appendChild(link);

    if(index === 0) {
      link.classList.add('active');
    }

    link.setAttribute('href', `#${index}`);
    link.setAttribute('data-id', index);
    link.textContent = title.textContent;
    menu.appendChild(node);
  });

  const onClickScrollToAnchor = (evt) => {
    const target = evt.currentTarget;
    const anchor = document.querySelector(`.js-content-menu-item[data-id="${target.dataset.id}"]`);
    const topOffset = document.querySelector('.info-block').offsetTop;
    const headerOffset = document.querySelector('.main-header__section--bottom').offsetTop;

    gsap.to(window, {duration: 1.5, scrollTo: {y: (anchor.offsetTop + topOffset) - (headerOffset + 170) , autoKill: true}, ease: 'ease-in'});

  }

  const onScrollSetActiveItem = () => {
    titles.forEach((title,index) => {
      if (ScrollTrigger.isInViewport(title.closest('section'))) {
        document.querySelector('.content-menu__list-item a.active').classList.remove('active');
        document.querySelectorAll('.content-menu__list-item a')[title.dataset.id].classList.add('active');
      }
    });
  }

  const links = document.querySelectorAll('.content-menu__list-item a');

  links.forEach(link => {
    link.addEventListener('click', onClickScrollToAnchor);
  });

  window.addEventListener('scroll', onScrollSetActiveItem);
}


