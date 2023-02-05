
//  Content
// 1 Main Slider page/index
// 2 services slider
// 3  Doctors slider
// 4 Core Values Slider / About Us Page







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
        arrows: false,
    });
});


//=================================
// 2 services slider
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
        focusOnSelect: true,
        nextArrow: $(".next_button"),
        prevArrow: $(".prev_button")

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

//=================================
// 3  Doctors slider
//=================================

  $('.doctorSlider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    centerMode:false,
    autoplaySpeed: 2000,
    arrows:false
  });

//=================================
// 4 Core Values Slider / About Us Page
//=================================
$('.valuesSlider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    centerMode:false,
    autoplaySpeed: 2000,
    arrows:false
  });

//=================================
// Office slider
//=================================

$(document).ready(function () {
    $('.galerySliderFor').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable:true,
        fade: true,
        speed: 0,
        arrows:true,
        asNavFor: '.galerySliderNav',
        prevArrow:"<button type='button' class='slick-prev slick-button pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next slick-button pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    
      });


 
});


   $('.galerySliderNav').slick({
        infinite:true,
        draggabe:true,
        touchMove:true,
        dotClass: 'slick-dots',
        slidesToShow: 4,
        slidesToScroll: 1,
         asNavFor: '.galerySliderFor',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        arrows:true,
        prevArrow:"<button type='button' class='slick-prev slick-button pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next slick-button pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    
    });
