function doReserve(obj) {
	var href = obj.href;

	if(href.indexOf('?') != -1) {
		href = href + '&popup=true';
	} else {
		href = href + '?popup=true';
	}

	var options = "width=760,height=520,resizable=no,top=100,left=200,scrollbars=yes";
	window.open(href,"reserve",options);
	return false;
}

function doBranch(obj) {
	var href = obj.href;

	if(href.indexOf('?') != -1) {
		href = href + '&popup=true';
	} else {
		href = href + '?popup=true';
	}

	var options = "width=760,height=520,resizable=no,top=100,left=200,scrollbars=yes";
	window.open(href,"branch",options);
	return false;
}

function doPreserve(obj) {
	var href = obj.href;

	if(href.indexOf('?') != -1) {
		href = href + '&popup=true';
	} else {
		href = href + '?popup=true';
	}

	var options = "width=760,height=520,resizable=no,top=100,left=200,scrollbars=yes";
	window.open(href,"preserve",options);
	return false;
}

function doLoanreq(obj) {
	var href = obj.href;

	if(href.indexOf('?') != -1) {
		href = href + '&popup=true';
	} else {
		href = href + '?popup=true';
	}

	var options = "width=760,height=420,resizable=no,top=200,left=300,scrollbars=yes";
	window.open(href,"loanreq",options);
	return false;
}

function doPosprint(obj){
	var href = obj.href;

	if(href.indexOf('?') != -1) {
		href = href + '&popup=true';
	} else {
		href = href + '?popup=true';
	}

	var options = "width=400,height=300,resizable=no,top=200,left=300,scrollbars=yes";
	window.open(href,"miniprint",options);
	return false;
}

//안산1대  CDNET전용
function cdNetPopup(url){
	var href = url;

	if(href.indexOf('?') != -1) {
		href = href + '&popup=true';
	} else {
		href = href + '?popup=true';
	}

	var options = "width=360,height=250,resizable=no,top=200,left=300,scrollbars=yes";
	window.open(url,"",options);
}

//수업용 비도서
function doNonBook(obj) {
	var href = obj.href;

	if(href.indexOf('?') != -1) {
		href = href + '&popup=true';
	} else {
		href = href + '?popup=true';
	}

	var options = "width=800,height=520,resizable=no,top=100,left=200,scrollbars=yes";
	window.open(href,"nonbook",options);
	return false;
}