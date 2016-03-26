$(document).ready(function(){
	$('body').css('height',$(window).height());
	$('body').anystretch();
	
	$('#search-input').keyup(function(){
		var searchText =$('#search-input').val();
		$.get('http://api.bing.com/qsonhs.aspx?q='+searchText,function(data){
			var d =data.AS.Result[0].Suggests;
			var str='';
			for(var i=0;i<d.length;i++){
				str+= '<li class="list-group-item">' +d[i].Txt+ '</li>';
			}
			$('#search-result').html(str);
			$('#search-result').css('display','block');
		},'json');
		$('#search-result').css('display','block');
	});
	$(document).click(function(){
		$('#search-result').css('display','none');
	});
	$(document).delegate('#search-result li','click',function(){
		var str2 =$(this).text();
		$('#search-input').val(str2);
	});
});
		