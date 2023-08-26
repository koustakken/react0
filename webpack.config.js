const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const production = process.env.NODE_ENV === 'production';

module.exports = {
	context: path.resolve(__dirname,'src'),
    entry: './index.js',
    output: {
		path: path.resolve(__dirname, 'dist'),
        filename: production? '[name].min.js' : '[name].js',
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
			},
			{
				test: /\.s(a|c)ss$/,
				exclude: /node_modules/,
                use: [
					'style-loader',
                    {
						loader:'css-loader',
						options: {
							modules: true,
						}
					},
					{
						loader:'sass-loader',
					}
				]
			}
		]
	},
	resolve: {
		extensions: ["*", ".js", ".jsx", "scss"],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Webpack & React',
			template: './index.html'
		}),
	],
	devServer: {
		port: 3000,
		hot: true,
	}, 
	mode: production? 'production' : 'development'
}