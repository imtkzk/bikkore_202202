/*  floating
-------------------------------------------------------*/
$(function () {
  var topBtn = $('.floating');
  topBtn.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
});


/*  search modal
-------------------------------------------------------*/

if (window.matchMedia('(max-width: 750px)').matches) {
  $('#search-btn').each(function () {
    $(this).on('click', function () {
      var target = $(this).data('target');
      var modal = document.getElementById(target);
      $(modal).fadeIn(300);
      return false;
    });
  });

  $('.modal-close-btn').on('click', function () {
    $('#search-modal').fadeOut(300);
    return false;
  });
}

/*  popup
-------------------------------------------------------*/
window.onload = function() {
  var popup = document.getElementById('js-popup');
  if(!popup) return;
  popup.classList.add('is-show');

  var blackBg = document.getElementById('js-black-bg');
  var closeBtn = document.getElementById('js-close-btn');

  closePopUp(blackBg);
  closePopUp(closeBtn);

  function closePopUp(elem) {
    if(!elem) return;
    elem.addEventListener('click', function() {
      popup.classList.remove('is-show');
    })
  }
}
