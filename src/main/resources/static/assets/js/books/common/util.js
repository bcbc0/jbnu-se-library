function formatComma(argStr){
    /*
    *********************************************************************************************************
    *   함수설명  : 숫자를 세자리마다 컴마를 찍은 형식으로 바꾸어 준다.
    * argStr    : argument
    ***********************************************************************************************************
    */
 if (argStr == null)  return;
 var argStr = argStr + ""; //숫자인 경우 문자열로 변환
 var rule = /[^0-9-.]/g;  // 숫자, 부호 및 소수점 이외의 데이터 제거

 argStr = getFilledCommaStr(argStr.replace(rule, ""));
 return argStr;
}

function getFilledCommaStr(argNumber) {
    /*
    *********************************************************************************************************
    *   함수설명  : 숫자에 천단위로 ','를 붙여서 반환
    * argNumber   : 숫자
    ***********************************************************************************************************
    */
        argNumber = argNumber.toString();

        if (isEmpty(argNumber))  return argNumber;

        // 숫자 항목에서 부호(-), 소수점(.) 체크
        var sourceStr = trim(argNumber);
        var signStr   = ""
        var dotStr    = "";

        if (sourceStr.substring(0, 1) == "-") {
            signStr   = "-";
            sourceStr = sourceStr.substring(1, sourceStr.length);
        }
        if (sourceStr.indexOf(".") >= 0) {
            dotStr    = sourceStr.substring(sourceStr.indexOf("."), sourceStr.length);
            sourceStr = sourceStr.substring(0, sourceStr.indexOf("."));
        }

        var sourceLen = sourceStr.length;
        var filledStr = "";
        var checkIdx  = 0;

        for (var idx = sourceLen - 1; idx >= 0; idx--) {
            if (checkIdx++ % 3 == 0 && idx != sourceLen -1) {
                filledStr = "," + filledStr;
                checkIdx = 1;
            }
            filledStr = sourceStr.substring(idx, idx + 1) + filledStr;
        }
        return signStr + filledStr + dotStr;
}

function isEmpty(str){
    /*
    *********************************************************************************************************
    *   함수설명  : 문자열이 빈문자열 혹은 공백만 있는 문자열이지 검사한다.
    * str    : 문자열
    ***********************************************************************************************************
    */
 if (trim(str) == '') return true;
 return false;

}

function lTrim(str){
    /*
    *********************************************************************************************************
    *   함수설명  : 문자열에서 왼쪽의 공백을 제거한다.
    * str    : 문자열
    ***********************************************************************************************************
    */
  var i;
  i = 0;
  while (str.substring(i,i+1) == ' ' || str.substring(i,i+1) == '　')  i = i + 1;
  return str.substring(i);
}

function rTrim(str){
    /*
    *********************************************************************************************************
    *   함수설명  : 문자열에서 오른쪽의 공백을 제거한다.
    * str    : 문자열
    ***********************************************************************************************************
    */


  var i = str.length - 1;
  while (i >= 0 && (str.substring(i,i+1) == ' ' || str.substring(i,i+1) == '　')) i = i - 1;
  return str.substring(0,i+1);
}

function trim(str){
    /*
    *********************************************************************************************************
    *   함수설명  : 문자열에서 양쪽의 공백을 제거한다.
    * str    : 문자열
    ***********************************************************************************************************
    */
    if( str == "" || str.length ==0 ) 
    {
      return str; 
    } 
    else
    {
      return(lTrim(rTrim(str)));
    }   
}

String.prototype.replaceAll = function (ori, rep) {
	/*
    *********************************************************************************************************
    * 함수설명  : 문자열 내 해당되는 모든 문자를 치환한다.
    * 사용법 : str.replaceAll('ori', 'rep')
    ***********************************************************************************************************
    */
	return this.split(ori).join(rep);
}

function dateFormat(argDate, splitChar) {
	/*
    *********************************************************************************************************
    *  함수설명  : yyyyMMdd형식의 날짜를 splitChar로 분리
    *  argDate   : argument
    ***********************************************************************************************************
    */
	 if (argDate == null || argDate.length != 8)  return;
	
	 var year = argDate.substr(0,4);
	 var month = argDate.substr(4,2);
	 var day = argDate.substr(6,2);
	
	 return year+splitChar+month+splitChar+day; 
}


/*
 *********************************************************************************************************
 *   함수설명  : 날짜 형식 체크
 *   param    : 문자열
 ***********************************************************************************************************
 */
function isValidDate(param) {
    try
    {
    	// 날짜에서 - 제거
        param = param.replace(/-/g,'');
        
        //월까지만 넘어오는 경우 날짜는 기본 1일로 세팅
        if(param.length == 6){
        	param=param+'01';
        }

        // 자리수가 맞지않을때
        if( isNaN(param) || param.length!=8 ) {
            return false;
        }
         
        var year = Number(param.substring(0, 4));
        var month = Number(param.substring(4, 6));
        var day = Number(param.substring(6, 8));

        var dd = day / 0;

         
        if( month<1 || month>12 ) {
            return false;
        }
         
        var maxDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var maxDay = maxDaysInMonth[month-1];
         
        // 윤년 체크
        if( month==2 && ( year%4==0 && year%100!=0 || year%400==0 ) ) {
            maxDay = 29;
        }
         
        if( day<=0 || day>maxDay ) {
            return false;
        }
        return true;

    } catch (err) {
        return false;
    }                       
}