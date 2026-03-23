const swiper = new Swiper('.swiper', {
 // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
    // when window width is >= 320px
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    820: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1080: {
      slidesPerView: 4,
      spaceBetween: 40
    }
}
});