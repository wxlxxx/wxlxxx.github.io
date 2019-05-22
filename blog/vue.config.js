module.exports = {
	configureWebpack: config => {
		config.externals = {
	      createjs: {
	          commonjs: 'createjs',
	          amd: 'createjs',
	          root: 'createjs'
	      }
	    }
	}
}