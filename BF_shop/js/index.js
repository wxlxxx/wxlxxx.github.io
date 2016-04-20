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
	
	$('#content-2 .size-select button').click(function(){
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	});
});

