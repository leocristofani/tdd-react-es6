var webpack = require("webpack"),
    path    = require("path");

module.exports = function (config) {
	config.set({
		basePath: "",
		frameworks: ["jasmine"],
		files: [
			"./tests/**/*.spec.js"
		],
		preprocessors: {
			"./tests/**/*.spec.js": ["webpack"]
		},
		webpack: {
			module: {
				loaders: [
					{
						test: /.jsx?$/,
						loader: 'babel-loader',
						exclude: /node_modules/,
						query: {
							presets: ['es2015', 'react']
						}
					}
				]
			}
		},
		webpackMiddleware: {
			noInfo: true
		},
		plugins: [
			require("karma-webpack"),
			require("karma-jasmine"),
			require("karma-chrome-launcher")
		],
		reporters: ["dots"],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ["Chrome"],
		singleRun: false
	});
};