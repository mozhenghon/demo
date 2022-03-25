// JavaScript Document
function getmou(){
	return import('./jquery').then(({default:$}) => {
		$('#hehe').css('color','yellow').css('background','red').css('width','200px').css('height','200px');
	})
}
getmou().then()