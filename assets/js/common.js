$(document).ready(function () {
	//header
	$("#menuToggle").on("change", function () {
		if ($(this).is(":checked")) {
			$("html").addClass("scrollNone");
			$(".kcraedu").addClass("kcraedu--menu");
		} else {
			$("html").removeClass("scrollNone");
			$(".kcraedu").removeClass("kcraedu--menu");
		}
	});

	$(".header__gnb-item a").on("click", function () {
		$(".header__gnb-item").removeClass("active");
		$(this).parents(".header__gnb-item").addClass("active");
	});

	//toggle
	$(".btn-toggle").on("click", function () {
		var target = $(this).attr("href");
		$(target).toggleClass("d-none");
	});
});