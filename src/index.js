window.$ = window.jQuery = require('jquery')


require('./style/index.scss')


if($('#vueApp_paginator').length > 0){
	require.ensure([],function(){
		const _ = require('./script/Paginator.js')
	},'Paginator')
}


if($('#App_mazecanvas').length > 0){
	require.ensure([],function(){
		const _ = require('./script/mazecanvas.js')
	},'mazecanvas')
}