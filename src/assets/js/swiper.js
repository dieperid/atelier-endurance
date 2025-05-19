
document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".centered-slide-carousel", {
        centeredSlides: true,
        paginationClickable: true,
        loop: true,
        spaceBetween: 30,
        slidesPerView: 1,
        slideToClickedSlide: true,
        pagination: {
            el: ".centered-slide-carousel .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            1028: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            500: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            400: {
                slidesPerView: 1
            }
        }
    });
});