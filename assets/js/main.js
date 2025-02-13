jQuery(function ($) {
    'use strict';
	
	// Header Sticky
	$(window).on('scroll',function() {
		if ($(this).scrollTop() > 350){  
			$('.navbar-area').addClass("is-sticky");
		}
		else{
			$('.navbar-area').removeClass("is-sticky");
		}
	});

	// Mean Menu
	jQuery('.mean-menu').meanmenu({
		meanScreenWidth: "1199"
	});
	
	// Others Option For Responsive JS
	$(".others-option-for-responsive .dot-menu").on("click", function(){
		$(".others-option-for-responsive .container .container").toggleClass("active");
	});

	// Top Header Responsive JS
	$(".header-information").on("click", function(){
		$(".top-header-area").toggleClass("active");
	});
	
	// Button Hover JS
	$('.default-btn .optional-btn')
	.on('mouseenter', function(e) {
		var parentOffset = $(this).offset(),
		relX = e.pageX - parentOffset.left,
		relY = e.pageY - parentOffset.top;
		$(this).find('span').css({top:relY, left:relX})
	})
	.on('mouseout', function(e) {
		var parentOffset = $(this).offset(),
		relX = e.pageX - parentOffset.left,
		relY = e.pageY - parentOffset.top;
		$(this).find('span').css({top:relY, left:relX})
	});

	// Home Slides
	$('.home-slides').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: false,
		autoplay: false,
		items: 1,
		navText: [
			"<i class='flaticon-left-arrow'></i>",
			"<i class='flaticon-right-arrow'></i>"
		]
	});

	// Testimonial Slider
	$('.testimonial-slides').owlCarousel({
		loop: true,
		nav: true,
		items: 1,
		dots: false,
		smartSpeed: 200,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		margin: 0,
		autoplayHoverPause: true,
		autoplay: true,
		navText: [
			"<i class='flaticon-left-arrow'></i>",
			"<i class='flaticon-right-arrow'></i>"
		],
	});

	// Review Slider
	$('.review-slides').owlCarousel({
		loop: true,
		nav: true,
		items: 1,
		dots: false,
		smartSpeed: 200,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		autoplayHoverPause: true,
		autoplay: true,
		navText: [
			"<i class='flaticon-left-arrow'></i>",
			"<i class='flaticon-right-arrow'></i>"
		],
	});

	// Subscribe form
	$(".newsletter-form").validator().on("submit", function (event) {
		if (event.isDefaultPrevented()) {
			formErrorSub();
			submitMSGSub(false, "Please enter your email correctly.");
		} 
		else {
			event.preventDefault();
		}
	});
	function callbackFunction (resp) {
		if (resp.result === "success") {
			formSuccessSub();
		}
		else {
			formErrorSub();
		}
	}
	function formSuccessSub(){
		$(".newsletter-form")[0].reset();
		submitMSGSub(true, "Thank you for subscribing!");
		setTimeout(function() {
			$("#validator-newsletter").addClass('hide');
		}, 4000)
	}
	function formErrorSub(){
		$(".newsletter-form").addClass("animated shake");
		setTimeout(function() {
			$(".newsletter-form").removeClass("animated shake");
		}, 1000)
	}
	function submitMSGSub(valid, msg){
		if(valid){
			var msgClasses = "validation-success";
		} 
		else {
			var msgClasses = "validation-danger";
		}
		$("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
	}
	// AJAX MailChimp
	$(".newsletter-form").on('submit',function(){
	    alert('asd');
	});

	// Nice Select JS
	$('select').niceSelect();

	// Odometer JS
	$('.odometer').appear(function(e) {
		var odo = $(".odometer");
		odo.each(function() {
			var countNumber = $(this).attr("data-count");
			$(this).html(countNumber);
		});
	});

	// Popup Video
	$('.popup-youtube').magnificPopup({
		disableOn: 320,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	// FAQ Accordion
	$('.accordion').find('.accordion-title').on('click', function(){
		$(this).toggleClass('active');
		$(this).next().slideToggle('fast');
		$('.accordion-content').not($(this).next()).slideUp('fast');
		$('.accordion-title').not($(this)).removeClass('active');		
	});

	// Count Time 
	function makeTimer() {
		var endTime = new Date("December 31, 2022 18:00:00 PDT");			
		var endTime = (Date.parse(endTime)) / 1000;
		var now = new Date();
		var now = (Date.parse(now) / 1000);
		var timeLeft = endTime - now;
		var days = Math.floor(timeLeft / 86400); 
		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
		if (hours < "10") { hours = "0" + hours; }
		if (minutes < "10") { minutes = "0" + minutes; }
		if (seconds < "10") { seconds = "0" + seconds; }
		$("#days").html(days + "<span>Days</span>");
		$("#hours").html(hours + "<span>Hours</span>");
		$("#minutes").html(minutes + "<span>Minutes</span>");
		$("#seconds").html(seconds + "<span>Seconds</span>");
	}
	setInterval(function() { makeTimer(); }, 0);

	// Go to Top
	$(window).on('scroll', function(){
		var scrolled = $(window).scrollTop();
		if (scrolled > 600) $('.go-top').addClass('active');
		if (scrolled < 600) $('.go-top').removeClass('active');
	});  
	$('.go-top').on('click', function() {
		$("html, body").animate({ scrollTop: "0" },  500);
	});

	// WOW Animation JS
	if($('.wow').length){
		var wow = new WOW({
			mobile: false
		});
		wow.init();
	}
	
	// Preloader
	jQuery(window).on('load',function(){
		jQuery(".preloader").fadeOut(500);
	});

	// Buy Now Btn
	$('body').append("<a href='https://themeforest.net/checkout/84504606/create_account?_ga=2.163035580.1430237439.1644119533-1297998632.1635997908' target='_blank' class='buy-now-btn'>Buy Now</a>");

	// Switch Btn
	$('body').append("<div class='switch-box'><label id='switch' class='switch'><input type='checkbox' onchange='toggleTheme()' id='slider'><span class='slider round'></span></label></div>");
        
}(jQuery));

// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('spurf_theme', themeName);
    document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('spurf_theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}
// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('spurf_theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
    } else {
        setTheme('theme-light');
      document.getElementById('slider').checked = true;
    }
})();
