$(document).ready(function(){
	// var vw = $(window).width();

	// if(vw <= 768) {
	// 	console.log('tada!');
	// }


	//Mobile navigation
	$('.fa-bars').click(function(){
		$('nav').fadeIn();
		$('#nav_heading, main, footer').hide();
	});

	$('.fa-times').click(function(){
		$('nav').hide();
		$('#nav_heading, main, footer').show();
	});
});