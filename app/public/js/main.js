//-- NAV TOGGLE
$('.hamburger').click(function(e) {
  e.preventDefault();
  (this.classList.contains('is-active') === true) ? this.classList.remove('is-active') : this.classList.add('is-active');

  $('.nav').fadeToggle('fast');
});

//-- SCROLL
$('.scroll').click(discover);
$('.about-nav').click(discover);

function discover() {
  $('html, body').animate({
    scrollTop: $('.about-row').offset().top
  }, 1000);
}
