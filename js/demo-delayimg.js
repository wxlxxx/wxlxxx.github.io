$(document).ready(function(){
	$("img").each(function(){
		if ( $(this).offset().top+$(this).width()/2<$(window).height() ) {
			$(this).attr("src",$(this).attr("s-src"));
		}
	});
});
$(window).scroll(function(){
	$("img").each(function(){
		if( $(this).attr("src") == "" ){
			if ( $(this).offset().top+$(this).width()/2<$(window).height()+$(window).scrollTop() ) {
				$(this).attr("src",$(this).attr("s-src"));
			}
		}
	});
});