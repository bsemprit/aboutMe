$(document).on("ready", function() {


	console.log("Javascript start")
	$(".welcome-left-text").hide();
	$(".welcome-right-text").hide();

	$(".left-side").mouseenter(function() {
		$(".welcome-left-text").fadeIn();
		console.log("Fade")
	})

	$(".left-side").mouseleave(function() {
		$(".welcome-left-text").fadeOut();
		console.log("Fade")
	})

	$(".right-side").mouseenter(function() {
		$(".welcome-right-text").fadeIn();
		console.log("Fade")
	})

	$(".right-side").mouseleave(function() {
		$(".welcome-right-text").fadeOut();
		console.log("Fade")
	})

	// $('.nav-bar').pushpin({ top: $('.nav-bar').offset() });

})

