var docEl = document.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function() {
        docEl.style.fontSize = 100 * (docEl.clientWidth / 750) + 'px';
    };
window.addEventListener(resizeEvt, recalc, false);
document.addEventListener('DOMContentLoaded', recalc, false);

$(document).ready(function(){
	$('#carousel-example-generic').touchwipe({
		wipeLeft:function(){
			$('#carousel-example-generic').carousel('next');
		},
		wipeRight:function(){
			$('#carousel-example-generic').carousel('prev');
		},
		min_move_x:100,
		preventDefaultEvents:true
	});
	$('#content-1 .carousel').carousel({
		interval: 10000
	});
	
	$('#content-2 .size-select button').click(function(){
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	});
	
	
	
	
	if ( $('#content-2').offset().top+20<$('#content-1').height()+$(window).scrollTop() ) {
		$('#mynavbar').css('background-color','rgba(0,0,0,0.2)');
	}

	
	$(window).scroll(function(){
		
		
		if ( $('#content-2').offset().top+20<$('#content-1').height()+$(window).scrollTop() ) {
			$('#mynavbar').css('background-color','rgba(0,0,0,0.2)');
		}else{
			$('#mynavbar').css('background-color','rgba(0,0,0,0)');
		}
	
		
	});

});

