//-- NAV TOGGLE
var navButton = document.getElementById('hamburger');

navButton.addEventListener('click', function(e) {
  e.preventDefault();
  (this.classList.contains('is-active') === true) ? this.classList.remove('is-active') : this.classList.add('is-active');

  var nav = document.getElementById('nav');

  // if(nav.style.display == 'none') {
    nav.classList.add('show');
    nav.classList.remove('hide');
  // } else {
    // nav.classList.add('hide');
    // nav.classList.remove('show');
  // }
});
