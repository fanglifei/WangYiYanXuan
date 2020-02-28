var mobile=document.getElementById('mobile');
var mail=document.getElementById('mail');
var none=document.getElementById('none');
var box=document.getElementsByClassName('bd-box');
mobile.onclick=function(){
	box[1].style.display='none';
	box[0].style.display='block';
	mobile.style.color='#333';
	mail.style.color='#999';
	none.style.display='none';
}
mail.onclick=function(){
	box[0].style.display='none';
	box[1].style.display='block';
	mail.style.color='#333';
	mobile.style.color='#999';
	none.style.display='block';
}