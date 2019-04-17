module.exports = {
	configureWebpack: config => {
		config.externals = {
	      createjs: "createjs"
	    }
	}
}