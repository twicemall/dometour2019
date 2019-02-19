// $(document).ready(function() {});
// https://css-tricks.com/snippets/jquery/run-javascript-only-after-entire-page-has-loaded/
$(window).bind("load", function() {
  $('.form-heading').text(function (_,txt) {
    return txt.slice(3, -1);
  });
});