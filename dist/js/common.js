// $(document).ready(function() {});
// https://css-tricks.com/snippets/jquery/run-javascript-only-after-entire-page-has-loaded/
// https://stackoverflow.com/questions/16540136/javascript-how-to-remove-the-last-character-from-a-div-or-a-string
$(window).bind("load", function() {
  $('.form-heading').text(function (_,txt) {
    return txt.slice(3, -1);
  });
  $(".label-at-top[for=productName]:contains('商品樣式')").html('請選擇樣式');
  $(".label-at-top[for=productQuantity]:contains('購買數量')").html('請選擇數量');
});