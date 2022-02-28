/*  inview
-------------------------------------------------------*/
$(function() {
  $('.anim').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).addClass('is-show');
    } else {
      $(this).removeClass('is-show');
    }
  });
});

/*  season slide
-------------------------------------------------------*/
$(function() {
  var swiper;
  $(window).on('load resize', function(){
    var w = $(window).width();
    if (w <= 750) {
      if (swiper) {
        return;
      } else {
        swiper = new Swiper('.season-slide', {
          loop: false,
          slidesPerView: 1,
          spaceBetween: 0,
          speed: 1000,
          pagination: {
            el: '.slide-pagination',
            type: 'bullets',
            clickable: true
          },
        });
      }
    } else {
      if (swiper) {
        swiper.destroy();
        swiper = undefined;
      }
    }
  });
});


/*  ranking slide
-------------------------------------------------------*/

$(function(){
  var mainSlider = '#rank-scroll-content';
  var tabSlider = '#rank-scroll-menu';
  $(mainSlider).slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    useTransform: true,
    speed: 600,
    arrows: false,
    easing: 'easeOutQuint',
    asNavFor: tabSlider,
    responsive: [{
      breakpoint: 751,
      settings: {
        slidesToShow: 1,
      }
    }]
  });
  $(tabSlider).slick({
    slidesToShow: 6,
    slidesToScroll: 2,
    useTransform: true,
    speed: 600,
    easing: 'easeOutQuint',
    prevArrow: '<div class="scroll-menu-prev"></div>',
    nextArrow: '<div class="scroll-menu-next"></div>',
    arrows: true,
    asNavFor: mainSlider,
    responsive: [{
      breakpoint: 751,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
      }
    }]
  });
  $(tabSlider+' .slick-slide').on('click',function(){
    var index = $(this).attr('data-slick-index');
    $(tabSlider).slick('slickGoTo',index,false);
  });
});

/*  new slide
-------------------------------------------------------*/

$(function(){
  var mainSlider = '#new-scroll-content';
  var tabSlider = '#new-scroll-menu';
  $(mainSlider).slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    useTransform: true,
    speed: 600,
    arrows: false,
    easing: 'easeOutQuint',
    asNavFor: tabSlider,
  });
  $(tabSlider).slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    useTransform: true,
    speed: 600,
    easing: 'easeOutQuint',
    prevArrow: '<div class="scroll-menu-prev"></div>',
    nextArrow: '<div class="scroll-menu-next"></div>',
    arrows: true,
    asNavFor: mainSlider,
    responsive: [{
      breakpoint: 751,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
      }
    }]
  });
  $(tabSlider+' .slick-slide').on('click',function(){
    var index = $(this).attr('data-slick-index');
    $(tabSlider).slick('slickGoTo',index,false);
  });
});
