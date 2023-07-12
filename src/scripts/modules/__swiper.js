import Swiper, { Navigation, EffectFade, Pagination, Controller, Autoplay } from 'swiper';
Swiper.use([EffectFade, Navigation, Pagination, Controller, Autoplay]);

/*Переделать !!!*/
const mainSliders = document.querySelectorAll('.main-slider');

if(mainSliders) {
    mainSliders.forEach(slider => {
      console.log(slider);
        const buttonNext = slider.parentNode.querySelector('.main-slider-button-next');
        const buttonPrev = slider.parentNode.querySelector('.main-slider-button-prev');
        const isPaginationEnabled = slider.dataset.pagination;
        const isNavigationEnabled = slider.dataset.navigation;

        const slidesPerViewDesktop = slider.dataset.slidesperviewdesktop;
        const slidesPerViewLaptop  = slider.dataset.slidesperviewlaptop;
        const slidesPerViewTablet  = slider.dataset.slidesperviewtablet;
        const slidesPerViewMobile  = slider.dataset.slidesperviewmobile;
        const slidesPerViewAuto    = slider.dataset.slidesperviewauto;

        const isAutoplayEnabled    = slider.dataset.autoplay;
        const autoplayDelay        = slider.dataset.autoplaydelay;
        const speed                = slider.dataset.speed;

        const setPagination = () => {
          if(!!isPaginationEnabled) {
            return;
          }

          return {
            el: ".swiper-pagination",
            clickable: true,
          }
        }

        const setNavigation = () => {
          if(!!isNavigationEnabled) {
            return;
          }

          return {
            nextEl: buttonNext,
            prevEl: buttonPrev,
          }
        }

        const setAutoplay = () => {
          if(!!isAutoplayEnabled !== true) {
            return;
          }

          return {
            delay: autoplayDelay ? autoplayDelay : 1000,
            disableOnInteraction: false,
          }
        }

        new Swiper(slider, {
            slidesPerView: slidesPerViewAuto ? 'auto' : slidesPerViewMobile,
            spaceBetween: 20,
            pagination: setPagination(),
            navigation: setNavigation(),
            /*autoplay: setAutoplay(),
            speed: speed ? speed : 1000,*/

            breakpoints: {
              534: {
                slidesPerView: slidesPerViewTablet ? slidesPerViewTablet : null
              },

              769: {
                slidesPerView: slidesPerViewLaptop ? slidesPerViewLaptop : null
              },

              1025: {
                slidesPerView: slidesPerViewDesktop ? slidesPerViewDesktop : null
              }
            }
        });
   });
}
