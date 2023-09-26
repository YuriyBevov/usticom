import Swiper, {Pagination, Autoplay, FreeMode, EffectFade } from 'swiper';

const heroSlider = document.querySelector('.hero-section-swiper');

if(heroSlider) {
  new Swiper(heroSlider, {
    modules: [EffectFade, Autoplay],

    //effect: 'fade',
    speed: 3000,
    slidesPerView: 1,
    spaceBetween: 30,
    //loop: true,

    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  })
}

const clientsSlider = document.querySelector('.clients-slider');

if(clientsSlider) {
  new Swiper(clientsSlider, {
    modules: [Pagination, Autoplay],

    slidesPerView: 'auto',
    spaceBetween: 20,
    speed: 2500,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },

    autoplay: !!clientsSlider.dataset.autoplay ? {
      delay: 1000,
      disableOnInteraction: false,
    } : false,
  });
}

const baseSlider = document.querySelector('.base-slider');

if(baseSlider) {
  new Swiper(baseSlider, {
    modules: [Pagination],

    slidesPerView: "auto",
    spaceBetween: 20,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    }
  });
}

const featureCardSlider = document.querySelector('.feature-card-slider');

if(featureCardSlider) {
  new Swiper(featureCardSlider, {
    slidesPerView: 'auto',
    spaceBetween: 10,
  });
}
