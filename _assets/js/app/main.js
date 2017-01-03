var gallery_list = false;
var gallery_list_blue = false;

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
		navText: 	['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		responsive:{
			0: {
				items: 1
			},
			480: {
				items: 2
			},
			768: {
				items: 3
			}
		}
	});

	// Header Reduzido
	jQuery(window).bind('scroll', header_reduced);

	// Back Top
	jQuery('.to-top').click(function () {
		jQuery('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	// Functions
	news_mansory()
	inner_single_aside();
	carousel_mobile();

	// Functons Resize Window
	window.onresize = function() {
		news_mansory();
		inner_single_aside();
		carousel_mobile();
	}


	//tooltip
	jQuery('[data-toggle="tooltip"]').tooltip();

});

function news_mansory() {

	var bodyWidth = jQuery('body').width();
	var container = jQuery('.list-news-column');

	if( bodyWidth > 480 ) {

		container.masonry({
			itemSelector: '.grid-item',
		});

	} else {

		if(container.masonry()) {
			container.masonry( 'destroy' );
		}

	}

}

function inner_single_aside() {
	var bodyWidth = jQuery('body').width();
	var $height = jQuery(".inner-news article").height();
	if ( bodyWidth > 768 && $height) {
		var $mais = jQuery(".inner-news aside .mais-noticias").height();
		jQuery(".inner-news aside").css({
			"min-height": $height,
			"padding-bottom": $mais
		});
	} else {
		jQuery(".inner-news aside").css({
			"min-height": "auto",
			"padding-bottom": "0"
		});
	}
}

function carousel_mobile() {

	var $width = jQuery(window).width(),
		gallery = jQuery(".item-photos .gallery");
		gallery_blue = jQuery(".noticias-with-blue .gallery");

	if ($width < 768) {

		gallery.addClass('owl-carousel');
		gallery_list = gallery.owlCarousel({
			loop: 		false,
			nav: 		false,
			items: 		2
		});

		gallery_blue.addClass('owl-carousel');
		gallery_list_blue = gallery_blue.owlCarousel({
			loop: 		false,
			nav: 		false,
			responsive:{
				0: {
					items: 1
				},
				480: {
					items: 2
				}
			}
		});

	} else {
		if (gallery.hasClass('owl-carousel') || gallery_blue.hasClass('owl-carousel')) {

			gallery_list.trigger('destroy.owl.carousel');
			gallery_list = false;
			gallery.removeClass('owl-carousel');

			gallery_list_blue.trigger('destroy.owl.carousel');
			gallery_list_blue = false;
			gallery_blue.removeClass('owl-carousel');
		}
	}

}

function header_reduced(event) {
	var bodyWidth = jQuery('body').width();
	var st = jQuery(this).scrollTop();
	if ( bodyWidth >= 768 ) {
		if ( st <= 200 ) {
			jQuery('header.reduced').fadeOut();
		} else {
			jQuery('header.reduced').fadeIn();
		}
	}
}