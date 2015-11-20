'use strict';

var webpack           = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    path              = require('path'),
    srcPath           = path.join(__dirname, 'src');

module.exports = {
	target: 'web',
	cache: true,
	entry: {
		module: path.join(srcPath, 'module.js'),
		common: ['react', 'react-dom', 'immutable']
	},
	resolve: {
		root: srcPath,
		extensions: ['', '.js', '.jsx'],
		modulesDirectories: ['node_modules', 'src']
	},
	output: {
		path: path.join(__dirname, 'tmp'),
		publicPath: '',
		filename: '[name].js',
		pathInfo: true
	},

	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /.jsx?$/,
				loader: "eslint-loader",
				exclude: /node_modules/
			}
		]
	},
	eslint: {
		configFile: './.eslintrc'
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
		new HtmlWebpackPlugin({
			inject: true,
			template: 'src/index.html'
		}),
		new webpack.NoErrorsPlugin()
	],

	debug: true,
	devtool: 'eval-cheap-module-source-map',
	devServer: {
		contentBase: './tmp',
		historyApiFallback: true
	}
};