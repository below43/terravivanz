

$(document).ready(function(){
	assign_bootstrap_mode();
	$(window).resize(function() {
		assign_bootstrap_mode();
	});
	
	
		
	$(".cta").click(function() {
		//if ($("body").hasClass("mode-xs") && !$(this).hasClass("hover")) {
		//	$(".cta").removeClass("hover");
		//	$(this).addClass("hover");
		//}	
		//else {
			document.location.href = $(this).attr("rel");
		//}
	});	
	$(".cta").click(function() {
		//if ($("body").hasClass("mode-xs") && !$(this).hasClass("hover")) {
		//	$(".cta").removeClass("hover");
		//	$(this).addClass("hover");
		//}	
		//else {
			document.location.href = $(this).attr("rel");
		//}
	});	


	$(".page-index .social a img").hover(
		function() {
			$(this).addClass("hover");
		},
		function() {
			$(this).removeClass("hover");
		}
	);	
});

function assign_bootstrap_mode() {
	width = $( window ).width();
	var mode = '';
	if (width<768) {
		mode = "mode-xs";
	}
	else if (width<992) {
		mode = "mode-sm";
	}
	else if (width<1200) {
		mode = "mode-md";
	}
	else if (width>1200) {
		mode = "mode-lg";
	}
	$("body").removeClass("mode-xs").removeClass("mode-sm").removeClass("mode-md").removeClass("mode-lg").addClass(mode);
}
