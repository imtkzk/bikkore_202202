/*  tabs
-------------------------------------------------------*/
$(function() {
  $(".news-tabs li").click(function() {
    var num = $(".news-tabs li").index(this);
    $(".news-tabcontent").removeClass('is-active');
    $(".news-tabcontent").eq(num).addClass('is-active');
    $(".news-tabs li").removeClass('is-active');
    $(this).addClass('is-active');
    $('.news-tabcontent').hide().eq(num).fadeIn();
  });
});