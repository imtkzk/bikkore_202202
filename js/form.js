$(function() {
  $('.form-email').attr('autocomplete', 'email');
  $('.form-email').attr('autocorrect', 'off');
  $('.form-email').attr('autocapitalize', 'off');
  $('.form-tel').attr('inputmode', 'tel');
  $('.form-tel').attr('autocomplete', 'tel');
  $('.form-password').attr('inputmode', 'numeric');
});

$(function() {
  $('#submit').prop('disabled', true);
  $('#agree').on('click', function() {
    if ($(this).prop('checked') == false) {
      $('#submit').prop('disabled', true);
    } else {
      $('#submit').prop('disabled', false);
    }
  });
});
