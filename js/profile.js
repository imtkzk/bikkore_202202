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


/*  tabs
-------------------------------------------------------*/
$(function() {
  $(".profile-tabs li").click(function() {
    var num = $(".profile-tabs li").index(this);
    $(".profile-tabcontent").removeClass('is-active');
    $(".profile-tabcontent").eq(num).addClass('is-active');
    $(".profile-tabs li").removeClass('is-active');
    $(this).addClass('is-active');
    $('.profile-tabcontent').hide().eq(num).fadeIn();
  });
});

$(function() {
  $(".btc-tabs li").click(function() {
    var num = $(".btc-tabs li").index(this);
    $(".btc-tabcontent").removeClass('is-active');
    $(".btc-tabcontent").eq(num).addClass('is-active');
    $(".btc-tabs li").removeClass('is-active');
    $(this).addClass('is-active');
    $('.btc-tabcontent').hide().eq(num).fadeIn();
  });
});
