const swiper = new Swiper('.swiper', {
 // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints: {
    // when window width is >= 320px
    640: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    // when window width is >= 480px
    820: {
      slidesPerView: 3,
      spaceBetween: 0
    },
    // when window width is >= 640px
    1080: {
      slidesPerView: 4,
      spaceBetween: 0
    }
}
});