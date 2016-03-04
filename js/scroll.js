$(document).ready(function(){
	$('#list-group a').mouseover(function(){
		$('#list-group a').removeClass('active');
		$(this).addClass('active');
	});
	$('#list-group').children().eq(0).click(function(){
		$('html,body').animate({scrollTop: '0px'}, 400);
	});
	$('#list-group').children().eq(1).click(function(){
		$('html,body').animate({scrollTop: '700px'}, 400);
	});
	$('#list-group').children().eq(2).click(function(){
		$('html,body').animate({scrollTop: '2400px'}, 400);
	});
	// $('#list-group').children().eq(3).click(function(){
	// 	$('html,body').animate({scrollTop: '600px'}, 200);
	// });

	$(window).scroll(function() {
		if ($('html,body').scrollTop()<700) {
			$('#list-group a').removeClass('active');
			$('#list-group').children().eq(0).addClass('active');
		} else if ($('html,body').scrollTop()<2200){
			$('#list-group a').removeClass('active');
			$('#list-group').children().eq(1).addClass('active');
		} else{
			$('#list-group a').removeClass('active');
			$('#list-group').children().eq(2).addClass('active');
		};
	});

	
});