
/**
 * ajax loader show/hidden
 * @param id
 * @param isShow
 * @return
 */
function ajaxLoader(id, isShow, size) {
	if(isShow) {
		$("<div style=\"width:100%;height:100%;text-align:center;vertical-align:middle;\" ><img src=\""+imgPath+"solution/common/ico/ajax-loader_"+size+".gif\" alt=\"ajax loader\" title=\"ajax loader\" /></div>").appendTo(id);
		$(id).css("display","");
	}
	else {
		$(id).html("");
		$(id).css("display","none");
	}
}