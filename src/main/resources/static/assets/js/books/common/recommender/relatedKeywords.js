$(document).ready(function(){
	// 추천시스템 연관검색어
	getRecommendRelatedKeywords(keyword4rk.replace("'",""));
});
/**
 * 추천시스템(Recommender)에서 
 * 연관검색어 정보 가져오기
 * @param query
 * @param db
 * @param howMany
 * @returns
 */
function getRecommendRelatedKeywords(query) {
	var and = encodeURIComponent('&');
	$.ajax({
		type: "POST",
		url: "/recommender/relatedKeywords",
		dataType: "json",
		//data: "verb=list&db="+ db + "&query=" + encodeURIComponent(query) + "&cpp=" + howMany,
		data: "query=" + encodeURIComponent(query),
		success: function(result) {
			var mode = result.mode;
			
			var items;
			if(mode == "recommender") {
				items = result.items;
			} else if(mode == "dataIr") {
				items = result.result.list.data;
			}
			
			var msg = result.msg;
			var howMany = result.howMany;
			if(items != undefined && items.length>0) {
				var outputCnt = 0;
				var isOutput = true;
				
				var html = "<dl>";
				html = html + "<dt>"+msg.NAME_RELATED_KEYWORD+"</dt>";
				html = html + "<dd><ul>";
				
				$(items).each(function(){
					var datQuery;
					if(mode == "recommender") {
						datQuery = this.keyword;
					} else if(mode == "dataIr") {
						datQuery = this.DISP01;
					}
					//검색어와 datQuery가 같을 시 출력안함
					//출력갯수가 howMany와 같을 시 출력안함 (데이터바우저 색인에서 검색 시 query 자기자신 결과값을 제외시키기 위해 howMany보다 1개 더 많이 가져옴.)
					if((query == datQuery) || (outputCnt == howMany)) {
						isOutput = false;
					}
					//console.log("datQuery : " + datQuery);
					//console.log("isOutput : " + isOutput);
					
					if(isOutput) {
						html = html + '<li><a href="/outlink?moduleId=search&linkType=ibSearchQuery&targetUrl='+serverDomain+'/search/tot/result?st=KWRD'+and+'si=TOTAL'+and+'service_type=brief'+and+'q='+encodeURIComponent(datQuery)+'">' + datQuery + '</a></li>';
						outputCnt++;
					}
					isOutput = true;
				});
				html = html + "</ul></dd>";
				html = html + "</dl>";
				
				$(html).appendTo("#relatedKeyword");
			}
		}
	})
}