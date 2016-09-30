$(document).ready(function(){

	//Desktop navigation

	function dNav() {
		$('#desktop-nav a, #mobile-nav a').each(function(){
			var navId = $(this).attr('href');
			$(this).click(function(){
				$('#welcome, .main_content').hide();
				$(''+ navId).show();
			});		
		});
	}


	//Mobile navigation
	function mNav(){
		$('.fa-bars').click(function(){
			$('#mobile-nav').fadeIn();
			$('#nav_heading, main, footer').hide();
		});

		$('.fa-times, #mobile-nav a').click(function(){
			$('#mobile-nav').hide();
			$('#nav_heading, main, footer').show();
		});	
	}
	
	dNav();
	mNav();


});