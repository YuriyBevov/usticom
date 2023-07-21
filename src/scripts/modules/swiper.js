import Swiper, {Pagination, Autoplay } from 'swiper';

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
    },

    autoplay: !!clientsSlider.dataset.autoplay ? {
      delay: 1000,
      disableOnInteraction: false,
    } : false,
  });
}

const licensesSlider = document.querySelector('.licenses-slider');

if(licensesSlider) {
  new Swiper(licensesSlider, {
    modules: [Pagination],

    slidesPerView: 'auto',
    spaceBetween: 20,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      535: {
        slidesPerView: 2,
      },

      769: {
        slidesPerView: 3,
        grid: false
      },

      1025: {
        slidesPerView: licensesSlider.classList.contains('licenses-slider--thin') ? 3 : 4
      },

      1280: {
        slidesPerView: licensesSlider.classList.contains('licenses-slider--thin') ? 2 : 4
      }
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
