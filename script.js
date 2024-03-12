var swiper = new Swiper (".mySwiper-2", {
    slidesPerView:4,
    spaceBetween: 30,
    loop:true,
    loopFillGroupWithBlank : true,
    navigation: {
        nextEl:".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints : {
        0:{
            sliderPerView:1
        },
        520: {
            sliderPerView:2
        },
        950:{
            sliderPerView:3
        }
    }

})
