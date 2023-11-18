$(document).ready(function(){
	"use strict";
    
        /*==================================
* Author        : "ThemeSine"
* Template Name : Listrace directory HTML Template
* Version       : 1.0
==================================== */




/*=========== TABLE OF CONTENTS ===========
1. Scroll To Top 
2. slick carousel
3. welcome animation support
4. feather icon
5. counter
======================================*/

    // 1. Scroll To Top 
		$(window).on('scroll',function () {
			if ($(this).scrollTop() > 600) {
				$('.return-to-top').fadeIn();
			} else {
				$('.return-to-top').fadeOut();
			}
		});
		$('.return-to-top').on('click',function(){
				$('html, body').animate({
				scrollTop: 0
			}, 1500);
			return false;
		});
	
	
	// 2. slick carousel

	    $(".testimonial-carousel").slick({
	        infinite: true,
	        centerMode: true,
	        autoplay:true,
	        slidesToShow: 5,
	        slidesToScroll: 3,
	        autoplaySpeed:1500,
	        // the magic
			responsive: [
				{

					breakpoint:1440,
					settings: {
					slidesToShow:3
					}

				},
				{

					breakpoint: 1024,
					settings: {
					slidesToShow:2,
					
					}

				}, 
				{

					breakpoint:991,
					settings: {
					slidesToShow:2,
					centerMode:false,
					}

				},
				{

					breakpoint:767,
					settings: {
					slidesToShow:1,
					}

				}
			]
	    });



    // 3. welcome animation support

        $(window).load(function(){
        	$(".welcome-hero-txt h2,.welcome-hero-txt p").removeClass("animated fadeInUp").css({'opacity':'0'});
            $(".welcome-hero-serch-box").removeClass("animated fadeInDown").css({'opacity':'0'});
        });

        $(window).load(function(){
        	$(".welcome-hero-txt h2,.welcome-hero-txt p").addClass("animated fadeInUp").css({'opacity':'0'});
            $(".welcome-hero-serch-box").addClass("animated fadeInDown").css({'opacity':'0'});
        });

	// 4. feather icon

		feather.replace();

	// 5. counter
		$(window).on('load', function(){	
			$('.counter').counterUp({
				delay: 10,
				time: 3000
			});	
		});

	// 6. notice
	
	$('.notice > ul > li > a').on('click focus',function(){
		$(this).parent().addClass('on').siblings().removeClass('on');
		return false;
	});
	$('.noticeW .noticeType1 .title a').on('mouseleave focusout',function(){
		$(this).parent().removeClass('on');
	});	

	// 7. books

	// bookList > Current List
	$('.tabList > li > a.tab').on('click focus',function(){
		var currentBox = $('.tabList > li').index($(this).parent());
		var res = currentBox*129 + 171;
		$('.tabList > li').removeClass('on');
		$(this).parent().addClass('on');
		$('.bookContent > span').css('top', res);

		//브라우저 크기 별 도서목록 화살표 표시
		winWidth = window.innerWidth || document.documentElement.clientWidth;
		var bookListCnt = $('.tabList li.on div div ul li').length;
		if(winWidth > 1400){
			if(bookListCnt < 5){
				$('.bookListW > a').css('display', 'none');
			}else{
				$('.bookListW > a').css('display', 'block');
			}
		}else if(winWidth < 1399 && winWidth > 1240){
			if(bookListCnt < 4){
				$('.bookListW > a').css('display', 'none');
			}else{
				$('.bookListW > a').css('display', 'block');
			}
		}else if(winWidth < 1241 && winWidth > 999){
			if(bookListCnt < 3){
				$('.bookListW > a').css('display', 'none');
			}else{
				$('.bookListW > a').css('display', 'block');
			}
		}else if(winWidth < 1000 && winWidth > 640){
			if(bookListCnt < 2){
				$('.bookListW > a').css('display', 'none');
			}else{
				$('.bookListW > a').css('display', 'block');
			}
		}else if(winWidth < 641){
			if(bookListCnt < 1){
				$('.bookListW > a').css('display', 'none');
			}else{
				$('.bookListW > a').css('display', 'block');
			}
		}
		return false;
	});

	/* 도서목록 슬라이드 */
	$('.bookContent .tabList .next').click(function(){
		var listWidth = $('.tabList li.on div div ul li').width();
		if(!$('.tabList li.on div div ul').is(":animated")){
			$('.tabList li.on div div ul').animate({"left":-listWidth},500,function(){
				$('.tabList li.on div div ul li').first().appendTo($('.tabList li.on div div ul'));
				$('.tabList li.on div div ul').css('left','0')
			});
		}
		return false;
	});
	$('.bookContent .tabList .prev').click(function(){
		var listWidth = $('.tabList li.on div div ul li').width();
		if(!$('.tabList li.on div div ul').is(":animated")){
			$('.tabList li.on div div ul').css('left',-listWidth);
			$('.tabList li.on div div ul li').last().prependTo($('.tabList li.on div div ul'));
			$('.tabList li.on div div ul').animate({"left":"0"},500);
		}
		return false;			
	});
	$('.bookContent .tabList .next').mousedown(function(){
		$(this).css('background-position-x','10px');
	});
	$('.bookContent .tabList .next').on('mouseup mouseleave',function(){
		$(this).css('background-position-x','0px');
	});
	$('.bookContent .tabList .prev').mousedown(function(){
		$(this).css('background-position-x','18px');
	});
	$('.bookContent .tabList .prev').on('mouseup mouseleave',function(){
		$(this).css('background-position-x','28px');
	});

	//브라우저 크기 별 도서목록 화살표 표시
	$(window).resize(function(){
		winWidth = window.innerWidth || document.documentElement.clientWidth;
		var bookListCnt = $('.tabList li.on div div ul li').length;
		console.log(bookListCnt)
		if(winWidth > 1400){
			if(bookListCnt < 5){
				$('.bookListW > a').css('display', 'none');
			}else{
				$('.bookListW > a').css('display', 'block');
			}
		}else if(winWidth < 1399 && winWidth > 1240){
			if(bookListCnt < 4){
				$('.bookListW > a').css('display', 'none');
			}else{
				$('.bookListW > a').css('display', 'block');
			}
		}else if(winWidth < 1241 && winWidth > 999){
			if(bookListCnt < 3){
				$('.bookListW > a').css('display', 'none');
			}else{
				$('.bookListW > a').css('display', 'block');
			}
		}else if(winWidth < 1000 && winWidth > 640){
			if(bookListCnt < 2){
				$('.bookListW > a').css('display', 'none');
			}else{
				$('.bookListW > a').css('display', 'block');
			}
		}else if(winWidth < 641){
			if(bookListCnt < 1){
				$('.bookListW > a').css('display', 'none');
			}else{
				$('.bookListW > a').css('display', 'block');
			}
		}
	});
	$(window).on('load',function(){
		winWidth = window.innerWidth || document.documentElement.clientWidth;
		var bookListCnt = $('.tabList li.on div div ul li').length;
		if(winWidth > 1400){
			if(bookListCnt < 5){
				$('.bookListW > a').css('display', 'none');
			}else{
				$('.bookListW > a').css('display', 'block');
			}
		}else if(winWidth < 1399 && winWidth > 1240){
			if(bookListCnt < 4){
				$('.bookListW > a').css('display', 'none');
			}else{
				$('.bookListW > a').css('display', 'block');
			}
		}else if(winWidth < 1241 && winWidth > 999){
			if(bookListCnt < 3){
				$('.bookListW > a').css('display', 'none');
			}else{
				$('.bookListW > a').css('display', 'block');
			}
		}else if(winWidth < 1000 && winWidth > 640){
			if(bookListCnt < 2){
				$('.bookListW > a').css('display', 'none');
			}else{
				$('.bookListW > a').css('display', 'block');
			}
		}else if(winWidth < 641){
			if(bookListCnt < 1){
				$('.bookListW > a').css('display', 'none');
			}else{
				$('.bookListW > a').css('display', 'block');
			}
		}
	});

	// prev, next button

	/* banner 다음버튼 */
	$('.btnW .next').click(function(){
		var listWidth = $('.banner div ul li').width();
		if(!$('.banner div ul').is(":animated")){
			$('.banner div ul').animate({"left":-listWidth},500,function(){
				$('.banner div ul li').first().appendTo($('.banner div ul'));
				$('.banner div ul').css('left','0')
			});
		}
		return false;
	});

	/* banner 이전버튼 */
	$('.btnW .prev').click(function(){
		var listWidth = $('.bannerList ul li').width();
		if(!$('.bannerList ul').is(":animated")){
			$('.bannerList ul').css('left',-listWidth);
			$('.bannerList ul li').last().prependTo($('.bannerList ul'));
			$('.bannerList ul').animate({"left":"0"},500);
		}
		return false;			
	});
});