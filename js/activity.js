$(document).ready(function () {
  //alert('123');
  $(".center").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    dots: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
});
