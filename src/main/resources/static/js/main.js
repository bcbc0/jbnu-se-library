$(document).ready(function(){
	//사이즈 변수 선언(공통 사용)
	var winWidth = window.innerWidth || document.documentElement.clientWidth;//미디어쿼리 사이즈와 $(window).width()가 인식하는 px단위 사이즈가 달라서 선언한 변수 : clinentWidth 와 innerWidth의 사이즈는 동일하나 innerWidth는 익스플로러 9 미만 버전은 인식하지 못하므로 동시선언
	
	//상단공지 닫기
	$('.topInfo .close').on('click',function(){
		winWidth = window.innerWidth || document.documentElement.clientWidth;
		var HeaderH1 = $('.header1').height()
		var HeaderH2 = $('.header2').height()
		var HeaderH =  HeaderH1 + HeaderH2;
		var windowH = $(window).height();
		divH = windowH - HeaderH;
		$('.wholeMenu .menuArea .menuList .divMenuList').css('height',divH-85);
		$('.topInfo').slideUp(200);
		return false;
	});

	//슬라이드메뉴 상단 고정
	var fixPosition = $('.topInfo').height();
	var fixPosition2 = $('.headerTop').height();
	var scroll = $(window).scrollTop();
	 
	$(window).scroll(function(){
		fixPosition = $('.topInfo').height();
		fixPosition2 = $('.header1').height();
		scroll = $(window).scrollTop();
		if($('.topInfo').css('display') == 'block'){//상단팝업 있을경우
			if(scroll > fixPosition+fixPosition2){
				$('.header2').addClass( 'fixed' );
				$('.header1').addClass( 'fixed' );
				$('.insideSearch').addClass( 'fixed' );
			}else{
				$('.header2' ).removeClass( 'fixed' );
				$('.header1').removeClass( 'fixed' );
				$('.insideSearch').removeClass( 'fixed' );
			}
		}else{
			if(scroll > fixPosition2){
				$('.header2').addClass( 'fixed' );
				$('.header1').addClass( 'fixed' );
				$('.insideSearch').addClass( 'fixed' );					
			}else{
				$('.header2' ).removeClass( 'fixed' );
				$('.header1').removeClass( 'fixed' );
				$('.insideSearch').removeClass( 'fixed' );
			}
		}
	});

	// 슬라이드 메뉴
	$("#divTopMenu>ul>li>a").on('click focus',function(){
        if($("#divTopMenu>ul>li.on").length < 1){
			$(this).parent().addClass("on").siblings().removeClass("on");
            $(this).siblings().stop().slideDown();
		}else{
			$(this).parent().addClass("on").siblings().removeClass("on");
			$("#divTopMenu>ul>li>div").hide();
			$(this).stop().next().show();
		}
        $('.blackBg').addClass('on');
        return false;
	});
	
	// 슬라이드 메뉴 닫기
	$('#divTopMenu > ul > li > div .menuContent .closeBox a').on('click', function(){
		$("#divTopMenu>ul>li>div").slideUp();
		$("#divTopMenu>ul>li").removeClass('on');
		$('.blackBg').removeClass('on');
		return false;
	});

	$('.blackBg').on('click', function(){
		$("#divTopMenu>ul>li>div").slideUp();
		$("#divTopMenu>ul>li").removeClass('on');
		$('.blackBg').removeClass('on');
		return false;
	});

	$(window).resize(function(){
		winWidth = window.innerWidth || document.documentElement.clientWidth;
		if(winWidth < 1025){
			$("#divTopMenu>ul>li>div").slideUp();
			$("#divTopMenu>ul>li").removeClass('on');
			$('.blackBg').removeClass('on');
		}else{
			$('.wholeMenu .menuClose').removeClass('on');
		}
	});

	$('.wholeMenuBtn').on('focus',function(){
		$("#divTopMenu>ul>li>div").slideUp();
		$("#divTopMenu>ul>li").removeClass('on');
		$('.blackBg').removeClass('on');
		return false;
	});

	// 전체메뉴
	$('.wholeMenuBtn').click(function(){
		winWidth = window.innerWidth || document.documentElement.clientWidth;
		$('html, body').css('overflow','hidden');
		if(winWidth > 1025){
			$('.wholeMenu').addClass('on');
			$('.wholeMenu .menuClose').addClass('on');
		}else{
			if($('.wholeMenu').hasClass('on')){
				$('.wholeMenuMyMenuBtn').removeClass('on');
				$('#divHeader .myMenu').slideUp(10);
				$('.wholeMenu').removeClass('on');
				$('html, body').css('overflow','visible');
			}else{
				var TopInfoH = $('.topInfo').height();
				var HeaderH1 = $('.header1').height()
				var HeaderH2 = $('.header2').height()
				var HeaderH =  HeaderH1 + HeaderH2;
				var windowH = $(window).height();
				divH = windowH - HeaderH;
				if($('.header2').hasClass('fixed')){
					$('.wholeMenu .menuArea .menuList .divMenuList').css('height',windowH-HeaderH2 -85);
					$('.wholeMenu').css('top', HeaderH2).css('position', 'fixed');
					$('#divHeader .myMenu').css('top', HeaderH2 + 50).css('position', 'fixed');
				}else{
					$('.wholeMenu .menuArea .menuList .divMenuList').css('height',divH-85);
					$('.wholeMenu').css('top', HeaderH).css('position', 'absolute');
					$('#divHeader .myMenu').css('top', HeaderH + 50).css('position', 'absolute');
				}
				if($('.topInfo').css('display') == 'block' && !$('.header2').hasClass('fixed')){
					$('.wholeMenu .menuArea .menuList .divMenuList').css('height',divH - TopInfoH-85);
					$('.wholeMenu').css('top', HeaderH).css('position', 'absolute');
				}
				if(windowH < 550){
					$('.wholeMenu .menuArea .menuList .divMenuList > ul > li > ul').css('height','100vh')
				}else{
					$('.wholeMenu .menuArea .menuList .divMenuList > ul > li > ul').css('height','100%')
				}
				$('.wholeMenu').addClass('on');
			}
			if($('.wholeMenuBtn').hasClass('on')){
				$('.wholeMenuBtn').removeClass('on');
			}else{
				$('.wholeMenuBtn').addClass('on');
			}
		}
		
		return false;
	});
	$('.menuClose').click(function(){
		$('.wholeMenu').removeClass('on');
		$('.wholeMenu .menuClose').removeClass('on');
		$('html, body').css('overflow','visible');
		return false;
	});

	$('#globalMenu > ul > li.login .myMenuArea > .myMenuBtn').click(function(){
		$('#divHeader .myMenu').slideDown(500, 'easeInOutExpo');
		return false;
	});
	$('#divHeader .myMenu .close').click(function(){
		$('#divHeader .myMenu').slideUp(500, 'easeInOutExpo');
		return false;
	});

	// 모바일 요약정보 높이
	$(window).resize(function(){
		winWidth = window.innerWidth || document.documentElement.clientWidth;
		var TopInfoH = $('.topInfo').height();
		var HeaderH = $('.header').height();
		var windowH = $(window).height();
		var myMenuH = windowH - HeaderH - TopInfoH;
		if(winWidth < 1025){
			$('#divHeader .myMenu').css('height', myMenuH - 85)
			if(!$('.wholeMenuMyMenuBtn').hasClass('on')){
				$('#divHeader .myMenu').slideUp(50);
			}
		}else{
			$('#divHeader .myMenu').css('height', 'auto');
			$('#divHeader .myMenu').slideUp(50);
			$('.wholeMenuMyMenuBtn').removeClass('on')
		}
	});

	// 모바일 요약정보
	$('.wholeMenuMyMenuBtn').click(function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$('#divHeader .myMenu').slideUp();
		}else{
			$(this).addClass('on');
			$('#divHeader .myMenu').slideDown();
		}
		return false;
	});

	$(window).resize(function(){
		winWidth = window.innerWidth || document.documentElement.clientWidth;
		if(winWidth > 1025){
			$('.wholeMenu .menuArea .menuList .divMenuList > ul > li').removeClass('active')
			$('.wholeMenu .menuArea .menuList .divMenuList > ul > li').removeClass('on');
			$('.wholeMenu .menuArea .menuList .divMenuList > ul > li > ul > li').removeClass('on');
			$('.wholeMenu .menuArea .menuList .divMenuList > ul > li > ul > li > ul').slideDown();
			$('.wholeMenu').css('top', 0);
			$('#divHeader .myMenu').css('top', '84px');
			$('.menuClose').addClass('on');
		}else{
			$('.wholeMenu .menuArea .menuList .divMenuList > ul > li > ul > li > ul').css('display','none')
			var TopInfoH = $('.topInfo').height();
			var HeaderH1 = $('.header1').height()
			var HeaderH2 = $('.header2').height()
			var HeaderH =  HeaderH1 + HeaderH2;
			var windowH = $(window).height();
			divH = windowH - HeaderH;
			if($('.header2').hasClass('fixed')){
				$('.wholeMenu .menuArea .menuList .divMenuList').css('height',windowH-HeaderH2 -85);
				$('.wholeMenu').css('top', HeaderH2).css('position', 'fixed');
				$('#divHeader .myMenu').css('top', HeaderH2 + 50).css('position', 'fixed');
			}else{
				$('.wholeMenu .menuArea .menuList .divMenuList').css('height',divH-85);
				$('.wholeMenu').css('top', HeaderH).css('position', 'absolute');
				$('#divHeader .myMenu').css('top', HeaderH + 50).css('position', 'absolute');
			}
			if($('.topInfo').css('display') == 'block' && !$('.header2').hasClass('fixed')){
				$('.wholeMenu .menuArea .menuList .divMenuList').css('height',divH - TopInfoH-85);
				$('.wholeMenu').css('top', HeaderH).css('position', 'absolute');
			}
			if(windowH < 550){
				$('.wholeMenu .menuArea .menuList .divMenuList > ul > li > ul').css('height','100vh')
			}else{
				$('.wholeMenu .menuArea .menuList .divMenuList > ul > li > ul').css('height','100%')
			}
			if($('.wholeMenu').hasClass('on')){
				$('.wholeMenuBtn').addClass('on')
			}else{
				$('.wholeMenuBtn').removeClass('on')
			}
		}
	});
	$(window).load(function(){
		if(windowH < 550){
				$('.wholeMenu .menuArea .menuList .divMenuList > ul > li > ul').css('height','100vh')
			}else{
				$('.wholeMenu .menuArea .menuList .divMenuList > ul > li > ul').css('height','100%')
		}
		winWidth = window.innerWidth || document.documentElement.clientWidth;
		var TopInfoH = $('.topInfo').height();
		var HeaderH = $('.header').height();
		var windowH = $(window).height();
		var myMenuH = windowH - HeaderH - TopInfoH;
		if(winWidth < 1025){
			$('#divHeader .myMenu').css('height', myMenuH - 85)
			if(!$('.wholeMenuMyMenuBtn').hasClass('on')){
				$('#divHeader .myMenu').slideUp(50);
			}
		}else{
			$('#divHeader .myMenu').slideUp(50);
			$('.wholeMenuMyMenuBtn').removeClass('on')
		}
	});
	
	//모바일 전체메뉴
	$('.wholeMenu .menuArea .menuList .divMenuList > ul > li > a.wholeMenuTit').click(function(){
		winWidth = window.innerWidth || document.documentElement.clientWidth;
		if(winWidth < 1025){
			$('.wholeMenu .menuArea .menuList .divMenuList > ul > li').addClass('active');
			if($(this).parent().hasClass('on')){
				$('.wholeMenu .menuArea .menuList .divMenuList > ul > li').removeClass('active');
				$(this).parent().removeClass('on');
			}else{
				$('.wholeMenu .menuArea .menuList .divMenuList > ul > li').removeClass('on');
				$(this).parent().addClass('on');
			}
		}
		return false;
	});
	$('.wholeMenu .menuArea .menuList .divMenuList > ul > li > ul > li > a').click(function(){
		winWidth = window.innerWidth || document.documentElement.clientWidth;
		if(winWidth < 1025){
			if($(this).parent().hasClass('on')){
				$(this).parent().removeClass('on');
				$(this).siblings().slideUp();
			}else{
				$('.wholeMenu .menuArea .menuList .divMenuList > ul > li > ul > li').removeClass('on');
				$('.wholeMenu .menuArea .menuList .divMenuList > ul > li > ul > li > ul').slideUp();
				$(this).parent().addClass('on');
				$(this).siblings().slideDown();
			}
		}
		return false;
	});

	// 분관페이지
	$('.university2 > a').on('click', function(){
		if($('.university2 ul').hasClass('on')){
			$('.university2 ul').removeClass('on');
			$(this).removeClass('on')
		}else{
			$('.university2 ul').addClass('on');
			$(this).addClass('on')
		}
		return false;
	});
	$('.fric a').on('focus', function(){
		$('.university2 ul').removeClass('on');
		$('.university2 > a').removeClass('on');
		return false;
	});
	// 영역외 클릭시 분관페이지 닫기
	$('body').click(function(e){
		if(!$('.university2').has(e.target).length){
			$('.university2 ul').removeClass('on');
			$('.university2 > a').removeClass('on');
		}
	});

	// 중앙도서관 메뉴보기
	$('.moreMenuTit').click(function(){
		$('.wholeMenu2').slideToggle(800);
		return false;
	});

	//메인 상단 비주얼이미지 롤링
	
	var visualCnt = $('.visualImg').length;
	function mainVisualNext(i){
		$('.visualImg').removeClass('on');
		$('.visualImg').eq(i).addClass('on');
		$('.visualImg').fadeOut(1000);
		$('.visualImg.on').fadeIn(1000);
		$(".mainVisual .dotW a").eq(i).addClass("on").siblings().removeClass("on");
	}
	$('.visualImg.on').css('display','block');
	function mainVisual(){		
		var i = $('.visualImg.on').index();
		if(visualCnt > 1){
			auto = setInterval(function(){
				i++;
				if(i == visualCnt){
					i = 0;
				}
				mainVisualNext(i);
			},5000);
		}
	};

	$('.mainVisual .btnPrev').click(function(){
		clearInterval(auto);
		var i = $('.visualImg.on').index();
		if(visualCnt > 1 && !$('.visualImg').is(':animated')){
				i--;
				if(i == -1){
					i = visualCnt-1;
				}
				mainVisualNext(i);
		}
		mainVisual();
		return false;
	});
	
	$('.mainVisual .btnNext').click(function(){
		clearInterval(auto);
		var i = $('.visualImg.on').index();
		if(visualCnt > 1 && !$('.visualImg').is(':animated')){
				i++;
				if(i == visualCnt){
					i = 0;
				}
				mainVisualNext(i);
		}
		mainVisual();
		return false;
	});

	$(".mainVisual .dotW a.dot").click(function(){
		clearInterval(auto);
		var i = $(".mainVisual .dotW a.dot").index($(this));
		mainVisualNext(i);
		return false;
	});
	
	$(".mainVisual .dotW a.pause").click(function(){
		$(this).css('display','none');
		$(".mainVisual .dotW a.play").css('display','block');
		$(".mainVisual .dotW a.play").focus();
		clearInterval(auto);
		return false;
	});
	
	$(".mainVisual .dotW a.play").click(function(){
		$(this).css('display','none');
		$(".mainVisual .dotW a.pause").css('display','block');
		$(".mainVisual .dotW a.pause").focus();
		mainVisual();
		return false;
	});
	
	mainVisual();

	/* 검색 선택 */
	$('.searchForm li > a').on('click focus',function(){
		$('.searchForm li').removeClass('on');
		$(this).parent().addClass('on');
		return false;
	});

	/* quick 다음버튼 */
	$('.quickMenuW .next').click(function(){
		var listWidth = $('.quickMenu ul li').width();
		if(!$('.quickMenu ul').is(":animated")){
			$('.quickMenu ul').animate({"left":-listWidth},500,function(){
				$('.quickMenu ul li').first().appendTo($('.quickMenu ul'));
				$('.quickMenu ul').css('left','0')
			});
		}
		return false;
	});

	/* quick 이전버튼 */
	$('.quickMenuW .prev').click(function(){
		var listWidth = $('.quickMenu ul li').width();
		if(!$('.quickMenu ul').is(":animated")){
			$('.quickMenu ul').css('left',-listWidth);
			$('.quickMenu ul li').last().prependTo($('.quickMenu ul'));
			$('.quickMenu ul').animate({"left":"0"},500);
		}
		return false;			
	});

	// quickMenu 마우스오버
	$(document).on('mouseover','.quickMenu ul li a',function(e){
		var src = $(this).children('img').data('oversrc');
		if(src != ''){
			$(this).children('img').attr('src',src);
		}
	});
	$(document).on('mouseout','.quickMenu ul li a',function(){
		var src = $(this).children('img').data('orgsrc');
		if(src != ''){
			$(this).children('img').attr('src',src);
		}
	});
	
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

	// 공지사항 탭 
	$('.notice > ul > li > a').on('click focus',function(){
		$(this).parent().addClass('on').siblings().removeClass('on');
		return false;
	});
	$('.noticeW .noticeType1 .title a').on('mouseleave focusout',function(){
		$(this).parent().removeClass('on');
	});
	
	/*팝업존*/
	var interValPop;
	var popIdx=0;
	//자동슬라이드 
	var startInterval = function(){
		$('.control ul li').eq(popIdx).addClass('on').siblings().removeClass('on');
		$('.popupImg li').eq(popIdx).addClass('on').siblings().removeClass('on');
	};
	//다음 인덱스 값 구하기 
	var next_idx = function(){
		if(popIdx>$('.control ul li').length-2){
			popIdx = 0;
		}else{
			popIdx++
		}
		return popIdx;
	};
	var playPop = function(){
		interValPop = setInterval(function(){
			startInterval(next_idx())},3500);
	};
	var stopPop = function(){
		clearInterval(interValPop);
	};
	playPop();

	//일시정지버튼 클릭
	$('.control .pause').click(function(){
		stopPop();
		$(this).hide();
		$('.control .play').css('display','inline-block');
		$('.control .play').focus();
		return false;
	});
	//플레이버튼 클릭
	$('.control .play').click(function(){
		$(this).hide();
		$('.control .pause').show();
		$('.control .pause').focus();
		playPop();
		return false;
	});

	// 팝업 dot클릭
	$('.control ul li a').on('click focus',function(){
		$(this).parent().addClass('on').siblings().removeClass('on');
		popIdx = $('.control ul li').index($(this).parent());
		startInterval(popIdx);
		return false;
	});   

	/* 관련사이트 */
	$('.relationSite > a').click(function(e){
		if($(this).parent().hasClass('on')){
			$(this).parent().removeClass('on');
			$('.relationSite ul').stop().slideUp();
			return false;
		}else{
			$(this).parent().addClass('on');
			$('.relationSite ul').stop().slideDown();
			return false;
		}
	});

	// 영역외 클릭시 관련사이트 닫기
	$('body').click(function(e){
		if(!$('.relationSite').has(e.target).length){
			$('.relationSite ul').stop().slideUp();
			$('.relationSite').removeClass('on');
		}
	});
	
	// 하단 배너링크 마우스오버
	$(document).on('mouseover','.banner ul li a',function(e){
		var src = $(this).children('img').data('oversrc');
		if(src != ''){
			$(this).children('img').attr('src',src);
		}
	});
	$(document).on('mouseout','.banner ul li a',function(){
		var src = $(this).children('img').data('orgsrc');
		if(src != ''){
			$(this).children('img').attr('src',src);
		}
	});

	/* banner 슬라이드 */
	var playBanner = function(){
		bannerWidth = $('.bannerList ul > li').outerWidth(true);
		bannerCnt = $('.bannerList ul > li').length;
		if(!$('.banner div ul').is(":animated")){
			$('.banner div ul').animate({"left":-bannerWidth},500,function(){
				$('.banner div ul li').first().appendTo($('.banner div ul'));
				$('.banner div ul').css('left','0')
			});
		}
	};
	// 자동재생
	var playBanner2 = function(){
		intervalBanner = setInterval(function(){
			playBanner()},3000);
	};
	var stopBanner = function(){
		clearInterval(intervalBanner);
	};
	playBanner2();

	//일시정지버튼 클릭
	$('.btnW .pause').click(function(){
		stopBanner();
		$(this).hide();
		$('.btnW .play').css('display','inline-block');
		$('.btnW .play').focus();
		return false;
	});
	//플레이버튼 클릭
	$('.btnW .play').click(function(){
		$(this).hide();
		$('.btnW .pause').show();
		$('.btnW .pause').focus();
		playBanner2();
		return false;
	});
	
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