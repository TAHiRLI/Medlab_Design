
//  Content
// 1 Main Slider page/index









//=================================
// 1 Main Slider page/index
//=================================

$(document).ready(function () {
    $('.mainSlider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        dotClass: 'slick-dots',
        infinite: true,
        speed: 600,
        pauseOnHover:false,
        fade: true,
        cssEase: 'linear',
        arrows: false
    });
});


//=================================
// 1 Main Slider page/index
//=================================

$(document).ready(function () {
    $('.tests_sliderNav').slick({
        infinite:true,
        draggabe:true,
        touchMove:true,
        dotClass: 'slick-dots',
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.tests_sliderFor',
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });
});

$('.tests_sliderFor').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    speed: 0,
    asNavFor: '.tests_sliderNav'
  });
