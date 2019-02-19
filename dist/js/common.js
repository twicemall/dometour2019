// $(document).ready(function() {});
// https://css-tricks.com/snippets/jquery/run-javascript-only-after-entire-page-has-loaded/
// https://stackoverflow.com/questions/16540136/javascript-how-to-remove-the-last-character-from-a-div-or-a-string
$(window).bind("load", function() {
  $('.form-heading').text(function (_,txt) {
    return txt.slice(3, -1);
  });
});