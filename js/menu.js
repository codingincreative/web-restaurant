/////// Mobile Menubar Function
// Opened
$(".open-btn").on("click", function() {
  $(".mobile-menu").toggleClass("opened");
  $(".open-btn").css("display", "none");
  $(".cancel-btn").css("display", "block");
});
// Closed
$(".cancel-btn").on("click", function() {
  $(".mobile-menu").toggleClass("opened");
  $(".open-btn").css("display", "block");
  $(".cancel-btn").css("display", "none");
});

$(".mobile-menu__list").click(function() {
  $(".mobile-menu").toggleClass("opened");
  $(".open-btn").css("display", "block");
  $(".cancel-btn").css("display", "none");
});