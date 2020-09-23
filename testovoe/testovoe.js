$( document ).ready(function(){

	$('#topbar-email').click(function() {
		$('.header__topbar-email-button').toggleClass('email-clicked');
	});

	$( ".item-hovered" ).hover(function(){ 	
		$( ".body__wrap-hovered" ).css( "display", "block" ) 
	}, function(){ 	
		$( ".body__wrap-hovered" ).css( "display", "none" ) 
	});

	$('.header__topbar-email-button').click(function() {
		navigator.clipboard.writeText($('#email-text').text());
	});

	});
