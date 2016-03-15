//-- NAV TOGGLE
var navButton = document.getElementById('hamburger');

$('#hamburger').click(function() {
  // e.preventDefault();
  (this.classList.contains('is-active') === true) ? this.classList.remove('is-active') : this.classList.add('is-active');

  $('#nav').fadeToggle('fast');
  // var nav = document.getElementById('nav');

  // if(nav.style.display == 'none') {
  // } else {
    // nav.classList.add('hide');
    // nav.classList.remove('show');
  // }
});
