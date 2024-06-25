$(document).ready(function () {

  var carouselWidth = $('.carousel-inner')[0].scrollWidth;
  var cardWidth = $('.carousel-item').width();

  var scrollPosition = 0;

  $('.carousel-control-next').on('click', function () {
    if (scrollPosition < (carouselWidth - (cardWidth * 4))) {
      console.log('next');
      scrollPosition = scrollPosition + cardWidth;
      $('.carousel-inner').animate({ scrollLeft: scrollPosition }, 600);
    }
  });
  $('.carousel-control-previous').on('click', function () {
    if (scrollPosition < (carouselWidth - (cardWidth * 4))) {
      console.log('next');
      scrollPosition = scrollPosition - cardWidth;
      $('.carousel-inner').animate({ scrollLeft: scrollPosition }, 600);
    }
  });
});