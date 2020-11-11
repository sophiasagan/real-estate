$(function () {
  // save references to often used DOM elements
  const imageSlider = $("#property-image-slider");
  const map = $("#map");
  const street = $("#street");

  $("#image-view").on("click", () => {
    map.hide();
    street.hide();
    imageSlider.show();
  });

  $("#map-view").on("click", () => {
    imageSlider.hide();
    street.hide();
    map.show();
  });

  $("#street-view").on("click", () => {
    initStreetView();
    imageSlider.hide();
    map.hide();
    street.show();
  });

  $("#ask-a-question").on("click", () => {
    const contactDivPosition = document.getElementById("contact").offsetTop;
    window.scroll({
      top: contactDivPosition + 30,
      left: 0,
      behavior: "smooth",
    });
  });

  $("#property-image-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    infinite: true,
    prevArrow:
      '<a href="#" class="slick-arrow slick-prev"><span class="fa fa-chevron-left"></span></a>',
    nextArrow:
      '<a href="#" class="slick-arrow slick-next"><span class="fa fa-chevron-right"></span></a>',
  });

  // responsive slider

  $("#properties-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<a href="#" class="slick-arrow slick-prev">previous</a>',
    nextArrow: '<a href="#" class="slick-arrow slick-next">next</a>',
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  });

  //   responsive nav bar / hamburger menu
  const navMenu = $("#nav-menu");

  $("#nav-toggle").on("click", () => {
    navMenu.css("right", "0");
  });

  $("#close-flyout").on("click", () => {
    navMenu.css("right", "-100%");
  });

  $(document).on("click", (e) => {
    const target = $(e.target);
    if (
      !(
        target.closest("#nav-toggle").length > 0 ||
        target.closest("#nav-menu").length > 0
      ) // if user clicks anywhere other than nav-toggle or nav-menu it will close the menu
    ) {
      navMenu.css("right", "-100%");
    }
  });
});

// Initialize and add street view map
function initStreetView() {
  // The location to load the street view at
  const gpFarms = { lat: 42.40568, lng: -82.89537 };
  const streetDiv = document.getElementById("street");
  const panorama = new google.maps.StreetViewPanorama(streetDiv, {
    position: gpFarms,
  });
}

// Initialize and add the map
function initMap() {
  // The location to load the map at
  const gpFarms = { lat: 42.40568, lng: -82.89537 };
  // The map, centered at GP Farms
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: gpFarms,
  });
  // The marker, positioned at GP Farms
  const marker = new google.maps.Marker({ position: gpFarms, map: map });
}
