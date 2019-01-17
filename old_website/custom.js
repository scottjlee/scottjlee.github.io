// PRELOAD
var images = new Array()
function preload() {
	for (i = 0; i < preload.arguments.length; i++) {
		images[i] = new Image()
		images[i].src = preload.arguments[i]
	}
}
preload("img/pic1.jpg", "img/pic2.jpg")


// CUSTOM
$(window).on("scroll resize", function(){
    var pos=$('.left').offset();
    $('.content').each(function(){
        if(pos.top >= $(this).offset().top && pos.top <= $(this).next().offset().top)
        {
        	var newPicName = "url('" + "img/" + $(this).attr('class').slice(-4) + ".jpg')";
        	if ($(this).attr('class').slice(-4) === "pic1") { // show profile picture
        		$(".title-main").html("Hey, I'm Scott.");
        		$(".title-sub").html("I'm a front-end engineer gone <b>data scientist.</b>");
        		$(".button-link").attr("href", "resume.pdf");
        		$(".button-link").attr("target", "");
        		$(".button-text").html("Resume");
        	} else if ($(this).attr('class').slice(-4) === "pic2") { // show photo portfolio
        		$(".title-main").html("I love shooting things.");
        		$(".title-sub").html("Whether it's people or places, I always strive to make everything look perfect.");
        		$(".button-link").attr("href", "https://www.flickr.com/photos/tortlelee/");
        		$(".button-link").attr("target", "_blank");
        		$(".button-text").html("Portfolio");
        	}
        	$(".spacer-block").css('background-image', newPicName);
            return; 
        }
    });
});

$(document).ready(function(){
  $(window).trigger('scroll'); // init the value
});