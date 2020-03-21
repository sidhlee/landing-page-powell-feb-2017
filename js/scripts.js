// so my script doesn't slow down page load
$(document).ready(function() {
  // hamburger menu toggle
  $(".nav-toggle").click(function() {
    $(".main-nav").toggleClass("is-open");
    $(".hamburger").toggleClass("is-open");
  });
});
