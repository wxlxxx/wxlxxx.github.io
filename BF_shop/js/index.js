//var docEl = document.documentElement,
//  resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//  recalc = function() {
//      docEl.style.fontSize = parseInt(100 * (docEl.clientWidth / 750)) + 'px';
//  };
//window.addEventListener(resizeEvt, recalc, false);
//document.addEventListener('DOMContentLoaded', recalc, false);



$(document).ready(function(){
	$('#content-1 .carousel').carousel({
		interval: 10000
	});
	$('#content-2 .size-select button').bind('click',function(){
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	});
	
	$('#content-d button').bind('click',function(){
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	});
	
	$('.btn-input .input-group .input-group-btn button').click(function(){
		if($(this).text()=="+"){
			var i = $(this).parent().prev('input').val();
			i=parseInt(i)+1;
			$(this).parent().prev('input').val(i);
		}else{
			var i = $(this).parent().next('input').val();
			if(i!=0){
				i=parseInt(i)-1;
				$(this).parent().next('input').val(i);
			}
		}
	});
	$('#content-A .right-tap').click(function(){
		$(this).parent().parent().css('display','none');
	});
	
	
	shopcar_num();
	touchfunc();
});


function scrollfunc(){
	if ( $('#content-2').offset().top+100<$('#content-1').height()+$(window).scrollTop() ) {
		$('#mynavbar').css('background-color','#FFFFFF');
	}

	
	$(window).scroll(function(){	
		if ( $('#content-2').offset().top+100<$('#content-1').height()+$(window).scrollTop() ) {
			$('#mynavbar').css('background-color','#FFFFFF');
		}else{
			$('#mynavbar').css('background-color','rgba(0,0,0,0)');
		}
	});
}

function touchfunc(){
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
}

function shopcar_num(){
	if($('#header .shopcar-num').text()==0){
		$('#header .shopcar-num').css('display','none');
	}
}

function fapiao(){
	if($('#fapiao-radio-1').prop("checked")){
		$('#fapiao-input-1').css('display','block');
	}else{
		$('#fapiao-input-1').css('display','none');
	}
	
	if($('#fapiao-radio-2').prop("checked")){
		$('#fapiao-input-2').css('display','block');
	}else{
		$('#fapiao-input-2').css('display','none');
	}
}
	

