var main = function() {
  /* Push the body and the nav over by 285px over */
  $('.icon-menu').click(function() {
    $('.menu').animate({
      right: "0px"}, { easing: 'swing'},  200);
     $('#video').fadeTo(10, 0.4);
	 $('.font1').fadeTo(10, 0.1); 
     $('.font2').fadeTo(10, 0.1);
	  $('font3').fadeTo(10, 0.1);
	   $('.button').fadeTo(10, 0.1);
	    $('.icon-menu').fadeTo(10, 0.1);
  });

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      right: "-100%"
    }, 200);
    $('#video').fadeTo(10,1);
	 $('.font1').fadeTo(10, 1); 
     $('.font2').fadeTo(10, 1);
	  $('font3').fadeTo(10, 1);
	   $('.button').fadeTo(10, 1);
	    $('.icon-menu').fadeTo(10, 1);
    
  });
};


$(document).ready(main);