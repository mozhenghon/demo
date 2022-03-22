// JavaScript Document
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
var yaml = require('yaml');
var toml = require('toml');
var json5 = require('json5');
var path = require('path');
var ESLintPlugin = require('eslint-webpack-plugin');
module.exports = (env) => {
	console.log(env.mo);
	return {
	entry: {
		index:'./entry.js',
		another:'./a.js'
	},
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:'scripts/[name].[contenthash].js',
		clean:true
	},
	devtool:'inline-source-map',
	devServer:{
		static:'./dist',
		liveReload:true,
		hot:true
	},
	module:{
		rules:[
			{
				test:/\.css$/,
				use:['style-loader','css-loader'],
				generator:{
					filename:'./css/[contenthash][ext]'
				}
			},
			{
				test:/\.(csv|tsv)$/,
				loader:'csv-loader'
			},
			{
				test:/\.xml$/,
				loader:'xml-loader'
			},
			{
				test:/\.html$/,
				loader:'html-loader'
			},
			{
				test:/\.yaml$/,
				type:'json',
				parser:{
					parse:yaml.parse
				}
			},
			{
				test:/\.toml$/,
				type:'json',
				parser:{
					parse:toml.parse
				}
			},
			{
				test:/\.json5$/,
				type:'json',
				parser:{
					parse:json5.parse
				}
			},
			{
				test:/\.(png|jpg|jpeg|gif)$/i,
				type:'asset',
				parser:{
					dataUrlCondition:{
						maxSize:100 *1024
					}
				}
			},
			{
				test:/\.txt$/,
				type:'asset/source'
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type:'asset/resource',
				generator:{
					filename:'./font/[contenthash][ext]'
				}
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:'./index.ejs',
			filename:'i.html'
	}),new ESLintPlugin({
		    context:'./dist/scripts',
			files:['entry.js']
	})
	],
	optimization:{
		splitChunks:{
			cacheGroups:{
			    vendor:{
				    test: /[\\/]node_modules[\\/]/,
					name:'vendors',
					chunks:'all'
				}
			}
		}
	},
	mode:env.production?'production':'development'
}
}