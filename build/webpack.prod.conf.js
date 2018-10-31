const path = require('path')
const Webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')


module.exports = {
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [
						{
							loader: 'css-loader',
							options: {
								minimize: true
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								ident: 'postcss',
								plugins: [
									require('autoprefixer')({
										browsers: ['last 5 versions']
									})
								]
							}
						},
						{
							loader: 'sass-loader'
						}
					]
				})
			},
			{
				test: /\.(woff|svg|eot|ttf)\??.*$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10000,
							name: 'fonts/[name].[ext]',
							outputPath: 'assets/',
							publicPath: './'
						}
					}
				],
				exclude: /images/
			},
			{
				test: /\.(jpg|png|svg|gif)\??.*$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 5000,
							name: 'images/[name].[ext]',
							publicPath: './'
						}
					}
				],
				exclude: /fonts/
			},
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env'],
						plugins: ['transform-runtime']
					}
				}
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("assets/[name].bundle.css"),
		new Webpack.optimize.UglifyJsPlugin(),
		new Webpack.optimize.CommonsChunkPlugin({
			async: 'async-common',
			children: true,
			minChunks: 2
		}),
		new Webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: Infinity
		}),
		new Webpack.optimize.CommonsChunkPlugin({
		    name: 'manifest',
		    minChunks: Infinity
		}),
		new Webpack.DefinePlugin({
	      'process.env.NODE_ENV': JSON.stringify('production')
	    }),
		new CleanWebpackPlugin('dist',{root: path.resolve(__dirname, '../')})
	]
}