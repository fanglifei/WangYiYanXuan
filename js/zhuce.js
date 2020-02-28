var account=document.getElementById('inpt-account');
var pw1=document.getElementById('inpt-pw');
var pw2=document.getElementById('inpt-pw2');
var phone=document.getElementById('inpt-phone');
var sms=document.getElementById('inpt-sms');
var btn=document.getElementsByClassName('b-btn');
var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;//邮箱正则
var reg1=/^([a-zA-Z]|[0-9]{6,16})$/;//密码正则
var reg2=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;//手机号码正则
// 创建事件方法
function focus(element){//获取焦点事件
	if(element==pw1||element==pw2){
		element.type='password';
	}
	if(element.style.color=='red'){
		element.style.color='#333';
		element.value='';
	}
}
function change(element,reg){//change改变事件
	if(element==pw2&&reg==undefined){
		if(pw2.value!==pw1.value){
			element.style.color='red';
			pw2.type='text';
			pw2.value='两次密码不一致哦';
		}
		return;
	}
	if(!reg.test(element.value)){
		element.style.color='red';
		element==account?element.value='邮箱格式错误请重新输入':element==pw1?element.value='密码格式错误':
		element==phone?element.value='手机号码不对哦':''
	}
	if(element==pw1&&!reg.test(element.value)){
		element.type='text';
	}
}
// 绑定监视器
account.addEventListener('change',function(){
    change(this,reg);
},false);
account.addEventListener('focus',function(){
	focus(this);
},false);

pw1.addEventListener('change',function(){
    change(this,reg1);
},false);
pw1.addEventListener('focus',function(){
	focus(this);
},false);

pw2.addEventListener('change',function(){
    change(this);
},false);
pw2.addEventListener('focus',function(){
	focus(this);
},false);

phone.addEventListener('change',function(){
    change(this,reg2);
},false);
phone.addEventListener('focus',function(){
	focus(this);
},false);

//获取手机验证码倒计时
var time=60;
btn[0].onclick=function(){
	time--;
	btn[0].innerHTML=time+'s后重新获取';
	if(time<0){
		time=60;
		btn[0].innerHTML='获取验证码';
		return;
	}
	setTimeout(btn[0].onclick,1000);
}

//用户条款
var gou=document.getElementById('gou');
var img=document.getElementById('imggou');
var b=true;
gou.onclick=function(){
	if(b){
		img.style.display='inline-block';
		b=false;
	}else{
		img.style.display='none';
		b=true;
	}
}
