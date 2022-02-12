/*  copy
-------------------------------------------------------*/
$(".intro-copy-btn").on("click", function() {
  $(".intro-copy-input input").select();
  document.execCommand("Copy");
  alert("コピーしました");
});
