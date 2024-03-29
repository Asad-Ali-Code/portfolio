(function ($) {
	"use strict";

    jQuery(document).ready(function($){

		$('.pricing-tab-switcher').on('click', function() {
			$(this).toggleClass('active');

			$('.pricing-amount').toggleClass('change-subs-duration');
		});



      //Particle Effect animation ------------------
      $(".particle-canvas").jParticle({
          background: "rgba(255,255,255,0.0)",
          color: "rgba(255,255,255,0.11)",
          particlesNumber: "150",
          linkDist:"30",

          particle: {
              speed: 35,
          }

      });

	  $(".particle-canvas-2").jParticle({
		  background: "rgba(255,255,255,0.0)",
		  color: "rgba(227, 233, 246,1)",
		  particlesNumber: "120",

		  particle: {
			  speed: 30,
		  },

		  stroke: {
			  color: "#BCBCBC",
		  },

		  linkDist: {
			  color: "#BCBCBC",
		  },
	  });

	  $(".particle-canvas-3").jParticle({
		  background: "rgba(255,255,255,0.0)",
		  color: "rgba(255,255,255,0.31)",
		  particlesNumber: "150",
		  particle: {
			  speed: 25,
		  },
	  });

	  $(".particle-canvas-4").jParticle({
          background: "rgba(255,255,255,0.0)",
          color: "rgba(255,255,255,0.31)",
          particlesNumber: "130",
          particle: {
              speed: 25,
          },
      });

	  $(".particle-canvas-5").jParticle({
		background: "rgba(255,255,255,0.0)",
		color: "rgba(227, 233, 246,1)",
		number: {
		  value: 120,
		  },

		particle: {
			speed: 20,
		},

		stroke: {
			color: "#BCBCBC",
		},

		linkDist: {
			color: "#BCBCBC",
		},
	});


		var sliderRTL = false;

		if( buffetjs.is_rtl == true ) {
			sliderRTL = true
		} else {
			sliderRTL = false
		}


		$('.prettySocial').prettySocial();


		// Check email address validator
	    function isValidEmailAddress(emailAddress) {
	        var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
	        return pattern.test(emailAddress);
	    }

	    // check contact form value
	    function contactFormValueCheck($this) {
	        var val = $this.val();

	        if( $this.hasClass('wpcf7-validates-as-required') ) {
	            if( val.length <= 0 ) {
	                $this.addClass('wpcf7-not-valid');
	            } else {
	                $this.removeClass('wpcf7-not-valid');
	            }

	            if( $this.attr('type') == 'email' ) {
	                if( isValidEmailAddress(val) == true ) {
	                    $this.removeClass('wpcf7-not-valid');
	                } else {
	                    $this.addClass('wpcf7-not-valid');
	                }
	            }
	        }
	    }

	    $('.wpcf7-form-control-wrap input, .wpcf7-form-control-wrap textarea').on('blur', function () {
	        var $this = $(this);
	        contactFormValueCheck($this)
	    });

	    $('.wpcf7-form-control-wrap input, .wpcf7-form-control-wrap textarea').on('keyup', function () {
	        var $this = $(this);
	        contactFormValueCheck($this)
	    });


      	$('.venobox').venobox({
			bgcolor: 'transparent'
		});




		$('.example-opensingle').beefup({
			openSingle: true,
		});

          // SMOOTH SCROLLING
        $(function() {
            $("#mainmenu a[href*='#'], a[href*='#']").bind('click', function(event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
                }, 1250);
                event.preventDefault();

            });
        });





        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");


        // COUNTER UP

        $(".counter").counterUp({
            delay: 10,
            time: 2000
        });






        // SMOOTH SCROLLING
        $(function() {
            $("#mainmenu a[href*='#'], a[href*='#']").bind('click', function(event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
                }, 1250);
                event.preventDefault();

            });
        });


       $('#navigation').meanmenu({
	        meanScreenWidth: "736",
	        meanRemoveAttrs: true,
	        meanMenuCloseSize: "30px",
			meanMenuContainer: 'header',
			meanMenuOpen: '<i class="ti-menu"></i>',
			meanMenuClose: '<i class="ti-close"></i>',
			meanScreenWidth: 769
       });


 	   //WOW ANIMATION
       new WOW().init();




        // homepage slider carousel

	   $('.slider-wreapper').slick({
        arrows: false,
        dots: true,
        rtl: sliderRTL,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'ease',
        autoplay: false,
        autoplaySpeed: 3000,
	    });

            // app screenshot carousel

        $('.slider-wrapper-2').slick({
            arrows: false,
            dots: true,
            loop:true,
			rtl: sliderRTL,
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [{
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                        autoplay:true,
                    }
                }
            ]
        });

		$('.testi-carousel').slick({
          infinite: true,
		  rtl: sliderRTL,
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: $('.testi-nav-right'),
          prevArrow: $('.testi-nav-left'),
           responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 668,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
          ]
        });



    });


    jQuery(window).load(function(){


    });



    function updateMenuButton() {
      $('.js-menu-button').find('.menu-icon').toggleClass('is-active');
    }

    $(document).ready(function() {

      $('.js-menu-button').on('click', function(e){

        e.preventDefault();
        updateMenuButton();

      });

    });

	/*----------------------------
   	SCROLL TO TOP
	------------------------------*/
	$(window).scroll(function () {
	   var $totalHeight = $(window).scrollTop();
	   var $scrollToTop = $(".scrolltotop");
	   if ($totalHeight > 300) {
		   $(".scrolltotop").fadeIn();
	   } else {
		   $(".scrolltotop").fadeOut();
	   }

	   if ($totalHeight + $(window).height() === $(document).height()) {
		   $scrollToTop.css("bottom", "90px");
	   } else {
		   $scrollToTop.css("bottom", "20px");
	   }
	});

	// preloader
	$(window).on('load', function() {
		$('.preloader.loading').fadeOut(50);
		$('.preloader-wrapper').delay(10).fadeOut('fast');


		if( $('body').hasClass('preloader-on') ) {
			//WOW ANIMATION
			new WOW().init();
		}

	});


}(jQuery));
