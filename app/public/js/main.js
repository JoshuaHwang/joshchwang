//-- NAV TOGGLE
var navButton = document.getElementById('hamburger');

navButton.addEventListener('click', function(e) {
  e.preventDefault();
  console.log('click');
  (this.classList.contains('is-active') === true) ? this.classList.remove('is-active') : this.classList.add('is-active');
});
