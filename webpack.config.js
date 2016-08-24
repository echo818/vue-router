var webpack = require('webpack');

module.exports = {
	entry: {
		main: './src/main.js',
		router: './src/router.js',
		jquery: './src/lib/jquery.min.js'
	},
	output: {
		path: './dist',
		publicPath: 'dist/',
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/
			},
			{
				test: /\.vue$/,
				loader: 'vue'
			}
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin(
			chunkName='jquery',
			filename='js/jquery.js'
		),
		new webpack.HotModuleReplacementPlugin()
	],
	babel: {
		presets: ['es2015','stage-0'],
		plugins: ['transform-runtime']
	},
	vue: {
		loaders: {
			js: 'babel'
		}
	},
	resolve: {
		extensions: ['','.js','.vue']
	},
	devServer: {
		inline: true,
		hot: false
	}
}