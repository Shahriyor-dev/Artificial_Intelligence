const swiper = new Swiper('.swiper-container', {
  slidesPerView : 4,
  spaceBetween: 15,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
    breakpoints: {
    1100: {
      slidesPerView: 3,
      spaceBetween:0,
    },
    700:{
      slidesPerView:2,
      spaceBetween:0,
    },
    500:{
      sliderPerView:2,
    },
    600:{
      slidesPerView:1,
    },
    400:{
      slidesPerView:1,
    },
    320:{
      slidesPerView:1,
    },
  }
});