$(document).ready(function(){
	
	// $(window).resize()
	var vw = $(window).width();

	if(vw <= 768) {
		//Mobile navigation
		$('.fa-bars').click(function(){
			$('nav').fadeIn();
			$('#nav_heading, main, footer').hide();
		});

		$('.fa-times, .nav_item a').click(function(){
			$('nav').hide();
			$('#nav_heading, main, footer').show();
		});	
	} else {
		$('nav').show();
	};


	
});