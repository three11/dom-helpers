const UnminifiedWebpackPlugin = require('unminified-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: './src/dom-helpers.js',
	output: {
		filename: 'dom-helpers.min.js',
		library: 'AnimateMe',
		libraryTarget: 'umd'
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				loader: 'babel-loader'
			}
		]
	},
	plugins: [new UnminifiedWebpackPlugin()]
};
