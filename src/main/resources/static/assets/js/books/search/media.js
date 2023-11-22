var isTocLoaded = false;
var isAbsLoaded = false;
var isUrlLoaded = false;
var urlType = 0;

function openMedia(obj, mediatype) {

	var options = "width=800,height=550,resizable=yes,top=100,left=200,scrollbars=yes";
	if(mediatype=="IMG") {
		options = "width=700,height=800,resizable=yes,top=100,left=200,scrollbars=yes";
	} else if(mediatype=="VOD" || mediatype=="AOD") {
		options = "width=570,height=500,resizable=yes,top=100,left=200,scrollbars=yes";
	} else if(mediatype=="URL") {
		options = "";
	}
	window.open(obj.href,"",options);

	return false;
}

// 디지털컨텐츠 목차링크
function openUrl(obj, mediatype) {
	options = "width=570,height=500,resizable=yes,top=100,left=200,scrollbars=yes";
	window.open(obj.href,"",options);

	return false;
}

function openMediaList(obj, mediatype) {
	var options = "width=800,height=550,resizable=yes,top=100,left=200,scrollbars=yes";
	if(mediatype=="IMG") {
		options = "width=700,height=800,resizable=yes,top=100,left=200,scrollbars=yes";
	} else if(mediatype=="VOD" || mediatype=="AOD") {
		options = "width=570,height=500,resizable=yes,top=100,left=200,scrollbars=yes";
	} else if(mediatype=="URL") {
		options = "";
	}
	window.open(obj.href,"",options);

	return false;
}

// marc 에서 856태그 인 경우 간략정보와 동일하게 URL 연결되도록 설정
function openMediaView(obj, controlno, mediatype, mediaURL) {

	var options = "width=800,height=550,resizable=yes,top=100,left=200,scrollbars=yes";
	if(mediatype=="IMG") {
		options = "width=700,height=800,resizable=yes,top=100,left=200,scrollbars=yes";
	} else if(mediatype=="VOD" || mediatype=="AOD") {
		options = "width=570,height=500,resizable=yes,top=100,left=200,scrollbars=yes";
	} else if(mediatype=="URL") {
		options = "";
	}
	 /*기존 URL중 dcollection은 /search/media/url/ 태우지 않고 바로 호출하던 방식에서 url상관없이 무조건 /search/media/url 이용하고 urlview에서 dcollection인경우 proxy 연결없이 바로 연결되도록 수정함. 20160202 jhpark
	proxy외 다른이유로 url분리시킨거라면 확인 바람.
	상세 profile불러오는 xsl에서 아래 코드 추가해야함.
	<xsl:if test="position() = '1'">
	*/
	if(mediatype=="URL"){
		window.open("/search/media/url/CAT"+controlno,"",options);
	}else{
		window.open(obj.href,"",options);
	}
}

function toggleToc(contentId) {
	hideAbs();
	hideUrl();
	if($("#divToc").css("display")=="none") {
		if (!isTocLoaded) getToc(contentId);
		showToc();
	}
	else {
		hideToc();
	}
}

function getToc(contentId) {
	$("#divToc > p").remove();
	$("#divToc").slideDown('fast');
	$.ajax({
        type: "GET",
        url: "/search/media/ajax/toc/"+contentId,
        dataType: "json",
        success: function(msg){
			var str = msg.toc;
			$("<p>"+encodeContents(str)+"<br><br></p>").appendTo("#divToc");
			isTocLoaded = true;
		},
		error: function() {
		}
	});
}

function hideToc() {
	$("#divToc").slideUp('fast');
}

function showToc() {
	$("#divToc").slideDown('fast');
}

function toggleAbs(contentId) {
	hideToc();
	hideUrl();
	if($("#divAbs").css("display")=="none") {
		if (!isAbsLoaded) getAbs(contentId);
		showAbs();
	}
	else {
		hideAbs();
	}
}

function hideAbs() {
	$("#divAbs").slideUp('fast');
}

function showAbs() {
	$("#divAbs").slideDown('fast');
}

function getAbs(contentId) {
	$("#divAbs > p").remove();
	$.ajax({
        type: "GET",
        url: "/search/media/ajax/abs/"+contentId,
        dataType: "json",
        success: function(msg){
			var str = msg.abs;
			//str = str.replace(/\n/g,"<br>");
			//$("<p><br>"+encodeContents(str)+"<br><br></p>").appendTo("#divAbs");
			$("<p><br>"+encodeContents(str)+"<br><br></p>").appendTo("#divAbs");
			isAbsLoaded = true;
		},
		error: function() {
			alert("error!");
		}
	});
}

function viewMedia(url) {
	window.open(url, "width=400,height=300");
}

/* 전자자료의 경우 URL에 따라 로그인 연동이 필요한 경우로 인해 모든 URL버튼은 '/search/media/url/${sysdiv}${ctrl}'호출.(목록 상세,목록 미리보기 제외) - 이하 주석처리
function toggleUrl(contentId) {
	hideToc();
	hideAbs();
	if($("#divUrl").css("display")=="none") {
		if(isUrlLoaded) {
			showUrl();
		}
		else {
			getUrl(contentId);
		}
	}
	else {
		hideUrl();
	}
}

function hideUrl() {
	$("#divUrl").slideUp('fast');
}
function showUrl() {
	$("#divUrl").slideDown('fast');
}


function getUrl(contentId) {
	$("#divUrl > p").remove();
	$.ajax({
        type: "GET",
        url: "/search/media/ajax/url/"+contentId,
        dataType: "json",
        success: function(msg){
		alert(msg.urlList);
			var str = msg.urlList;
			if(str.substring(0,5)=="00000"){
				window.open(str.substring(5));
			}
			else {
				if (str == '') str = "ERROR: Not Found";
				$("<p>"+str+"<br><br></p>").appendTo("#divUrl");
				$("#divUrl").slideDown('fast');
				isUrlLoaded = true;
			}*/
			/*
			str = str.replace(/\n/g,"<br>");
			//$("<p><br>"+encodeContents(str)+"<br><br></p>").appendTo("#divAbs");
			$("<p><br>"+str+"<br><br></p>").appendTo("#divAbs");
			$("#divAbs").slideDown('fast');
			*/
/*},
		error: function() {
			alert("error!");
		}
	});
}*/

function openRelation(obj) {
	var options = "width=600,height=400,resizable=no,top=100,left=200,scrollbars=no";
	window.open(obj.href,"relation",options);
	return false;
}

function locationMap(obj) {
	var options = "width=370,height=400,resizable=no,top=100,left=200,scrollbars=no";
	window.open(obj.href,"locationMap",options);
	return false;
}