(function ($) {
	'use strict';

	
	$('.give__progress-bar').each(function(){
		var $progressbar = $(this);
		$progressbar.css('width', $progressbar.data('progress-max'));
	})


	// 6.EM MOBILE MENU
	$('.mobile-menu nav').meanmenu({
		meanScreenWidth: "991",
		meanMenuContainer: ".mobile-menu",
		onePage: true,
	});
	// sidebar
	jQuery(document).ready(function (o) {
		0 < o(".offset-side-bar").length &&
			o(".offset-side-bar").on("click", function (e) {
				e.preventDefault(), e.stopPropagation(), o(".cart-group").addClass("isActive");
			}),
			0 < o(".bar-close").length &&
				o(".bar-close").on("click", function (e) {
					e.preventDefault(), o(".cart-group").removeClass("isActive");
				}),
			0 < o(".navSidebar-button").length &&
				o(".navSidebar-button").on("click", function (e) {
					e.preventDefault(), e.stopPropagation(), o(".info-group").addClass("isActive");
				}),
			0 < o(".bar-close").length &&
				o(".bar-close").on("click", function (e) {
					e.preventDefault(), o(".info-group").removeClass("isActive");
				}),
			o("body").on("click", function (e) {
				o(".info-group").removeClass("isActive"), o(".cart-group").removeClass("isActive");
			}),
			o(".dt-sidebar-widget").on("click", function (e) {
				e.stopPropagation();
			}),
			0 < o(".xs-modal-popup").length &&
				o(".xs-modal-popup").magnificPopup({
					type: "inline",
					fixedContentPos: !1,
					fixedBgPos: !0,
					overflowX: "auto",
					closeBtnInside: !1,
					callbacks: {
						beforeOpen: function () {
							this.st.mainClass = "my-mfp-slide-bottom xs-promo-popup";
						},
					},
				});
	});
	
	// 6.HOME 2 HERO CAROUSEL
	$('.em-slick-slider-new').slick({
		dots: false,
		speed: 900,
		arrows: true,
		autoplay: true,
		fade: false,
		autoplaySpeed: 6000,
		responsive: [{
			breakpoint: 769,
			settings: {
				arrows: false,
			}
		}]
	});
	
	
		
	// 6.EM SLICK SLIDER
	$('.em-slick-testi-description').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: true,
		asNavFor: '.em-slick-testi-wraper'
	});
	$('.em-slick-testi-wraper').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.em-slick-testi-description',
		dots: false,
		arrows: false,
		centerMode: true,
		focusOnSelect: true
	});		
		
	//* Parallaxmouse js
	function parallaxMouse() {
		if ($('#parallax').length) {
			var scene = document.getElementById('parallax');
			var parallax = new Parallax(scene);
		};
	};	
	parallaxMouse();
	
	
	// 6.EM WOW ACTIVE JS
	    new WOW().init();
	
	
	// 6.SCROLLUP JS
		$.scrollUp({
			scrollText: '<i class="fa fa-angle-up"></i>',
			easingType: 'linear',
			scrollSpeed: 900,
			animation: 'fade'
		});
		
		
	// VenuboX
		$('.venobox').venobox({
			numeratio: true,
			infinigall: true
		});
		
	// 6.ONEPAGE MENU
	var top_offset = $('.one_page').height() + 0;
	$('.one_page .techno_menu .nav_scroll').onePageNav({
		currentClass: 'current',
		changeHash: false,
		scrollSpeed: 1000,
		scrollOffset: top_offset,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'swing',
	});

	$(".nav_scroll li:first-child").addClass("current");
	/* sticky nav 1 */
	$('.one_page').scrollToFixed({
		preFixed: function () {
			$(this).find('.scroll_fixed').addClass('prefix');
		},
		postFixed: function () {
			$(this).find('.scroll_fixed').addClass('postfix').removeClass('prefix');
		}
	});
	
	// 6.EM STIKY NAV
	var headers1 = $('.trp_nav_area');
	$(window).on('scroll', function () {

		if ($(window).scrollTop() > 200) {
			headers1.addClass('hbg2');
		} else {
			headers1.removeClass('hbg2');
		}

	});
	
	// 6.EM COUNTARUP 
	$('.countr_text h3').counterUp({
		delay: 10,
		time: 1000
	});
	

	
	
	// 6.EM PORTFOLIO
	$('.em_load').imagesLoaded(function () {

		if ($.fn.isotope) {

			var $portfolio = $('.em_load');

			$portfolio.isotope({

				itemSelector: '.grid-item',

				filter: '*',

				resizesContainer: true,

				layoutMode: 'masonry',

				transitionDuration: '0.8s'

			});
			$('.filters li').on('click', function () {

				$('.filters li').removeClass('current_menu_item');

				$(this).addClass('current_menu_item');

				var selector = $(this).attr('data-filter');

				$portfolio.isotope({

					filter: selector,

				});

			});

		};

	});
	
            		
	// 6.EM BLOG MASONARY
	$('.bgimgload').imagesLoaded(function () {
		if ($.fn.isotope) {
			var $blogmassonary = $('.blog-messonary');
			$blogmassonary.isotope({
				itemSelector: '.grid-item',
				filter: '*',
				resizesContainer: true,
				layoutMode: 'masonry',
				transitionDuration: '0.8s'
			});

		};
	});
	
	
	// 6.EM TESTIMONIAL
	$('.client-testimonial').owlCarousel({
		loop: true,
		autoplay: false,
		autoplayTimeout: 10000,
		dots: false,
		nav: false,
		navText: ["<i class='flaticon-back''></i>", "<i class='flaticon-next-1''></i>"],
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 2
			},
			1000: {
				items: 3
			},
			1920: {
				items: 3
			}
		}
	})
	
		// 6.EM TESTIMONIAL
	$('.blog_carousel').owlCarousel({
        loop: true,
        margin: 0,
        center: true,
        dots: false,
        nav: false,
        autoplay: true,
		navText: ["<i class='flaticon-back''></i>", "<i class='flaticon-next-1''></i>"],
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1000: {
				items: 3
			},
			1920: {
				items: 3
			}
		}
	})
	
	
	// 6.EM TESTIMONIAL
	$('.brand_carousel').owlCarousel({
        autoplay: true,
        loop: true,
        margin:15,
        dots:false,
        slideTransition:'linear',
        autoplayTimeout:4500,
        autoplayHoverPause:true,
        autoplaySpeed:4500,
		navText: ["<i class='flaticon-back''></i>", "<i class='flaticon-next-1''></i>"],
		responsive: {
			0: {
				items: 2
			},
			768: {
				items: 3
			},
			992: {
				items: 5
			},
			1000: {
				items: 5
			},
			1920: {
				items: 6
			}
		}
	})
	
	
	 $('.team-btn').click(function(){
        $(this).parents(".team-inner-wrap").find('.social-icons1').toggleClass('active');
    });
	
	
	document.addEventListener("DOMContentLoaded", function() {
		var cursor = document.querySelector(".cursor");
		var cursor2 = document.querySelector(".cursor2");

		document.addEventListener("mousemove", function(e) {
			cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
		});

		var cursorScale = document.querySelectorAll('a, button, .brand-item,.swiper-button-prev,.swiper-button-next, .icons');

		cursorScale.forEach(link => {
			link.addEventListener('mousemove', () => {
				cursor.classList.add('grow');
				if (link.classList.contains('small')) {
					cursor.classList.remove('grow');
					cursor.classList.add('grow-small');
				}
			});

			link.addEventListener('mouseleave', () => {
				cursor.classList.remove('grow');
				cursor.classList.remove('grow-small');
			});
		});
	});







	// 22. Video Modal


  var v_cursor = document.getElementById("video_cursor");
  var video_icon = document.querySelector(".video__area a");

  if (video_icon) {
    video_icon.addEventListener("mousemove", (e) => {
      let x = e.clientX;
      let y = e.clientY;
      v_cursor.style.top = y + "px";
      v_cursor.style.left = x + "px";
      v_cursor.style.transform = "translate(-50%, -50%) scale(1)";
    });

    video_icon.addEventListener("mouseout", (e) => {
      v_cursor.style.transform = "translate(-50%, -50%) scale(0)";
    });
  }



})(jQuery);

