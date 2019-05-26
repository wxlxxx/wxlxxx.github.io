module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',

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