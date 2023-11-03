$(window).resize(function() {
    var screenWidth = $(window).width();
  
    if (screenWidth <= 575.98) {
      $(".accordion").width("100%");
      $(".accordion-item").css("margin-bottom", "0");
      $(".accordion-button").width("100%");
    } else {
      $(".accordion").width("auto");
      $(".accordion-item").css("margin-bottom", "");
      $(".accordion-button").width("");
    }
  });
  const carousel = new bootstrap.Carousel('#myCarousel')

 