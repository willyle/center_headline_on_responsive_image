$(document).on("ready", function(){
	//Center Logo Function
	var centerLogo = function(){
		var logoImageWidth = $('#logo_image').innerWidth();
		var logoImageHeight = $('#logo_image').innerHeight();

		$('#logo_text').css({transform: "translate(" + (logoImageWidth/2-130) + "px, " + (logoImageHeight/2-18) + "px)"}).animate({opacity: '1'}, 4000);
	}

	//Center the logo when the browser resizes
	$(window).resize(centerLogo);

	//Center the logo when the document is ready
	$(window).load(centerLogo);

});