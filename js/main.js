(function () {

	// store the window in a local variable
	var $window = $(window)

	var tabletBreak = 640;
	var desktopBreak = 900;
	var slideMargin = 12;
	var moveSlides = 1;
	var container = 'meetups';
	var selector = 'meetup';

	// tiny helper function to add breakpoints
	function getGridSize() {
		return (window.innerWidth < tabletBreak) ? 1 :
			   (window.innerWidth < desktopBreak) ? 2 : 4;
	}

	function getSlideSize() {		
		return $('.' + selector).width();
	}

	$(document).ready(function () {
		$slider = $('.' + container).bxSlider({
			slideWidth: getSlideSize(),
			minSlides: getGridSize(),
			maxSlides: getGridSize(),
			slideMargin: slideMargin,
			moveSlides: moveSlides,
			pager: (window.innerWidth < tabletBreak),
			controls: (window.innerWidth > tabletBreak),
			infiniteLoop: false,
			adaptiveHeight: true
		});
	});

	// check grid size on resize event
	$window.resize(function () {		
		var gridSize = getGridSize();
		var slideSize = getSlideSize();

		$slider.slideWidth = slideSize;
		$slider.minSlides = gridSize;
		$slider.maxSlides = gridSize;
	});
}());