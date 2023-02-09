var swiper = new Swiper(".swiper__musica", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    // loop: "true",
    coverflowEffect: {
      rotate: 10,
      stretch: 0,
      depth: 60,
      modifier: 8,
      slideShadows: false,
    },
    // pagination: {
    //     el: ".swiper-pagination",
    //   },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });