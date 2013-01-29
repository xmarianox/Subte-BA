$(document).ready(function(){
/*===== Función para Tabs  =====*/
	$( "#tabs" ).tabs();
/*===== Función para desplegrables =====*/
	var accordion = $('.accordion h2');
		$(accordion).click(function() {
		$(accordion).removeClass("selected");
		$(accordion).next().slideUp();
		$(this).addClass("selected");
		$(this).next().slideDown();
	});
/*===== BTN para cerrar desplegables =====*/
	var cerrar = $('.barrios .cerrar');
		$(cerrar).click(function() {
		$(accordion).removeClass("selected");
		$(accordion).next().slideUp();
	});
	
	
	
});