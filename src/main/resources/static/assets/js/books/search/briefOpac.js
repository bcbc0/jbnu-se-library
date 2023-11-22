
/**
미리보기 및 닫기 호출.
*/
function previewOpac(id, location) {
    var obj = document.getElementById("prevDetail_"+id);
    var sysdCtrl = id.substring(0,3)+id.substring(6);
    var ctrl = id.substring(6);

    if(obj.style.display=="block") {
        obj.style.display="none";
        $("#item_"+id + " .info").css("display","block");
        return;
    }
    else {
        if ($("#prevDetail_"+id + " ul").length > 0) {
            $("#prevDetail_"+id).css("display","block");
            $("#item_"+id + " .info").css("display","none");
        }
        else {
            $.ajax({
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                type: "GET",
                url: "/search/prevDetailOpac/?id="+id+"&loc="+location,
                dataType: "xml",
                complete: function(xhr, statusText, errorThrown){
                    if(statusText=="success") {
                        //미리보기 생성.
                        viewPreviewDetail(xhr, id);
                    }
                    else {
                        alert("preview error : "+statusText+" throws : "+errorThrown);
                    }
                }
            });
        }
    }
}

/**
 * 소장처 미리보기.
 * @param locOrder
 * @param locCnt
 * @param sysdCtrl
 * @param location
 * @return
 */
function callLocationOpac(locOrder, locCnt, sysdCtrl, location, baseUrl){
    var id = sysdCtrl + "_" + locOrder;

    if($("#holdingW_" + id).css("display") == "block") {
        $("#holdingW_" + id).hide();
        $("#availableButton_"+id).removeClass("on");
    } else {
        if ($("#holdingW_"+id + " div").length > 0) {
            $("#holdingW_" + id).show();
            $("#availableButton_"+id).addClass("on");
        } else {
            $.ajax({
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                type: "GET",
                url: "/search/prevLocOpac/?ctrl="+sysdCtrl+"&loc="+location,

                dataType: "xml",
                data: "loc="+location,
                complete: function(xhr, statusText){
                    if(statusText=="success") {
                        //소장 정보 생성.
                        viewPreviewHolding(xhr, sysdCtrl, locOrder);
                    }
                }
            });
        }
    }
}

/**
 * 소장본정보 미리보기.
 * @param locOrder
 * @param locCnt
 * @param sysdCtrl
 * @param hold_no
 * @return
 */
function callHoldInfoOpac(locOrder, locCnt, sysdCtrl, hold_no, baseUrl){

    var obj = document.getElementById("prevLoc_"+sysdCtrl+locOrder);
    if(obj) {
        if(obj.style.display=="") {
            //테이블형 보기일 시 div가 td안에 정의되어 있다. td의 display를 변경 한다.
            obj.style.display="none";
            document.getElementById("locImg_"+hold_no).src=locOpenImg;
            prevTdDisplay('hidden', sysdCtrl);
            return;
        }
        else{
            for(var i=0; i<locCnt; i++) {
                document.getElementById("prevLoc_"+sysdCtrl+i).style.display="none";
                document.getElementById("locImg_"+hold_no).src=locOpenImg;
            }
            document.getElementById("locImg_"+hold_no).src=locCloseImg;

            if(obj.innerHTML !="") {
                obj.style.display="";
            }
            else {
                prevTdDisplay('show', sysdCtrl);
                ajaxLoader("#prevLoc_"+sysdCtrl+locOrder, true, "middle");
                $.ajax({
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    type: "POST",
                    url: "http://"+baseUrl+"/search/prevLoc/"+sysdCtrl,

                    dataType: "xml",
                    data: "hold_no="+hold_no,
                    complete: function(xhr, statusText){

                        if(statusText=="success") {
                            //소장 정보 생성.
                            viewPreviewHolding(xhr, sysdCtrl, locOrder);
                        }
                    }
                });
            }
        }
    }
}
