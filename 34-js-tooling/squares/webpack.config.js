const path = require('path')

const config = {
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
		publicPath: "build/"
	},
	mode: 'development',
	module: {
		rules: [{
      use: 'babel-loader',
      test: /\.js$/
    }]
	}
}

module.exports = config
