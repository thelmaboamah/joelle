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


	$(window).resize(function(){
		var width = $(window).width();

		if (width > 768) {
			//Desktop navigation
			$('#desktop-nav a').each(function(){
				var navId = $(this).attr('href');
				$(this).click(function(){
					$('#welcome, .main_content').hide();
					$(''+ navId).show();
				});		
			});
		} else {
			$('.main_content').show();
		}

	});
	
	


});