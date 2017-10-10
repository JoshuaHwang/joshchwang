// On click scroll
$("#webdev-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#webdev-anchor").offset().top
    }, 1000);
});

$("#photo-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#photo-anchor").offset().top
    }, 1000);
});

$("#about-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#about-anchor").offset().top
    }, 1000);
});
// 
// $(document).ready(function(){
//   $('.one-time').slick({
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     adaptiveHeight: true
//   });
// });
