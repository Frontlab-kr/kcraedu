$(document).ready(function () {
	$("#menuToggle").on("change", function () {
		if ($(this).is(":checked")) {
			$("html").addClass("scrollNone");
			$(".kcraedu").addClass("kcraedu--menu");
		} else {
			$("html").removeClass("scrollNone");
			$(".kcraedu").removeClass("kcraedu--menu");
		}
	});
});
