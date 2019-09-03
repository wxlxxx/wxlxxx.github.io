const glob = require('glob-all')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	assetsDir: 'assets',
	filenameHashing: false,
	productionSourceMap: false,
	configureWebpack: config => {
		const htmlFiles = glob.sync([
			'html/*.html'
		])
		htmlFiles.forEach(function(file) {
			const conf = {
				filename: file.substring(file.indexOf('html/')+('html/').length),
				template: file,
				inject: true
			}
			config.plugins.push(new HtmlWebpackPlugin(conf))
		})
	}
}