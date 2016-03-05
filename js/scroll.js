$(document).ready(function(){
	$('#list-group a').mouseover(function(){
		$('#list-group a').removeClass('active');
		$(this).addClass('active');
	});
	$('#list-group').children().eq(0).click(function(){
		$('html,body').animate({scrollTop: '0px'}, 400);
	});
	$('#list-group').children().eq(1).click(function(){
		$('html,body').animate({scrollTop: '2944px'}, 400);
	});
	$('#list-group').children().eq(2).click(function(){
		$('html,body').animate({scrollTop: '5716px'}, 400);
	});
	$('#list-group').children().eq(3).click(function(){
		$('html,body').animate({scrollTop: '5716px'}, 400);
	});
	$('#list-group').children().eq(4).click(function(){
		$('html,body').animate({scrollTop: '6376px'}, 400);
	});
	$('#list-group').children().eq(5).click(function(){
		$('html,body').animate({scrollTop: '8130px'}, 400);
	});
	// $('#list-group').children().eq(3).click(function(){
	// 	$('html,body').animate({scrollTop: '600px'}, 200);
	// });

	$(window).scroll(function() {
		if ($('html,body').scrollTop()<2944) {
			$('#list-group a').removeClass('active');
			$('#list-group').children().eq(0).addClass('active');
		} else if ($('html,body').scrollTop()<5716){
			$('#list-group a').removeClass('active');
			$('#list-group').children().eq(1).addClass('active');
		} else if ($('html,body').scrollTop()<6376){
			$('#list-group a').removeClass('active');
			$('#list-group').children().eq(3).addClass('active');
		} else if ($('html,body').scrollTop()<8130){
			$('#list-group a').removeClass('active');
			$('#list-group').children().eq(4).addClass('active');
		} else{
			$('#list-group a').removeClass('active');
			$('#list-group').children().eq(5).addClass('active');
		};
	});

	
});