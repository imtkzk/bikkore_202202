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
