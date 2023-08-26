const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const production = process.env.NODE_ENV === 'production';

module.exports = {
	context: path.resolve(__dirname,'src'),
    entry: './index.tsx',
    output: {
		path: path.resolve(__dirname, 'dist'),
        filename: production? '[name].min.js' : '[name].js',
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: {
				  loader: "babel-loader",
				  options: {
					presets: [
					  "@babel/preset-env",
					  "@babel/preset-react",
					  "@babel/preset-typescript",
					],
				  },
				},
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
						loader: "css-modules-typescript-loader",
					},
					{
						loader:'sass-loader',
					}
				]
			}
		]
	},
	resolve: {
		extensions: [".*",".ts",".tsx",".js",".scss"],
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