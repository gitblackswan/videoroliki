$(function() {

	// Fixed top-line and bottom-line
	$(window).on('scroll', function () {
		var cur_pos = $(this).scrollTop();
		if (cur_pos > 590) {
			$('.top-line').addClass('animated fadeIn fixed');
		} else {
			$('.top-line').removeClass('animated fadeIn fixed');
		}
	});
	// Fixed top-line and bottom-line Ends

	// Navigation
	$("nav a, a#to-out-works").mPageScroll2id();

	// section.header (first)
	$('a.menu').click(function() {
		$('nav').removeClass('is-close').addClass('is-open')
		$('body').addClass('scroll-none');
		return false;
	});

	$('section,nav button.close, nav a').click(function() {
		$('nav').removeClass('is-open').addClass('is-close');
		$('body').removeClass('scroll-none');
	});

	$('button.close').click(function() {
		$.magnificPopup.close();
	});
	// section.header (first) Ends

	// Popup
	$('a.popup').magnificPopup({
		type: 'inline',
		midClick: true,
		mainClass: 'mfp-fade',
		removalDelay: 350,
		overflowY: 'hidden',
	});
	// Popup Ends

	// section.our-works (second)
	$('.our-works .video').clone().addClass('slider-video').appendTo($('.works-slider'))

	$('.works-slider').slick({
		dots: false,
		speed: 250,
		prevArrow: '<button class="prev arrow"><span class="circle"><span class="arrow"></span></span></button>',
		nextArrow: '<button class="next arrow"><span class="circle"><span class="arrow"></span></span></button>',
		fade: true,
		slidesToShow: 1
	});

	$('.works-slider').on('afterChange', function(event, slick, direction){
		$(this).find($('.video-inner')).html('').removeClass('no-button');
	});

	$('.video-inner').click(function() {
		var iframe = $(this).data('rel');
		if ($(window).width() > 767) {
			$('.video-popup').append('<iframe src="' + iframe + '?autoplay=1"' + ' frameborder="0" allowfullscreen></iframe>');
			$.magnificPopup.open({
				type:'inline',
				overflowY: 'hidden',
				items: {
					src: $('.video-popup')
				},
				callbacks: {
					open: function() {
						$('.video-popup').closest('.mfp-content').addClass('mfp-popup');
					},
					close: function(){
						$('.video-popup').find('iframe').remove();
					}
				}
			});
		}
	});

	$('.slider-video').click(function() {
		var iframe = $(this).find('.video-inner').data('rel');
		$(this).find('.video-inner').addClass('no-button').html('<iframe src="' + iframe + '?autoplay=1"' + ' frameborder="0" allowfullscreen></iframe>');
	});
			
	$('.video-inner').each(function() {
		var pathToImg = $(this).data('img');
		$(this).css({
			'background-image':'url('+pathToImg+')'
		});
	})
	// section.our-works (second) Ends

	// section.application (third)
	var prevStep = function(section) {
		if ($(section).find('.step').first().hasClass('active')) {
			return false;
		} else if ($(section).find('.step').first().next().hasClass('active')) {
			$(section).find('.step.active').hide().removeClass('active animated fadeIn').prev('.step').addClass('animated fadeIn active');
			$(section).find('.buttons').hide();
		} else {
			$(section).find('.step.active').hide().removeClass('active animated fadeIn').prev('.step').addClass('animated fadeIn active');
		};
	};

	$('.buttons-1 button.prev').click(function() {
		prevStep('section.application');
	});

	$('section.application form .label').click(function(e) {
		e.preventDefault();
		$(this).closest('.step').find('.label').removeClass('active');
		$(this).addClass('active');
		$('.buttons-1').show();
		$('section.application form').find('.step.active').hide().removeClass('active animated fadeIn').next('.step').addClass('animated fadeIn active');
	});
	// section.application (third) Ends

	// section.reviews (fouth)
	$('.reviews-slider').slick({
		arrows: true,
		prevArrow: '<button class="prev arrow"><span class="circle"><span class="arrow"></span></span></button>',
		nextArrow: '<button class="next arrow"><span class="circle"><span class="arrow"></span></span></button>',
		dots: false,
		fade: true,
		swipe: false,
	});
	// section.reviews (fouth) Ends

	// section.you-need (six)
	$('section.you-need form .label').click(function(e) {
		e.preventDefault();
		$(this).closest('.step').find('.label').removeClass('active');
		$(this).addClass('active');
		$('.buttons-2').show();
		$('section.you-need form').find('.step.active').hide().removeClass('active animated fadeIn').next('.step').addClass('animated fadeIn active');
	});

	$('.buttons-2 button.prev').click(function() {
		prevStep('section.you-need');
	});
	// section.you-need (six) Ends

	// section.faq (ninth)
	$('ul.desc-list li').click(function() {
		var desc = $(this).data('rel');
		$('ul li').removeClass('active');
		$(this).addClass('active');
		$('section.faq .desc').hide();
		$(desc).fadeIn(250);
	});

	$(".accordeon dd").hide().prev().click(function() {
		$(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
		$(this).next().not(":visible").slideDown().prev().addClass("active");
	});
	// section.faq (ninth) Ends

	$('.preloader').fadeOut(250);

	// Validation Form
	$('input[name="name"]').blur(function() {if($(this).val().length < 2) {$(this).addClass('error-input');}});
	$('input[name="name"]').focus(function() {$(this).removeClass('error-input');});

	$('input[name="mail"]').blur(function() {if($(this).val().length < 2 ) {$(this).addClass('error-input');}});
	$('input[name="mail"]').focus(function() {$(this).removeClass('error-input');});

	$('input[name="phone"]').mask('+7 (999) 999-99-99');
	$('input[name="phone"]').blur(function() {if($(this).val().length != 18) {$(this).addClass('error-input');}});
	$('input[name="phone"]').focus(function() {$(this).removeClass('error-input');});

	$.get("http://ipinfo.io", function(response) {geo_url='http://ipgeobase.ru:7020/geo?ip='+response.ip; run_geo(geo_url);}, "jsonp");
	utm=[];$.each(["utm_source","utm_medium","utm_campaign","utm_term",'source_type','source','position_type','position','added','creative','matchtype'],function(i,v){$('<input type="hidden" />').attr({name: v, class: v, value: function(){if(getURLParameter(v) == undefined)return '-'; else return getURLParameter(v)}}).appendTo("form")});
	$('<input type="hidden" />').attr({name: 'url', value: document.location.href}).appendTo("form");
	$('<input type="hidden" />').attr({name: 'title', value: document.title}).appendTo("form");
	

	function submit_track_event(event) {

		if (yaCounter39677785) {
			yaCounter39677785.reachGoal(event);
		}
		if (ga) {
			ga('send','event','submit',event);
		}
	}

	$('input[type="radio"]').click(function(e){
		e.stopPropagation();
	});

	$('.label').click(function() {
		var value = $(this).data('value');
		var step = $(this).data('step');

		$(this).closest('form').find('input[name="'+step+'"]').val(value);
	});

	$('form').submit(function(e) {

		var th = $(this);
		e.preventDefault();
		$(this).find('input[type="text"]').trigger('blur');
		if(!$(this).find('input[type="text"]').hasClass('error-input')){

			var type=$(this).attr('method');
			var url=$(this).attr('action');
			var data=$(this).serialize();
			var event=$(this).find('input[name="event"]').val();
			$.ajax({type: type, url: 'mail.php', data: data,
				success : function(){
					$.magnificPopup.open({
						items: [{
							src: '#okgo',
							type: 'inline'
						}],
						midClick: true,
						mainClass: 'mfp-fade',
						removalDelay: 250,
					});
					setTimeout(function() {
						th.trigger("reset");
					}, 1000);
					submit_track_event(event);
				}
			}); 
		} else {

			var errorPopText = '';

			if ($(this).find('input[name="name"]').hasClass('error-input') && !$(this).find('input[name="phone"]').hasClass('error-input') && !$(this).find('input[name=mail]').hasClass('error-input')) {
				errorPopText = 'Пожалуйста введите имя';
			} else if (!$(this).find('input[name="name"]').hasClass('error-input') && $(this).find('input[name="phone"]').hasClass('error-input') && !$(this).find('input[name="mail"]').hasClass('error-input')) {
				errorPopText = 'Пожалуйста введите телефон';
			} else if ($(this).find('input[name="name"]').hasClass('error-input') && $(this).find('input[name="phone"]').hasClass('error-input') && !$(this).find('input[name="mail"]').hasClass('error-input')) {
				errorPopText = 'Пожалуйста введите имя и телефон';
			} else if (!$(this).find('input[name="name"]').hasClass('error-input') && $(this).find('input[name="mail"]').hasClass('error-input') && !$(this).find('input[name="phone"]').hasClass('error-input')) {
				errorPopText = 'Пожалуйста введите почту';
			} else if ($(this).find('input[name="name"]').hasClass('error-input') && $(this).find('input[name="mail"]').hasClass('error-input') && !$(this).find('input[name="phone"]').hasClass('error-input')) {
				errorPopText = 'Пожалуйста введите имя и почту';
			}

			$('#error-pop .text').text(errorPopText);

			$.magnificPopup.open({
				items: [{
					src: '#error-pop',
					type: 'inline'
				}],
				midClick: true,
				mainClass: 'mfp-fade',
				removalDelay: 250,
			});

		}
	});
	// Validation Form Ends

	var isMobile = false; 
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		isMobile = true;
	}

	// Stabilization
	function stabilize(){		

		$('section:not(:hidden)').each(function(index, el) {

			var eTop = $(this).offset().top; 
			var posTop = eTop - $(window).scrollTop();

			if(posTop>-$(window).height()/2&&posTop<$(window).height()/2){
				$("html, body").animate({ scrollTop: $(this).offset().top}, 250);
			}

		});

		$('section.header .top-line.fixed, section.header .bottom-line.fixed').addClass('no-bg')

	}

	$("html, body").on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
		$("html, body").stop();
	});

	$("html, body").on("scroll wheel touchmove", function(){
		$('section.header .top-line.fixed, section.header .bottom-line.fixed').removeClass('no-bg');
	});

	if (isMobile != true) {
		$(window).scroll(function(){

			clearTimeout($.data(this, 'scrollTimer'));

			$.data(this, 'scrollTimer',setTimeout(stabilize,1500));

		});
	}
	// Stabilization Ends

	// GEO
	function getURLParameter(name) {return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;} 
	function run_geo(geo_url){
		$.ajax({type: 'GET',url: geo_url,dataType: 'xml',
			success: function(xml) {$(xml).find('ip').each(function(){
				var city = $(this).find('city').text();
				var region = $(this).find('region').text();
				if(city!=region){var ipg = city+', '+region;}else{var ipg = city;}
				$('<input type="hidden" />').attr({name: 'location', class: 'location', value:ipg}).appendTo("form");
			});}});
	}
	// GEO Ends

});
