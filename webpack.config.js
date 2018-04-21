var webpack = require('webpack');
module.exports = {
	entry: "./src/index.js",
	output: {
		path: "/mnt/c/Users/feral/Documents/Github/interview/dist/assets",
		filename: "bundle.js",
		publicPath: "assets",

	},
	devServer: {
		inline: true,
		contentBase: './dist',
		port: 3000
	},
	module: {
		loaders: [
		{
			test: /\.js$/,
			loader: ["babel-loader"]

 		}	

		]
	}

}

