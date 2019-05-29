module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
    assetsDir: 'assets',
	filenameHashing: false,
	productionSourceMap: false,

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