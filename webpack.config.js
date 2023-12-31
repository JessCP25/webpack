const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js'
	},
	resolve: {
        extensions: ['.js']
    },
	module: {
		rules: [{test: /\.js?$/, use: {loader: 'babel-loader'}, exclude: /node_modules/}]
	},
	plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html', // Asegúrate de que la ruta sea correcta
            filename: './index.html'
        })
    ]
}