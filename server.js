// JavaScript Document
var http = require('http');
var app = http.createServer((req,res)=>{
	if (req.url == '/api/hello'){
		res.end('hello node');
	}
});
app.listen(9000,'localhost',() => {
	console.log('localhost:9000');
});