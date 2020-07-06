$(document).ready(function(){
  $("#carousel1").owlCarousel({
  	items: 4,
  	margin:10,
  	loop: true,
  	nav: true,
  	dots: true,
  	responsiveClass: true,
  	responsive:{
  	   0 : {
        items: 1.1,
        nav: true,
  		dots: true,
      },
       375 : {
        items: 1.2,
        nav: true,
  		dots: true,
      },
       414 : {
        items: 1.5,
        nav: true,
  		dots: true,
      },
       600 : {
        items: 2.1,
        nav: true,
  		dots: true,
      },
       768 : {
        items: 2.5,
        nav: true,
  		dots: true,
      },
       900 : {
        items: 3.2,
        nav: true,
  		dots: true,
      },
       1200 : {
        items: 4,
        nav: true,
  		dots: true,
      },
  	}
  });
});


