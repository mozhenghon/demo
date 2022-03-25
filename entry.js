// JavaScript Document
import './index.css';
import imgsrc from './m.png';
import text from './a.txt';
import a1 from './a.xml';
import a2 from './a.csv';
import yaml from './a.yaml';
import toml from './a.toml';
import json5 from './a.json5';
import './download/font_cin4wsu0u3e/iconfont.css';
import $ from './jquery.js';
import './async.js';
var img = document.createElement('img');
img.src = imgsrc;
document.body.appendChild(img);
var div = document.createElement('div');
div.textContent = text;
document.body.appendChild(div);
console.log(8);
console.log(a1);
console.log(a2);
var a = document.createElement('a');
console.log(yaml);
console.log(toml);
console.log(json5);
function getString(){
	return new Promise((resolve,reject) => {
		setTimeout(() =>{
			resolve('hello');
		},2000);
	})
};
async function hello(){
	var string = await getString();
	console.log(string);
};
hello();
$('#webpack').css('color','yellow').css('background','red').css('width','200px').css('height','200px');
var button = document.createElement('button');
button.textContent = '点击执行加法运算';
button.addEventListener('click',() => {
	import(/*webpackChunkName: 'math', webpackPrefetch: true */'./math.js').then(({add})=>{
		alert(add(10,15));
	});
});
document.body.appendChild(button);