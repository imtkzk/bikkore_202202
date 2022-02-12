/*  menu modal（pc）
-------------------------------------------------------*/
$(function() {
  if (window.matchMedia( '(min-width: 751px)' ).matches) {

    $('#menu-btn').click(function() {
      $(this).toggleClass('is-active');
      $('#menu-modal').toggleClass('is-show');
    });
    $('#menu-modal a').click( function () {
      $('#menu-modal').removeClass('is-show');
    });
  }
});


/*  menu modal（sp）
-------------------------------------------------------*/

if (window.matchMedia( '(max-width: 750px)' ).matches) {
  $( '#menu-btn' ).each( function() {
    $( this ).on( 'click', function() {
      var target = $( this ).data( 'target' );
      var modal = document.getElementById( target );
      $( modal ).fadeIn( 300 );
      return false;
    });
  });

  $( '.modal-close-btn' ).on( 'click', function() {
    $( '#menu-modal' ).fadeOut( 300 );
    return false;
  });
}


/*  search modal
-------------------------------------------------------*/

if (window.matchMedia( '(max-width: 750px)' ).matches) {
  $( '#search-spbtn' ).each( function() {
    $( this ).on( 'click', function() {
      var target = $( this ).data( 'target' );
      var modal = document.getElementById( target );
      $( modal ).fadeIn( 300 );
      return false;
    });
  });

  $( '.modal-close-btn' ).on( 'click', function() {
    $( '#search-modal' ).fadeOut( 300 );
    return false;
  });
}


/*  slide
-------------------------------------------------------*/
var swiper01 = new Swiper('.ad-slide', {
  loop: false,
  loopedSlides: 1,
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 1000,
  autoplay: {
    delay: 2500,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: '.slide-pagination',
    type: 'bullets',
    clickable: true
  },
});
