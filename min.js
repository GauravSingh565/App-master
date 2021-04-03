var menuBtn = document.querySelector(".menu");
var menuOpen = false;
menuBtn.addEventListener("click", function() {
    if (!menuOpen) {
        menuBtn.classList.add("open");
        menuOpen = true;
    } else {
        menuBtn.classList.remove("open");
        menuOpen = false;
    }
})
var menu = document.getElementById("uitem");
menu.style.maxHeight = "0px";
menuBtn.addEventListener("click", function() {
    if (menu.style.maxHeight == "0px") {
        menu.style.maxHeight = "220px"
    } else {
        menu.style.maxHeight = "0px"
    }
})

$(".owl-carousel").owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: false
        },

    }


})

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,

    },


});