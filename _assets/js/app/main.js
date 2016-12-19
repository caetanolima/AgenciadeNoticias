jQuery(document).ready(function($) {

	// Menu with Push
	new mlPushMenu( document.getElementById( 'mp-menu' ), document.getElementById( 'trigger' ), {
		type : 'cover'
	} );


	// Home
	var $agenda = jQuery('.owl-carousel-agenda');

	$agenda.owlCarousel({
		loop: 		true,
		autoWidth: 	true,
		items: 		1,
		margin: 	8,
		onInitialized : function (argument) {
			var equal = 0;
			$agenda.find('dd').each(function(index, el) {
				if (equal < $(this).height()) {
					equal = $(this).height();
				}
			});
			$agenda.find('dd').height(equal);
		}
	});

	jQuery('.owl-carousel-agenda-next').on('click', function(event) {
		event.preventDefault();
		$agenda.trigger('next.owl.carousel');
	});

	jQuery(".owl-carousel-videos-highlight").owlCarousel({
		loop: 		true,
		nav: 		true,
		items: 		3,
		navText: 	['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
	});

	jQuery('.list-news-column').masonry({
		itemSelector: '.grid-item'
	});

	inner_single_aside();

});

jQuery(window).resize(function(event) {
	inner_single_aside();
});

function inner_single_aside() {
	var $height = jQuery(".inner-news article").height();
	if ($height) {
		jQuery(".inner-news aside").height($height);
	}
}