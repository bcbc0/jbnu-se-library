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

	//탑메뉴 상단 고정
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

	$('.wholeMenuBtn').on('focus',function(){
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
		var windowH = $(window).height();
		if(windowH < 550){
				$('.wholeMenu .menuArea .menuList .divMenuList > ul > li > ul').css('height','100vh')
			}else{
				$('.wholeMenu .menuArea .menuList .divMenuList > ul > li > ul').css('height','100%')
			}
	});

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

	/* 탭메뉴 */
	if($('#divTabMenu').length > 0){
		winWidth = window.innerWidth || document.documentElement.clientWidth;
		$("#divTabMenu").mThumbnailScroller({
			type:"click-50",
			theme:"buttons-out"
		});
		$("#divTabMenu").mThumbnailScroller("scrollTo", $('#divTabMenu .selected'));	
		if($('#divTabMenu > div ul').width()>$('#divTabMenu > div').width()){
			$("#divTabMenu > div").addClass('long');
		}else{
			$("#divTabMenu").mThumbnailScroller("destroy");
		}
		//resize
		$(window).resize(function(){
			$("#divTabMenu").mThumbnailScroller({
				type:"click-50",
				theme:"buttons-out"
			});
			$("#divTabMenu").mThumbnailScroller("scrollTo", $('#divTabMenu .selected'));	
			if($('#divTabMenu > div ul').width()>$('#divTabMenu > div').width()){
				$("#divTabMenu > div").addClass('long');
			}else{
				$("#divTabMenu > div").removeClass('long');
				$("#divTabMenu").mThumbnailScroller("destroy");
			}
		});
	}
		
	//mobile table
	if ($('.mobileTable').length > 0) {
		$('.mobileTable').footable({
			breakpoints: {
				phone: 767
				, tablet: 1024
			}
		});
	};
	// QuickMenu
	$('.quickOpen').click(function(){
		$('.quickMenu').addClass('on');
		$(this).addClass('off');
		$('.quickClose').removeClass('off');
		$('.quickClose').focus();
		return false;
	});
	$('.quickClose').click(function(){
		$('.quickMenu').removeClass('on');
		$(this).addClass('off');
		$('.quickOpen').removeClass('off');
		$('.quickOpen').focus();
		return false;
	});
	
	// 분관 연구학습지원 마우스 오버
	$(document).on('mouseover','.quickList ul li a div',function(e){
		var src = $(this).children('img').data('oversrc');
		if(src != ''){
			$(this).children('img').attr('src',src);
		}
	});
	$(document).on('mouseout','.quickList ul li a div',function(){
		var src = $(this).children('img').data('orgsrc');
		if(src != ''){
			$(this).children('img').attr('src',src);
		}
	});
	
	// 중앙도서관 층별안내
	$('.floor3D ul li .floorList').on('click focus', function(){
		$('.floor3D ul li').removeClass('on');
		$(this).parent().addClass('on');

		return false;
	});

	$('.floor3D ul.floorContent li .floorZoom').click(function(){
		var idx = $(this).parent().index();
		$('.zoomMapW li').eq(idx).addClass('on');
		return false;
	});
	$('.zoomMap p .zoomMapClose').click(function(){
		$('.zoomMapW li').removeClass('on');

		return false;
	});
});