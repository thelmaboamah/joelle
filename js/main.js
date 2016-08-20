$(document).ready(function(){
		
	//Mobile navigation
	$('.fa-bars').click(function(){
		$('#mobile-nav').fadeIn();
		$('#nav_heading, main, footer').hide();
	});

	$('.fa-times, .nav_item a').click(function(){
		$('#mobile-nav').hide();
		$('#nav_heading, main, footer').show();
	});	


	//Desktop navigation
	$('#desktop-nav a').each(function(){
		var navId = $(this).attr('href');
		$(this).click(function(){
			$('#welcome').hide();
			$(''+ navId).show();
		});		
	});


});