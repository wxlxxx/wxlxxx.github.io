$(document).ready(function(){
	var hasshow =true;
	$('#menu-tap').click(function(){
		if (hasshow) {
			$('#left-menu').animate({left:"-200px"},200);
			$(this).animate({left:"200px"},200);
			$(this).html('>>展开');
			hasshow=false;
		} else{
			$('#left-menu').animate({left:"0px"},200);
			$(this).animate({left:"0px"},200);
			$(this).html('<<收起')
			hasshow=true;
		}
		
	});
	
	
});
