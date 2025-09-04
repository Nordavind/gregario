document.addEventListener('DOMContentLoaded', () => {

  // clients logo swiper
  const clientsLogosSwiper = new Swiper('.swiper-clients-logos', {
    slidesPerView: 'auto',
    spaceBetween: 40,
    loop: true,
    speed: 1000,
    freeMode: true,
    freeModeMomentum: false,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    }
  });

});