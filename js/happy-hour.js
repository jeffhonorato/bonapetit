var swiper = new Swiper(".musica", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "1",
    loop: "true",
    coverflowEffect: {
      rotate: 10,
      stretch: 0,
      depth: 60,
      modifier: 9,
      slideShadows: false,
    },
    pagination: {
        el: ".swiper-pagination",
      },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });