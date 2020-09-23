$( document ).ready(function(){

	$('#topbar-email').click(function() {
		$('.header__topbar-email-button').toggleClass('email-clicked');
	});

	$( ".item-hovered" ).hover(function(){ // задаем функцию при наведении курсора на элемент	
		$( ".body__wrap-hovered" ).css( "display", "block" ) // задаем цвет заднего фона
	}, function(){ // задаем функцию, которая срабатывает, когда указатель выходит из элемента 	
		$( ".body__wrap-hovered" ).css( "display", "none" ) // задаем цвет заднего фона
	});

	$('.header__topbar-email-button').click(function() {
		navigator.clipboard.writeText($('#email-text').text());
	});

	});