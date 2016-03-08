$(document).ready(function(){
//	alert($('html,body').scrollTop());
	$('#list-group a').mouseover(function(){
		$('#list-group a').removeClass('active');
		$(this).addClass('active');
	});
	$('#list-group').children().eq(0).click(function(){
		$('html,body').animate({scrollTop: '0px'}, 400);
	});
	$('#list-group').children().eq(1).click(function(){
		$('html,body').animate({scrollTop: '3444px'}, 400);
	});
	$('#list-group').children().eq(2).click(function(){
		$('html,body').animate({scrollTop: '6716px'}, 400);
	});
	$('#list-group').children().eq(3).click(function(){
		$('html,body').animate({scrollTop: '6716px'}, 400);
	});
	$('#list-group').children().eq(4).click(function(){
		$('html,body').animate({scrollTop: '7376px'}, 400);
	});
	$('#list-group').children().eq(5).click(function(){
		$('html,body').animate({scrollTop: '9130px'}, 400);
	});
	// $('#list-group').children().eq(3).click(function(){
	// 	$('html,body').animate({scrollTop: '600px'}, 200);
	// });

	$(window).scroll(function() {
		if ($('html,body').scrollTop()<3444) {
			$('#list-group a').removeClass('active');
			$('#list-group').children().eq(0).addClass('active');
		} else if ($('html,body').scrollTop()<6716){
			$('#list-group a').removeClass('active');
			$('#list-group').children().eq(1).addClass('active');
		} else if ($('html,body').scrollTop()<7376){
			$('#list-group a').removeClass('active');
			$('#list-group').children().eq(3).addClass('active');
		} else if ($('html,body').scrollTop()<9130){
			$('#list-group a').removeClass('active');
			$('#list-group').children().eq(4).addClass('active');
		} else{
			$('#list-group a').removeClass('active');
			$('#list-group').children().eq(5).addClass('active');
		};
	});

	
});