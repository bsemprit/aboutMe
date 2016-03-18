$(document).on("ready", function() {


	console.log("Javascript start")
	$(".welcome-left-text").hide();
	$(".welcome-right-text").hide();

	$(".left-side-text").mouseenter(function() {
		$(".welcome-left-text").fadeIn();
		console.log("Fade")
	})

	$(".left-side-text").mouseleave(function() {
		$(".welcome-left-text").fadeOut();
		console.log("Fade")
	})

	$(".right-side-text").mouseenter(function() {
		$(".welcome-right-text").fadeIn();
		console.log("Fade")
	})

	$(".right-side-text").mouseleave(function() {
		$(".welcome-right-text").fadeOut();
		console.log("Fade")
	})

	/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
	particlesJS.load('particles-js', 'assets/particles.json', function() {
	console.log('callback - particles.js config loaded');
	});

	// $('.nav-bar').pushpin({ top: $('.nav-bar').offset() });

})