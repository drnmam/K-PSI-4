if(/iPhone|iPod|Android|iPad/.test(window.navigator.platform)){
	$(document)
	.on('focus', 'textarea,input,select', function(e) {
		$('#header').css('position', 'absolute');
	})
	.on('blur', 'textarea,input,select', function(e) {
		$('#header').css('position', '');
	});
}

jQuery(document).ready(function(){
	// 타이틀 변환
	var homeTile = jQuery('title').text();
	var replaceTitle = jQuery('.sub-title h2').text();
	arrTitle = jQuery('.sub-title h2').text();
	if(replaceTitle==''){
	}else{
		document.title=arrTitle + " | " + homeTile;
	};

	// 마우스오버시 이미지 변환
	jQuery("img.rollover").mouseover(function(){
		jQuery(this).attr("src",jQuery(this).attr("src").replace(/^(.+)(\.[a-z]+)$/, "$1_on$2"));
	}).mouseout(function(){
		jQuery(this).attr("src",jQuery(this).attr("src").replace(/^(.+)_on(\.[a-z]+)$/, "$1$2"));
	});

	// mobile navigation
	//$(".nav-menu").html($("#gnb").html());
	$(".btn-m-menu").click(function(e){
		e.preventDefault();
		if($("html").hasClass("menu-opened")){
			$("html").removeClass("menu-opened");
		}else{			
			$("html").addClass("menu-opened"); 
		}
	});

	$(".mobile-overlay").click(function(){				
		$("html").removeClass("menu-opened");
	});

	$(".mobile-navigation nav > ul > li > a").click(function(){
		t = $(this).parent('li');
		if (t.hasClass('active')) {
			t.removeClass('active');
			t.find('.submenu').slideUp('fast');
		}else {
			$(".mobile-navigation nav li").removeClass('active');
			t.addClass('active');
			if(t.find('div').hasClass('submenu')){
				$(".mobile-navigation nav .submenu").slideUp('fast');			
				t.find('.submenu').slideDown('fast');
				return false;
			}	
		}
	});

	// 텝
	jQuery(".tab-content").hide();
	jQuery("ul.tabs>li:first").addClass("active").show(); 	
	jQuery(".tab-content:first").show();

	jQuery("ul.tabs>li").click(function(e) {
		e.preventDefault();

		jQuery("ul.tabs>li").removeClass("active");
		jQuery(this).addClass("active");
		jQuery(".tab-content").hide();		
		
		var activeTab = jQuery(this).find("a").attr("href");
		jQuery(activeTab).fadeIn();
		return false;
	});

	// fancybox
	jQuery(".pop_privacy").fancybox({
		padding     : 0,
		margin      : 20,
		fitToView	: false,
		maxWidth	: "100%",
		maxHeight	: "90%",
		width		: 700,
		height		: 600,
		autoSize	: true,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none',
		type		: 'iframe',
		helpers:  {
			overlay: {
				locked: false
			}
		}
	});

	jQuery(".pop_email").fancybox({
		padding     : 0,
		margin      : 20,
		fitToView	: false,
		maxWidth	: "100%",
		maxHeight	: "100%",
		width		: 450,
		height		: 250,
		autoSize	: true,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none',
		type		: 'iframe',
		helpers:  {
			overlay: {
				locked: false
			}
		}
	});

	jQuery(".pop_cancel").fancybox({
		padding     : 0,
		margin      : 20,
		fitToView	: false,
		maxWidth	: "100%",
		maxHeight	: "100%",
		width		: 450,
		height		: 250,
		autoSize	: true,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none',
		type		: 'iframe',
		helpers:  {
			overlay: {
				locked: false
			}
		}
	});

	jQuery("a.zoom").fancybox({
		padding     : 0,
		margin      : 20,
		openEffect	: 'none',
		closeEffect	: 'none',
		helpers:  {
			overlay: {
				locked: false
			}
		}
	});

	// slider
	$('.main-visual .items').slick({
		fade: true,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows:true,
		dots:true,
		pauseOnHover: true,
		customPaging: function(slider, i) { 
            //console.log($(slider.$slides[i]).html());
            return '<button>' + '0' + (i + 1) + '</button>';
        }
	});

	$('.main-counselor .items').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		centerMode: false,
		focusOnSelect: true,
		responsive: [
			{
			  breakpoint: 1201,
			  settings: {
				slidesToShow: 5,
			  }
			},
			{
			  breakpoint: 1025,
			  settings: {
				slidesToShow: 4,
			  }
			},
			{
			  breakpoint: 800,
			  settings: {
				slidesToShow: 3,
			  }
			},
			{
			  breakpoint: 700,
			  settings: {
				slidesToShow: 1,
			  }
			}
		]
	});

	$('.main-review .items').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		centerMode: false,
		focusOnSelect: true,
		responsive: [
			{
			  breakpoint: 700,
			  settings: {
				slidesToShow: 1,
			  }
			}
		]
	});

	// 맨위로
	jQuery('.go-top').click(function() {
		jQuery('html, body').animate({scrollTop: '0px'}, 800);
	});

	// lnb
	if($(window).width()<=800){
		var lnbIndex = $(".lnb li.active").index();
		var lnbSwiper = new Swiper('.lnb .swiper-container', {
			slidesPerView: 'auto',
			paginationClickable: true,
			preventClicks: false,
			initialSlide: lnbIndex
		});
		$('.lnb li a').focus(function() {
			lnbSwiper.slideTo( $(this).parent("li").index() );
		});
	};

	// 높이동일적용
	$(".auto-height").each(function(){
		var heightArray = $(this).find("li").map(function(){
			return $(this).outerHeight();
		}).get();
		var maxHeight = Math.max.apply(Math, heightArray);
		//$(this).find(".in").css("min-height",maxHeight);
		$(this).find(".box").css("min-height",maxHeight);
	});

	initEventListener();

});	//End

function initEventListener(){
    stageResize();
    jQuery(window).bind("load", stageResize);
    jQuery(window).bind("resize", stageResize);
    jQuery(window).bind("scroll", stageResize);
}

function stageResize(){

	if(jQuery(window).width() > 1200){

	}else if((jQuery(window).width() > 766) && (jQuery(window).width() <= 1200)){

	}else if(jQuery(window).width() <= 766){

	}
}