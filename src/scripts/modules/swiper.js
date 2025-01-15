import Swiper, {Pagination, Autoplay, EffectFade } from 'swiper';

const heroSlider = document.querySelector('.hero-section-swiper');

if(heroSlider) {
  new Swiper(heroSlider, {
    modules: [Pagination, EffectFade, Autoplay],

    effect: 'fade',
    speed: 600,
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,

    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".hero-section-swiper .swiper-pagination",
      clickable: true,
      dynamicBullets: true,
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
      el: ".clients-slider .swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },

    autoplay: !!clientsSlider.dataset.autoplay ? {
      delay: 1000,
      disableOnInteraction: false,
    } : false,
  });
}

const baseSliders = document.querySelectorAll('.base-slider');

if(baseSliders) {
  baseSliders.forEach(slider => {
    new Swiper(slider, {
      modules: [Pagination],

      slidesPerView: "auto",
      spaceBetween: 20,

      pagination: {
        el: ".base-slider .swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      }
    });
  });
}

const featureCardSlider = document.querySelector('.feature-card-slider');

if(featureCardSlider) {
  new Swiper(featureCardSlider, {
    slidesPerView: 'auto',
    spaceBetween: 10,
  });
}
