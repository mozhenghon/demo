// JavaScript Document
var {merge} = require('webpack-merge');
var CC = require('./webpack.config.common.js');
var PC = require('./webpack.config.prod.js');
var DC = require('./webpack.config.dev.js');
module.exports = (env) => {
	switch(true){
		case env.development:
			return merge(CC,DC);
		case env.production:
			return merge(CC,PC)
		default:
			return new Error('No matching configuration was found')
	}
}