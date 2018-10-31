var canvas = document.getElementById("App_mazecanvas")
var context = canvas.getContext("2d")
var imgurl = document.getElementById("App_mazecanvas").getAttribute('data-imgurl')
var startX = document.getElementById("App_mazecanvas").getAttribute('data-startX') * 1
var startY = document.getElementById("App_mazecanvas").getAttribute('data-startY') * 1
var endX = document.getElementById("App_mazecanvas").getAttribute('data-endX')
var endY = document.getElementById("App_mazecanvas").getAttribute('data-endY')
var startSpotStyle = "#0000FF"
var endSpotStyle = "#20c997"

var mazeImg = new Image()
mazeImg.onload = function(){
	canvas.width = mazeImg.width+30
	canvas.height = mazeImg.height+30
	drawWhite(0, 0, canvas.width, canvas.height)
	context.drawImage(mazeImg, 15, 15)
	drawSpot(startX, startY, startSpotStyle)
	drawSpot(endX, endY, endSpotStyle)
}
mazeImg.src = imgurl



function drawSpot(x, y, style){
	context.beginPath()
	context.rect(x, y, 15, 15)
	context.closePath()
	context.fillStyle = style
    context.fill()
}


function move(e){
	var newX, newY;
	e = e || window.event
	switch (e.keyCode) {
		case 38:
			newX = startX;
            newY = startY - 3;
			break;
		case 37:
			newX = startX - 3;
            newY = startY;
			break;
		case 40:
			newX = startX;
            newY = startY + 3;
			break;
		case 39:
			newX = startX + 3;
            newY = startY;
			break;
		default: return;
	}
	if(canMove(newX,newY)){
		drawWhite(startX, startY,15, 15)
		drawSpot(newX, newY, startSpotStyle)
	    startX = newX
	    startY = newY
	}
}


function canMove(destX, destY){
	var imgData = context.getImageData(destX, destY, 15, 15)
    var data = imgData.data
    var flag = true
    for(var i = 0; i < 4 * 15 * 15; i += 4){
    	if(data[i] === 0 && data[i + 1] === 0 && data[i + 2] === 0){
    		flag =  false
    		break;
    	}
    }
    return flag
}


function drawWhite(x, y, w, h) {
    context.beginPath()
    context.rect(x, y, w, h)
    context.closePath()
    context.fillStyle = "white"
    context.fill()
}



window.addEventListener("keydown", move, true)