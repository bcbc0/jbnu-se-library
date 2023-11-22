// checkbox2 : 함수와 연동할 체크 박스 객체
// lngCheckAlert를 재정의해야 한다.
var flag = true;

// checkbox2를 모두 선택 또는 모두 선택해제 
function checkAllOrNone(checkbox2)
{
    // 의미 있는 체크 박스일때, 
    if (checkbox2) {
        // 여러개일 때
        if (checkbox2.length) {
         	for (i = 0; i < checkbox2.length; i++)
        		checkbox2[i].checked = flag;
        }
        else {
            checkbox2.checked = flag;
        }
    	flag = !flag;	
    }
}

// checkBox2의 개수를 리턴
function countNo(checkbox2)
{
    if (checkbox2)
        return ((checkbox2.length) ? checkbox2.length: 1);
    else
        return 0;    
}
// checkbox2 중에서 선택된 것이 하나라도 있으면, true리턴, 아무것도 선택되어 있지 않으면 false리턴
function isEverChecked(checkbox2)
{
    // 의미 있는 체크 박스일때, 
    if (checkbox2) {
        // 여러개일 때
        if (checkbox2.length) {
        	for (i = 0; i < checkbox2.length; i++)
        	    if (checkbox2[i].checked == true)
        	        return true;
        }
        else {
            if (checkbox2.checked == true)
                return true;
        }
    }
    return false;
}

// 체크 박스를 체크하였는지 확인한다.
function isValidCheckbox2(checkbox2) {
    if ((count = countNo(checkbox2)) == 0) {
        return false;
    }
    else if (!isEverChecked(checkbox2)) {
        alert(lngCheckAlert);
        return false;
    }
    return true;
}    
//자기자신, 폼이름, 체크될 체크박스이름
function checkedAll(obj, form, name) {
	var f= ( new Function( 'return ' + "document."+form ) )(); 
	if(obj.checked){
		for(var j=0; j<f.elements.length; j++){
			if(f.elements[j].type=="checkbox2"){
				if(f.elements[j].name == name){
					f.elements[j].checked = true;
				}
			}
		}
	}else{
		for(var j=0; j<f.elements.length; j++){
			if(f.elements[j].type=="checkbox2"){
				if(f.elements[j].name == name){
					f.elements[j].checked = false;
				}
			}
		}
	}	
}
