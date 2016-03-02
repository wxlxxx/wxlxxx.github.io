$(document).ready(function(){
	$('#list-group a').mouseover(function(){
		$('#list-group a').removeClass('active');
		$(this).addClass('active');
	});
	$('#list-group').children().eq(0).click(function(){
		$('#content-text').animate({scrollTop: '0px'}, 200);
	});
	$('#list-group').children().eq(1).click(function(){
		$('#content-text').animate({scrollTop: '600px'}, 200);
	});
	$('#list-group').children().eq(2).click(function(){
		$('#content-text').animate({scrollTop: '1200px'}, 200);
	});
	$('#list-group').children().eq(3).click(function(){
		$('#content-text').animate({scrollTop: '1800px'}, 200);
	});

	$("#content-text").scroll(function() {
		if ($('#content-text').scrollTop()<600) {
			$('#list-group a').removeClass('active');
			$('#list-group').children().eq(0).addClass('active');
		} else if ($('#content-text').scrollTop()<1200){
			$('#list-group a').removeClass('active');
			$('#list-group').children().eq(1).addClass('active');
		} else if ($('#content-text').scrollTop()<1800){
			$('#list-group a').removeClass('active');
			$('#list-group').children().eq(2).addClass('active');
		} else if ($('#content-text').scrollTop()<2400){
			$('#list-group a').removeClass('active');
			$('#list-group').children().eq(3).addClass('active');
		};
	});

	
});